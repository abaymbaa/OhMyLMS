<?php
namespace CodeRex\Ecommerce\Gateways\QPay;

defined( 'ABSPATH' ) || exit;

/** One serialized verification/completion path for callbacks and browser status. */
class PaymentService {
    public static function locked( $order_id, $operation ) {
        global $wpdb;
        // Connection-owned MySQL lock: atomic across workers, automatically released on disconnect.
        $key = 'omlms_qpay_' . md5( $wpdb->prefix . ':' . (int) $order_id );
        if ( '1' !== (string) $wpdb->get_var( $wpdb->prepare( 'SELECT GET_LOCK(%s, 0)', $key ) ) ) {
            return new \WP_Error( 'qpay_busy', __( 'Payment is being checked. Please try again shortly.', 'ohmylms' ) );
        }
        try {
            clean_post_cache( $order_id );
            return $operation();
        } finally {
            $wpdb->get_var( $wpdb->prepare( 'SELECT RELEASE_LOCK(%s)', $key ) );
        }
    }

    /** Integer minor units avoid floating-point comparisons and malformed amounts. */
    public static function minor_units( $value ) {
        if ( ! is_scalar( $value ) || ! preg_match( '/^\d{1,12}(?:\.\d{1,2})?$/D', (string) $value ) ) {
            return null;
        }
        $parts = explode( '.', (string) $value );
        return (int) $parts[0] * 100 + (int) str_pad( $parts[1] ?? '', 2, '0' );
    }

    public static function payment_details( $response, $invoice, $total ) {
        if ( ! is_array( $response ) || ! isset( $response['rows'] ) || ! is_array( $response['rows'] ) ) {
            return new \WP_Error( 'qpay_response', __( 'Payment verification returned an invalid response.', 'ohmylms' ) );
        }
        $sum = 0;
        $ids = array();
        foreach ( $response['rows'] as $row ) {
            if ( ! is_array( $row ) || 'PAID' !== ( $row['payment_status'] ?? '' ) ) { continue; }
            $amount = self::minor_units( $row['payment_amount'] ?? '' );
            if ( 'MNT' !== ( $row['payment_currency'] ?? '' ) || null === $amount || $amount <= 0
                || empty( $row['payment_id'] ) || ! is_string( $row['payment_id'] )
                || ( isset( $row['object_id'] ) && $invoice !== $row['object_id'] )
                || ( isset( $row['invoice_id'] ) && $invoice !== $row['invoice_id'] )
                || ( isset( $row['object_type'] ) && 'INVOICE' !== $row['object_type'] ) ) {
                return new \WP_Error( 'qpay_mismatch', __( 'Payment details do not match this order.', 'ohmylms' ) );
            }
            if ( ! in_array( $row['payment_id'], $ids, true ) ) {
                $ids[] = $row['payment_id'];
                $sum += $amount;
            }
        }
        $expected = self::minor_units( $total );
        if ( null === $expected || $expected <= 0 ) {
            return new \WP_Error( 'qpay_amount', __( 'Invalid order amount.', 'ohmylms' ) );
        }
        // Never trust count/paid_amount alone: sum only unique, PAID, MNT rows for this invoice.
        return $sum >= $expected ? array( 'invoice_id' => $invoice, 'ids' => $ids, 'minor_units' => $sum ) : false;
    }

    public static function settle( $order_id, $gateway, $verify = false ) {
        return self::locked( $order_id, function () use ( $order_id, $gateway, $verify ) {
            $order = ecommerce_get_order( $order_id );
            if ( ! $order || 'omlms-order' !== get_post_type( $order_id ) || 'qpay' !== $order->get_payment_method() ) {
                return new \WP_Error( 'qpay_order', __( 'QPay order not found.', 'ohmylms' ) );
            }
            if ( in_array( $order->get_status(), array( 'completed', 'processing' ), true ) ) {
                return array( 'status' => 'paid', 'redirect_url' => $gateway->get_return_url( $order ) );
            }
            if ( 'pending' !== $order->get_status() || 'MNT' !== $order->get_currency() ) {
                return new \WP_Error( 'qpay_order_state', __( 'This order is not awaiting a QPay payment. Please contact the store.', 'ohmylms' ) );
            }
            $invoice = get_post_meta( $order_id, '_qpay_invoice_id', true );
            $amount = get_post_meta( $order_id, '_qpay_invoice_amount', true );
            if ( '' !== $amount && self::minor_units( $amount ) !== self::minor_units( $order->get_total() ) ) {
                return new \WP_Error( 'qpay_amount_changed', __( 'The order amount has changed. Please contact the store.', 'ohmylms' ) );
            }
            if ( ! $invoice ) { return array( 'status' => 'pending' ); }
            $details = get_post_meta( $order_id, '_qpay_verified_payment', true );
            if ( $verify ) {
                $api = $gateway->api_for_order( $order_id );
                if ( is_wp_error( $api ) ) { return $api; }
                $response = $api->check_payment( $invoice );
                if ( is_wp_error( $response ) ) { return $response; }
                $details = self::payment_details( $response, $invoice, $order->get_total() );
                if ( is_wp_error( $details ) ) { return $details; }
                if ( $details ) { update_post_meta( $order_id, '_qpay_verified_payment', $details ); }
            }
            if ( ! $details || $invoice !== ( $details['invoice_id'] ?? '' ) ) {
                return array( 'status' => 'pending' );
            }
            if ( $details['minor_units'] < self::minor_units( $order->get_total() ) ) {
                return new \WP_Error( 'qpay_amount_changed', __( 'The order amount has changed. Please contact the store.', 'ohmylms' ) );
            }
            // A very fast callback can arrive before checkout has inserted pending enrollments.
            if ( get_post_meta( $order_id, '_qpay_native', true ) && ! get_post_meta( $order_id, '_qpay_checkout_ready', true ) ) {
                return array( 'status' => 'pending' );
            }
            $id = $details['ids'][0];
            update_post_meta( $order_id, '_qpay_payment_id', $id );
            update_post_meta( $order_id, '_qpay_payment_ids', $details['ids'] );
            update_post_meta( $order_id, '_qpay_paid_amount', number_format( $details['minor_units'] / 100, 2, '.', '' ) );
            if ( ! $order->payment_complete( $id ) ) {
                return new \WP_Error( 'qpay_completion', __( 'Payment was received but the order could not be completed. Please contact the store.', 'ohmylms' ) );
            }
            // payment_complete activates existing pending enrollment; these hooks notify once.
            if ( ! get_post_meta( $order_id, '_qpay_fulfilled', true ) ) {
                update_post_meta( $order_id, '_qpay_fulfilled', time() );
                $posted = array( 'membership_id' => (int) get_post_meta( $order_id, '_membership_id', true ) );
                do_action( 'ecommerce_after_payment_completed', $order, array( 'result' => 'success', 'payment_method' => 'qpay' ) );
                do_action( 'creator_lms_checkout_after_create_order', $order, $posted );
                do_action( 'creator_lms_after_checkout_process', $order );
            }
            return array( 'status' => 'paid', 'redirect_url' => $gateway->get_return_url( $order ) );
        } );
    }
}
