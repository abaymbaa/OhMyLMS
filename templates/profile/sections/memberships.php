<?php
/**
 * Student dashboard section: memberships. Override in yourtheme/ohmylms/profile/sections/memberships.php.
 *
 * Rendered by the Profile Builder blocks and by the default dashboard layout; the variables come from
 * OhMyLMS\ProfileBuilder\Sections::context().
 */
defined( 'ABSPATH' ) || exit;
?>
	<?php
	if ( ohmylms_is_pro() ) {
		$memberships = $student->get_enrolled_memberships(); if ( $memberships ) {
			?>
		<section class="oml-dashboard-card"><h2><?php esc_html_e( 'My memberships', 'ohmylms' ); ?></h2>
			<?php
			foreach ( $memberships as $membership ) {
				ohmylms_get_template( 'profile/loop/membership-card.php', array( 'memebership' => $membership ) ); }
			?>
	</section>
			<?php
		}
	}
	?>
