<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * Where a learner stands on the shared skill backbone, and what to do next.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Guidance;

use OhMyLMS\Assessment\Schema as AssessmentSchema;
use OhMyLMS\Bundles\Combined;
use OhMyLMS\Curriculum\AiAnalysis;
use OhMyLMS\Curriculum\Comparison;
use OhMyLMS\Curriculum\SkillEdges;
use OhMyLMS\Curriculum\SkillMappings;
use OhMyLMS\Performance\Engine;
use OhMyLMS\Performance\Levels;
use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\Student\LearnerProfile;

defined( 'ABSPATH' ) || exit;

// phpcs:disable WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- Fresh reads of the learner's own evidence; every value is prepared.

/**
 * Reads, never writes. A learner's level on a shared skill pools their evidence on the skill and on
 * every syllabus objective mapped to it as equivalent, de-duplicated (Bundles\Combined), and is
 * decided by the site's level policy (Performance\Engine). The rules that turn those levels into
 * advice are in Model, so they are tested on their own.
 */
final class Guidance {

	/**
	 * Guidance for one learner.
	 *
	 * @param int   $student_id Learner.
	 * @param array $params     subject (default every subject), grade (default the profile grade), target (syllabus ID for readiness).
	 * @return array subject, ceiling, domains, path, ready, reviews, covered, gaps, counts and, with a target, readiness.
	 */
	public static function for_student( $student_id, array $params = array() ) {
		$student_id = (int) $student_id;
		$subject    = sanitize_text_field( (string) ( $params['subject'] ?? '' ) );
		$skills     = AiAnalysis::catalog( $subject );
		$states     = self::states( $student_id, array_keys( $skills ) );
		$ceiling    = self::ceiling( $student_id, $skills, $states, (int) ( $params['grade'] ?? 0 ) );
		$scope      = Model::scope( $skills, $ceiling );
		$ids        = array_map( 'intval', array_keys( $skills ) );
		$prereqs    = array();
		foreach ( $ids as $id ) {
			$needs = Taxonomy::prerequisites( $id );
			if ( $needs ) {
				$prereqs[ $id ] = $needs;
			}
		}
		$encompasses = SkillEdges::encompasses_many( $ids );
		$reviews     = Model::reviews( $states, $encompasses );
		$path        = Model::path( $scope, $states, $prereqs, $encompasses );
		$practice    = self::practice_terms( array_merge( array_column( $path, 'skill' ), array_slice( Model::frontier( $scope, $states, $prereqs ), 0, 8 ), $reviews['due'] ) );
		$describe    = static function ( $id ) use ( $skills, $states, $practice ) {
			return self::describe( (int) $id, $skills, $states, $practice );
		};
		$result = array(
			'subject' => $subject,
			'ceiling' => $ceiling,
			'grade'   => $ceiling ? Comparison::grade_label( $ceiling ) : '',
			'domains' => Model::domains( $scope, $states, Comparison::domains() ),
			'path'    => array_map(
				static function ( $step ) use ( $describe ) {
					return $describe( $step['skill'] ) + array(
						'type'    => $step['type'],
						'reviews' => array_map( $describe, $step['reviews'] ),
					);
				},
				$path
			),
			'ready'   => array_map( $describe, array_slice( Model::frontier( $scope, $states, $prereqs ), 0, 8 ) ),
			'reviews' => array_map( $describe, array_slice( $reviews['due'], 0, 8 ) ),
			'covered' => array_map(
				static function ( $row ) use ( $describe ) {
					return $describe( $row['skill'] ) + array( 'by' => array_map( $describe, $row['by'] ) );
				},
				$reviews['covered']
			),
			'gaps'    => array_map(
				static function ( $gap ) use ( $describe ) {
					return array(
						'skill' => $describe( $gap['skill'] ),
						'fix'   => $describe( $gap['fix'] ),
					);
				},
				array_slice( Model::gaps( $states, $prereqs ), 0, 3 )
			),
			'counts'  => self::counts( $scope, $states ),
		);
		if ( ! empty( $params['target'] ) ) {
			$result['readiness'] = self::readiness( $student_id, (int) $params['target'], $skills, $states );
		}
		return $result;
	}

	/**
	 * A learner's pooled state on each shared skill they have evidence for.
	 *
	 * @param int   $student_id Learner.
	 * @param int[] $skill_ids  Shared skills.
	 * @return array<int,array> Skill => level, mastery, review_due, struggling, last_evidence_at, last_correct_at.
	 */
	public static function states( $student_id, array $skill_ids ) {
		global $wpdb;
		$skill_ids = array_values( array_unique( array_map( 'intval', $skill_ids ) ) );
		if ( ! $skill_ids || ! AssessmentSchema::ready() ) {
			return array();
		}
		// Objectives that count as each shared skill.
		$owners  = array_fill_keys( $skill_ids, array() );
		$holders = implode( ',', array_fill( 0, count( $skill_ids ), '%d' ) );
		foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT specific_term_id, shared_term_id FROM %i WHERE relation='equivalent' AND shared_term_id IN ($holders)", array_merge( array( SkillMappings::table() ), $skill_ids ) ), ARRAY_A ) as $row ) { // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared -- One placeholder per ID.
			$owners[ (int) $row['specific_term_id'] ][] = (int) $row['shared_term_id'];
		}
		foreach ( $skill_ids as $id ) {
			$owners[ $id ][] = $id;
		}
		$rows = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT id, grade_event_id, term_id, part_id, question_id, awarded, available, independent, first_try, difficulty, family_id, source_type, source_id, evidence_at FROM %i WHERE student_id=%d AND role='primary' AND superseded=0",
				AssessmentSchema::table( 'skill_evidence' ),
				(int) $student_id
			),
			ARRAY_A
		);
		$pooled = array();
		foreach ( $rows as $row ) {
			foreach ( array_unique( $owners[ (int) $row['term_id'] ] ?? array() ) as $skill ) {
				$pooled[ $skill ][] = $row;
			}
		}
		$now    = time();
		$states = array();
		foreach ( $pooled as $skill => $evidence ) {
			$merged  = Combined::merge( $evidence );
			$state   = Engine::evaluate( $merged, $now );
			$correct = 0;
			foreach ( $merged as $row ) {
				if ( ! empty( $row['independent'] ) && ! empty( $row['first_try'] ) && (float) $row['available'] > 0 && (float) $row['awarded'] >= (float) $row['available'] - 0.0001 ) {
					$correct = max( $correct, (int) strtotime( $row['evidence_at'] . ' UTC' ) );
				}
			}
			$states[ (int) $skill ] = array(
				'level'            => $state['level'],
				'mastery'          => (float) $state['mastery'],
				'review_due'       => (int) $state['review_due'],
				'struggling'       => (int) $state['struggling'],
				'last_evidence_at' => $state['last_evidence_at'] ? (int) strtotime( $state['last_evidence_at'] . ' UTC' ) : 0,
				'last_correct_at'  => $correct,
			);
		}
		return $states;
	}

	/**
	 * Readiness for a target syllabus or exam: the share of the shared skills its objectives map
	 * to (as equivalent) that the learner holds at Proficient or better.
	 *
	 * @param int   $student_id Learner.
	 * @param int   $syllabus   Target syllabus.
	 * @param array $skills     Catalog, when already loaded.
	 * @param array $states     States, when already loaded.
	 * @return array|null percent, total, proficient, missing (up to ten skills); null for an unknown syllabus.
	 */
	public static function readiness( $student_id, $syllabus, array $skills = array(), array $states = array() ) {
		global $wpdb;
		$objectives = Comparison::objectives( (int) $syllabus );
		if ( is_wp_error( $objectives ) ) {
			return null;
		}
		$ids = array_map( 'intval', array_column( $objectives, 'term_id' ) );
		if ( ! $ids ) {
			return array(
				'syllabus'   => (int) $syllabus,
				'percent'    => 0,
				'total'      => 0,
				'proficient' => 0,
				'missing'    => array(),
			);
		}
		$targets = array_map( 'intval', $wpdb->get_col( $wpdb->prepare( "SELECT DISTINCT shared_term_id FROM %i WHERE relation='equivalent' AND specific_term_id IN (" . implode( ',', array_fill( 0, count( $ids ), '%d' ) ) . ')', array_merge( array( SkillMappings::table() ), $ids ) ) ) ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared -- One placeholder per ID.
		$skills  = $skills ? $skills : AiAnalysis::catalog( '' );
		$states  = $states ? $states : self::states( (int) $student_id, $targets );
		$result  = Model::readiness( $targets, $states );
		$item    = \OhMyLMS\Curriculum\Items::get( (int) $syllabus );
		$result['missing'] = array_map(
			static function ( $id ) use ( $skills, $states ) {
				return self::describe( (int) $id, $skills, $states, array() );
			},
			array_slice( $result['missing'], 0, 10 )
		);
		return array(
			'syllabus' => (int) $syllabus,
			'name'     => $item ? (string) $item['name'] : '',
		) + $result;
	}

	/**
	 * The highest grade in scope: asked for, else the learner's profile grade, else one above the
	 * highest grade they have worked in, else the lowest grade in the library (a new learner starts
	 * at the bottom).
	 *
	 * @param int   $student_id Learner.
	 * @param array $skills     Catalog.
	 * @param array $states     States.
	 * @param int   $asked      Grade asked for, or 0.
	 * @return int 1 to 13, or 0 when the library has no grades.
	 */
	private static function ceiling( $student_id, array $skills, array $states, $asked ) {
		if ( $asked >= 1 && $asked <= Comparison::MAX_GRADE ) {
			return (int) $asked;
		}
		$profile = (string) get_user_meta( (int) $student_id, LearnerProfile::META_GRADE, true );
		if ( ctype_digit( $profile ) && (int) $profile >= 1 && (int) $profile <= 12 ) {
			return (int) $profile;
		}
		$worked = 0;
		$lowest = 0;
		foreach ( $skills as $id => $skill ) {
			$from = (int) ( $skill['grade_from'] ?? 0 );
			if ( ! $from ) {
				continue;
			}
			$lowest = $lowest ? min( $lowest, $from ) : $from;
			if ( isset( $states[ $id ] ) ) {
				$worked = max( $worked, max( $from, (int) ( $skill['grade_to'] ?? 0 ) ) );
			}
		}
		return $worked ? min( Comparison::MAX_GRADE, $worked + 1 ) : $lowest;
	}

	/**
	 * Counts of the skills in scope by level.
	 *
	 * @param array $scope  Skills in scope.
	 * @param array $states States.
	 * @return array{skills:int,started:int,proficient:int,mastered:int}
	 */
	private static function counts( array $scope, array $states ) {
		$counts = array(
			'skills'     => count( $scope ),
			'started'    => 0,
			'proficient' => 0,
			'mastered'   => 0,
		);
		foreach ( array_keys( $scope ) as $id ) {
			$level                 = Model::level( $states, $id );
			$counts['started']    += 'not-started' !== $level ? 1 : 0;
			$counts['proficient'] += Levels::is_proficient( $level ) ? 1 : 0;
			$counts['mastered']   += 'mastered' === $level ? 1 : 0;
		}
		return $counts;
	}

	/**
	 * Where to practise each shared skill: the skill itself or the equivalent objective with the most
	 * approved practice questions. Skills with no questions anywhere get no link.
	 *
	 * @param int[] $skill_ids Shared skills.
	 * @return array<int,int> Shared skill => term to practise.
	 */
	private static function practice_terms( array $skill_ids ) {
		global $wpdb;
		$skill_ids = array_values( array_unique( array_filter( array_map( 'intval', $skill_ids ) ) ) );
		if ( ! $skill_ids || ! AssessmentSchema::ready() ) {
			return array();
		}
		$owner   = array();
		$holders = implode( ',', array_fill( 0, count( $skill_ids ), '%d' ) );
		foreach ( $skill_ids as $id ) {
			$owner[ $id ] = $id;
		}
		foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT specific_term_id, shared_term_id FROM %i WHERE relation='equivalent' AND shared_term_id IN ($holders)", array_merge( array( SkillMappings::table() ), $skill_ids ) ), ARRAY_A ) as $row ) { // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared -- One placeholder per ID.
			$owner[ (int) $row['specific_term_id'] ] = (int) $row['shared_term_id'];
		}
		$terms  = array_keys( $owner );
		$counts = $wpdb->get_results(
			$wpdb->prepare(
				'SELECT s.term_id, COUNT(DISTINCT q.question_id) AS n FROM %i q JOIN %i s ON s.version_id=q.approved_version_id AND s.role=\'primary\' WHERE q.approved_version_id>0 AND q.secure=0 AND s.term_id IN (' . implode( ',', array_fill( 0, count( $terms ), '%d' ) ) . ') GROUP BY s.term_id', // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared -- One placeholder per ID.
				array_merge( array( AssessmentSchema::table( 'qb_questions' ), AssessmentSchema::table( 'qb_version_skills' ) ), $terms )
			),
			ARRAY_A
		);
		$best = array();
		foreach ( $counts as $row ) {
			$shared = $owner[ (int) $row['term_id'] ] ?? 0;
			if ( $shared && ( ! isset( $best[ $shared ] ) || (int) $row['n'] > $best[ $shared ][1] ) ) {
				$best[ $shared ] = array( (int) $row['term_id'], (int) $row['n'] );
			}
		}
		return array_map(
			static function ( $pair ) {
				return $pair[0];
			},
			$best
		);
	}

	/**
	 * A shared skill as guidance shows it.
	 *
	 * @param int   $id       Skill.
	 * @param array $skills   Catalog.
	 * @param array $states   States.
	 * @param array $practice Shared skill => term to practise.
	 * @return array
	 */
	private static function describe( $id, array $skills, array $states, array $practice ) {
		$skill = $skills[ $id ] ?? null;
		$level = Model::level( $states, $id );
		return array(
			'id'           => (int) $id,
			'name'         => $skill ? (string) $skill['name'] : '',
			'domain'       => $skill ? (string) $skill['domain'] : '',
			'grade_from'   => $skill ? (int) $skill['grade_from'] : 0,
			'grade_to'     => $skill ? (int) $skill['grade_to'] : 0,
			'level'        => $level,
			'level_label'  => Levels::label( $level ),
			'mastery'      => isset( $states[ $id ] ) ? round( (float) $states[ $id ]['mastery'] ) : null,
			'practice_url' => isset( $practice[ $id ] ) ? add_query_arg( 'ohmylms_practice', (int) $practice[ $id ], home_url( '/' ) ) : null,
		);
	}
}
