<?php
namespace CodeRex\Ecommerce\Gateways\QPay;

defined( 'ABSPATH' ) || exit;

/** Merchant V2 client. Tokens are isolated by environment AND credentials. */
class QPayAPI {
	private $id;
	private $secret;
	private $sandbox;

	public function __construct( $id, $secret, $sandbox ) {
		$this->id      = (string) $id;
		$this->secret  = (string) $secret;
		$this->sandbox = (bool) $sandbox;
	}

	public function fingerprint() {
		return hash_hmac( 'sha256', $this->id . ':' . $this->secret, wp_salt( 'auth' ) );
	}

	private function token_key() {
		return 'ohmylms_qpay_v2_' . ( $this->sandbox ? 'test_' : 'live_' ) . $this->fingerprint();
	}

	private function request( $path, $body = null, $method = 'POST', $authenticated = true, $retry = true ) {
		$headers = array( 'Content-Type' => 'application/json' );
		if ( $authenticated ) {
			$token = $this->get_token();
			if ( is_wp_error( $token ) ) {
				return $token;
			}
			$headers['Authorization'] = 'Bearer ' . $token;
		} else {
			$headers['Authorization'] = 'Basic ' . base64_encode( $this->id . ':' . $this->secret );
		}
		$args = array(
			'method'  => $method,
			'headers' => $headers,
			'timeout' => 25,
		);
		if ( null !== $body ) {
			$args['body'] = wp_json_encode( $body );
		}
		$base     = $this->sandbox ? 'https://merchant-sandbox.qpay.mn' : 'https://merchant.qpay.mn';
		$response = wp_remote_request( $base . '/v2/' . $path, $args );
		if ( is_wp_error( $response ) ) {
			return new \WP_Error( 'qpay_unavailable', __( 'QPay is temporarily unavailable. Please try again shortly.', 'ohmylms' ) );
		}
		$status = (int) wp_remote_retrieve_response_code( $response );
		if ( 401 === $status && $authenticated && $retry ) {
			delete_transient( $this->token_key() );
			return $this->request( $path, $body, $method, true, false );
		}
		if ( $status < 200 || $status >= 300 ) {
			// Do not return merchant credentials, provider payloads or bank details to buyers/logs.
			return new \WP_Error( 'qpay_http', __( 'QPay could not process the request. Please contact the store if this continues.', 'ohmylms' ), array( 'http_status' => $status ) );
		}
		$raw = wp_remote_retrieve_body( $response );
		if ( 'DELETE' === $method && ( '' === $raw || 'true' === $raw ) ) {
			return array( 'cancelled' => true );
		}
		$data = json_decode( $raw, true );
		if ( ! is_array( $data ) ) {
			return new \WP_Error( 'qpay_response', __( 'QPay returned an invalid response. Please try again shortly.', 'ohmylms' ) );
		}
		return $data;
	}

	private function get_token() {
		$token = get_transient( $this->token_key() );
		if ( $token ) {
			return $token;
		}
		if ( '' === $this->id || '' === $this->secret ) {
			return new \WP_Error( 'qpay_credentials', __( 'QPay credentials are not configured.', 'ohmylms' ) );
		}
		$data = $this->request( 'auth/token', new \stdClass(), 'POST', false );
		if ( is_wp_error( $data ) ) {
			return $data;
		}
		if ( empty( $data['access_token'] ) || ! is_string( $data['access_token'] ) ) {
			return new \WP_Error( 'qpay_auth', __( 'QPay authentication failed.', 'ohmylms' ) );
		}
		// Merchant V2 commonly returns an absolute Unix expiry; tolerate duration responses.
		$expires = isset( $data['expires_in'] ) ? (int) $data['expires_in'] : 3600;
		$ttl     = $expires > 1000000000 ? $expires - time() : $expires;
		set_transient( $this->token_key(), $data['access_token'], max( 1, min( DAY_IN_SECONDS, $ttl - 60 ) ) );
		return $data['access_token'];
	}

	public function create_invoice( $data ) {
		return $this->request( 'invoice', $data ); }
	public function get_invoice( $id ) {
		return $this->request( 'invoice/' . rawurlencode( $id ), null, 'GET' ); }
	public function cancel_invoice( $id ) {
		return $this->request( 'invoice/' . rawurlencode( $id ), null, 'DELETE' ); }
	public function check_payment( $id ) {
		return $this->request(
			'payment/check',
			array(
				'object_type' => 'INVOICE',
				'object_id'   => $id,
				'offset'      => array(
					'page_number' => 1,
					'page_limit'  => 100,
				),
			)
		);
	}

	public static function settings_changed( $old, $new ) {
		foreach ( array( (array) $old, (array) $new ) as $settings ) {
			foreach ( array( 'test', 'live' ) as $mode ) {
				$api = new self( $settings[ $mode . '_client_id' ] ?? '', $settings[ $mode . '_client_secret' ] ?? '', 'test' === $mode );
				delete_transient( $api->token_key() );
			}
		}
	}
}
