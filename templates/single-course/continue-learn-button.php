<?php
/**
 * The template for displaying continue learning button
 *
 * This template can be overridden by copying it to yourtheme/single-course/continue-learn-button.php
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$current_student_id = get_current_user_id();
$student            = new \OhMyLMS\Data\Student( $current_student_id );

if ( $student ) {
	$maybe_enrolled = $student->maybe_enrolled( $course->get_id() );
	if ( $maybe_enrolled ) {
		$course_resume_url = $student->get_course_resume_url( $course->get_id() );
		?>
		<div class="ohmylms-btn-area">
			<a href="<?php echo esc_url( $course_resume_url ); ?>" class="ohmylms-button">
				<?php echo __( 'Continue lesson', 'ohmylms' ); ?>
			</a>
		</div>
		<?php
	}
}
?>
