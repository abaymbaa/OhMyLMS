<?php

namespace OMLMS\Shortcodes;

use CodeRex\Ecommerce\DataStores;
use OMLMS\Data\Student;
use function CodeRex\Ecommerce\ecommerce;

defined( 'ABSPATH' ) || exit;

class ShortCodeMyProfile {

	/**
	 * Render the checkout form
	 *
	 * @since 1.0.0
	 */
	public static function output( $atts ) {
		global $wp;

		// Check cart class is loaded or abort.
		if ( is_null( ecommerce()->cart ) ) {
			return;
		}

		// Show login form if not logged in.
		if ( ! is_user_logged_in() ) {
			omlms_get_template( 'global/toast.php' );
			omlms_get_template( 'profile/form-login.php' );
			return;
		}

		// Output the my account page.
		self::dashboard( $atts ? $atts : array() );
	}


	private static function dashboard( $atts ) {
		$args = shortcode_atts(
			$atts,
			'creator_lms_my_profile'
		);

		omlms_get_template(
			'profile/my-profile',
			array(
				'current_user' => get_user_by( 'id', get_current_user_id() ),
			)
		);
	}


	/**
	 * Edit account details page.
	 */
	public static function settings() {
		$current_user_id = get_current_user_id();
		$student         = new Student( $current_user_id );

		omlms_get_template(
			'profile/settings.php',
			array(
				'student' => $student,
			)
		);
	}

	/**
	 * Edit account details page.
	 */
	public static function name() {
		omlms_get_template( 'profile/name.php', array( 'user' => get_user_by( 'id', get_current_user_id() ) ) );
	}

	/**
	 * Edit account details page.
	 */
	public static function main_content() {
		$student = new Student( get_current_user_id() );
		omlms_get_template( 'profile/dashboard-content.php', array( 'student' => $student ) );
	}
	/**
	 * Edit account details page.
	 */
	public static function profile() {
		$current_user_id = get_current_user_id();
		$student         = new Student( $current_user_id );
		omlms_get_template(
			'profile/profile.php',
			array(
				'student' => $student,
			)
		);
	}
	/**
	 * Edit account details page.
	 */
	public static function my_courses() {
		omlms_get_template( 'profile/my-courses.php', array( 'user' => get_user_by( 'id', get_current_user_id() ) ) );
	}
	/**
	 * Edit account details page.
	 */
	public static function profile_layout() {
		omlms_get_template( 'profile/profile-layout.php', array( 'user' => get_user_by( 'id', get_current_user_id() ) ) );
	}
	/**
	 * Edit account details page.
	 */
	public static function notifications() {
		$current_user_id = get_current_user_id();
		$student         = new Student( $current_user_id );
		omlms_get_template(
			'profile/notifications.php',
			array(
				'student' => $student,
			)
		);
	}

	/**
	 * Edit account details page.
	 */
	public static function transactions_history( $current_page ) {
		$current_page   = empty( $current_page ) ? 1 : absint( $current_page );
		$args           = array(
			'post_type'      => 'omlms-order',
			'post_status'    => array( 'omlms-completed', 'omlms-processing', 'omlms-on-hold', 'omlms-cancelled', 'omlms-pending', 'omlms-refunded' ),
			'author'         => get_current_user_id(),
			'posts_per_page' => 5,
			'paged'          => $current_page,
		);
		$student_orders = DataStores::load( 'order' )->query( $args );

		omlms_get_template(
			'profile/transactions-history.php',
			array(
				'current_page'   => absint( $current_page ),
				'student_orders' => $student_orders,
				'has_orders'     => 0 < $student_orders->total,
			)
		);
	}

	/**
	 * Profile's membership page.
	 */
	public static function membership( $current_page ) {
		$current_page   = empty( $current_page ) ? 1 : absint( $current_page );
		$args           = array(
			'post_type'      => 'omlms-order',
			'post_status'    => array( 'omlms-completed', 'omlms-processing', 'omlms-on-hold', 'omlms-cancelled', 'omlms-pending', 'omlms-refunded' ),
			'author'         => get_current_user_id(),
			'posts_per_page' => 5,
			'paged'          => $current_page,
			'post_parent'    => 0,
		);
		$student_orders = DataStores::load( 'order' )->query( $args );

		if ( creator_lms_is_pro() ) {
			omlms_get_template(
				'profile/membership.php',
				array(
					'current_page'   => absint( $current_page ),
					'student_orders' => $student_orders,
					'has_orders'     => 0 < $student_orders->total,
				)
			);
		}
	}

	/**
	 * Profile's invoice details page.
	 */
	public static function invoice_details( $current_page ) {
		$current_page = empty( $current_page ) ? 1 : absint( $current_page );
		$order_id     = ! empty( $_GET['id'] ) ? sanitize_text_field( $_GET['id'] ) : '';
		if ( ! $order_id ) {
			return;
		}
		$order = ecommerce_get_order( $order_id );
		omlms_get_template(
			'profile/invoice-details.php',
			array(
				'current_page' => absint( $current_page ),
				'order'        => $order,
			)
		);
	}

	/**
	 * Edit account details page.
	 */
	public static function billing_information() {
		omlms_get_template( 'profile/billing-information.php', array( 'user' => get_user_by( 'id', get_current_user_id() ) ) );
	}
	/**
	 * Edit account details page.
	 */
	public static function profile_edit() {
		$current_user_id = get_current_user_id();
		$student         = new Student( $current_user_id );
		omlms_get_template(
			'profile/profile-edit.php',
			array(
				'student' => $student,
			)
		);
	}
}
