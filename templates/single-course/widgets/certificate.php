<?php
/**
 * The template for displaying single course sidebar's certificate
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/certificate.php.
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

$certificate = $course->get_certificate();
if( !$certificate ){
    return;
}

if( $student->get_over_all_completion_rate($course->get_id()) == 100 ){
    return;
}

?>

<!-- certificate widget -->
<div class="creator-lms-sidebar-widget with-gray-color creator-lms-widget-certificate">
    <h3 class="sidebar-widget-title"><?php echo __( 'Certificate', 'ohmylms' ); ?></h3>
    <p class="sidebar-widget-description">
        <?php echo __( 'Score 100% of total points to earn your Course Certificate.', 'ohmylms' ); ?>
    </p>

    <div class="certificate-box">
        <span class="lock-icon">
            <?php
            include(CREATOR_LMS_DIR . '/assets/images/icon/certificate-lock-icon.php');
            ?>
        </span>

        <h4 class="certificate-title">
            <?php echo __( 'Earn your course certificate', 'ohmylms' ); ?>
        </h4>

        <svg class="certificate-placeholder-line" width="200" height="26" fill="none" viewBox="0 0 200 26" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="8" fill="#EAEDF4" rx="4"/><rect width="200" height="8" y="18" fill="#EAEDF4" rx="4"/></svg>

        <ul class="certificate-logo">
            <li class="singneture">
                <?php
                include(CREATOR_LMS_DIR . '/assets/images/icon/certificate-signature.php');
                ?>
            </li>

            <li class="creator-lms-logo">
                <?php
                include(CREATOR_LMS_DIR . '/assets/images/icon/certificate-creator-lms-logo.php');
                ?>
            </li>

            <li class="barcode-logo">
                <?php
                include(CREATOR_LMS_DIR . '/assets/images/icon/certificate-barcode-icon.php');
                ?>
            </li>
        </ul>
    </div>
</div>
<!-- /.sidebar single widget -->
