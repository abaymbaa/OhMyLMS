<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * The guidance engine: what a learner is strong in, what to do next and how ready they are.
 *
 * @package OhMyLMS\Performance
 */

namespace OhMyLMS\Performance;

use OhMyLMS\Assessment\Schema;
use OhMyLMS\Curriculum\AiAnalysis;
use OhMyLMS\Curriculum\Comparison;
use OhMyLMS\Curriculum\Schema as CurriculumSchema;
use OhMyLMS\Curriculum\SkillEdges;
use OhMyLMS\Curriculum\SkillMappings;
use OhMyLMS\Practice\Selector;
use OhMyLMS\Skills\Mastery;
use OhMyLMS\Skills\Taxonomy;

defined( 'ABSPATH' ) || exit;

/**
 * Reads the learner's skill states, the shared skill library (domains, grades, prerequisites,
 * "encompasses" links) and the syllabuses, and hands them to GuidanceModel. Read only: levels and
 * review dates in `student_skill_state` are never changed here; review credit only changes what is
 * suggested.
 */
final class Guidance {

	/** Most syllabuses read for readiness. */
	const MAX_SYLLABUSES = 30;

	/**
	 * Results already computed in this request.
	 *
	 * @var array<int,array>
	 */
	private static $cache = array();

	/**
	 * Everything the learner's guidance shows.
	 *
	 * @param int $student_id Learner.
	 * @param int $limit      Most next steps.
	 * @return array areas, next_steps, reviews (due, covered, fresh), readiness, review_after_days.
	 */
	public static function for_student( $student_id, $limit = 6 ) {
		$student_id = (int) $student_id;
		$key        = $student_id . ':' . (int) $limit;
		if ( isset( self::$cache[ $key ] ) ) {
			return self::$cache[ $key ];
		}
		$days   = max( 1, (int) ( Mastery::rules()['review_after_days'] ?? 7 ) );
		$result = array(
			'areas'             => array(),
			'next_steps'        => array(),
			'reviews'           => array(
				'due'     => 0,
				'covered' => array(),
				'fresh'   => 0,
			),
			'readiness'         => array(),
			'review_after_days' => $days,
		);
		if ( ! $student_id || ! Schema::ready() ) {
			return $result;
		}
		$states     = self::states( $student_id );
		$syllabuses = self::syllabus_objectives();
		$objectives = array();
		foreach ( $syllabuses as $syllabus ) {
			$objectives = array_merge( $objectives, $syllabus['objectives'] );
		}
		$pool   = self::pool( array_merge( array_keys( $states ), $objectives ) );
		$pooled = GuidanceModel::pooled( $states, $pool );
		$info   = self::library( $pooled, $pool );
		$links  = self::encompasses( array_keys( $pooled ) );

		$areas   = GuidanceModel::areas( $pooled, $info );
		$reviews = GuidanceModel::reviews( $pooled, $links, time(), $days );
		$ready   = GuidanceModel::ready( $pooled, $info, $areas );
		$steps   = GuidanceModel::next_steps( $pooled, $reviews, $ready, $limit );

		$domains = Comparison::domains();
		foreach ( $areas as $area ) {
			$result['areas'][] = $area + array(
				'label'       => $domains[ $area['domain'] ] ?? ucfirst( $area['domain'] ),
				'band'        => GuidanceModel::strength_band( $area['strength'] ),
				'grade_label' => $area['grade'] ? Comparison::grade_label( $area['grade'] ) : '',
			);
		}
		foreach ( $steps as $step ) {
			$item = self::step( $step, $pooled, $pool, $info );
			if ( $item ) {
				$result['next_steps'][] = $item;
			}
		}
		foreach ( $reviews as $skill => $review ) {
			if ( 'due' === $review['status'] ) {
				++$result['reviews']['due'];
			} elseif ( 'fresh' === $review['status'] ) {
				++$result['reviews']['fresh'];
			} elseif ( self::name( $skill ) ) {
				$result['reviews']['covered'][] = array(
					'skill'       => self::skill( $skill ),
					'credit'      => $review['credit'],
					'covered_by'  => self::covered_by( $review['covered_by'] ),
					'due_at'      => gmdate( 'Y-m-d H:i:s', $review['due_at'] ),
					'next_due_at' => gmdate( 'Y-m-d H:i:s', $review['effective_due_at'] ),
				);
			}
		}
		foreach ( $syllabuses as $syllabus ) {
			$readiness = GuidanceModel::readiness( $syllabus['objectives'], $pooled, $pool );
			if ( ! $readiness['ready'] && ! $readiness['learning'] ) {
				continue;
			}
			$readiness['gaps']     = array_values( array_filter( array_map( array( __CLASS__, 'skill' ), $readiness['gaps'] ) ) );
			$result['readiness'][] = array(
				'syllabus' => array(
					'id'   => $syllabus['id'],
					'name' => $syllabus['name'],
					'code' => $syllabus['code'],
					'path' => $syllabus['path'],
				),
			) + $readiness;
		}
		usort(
			$result['readiness'],
			static function ( $left, $right ) {
				return $right['percent'] <=> $left['percent'];
			}
		);
		self::$cache[ $key ] = $result;
		return $result;
	}

	/**
	 * The learner's level on each skill, pooled the same way as guidance: an objective with an
	 * equivalent mapping counts as its shared skill. Used by the student skill map.
	 *
	 * @param int $student_id Learner.
	 * @return array<int,string> Skill => level, for skills the learner has started.
	 */
	public static function levels( $student_id ) {
		if ( ! (int) $student_id || ! Schema::ready() ) {
			return array();
		}
		$states = self::states( (int) $student_id );
		$levels = array();
		foreach ( GuidanceModel::pooled( $states, self::pool( array_keys( $states ) ) ) as $skill => $entry ) {
			$levels[ $skill ] = $entry['level'];
		}
		return $levels;
	}

	/** Forget results computed earlier in this request (after evidence changes, and in tests). */
	public static function flush() {
		self::$cache = array();
	}

	/**
	 * The learner's stored states.
	 *
	 * @param int $student_id Learner.
	 * @return array<int,array>
	 */
	private static function states( $student_id ) {
		global $wpdb;
		$states = array();
		$rows   = $wpdb->get_results( $wpdb->prepare( 'SELECT term_id, level, struggling, last_evidence_at FROM %i WHERE student_id=%d', Schema::table( 'student_skill_state' ), (int) $student_id ), ARRAY_A ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching -- Fresh read of the learner's own states.
		foreach ( $rows as $row ) {
			$states[ (int) $row['term_id'] ] = array(
				'level'            => (string) $row['level'],
				'struggling'       => (bool) $row['struggling'],
				'last_evidence_at' => $row['last_evidence_at'] ? strtotime( $row['last_evidence_at'] . ' UTC' ) : null,
			);
		}
		return $states;
	}

	/**
	 * Equivalent mappings of the given terms: term => shared skill.
	 *
	 * @param int[] $terms Terms.
	 * @return array<int,int>
	 */
	private static function pool( array $terms ) {
		$terms = array_values( array_unique( array_filter( array_map( 'intval', $terms ) ) ) );
		$pool  = array();
		if ( ! $terms || ! CurriculumSchema::ready() ) {
			return $pool;
		}
		$wanted = array_flip( $terms );
		foreach ( array_chunk( $terms, 500 ) as $chunk ) {
			foreach ( SkillMappings::all( $chunk ) as $mapping ) {
				$specific = (int) $mapping['specific_term_id'];
				if ( 'equivalent' === $mapping['relation'] && isset( $wanted[ $specific ] ) && ! isset( $pool[ $specific ] ) ) {
					$pool[ $specific ] = (int) $mapping['shared_term_id'];
				}
			}
		}
		return $pool;
	}

	/**
	 * Domain, grades and prerequisites of every skill guidance can name: the shared library, the
	 * learner's own skills, and any other skill with prerequisites. Prerequisites are read through
	 * the pool, so an objective counts as its shared skill.
	 *
	 * @param array<int,array> $pooled Pooled skills.
	 * @param array<int,int>   $pool   Term => shared skill.
	 * @return array<int,array>
	 */
	private static function library( array $pooled, array $pool ) {
		$terms = get_terms(
			array(
				'taxonomy'   => Taxonomy::NAME,
				'hide_empty' => false,
				'meta_query' => array( // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query -- Bounded to skills that carry a placement or prerequisites.
					'relation' => 'OR',
					array(
						'key'     => Comparison::SUBJECT_META,
						'compare' => 'EXISTS',
					),
					array(
						'key'     => '_ohmylms_prerequisites',
						'compare' => 'EXISTS',
					),
				),
			)
		);
		$ids   = is_wp_error( $terms ) ? array() : array_map( 'intval', wp_list_pluck( $terms, 'term_id' ) );
		$ids   = array_values( array_unique( array_merge( $ids, array_keys( $pooled ) ) ) );
		$info  = array();
		update_termmeta_cache( $ids );
		foreach ( $ids as $id ) {
			// A mapped objective is represented by its shared skill.
			if ( isset( $pool[ $id ] ) ) {
				continue;
			}
			$shared        = metadata_exists( 'term', $id, Comparison::SUBJECT_META );
			$prerequisites = array();
			foreach ( Taxonomy::prerequisites( $id ) as $prerequisite ) {
				$prerequisites[] = (int) ( $pool[ $prerequisite ] ?? $prerequisite );
			}
			$info[ $id ] = array(
				'domain'        => (string) get_term_meta( $id, $shared ? Comparison::DOMAIN_META : AiAnalysis::HINT_DOMAIN, true ),
				'grade_from'    => (int) get_term_meta( $id, $shared ? Comparison::GRADE_FROM_META : AiAnalysis::HINT_FROM, true ),
				'grade_to'      => (int) get_term_meta( $id, $shared ? Comparison::GRADE_TO_META : AiAnalysis::HINT_TO, true ),
				'prerequisites' => array_values( array_unique( array_diff( $prerequisites, array( $id ) ) ) ),
			);
		}
		return $info;
	}

	/**
	 * "Encompasses" links out of the learner's skills, followed as deep as review credit reaches.
	 *
	 * @param int[] $skills Pooled skills.
	 * @return array<int,array<int,float>>
	 */
	private static function encompasses( array $skills ) {
		$links = array();
		if ( ! CurriculumSchema::ready() ) {
			return $links;
		}
		$next = $skills;
		for ( $depth = 0; $depth < GuidanceModel::MAX_DEPTH && $next; $depth++ ) {
			$found = SkillEdges::encompasses_many( $next );
			$links = $links + $found;
			$next  = array();
			foreach ( $found as $inside ) {
				foreach ( array_keys( $inside ) as $other ) {
					if ( ! isset( $links[ $other ] ) ) {
						$next[] = (int) $other;
					}
				}
			}
			$next = array_values( array_unique( $next ) );
		}
		return $links;
	}

	/**
	 * Every syllabus with its objective terms, in syllabus order.
	 *
	 * @return array[] id, name, code, path, objectives.
	 */
	private static function syllabus_objectives() {
		if ( ! CurriculumSchema::ready() ) {
			return array();
		}
		$result = array();
		foreach ( array_slice( Comparison::syllabuses(), 0, self::MAX_SYLLABUSES ) as $syllabus ) {
			$rows = Comparison::objectives( (int) $syllabus['id'] );
			if ( is_wp_error( $rows ) || ! $rows ) {
				continue;
			}
			$result[] = array(
				'id'         => (int) $syllabus['id'],
				'name'       => (string) $syllabus['name'],
				'code'       => (string) $syllabus['code'],
				'path'       => $syllabus['path'],
				'objectives' => array_map( 'intval', array_column( $rows, 'term_id' ) ),
			);
		}
		return $result;
	}

	/**
	 * One next step for display.
	 *
	 * @param array            $step   From GuidanceModel::next_steps.
	 * @param array<int,array> $pooled Pooled skills.
	 * @param array<int,int>   $pool   Term => shared skill.
	 * @param array<int,array> $info   Library.
	 * @return array|null
	 */
	private static function step( array $step, array $pooled, array $pool, array $info ) {
		$skill = self::skill( $step['skill'] );
		if ( ! $skill ) {
			return null;
		}
		$members = $pooled[ $step['skill'] ]['terms'] ?? array();
		$item    = array(
			'type'          => $step['type'],
			'skill'         => $skill,
			'practice_id'   => self::practice_target( $step['skill'], $members, $pool ),
			'lessons'       => array(),
			'prerequisites' => array(),
			'credit'        => 0.0,
			'covered_by'    => array(),
		);
		if ( 'help' === $step['type'] ) {
			$item['message'] = __( 'Recent answers on this skill had errors. Revisiting the lesson or a prerequisite may help.', 'ohmylms' );
			$item['lessons'] = self::lessons( array_merge( array( $step['skill'] ), $members ) );
			foreach ( $info[ $step['skill'] ]['prerequisites'] ?? array() as $prerequisite ) {
				$weak = self::skill( $prerequisite );
				if ( $weak && ( ! isset( $pooled[ $prerequisite ] ) || ! Levels::is_proficient( $pooled[ $prerequisite ]['level'] ) ) ) {
					$item['prerequisites'][] = $weak + array( 'practice_id' => self::practice_target( $prerequisite, $pooled[ $prerequisite ]['terms'] ?? array(), $pool ) );
				}
			}
		} elseif ( 'review' === $step['type'] ) {
			$item['message']    = __( 'Time for a short review to keep this skill fresh.', 'ohmylms' );
			$item['credit']     = $step['credit'];
			$item['covered_by'] = self::covered_by( $step['covered_by'] );
		} else {
			$item['message']       = __( 'You are ready to start this skill.', 'ohmylms' );
			$item['lessons']       = self::lessons( array( $step['skill'] ) );
			$item['prerequisites'] = array_values( array_filter( array_map( array( __CLASS__, 'skill' ), $step['prerequisites'] ) ) );
		}
		return $item;
	}

	/**
	 * The skill to open in practice: the skill itself, or the first of the learner's or the mapped
	 * objectives that has practice questions.
	 *
	 * @param int            $skill   Pooled skill.
	 * @param int[]          $members Learner's terms pooled onto it, best first.
	 * @param array<int,int> $pool    Term => shared skill.
	 * @return int 0 when nothing can be practised.
	 */
	private static function practice_target( $skill, array $members, array $pool ) {
		$candidates = array_merge( array( (int) $skill ), $members );
		foreach ( $pool as $specific => $shared ) {
			if ( (int) $shared === (int) $skill ) {
				$candidates[] = (int) $specific;
			}
		}
		foreach ( array_slice( array_values( array_unique( $candidates ) ), 0, 6 ) as $candidate ) {
			if ( Selector::pool( $candidate ) ) {
				return $candidate;
			}
		}
		return 0;
	}

	/**
	 * Up to two published lessons linked to any of the terms.
	 *
	 * @param int[] $terms Terms.
	 * @return array[] id, title, url.
	 */
	private static function lessons( array $terms ) {
		$lessons = array();
		foreach ( array_unique( $terms ) as $term ) {
			foreach ( Taxonomy::linked_posts( (int) $term, OHMYLMS_LESSON_CPT ) as $id ) {
				if ( 'publish' === get_post_status( $id ) && ! isset( $lessons[ $id ] ) ) {
					$lessons[ $id ] = array(
						'id'    => (int) $id,
						'title' => wp_strip_all_tags( get_the_title( $id ) ),
						'url'   => get_permalink( $id ),
					);
				}
				if ( count( $lessons ) >= 2 ) {
					return array_values( $lessons );
				}
			}
		}
		return array_values( $lessons );
	}

	/**
	 * Skills that earned review credit, for display.
	 *
	 * @param array<int,float> $by Skill => weight.
	 * @return array[] id, name, weight.
	 */
	private static function covered_by( array $by ) {
		$result = array();
		foreach ( $by as $id => $weight ) {
			$skill = self::skill( $id );
			if ( $skill ) {
				$result[] = $skill + array( 'weight' => (float) $weight );
			}
		}
		return $result;
	}

	/**
	 * A skill's id and name.
	 *
	 * @param int $id Skill.
	 * @return array|null
	 */
	public static function skill( $id ) {
		$name = self::name( $id );
		return $name ? array(
			'id'   => (int) $id,
			'name' => $name,
		) : null;
	}

	/**
	 * A skill's plain name.
	 *
	 * @param int $id Skill.
	 * @return string Empty when the skill is gone.
	 */
	private static function name( $id ) {
		$term = get_term( (int) $id, Taxonomy::NAME );
		return $term && ! is_wp_error( $term ) ? Taxonomy::plain( $term->name ) : '';
	}
}
