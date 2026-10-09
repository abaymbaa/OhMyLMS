<?php
namespace OhMyLMS\Skills;

use OhMyLMS\Assessment\Schema;
use OhMyLMS\QuestionBank\SkillMap;
use OhMyLMS\QuestionBank\VersionPublisher;

defined( 'ABSPATH' ) || exit;

/**
 * Turns grade events into skill evidence, exactly once per event.
 *
 * Every grade event gets an outbox row in the same transaction as the grade. This processor
 * drains the outbox (under a named lock), writes one contribution per frozen skill mapping
 * of the graded version (unique per event/skill/part), marks contributions of superseded
 * events, and recomputes the affected skill states. Re-running it is harmless, and the
 * whole evidence table can be rebuilt from grade events.
 */
final class Evidence {
	const LOCK = 'ohmylms-skill-evidence';

	/** @return int events processed */
	public static function process( $limit = 200 ) {
		global $wpdb;
		if ( ! Schema::ready() ) {
			return 0; }
		$lock = self::LOCK . '-' . md5( $wpdb->prefix );
		if ( (string) $wpdb->get_var( $wpdb->prepare( 'SELECT GET_LOCK(%s, 0)', $lock ) ) !== '1' ) {
			return 0; }
		$done = 0;
		try {
			$outbox = Schema::table( 'evidence_outbox' );
			$rows   = $wpdb->get_results( $wpdb->prepare( "SELECT id, grade_event_id FROM $outbox WHERE status='pending' ORDER BY id LIMIT %d", max( 1, (int) $limit ) ), ARRAY_A );
			foreach ( $rows as $row ) {
				try {
					$status = self::apply( (int) $row['grade_event_id'] );
					$wpdb->update(
						$outbox,
						array(
							'status'       => $status,
							'processed_at' => current_time( 'mysql', true ),
							'last_error'   => null,
						),
						array( 'id' => (int) $row['id'] )
					);
					++$done;
				} catch ( \Throwable $error ) {
					$wpdb->query( $wpdb->prepare( "UPDATE $outbox SET tries=tries+1, last_error=%s, status=IF(tries>=5,'failed','pending') WHERE id=%d", substr( $error->getMessage(), 0, 500 ), (int) $row['id'] ) );
				}
			}
		} finally {
			$wpdb->get_var( $wpdb->prepare( 'SELECT RELEASE_LOCK(%s)', $lock ) );
		}
		return $done;
	}

	/**
	 * Write contributions for one event. Returns the outbox status:
	 * done, skipped (nothing to attribute) or waiting (guest event awaiting a claim).
	 */
	private static function apply( $event_id ) {
		global $wpdb;
		$event = $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . Schema::table( 'grade_events' ) . ' WHERE id=%d', $event_id ), ARRAY_A );
		if ( ! $event ) {
			return 'skipped'; }
		if ( ! (int) $event['student_id'] ) {
			return 'waiting'; }
		$evidence = Schema::table( 'skill_evidence' );
		$terms    = array();
		if ( (int) $event['supersedes'] ) {
			foreach ( $wpdb->get_col( $wpdb->prepare( "SELECT DISTINCT term_id FROM $evidence WHERE grade_event_id=%d", (int) $event['supersedes'] ) ) as $term ) {
				$terms[ (int) $term ] = true; }
			$wpdb->update( $evidence, array( 'superseded' => 1 ), array( 'grade_event_id' => (int) $event['supersedes'] ) );
		}
		// An event that is itself already superseded contributes history only.
		$superseded = (int) $event['superseded_by'] > 0 ? 1 : 0;
		if ( $event['reason'] === 'unanswered' && $event['grader'] === 'auto' ) {
			self::recompute( (int) $event['student_id'], array_keys( $terms ) );
			return 'skipped';
		}
		$version = VersionPublisher::version( (int) $event['version_id'] );
		if ( ! $version ) {
			return 'skipped'; }
		$parts = array();
		foreach ( ( json_decode( $version['parts'], true ) ?: array(
			array(
				'id'       => 'p1',
				'fraction' => 1,
			),
		) ) as $part ) {
			$parts[ (string) ( $part['id'] ?? 'p1' ) ] = max( 0, (float) ( $part['fraction'] ?? 1 ) );
		}
		$part_total  = array_sum( $parts ) ?: 1;
		$is_template = \OhMyLMS\Assessment\Template::has( json_decode( (string) $version['settings'], true ) ?: array() );
		$context    = self::context( $event );
		$identity   = VersionPublisher::identity( (int) $event['question_id'], false ) ?: array();
		foreach ( SkillMap::for_version( (int) $event['version_id'] ) as $mapping ) {
			$part = (string) $mapping['part_id'];
			// Part-level events attribute only to their own part; whole-question events are split by part weight.
			if ( $event['part_id'] !== '' && $event['part_id'] !== $part ) {
				continue; }
			$share = $event['part_id'] !== '' ? 1.0 : ( ( $parts[ $part ] ?? 0 ) / $part_total );
			if ( $share <= 0 ) {
				continue; }
			$available = (float) $event['max_marks'] > 0 ? (float) $event['max_marks'] * $share : $share;
			$awarded   = (float) $event['max_marks'] > 0 ? (float) $event['awarded'] * $share : (float) $event['fraction'] * $share;
			if ( $is_template ) {
				// Each issue of a template has its own numbers, so it is a first try of its own:
				// only earlier answers to this very item count against it.
				$prior = (int) $wpdb->get_var(
					$wpdb->prepare(
						'SELECT COUNT(*) FROM ' . $evidence . ' e JOIN ' . Schema::table( 'grade_events' ) . ' g ON g.id=e.grade_event_id WHERE e.student_id=%d AND g.source_type=%s AND g.source_id=%d AND g.item_id=%d AND e.term_id=%d AND e.part_id=%s AND e.grade_event_id<>%d AND e.grade_event_id NOT IN (%d) AND e.evidence_at<=%s',
						(int) $event['student_id'],
						(string) $event['source_type'],
						(int) $event['source_id'],
						(int) $event['item_id'],
						(int) $mapping['term_id'],
						$part,
						$event_id,
						(int) $event['supersedes'],
						$event['created_at']
					)
				);
			} else {
				$prior = (int) $wpdb->get_var(
					$wpdb->prepare(
						"SELECT COUNT(*) FROM $evidence WHERE student_id=%d AND question_id=%d AND term_id=%d AND part_id=%s AND grade_event_id<>%d AND grade_event_id NOT IN (%d) AND evidence_at<=%s",
						(int) $event['student_id'],
						(int) $event['question_id'],
						(int) $mapping['term_id'],
						$part,
						$event_id,
						(int) $event['supersedes'],
						$event['created_at']
					)
				);
			}
			$wpdb->query(
				$wpdb->prepare(
					"INSERT IGNORE INTO $evidence (grade_event_id, student_id, term_id, part_id, role, awarded, available, independent, first_try, difficulty, family_id, source_type, source_id, question_id, version_id, mapping_version, evidence_at, superseded)
                 VALUES (%d, %d, %d, %s, %s, %f, %f, %d, %d, %s, %s, %s, %d, %d, %d, %d, %s, %d)",
					$event_id,
					(int) $event['student_id'],
					(int) $mapping['term_id'],
					$part,
					$mapping['role'],
					round( $awarded, 4 ),
					round( $available, 4 ),
					$context['independent'],
					( $prior === 0 && $context['first_try'] ) ? 1 : 0,
					(string) ( $identity['difficulty'] ?? 'standard' ),
					(string) ( $identity['family_id'] ?? '' ),
					$event['source_type'],
					(int) $event['source_id'],
					(int) $event['question_id'],
					(int) $event['version_id'],
					(int) $version['version_no'],
					$event['created_at'],
					$superseded
				)
			);
			$terms[ (int) $mapping['term_id'] ] = true;
		}
		self::recompute( (int) $event['student_id'], array_keys( $terms ) );
		return 'done';
	}

	/** Independence and first-try information from the response surface. */
	private static function context( array $event ) {
		global $wpdb;
		if ( in_array( $event['source_type'], array( 'practice', 'inline' ), true ) ) {
			$item = $wpdb->get_row( $wpdb->prepare( 'SELECT assisted, tries FROM ' . Schema::table( 'practice_items' ) . ' WHERE id=%d', (int) $event['item_id'] ), ARRAY_A );
			return array(
				'independent' => $item && ! (int) $item['assisted'] ? 1 : 0,
				'first_try'   => $item && (int) $item['tries'] <= 1 ? 1 : 0,
			);
		}
		$assisted = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT MAX(assisted) FROM ' . Schema::table( 'response_events' ) . ' WHERE attempt_id=%d AND item_id=%d', (int) $event['source_id'], (int) $event['item_id'] ) );
		return array(
			'independent' => $assisted ? 0 : 1,
			'first_try'   => 1,
		);
	}

	private static function recompute( $student_id, array $terms ) {
		foreach ( array_unique( array_map( 'intval', $terms ) ) as $term_id ) {
			if ( $term_id ) {
				Mastery::recompute( $student_id, $term_id ); }
		}
	}

	/** Rebuild one learner's evidence from their grade events (e.g. after a mapping repair). */
	public static function rebuild( $student_id ) {
		global $wpdb;
		$student_id = (int) $student_id;
		$wpdb->delete( Schema::table( 'skill_evidence' ), array( 'student_id' => $student_id ) );
		$wpdb->delete( Schema::table( 'student_skill_state' ), array( 'student_id' => $student_id ) );
		$events = Schema::table( 'grade_events' );
		$outbox = Schema::table( 'evidence_outbox' );
		$wpdb->query( $wpdb->prepare( "UPDATE $outbox o JOIN $events e ON e.id=o.grade_event_id SET o.status='pending', o.tries=0 WHERE e.student_id=%d", $student_id ) );
		$total = 0;
		do {
			$batch  = self::process( 500 );
			$total += $batch;
		} while ( $batch > 0 );
		return $total;
	}

	/** Re-queue events that were waiting for a guest claim. */
	public static function release_waiting( array $event_ids ) {
		global $wpdb;
		if ( ! $event_ids ) {
			return; }
		$ids = implode( ',', array_map( 'intval', $event_ids ) );
		$wpdb->query( 'UPDATE ' . Schema::table( 'evidence_outbox' ) . " SET status='pending' WHERE status='waiting' AND grade_event_id IN ($ids)" );
	}

	private static $scheduled = false;

	/** Process soon: at the end of this request, with WP-Cron as the durable fallback. */
	public static function soon() {
		if ( self::$scheduled ) {
			return; }
		self::$scheduled = true;
		add_action(
			'shutdown',
			static function () {
				self::process( 50 );
			},
			20
		);
	}

	public static function schedules( $schedules ) {
		$schedules['ohmylms_every_minute'] = array(
			'interval' => 60,
			'display'  => __( 'Every minute', 'ohmylms' ),
		);
		return $schedules;
	}

	public static function schedule() {
		if ( ! wp_next_scheduled( 'ohmylms_process_evidence' ) ) {
			wp_schedule_event( time() + 60, 'ohmylms_every_minute', 'ohmylms_process_evidence' ); }
	}

	/** Skill summary for one learner: state rows joined with skill details. */
	public static function summary( $student_id ) {
		global $wpdb;
		$rows   = $wpdb->get_results( $wpdb->prepare( 'SELECT * FROM ' . Schema::table( 'student_skill_state' ) . ' WHERE student_id=%d', (int) $student_id ), ARRAY_A );
		$result = array();
		// The 0-100 mastery score, when that is switched on, sits beside the evidence-based level.
		$scores = Score::summary( (int) $student_id );
		foreach ( $rows as $row ) {
			$skill = Taxonomy::describe( (int) $row['term_id'] );
			if ( ! $skill ) {
				continue; }
			$result[] = $skill + ( isset( $scores[ (int) $row['term_id'] ] ) ? array( 'mastery' => $scores[ (int) $row['term_id'] ] ) : array() ) + array(
				'level'               => $row['level'],
				'level_label'         => Mastery::label( $row['level'] ),
				'review_due'          => (bool) $row['review_due'],
				'evidence_count'      => (int) $row['evidence_count'],
				'independent_correct' => (int) $row['independent_correct'],
				'families'            => (int) $row['families'],
				'recent_accuracy'     => (float) $row['score'],
				'last_evidence_at'    => $row['last_evidence_at'],
			);
		}
		usort(
			$result,
			static function ( $left, $right ) {
				return strcmp( $left['name'], $right['name'] );
			}
		);
		return $result;
	}
}
