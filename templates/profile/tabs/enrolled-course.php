<?php
/**
 * Template for displaying dashboard of student profile
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/profile/tab/enrolled-course.php
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \OMLMS\Data\Student $student
 * @global \OMLMS\Data\Course $course
 */

defined( 'ABSPATH' ) || exit();

$get_courses = $student->get_courses();
$enrolled_students = 0;
?>

<?php if( !empty( $get_courses ) ) { ?>
	<div class="creator-lms-dashboard-courses">
		<?php foreach ( $get_courses as $course ):
			?>
			<?php if ( $student->maybe_enrolled( $course->get_id() ) ): ?>
				<?php 
				$enrolled_students++;
				omlms_get_template('profile/loop/course.php',
					array(
						'student' => $student,
						'course' => $course
					)
				); ?>
			<?php endif; ?>
		<?php endforeach; ?>

		<?php if(!$enrolled_students) : ?>
			<div class="no-course-data">
				<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
				<p>
					<?php echo __( 'No Enrolled Courses.', 'ohmylms' ); ?>
				</p>
			</div>
		<?php endif; ?>
	</div>
<?php }else { ?>
	<div class="no-course-data">
		<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
		<p>
			<?php echo __( 'No Enrolled Courses.', 'ohmylms' ); ?>
		</p>
	</div>
<?php } ?>
