<?php
/**
 * Template for displaying login form.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/form-login.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \CodeRex\Ecommerce\Checkout $checkout
 */

defined( 'ABSPATH' ) || exit;

if ( is_user_logged_in() ) {
	return;
}

?>

<?php

creator_lms_login_form(
	array(
		'message'     => '',
		'redirect_to' => creator_lms_get_checkout_url(),
		'hidden'      => true,
	)
);
