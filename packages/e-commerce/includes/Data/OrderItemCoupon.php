<?php

namespace CodeRex\Ecommerce\Data;

class OrderItemCoupon extends OrderItem {

	/**
	 * Order Data array. This is the core order data exposed in APIs since 3.0.0.
	 *
	 * @since 3.0.0
	 * @var array
	 */
	protected array $extra_data = array(
		'code'     => '',
		'discount' => 0,
	);

	public function get_name() {
		return $this->get_prop( 'name' );
	}

	public function set_discount( $discount ) {
		$this->set_prop( 'discount', $discount );
	}

	public function set_code( $code ) {
		$this->set_prop( 'code', $code );
	}

	public function get_discount( $context = 'view' ) {
		return $this->get_prop( 'discount', $context );
	}

	public function get_code() {
		return $this->get_prop( 'code' );
	}


	public function get_type() {
		return 'coupon';
	}

	public function set_name($name) {
		$this->set_prop( 'name', $name );
	}
}
