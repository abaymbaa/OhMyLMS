<?php
/**
 * Student dashboard section: greeting. Override in yourtheme/ohmylms/profile/sections/greeting.php.
 *
 * Rendered by the Profile Builder blocks and by the default dashboard layout; the variables come from
 * OhMyLMS\ProfileBuilder\Sections::context().
 */
defined( 'ABSPATH' ) || exit;
?>
	<header class="oml-dashboard-greeting">
		<div class="oml-dashboard-person"><?php echo get_avatar( $user_id, 56, '', '', array( 'class' => 'oml-dashboard-avatar' ) ); ?><div><p class="oml-dashboard-eyebrow"><?php esc_html_e( 'Your learning space', 'ohmylms' ); ?></p><h1><?php echo esc_html( sprintf( __( 'Hi %s, let’s keep learning!', 'ohmylms' ), $name ) ); ?></h1></div></div>
		<details class="oml-dashboard-customize"><summary><?php esc_html_e( 'Customize dashboard', 'ohmylms' ); ?></summary><div class="oml-dashboard-theme-picker"><p><?php esc_html_e( 'Choose your background', 'ohmylms' ); ?></p>
		<?php
		foreach ( array(
			'meadow' => __( 'Meadow', 'ohmylms' ),
			'ocean'  => __( 'Ocean', 'ohmylms' ),
			'sunset' => __( 'Sunset', 'ohmylms' ),
		) as $key => $label ) {
			?>
												<button type="button" data-select-theme="<?php echo esc_attr( $key ); ?>" aria-pressed="<?php echo $dashboard['theme'] === $key ? 'true' : 'false'; ?>"><span class="oml-theme-swatch oml-theme-<?php echo esc_attr( $key ); ?>" aria-hidden="true"></span><?php echo esc_html( $label ); ?></button><?php } ?><p role="status" data-theme-message></p></div></details>
	</header>
