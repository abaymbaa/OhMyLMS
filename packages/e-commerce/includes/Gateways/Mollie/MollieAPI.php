<?php
/**
 * Mollie API Class.
 *
 * This class provides static methods to interact with the Mollie API v2.
 * It handles request formatting, authentication, and basic response processing.
 *
 * @package     OhMyLMS/Gateways/Mollie/API
 * @since       1.0.0
 * @version     1.0.1
 */
namespace CodeRex\Ecommerce\Gateways\Mollie;

use WP_Error; // Ensure WP_Error is available if not already autoloaded/imported.

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * MollieAPI Class.
 */
class MollieAPI {
	/**
	 * Mollie API key.
	 * @var string
	 */
	private static $api_key = '';

	/**
	 * Set Mollie API key.
	 *
	 * @since 1.0.0
	 * @param string $key Mollie API key.
	 * @return void
	 */
	public static function set_api_key( $key ) {
		self::$api_key = sanitize_text_field( $key );
	}

	/**
	 * Make a request to the Mollie API.
	 *
	 * @since 1.0.0
	 * @param string $endpoint Mollie API endpoint (e.g., 'payments', 'customers/cst_.../subscriptions').
	 * @param array  $data     Request data for POST/PUT or query parameters for GET.
	 * @param string $method   HTTP request method (e.g., 'GET', 'POST', 'DELETE').
	 * @return array|WP_Error Decoded JSON response as an associative array, or a WP_Error object on failure.
	 */
	private static function request( $endpoint, $data = [], $method = 'POST' ) {
		$base_url = 'https://api.mollie.com/v2/';
		$url      = $base_url . trim( $endpoint, '/' );

		if ( empty( self::$api_key ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Mollie API key is not set.', 'ohmylms' ) );
		}

		$headers = [
			'Authorization' => 'Bearer ' . self::$api_key,
			'User-Agent'    => 'OhMyLMS/MollieIntegration/1.0', // Added version
			'Content-Type'  => 'application/json',
		];

		$request_args = [
			'method'  => strtoupper( $method ),
			'headers' => $headers,
			'timeout' => 60,
		];

		if ( ! empty( $data ) ) {
			if ( 'GET' === strtoupper( $method ) ) {
				$url = add_query_arg( $data, $url );
			} else {
				$request_args['body'] = wp_json_encode( $data );
			}
		}

		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			// Avoid logging full API key in production environments even if WP_DEBUG is on.
			$loggable_headers = $headers;
			if (isset($loggable_headers['Authorization'])) {
				$loggable_headers['Authorization'] = 'Bearer [REDACTED]';
			}
		}

		$response = wp_remote_request( $url, $request_args );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$response_body = wp_remote_retrieve_body( $response );
		$decoded_body  = json_decode( $response_body, true );
		$response_code = wp_remote_retrieve_response_code( $response );

		if ( $response_code < 200 || $response_code >= 300 ) {
			$error_message = sprintf( 'Mollie API HTTP Error: Code %s - %s', $response_code, print_r( $decoded_body, true ) );
			return new WP_Error( 'mollie_api_http_error', $error_message, $decoded_body );
		}

		if ( json_last_error() !== JSON_ERROR_NONE ) {
			return new WP_Error('mollie_api_json_error', __('Failed to decode API response.', 'ohmylms'), ['body' => $response_body]);
		}
		return $decoded_body;
	}

	/**
	 * Get all available payment methods from Mollie.
	 *
	 * @since 1.0.0
	 * @param array $args Arguments to pass to the API (e.g., 'amount[currency]', 'resource').
	 * @return array|WP_Error Returns an array of payment methods or a WP_Error object.
	 */
	public static function get_all_payment_methods( $args = [] ) {
		$default_args = [ 'resource' => 'orders' ];
		$request_args = wp_parse_args( $args, $default_args );
		$response = self::request( 'methods', $request_args, 'GET' );

		if ( is_wp_error( $response ) ) { return $response; }
		if ( isset( $response['_embedded']['methods'] ) ) { return $response['_embedded']['methods']; }
		if ( isset( $response['data'] ) && is_array( $response['data'] ) ) { return $response['data'];}
		if ( is_array( $response ) && isset( $response['count'] ) && 0 === $response['count'] ) { return []; }
		return new WP_Error('mollie_api_no_methods', __('No payment methods found in API response.', 'ohmylms'), $response);
	}

	/**
	 * Create a payment with Mollie.
	 *
	 * @since 1.0.0
	 * @param array $data Payment data including amount, description, URLs, method, and optionally customerId, cardToken, etc.
	 * @return array|WP_Error The decoded JSON response from Mollie or WP_Error on failure.
	 */
	public static function create_payment( $data ) {
        $payload = $data;
		$required_fields = [ 'amount', 'description', 'redirectUrl', 'webhookUrl' ];
		if ( ! isset( $payload['cardToken'] ) ) {
			$required_fields[] = 'method';
		}
		foreach ( $required_fields as $field ) {
			if ( empty( $payload[ $field ] ) ) {
				return new WP_Error( 'mollie_api_error', sprintf( __( 'Missing required field for payment creation: %s', 'ohmylms' ), $field ) );
			}
		}
		if ( ! isset( $payload['amount']['value'], $payload['amount']['currency'] ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Amount (value and currency) is required.', 'ohmylms' ) );
		}
		$payload['amount']['value'] = number_format( (float) $payload['amount']['value'], 2, '.', '' );

		if ( isset( $payload['cardToken'] ) ) {
			$payload['method'] = 'creditcard'; // Ensure method is creditcard when using cardToken
			unset( $payload['issuer'] );
		}
		if ( isset( $payload['sequenceType'] ) && ! isset( $payload['customerId'] ) ) {
			unset( $payload['sequenceType'] );
		}
		return self::request( 'payments', $payload, 'POST' );
	}

	/**
	 * Create a customer with Mollie.
	 *
	 * @since 1.0.0
	 * @param array $data Customer data, must include 'email', 'name' is recommended.
	 * @return array|WP_Error The decoded JSON response from Mollie or WP_Error on failure.
	 */
	public static function create_customer( $data ) {
		if ( empty( $data['email'] ) || ! is_email( $data['email'] ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Valid email is required to create a Mollie customer.', 'ohmylms' ) );
		}
		if ( empty( $data['name'] ) ) { // Name is recommended by Mollie.
			$email_parts = explode( '@', $data['email'] );
			$data['name'] = $email_parts[0];
		}
		return self::request( 'customers', $data, 'POST' );
	}

	/**
	 * Get a payment from Mollie by its ID.
	 *
	 * @since 1.0.0
	 * @param string $payment_id The Mollie Payment ID (e.g., tr_xxxxxx).
	 * @return array|WP_Error The decoded payment object or a WP_Error object.
	 */
	public static function get_payment( $payment_id ) {
		if ( empty( $payment_id ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Payment ID is required to fetch payment.', 'ohmylms' ) );
		}
		return self::request( 'payments/' . sanitize_text_field( $payment_id ), [], 'GET' );
	}

	/**
	 * Create a subscription for a customer with Mollie.
	 *
	 * @since 1.0.0
	 * @param string $customer_id The Mollie Customer ID (e.g., cst_xxxxxx).
	 * @param array  $data        Subscription data including amount, interval, description.
	 * @return array|WP_Error The decoded subscription object or a WP_Error object.
	 */
	public static function create_subscription( $customer_id, array $data ) {
		if ( empty( $customer_id ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Customer ID is required to create a subscription.', 'ohmylms' ) );
		}
		$required_fields = [ 'amount', 'interval', 'description' ];
		foreach ( $required_fields as $field ) {
			if ( empty( $data[ $field ] ) ) {
				return new WP_Error( 'mollie_api_error', sprintf( __( 'Missing required field for subscription: %s', 'ohmylms' ), $field ) );
			}
		}
		if ( ! isset( $data['amount']['value'], $data['amount']['currency'] ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Amount (value and currency) is required for subscription.', 'ohmylms' ) );
		}
		$data['amount']['value'] = number_format( (float) $data['amount']['value'], 2, '.', '' );
		return self::request( 'customers/' . sanitize_text_field( $customer_id ) . '/subscriptions', $data, 'POST' );
	}

	/**
	 * Get a subscription by its ID from Mollie.
	 *
	 * @since 1.0.0
	 * @param string $subscription_id The Mollie Subscription ID (e.g., sub_xxxxxx).
	 * @return array|WP_Error The decoded subscription object or a WP_Error object.
	 */
	public static function get_subscription( $subscription_id ) {
		if ( empty( $subscription_id ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Subscription ID is required to fetch subscription.', 'ohmylms' ) );
		}
		return self::request( 'subscriptions/' . sanitize_text_field( $subscription_id ), [], 'GET' );
	}

	/**
	 * Get a customer from Mollie by its ID.
	 *
	 * @since 1.0.0
	 * @param string $customer_id The Mollie Customer ID (e.g., cst_xxxxxx).
	 * @return array|WP_Error The decoded customer object or a WP_Error object.
	 */
	public static function get_customer( $customer_id ) {
		if ( empty( $customer_id ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Customer ID is required to fetch customer.', 'ohmylms' ) );
		}
		return self::request( 'customers/' . sanitize_text_field( $customer_id ), [], 'GET' );
	}

	/**
	 * Create a refund for a payment with Mollie.
	 *
	 * @since 1.0.0
	 * @param string $payment_id The Mollie Payment ID (e.g., tr_xxxxxx).
	 * @param array  $data       Refund data. Must include 'amount' (object with 'value', 'currency').
	 * @return array|WP_Error The decoded refund object or a WP_Error object.
	 */
	public static function create_refund( $payment_id, array $data ) {
		if ( empty( $payment_id ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Payment ID is required to create a refund.', 'ohmylms' ) );
		}
		if ( empty( $data['amount'] ) || ! isset( $data['amount']['value'], $data['amount']['currency'] ) ) {
			return new WP_Error( 'mollie_api_error', __( 'Amount (value and currency) is required for refund.', 'ohmylms' ) );
		}
		$data['amount']['value'] = number_format( (float) $data['amount']['value'], 2, '.', '' );
		return self::request( 'payments/' . sanitize_text_field( $payment_id ) . '/refunds', $data, 'POST' );
	}
}
