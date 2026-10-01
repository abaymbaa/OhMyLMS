<?php

if ( ! defined( 'ABSPATH' ) ) {
	wp_die(); // Exit if accessed directly.
}

/**
 * Razorpay API Handler Class.
 *
 * Responsible for all communication with Razorpay's REST API.
 */
class RazorpayAPI {

    /**
     * Razorpay API Key ID.
     * @var string
     */
    private static $key_id;

    /**
     * Razorpay API Key Secret.
     * @var string
     */
    private static $key_secret;

    /**
     * Base URL for Razorpay API.
     * @var string
     */
    private static $base_url = 'https://api.razorpay.com/v1/';

    /**
     * Set API credentials.
     *
     * @param string $key_id Razorpay Key ID.
     * @param string $key_secret Razorpay Key Secret.
     */
    public static function set_credentials( $key_id, $key_secret ) {
        self::$key_id = $key_id;
        self::$key_secret = $key_secret;
    }

    /**
     * Make a generic request to the Razorpay API.
     *
     * @param string $endpoint The API endpoint (e.g., 'orders', 'payments/{id}').
     * @param array  $payload The data to send with the request.
     * @param string $method The HTTP method (GET, POST, PUT, DELETE).
     * @return array|WP_Error The API response (decoded JSON) or a WP_Error on failure.
     */
    private static function request( $endpoint, $payload = array(), $method = 'POST' ) {
        if ( empty( self::$key_id ) || empty( self::$key_secret ) ) {
            return new WP_Error( 'api_credentials_missing', __( 'Razorpay API credentials are not configured.', 'ohmylms' ) );
        }

        $url = self::$base_url . $endpoint;
        $args = array(
            'method'  => strtoupper( $method ),
            'headers' => array(
                'Authorization' => 'Basic ' . base64_encode( self::$key_id . ':' . self::$key_secret ),
                'Content-Type'  => 'application/json',
            ),
            'timeout' => 60, // 60 seconds timeout
        );

        if ( ! empty( $payload ) && ( $method === 'POST' || $method === 'PUT' ) ) {
            $args['body'] = wp_json_encode( $payload );
        } elseif ( ! empty( $payload ) && $method === 'GET' ) {
            $url = add_query_arg( $payload, $url );
        }

        $response = wp_remote_request( $url, $args );

        if ( is_wp_error( $response ) ) {
            return $response;
        }

        $body = wp_remote_retrieve_body( $response );
        $http_code = wp_remote_retrieve_response_code( $response );
        $decoded_body = json_decode( $body, true );

        if ( $http_code >= 200 && $http_code < 300 ) {
            return $decoded_body;
        } else {
            $error_message = __( 'Razorpay API Error', 'ohmylms' );
            if ( isset( $decoded_body['error']['description'] ) ) {
                $error_message = $decoded_body['error']['description'];
            } elseif ( isset( $decoded_body['error']['message'] ) ) {
                $error_message = $decoded_body['error']['message'];
            } else {
                $error_message .= ': ' . $body; // Fallback to full body if specific error not found
            }
            return new WP_Error( 'razorpay_api_error', $error_message, array( 'status' => $http_code, 'response_body' => $decoded_body ) );
        }
    }

    /**
     * Create an Order on Razorpay.
     *
     * @param array $data Order data (amount, currency, receipt, notes, payment_capture).
     * @return array|WP_Error Razorpay order object or WP_Error.
     */
    public static function create_order( $data ) {
        // Ensure amount is in the smallest currency unit (e.g., paise for INR)
        // The main gateway class should handle this conversion before passing data.
        return self::request( 'orders', $data, 'POST' );
    }

    /**
     * Fetch a specific payment from Razorpay.
     *
     * @param string $payment_id The Razorpay Payment ID.
     * @return array|WP_Error Razorpay payment object or WP_Error.
     */
    public static function fetch_payment( $payment_id ) {
        return self::request( "payments/{$payment_id}", array(), 'GET' );
    }

    /**
     * Fetch a specific order from Razorpay.
     *
     * @param string $order_id The Razorpay Order ID.
     * @return array|WP_Error Razorpay order object or WP_Error.
     */
    public static function fetch_order( $order_id ) {
        return self::request( "orders/{$order_id}", array(), 'GET' );
    }

    /**
     * Capture a payment on Razorpay.
     * (Usually not needed if payment_capture=1 is used during order creation)
     *
     * @param string $payment_id The Razorpay Payment ID.
     * @param int    $amount Amount to capture (in smallest currency unit).
     * @param string $currency Currency code.
     * @return array|WP_Error Razorpay payment object or WP_Error.
     */
    public static function capture_payment( $payment_id, $amount, $currency ) {
        $payload = array(
            'amount'   => $amount,
            'currency' => strtoupper( $currency ),
        );
        return self::request( "payments/{$payment_id}/capture", $payload, 'POST' );
    }

    /**
     * Create a Plan on Razorpay.
     *
     * @param array $data Plan data (period, interval, item, notes, etc.).
     * @return array|WP_Error Razorpay plan object or WP_Error.
     */
    public static function create_plan( $data ) {
        return self::request( 'plans', $data, 'POST' );
    }

    /**
     * Fetch a specific plan from Razorpay.
     *
     * @param string $plan_id The Razorpay Plan ID.
     * @return array|WP_Error Razorpay plan object or WP_Error.
     */
    public static function fetch_plan( $plan_id ) {
        return self::request( "plans/{$plan_id}", array(), 'GET' );
    }

    /**
     * Create a Subscription on Razorpay.
     *
     * @param array $data Subscription data (plan_id, total_count, customer_notify, start_at, notes, etc.).
     * @return array|WP_Error Razorpay subscription object or WP_Error.
     */
    public static function create_subscription( $data ) {
        return self::request( 'subscriptions', $data, 'POST' );
    }

    /**
     * Fetch a specific subscription from Razorpay.
     *
     * @param string $subscription_id The Razorpay Subscription ID.
     * @return array|WP_Error Razorpay subscription object or WP_Error.
     */
    public static function fetch_subscription( $subscription_id ) {
        return self::request( "subscriptions/{$subscription_id}", array(), 'GET' );
    }

    /**
     * Cancel a Razorpay subscription.
     *
     * @param string $subscription_id The Razorpay Subscription ID.
     * @param bool $cancel_at_cycle_end Whether to cancel at the end of the current billing cycle.
     * @return array|WP_Error Razorpay subscription object or WP_Error.
     */
    public static function cancel_subscription( $subscription_id, $cancel_at_cycle_end = false ) {
        $data = array(
            'cancel_at_cycle_end' => $cancel_at_cycle_end ? 1 : 0
        );
        return self::request( "subscriptions/{$subscription_id}/cancel", $data, 'POST' );
    }

    /**
     * Pause a Razorpay subscription.
     *
     * @param string $subscription_id The Razorpay Subscription ID.
     * @param string $pause_at When to pause (now or upcoming).
     * @return array|WP_Error Razorpay subscription object or WP_Error.
     */
    public static function pause_subscription( $subscription_id, $pause_at = 'now' ) {
        $data = array(
            'pause_at' => $pause_at
        );
        return self::request( "subscriptions/{$subscription_id}/pause", $data, 'POST' );
    }

    /**
     * Resume a paused Razorpay subscription.
     *
     * @param string $subscription_id The Razorpay Subscription ID.
     * @return array|WP_Error Razorpay subscription object or WP_Error.
     */
    public static function resume_subscription( $subscription_id ) {
        return self::request( "subscriptions/{$subscription_id}/resume", array(), 'POST' );
    }

    /**
     * Process a Refund on Razorpay.
     *
     * @param string $payment_id The Razorpay Payment ID to refund.
     * @param array $data Refund data (amount, notes, speed, etc.).
     * @return array|WP_Error Razorpay refund object or WP_Error.
     */
    public static function create_refund( $payment_id, $data ) {
        // The endpoint can be /payments/{payment_id}/refund or just /refunds
        // Using /refunds as it's more generic if payment_id is part of payload
        // However, Razorpay docs often show /payments/{payment_id}/refund
        // Let's stick to the specific one if payment_id is primary identifier.
        // If $data includes payment_id, then /refunds. If not, then use payments/id/refund.
        // For now, let's assume $data might contain payment_id or it's passed separately.
        // The V1 refund API seems to be POST /payments/{id}/refund
        // or POST /refunds (if payment_id is in payload)
        // For simplicity, let's use the one tied to a payment_id in the URL.
        return self::request( "payments/{$payment_id}/refund", $data, 'POST' );
    }

    /**
     * Fetch refund details for a payment.
     *
     * @param string $payment_id The Razorpay Payment ID.
     * @return array|WP_Error List of refunds or WP_Error.
     */
    public static function fetch_payment_refunds( $payment_id ) {
        return self::request( "payments/{$payment_id}/refunds", array(), 'GET' );
    }


    /**
     * Verify Payment Signature.
     * https://razorpay.com/docs/payment-gateway/web-integration/standard/payment-success/#step-5-verify-the-signature
     *
     * @param string $razorpay_order_id
     * @param string $razorpay_payment_id
     * @param string $razorpay_signature
     * @return bool True if signature is valid, false otherwise.
     */
    public static function verify_payment_signature( $razorpay_order_id, $razorpay_payment_id, $razorpay_signature ) {
        if ( empty( self::$key_secret ) ) {
            return false;
        }

        $payload_string = $razorpay_order_id . '|' . $razorpay_payment_id;
        $expected_signature = hash_hmac( 'sha256', $payload_string, self::$key_secret );

        return hash_equals( $expected_signature, $razorpay_signature );
    }

    /**
     * Verify Subscription Payment Signature.
     * For subscription payments, the signature is generated using payment_id + subscription_id.
     *
     * @param string $razorpay_payment_id The Razorpay Payment ID.
     * @param string $razorpay_subscription_id The Razorpay Subscription ID.
     * @param string $razorpay_signature The signature to verify.
     * @return bool True if signature is valid, false otherwise.
     */
    public static function verify_subscription_payment_signature( $razorpay_payment_id, $razorpay_subscription_id, $razorpay_signature ) {
        if ( empty( self::$key_secret ) ) {
            return false;
        }

        $payload_string = $razorpay_payment_id . '|' . $razorpay_subscription_id;
        $expected_signature = hash_hmac( 'sha256', $payload_string, self::$key_secret );

        return hash_equals( $expected_signature, $razorpay_signature );
    }

    /**
     * Verify Webhook Signature.
     * https://razorpay.com/docs/webhooks/validate-test-webhooks/#validate-webhook-signatures
     *
     * @param string $webhook_body The raw request body of the webhook.
     * @param string $webhook_signature The signature from 'X-Razorpay-Signature' header.
     * @param string $webhook_secret The secret configured on Razorpay dashboard for this webhook.
     * @return bool True if signature is valid, false otherwise.
     */
    public static function verify_webhook_signature( $webhook_body, $webhook_signature, $webhook_secret ) {
        if ( empty( $webhook_secret ) ) {
            return false;
        }

        try {
            $expected_signature = hash_hmac( 'sha256', $webhook_body, $webhook_secret );
            return hash_equals( $expected_signature, $webhook_signature );
        } catch ( \Exception $e ) {
            return false;
        }
    }

    /**
     * Create a Payment Link on Razorpay.
     * https://razorpay.com/docs/api/payment-links/
     *
     * @param array $data Payment link data (amount, currency, description, customer, etc.).
     * @return array|WP_Error Razorpay payment link object or WP_Error.
     */
    public static function create_payment_link( $data ) {
        return self::request( 'payment_links', $data, 'POST' );
    }

    /**
     * Fetch a specific payment link from Razorpay.
     *
     * @param string $payment_link_id The Razorpay Payment Link ID.
     * @return array|WP_Error Razorpay payment link object or WP_Error.
     */
    public static function fetch_payment_link( $payment_link_id ) {
        return self::request( "payment_links/{$payment_link_id}", array(), 'GET' );
    }
}
