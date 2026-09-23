<?php
/**
 * Template for displaying dashboard of student profile
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/profile/tab/progress-course.php
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \OMLMS\Data\Student $student
 * @global \OMLMS\Data\Course $course
 */

defined( 'ABSPATH' ) || exit();
$get_courses = $student->get_progress_course();
$no_course_found = false;
?>

<?php if( !empty( $get_courses ) ) { ?>
	<div class="creator-lms-dashboard-courses">
		<?php foreach ( $get_courses as $course ):
			
			?>
			<?php
				if ( $student->is_course_in_progress( $course->get_id() ) && $student->get_course_completed_points($course->get_id()) > 0 ): ?>
				<?php 
				$no_course_found = true;
				omlms_get_template('profile/loop/course.php',
					array(
						'student' => $student,
						'course' => $course
					)
				); ?>
			<?php endif; ?>
		<?php endforeach; ?>
		<?php if( $no_course_found == false ): ?>
			<div class="no-course-data">
				<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
				<p>
					<?php echo __( 'No In-Progress Courses.', 'ohmylms' ); ?>
				</p>
			</div>
		<?php endif; ?>
	</div>
<?php }else { ?>
	<div class="no-course-data">
		<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
		<p>
			<?php echo __( 'No In-Progress Courses.', 'ohmylms' ); ?>
		</p>
	</div>
<?php } ?>
