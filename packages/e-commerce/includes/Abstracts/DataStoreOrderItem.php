<?php

namespace CodeRex\Ecommerce\Abstracts;

abstract class DataStoreOrderItem {

	/**
	 * Add an order item.
	 *
	 * @param int $order_id The ID of the order.
	 * @param mixed $item The item to add.
	 * @return mixed
	 */
	abstract public function add_order_item( $order_id, $item );

	/**
	 * Update an order item.
	 *
	 * @param int $item_id The ID of the item.
	 * @param mixed $item The item data to update.
	 * @return mixed
	 */
	abstract public function update_order_item( $item_id, $item );

	/**
	 * Delete an order item.
	 *
	 * @param int $item_id The ID of the item.
	 * @return mixed
	 */
	abstract public function delete_order_item( $item_id );

	/**
	 * Add metadata to an order item.
	 *
	 * @param int $item_id The ID of the item.
	 * @param string $meta_key The metadata key.
	 * @param mixed $meta_value The metadata value.
	 * @return mixed
	 */
	abstract public function add_order_item_metadata( $item_id, $meta_key, $meta_value );

	/**
	 * Update metadata of an order item.
	 *
	 * @param int $item_id The ID of the item.
	 * @param string $meta_key The metadata key.
	 * @param mixed $meta_value The metadata value.
	 * @return mixed
	 */
	abstract public function update_order_item_metadata( $item_id, $meta_key, $meta_value );

	/**
	 * Delete metadata from an order item.
	 *
	 * @param int $item_id The ID of the item.
	 * @param string $meta_key The metadata key.
	 * @param mixed $meta_value The metadata value.
	 * @param bool $delete_all Whether to delete all metadata with the given key.
	 * @return mixed
	 */
	abstract public function delete_order_item_metadata( $item_id, $meta_key, $meta_value = '', $delete_all = false );

	/**
	 * Get the type of an order item.
	 *
	 * @param int $item_id The ID of the item.
	 * @return mixed
	 */
	abstract public function get_order_item_type( $item_id );

	/**
	 * Get the ID of an order item.
	 *
	 * @param int $item_id The ID of the item.
	 * @return mixed
	 */
	abstract public function get_order_item_id( $item_id );
}
