<?php
/**
 * The template for displaying single course sidebar's course meta
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/course-meta.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


if ( ohmylms_has_sidebar_widget_course_meta() ) {
	?>
	<!-- course meta widget -->
	<div class="ohmylms-sidebar-widget ohmylms-widget-course-meta">
		<ul class="ohmylms-course-meta">
			<?php
				/**
				 * Hook: ohmylms_course_sidebar_widget_meta.
				 *
				 * Hooked: ohmylms_single_course_review (5).
				 * Hooked: ohmylms_single_course_level (10).
				 * Hooked: ohmylms_single_course_student_count (15).
				 * Hooked: ohmylms_single_course_duration (20).
				 * Hooked: ohmylms_single_course_capacity (25).
				 * Hooked: ohmylms_single_course_lesson_count (30).
				 * Hooked: ohmylms_single_course_additional_resource (35).
				 */
				do_action( 'ohmylms_course_sidebar_widget_meta' );
			?>
		</ul>

	</div>
	<!-- /.sidebar single widget -->

<?php } ?>
