<?php
/**
 * The template for displaying single course header
 *
 * This template can be overridden by copying it to yourtheme/single-course/header.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$single_course_layout = get_option('ohmylms_single_course_page_layout','layout_1');

?>
<div class="ohmylms-course-header">
	<?php 
		if( 'layout_2' === $single_course_layout ){
			ohmylms_course_feature_image_and_video();
		}
	?>

	<h1 class="ohmylms-course-title">
		<?php echo esc_html( $course->get_name() ); ?>
	</h1>

	<?php if( ohmylms_has_header_course_meta()){ ?>
		<ul class="ohmylms-course-meta">
			<?php
			/**
			 * Hook: ohmylms_single_course_meta.
			 * 
			 * Hooked: ohmylms_single_course_level (5).
			 * Hooked: ohmylms_single_course_review (10).
			 * Hooked: ohmylms_single_course_student_count (15).
			 * Hooked: ohmylms_single_course_capacity (20).
			 *
			 */
			do_action('ohmylms_single_course_meta');
			?>
		</ul>
	<?php } ?>
	
	<?php 
		if( 'layout_2' === $single_course_layout ){
			ohmylms_course_author();
		}

		//----this pricebox show when window width < 992----
		ohmylms_widget_pricebox();
	?>

	<?php 
		ohmylms_continue_learn_button();
	?>
	
</div>
