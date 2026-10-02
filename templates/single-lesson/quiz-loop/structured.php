<?php
/**
 * Structured (multi-part) question: the shared stem is the question text and image;
 * each part has its own answer field. Answer keys and marking notes are never output.
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/single-lesson/quiz-loop/structured.php.
 *
 * @package OhMyLMS\Templates
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$parts = isset( $question['settings']['parts'] ) && is_array( $question['settings']['parts'] ) ? $question['settings']['parts'] : array();
?>
<div class="ohmylms-structured-question">
	<?php if ( ! empty( $question['description'] ) ) { ?>
		<div class="ohmylms-structured-stem"><?php echo wp_kses_post( wpautop( $question['description'] ) ); ?></div>
	<?php } ?>
	<?php foreach ( $parts as $part ) {
		$part_id  = preg_replace( '/[^a-z0-9_-]/i', '', (string) ( $part['id'] ?? '' ) );
		$field_id = 'ohmylms-part-' . (int) $attempt['id'] . '-' . (int) $question['id'] . '-' . $part_id;
		$name     = 'attempt[' . (int) $attempt['id'] . '][quiz_question][' . (int) $question['id'] . '][' . $part_id . ']';
		?>
		<div class="ohmylms-structured-part">
			<label for="<?php echo esc_attr( $field_id ); ?>">
				<strong><?php echo esc_html( $part['label'] ?? '' ); ?></strong>
				<?php echo wp_kses_post( $part['prompt'] ?? '' ); ?>
				<?php if ( ! empty( $part['marks'] ) ) { ?><span class="ohmylms-part-marks">[<?php echo esc_html( \OhMyLMS\Assessment\Scoring::display( $part['marks'] ) ); ?>]</span><?php } ?>
			</label>
			<?php if ( ( $part['kind'] ?? '' ) === 'written' ) { ?>
				<textarea id="<?php echo esc_attr( $field_id ); ?>" class="ohmylms-text-input" rows="4" data-question-id="<?php echo esc_attr( $question['id'] ); ?>" name="<?php echo esc_attr( $name ); ?>"></textarea>
			<?php } else { ?>
				<input type="text" id="<?php echo esc_attr( $field_id ); ?>" class="ohmylms-text-input" autocomplete="off" <?php echo ( $part['kind'] ?? '' ) === 'numerical' ? 'inputmode="decimal"' : ''; ?> data-question-id="<?php echo esc_attr( $question['id'] ); ?>" name="<?php echo esc_attr( $name ); ?>">
				<?php if ( ! empty( $part['unit'] ) ) { ?><span class="ohmylms-numerical-unit"><?php echo esc_html( $part['unit'] ); ?></span><?php } ?>
			<?php } ?>
		</div>
	<?php } ?>
</div>
