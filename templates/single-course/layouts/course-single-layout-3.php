<?php
/**
 * The template for displaying course layout-3 content in the course-single-layout-3.php template
 *
 * This template can be overridden by copying it to yourtheme/single-course/layouts/course-single-layout-3.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
?>
<?php omlms_get_template( 'global/creator-lms-celebration.php' ); ?>

<div class="creator-lms-content-wrapper">
    <div class="creator-lms-content">
        <?php
            /**
             * Hook: creator_lms_single_course_layout3_content.
             * 
             * @hooked: creator_lms_single_course_layout3_header (5)
             * @hooked: creator_lms_single_course_layout3_content (10)
             */
            do_action( 'creator_lms_single_course_content' );
        ?>
    </div>

    <aside class="creator-lms-sidebar">
        <?php
            /**
             * Hook: creator_lms_course_single_layout3_sidebar_widget.
             * 
             * @hooked: creator_lms_pricebox_and_course_meta (5)
             * @hooked: creator_lms_widget_course_membership (10)
             * @hooked: creator_lms_widget_certificate (15)
             * @hooked: creator_lms_widget_course_leaderboard_layout3 (20)
             * @hooked: creator_lms_widget_course_taxonomy (25)
             * @hooked: creator_lms_widget_course_drop (30)
             */
            do_action( 'creator_lms_course_sidebar_widget' );
        ?>
    </aside>
</div>
