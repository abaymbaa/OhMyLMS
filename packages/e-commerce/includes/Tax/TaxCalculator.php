<?php

use CodeRex\Ecommerce\Includes\Tax\TaxService;

use function CodeRex\Ecommerce\ecommerce;

defined( 'ABSPATH' ) || exit();

/**
 * Tax Calculator class
 * 
 * Handles tax calculations for OhMyLMS
 * 
 * @since 1.0.0
 */
class TaxCalculator {

	/**
	 * Instance of this class
	 */
	private static $instance = null;

	/**
	 * Get instance
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	private function __construct() {
		// Private constructor for singleton
	}

	/**
	 * Calculate tax based on country and state
	 * 
	 * @param string $country Country code
	 * @param string $state State code
	 * @return array Tax calculation data
	 */
	public function calculate_tax( $tax_rate, $cart_totals = [] ) {
		$tax_service = TaxService::get_instance();

		// Use TaxService to calculate tax
		$total    = isset($cart_totals['total']) ? $cart_totals['total'] : 0;
		$tax_data = $tax_service->calculate_tax( $total, $tax_rate );

		// Add cart total for backward compatibility
		$tax_data['total_with_tax'] = $tax_data['total'];
		
		return $tax_data;
	}

	/**
	 * Get current cart total
	 * 
	 * @return float Cart total
	 */
	private function get_cart_total() {
		$cart_items = $this->get_cart_items();

		if ( empty( $cart_items ) ) {
			return 0;
		}
		
		$total = 0;
		foreach ( $cart_items as $item ) {
			// Use the original price before discounts for tax calculation
			// Tax should be calculated on the pre-discount amount
			if ( isset( $item['data'] ) && is_object( $item['data'] ) ) {
				// Get the actual product price (before any cart-level discounts)
				$item_price = $item['data']->is_on_sale() && $item['data']->validate_on_sale() 
					? $item['data']->get_price() 
					: $item['data']->get_regular_price();
			} else {
				// Fallback to line_total if data object is not available
				$item_price = isset( $item['line_total'] ) ? $item['line_total'] / $item['quantity'] : 0;
			}
			$total += $item_price * $item['quantity'];
		}
		
		return $total;
	}

	/**
	 * Get cart items
	 * 
	 * @return array Cart items
	 */
	private function get_cart_items() {
		$cart_data = ecommerce()->cart->get_cart_contents();

		return $cart_data;
	}

	/**
	 * Check if tax calculation is enabled
	 * 
	 * @return bool
	 */
	public function is_tax_enabled() {
		$tax_service = TaxService::get_instance();
		return $tax_service->is_tax_enabled();
	}
}

// Initialize the tax calculator
TaxCalculator::get_instance();
