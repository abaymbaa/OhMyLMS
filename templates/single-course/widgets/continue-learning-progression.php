<?php
/**
 * The template for displaying single course sidebar's pricebox
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/pricebox.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$current_student_id = get_current_user_id();
$student 			= new \OMLMS\Data\Student( $current_student_id );
if( !$student ){
    return;
}

$maybe_enrolled 	= $student->maybe_enrolled( $course->get_id() );
if( !$maybe_enrolled ){
    return;
}
$students = $course->get_students();

$page_features = get_option( 'creator_lms_single_course_page_features' );

?>

<!-- course progress and learn continue widget -->
<div class="creator-lms-widget-continue-learn">
    <?php 
        if ( in_array( 'progress_bar_with_enroll', $page_features ) ) {
			?>
            <div class="layout3-progressbar-box">
                <p class="progressbar-title">
                    <?php echo __('Total Progress','ohmylms'); ?>
                </p>

                <p class="progressbar-progress">
                    <span class="creator-lms-progressbar-outer">
                        <span class="creator-lms-progressbar-inner" style="width: <?php echo $student->get_over_all_completion_rate($course->get_id()); ?>%;" ></span>
                    </span>

                    <span class="progressbar-percentage">
                        <?php echo $student->get_over_all_completion_rate($course->get_id()); ?>% 
                        <?php echo __('complete','ohmylms'); ?>
                    </span>
                </p>
            </div>
            <?php
		}
    ?>
    

    <?php 
		creator_lms_continue_learn_button();
	?>
</div>
<!-- /.course progress and learn continue widget -->
