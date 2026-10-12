<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * General roadmaps assembled from stable shared skills.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Curriculum;

defined( 'ABSPATH' ) || exit;

/** Uses the existing ordered syllabus workspace without duplicating skills. */
final class Roadmaps {
	/**
	 * Create a draft roadmap referencing ordered shared IDs.
	 *
	 * @param array $data Name, subject, grade and skill_ids.
	 * @return array|\WP_Error
	 */
	public static function create( array $data ) {
		$ids = $data['skill_ids'] ?? null;
		if ( ! is_array( $ids ) || ! $ids || count( $ids ) > 200 ) {
			return Access::error( 'ohmylms_roadmap_invalid', __( 'Choose between one and 200 distinct shared skills in learning order.', 'ohmylms' ) );
		}
		foreach ( $ids as $id ) {
			if ( ! is_int( $id ) || $id < 1 ) {
				return Access::error( 'ohmylms_roadmap_invalid', __( 'Roadmap skill IDs must be positive integers.', 'ohmylms' ) );
			}
			if ( ! Comparison::shared_skill( absint( $id ) ) ) {
				return Access::error( 'ohmylms_roadmap_invalid', __( 'Every roadmap step must reference an existing shared skill.', 'ohmylms' ) );
			}
		}
		if ( count( $ids ) !== count( array_unique( $ids ) ) ) {
			return Access::error( 'ohmylms_roadmap_invalid', __( 'A shared skill can appear only once in a roadmap.', 'ohmylms' ) );
		}
		$settings = SyllabusSettings::clean(
			array(
				'subject' => $data['subject'] ?? '',
				'grade'   => $data['grade'] ?? '',
			)
		);
		if ( is_wp_error( $settings ) ) {
			return $settings;
		}
		$item = Items::create(
			array(
				'name'        => $data['name'] ?? '',
				'item_type'   => 'roadmap',
				'parent_id'   => 0,
				'position'    => 0,
				'is_syllabus' => true,
				'description' => __( 'General roadmap using reusable shared skills.', 'ohmylms' ),
			)
		);
		if ( is_wp_error( $item ) ) {
			return $item;
		}
		$id     = (int) $item['id'];
		$course = SyllabusCourse::ensure( $id );
		$result = is_wp_error( $course ) ? $course : SyllabusSettings::save( $id, $settings );
		if ( ! is_wp_error( $result ) ) {
			$group  = Syllabus::add_group( $id, array( 'name' => __( 'Roadmap skills', 'ohmylms' ) ) );
			$result = $group;
			if ( ! is_wp_error( $group ) ) {
				foreach ( $ids as $skill_id ) {
					$result = Syllabus::add_skill( $id, $group, absint( $skill_id ) );
					if ( is_wp_error( $result ) ) {
						break;
					}
				}
			}
		}
		if ( is_wp_error( $result ) ) {
			Items::delete( $id, 'delete', true );
			if ( ! is_wp_error( $course ) ) {
				wp_delete_post( $course, true );
			}
			return $result;
		}
		return Syllabus::outline( $id );
	}
}
