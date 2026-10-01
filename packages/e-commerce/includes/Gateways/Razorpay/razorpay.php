<?php
/**
 * Razorpay Payment Gateway for OhMyLMS
 *
 * This file registers the Razorpay payment gateway with OhMyLMS.
 *
 * @package OhMyLMS
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

define( 'OHMYLMS_RAZORPAY_VERSION', '1.0.0' );
define( 'OHMYLMS_RAZORPAY_MAIN_FILE', __FILE__ );
define( 'OHMYLMS_RAZORPAY_ABSPATH', __DIR__ . '/' );

/**
 * Register Razorpay Gateway
 *
 * This filter adds the Razorpay payment gateway to the list of available gateways in OhMyLMS.
 *
 * @param array $gateways The existing list of payment gateways.
 * @return array The updated list of payment gateways including Razorpay.
 * @since 1.0.0
 */
add_filter( 'ohmylms_payment_gateways', function( $gateways ) {
    $gateways[] = GatewayRazorPay::class;
    return $gateways;
} );

/**
 * Register Razorpay Settings
 *
 * This filter adds the Razorpay settings to the OhMyLMS payment settings.
 *
 * @param array $settings The existing payment settings.
 * @return array The updated payment settings including Razorpay.
 * @since 1.0.0
 */
add_filter( 'ohmylms_gateway_settings', function( $settings ) {
    if ( class_exists( 'GatewayRazorPay' ) ) {
        $razorpay_gateway = new GatewayRazorPay();
        $razorpay_settings = $razorpay_gateway->get_settings();
        
        if ( ! empty( $razorpay_settings ) ) {
            $settings['razorpay'] = $razorpay_settings;
        }
    }
    return $settings;
} );
