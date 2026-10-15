<?php
/**
 * Student dashboard section: achievements. Override in yourtheme/ohmylms/profile/sections/achievements.php.
 *
 * Rendered by the Profile Builder blocks and by the default dashboard layout; the variables come from
 * OhMyLMS\ProfileBuilder\Sections::context().
 */
defined( 'ABSPATH' ) || exit;
?>
		<?php
		if ( \OhMyLMS\Engagement\Badge::maybe_enable() || $streak_enabled || \OhMyLMS\Engagement\Level::maybe_enable() ) {
			?>
			<section class="oml-dashboard-card oml-dashboard-achievements"><h2><?php esc_html_e( 'My achievements', 'ohmylms' ); ?></h2>
			<?php
			if ( \OhMyLMS\Engagement\Point::maybe_enable() ) {
				?>
			<p><?php echo esc_html( sprintf( __( '%d bonus points', 'ohmylms' ), \OhMyLMS\Engagement\Point::get_total_points( $user_id ) ) ); ?></p><?php } ?>
			<?php
			if ( $level ) {
				?>
	<p class="oml-dashboard-pill"><?php echo esc_html( $level['level_name'] ); ?></p><?php } ?>
			<?php
			if ( $next_level ) {
				?>
	<p><?php echo esc_html( sprintf( __( 'Working toward %s', 'ohmylms' ), $next_level['level_data']['name'] ?? __( 'the next level', 'ohmylms' ) ) ); ?></p><progress max="100" value="<?php echo esc_attr( $next_level['progress_percentage'] ); ?>" aria-label="<?php esc_attr_e( 'Next level progress', 'ohmylms' ); ?>"></progress><?php } ?><ul class="oml-dashboard-badges">
			<?php
			foreach ( $badges as $badge ) {
				?>
	<li>
				<?php
				if ( ! empty( $badge['image'] ) ) {
					?>
	<img src="<?php echo esc_url( $badge['image'] ); ?>" alt="" loading="lazy">
					<?php
				} else {
					?>
	<span aria-hidden="true">★</span><?php } ?><strong><?php echo esc_html( $badge['name'] ); ?></strong></li><?php } ?></ul>
			<?php
			if ( ! $badges ) {
				?>
	<p><?php esc_html_e( 'Your earned badges will appear here. Keep learning toward your next achievement.', 'ohmylms' ); ?></p><?php } ?></section><?php } ?>
