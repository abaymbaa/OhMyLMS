<?php
/**
 * Template for displaying contact fields.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/form-contact.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \CodeRex\Ecommerce\Checkout $checkout
 */

defined( 'ABSPATH' ) || exit();
?>

<div class="creator-lms-billing-contact">
	<?php do_action( 'creator_lms_before_checkout_contact_form', $checkout ); ?>
	<p class="creator-lms-form-row validate-required creator-lms-folded" id="email_field">
		<span class="creator-lms-input-wrapper">
			<?php
			$fields = $checkout->get_checkout_fields( 'contact' );
			foreach ( $fields as $key => $field ) {
				ecommerce_form_field( $key, $field, $checkout->get_value( $key ) );
			}
			?>
		</span>
	</p>
</div>