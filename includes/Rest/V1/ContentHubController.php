<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Learning\Catalog;
use OhMyLMS\Learning\Schema;
use WP_REST_Request;
use WP_REST_Server;

defined( 'ABSPATH' ) || exit;

/**
 * Content Hub: the catalog of a grade, exam or subject (a course) built from chapters and skills, the
 * lesson library, and the pickers behind both. Every write goes through the same validation as the
 * course's Learning tab; learners see changes only after `catalog/{id}/publish`.
 */
class ContentHubController extends RestController {
	public function register_routes() {
		$edit   = array( $this, 'author' );
		$course = array( $this, 'course' );
		$base   = '/content-hub';
		register_rest_route(
			$this->namespace,
			$base . '/courses',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'courses' ),
					'permission_callback' => $edit,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$base . '/targets',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'targets' ),
					'permission_callback' => $edit,
				),
			)
		);
		$catalog = $base . '/catalog/(?P<id>\d+)';
		register_rest_route(
			$this->namespace,
			$catalog,
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'show' ),
					'permission_callback' => $course,
				),
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'save' ),
					'permission_callback' => $course,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$catalog . '/publish',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'publish' ),
					'permission_callback' => $course,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$catalog . '/chapters',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'add_chapter' ),
					'permission_callback' => $course,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$catalog . '/chapters/order',
			array(
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'reorder_chapters' ),
					'permission_callback' => $course,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$catalog . '/chapters/(?P<chapter_id>\d+)',
			array(
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'rename_chapter' ),
					'permission_callback' => $course,
				),
				array(
					'methods'             => WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_chapter' ),
					'permission_callback' => $course,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$base . '/lessons',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'lessons' ),
					'permission_callback' => $edit,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$base . '/lessons/trash',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'trash_lessons' ),
					'permission_callback' => $edit,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$base . '/lessons/(?P<id>\d+)/skills',
			array(
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'lesson_skills' ),
					'permission_callback' => $edit,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			$base . '/lessons/(?P<id>\d+)/duplicate',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'duplicate_lesson' ),
					'permission_callback' => $edit,
				),
			)
		);
	}

	public function author() {
		if ( ! Schema::ready() ) {
			return Catalog::error( __( 'Learning storage is unavailable.', 'ohmylms' ), 503, 'ohmylms_learning_unavailable' ); }
		return current_user_can( 'edit_posts' ) ? true : Catalog::error( __( 'Sorry, you are not allowed to manage content.', 'ohmylms' ), rest_authorization_required_code(), 'ohmylms_rest_forbidden' );
	}

	public function course( WP_REST_Request $request ) {
		$ready = $this->author();
		if ( is_wp_error( $ready ) ) {
			return $ready; }
		return Catalog::can_edit( (int) $request['id'] ) ? true : Catalog::error( __( 'Sorry, you are not allowed to manage this course.', 'ohmylms' ), rest_authorization_required_code(), 'ohmylms_rest_forbidden' );
	}

	private function body( WP_REST_Request $request ) {
		$data = $request->get_json_params();
		return is_array( $data ) ? $data : array();
	}

	private function catalog( $course_id, $status = 200 ) {
		$response = rest_ensure_response( Catalog::payload( (int) $course_id ) );
		$response->set_status( $status );
		return $response;
	}

	public function courses( WP_REST_Request $request ) {
		return rest_ensure_response( Catalog::courses( (string) $request['search'], (int) $request['page'], $request['per_page'] ?: 24 ) );
	}

	public function targets( WP_REST_Request $request ) {
		$course = (int) $request['course'];
		if ( $course && ! Catalog::can_edit( $course ) ) {
			return Catalog::error( __( 'Sorry, you are not allowed to manage this course.', 'ohmylms' ), rest_authorization_required_code(), 'ohmylms_rest_forbidden' ); }
		$targets = Catalog::targets( (string) $request['type'], (string) $request['search'], $course, (int) $request['page'] );
		return is_wp_error( $targets ) ? $targets : rest_ensure_response( $targets );
	}

	public function show( WP_REST_Request $request ) {
		return $this->catalog( $request['id'] ); }

	public function save( WP_REST_Request $request ) {
		$saved = Catalog::save_draft( (int) $request['id'], $this->body( $request ) );
		return is_wp_error( $saved ) ? $saved : $this->catalog( $request['id'] );
	}

	public function publish( WP_REST_Request $request ) {
		$data      = $this->body( $request );
		$published = Catalog::publish( (int) $request['id'], ! empty( $data['apply_existing'] ) );
		return is_wp_error( $published ) ? $published : $this->catalog( $request['id'] );
	}

	public function add_chapter( WP_REST_Request $request ) {
		$chapter = Catalog::add_chapter( (int) $request['id'], (string) ( $this->body( $request )['name'] ?? '' ) );
		return is_wp_error( $chapter ) ? $chapter : $this->catalog( $request['id'], 201 );
	}

	public function rename_chapter( WP_REST_Request $request ) {
		$chapter = Catalog::rename_chapter( (int) $request['id'], (int) $request['chapter_id'], (string) ( $this->body( $request )['name'] ?? '' ) );
		return is_wp_error( $chapter ) ? $chapter : $this->catalog( $request['id'] );
	}

	public function reorder_chapters( WP_REST_Request $request ) {
		$done = Catalog::reorder_chapters( (int) $request['id'], (array) ( $this->body( $request )['ids'] ?? array() ) );
		return is_wp_error( $done ) ? $done : $this->catalog( $request['id'] );
	}

	public function delete_chapter( WP_REST_Request $request ) {
		$done = Catalog::delete_chapter( (int) $request['id'], (int) $request['chapter_id'] );
		return is_wp_error( $done ) ? $done : $this->catalog( $request['id'] );
	}

	public function lessons( WP_REST_Request $request ) {
		return rest_ensure_response(
			Catalog::lessons(
				array(
					'search'   => (string) $request['search'],
					'status'   => (string) $request['status'],
					'page'     => (int) $request['page'],
					'per_page' => (int) $request['per_page'],
					'orderby'  => (string) $request['orderby'],
					'order'    => (string) $request['order'],
				)
			)
		);
	}

	public function trash_lessons( WP_REST_Request $request ) {
		return rest_ensure_response( Catalog::trash_lessons( (array) ( $this->body( $request )['ids'] ?? array() ) ) );
	}

	public function lesson_skills( WP_REST_Request $request ) {
		$skills = Catalog::set_lesson_skills( (int) $request['id'], (array) ( $this->body( $request )['skill_ids'] ?? array() ) );
		return is_wp_error( $skills ) ? $skills : rest_ensure_response(
			array(
				'id'        => (int) $request['id'],
				'skill_ids' => $skills,
			)
		);
	}

	public function duplicate_lesson( WP_REST_Request $request ) {
		$copy = Catalog::duplicate_lesson( (int) $request['id'] );
		if ( is_wp_error( $copy ) ) {
			return $copy; }
		$response = rest_ensure_response( $copy );
		$response->set_status( 201 );
		return $response;
	}
}
