<?php
/**
 * Content wrappers
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/global/wrapper-start.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$template             = get_template();
$single_course_layout = get_option( 'ohmylms_single_course_page_layout', 'layout_1' );
$classes              = '';

if ( 'layout_1' === $single_course_layout ) {
	$classes .= ' ohmylms-courses-single-layout-1';
}

if ( 'layout_2' === $single_course_layout ) {
	$classes .= ' ohmylms-courses-single-layout-2';
}

if ( 'layout_3' === $single_course_layout ) {
	$classes .= ' ohmylms-courses-single-layout3';
}

switch ( $template ) {
	case 'twentytwentyone':
		echo '<section class="ohmylms-courses ' . $classes . '">';
		break;
	default:
		echo '<main id="main" class="site-main" role="main"><section class="ohmylms-courses ' . $classes . '">';
		break;
}
