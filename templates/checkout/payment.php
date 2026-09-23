<?php
/**
 * Template for displaying payment option.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/payment.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();

$cart = \CodeRex\Ecommerce\ecommerce()->cart->get_cart();
$has_membership = false;
$by_point = false;
$is_recurring_daily = false;
foreach ( $cart as $cart_item_key => $cart_item ) {
	// Check if cart item data exists
	if ( ! isset( $cart_item['data'] ) || ! is_object( $cart_item['data'] ) ) {
		continue;
	}
	
	if(get_post_type($cart_item['data']->get_id()) == 'omlms-membership'){
		$membership = omlms_get_membership( $cart_item['data']->get_id() );
		if( $membership && $membership->get_subscription_period() !== 'one_time' ){
			$has_membership = true;
			if ( $membership->get_subscription_period() === 'day' ) {
				$is_recurring_daily = true;
			}
		}
	}
	if ( isset( $cart_item['purchase_by'] ) && $cart_item['purchase_by'] === 'point' ) {
		$by_point = true;
	}
}

?>
	<div id="creator-lms-payment" class="creator-lms-checkout-payment">

		<?php if ( ! $by_point && \CodeRex\Ecommerce\ecommerce()->cart->needs_payment() ) : ?>
			<div class="creator-lms-payment-method-wrapper">
				<h3 class="creator-lms-checkout-title">
					<?php esc_html_e( 'Payment Information', 'ohmylms' ); ?>
				</h3>

				<ul class="creator-lms-payment-methods">
					<?php
					if ( ! empty( $available_gateways ) ) {
						$is_first = true;
						foreach ( $available_gateways as $gateway ) {
							if ( $has_membership && ! $gateway->subscription_support ) {
								continue;
							}
							if( 'razorpay' === $gateway->id && $is_recurring_daily ) {
								continue;
							}

							omlms_get_template(
								'checkout/payment-method.php',
								array(
									'gateway' => $gateway,
									'is_first' => $is_first
								)
							);
							$is_first = false;
						}
					}
					else {
						echo '<li class="no-payment-method-text">';
							echo esc_html('Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.');
						echo '</li>';
					}
					?>
				</ul>
			</div>
		<?php endif; ?>

		<div class="creator-lms-place-order">
			<?php do_action( 'creator_lms_review_order_before_submit' ); ?>

			<input type="hidden" name="action" value="creator_lms_checkout">
			<?php do_action( 'creator_lms_review_order_after_submit' ); ?>
			<?php wp_nonce_field( 'creator-lms-process_checkout', 'creator-lms-process-checkout-nonce' ); ?>

			<button
				type="submit"
				class="creator-lms-button creator-lms-place-order-button"
				name="creator_lms_checkout_place_order"
				aria-label="Complete Checkout"
			>
				<?php echo __( 'Complete Checkout', 'ohmylms' ); ?>
				<span class="creator-lms-loader"></span>
			</button>

			<?php omlms_get_template( 'checkout/terms.php' ); ?>
		</div>
	</div>
<?php

