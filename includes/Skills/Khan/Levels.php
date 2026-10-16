<?php
/**
 * Khan-style skill levels: how an exercise or a mixed-skill assessment moves a skill.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Skills\Khan;

use OhMyLMS\Assessment\Schema as AssessmentSchema;
use OhMyLMS\Practice\Sessions;
use OhMyLMS\QuestionBank\SkillMap;
use OhMyLMS\Skills\Mastery;

defined( 'ABSPATH' ) || exit;

/**
 * Rules (from Khan Academy's published Mastery levels):
 *
 *  - Exercise: below 70% right is Attempted, 70-99% Familiar, 100% Proficient. An exercise raises a
 *    skill to that level but never lowers it, except that a Mastered skill drops to Proficient when the
 *    exercise is not perfect.
 *  - Assessment (quiz, unit test, challenge): right on the skill moves it up one step (Not started or
 *    Attempted to Familiar, Familiar to Proficient, Proficient to Mastered); a miss moves it down one
 *    (Not started or Familiar to Attempted, Proficient to Familiar, Mastered to Proficient).
 *
 * Right means right first time without a hint. Skipped questions are left out. Every change is logged
 * with its source, so a replayed event cannot move a skill twice, and the newest row is the level.
 */
final class Levels {

	const ORDER = array( 'not-started', 'attempted', 'familiar', 'proficient', 'mastered' );

	/**
	 * Register the hooks.
	 */
	public static function init() {
		add_action(
			'init',
			static function () {
				if ( 'khan' === Settings::get()['model'] ) {
					Schema::install();
				}
			},
			7
		);
		// Before XP and streak read the finished session (priority 10 and 11).
		add_action( 'ohmylms_practice_completed', array( self::class, 'apply_practice' ), 9 );
		add_action( 'ohmylms_attempt_graded', array( self::class, 'apply_attempt' ), 9 );
	}

	/**
	 * Position in ORDER, so levels can be compared.
	 *
	 * @param string $level Level.
	 * @return int
	 */
	public static function rank( $level ) {
		$rank = array_search( $level, self::ORDER, true );
		return false === $rank ? 0 : $rank;
	}

	/**
	 * Level after an exercise.
	 *
	 * @param string $current Level before.
	 * @param int    $right   Questions right first time without help.
	 * @param int    $total   Questions in the exercise.
	 * @return string
	 */
	public static function exercise( $current, $right, $total ) {
		if ( $total < 1 ) {
			return $current;
		}
		$share  = $right / $total;
		$result = $share >= 1 ? 'proficient' : ( $share >= 0.7 ? 'familiar' : 'attempted' );
		if ( self::rank( $result ) > self::rank( $current ) ) {
			return $result;
		}
		// Practice never lowers a skill, except that an imperfect exercise takes Mastered back to Proficient.
		return 'mastered' === $current && $share < 1 ? 'proficient' : $current;
	}

	/**
	 * Level after an assessment's questions on one skill.
	 *
	 * @param string $current   Level before.
	 * @param bool   $all_right Every question on the skill was right.
	 * @return string
	 */
	public static function assessment( $current, $all_right ) {
		$rank = self::rank( $current );
		if ( $all_right ) {
			return self::ORDER[ min( 4, max( 2, $rank + 1 ) ) ];
		}
		return self::ORDER[ max( 1, $rank - 1 ) ];
	}

	/**
	 * The Khan level equivalent to a stored evidence level, for skills with no Khan history yet.
	 *
	 * @param string $level not-assessed, developing, proficient or mastered.
	 * @return string
	 */
	public static function from_evidence( $level ) {
		return array(
			'developing' => 'attempted',
			'proficient' => 'proficient',
			'mastered'   => 'mastered',
		)[ $level ] ?? 'not-started';
	}

	/**
	 * The stored evidence level that a Khan level stands for, so completion rules and
	 * recommendations keep working from the same decision.
	 *
	 * @param string $level Khan level.
	 * @return string
	 */
	public static function to_evidence( $level ) {
		return array(
			'attempted'  => 'developing',
			'familiar'   => 'developing',
			'proficient' => 'proficient',
			'mastered'   => 'mastered',
		)[ $level ] ?? 'not-assessed';
	}

	/**
	 * Current level for several skills of one learner. A skill with Khan history uses its newest
	 * row; one without uses its stored evidence level.
	 *
	 * @param int   $student_id Learner.
	 * @param int[] $term_ids   Skills.
	 * @return array<int,string> Skill ID to level.
	 */
	public static function current_many( $student_id, array $term_ids ) {
		global $wpdb;
		$terms  = array_values( array_unique( array_filter( array_map( 'intval', $term_ids ) ) ) );
		$result = array_fill_keys( $terms, 'not-started' );
		if ( ! $terms || ! (int) $student_id ) {
			return $result;
		}
		$holders = implode( ',', array_fill( 0, count( $terms ), '%d' ) );
		$seen    = array();
		if ( Schema::ready() ) {
			$table = Schema::table();
			// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching,WordPress.DB.PreparedSQL.InterpolatedNotPrepared,WordPress.DB.PreparedSQLPlaceholders.ReplacementsWrongNumber -- Fresh private read. $holders contains one literal %d per integer term; both identifiers and every value are prepared.
			$rows = $wpdb->get_results( $wpdb->prepare( "SELECT e.term_id, e.level_after FROM %i e JOIN (SELECT MAX(id) AS id FROM %i WHERE student_id=%d AND term_id IN ($holders) GROUP BY term_id) m ON m.id=e.id", array_merge( array( $table, $table, (int) $student_id ), $terms ) ), ARRAY_A );
			foreach ( $rows as $row ) {
				$result[ (int) $row['term_id'] ] = (string) $row['level_after'];
				$seen[ (int) $row['term_id'] ]   = true;
			}
		}
		if ( AssessmentSchema::ready() ) {
			// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching,WordPress.DB.PreparedSQL.InterpolatedNotPrepared,WordPress.DB.PreparedSQLPlaceholders.ReplacementsWrongNumber -- Fresh private read. $holders contains one literal %d per integer term; the identifier and every value are prepared.
			$rows = $wpdb->get_results( $wpdb->prepare( "SELECT term_id, level FROM %i WHERE student_id=%d AND term_id IN ($holders)", array_merge( array( AssessmentSchema::table( 'student_skill_state' ), (int) $student_id ), $terms ) ), ARRAY_A );
			foreach ( $rows as $row ) {
				if ( empty( $seen[ (int) $row['term_id'] ] ) ) {
					$result[ (int) $row['term_id'] ] = self::from_evidence( (string) $row['level'] );
				}
			}
		}
		return $result;
	}

	/**
	 * Current level for one skill.
	 *
	 * @param int $student_id Learner.
	 * @param int $term_id    Skill.
	 * @return string
	 */
	public static function current( $student_id, $term_id ) {
		$levels = self::current_many( $student_id, array( $term_id ) );
		return $levels[ (int) $term_id ] ?? 'not-started';
	}

	/**
	 * Skills of one learner that have Khan history.
	 *
	 * @param int $student_id Learner.
	 * @return int[]
	 */
	public static function terms_with_history( $student_id ) {
		global $wpdb;
		if ( ! Schema::ready() || ! (int) $student_id ) {
			return array();
		}
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching -- Fresh read of the learner's own skills.
		return array_map( 'intval', $wpdb->get_col( $wpdb->prepare( 'SELECT DISTINCT term_id FROM %i WHERE student_id=%d', Schema::table(), (int) $student_id ) ) );
	}

	/**
	 * Whether a skill already has Khan history for this learner.
	 *
	 * @param int $student_id Learner.
	 * @param int $term_id    Skill.
	 * @return bool
	 */
	public static function has_history( $student_id, $term_id ) {
		return in_array( (int) $term_id, self::terms_with_history( $student_id ), true );
	}

	/**
	 * Replace the evidence level with the Khan one when this skill has Khan history.
	 *
	 * @param array $state      Evaluated state.
	 * @param int   $student_id Learner.
	 * @param int   $term_id    Skill.
	 * @return array
	 */
	public static function override_state( array $state, $student_id, $term_id ) {
		if ( Settings::enabled() && self::has_history( $student_id, $term_id ) ) {
			$state['level'] = self::to_evidence( self::current( $student_id, $term_id ) );
		}
		return $state;
	}

	/**
	 * Log one level change. A source that already moved this skill is left alone.
	 *
	 * @param int    $student_id  Learner.
	 * @param int    $term_id     Skill.
	 * @param string $source_type practice or quiz.
	 * @param int    $source_id   Session or attempt ID.
	 * @param string $after       New level.
	 * @param array  $detail      Small explanation (counts).
	 * @return bool Whether a row was written.
	 */
	private static function record( $student_id, $term_id, $source_type, $source_id, $after, array $detail ) {
		global $wpdb;
		$before = self::current( $student_id, $term_id );
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching -- Idempotent log write.
		$written = $wpdb->query(
			$wpdb->prepare(
				'INSERT IGNORE INTO %i (student_id, term_id, source_type, source_id, level_before, level_after, detail, created_at) VALUES (%d, %d, %s, %d, %s, %s, %s, %s)',
				Schema::table(),
				(int) $student_id,
				(int) $term_id,
				$source_type,
				(int) $source_id,
				$before,
				$after,
				wp_json_encode( $detail ),
				current_time( 'mysql', true )
			)
		);
		return 1 === (int) $written;
	}

	/**
	 * Apply a finished practice session as an exercise result.
	 *
	 * @param string $uuid Session UUID.
	 */
	public static function apply_practice( $uuid ) {
		if ( ! Settings::enabled() ) {
			return;
		}
		$session = Sessions::get( (string) $uuid );
		if ( ! $session || 'complete' !== $session['status'] || ! (int) $session['student_id'] || 'skill' !== $session['mode'] ) {
			return;
		}
		$items = array_filter(
			Sessions::items( $session['id'] ),
			static function ( $item ) {
				return null !== $item['answered_at'] && empty( $item['display']['skipped'] ) && empty( $item['display']['replay_of'] );
			}
		);
		$total = count( $items );
		$right = count(
			array_filter(
				$items,
				static function ( $item ) {
					return 1 === (int) $item['correct'] && 0 === (int) $item['assisted'] && (int) $item['tries'] <= 1;
				}
			)
		);
		if ( $total < 1 ) {
			return;
		}
		$student = (int) $session['student_id'];
		$term    = (int) $session['term_id'];
		$after   = self::exercise( self::current( $student, $term ), $right, $total );
		if ( self::record(
			$student,
			$term,
			'practice',
			(int) $session['id'],
			$after,
			array(
				'right' => $right,
				'total' => $total,
			)
		) ) {
			Mastery::recompute( $student, $term );
		}
	}

	/**
	 * Apply a graded quiz attempt as a mixed-skill assessment.
	 *
	 * @param array $event Attempt event with student_id and attempt_id.
	 */
	public static function apply_attempt( $event ) {
		global $wpdb;
		if ( ! Settings::enabled() || ! AssessmentSchema::ready() || ! is_array( $event ) ) {
			return;
		}
		$student = (int) ( $event['student_id'] ?? 0 );
		$attempt = (int) ( $event['attempt_id'] ?? 0 );
		if ( ! $student || ! $attempt ) {
			return;
		}
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching -- Fresh read of this attempt's grades.
		$events = $wpdb->get_results( $wpdb->prepare( "SELECT version_id, part_id, correct FROM %i WHERE source_type='quiz' AND source_id=%d AND superseded_by=0", AssessmentSchema::table( 'grade_events' ), $attempt ), ARRAY_A );
		$skills = array();
		foreach ( $events as $grade ) {
			foreach ( SkillMap::for_version( (int) $grade['version_id'] ) as $mapping ) {
				if ( 'primary' !== $mapping['role'] ) {
					continue;
				}
				if ( '' !== (string) $grade['part_id'] && (string) $grade['part_id'] !== (string) $mapping['part_id'] ) {
					continue;
				}
				$term = (int) $mapping['term_id'];
				if ( ! isset( $skills[ $term ] ) ) {
					$skills[ $term ] = array(
						'right' => 0,
						'wrong' => 0,
					);
				}
				++$skills[ $term ][ (int) $grade['correct'] ? 'right' : 'wrong' ];
			}
		}
		foreach ( $skills as $term => $count ) {
			$after = self::assessment( self::current( $student, $term ), 0 === $count['wrong'] );
			if ( self::record( $student, $term, 'quiz', $attempt, $after, $count ) ) {
				Mastery::recompute( $student, $term );
			}
		}
	}

	/**
	 * What one activity did to the learner's skills, for the summary screen.
	 *
	 * @param int    $student_id  Learner.
	 * @param string $source_type practice or quiz.
	 * @param int    $source_id   Session or attempt ID.
	 * @return array<int,array{skill:string,before:string,after:string,change:string}>
	 */
	public static function changes( $student_id, $source_type, $source_id ) {
		global $wpdb;
		if ( ! Schema::ready() ) {
			return array();
		}
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching -- Fresh read of one activity's changes.
		$rows   = $wpdb->get_results( $wpdb->prepare( 'SELECT term_id, level_before, level_after FROM %i WHERE student_id=%d AND source_type=%s AND source_id=%d ORDER BY id', Schema::table(), (int) $student_id, $source_type, (int) $source_id ), ARRAY_A );
		$result = array();
		foreach ( $rows as $row ) {
			$term     = get_term( (int) $row['term_id'] );
			$delta    = self::rank( $row['level_after'] ) <=> self::rank( $row['level_before'] );
			$result[] = array(
				'skill'  => $term && ! is_wp_error( $term ) ? $term->name : '',
				'before' => (string) $row['level_before'],
				'after'  => (string) $row['level_after'],
				'change' => $delta > 0 ? 'up' : ( $delta < 0 ? 'down' : 'same' ),
			);
		}
		return $result;
	}
}
