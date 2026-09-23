<?php
/**
 * Membership page section header
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/membership-loop/header.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<div class="membership-section-title">
	<?php

	if ( apply_filters( 'creator_lms_membership_show_page_title', true ) ) :
		?>
		<h2>
			<?php echo apply_filters( 'creator_lms_membership_archive_title', __( 'Select plan that works best for you.', 'ohmylms' ) ); ?>
		</h2>
	<?php endif; ?>

	<?php
	do_action( 'creator_lms_membership_archive_description' );
	?>
</div>
