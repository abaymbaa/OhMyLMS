<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Placement;

/**
 * Course tags were replaced by Learning Tracks. GET returns tracks in the shape of the former tag terms
 * (the track ID is `term_id`) for older clients; nothing can be written here any more. Tracks are
 * managed with /tracks and a course's tracks with /courses/{id}/organization.
 */
class TagController extends RestController {

	protected $base = 'tags';

	public function get_items_permissions_check( $request ) {
		return current_user_can( 'edit_posts' );
	}

	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->base,
			array(
				array(
					'methods'             => 'GET',
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'replaced' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->base . '/(?P<id>\d+)',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'replaced' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'replaced' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->base . '/bulk',
			array(
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'replaced' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
			)
		);
	}

	public function get_items( $request ) {
		return rest_ensure_response( Placement::term_tracks( (string) $request['search'] ) );
	}

	public function replaced( $request ) {
		return new \WP_Error(
			'ohmylms_tags_replaced',
			__( 'Course tags were replaced by Learning Tracks. Manage them under OhMyLMS > Learning Tracks.', 'ohmylms' ),
			array( 'status' => 410 )
		);
	}
}
