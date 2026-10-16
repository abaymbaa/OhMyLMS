<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * Khan-style mastery names for display: Attempted, Familiar, Proficient, Mastered.
 *
 * View only. It reads the Khan level (when that model is on and the skill has history), the
 * SmartScore and, without one, the stored evidence level. It never writes anything. Completion,
 * awards and recommendations use the stored evidence level, which follows the Khan level when
 * that model is on, and is independent of this display when it is off.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Skills;

use OhMyLMS\Assessment\Schema as AssessmentSchema;

defined( 'ABSPATH' ) || exit;

/** Maps SmartScore bands and stored levels onto four learner-facing names. */
final class MasteryDisplay {

	/** Lowest to highest. */
	const LEVELS = array( 'not-started', 'attempted', 'familiar', 'proficient', 'mastered' );

	/**
	 * Learner-facing name for a display level.
	 *
	 * @param string $key Display level.
	 * @return string
	 */
	public static function label( $key ) {
		return array(
			'not-started' => __( 'Not started', 'ohmylms' ),
			'attempted'   => __( 'Attempted', 'ohmylms' ),
			'familiar'    => __( 'Familiar', 'ohmylms' ),
			'proficient'  => __( 'Proficient', 'ohmylms' ),
			'mastered'    => __( 'Mastered', 'ohmylms' ),
		)[ $key ] ?? $key;
	}

	/**
	 * Position in LEVELS, so levels can be compared.
	 *
	 * @param string $key Display level.
	 * @return int
	 */
	public static function rank( $key ) {
		$rank = array_search( $key, self::LEVELS, true );
		return false === $rank ? 0 : $rank;
	}

	/**
	 * Whether a level counts as "to Proficient".
	 *
	 * @param string $key Display level.
	 * @return bool
	 */
	public static function is_proficient( $key ) {
		return self::rank( $key ) >= self::rank( 'proficient' );
	}

	/**
	 * Map a SmartScore onto a display level.
	 *
	 * Below the second band is Attempted, the second band is Familiar, the third and fourth
	 * (Proficient and Challenge Zone) are Proficient, and a full score is Mastered. A skill
	 * with no scored answers is Not started.
	 *
	 * @param float $score Effective SmartScore, 0-100.
	 * @param int   $scored Number of scored answers behind the score.
	 * @param array $bands SmartScore bands, each with a "from" start; four expected.
	 * @return string
	 */
	public static function from_score( $score, $scored, array $bands ) {
		if ( (int) $scored < 1 && (float) $score <= 0 ) {
			return 'not-started';
		}
		$score = (float) $score;
		if ( $score >= 100 - 1e-9 ) {
			return 'mastered';
		}
		$familiar   = isset( $bands[1]['from'] ) ? (float) $bands[1]['from'] : 70.0;
		$proficient = isset( $bands[2]['from'] ) ? (float) $bands[2]['from'] : 80.0;
		if ( $score >= $proficient - 1e-9 ) {
			return 'proficient';
		}
		return $score >= $familiar - 1e-9 ? 'familiar' : 'attempted';
	}

	/**
	 * Map the stored evidence level onto a display level, for skills without a SmartScore.
	 *
	 * The stored model has no separate "familiar" step, so this never returns it.
	 *
	 * @param string $level Stored level: not-assessed, developing, proficient or mastered.
	 * @return string
	 */
	public static function from_level( $level ) {
		return array(
			'not-assessed' => 'not-started',
			'developing'   => 'attempted',
			'proficient'   => 'proficient',
			'mastered'     => 'mastered',
		)[ $level ] ?? 'not-started';
	}

	/**
	 * Display level for each skill of one learner.
	 *
	 * Uses the SmartScore when the feature is on and the skill has scored answers; otherwise
	 * the stored evidence level. One batch query, no writes of its own.
	 *
	 * @param int   $student_id Learner ID.
	 * @param int[] $term_ids Skill term IDs.
	 * @return array<int,array{key:string,label:string,score:?float,source:string}>
	 */
	public static function for_student( $student_id, array $term_ids ) {
		global $wpdb;
		$terms  = array_values( array_unique( array_filter( array_map( 'intval', $term_ids ) ) ) );
		$result = array();
		foreach ( $terms as $term ) {
			$result[ $term ] = self::entry( 'not-started', null, 'none' );
		}
		$student_id = (int) $student_id;
		if ( ! $student_id || ! $terms ) {
			return $result;
		}
		$levels = array();
		if ( AssessmentSchema::ready() ) {
			$holders = implode( ',', array_fill( 0, count( $terms ), '%d' ) );
			$query   = $wpdb->prepare( "SELECT term_id, level FROM %i WHERE student_id=%d AND term_id IN ($holders)", array_merge( array( AssessmentSchema::table( 'student_skill_state' ), $student_id ), $terms ) ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQLPlaceholders.ReplacementsWrongNumber -- The IN list is only %d placeholders.
			foreach ( $wpdb->get_results( $query, ARRAY_A ) as $row ) { // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.PreparedSQL.NotPrepared -- Read-only batch lookup, prepared above; not cached so revisions show at once.
				$levels[ (int) $row['term_id'] ] = $row['level'];
			}
		}
		$scores = Score::enabled() ? Score::summary( $student_id ) : array();
		$bands  = $scores ? Score::config()['bands'] : array();
		// With the Khan level rules on, a skill that has Khan history shows that level.
		$khan = array();
		if ( Khan\Settings::enabled() ) {
			$with = array_intersect( $terms, Khan\Levels::terms_with_history( $student_id ) );
			$khan = $with ? Khan\Levels::current_many( $student_id, $with ) : array();
		}
		foreach ( $terms as $term ) {
			if ( isset( $khan[ $term ] ) ) {
				$result[ $term ] = self::entry( $khan[ $term ], null, 'khan' );
			} elseif ( isset( $scores[ $term ] ) && ( (int) $scores[ $term ]['scored'] > 0 || (float) $scores[ $term ]['score'] > 0 ) ) {
				$score           = (float) $scores[ $term ]['score'];
				$result[ $term ] = self::entry( self::from_score( $score, $scores[ $term ]['scored'], $bands ), $score, 'score' );
			} elseif ( isset( $levels[ $term ] ) ) {
				$result[ $term ] = self::entry( self::from_level( $levels[ $term ] ), null, 'level' );
			}
		}
		return $result;
	}

	/**
	 * How many of a learner's skills sit at each display level.
	 *
	 * Counts every skill the learner has any recorded state or score for; skills never practised
	 * are not counted. One batch read through for_student().
	 *
	 * @param int $student_id Learner ID.
	 * @return array{attempted:int,familiar:int,proficient:int,mastered:int,total:int}
	 */
	public static function counts( $student_id ) {
		$student_id = (int) $student_id;
		$counts     = array(
			'attempted'  => 0,
			'familiar'   => 0,
			'proficient' => 0,
			'mastered'   => 0,
			'total'      => 0,
		);
		if ( ! $student_id ) {
			return $counts;
		}
		foreach ( self::for_student( $student_id, self::started_terms( $student_id ) ) as $entry ) {
			if ( isset( $counts[ $entry['key'] ] ) ) {
				++$counts[ $entry['key'] ];
				++$counts['total'];
			}
		}
		return $counts;
	}

	/**
	 * Skills a learner has any recorded state, score or Khan history for.
	 *
	 * @param int $student_id Learner ID.
	 * @return int[]
	 */
	public static function started_terms( $student_id ) {
		global $wpdb;
		$student_id = (int) $student_id;
		$terms      = array();
		if ( ! $student_id ) {
			return $terms;
		}
		if ( AssessmentSchema::ready() ) {
			$terms = array_map( 'intval', $wpdb->get_col( $wpdb->prepare( 'SELECT term_id FROM %i WHERE student_id=%d', AssessmentSchema::table( 'student_skill_state' ), $student_id ) ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- One learner's own rows, read-only.
		}
		if ( Score::enabled() ) {
			$terms = array_merge( $terms, array_keys( Score::summary( $student_id ) ) );
		}
		if ( Khan\Settings::enabled() ) {
			$terms = array_merge( $terms, Khan\Levels::terms_with_history( $student_id ) );
		}
		return array_values( array_unique( array_map( 'intval', $terms ) ) );
	}

	/**
	 * One display entry.
	 *
	 * @param string     $key Display level.
	 * @param float|null $score SmartScore when it decided the level.
	 * @param string     $source score, level, khan or none.
	 * @return array{key:string,label:string,score:?float,source:string}
	 */
	private static function entry( $key, $score, $source ) {
		return array(
			'key'    => $key,
			'label'  => self::label( $key ),
			'score'  => $score,
			'source' => $source,
		);
	}
}
