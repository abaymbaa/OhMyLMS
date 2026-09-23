<?php
/**
 * The template for displaying single course sidebar's course meta
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/course-meta.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


if( creator_lms_has_sidebar_widget_course_meta() ){ 
    ?>
    <!-- course meta widget -->
    <div class="creator-lms-sidebar-widget creator-lms-widget-course-meta">
        <ul class="creator-lms-course-meta">
            <?php 
                /**
                * Hook: creator_lms_course_sidebar_widget_meta.
                * 
                * Hooked: creator_lms_single_course_review (5).
                * Hooked: creator_lms_single_course_level (10).
                * Hooked: creator_lms_single_course_student_count (15).
                * Hooked: creator_lms_single_course_duration (20).
                * Hooked: creator_lms_single_course_capacity (25).
                * Hooked: creator_lms_single_course_lesson_count (30).
                * Hooked: creator_lms_single_course_additional_resource (35).
                */
                do_action( 'creator_lms_course_sidebar_widget_meta' );
            ?>
        </ul>

    </div>
    <!-- /.sidebar single widget -->

<?php } ?>
