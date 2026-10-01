<?php
/**
 * The template for displaying course layout-3 content in the course-single-layout-3.php template
 *
 * This template can be overridden by copying it to yourtheme/single-course/layouts/course-single-layout-3.php.
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
             * Hook: ohmylms_single_course_layout3_content.
             * 
             * @hooked: ohmylms_single_course_layout3_header (5)
             * @hooked: ohmylms_single_course_layout3_content (10)
             */
            do_action( 'ohmylms_single_course_content' );
        ?>
    </div>

    <aside class="ohmylms-sidebar">
        <?php
            /**
             * Hook: ohmylms_course_single_layout3_sidebar_widget.
             * 
             * @hooked: ohmylms_pricebox_and_course_meta (5)
             * @hooked: ohmylms_widget_course_membership (10)
             * @hooked: ohmylms_widget_certificate (15)
             * @hooked: ohmylms_widget_course_leaderboard_layout3 (20)
             * @hooked: ohmylms_widget_course_taxonomy (25)
             * @hooked: ohmylms_widget_course_drop (30)
             */
            do_action( 'ohmylms_course_sidebar_widget' );
        ?>
    </aside>
</div>
