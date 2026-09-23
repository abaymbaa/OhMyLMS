<?php
/**
 * The template for displaying single course header
 *
 * This template can be overridden by copying it to yourtheme/single-course/header.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');

?>
<div class="creator-lms-course-header">
	<?php 
		if( 'layout_2' === $single_course_layout ){
			creator_lms_course_feature_image_and_video();
		}
	?>

	<h1 class="creator-lms-course-title">
		<?php echo esc_html( $course->get_name() ); ?>
	</h1>

	<?php if( creator_lms_has_header_course_meta()){ ?>
		<ul class="creator-lms-course-meta">
			<?php
			/**
			 * Hook: creator_lms_single_course_meta.
			 * 
			 * Hooked: creator_lms_single_course_level (5).
			 * Hooked: creator_lms_single_course_review (10).
			 * Hooked: creator_lms_single_course_student_count (15).
			 * Hooked: creator_lms_single_course_capacity (20).
			 *
			 */
			do_action('creator_lms_single_course_meta');
			?>
		</ul>
	<?php } ?>
	
	<?php 
		if( 'layout_2' === $single_course_layout ){
			creator_lms_course_author();
		}

		//----this pricebox show when window width < 992----
		creator_lms_widget_pricebox();
	?>

	<?php 
		creator_lms_continue_learn_button();
	?>
	
</div>
