<?php
/**
 * Student dashboard section: skills. Override in yourtheme/ohmylms/profile/sections/skills.php.
 *
 * Rendered by the Profile Builder blocks and by the default dashboard layout; the variables come from
 * OhMyLMS\ProfileBuilder\Sections::context().
 */
defined( 'ABSPATH' ) || exit;
?>
	<?php
	if ( $dashboard['skills'] ) {
		?>
		<details class="oml-dashboard-card oml-dashboard-skill-summary"><summary><?php esc_html_e( 'All my skills', 'ohmylms' ); ?></summary><ul>
		<?php
		foreach ( $dashboard['skills'] as $skill ) {
			?>
		<li><a href="<?php echo esc_url( add_query_arg( 'ohmylms_practice', $skill['id'], home_url( '/' ) ) ); ?>"><?php echo esc_html( $skill['name'] ); ?></a><span><?php echo esc_html( $skill['level_label'] ); ?></span></li><?php } ?></ul></details><?php } ?>
