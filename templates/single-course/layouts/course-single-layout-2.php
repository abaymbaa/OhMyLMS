<?php
/**
 * The template for displaying course layout-2 content in the course-single-layout-2.php template
 *
 * This template can be overridden by copying it to yourtheme/single-course/layouts/course-single-layout-2.php.
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
             * Hook: creator_lms_single_course_content.
             *
             * @hooked: creator_lms_single_course_header (5)
             * @hooked: creator_lms_course_description_tab (10)
             * @hooked: creator_lms_course_information_tab (15)
             * @hooked: creator_lms_course_assignments_tab (20)
             * @hooked: creator_lms_course_resources_tab (25)
             * @hooked: creator_lms_course_reviews_tab (30)
             */
            do_action( 'creator_lms_single_course_content' );
        ?>
    </div>

    <aside class="creator-lms-sidebar">
        <?php
            /**
             * Hook: creator_lms_course_before_sidebar_widget.
             *
             * @hooked: creator_lms_course_feature_image_and_video (5).
             * @hooked: creator_lms_widget_wrapper_start (10).
             */
            do_action( 'creator_lms_course_before_sidebar_widget' );
        ?>

        <?php
            /**
             * Hook: creator_lms_course_sidebar_widget.
             *
             * @hooked: creator_lms_widget_pricebox (5).
             * @hooked: creator_lms_widget_course_membership (10).
             * @hooked: creator_lms_widget_course_progress (15).
             * @hooked: creator_lms_widget_certificate (20).
             * @hooked: creator_lms_widget_course_meta (25).
             * @hooked: creator_lms_widget_course_leaderboard (30).
             * @hooked: creator_lms_widget_course_author (35).
             * @hooked: creator_lms_widget_course_taxonomy (40).
             * @hooked: creator_lms_widget_course_drop (45).
             */
            do_action( 'creator_lms_course_sidebar_widget' );
        ?>

        <?php
            /**
             * Hook: creator_lms_course_after_sidebar_widget.
             *
             * @hooked: creator_lms_widget_wrapper_end (5).
             */
            do_action( 'creator_lms_course_after_sidebar_widget' );
        ?>
    </aside>
</div>
