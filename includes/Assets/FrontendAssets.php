<?php

namespace OMLMS\Assets;

use OMLMS\Abstracts\Assets;

defined( 'ABSPATH' ) || exit();


class FrontendAssets extends Assets {

	public function init() {

		add_action( 'wp_enqueue_scripts', array( $this, 'load_scripts' ) );
		add_action( 'wp_print_scripts', array( $this, 'localize_printed_scripts' ), 5 );
	}

	/**
	 * Get the scripts to be enqueued.
	 *
	 * @return array Filtered array of scripts to be enqueued.
	 * @since 1.0.0
	 */
	public function get_scripts() {
		$suffix  = '';
		$scripts = array(
			'omlms-slick'       => array(
				'src'       => self::get_asset_url( 'assets/dist/frontend/slick' . $suffix . '.js' ),
				'deps'      => array( 'jquery' ),
				'in_footer' => true,
				'version'   => '1.8.1',
			),
			'omlms-frontend'    => array(
				'src'       => self::get_asset_url( 'assets/dist/frontend/creator-lms' . $suffix . '.js' ),
				'deps'      => array(  'wp-i18n', 'jquery' ),
				'in_footer' => true,
				'version'   => CREATOR_LMS_VERSION,
			),
			'omlms-video-player' => array(
				'src'       => self::get_asset_url( 'assets/dist/frontend/video-player' . $suffix . '.js' ),
				'deps'      => array( 'jquery' ),
				'in_footer' => true,
				'version'   => CREATOR_LMS_VERSION,
			),
			'omlms-video-progress-tracker' => array(
				'src'       => self::get_asset_url( 'assets/dist/frontend/video-progress-tracker' . $suffix . '.js' ),
				'deps'      => array( 'jquery'),
				'in_footer' => true,
				'version'   => CREATOR_LMS_VERSION,
			),
			'omlms-add-to-cart' => array(
				'src'       => self::get_asset_url( 'assets/dist/frontend/add-to-cart' . $suffix . '.js' ),
				'deps'      => array( 'jquery' ),
				'in_footer' => true,
				'version'   => CREATOR_LMS_VERSION,
			),
			'omlms-checkout'    => array(
				'src'       => self::get_asset_url( 'assets/dist/frontend/checkout' . $suffix . '.js' ),
				'deps'      => array(  'wp-i18n', 'jquery' ),
				'in_footer' => true,
				'version'   => CREATOR_LMS_VERSION,
			),
			'omlms-tax-calculation' => array(
				'src'       => self::get_asset_url( 'assets/dist/frontend/tax-calculation' . $suffix . '.js' ),
				'deps'      => array( 'jquery' ),
				'in_footer' => true,
				'version'   => CREATOR_LMS_VERSION,
			),
		);
		return is_array( $scripts ) ? array_filter( $scripts ) : array();
	}

	/**
	 * Get the styles to be enqueued.
	 *
	 * @return array Filtered array of styles to be enqueued.
	 * @since 1.0.0
	 */
	public function get_styles() {
		$styles = apply_filters(
			'creator_lms_enqueue_styles',
			array(
				'omlms-frontend' => array(
					'src'     => self::get_asset_url( 'assets/css/style.css' ),
					'deps'    => '',
					'version' => CREATOR_LMS_VERSION,
					'media'   => 'all',
					'has_rtl' => true,
				)
			)
		);
		return is_array( $styles ) ? array_filter( $styles ) : array();
	}

	public function get_script_data( $handle ) {
		switch ( $handle ) {
			case 'omlms-frontend':
				$localized_data = array(
					'ajax_url'                    => admin_url( 'admin-ajax.php' ),
					'current_student_id'          => get_current_user_id(),
					'nonce'                       => wp_create_nonce( 'ohmylms' ),
					'load_more_nonce'             => wp_create_nonce( 'load_more_nonce' ),
					'search_filter_nonce'         => wp_create_nonce( 'search_filter_nonce' ),
					'video_completion_threshold'  => max( 1, min( 100, (int) get_option( 'creator_lms_video_completion_threshold', 90 ) ) ),
					'is_creator_page'             => omlms_is_content_page(),
					'content_protection'          => get_option( 'creator_lms_content_protection', 'no' ),
					'email_verification_required' => \OMLMS\Services\EmailVerificationService::is_required(),
				);

				if ( omlms_is_content_page() ) {
					$localized_data['lesson_completed_nonce']      = wp_create_nonce( 'lesson_completed_nonce' );
					$localized_data['assignment_submission_nonce'] = wp_create_nonce( 'assignment_submission_nonce' );
					$localized_data['save_remaining_time']         = wp_create_nonce( 'save_remaining_time' );
					$localized_data['lesson_access_nonce']         = wp_create_nonce( 'lesson_access_nonce' );
					$localized_data['quiz_exit_submission']        = wp_create_nonce( 'quiz_exit_submission' );
					$localized_data['video_progress_nonce']        = wp_create_nonce( 'video_progress_nonce' );
				}

				if ( omlms_is_single_course_page() || is_creator_lms_dashboard() || is_creator_lms_my_courses_shortcode() ) {
					$localized_data['course_drop_nonce']        = wp_create_nonce( 'course_drop_nonce' );
					$localized_data['download_certificate_nonce'] = wp_create_nonce( 'download_certificate_nonce' );
				}

				if ( is_creator_lms_profile_shortcode() ) {
					$localized_data['student_profile_cover_upload_nonce'] = wp_create_nonce( 'student_profile_cover_image' );
					$localized_data['student_profile_cover_delete_nonce'] = wp_create_nonce( 'student_profile_cover_image_delete' );
					$localized_data['student_profile_image_upload_nonce'] = wp_create_nonce( 'student_profile_image_upload' );
				}

				if ( omlms_is_membership_page() || omlms_is_membership_plan_shortcode() || is_creator_lms_dashboard() ) {
					$localized_data['cancel_membership_nonce'] = wp_create_nonce( 'cancel_membership_nonce' );
				}
				break;
			case 'omlms-add-to-cart':
				$localized_data = array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'nonce'    => wp_create_nonce( 'add-to-cart' ),
				);
				break;
			case 'omlms-checkout':
				$localized_data = array(
					'ajax_url'                => admin_url( 'admin-ajax.php' ),
					'nonce'                   => wp_create_nonce( 'add-to-cart' ),
					'apply_coupon_nonce'      => wp_create_nonce( 'apply-coupon' ),
					'remove_coupon_nonce'     => wp_create_nonce( 'remove-coupon' ),
					'gateway_required_fields' => self::get_gateway_required_checkout_fields(),
				);
				break;
			case 'omlms-tax-calculation':
				$localized_data = array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'nonce'    => wp_create_nonce( 'omlms_calculate_tax' ),
				);
				break;
			default:
				$localized_data = false;
		}

		return apply_filters( 'creator_lms_get_script_data', $localized_data, $handle );
	}

	/**
	 * Map of payment gateway id => checkout field keys that gateway requires.
	 *
	 * Feeds the checkout script so it can toggle the "required" state of fields
	 * (e.g. phone) live when the buyer switches payment method. Server-side
	 * validation in Checkout::validate_gateway_required_fields() is authoritative.
	 *
	 * @since 1.2.19
	 * @return array<string, string[]>
	 */
	private static function get_gateway_required_checkout_fields() {
		$map = array();

		if ( ! function_exists( 'CodeRex\Ecommerce\ecommerce' ) ) {
			return $map;
		}

		$gateways = \CodeRex\Ecommerce\ecommerce()->gateways();
		if ( ! $gateways || ! method_exists( $gateways, 'get_available_payment_gateways' ) ) {
			return $map;
		}

		foreach ( (array) $gateways->get_available_payment_gateways() as $gateway ) {
			if ( ! is_object( $gateway ) || ! isset( $gateway->id ) || ! method_exists( $gateway, 'get_required_checkout_fields' ) ) {
				continue;
			}
			$map[ $gateway->id ] = $gateway->get_required_checkout_fields();
		}

		return $map;
	}

	/**
	 * Load and enqueue scripts and styles.
	 *
	 * @since 1.0.0
	 */
	public function load_scripts() {
		$this->register_scripts();
		$this->register_styles();

		$layout       = get_option( 'creator_lms_archive_page_layout', 'grid' );
		$layout_style = get_option( 'creator_lms_archive_page_layout_style', 'grid-style1' );

		if ( omlms_is_single_course_page() ||
			( is_creator_lms_archive() || omlms_is_course_list_shortcode() &&
			'grid' === $layout &&
			( 'grid-style3' === $layout_style || 'grid-style4' === $layout_style ) )
		) {
			wp_enqueue_script( 'omlms-slick' );
		}

		if(omlms_is_course_list_shortcode()) {
			wp_enqueue_script( 'omlms-slick' );
			wp_enqueue_script( 'omlms-frontend' );
		}

		if ( isset( $_GET['omlms-certificate-data'] ) ) {
			wp_enqueue_script(
				'html2pdf',
				plugin_dir_url( __FILE__ ) . '/packages/html2pdf.bundle.min.js',
				array(),
				'0.10.1',
				true
			);
		}

		if ( is_creator_lms_buy_now() || is_creator_lms_archive() || omlms_is_course_list_shortcode() || omlms_is_membership_page() || omlms_is_membership_plan_shortcode() || is_creator_lms_dashboard() || is_creator_lms_profile_shortcode() || is_creator_lms_my_courses_shortcode() || ( isset( $_GET['omlms-certificate-data'] ) ) ) {
			wp_enqueue_script( 'omlms-frontend' );
			wp_enqueue_script( 'omlms-add-to-cart' );
		}

		if ( omlms_is_single_course_page() ) {
			wp_enqueue_script( 'omlms-add-to-cart' );
		}
		
		if ( is_creator_lms_checkout() ) {
			wp_enqueue_script( 'omlms-checkout' );
			wp_enqueue_script( 'omlms-tax-calculation' );
			wp_enqueue_script( 'omlms-frontend' );

			wp_enqueue_style( 'omlms-frontend' );
			wp_enqueue_style( 'omlms-general' );
		}

		if ( is_creator_lms() ) {
			wp_enqueue_script( 'omlms-frontend' );
			wp_enqueue_style( 'omlms-frontend' );
			wp_enqueue_style( 'omlms-general' );
		}

		if ( omlms_is_content_page() ) {
			wp_enqueue_script( 'omlms-video-player' );
			wp_enqueue_script( 'omlms-video-progress-tracker' );
		}
	}

	/**
	 * Check if a script should be enqueued.
	 *
	 * @param array  $script
	 * @param string $screen_id
	 * @return bool
	 * @since 1.0.0
	 */
	public function should_enqueue( $script, $screen_id ): bool {
		return true;
	}
}

( new FrontendAssets() )->init();
