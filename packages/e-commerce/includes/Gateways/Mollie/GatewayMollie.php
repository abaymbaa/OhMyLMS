<?php
/**
 * Mollie Payment Gateway for OhMyLMS.
 *
 * Provides a payment gateway for processing payments via Mollie,
 * including support for various payment methods, Mollie Components for cards,
 * subscriptions, and refunds.
 *
 * @package     CreatorLMS/Gateways/Mollie
 * @author      WPFunnels Team
 * @since       1.0.0
 * @version     1.0.1
 */


use CodeRex\Ecommerce\Abstracts\PaymentGateway;
use CodeRex\Ecommerce\Gateways\Mollie\MollieAPI;
use CodeRex\Ecommerce\Gateways\Mollie\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * GatewayMollie Class.
 */
class GatewayMollie extends PaymentGateway {

	/**
	 * Mollie API Key.
	 * @var string
	 */
	public $api_key;

	/**
	 * Test mode state.
	 * @var bool
	 */
	public $testmode;

	/**
	 * Mollie Profile ID for Components.
	 * @var string
	 */
	public $profile_id;

	/**
	 * Constructor for the gateway.
	 * Initializes the gateway, sets properties, loads settings, and hooks actions.
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->id                 = 'mollie';
		$this->title        = $this->get_option( 'title', __( 'Mollie', 'creator-lms' ) );
		$this->description  = $this->get_option( 'description', __( 'Pay via Mollie using various payment methods.', 'creator-lms' ) );
		$this->testmode     = 'yes' === $this->get_option( 'testmode', 'no' );
		$this->api_key      = $this->testmode ? $this->get_option( 'test_api_key' ) : $this->get_option( 'live_api_key' );
		$this->profile_id   = $this->testmode ? $this->get_option( 'test_profile_id' ) : $this->get_option( 'live_profile_id' );
		$settings = get_option( 'creatorlms_mollie_settings', [] );
		$this->has_fields         = true;
		$this->subscription_support = true;
		$this->enabled            = isset( $settings['enabled'] ) && 'yes' === $settings['enabled'] ? 'yes' : 'no';
		$this->order_button_text    = __( 'Place payment', 'creator-lms' );
		// Mollie needs a full billing address for several payment methods (Pay Later, Klarna, ...).
		$this->required_checkout_fields = array( 'city', 'state', 'postcode', 'country' );

		// Load the settings.
		$this->init_form_fields();
		$this->init_settings();

		// Define user set variables.


		MollieAPI::set_api_key( $this->api_key );

		// Actions.
		add_action( 'rest_api_init', [ $this, 'register_webhook_endpoint' ] );
		add_action( 'admin_post_creator_lms_mollie_refund_order', [ $this, 'handle_admin_refund_action' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_checkout_scripts' ] );
	}

	public function set_keys() {
		$settings = get_option( 'creatorlms_mollie_settings', [] );
		$this->testmode     = isset($settings['testmode']) && 'yes' === $settings['testmode'];
		$this->api_key      = $this->testmode ? $settings['test_api_key'] : $settings['live_api_key'];
		$this->profile_id   = $this->testmode ? $settings['test_profile_id'] : $settings['live_profile_id'];
	}

	/**
	 * Initialize Gateway Settings Form Fields.
	 * Defines the settings fields shown in the admin area.
	 * @since 1.0.0
	 */
	public function init_form_fields() {
		$this->form_fields = [
			'enabled'         => [
				'title'   => __( 'Enable/Disable', 'creator-lms' ),
				'type'    => 'checkbox',
				'label'   => __( 'Enable Mollie Payment Gateway', 'creator-lms' ),
				'default' => 'no',
			],
			'title'           => [
				'title'       => __( 'Title', 'creator-lms' ),
				'type'        => 'text',
				'desc_tip'    => true,
				'description' => __( 'This controls the title which the user sees during checkout.', 'creator-lms' ),
				'default'     => __( 'Mollie', 'creator-lms' ),
			],
			'description'     => [
				'title'       => __( 'Description', 'creator-lms' ),
				'type'        => 'textarea',
				'desc_tip'    => true,
				'description' => __( 'This controls the description which the user sees during checkout.', 'creator-lms' ),
				'default'     => __( 'Pay via Mollie using various payment methods.', 'creator-lms' ),
			],
			'testmode'        => [
				'title'       => __( 'Test mode', 'creator-lms' ),
				'type'        => 'checkbox',
				'label'       => __( 'Enable Mollie Test Mode', 'creator-lms' ),
				'default'     => 'yes',
				'desc_tip'    => true,
				'description' => __( 'Use Mollie in test mode. Requires Test API Key and Test Profile ID.', 'creator-lms' ),
			],
			'test_api_key'    => [
				'title'       => __( 'Test API Key', 'creator-lms' ),
				'type'        => 'text',
				'desc_tip'    => true,
				'description' => __( 'Get your Test API key from your Mollie dashboard.', 'creator-lms' ),
				'default'     => '',
			],
			'test_profile_id' => [
				'title'       => __( 'Test Profile ID', 'creator-lms' ),
				'type'        => 'text',
				'desc_tip'    => true,
				'description' => __( 'Enter your Mollie Test Profile ID (starts with pfl_). Required for Mollie Components in test mode.', 'creator-lms' ),
				'default'     => '',
			],
			'live_api_key'    => [
				'title'       => __( 'Live API Key', 'creator-lms' ),
				'type'        => 'text',
				'desc_tip'    => true,
				'description' => __( 'Get your Live API key from your Mollie dashboard.', 'creator-lms' ),
				'default'     => '',
			],
			'live_profile_id' => [
				'title'       => __( 'Lives Profile ID', 'creator-lms' ),
				'type'        => 'text',
				'desc_tip'    => true,
				'description' => __( 'Enter your Mollie Live Profile ID (starts with pfl_). Required for Mollie Components in live mode.', 'creator-lms' ),
				'default'     => '',
			],
			/* Conceptual: Button or mechanism to clear payment method cache
            'clear_cache_button' => array(
                'title' => __( 'Clear Payment Method Cache', 'creator-lms' ),
                'type'  => 'button', // This type would need custom rendering in the settings framework
                'label' => __( 'Clear Cache', 'creator-lms' ),
                'description' => __( 'Click this button to clear the cached list of payment methods from Mollie. This can be useful if you have recently updated your Mollie account settings and the changes are not reflecting.', 'creator-lms' ),
                // 'url'   => wp_nonce_url( add_query_arg( 'mollie_action', 'clear_cache' ), 'mollie_clear_cache_nonce', '_mollie_nonce' ),
            ),
            */
		];

		$current_test_mode = 'yes' === $this->get_option( 'testmode', 'no' );
		$api_key_to_check  = $this->get_option( $current_test_mode ? 'test_api_key' : 'live_api_key' );

		if ( empty( $api_key_to_check ) ) {
			$this->form_fields['api_key_notice'] = [
				'title'       => __( 'API Key Required', 'creator-lms' ),
				'type'        => 'title',
				'description' => __( 'Please enter your Mollie API key (Test or Live) above and save settings to load available payment methods.', 'creator-lms' ),
			];
			return;
		}

		MollieAPI::set_api_key( $api_key_to_check );
		$transient_name = 'mollie_methods_cache_' . ( $current_test_mode ? 'test' : 'live' );
		$methods        = get_transient( $transient_name );

		if ( false === $methods ) {
			$fetched_methods = MollieAPI::get_all_payment_methods( [ 'include' => 'issuers' ] );
			if ( ! is_wp_error( $fetched_methods ) && ! empty( $fetched_methods ) ) {
				$methods = $fetched_methods;
				set_transient( $transient_name, $methods, HOUR_IN_SECONDS );
			} elseif ( is_wp_error( $fetched_methods ) ) {
				$this->form_fields['api_error_notice'] = [
					'title'       => __( 'API Error', 'creator-lms' ),
					'type'        => 'title',
					'description' => sprintf(__( 'Could not fetch payment methods from Mollie. Error: %s', 'creator-lms' ), esc_html($fetched_methods->get_error_message())),
				];
				if ( defined( 'WP_DEBUG_LOG' ) && WP_DEBUG_LOG ) {
				}
				return;
			} else {
				$methods = [];
				$this->form_fields['no_methods_notice'] = [
					'title'       => __( 'No Payment Methods Available', 'creator-lms' ),
					'type'        => 'title',
					'description' => __( 'No payment methods were returned by Mollie for the current mode (Test/Live). This might be due to your Mollie account configuration, API key restrictions, or no payment methods being activated in your Mollie dashboard.', 'creator-lms' ),
				];
			}
		}

		if ( ! empty( $methods ) ) {
			$this->form_fields['payment_methods_title'] = [
				'title'       => __( 'Available Payment Methods', 'creator-lms' ),
				'type'        => 'title',
				'description' => __( 'Enable or disable specific payment methods available through your Mollie account. Methods are cached for up to 1 hour.', 'creator-lms' ),
			];
			foreach ( $methods as $method_obj ) {
				if ( ! is_object( $method_obj ) || ! isset( $method_obj['id'], $method_obj['description'] ) ) {
					continue;
				}
				$method_id_key = 'method_' . esc_attr( $method_obj['id'] ) . '_enabled';
				$this->form_fields[ $method_id_key ] = [
					'title'    => esc_html( $method_obj['description'] ),
					'type'     => 'checkbox',
					'label'    => sprintf( __( 'Enable %s', 'creator-lms' ), esc_html( $method_obj['description'] ) ),
					'default'  => 'yes',
					'desc_tip' => sprintf( __( 'Allow customers to pay using %s.', 'creator-lms' ), esc_html( $method_obj['description'] ) ),
				];
			}
		}
	}

	/**
	 * Get gateway settings.
	 *
	 * @return array Gateway settings array.
	 */
	public function get_settings() {
		$fields = array(
			array(
				'title' => __( 'Title', 'creator-lms' ),
				'short_description' => __( 'Enter the title that will appear for Mollie payment during checkout.', 'creator-lms' ),
				'input_type' => 'text',
				'default_value' => __( 'Mollie', 'creator-lms' ),
				'option_name' => 'title',
				'value' => $this->title
			),
			array(
				'title' => __( 'Description', 'creator-lms' ),
				'short_description' => __( 'This controls the description which the user sees during checkout.', 'creator-lms' ),
				'input_type' => 'textarea',
				'default_value' => __( 'Pay via Mollie using various payment methods.', 'creator-lms' ),
				'option_name' => 'description',
				'value' => $this->description
			),
			array(
				'title' => __( 'Test Mode', 'creator-lms' ),
				'short_description' => __( 'Use Mollie in test mode. Requires Test API Key and Test Profile ID.', 'creator-lms' ),
				'input_type' => 'switch',
				'default_value' => $this->get_option( 'testmode', 'no' ),
				'option_name' => 'testmode',
				'value' => $this->testmode ? 'yes' : 'no',
				'conditional_logic' => array(
					'type' => 'control',
					'controls' => array( 'test_api_key', 'test_profile_id', 'live_api_key', 'live_profile_id' )
				)
			),
			array(
				'title' => __( 'Test API Key', 'creator-lms' ),
				'short_description' => __( 'Get your Test API key from your Mollie dashboard.', 'creator-lms' ) . ' <a href="https://my.mollie.com/dashboard/org_12908948/developers/api-keys" target="_blank">' . __( 'How to find your API keys', 'creator-lms' ) . '</a>',
				'input_type' => 'text',
				'default_value' => '',
				'value' => $this->get_option( 'test_api_key', '' ),
				'option_name' => 'test_api_key',
				'conditional_logic' => array(
					'type' => 'dependent',
					'depends_on' => 'testmode',
					'show_when' => 'yes'
				)
			),
			array(
				'title' => __( 'Test Profile ID', 'creator-lms' ),
				'short_description' => __( 'Enter your Mollie Test Profile ID (starts with pfl_). Required for Mollie Components in test mode.', 'creator-lms' ),
				'input_type' => 'text',
				'default_value' => '',
				'value' => $this->get_option( 'test_profile_id', '' ),
				'option_name' => 'test_profile_id',
				'conditional_logic' => array(
					'type' => 'dependent',
					'depends_on' => 'testmode',
					'show_when' => 'yes'
				)
			),
			array(
				'title' => __( 'Live API Key', 'creator-lms' ),
				'short_description' => __( 'Get your Live API key from your Mollie dashboard.', 'creator-lms' ) . ' <a href="https://docs.mollie.com/overview/authentication" target="_blank">' . __( 'How to find your API keys', 'creator-lms' ) . '</a>',
				'input_type' => 'text',
				'default_value' => '',
				'option_name' => 'live_api_key',
				'value' => $this->get_option( 'live_api_key', '' ),
				'conditional_logic' => array(
					'type' => 'dependent',
					'depends_on' => 'testmode',
					'show_when' => 'no'
				)
			),
			array(
				'title' => __( 'Live Profile ID', 'creator-lms' ),
				'short_description' => __( 'Enter your Mollie Live Profile ID (starts with pfl_). Required for Mollie Components in live mode.', 'creator-lms' ),
				'input_type' => 'text',
				'default_value' => '',
				'option_name' => 'live_profile_id',
				'value' => $this->get_option( 'live_profile_id', '' ),
				'conditional_logic' => array(
					'type' => 'dependent',
					'depends_on' => 'testmode',
					'show_when' => 'no'
				)
			)
		);

		// Add payment methods section
		$current_test_mode = 'yes' === $this->get_option( 'testmode', 'no' );
		$api_key_to_check = $this->get_option( $current_test_mode ? 'test_api_key' : 'live_api_key' );

		if ( ! empty( $api_key_to_check ) ) {
			MollieAPI::set_api_key( $api_key_to_check );
			$transient_name = 'mollie_methods_cache_' . ( $current_test_mode ? 'test' : 'live' );
			$methods = get_transient( $transient_name );

			if ( false === $methods ) {
				$fetched_methods = MollieAPI::get_all_payment_methods( [ 'include' => 'issuers' ] );
				if ( ! is_wp_error( $fetched_methods ) && ! empty( $fetched_methods ) ) {
					$methods = $fetched_methods;
					set_transient( $transient_name, $methods, HOUR_IN_SECONDS );
				}
			}

			if ( ! empty( $methods ) && is_array( $methods ) ) {
				$fields[] = array(
					'title' => __( 'Available Payment Methods', 'creator-lms' ),
					'short_description' => __( 'Enable or disable specific payment methods available through your Mollie account. Methods are cached for up to 1 hour.', 'creator-lms' ),
					'input_type' => 'section_header',
					'option_name' => 'payment_methods_section'
				);

				foreach ( $methods as $method_obj ) {
					if ( ! is_array( $method_obj ) || ! isset( $method_obj['id'], $method_obj['description'] ) ) {
						continue;
					}
					$method_id_key = 'method_' . esc_attr( $method_obj['id'] ) . '_enabled';
					$fields[] = array(
						'title' => esc_html( $method_obj['description'] ),
						'short_description' => sprintf( __( 'Allow customers to pay using %s.', 'creator-lms' ), esc_html( $method_obj['description'] ) ),
						'input_type' => 'checkbox',
						'default_value' => 'yes',
						'option_name' => $method_id_key,
						'value' => $this->get_option( $method_id_key, 'yes' )
					);
				}
			}
		}

		$gateway_settings = array(
			'id' => 'mollie',
			'title' => __( 'Mollie', 'creator-lms' ),
			'description' => __( 'Mollie Payment Gateway', 'creator-lms' ),
			'icon' => '<svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="43" height="42" rx="21" fill="#0A0B09"/><path d="M21.5 8C14.044 8 8 14.044 8 21.5S14.044 35 21.5 35 35 28.956 35 21.5 28.956 8 21.5 8zm0 24.375c-5.863 0-10.625-4.762-10.625-10.625S15.637 10.625 21.5 10.625 32.125 15.387 32.125 21.25 27.363 32.375 21.5 32.375zm-3.125-15.469c-1.378 0-2.5 1.122-2.5 2.5v5.469a2.5 2.5 0 005 0v-5.469c0-1.378-1.122-2.5-2.5-2.5z" fill="#fff"/></svg>',
			'has_config' => true,
			'subscription_support' => true,
			'settings_fields' => $fields,
			'enabled' => $this->enabled,
		);

		return $gateway_settings;
	}

	/**
	 * Output the payment fields on the checkout page.
	 * @since 1.0.0
	 */
	public function payment_fields() {
		if ( ! empty( $this->description ) ) {
			echo wpautop( wp_kses_post( wptexturize( $this->description ) ) );
		}
		$this->set_keys();
		$profile_id_to_use = $this->testmode ? $this->get_option('test_profile_id') : $this->get_option('live_profile_id');

		$transient_name = 'mollie_methods_cache_frontend_' . ( $this->testmode ? 'test' : 'live' );
		$methods = get_transient( $transient_name );
		if ( false === $methods ) {
			$current_api_key = $this->api_key;
			MollieAPI::set_api_key($current_api_key);
			$fetched_methods = MollieAPI::get_all_payment_methods( [ 'include' => 'issuers' ] );
			if ( ! is_wp_error( $fetched_methods ) && ! empty( $fetched_methods ) ) {
				$methods = $fetched_methods;
				set_transient( $transient_name, $methods, HOUR_IN_SECONDS );
			} else {
				$methods = [];
				echo '<p>' . esc_html__( 'Could not load payment methods at this time. Please try again or contact support.', 'creator-lms' ) . '</p>';
				return;
			}
		}

		if ( empty( $methods ) ) {
			echo '<p>' . esc_html__( 'No payment methods are currently available.', 'creator-lms' ) . '</p>';
			return;
		}

		// Display Mollie payment methods in nested radio list
		echo '<div id="mollie-payment-methods-container" class="mollie-payment-methods-container">';
		$first_method = true;

		foreach ( $methods as $method_obj ) {
			$is_enabled = 'yes' === $this->get_option( 'method_' . esc_attr($method_obj['id']) . '_enabled', 'yes' );
			// Filter out disabled methods from settings
			if ( ! $is_enabled ) {
				continue;
			}
			
			$method_id_attr = 'mollie_method_' . esc_attr( $method_obj['id'] );
			$method_label   = esc_html( $method_obj['description'] );
			?>
			<div class="mollie-payment-method-item">
				<input type="radio" name="mollie_payment_method" value="<?php echo esc_attr( $method_obj['id'] ); ?>" id="<?php echo esc_attr( $method_id_attr ); ?>" class="mollie-method-radio" <?php checked( $first_method, true ); ?> />
				<label for="<?php echo esc_attr( $method_id_attr ); ?>" class="mollie-method-label">
					<?php if ( isset( $method_obj->image, $method_obj->image->svg ) ) : ?>
						<img src="<?php echo esc_url( $method_obj->image->svg ); ?>" alt="<?php echo esc_attr( $method_label ); ?>" class="mollie-method-icon" />
					<?php endif; ?>
					<span class="mollie-method-name"><?php echo $method_label; ?></span>
				</label>

				<?php
				// Credit card payment is handled on Mollie's portal after redirect
				// No need to show card input fields on checkout page
				if ( ! empty( $method_obj['issuers'] ) && is_array( $method_obj['issuers'] ) ) : ?>
					<div class="mollie-issuer-dropdown" style="display:none;" data-method-id="<?php echo esc_attr( $method_obj['id'] ); ?>">
						<label for="mollie_issuer_<?php echo esc_attr( $method_obj['id'] ); ?>"><?php esc_html_e( 'Select your bank:', 'creator-lms' ); ?></label>
						<select name="mollie_issuer_<?php echo esc_attr( $method_obj['id'] ); ?>" id="mollie_issuer_<?php echo esc_attr( $method_obj['id'] ); ?>" class="mollie-issuer-select">
							<?php foreach ( $method_obj['issuers'] as $issuer ) : ?>
								<?php if ( is_array( $issuer ) && isset( $issuer['id'], $issuer['name']) ) : ?>
									<option value="<?php echo esc_attr( $issuer['id'] ); ?>"><?php echo esc_html( $issuer['name'] ); ?></option>
								<?php endif; ?>
							<?php endforeach; ?>
						</select>
					</div>
				<?php endif; ?>
			</div>
			<?php
			$first_method = false;
		}
		echo '</div>';
	}

	/**
	 * Get line items for Mollie payment (required for Klarna and other methods).
	 * @since 1.0.1
	 * @param \CodeRex\Ecommerce\Data\Order $order Order object.
	 * @return array Line items array for Mollie.
	 */
	private function get_order_line_items( $order ) {
		$items      = $order->get_items();
		$currency   = strtoupper( $order->get_currency() );
		$line_items = array();

		if ( empty( $items ) ) {
			return $line_items;
		}

		foreach ( $items as $item ) {
			$item_total = $item->get_total();
			$quantity   = $item->get_quantity();
			$item_name  = $item->get_name();
			
			$line_items[] = array(
				'type'        => 'digital', // Can be 'physical', 'digital', 'shipping_fee', 'discount', 'gift_card', etc.
				'description' => ! empty( $item_name ) ? $item_name : __( 'Course Item', 'creator-lms' ),
				'quantity'    => $quantity,
				'unitPrice'   => array(
					'currency' => $currency,
					'value'    => number_format( $item_total / $quantity, 2, '.', '' ),
				),
				'totalAmount' => array(
					'currency' => $currency,
					'value'    => number_format( $item_total, 2, '.', '' ),
				),
				'vatRate'     => '0.00', // Add tax rate if applicable
				'vatAmount'   => array(
					'currency' => $currency,
					'value'    => '0.00', // Add tax amount if applicable
				),
			);
		}

		// Add discount as a line item if applicable
		$discount = $order->get_cart_discount();
		if ( $discount > 0 ) {
			$line_items[] = array(
				'type'        => 'discount',
				'description' => __( 'Discount', 'creator-lms' ),
				'quantity'    => 1,
				'unitPrice'   => array(
					'currency' => $currency,
					'value'    => '-' . number_format( $discount, 2, '.', '' ),
				),
				'totalAmount' => array(
					'currency' => $currency,
					'value'    => '-' . number_format( $discount, 2, '.', '' ),
				),
				'vatRate'     => '0.00',
				'vatAmount'   => array(
					'currency' => $currency,
					'value'    => '0.00',
				),
			);
		}

		// Add tax as a line item if applicable
		$tax_amount = $order->get_tax_amount();
		if ( $tax_amount > 0 ) {
			$tax_rate = $order->get_tax_rate();
			$line_items[] = array(
				'type'        => 'surcharge',
				'description' => $tax_rate > 0 ? sprintf( __( 'Tax (%s%%)', 'creator-lms' ), $tax_rate ) : __( 'Tax', 'creator-lms' ),
				'quantity'    => 1,
				'unitPrice'   => array(
					'currency' => $currency,
					'value'    => number_format( $tax_amount, 2, '.', '' ),
				),
				'totalAmount' => array(
					'currency' => $currency,
					'value'    => number_format( $tax_amount, 2, '.', '' ),
				),
				'vatRate'     => '0.00',
				'vatAmount'   => array(
					'currency' => $currency,
					'value'    => '0.00',
				),
			);
		}

		return $line_items;
	}

	/**
	 * Enqueue scripts for checkout.
	 * @since 1.0.0
	 */
	public function enqueue_checkout_scripts() {
		if ( ! $this->is_available() ) {
			return;
		}
		$script_version = defined('CREATOR_LMS_VERSION') ? CREATOR_LMS_VERSION : '1.0.1';

		wp_enqueue_script('mollie-js-sdk', 'https://js.mollie.com/v1/mollie.js', [], null, true);
		wp_enqueue_script('creator-lms-mollie-checkout',  CREATOR_LMS_URL . '/packages/e-commerce/assets/js/mollie-checkout.js', ['jquery', 'mollie-js-sdk'], $script_version, true);

		// $profile_id = $this->testmode ? $this->get_option('test_profile_id') : $this->get_option('live_profile_id');
		$card_method_enabled = 'yes' === $this->get_option('method_creditcard_enabled', 'yes');

		if (empty($profile_id) && $card_method_enabled && current_user_can('manage_options')) {
			 add_action('wp_footer', function() { // For frontend warning
				echo "<script>console.warn('" . esc_js(__('Mollie Profile ID is not set. Credit Card payments via Mollie Components may not work correctly.', 'creator-lms')) . "');</script>";
			});
        }

		wp_localize_script(
			'creator-lms-mollie-checkout',
			'omlms_mollie_params',
			[
				'profile_id'             => $this->profile_id,
				'locale'                 => str_replace( '_', '-', get_locale() ),
				'ajax_url'               => admin_url( 'admin-ajax.php' ),
				'testmode'               => (bool) $this->testmode,
				'checkout_form_selector' => apply_filters('creator_lms_mollie_checkout_form_selector', 'form.checkout'),
				'mollie_checkout_nonce'  => wp_create_nonce( 'mollie_checkout_nonce' ), // General nonce for JS actions if needed
				'error_messages' => [
					'unable_to_create_token' => __('Could not create payment token. Please try again or contact support.', 'creator-lms'),
					'mollie_error'           => __('Mollie payment error:', 'creator-lms'),
					'generic_error'          => __('An unexpected error occurred. Please try again.', 'creator-lms'),
				]
			]
		);
	}

	/**
	 * Process the payment and return the result.
	 * @since 1.0.0
	 * @param int $order_id Order ID.
	 * @return array Result of payment processing.
	 */
	public function process_payment( $order_id, $is_subscription = false ) {
		$order = ecommerce_get_order( $order_id );
		if ( ! $order ) {
			return ['result' => 'failure', 'message' => __( 'Order not found.', 'creator-lms' ), 'redirect' => false];
		}
		$this->set_keys();
		MollieAPI::set_api_key( $this->api_key );

		if ( empty( $this->api_key ) ) {
			$order->add_order_note( __( 'Mollie API key not configured. Payment cannot proceed.', 'creator-lms' ) );
			return ['result' => 'failure', 'message' => __( 'Payment gateway is not configured. Please contact the site administrator.', 'creator-lms' )];
		}

		$redirect_url = $this->get_return_url( $order );
		$webhook_url  = get_rest_url( null, 'cx-ecommerce/v1/mollie-webhook/' );
		// Input sanitization
		$selected_method_id = isset( $_POST['mollie_payment_method'] ) ? sanitize_text_field( wp_unslash( $_POST['mollie_payment_method'] ) ) : '';

		if ( empty( $selected_method_id ) ) {
			$order->add_order_note( __( 'No Mollie payment method selected by customer.', 'creator-lms' ) );
			return ['result' => 'failure', 'message' => __( 'Please select a payment method.', 'creator-lms' )];
		}

		// Prepare billing address for Mollie (required for some payment methods)
		$billing_address = [
			'streetAndNumber' => $order->get_address() ?? '',
			'familyName'      => $order->get_student_name() ?? '',
			'city'            => $order->get_city() ?? '',
			'region'          => $order->get_state() ?? '',
			'postalCode'      => $order->get_postcode() ?? '',
			'country'         => $order->get_country() ?? '',
			'email'           => $order->get_email() ?? '',
		];

		// Remove empty values
		$billing_address = array_filter($billing_address);

		$payment_data = [
			'amount'      => ['value' => number_format( $order->get_total(), 2, '.', '' ), 'currency' => $order->get_currency()],
			'description' => sprintf( __( 'Order %s', 'creator-lms' ), $order->get_order_number() ),
			'redirectUrl' => $redirect_url,
			'webhookUrl'  => $webhook_url,
			'method'      => $selected_method_id,
			'metadata'    => ['order_id' => $order_id, 'order_number' => $order->get_order_number(), 'wordpress_site' => get_bloginfo('url')],
		];

		// Add billing address if available (required for some payment methods like Pay Later)
		if (!empty($billing_address)) {
			$payment_data['billingAddress'] = $billing_address;
		}

		// Add order lines (required for Klarna and some other payment methods)
		$order_lines = $this->get_order_line_items( $order );
		if ( ! empty( $order_lines ) ) {
			$payment_data['lines'] = $order_lines;
		}

		// Add customer email and name if available
		$customer_email = $order->get_email();
		$customer_name = $order->get_student_name();
		if (!empty($customer_email) && is_email($customer_email)) {
			$payment_data['billingEmail'] = sanitize_email($customer_email);
		}
		if (!empty($customer_name)) {
			$payment_data['billingAddress']['givenName'] = sanitize_text_field($customer_name);
		}

        if (isset($_POST['mollie_payment_token'])) {
            $payment_data['cardToken'] = sanitize_text_field(wp_unslash($_POST['mollie_payment_token']));
            $payment_data['method'] = 'creditcard';
        } else {
            $issuer_input_name = 'mollie_issuer_' . $selected_method_id; // Already sanitized $selected_method_id
            if ( isset( $_POST[ $issuer_input_name ] ) ) {
                $selected_issuer_id = sanitize_text_field( wp_unslash( $_POST[ $issuer_input_name ] ) );
                if ( ! empty( $selected_issuer_id ) ) {
                    $payment_data['issuer'] = $selected_issuer_id;
                }
            }
        }
		$order->update_meta_data( '_mollie_selected_method', sanitize_text_field($selected_method_id) );
		$order->update_meta_data( '_is_mollie_payment_token', isset($payment_data['cardToken']) ? 'yes' : 'no' );
		$order->update_meta_data( '_mollie_payment_token', isset($_POST['mollie_payment_token']) ? sanitize_text_field(wp_unslash($_POST['mollie_payment_token'])) : '' );
		$response = MollieAPI::create_payment( $payment_data );

		if ( is_wp_error( $response ) ) {
			$error_message = $response->get_error_message();
			$order->add_order_note( sprintf( __( 'Mollie payment creation failed. Error: %s', 'creator-lms' ), esc_html($error_message) ) );
			return ['result' => 'failure', 'message' => sprintf( __( 'Payment creation failed: %s', 'creator-lms' ), esc_html($error_message) ), 'redirect' => false];
		}
		if ( ! $response || ! isset( $response['id'] ) || ! isset( $response['_links']['checkout']['href'] ) ) {
			$log_response = is_array($response) || is_object($response) ? print_r($response, true) : strval($response);
			$order->add_order_note( sprintf( __( 'Mollie payment creation failed. Invalid response: %s', 'creator-lms' ), esc_html($log_response) ) );
			return ['result' => 'failure', 'message' => __( 'Payment creation failed due to invalid response from provider.', 'creator-lms' ), 'redirect' => false];
		}
		$order->update_meta_data( '_mollie_payment_id', sanitize_text_field($response['id']) );
		$order->update_meta_data( '_transaction_id', sanitize_text_field($response['id']) );
		$order->update_meta_data( '_mollie_payment_checkout_url', esc_url_raw($response['_links']['checkout']['href']) );
		$order->update_meta_data( '_mollie_payment_method_selected', sanitize_text_field($selected_method_id) );
		if ( isset( $payment_data['issuer'] ) ) {
			$order->update_meta_data( '_mollie_issuer_selected_id', sanitize_text_field($payment_data['issuer']) );
		}
		$order->add_order_note( sprintf( __( 'Mollie payment initiated. ID: %s.', 'creator-lms' ), esc_html($response['id']) ) );
		$order->save();
		return ['result' => 'success', 'redirect' => esc_url_raw($response['_links']['checkout']['href'])];
	}

	/**
	 * Process a subscription payment (first payment).
	 * @since 1.0.0
	 * @param int $order_id Order ID for the initial subscription order.
	 * @return array Result of payment processing.
	 */
	public function process_subscription_payment( $order_id ) {
		$order = ecommerce_get_order( $order_id );
		if ( ! $order ) {
			return ['result' => 'failure', 'message' => __( 'Order not found for subscription.', 'creator-lms' ), 'redirect' => false];
		}
		$this->testmode = 'yes' === $this->get_option( 'testmode', 'no' );
		$this->api_key = $this->testmode ? $this->get_option( 'test_api_key' ) : $this->get_option( 'live_api_key' );
		MollieAPI::set_api_key( $this->api_key );

		if(empty($this->api_key)){
			$order->add_order_note(__( 'Mollie API key not configured for subscription.', 'creator-lms' ));
			return ['result' => 'failure', 'message' => __( 'Gateway not configured for subscription.', 'creator-lms' )];
		}
		$user_id = $order->get_customer_id();
		if ( ! $user_id && is_user_logged_in() ) { $user_id = get_current_user_id(); }

		$mollie_customer_id = '';
		if ( $user_id ) { // Mollie customer ID must be linked to a WP user.
			$mollie_customer_id = get_user_meta( $user_id, '_mollie_customer_id', true );
			if ( !empty($mollie_customer_id) && !is_string($mollie_customer_id) ) { // Basic sanity check
				$mollie_customer_id = '';
			}
		}

		if ( empty( $mollie_customer_id ) && $user_id ) {
			$customer_name = $order->get_student_name();
			$customer_email = $order->get_email();
			if(empty($customer_name) || !is_email($customer_email)) {
				$order->add_order_note(__( 'Cannot create Mollie customer: missing name or valid email.', 'creator-lms' ));
				return ['result' => 'failure', 'message' => __( 'Valid customer name and email are required.', 'creator-lms' )];
			}
			$customer_data = ['name' => sanitize_text_field($customer_name), 'email' => sanitize_email($customer_email)];
			$mollie_customer = MollieAPI::create_customer( $customer_data );

			if ( is_wp_error( $mollie_customer ) || empty( $mollie_customer['id'] ) ) {
				$error_message = is_wp_error( $mollie_customer ) ? $mollie_customer->get_error_message() : __('Unknown error during customer creation', 'creator-lms');
				$order->add_order_note(sprintf(__( 'Failed to create Mollie customer. Error: %s', 'creator-lms' ), esc_html($error_message)));
				return ['result' => 'failure', 'message' => sprintf(__( 'Failed to create customer profile: %s', 'creator-lms' ), esc_html($error_message))];
			}
			$mollie_customer_id = sanitize_text_field($mollie_customer['id']);
			update_user_meta( $user_id, '_mollie_customer_id', $mollie_customer_id );
		} elseif ( empty( $mollie_customer_id ) && ! $user_id ) { // Should not happen if LMS requires login for subscriptions
			$order->add_order_note(__( 'User account required for subscriptions with Mollie.', 'creator-lms' ));
			return ['result' => 'failure', 'message' => __( 'A customer account is required for subscriptions.', 'creator-lms' )];
		}

		$redirect_url = $this->get_return_url( $order );
		$webhook_url  = get_rest_url( null, 'cx-ecommerce/v1/mollie-webhook/' );
		$selected_method_id = isset( $_POST['mollie_payment_method'] ) ? sanitize_text_field( wp_unslash( $_POST['mollie_payment_method'] ) ) : '';
        if ( empty( $selected_method_id ) ) {
			return [ 'result' => 'failure', 'message' => __( 'Please select a payment method for your subscription.', 'creator-lms' ) ];
		}

		// Prepare billing address for Mollie (required for some payment methods)
		$billing_address = [
			'streetAndNumber' => $order->get_address() ?? '',
			'familyName'      => $order->get_student_name() ?? '',
			'city'            => $order->get_city() ?? '',
			'region'          => $order->get_state() ?? '',
			'postalCode'      => $order->get_postcode() ?? '',
			'country'         => $order->get_country() ?? '',
			'email'           => $order->get_email() ?? '',
		];

		// Remove empty values
		$billing_address = array_filter($billing_address);

		$payment_data = [
			'amount'       => ['value' => number_format( $order->get_total(), 2, '.', '' ), 'currency' => $order->get_currency()],
			'description'  => sprintf( __( 'Subscription Order %s - First Payment', 'creator-lms' ), $order->get_order_number() ),
			'redirectUrl'  => $redirect_url, 'webhookUrl'   => $webhook_url, 'method' => $selected_method_id,
			'customerId'   => $mollie_customer_id, 'sequenceType' => 'first',
			'metadata'     => ['order_id' => $order_id, 'order_number' => $order->get_order_number(), 'is_subscription_first_payment' => true, 'wordpress_user_id' => $user_id, 'wordpress_site' => get_bloginfo('url')],
		];

		// Add billing address if available
		if (!empty($billing_address)) {
			$payment_data['billingAddress'] = $billing_address;
		}

		// Add order lines (required for Klarna and some other payment methods)
		$order_lines = $this->get_order_line_items( $order );
		if ( ! empty( $order_lines ) ) {
			$payment_data['lines'] = $order_lines;
		}

		// Add customer email if available
		$customer_email = $order->get_email();
		$customer_name = $order->get_student_name();
		if (!empty($customer_email) && is_email($customer_email)) {
			$payment_data['billingEmail'] = sanitize_email($customer_email);
		}
		if (!empty($customer_name)) {
			$payment_data['billingAddress']['givenName'] = sanitize_text_field($customer_name);
		}
        if (isset($_POST['mollie_payment_token'])) {
            $payment_data['cardToken'] = sanitize_text_field(wp_unslash($_POST['mollie_payment_token']));
            $payment_data['method'] = 'creditcard';
        } else {
            $issuer_input_name = 'mollie_issuer_' . $selected_method_id; // $selected_method_id is sanitized
            if ( isset( $_POST[ $issuer_input_name ] ) ) {
                $selected_issuer_id = sanitize_text_field( wp_unslash( $_POST[ $issuer_input_name ] ) );
                if ( ! empty( $selected_issuer_id ) ) { $payment_data['issuer'] = $selected_issuer_id; }
            }
        }
		$response = MollieAPI::create_payment( $payment_data );

		if ( is_wp_error( $response ) ) {
			$error_message = $response->get_error_message();
			$order->add_order_note(sprintf(__( 'Mollie first payment failed. Error: %s', 'creator-lms' ), esc_html($error_message)));
			return ['result' => 'failure', 'message' => sprintf(__( 'Subscription payment failed: %s', 'creator-lms' ), esc_html($error_message)), 'redirect' => false];
		}
		if ( ! $response || ! isset( $response['id'] ) || ! isset( $response['_links']['checkout']['href'] ) ) {
			$log_response = is_array($response) || is_object($response) ? print_r($response, true) : strval($response);
			$order->add_order_note(sprintf(__( 'Mollie first payment failed. Invalid response: %s', 'creator-lms' ), esc_html($log_response)));
			return ['result' => 'failure', 'message' => __( 'Subscription payment failed due to invalid provider response.', 'creator-lms' ), 'redirect' => false];
		}
		$order->update_meta_data( '_mollie_first_payment_id', sanitize_text_field($response['id']) );
		$order->update_meta_data( '_transaction_id', sanitize_text_field($response['id']) );
		$order->update_meta_data( '_mollie_customer_id_for_order', sanitize_text_field($mollie_customer_id) );
		$order->update_meta_data( '_mollie_payment_method_selected', sanitize_text_field($selected_method_id) );
		if ( isset( $payment_data['issuer'] ) ) { $order->update_meta_data( '_mollie_issuer_selected_id', sanitize_text_field($payment_data['issuer']) ); }
		if ( isset( $response['mandateId'] ) ) { $order->update_meta_data( '_mollie_mandate_id', sanitize_text_field($response['mandateId']) );}
		$order->add_order_note(sprintf(__( 'Mollie first payment initiated. ID: %s. Customer: %s.', 'creator-lms' ), esc_html($response['id']), esc_html($mollie_customer_id)));
		$order->save();
		return ['result' => 'success', 'redirect' => esc_url_raw($response['_links']['checkout']['href'])];
	}

	/**
	 * Process a recurring payment for a Mollie subscription.
	 *
	 * @param int $original_order_id The ID of the original order.
	 * @param int $renewal_order_id The ID of the renewal order.
	 * @param float $amount The amount to charge.
	 * @param int $subscription_id The ID of the omlms-subscription post.
	 * @param int $student_id The ID of the student.
	 * @return array Result of the payment attempt.
	 * @since 1.0.0
	 */
	public function process_recurring_payment( $original_order_id, $renewal_order_id, $amount, $subscription_id, $student_id ) {
		try {
			$original_order_id = absint( $original_order_id );
			$renewal_order_id = absint( $renewal_order_id );
			$subscription_id = absint( $subscription_id );
			$student_id = absint( $student_id );

			$original_order = ecommerce_get_order( $original_order_id );
			$renewal_order = ecommerce_get_order( $renewal_order_id );

			if ( ! $original_order ) {
				return array(
					'result'  => 'failure',
					'message' => __( 'Original order not found for Mollie recurring payment.', 'ohmylms' ),
				);
			}

			if ( ! $renewal_order ) {
				return array(
					'result'  => 'failure',
					'message' => __( 'Renewal order not found for Mollie recurring payment.', 'ohmylms' ),
				);
			}

			// Get Mollie customer ID and mandate from original order
			$mollie_customer_id = get_post_meta( $original_order_id, '_mollie_customer_id_for_order', true );
			$mollie_mandate_id = get_post_meta( $original_order_id, '_mollie_mandate_id', true );
			$mollie_subscription_id = get_post_meta( $original_order_id, '_mollie_subscription_id', true );
			
			if ( empty( $mollie_customer_id ) ) {
				return array(
					'result'  => 'failure',
					'message' => __( 'Mollie Customer ID not found on original order.', 'ohmylms' ),
				);
			}
			// Set API keys
			$this->set_keys();
			MollieAPI::set_api_key( $this->api_key );

			if ( empty( $this->api_key ) ) {
				return array(
					'result'  => 'failure',
					'message' => __( 'Mollie API key not configured.', 'ohmylms' ),
				);
			}
			// Copy customer and mandate info to renewal order
			update_post_meta( $renewal_order_id, '_mollie_customer_id_for_order', $mollie_customer_id );
			if ( ! empty( $mollie_mandate_id ) ) {
				update_post_meta( $renewal_order_id, '_mollie_mandate_id', $mollie_mandate_id );
			}
			if ( ! empty( $mollie_subscription_id ) ) {
				update_post_meta( $renewal_order_id, '_mollie_subscription_id', $mollie_subscription_id );
			}

			// Prepare payment data for recurring payment
			$webhook_url = get_rest_url( null, 'cx-ecommerce/v1/mollie-webhook/' );
			
			// Prepare billing address for Mollie (required for some payment methods)
			$billing_address = [
				'streetAndNumber' => $order->get_address() ?? '',
				'familyName'      => $order->get_student_name() ?? '',
				'city'            => $order->get_city() ?? '',
				'region'          => $order->get_state() ?? '',
				'postalCode'      => $order->get_postcode() ?? '',
				'country'         => $order->get_country() ?? '',
				'email'           => $order->get_email() ?? '',
			];
			
			// Remove empty values
			$billing_address = array_filter($billing_address);
			
			$payment_data = array(
				'amount'       => array(
					'value'    => number_format( $amount, 2, '.', '' ),
					'currency' => $original_order->get_currency()
				),
				'description'  => sprintf( __( 'Subscription Renewal - Order #%s, Subscription #%s', 'ohmylms' ), $renewal_order_id, $subscription_id ),
				'webhookUrl'   => $webhook_url,
				'redirectUrl'  => '',
				'customerId'   => $mollie_customer_id,
				'metadata'     => array(
					'order_id'        => $renewal_order_id,
					'subscription_id' => $subscription_id,
					'parent_order_id' => $original_order_id,
					'student_id'      => $student_id,
					'wordpress_site'  => get_bloginfo( 'url' ),
				),
			);

			// Add billing address if available
			if (!empty($billing_address)) {
				$payment_data['billingAddress'] = $billing_address;
			}

			// Add order lines (required for Klarna and some other payment methods)
			$order_lines = $this->get_order_line_items( $renewal_order );
			if ( ! empty( $order_lines ) ) {
				$payment_data['lines'] = $order_lines;
			}

			// Add customer email if available
			$customer_email = $renewal_order->get_email();
			$customer_name = $renewal_order->get_student_name();
			if (!empty($customer_email) && is_email($customer_email)) {
				$payment_data['billingEmail'] = sanitize_email($customer_email);
			}
			if (!empty($customer_name)) {
				$payment_data['billingAddress']['givenName'] = sanitize_text_field($customer_name);
			}

			$mollie_payment_totken = $original_order->get_meta( '_mollie_payment_token', true );
			if ( ! empty( $mollie_payment_totken ) && is_string( $mollie_payment_totken ) ) {
				$payment_data['cardToken'] = sanitize_text_field( $mollie_payment_totken );
				$payment_data['method'] = 'creditcard';
			} else {
				$selected_method = $original_order->get_meta( '_mollie_selected_method', true );
				if ( ! empty( $selected_method ) && is_string( $selected_method ) ) {
					$payment_data['method'] = sanitize_text_field( $selected_method );
				}
				$selected_issuer = $original_order->get_meta( '_mollie_issuer_selected_id', true );
				if ( ! empty( $selected_issuer ) && is_string( $selected_issuer ) ) {
					$payment_data['issuer'] = sanitize_text_field( $selected_issuer );
				}
			}
			
			// If mandate ID is available, use it
			if ( ! empty( $mollie_mandate_id ) ) {
				$payment_data['mandateId'] = $mollie_mandate_id;
			}

			// Create the recurring payment
			$response = MollieAPI::create_payment( $payment_data );
			if ( is_wp_error( $response ) ) {
				$error_message = $response->get_error_message();
				$renewal_order->add_order_note( sprintf( __( 'Mollie recurring payment failed. Error: %s', 'ohmylms' ), esc_html( $error_message ) ) );
				return array(
					'result'  => 'failure',
					'message' => $error_message,
				);
			}

			if ( ! $response || ! isset( $response['id'] ) ) {
				$log_response = is_array( $response ) || is_object( $response ) ? print_r( $response, true ) : strval( $response );
				$renewal_order->add_order_note( sprintf( __( 'Mollie recurring payment failed. Invalid response: %s', 'ohmylms' ), esc_html( $log_response ) ) );
				return array(
					'result'  => 'failure',
					'message' => __( 'Recurring payment failed due to invalid response from Mollie.', 'ohmylms' ),
				);
			}

			// Store payment information
			$renewal_order->update_meta_data( '_mollie_payment_id', sanitize_text_field( $response['id'] ) );
			$renewal_order->update_meta_data( '_transaction_id', sanitize_text_field( $response['id'] ) );
			$renewal_order->update_meta_data( '_mollie_payment_method_selected', sanitize_text_field( $response['method'] ?? '' ) );

			// Check payment status
			$payment_status = sanitize_text_field( $response['status'] ?? '' );

			if ( $payment_status === 'paid' ) {
				// Payment succeeded immediately
				$renewal_order->payment_complete( $response['id'] );
				$renewal_order->add_order_note( sprintf( __( 'Mollie recurring payment successful. Payment ID: %s', 'ohmylms' ), esc_html( $response['id'] ) ) );
				$renewal_order->save();

				return array(
					'result'         => 'success',
					'transaction_id' => $response['id'],
					'order_id'       => $renewal_order_id,
				);
			} elseif ( in_array( $payment_status, array( 'open', 'pending', 'authorized' ) ) ) {
				// Payment is pending
				$renewal_order->add_order_note( sprintf( __( 'Mollie recurring payment initiated. Payment ID: %s. Status: %s', 'ohmylms' ), esc_html( $response['id'] ), esc_html( $payment_status ) ) );
				$renewal_order->save();

				return array(
					'result'  => 'pending',
					'message' => sprintf( __( 'Recurring payment status: %s', 'ohmylms' ), $payment_status ),
					'order_id' => $renewal_order_id,
				);
			} else {
				// Payment failed
				$renewal_order->add_order_note( sprintf( __( 'Mollie recurring payment failed. Payment ID: %s. Status: %s', 'ohmylms' ), esc_html( $response['id'] ), esc_html( $payment_status ) ) );
				$renewal_order->save();

				return array(
					'result'  => 'failure',
					'message' => sprintf( __( 'Recurring payment status: %s', 'ohmylms' ), $payment_status ),
					'order_id' => $renewal_order_id,
				);
			}

		} catch ( Exception $e ) {
			return array(
				'result'  => 'failure',
				'message' => $e->getMessage(),
			);
		}
	}

	public function create_mollie_customer( $user_id, $order_id ) {
		$user_id = absint( $user_id );
		$order = ecommerce_get_order( $order_id );
		if ( ! $order || ! $user_id ) {
			return;
		}

		$mollie_customer_id = get_user_meta( $user_id, '_mollie_customer_id', true );
		if ( ! empty( $mollie_customer_id ) && is_string( $mollie_customer_id ) ) {
			return; // Already have a Mollie customer ID
		}

		$customer_name = $order->get_student_name();
		$customer_email = $order->get_email();
		if ( empty( $customer_name ) || ! is_email( $customer_email ) ) {
			return; // Cannot create customer without valid name and email
		}

		$customer_data = [ 'name' => sanitize_text_field($customer_name), 'email' => sanitize_email($customer_email) ];
		$mollie_customer = MollieAPI::create_customer( $customer_data );
		if ( is_wp_error( $mollie_customer ) || empty( $mollie_customer['id'] ) ) {
			return; // Failed to create customer
		}

		$mollie_customer_id = sanitize_text_field($mollie_customer['id']);
		update_user_meta( $user_id, '_mollie_customer_id', $mollie_customer_id );
	}


	public function get_mollie_customer_id( $user_id ) {
		$user_id = absint( $user_id );
		if ( ! $user_id ) {
			return '';
		}
		$mollie_customer_id = get_user_meta( $user_id, '_mollie_customer_id', true );
		if ( ! empty( $mollie_customer_id ) && is_string( $mollie_customer_id ) ) {
			return $mollie_customer_id;
		}
		return '';
	}

	/**
	 * Register the REST API endpoint for Mollie webhooks.
	 * @since 1.0.0
	 */
	public function register_webhook_endpoint() {
		register_rest_route( 'cx-ecommerce/v1', '/mollie-webhook',
			['methods' => WP_REST_Server::CREATABLE, 'callback' => [ $this, 'handle_webhook' ], 'permission_callback' => '__return_true']
		);
	}

	/**
	 * Handle incoming webhooks from Mollie.
	 * Verifies the payment or subscription status and updates the order accordingly.
	 * @since 1.0.0
	 * @param WP_REST_Request $request The REST API request object.
	 * @return WP_REST_Response|WP_Error
	 */
	public function handle_webhook( WP_REST_Request $request ) {
		$resource_id = sanitize_text_field( $request->get_param( 'id' ) );
		if ( empty( $resource_id ) ) {
			return new WP_Error( 'mollie_webhook_no_id', 'No resource ID provided.', [ 'status' => 400 ] );
		}
		
		$this->init_settings();
		$this->set_keys();
		$current_api_key = $this->api_key;
		if ( empty( $current_api_key ) ) {
			return new WP_Error( 'mollie_webhook_config_error', 'Mollie API key not configured on site.', [ 'status' => 500 ] );
		}

		MollieAPI::set_api_key( $current_api_key );

		if ( strpos( $resource_id, 'sub_' ) === 0 ) {
			$subscription = MollieAPI::get_subscription( $resource_id );
			if ( is_wp_error( $subscription ) || empty( $subscription ) || ($subscription['resource'] ?? '') !== 'subscription' ) {
				return new WP_Error( 'mollie_webhook_fetch_error', 'Could not fetch valid subscription from Mollie.', [ 'status' => 500 ] );
			}
			$order_id_from_meta = $subscription['metadata']['order_id'] ?? null;
			if ( ! $order_id_from_meta ) {
				return new WP_REST_Response( [ 'message' => 'Subscription webhook received, but no order_id in metadata.' ], 200 );
			}
			$order = ecommerce_get_order( absint( $order_id_from_meta ) );
			if ( ! $order ) {
				return new WP_REST_Response( [ 'message' => 'Original order for subscription not found.' ], 200 );
			}
			// Further subscription status handling (active, canceled, etc.)
			$order->add_order_note(sprintf(__( 'Mollie subscription %s status updated to: %s.', 'creator-lms' ), esc_html($resource_id), esc_html($subscription['status'])));
			// TODO: Implement LMS-specific subscription status updates and access control.
			$order->save();
			return new WP_REST_Response( [ 'message' => 'Subscription webhook processed.' ], 200 );

		} elseif ( strpos( $resource_id, 'tr_' ) === 0 ) {
			$payment = MollieAPI::get_payment( $resource_id );
			if ( is_wp_error( $payment ) || empty( $payment ) || ($payment['resource'] ?? '') !== 'payment' ) {
				return new WP_Error( 'mollie_webhook_fetch_error', 'Could not fetch valid payment from Mollie.', [ 'status' => 500 ] );
			}
			$order_id = $payment['metadata']['order_id'] ?? null;
			if ( ! $order_id ) {
				return new WP_Error( 'mollie_webhook_no_order_id', 'No order_id in payment metadata.', [ 'status' => 400 ] );
			}
			$order_id = absint( $order_id );
			$order    = ecommerce_get_order( $order_id );
			if ( ! $order ) {
				return new WP_Error( 'mollie_webhook_order_not_found', "Order {$order_id} not found.", [ 'status' => 404 ] );
			}

			$payment_status = sanitize_text_field($payment['status']);
			$sequence_type = sanitize_text_field($payment['sequenceType'] ?? '');

			switch ( $payment_status ) {
				case 'paid':
					$user_id = $order->get_student_id();
					$this->create_mollie_customer( $user_id, $order_id );
					$mollie_customer_id = $this->get_mollie_customer_id( $user_id );
					if ( $sequence_type === 'first' && ($payment['metadata']['is_subscription_first_payment'] ?? false) ) {
						$transaction_id = $order->get_prop( '_transaction_id' );
						$order->payment_complete($transaction_id);
						$order->add_order_note( sprintf( __( 'Mollie first payment %s confirmed. Mandate: %s.', 'creator-lms' ), esc_html($resource_id), esc_html($payment['mandateId'] ?? 'N/A') ) );
						if ( isset( $payment['mandateId'] ) ) $order->update_meta_data( '_mollie_mandate_id', sanitize_text_field($payment['mandateId']) );
						$order->update_meta_data( '_mollie_payment_method_confirmed', sanitize_text_field($payment['method']) );
						$order->update_meta_data( '_mollie_transaction_id_confirmed', sanitize_text_field($payment['id']) );

						// Placeholder: Logic to get recurring amount and interval
						$recurring_amount = $order->get_total('edit');
						$recurring_currency = $order->get_currency();
						$mollie_interval = '1 month'; // FIXME: This should be dynamic based on product/order.

						if ( $mollie_customer_id && $recurring_amount && $mollie_interval ) {
							$sub_data = ['amount'=>['value'=>number_format((float)$recurring_amount,2,'.',''), 'currency'=>$recurring_currency], 'interval'=>$mollie_interval, 'description'=>sprintf(__( 'Subscription for Order %s', 'creator-lms' ), $order->get_order_number()), 'webhookUrl'=>get_rest_url(null,'creator-lms-mollie/v1/webhook/'), 'metadata'=>['order_id'=>$order_id, 'wordpress_user_id'=>$user_id]];
							if(isset($payment['mandateId'])) $sub_data['mandateId'] = $payment['mandateId'];
							$mollie_sub = MollieAPI::create_subscription( $mollie_customer_id, $sub_data );
							if ( !is_wp_error($mollie_sub) && isset($mollie_sub['id']) ) {
								$order->update_meta_data('_mollie_subscription_id', sanitize_text_field($mollie_sub['id']));
								$order->add_order_note(sprintf(__( 'Mollie Subscription %s created. Status: %s.', 'creator-lms' ), esc_html($mollie_sub['id']), esc_html($mollie_sub['status'])));
								// Placeholder: creator_lms_activate_subscription($order_id, $user_id);
								// Placeholder: creator_lms_grant_course_access($order_id, $user_id);
							} else {
								$order->add_order_note(sprintf(__( 'Failed to create Mollie subscription. Error: %s', 'creator-lms' ), is_wp_error($mollie_sub)?esc_html($mollie_sub->get_error_message()):'Unknown error'));
							}
						} else {
							$order->add_order_note(__( 'Cannot create Mollie subscription: missing required data (customer ID, amount, or interval).', 'creator-lms' ));
						}
					} elseif ( $sequence_type === 'recurring' ) {
						$order->add_order_note( sprintf( __( 'Mollie recurring payment %s confirmed for subscription %s.', 'creator-lms' ), esc_html($payment['id']), esc_html($payment['subscriptionId'] ?? 'N/A') ) );
						if ($order->get_status() === 'on-hold') $order->update_status('active', __('Subscription reactivated after successful recurring payment.', 'creator-lms'));
						// Placeholder: creator_lms_record_renewal_payment($order_id, $payment['id'], $payment['amount']['value']);
						// Placeholder: creator_lms_extend_subscription_access($order_id);
					} else {
						$order->update_status( 'completed', __( 'Mollie payment successful.', 'creator-lms' ) );
						$order->add_order_note( sprintf( __( 'Mollie payment %s confirmed as paid.', 'creator-lms' ), esc_html($resource_id) ) );
						// Placeholder: creator_lms_grant_course_access($order_id, $user_id);
						if (isset($payment['method'])) $order->update_meta_data( '_mollie_payment_method_confirmed', sanitize_text_field($payment['method']) );
						if (isset($payment['id'])) $order->update_meta_data( '_mollie_transaction_id_confirmed', sanitize_text_field($payment['id']) );
						if ( isset( $payment['details']['issuer'] ) ) { // Issuer details might not always be present or relevant
							$order->update_meta_data( '_mollie_issuer_name', sanitize_text_field( $payment['details']['issuer'] ) );
						}
						$order->update_meta_data( '_mollie_customer_id_for_order', sanitize_text_field( $mollie_customer_id ) );
						update_post_meta( $order_id, '_mollie_customer_id_for_order', sanitize_text_field( $mollie_customer_id ) );
					}
					do_action( 'creator_lms_mollie_payment_completed', $order_id, $payment );
					break;
				case 'failed': case 'cancelled': case 'expired':
					$status_note = sprintf( __( 'Mollie payment %s. Status: %s.', 'creator-lms' ), esc_html($resource_id), esc_html($payment_status) );
					if ( $sequence_type === 'recurring' ) {
						$order->update_status('on-hold', sprintf(__( 'Subscription payment %s failed.', 'creator-lms' ), esc_html($resource_id)));
						$order->add_order_note( $status_note . __( ' Subscription put on hold.', 'creator-lms' ) );
						// Placeholder: creator_lms_mark_subscription_payment_failed($order_id);
						// Placeholder: creator_lms_revoke_course_access_or_start_dunning($order_id);
					} else {
						$order->update_status( 'failed', sprintf( __( 'Mollie payment %s.', 'creator-lms' ), esc_html($payment_status) ) );
						$order->add_order_note( $status_note );
					}
					break;
				default: // open, pending, authorized etc.
					$order->add_order_note( sprintf( __( 'Mollie payment %s status updated to %s.', 'creator-lms' ), esc_html($resource_id), esc_html($payment_status) ) );
					break;
			}
			$order->save();
			return new \WP_REST_Response( [ 'message' => 'Payment webhook processed.' ], 200 );
		} else {
			return new \WP_REST_Response( [ 'message' => 'Webhook received for unhandled resource type.' ], 200 );
		}
	}

	/**
	 * Process an admin initiated refund.
	 * @since 1.0.0
	 * @param int    $order_id Order ID.
	 * @param float|null $amount   Amount to refund. Null for full amount.
	 * @param string $reason   Reason for refund.
	 * @return bool|WP_Error True on success, false or WP_Error on failure.
	 */
	public function process_refund( $order_id, $amount = null, $reason = '' ) {
		$order = ecommerce_get_order( $order_id );
		if ( ! $order ) {
			return new WP_Error( 'mollie_refund_error', __( 'Order not found for refund.', 'creator-lms' ) );
		}
		$this->set_keys();
		$current_api_key = $this->api_key;
		MollieAPI::set_api_key( $current_api_key );

		if(empty($current_api_key)){
            return new WP_Error( 'mollie_refund_error', __( 'Mollie API key not configured.', 'creator-lms' ) );
		}
		$mollie_payment_id = $order->get_transaction_id();

		if ( empty( $mollie_payment_id ) ) {
			$order->add_order_note( __( 'Mollie Payment ID not found. Cannot process refund.', 'creator-lms' ) );
			return new WP_Error( 'mollie_refund_error', __( 'Mollie Payment ID not found for this order.', 'creator-lms' ) );
		}
		$mollie_payment_id = sanitize_text_field($mollie_payment_id);

		$refund_amount_val = ( null === $amount || '' === $amount ) ? $order->get_total() : floatval(str_replace(',', '.', $amount));
		if ( $refund_amount_val <= 0 ) {
			return new WP_Error( 'mollie_refund_error', __( 'Refund amount must be greater than zero.', 'creator-lms' ) );
		}
		$data_to_send = ['amount' => ['value' => number_format( $refund_amount_val, 2, '.', '' ), 'currency' => $order->get_currency()]];
		if ( ! empty( $reason ) ) { $data_to_send['description'] = sanitize_text_field( $reason ); }

		$response = MollieAPI::create_refund( $mollie_payment_id, $data_to_send );

		if ( is_wp_error( $response ) ) {
			$error_message = $response->get_error_message();
			$order->add_order_note( sprintf( __( 'Mollie refund failed: %s', 'creator-lms' ), esc_html($error_message) ) );
			return $response;
		}
		if ( empty( $response['id'] ) || !isset($response['amount']['value']) ) {
			$order->add_order_note( __( 'Mollie refund failed: Invalid response from API.', 'creator-lms' ) );
			return false;
		}

		$refund_id = sanitize_text_field($response['id']);
		$note_text = sprintf(__( 'Mollie refund %s. Status: %s. Amount: %s %s. Reason: %s', 'creator-lms' ),
			esc_html($refund_id), esc_html($response['status']), esc_html($response['amount']['value']), esc_html($response['amount']['currency']),
			empty( $reason ) ? __( 'N/A', 'creator-lms' ) : esc_html($reason)
		);
		$order->add_order_note( $note_text );

        $order->update_meta_data('_mollie_refund_id_' . $refund_id, wp_json_encode($response));
		// Placeholder: LMS specific status/access updates
		$order->save();
		return true;
	}

	/**
	 * Handles the admin action triggered by the refund form submission.
	 * Verifies nonce, checks capabilities, sanitizes input, calls process_admin_refund,
	 * and redirects back with an admin notice.
	 * @since 1.0.0
	 */
	public function handle_admin_refund_action() {
		$nonce_value = isset($_POST['_wpnonce_mollie_refund']) ? sanitize_key($_POST['_wpnonce_mollie_refund']) : '';
		if ( ! isset( $_POST['order_id'], $_POST['_wpnonce_mollie_refund'] ) || ! wp_verify_nonce( $nonce_value, 'creator_lms_mollie_refund_order_nonce' ) ) {
			wp_die( esc_html__( 'Nonce verification failed. Please try again.', 'creator-lms' ) );
		}
		// TODO: Replace 'manage_options' with a more appropriate capability.
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'You do not have sufficient permissions to perform this action.', 'creator-lms' ) );
		}

		$order_id = absint( $_POST['order_id'] );
		$refund_amount_raw = isset( $_POST['refund_amount'] ) ? trim( sanitize_text_field( wp_unslash( $_POST['refund_amount'] ) ) ) : '';
		$refund_amount = ( '' === $refund_amount_raw ) ? null : floatval( str_replace(',', '.', $refund_amount_raw) );
		$refund_reason = isset( $_POST['refund_reason'] ) ? sanitize_textarea_field( wp_unslash( $_POST['refund_reason'] ) ) : '';

		if ( ! $order_id ) {
			wp_die( esc_html__( 'Order ID is missing. Cannot process refund.', 'creator-lms' ) );
		}

		$result = $this->process_admin_refund( $order_id, $refund_amount, $refund_reason );

		if ( true === $result ) {
			set_transient( get_current_user_id() . '_mollie_refund_notice', __( 'Mollie refund initiated successfully.', 'creator-lms' ), 5 );
		} elseif ( is_wp_error( $result ) ) {
			set_transient( get_current_user_id() . '_mollie_refund_error_notice', $result->get_error_message(), 5 );
		} else {
			set_transient( get_current_user_id() . '_mollie_refund_error_notice', __( 'Mollie refund failed. Please check order notes and Mollie dashboard for more details.', 'creator-lms' ), 5 );
		}

		$redirect_url = admin_url( 'post.php?post=' . $order_id . '&action=edit' );
		wp_safe_redirect( $redirect_url );
		exit;
	}


	/**
	 * Get the transaction URL for an order.
	 *
	 * @since 1.0.0
	 * @param CodeRex\Ecommerce\Data\Order $order The order object.
	 */
	public function get_transaction_url( $order ) {
		$payment_id = $order->get_transaction_id(); // or however you store it
		$this->set_keys();
		// $api_key = $this->testmode ? $this->test_api_key : $this->live_api_key;
		$api_key = $this->api_key;

		$url = Helper::get_payment_url( $payment_id, $api_key );
		if ( ! $url ) {
			return '';
		}

		return $url;
	}
}
