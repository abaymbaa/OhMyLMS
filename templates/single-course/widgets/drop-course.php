<?php
/**
 * The template for displaying single course sidebar's drop course button
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/drop-course.php.
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

<!-- course drop course widget -->
<div class="ohmylms-sidebar-widget ohmylms-widget-drop-course">
	<h3 class="sidebar-widget-title">
		<?php echo __( 'Drop This Course', 'ohmylms' ); ?>
	</h3>

	<p class="sidebar-widget-description">
		<?php echo __( 'You’ll lose access to all your progress and answers.', 'ohmylms' ); ?>
	</p>

	<div class="drop-course-wrapper">
		<button type="button" class="ohmylms-button ohmylms-drop-course-confirm">
			<?php echo __( 'Drop My Course Now', 'ohmylms' ); ?>
		</button>
	</div>
</div>

<div class="ohmylms-alert">
	<div class="ohmylms-alert-inner">
		<div class="ohmylms-alert-wrapper">
			<div class="ohmylms-alert-body">
				<div class="icon">
					<svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#F85656" fill-rule="evenodd" d="M12 0c6.626 0 12 5.374 12 12s-5.374 12-12 12S0 18.626 0 12 5.374 0 12 0zm-1.286 13.033V6.856c0-.708.578-1.285 1.286-1.285.708 0 1.286.583 1.286 1.285v6.177c0 .702-.578 1.285-1.286 1.285a1.288 1.288 0 01-1.286-1.285zm1.28 2.664a1.457 1.457 0 110 2.915 1.457 1.457 0 010-2.915z" clip-rule="evenodd"></path></svg>
				</div>

				<div class="title-area">
					<h4>
						<?php echo __( 'Are you sure you want to drop this course? ', 'ohmylms' ); ?>
					</h4>
					<p>
						<?php echo __( 'Once dropped, you won’t be able to access this course unless you enroll again.', 'ohmylms' ); ?>
					</p>
				</div>
			</div>

			<div class="ohmylms-alert-footer">
				<button type="button" class="ohmylms-button ohmylms-alert-cancel" aria-label="<?php echo __( 'Cancel', 'ohmylms' ); ?>">
					<?php echo __( 'Cancel', 'ohmylms' ); ?>
				</button>

				<button type="button" class="ohmylms-button ohmylms-danger ohmylms-drop-course" data-course-id="<?php echo $course->get_id(); ?>" data-user-id="<?php echo get_current_user_id(); ?>" aria-label="<?php echo __( 'Drop course', 'ohmylms' ); ?>">
					<?php echo __( 'Drop', 'ohmylms' ); ?>
				</button>
			</div>
		</div>
	</div>
</div>
<!-- /.sidebar single widget -->
