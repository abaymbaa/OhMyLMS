<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Assessment\Template;
use OhMyLMS\Extensions\Authoring;
use OhMyLMS\Extensions\Registry;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined( 'ABSPATH' ) || exit;

/**
 * Author tool for randomised question templates: turns an unsaved draft into a few
 * concrete examples, using the same engine learners get, and says what is wrong with it.
 * Nothing is stored.
 */
class TemplateController extends RestController {
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/question-template/preview',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'preview' ),
					'permission_callback' => array( $this, 'permission' ),
				),
			)
		);
	}

	public function permission() {
		return current_user_can( 'edit_posts' ) ? true : new WP_Error( 'ohmylms_rest_forbidden', __( 'You cannot author questions.', 'ohmylms' ), array( 'status' => rest_authorization_required_code() ) );
	}

	public function preview( WP_REST_Request $request ) {
		$settings = is_array( $request['settings'] ) ? $request['settings'] : array();
		$options  = is_array( $request['questions'] ) ? array_values( array_filter( $request['questions'], 'is_array' ) ) : array();
		$title    = (string) ( $request['name'] ?? '' );
		$body     = (string) ( $request['description'] ?? '' );
		if ( ! Template::has( $settings ) ) {
			return rest_ensure_response(
				array(
					'valid'   => false,
					'message' => __( 'Add at least one variable first.', 'ohmylms' ),
					'samples' => array(),
				)
			);
		}
		$definition = Registry::get( 'question', $settings['type'] ?? '' );
		$result     = Template::validate(
			$settings,
			$title,
			$body,
			$options,
			static function ( $example ) use ( $definition ) {
				return Authoring::check( $definition, $example );
			}
		);
		return rest_ensure_response(
			array(
				'valid'   => $result === true,
				'message' => $result === true ? '' : $result,
				// Examples are shown even when invalid, so the author can see what is going wrong.
				'samples' => Template::samples( (string) ( $settings['type'] ?? '' ), $title, $body, $settings, $options, (int) ( $request['count'] ?? 5 ) ),
			)
		);
	}
}
