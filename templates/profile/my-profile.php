<?php
/**
 * My Account page
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/profile/my-profile.php.
 *
 * @version 3.5.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * My Account navigation.
 *
 * @since 2.6.0
 */
//do_action( 'creator_lms_account_navigation' );
do_action( 'creator_lms_account_header' );

?>

<section class="creator-lms-dashboard">
	<div class="creator-lms-container">
		<?php
		/**
		 * My Account content.
		 *
		 * @since 2.6.0
		 */
		do_action( 'creator_lms_account_content' );
		?>
	</div>
</section>
