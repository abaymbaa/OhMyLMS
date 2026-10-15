<?php
/**
 * Focused activity shell. The caller renders the existing activity inside main.
 *
 * @package OhMyLMS
 */

use OhMyLMS\Student\PlayerContext;

defined( 'ABSPATH' ) || exit;

$player_kinds = array(
	'lesson'     => __( 'Lesson', 'ohmylms' ),
	'practice'   => __( 'Practice', 'ohmylms' ),
	'quiz'       => __( 'Quiz', 'ohmylms' ),
	'assignment' => __( 'Assignment', 'ohmylms' ),
);
?>
<div class="oml-player<?php echo $player_quiz ? ' oml-player-taking-quiz' : ''; ?>" data-theme="light">
	<header class="oml-player-context">
		<?php if ( ! $player_quiz ) : ?>
			<a class="oml-player-exit" href="<?php echo esc_url( PlayerContext::overview_url( $player_outline['id'] ) ); ?>">&larr; <?php esc_html_e( 'Course overview', 'ohmylms' ); ?></a>
		<?php endif; ?>
		<span class="oml-player-course"><?php echo esc_html( $player_outline['title'] ); ?></span>
		<a class="oml-player-skip" href="#oml-player-main"><?php esc_html_e( 'Skip to activity', 'ohmylms' ); ?></a>
	</header>
	<div class="oml-player-layout">
		<?php if ( ! $player_quiz ) : ?>
			<nav class="oml-player-outline" aria-label="<?php esc_attr_e( 'Course units', 'ohmylms' ); ?>">
				<h2 class="oml-player-outline-title"><?php esc_html_e( 'Course content', 'ohmylms' ); ?></h2>
				<?php foreach ( $player_outline['units'] as $player_unit ) : ?>
					<?php $player_selected = in_array( (int) $player_current, array_column( $player_unit['items'], 'content_id' ), true ); ?>
					<details class="oml-player-unit" <?php echo $player_selected ? 'open' : ''; ?>>
						<summary><?php echo esc_html( $player_unit['title'] ); ?></summary>
						<ul class="oml-player-activities">
							<?php foreach ( $player_unit['items'] as $player_item ) : ?>
									<?php $player_is_current = (int) ( $player_item['content_id'] ?? 0 ) === (int) $player_current; ?>
								<li>
									<a class="oml-player-activity" href="<?php echo esc_url( $player_item['url'] ); ?>" <?php echo $player_is_current ? 'aria-current="page"' : ''; ?>>
										<span class="oml-player-activity-kind"><?php echo esc_html( $player_kinds[ $player_item['kind'] ] ?? __( 'Activity', 'ohmylms' ) ); ?><?php echo $player_item['complete'] ? ' · ' . esc_html__( 'Completed', 'ohmylms' ) : ''; ?></span>
										<span><?php echo esc_html( $player_item['name'] ); ?></span>
									</a>
								</li>
							<?php endforeach; ?>
						</ul>
					</details>
				<?php endforeach; ?>
			</nav>
		<?php endif; ?>
		<main class="oml-player-main" id="oml-player-main" tabindex="-1">
