<?php

namespace OMLMS\Shortcodes;

defined( 'ABSPATH' ) || exit;

/**
 * Membership Plan Shortcode
 *
 * Renders membership plans using the same markup/hooks as the default
 * membership archive page (templates/archive-membership.php), so the
 * shortcode matches that page's design wherever it's placed.
 *
 * Usage: [creator_lms_membership_plan title="Pick a plan"]
 * `title` overrides the "Select plan that works best for you." heading
 * for this instance only.
 *
 * Class ShortCodeMembershipPlan
 *
 * @package OMLMS\Shortcodes
 * @since 1.0.0
 */
class ShortCodeMembershipPlan {

	/**
	 * Render the membership plan
	 *
	 * @since 1.0.0
	 */
	public static function output( $atts ): void {
		self::membership_plan( $atts );
	}


	/**
	 * Show the plan.
	 *
	 * @since 1.0.0
	 */
	private static function membership_plan( $atts ) {
		$atts = shortcode_atts(
			array(
				'title' => '',
			),
			$atts,
			'creator_lms_membership_plan'
		);

		$title_filter = self::apply_custom_title( $atts['title'] );

		do_action( 'creator_lms_membership_before_main_content' );
		?>
		<section class="creator-lms-membership">
			<div class="creator-lms-container">
				<?php
				do_action( 'creator_lms_membership_section_header' );

				$query = new \WP_Query(
					array(
						'post_type'      => CREATOR_LMS_MEMBERSHIP_CPT,
						'posts_per_page' => 10,
					)
				);

				if ( $query->have_posts() ) {
					do_action( 'creator_lms_before_membership_loop' );

					creator_lms_membership_loop_start();

					while ( $query->have_posts() ) {
						$query->the_post();
						omlms_get_template_part( 'content', 'membership' );
					}

					creator_lms_membership_loop_end();

					do_action( 'creator_lms_after_membership_loop' );
				} else {
					do_action( 'creator_lms_no_membership' );
				}

				wp_reset_postdata();
				?>
			</div>
		</section>
		<?php
		do_action( 'creator_lms_membership_after_main_content' );

		self::remove_custom_title( $title_filter );
	}

	/**
	 * Override the membership archive heading for the current render only.
	 *
	 * @param string $title Custom title, empty to leave the default heading untouched.
	 * @return callable|null The added filter callback, or null if no override was applied.
	 * @since 1.0.0
	 */
	public static function apply_custom_title( string $title ) {
		if ( '' === $title ) {
			return null;
		}

		$filter = function () use ( $title ) {
			return $title;
		};
		add_filter( 'creator_lms_membership_archive_title', $filter );

		return $filter;
	}

	/**
	 * Remove a title override added by apply_custom_title().
	 *
	 * @param callable|null $filter
	 * @return void
	 * @since 1.0.0
	 */
	public static function remove_custom_title( $filter ): void {
		if ( $filter ) {
			remove_filter( 'creator_lms_membership_archive_title', $filter );
		}
	}

	/**
	 * Read the `title` attribute out of a raw [creator_lms_membership_plan]
	 * shortcode string, even when that shortcode is never executed via
	 * do_shortcode() (e.g. the default membership page's content is bypassed
	 * by TemplateLoader in favor of archive-membership.php).
	 *
	 * @param string $content Raw post content to scan.
	 * @return string The title attribute, or '' if absent.
	 * @since 1.0.0
	 */
	public static function extract_title_from_content( string $content ): string {
		if ( '' === $content || ! has_shortcode( $content, 'creator_lms_membership_plan' ) ) {
			return '';
		}

		$pattern = get_shortcode_regex( array( 'creator_lms_membership_plan' ) );
		if ( ! preg_match( '/' . $pattern . '/s', $content, $matches ) ) {
			return '';
		}

		$atts = shortcode_parse_atts( $matches[3] );

		return ! empty( $atts['title'] ) ? $atts['title'] : '';
	}
}
