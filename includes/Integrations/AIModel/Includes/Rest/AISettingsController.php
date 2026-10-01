<?php
/**
 * AISettingsController class.
 *
 * @package ohmylms-pro
 * @since 1.0.0
 */

namespace OhMyLMS\Integrations\AIModel\Includes\Rest;

use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

/**
 * Class AISettingsController
 *
 * @package OhMyLMS\Rest\V1
 * @since 1.0.0
 */
class AISettingsController {
	/**
	 * The single instance of the class.
	 *
	 * @var AISettingsController
	 * @since 1.0.0
	 */
	protected static $instance = null;

	/**
	 * Path
	 *
	 * @var string
	 */
	protected $base = 'ai/settings';

	/**
	 * REST API namespace
	 *
	 * @var string
	 */
	protected $namespace = 'ohmylms/v1';

	/**
	 * Get instance
	 *
	 * @since 1.0.0
	 *
	 * @return AISettingsController
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Register routes
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function register_routes() {
		\register_rest_route(
			$this->namespace,
			'/' . $this->base . '/credentials',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'save_credentials' ),
					'permission_callback' => array( $this, 'admin_permission' ),
				),
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_credentials' ),
					'permission_callback' => array( $this, 'admin_permission' ),
				),
			)
		);

		\register_rest_route(
			$this->namespace,
			'/' . $this->base . '/update-credits',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_credits' ),
					'permission_callback' => array( $this, 'update_permission' ),
				)
			)
		);
	}

	/**
	 * Check if the user has admin permission.
	 *
	 * @since 1.0.0
	 *
	 * @return bool
	 */
	public function update_permission() {
		return current_user_can( 'edit_posts' );
	}


	/**
	 * Check if the user has admin permission.
	 *
	 * @since 1.0.0
	 *
	 * @return bool
	 */
	public function admin_permission() {
		return current_user_can( 'edit_posts' );
	}

	/**
	 * Save zoom settings
	 *
	 * @since 1.0.0
	 *
	 * @param WP_REST_Request $request The request object.
	 *
	 * @return WP_REST_Response
	 */
	public function save_credentials( WP_REST_Request $request ) {
		$self    = \sanitize_text_field( $request->get_param( 'self' ) );
		$platform = \sanitize_text_field( $request->get_param( 'platform' ) );
		$model     = \sanitize_text_field( $request->get_param( 'model' ) );
		$image_model     = \sanitize_text_field( $request->get_param( 'image_model' ) );
		$max_tokens = \sanitize_text_field( $request->get_param( 'max_tokens' ) );
		$api_key = \sanitize_text_field( $request->get_param( 'api_key' ) );
		$temperature = \sanitize_text_field( $request->get_param( 'temperature' ) );
		$image_per_request = \sanitize_text_field( $request->get_param( 'image_per_request' ) );

		$user_id = \get_current_user_id();

		// Save all settings as a single array under one user meta key.
		$settings = array(
			'self'    => $self,
			'platform' => $platform,
			'model'     => $model,
			'image_model'     => $image_model,
			'max_tokens' => $max_tokens, 
			'temperature' => $temperature,
			'image_per_request' => $image_per_request,
			'api_key' => $api_key,
		);
		\update_user_meta( $user_id, 'ohmylms_ai_api_credentials', $settings );
		if( $self ) {
			do_action( 'ohmylms_ai_model_self_enabled', $user_id );
		}
 		return new \WP_REST_Response(
			array(
				'success' => true,
				'data'    => array(),
				'message' => __( 'Settings saved successfully', 'ohmylms-pro' ),
			),
			200
		);
	}

	/**
	 * Get zoom settings
	 *
	 * @since 1.0.0
	 *
	 * @param WP_REST_Request $request The request object.
	 *
	 * @return WP_REST_Response
	 */
	public function get_credentials( $request ) {
		$user_id = \get_current_user_id();
		$settings = \get_user_meta( $user_id, 'ohmylms_ai_api_credentials', true );
		if ( empty( $settings ) ) {
			$settings = array();
		}
		$token_credits = get_option( 'ohmylms_pro_token_remaining', 0 );
		$image_token_credits = get_option( 'ohmylms_pro_image_token_remaining', 0 );
		$settings['text_credit'] = intval( $token_credits );
		$settings['image_count'] = intval( $image_token_credits );
		return new \WP_REST_Response(
			array(
				'success' => true,
				'data'    => $settings,
			),
			200
		);
	}

	/**
	 * Update credits
	 *
	 * @param WP_REST_Request $request The request object.
	 *
	 * @return WP_REST_Response
	 */
	public function update_credits( WP_REST_Request $request ) {
		// Credits are not synced with any remote service; the stored values are returned as-is.
		return new \WP_REST_Response(
			array(
				'success' => true,
			),
			200
		);
	}

	/**
	 * Get save settings args
	 *
	 * @since 1.0.0
	 *
	 * @return array
	 */
	public function get_save_credentials_args() {
		return array(
			'account_id'    => array(
				'description' => __( 'Zoom Account ID', 'ohmylms-pro' ),
				'type'        => 'string',
				'required'    => true,
			),
			'client_id'     => array(
				'description' => __( 'Zoom Client ID', 'ohmylms-pro' ),
				'type'        => 'string',
				'required'    => true,
			),
			'client_secret' => array(
				'description' => __( 'Zoom Client Secret', 'ohmylms-pro' ),
				'type'        => 'string',
				'required'    => true,
			),
		);
	}


}
