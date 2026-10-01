<?php

namespace CodeRex\Ecommerce\Abstracts;

defined( 'ABSPATH' ) || exit;

/**
 * Class DataStore
 * @package OhMyLMS\Abstracts
 * @since 1.0.0
 */
abstract class DataStore {

	protected $must_exist_meta_keys = array();

	/**
	 * Create new record
	 *
	 * @param $data Data
	 * @return mixed
	 * @since 1.0.0
	 */
	abstract public function create( &$data );

	/**
	 * Read new record
	 *
	 * @param $data Data
	 * @return mixed
	 * @since 1.0.0
	 */
	abstract public function read( &$data );


	/**
	 * Update new record
	 *
	 * @param $data Data
	 * @return mixed
	 * @since 1.0.0
	 */
	abstract public function update( &$data );


	/**
	 * Delete new record
	 *
	 * @param $data
	 * @param array $args
	 * @return mixed
	 * @since 1.0.0
	 */
	abstract public function delete( &$data, $args = array() );


	/**
	 * @param $object
	 * @param $meta_key
	 * @param $meta_value
	 * @return bool
	 */
	protected function update_or_delete_post_meta( $object, $meta_key, $meta_value ) {
		if ( in_array( $meta_value, array( array(), '' ), true ) && ! in_array( $meta_key, $this->must_exist_meta_keys, true ) ) {
			$updated = delete_post_meta( $object->get_id(), $meta_key );
		} else {
			$updated = update_post_meta( $object->get_id(), $meta_key, $meta_value );
		}

		return (bool) $updated;
	}


	protected function string_to_timestamp( $time_string ) {
		return '0000-00-00 00:00:00' !== $time_string ? ohmylms_string_to_timestamp( $time_string ) : null;
	}
}
