<?php
/**
 * Template for displaying dashboard content of student profile
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/profile/dashboard-content.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 * @global \OhMyLMS\Data\Student $student
 * @global \OhMyLMS\Data\Course $course
 */

defined( 'ABSPATH' ) || exit();
$get_courses = $student->get_enrolled_courses();
$no_of_inprogress = 0;
foreach ( $get_courses as $course ){
	if ( $student->is_course_in_progress( $course->get_id() ) && $student->get_course_completed_points($course->get_id()) > 0 ) {
		$no_of_inprogress++;
	}
}

$in_progress_courses = $student->get_progress_course();
?>
<?php ohmylms_get_template( 'global/ohmylms-celebration.php' ); ?>
<div class="ohmylms-course-statistics-card">
	<div class="ohmylms-statistics-single-card enrolled-courses">
		<div class="stat-content">
			<p class="stat-number"><?php echo $student->get_enrolled_course_count(); ?></p>

			<span class="stat-text">
				<?php echo __( 'Enrolled Courses', 'ohmylms' ); ?>
			</span>
		</div>

		<span class="icon">
			<?php include(OHMYLMS_DIR . '/assets/images/icon/card-document-image.php'); ?>
       </span>
	</div>

	<div class="ohmylms-statistics-single-card in-progress-courses">
		<div class="stat-content">
			<p class="stat-number"><?php echo $no_of_inprogress; ?></p>

			<span class="stat-text">
				<?php echo __( 'In-Progress Courses', 'ohmylms' ); ?>
			</span>
		</div>

		<span class="icon">
			<?php include(OHMYLMS_DIR . '/assets/images/icon/card-in-progress-image.php'); ?>
		</span>
	</div>

	<div class="ohmylms-statistics-single-card completed-courses">
		<div class="stat-content">
			<p class="stat-number">
				<?php echo $student->get_completed_course_count(); ?>
			</p>

			<span class="stat-text">
				<?php echo __( 'Completed Courses', 'ohmylms' ); ?>
			</span>
		</div>

		<span class="icon">
			<?php include(OHMYLMS_DIR . '/assets/images/icon/card-completed-image.php'); ?>
		</span>
	</div>
	<?php if(ohmylms_is_pro()): ?>
		<div class="ohmylms-statistics-single-card membership-courses">
			<div class="stat-content">
				<p class="stat-number">
					<?php echo count($student->get_enrolled_memberships()); ?>
				</p>

				<span class="stat-text">
					<?php echo __( 'Membership', 'ohmylms' ); ?>
				</span>
			</div>

			<span class="icon">
				<?php include(OHMYLMS_DIR . '/assets/images/icon/card-membership-image.php'); ?>
			</span>
		</div>
	<?php endif;?>
</div>


<h2 class="my-courses-title">
	<?php echo __( 'Continue Courses', 'ohmylms' ); ?>
</h2>

<?php if( !empty( $in_progress_courses ) ) { ?>
	<div class="ohmylms-dashboard-courses">
		<?php
		$is_empty = true;
		foreach ( $in_progress_courses as $course ):?>
			<?php if ( $student->is_course_in_progress( $course->get_id() ) ): 
				$is_empty = false;	
			?>
				<?php ohmylms_get_template('profile/loop/course.php',
					array(
						'student' => $student,
						'course' => $course
					)
				); ?>
			<?php endif; ?>
		<?php endforeach; ?>

		<?php
		if ( $is_empty ) {?>
			<div class="no-course-data no-course-section">
				<?php include(OHMYLMS_DIR. '/assets/images/icon/no-course-found-image.php');?>
				<p>
					<?php echo __( 'No In-Progress Courses.', 'ohmylms' );?>
				</p>
			</div>
		<?php } ?>
	</div>
<?php } else { ?>
	<div class="no-course-data no-course-section">
		<?php include(OHMYLMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
		<p>
			<?php echo __( 'No In-Progress Courses.', 'ohmylms' ); ?>
		</p>
	</div>
<?php } ?>


<!-- Students Membership -->
<?php
	$memeberships = $student->get_enrolled_memberships();
?>
<?php
	if(ohmylms_is_pro()):
?>
<h2 class="my-membership-title">
	<?php echo __( 'Membership', 'ohmylms' ); ?>
</h2>

<?php  if( !empty( $memeberships ) ) { ?>
	<div class="ohmylms-dashboard-membership">
		<?php 
			foreach( $memeberships as $memebership ) {
				ohmylms_get_template('profile/loop/membership-card.php', array(
					'memebership' => $memebership
				));
			}
		?>
	</div>
	
<?php }else { ?>
	<div class="no-course-data no-membership-data">
		<?php include(OHMYLMS_DIR . '/assets/images/icon/no-membership-found-image.php'); ?>
		<p>
			<?php echo __( 'No Membership Yet.', 'ohmylms' ); ?>
		</p>
	</div>
<?php } 
endif;
?>