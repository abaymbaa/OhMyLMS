<?php
/**
 * Template for displaying course layout within loop.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/layouts/grid-style3.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
global $course;
if( !$course ){
    return;
}
if( isset($atts) && is_array($atts) && isset($atts['layout']) && isset($atts['layout_style']) ){
    $layout = $atts['layout'];
    $layout_style = $atts['layout_style'];
} else {
    $layout = get_option( 'creator_lms_archive_page_layout', 'grid' );
    $layout_style = get_option('creator_lms_archive_page_layout_style','grid-style1');
}

/**
 * Hook: creator_lms_courses_loop_item_title.
 *
 * @hooked creator_lms_loop_course_title - 5
 */
do_action( 'creator_lms_courses_loop_item_title', $layout, $layout_style );


/**
 * Hook: creator_lms_courses_loop_item_meta.
 * 
 * @hooked creator_lms_loop_course_meta - 5
 */
do_action( 'creator_lms_courses_loop_item_meta', $layout, $layout_style );



/**
 * Hook: creator_lms_courses_loop_item_price.
 * 
 * @hooked creator_lms_loop_course_meta - 5
 */
do_action( 'creator_lms_courses_loop_item_price', $layout, $layout_style );