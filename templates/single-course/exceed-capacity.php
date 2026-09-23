<?php

/**
 * The template for displaying single course sidebar's pricebox
 *
 * This template can be overridden by copying it to yourtheme/single-course/continue-course.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<a href="<?php echo esc_url('#');?>" class="creator-lms-button creator-lms-button-disabled">
	<?php echo __('No Seat Available','ohmylms'); ?>
</a>
