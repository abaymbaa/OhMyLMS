<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * Syllabus comparison reads and shared skill editing.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Curriculum;

use OhMyLMS\Skills\Taxonomy;

defined( 'ABSPATH' ) || exit;

/** Keeps shared abilities separate from syllabus requirements. */
final class Comparison {

	const SUBJECT_META = '_ohmylms_shared_subject';
	const TOPIC_META   = '_ohmylms_shared_topic';
	const OPTION       = 'ohmylms_subject_syllabuses';

	/**
	 * Return syllabus selectors with their stored version and curriculum path.
	 *
	 * @return array
	 */
	public static function syllabuses() {
		$rows = array();
		foreach ( Items::all() as $item ) {
			if ( ! empty( $item['is_syllabus'] ) ) {
				$rows[] = array(
					'id'      => (int) $item['id'],
					'name'    => $item['name'],
					'code'    => $item['code'],
					'version' => $item['version'],
					'path'    => Items::path_names( (int) $item['id'], false ),
				);
			}
		}
		return $rows;
	}

	/**
	 * Flatten the selected syllabus only, retaining source order and memberships.
	 *
	 * @param int $syllabus_id Syllabus ID.
	 * @return array|\WP_Error
	 */
	public static function objectives( $syllabus_id ) {
		$outline = Syllabus::outline( (int) $syllabus_id );
		if ( is_wp_error( $outline ) ) {
			return $outline;
		}
		$rows = array();
		foreach ( $outline['contents'] as $content ) {
			foreach ( $content['groups'] as $group ) {
				foreach ( $group['skills'] as $skill ) {
					$id = $skill['term_id'];
					if ( ! isset( $rows[ $id ] ) ) {
						$rows[ $id ] = $skill + array( 'memberships' => array() );
					}
					$rows[ $id ]['memberships'][] = array(
						'topic_id' => $content['id'],
						'topic'    => $content['name'],
						'group'    => $group['name'],
						'code'     => $group['code'],
					);
				}
			}
		}
		return array_values( $rows );
	}

	/**
	 * A content revision independent of timestamp precision.
	 *
	 * @param mixed $value Current content.
	 * @return string
	 */
	public static function revision( $value ) {
		return hash( 'sha256', wp_json_encode( $value ) );
	}

	/**
	 * Describe an explicitly designated shared skill, including impact.
	 *
	 * @param int $id Skill ID.
	 * @return array|null
	 */
	public static function shared_skill( $id ) {
		$skill = Taxonomy::describe( (int) $id );
		if ( ! $skill || ! metadata_exists( 'term', $id, self::SUBJECT_META ) ) {
			return null;
		}
		$skill['topic']    = (string) get_term_meta( $id, self::TOPIC_META, true );
		$skill['subject']  = (string) get_term_meta( $id, self::SUBJECT_META, true );
		$skill['mappings'] = SkillMappings::for_skill( $id );
		$skill['revision'] = self::revision( array( $skill['name'], $skill['description'], $skill['topic'], $skill['subject'], $skill['mappings'] ) );
		return $skill;
	}

	/**
	 * Search explicitly designated mathematics skills, with bounded paging.
	 *
	 * @param array $params Search and paging.
	 * @return array
	 */
	public static function shared_skills( array $params ) {
		$args = array(
			'taxonomy'   => Taxonomy::NAME,
			'hide_empty' => false,
			'meta_key'   => self::SUBJECT_META,
			'meta_value' => sanitize_text_field( $params['subject'] ?? '' ),
			'search'     => sanitize_text_field( $params['search'] ?? '' ),
			'orderby'    => 'name',
		);
		if ( empty( $params['subject'] ) ) {
			unset( $args['meta_value'] );
		}
		$total = wp_count_terms( $args );
		$terms = get_terms(
			$args + array(
				'number' => 30,
				'offset' => ( max( 1, (int) ( $params['page'] ?? 1 ) ) - 1 ) * 30,
			)
		);
		return array(
			'items' => is_array( $terms ) ? array_map(
				static function ( $term ) {
					return self::shared_skill( $term->term_id ); },
				$terms
			) : array(),
			'total' => is_wp_error( $total ) ? 0 : (int) $total,
		);
	}

	/**
	 * Create or edit a shared ability while retaining its taxonomy identity.
	 *
	 * @param int   $id Existing ID, or zero for creation.
	 * @param array $data Name, description, topic and expected revision.
	 * @return array|\WP_Error
	 */
	public static function save_shared( $id, array $data ) {
		global $wpdb;
		$name        = sanitize_text_field( $data['name'] ?? '' );
		$description = sanitize_textarea_field( $data['description'] ?? '' );
		$topic       = sanitize_text_field( $data['topic'] ?? '' );
		$subject     = sanitize_text_field( $data['subject'] ?? '' );
		if ( '' === $name || mb_strlen( $subject ) > 100 || mb_strlen( $name ) > 190 || mb_strlen( $description ) > 2000 || mb_strlen( $topic ) > 100 ) {
			return Access::error( 'ohmylms_shared_invalid', __( 'Enter a name up to 190 characters, a scope up to 2000 characters and a topic up to 100 characters.', 'ohmylms' ) );
		}
		$lock = SkillMappings::LOCK . '-' . md5( $wpdb->prefix );
		if ( '1' !== (string) $wpdb->get_var( $wpdb->prepare( 'SELECT GET_LOCK(%s, 5)', $lock ) ) ) {
			return Access::error( 'ohmylms_mapping_busy', __( 'Another mapping change is being saved. Try again.', 'ohmylms' ), 409 );
		}
		try {
			if ( $id ) {
				$previous = self::shared_skill( $id );
				if ( ! $previous ) {
					return Access::error( 'ohmylms_shared_missing', __( 'Shared skill not found.', 'ohmylms' ), 404 );
				}
				if ( ( $data['expected_revision'] ?? '' ) !== $previous['revision'] ) {
					return Access::error( 'ohmylms_shared_stale', __( 'This skill or its mappings changed. Reload it before saving.', 'ohmylms' ), 409 );
				}
				$result = wp_update_term(
					$id,
					Taxonomy::NAME,
					array(
						'name'        => $name,
						'description' => $description,
					)
				);
			} else {
				$result = wp_insert_term(
					$name,
					Taxonomy::NAME,
					array(
						'description' => $description,
						'slug'        => 'shared-skill-' . wp_generate_uuid4(),
					)
				);
			}
			if ( is_wp_error( $result ) ) {
				return $result;
			}
			$id = (int) $result['term_id'];
			update_term_meta( $id, self::SUBJECT_META, $subject );
			update_term_meta( $id, self::TOPIC_META, $topic );
			return self::shared_skill( $id );
		} finally {
			$wpdb->get_var( $wpdb->prepare( 'SELECT RELEASE_LOCK(%s)', $lock ) );
		}
	}

	/**
	 * Mapping coverage counts objectives, rather than mapping rows.
	 *
	 * @param array $rows Objectives with maps_to.
	 * @return array
	 */
	public static function coverage( array $rows ) {
		$counts = array(
			'total'        => count( $rows ),
			'equivalent'   => 0,
			'related_only' => 0,
			'unmapped'     => 0,
			'shared'       => 0,
		);
		foreach ( $rows as $row ) {
			if ( metadata_exists( 'term', $row['term_id'], self::SUBJECT_META ) ) {
				++$counts['shared'];
				continue;
			}
			$relations = array_column( $row['maps_to'], 'relation' );
			$key       = in_array( 'equivalent', $relations, true ) ? 'equivalent' : ( $relations ? 'related_only' : 'unmapped' );
			++$counts[ $key ];
		}
		return $counts;
	}

	/**
	 * Attach directional mappings in one read for selected source IDs.
	 *
	 * @param array $rows Source objectives.
	 * @return array
	 */
	public static function attach_mappings( array $rows ) {
		$by_id = array();
		foreach ( $rows as $row ) {
			$row['maps_to']           = array();
			$row['is_shared']         = metadata_exists( 'term', $row['term_id'], self::SUBJECT_META );
			$by_id[ $row['term_id'] ] = $row;
		}
		if ( ! $by_id ) {
			return array();
		}
		foreach ( SkillMappings::all( array_keys( $by_id ) ) as $mapping ) {
			$id = (int) $mapping['specific_term_id'];
			if ( ! isset( $by_id[ $id ] ) ) {
				continue;
			}
			$shared_id                 = (int) $mapping['shared_term_id'];
			$term                      = get_term( $shared_id, Taxonomy::NAME );
			$by_id[ $id ]['maps_to'][] = array(
				'id'          => (int) $mapping['id'],
				'specific_id' => $id,
				'shared_id'   => $shared_id,
				'shared'      => $term && ! is_wp_error( $term ) ? array(
					'id'   => $shared_id,
					'name' => Taxonomy::plain( $term->name ),
					'code' => (string) get_term_meta( $shared_id, Syllabus::CODE_META, true ),
				) : null,
				'relation'    => $mapping['relation'],
				'note'        => (string) $mapping['note'],
				'revision'    => self::revision( array( $mapping['relation'], (string) $mapping['note'] ) ),
			);
		}
		return array_values( $by_id );
	}

	/**
	 * Scope and filter a comparison to one syllabus, returning a bounded page.
	 *
	 * @param int   $id Syllabus ID.
	 * @param array $params Search, topic, category, status, shared_id and page.
	 * @return array|\WP_Error
	 */
	public static function page( $id, array $params ) {
		$rows = self::objectives( $id );
		if ( is_wp_error( $rows ) ) {
			return $rows;
		}
		$topics = array();
		$rows   = self::attach_mappings( $rows );
		foreach ( $rows as &$row ) {
			foreach ( $row['memberships'] as $membership ) {
				$topics[ $membership['topic_id'] ] = $membership['topic'];
			}
		}
		unset( $row );
		$coverage = self::coverage( $rows );
		$search   = mb_strtolower( sanitize_text_field( $params['search'] ?? '' ) );
		$filtered = array_values(
			array_filter(
				$rows,
				static function ( $row ) use ( $params, $search ) {
					$relations = array_column( $row['maps_to'], 'relation' );
					$status    = $row['is_shared'] ? 'shared' : ( in_array( 'equivalent', $relations, true ) ? 'equivalent' : ( $relations ? 'related_only' : 'unmapped' ) );
					return ( '' === $search || false !== mb_strpos( mb_strtolower( implode( ' ', array( $row['name'], $row['code'], $row['objective'], $row['description'] ) ) ), $search ) )
					&& ( empty( $params['topic'] ) || in_array( (int) $params['topic'], array_column( $row['memberships'], 'topic_id' ), true ) )
					&& ( empty( $params['category'] ) || $params['category'] === $row['category'] )
					&& ( empty( $params['status'] ) || $params['status'] === $status )
					&& ( empty( $params['shared_id'] ) || in_array( (int) $params['shared_id'], array_column( $row['maps_to'], 'shared_id' ), true ) );
				}
			)
		);
		return array(
			'syllabus' => Items::describe( Items::get( $id ) ),
			'settings' => SyllabusSettings::get( $id ),
			'path'     => Items::path_names( $id, false ),
			'topics'   => $topics,
			'coverage' => $coverage,
			'total'    => count( $filtered ),
			'items'    => array_slice( $filtered, ( max( 1, (int) ( $params['page'] ?? 1 ) ) - 1 ) * 30, 30 ),
		);
	}
}
