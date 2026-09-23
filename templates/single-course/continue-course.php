<?php

/**
 * The template for displaying single course sidebar's pricebox
 *
 * This template can be overridden by copying it to yourtheme/single-course/continue-course.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $course;
$student 			= new \OMLMS\Data\Student( get_current_user_id() );
$course_resume_url = $student->get_course_resume_url( $course->get_id() );
?>

<a href="<?php echo esc_url($course_resume_url);?>" class="creator-lms-button continue-course">
	<?php echo __('Continue Course','ohmylms'); ?>
</a>
