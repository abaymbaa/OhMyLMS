<?php

namespace OMLMS\Abstracts;

defined( 'ABSPATH' ) || exit;

/**
 * Class DataStore
 *
 * @package OMLMS\Abstracts
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
	 * @param $data
	 * @param $meta_key
	 * @param $meta_value
	 * @return bool
	 */
	protected function update_or_delete_post_meta( $data, $meta_key, $meta_value ) {
		if ( in_array( $meta_value, array( array(), '' ), true ) && ! in_array( $meta_key, $this->must_exist_meta_keys, true ) ) {
			$updated = delete_post_meta( $data->get_id(), $meta_key );
		} else {
			$updated = update_post_meta( $data->get_id(), $meta_key, $meta_value );
		}
		return (bool) $updated;
	}

	/**
	 * Update post meta data for the given chapter.
	 *
	 * @param \CodeRex\Ecommerce\Data\Chapter $chapter The chapter object to update.
	 * @since 1.0.0
	 */
	protected function update_post_meta( &$chapter ) {
		$meta_key_to_props = array();

		$props_to_update = $meta_key_to_props;

		foreach ( $props_to_update as $meta_key => $prop ) {
			$value = $chapter->{
				"get_$prop"
			}( 'edit' );
			$value = is_string( $value ) ? wp_slash( $value ) : $value;
			$this->update_or_delete_post_meta( $chapter, $meta_key, $value );
		}
	}

	protected function string_to_timestamp( $time_string ) {
		return '0000-00-00 00:00:00' !== $time_string ? omlms_string_to_timestamp( $time_string ) : null;
	}


	/**
	 * Generate a unique slug for a given post type.
	 *
	 * @param string $slug The desired slug.
	 * @param string $post_type The post type to check uniqueness against.
	 * @param int|null $exclude_id Optional. A post ID to exclude from the check (useful for updates).
	 * @return string Unique slug.
	 */
	public function generate_unique_slug( $slug, $post_type, $exclude_id = null ) {
		global $wpdb;
		$original_slug = $slug;
		$counter = 1;
		do {
			$query = "SELECT ID FROM $wpdb->posts WHERE post_name = %s AND post_type = %s";
			$params = [ $slug, $post_type ];
			if ( $exclude_id ) {
				$query .= " AND ID != %d";
				$params[] = $exclude_id;
			}
			$query .= " LIMIT 1";
			$existing_post = $wpdb->get_var( $wpdb->prepare( $query, ...$params ) );
			if ( $existing_post ) {
				$slug = $original_slug . '-' . $counter;
				$counter++;
			}
		} while ( $existing_post );
		return $slug;
	}
}
