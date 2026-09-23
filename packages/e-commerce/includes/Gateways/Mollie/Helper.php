<?php



namespace CodeRex\Ecommerce\Gateways\Mollie;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


class Helper {


	/**
     * Get Mollie organization ID, cached in a transient to avoid repeated API calls.
     *
     * @param string $api_key Mollie API key.
     * @return string|false Organization ID (e.g. org_12345) or false on failure.
     */
    public static function get_organization_id( $api_key ) {
        $transient_key = 'creator_lms_mollie_org_id';

        // Try cache first
        $org_id = get_transient( $transient_key );
        if ( $org_id ) {
            return $org_id;
        }

        // Call Mollie API
        $response = wp_remote_get( 'https://api.mollie.com/v2/organizations/me', [
            'headers' => [
                'Authorization' => 'Bearer ' . $api_key,
                'Content-Type'  => 'application/json',
            ],
            'timeout' => 15,
        ]);

        if ( is_wp_error( $response ) ) {
            return false;
        }

        $code = wp_remote_retrieve_response_code( $response );
        $body = wp_remote_retrieve_body( $response );
        if ( $code !== 200 || empty( $body ) ) {
            return false;
        }

        $data = json_decode( $body, true );
        if ( empty( $data['id'] ) ) {
            return false;
        }

        $org_id = $data['id'];

        // Cache for 12 hours
        set_transient( $transient_key, $org_id, 12 * HOUR_IN_SECONDS );

        return $org_id;
    }

    /**
     * Generate the Mollie dashboard payment URL.
     *
     * @param string $payment_id Mollie payment ID (e.g. tr_xxx).
     * @param string $api_key Mollie API key.
     * @return string|false URL or false on failure.
     */
    public static function get_payment_url( $payment_id, $api_key ) {
        $org_id = self::get_organization_id( $api_key );
        if ( ! $org_id ) {
            return false;
        }

        return sprintf( 'https://my.mollie.com/dashboard/%s/payments/%s', $org_id );
    }


}