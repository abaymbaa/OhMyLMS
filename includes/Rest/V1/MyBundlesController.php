<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Access;
use OhMyLMS\Bundles\Follows;
use OhMyLMS\Bundles\Frontend;
use OhMyLMS\Bundles\Progress;
use OhMyLMS\Bundles\Bundles;
use WP_REST_Request;
use WP_REST_Server;

defined( 'ABSPATH' ) || exit;

/**
 * Learner routes. A signed-in account can only read and change its own dashboard: the
 * learner is always the current user, never a request parameter. Following a bundle is
 * independent of enrollment and grants no access.
 */
class MyBundlesController extends RestController {
	public function register_routes() {
		$learner = array( Access::class, 'learner' );
		register_rest_route(
			$this->namespace,
			'/me/bundles',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'index' ),
					'permission_callback' => $learner,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/me/bundles/(?P<id>\d+)',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'show' ),
					'permission_callback' => $learner,
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/bundles/(?P<id>\d+)/follow',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'follow' ),
					'permission_callback' => $learner,
				),
				array(
					'methods'             => WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'unfollow' ),
					'permission_callback' => $learner,
				),
			)
		);
	}

	private function summary( array $row ) {
		$bundle = Bundles::describe( $row );
		return array(
			'id'           => $bundle['id'],
			'title'        => $bundle['title'],
			'description'  => $bundle['description'],
			'member_count' => $bundle['member_count'],
		) + ( isset( $row['enrolled_overlap'] ) ? array( 'enrolled_overlap' => (int) $row['enrolled_overlap'] ) : array() );
	}

	public function index() {
		$user = get_current_user_id();
		return rest_ensure_response(
			array(
				'followed'  => array_map( array( $this, 'summary' ), Follows::followed( $user ) ),
				'suggested' => array_map( array( $this, 'summary' ), Follows::suggested( $user ) ),
			)
		);
	}

	/** Progress for a published bundle, always for the current learner only. */
	public function show( WP_REST_Request $request ) {
		$bundle = Bundles::get( (int) $request['id'] );
		if ( ! $bundle || $bundle['status'] !== 'published' ) {
			return Bundles::missing(); }
		\OhMyLMS\Skills\Evidence::process( 50 );
		return rest_ensure_response( Progress::for_bundle( $bundle, get_current_user_id() ) + array( 'following' => Follows::is_following( get_current_user_id(), (int) $bundle['id'] ) ) );
	}

	public function follow( WP_REST_Request $request ) {
		$result = Follows::follow( get_current_user_id(), (int) $request['id'] );
		return is_wp_error( $result ) ? $result : rest_ensure_response(
			array(
				'followed' => true,
				'html'     => Frontend::section( get_current_user_id() ),
			)
		);
	}

	public function unfollow( WP_REST_Request $request ) {
		Follows::unfollow( get_current_user_id(), (int) $request['id'] );
		return rest_ensure_response(
			array(
				'followed' => false,
				'html'     => Frontend::section( get_current_user_id() ),
			)
		);
	}
}
