<?php

if ( ! defined( 'ABSPATH' ) ) {
	wp_die(); // Exit if accessed directly.
}

require_once __DIR__ . '/RazorpayAPI.php';

use CodeRex\Ecommerce\Abstracts\PaymentGateway;

/**
 * Razorpay Payment Gateway.
 *
 * @since TBD
 */
class GatewayRazorPay extends PaymentGateway {

    /**
     * Constructor for the gateway.
     *
     * Initializes the gateway settings, API keys, and hooks.
     */
    public function __construct() {
        $this->id                   = 'razorpay';
        $gateway_settings_key       = 'ohmylms_' . $this->id . '_settings';
        $this->settings             = get_option( $gateway_settings_key, array() );
        $this->title                = $this->get_setting( 'title', __( 'Razorpay', 'ohmylms' ) );
        $this->description          = $this->get_setting( 'instruction', __( 'Pay via Razorpay; accepts various payment methods.', 'ohmylms' ) );
        $this->has_fields           = true;
        $this->order_button_text    = __( 'Place payment', 'ohmylms' );
        $this->enabled              = $this->get_setting( 'enabled', 'no' );
        $this->testmode             = $this->get_setting( 'testmode', 'no' );
        $this->publishable_key      = 'yes' === $this->testmode ? $this->get_setting( 'test_publishable_key', '' ) : $this->get_setting( 'live_publishable_key', '' );
        $this->secret_key           = 'yes' === $this->testmode ? $this->get_setting( 'test_secret_key', '' ) : $this->get_setting( 'live_secret_key', '' );
        $this->redirect_url         = $this->get_setting( 'subscription_redirect_url', '' );
        $this->subscription_support = true; // Enable subscription support

        // Set the API credentials
        RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );

        // Actions & Filters
        add_action( 'wp_enqueue_scripts', array( $this, 'payment_scripts' ) );
        add_action( 'wp_ajax_ohmylms_razorpay_verify_payment', array( $this, 'ajax_verify_payment_handler' ) );
        add_action( 'wp_ajax_nopriv_ohmylms_razorpay_verify_payment', array( $this, 'ajax_verify_payment_handler' ) );
        add_action( 'rest_api_init', array( $this, 'register_webhook_routes' ) );
        add_action( 'ohmylms_after_membership_object_save', array( $this, 'sync_membership_plan_to_razorpay' ), 10, 2 );
        
        // Admin hooks
        add_filter( 'manage_ohmylms-subscription_posts_columns', array( $this, 'add_subscription_admin_columns' ) );
        add_action( 'manage_ohmylms-subscription_posts_custom_column', array( $this, 'render_subscription_admin_columns' ), 10, 2 );
        
        // Add admin action to create Razorpay plans for memberships
        add_action( 'admin_init', array( $this, 'maybe_create_membership_plans' ) );
        
        // Order deletion and refund hooks
        add_action( 'before_delete_post', array( $this, 'handle_order_deletion' ), 10, 2 );
        add_action( 'wp_trash_post', array( $this, 'handle_order_deletion' ), 10, 2 );
    }

    /**
     * Define settings fields for this gateway.
     *
     * These fields are used to configure the gateway in the admin area.
     * This method will be implemented in the next step.
     * @return void
     */
    public function init_form_fields() {
        $this->form_fields = array(
            'enabled'              => array(
                'title'   => __( 'Enable/Disable', 'ohmylms' ),
                'type'    => 'checkbox',
                'label'   => __( 'Enable Razorpay Payment Gateway', 'ohmylms' ),
                'default' => 'no',
            ),
            'title'                => array(
                'title'       => __( 'Title', 'ohmylms' ),
                'type'        => 'text',
                'description' => __( 'This controls the title which the user sees during checkout.', 'ohmylms' ),
                'default'     => __( 'Razorpay', 'ohmylms' ),
                'desc_tip'    => true,
            ),
            'description'          => array(
                'title'       => __( 'Description', 'ohmylms' ),
                'type'        => 'textarea',
                'description' => __( 'This controls the description which the user sees during checkout.', 'ohmylms' ),
                'default'     => __( 'Pay via Razorpay; accepts various payment methods.', 'ohmylms' ),
            ),
            'testmode'             => array(
                'title'       => __( 'Test mode', 'ohmylms' ),
                'type'        => 'checkbox',
                'label'       => __( 'Enable Test Mode', 'ohmylms' ),
                'default'     => 'yes',
                'description' => __( 'Place the payment gateway in test mode using test API keys.', 'ohmylms' ),
            ),
            'test_publishable_key' => array(
                'title'       => __( 'Test Key ID', 'ohmylms' ),
                'type'        => 'text',
                'description' => __( 'Get your API keys from your Razorpay account.', 'ohmylms' ),
                'default'     => '',
                'desc_tip'    => true,
            ),
            'test_secret_key'      => array(
                'title'       => __( 'Test Key Secret', 'ohmylms' ),
                'type'        => 'text',
                'description' => __( 'Get your API keys from your Razorpay account.', 'ohmylms' ),
                'default'     => '',
                'desc_tip'    => true,
            ),
            'live_publishable_key' => array(
                'title'       => __( 'Live Key ID', 'ohmylms' ),
                'type'        => 'text',
                'description' => __( 'Get your API keys from your Razorpay account.', 'ohmylms' ),
                'default'     => '',
                'desc_tip'    => true,
            ),
            'live_secret_key'      => array(
                'title'       => __( 'Live Key Secret', 'ohmylms' ),
                'type'        => 'text',
                'description' => __( 'Get your API keys from your Razorpay account.', 'ohmylms' ),
                'default'     => '',
                'desc_tip'    => true,
            ),
        );
    }

    /**
     * Get gateway settings.
     *
     * @return array Gateway settings array.
     */
    public function get_settings() {
        $fields = array(
            array(
                'title' => __( 'Title', 'ohmylms' ),
                'short_description' => __( 'Enter the title that will appear for Razorpay payment during checkout.', 'ohmylms' ),
                'input_type' => 'text',
                'default_value' => __( 'Razorpay', 'ohmylms' ),
                'option_name' => 'title',
                'value' => $this->title
            ),
            array(
                'title' => __( 'Instruction', 'ohmylms' ),
                'short_description' => __( 'Provide detailed instructions on how students should complete Razorpay payment.', 'ohmylms' ),
                'input_type' => 'textarea',
                'default_value' => __( 'Pay with Razorpay.', 'ohmylms' ),
                'option_name' => 'instruction',
                'value' => $this->description
            ),
            array(
                'title' => __( 'Test Mode', 'ohmylms' ),
                'short_description' => __( 'Place the payment gateway in test mode using test API keys.', 'ohmylms' ),
                'input_type' => 'switch',
                'default_value' => 'no',
                'option_name' => 'testmode',
                'value' => $this->testmode,
                'conditional_logic' => array(
                    'type' => 'control',
                    'controls' => array( 'test_publishable_key', 'test_secret_key', 'live_publishable_key', 'live_secret_key' )
                )
            ),
            array(
                'title' => __( 'Test Key ID', 'ohmylms' ),
                'short_description' => __( 'Get your API keys from your Razorpay account.', 'ohmylms' ) . ' <a href="https://razorpay.com/docs/payments/dashboard/account-settings/api-keys/" target="_blank">' . __( 'How to find your Test Key ID', 'ohmylms' ) . '</a>',
                'input_type' => 'text',
                'default_value' => '',
                'value' => $this->get_setting( 'test_publishable_key', '' ),
                'option_name' => 'test_publishable_key',
                'conditional_logic' => array(
                    'type' => 'dependent',
                    'depends_on' => 'testmode',
                    'show_when' => 'yes'
                )
            ),
            array(
                'title' => __( 'Test Key Secret', 'ohmylms' ),
                'short_description' => __( 'Get your API keys from your Razorpay account.', 'ohmylms' ) . ' <a href="https://razorpay.com/docs/payments/dashboard/account-settings/api-keys/" target="_blank">' . __( 'How to find your Test Key Secret', 'ohmylms' ) . '</a>',
                'input_type' => 'text',
                'default_value' => '',
                'value' => $this->get_setting( 'test_secret_key', '' ),
                'option_name' => 'test_secret_key',
                'conditional_logic' => array(
                    'type' => 'dependent',
                    'depends_on' => 'testmode',
                    'show_when' => 'yes'
                )
            ),
            array(
                'title' => __( 'Live Key ID', 'ohmylms' ),
                'short_description' => __( 'Get your API keys from your Razorpay account.', 'ohmylms' ) . ' <a href="https://razorpay.com/docs/payments/dashboard/account-settings/api-keys/" target="_blank">' . __( 'How to find your Live Key ID', 'ohmylms' ) . '</a>',
                'input_type' => 'text',
                'default_value' => '',
                'option_name' => 'live_publishable_key',
                'value' => $this->get_setting( 'live_publishable_key', '' ),
                'conditional_logic' => array(
                    'type' => 'dependent',
                    'depends_on' => 'testmode',
                    'show_when' => 'no'
                )
            ),
            array(
                'title' => __( 'Live Key Secret', 'ohmylms' ),
                'short_description' => __( 'Get your API keys from your Razorpay account.', 'ohmylms' ) . ' <a href="https://razorpay.com/docs/payments/dashboard/account-settings/api-keys/" target="_blank">' . __( 'How to find your Live Key Secret', 'ohmylms' ) . '</a>',
                'input_type' => 'text',
                'default_value' => '',
                'option_name' => 'live_secret_key',
                'value' => $this->get_setting( 'live_secret_key', '' ),
                'conditional_logic' => array(
                    'type' => 'dependent',
                    'depends_on' => 'testmode',
                    'show_when' => 'no'
                )
            )
        );

        $gateway_settings = array(
            'id' => 'razorpay',
            'title' => __( 'Razorpay', 'ohmylms' ),
            'description' => __( 'Razorpay Payment Gateway', 'ohmylms' ),
            'icon' => '<svg width="43" height="43" fill="none" viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg"><rect width="43" height="43" fill="#3395FF" rx="21.5"/><path fill="#fff" d="M13.5 18l7.5 7.5L31.5 15"/></svg>',
            'has_config' => true,
            'subscription_support' => false,
            'settings_fields' => $fields,
            'enabled' => $this->enabled,
        );

        return $gateway_settings;
    }

    /**
     * Output for the payment fields on the checkout page.
     *
     * @return void
     */
    public function payment_fields() {
        $description = $this->get_description();

        if ( 'yes' === $this->testmode ) {
            $description .= ' ' . __( "\n\nTEST MODE ENABLED. You are using Razorpay in test mode.", 'ohmylms' );
        }
        
        if ( $description ) {
            echo wpautop( wp_kses_post( $description ) );
        }

        ?>
        <div id="razorpay-payment-form-container">
            <!-- <p><?php esc_html_e( 'Click "Place payment" to proceed with Razorpay payment.', 'ohmylms' ); ?></p> -->
            <div id="razorpay-error-message" role="alert" style="color: red;"></div>
        </div>
        <?php

        do_action( 'ohmylms_razorpay_payment_fields', $this->id );
    }

    /**
     * Enqueue scripts and styles for the gateway on the frontend.
     *
     * @return void
     */
    public function payment_scripts() {
        if ( ! is_ohmylms_checkout() ) {
            return;
        }

        if ( 'no' === $this->enabled ) {
            return;
        }

        if ( empty( $this->publishable_key ) || empty( $this->secret_key ) ) {
            return;
        }

        // Register Razorpay SDK
        wp_enqueue_script( 'razorpay-checkout-sdk', 'https://checkout.razorpay.com/v1/checkout.js', array(), null, true );

        // Define custom script path and version
        $script_path = OHMYLMS_URL . '/packages/e-commerce/assets/js/razorpay-checkout.js';
        $script_version = OHMYLMS_VERSION;

        // Register custom checkout script
        wp_register_script( 'ohmylms-razorpay-checkout', $script_path, array( 'jquery', 'razorpay-checkout-sdk' ), $script_version, true );

        // Prepare parameters for localization
        $currency = get_ohmylms_currency();
        $is_subscription = isset( $_GET['membership_id'] ) ? true : false;

        $razorpay_params = array(
            'key_id'                   => $this->publishable_key,
            'ajax_url'                 => admin_url( 'admin-ajax.php' ),
            'checkout_nonce'           => wp_create_nonce( 'ohmylms_razorpay_checkout_nonce' ),
            'verify_payment_nonce'     => wp_create_nonce( 'ohmylms_razorpay_verify_payment_nonce' ),
            'verify_payment_action'    => 'ohmylms_razorpay_verify_payment',
            'currency'                 => $currency,
            'is_subscription'          => $is_subscription,
            'store_name'               => get_bloginfo( 'name' ),
            'error_prefix'             => __( 'Payment error: ', 'ohmylms' ),
            'data_error_msg'           => __( 'Unable to retrieve order data. Please try again.', 'ohmylms' ),
            'checkout_initiated_error' => __( 'Razorpay checkout could not be initiated.', 'ohmylms' ),
        );

        // Localize the script with parameters
        wp_localize_script( 'ohmylms-razorpay-checkout', 'ohmylms_razorpay_params', $razorpay_params );

        // Enqueue the custom script
        wp_enqueue_script( 'ohmylms-razorpay-checkout' );
    }

    /**
     * Process the payment and return the result.
     *
     * @param int $order_id The ID of the order being processed.
     * @param bool $is_subscription Whether this is a subscription payment.
     * @return array An array containing the result of the payment processing.
     */
    public function process_payment( $order_id, $is_subscription = false ) {
        RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );

        $order = ecommerce_get_order( $order_id );

        if ( ! $order ) {
            error_log( "Razorpay Error: Could not retrieve order object for order ID: {$order_id}" );
            return array(
                'result'  => 'failure',
                'message' => __( 'Order data could not be found. Please contact support.', 'ohmylms' ),
            );
        }

        // If this is a subscription payment, delegate to process_subscription_payment
        if ( $is_subscription ) {
            // Get membership ID from posted data or order meta
            $membership_id = get_post_meta( $order_id, '_membership_id', true );
            if ( ! $membership_id ) {
                // Try to get from order items
                $items = $order->get_items();
                foreach ( $items as $item ) {
                    if ( method_exists( $item, 'get_membership_id' ) ) {
                        $membership_id = $item->get_membership_id();
                        break;
                    }
                }
            }
            
            if ( $membership_id ) {
                return $this->process_subscription_payment( $order_id, $membership_id );
            }
        }

        // Get order total (includes tax and discounts already calculated)
        $order_total = $order->get_total();

        if ( $order_total <= 0 ) {
            // Handle free orders
            $order->payment_complete();
            return array(
                'result'   => 'success',
                'redirect' => $this->get_return_url( $order ),
            );
        }

        $order_currency = strtoupper( $order->get_currency() );
        $amount_in_smallest_unit = $this->get_amount_in_smallest_unit( $order_total, $order_currency );

        if ( $amount_in_smallest_unit <= 0 ) {
            error_log( "Razorpay Error: Amount in smallest unit is zero or less for order ID: {$order_id}, Amount: {$amount_in_smallest_unit}" );
            return array(
                'result'  => 'failure',
                'message' => __( 'Invalid payment amount. Please contact support.', 'ohmylms' ),
            );
        }

        // Prepare order data for Razorpay
        $payload = array(
            'amount'          => $amount_in_smallest_unit,
            'currency'        => $order_currency,
            'receipt'         => 'order_' . $order_id,
            'payment_capture' => 1, // Auto capture
            'notes'           => array(
                'order_id'       => (string) $order_id,
                'customer_email' => $order->get_email(),
                'customer_name'  => $order->get_student_name() ?? '',
                'plugin'         => 'OhMyLMS',
            ),
        );
        // Create Razorpay order
        $razorpay_order = RazorpayAPI::create_order( $payload );

        if ( is_wp_error( $razorpay_order ) ) {
            $error_message = $razorpay_order->get_error_message();
            error_log( "Razorpay API Error creating order for WP Order ID {$order_id}: " . $error_message );
            $order->add_order_note( sprintf( __( 'Razorpay order creation failed: %s', 'ohmylms' ), $error_message ) );
            return array(
                'result'  => 'failure',
                'message' => sprintf( __( 'Could not initiate payment with Razorpay. %s', 'ohmylms' ), $error_message ),
            );
        }

        if ( empty( $razorpay_order['id'] ) ) {
            error_log( "Razorpay Error: No order ID returned for WP Order ID {$order_id}" );
            return array(
                'result'  => 'failure',
                'message' => __( 'Razorpay order ID missing. Please try again.', 'ohmylms' ),
            );
        }

        $razorpay_order_id = $razorpay_order['id'];
        
        // Store Razorpay order ID
        update_post_meta( $order_id, '_razorpay_order_id', $razorpay_order_id );
        update_post_meta( $order_id, '_has_subscription', $is_subscription ? 'yes' : 'no' );
        
        $order->add_order_note( sprintf( __( 'Razorpay order created. Order ID: %s', 'ohmylms' ), $razorpay_order_id ) );

        // Get prefill data
        $prefill_contact = '';
        if ( method_exists( $order, 'get_phone' ) ) {
            $prefill_contact = $order->get_phone();
        }

        // Return data for JavaScript to handle
        return array(
            'result'              => 'success',
            'payment_method'      => $this->id,
            'razorpay_order_id'   => $razorpay_order_id,
            'key_id'              => $this->publishable_key,
            'amount'              => $amount_in_smallest_unit,
            'currency'            => $order_currency,
            'order_id'            => $order_id,
            'name'                => get_bloginfo( 'name' ),
            'description'         => sprintf( __( 'Order #%s', 'ohmylms' ), $order->get_id() ),
            'prefill_name'        => $order->get_student_name(),
            'prefill_email'       => $order->get_email(),
            'prefill_contact'     => $prefill_contact,
        );
    }

    /**
     * Process recurring payment for subscription renewals.
     *
     * @param int $original_order_id The ID of the original subscription order.
     * @param int $renewal_order_id The ID of the renewal order.
     * @param float $amount The amount to charge.
     * @param int $subscription_id The ID of the subscription.
     * @param int $student_id The ID of the student.
     * @return array Result of the payment attempt.
     */
    public function process_recurring_payment( $original_order_id, $renewal_order_id, $amount, $subscription_id, $student_id ) {
        try {
            // Validate and sanitize inputs
            $original_order_id = absint( $original_order_id );
            $renewal_order_id = absint( $renewal_order_id );
            $subscription_id = absint( $subscription_id );
            $student_id = absint( $student_id );
            $amount = floatval( $amount );

            RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );

            $original_order = ecommerce_get_order( $original_order_id );
            $renewal_order = ecommerce_get_order( $renewal_order_id );
                        
            if ( ! $original_order ) {
                return array(
                    'result'  => 'failure',
                    'message' => __( 'Original order not found for Razorpay recurring payment.', 'ohmylms' ),
                );
            }

            if ( ! $renewal_order ) {
                return array(
                    'result'  => 'failure',
                    'message' => __( 'Renewal order not found for Razorpay recurring payment.', 'ohmylms' ),
                );
            }

            // Get stored Razorpay data from original order
            $razorpay_customer_id = get_post_meta( $original_order_id, '_razorpay_customer_id', true );
            $razorpay_subscription_id = get_post_meta( $original_order_id, '_razorpay_subscription_id', true );
            
            
            // Check if we have a Razorpay subscription ID - if yes, Razorpay will handle renewals automatically
            if ( ! empty( $razorpay_subscription_id ) ) {
                
                update_post_meta( $renewal_order_id, '_razorpay_subscription_id', $razorpay_subscription_id );
                update_post_meta( $renewal_order_id, '_is_renewal', 'yes' );
                update_post_meta( $renewal_order_id, '_parent_order_id', $original_order_id );
                update_post_meta( $renewal_order_id, '_payment_method', $this->id );
                update_post_meta( $renewal_order_id, '_payment_method_title', $this->title );
                
                $renewal_order->add_order_note( sprintf(
                    __( 'Renewal order created. Linked to Razorpay Subscription ID: %s. Payment will be processed automatically by Razorpay.', 'ohmylms' ),
                    $razorpay_subscription_id
                ) );
                
                return array(
                    'result'              => 'success',
                    'transaction_id'      => $razorpay_subscription_id,
                    'order_id'            => $renewal_order_id,
                    'message'             => __( 'Renewal order created. Razorpay Subscriptions will handle automatic payment.', 'ohmylms' ),
                );
            }

            // Copy metadata to renewal order
            update_post_meta( $renewal_order_id, '_is_renewal', 'yes' );
            update_post_meta( $renewal_order_id, '_parent_order_id', $original_order_id );
            update_post_meta( $renewal_order_id, '_payment_method', $this->id );
            update_post_meta( $renewal_order_id, '_payment_method_title', $this->title );

            // Get currency and convert amount to smallest unit
            $order_currency = strtoupper( $renewal_order->get_currency() );
            $amount_in_smallest_unit = $this->get_amount_in_smallest_unit( $amount, $order_currency );

            if ( $amount_in_smallest_unit <= 0 ) {
                return array(
                    'result'  => 'failure',
                    'message' => __( 'Invalid payment amount for recurring payment.', 'ohmylms' ),
                );
            }

            // Create a Payment Link for the customer to pay
            $payment_link_data = array(
                'amount'            => $amount_in_smallest_unit,
                'currency'          => $order_currency,
                'description'       => sprintf( __( 'Subscription Renewal - Order #%s', 'ohmylms' ), $renewal_order_id ),
                'customer'          => array(
                    'name'    => $renewal_order->get_student_name() ?? '',
                    'email'   => $renewal_order->get_email(),
                    'contact' => method_exists( $renewal_order, 'get_phone' ) ? $renewal_order->get_phone() : '',
                ),
                'notify'            => array(
                    'sms'   => false,
                    'email' => true,  // Razorpay will send email with payment link
                ),
                'reminder_enable'   => true,
                'notes'             => array(
                    'order_id'           => (string) $renewal_order_id,
                    'subscription_id'    => (string) $subscription_id,
                    'parent_order_id'    => (string) $original_order_id,
                    'student_id'         => (string) $student_id,
                    'payment_type'       => 'renewal',
                    'plugin'             => 'OhMyLMS/Renewal',
                ),
                'callback_url'      => home_url( '/' ),
                'callback_method'   => 'get',
            );

            $payment_link = RazorpayAPI::create_payment_link( $payment_link_data );

            if ( is_wp_error( $payment_link ) ) {
                $error_message = $payment_link->get_error_message();
                $renewal_order->add_order_note( sprintf(
                    __( 'Razorpay payment link creation failed: %s', 'ohmylms' ),
                    $error_message
                ) );
                
                return array(
                    'result'  => 'failure',
                    'message' => $error_message,
                );
            }

            $payment_link_id = isset( $payment_link['id'] ) ? $payment_link['id'] : '';
            $payment_link_url = isset( $payment_link['short_url'] ) ? $payment_link['short_url'] : '';

            if ( empty( $payment_link_url ) ) {
                $payment_link_url = isset( $payment_link['link_url'] ) ? $payment_link['link_url'] : '';
            }

            // Store payment link details
            if ( ! empty( $payment_link_id ) ) {
                update_post_meta( $renewal_order_id, '_razorpay_payment_link_id', $payment_link_id );
            }
            if ( ! empty( $payment_link_url ) ) {
                update_post_meta( $renewal_order_id, '_razorpay_payment_link_url', $payment_link_url );
            }

            // Add order note
            $renewal_order->add_order_note( sprintf(
                __( 'Razorpay renewal payment link created and sent to customer. Payment Link ID: %s, Amount: %s %s. Customer will receive email from Razorpay with payment link.', 'ohmylms' ),
                $payment_link_id,
                number_format( $amount, 2 ),
                $order_currency
            ) );


            // Return success - Razorpay will email the customer and handle payment via webhook
            return array(
                'result'              => 'success',
                'transaction_id'      => $payment_link_id,
                'order_id'            => $renewal_order_id,
                'payment_link_url'    => $payment_link_url,
                'message'             => __( 'Renewal payment link created. Razorpay will email customer with payment link.', 'ohmylms' ),
            );

        } catch ( \Exception $e ) {
            
            if ( ! empty( $renewal_order ) && method_exists( $renewal_order, 'add_order_note' ) ) {
                $renewal_order->add_order_note( sprintf(
                    __( 'Razorpay recurring payment exception: %s', 'ohmylms' ),
                    $e->getMessage()
                ) );
            }

            return array(
                'result'  => 'failure',
                'message' => $e->getMessage(),
            );
        }
    }

    /**
     * Process a subscription payment.
     *
     * @param int $order_id The ID of the order (often the parent subscription order).
     * @param int $membership_id Optional membership or subscription ID.
     * @return array An array containing the result.
     */
    public function process_subscription_payment( $order_id, $membership_id = 0 ) {
        RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );

        $order = null;
        if ( function_exists( 'ecommerce_get_order' ) ) {
            $order = ecommerce_get_order( $order_id );
        } elseif ( function_exists( 'ohmylms_get_order' ) ) {
            $order = ohmylms_get_order( $order_id );
        }

        if ( ! $order ) {
            error_log( "Razorpay Subscription Error: Could not retrieve order object for order ID: {$order_id}" );
            if ( function_exists( 'ohmylmse_add_notice' ) ) {
                ohmylmse_add_notice( __( 'Order data could not be found for subscription. Please contact support.', 'ohmylms' ), 'error' );
            }
            return array( 'result' => 'failure', 'message' => __( 'Order data could not be found for subscription.', 'ohmylms' ) );
        }

        if ( empty( $membership_id ) || ! is_numeric( $membership_id ) || $membership_id <= 0 ) {
            error_log( "Razorpay Subscription Error: Invalid Membership ID '{$membership_id}' for order ID: {$order_id}" );
            if ( function_exists( 'ohmylmse_add_notice' ) ) {
                ohmylmse_add_notice( __( 'Invalid membership data provided. Please contact support.', 'ohmylms' ), 'error' );
            }
            return array( 'result' => 'failure', 'message' => __( 'Invalid membership data.', 'ohmylms' ) );
        }

        $student_id = $order->get_student_id();

        // Check for duplicate active subscriptions
        if ( $this->has_active_subscription( $student_id, $membership_id ) ) {
            error_log( "Razorpay Subscription Error: Student {$student_id} already has an active subscription for membership {$membership_id}" );
            if ( function_exists( 'ohmylmse_add_notice' ) ) {
                ohmylmse_add_notice( __( 'You already have an active subscription for this membership.', 'ohmylms' ), 'error' );
            }
            return array( 
                'result' => 'failure', 
                'message' => __( 'You already have an active subscription for this membership.', 'ohmylms' ) 
            );
        }

        // Fetch Razorpay Plan ID from membership product/level meta
        $razorpay_plan_id = get_post_meta( $membership_id, '_razorpay_plan_id', true );
        
        // Get membership object to access signup fee
        $membership = null;
        if ( function_exists( 'ohmylms_get_membership' ) ) {
            $membership = ohmylms_get_membership( $membership_id );
        }

        if ( empty( $razorpay_plan_id ) ) {
            // Try to create the plan automatically
            if ( $membership ) {
                // Ensure credentials are set before syncing
                RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );
                
                // Create the plan (force creation even if gateway is disabled in admin)
                $this->sync_membership_plan_to_razorpay( $membership, null, true );
                
                // Check if plan was created successfully
                $razorpay_plan_id = get_post_meta( $membership_id, '_razorpay_plan_id', true );
                
                if ( empty( $razorpay_plan_id ) ) {
                    $error_message = sprintf(
                        __( 'Failed to create Razorpay plan for membership "%s". Please ensure: 1) Gateway is enabled, 2) API credentials are valid, 3) Membership has valid pricing. Check error logs for details.', 'ohmylms' ),
                        get_the_title( $membership_id )
                    );
                    error_log( "Razorpay Plan Creation Failed for Membership ID {$membership_id}. Gateway enabled: {$this->enabled}, Has credentials: " . ( ! empty( $this->publishable_key ) && ! empty( $this->secret_key ) ? 'yes' : 'no' ) );
                }
            }

            if ( empty( $razorpay_plan_id ) ) {
                // Provide detailed instructions for manual setup
                $membership_edit_link = admin_url( 'post.php?post=' . $membership_id . '&action=edit' );
                
                // User-friendly error message
                $user_message = __( 'Unable to process subscription payment. The Razorpay plan could not be created automatically. Please contact site administrator.', 'ohmylms' );
                
                if ( function_exists( 'ohmylmse_add_notice' ) ) {
                    ohmylmse_add_notice( $user_message, 'error' );
                }
                return array( 'result' => 'failure', 'message' => $user_message );
            }
        }

        $payload = array(
            'plan_id'         => $razorpay_plan_id,
            'customer_notify' => 1,
            'total_count'     => 100, // Maximum allowed by Razorpay (100 billing cycles)
            'notes'           => array(
                'wordpress_order_id' => (string) $order_id,
                'membership_id'      => (string) $membership_id,
                'customer_email'     => $order->get_email(),
                'customer_id'        => (string) $student_id,
                'plugin'             => 'OhMyLMS/Ecommerce (Subscription)',
            ),
        );
        
        // Add signup fee as addon if present
        $signup_fee = 0;
        if ( $membership && method_exists( $membership, 'get_sign_up_fee' ) ) {
            $signup_fee = floatval( $membership->get_sign_up_fee() );
        }
        
        if ( $signup_fee > 0 ) {
            $order_currency = strtoupper( $order->get_currency() );
            $signup_fee_in_smallest_unit = $this->get_amount_in_smallest_unit( $signup_fee, $order_currency );
            
            $payload['addons'] = array(
                array(
                    'item' => array(
                        'name'     => 'Sign-up Fee',
                        'amount'   => $signup_fee_in_smallest_unit,
                        'currency' => $order_currency,
                    ),
                ),
            );
        }

        // NOTE: Razorpay subscriptions don't support callback_url in API
        // To enable auto-redirect after payment, configure it in:
        // Razorpay Dashboard → Settings → Hosted Pages → Redirect URL

        $razorpay_subscription = RazorpayAPI::create_subscription( $payload );

        if ( is_wp_error( $razorpay_subscription ) || empty( $razorpay_subscription['id'] ) ) {
            $error_message = is_wp_error( $razorpay_subscription ) ? $razorpay_subscription->get_error_message() : __( 'Razorpay Subscription ID missing.', 'ohmylms' );
            if ( function_exists( 'ohmylmse_add_notice' ) ) {
                ohmylmse_add_notice( sprintf(__( 'Error creating Razorpay subscription: %s', 'ohmylms' ), $error_message ), 'error' );
            }
            return array(
                'result'  => 'failure',
                'message' => sprintf(__( 'Could not initiate subscription with Razorpay. %s', 'ohmylms' ), $error_message),
            );
        }

        $razorpay_subscription_id = $razorpay_subscription['id'];
        $short_url = isset( $razorpay_subscription['short_url'] ) ? $razorpay_subscription['short_url'] : '';
        
        update_post_meta( $order_id, '_razorpay_subscription_id', $razorpay_subscription_id );
        
        // Store Razorpay subscription ID against student for duplicate prevention
        update_user_meta( $student_id, "_razorpay_subscription_{$membership_id}", $razorpay_subscription_id );

        // Store the short URL and expected redirect URL
        if ( ! empty( $short_url ) ) {
            update_post_meta( $order_id, '_razorpay_subscription_url', $short_url );
            
            // Store desired redirect URL for webhook use
            $redirect_url = ! empty( $this->redirect_url ) ? $this->redirect_url : $this->get_return_url( $order );
            if ( empty( $redirect_url ) ) {
                $redirect_url = home_url( '/' );
            }
            update_post_meta( $order_id, '_razorpay_redirect_url', $redirect_url );
        }
        
        // NOTE: Razorpay subscriptions don't support redirect_url via API or URL parameters
        // To enable auto-redirect, configure it in: Razorpay Dashboard → Settings → Hosted Pages
        // Alternatively, customers receive email confirmation with return link after payment

        // Create WordPress subscription record now (before redirect)
        if ( class_exists( 'CodeRex\Ecommerce\SubscriptionManager' ) ) {
            $gateway_meta_data = array(
                'razorpay_subscription_id' => $razorpay_subscription_id,
            );
            
            $subscription_id = \CodeRex\Ecommerce\SubscriptionManager::create_subscription( 
                $order, 
                $membership_id, 
                $gateway_meta_data 
            );
            
            if ( ! is_wp_error( $subscription_id ) && $subscription_id ) {
                // Link subscription to order and Razorpay subscription
                update_post_meta( $subscription_id, '_razorpay_subscription_id', $razorpay_subscription_id );
                update_post_meta( $order_id, '_subscription_id', $subscription_id );
                
                $order->add_order_note( sprintf(
                    __( 'Subscription #%1$d created (pending). Razorpay Subscription ID: %2$s. Awaiting first payment.', 'ohmylms' ),
                    $subscription_id,
                    $razorpay_subscription_id
                ) );
            }
        }

        $order->add_order_note( sprintf(
            __( 'Razorpay subscription created. Subscription ID: %s. Customer will complete payment in modal.', 'ohmylms' ),
            $razorpay_subscription_id
        ) );

        // Get prefill data
        $prefill_contact = '';
        if ( method_exists( $order, 'get_phone' ) ) {
            $prefill_contact = $order->get_phone();
        }

        // Return data for modal checkout (similar to one-time payment)
        return array(
            'result'                   => 'success',
            'payment_method'           => $this->id,
            'razorpay_subscription_id' => $razorpay_subscription_id,
            'key_id'                   => $this->publishable_key,
            'amount'                   => 0, // Amount shown will be from plan
            'currency'                 => $order->get_currency(),
            'order_id'                 => $order_id,
            'name'                     => get_bloginfo( 'name' ),
            'description'              => sprintf( __( 'Subscription for Order #%s', 'ohmylms' ), $order->get_id() ),
            'prefill_name'             => $order->get_student_name(),
            'prefill_email'            => $order->get_email(),
            'prefill_contact'          => $prefill_contact,
            'short_url'                => $short_url, // Fallback redirect URL if modal fails
        );
    }

    /**
     * Check if a student has an active subscription for a membership.
     *
     * @param int $student_id The student/user ID.
     * @param int $membership_id The membership ID.
     * @return bool True if active subscription exists, false otherwise.
     */
    private function has_active_subscription( $student_id, $membership_id ) {
        // Check user meta for razorpay subscription
        $razorpay_subscription_id = get_user_meta( $student_id, "_razorpay_subscription_{$membership_id}", true );
        
        if ( empty( $razorpay_subscription_id ) ) {
            return false;
        }

        // Verify the subscription is still active on Razorpay
        RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );
        $subscription = RazorpayAPI::fetch_subscription( $razorpay_subscription_id );

        if ( is_wp_error( $subscription ) ) {
            // If we can't fetch it, assume it's not active
            delete_user_meta( $student_id, "_razorpay_subscription_{$membership_id}" );
            return false;
        }

        $active_statuses = array( 'created', 'authenticated', 'active', 'pending' );
        $is_active = isset( $subscription['status'] ) && in_array( $subscription['status'], $active_statuses, true );

        if ( ! $is_active ) {
            // Cleanup user meta if subscription is no longer active
            delete_user_meta( $student_id, "_razorpay_subscription_{$membership_id}" );
        }

        return $is_active;
    }

    /**
     * Process a refund for an order.
     *
     * @param int    $order_id The ID of the order to refund.
     * @param float|null $amount   The amount to refund (optional, full refund if null).
     * @param string $reason   The reason for the refund (optional).
     * @return bool|WP_Error True on success, WP_Error on failure.
     */
    public function process_refund( $order_id, $amount = null, $reason = '' ) {
        RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );

        $order = ecommerce_get_order( $order_id );

        if ( ! $order ) {
            error_log( "Razorpay Refund Error: Could not retrieve order object for order ID: {$order_id}" );
            return new \WP_Error( 'invalid_order', __( 'Invalid order ID.', 'ohmylms' ) );
        }

        // Get the Razorpay payment ID from order meta
        $razorpay_payment_id = get_post_meta( $order_id, '_razorpay_payment_id', true );

        if ( empty( $razorpay_payment_id ) ) {
            error_log( "Razorpay Refund Error: No payment ID found for order ID: {$order_id}" );
            return new \WP_Error( 'no_payment_id', __( 'No Razorpay payment ID found for this order.', 'ohmylms' ) );
        }

        // If no amount specified, refund the full amount
        if ( is_null( $amount ) ) {
            $amount = $order->get_total();
        }

        // Validate amount
        if ( $amount <= 0 ) {
            return new \WP_Error( 'invalid_amount', __( 'Refund amount must be greater than zero.', 'ohmylms' ) );
        }

        // Check if amount exceeds order total
        if ( $amount > $order->get_total() ) {
            return new \WP_Error( 'invalid_amount', __( 'Refund amount cannot exceed the order total.', 'ohmylms' ) );
        }

        $order_currency = strtoupper( $order->get_currency() );
        $refund_amount_in_smallest_unit = $this->get_amount_in_smallest_unit( $amount, $order_currency );

        // Prepare refund data
        $refund_data = array(
            'amount' => $refund_amount_in_smallest_unit,
        );

        // Add notes if reason provided
        if ( ! empty( $reason ) ) {
            $refund_data['notes'] = array(
                'reason' => $reason,
                'order_id' => (string) $order_id,
                'refunded_by' => 'WordPress Admin',
            );
        }

        // Process the refund via Razorpay API
        $refund_response = RazorpayAPI::create_refund( $razorpay_payment_id, $refund_data );

        if ( is_wp_error( $refund_response ) ) {
            $error_message = $refund_response->get_error_message();
            error_log( "Razorpay Refund Error for Order ID {$order_id}: " . $error_message );
            $order->add_order_note( sprintf( __( 'Razorpay refund failed: %s', 'ohmylms' ), $error_message ) );
            return new \WP_Error( 'refund_failed', $error_message );
        }

        // Check if refund was successful
        if ( empty( $refund_response['id'] ) ) {
            error_log( "Razorpay Refund Error: No refund ID returned for Order ID {$order_id}" );
            return new \WP_Error( 'refund_failed', __( 'Refund request failed. No refund ID returned.', 'ohmylms' ) );
        }

        $refund_id = $refund_response['id'];
        $refund_status = isset( $refund_response['status'] ) ? $refund_response['status'] : 'unknown';

        // Store refund information
        $refunds = get_post_meta( $order_id, '_razorpay_refunds', true );
        if ( ! is_array( $refunds ) ) {
            $refunds = array();
        }

        $refunds[] = array(
            'refund_id' => $refund_id,
            'amount' => $amount,
            'currency' => $order_currency,
            'status' => $refund_status,
            'reason' => $reason,
            'date' => current_time( 'mysql' ),
        );

        update_post_meta( $order_id, '_razorpay_refunds', $refunds );

        // Add order note
        $note_message = sprintf(
            __( 'Razorpay refund processed. Refund ID: %1$s, Amount: %2$s %3$s, Status: %4$s', 'ohmylms' ),
            $refund_id,
            $amount,
            $order_currency,
            $refund_status
        );

        if ( ! empty( $reason ) ) {
            $note_message .= sprintf( __( ', Reason: %s', 'ohmylms' ), $reason );
        }

        $order->add_order_note( $note_message );
        
        // Check if this is a full refund and cancel subscription if exists
        if ( $amount >= $order->get_total() ) {
            $this->cancel_order_subscription( $order_id, 'Full refund processed' );
        }
        
        return true;
    }

    /**
     * Handle order deletion - cancel associated Razorpay subscription.
     *
     * @param int $post_id The post ID being deleted.
     * @param WP_Post|null $post The post object being deleted.
     * @return void
     */
    public function handle_order_deletion( $post_id, $post = null ) {
        // Check if this is an order post type
        if ( get_post_type( $post_id ) !== 'ohmylms-order' ) {
            return;
        }
        
        $this->cancel_order_subscription( $post_id, 'Order deleted' );
    }

    /**
     * Cancel Razorpay subscription associated with an order.
     *
     * @param int $order_id The order ID.
     * @param string $reason Reason for cancellation.
     * @return bool|WP_Error True on success, WP_Error on failure.
     */
    private function cancel_order_subscription( $order_id, $reason = 'Order cancelled' ) {
        // Get the Razorpay subscription ID from order meta
        $razorpay_subscription_id = get_post_meta( $order_id, '_razorpay_subscription_id', true );
        
        if ( empty( $razorpay_subscription_id ) ) {
            // No subscription associated with this order
            return false;
        }
        
        // Set API credentials
        RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );
        
        // First, check the current subscription status on Razorpay
        $subscription = RazorpayAPI::fetch_subscription( $razorpay_subscription_id );
        
        if ( is_wp_error( $subscription ) ) {
            $error_message = $subscription->get_error_message();
            error_log( "Razorpay Subscription Fetch Error for Order ID {$order_id}: " . $error_message );
            // Continue even if fetch fails - attempt to cancel anyway
        } elseif ( isset( $subscription['status'] ) && $subscription['status'] === 'cancelled' ) {
            // Subscription already cancelled on Razorpay, just update WordPress
            error_log( "Razorpay subscription {$razorpay_subscription_id} already cancelled. Updating WordPress only." );
        } else {
            // Cancel the subscription on Razorpay
            $cancel_response = RazorpayAPI::cancel_subscription( $razorpay_subscription_id, false );
            
            if ( is_wp_error( $cancel_response ) ) {
                $error_message = $cancel_response->get_error_message();
                error_log( "Razorpay Subscription Cancellation Error for Order ID {$order_id}: " . $error_message );
                // Don't return error - still update WordPress subscription status
            }
        }
        
        // Find and cancel the WordPress subscription
        $subscription_args = array(
            'post_type'      => 'ohmylms-subscription',
            'meta_query'     => array(
                array(
                    'key'     => '_razorpay_subscription_id',
                    'value'   => $razorpay_subscription_id,
                    'compare' => '=',
                ),
            ),
            'posts_per_page' => 1,
            'post_status'    => 'any',
        );
        
        $subscription_query = new \WP_Query( $subscription_args );
        
        if ( $subscription_query->have_posts() ) {
            $wp_subscription = $subscription_query->posts[0];
            $subscription_id = $wp_subscription->ID;
            
            // Update subscription status to cancelled
            if ( class_exists( 'CodeRex\Ecommerce\SubscriptionManager' ) ) {
                \CodeRex\Ecommerce\SubscriptionManager::mark_subscription_cancelled( $subscription_id );
            }
            
            // Add note to order
            $order = ecommerce_get_order( $order_id );
            if ( $order ) {
                $order->add_order_note(
                    sprintf(
                        __( 'Razorpay subscription cancelled. Subscription ID: %s, Reason: %s', 'ohmylms' ),
                        $razorpay_subscription_id,
                        $reason
                    )
                );
            }
            
            error_log( "Razorpay subscription {$razorpay_subscription_id} cancelled for order {$order_id}. Reason: {$reason}" );
            return true;
        }
        
        error_log( "WordPress subscription not found for Razorpay subscription ID: {$razorpay_subscription_id}" );
        return false;
    }

    /**
     * AJAX handler for verifying Razorpay payment.
     */
    public function ajax_verify_payment_handler() {
        check_ajax_referer( 'ohmylms_razorpay_verify_payment_nonce', 'nonce' );

        $wp_order_id             = isset( $_POST['wp_order_id'] ) ? absint( $_POST['wp_order_id'] ) : 0;
        $razorpay_payment_id     = isset( $_POST['razorpay_payment_id'] ) ? sanitize_text_field( wp_unslash( $_POST['razorpay_payment_id'] ) ) : '';
        $razorpay_order_id       = isset( $_POST['razorpay_order_id'] ) ? sanitize_text_field( wp_unslash( $_POST['razorpay_order_id'] ) ) : '';
        $razorpay_subscription_id = isset( $_POST['razorpay_subscription_id'] ) ? sanitize_text_field( wp_unslash( $_POST['razorpay_subscription_id'] ) ) : '';
        $razorpay_signature      = isset( $_POST['razorpay_signature'] ) ? sanitize_text_field( wp_unslash( $_POST['razorpay_signature'] ) ) : '';

        // Verify we have minimum required data
        if ( ! $wp_order_id || ! $razorpay_payment_id || ! $razorpay_signature ) {
            wp_send_json_error( array( 'message' => __( 'Missing payment data for verification.', 'ohmylms' ) ) );
            return;
        }

        // Verify we have either order_id or subscription_id
        if ( ! $razorpay_order_id && ! $razorpay_subscription_id ) {
            wp_send_json_error( array( 'message' => __( 'Missing order or subscription ID for verification.', 'ohmylms' ) ) );
            return;
        }

        RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );

        // Verify signature based on payment type
        if ( $razorpay_subscription_id ) {
            // Subscription payment - verify subscription signature
            $signature_valid = RazorpayAPI::verify_subscription_payment_signature( 
                $razorpay_payment_id, 
                $razorpay_subscription_id, 
                $razorpay_signature 
            );
        } else {
            // One-time payment - verify order signature
            $signature_valid = RazorpayAPI::verify_payment_signature( 
                $razorpay_order_id, 
                $razorpay_payment_id, 
                $razorpay_signature 
            );
        }

        if ( ! $signature_valid ) {
            $error_msg = $razorpay_subscription_id 
                ? "Invalid signature for subscription payment: WP Order {$wp_order_id}, Subscription {$razorpay_subscription_id}"
                : "Invalid signature for order payment: WP Order {$wp_order_id}, Razorpay Order {$razorpay_order_id}";
            error_log( "Razorpay Verification Failed: {$error_msg}" );
            wp_send_json_error( array( 'message' => __( 'Payment verification failed. Invalid signature.', 'ohmylms' ) ) );
            return;
        }

        $order = null;
        if ( function_exists( 'ecommerce_get_order' ) ) {
            $order = ecommerce_get_order( $wp_order_id );
        } elseif ( function_exists( 'ohmylms_get_order' ) ) {
            $order = ohmylms_get_order( $wp_order_id );
        }

        if ( ! $order ) {
            error_log( "Razorpay Verification Failed: Could not retrieve order object for WP Order ID {$wp_order_id}" );
            wp_send_json_error( array( 'message' => __( 'Order not found.', 'ohmylms' ) ) );
            return;
        }

        // Fetch payment details from Razorpay to confirm status and amount
        $payment_details = RazorpayAPI::fetch_payment( $razorpay_payment_id );

        if ( is_wp_error( $payment_details ) || empty( $payment_details['id'] ) ) {
            $error_msg = is_wp_error( $payment_details ) ? $payment_details->get_error_message() : 'Unknown error';
            error_log( "Razorpay Verification: Error fetching payment details for {$razorpay_payment_id}. Error: {$error_msg}" );
            $order->add_order_note( sprintf( __( 'Razorpay: Error fetching payment details for %s. Error: %s', 'ohmylms' ), $razorpay_payment_id, $error_msg ) );
            wp_send_json_error( array( 'message' => __( 'Could not confirm payment status with Razorpay.', 'ohmylms' ) ) );
            return;
        }

        // Check payment status - for auto-capture, it should be 'captured'.
        // If using manual capture, it might be 'authorized', then you'd capture it.
        if ( strtolower( $payment_details['status'] ) !== 'captured' && strtolower( $payment_details['status'] ) !== 'authorized' ) {
            $status_error_msg = sprintf( __( 'Razorpay: Payment %s not captured or authorized. Status: %s', 'ohmylms' ), $razorpay_payment_id, $payment_details['status'] );
            $order->add_order_note( $status_error_msg );
            wp_send_json_error( array( 'message' => __( 'Payment not successfully captured by Razorpay.', 'ohmylms' ) ) );
            return;
        }

        // Optional: Verify amount (skip for subscriptions as amount comes from plan)
        if ( ! $razorpay_subscription_id ) {
            $expected_amount_smallest_unit = $this->get_amount_in_smallest_unit( $order->get_total(), $order->get_currency() );
            if ( absint( $payment_details['amount'] ) < absint( $expected_amount_smallest_unit ) ) {
                $amount_mismatch_msg = sprintf(
                    __( 'Razorpay: Payment amount mismatch for %s. Expected: %s, Got: %s %s.', 'ohmylms' ),
                    $razorpay_payment_id,
                    $expected_amount_smallest_unit,
                    $payment_details['amount'],
                    $payment_details['currency']
                );
                $order->add_order_note( $amount_mismatch_msg );
                wp_send_json_error( array( 'message' => __( 'Payment amount mismatch.', 'ohmylms' ) ) );
                return;
            }
        }


        // Payment is verified and valid
        if ( method_exists( $order, 'payment_complete' ) ) {
            $order->payment_complete( $razorpay_payment_id );
        } else {
            // Fallback if payment_complete doesn't exist on order object
            $order->update_status( 'completed', __( 'Payment received via Razorpay.', 'ohmylms' ) );
        }

        // Add order note based on payment type
        if ( $razorpay_subscription_id ) {
            $order->add_order_note( sprintf( 
                __( 'Razorpay subscription payment successful. Payment ID: %s, Subscription ID: %s, Signature: %s', 'ohmylms' ), 
                $razorpay_payment_id, 
                $razorpay_subscription_id, 
                $razorpay_signature 
            ) );
        } else {
            $order->add_order_note( sprintf( 
                __( 'Razorpay payment successful. Payment ID: %s, Order ID: %s, Signature: %s', 'ohmylms' ), 
                $razorpay_payment_id, 
                $razorpay_order_id, 
                $razorpay_signature 
            ) );
        }

        update_post_meta( $wp_order_id, '_razorpay_payment_id', $razorpay_payment_id );
        update_post_meta( $wp_order_id, '_razorpay_signature', $razorpay_signature );
        update_post_meta( $wp_order_id, '_transaction_id', $razorpay_payment_id );
        
        // Store the appropriate ID (order or subscription)
        if ( $razorpay_subscription_id ) {
            update_post_meta( $wp_order_id, '_razorpay_subscription_id', $razorpay_subscription_id );
        } else if ( $razorpay_order_id ) {
            update_post_meta( $wp_order_id, '_razorpay_order_id_successful', $razorpay_order_id );
        }

        // Log payment details for debugging

        // Store customer ID and payment method for recurring payments
        // Note: customer_id might not be present unless customer was created in Razorpay
        if ( isset( $payment_details['customer_id'] ) && ! empty( $payment_details['customer_id'] ) ) {
            update_post_meta( $wp_order_id, '_razorpay_customer_id', sanitize_text_field( $payment_details['customer_id'] ) );
        } else {
            // If no customer_id, use email as identifier for recurring payments
            $customer_email = $payment_details['email'] ?? $order->get_email();
            if ( ! empty( $customer_email ) ) {
                update_post_meta( $wp_order_id, '_razorpay_customer_email', sanitize_email( $customer_email ) );
            }
        }

        // Store payment method (card, upi, netbanking, wallet, etc.)
        if ( isset( $payment_details['method'] ) && ! empty( $payment_details['method'] ) ) {
            update_post_meta( $wp_order_id, '_razorpay_payment_method', sanitize_text_field( $payment_details['method'] ) );
        }

        // Store email from payment if available
        if ( isset( $payment_details['email'] ) && ! empty( $payment_details['email'] ) ) {
            update_post_meta( $wp_order_id, '_razorpay_payer_email', sanitize_email( $payment_details['email'] ) );
        }

        // Store contact from payment if available
        if ( isset( $payment_details['contact'] ) && ! empty( $payment_details['contact'] ) ) {
            update_post_meta( $wp_order_id, '_razorpay_payer_contact', sanitize_text_field( $payment_details['contact'] ) );
        }

        // Store card details if available (for reference in recurring payments)
        if ( isset( $payment_details['card_id'] ) && ! empty( $payment_details['card_id'] ) ) {
            update_post_meta( $wp_order_id, '_razorpay_card_id', sanitize_text_field( $payment_details['card_id'] ) );
        }

        if ( isset( $payment_details['card'] ) && is_array( $payment_details['card'] ) ) {
            if ( isset( $payment_details['card']['last4'] ) ) {
                update_post_meta( $wp_order_id, '_razorpay_card_last4', sanitize_text_field( $payment_details['card']['last4'] ) );
            }
            if ( isset( $payment_details['card']['network'] ) ) {
                update_post_meta( $wp_order_id, '_razorpay_card_network', sanitize_text_field( $payment_details['card']['network'] ) );
            }
        }

        // Store VPA for UPI payments
        if ( isset( $payment_details['vpa'] ) && ! empty( $payment_details['vpa'] ) ) {
            update_post_meta( $wp_order_id, '_razorpay_vpa', sanitize_text_field( $payment_details['vpa'] ) );
        }

        // Store wallet name if wallet payment
        if ( isset( $payment_details['wallet'] ) && ! empty( $payment_details['wallet'] ) ) {
            update_post_meta( $wp_order_id, '_razorpay_wallet', sanitize_text_field( $payment_details['wallet'] ) );
        }

        // Store bank name if netbanking
        if ( isset( $payment_details['bank'] ) && ! empty( $payment_details['bank'] ) ) {
            update_post_meta( $wp_order_id, '_razorpay_bank', sanitize_text_field( $payment_details['bank'] ) );
        }

        // Handle subscription activation if this was a subscription payment
        if ( $razorpay_subscription_id ) {
            // Find the WordPress subscription by Razorpay subscription ID
            $subscription_id = get_post_meta( $wp_order_id, '_subscription_id', true );
            
            if ( $subscription_id && class_exists( 'CodeRex\Ecommerce\SubscriptionManager' ) ) {
                // Activate the subscription
                \CodeRex\Ecommerce\SubscriptionManager::mark_subscription_active( $subscription_id );
                \CodeRex\Ecommerce\SubscriptionManager::add_subscription_note(
                    $subscription_id,
                    sprintf( __( 'Initial subscription payment received. Payment ID: %s', 'ohmylms' ), $razorpay_payment_id )
                );
                
                // Update last payment date
                update_post_meta( $subscription_id, '_last_payment_date', current_time( 'mysql' ) );
                
                $order->add_order_note( sprintf( 
                    __( 'Razorpay: Subscription #%1$d activated with payment ID %2$s', 'ohmylms' ), 
                    $subscription_id,
                    $razorpay_payment_id 
                ) );
                
                // Send confirmation email
                $this->send_subscription_confirmation_email( $order, $subscription_id, $razorpay_payment_id );
            } else {
                $order->add_order_note( sprintf( 
                    __( 'Razorpay: Initial payment for subscription %s confirmed. WordPress subscription not found.', 'ohmylms' ), 
                    $razorpay_subscription_id 
                ) );
            }
        }

        $return_url = '';
        if ( method_exists( $this, 'get_return_url' ) && is_callable( array( $this, 'get_return_url' ) ) ) {
            $return_url = $this->get_return_url( $order );
        } else if ( function_exists( 'ohmylms_get_page_url' ) ) {
            $return_url = ohmylms_get_page_url( 'thank_you' );
        } else {
            $thank_you_page_id = get_option( 'ohmylms_thank_you_page_id' );
            if ( $thank_you_page_id ) {
                $return_url = get_permalink( $thank_you_page_id );
            } else {
                $return_url = home_url( '/checkout/order-received/' . $wp_order_id . '/' );
            }
        }

        do_action( 'ohmylms_checkout_after_create_order', $order, [] );

        wp_send_json_success( array( 'message' => __( 'Payment verified successfully.', 'ohmylms' ), 'redirect_url' => $return_url ) );
        wp_die(); // this is required to terminate immediately and return a proper response
    }

    /**
     * Helper to convert amount to smallest currency unit.
     *
     * @param float|string $amount Amount.
     * @param string $currency_code Currency code.
     * @return int Amount in smallest unit.
     */
    private function get_amount_in_smallest_unit( $amount, $currency_code ) {
        $currency_code = strtoupper( $currency_code );
        // List of zero-decimal currencies
        $zero_decimal_currencies = array(
            'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF', 'KRW', 'MGA', 'PYG', 'RWF', 'UGX', 'VND', 'VUV', 'XAF', 'XOF', 'XPF'
        );

        if ( in_array( $currency_code, $zero_decimal_currencies, true ) ) {
            return absint( $amount );
        } else {
            // For other currencies, multiply by 100
            return absint( number_format( (float) $amount, 2, '', '' ) );
        }
    }

    /**
     * Send renewal payment notification to customer via email.
     *
     * @param int $renewal_order_id The renewal order ID.
     * @param string $razorpay_order_id The Razorpay order ID.
     * @param float $amount The payment amount.
     * @param string $currency The currency code.
     * @param string|null $payment_link_url The payment link URL (optional).
     * @return bool True if email sent successfully, false otherwise.
     */
    private function send_renewal_payment_notification( $renewal_order_id, $razorpay_order_id, $amount, $currency, $payment_link_url = null ) {
        $renewal_order = ecommerce_get_order( $renewal_order_id );
        if ( ! $renewal_order ) {
            error_log( "Razorpay: Could not send renewal payment notification - order {$renewal_order_id} not found" );
            return false;
        }

        $customer_email = $renewal_order->get_email();
        $customer_name = $renewal_order->get_student_name();
        
        if ( empty( $customer_email ) ) {
            error_log( "Razorpay: Could not send renewal payment notification - no email for order {$renewal_order_id}" );
            return false;
        }

        // Email subject
        $subject = sprintf( 
            __( 'Action Required: Complete Your Subscription Renewal Payment - Order #%s', 'ohmylms' ), 
            $renewal_order_id 
        );

        // Email body
        $message = sprintf(
            __( 'Hi %s,', 'ohmylms' ) . "\n\n",
            $customer_name
        );
        
        $message .= __( 'Your subscription is ready for renewal. To continue enjoying uninterrupted access, please complete your payment.', 'ohmylms' ) . "\n\n";
        
        $message .= sprintf(
            __( 'Order Number: #%s', 'ohmylms' ) . "\n",
            $renewal_order_id
        );
        
        $message .= sprintf(
            __( 'Amount Due: %s %s', 'ohmylms' ) . "\n\n",
            number_format( $amount, 2 ),
            $currency
        );
        
        if ( ! empty( $payment_link_url ) ) {
            $message .= __( 'To complete your payment, please click the link below:', 'ohmylms' ) . "\n";
            $message .= $payment_link_url . "\n\n";
            $message .= __( 'This is a secure payment link from Razorpay. You can pay using various payment methods including cards, UPI, net banking, and wallets.', 'ohmylms' ) . "\n\n";
        } else {
            $message .= sprintf(
                __( 'Razorpay Order ID: %s', 'ohmylms' ) . "\n\n",
                $razorpay_order_id
            );
            $message .= __( 'A payment request has been created. You should receive a payment link from Razorpay shortly, or you can contact our support team for assistance.', 'ohmylms' ) . "\n\n";
        }
        
        $message .= __( 'If you have any questions, please contact our support team.', 'ohmylms' ) . "\n\n";
        
        $message .= sprintf(
            __( 'Thank you for your continued subscription!', 'ohmylms' ) . "\n\n" .
            __( 'Best regards,', 'ohmylms' ) . "\n" .
            '%s',
            get_bloginfo( 'name' )
        );

        // Email headers
        $headers = array( 'Content-Type: text/plain; charset=UTF-8' );

        // Send email
        $email_sent = wp_mail( $customer_email, $subject, $message, $headers );
        
        if ( $email_sent ) {
            $renewal_order->add_order_note( sprintf(
                __( 'Renewal payment notification sent to customer email: %s%s', 'ohmylms' ),
                $customer_email,
                ! empty( $payment_link_url ) ? ' (with payment link)' : ''
            ) );
            error_log( "Razorpay: Renewal payment notification sent to {$customer_email} for order {$renewal_order_id}" );
        } else {
            // Log email content for debugging when wp_mail fails (e.g., on local development)
            error_log( "Razorpay: Failed to send renewal payment notification to {$customer_email} for order {$renewal_order_id}" );
            error_log( "Razorpay: Email Subject: {$subject}" );
            error_log( "Razorpay: Email Body: {$message}" );
            
            $renewal_order->add_order_note( sprintf(
                __( 'Failed to send renewal payment notification email to customer. Email would have been sent to: %s (Check error log for details)', 'ohmylms' ),
                $customer_email
            ) );
        }

        return $email_sent;
    }

    /**
     * Register webhook routes for Razorpay events.
     */
    public function register_webhook_routes() {
        register_rest_route( 'ohmylms/v1', '/razorpay/webhook', array(
            'methods'             => 'POST',
            'callback'            => array( $this, 'handle_webhook' ),
            'permission_callback' => '__return_true',
        ) );
    }

    /**
     * Handle Razorpay webhook events.
     *
     * @param \WP_REST_Request $request The webhook request.
     * @return \WP_REST_Response The webhook response.
     */
    public function handle_webhook( $request ) {
        $webhook_body = $request->get_body();
        $webhook_signature = $request->get_header( 'X-Razorpay-Signature' );
        
        // Get webhook secret from settings
        $webhook_secret = $this->get_setting( 'webhook_secret', '' );

        if ( empty( $webhook_secret ) ) {
            error_log( 'Razorpay Webhook: Secret not configured' );
            return new \WP_REST_Response( array( 'error' => 'Webhook secret not configured' ), 400 );
        }

        // Verify webhook signature
        $signature_valid = RazorpayAPI::verify_webhook_signature( $webhook_body, $webhook_signature, $webhook_secret );

        if ( ! $signature_valid ) {
            error_log( 'Razorpay Webhook: Invalid signature' );
            return new \WP_REST_Response( array( 'error' => 'Invalid signature' ), 400 );
        }

        $event = json_decode( $webhook_body, true );

        if ( ! isset( $event['event'] ) ) {
            error_log( 'Razorpay Webhook: No event type found' );
            return new \WP_REST_Response( array( 'error' => 'No event type' ), 400 );
        }

        $event_type = $event['event'];
        $payload = isset( $event['payload'] ) ? $event['payload'] : array();


        // Handle different event types
        switch ( $event_type ) {
            case 'payment.captured':
                $this->handle_payment_captured( $payload );
                break;
            
            case 'payment.failed':
                $this->handle_payment_failed( $payload );
                break;
            
            case 'subscription.charged':
                $this->handle_subscription_charged( $payload );
                break;
            
            case 'subscription.cancelled':
            case 'subscription.completed':
                $this->handle_subscription_status_change( $payload, $event_type );
                break;
            
            default:
                error_log( 'Razorpay Webhook: Unhandled event type ' . $event_type );
                break;
        }

        return new \WP_REST_Response( array( 'success' => true ), 200 );
    }

    /**
     * Handle payment.captured webhook event.
     *
     * @param array $payload The webhook payload.
     */
    private function handle_payment_captured( $payload ) {
        if ( ! isset( $payload['payment']['entity']['notes']['order_id'] ) ) {
            error_log( 'Razorpay Webhook: No order_id in payment.captured payload' );
            return;
        }

        $order_id = absint( $payload['payment']['entity']['notes']['order_id'] );
        $payment_id = $payload['payment']['entity']['id'];
        $payment_entity = $payload['payment']['entity'];

        $order = ecommerce_get_order( $order_id );
        if ( ! $order ) {
            error_log( "Razorpay Webhook: Order {$order_id} not found" );
            return;
        }

        if ( $order->has_status( 'completed' ) || $order->has_status( 'processing' ) ) {
            return; // Already processed
        }

        // Store payment metadata
        update_post_meta( $order_id, '_razorpay_payment_id', $payment_id );
        update_post_meta( $order_id, '_transaction_id', $payment_id );

        // Store customer ID and payment method for recurring payments
        if ( isset( $payment_entity['customer_id'] ) && ! empty( $payment_entity['customer_id'] ) ) {
            update_post_meta( $order_id, '_razorpay_customer_id', sanitize_text_field( $payment_entity['customer_id'] ) );
        }

        if ( isset( $payment_entity['method'] ) && ! empty( $payment_entity['method'] ) ) {
            update_post_meta( $order_id, '_razorpay_payment_method', sanitize_text_field( $payment_entity['method'] ) );
        }

        // Store card details if available
        if ( isset( $payment_entity['card_id'] ) && ! empty( $payment_entity['card_id'] ) ) {
            update_post_meta( $order_id, '_razorpay_card_id', sanitize_text_field( $payment_entity['card_id'] ) );
        }

        if ( isset( $payment_entity['card'] ) && is_array( $payment_entity['card'] ) ) {
            if ( isset( $payment_entity['card']['last4'] ) ) {
                update_post_meta( $order_id, '_razorpay_card_last4', sanitize_text_field( $payment_entity['card']['last4'] ) );
            }
            if ( isset( $payment_entity['card']['network'] ) ) {
                update_post_meta( $order_id, '_razorpay_card_network', sanitize_text_field( $payment_entity['card']['network'] ) );
            }
        }

        $order->payment_complete( $payment_id );
        $order->add_order_note( sprintf( __( 'Razorpay payment captured via webhook. Payment ID: %s', 'ohmylms' ), $payment_id ) );
    }

    /**
     * Handle payment.failed webhook event.
     *
     * @param array $payload The webhook payload.
     */
    private function handle_payment_failed( $payload ) {
        if ( ! isset( $payload['payment']['entity']['notes']['order_id'] ) ) {
            return;
        }

        $order_id = absint( $payload['payment']['entity']['notes']['order_id'] );
        $order = ecommerce_get_order( $order_id );
        
        if ( ! $order ) {
            return;
        }

        $error_description = isset( $payload['payment']['entity']['error_description'] ) 
            ? $payload['payment']['entity']['error_description'] 
            : 'Payment failed';

        $order->update_status( 'failed', sprintf( __( 'Razorpay payment failed: %s', 'ohmylms' ), $error_description ) );
    }

    /**
     * Handle subscription.charged webhook event.
     *
     * @param array $payload The webhook payload.
     */
    private function handle_subscription_charged( $payload ) {
        if ( ! isset( $payload['subscription']['entity']['id'] ) ) {
            return;
        }

        $razorpay_subscription_id = $payload['subscription']['entity']['id'];
        $payment_entity = isset( $payload['payment']['entity'] ) ? $payload['payment']['entity'] : array();
        $payment_id = isset( $payment_entity['id'] ) ? $payment_entity['id'] : '';

        // Find subscription with this Razorpay subscription ID
        $subscriptions = get_posts( array(
            'post_type'   => 'ohmylms-subscription',
            'meta_key'    => '_razorpay_subscription_id',
            'meta_value'  => $razorpay_subscription_id,
            'post_status' => 'any',
            'numberposts' => 1,
        ) );

        if ( empty( $subscriptions ) ) {
            error_log( "Razorpay Webhook: No subscription found for Razorpay subscription ID {$razorpay_subscription_id}" );
            return;
        }

        $subscription_id = $subscriptions[0]->ID;
        $original_order_id = get_post_meta( $subscription_id, '_original_order_id', true );

        if ( ! $original_order_id ) {
            error_log( "Razorpay Webhook: Original order ID not found for subscription {$subscription_id}" );
            return;
        }

        // Check if this is the first payment by verifying if the original order has been completed
        $order = ecommerce_get_order( $original_order_id );
        
        if ( ! $order ) {
            error_log( "Razorpay Webhook: Order {$original_order_id} not found" );
            return;
        }

        // First payment if order hasn't been completed yet
        $is_first_payment = ! $order->has_status( array( 'completed', 'processing' ) );

        if ( $is_first_payment ) {
            // This is the first payment - complete the original order
            
            // Store payment metadata
            if ( ! empty( $payment_id ) ) {
                update_post_meta( $original_order_id, '_razorpay_payment_id', $payment_id );
                update_post_meta( $original_order_id, '_transaction_id', $payment_id );

                // Store customer details if available
                if ( isset( $payment_entity['customer_id'] ) && ! empty( $payment_entity['customer_id'] ) ) {
                    update_post_meta( $original_order_id, '_razorpay_customer_id', sanitize_text_field( $payment_entity['customer_id'] ) );
                }

                if ( isset( $payment_entity['method'] ) && ! empty( $payment_entity['method'] ) ) {
                    update_post_meta( $original_order_id, '_razorpay_payment_method', sanitize_text_field( $payment_entity['method'] ) );
                }

                // Complete the payment
                $order->payment_complete( $payment_id );
                $order->add_order_note( sprintf(
                    __( 'Razorpay initial subscription payment received via webhook. Payment ID: %s', 'ohmylms' ),
                    $payment_id
                ) );
            }

            // Mark subscription as active
            if ( class_exists( 'CodeRex\Ecommerce\SubscriptionManager' ) ) {
                \CodeRex\Ecommerce\SubscriptionManager::mark_subscription_active( $subscription_id );
                \CodeRex\Ecommerce\SubscriptionManager::add_subscription_note(
                    $subscription_id,
                    sprintf( __( 'Initial subscription payment received. Payment ID: %s', 'ohmylms' ), $payment_id )
                );
            }

            // Update last payment date
            update_post_meta( $subscription_id, '_last_payment_date', current_time( 'mysql' ) );

            // Send confirmation email with return link
            $this->send_subscription_confirmation_email( $order, $subscription_id, $payment_id );

        } else {
            // This is a renewal payment - create renewal order
            if ( ! class_exists( 'CodeRex\Ecommerce\SubscriptionManager' ) ) {
                error_log( 'Razorpay Webhook: SubscriptionManager class not found for renewal processing' );
                return;
            }

            // Create renewal order (Razorpay has already charged the customer)
            $renewal_result = $this->create_renewal_order_from_webhook( $subscription_id, $payment_id, $payment_entity );
            
            if ( is_wp_error( $renewal_result ) ) {
                error_log( 'Razorpay Webhook: Failed to create renewal order - ' . $renewal_result->get_error_message() );
                \CodeRex\Ecommerce\SubscriptionManager::add_subscription_note(
                    $subscription_id,
                    sprintf( __( 'Renewal payment received (Payment ID: %1$s) but order creation failed: %2$s', 'ohmylms' ), $payment_id, $renewal_result->get_error_message() )
                );
                return;
            }

            // Update last payment date
            update_post_meta( $subscription_id, '_last_payment_date', current_time( 'mysql' ) );

            // Trigger action for external integrations
            do_action( 'ohmylms_razorpay_subscription_renewal_received', $subscription_id, $payment_id, $payment_entity, $renewal_result );
        }
    }

    /**
     * Handle subscription status change webhook events.
     *
     * @param array $payload The webhook payload.
     * @param string $event_type The event type.
     */
    private function handle_subscription_status_change( $payload, $event_type ) {
        if ( ! isset( $payload['subscription']['entity']['id'] ) ) {
            return;
        }

        $razorpay_subscription_id = $payload['subscription']['entity']['id'];
        $razorpay_status = isset( $payload['subscription']['entity']['status'] ) ? $payload['subscription']['entity']['status'] : '';

        // Find subscription with this Razorpay subscription ID
        $subscriptions = get_posts( array(
            'post_type'   => 'ohmylms-subscription',
            'meta_key'    => '_razorpay_subscription_id',
            'meta_value'  => $razorpay_subscription_id,
            'post_status' => 'any',
            'numberposts' => 1,
        ) );

        if ( empty( $subscriptions ) ) {
            error_log( "Razorpay Webhook: No subscription found for Razorpay subscription ID {$razorpay_subscription_id}" );
            return;
        }

        $subscription_id = $subscriptions[0]->ID;

        // Map Razorpay status to OhMyLMS subscription status
        $status_map = array(
            'created'     => 'ohmylms-pending',
            'authenticated' => 'ohmylms-pending',
            'active'      => 'ohmylms-active',
            'pending'     => 'ohmylms-pending',
            'halted'      => 'ohmylms-on-hold',
            'cancelled'   => 'ohmylms-cancelled',
            'completed'   => 'ohmylms-expired',
            'expired'     => 'ohmylms-expired',
            'paused'      => 'ohmylms-on-hold',
        );

        $new_status = isset( $status_map[ $razorpay_status ] ) ? $status_map[ $razorpay_status ] : '';

        if ( $new_status && class_exists( 'CodeRex\Ecommerce\SubscriptionManager' ) ) {
            $subscription = get_post( $subscription_id );
            
            if ( $subscription && $subscription->post_status !== $new_status ) {
                wp_update_post( array(
                    'ID'          => $subscription_id,
                    'post_status' => $new_status,
                ) );

                \CodeRex\Ecommerce\SubscriptionManager::add_subscription_note(
                    $subscription_id,
                    sprintf(
                        __( 'Razorpay subscription status changed to %s (Event: %s)', 'ohmylms' ),
                        $razorpay_status,
                        $event_type
                    )
                );

                // Handle cancellation - revoke membership access
                if ( $razorpay_status === 'cancelled' || $razorpay_status === 'expired' || $razorpay_status === 'completed' ) {
                    $membership_id = get_post_meta( $subscription_id, '_membership_id', true );
                    $student_id = get_post_meta( $subscription_id, '_student_id', true );
                    $original_order_id = get_post_meta( $subscription_id, '_original_order_id', true );

                    if ( $membership_id && $student_id && $original_order_id ) {
                        if ( function_exists( 'ohmylms_get_membership' ) && ohmylms_is_pro() ) {
                            $membership = ohmylms_get_membership( $membership_id );
                            if ( $membership && method_exists( $membership, 'cancel_enrollment' ) ) {
                                $membership->cancel_enrollment( $student_id, $original_order_id );
                                \CodeRex\Ecommerce\SubscriptionManager::add_subscription_note(
                                    $subscription_id,
                                    __( 'Membership access revoked due to subscription cancellation.', 'ohmylms' )
                                );
                            }
                        }
                    }
                }
            }
        }

        // Also add note to the original order
        $original_order_id = get_post_meta( $subscription_id, '_original_order_id', true );
        if ( $original_order_id ) {
            $order = ecommerce_get_order( $original_order_id );
            if ( $order ) {
                $order->add_order_note( sprintf(
                    __( 'Razorpay subscription status changed: %s (Event: %s)', 'ohmylms' ),
                    $razorpay_status,
                    $event_type
                ) );
            }
        }
    }

    /**
     * Send subscription confirmation email with return to site link.
     *
     * @param object $order The order object.
     * @param int $subscription_id The subscription ID.
     * @param string $payment_id The Razorpay payment ID.
     */
    private function send_subscription_confirmation_email( $order, $subscription_id, $payment_id ) {
        $customer_email = $order->get_email();
        $customer_name = $order->get_student_name();
        
        if ( empty( $customer_email ) ) {
            return;
        }

        // Build return URL
        $return_url = $this->get_return_url( $order );
        if ( empty( $return_url ) ) {
            $return_url = home_url( '/' );
        }

        $site_name = get_bloginfo( 'name' );
        $subject = sprintf( __( 'Subscription Activated - %s', 'ohmylms' ), $site_name );
        
        $message = sprintf(
            __( 'Hello %s,', 'ohmylms' ) . "\n\n" .
            __( 'Thank you for your payment! Your subscription has been successfully activated.', 'ohmylms' ) . "\n\n" .
            __( 'Payment Details:', 'ohmylms' ) . "\n" .
            __( 'Order #%s', 'ohmylms' ) . "\n" .
            __( 'Subscription #%s', 'ohmylms' ) . "\n" .
            __( 'Payment ID: %s', 'ohmylms' ) . "\n\n" .
            __( 'Click here to return to your account:', 'ohmylms' ) . "\n%s\n\n" .
            __( 'Thank you for your business!', 'ohmylms' ) . "\n" .
            $site_name,
            $customer_name,
            $order->get_id(),
            $subscription_id,
            $payment_id,
            $return_url
        );

        $headers = array( 'Content-Type: text/plain; charset=UTF-8' );
        
        // Send email
        $sent = wp_mail( $customer_email, $subject, $message, $headers );
        
        if ( $sent ) {
            $order->add_order_note( __( 'Subscription confirmation email sent to customer with return link.', 'ohmylms' ) );
        } else {
            error_log( sprintf( 'Razorpay: Failed to send confirmation email to %s', $customer_email ) );
        }
    }

    /**
     * Create renewal order from Razorpay webhook (payment already processed).
     * Mimics SubscriptionManager::process_subscription_renewal() but for webhook-based renewals.
     *
     * @param int $subscription_id The subscription ID.
     * @param string $payment_id The Razorpay payment ID.
     * @param array $payment_entity The payment entity data from webhook.
     * @return int|WP_Error Renewal order ID on success, WP_Error on failure.
     */
    private function create_renewal_order_from_webhook( $subscription_id, $payment_id, $payment_entity ) {
        $subscription_id = absint( $subscription_id );
        
        // Get subscription data
        $original_order_id = get_post_meta( $subscription_id, '_original_order_id', true );
        $student_id = absint( get_post_meta( $subscription_id, '_student_id', true ) );
        $membership_id = absint( get_post_meta( $subscription_id, '_membership_id', true ) );
        
        if ( ! $original_order_id || ! $student_id || ! $membership_id ) {
            return new \WP_Error(
                'missing_subscription_data',
                __( 'Missing critical subscription data (order, student, or membership ID).', 'ohmylms' )
            );
        }
        
        // Get original order
        $original_order = ecommerce_get_order( $original_order_id );
        if ( ! $original_order ) {
            return new \WP_Error(
                'original_order_not_found',
                sprintf( __( 'Original order #%d not found.', 'ohmylms' ), $original_order_id )
            );
        }
        
        // Get renewal amount
        $amount_to_charge = (float) get_post_meta( $subscription_id, '_recurring_amount', true );
        if ( $amount_to_charge <= 0 ) {
            $amount_to_charge = (float) get_post_meta( $membership_id, '_regular_price', true );
        }
        
        // Calculate tax
        $tax_rate = $original_order->get_tax_rate();
        $tax_amount_data = \TaxCalculator::get_instance()->calculate_tax( $tax_rate, array( 'total' => $amount_to_charge ) );
        $total_with_tax = is_array( $tax_amount_data ) && isset( $tax_amount_data['total_with_tax'] ) ? $tax_amount_data['total_with_tax'] : $amount_to_charge;
        $tax_amount = is_array( $tax_amount_data ) && isset( $tax_amount_data['tax_amount'] ) ? $tax_amount_data['tax_amount'] : 0;
        
        // Create renewal order
        try {
            $renewal_order = new \CodeRex\Ecommerce\Data\Order();
            $renewal_order->set_tax_amount( $tax_amount );
            $renewal_order->set_tax_rate( $tax_rate );
            $renewal_order->set_total( $total_with_tax );
            $renewal_order->set_payment_method( 'razorpay' );
            $renewal_order->set_payment_method_title( $this->title );
            $renewal_order->set_student_id( $student_id );
            $renewal_order->set_email( $original_order->get_email() );
            $renewal_order->set_first_name( $original_order->get_first_name() );
            $renewal_order->set_last_name( $original_order->get_last_name() );
            $renewal_order->set_address( $original_order->get_address() );
            $renewal_order->set_country( $original_order->get_country() );
            $renewal_order->set_parent_id( $original_order_id );
            $renewal_order->set_order_version( defined( 'OHMYLMS_VERSION' ) ? OHMYLMS_VERSION : '1.0.0' );
            
            // Add order items from original order
            foreach ( $original_order->get_items( 'line_item' ) as $item ) {
                $product_id = $item->get_course_id();
                if ( ! $product_id ) {
                    continue;
                }
                
                $membership = get_post( $membership_id );
                if ( ! $membership || $membership->post_type !== 'ohmylms-membership' ) {
                    continue;
                }
                
                if ( ohmylms_is_pro() ) {
                    $product = ohmylms_get_membership( $product_id );
                } else {
                    $product = null;
                }
                
                if ( ! $product ) {
                    continue;
                }
                
                $renewal_item = new \CodeRex\Ecommerce\Data\OrderItemCourse();
                $renewal_item->set_course_id( $item->get_course_id() );
                $renewal_item->set_quantity( $item->get_quantity() );
                $renewal_item->set_name( $item->get_name() );
                $renewal_item->set_total( $product->get_regular_price() );
                $renewal_item->set_subtotal( $product->get_regular_price() );
                $renewal_order->add_item( $renewal_item );
            }
            
            // Save renewal order
            $renewal_order_id = $renewal_order->save();
            
            if ( ! $renewal_order_id ) {
                throw new \Exception( __( 'Failed to save renewal order.', 'ohmylms' ) );
            }
            
            // Store payment metadata
            update_post_meta( $renewal_order_id, '_razorpay_payment_id', sanitize_text_field( $payment_id ) );
            update_post_meta( $renewal_order_id, '_transaction_id', sanitize_text_field( $payment_id ) );
            update_post_meta( $renewal_order_id, '_subscription_renewal_id', $subscription_id );
            
            if ( isset( $payment_entity['customer_id'] ) && ! empty( $payment_entity['customer_id'] ) ) {
                update_post_meta( $renewal_order_id, '_razorpay_customer_id', sanitize_text_field( $payment_entity['customer_id'] ) );
            }
            
            if ( isset( $payment_entity['method'] ) && ! empty( $payment_entity['method'] ) ) {
                update_post_meta( $renewal_order_id, '_razorpay_payment_method', sanitize_text_field( $payment_entity['method'] ) );
            }
            
            // Mark order as complete (payment already processed by Razorpay)
            $renewal_order->payment_complete( $payment_id );
            $renewal_order->add_order_note(
                sprintf(
                    __( 'Renewal order created and completed via Razorpay webhook. Payment ID: %s', 'ohmylms' ),
                    $payment_id
                )
            );
            
            // Update subscription meta
            update_post_meta( $subscription_id, '_last_renewal_order_id', $renewal_order_id );
            
            // Add note to subscription
            \CodeRex\Ecommerce\SubscriptionManager::add_subscription_note(
                $subscription_id,
                sprintf( __( 'Renewal order #%1$d created and completed. Payment ID: %2$s', 'ohmylms' ), $renewal_order_id, $payment_id )
            );
            
            // Calculate and update next payment date
            $period = get_post_meta( $membership_id, '_subscription_period', true );
            $interval = (int) get_post_meta( $membership_id, '_subscription_period_interval', true );
            $current_next_payment = get_post_meta( $subscription_id, '_schedule_next_payment_date', true );
            
            $base_ts = $current_next_payment ? strtotime( $current_next_payment ) : current_time( 'timestamp' );
            
            try {
                $next_payment_dt = ( new \DateTime( "@$base_ts" ) )->setTimezone( new \DateTimeZone( 'GMT' ) );
                $next_payment_dt->modify( "+{$interval} {$period}" );
                $new_next_payment_date = $next_payment_dt->format( 'Y-m-d H:i:s' );
                
                // Check if we've reached the end date
                $end_date = get_post_meta( $subscription_id, '_schedule_end_date', true );
                if ( $end_date && strtotime( $new_next_payment_date ) >= strtotime( $end_date ) ) {
                    // No more renewals needed
                    delete_post_meta( $subscription_id, '_schedule_next_payment_date' );
                    \CodeRex\Ecommerce\SubscriptionManager::add_subscription_note(
                        $subscription_id,
                        __( 'Final renewal completed. Subscription will remain active until end date.', 'ohmylms' )
                    );
                } else {
                    update_post_meta( $subscription_id, '_schedule_next_payment_date', $new_next_payment_date );
                    \CodeRex\Ecommerce\SubscriptionManager::add_subscription_note(
                        $subscription_id,
                        sprintf( __( 'Next payment date updated to %s.', 'ohmylms' ), $new_next_payment_date )
                    );
                }
            } catch ( \Exception $e ) {
                error_log( 'Razorpay: Error calculating next payment date - ' . $e->getMessage() );
            }
            
            // Ensure subscription is active
            \CodeRex\Ecommerce\SubscriptionManager::mark_subscription_active( $subscription_id );
            
            // Fire completion hook
            do_action( 'ohmylms_subscription_renewal_payment_completed', $subscription_id, $total_with_tax, $payment_id );
            
            return $renewal_order_id;
            
        } catch ( \Exception $e ) {
            return new \WP_Error(
                'renewal_order_creation_failed',
                sprintf( __( 'Failed to create renewal order: %s', 'ohmylms' ), $e->getMessage() )
            );
        }
    }

    /**
     * Sync membership plan to Razorpay.
     * Creates or updates a Razorpay plan when membership is saved.
     *
     * @param object $membership The membership object.
     * @param object $data_store The data store object.
     * @return void
     */
    /**
     * Sync membership plan to Razorpay.
     * Creates or updates a Razorpay subscription plan when a membership is saved.
     *
     * @param object $membership The membership object.
     * @param object $data_store The data store object (unused, for hook compatibility).
     * @param bool $force_create Force plan creation even if gateway is disabled.
     */
    public function sync_membership_plan_to_razorpay( $membership, $data_store = null, $force_create = false ) {
        // Only sync if this gateway is enabled (unless forced)
        if ( ! $force_create && 'yes' !== $this->enabled ) {
            return;
        }

        // Ensure we have credentials
        if ( empty( $this->publishable_key ) || empty( $this->secret_key ) ) {
            return;
        }

        // Check if membership has recurring subscription
        if ( ! method_exists( $membership, 'get_subscription_period' ) ) {
            return;
        }

        $subscription_period = $membership->get_subscription_period();
        // Skip one-time purchases
        if ( 'one_time' === $subscription_period ) {
            return;
        }

        $membership_id = $membership->get_id();
        if ( ! $membership_id ) {
            return;
        }

        RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );

        // Get existing plan ID
        $existing_plan_id = get_post_meta( $membership_id, '_razorpay_plan_id', true );

        // Prepare plan data
        $period_map = array(
            'day'   => 'daily',
            'week'  => 'weekly',
            'month' => 'monthly',
            'year'  => 'yearly',
        );

        $razorpay_period = isset( $period_map[ $subscription_period ] ) ? $period_map[ $subscription_period ] : 'monthly';

        $interval = 1;
        if ( method_exists( $membership, 'get_subscription_period_interval' ) ) {
            $interval = absint( $membership->get_subscription_period_interval() );
            if ( $interval < 1 ) {
                $interval = 1;
            }
        }

        // Get pricing
        $regular_price = (float) $membership->get_regular_price();
        $price = $membership->get_price(); // This returns sale price if active, otherwise regular price
        
        // Validate price
        if ( $price <= 0 ) {
            error_log( sprintf(
                'Razorpay: Plan sync skipped for Membership ID %d - invalid price: %s',
                $membership_id,
                $price
            ) );
            return;
        }
        
        // Convert to smallest currency unit (paise for INR, cents for USD, etc.)
        $amount = absint( $price * 100 );
        
        // Razorpay requires minimum amount
        if ( $amount < 100 ) { // Minimum 1.00 in currency
            error_log( sprintf(
                'Razorpay: Plan sync failed for Membership ID %d - amount too small: %d (minimum 100 required)',
                $membership_id,
                $amount
            ) );
            return;
        }

        // Get currency
        // Note: For Razorpay subscriptions, most Indian accounts only support INR
        // International currencies (USD, EUR, etc.) require international Razorpay account
        $currency = get_ohmylms_currency();
        
        // Allow admin to override currency for Razorpay subscriptions
        $razorpay_subscription_currency = apply_filters( 'ohmylms_razorpay_subscription_currency', $currency, $membership_id );
        
        if ( ! empty( $razorpay_subscription_currency ) ) {
            $currency = $razorpay_subscription_currency;
        }
        
        if ( empty( $currency ) ) {
            $currency = 'INR';
        }
        
        $currency = strtoupper( $currency );
        
        // Log currency being used
        error_log( sprintf(
            'Razorpay: Creating plan for Membership ID %d with currency: %s (Site currency: %s)',
            $membership_id,
            $currency,
            get_ohmylms_currency()
        ) );
        $plan_name = sprintf(
            '%s - %s',
            $membership->get_name(),
            ucfirst( $razorpay_period )
        );

        $plan_data = array(
            'period'   => $razorpay_period,
            'interval' => $interval,
            'item'     => array(
                'name'        => $plan_name,
                'description' => $membership->get_description() ? wp_strip_all_tags( $membership->get_description() ) : $plan_name,
                'amount'      => $amount,
                'currency'    => strtoupper( $currency ),
            ),
            'notes'    => array(
                'membership_id' => (string) $membership_id,
                'plugin'        => 'OhMyLMS',
            ),
        );

        // If plan exists, we should create a new one as Razorpay doesn't allow updating plans
        // But we'll keep the old one for existing subscriptions
        if ( ! empty( $existing_plan_id ) ) {
            // Verify the plan still exists on Razorpay
            $existing_plan = RazorpayAPI::fetch_plan( $existing_plan_id );
            
            if ( ! is_wp_error( $existing_plan ) && isset( $existing_plan['id'] ) ) {
                // Plan exists, check if we need to create a new one due to price/interval change
                $needs_new_plan = false;
                
                if ( isset( $existing_plan['item']['amount'] ) && $existing_plan['item']['amount'] != $amount ) {
                    $needs_new_plan = true;
                }
                
                if ( isset( $existing_plan['period'] ) && $existing_plan['period'] != $razorpay_period ) {
                    $needs_new_plan = true;
                }
                
                if ( isset( $existing_plan['interval'] ) && $existing_plan['interval'] != $interval ) {
                    $needs_new_plan = true;
                }
                
                if ( ! $needs_new_plan ) {
                    // No changes needed
                    return;
                }
            }
        }

        // Create new plan
        $new_plan = RazorpayAPI::create_plan( $plan_data );

        if ( is_wp_error( $new_plan ) ) {
            error_log( sprintf(
                'Razorpay Plan Creation Error for Membership ID %d: %s',
                $membership_id,
                $new_plan->get_error_message()
            ) );
            return;
        }

        if ( ! empty( $new_plan['id'] ) ) {
            update_post_meta( $membership_id, '_razorpay_plan_id', $new_plan['id'] );
            
            // Store old plan ID for reference if it exists
            if ( ! empty( $existing_plan_id ) && $existing_plan_id !== $new_plan['id'] ) {
                $old_plans = get_post_meta( $membership_id, '_razorpay_old_plan_ids', true );
                if ( ! is_array( $old_plans ) ) {
                    $old_plans = array();
                }
                $old_plans[] = $existing_plan_id;
                update_post_meta( $membership_id, '_razorpay_old_plan_ids', $old_plans );
            }
            
            error_log( sprintf(
                'Razorpay Plan created/updated for Membership ID %d: Plan ID %s',
                $membership_id,
                $new_plan['id']
            ) );
        }
    }

    /**
     * Get Razorpay subscription details for a user and membership.
     *
     * @param int $student_id The student/user ID.
     * @param int $membership_id The membership ID.
     * @return array|false Subscription details or false if not found.
     */
    public static function get_user_subscription_details( $student_id, $membership_id ) {
        $razorpay_subscription_id = get_user_meta( $student_id, "_razorpay_subscription_{$membership_id}", true );
        
        if ( empty( $razorpay_subscription_id ) ) {
            return false;
        }

        // Get gateway instance to use credentials
        $gateway = new self();
        RazorpayAPI::set_credentials( $gateway->publishable_key, $gateway->secret_key );

        $subscription = RazorpayAPI::fetch_subscription( $razorpay_subscription_id );

        if ( is_wp_error( $subscription ) ) {
            return false;
        }

        // Format the response
        return array(
            'id'              => $subscription['id'] ?? '',
            'status'          => $subscription['status'] ?? '',
            'plan_id'         => $subscription['plan_id'] ?? '',
            'customer_id'     => $subscription['customer_id'] ?? '',
            'created_at'      => isset( $subscription['created_at'] ) ? date( 'Y-m-d H:i:s', $subscription['created_at'] ) : '',
            'start_at'        => isset( $subscription['start_at'] ) ? date( 'Y-m-d H:i:s', $subscription['start_at'] ) : '',
            'end_at'          => isset( $subscription['end_at'] ) ? date( 'Y-m-d H:i:s', $subscription['end_at'] ) : '',
            'charge_at'       => isset( $subscription['charge_at'] ) ? date( 'Y-m-d H:i:s', $subscription['charge_at'] ) : '',
            'paid_count'      => $subscription['paid_count'] ?? 0,
            'total_count'     => $subscription['total_count'] ?? 0,
            'short_url'       => $subscription['short_url'] ?? '',
            'raw'             => $subscription,
        );
    }

    /**
     * Get readable status label for Razorpay subscription status.
     *
     * @param string $status The Razorpay subscription status.
     * @return string The readable status label.
     */
    public static function get_subscription_status_label( $status ) {
        $labels = array(
            'created'       => __( 'Created', 'ohmylms' ),
            'authenticated' => __( 'Authenticated', 'ohmylms' ),
            'active'        => __( 'Active', 'ohmylms' ),
            'pending'       => __( 'Pending', 'ohmylms' ),
            'halted'        => __( 'On Hold', 'ohmylms' ),
            'cancelled'     => __( 'Cancelled', 'ohmylms' ),
            'completed'     => __( 'Completed', 'ohmylms' ),
            'expired'       => __( 'Expired', 'ohmylms' ),
            'paused'        => __( 'Paused', 'ohmylms' ),
        );

        return isset( $labels[ $status ] ) ? $labels[ $status ] : ucfirst( $status );
    }

    /**
     * Add custom columns to subscription admin list.
     *
     * @param array $columns Existing columns.
     * @return array Modified columns.
     */
    public function add_subscription_admin_columns( $columns ) {
        // Insert after 'title' column
        $new_columns = array();
        foreach ( $columns as $key => $value ) {
            $new_columns[ $key ] = $value;
            if ( 'title' === $key ) {
                $new_columns['razorpay_subscription_id'] = __( 'Razorpay Subscription', 'ohmylms' );
            }
        }
        return $new_columns;
    }

    /**
     * Render custom column content in subscription admin list.
     *
     * @param string $column Column name.
     * @param int $post_id Post ID.
     */
    public function render_subscription_admin_columns( $column, $post_id ) {
        if ( 'razorpay_subscription_id' === $column ) {
            $razorpay_subscription_id = get_post_meta( $post_id, '_razorpay_subscription_id', true );
            $payment_gateway_id = get_post_meta( $post_id, '_payment_gateway_id', true );
            
            if ( 'razorpay' === $payment_gateway_id && ! empty( $razorpay_subscription_id ) ) {
                // Add link to Razorpay dashboard if in test mode show test link, otherwise live link
                $is_test = 'yes' === $this->testmode;
                $dashboard_url = $is_test 
                    ? 'https://dashboard.razorpay.com/app/subscriptions/' . $razorpay_subscription_id
                    : 'https://dashboard.razorpay.com/app/subscriptions/' . $razorpay_subscription_id;
                
                printf(
                    '<a href="%s" target="_blank" rel="noopener">%s</a>',
                    esc_url( $dashboard_url ),
                    esc_html( $razorpay_subscription_id )
                );
                
                // Show status badge
                RazorpayAPI::set_credentials( $this->publishable_key, $this->secret_key );
                $subscription = RazorpayAPI::fetch_subscription( $razorpay_subscription_id );
                
                if ( ! is_wp_error( $subscription ) && isset( $subscription['status'] ) ) {
                    $status = $subscription['status'];
                    $status_label = self::get_subscription_status_label( $status );
                    $status_class = 'active' === $status ? 'success' : ( in_array( $status, array( 'cancelled', 'expired' ), true ) ? 'danger' : 'warning' );
                    
                    printf(
                        '<br><span class="badge badge-%s" style="display: inline-block; margin-top: 5px; padding: 2px 8px; border-radius: 3px; font-size: 11px; background: %s; color: white;">%s</span>',
                        esc_attr( $status_class ),
                        esc_attr( 'success' === $status_class ? '#28a745' : ( 'danger' === $status_class ? '#dc3545' : '#ffc107' ) ),
                        esc_html( $status_label )
                    );
                }
            } else {
                echo '—';
            }
        }
    }

    /**
     * Maybe create Razorpay plans for memberships.
     * Triggered via admin URL: /wp-admin/?razorpay_create_plans=1
     */
    public function maybe_create_membership_plans() {
        // Check if action is triggered
        if ( ! isset( $_GET['razorpay_create_plans'] ) || ! current_user_can( 'manage_options' ) ) {
            return;
        }

        // Security nonce check
        if ( ! isset( $_GET['_wpnonce'] ) || ! wp_verify_nonce( $_GET['_wpnonce'], 'razorpay_create_plans' ) ) {
            wp_die( __( 'Security check failed', 'ohmylms' ) );
        }

        // Get all memberships
        $memberships = get_posts( array(
            'post_type'      => 'ohmylms-membership',
            'posts_per_page' => -1,
            'post_status'    => 'publish',
        ) );

        $created = 0;
        $skipped = 0;
        $errors = array();

        foreach ( $memberships as $membership_post ) {
            if ( ! function_exists( 'ohmylms_get_membership' ) ) {
                continue;
            }

            $membership = ohmylms_get_membership( $membership_post->ID );
            if ( ! $membership ) {
                continue;
            }

            // Skip one-time memberships
            if ( method_exists( $membership, 'get_subscription_period' ) ) {
                $period = $membership->get_subscription_period();
                if ( 'one_time' === $period ) {
                    $skipped++;
                    continue;
                }
            }

            // Check if plan already exists
            $existing_plan_id = get_post_meta( $membership_post->ID, '_razorpay_plan_id', true );
            if ( ! empty( $existing_plan_id ) ) {
                $skipped++;
                continue;
            }

            // Try to create the plan
            $this->sync_membership_plan_to_razorpay( $membership, null, true );

            // Verify creation
            $new_plan_id = get_post_meta( $membership_post->ID, '_razorpay_plan_id', true );
            if ( ! empty( $new_plan_id ) ) {
                $created++;
            } else {
                $errors[] = sprintf(
                    __( 'Failed to create plan for: %s (ID: %d)', 'ohmylms' ),
                    $membership->get_name(),
                    $membership_post->ID
                );
            }
        }

        // Show results
        $message = sprintf(
            __( 'Razorpay Plan Creation Complete: %d created, %d skipped.', 'ohmylms' ),
            $created,
            $skipped
        );

        if ( ! empty( $errors ) ) {
            $message .= '<br><br><strong>' . __( 'Errors:', 'ohmylms' ) . '</strong><br>' . implode( '<br>', $errors );
        }

        wp_die( $message, __( 'Razorpay Plan Creation', 'ohmylms' ), array( 'back_link' => true ) );
    }
}
