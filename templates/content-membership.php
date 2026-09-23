<?php
/**
 * Template for displaying course content within loop.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/content-membership.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
?>
<div class="creator-lms-single-membership" id="creator-lms-membership-<?php the_ID(); ?>">
	<?php
	/**
	 * Hook: creator_lms_before_membership_loop_item.
	 *
	 */
	do_action( 'creator_lms_before_membership_loop_item' );
	?>

	<div class="membership-header">
		<?php 
			/**
			 * Hook: creator_lms_membership_table_header.
			 * 
			 * Hooked: creator_lms_membership_title (5).
			 * Hooked: creator_lms_membership_price (10).
			 * Hooked: creator_lms_membership_description (15).
			 *
			 */
			do_action( 'creator_lms_membership_table_header' ); 
		?>
	</div>

	<div class="membership-body">
		<?php 
			/**
			 * Hook: creator_lms_membership_table_body.
			 * 
			 * Hooked: creator_lms_membership_product_list (5).
			 *
			 */
			do_action( 'creator_lms_membership_table_body' ); 
		?>
	</div>

	<div class="membership-footer">
		<?php 
			/**
			 * Hook: creator_lms_membership_table_footer.
			 * 
			 * Hooked: creator_lms_membership_add_to_cart (5).
			 *
			 */
			do_action( 'creator_lms_membership_table_footer' ); 
		?>
	</div>

	<?php
	/**
	 * Hook: creator_lms_after_membership_loop_item.
	 *
	 */
	do_action( 'creator_lms_after_membership_loop_item' );
	?>
</div>
