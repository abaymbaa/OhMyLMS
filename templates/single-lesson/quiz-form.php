
<?php
/**
 * The template for displaying lesson's quiz
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/single-lesson/content-quiz.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if (empty($ohmylms_player_preview) && \OhMyLMS\Extensions\Layouts::render('quiz', get_the_ID(), ohmylms_get_course_by_content_id(get_the_ID()))) return;

$quiz_start = isset($_GET['quiz']) && $_GET['quiz'] == 'start' ? true : false;
$quiz 		= ohmylms_get_quiz(get_the_ID());
$questions = array_values(array_filter($quiz->get_questions(), static function($q){return \OhMyLMS\Extensions\Registry::get('question',$q['settings']['type'] ?? '');}));
$attempt 	= $quiz->get_quiz_attempt(get_current_user_id());
$settings = $quiz->get_settings();
if (!empty($ohmylms_player_preview)) {
    $questions = $ohmylms_player_preview['questions'];
    $settings = $ohmylms_player_preview['settings'];
    $attempt = ['id' => 0];
}
// Versioned attempts render the frozen items issued at start, in their stored order.
$attempt_context = !empty($attempt['id']) && \OhMyLMS\Assessment\Schema::ready() ? \OhMyLMS\Assessment\AttemptItems::context($attempt['id']) : null;
if ($attempt_context) {
    $questions = \OhMyLMS\Assessment\AttemptItems::delivery($attempt['id']);
    $revision = \OhMyLMS\Assessment\RevisionPublisher::revision($attempt_context['revision_id']);
    $settings = array_merge(is_array($settings) ? $settings : [], $revision ? $revision['settings'] : []);
    $remaining_seconds = \OhMyLMS\Assessment\Deadlines::remaining($attempt_context);
    \OhMyLMS\Assessment\Delivery::require_script();
    $is_timer = $remaining_seconds !== null;
    $timer = $is_timer ? $remaining_seconds / 60 : 0;
} else {
    $timer = $quiz->get_timer();
    if ($timer > 0 && !empty($attempt['start_date'])) $timer = max(0, ($timer * 60 - (current_time('timestamp') - strtotime($attempt['start_date']))) / 60);
    $is_timer 	= $quiz->get_timer() > 0 ? true : false;
}

$quiz_layout = is_array($settings) && isset($settings['layout']) ? $settings['layout'] : 'one_question_per_page';
if (!in_array($quiz_layout, ['one_question_per_page', 'all_questions_in_one_page', 'number_of_questions_per_page'], true)) $quiz_layout = 'one_question_per_page';
$layout_class = '';
$questions_per_group = '';
$totalGroups = '';
$supported_question_count = 0;
$supported_question_types = apply_filters('ohmylms_supported_question_types', array_keys(\OhMyLMS\Extensions\Registry::all('question')));
foreach ($questions as $index => $question){
    $supported_question_types = array_keys(\OhMyLMS\Extensions\Registry::all('question'));
    $supported_question_types = apply_filters('ohmylms_supported_question_types', $supported_question_types);
    if( in_array( $question['settings']['type'], $supported_question_types ) ){
        $supported_question_count++;
    }
}

// Frozen exam papers may carry page breaks (sections that start a new page). With all
// questions on one page they split the paper into pages; with grouped pages they also
// start a new group. One question per page already breaks everywhere.
$page_starts = [];
$has_page_breaks = false;
foreach ($questions as $question) { if (!empty($question['page']) && $question['page'] > 1) { $has_page_breaks = true; } }
if ($has_page_breaks && 'all_questions_in_one_page' === $quiz_layout) {
    $quiz_layout = 'number_of_questions_per_page';
    $settings['question_in_one_page'] = PHP_INT_MAX;
}

if('all_questions_in_one_page' === $quiz_layout){
    $layout_class = 'ohmylms-all-questions';

}else if ('number_of_questions_per_page' === $quiz_layout){
    $layout_class = 'ohmylms-grouped-questions';
    $questions_per_group = max(1, (int)($settings['question_in_one_page'] ?? 1)); // Get the number of questions per group
    $ordinal = 0; $group_start = 0; $previous_page = null;
    foreach ($questions as $question) {
        if (!in_array($question['settings']['type'], apply_filters('ohmylms_supported_question_types', array_keys(\OhMyLMS\Extensions\Registry::all('question'))), true)) { continue; }
        $page = (int) ($question['page'] ?? 0);
        if ($ordinal === 0 || $ordinal - $group_start >= $questions_per_group || ($previous_page !== null && $page !== $previous_page)) {
            $page_starts[$ordinal] = count($page_starts) + 1;
            $group_start = $ordinal;
        }
        $previous_page = $page; $ordinal++;
    }
    $totalGroups = count($page_starts); // Calculate the total number of groups

}else {
    $layout_class = 'ohmylms-one-question-per-page';
}

if( ! $attempt_context && isset( $settings['randomize_questions'] ) && $settings['randomize_questions'] && is_array( $questions ) ) {
    shuffle($questions);
}

// Keep supported questions contiguous so grouped layouts and add-ons share the same page indices.
$questions = array_values(array_filter($questions, static function ($question) use ($supported_question_types) {
    return in_array($question['settings']['type'], $supported_question_types, true);
}));
$supported_question_count = count($questions);
if ($quiz_layout === 'number_of_questions_per_page') $totalGroups = count($page_starts);
ob_start();


?>

<input type="hidden" class="ohmylms_quiz_id" value="<?php echo get_the_ID(); ?>">
<input type="hidden" class="quiz_attempt_id" value="<?php echo $attempt['id']; ?>">

<section class="ohmylms-quiz <?php echo $layout_class; ?>"<?php if ($attempt_context) { ?> data-attempt-engine="versioned" data-autosave="<?php echo esc_url(rest_url('ohmylms/v1/attempts/' . (int) $attempt['id'] . '/responses')); ?>" data-deadline="<?php echo esc_attr($attempt_context['deadline_at'] ? gmdate('c', strtotime($attempt_context['deadline_at'] . ' UTC')) : ''); ?>"<?php } ?>>
    <div class="ohmylms-quiz-header">
        <div class="ohmylms-container">
            <div class="quiz-header-wrapper">
                <div class="quiz-header-left">
                    <p class="header-title">
                        <?php echo sanitize_text_field($quiz->get_name()); ?>
                    </p>
                    <?php if (!empty($ohmylms_player_preview)) { ?><small><?php esc_html_e('Preview of saved quiz · Responses are not recorded', 'ohmylms'); ?></small><?php } ?>
                </div>

                <div class="quiz-header-right">
                    <a href="#" class="quiz-page-close" aria-label="<?php esc_attr_e('Close quiz', 'ohmylms'); ?>">
                        <svg width="14" height="14" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1L1 13M1 1l12 12"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="ohmylms-quiz-alert" >
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
                    <button class="ohmylms-button quiz-alert-cancel" tabindex="0">
                        <?php echo __('Cancel', 'ohmylms'); ?>
                    </button>

                    <form action="" method="post">
                        <input type="hidden" name="action" value="<?php echo empty($ohmylms_player_preview) ? 'ohmylms-quiz-exit-submission' : 'ohmylms-quiz-preview-exit'; ?>">
                        <input type="hidden" name="ohmylms_quiz_id" value="<?php echo get_the_ID(); ?>">
                        <input type="hidden" name="quiz_attempt_id" value="<?php echo $attempt['id']; ?>">
                        <?php if (empty($ohmylms_player_preview)) { wp_nonce_field( 'save_quiz_exit_submit', 'save-quiz-exit-submit-nonce' ); } else { ?>
                            <input type="hidden" name="preview_session" value="<?php echo esc_attr($ohmylms_player_preview['session']); ?>">
                        <?php } ?>

                        <button type="submit" class="ohmylms-button quiz-alert-ok" tabindex="0">
                            <?php echo __('Exit', 'ohmylms'); ?>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <?php if (!empty($ohmylms_player_preview['result'])) { $preview_result = $ohmylms_player_preview['result']; ?>
        <div class="ohmylms-container" role="status">
            <div class="ohmylms-quiz-result">
                <h2><?php esc_html_e('Preview result', 'ohmylms'); ?></h2>
                <p><?php echo esc_html(sprintf(__('Score: %1$s / %2$s', 'ohmylms'), $preview_result['earned'], $preview_result['total'])); ?></p>
                <?php if ($preview_result['pending']) { ?><p><?php esc_html_e('Some answers require manual grading.', 'ohmylms'); ?></p><?php } ?>
                <?php foreach ($preview_result['errors'] as $error) { ?><p><?php echo esc_html($error); ?></p><?php } ?>
                <a class="ohmylms-button" href="<?php echo esc_url(\OhMyLMS\Assessment\PreviewPlayer::url(get_the_ID())); ?>"><?php esc_html_e('Try again', 'ohmylms'); ?></a>
            </div>
        </div>
    <?php } ?>
    <?php if (empty($ohmylms_player_preview['result'])) { ?>
    <?php if ($is_timer){ ?>
        <div class="ohmylms-quiz-timeup-text">
            <?php
                echo sprintf(
                    __('Your quiz submission time has expired. <a href="%s">Please try again.</a>', 'ohmylms'),
                    get_the_permalink()
                );
            ?>
        </div>

        <div class="ohmylms-quiz-timer">
            <div class="ohmylms-container">
                <div class="ohmylms-timer-wrapper">
                    <div class="ohmylms-timer">
                        <span class="clock">
                            <?php include(OHMYLMS_DIR . '/assets/images/icon/clock-icon.php'); ?>
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

    <!-- <div class="ohmylms-quiz-timer">
        <div class="ohmylms-container">
            <div class="ohmylms-quiz-result">
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
        <?php ohmylms_render_slot('student.quiz.before', ['quizId' => get_the_ID(), 'attemptId' => (int) $attempt['id']]); ?>
        <div class="ohmylms-quiz-form">
			<input type="hidden" name="quiz_attempt_id" value="<?php echo $attempt['id']; ?>">
            <div class="ohmylms-container">
                <div class="ohmylms-quiz-form-wrapper">
                    <?php if (!$questions) { ?><p><?php esc_html_e('This quiz has no supported questions yet.', 'ohmylms'); ?></p><?php } ?>
                    <!-- add "wrong-answered" class with the "ohmylms-quiz-box" class if quiz is failed and then remove this comment -->

					<?php
					$count = 0;
					foreach ($questions as $index => $question){
                        $get_question = empty($question['frozen']) ? ohmylms_get_question($question['id']) : null;
                        $question_image = $get_question ? $get_question->get_image_url() : ($question['image_src'] ?? '');
                        $question_video = $get_question ? wp_get_attachment_url( $get_question->get_video_id() ) : ($question['video_src'] ?? '');
                        $supported_question_types = array_keys(\OhMyLMS\Extensions\Registry::all('question'));
                        $supported_question_types = apply_filters('ohmylms_supported_question_types', $supported_question_types);

                        if( !in_array( $question['settings']['type'], $supported_question_types ) ){
                            continue;
                        }

                        $count++;

                        // Check if layout grouped question and we're at the start of a new group
                        if ('number_of_questions_per_page' === $quiz_layout && isset($page_starts[$count - 1])) {
                            // Close the previous group div if it's not the first group
                            if ($count > 1) {
                                echo "</div>";
                            }
                            // Start a new group div
                            $groupNumber = $page_starts[$count - 1];
                            echo "<div class='ohmylms-question-group question-group-{$groupNumber} " . ($groupNumber == 1 ? 'active' : '') . "'>";
                        }
						?>

                        <?php if (!empty($question['section']) && ($question['section'] !== ($previous_section ?? null))) { $previous_section = $question['section']; ?>
                            <h2 class="ohmylms-quiz-section-title"><?php echo esc_html($question['section']); ?></h2>
                        <?php } ?>
                        <div class="ohmylms-quiz-box question-<?php echo $count; ?> <?php echo ('one_question_per_page' === $quiz_layout && $count == 1) ? 'active' : ''; ?>">
							<div class="quiz-box-header">
								<span class="question-number">
									<?php echo sprintf(__('Question %d', 'ohmylms'), $count); ?>
								</span>
							</div>

							<div class="question-box">
								<p class="the-question question-type-<?php echo $question['settings']['type']; ?>">
									<?php echo \OhMyLMS\Assessment\InlineBlanks::render($question, $attempt); ?>

									<?php if( !empty($question['settings']['required']) && $question['settings']['required']){ ?>
										<span class="required">*</span>
                                    <?php } ?>

                                    <input type="hidden" class="is-required" value= "<?php echo !empty($question['settings']['required']) ? $question['settings']['required'] : '' ?>" question-type="<?php echo $question['settings']['type']; ?>" />
								</p>

                                <?php if (!empty($question['description']) && ($question['settings']['type'] ?? '') !== 'structured') { ?>
                                    <div class="ohmylms-question-block-content"><?php echo apply_filters('the_content', $question['description']); ?></div>
                                <?php } ?>
								<?php if(!empty($question_image)){?>
									<img src="<?php echo esc_url($question_image) ?>" alt="question image" class="question-image">
								<?php } ?>

								<?php
								$video = $question_video;
								if($video){
                                    ?>
                                    <video class="question-video" controls controlsList="nodownload nopictureinpicture">
                                        <source src="<?php echo esc_url($video); ?>" type="video/mp4">
                                    </video>
								<?php } ?>
 							</div>

							<?php

                            if( empty( $question['frozen'] ) && isset( $question['settings']['randomize']) && $question['settings']['randomize'] && is_array( $question['questions'] ) ){
                                shuffle($question['questions']);
                            }

                            \OhMyLMS\Extensions\QuestionTypes::render($question, $attempt);
                            ?>
                            <?php if (!empty($question['settings']['required'])) : ?>
                                <span class="required-question"><?php esc_html_e('The question must be answered','ohmylms'); ?></span>
                            <?php endif; ?>
						</div>

                        <?php
                        // Checked if layout grouped question and close the last group div after the last question
                        if ('number_of_questions_per_page' === $quiz_layout && $count === $supported_question_count) {
                            echo "</div>";
                        }
                    }
                    ?>

                </div>
            </div>
        </div>

        <div class="ohmylms-quiz-footer">
            <div class="ohmylms-container">
                <div class="ohmylms-footer-wrapper">
                    <div class="ohmylms-quiz-footer-left">
						<?php if(empty($ohmylms_player_preview) && !empty(ohmylms_get_next_content_permalink(get_the_ID()))){ ?>
							<a href="<?php echo ohmylms_get_next_content_permalink(get_the_ID()) ?>" class="skiptop-next">
								<?php echo __('Skip to Next Lesson', 'ohmylms'); ?>
							</a>
						<?php } ?>
                    </div>

                    <div class="ohmylms-quiz-footer-right">
						<input type="hidden" name="action" value="<?php echo empty($ohmylms_player_preview) ? 'ohmylms-quiz-submission' : 'ohmylms-quiz-preview-submit'; ?>">
						<input type="hidden" name="ohmylms_quiz_id" value="<?php echo get_the_ID(); ?>">
						<?php if (empty($ohmylms_player_preview)) { wp_nonce_field( 'save_quiz_submit', 'save-quiz-submit-nonce' ); } else { ?>
                            <input type="hidden" name="preview_session" value="<?php echo esc_attr($ohmylms_player_preview['session']); ?>">
                        <?php } ?>

                        <?php
                            if('all_questions_in_one_page' === $quiz_layout){
                                ?>
                                <button type="submit" class="ohmylms-button quiz-submit">
                                    <?php echo __('Submit ', 'ohmylms'); ?>
                                </button>
                                <?php

                            }else if ('number_of_questions_per_page' === $quiz_layout){
                                // ------start grouped questions------
                                $layout_class = 'ohmylms-grouped-questions';

                                if($totalGroups > 1) {
                                    ?>
                                    <button type="button" class="ohmylms-button ohmylms-previous-quiz-group outline" current-group="1" previous-group="" total-group="<?php echo $totalGroups; ?>" disabled >
                                        <?php echo __('Previous', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                }

                                if($totalGroups > 1) {
                                    ?>
                                    <button type="button" class="ohmylms-button ohmylms-next-quiz-group" current-group="1" next-group="2" total-group="<?php echo $totalGroups ?>">
                                        <?php echo __('Next', 'ohmylms'); ?>
                                    </button>

                                    <button type="submit" class="ohmylms-button quiz-submit" style="display: none">
                                        <?php echo __('Submit ', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                } else {
                                    ?>
                                    <button type="submit" class="ohmylms-button quiz-submit">
                                        <?php echo __('Submit ', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                }
                                //----end grouped questions-----

                            }else {
                                ?>
                                <button type="button" class="ohmylms-button ohmylms-previous-quiz outline" current-question="1" previous-question="" total-questions="<?php echo $count; ?>" disabled>
                                    <?php echo __('Previous', 'ohmylms'); ?>
                                </button>

                                <?php
                                if($count > 1) {
                                    ?>
                                    <button type="button" class="ohmylms-button ohmylms-next-quiz" current-question="1" next-question="2" total-questions="<?php echo $count; ?>">
                                        <?php echo __('Next', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                }

                                if($count > 1) {
                                    ?>
                                    <button type="submit" class="ohmylms-button quiz-submit" style="display: none">
                                        <?php echo __('Submit ', 'ohmylms'); ?>
                                    </button>
                                    <?php
                                } else {
                                    ?>
                                    <button type="submit" class="ohmylms-button quiz-submit">
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
        <?php ohmylms_render_slot('student.quiz.after', ['quizId' => get_the_ID(), 'attemptId' => (int) $attempt['id']]); ?>
    </form>
    <?php } ?>
</section>
<?php
$duration = max(0, (int) round($timer * 60));
echo \OhMyLMS\Extensions\Interactivity::quiz(ob_get_clean(), [
    'quizId' => (int) get_the_ID(), 'attemptId' => (int) $attempt['id'], 'layout' => $quiz_layout,
    'page' => 1, 'perPage' => max(1, (int) $questions_per_group),
    'totalPages' => max(1, $quiz_layout === 'all_questions_in_one_page' ? 1 : ($quiz_layout === 'number_of_questions_per_page' ? $totalGroups : $supported_question_count)),
    'errors' => (object) [], 'submitting' => false, 'exitOpen' => false, 'error' => '',
    'preview' => !empty($ohmylms_player_preview),
    'timed' => $is_timer && empty($ohmylms_player_preview['result']), 'duration' => $duration, 'remaining' => $duration,
    'ajaxUrl' => admin_url('admin-ajax.php'), 'expiryNonce' => wp_create_nonce('quiz_exit_submission'),
    'submissionError' => __('Submission failed. Your answers remain on this page. Please press Submit to retry.', 'ohmylms'),
]); // phpcs:ignore WordPress.Security.EscapeOutput -- templates escape their own fields.
