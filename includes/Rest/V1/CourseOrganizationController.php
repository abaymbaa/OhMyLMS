<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Placement;
use OhMyLMS\Curriculum\Schema;
use OhMyLMS\QuestionBank\AccessPolicy;
use OhMyLMS\Tracks\Tracks;
use WP_REST_Request;
use WP_REST_Server;

defined( 'ABSPATH' ) || exit;

/**
 * How a course is organized: the curriculum items it is linked to and the Learning Tracks it belongs
 * to. This replaces course categories and tags in the course editor.
 *
 *  - Anyone who may edit the course can read the outlines and change its curriculum links.
 *  - Learning Tracks are curated groupings that learners see, so only administrators change which
 *    tracks a course is in; other editors see them read-only.
 *  - Creating or restructuring curriculum items and tracks stays in the Curriculum and Learning Tracks pages.
 */
class CourseOrganizationController extends RestController {
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/courses/(?P<id>\d+)/organization',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'show' ),
					'permission_callback' => array( $this, 'course_permission' ),
				),
				array(
					'methods'             => 'PUT,PATCH',
					'callback'            => array( $this, 'update' ),
					'permission_callback' => array( $this, 'course_permission' ),
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/curriculum/outline',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'curriculum_outline' ),
					'permission_callback' => array( $this, 'author_permission' ),
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/tracks/outline',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'tracks_outline' ),
					'permission_callback' => array( $this, 'author_permission' ),
				),
			)
		);
	}

	public function author_permission() {
		if ( ! Schema::ready() ) {
			return new \WP_Error( 'ohmylms_curriculum_unavailable', __( 'Curriculum storage is not installed yet.', 'ohmylms' ), array( 'status' => 503 ) ); }
		return AccessPolicy::check( current_user_can( 'edit_posts' ) );
	}

	public function course_permission( WP_REST_Request $request ) {
		$ready = $this->author_permission();
		return is_wp_error( $ready ) ? $ready : $this->check_object_permission( $request, 'edit', OHMYLMS_COURSE_CPT );
	}

	private function describe( $course_id ) {
		return rest_ensure_response(
			array(
				'curriculum'        => Placement::items( $course_id ),
				'tracks'            => Placement::tracks( $course_id ),
				'can_manage_tracks' => Access::can_manage(),
			)
		);
	}

	public function show( WP_REST_Request $request ) {
		return $this->describe( (int) $request['id'] );
	}

	/** Replace a course's curriculum links and, for administrators, its tracks. Send only what changes. */
	public function update( WP_REST_Request $request ) {
		$course_id  = (int) $request['id'];
		$curriculum = $request->get_param( 'curriculum_ids' );
		$tracks     = $request->get_param( 'track_ids' );
		if ( $curriculum !== null && ! is_array( $curriculum ) ) {
			return Access::error( 'ohmylms_organization_invalid', __( 'Send the curriculum items as a list.', 'ohmylms' ) ); }
		if ( $tracks !== null && ! is_array( $tracks ) ) {
			return Access::error( 'ohmylms_organization_invalid', __( 'Send the learning tracks as a list.', 'ohmylms' ) ); }
		if ( is_array( $tracks ) && ! Access::can_manage() ) {
			$wanted  = array_values( array_unique( array_filter( array_map( 'intval', $tracks ) ) ) );
			$current = Placement::track_ids( $course_id );
			sort( $wanted );
			sort( $current );
			if ( $wanted !== $current ) {
				return AccessPolicy::denied( __( 'Only administrators can change which learning tracks a course is in.', 'ohmylms' ) ); }
			$tracks = null;
		}
		if ( is_array( $curriculum ) ) {
			$result = Placement::set_items( $course_id, $curriculum );
			if ( is_wp_error( $result ) ) {
				return $result; }
		}
		if ( is_array( $tracks ) ) {
			$result = Placement::set_tracks( $course_id, $tracks );
			if ( is_wp_error( $result ) ) {
				return $result; }
		}
		return $this->describe( $course_id );
	}

	/** The whole structure, names only, for pickers. With `courses=1` each item also lists its published courses. */
	public function curriculum_outline( WP_REST_Request $request ) {
		$courses = $request->get_param( 'courses' ) ? Placement::published_courses_by_item() : null;
		return rest_ensure_response(
			array(
				'items' => array_map(
					static function ( $row ) use ( $courses ) {
						$item = array(
							'id'        => (int) $row['id'],
							'parent_id' => (int) $row['parent_id'],
							'position'  => (int) $row['position'],
							'name'      => $row['name'],
							'item_type' => $row['item_type'],
							'code'      => $row['code'],
							'version'   => $row['version'],
						);
						if ( $courses !== null ) {
							$item['courses'] = $courses[ (int) $row['id'] ] ?? array(); }
						return $item;
					},
					Items::all()
				),
			)
		);
	}

	public function tracks_outline() {
		return rest_ensure_response(
			array(
				'tracks' => array_map(
					static function ( $row ) {
						return array(
							'id'     => (int) $row['id'],
							'title'  => $row['title'],
							'status' => $row['status'],
						);
					},
					Tracks::all()
				),
			)
		);
	}
}
