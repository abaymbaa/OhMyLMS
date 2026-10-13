<?php
/**
 * HTTP client for an xAPI Learning Record Store.
 *
 * @package OhMyLMS\XApi
 */

namespace OhMyLMS\XApi;

defined( 'ABSPATH' ) || exit;

/**
 * Sends statements to the configured LRS using Basic authentication and xAPI 1.0.3.
 *
 * Every response is reduced to one of four classes so the processor never has to know about
 * HTTP: ok (delivered), retry (try again later, counts against the row), hold (the connection
 * is wrong, so pause the whole queue without using up attempts) and reject (the LRS refused
 * this content, so retrying cannot help).
 */
final class LrsClient {

	const VERSION = '1.0.3';

	/**
	 * Resource URL under the endpoint.
	 *
	 * @param string $endpoint Endpoint URL.
	 * @param string $path     Resource path, for example "statements".
	 * @return string
	 */
	public static function url( $endpoint, $path ) {
		return untrailingslashit( $endpoint ) . '/' . ltrim( $path, '/' );
	}

	/**
	 * Request headers.
	 *
	 * @param string $key    LRS key (username).
	 * @param string $secret LRS secret (password).
	 * @return array
	 */
	public static function headers( $key, $secret ) {
		return array(
			'Authorization'            => 'Basic ' . base64_encode( $key . ':' . $secret ), // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode -- HTTP Basic authentication is defined as base64 of "user:password".
			'X-Experience-API-Version' => self::VERSION,
			'Content-Type'             => 'application/json; charset=utf-8',
		);
	}

	/**
	 * Classify an HTTP outcome.
	 *
	 * @param int    $code  HTTP status, or 0 when the request never completed.
	 * @param string $error Transport error or response excerpt, used in the message.
	 * @return array class (ok|retry|hold|reject), status, message.
	 */
	public static function interpret( $code, $error = '' ) {
		$code = (int) $code;
		// 409: the LRS already has a statement with this ID, which is what a replay produces.
		if ( ( $code >= 200 && $code < 300 ) || 409 === $code ) {
			$class = 'ok';
		} elseif ( 0 === $code || 408 === $code || 429 === $code || $code >= 500 ) {
			$class = 'retry';
		} elseif ( in_array( $code, array( 401, 403, 404, 405 ), true ) || ( $code >= 300 && $code < 400 ) ) {
			$class = 'hold';
		} else {
			$class = 'reject';
		}
		$messages = array(
			401 => __( 'The LRS rejected the key and secret.', 'ohmylms' ),
			403 => __( 'The LRS refused access for this key.', 'ohmylms' ),
			404 => __( 'The LRS endpoint was not found. Check the endpoint URL.', 'ohmylms' ),
			405 => __( 'The LRS endpoint does not accept statements. Check the endpoint URL.', 'ohmylms' ),
		);
		if ( isset( $messages[ $code ] ) ) {
			$message = $messages[ $code ];
		} elseif ( $code >= 300 && $code < 400 ) {
			$message = __( 'The LRS endpoint redirected the request. Use the final endpoint URL (often https).', 'ohmylms' );
		} elseif ( 0 === $code ) {
			$message = '' !== $error ? $error : __( 'The LRS could not be reached.', 'ohmylms' );
		} elseif ( 'ok' === $class ) {
			$message = '';
		} else {
			/* translators: 1: HTTP status, 2: LRS response excerpt. */
			$message = sprintf( __( 'LRS responded %1$d. %2$s', 'ohmylms' ), $code, $error );
		}

		return array(
			'class'   => $class,
			'status'  => $code,
			'message' => trim( $message ),
		);
	}

	/**
	 * Send statements in one request.
	 *
	 * @param array[] $statements Statements.
	 * @return array See interpret().
	 */
	public static function post( array $statements ) {
		$request = self::request( 'POST', 'statements', wp_json_encode( array_values( $statements ), JSON_UNESCAPED_UNICODE ) );
		if ( isset( $request['result'] ) ) {
			return $request['result'];
		}

		return self::interpret( $request['code'], $request['body'] );
	}

	/**
	 * Check the connection with the LRS "about" resource.
	 *
	 * @return array ok (bool), message.
	 */
	public static function test() {
		$request = self::request( 'GET', 'about' );
		if ( isset( $request['result'] ) ) {
			return array(
				'ok'      => false,
				'message' => $request['result']['message'],
			);
		}
		$outcome = self::interpret( $request['code'], $request['body'] );
		if ( 'ok' !== $outcome['class'] ) {
			return array(
				'ok'      => false,
				'message' => $outcome['message'],
			);
		}
		$about    = json_decode( $request['body'], true );
		$versions = is_array( $about ) && ! empty( $about['version'] ) ? implode( ', ', (array) $about['version'] ) : '';

		return array(
			'ok'      => true,
			/* translators: %s: xAPI versions the LRS reports. */
			'message' => '' !== $versions ? sprintf( __( 'Connected. The LRS supports xAPI %s.', 'ohmylms' ), $versions ) : __( 'Connected.', 'ohmylms' ),
		);
	}

	/**
	 * Perform a request against the configured LRS.
	 *
	 * @param string      $method   HTTP method.
	 * @param string      $path     Resource path.
	 * @param string|null $body     Request body.
	 * @return array Either code and body, or a ready-made result when the request cannot be made.
	 */
	private static function request( $method, $path, $body = null ) {
		$settings = Settings::all();
		$endpoint = Settings::normalize_endpoint( $settings['endpoint'] );
		if ( '' === $endpoint || '' === $settings['key'] ) {
			return array(
				'result' => array(
					'class'   => 'hold',
					'status'  => 0,
					'message' => __( 'The LRS endpoint and key are not configured.', 'ohmylms' ),
				),
			);
		}
		$args = array(
			'method'      => $method,
			'timeout'     => 15,
			// Never follow redirects: the Authorization header must not travel to another host.
			'redirection' => 0,
			'headers'     => self::headers( $settings['key'], $settings['secret'] ),
		);
		if ( null !== $body ) {
			$args['body'] = $body;
		}
		$args     = apply_filters( 'ohmylms_xapi_request_args', $args, $method, $path );
		$response = wp_remote_request( self::url( $endpoint, $path ), $args );
		if ( is_wp_error( $response ) ) {
			return array(
				'code' => 0,
				'body' => $response->get_error_message(),
			);
		}
		$text = wp_remote_retrieve_body( $response );

		return array(
			'code' => (int) wp_remote_retrieve_response_code( $response ),
			'body' => 'GET' === $method ? $text : substr( trim( wp_strip_all_tags( $text ) ), 0, 300 ),
		);
	}
}
