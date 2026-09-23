<?php
/**
 * "Powered by OhMyLMS" footer badge.
 *
 * Renders a small, unobtrusive badge in the site footer for the free version
 * of the plugin. Hidden automatically when the Pro version is active so Pro
 * sites can stay white-labeled.
 *
 * @package OMLMS\Assets
 * @since 1.2.12
 */

namespace OMLMS\Assets;

defined( 'ABSPATH' ) || exit();

class PoweredByBadge {

	/**
	 * Register hooks.
	 *
	 * @since 1.2.12
	 * @return void
	 */
	public function init() {
		add_action( 'wp_footer', array( $this, 'render' ), 99 );
	}

	/**
	 * Whether the badge should be shown.
	 *
	 * Shown whenever there is no active Pro license: the free version, and also
	 * Pro installs whose license is not active. A valid Pro license hides it so
	 * paid sites stay white-labeled. It is further limited to OhMyLMS
	 * contexts only — LMS pages/CPTs, or any page using a OhMyLMS block or
	 * shortcode. Site owners can also disable it via the
	 * `creator_lms_show_powered_by_badge` filter.
	 *
	 * @since 1.2.12
	 * @return bool
	 */
	protected function should_show() {
		if ( creator_lms_is_pro_license() ) {
			return false;
		}

		if ( ! $this->is_creator_lms_context() ) {
			return false;
		}

		return (bool) apply_filters( 'creator_lms_show_powered_by_badge', true );
	}

	/**
	 * Whether the current request is a OhMyLMS context.
	 *
	 * True on LMS pages/CPTs (via is_creator_lms() / checkout), or on any page
	 * whose content contains a OhMyLMS block or shortcode.
	 *
	 * @since 1.2.12
	 * @return bool
	 */
	protected function is_creator_lms_context() {
		if ( function_exists( 'is_creator_lms' ) && is_creator_lms() ) {
			return true;
		}

		if ( function_exists( 'is_creator_lms_checkout' ) && is_creator_lms_checkout() ) {
			return true;
		}

		$blocks = array(
			'creator-lms/dashboard',
			'creator-lms/my-courses',
			'creator-lms/checkout',
			'creator-lms/profile',
			'creator-lms/course-list',
			'creator-lms/buy-now',
			'creator-lms/offer-button',
		);
		foreach ( $blocks as $block ) {
			if ( has_block( $block ) ) {
				return true;
			}
		}

		$post = get_post();
		if ( $post instanceof \WP_Post && ! empty( $post->post_content ) ) {
			$shortcodes = array(
				'creator_lms_checkout',
				'creator_lms_membership_plan',
				'creator_lms_course_list',
				'creator_lms_my_profile',
				'creator_lms_dashboard',
				'creator_lms_profile',
				'creator_lms_my_courses',
				'creator_lms_buy_now',
			);
			foreach ( $shortcodes as $shortcode ) {
				if ( has_shortcode( $post->post_content, $shortcode ) ) {
					return true;
				}
			}
		}

		return (bool) apply_filters( 'creator_lms_is_powered_by_badge_context', false );
	}

	/**
	 * Output the badge markup and styles.
	 *
	 * @since 1.2.12
	 * @return void
	 */
	public function render() {
		if ( ! $this->should_show() ) {
			return;
		}

		$url = apply_filters(
			'creator_lms_powered_by_badge_url',
			'https://creatorlms.net/?utm_source=powered_by_badge&utm_medium=footer&utm_campaign=free'
		);
		?>
		<style id="omlms-powered-by-badge-style">
			.omlms-powered-by-badge-wrap {
				width: 100%;
				box-sizing: border-box;
				padding: 15px;
				text-align: center;
				background: transparent;
				display: inline-flex;
				align-items: center;
				gap: 6px;
				line-height: 1;
				font-weight: 500;
				justify-content: center;
			}
			.omlms-powered-by-badge:hover,
			.omlms-powered-by-badge:focus {
				opacity: 1;
			}
			.omlms-powered-by-badge__dot {
				width: 7px;
				height: 7px;
				border-radius: 50%;
				background: #6d28d9;
				display: inline-block;
			}
		</style>
		<div class="omlms-powered-by-badge-wrap">
			<span class="omlms-powered-by-badge__dot" aria-hidden="true"></span>
			Powered by
			<a
				class="omlms-powered-by-badge"
				href="<?php echo esc_url( $url ); ?>"
				target="_blank"
				rel="noopener nofollow"
			>
				<?php echo esc_html__( 'OhMyLMS', 'ohmylms' ); ?>
			</a>
		</div>
		<?php
	}
}

( new PoweredByBadge() )->init();
