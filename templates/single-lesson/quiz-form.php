
<?php
/**
 * The template for displaying lesson's quiz
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-lesson/content-quiz.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if (\OMLMS\Extensions\Layouts::render('quiz', get_the_ID(), creator_lms_get_course_by_content_id(get_the_ID()))) return;

$quiz_start = isset($_GET['quiz']) && $_GET['quiz'] == 'start' ? true : false;
$quiz 		= omlms_get_quiz(get_the_ID());
$questions = array_values(array_filter($quiz->get_questions(), static function($q){return \OMLMS\Extensions\Registry::get('question',$q['settings']['type'] ?? '');}));
$attempt 	= $quiz->get_quiz_attempt(get_current_user_id());
$timer = $quiz->get_timer();
if ($timer > 0 && !empty($attempt['start_date'])) $timer = max(0, ($timer * 60 - (current_time('timestamp') - strtotime($attempt['start_date']))) / 60);
$is_timer 	= $quiz->get_timer() > 0 ? true : false;

$settings = $quiz->get_settings();
$quiz_layout = is_array($settings) && isset($settings['layout']) ? $settings['layout'] : 'one_question_per_page';
$layout_class = '';
$questions_per_group = '';
$totalGroups = '';
$supported_question_count = 0;
foreach ($questions as $index => $question){
    $supported_question_types = array_keys(\OMLMS\Extensions\Registry::all('question'));
    $supported_question_types = apply_filters('creator_lms_supported_question_types', $supported_question_types);
    if( in_array( $question['settings']['type'], $supported_question_types ) ){
        $supported_question_count++;
    }
}

if('all_questions_in_one_page' === $quiz_layout){
    $layout_class = 'creator-lms-all-questions';

}else if ('number_of_questions_per_page' === $quiz_layout){
    $layout_class = 'creator-lms-grouped-questions';
    $questions_per_group = max(1, (int)($settings['question_in_one_page'] ?? 1)); // Get the number of questions per group
    $totalGroups = ceil($supported_question_count / $questions_per_group); // Calculate the total number of groups

}else {
    $layout_class = 'creator-lms-one-question-per-page';
}

if( isset( $settings['randomize_questions'] ) && $settings['randomize_questions'] && is_array( $questions ) ) {
    shuffle($questions);
}


?>

<input type="hidden" class="creator_lms_quiz_id" value="<?php echo get_the_ID(); ?>">
<input type="hidden" class="quiz_attempt_id" value="<?php echo $attempt['id']; ?>">

<section class="creator-lms-quiz <?php echo $layout_class; ?>">
    <div class="creator-lms-quiz-header">
        <div class="creator-lms-container">
            <div class="quiz-header-wrapper">
                <div class="quiz-header-left">
                    <p class="header-title">
                        <?php echo sanitize_text_field($quiz->get_name()); ?>
                    </p>
                </div>

                <div class="quiz-header-right">
                    <a href="#" class="quiz-page-close">
                        <svg width="14" height="14" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1L1 13M1 1l12 12"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="creator-lms-quiz-alert" >
        <div class="quiz-alert-inner">
            <div class="quiz-alert-wrapper">
                <div class="quiz-alert-body">
                    <div class="icon">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC048" d="M12 0A11.996 11.996 0 000 12a11.996 11.996 0 0012 12 11.995 11.995 0 0012-12A11.994 11.994 0 0012 0zm0 20.643a1.813 1.813 0 11-.008-3.626A1.813 1.813 0 0112 20.643zm2.194-14.937l-.684 9.231a.252.252 0 01-.251.235H10.74a.252.252 0 01-.252-.235l-.683-9.23a2.199 2.199 0 114.388 0z"/></svg>
                    </div>

                    <div class="title-area">
                        <h4>
                            <?php echo __('Sure to exit the quiz?', 'ohmylms'); ?>
                        </h4>
                        <p>
                            <?php echo __('Your progress will be lost if you leave the quiz.', 'ohmylms'); ?>
                        </p>
                    </div>
                </div>

                <div class="quiz-alert-footer">
                    <button class="creator-lms-button quiz-alert-cancel" tabindex="0">
                        <?php echo __('Cancel', 'ohmylms'); ?>
                    </button>

                    <form action="" method="post">
                        <input type="hidden" name="action" value="creator-lms-quiz-exit-submission">
                        <input type="hidden" name="creator_lms_quiz_id" value="<?php echo get_the_ID(); ?>">
                        <input type="hidden" name="quiz_attempt_id" value="<?php echo $attempt['id']; ?>">
                        <?php wp_nonce_field( 'save_quiz_exit_submit', 'save-quiz-exit-submit-nonce' ); ?>

                        <button type="submit" class="creator-lms-button quiz-alert-ok" tabindex="0">
                            <?php echo __('Exit', 'ohmylms'); ?>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <?php if ($is_timer){ ?>
        <div class="creator-lms-quiz-timeup-text">
            <?php
                echo sprintf(
                    __('Your quiz submission time has expired. <a href="%s">Please try again.</a>', 'ohmylms'),
                    get_the_permalink()
                );
            ?>
        </div>

        <div class="creator-lms-quiz-timer">
            <div class="creator-lms-container">
                <div class="creator-lms-timer-wrapper">
                    <div class="creator-lms-timer">
                        <span class="clock">
                            <?php include(CREATOR_LMS_DIR . '/assets/images/icon/clock-icon.php'); ?>
                            <span class="timer-display" data-timer="<?php echo $timer ?>">0.00</span>
                        </span>

                        <span class="progress-outer">
                            <span class="progress-inner" style="width: 100%;"></span>
                        </span>
                    </div>

                    <!-- <div class="point">1 Point</div> -->
                </div>
            </div>
        </div>
    <?php } ?>

    <!-- <div class="creator-lms-quiz-timer">
        <div class="creator-lms-container">
            <div class="creator-lms-quiz-result">
                use "failed" class with the "success-title" class if quiz is failed then remove this comment
                <p class="success-title">
                  <?php //echo __('You passed the quiz', 'ohmylms'); ?>
                </p>

                <div class="score-box">
                    <span class="percentage">
                        Score: <strong>50%</strong>
                    </span>
                    <span class="correct-answer">
                        Correct:
                        <strong>3/4</strong>
                    </span>
                </div>
            </div>
        </div>
    </div> -->

    <form action="" method="post">
        <div class="creator-lms-quiz-form">
			<input type="hidden" name="quiz_attempt_id" value="<?php echo $attempt['id']; ?>">
            <div class="creator-lms-container">
                <div class="creator-lms-quiz-form-wrapper">
                    <!-- add "wrong-answered" class with the "creator-lms-quiz-box" class if quiz is failed and then remove this comment -->

					<?php
					$count = 0;
					foreach ($questions as $index => $question){
                        $get_question = omlms_get_question($question['id']);
                        $supported_question_types = array_keys(\OMLMS\Extensions\Registry::all('question'));
                        $supported_question_types = apply_filters('creator_lms_supported_question_types', $supported_question_types);

                        if( !in_array( $question['settings']['type'], $supported_question_types ) ){
                            continue;
                        }

                        $count++;

                        // Check if layout grouped question and we're at the start of a new group
                        if ('number_of_questions_per_page' === $quiz_layout && $index % $questions_per_group === 0) {
                            // Close the previous group div if it's not the first group
                            if ($index > 0) {
                                echo "</div>";
                            }
                            // Start a new group div
                            $groupNumber = floor($index / $questions_per_group) + 1;
                            echo "<div class='creator-lms-question-group question-group-{$groupNumber} " . ($groupNumber == 1 ? 'active' : '') . "'>";
                        }
						?>

                        <div class="creator-lms-quiz-box question-<?php echo $count; ?> <?php echo ('one_question_per_page' === $quiz_layout && $count == 1) ? 'active' : ''; ?>">
							<div class="quiz-box-header">
								<span class="question-number">
									<?php echo sprintf(__('Question %d', 'ohmylms'), $count); ?>
								</span>
							</div>

							<div class="question-box">
								<p class="the-question question-type-<?php echo $question['settings']['type']; ?>">
									<?php echo $question['name'] ?>

									<?php if( !empty($question['settings']['required']) && $question['settings']['required']){ ?>
										<span class="required">*</span>
                                    <?php } ?>

                                    <input type="hidden" class="is-required" value= "<?php echo !empty($question['settings']['required']) ? $question['settings']['required'] : '' ?>" question-type="<?php echo $question['settings']['type']; ?>" />
								</p>

								<?php if(!empty($get_question->get_image_url())){?>
									<img src="<?php echo $get_question->get_image_url() ?>" alt="question image" class="question-image">
								<?php } ?>

								<?php
								$video = wp_get_attachment_url( $get_question->get_video_id() );
								if($video){
                                    ?>
                                    <video class="question-video" controls controlsList="nodownload nopictureinpicture">
                                        <source src="<?php echo $video; ?>" type="video/mp4">
                                    </video>
								<?php } ?>
 							</div>

							<?php

                            if( isset( $question['settings']['randomize']) && $question['settings']['randomize'] && is_array( $question['questions'] ) ){
                                shuffle($question['questions']);
                            }

                            \OMLMS\Extensions\QuestionTypes::render($question, $attempt);
                            ?>
                            <?php if (!empty($question['settings']['required'])) : ?>
                                <span class="required-question"><?php esc_html_e('The question must be answered','ohmylms'); ?></span>
                            <?php endif; ?>
						</div>

                        <?php
                        // Checked if layout grouped question and close the last group div after the last question
                        if ('number_of_questions_per_page' === $quiz_layout &&$index === $supported_question_count - 1) {
                            echo "</div>";
                        }
                    }
                    ?>

                </div>
            </div>
        </div>

        <div class="creator-lms-quiz-footer">
            <div class="creator-lms-container">
                <div class="creator-lms-footer-wrapper">
                    <div class="creator-lms-quiz-footer-left">
						<?php if(!empty(omlms_get_next_content_permalink(get_the_ID()))){ ?>
							<a href="<?php echo omlms_get_next_content_permalink(get_the_ID()) ?>" class="skiptop-next">
								<?php echo __('Skip to Next Lesson', 'ohmylms'); ?>
							</a>
						<?php } ?>
                    </div>

                    <div class="creator-lms-quiz-footer-right">
						<input type="hidden" name="action" value="creator-lms-quiz-submission">
						<input type="hidden" name="creator_lms_quiz_id" value="<?php echo get_the_ID(); ?>">
						<?php wp_nonce_field( 'save_quiz_submit', 'save-quiz-submit-nonce' ); ?>

                        <?php
                            if('all_questions_in_one_page' === $quiz_layout){
                                ?>
                                <button type="submit" class="creator-lms-button quiz-submit">
                                    <?php echo __('Submit ', 'ohmylms'); ?>
                                </button>
                                <?php

                            }else if ('number_of_questions_per_page' === $quiz_layout){
                                // ------start grouped questions------
                                $layout_class = 'creator-lms-grouped-questions';

                                if($totalGroups > 1) {
                                    ?>
                                    <button type="button" class="creator-lms-button creator-lms-previous-quiz-group outline" current-group="1" previous-group="" total-group="<?php echo $totalGroups; ?>" disabled >
                                        <?php echo __('Previous', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                }

                                if($totalGroups > 1) {
                                    ?>
                                    <button type="button" class="creator-lms-button creator-lms-next-quiz-group" current-group="1" next-group="2" total-group="<?php echo $totalGroups ?>">
                                        <?php echo __('Next', 'ohmylms'); ?>
                                    </button>

                                    <button type="submit" class="creator-lms-button quiz-submit" style="display: none">
                                        <?php echo __('Submit ', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                } else {
                                    ?>
                                    <button type="submit" class="creator-lms-button quiz-submit">
                                        <?php echo __('Submit ', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                }
                                //----end grouped questions-----

                            }else {
                                ?>
                                <button type="button" class="creator-lms-button creator-lms-previous-quiz outline" current-question="1" previous-question="" total-questions="<?php echo $count; ?>" disabled>
                                    <?php echo __('Previous', 'ohmylms'); ?>
                                </button>

                                <?php
                                if($count > 1) {
                                    ?>
                                    <button type="button" class="creator-lms-button creator-lms-next-quiz" current-question="1" next-question="2" total-questions="<?php echo $count; ?>">
                                        <?php echo __('Next', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                }

                                if($count > 1) {
                                    ?>
                                    <button type="submit" class="creator-lms-button quiz-submit" style="display: none">
                                        <?php echo __('Submit ', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                } else {
                                    ?>
                                    <button type="submit" class="creator-lms-button quiz-submit">
                                        <?php echo __('Submit ', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                }

                            }
                        ?>

                    </div>
                </div>
            </div>
        </div>
    </form>
</section>