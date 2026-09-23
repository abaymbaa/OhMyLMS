<?php
/**
 * Template for displaying checkout form.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/form.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \CodeRex\Ecommerce\Checkout $checkout
 */

defined( 'ABSPATH' ) || exit();

// do_action( 'creator_lms_account_header' );

/**
 * Hook: creator_lms_before_checkout_form_start.
 */
do_action( 'creator_lms_before_checkout_form_start', $checkout );

//if ( !$checkout->is_guest_checkout_enabled() || $checkout->is_registration_enabled() ||  ! is_user_logged_in() ) {
//	echo esc_html( apply_filters( 'creator_lms_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'ohmylms' ) ) );
//	return;
//}
?>
<div class="creator-lms-checkout-form-outer">
	<div class="creator-lms-container">
		<div class="creator-lms-checkout-form-wrapper">
			<div class="creator-lms-checkout-form-left">
				<?php do_action( 'creator_lms_before_checkout_form', $checkout ); ?>

				<form method="post" id="creator-lms-checkout-form" name="creator-lms-checkout" class="creator-lms-checkout-form checkout" action="/" enctype="multipart/form-data">
					<?php if ( $checkout->get_checkout_fields() ) :
						/**
						 * Hook: creator_lms_checkout_contact.
						 * 
						 * This hook is triggered to display the contact details section.
						 * You can use this hook to add custom content or modify the contact section.
						 * 
						 * Example usage:
						 * add_action( 'creator_lms_checkout_contact', 'my_custom_function' );
						 * function my_custom_function() {
						 *     // Your custom code here
						 * }
						 * @since 1.0.0
						 * @hook creator_lms_checkout_contact
						 * @param \CodeRex\Ecommerce\Checkout $checkout The checkout instance.
						 * @return void
						 */
						do_action( 'creator_lms_checkout_contact' );

						/**
						 * Hook: creator_lms_checkout_before_billing.
						 * 
						 * This hook is triggered before the billing details section.
						 * You can use this hook to add custom content or modify the billing section.
						 * 
						 * Example usage:
						 * add_action( 'creator_lms_checkout_before_billing', 'my_custom_function' );
						 * function my_custom_function() {
						 *     // Your custom code here
						 * }
						 * @since 1.0.0
						 * @hook creator_lms_checkout_before_billing
						 * @param \CodeRex\Ecommerce\Checkout $checkout The checkout instance.
						 * @return void
						 */
						do_action( 'creator_lms_checkout_before_billing' );
						?>

						<div class="creator-lms-checkout-customer-details" id="customer_details">
							<div class="creator-lms-billing-info">
								<?php do_action( 'creator_lms_checkout_billing' ); ?>
							</div>
						</div>

						<?php do_action( 'creator_lms_checkout_after_billing' ); ?>

					<?php endif; ?>

					<input type="hidden" name="action" value="creator_lms_checkout">
					<input type="hidden" name="student_id" value="<?php echo get_current_user_id(); ?>">
				</form>
			</div>

			<div class="creator-lms-checkout-form-right">
				<div class="creator-lms-checkout-order-review">
					<h3 class="creator-lms-checkout-title order-review-title">
						<?php esc_html_e( 'Order Summary', 'ohmylms' ); ?>
					</h3>

					<div class="creator-lms-checkout-review-order" id="order_review">
						<?php do_action( 'creator_lms_checkout_order_review', $checkout ); ?>
					</div>
				</div>

				<?php do_action( 'creator_lms_checkout_after_order_review' ); ?>
			</div>
		</div>

	</div>
	<!-- container end -->
</div>

<?php do_action( 'creator_lms_after_checkout_form', $checkout ); ?>


