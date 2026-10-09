<?php
/**
 * The template for displaying course content in the single-course.php template
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/content-single-course.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$single_course_layout = get_option( 'ohmylms_single_course_page_layout', 'layout_1' );

/**
 * Hook: ohmylms_before_single_course.
 */
do_action( 'ohmylms_before_single_course' );

if ( post_password_required() ) {
	echo '<div class="ohmylms-password-protected">';
		echo get_the_password_form();
	echo '</div>';

	return;
}
?>
<?php
if ( \OhMyLMS\Extensions\Layouts::render( 'course', get_the_ID(), get_the_ID(), array( 'course' => $course ) ) ) {
	return;}
?>
<div id="course-<?php the_ID(); ?>" class="ohmylms-single-course">

	<?php
	/**
	 * Hook: ohmylms_before_single_course_content.
	 */
	do_action( 'ohmylms_before_single_course_content' );
	?>

	<div class="ohmylms-enrolled-course">
		<?php
		if ( 'layout_2' === $single_course_layout ) {
			ohmylms_get_template_part( 'single-course/layouts/course-single', 'layout-2' );

		} elseif ( 'layout_3' === $single_course_layout ) {
			ohmylms_get_template_part( 'single-course/layouts/course-single', 'layout-3' );

		} else {
			ohmylms_get_template_part( 'single-course/layouts/course-single', 'layout-1' );
		}
		?>
	</div>

	<?php
	/**
	 * Hook: ohmylms_after_single_course_content.
	 */
	do_action( 'ohmylms_after_single_course_content' );
	?>
</div>

<?php
/**
 * Hook: ohmylms_after_single_course.
 */
do_action( 'ohmylms_after_single_course' );
?>
