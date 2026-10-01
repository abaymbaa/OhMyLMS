<?php
/**
 * The template for displaying single course assignments
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/layout3-assignments.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

if(!$course){
    return;
}

$current_student_id = get_current_user_id();
$student 			= new \OhMyLMS\Data\Student( $current_student_id );
$maybe_enrolled = $student->maybe_enrolled( $course->get_id() );
$single_course_layout = get_option('ohmylms_single_course_page_layout','layout_1');

if(!$student){
    return;
}

if( !$maybe_enrolled ){
    return;
}

$all_assignment_attempts = $student->get_all_assignment_attempts( $course->get_id());

?>

<div class="layout3-content-box layout3-assignments">
    <h2 class="content-box-title">
        <?php
            echo apply_filters( 'ohmylms_course_assignment_title', __( 'Assignments', 'ohmylms' ) ); 
        ?>

        <?php if( 0 < count($all_assignment_attempts) ){ ?>
            <span class="small-title">
                <?php
                    printf(
                        _n('%d Assignment', '%d Assignments', count($all_assignment_attempts), 'ohmylms'),
                        count($all_assignment_attempts)
                    );
                ?>
            </span>
        <?php } ?>
    </h2>

    <?php
    if( !empty($all_assignment_attempts) ){
        ?>
        <div class="ohmylms-layout3-assignments">
            <?php
                foreach($all_assignment_attempts as $key=>$assignment_attempt){
                    if( !empty($assignment_attempt['assignment']) ){
                        $assignment = $assignment_attempt['assignment'];
                        $submissions = !empty($assignment_attempt['submissions']) ? $assignment_attempt['submissions'] : array();
                        $score = isset($submissions[0]['score'])? (int) $submissions[0]['score'] : 0;
                        $title = $assignment->get_name();
                        $total_points = $assignment->get_total_points();
                        $achieved_score_text = 'Score: '.$score.'/'.$total_points;
                        $class_status = isset($submissions[0]['status']) && 'submitted' === $submissions[0]['status']? 'pending' : 'approved';
                        $status = isset($submissions[0]['status']) && 'submitted' === $submissions[0]['status']? 'Pending' : 'Approved';
                        ?>
                        <div class="ohmylms-layout3-single-assignment">
                            <div class="ohmylms-layout3-single-assignment-title">
                                <span class="assignment-title-text">
                                    <svg width="33" height="33" fill="none" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg"><rect width="33" height="33" fill="#F4F5F7" rx="8"/><path fill="#6E42D3" d="M17.225 23.163h-6.206c.255-.427.4-.96.4-1.463V9.752c0-1.055.831-1.915 1.852-1.915h8.36c1.021 0 1.852.86 1.852 1.915v4.396c0 .37.29.669.646.669.357 0 .646-.3.646-.668V9.752c0-1.793-1.41-3.252-3.143-3.252H13.27c-1.734 0-3.143 1.46-3.143 3.252v6.695h-.984C7.41 16.447 6 17.907 6 19.7v1.997c0 1.534 1.2 2.783 2.684 2.797.008 0 .015.005.023.005h8.518c.356 0 .646-.3.646-.668 0-.37-.29-.67-.646-.67zm-9.933-1.465V19.7c0-1.058.83-1.917 1.852-1.917h.984v3.9l-.002.012c0 .809-.636 1.466-1.42 1.466-.78-.002-1.414-.657-1.414-1.464z"/><path fill="#6E42D3" d="M20.959 11.843H13.95a.657.657 0 00-.646.668c0 .37.289.668.646.668h7.008a.658.658 0 00.646-.668.658.658 0 00-.646-.668zm0 2.988H13.95c-.357 0-.646.3-.646.668 0 .37.289.669.646.669h7.008c.356 0 .646-.3.646-.669a.658.658 0 00-.646-.668zm-3.504 2.989H13.95a.657.657 0 00-.646.668c0 .369.289.668.646.668h3.504c.356 0 .646-.3.646-.668 0-.37-.29-.669-.646-.669zm9.348-1.385a1.911 1.911 0 00-2.764 0l-4.421 4.574c-.164.17-.27.385-.309.62l-.242 1.484c-.06.367.056.743.31 1.006a1.094 1.094 0 00.972.321l1.433-.25c.23-.04.438-.151.602-.321l4.42-4.574a2.074 2.074 0 000-2.86zm-5.291 6.446l-1.13.197.192-1.167 3.023-3.128.938.971-3.023 3.127zm4.378-4.53l-.443.458-.938-.97.443-.459a.647.647 0 01.938 0 .705.705 0 010 .97z"/></svg>

                                    <span>
                                        <?php echo $title; ?>
                                    </span>
                                </span>

                                <?php if ( 'approved' === $class_status ) {?>
                                    <span class="score"><?php echo $achieved_score_text; ?></span>
                                <?php }?>

                                <span class="status <?php echo esc_attr( $class_status ); ?>">
                                    <?php echo $status;?>
                                </span>
                            </div>

                            <?php
                                if( 
                                    is_array($assignment_attempt['submissions']) && 
                                    !empty($assignment_attempt['submissions'] ) 
                                ){
                                    ?>
                                        <div class="ohmylms-table">
                                            <?php
                                                $submission_loop = 1;
                                                foreach($assignment_attempt['submissions'] as $submission_key=>$submission){
                                                    $status = 'submitted' === $submission['status'] ? 'pending' : 'approved';
                                                    $date = date("F d, Y", strtotime($submission['start_date']));
                                                    ?>
                                                        <div class="ohmylms-tr">
                                                            <div class="ohmylms-td-handle" role="button">
                                                                <svg width="10" height="6" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg"><path stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l4 4 4-4"></path></svg>
                                                            </div>

                                                            <div class="ohmylms-td title">
                                                                <?php 
                                                                    echo $submission_loop.''.ohmylms_get_number_suffix($submission_loop).''.__(' Submission', 'ohmylms') ; 
                                                                ?>
                                                            </div>

                                                            <div class="ohmylms-td submission-date">
                                                                <?php echo $date; ?>
                                                            </div>

                                                            <div class="ohmylms-td action">
                                                                <a href="<?php echo esc_url(add_query_arg(array('course-id'=> $course->get_id(),'single-assignement-id' => $assignment->get_id(),'attempt-id' => (int)($key) + 1,'submission-id' => (int)$submission_key + 1), $course->get_permalink())); ?>" title="View details">
                                                                    <?php include(OHMYLMS_DIR . '/assets/images/icon/eye-icon.php'); ?>
                                                                </a>
                                                            </div>

                                                            <div class="ohmylms-mobile-td">
                                                                <div class="ohmylms-td submission-date" data-title="Date:">
                                                                    <?php echo $date; ?>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    <?php
                                                    $submission_loop++;
                                                }
                                            ?>

                                            <?php if ( !empty($assignment_attempt['submissions']) && count($assignment_attempt['submissions']) > 2 ) { ?>
                                                <div class="layout3-content-readmore">
                                                    <button type="button" class="layout3-content-readmore-button">
                                                        <span class="button-text">
                                                            <?php echo __( 'Show More', 'ohmylms' ); ?>
                                                        </span>

                                                        <span class="icon">
                                                            <svg width="12" height="6" fill="none" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path fill="#6F767E" fill-rule="evenodd" d="M.234.217a.845.845 0 011.132 0L6 4.516 10.634.217a.845.845 0 011.132 0c.312.29.312.76 0 1.05L7.13 5.565a1.69 1.69 0 01-2.262 0L.234 1.267a.705.705 0 010-1.05z" clip-rule="evenodd"/></svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            <?php } ?>
                                        </div>
                                    <?php
                                }
                            ?>
                        </div>

                        <?php                    
                    }
                }
            ?>

        </div>
        <?php
    }else {
        ?>
            <div class="no-course-data">
                <?php include(OHMYLMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
                <p>
                    <?php echo __( 'No Assignment Submission Found.', 'ohmylms' ); ?>
                </p>
            </div>
        <?php
    }
    ?>
</div>