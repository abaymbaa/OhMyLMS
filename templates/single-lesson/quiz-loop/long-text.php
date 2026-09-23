
<?php
/**
 * The template for displaying long text question
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-lesson/quiz-loop/long-text.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$quiz 		= omlms_get_quiz(get_the_ID());
$settings = $quiz->get_settings();
$long_text_limit = is_array($settings) && isset($settings['long_text_limit']) ? $settings['long_text_limit'] : '';
$class = '';

if(!empty($long_text_limit)){
	$class = 'creator-lms-has-character-limit';
}
?>

<?php foreach ($question['questions'] as $option){ ?>
	<div class="answer-type-text">
		<textarea class="textarea-auto-resize <?php echo $class; ?>" data-limit="<?php echo $long_text_limit; ?>" data-question-id="<?php echo $option['question_id']; ?>" name="attempt[<?php echo $attempt['id']; ?>][quiz_question][<?php echo $option['question_id'] ?>][]" placeholder="<?php echo esc_attr( 'Type your answer here ...', 'ohmylms' ); ?>"></textarea>

		<?php if(!empty($long_text_limit)){ ?>
			<span class="creator-lms-character-limit-hints">
				<span>0</span>/<?php echo $long_text_limit; ?>
			</span>
		<?php } ?>
	</div>
<?php } ?>
