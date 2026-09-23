<?php
/**
 * Template for displaying signup form.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/form-signup.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \CodeRex\Ecommerce\Checkout $checkout
 */

defined( 'ABSPATH' ) || exit;

omlms_get_template( 'global/creator-lms-celebration.php' );

creator_lms_signup_form(
	array(
		'message'     => '',
		'redirect_to' => creator_lms_get_checkout_url(),
		'hidden'      => true,
	)
);
?>

