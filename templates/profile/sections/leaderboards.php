<?php
/**
 * Student dashboard section: leaderboards. Override in yourtheme/ohmylms/profile/sections/leaderboards.php.
 *
 * Rendered by the Profile Builder blocks and by the default dashboard layout; the variables come from
 * OhMyLMS\ProfileBuilder\Sections::context().
 */
defined( 'ABSPATH' ) || exit;
?>
		<?php
		if ( \OhMyLMS\Engagement\Leaderboard::maybe_enable() ) {
			?>
			<section class="oml-dashboard-card"><h2><?php esc_html_e( 'My leaderboards', 'ohmylms' ); ?></h2>
			<?php
			$has_leaderboard = false;
			foreach ( $courses as $ranked_course ) {
				if ( ! \OhMyLMS\Engagement\Leaderboard::maybe_enable_for_course( $ranked_course->get_id() ) ) {
					continue;
				} $leaders = apply_filters( 'ohmylms_leaderboard_students', $ranked_course->get_students(), $ranked_course->get_id() );
				if ( ! $leaders || ! is_array( $leaders ) ) {
					continue;
				} $has_leaderboard = true;
				?>
	<h3><?php echo esc_html( $ranked_course->get_name() ); ?></h3><ol class="oml-dashboard-leaders">
				<?php
				foreach ( array_slice( $leaders, 0, 3 ) as $leader ) {
					?>
	<li><strong><?php echo esc_html( $leader['position_in_text'] ?? '' ); ?></strong><span><?php echo esc_html( $leader['name'] ); ?></span></li><?php } ?></ol><a class="oml-dashboard-text-link" href="<?php echo esc_url( $ranked_course->get_permalink() ); ?>"><?php esc_html_e( 'View course leaderboard →', 'ohmylms' ); ?></a>
				<?php
				break; } if ( ! $has_leaderboard ) {
				?>
	<p><?php esc_html_e( 'Course rankings will appear here when an enrolled course has a leaderboard.', 'ohmylms' ); ?></p><?php } ?></section><?php } ?>
