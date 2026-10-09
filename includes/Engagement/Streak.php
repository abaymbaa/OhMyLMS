<?php
namespace OhMyLMS\Engagement;

use OhMyLMS\Utility\Transaction;

/** One overall learning streak per learner, independent of spendable points/mastery. */
final class Streak {
	public static function now() {
		return gmdate( 'Y-m-d H:i:s', (int) apply_filters( 'ohmylms_streak_clock', time() ) ); }
	public static function timezone( $timezone ) {
		return is_string( $timezone ) && in_array( $timezone, \DateTimeZone::listIdentifiers( \DateTimeZone::ALL_WITH_BC ), true );
	}
	public static function default_timezone( $user ) {
		$saved = get_user_meta( $user, '_ohmylms_learning_timezone', true );
		if ( ! self::timezone( $saved ) ) {
			$saved = get_user_meta( $user, 'timezone', true ); }
		return self::timezone( $saved ) ? $saved : wp_timezone()->getName();
	}
	private static function initial( $user, $settings ) {
		return array(
			'user_id'        => (int) $user,
			'timezone'       => self::default_timezone( $user ),
			'current_streak' => 0,
			'longest_streak' => 0,
			'freezes'        => $settings['freezes'] ? $settings['initial_freezes'] : 0,
			'refill'         => 0,
			'cursor_date'    => null,
			'last_activity'  => null,
		);
	}
	private static function require_write( $result ) {
		if ( $result === false ) {
			throw new \RuntimeException( 'Streak persistence failed.' ); }
		return $result;
	}

	/** All read/reconcile/write paths lock the same state row. */
	private static function mutate( $user, callable $work ) {
		global $wpdb;
		$settings = StreakSettings::get();
		if ( ! $settings['enable'] || ! StreakSchema::ready() || ! $user || ! get_userdata( $user ) ) {
			return false; }
		try {
			return Transaction::run(
				static function () use ( $wpdb, $user, $settings, $work ) {
					$initial = self::initial( $user, $settings );
					$table   = StreakSchema::table( 'state' );
					self::require_write( $wpdb->query( $wpdb->prepare( "INSERT INTO $table (user_id,timezone,freezes) VALUES (%d,%s,%d) ON DUPLICATE KEY UPDATE user_id=user_id", $user, $initial['timezone'], $initial['freezes'] ) ) );
					$state = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table WHERE user_id=%d FOR UPDATE", $user ), ARRAY_A );
					if ( ! $state ) {
						throw new \RuntimeException( 'Streak state unavailable.' ); }
					foreach ( array( 'user_id', 'current_streak', 'longest_streak', 'freezes', 'refill' ) as $key ) {
						$state[ $key ] = (int) $state[ $key ]; }
					$now            = self::now();
					$today          = StreakCalendar::date( $now, $state['timezone'] );
					[$state, $days] = StreakCalendar::reconcile( $state, $today, $settings );
					foreach ( $days as $date => $status ) {
						self::day( $user, $date, $status, $state['timezone'], $now ); }
					[$state, $result] = $work( $state, $today, $settings, $now );
					self::require_write( $wpdb->update( $table, $state, array( 'user_id' => $user ) ) );
					return $result;
				}
			);
		} catch ( \Throwable $error ) {
			do_action( 'ohmylms_streak_storage_error', (int) $user, $error );
			return new \WP_Error( 'streak_storage', __( 'Could not update your learning streak. Please retry.', 'ohmylms' ), array( 'status' => 503 ) );
		}
	}

	private static function day( $user, $date, $status, $zone, $now ) {
		global $wpdb;
		self::require_write(
			$wpdb->insert(
				StreakSchema::table( 'days' ),
				array(
					'user_id'     => $user,
					'local_date'  => $date,
					'status'      => $status,
					'timezone'    => $zone,
					'recorded_at' => $now,
				)
			)
		);
	}

	/** Called only by verified persistence hooks. No activity-write REST endpoint exists. */
	public static function record( $user, $type, $source_id ) {
		if ( ! in_array( $type, array( 'lesson', 'quiz', 'practice' ), true ) || ! $source_id || strlen( (string) $source_id ) > 64 ) {
			return false; }
		$result = self::mutate(
			(int) $user,
			static function ( $state, $today, $settings, $now ) use ( $user, $type, $source_id ) {
				global $wpdb;
				if ( ! $settings[ $type ] ) {
					return array( $state, false ); }
				$events = StreakSchema::table( 'activities' );
				if ( $wpdb->get_var( $wpdb->prepare( "SELECT source_id FROM $events WHERE user_id=%d AND source_type=%s AND source_id=%s", $user, $type, (string) $source_id ) ) ) {
					return array( $state, false ); }
				self::require_write(
					$wpdb->insert(
						$events,
						array(
							'user_id'     => $user,
							'source_type' => $type,
							'source_id'   => (string) $source_id,
							'local_date'  => $today,
							'occurred_at' => $now,
						)
					)
				);
				[$state, $incremented] = StreakCalendar::practice( $state, $today, $settings );
				if ( ! $incremented ) {
					return array( $state, false ); }
				self::day( $user, $today, 'practiced', $state['timezone'], $now );
				$state['last_activity'] = $now;
				foreach ( $settings['milestones'] as $reward ) {
					if ( $state['current_streak'] < $reward['days'] ) {
						continue; }
					$milestones = StreakSchema::table( 'milestones' );
					self::require_write( $wpdb->query( $wpdb->prepare( "INSERT INTO $milestones (user_id,days,badge_id,points) VALUES (%d,%d,%s,%d) ON DUPLICATE KEY UPDATE user_id=user_id", $user, $reward['days'], $reward['badge'], $reward['points'] ) ) );
				}
				return array( $state, true );
			}
		);
		if ( $result === true ) {
			self::deliver( $user );
			do_action( 'ohmylms_streak_day_completed', (int) $user ); }
		return $result;
	}

	/** Durable milestone queue: duplicate achievements are successful retries, never new celebrations. */
	public static function deliver( $user ) {
		if ( ! StreakSettings::enabled() || ! StreakSchema::ready() ) {
			return; }
		Achievements::locked(
			$user,
			static function () use ( $user ) {
				global $wpdb;
				$table = StreakSchema::table( 'milestones' );
				foreach ( (array) $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $table WHERE user_id=%d AND status='pending'", $user ), ARRAY_A ) as $reward ) {
					$badge    = $reward['badge_id'];
					$days     = (int) $reward['days'];
					$points   = (int) $reward['points'];
					$badge_ok = ! $badge || Achievements::achievement_exists( $user, 'badge', null, null, null, $badge );
					if ( ! $badge_ok ) {
						$badge_ok = Badge::add_badge( $user, 'badge', $badge, 'Learning streak', null, null, null, true ); }
					$point_ok = ! $points || Achievements::achievement_exists( $user, 'point', null, null, $days, '', '', 'Learning streak milestone' );
					if ( ! $point_ok && Point::maybe_enable() ) {
						$point_ok = Point::add_points( $user, 'point', $points, 'Learning streak milestone', null, null, $days ); }
					if ( $badge_ok && $point_ok ) {
						$wpdb->update(
							$table,
							array( 'status' => 'complete' ),
							array(
								'user_id' => $user,
								'days'    => $days,
							)
						); }
				}
				return true;
			}
		);
	}

	public static function snapshot( $user, $history_days = 7 ) {
		$result = self::mutate(
			(int) $user,
			static function ( $state, $today ) {
				return array( $state, $state + array( 'today' => $today ) );
			}
		);
		if ( ! $result || is_wp_error( $result ) ) {
			return $result; }
		self::deliver( $user );
		global $wpdb;
		$history_days             = max( 7, min( 366, (int) $history_days ) );
		$date                     = ( new \DateTimeImmutable( $result['today'] ) )->modify( '-' . ( $history_days - 1 ) . ' days' )->format( 'Y-m-d' );
		$history                  = $wpdb->get_results( $wpdb->prepare( 'SELECT local_date,status FROM ' . StreakSchema::table( 'days' ) . ' WHERE user_id=%d AND local_date >= %s ORDER BY local_date', $user, $date ), ARRAY_A );
		$result['history']        = $history;
		$result['today_complete'] = (bool) array_filter(
			$history,
			static function ( $day ) use ( $result ) {
				return $day['local_date'] === $result['today'] && $day['status'] === 'practiced';
			}
		);
		return $result;
	}

	/** A timezone cannot move an active streak across dates or mint a second daily award. */
	public static function set_timezone( $user, $zone ) {
		if ( ! self::timezone( $zone ) ) {
			return new \WP_Error( 'streak_timezone', __( 'Choose a valid timezone identifier.', 'ohmylms' ), array( 'status' => 400 ) ); }
		return self::mutate(
			(int) $user,
			static function ( $state, $today, $settings, $now ) use ( $zone ) {
				if ( $zone === $state['timezone'] ) {
					return array( $state, true ); }
				if ( $state['current_streak'] > 0 || ( $state['last_activity'] && strtotime( $now . ' UTC' ) - strtotime( $state['last_activity'] . ' UTC' ) < DAY_IN_SECONDS ) ) {
					return array( $state, new \WP_Error( 'streak_timezone_active', __( 'Your streak timezone stays fixed while a streak is active. Change it after the streak ends and 24 hours after your last learning activity.', 'ohmylms' ), array( 'status' => 409 ) ) );
				}
				$new_today = StreakCalendar::date( $now, $zone );
				if ( $state['cursor_date'] && $new_today <= $state['cursor_date'] ) {
					return array( $state, new \WP_Error( 'streak_timezone_date', __( 'Wait until the new timezone reaches a new calendar date.', 'ohmylms' ), array( 'status' => 409 ) ) );
				}
				$state['timezone'] = $zone;
				return array( $state, true );
			}
		);
	}
}
