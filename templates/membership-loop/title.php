<?php
/**
 * Membership Loop Title
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/membership-loop/title.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
global $membership;
if ( $membership == null ) {
	return;
}
?>

<h4 class="membership-title"><?php echo $membership->get_name(); ?></h4>

