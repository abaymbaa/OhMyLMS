<?php
namespace CodeRex\Ecommerce\DataStore;

use CodeRex\Ecommerce\Abstracts\Data;
use CodeRex\Ecommerce\Data\OrderItem;
use CodeRex\Ecommerce\Data\OrderItemCourse;

class OrderItemCourseStore extends OrderItemStore {

	/**
	 * Create new record
	 *
	 * @param $item OrderItemCourse
	 * @return mixed
	 * @since 1.0.0
	 */
	public function create( &$item ) {
		global $wpdb;

		$wpdb->insert(
			$wpdb->prefix . 'ohmylms_order_items',
			array(
				'order_item_name' => $item->get_name(),
				'order_item_type' => $item->get_type(),
				'order_id'        => $item->get_order_id(),
			)
		);
		$item->set_id( $wpdb->insert_id );
		$this->save_item_data( $item );
	}

	/**
	 * Read new record
	 *
	 * @param $item OrderItemCourse
	 * @return mixed
	 * @since 1.0.0
	 */
	public function read( &$item ) {
		parent::read( $item );
		$id = $item->get_id();
		$item->set_props(
			array(
				'course_id' => $this->get_metadata( $id, '_course_id', true ),
				'quantity'  => $this->get_metadata( $id, '_quantity', true ),
				'subtotal'  => $this->get_metadata( $id, '_line_subtotal', true ),
				'total'     => $this->get_metadata( $id, '_line_total', true ),
			)
		);
	}

	/**
	 * Update new record
	 *
	 * @param $data Data
	 * @return mixed
	 * @since 1.0.0
	 */
	public function update( &$data ) {
		// TODO: Implement update() method.
	}

	/**
	 * Delete new record
	 *
	 * @param $data
	 * @param array $args
	 * @return mixed
	 * @since 1.0.0
	 */
	public function delete( &$data, $args = array() ) {
		// TODO: Implement delete() method.
	}

	/**
	 * Saves an item's data to the database / item meta.
	 *
	 * @param OrderItem $item Order item object.
	 *
	 * @since 1.0.0
	 */
	public function save_item_data( &$item ) {
		$id                = $item->get_id();
		$meta_key_to_props = array(
			'_course_id'     => 'course_id',
			'_quantity'      => 'quantity',
			'_line_subtotal' => 'subtotal',
			'_line_total'    => 'total',
		);
		$props_to_update   = $this->get_props_to_update( $item, $meta_key_to_props, 'order_item' );

		foreach ( $props_to_update as $meta_key => $prop ) {
			$this->update_metadata( $id, $meta_key, $item->{"get_$prop"}( 'edit' ) );
		}
	}
}
