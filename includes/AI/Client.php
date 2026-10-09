<?php
namespace OhMyLMS\AI;

use OhMyLMS\AI\Providers\Anthropic;
use OhMyLMS\AI\Providers\Gemini;
use OhMyLMS\AI\Providers\OpenAI;
use OhMyLMS\AI\Providers\Provider;

defined( 'ABSPATH' ) || exit;

/**
 * Sends one prompt to the configured provider and returns its text.
 *
 * Requests go out over HTTPS with a timeout and no redirects; the key is only ever placed in
 * the provider's own auth header. Failures come back as WP_Error with a message that is safe
 * to show, never the key or the raw response.
 */
final class Client {
	/** @return Provider|null */
	public static function provider( $name ) {
		$providers = apply_filters(
			'ohmylms_ai_providers',
			array(
				'anthropic' => new Anthropic(),
				'openai'    => new OpenAI(),
				'gemini'    => new Gemini(),
			)
		);
		return isset( $providers[ $name ] ) && $providers[ $name ] instanceof Provider ? $providers[ $name ] : null;
	}

	/**
	 * @param array $request [ 'system' => string, 'user' => string, 'max_tokens' => int (optional) ]
	 * @return array{text:string,input_tokens:int,output_tokens:int}|\WP_Error
	 */
	public static function complete( array $request ) {
		$settings = Settings::get();
		$key      = Settings::api_key();
		$provider = self::provider( $settings['provider'] );
		if ( ! $provider || $settings['model'] === '' || $key === '' ) {
			return new \WP_Error( 'ohmylms_ai_unconfigured', __( 'AI feedback is not set up.', 'ohmylms' ), array( 'status' => 503 ) ); }
		$request['max_tokens'] = min( (int) ( $request['max_tokens'] ?? $settings['max_tokens'] ), (int) $settings['max_tokens'] );
		$http                  = $provider->request( $settings, $key, $request );
		$response              = wp_remote_post(
			$http['url'],
			array(
				'timeout'     => (int) $settings['timeout'],
				'redirection' => 0,
				'headers'     => $http['headers'],
				'body'        => wp_json_encode( $http['body'], JSON_UNESCAPED_UNICODE ),
			)
		);
		if ( is_wp_error( $response ) ) {
			Settings::record(
				array(
					'requests'   => 1,
					'failures'   => 1,
					'last_error' => 'network',
				)
			);
			return new \WP_Error( 'ohmylms_ai_network', __( 'Could not reach the AI provider.', 'ohmylms' ), array( 'status' => 502 ) );
		}
		$decoded = json_decode( (string) wp_remote_retrieve_body( $response ), true );
		$parsed  = $provider->parse( is_array( $decoded ) ? $decoded : array(), (int) wp_remote_retrieve_response_code( $response ) );
		if ( is_wp_error( $parsed ) ) {
			Settings::record(
				array(
					'requests'   => 1,
					'failures'   => 1,
					'last_error' => $parsed->get_error_code(),
				)
			);
			return $parsed;
		}
		Settings::record(
			array(
				'requests'      => 1,
				'input_tokens'  => $parsed['input_tokens'],
				'output_tokens' => $parsed['output_tokens'],
				'last_ok'       => gmdate( 'Y-m-d H:i:s' ),
			)
		);
		return $parsed;
	}
}
