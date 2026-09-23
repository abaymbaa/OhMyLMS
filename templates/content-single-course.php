<?php
/**
 * The template for displaying course content in the single-course.php template
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/content-single-course.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');

/**
 * Hook: creator_lms_before_single_course.
 *
 */
do_action( 'creator_lms_before_single_course' );

if ( post_password_required() ) {
	echo '<div class="creator-lms-password-protected">';
		echo get_the_password_form();
	echo '</div>';

	return;
}
?>
<?php if (\OMLMS\Extensions\Layouts::render('course',get_the_ID(),get_the_ID(),['course'=>$course])) return; ?>
<div id="course-<?php the_ID(); ?>" class="creator-lms-single-course">

	<?php
	/**
	 * Hook: creator_lms_before_single_course_content.
	 *
	 */
	do_action( 'creator_lms_before_single_course_content' );
	?>

	<div class="creator-lms-enrolled-course">
		<?php
			if( 'layout_2' === $single_course_layout ) {
				omlms_get_template_part( 'single-course/layouts/course-single', 'layout-2' );

			}else if( 'layout_3' === $single_course_layout ) {
				omlms_get_template_part( 'single-course/layouts/course-single', 'layout-3' );
				
			}else {
				omlms_get_template_part( 'single-course/layouts/course-single', 'layout-1' );
			}
		?>
	</div>

	<?php
	/**
	 * Hook: creator_lms_after_single_course_content.
	 */
	do_action( 'creator_lms_after_single_course_content' );
	?>
</div>

<?php
/**
 * Hook: creator_lms_after_single_course.
 */
do_action( 'creator_lms_after_single_course' );
?>
