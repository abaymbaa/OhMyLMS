<?php
/**
 * The template for displaying course layout-1 content in the course-single-layout-1.php template
 *
 * This template can be overridden by copying it to yourtheme/single-course/layouts/course-single-layout-1.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

?>
<?php ohmylms_get_template( 'global/ohmylms-celebration.php' ); ?>

<div class="ohmylms-content-wrapper">
    <div class="ohmylms-content">
        <?php
            /**
             * Hook: ohmylms_single_course_content.
             *
             * @hooked: ohmylms_single_course_header (5)
             * @hooked: ohmylms_single_course_tabs (10)
             */
            do_action( 'ohmylms_single_course_content' );
        ?>
    </div>

    <aside class="ohmylms-sidebar">
        <?php
            /**
             * Hook: ohmylms_course_sidebar_widget.
             *
             * @hooked: ohmylms_widget_pricebox (5).
             * @hooked: ohmylms_widget_course_membership (10).
             * @hooked: ohmylms_widget_course_progress (15).
             * @hooked: ohmylms_widget_certificate (20).
             * @hooked: ohmylms_widget_course_meta (25).
             * @hooked: ohmylms_widget_course_leaderboard (30).
             * @hooked: ohmylms_widget_course_author (35).
             * @hooked: ohmylms_widget_course_taxonomy (40).
             * @hooked: ohmylms_widget_course_drop (45).
             */
            do_action( 'ohmylms_course_sidebar_widget' );
        ?>
    </aside>
</div>
