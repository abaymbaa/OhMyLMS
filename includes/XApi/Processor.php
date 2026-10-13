<?php
/**
 * Outbox processor.
 *
 * @package OhMyLMS\XApi
 */

namespace OhMyLMS\XApi;

defined( 'ABSPATH' ) || exit;

// phpcs:disable WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- The only queries here are GET_LOCK and RELEASE_LOCK, which have no cacheable result.

/**
 * Drains the outbox: builds each statement, sends batches, and records the outcome.
 *
 * It runs from WP-Cron every minute and, where the server can finish the response first
 * (PHP-FPM), at the end of the request that queued something. It runs under a database lock,
 * so overlapping runs never send the same row twice.
 */
final class Processor {

	const HOOK       = 'ohmylms_xapi_process';
	const PRUNE_HOOK = 'ohmylms_xapi_prune';
	const LOCK       = 'ohmylms-xapi-outbox';
	const BATCH      = 50;
	const HEALTH     = 'ohmylms_xapi_health';

	/**
	 * Whether a shutdown run has been registered for this request.
	 *
	 * @var bool
	 */
	private static $scheduled = false;

	/**
	 * Send what is due.
	 *
	 * @param int $limit  Rows per batch.
	 * @param int $budget Seconds this run may take before it stops and leaves the rest for the next one.
	 * @return int Statements delivered.
	 */
	public static function process( $limit = self::BATCH, $budget = 20 ) {
		global $wpdb;
		if ( ! Settings::enabled() ) {
			return 0;
		}
		$lock = self::LOCK . '-' . md5( $wpdb->prefix );
		if ( '1' !== (string) $wpdb->get_var( $wpdb->prepare( 'SELECT GET_LOCK(%s, 0)', $lock ) ) ) {
			return 0;
		}
		$sent     = 0;
		$deadline = microtime( true ) + max( 1, (int) $budget );
		try {
			while ( microtime( true ) < $deadline ) {
				$rows = Outbox::due( $limit );
				if ( ! $rows ) {
					break;
				}
				$batch = array();
				foreach ( $rows as $row ) {
					$statement = self::prepare( $row );
					if ( $statement ) {
						$batch[] = array(
							'row'       => $row,
							'statement' => $statement,
						);
					}
				}
				if ( $batch ) {
					$outcome = self::deliver( $batch );
					$sent   += $outcome['sent'];
					if ( $outcome['hold'] ) {
						break;
					}
				}
				if ( count( $rows ) < $limit ) {
					break;
				}
			}
		} finally {
			$wpdb->get_var( $wpdb->prepare( 'SELECT RELEASE_LOCK(%s)', $lock ) );
		}
		if ( $sent > 0 ) {
			self::health( array( 'last_success' => time() ) );
		}

		return $sent;
	}

	/**
	 * Build (or load) the statement for a row. Rows that cannot produce one are settled here.
	 *
	 * @param array $row Outbox row.
	 * @return array|null
	 */
	private static function prepare( array $row ) {
		if ( ! empty( $row['statement'] ) ) {
			$stored = json_decode( $row['statement'], true );
			if ( is_array( $stored ) ) {
				return $stored;
			}
		}
		try {
			$statement = Materializer::statement( $row );
		} catch ( SkipStatement $skip ) {
			Outbox::skip( $row['id'], $skip->getMessage() );

			return null;
		} catch ( \Throwable $error ) {
			Outbox::retry( $row, $error->getMessage() );

			return null;
		}
		Outbox::store_statement( $row['id'], wp_json_encode( $statement, JSON_UNESCAPED_UNICODE ) );

		return $statement;
	}

	/**
	 * Send a batch and settle its rows according to the LRS response.
	 *
	 * @param array[] $batch Items with row and statement.
	 * @return array sent (int), hold (bool).
	 */
	private static function deliver( array $batch ) {
		$result = LrsClient::post( wp_list_pluck( $batch, 'statement' ) );
		$ids    = array_map( 'absint', wp_list_pluck( wp_list_pluck( $batch, 'row' ), 'id' ) );
		switch ( $result['class'] ) {
			case 'ok':
				Outbox::mark_sent( $ids );
				self::health( array( 'last_error' => '' ) );

				return array(
					'sent' => count( $ids ),
					'hold' => false,
				);
			case 'retry':
				foreach ( $batch as $item ) {
					Outbox::retry( $item['row'], $result['message'] );
				}
				self::health( array( 'last_error' => $result['message'] ) );

				return array(
					'sent' => 0,
					'hold' => false,
				);
			case 'hold':
				Outbox::hold_all( $result['message'] );
				self::health( array( 'last_error' => $result['message'] ) );

				return array(
					'sent' => 0,
					'hold' => true,
				);
		}
		// Rejected. An xAPI request is all-or-nothing, so one bad statement rejects its whole
		// batch. Send the statements one at a time to find it and still deliver the rest.
		if ( count( $batch ) > 1 ) {
			$sent = 0;
			foreach ( $batch as $item ) {
				$single = self::deliver( array( $item ) );
				$sent  += $single['sent'];
				if ( $single['hold'] ) {
					return array(
						'sent' => $sent,
						'hold' => true,
					);
				}
			}

			return array(
				'sent' => $sent,
				'hold' => false,
			);
		}
		Outbox::fail( $batch[0]['row']['id'], $result['message'] );
		self::health( array( 'last_error' => $result['message'] ) );

		return array(
			'sent' => 0,
			'hold' => false,
		);
	}

	/**
	 * Process at the end of this request when the server can close the connection first.
	 *
	 * Without that, an LRS call here would keep the learner's connection open, so such servers
	 * rely on WP-Cron alone.
	 */
	public static function soon() {
		if ( self::$scheduled || ! function_exists( 'fastcgi_finish_request' ) || wp_doing_cron() ) {
			return;
		}
		self::$scheduled = true;
		add_action(
			'shutdown',
			static function () {
				fastcgi_finish_request();
				self::process( self::BATCH, 5 );
			},
			20
		);
	}

	/**
	 * WP-Cron entry point.
	 */
	public static function run_scheduled() {
		self::process( self::BATCH, 25 );
	}

	/**
	 * Daily housekeeping.
	 */
	public static function prune() {
		$settings = Settings::all();
		Outbox::prune( (int) $settings['retention_days'] );
	}

	/**
	 * Add the every-minute schedule if nothing else registered it.
	 *
	 * @param array $schedules Cron schedules.
	 * @return array
	 */
	public static function schedules( $schedules ) {
		if ( ! isset( $schedules['ohmylms_every_minute'] ) ) {
			$schedules['ohmylms_every_minute'] = array(
				'interval' => 60,
				'display'  => __( 'Every minute', 'ohmylms' ),
			);
		}

		return $schedules;
	}

	/**
	 * Keep the cron events in step with the settings.
	 */
	public static function schedule() {
		if ( Settings::enabled() && ! wp_next_scheduled( self::HOOK ) ) {
			wp_schedule_event( time() + 60, 'ohmylms_every_minute', self::HOOK );
		}
		if ( ! wp_next_scheduled( self::PRUNE_HOOK ) ) {
			wp_schedule_event( time() + HOUR_IN_SECONDS, 'daily', self::PRUNE_HOOK );
		}
	}

	/**
	 * Delivery health shown on the admin screen: last success and last error, with times.
	 *
	 * @param array $change Fields to update; omit to only read.
	 * @return array
	 */
	public static function health( array $change = array() ) {
		$health = get_option( self::HEALTH, array() );
		$health = is_array( $health ) ? $health : array();
		if ( $change ) {
			if ( isset( $change['last_error'] ) ) {
				$change['last_error_at'] = '' === $change['last_error'] ? 0 : time();
			}
			$health = array_merge( $health, $change );
			update_option( self::HEALTH, $health, false );
		}

		return $health;
	}
}
