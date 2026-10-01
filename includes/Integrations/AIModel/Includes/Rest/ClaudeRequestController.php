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
class ClaudeRequestController {
	/**
	 * The single instance of the class.
	 *
	 * @var ClaudeRequestController
	 * @since 1.0.0
	 */
	protected static $instance = null;

	/**
	 * Path
	 *
	 * @var string
	 */
	protected $base = 'claude';

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
	 * @return ClaudeRequestController
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
			'/' . $this->base . '/generate',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'generate' ),
					'permission_callback' => array( $this, 'admin_permission' ),
				)
			)
		);
		\register_rest_route(
			$this->namespace,
			'/' . $this->base . '/ai-image-upload',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'upload' ),
					'permission_callback' => array( $this, 'admin_permission' ),
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
	public function generate( WP_REST_Request $request ) {
		// Get Claude API key from request param
		$api_key = $request->get_param('api_key');
		if (empty($api_key)) {
			return new \WP_REST_Response([
				'success' => false,
				'error' => 'Claude API key not provided.'
			], 400);
		}

		$body = $request->get_json_params();
		if (!$body) {
			return new \WP_REST_Response([
				'success' => false,
				'error' => 'No request body.'
			], 400);
		}

		// Determine if this is a text or image generation request
		$type = $request->get_param('type'); // 'text' or 'image', default to 'text'
		$type = $type ? strtolower($type) : 'text';

		if ($type === 'image') {
			// Support text-to-image (prompt only) and image+text for Anthropic API
			$anthropic_url = 'https://api.anthropic.com/v1/messages';
			$model = isset($body['model']) ? $body['model'] : 'claude-3-7-sonnet-20250219';
			$prompt = isset($body['prompt']) ? $body['prompt'] : '';
			$base64 = isset($body['base64']) ? $body['base64'] : '';
			$media_type = isset($body['media_type']) ? $body['media_type'] : 'image/png';

			// If frontend sends messages (vision use case), use them directly
			if (isset($body['messages']) && is_array($body['messages'])) {
				$api_body = [
					'model' => $model,
					'max_tokens' => isset($body['max_tokens']) ? $body['max_tokens'] : 500,
					'messages' => $body['messages']
				];
			} else {
				// If only prompt is present (text-to-image), just send as text
				$content = [];
				if (!empty($prompt) && empty($base64)) {
					$content[] = [
						'type' => 'text',
						'text' => $prompt
					];
				} else if (!empty($base64) && preg_match('/^[A-Za-z0-9+\/\r\n=]+$/', $base64) && strlen($base64) > 100) {
					// If base64 is present and looks like an image, send both image and text
					$content[] = [
						'type' => 'image',
						'source' => [
							'type' => 'base64',
							'data' => $base64,
							'media_type' => $media_type
						]
					];
					$content[] = [
						'type' => 'text',
						'text' => $prompt
					];
				}
				$api_body = [
					'model' => $model,
					'max_tokens' => isset($body['max_tokens']) ? $body['max_tokens'] : 500,
					'messages' => [
						[
							'role' => 'user',
							'content' => $content
						]
					]
				];
			}
		} else {
			// Text request
			$anthropic_url = 'https://api.anthropic.com/v1/messages';
			$api_body = [
				'model' => isset($body['model']) ? $body['model'] : 'claude-2',
				'max_tokens' => isset($body['max_tokens']) ? $body['max_tokens'] : 500,
			];
			$system = '';
			$messages = [];
			if (isset($body['messages']) && is_array($body['messages'])) {
				foreach ($body['messages'] as $msg) {
					if (isset($msg['role']) && $msg['role'] === 'system') {
						$system = $msg['content'];
					} elseif (isset($msg['role']) && $msg['role'] === 'user') {
						$messages[] = [
							'role' => 'user',
							'content' => $msg['content']
						];
					}
				}
			}
			if ($system) {
				$api_body['system'] = $system;
			}
			if (!empty($messages)) {
				$api_body['messages'] = $messages;
			}
		}

		$args = [
			'headers' => [
				'Content-Type' => 'application/json',
				'x-api-key' => $api_key,
				'anthropic-version' => '2023-06-01',
			],
			'body' => wp_json_encode($api_body),
			'timeout' => 60,
		];
		$response = wp_remote_post($anthropic_url, $args);
		if (is_wp_error($response)) {
			return new \WP_REST_Response([
				'success' => false,
				'error' => $response->get_error_message()
			], 500);
		}

		$code = wp_remote_retrieve_response_code($response);
		$data = json_decode(wp_remote_retrieve_body($response), true);

		if ( $code === 200 ) {
			if ( $type === 'image' ) {
				do_action( 'ohmylms_ai_image_generated' );
			} else {
				do_action( 'ohmylms_ai_text_generated' );
			}
		}

		return new \WP_REST_Response([
			'success' => $code === 200,
			'data' => $data,
			'status' => $code
		], $code);
	}


	public function upload( WP_REST_Request $request ) {
		$body = $request->get_json_params();
		if (!$body || empty($body['url'])) {
			return new \WP_REST_Response([
				'success' => false,
				'error' => 'No image URL provided.'
			], 400);
		}

		$image_url = $body['url'];

		require_once( ABSPATH . 'wp-admin/includes/image.php' );
		require_once( ABSPATH . 'wp-admin/includes/file.php' );
		require_once( ABSPATH . 'wp-admin/includes/media.php' );

		$tmp = download_url( $image_url );

		if ( is_wp_error( $tmp ) ) {
			return new \WP_REST_Response([
				'success' => false,
				'error' => $tmp->get_error_message()
			], 500);
		}

		$file_array = [
			'name'     => basename( parse_url( $image_url, PHP_URL_PATH ) ),
			'tmp_name' => $tmp,
		];

		$attachment_id = media_handle_sideload( $file_array, 0 );

		if ( is_wp_error( $attachment_id ) ) {
			@unlink( $tmp );
			return new \WP_REST_Response([
				'success' => false,
				'error' => $attachment_id->get_error_message()
			], 500);
		}

		$attachment_url = wp_get_attachment_url( $attachment_id );
		return new \WP_REST_Response([
			'success' => true,
			'attachment_id' => $attachment_id,
			'id' => $attachment_id,
			'source_url' => $attachment_url,
			'url' => $attachment_url,
		], 200);
	}
}
