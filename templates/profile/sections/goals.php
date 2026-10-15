<?php
/**
 * Student dashboard section: goals. Override in yourtheme/ohmylms/profile/sections/goals.php.
 *
 * Rendered by the Profile Builder blocks and by the default dashboard layout; the variables come from
 * OhMyLMS\ProfileBuilder\Sections::context().
 */
defined( 'ABSPATH' ) || exit;
?>
		<aside class="oml-dashboard-aside" aria-label="<?php esc_attr_e( 'Learning goals', 'ohmylms' ); ?>">
			<?php
			ohmylms_get_template( 'profile/xp.php', array( 'user_id' => $user_id ) );
			if ( $streak_enabled ) {
				ohmylms_get_template( 'profile/streak.php', array( 'in_progress_courses' => $in_progress_courses ) );
				$snapshot = \OhMyLMS\Engagement\Streak::snapshot( $user_id );
				if ( $snapshot && ! is_wp_error( $snapshot ) ) {
					$milestones = \OhMyLMS\Engagement\StreakSettings::get()['milestones'];
					usort(
						$milestones,
						static function ( $a, $b ) {
							return $a['days'] <=> $b['days'];
						}
					);
					foreach ( $milestones as $milestone ) {
						global $wpdb;
						if ( $milestone['days'] <= $snapshot['current_streak'] || $wpdb->get_var( $wpdb->prepare( 'SELECT days FROM ' . \OhMyLMS\Engagement\StreakSchema::table( 'milestones' ) . ' WHERE user_id=%d AND days=%d', $user_id, $milestone['days'] ) ) ) {
							continue; }
						?>
					<div class="oml-dashboard-card oml-dashboard-goal"><span class="oml-dashboard-pill"><?php esc_html_e( 'Next streak milestone', 'ohmylms' ); ?></span><h3><?php echo esc_html( sprintf( __( '%d learning days', 'ohmylms' ), $milestone['days'] ) ); ?></h3><p><?php echo esc_html( sprintf( __( '%d more qualifying days to reach this milestone.', 'ohmylms' ), $milestone['days'] - $snapshot['current_streak'] ) ); ?></p><progress max="<?php echo esc_attr( $milestone['days'] ); ?>" value="<?php echo esc_attr( $snapshot['current_streak'] ); ?>" aria-label="<?php esc_attr_e( 'Next streak milestone progress', 'ohmylms' ); ?>"></progress></div>
						<?php
						break; }
				}
			}
			?>
			<div class="oml-dashboard-card oml-dashboard-goal"><span class="oml-dashboard-pill"><?php esc_html_e( 'My learning journey', 'ohmylms' ); ?></span><h3><?php esc_html_e( 'Every step counts', 'ohmylms' ); ?></h3><dl class="oml-dashboard-course-counts"><div><dt><?php esc_html_e( 'Enrolled courses', 'ohmylms' ); ?></dt><dd><?php echo esc_html( $student->get_enrolled_course_count() ); ?></dd></div><div><dt><?php esc_html_e( 'Completed courses', 'ohmylms' ); ?></dt><dd><?php echo esc_html( $student->get_completed_course_count() ); ?></dd></div></dl><a class="oml-dashboard-text-link" href="<?php echo esc_url( $browse ); ?>"><?php esc_html_e( 'Explore something new →', 'ohmylms' ); ?></a></div>
		</aside>
