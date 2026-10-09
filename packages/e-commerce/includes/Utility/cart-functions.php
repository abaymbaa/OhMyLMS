<?php

if ( ! function_exists( 'apply_filters' ) ) {
	require_once ABSPATH . 'wp-includes/plugin.php';
}

/**
 * Clears the cart session when called.
 */
function ohmylms_empty_cart() {
	if ( ! isset( \CodeRex\Ecommerce\ecommerce()->cart ) || '' === \CodeRex\Ecommerce\ecommerce()->cart ) {
		\CodeRex\Ecommerce\ecommerce()->cart = new \CodeRex\Ecommerce\Cart();
	}
	\CodeRex\Ecommerce\ecommerce()->cart->empty_cart( false );
}


function ohmylmse_cart_totals_subtotal_html() {
	echo \CodeRex\Ecommerce\ecommerce()->cart->get_cart_subtotal(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}

/**
 * Outputs or returns the label for a given coupon.
 *
 * @param \CodeRex\Ecommerce\Data\Coupon|string $coupon Coupon object or coupon code.
 * @param bool                                  $echo Whether to echo the label or return it. Default true.
 * @return string|null The coupon label if $echo is false, otherwise null.
 *
 * @since 1.0.0
 */
function ohmylmse_cart_totals_coupon_label( $coupon, $echo = true ) {
	if ( is_string( $coupon ) ) {
		$coupon = new \CodeRex\Ecommerce\Data\Coupon( $coupon );
	}

	if ( ! $coupon->get_code() ) {
		return ''; // Return null if the coupon is not valid.
	}

	$label = sprintf(
		__( 'Order discount: <span class="applied-coupon">%s <a href="#" class="ohmylms-remove-coupon" data-coupon="' . esc_attr( $coupon->get_code() ) . '"><svg width="16" height="16" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="var(--ohmylms-primary-color)" fill-rule="evenodd" d="M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm-2.78-4.72a.75.75 0 010-1.06L6.94 8 5.22 6.28a.75.75 0 011.06-1.06L8 6.94l1.72-1.72a.75.75 0 111.06 1.06L9.06 8l1.72 1.72a.75.75 0 01-1.06 1.06L8 9.06l-1.72 1.72a.75.75 0 01-1.06 0z" clip-rule="evenodd"/></svg></a></span>', 'ohmylms' ),
		esc_html( $coupon->get_code() )
	);

	if ( $echo ) {
		echo $label; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	} else {
		return $label;
	}
}

/**
 * Outputs the HTML for a given coupon.
 *
 * @param \CodeRex\Ecommerce\Data\Coupon|string $coupon Coupon object or coupon code.
 * @return void
 *
 * @since 1.0.0
 */
function ohmylmse_cart_totals_coupon_html( $coupon ) {
	if ( is_string( $coupon ) ) {
		$coupon = new \CodeRex\Ecommerce\Data\Coupon( $coupon );
	}

	$amount               = \CodeRex\Ecommerce\ecommerce()->cart->get_coupon_discount_amount( $coupon->get_code() );
	$discount_amount_html = '-' . ohmylms_price( $amount );
	$coupon_html          = $discount_amount_html;

	echo $coupon_html;
}

/**
 * Outputs the HTML for the order total.
 *
 * @since 1.0.0
 */
function ohmylmse_cart_totals_order_total_html() {
	$value = '<strong>' . \CodeRex\Ecommerce\ecommerce()->cart->get_totals_by_key( 'total' ) . '</strong> ';
	$value = apply_filters( 'ohmylmse_cart_totals_order_total_html', ohmylms_price( $value ), );
	echo $value; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}
