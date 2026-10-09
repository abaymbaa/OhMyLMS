<?php
/**
 * Build an expression by tapping tiles from a bank into the answer row.
 * The accepted orders are never output; the answer is the ordered list of tile texts.
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/single-lesson/quiz-loop/build-expression.php.
 *
 * @package OhMyLMS\Templates
 * @version 1.0.0
 */

use OhMyLMS\Assessment\Interactive;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$settings = Interactive::learner_settings( 'build-expression', $question );
Interactive::enqueue();
// Registers the required-answer check for tile answers.
ohmylms_enqueue_interactivity_module( 'ohmylms/questions' );
?>
<div class="ohmylms-interactive ohmylms-build-expression" data-ohmylms-interactive="build-expression" data-field-name="<?php echo esc_attr( Interactive::field_name( $attempt, $question ) ); ?>" data-question-id="<?php echo esc_attr( $question['id'] ); ?>">
	<div class="ohmylms-build-answer" role="list" aria-label="<?php esc_attr_e( 'Your answer', 'ohmylms' ); ?>"></div>
	<div class="ohmylms-build-bank" role="list" aria-label="<?php esc_attr_e( 'Available tiles', 'ohmylms' ); ?>">
		<?php foreach ( (array) ( $settings['tiles'] ?? array() ) as $tile ) { ?>
			<button type="button" class="ohmylms-tile" role="listitem" data-tile="<?php echo esc_attr( $tile ); ?>"><?php echo esc_html( $tile ); ?></button>
		<?php } ?>
	</div>
	<noscript><p><?php esc_html_e( 'This question needs JavaScript to build the answer.', 'ohmylms' ); ?></p></noscript>
</div>
