<?php
/**
 * The learner's answers next to the correct answers, shown on the quiz result screen.
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/single-lesson/quiz-review.php.
 *
 * @package OhMyLMS\Templates
 * @version 1.0.0
 * @global array[] $entries Review entries from \OhMyLMS\Quiz\AnswerReview::for_attempt().
 */

use OhMyLMS\Assessment\Scoring;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( empty( $entries ) ) {
	return;
}

wp_enqueue_style( 'ohmylms-answer-review', plugins_url( 'assets/css/answer-review.css', OHMYLMS_FILE ), array(), OHMYLMS_VERSION );

$verdict_labels = array(
	'correct'    => __( 'Correct', 'ohmylms' ),
	'partial'    => __( 'Partly correct', 'ohmylms' ),
	'incorrect'  => __( 'Incorrect', 'ohmylms' ),
	'pending'    => __( 'Waiting for your teacher to mark this', 'ohmylms' ),
	'unanswered' => __( 'Not answered', 'ohmylms' ),
);
?>
<section class="ohmylms-answer-review" aria-labelledby="ohmylms-answer-review-title">
	<h2 id="ohmylms-answer-review-title"><?php esc_html_e( 'Review your answers', 'ohmylms' ); ?></h2>
	<p class="ohmylms-answer-review-intro"><?php esc_html_e( 'This is your most recent attempt.', 'ohmylms' ); ?></p>

	<ol class="ohmylms-answer-review-list">
		<?php foreach ( $entries as $entry ) : ?>
			<li class="ohmylms-answer-review-item is-<?php echo esc_attr( $entry['verdict'] ); ?>">
				<div class="ohmylms-answer-review-question"><?php echo wp_kses_post( $entry['name'] ); ?></div>

				<p class="ohmylms-answer-review-verdict">
					<strong><?php echo esc_html( $verdict_labels[ $entry['verdict'] ] ?? '' ); ?></strong>
					<?php if ( 'pending' !== $entry['verdict'] && $entry['max'] > 0 ) : ?>
						<span class="ohmylms-answer-review-marks">
							<?php
							/* translators: 1: marks earned, 2: marks available */
							echo esc_html( sprintf( __( '%1$s / %2$s marks', 'ohmylms' ), Scoring::display( $entry['awarded'] ), Scoring::display( $entry['max'] ) ) );
							?>
						</span>
					<?php endif; ?>
				</p>

				<?php if ( $entry['given'] ) : ?>
					<div class="ohmylms-answer-review-given">
						<h3><?php esc_html_e( 'Your answer', 'ohmylms' ); ?></h3>
						<ul>
							<?php foreach ( $entry['given'] as $line ) : ?>
								<li><?php echo esc_html( $line ); ?></li>
							<?php endforeach; ?>
						</ul>
					</div>
				<?php endif; ?>

				<?php if ( $entry['expected'] ) : ?>
					<div class="ohmylms-answer-review-expected">
						<h3><?php esc_html_e( 'Correct answer', 'ohmylms' ); ?></h3>
						<ul>
							<?php foreach ( $entry['expected'] as $line ) : ?>
								<li><?php echo esc_html( $line ); ?></li>
							<?php endforeach; ?>
						</ul>
					</div>
				<?php endif; ?>

				<?php if ( '' !== trim( wp_strip_all_tags( $entry['explanation'] ) ) ) : ?>
					<div class="ohmylms-answer-review-explanation">
						<h3><?php esc_html_e( 'Explanation', 'ohmylms' ); ?></h3>
						<?php echo wp_kses_post( $entry['explanation'] ); ?>
					</div>
				<?php endif; ?>
			</li>
		<?php endforeach; ?>
	</ol>
</section>
