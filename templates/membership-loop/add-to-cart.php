<?php
/**
 * Membership Loop Add to Cart
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/membership-loop/add-to-cart.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $membership;
if( $membership == null ) {
	return;
}
$args = array(
	'attributes' => array(
		'data-membership_id'  => $membership->get_id(),
		'rel'              => 'nofollow',
		'is_already_purchased' => $membership->is_already_purchased(),
	),
);

$add_to_cart =  apply_filters(
	'creator_lms_membership_loop_add_to_cart_link', // WPCS: XSS ok.
	sprintf(
		'<a href="%s" data-quantity="%s" class="%s" %s>%s</a>',
		esc_url( $membership->add_to_cart_url() ),
		esc_attr( 1 ),
		esc_attr( 'creator-lms-button add_to_cart_button'),
		isset( $args['attributes'] ) ? omlms_implode_html_attributes( $args['attributes'] ) : '',
		wp_kses_post( $membership->add_to_cart_text() )
	),
	$membership,
	$args
);


?>


<div class="cta-button-ara">
	<?php echo $add_to_cart; ?>
</div>
