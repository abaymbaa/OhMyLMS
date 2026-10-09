<?php
/**
 * Question ordinal and available marks, without exposing grading keys.
 *
 * @package OhMyLMS
 */

defined( 'ABSPATH' ) || exit;
?>
<div class="quiz-box-header">
	<span class="question-number"><?php echo esc_html( $ordinal . ' / ' . $question_count ); ?></span>
	<span class="ohmylms-player-marks">
		<?php
		/* translators: %s: Available question marks. */
		echo esc_html( sprintf( _n( '%s point', '%s points', $marks, 'ohmylms' ), $marks ) );
		?>
	</span>
</div>
