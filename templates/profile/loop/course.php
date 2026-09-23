<?php
/**
 * Template for displaying dashboard of student profile
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/profile/name.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \OMLMS\Data\Student $student
 * @global \OMLMS\Data\Course $course
 */

defined( 'ABSPATH' ) || exit();
$class_completed = $student->is_course_completed( $course->get_id() ) ? 'creator-lms-course-completed' : '';
$certificate = $course->get_certificate();
$cerificate_id = $certificate ? $certificate->get_id() : '';
?>

<div class="creator-lms-dashboard-single-course <?php echo $class_completed ?>">
	<div class="course-info-wrapper">
		<figure>
			<img src="<?php echo esc_url( $course->get_thumbnail_url() ); ?>" alt="<?php echo esc_attr( $course->get_name() ); ?>" class="creator-lms-image">
		</figure>

		<div class="course-info">
			<a href="<?php echo esc_url( $course->get_permalink() ); ?>" class="creator-lms-course-title"><?php echo esc_html( $course->get_name() ); ?></a>

			<?php if(!$student->is_course_completed( $course->get_id() )){?>
				<div class="creator-lms-progressbar">
				<span class="creator-lms-progressbar-outer">
					<span class="creator-lms-progressbar-inner" style="width: <?php echo esc_attr( $student->get_course_progress_percentage($course->get_id()) ); ?>%;"></span>
				</span>

					<p class="progressbar-title">
						<?php
						if( $student->get_course_progress_percentage($course->get_id()) == 0 ){
							echo esc_html( $student->get_course_completed_points($course->get_id()). '/'. $student->get_course_total_points($course->get_id()) );
						}else{
							echo esc_html( $student->get_course_completed_points($course->get_id()) . '/' . $student->get_course_total_points($course->get_id()) . ' (' . $student->get_course_progress_percentage($course->get_id()) . '%)' );
						}
						?>
					</p>
					<?php if($student->get_course_time_remaining($course->get_id())):?>
					<!-- <p class="time-remaining">
						<?php //include(CREATOR_LMS_DIR . '/assets/images/icon/clock-icon.php'); ?>
						<?php //echo esc_html( $student->get_course_time_remaining($course->get_id()) ); ?>
					</p> -->
					<?php endif; ?>
				</div>
			<?php } ?>


			<?php if ( $student->is_course_completed( $course->get_id() ) ): ?>
				<span class="completed-date">
					<?php include(CREATOR_LMS_DIR . '/assets/images/icon/calendar-icon.php'); ?>
					Completed <?php echo date_i18n('F j, Y', strtotime($student->get_course_completed_date($course->get_id()))); ?>
				</span>
			<?php endif; ?>

		</div>
	</div>

	<div class="creator-lms-btn-area">
		<?php if ( $student->is_course_in_progress( $course->get_id() ) || $student->maybe_enrolled( $course->get_id() ) && !$student->is_course_completed( $course->get_id() ) ): ?>
			<?php if ( $student->get_course_completed_points($course->get_id()) > 0 ): ?>
				<a href="<?php echo esc_url( $student->get_course_resume_url($course->get_id()) ); ?>" class="creator-lms-button" aria-label="Resume course">
					Resume Course
				</a>
			<?php else: ?>
				<a href="<?php echo esc_url( $student->get_course_resume_url($course->get_id()) ); ?>" class="creator-lms-button" aria-label="Resume course">
					Start Course
				</a>
			<?php endif; ?>
		<?php endif; ?>

		<?php if ( $student->is_course_completed( $course->get_id() ) && $course->get_certificate()): ?>
			<a class="creator-lms-button creator-lms-download-certificate" aria-label="Download Certificate" data-course-id="<?php echo $course->get_id(); ?>" data-student-id="<?php echo $student->get_id();?>" data-certificate-id="<?php echo $cerificate_id;?>">
				<?php include(CREATOR_LMS_DIR . '/assets/images/icon/download-icon.php'); ?>
				Download Certificate
			</a>
		<?php endif; ?>

		

		<?php do_action( 'creator_lms_course_card_after_buttons', $course, $student ); ?>
	</div>
</div>
