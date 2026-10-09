<?php
/**
 * The template for displaying single course header
 *
 * This template can be overridden by copying it to yourtheme/single-course/layout3-header.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$single_course_layout = get_option( 'ohmylms_single_course_page_layout', 'layout_1' );
?>

<div class="ohmylms-course-header">

	<h1 class="ohmylms-course-title">
		<?php echo esc_html( $course->get_name() ); ?>
	</h1>

	<?php if ( ohmylms_has_header_course_meta() ) { ?>
		<ul class="ohmylms-course-meta">
			<?php
			/**
			 * Hook: ohmylms_single_course_layout3_header_meta.
			 *
			 * Hooked: ohmylms_single_course_review (5).
			 * Hooked: ohmylms_single_course_level (10).
			 * Hooked: ohmylms_single_course_duration (15).
			 * Hooked: ohmylms_single_course_student_count (20).
			 * Hooked: ohmylms_single_course_capacity (25).
			 */
			do_action( 'ohmylms_single_course_layout3_header_meta' );
			?>
		</ul>
	<?php } ?>
	
	<div class="ohmylms-course-author">
		<?php
		if ( 'layout_3' === $single_course_layout ) {
			ohmylms_course_author();
		}

			ohmylms_loop_course_update( get_the_ID() )
		?>
	</div>

	<?php
	if ( 'layout_3' === $single_course_layout ) {
		ohmylms_course_feature_image_and_video();
	}
	?>
	
</div>
