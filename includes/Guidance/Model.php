<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * Pure guidance rules: domain strength, skills ready to learn, reviews with implicit credit, and
 * a short personal path.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Guidance;

use OhMyLMS\Performance\Levels;

defined( 'ABSPATH' ) || exit;

/**
 * Inputs are plain arrays so the rules are tested without WordPress:
 *
 *  - skills: shared skill ID => name, domain, grade_from, grade_to.
 *  - states: skill ID => level, mastery, review_due, struggling, last_evidence_at, last_correct_at
 *    (timestamps). Skills a learner never touched are absent.
 *  - prerequisites: skill ID => prerequisite IDs.
 *  - encompasses: skill ID => included skill ID => weight (0.05 to 1).
 *
 * The ideas come from mastery learning on a knowledge graph: learn what every prerequisite already
 * supports (the frontier), fix a weak prerequisite before pushing on a stuck skill, and count work on
 * an advanced skill as partial review of the skills inside it, so fewer separate reviews are needed.
 */
final class Model {

	/** How much each level counts toward a domain's strength. */
	const LEVEL_WEIGHT = array(
		'not-started' => 0.0,
		'attempted'   => 0.25,
		'familiar'    => 0.5,
		'proficient'  => 0.85,
		'mastered'    => 1.0,
	);

	/** Steps in a personal path. */
	const PATH_LENGTH = 5;

	/**
	 * The level of a skill, Not started when the learner never touched it.
	 *
	 * @param array $states States.
	 * @param int   $id     Skill.
	 * @return string
	 */
	public static function level( array $states, $id ) {
		return (string) ( $states[ $id ]['level'] ?? 'not-started' );
	}

	/**
	 * The skills in scope: those usually learned up to a grade (all, when no grade is known).
	 *
	 * @param array $skills  Skills.
	 * @param int   $ceiling Highest grade in scope, or 0 for every grade.
	 * @return array Skills in scope.
	 */
	public static function scope( array $skills, $ceiling ) {
		if ( ! $ceiling ) {
			return $skills;
		}
		return array_filter(
			$skills,
			static function ( $skill ) use ( $ceiling ) {
				return (int) ( $skill['grade_from'] ?? 0 ) <= $ceiling;
			}
		);
	}

	/**
	 * Strength in each domain: the average level weight of its skills in scope.
	 *
	 * @param array $skills  Skills in scope.
	 * @param array $states  States.
	 * @param array $labels  Domain id => label.
	 * @return array[] Each: domain, label, strength (0-100), skills, started, proficient, mastered; strongest first.
	 */
	public static function domains( array $skills, array $states, array $labels = array() ) {
		$by = array();
		foreach ( $skills as $id => $skill ) {
			$domain = (string) ( $skill['domain'] ?? '' );
			if ( '' === $domain ) {
				continue;
			}
			$level = self::level( $states, $id );
			if ( ! isset( $by[ $domain ] ) ) {
				$by[ $domain ] = array(
					'domain'     => $domain,
					'label'      => $labels[ $domain ] ?? $domain,
					'total'      => 0.0,
					'skills'     => 0,
					'started'    => 0,
					'proficient' => 0,
					'mastered'   => 0,
				);
			}
			$by[ $domain ]['total'] += self::LEVEL_WEIGHT[ $level ] ?? 0;
			++$by[ $domain ]['skills'];
			$by[ $domain ]['started']    += 'not-started' !== $level ? 1 : 0;
			$by[ $domain ]['proficient'] += Levels::is_proficient( $level ) ? 1 : 0;
			$by[ $domain ]['mastered']   += 'mastered' === $level ? 1 : 0;
		}
		foreach ( $by as &$row ) {
			$row['strength'] = (int) round( 100 * $row['total'] / max( 1, $row['skills'] ) );
			unset( $row['total'] );
		}
		unset( $row );
		usort(
			$by,
			static function ( $a, $b ) {
				return array( $b['strength'], $a['domain'] ) <=> array( $a['strength'], $b['domain'] );
			}
		);
		return array_values( $by );
	}

	/**
	 * Skills ready to learn: not yet Proficient, with every prerequisite Proficient or better.
	 * Ordered by grade, then by how many skills each would unlock, then by progress already made.
	 *
	 * @param array $skills        Skills in scope.
	 * @param array $states        States.
	 * @param array $prerequisites Skill => prerequisite IDs.
	 * @return int[] Skill IDs, best first.
	 */
	public static function frontier( array $skills, array $states, array $prerequisites ) {
		$unlocks = array();
		foreach ( $prerequisites as $skill => $needs ) {
			foreach ( (array) $needs as $need ) {
				$unlocks[ (int) $need ] = ( $unlocks[ (int) $need ] ?? 0 ) + 1;
			}
		}
		$ready = array();
		foreach ( $skills as $id => $skill ) {
			$level = self::level( $states, $id );
			if ( Levels::is_proficient( $level ) ) {
				continue;
			}
			foreach ( (array) ( $prerequisites[ $id ] ?? array() ) as $need ) {
				if ( ! Levels::is_proficient( self::level( $states, (int) $need ) ) ) {
					continue 2;
				}
			}
			$ready[ $id ] = array( (int) ( $skill['grade_from'] ?? 0 ), -( $unlocks[ $id ] ?? 0 ), -Levels::rank( $level ), (int) $id );
		}
		asort( $ready );
		return array_map( 'intval', array_keys( $ready ) );
	}

	/**
	 * Weak prerequisites behind skills a learner is stuck on: for each struggling skill, its
	 * prerequisites that are not Proficient.
	 *
	 * @param array $states        States.
	 * @param array $prerequisites Skill => prerequisite IDs.
	 * @return array[] Each: skill (stuck), fix (prerequisite to work on); most recent first.
	 */
	public static function gaps( array $states, array $prerequisites ) {
		$gaps = array();
		foreach ( $states as $id => $state ) {
			if ( empty( $state['struggling'] ) || Levels::is_proficient( (string) $state['level'] ) ) {
				continue;
			}
			foreach ( (array) ( $prerequisites[ $id ] ?? array() ) as $need ) {
				if ( ! Levels::is_proficient( self::level( $states, (int) $need ) ) ) {
					$gaps[] = array(
						'skill' => (int) $id,
						'fix'   => (int) $need,
						'at'    => (int) ( $state['last_evidence_at'] ?? 0 ),
					);
				}
			}
		}
		usort(
			$gaps,
			static function ( $a, $b ) {
				return $b['at'] <=> $a['at'];
			}
		);
		return array_map(
			static function ( $gap ) {
				unset( $gap['at'] );
				return $gap;
			},
			$gaps
		);
	}

	/**
	 * Review credit from practice on skills that include a skill: the sum of the weights of the
	 * including skills answered correctly since the skill itself was last practised.
	 *
	 * @param int   $id          Skill.
	 * @param array $states      States.
	 * @param array $encompasses Skill => included skill => weight.
	 * @return array{credit:float,from:int[]}
	 */
	public static function implicit_credit( $id, array $states, array $encompasses ) {
		$since  = (int) ( $states[ $id ]['last_evidence_at'] ?? 0 );
		$credit = 0.0;
		$from   = array();
		foreach ( $encompasses as $skill => $included ) {
			if ( ! isset( $included[ $id ] ) ) {
				continue;
			}
			$correct = (int) ( $states[ $skill ]['last_correct_at'] ?? 0 );
			if ( $correct > $since ) {
				$credit += (float) $included[ $id ];
				$from[]  = (int) $skill;
			}
		}
		return array(
			'credit' => round( $credit, 3 ),
			'from'   => $from,
		);
	}

	/**
	 * Reviews: skills due for review, minus those already covered by work on skills that include them.
	 *
	 * @param array $states      States.
	 * @param array $encompasses Skill => included skill => weight.
	 * @return array{due:int[],covered:array[]} Due skills (longest idle first), and covered ones with the skills that covered them.
	 */
	public static function reviews( array $states, array $encompasses ) {
		$due     = array();
		$covered = array();
		foreach ( $states as $id => $state ) {
			if ( empty( $state['review_due'] ) ) {
				continue;
			}
			$credit = self::implicit_credit( (int) $id, $states, $encompasses );
			if ( $credit['credit'] >= 1.0 - 1e-9 ) {
				$covered[] = array(
					'skill' => (int) $id,
					'by'    => $credit['from'],
				);
				continue;
			}
			$due[ $id ] = (int) ( $state['last_evidence_at'] ?? 0 );
		}
		asort( $due );
		return array(
			'due'     => array_map( 'intval', array_keys( $due ) ),
			'covered' => $covered,
		);
	}

	/**
	 * A short personal path: what to do next, in order.
	 *
	 *  1. One review, preferring a due skill that no ready skill includes (those reviews happen anyway).
	 *  2. One fix: a weak prerequisite behind a skill the learner is stuck on.
	 *  3. Skills to continue (started, not yet Proficient), then new skills ready to learn, preferring
	 *     ready skills that include due reviews, so one practice session counts twice.
	 *
	 * @param array $skills        Skills in scope.
	 * @param array $states        States.
	 * @param array $prerequisites Skill => prerequisite IDs.
	 * @param array $encompasses   Skill => included skill => weight.
	 * @param int   $length        Steps.
	 * @return array[] Each: skill, type (review, fix, continue or learn), reviews (due skills this step also reviews).
	 */
	public static function path( array $skills, array $states, array $prerequisites, array $encompasses, $length = self::PATH_LENGTH ) {
		$ready   = self::frontier( $skills, $states, $prerequisites );
		$reviews = self::reviews( $states, $encompasses )['due'];
		$gaps    = self::gaps( $states, $prerequisites );
		$steps   = array();
		$used    = array();
		$add     = static function ( $id, $type, array $also = array() ) use ( &$steps, &$used ) {
			if ( isset( $used[ $id ] ) ) {
				return;
			}
			$used[ $id ] = true;
			$steps[]     = array(
				'skill'   => (int) $id,
				'type'    => $type,
				'reviews' => array_values( $also ),
			);
		};
		$also_reviews = static function ( $id ) use ( $encompasses, $reviews ) {
			return array_values( array_intersect( $reviews, array_keys( (array) ( $encompasses[ $id ] ?? array() ) ) ) );
		};
		// Reviews that some ready skill already includes are done by learning that skill.
		$included = array();
		foreach ( $ready as $id ) {
			foreach ( $also_reviews( $id ) as $review ) {
				$included[ $review ] = true;
			}
		}
		foreach ( $reviews as $id ) {
			if ( empty( $included[ $id ] ) ) {
				$add( $id, 'review' );
				break;
			}
		}
		foreach ( $gaps as $gap ) {
			$add( $gap['fix'], 'fix' );
			break;
		}
		// Started skills first, then new ones; within each, ready skills that also review come first.
		$continuing = array();
		$fresh      = array();
		foreach ( $ready as $position => $id ) {
			$order = array( -count( $also_reviews( $id ) ), $position );
			if ( Levels::is_developing( self::level( $states, $id ) ) ) {
				$continuing[ $id ] = $order;
			} else {
				$fresh[ $id ] = $order;
			}
		}
		asort( $continuing );
		asort( $fresh );
		foreach ( array(
			'continue' => $continuing,
			'learn'    => $fresh,
		) as $type => $list ) {
			foreach ( array_keys( $list ) as $id ) {
				if ( count( $steps ) >= $length ) {
					break 2;
				}
				$add( $id, $type, $also_reviews( $id ) );
			}
		}
		// Room left: more reviews.
		foreach ( $reviews as $id ) {
			if ( count( $steps ) >= $length ) {
				break;
			}
			if ( empty( $included[ $id ] ) ) {
				$add( $id, 'review' );
			}
		}
		return array_slice( $steps, 0, max( 1, (int) $length ) );
	}

	/**
	 * Readiness for a target (an exam or syllabus): the share of its skills that are Proficient.
	 *
	 * @param int[] $targets Shared skills the target needs.
	 * @param array $states  States.
	 * @return array{percent:int,total:int,proficient:int,missing:int[]}
	 */
	public static function readiness( array $targets, array $states ) {
		$targets = array_values( array_unique( array_map( 'intval', $targets ) ) );
		$missing = array();
		foreach ( $targets as $id ) {
			if ( ! Levels::is_proficient( self::level( $states, $id ) ) ) {
				$missing[] = $id;
			}
		}
		$total = count( $targets );
		return array(
			'percent'    => $total ? (int) round( 100 * ( $total - count( $missing ) ) / $total ) : 0,
			'total'      => $total,
			'proficient' => $total - count( $missing ),
			'missing'    => $missing,
		);
	}
}
