<?php
/**
 * Student dashboard section: week. Override in yourtheme/ohmylms/profile/sections/week.php.
 *
 * Rendered by the Profile Builder blocks and by the default dashboard layout; the variables come from
 * OhMyLMS\ProfileBuilder\Sections::context().
 */
defined( 'ABSPATH' ) || exit;
?>
	<section aria-labelledby="oml-progress-heading"><h2 id="oml-progress-heading"><?php esc_html_e( 'How am I doing?', 'ohmylms' ); ?></h2><div class="oml-dashboard-card oml-dashboard-week"><header><h3><?php esc_html_e( 'This week', 'ohmylms' ); ?></h3><p><?php echo esc_html( $dashboard['week_label'] ); ?></p></header><dl class="oml-dashboard-metrics">
	<?php
	foreach ( array(
		'answers' => __( 'Practice answers', 'ohmylms' ),
		'skills'  => __( 'Skills practiced', 'ohmylms' ),
		'days'    => __( 'Active practice days', 'ohmylms' ),
	) as $key => $label ) {
		?>
																									<div><dt><?php echo esc_html( $label ); ?></dt><dd><?php echo esc_html( $dashboard['weekly'][ $key ] ); ?></dd></div><?php } ?></dl><p><?php esc_html_e( 'Small steps add up. This summary counts your skill practice activity.', 'ohmylms' ); ?></p></div></section>
