<?php
/**
 * The template for displaying single course level
 *
 * This template can be overridden by copying it to yourtheme/single-lesson/duration.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \OMLMS\Data\Student $student
 */

use OMLMS\Data\Student;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


$course_id = creator_lms_get_course_by_content_id( get_the_ID() );
$student = New Student(get_current_user_id());
$over_all_completion_rate = $student->get_over_all_completion_rate($course_id);
?>
<section class="creator-lms-lesson-progressbar">
    <div class="creator-lms-container">
        <div class="lesson-progressbar-wrapper">
            <div class="lesson-single-progressbar creator-lms-progressbar overall-progress">
                <p class="progressbar-title">
                    <span><?php echo esc_html('Overall progress','ohmylms')?></span>
                    <span><?php echo $over_all_completion_rate ?>%</span>
                </p>

                <span class="creator-lms-progressbar-outer">
                    <span class="creator-lms-progressbar-inner" style="width: <?php echo $over_all_completion_rate  ?>%;" ></span>
                </span>
            </div>

            <div class="lesson-single-progressbar creator-lms-progressbar quiz-progress">
                <?php $quizProgress = $student->get_quiz_completion_rate($course_id); ?>

                <p class="progressbar-title">
                    <span>Quiz</span>
                    <span>
                        <?php echo $quizProgress.'%';?>
                    </span>
                </p>

                <div class="creator-lms-circle-progressbar">
                    <?php
                        echo creator_lms_circular_progressbar(45, $quizProgress, 6, '#EAEDF4', '#5B65F5');
                    ?>
                </div>
            </div>

            <div class="lesson-single-progressbar creator-lms-progressbar assignment-progress">
                <?php $quizProgress = $student->get_assignment_completion_rate($course_id); ?>

                <p class="progressbar-title">
                    <span>Assignments</span>
                    <span>
                        <?php echo $quizProgress.'%';?>
                    </span>
                </p>

                <div class="creator-lms-circle-progressbar">
                    <?php
                        echo creator_lms_circular_progressbar(45, $quizProgress, 6, '#EAEDF4', '#FF811A');
                    ?>
                </div>
            </div>

        </div>
    </div>
</section>
