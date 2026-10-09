<?php
/**
 * The template for displaying single course sidebar's progressbar
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/progressbar.php.
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
if ( ! $student ) {
	return;
}
$maybe_enrolled = $student->maybe_enrolled( $course->get_id() );
if ( ! $maybe_enrolled ) {
	return;
}
?>

<!-- course progressbar widget -->
<div class="ohmylms-sidebar-widget with-gray-color ohmylms-widget-progressbar">
	<!-- <h3 class="sidebar-widget-title">Total Progress</h3> -->

	<div class="score-progressbar-box overall-progressbar">
		<div class="ohmylms-progressbar">
			<p class="progressbar-title">
				<span><?php echo esc_html( 'Total Progress', 'ohmylms' ); ?></span>
				<span><?php echo $student->get_over_all_completion_rate( $course->get_id() ); ?>%</span>
			</p>

			<span class="ohmylms-progressbar-outer">
				<span class="ohmylms-progressbar-inner" style="width: <?php echo $student->get_over_all_completion_rate( $course->get_id() ); ?>%;" ></span>
			</span>
		</div>
	</div>

	<?php if ( $course->get_quiz_count() ) : ?>
		<div class="score-progressbar-box quiz-progressbar">
			<div class="ohmylms-circle-progressbar">
				<?php
					$progressPercent = $student->get_quiz_completion_rate( $course->get_id() );
					echo ohmylms_circular_progressbar( 110, $progressPercent, 5, '#EAEDF4', '#5B65F5' );
				?>

				<span class="percent-text"><?php echo $progressPercent; ?>%</span>
				<p class="progressbar-title">
					<?php echo __( 'Quiz', 'ohmylms' ); ?>
				</p>
			</div>
		</div>
	<?php endif; ?>

	<?php if ( $course->get_assignment_count() ) : ?>
		<div class="score-progressbar-box assignment-progressbar">
			<div class="ohmylms-circle-progressbar asignment-progress">
				<?php
					$progressPercent = $student->get_assignment_completion_rate( $course->get_id() );
					echo ohmylms_circular_progressbar( 110, $progressPercent, 5, '#EAEDF4', '#FF811A' );
				?>
				<span class="percent-text"><?php echo $progressPercent; ?>%</span>
				<p class="progressbar-title">
					<?php echo __( 'Assignment', 'ohmylms' ); ?>
				</p>
			</div>
		</div>
	<?php endif; ?>
</div>
<!-- /.sidebar single widget -->
