<?php
namespace OhMyLMS\Skills;

use OhMyLMS\Assessment\Schema;
use OhMyLMS\Engagement\XpSchema;

defined( 'ABSPATH' ) || exit;

/**
 * Stores and reads the 0-100 skill mastery score (see ScoreModel for the rules).
 *
 * The score is derived: it is recomputed from the learner's non-superseded primary-skill
 * evidence whenever that changes (Mastery::recompute), so regrades and rule changes are
 * applied exactly, and learners who practised before the feature was switched on get their
 * score the first time it is read. It sits beside the evidence-based level (developing,
 * proficient, mastered) and never replaces it.
 */
final class Score {
	const OPTION = 'ohmylms_score_settings';

	public static function defaults() {
		return array(
			'enable'           => false,
			'bands'            => array_map(
				static function ( $band ) {
					return array(
						'gain' => $band['gain'],
						'loss' => $band['loss'],
					);
				},
				ScoreModel::defaults()['bands']
			),
			'hint_gain'        => ScoreModel::defaults()['hint_gain'],
			'unlock'           => ScoreModel::defaults()['unlock'],
			'decay_grace_days' => ScoreModel::defaults()['decay_grace_days'],
			'decay_per_week'   => ScoreModel::defaults()['decay_per_week'],
		);
	}

	public static function get() {
		$settings = self::validate( array_replace( self::defaults(), (array) get_option( self::OPTION, array() ) ) );
		return is_wp_error( $settings ) ? self::defaults() : $settings;
	}

	public static function enabled() {
		return ! empty( self::get()['enable'] ) && XpSchema::ready();
	}

	/** The model's configuration with the administrator's tuning applied. */
	public static function config() {
		$settings = self::get();
		return ScoreModel::config(
			array(
				'bands'            => $settings['bands'],
				'hint_gain'        => $settings['hint_gain'],
				'unlock'           => $settings['unlock'],
				'decay_grace_days' => $settings['decay_grace_days'],
				'decay_per_week'   => $settings['decay_per_week'],
			)
		);
	}

	/** @return array|\WP_Error */
	public static function validate( $settings ) {
		$fail = static function () {
			return new \WP_Error( 'score_settings', __( 'Invalid mastery score settings.', 'ohmylms' ), array( 'status' => 400 ) );
		};
		if ( ! is_array( $settings ) ) {
			return $fail(); }
		$settings = array_replace( self::defaults(), $settings );
		if ( ! in_array( $settings['enable'], array( true, false, 0, 1, '0', '1' ), true ) ) {
			return $fail(); }
		$settings['enable'] = in_array( $settings['enable'], array( true, 1, '1' ), true );
		if ( ! is_array( $settings['bands'] ) || count( $settings['bands'] ) !== 4 ) {
			return $fail(); }
		$bands = array();
		foreach ( array_values( $settings['bands'] ) as $band ) {
			if ( ! is_array( $band ) || ! isset( $band['gain'], $band['loss'] ) || ! is_numeric( $band['gain'] ) || ! is_numeric( $band['loss'] )
				|| $band['gain'] < 0 || $band['gain'] > 50 || $band['loss'] < 0 || $band['loss'] > 50 ) {
				return $fail(); }
			$bands[] = array(
				'gain' => (float) $band['gain'],
				'loss' => (float) $band['loss'],
			);
		}
		$settings['bands'] = $bands;
		foreach ( array(
			'hint_gain'      => array( 0, 1 ),
			'decay_per_week' => array( 0, 20 ),
		) as $key => $range ) {
			if ( ! is_numeric( $settings[ $key ] ) || $settings[ $key ] < $range[0] || $settings[ $key ] > $range[1] ) {
				return $fail(); }
			$settings[ $key ] = (float) $settings[ $key ];
		}
		foreach ( array(
			'unlock'           => array( 50, 100 ),
			'decay_grace_days' => array( 0, 365 ),
		) as $key => $range ) {
			if ( filter_var( $settings[ $key ], FILTER_VALIDATE_INT ) === false || $settings[ $key ] < $range[0] || $settings[ $key ] > $range[1] ) {
				return $fail(); }
			$settings[ $key ] = (int) $settings[ $key ];
		}
		return array_intersect_key( $settings, self::defaults() );
	}

	/** Primary-skill evidence of one learner and skill, oldest first. */
	public static function rows( $student_id, $term_id ) {
		global $wpdb;
		return $wpdb->get_results(
			$wpdb->prepare(
				'SELECT id, grade_event_id, awarded, available, independent, first_try, difficulty, evidence_at, source_type, source_id, question_id FROM ' . Schema::table( 'skill_evidence' ) . " WHERE student_id=%d AND term_id=%d AND role='primary' AND superseded=0 ORDER BY evidence_at ASC, id ASC",
				(int) $student_id,
				(int) $term_id
			),
			ARRAY_A
		);
	}

	/** The score story of a skill, row by row; keyed by grade event for lookups. */
	public static function trace( $student_id, $term_id ) {
		$run   = ScoreModel::run( self::rows( $student_id, $term_id ), self::config() );
		$by_id = array();
		foreach ( $run['trace'] as $step ) {
			if ( $step['grade_event_id'] ) {
				$by_id[ (int) $step['grade_event_id'] ] = $step; }
		}
		return $by_id;
	}

	/** Recompute and store one learner's score for a skill. Called whenever evidence changes. */
	public static function recompute( $student_id, $term_id ) {
		global $wpdb;
		if ( ! self::enabled() ) {
			return null; }
		$rows = self::rows( $student_id, $term_id );
		$run  = ScoreModel::run( $rows, self::config() );
		$last = null;
		foreach ( $run['trace'] as $i => $step ) {
			if ( $step['counted'] ) {
				$last = $rows[ $i ]['evidence_at']; }
		}
		$table    = XpSchema::table( 'skill_scores' );
		$stored   = $wpdb->get_row( $wpdb->prepare( "SELECT milestones FROM $table WHERE student_id=%d AND term_id=%d", $student_id, $term_id ), ARRAY_A );
		$reached  = array_keys( array_filter( ScoreModel::MEDALS, static function ( $name, $at ) use ( $run ) {
			return $run['peak'] >= $at - 1e-9;
		}, ARRAY_FILTER_USE_BOTH ) );
		$known    = $stored && $stored['milestones'] !== '' ? array_map( 'intval', explode( ',', $stored['milestones'] ) ) : array();
		$record   = array(
			'student_id'     => (int) $student_id,
			'term_id'        => (int) $term_id,
			'score'          => $run['score'],
			'peak'           => $run['peak'],
			'scored'         => $run['scored'],
			'correct'        => $run['correct'],
			'struggling'     => $run['struggling'] ? 1 : 0,
			'milestones'     => implode( ',', array_unique( array_merge( $known, $reached ) ) ),
			'last_scored_at' => $last,
			'updated_at'     => current_time( 'mysql', true ),
		);
		if ( $stored ) {
			$wpdb->update( $table, $record, array( 'student_id' => (int) $student_id, 'term_id' => (int) $term_id ) );
		} else {
			$wpdb->insert( $table, $record );
		}
		// A medal is announced once, the first time that score is reached, even if it later slips.
		foreach ( array_diff( $reached, $known ) as $at ) {
			do_action( 'ohmylms_skill_score_milestone', (int) $student_id, (int) $term_id, (int) $at, ScoreModel::MEDALS[ $at ] );
		}
		do_action( 'ohmylms_skill_score_updated', (int) $student_id, (int) $term_id, $run['score'], $run );
		return $record;
	}

	/**
	 * Score before and after one practice session, from the same evidence, for the lesson summary.
	 *
	 * @return array{before:float,after:float,delta:float,medal:string,reached:int[]}
	 */
	public static function for_session( $student_id, $term_id, $session_id ) {
		$rows   = self::rows( $student_id, $term_id );
		$prior  = array_values( array_filter( $rows, static function ( $row ) use ( $session_id ) {
			return ! ( $row['source_type'] === 'practice' && (int) $row['source_id'] === (int) $session_id );
		} ) );
		$config = self::config();
		$before = ScoreModel::run( $prior, $config );
		$after  = ScoreModel::run( $rows, $config );
		$reached = array();
		foreach ( ScoreModel::MEDALS as $at => $name ) {
			if ( $after['peak'] >= $at - 1e-9 && $before['peak'] < $at - 1e-9 ) {
				$reached[] = $at; }
		}
		return array(
			'before'  => $before['score'],
			'after'   => $after['score'],
			'delta'   => round( $after['score'] - $before['score'], 2 ),
			'medal'   => $after['medal'],
			'reached' => $reached,
		);
	}

	/** One skill's presentable score, or null if the skill has not been scored. */
	public static function describe( array $row, $now = null ) {
		$config    = self::config();
		$now       = $now ?: time();
		$effective = ScoreModel::effective( (float) $row['score'], $row['last_scored_at'] ? strtotime( $row['last_scored_at'] . ' UTC' ) : null, $now, $config );
		$score     = $effective['score'];
		return array(
			'score'      => $score,
			'stored'     => (float) $row['score'],
			'band'       => ScoreModel::band_name( $score, $config['bands'] ),
			'medal'      => ScoreModel::medal( (float) $row['peak'] ),
			'unlocked'   => $score >= (int) $config['unlock'] - 1e-9,
			'review_due' => $effective['review_due'],
			'struggling' => (bool) $row['struggling'],
			'scored'     => (int) $row['scored'],
		);
	}

	/**
	 * Every scored skill of a learner by term ID. A skill with evidence but no stored score
	 * (practised before the feature was switched on) is computed here, once.
	 */
	public static function summary( $student_id ) {
		global $wpdb;
		if ( ! self::enabled() ) {
			return array(); }
		$terms = array_map( 'intval', $wpdb->get_col( $wpdb->prepare( 'SELECT term_id FROM ' . Schema::table( 'student_skill_state' ) . ' WHERE student_id=%d', (int) $student_id ) ) );
		$have  = array_map( 'intval', $wpdb->get_col( $wpdb->prepare( 'SELECT term_id FROM ' . XpSchema::table( 'skill_scores' ) . ' WHERE student_id=%d', (int) $student_id ) ) );
		foreach ( array_diff( $terms, $have ) as $term ) {
			self::recompute( $student_id, $term ); }
		$result = array();
		foreach ( $wpdb->get_results( $wpdb->prepare( 'SELECT * FROM ' . XpSchema::table( 'skill_scores' ) . ' WHERE student_id=%d', (int) $student_id ), ARRAY_A ) as $row ) {
			$result[ (int) $row['term_id'] ] = self::describe( $row ); }
		return $result;
	}
}
