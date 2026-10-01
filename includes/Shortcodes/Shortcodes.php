<?php
/**
 * Class Shortcodes
 *
 * @package OhMyLMS\Shortcodes
 * @since 1.0.0
 */

namespace OhMyLMS\Shortcodes;

defined( 'ABSPATH' ) || exit;

class Shortcodes {

	/**
	 * Init shortcodes
	 */
	public static function init() {
		$shortcodes = array(
 'ohmylms_offer_button' => __CLASS__ . '::offer_button',
			'ohmylms_checkout'        => __CLASS__ . '::checkout',
			'ohmylms_membership_plan' => __CLASS__ . '::membership_plan',
			'ohmylms_course_list'     => __CLASS__ . '::course_list',
			'ohmylms_my_profile'      => __CLASS__ . '::my_profile',
			'ohmylms_dashboard'       => __CLASS__ . '::dashboard',
			'ohmylms_profile'         => __CLASS__ . '::profile',
			'ohmylms_my_courses'      => __CLASS__ . '::my_courses',
			'ohmylms_buy_now'         => __CLASS__ . '::buy_now',
		);
		foreach ( $shortcodes as $shortcode => $callback ) {
			add_shortcode( apply_filters( "{$shortcode}_shortcode_tag", $shortcode ), $callback );
		}
	}

	/**
	 * Buy Now button shortcode
	 *
	 * @param $atts
	 * @return false|string
	 */
	public static function buy_now( $atts ) {
		return self::shortcode_wrapper( array( 'OhMyLMS\Shortcodes\ShortCodeBuyNow', 'output' ), $atts );
	}

	/**
	 * Shortcode wrapper
	 *
	 * @param callable $callback The callback function to execute
	 * @param array    $atts     Shortcode attributes
	 * @param array    $wrapper  Wrapper configuration
	 * @return false|string
	 * @since 1.0.0
	 */
	public static function shortcode_wrapper(
		$callback,
		$atts = array(),
		$wrapper = array(
			'class'  => 'ohmylms',
			'before' => null,
			'after'  => null,
		)
	) {
		ob_start();

		echo empty( $wrapper['before'] ) ? '<div class="' . esc_attr( $wrapper['class'] ) . '">' : esc_html( $wrapper['before'] );
		call_user_func( $callback, $atts );
		echo empty( $wrapper['after'] ) ? '</div>' : esc_html( $wrapper['after'] );
		return ob_get_clean();
	}


	/**
	 * Checkout page shortcode.
	 *
	 * @param $atts
	 * @return false|string
	 * @since 1.0.0
	 */
	public static function checkout( $atts ) {
		ob_start();
		echo '<div class="ohmylms">';
		\OhMyLMS\Shortcodes\ShortCodeCheckout::output( $atts );
		echo '</div>';
		return ob_get_clean();
	}

	/**
	 * Membership plan shortcode
	 *
	 * @param $atts
	 * @return false|string
	 * @since 1.0.0
	 */
	public static function membership_plan( $atts ) {
		return self::shortcode_wrapper( array( 'OhMyLMS\Shortcodes\ShortCodeMembershipPlan', 'output' ), $atts );
	}

	/**
	 * Course list shortcode
	 *
	 * @param $atts
	 * @return false|string
	 * @since 1.0.0
	 */
	public static function course_list( $atts ) {
		return self::shortcode_wrapper( array( 'OhMyLMS\Shortcodes\ShortcodeCourseList', 'output' ), $atts );
	}


	/**
	 * Dashboard page shortcode.
	 *
	 * @param array $atts
	 * @return false|string
	 * @since 1.0.0
	 */
	public static function my_profile( $atts ) {
		return self::shortcode_wrapper( array( 'OhMyLMS\Shortcodes\ShortCodeMyProfile', 'output' ), $atts );
	}

	/**
	 * Student dashboard shortcode.
	 *
	 * @param array $atts
	 * @return false|string
	 * @since 1.0.0
	 */
	public static function dashboard( $atts ) {
		return self::shortcode_wrapper( array( 'OhMyLMS\Shortcodes\ShortCodeDashboard', 'output' ), $atts );
	}

	/**
	 * Student profile shortcode.
	 *
	 * @param array $atts
	 * @return false|string
	 * @since 1.0.0
	 */
	public static function profile( $atts ) {
		return self::shortcode_wrapper( array( 'OhMyLMS\Shortcodes\ShortCodeProfile', 'output' ), $atts );
	}

	/**
	 * Student my courses shortcode.
	 *
	 * @param array $atts
	 * @return false|string
	 * @since 1.0.0
	 */
	public static function my_courses( $atts ) {
		return self::shortcode_wrapper( array( 'OhMyLMS\Shortcodes\ShortCodeMyCourses', 'output' ), $atts );
	}

public static function offer_button( $atts ) {
		return self::shortcode_wrapper( array( 'OhMyLMS\Shortcodes\ShortCodeOfferButton', 'output' ), $atts );
	}
}
