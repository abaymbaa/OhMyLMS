<?php

namespace CodeRex\Ecommerce\Factory;

use CodeRex\Ecommerce\Data\OrderItemCourse;

class OrderItemCourseFactory {

	/**
	 * Get order item course
	 *
	 * @param bool $order_item_id
	 * @return OrderItemCourse|bool
	 */
	public function get_order_item_course( $order_item_id = false ) {
		$order_item_id = $this->get_order_item_id( $order_item_id );

		if ( ! $order_item_id ) {
			return false;
		}

		return new OrderItemCourse( $order_item_id );
	}
}
