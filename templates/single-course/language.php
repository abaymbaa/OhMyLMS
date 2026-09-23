<?php
/**
 * The template for displaying single course level
 *
 * This template can be overridden by copying it to yourtheme/single-course/duration.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
?>

<li class="course-language">
	<?php include(CREATOR_LMS_DIR . '/assets/images/icon/speaker-icon.php'); ?>
	<?php echo __('English', 'ohmylms'); ?>
</li>
