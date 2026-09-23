<?php
/**
 * Template for displaying all membership.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/archive-membership.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();

creator_lms_get_header();

/**
 * Hook: creator_lms_membership_before_main_content.
 *
 */
do_action( 'creator_lms_membership_before_main_content' );
?>
<section class="creator-lms-membership">
	<div class="creator-lms-container adfadfad">
		<?php
		if(creator_lms_is_pro()){
			$membership_page = get_post( omlms_get_page_id( 'membership' ) );
			$custom_title     = $membership_page ? \OMLMS\Shortcodes\ShortCodeMembershipPlan::extract_title_from_content( $membership_page->post_content ) : '';
			$title_filter     = \OMLMS\Shortcodes\ShortCodeMembershipPlan::apply_custom_title( $custom_title );

			/**
			 * Hook: creator_lms_membership_section_header.
			 *
			 * Hooked: creator_lms_membership_header (5).
			 *
			 */
			do_action( 'creator_lms_membership_section_header' );

			if ( have_posts() ) {

				/**
				 * Hook: creator_lms_before_membership_loop.
				 *
				 */
				do_action( 'creator_lms_before_membership_loop' );

				//---this is used for membership listing wrapper div start----
				creator_lms_membership_loop_start(); 

				while ( have_posts() ) {
					the_post();

					omlms_get_template_part( 'content', 'membership' );
				}

				//---this is used for membership listing wrapper div end----
				creator_lms_membership_loop_end(); 

				/**
				 * Hook: creator_lms_after_membership_loop.
				 *
				 */
				do_action( 'creator_lms_after_membership_loop' );

			} else {
				/**
				 * Hook: creator_lms_no_membership.
				 * 
				 * Hooked: creator_lms_no_membership_found (5).
				 */
				do_action( 'creator_lms_no_membership' );
			}

			\OMLMS\Shortcodes\ShortCodeMembershipPlan::remove_custom_title( $title_filter );
		}else {
			
			?>
			<div class="pro-membership-message">
				<h2><?php echo __('No Membership Yet', 'ohmylms') ?></h2>
			</div>
			<?php
		}
		?>
	</div>
</section>
<?php

/**
 * Hook: creator_lms_membership_after_main_content.
 *
 */
do_action( 'creator_lms_membership_after_main_content' );


creator_lms_get_footer();
