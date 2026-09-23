<?php
/**
 * The template for displaying single course sidebar's leaderboard
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/leaderboard-layout3.php.
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
$students = apply_filters( 'creator_lms_leaderboard_students', $students, $course->get_id() );
if( empty($students) || !is_array($students) ){
    return;
}
if( class_exists( '\OMLMS\Engagement\Leaderboard' ) && !\OMLMS\Engagement\Leaderboard::maybe_enable() ) {
    return;
}

$current_user = wp_get_current_user();
$current_user_name = $current_user->display_name;

$leaderboard_disabled = get_post_meta( $course->get_id(), '_leaderboard_disabled', true );
if ( 'yes' === $leaderboard_disabled ) {
    return false;  
}

?>

<!-- course leaderboard widget -->
<div class="creator-lms-sidebar-widget creator-lms-widget-leaderboard-v2">
    <h3 class="sidebar-widget-title">
        <?php echo __( 'Leaderboard', 'ohmylms' ); ?>
        <span class="your-rank">
            <?php
                $my_rank = null;
                foreach( $students as $leader ){
                    if ( $current_user_name == $leader['name'] ) {
                        $my_rank = $leader['position_in_text'];
                    }
                }
                printf(
                    __( 'You are doing great! <strong>Rank %2s</strong>', 'ohmylms' ),
                    $my_rank
                );
            ?>
        </span>
    </h3>

    <div class="creator-lms-leaderboard-wrapper">
        <?php foreach( $students as $leader ): 
            if ( $current_user_name == $leader['name'] ) {
                $my_rank = $leader['position_in_text'];
            }
            ?>
            <div class="creator-lms-single-leaderboard <?php echo $current_user_name == $leader['name'] ? 'its-me': '' ;?>">
                <div class="creator-lms-leaderboard-content">
                    <figure>
                        <img src="<?php echo $leader['profile_image']; ?>" alt="student avater">
                    </figure>

                    <p class="student-name">
                        <?php 
                            echo $leader['name']; 
                            echo $current_user_name == $leader['name'] ? '(you)': '' ; 
                        ?>
                        <!-- <span class="score">Score:  <?php echo $leader['completion_rate']; ?>%</span> -->
                    </p>
                </div>

                <span class="creator-lms-leaderboard-position">
                    <?php 
                        if ( $leader['position_in_text'] === '1st' ) {
                            echo '<img src="'.CREATOR_LMS_URL . '/assets/images/leaderboard-pos1.webp'.'" alt="position1 badge">';

                        } elseif ( $leader['position_in_text'] === '2nd' ) {
                            echo '<img src="'.CREATOR_LMS_URL . '/assets/images/leaderboard-pos2.webp'.'" alt="position2 badge">';

                        } elseif ( $leader['position_in_text'] === '3rd' ) {
                            echo '<img src="'.CREATOR_LMS_URL . '/assets/images/leaderboard-pos3.webp'.'" alt="position3 badge">';
                             
                        }else {
                            echo $leader['position_in_text'];
                        }
                    ?>
                </span>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<!-- /.sidebar single widget -->
