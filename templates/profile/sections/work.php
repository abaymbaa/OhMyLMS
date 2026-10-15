<?php
/**
 * Student dashboard section: work. Override in yourtheme/ohmylms/profile/sections/work.php.
 *
 * Rendered by the Profile Builder blocks and by the default dashboard layout; the variables come from
 * OhMyLMS\ProfileBuilder\Sections::context().
 */
defined( 'ABSPATH' ) || exit;
?>
		<section class="oml-dashboard-work" aria-labelledby="oml-work-heading">
			<h2 id="oml-work-heading"><?php esc_html_e( 'What should I work on?', 'ohmylms' ); ?></h2>
			<div class="oml-dashboard-card">
				<div class="oml-dashboard-tabs" role="tablist" aria-label="<?php esc_attr_e( 'Learning activities', 'ohmylms' ); ?>">
					<?php
					foreach ( array(
						'continue'        => __( 'Continue learning', 'ohmylms' ),
						'recent'          => __( 'Recent skills', 'ohmylms' ),
						'recommendations' => __( 'Recommendations', 'ohmylms' ),
					) as $key => $label ) {
						?>
																				<button type="button" role="tab" id="oml-tab-<?php echo esc_attr( $key ); ?>" aria-controls="oml-panel-<?php echo esc_attr( $key ); ?>" aria-selected="<?php echo $key === 'continue' ? 'true' : 'false'; ?>" tabindex="<?php echo $key === 'continue' ? '0' : '-1'; ?>"><?php echo esc_html( $label ); ?></button><?php } ?>
				</div>
				<div role="tabpanel" id="oml-panel-continue" aria-labelledby="oml-tab-continue" tabindex="0">
					<?php
					if ( ! $in_progress_courses ) {
						?>
						<div class="oml-dashboard-empty"><span aria-hidden="true">✦</span><h3><?php esc_html_e( 'Your next chapter starts here', 'ohmylms' ); ?></h3><p><?php esc_html_e( 'Choose a course to begin your learning journey.', 'ohmylms' ); ?></p><a class="oml-dashboard-button" href="<?php echo esc_url( $browse ); ?>"><?php esc_html_e( 'Explore courses', 'ohmylms' ); ?></a></div><?php } ?>
					<div class="oml-dashboard-course-grid">
					<?php
					foreach ( array_slice( $in_progress_courses, 0, 6 ) as $learning_course ) {
						$percent = max( 0, min( 100, (float) $student->get_course_progress_percentage( $learning_course->get_id() ) ) );
						?>
						<article class="oml-dashboard-course"><img src="<?php echo esc_url( has_post_thumbnail( $learning_course->get_id() ) ? $learning_course->get_thumbnail_url() : plugins_url( 'assets/images/dashboard-course.svg', OHMYLMS_FILE ) ); ?>" alt="" loading="lazy"><div><h3><a href="<?php echo esc_url( $learning_course->get_permalink() ); ?>"><?php echo esc_html( $learning_course->get_name() ); ?></a></h3><p><?php echo esc_html( sprintf( __( '%s%% complete', 'ohmylms' ), $percent ) ); ?></p><progress max="100" value="<?php echo esc_attr( $percent ); ?>" aria-label="<?php echo esc_attr( sprintf( __( '%s course progress', 'ohmylms' ), $learning_course->get_name() ) ); ?>"></progress><a class="oml-dashboard-button" href="<?php echo esc_url( $student->get_course_resume_url( $learning_course->get_id() ) ); ?>"><?php echo esc_html( $percent > 0 ? __( 'Continue', 'ohmylms' ) : __( 'Start learning', 'ohmylms' ) ); ?></a></div></article><?php } ?></div>
					<?php
					if ( $courses ) {
						?>
						<a class="oml-dashboard-text-link" href="<?php echo esc_url( ohmylms_get_account_endpoint_url( 'my-courses' ) ); ?>"><?php esc_html_e( 'View all my courses →', 'ohmylms' ); ?></a><?php } ?>
				</div>
				<div role="tabpanel" id="oml-panel-recent" aria-labelledby="oml-tab-recent" tabindex="0" hidden>
					<?php
					if ( ! $dashboard['recent'] ) {
						?>
						<div class="oml-dashboard-empty"><h3><?php esc_html_e( 'Build your first skill', 'ohmylms' ); ?></h3><p><?php esc_html_e( 'Your recently practiced skills will appear here as you learn.', 'ohmylms' ); ?></p></div><?php } ?>
					<div class="oml-dashboard-skill-grid">
					<?php
					foreach ( $dashboard['recent'] as $skill ) {
						?>
						<article class="oml-dashboard-skill"><span class="oml-dashboard-pill"><?php echo esc_html( $skill['level_label'] ); ?></span><h3><?php echo esc_html( $skill['name'] ); ?></h3>
						<?php
						if ( ! empty( $skill['mastery'] ) ) {
							$mastery = $skill['mastery'];
							?>
						<p class="oml-mastery-score"><strong><?php echo esc_html( (int) round( $mastery['score'] ) ); ?></strong><span>/100</span>
							<?php if ( $mastery['medal'] ) : ?><span class="oml-mastery-medal is-<?php echo esc_attr( $mastery['medal'] ); ?>"><?php echo esc_html( ucfirst( $mastery['medal'] ) ); ?></span><?php endif; ?>
						</p>
						<progress max="100" value="<?php echo esc_attr( (int) round( $mastery['score'] ) ); ?>" aria-label="<?php echo esc_attr( sprintf( /* translators: %s: skill name */ __( '%s mastery score', 'ohmylms' ), $skill['name'] ) ); ?>"></progress>
						<?php
						}
						if ( ! empty( $skill['last_evidence_at'] ) ) {
							?>
						<p><?php echo esc_html( sprintf( __( 'Last practiced %s', 'ohmylms' ), wp_date( 'M j', strtotime( $skill['last_evidence_at'] . ' UTC' ), new DateTimeZone( $dashboard['timezone'] ) ) ) ); ?></p><?php } ?><p><?php echo esc_html( $skill['review_due'] ? __( 'Ready for a review', 'ohmylms' ) : sprintf( __( '%d independent correct answers', 'ohmylms' ), $skill['independent_correct'] ) ); ?></p><a class="oml-dashboard-button" href="<?php echo esc_url( add_query_arg( 'ohmylms_practice', $skill['id'], home_url( '/' ) ) ); ?>"><?php esc_html_e( 'Practice skill', 'ohmylms' ); ?></a></article><?php } ?></div>
				</div>
				<div role="tabpanel" id="oml-panel-recommendations" aria-labelledby="oml-tab-recommendations" tabindex="0" hidden>
					<?php
					if ( ! $dashboard['recommendations'] ) {
						?>
						<div class="oml-dashboard-empty"><h3><?php esc_html_e( 'Keep exploring', 'ohmylms' ); ?></h3><p><?php esc_html_e( 'As you practice, suggestions for review and your next skills will appear here.', 'ohmylms' ); ?></p></div><?php } ?>
					<?php
					foreach ( $dashboard['recommendations'] as $suggestion ) {
						if ( empty( $suggestion['skill'] ) ) {
							continue; }
						?>
						<article class="oml-dashboard-recommendation"><div><h3><?php echo esc_html( $suggestion['skill']['name'] ); ?></h3><p><?php echo esc_html( $suggestion['message'] ); ?></p>
						<?php
						foreach ( $suggestion['lessons'] as $lesson ) {
							?>
	<a class="oml-dashboard-text-link" href="<?php echo esc_url( $lesson['url'] ); ?>"><?php echo esc_html( $lesson['title'] ); ?></a><?php } ?></div><a class="oml-dashboard-button" href="<?php echo esc_url( add_query_arg( 'ohmylms_practice', $suggestion['skill']['id'], home_url( '/' ) ) ); ?>"><?php esc_html_e( 'Practice', 'ohmylms' ); ?></a></article><?php } ?>
				</div>
			</div>
		</section>
