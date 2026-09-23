
<?php
/**
 * The template for displaying short text question
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-lesson/quiz-loop/short-text.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$quiz 		= omlms_get_quiz(get_the_ID());
$settings = $quiz->get_settings();
$short_text_limit = is_array($settings) && isset($settings['short_text_limit']) ? $settings['short_text_limit'] : '';
$class = '';

if(!empty($short_text_limit)){
	$class = 'creator-lms-has-character-limit';
}
?>

<?php foreach ($question['questions'] as $option){ ?>
	<div class="answer-type-text">
		<input type="text" data-question-id="<?php echo $option['question_id']; ?>"class="omlms-text-input <?php echo $class; ?>" data-limit="<?php echo $short_text_limit; ?>" name="attempt[<?php echo $attempt['id']; ?>][quiz_question][<?php echo $option['question_id'] ?>][]" placeholder="Type your answer here ... ">

		<?php if(!empty($short_text_limit)){ ?>
			<span class="creator-lms-character-limit-hints">
				<span>0</span>/<?php echo $short_text_limit; ?>
			</span>
		<?php } ?>
	</div>
<?php } ?>
