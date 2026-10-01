<?php
/**
 * The template for displaying single course sidebar's leaderboard
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/leaderboard.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$current_student_id = get_current_user_id();
$student 			= new \OhMyLMS\Data\Student( $current_student_id );
if( !$student ){
    return;
}
$maybe_enrolled 	= $student->maybe_enrolled( $course->get_id() );
if( !$maybe_enrolled ){
    return;
}

if( class_exists( '\OhMyLMS\Engagement\Leaderboard' ) && !\OhMyLMS\Engagement\Leaderboard::maybe_enable() ) {
    return;
}


$leaderboard_disabled = get_post_meta( $course->get_id(), '_leaderboard_disabled', true );
if ( 'yes' === $leaderboard_disabled ) {
    return false;  
}

$students = $course->get_students();
$students = apply_filters( 'ohmylms_leaderboard_students', $students, $course->get_id() );
if( empty($students) || !is_array($students) ){
    return;
}
?>

<!-- course leaderboard widget -->
<div class="ohmylms-sidebar-widget ohmylms-widget-leaderboard">
    <h3 class="sidebar-widget-title">
        <?php echo __( 'Leaderboard', 'ohmylms' ); ?>
    </h3>

    <div class="ohmylms-leaderboard-wrapper">
        <?php foreach( $students as $leader ): ?>
            <div class="ohmylms-leaderboard position-success">
                <div class="ohmylms-leaderboard-content">
                    <figure>
                        <img src="<?php echo $leader['profile_image']; ?>" alt="student avater">
                    </figure>
                    <p class="student-name">
                        <?php echo $leader['name']; ?>
                        <!-- <span class="score">Score:  <?php echo $leader['completion_rate']; ?>%</span> -->
                    </p>
                </div>

                <span class="ohmylms-leaderboard-position">
                    <?php echo $leader['position_in_text']; ?>
                </span>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<!-- /.sidebar single widget -->
