<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the established Composer class/file mapping; see docs/CODING-STANDARDS.md.
/**
 * A draft course made from a syllabus: its domains become units and its skills are linked.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Curriculum;

use OhMyLMS\Learning\Catalog;
use OhMyLMS\Utility\Transaction;

defined( 'ABSPATH' ) || exit;

/** Saves authors from re-typing the structure a syllabus already has. */
final class CourseFromSyllabus {

	/**
	 * Create the course.
	 *
	 * Each top-level folder of the syllabus becomes a unit, every skill in the syllabus becomes a syllabus
	 * objective of the course, and each skill is also placed in its unit in the course's skill list, as an
	 * optional outcome the author can make required later. No content is created.
	 *
	 * @param int    $syllabus_id Syllabus ID.
	 * @param string $title       Course title; the syllabus name when empty.
	 * @return array|\WP_Error Course ID, name, units and the number of objectives.
	 */
	public static function create( $syllabus_id, $title = '' ) {
		$syllabus_id = (int) $syllabus_id;
		$known       = array_column( CourseObjectives::syllabuses(), null, 'id' );
		if ( ! isset( $known[ $syllabus_id ] ) ) {
			return Catalog::error( __( 'That syllabus does not exist.', 'ohmylms' ), 404 );
		}
		$outline = Syllabus::outline( $syllabus_id );
		if ( is_wp_error( $outline ) ) {
			return $outline;
		}
		$objectives = CourseObjectives::objectives( $syllabus_id );
		if ( is_wp_error( $objectives ) ) {
			return $objectives;
		}
		if ( ! $objectives || count( $objectives ) > CourseObjectives::MAX_TARGETS ) {
			return Catalog::error( __( 'This syllabus has no skills, or more than 200, so it cannot become a course in one step.', 'ohmylms' ) );
		}
		$name = trim( wp_strip_all_tags( (string) $title ) );
		if ( '' === $name ) {
			$name = $known[ $syllabus_id ]['name'];
		}
		$result = array();
		try {
			Transaction::run(
				static function () use ( $syllabus_id, $outline, $objectives, $name, &$result ) {
					$route = new \WP_REST_Request( 'POST', '/ohmylms/v1/courses' );
					$route->set_body_params(
						array(
							'name'              => $name,
							'status'            => 'draft',
							'course_type'       => 'self-paced',
							'creation_method'   => 'syllabus',
							'isCommunityEnable' => 'no',
						)
					);
					$response = rest_do_request( $route );
					$course   = $response->get_status() < 300 ? (int) ( $response->get_data()['id'] ?? 0 ) : 0;
					if ( ! $course ) {
						throw new \RuntimeException( 'Course creation failed.' );
					}
					// A new course starts with one unnamed unit; the first domain reuses it.
					$existing = Catalog::chapters( $course );
					$units    = array();
					// Only folders that hold skills become units; the syllabus's own root folder is skipped.
					$folders = array_values(
						array_filter(
							$outline['contents'],
							static function ( $content ) {
								foreach ( $content['groups'] as $group ) {
									if ( ! empty( $group['skills'] ) ) {
										return true;
									}
								}
								return false;
							}
						)
					);
					foreach ( $folders as $position => $content ) {
						$label = trim( wp_strip_all_tags( Syllabus::text( $content['name'] ) ) );
						$label = '' === $label ? __( 'Unit', 'ohmylms' ) . ' ' . ( $position + 1 ) : $label;
						if ( 0 === $position && $existing ) {
							$chapter    = Catalog::update_chapter( $course, (int) $existing[0]['id'], array( 'name' => $label ) );
							$chapter_id = (int) $existing[0]['id'];
						} else {
							$chapter    = Catalog::add_chapter( $course, $label );
							$chapter_id = is_wp_error( $chapter ) ? 0 : (int) ( is_array( $chapter ) ? ( $chapter['id'] ?? 0 ) : $chapter );
						}
						if ( is_wp_error( $chapter ) || ! $chapter_id ) {
							throw new \RuntimeException( 'Unit creation failed.' );
						}
						$units[ $position ] = array(
							'id'      => $chapter_id,
							'name'    => $label,
							'content' => $content,
						);
					}
					$mappings = array();
					$outcomes = array();
					foreach ( $units as $unit ) {
						foreach ( $unit['content']['groups'] as $group ) {
							foreach ( $group['skills'] as $skill ) {
								$term_id = (int) $skill['term_id'];
								if ( isset( $mappings[ $term_id ] ) ) {
									continue;
								}
								$mappings[ $term_id ] = array(
									'syllabus_id' => $syllabus_id,
									'term_id'     => $term_id,
								);
								$outcomes[]           = array(
									'term_id'    => $term_id,
									'target'     => 'proficient',
									'required'   => false,
									'chapter_id' => $unit['id'],
								);
							}
						}
					}
					$saved = CourseObjectives::save(
						$course,
						array(
							'mappings' => array_values( $mappings ),
							'revision' => CourseObjectives::payload( $course )['revision'],
						)
					);
					if ( is_wp_error( $saved ) ) {
						throw new \RuntimeException( 'Objectives could not be linked.' );
					}
					$draft = Catalog::save_draft(
						$course,
						array(
							'mode'     => 'traditional',
							'outcomes' => $outcomes,
						)
					);
					if ( is_wp_error( $draft ) ) {
						throw new \RuntimeException( 'Skills could not be placed.' );
					}
					$result = array(
						'id'         => $course,
						'name'       => $name,
						'units'      => array_map(
							static function ( $unit ) {
								return array(
									'id'   => $unit['id'],
									'name' => $unit['name'],
								);
							},
							$units
						),
						'objectives' => count( $mappings ),
					);
				}
			);
		} catch ( \Throwable $error ) {
			return Catalog::error( __( 'The course could not be made from this syllabus. Nothing was created.', 'ohmylms' ), 500 );
		}
		return $result;
	}
}
