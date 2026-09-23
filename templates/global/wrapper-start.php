<?php
/**
 * Content wrappers
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/global/wrapper-start.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$template = get_template();
$single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');
$classes = '';

if( 'layout_1' === $single_course_layout ) {
	$classes .= ' creator-lms-courses-single-layout-1';
}

if( 'layout_2' === $single_course_layout ) {
	$classes .= ' creator-lms-courses-single-layout-2';
}

if( 'layout_3' === $single_course_layout ) {
	$classes .= ' creator-lms-courses-single-layout3';
}

switch ( $template ) {
	case 'twentytwentyone':
		echo '<section class="creator-lms-courses '.$classes.'">';
		break;
	default:
		echo '<main id="main" class="site-main" role="main"><section class="creator-lms-courses '.$classes.'">';
		break;
}
