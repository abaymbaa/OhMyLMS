<?php

namespace CodeRex\Ecommerce\Factory;

use CodeRex\Ecommerce\Data\Order;
use CodeRex\Ecommerce\Data\OrderRefund;

class OrderFactory {

	/**
	 * Get order
	 *
	 * @param bool $order_id
	 * @return Order|bool
	 */
	public function get_order( $order_id = false ) {
		$order_id = $this->get_order_id( $order_id );

		if ( ! $order_id ) {
			return false;
		}

		return new Order( $order_id );
	}

	public function get_refund_order( $order_id = false ) {
		$order_id = $this->get_order_id( $order_id );

		if ( ! $order_id ) {
			return false;
		}

		return new OrderRefund( $order_id );
	}


	/**
	 * Get course id
	 *
	 * @param $course
	 * @return bool|int
	 */
	private function get_order_id( $order ) {
		global $post;

		if ( false === $order && isset( $post, $post->ID ) && 'omlms-order' === get_post_type( $post->ID ) ) {
			return absint( $post->ID );
		} elseif ( false === $order && isset( $post, $post->ID ) && 'omlms_order_refund' === get_post_type( $post->ID ) ) {
			return $order;
		} elseif ( is_numeric( $order ) ) {
			return $order;
		} elseif ( $order instanceof Order ) {
			return $order->get_id();
		} elseif ( ! empty( $order->ID ) ) {
			return $order->ID;
		} else {
			return false;
		}
	}
}
