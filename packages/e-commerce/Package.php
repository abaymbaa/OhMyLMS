<?php


defined( 'ABSPATH' ) || exit;


define( 'ECOMMERCE_MODULE_PREFIX', 'creator_lms' );

/**
 * Main package class.
 */
class Package {


	const VERSION = '1.0.0';

	public $prefix;

	public static function init(): void {
		self::includes();
	}

	/**
	 * Check if WooCommerce is active and ActionScheduler is available
	 * 
	 * @return bool
	 */
	private static function is_woocommerce_active(): bool {
		return defined( 'WC_PLUGIN_FILE' );
	}

	/**
	 * Check if ActionScheduler is already loaded
	 * 
	 * @return bool
	 */
	private static function is_action_scheduler_loaded(): bool {
		return function_exists( 'as_next_scheduled_action' ) || 
			   function_exists( 'as_schedule_single_action' ) || 
			   class_exists( 'ActionScheduler' );
	}

	public static function includes(): void {
		require self::get_path() . '/e-commerce/vendor/autoload.php';
		require self::get_path() . '/e-commerce/includes/Ecommerce.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/core-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/notice-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/utility-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/order-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/formatting-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/cart-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/student-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/page-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/coupon-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/rest-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/subscription-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Utility/membership-functions.php';
		require_once self::get_path() . '/e-commerce/includes/Tax/TaxService.php';
		require_once self::get_path() . '/e-commerce/includes/Tax/TaxCalculator.php';
	}

	public static function get_version(): string {
		return self::VERSION;
	}

	public static function get_path(): string {
		return dirname( __DIR__ );
	}

	public static function get_prefix() {
		return self::$prefix;
	}
}
