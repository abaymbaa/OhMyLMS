<?php

namespace OMLMS\DataStores;

use OMLMS\Abstracts\Data;
use OMLMS\Abstracts\DataStore;

defined( 'ABSPATH' ) || exit;

/**
 * Class DataStores
 *
 * @package OMLMS\DataStores
 * @since 1.0.0
 */
class DataStores {

	/**
	 * The type of the store
	 *
	 * @var string $object_type
	 * @since 1.0.0
	 */
	public $object_type;


	/**
	 * Contains the instance of the DataStore that we want to work with
	 *
	 * @var
	 * @since 1.0.0
	 */
	public $instance;


	/**
	 * Meta keys that must exist
	 *
	 * @var array $must_exist_meta_keys
	 * @since 1.0.0
	 */
	public $must_exist_meta_keys = array();


	/**
	 * Contains array of default data stores of OhMyLMS plugin
	 *
	 * @var array
	 * @since 1.0.0
	 */
	private $stores = array(
		'membership' => 'OMLMS\\DataStores\\MembershipStore',
 'assignment' => 'OMLMS\\DataStores\\AssignmentStore',
 'session' => 'OMLMS\\DataStores\\SessionStore',
 'order'       => 'OMLMS\DataStores\OrderStore',
		'course'      => 'OMLMS\DataStores\CourseStore',
		'chapter'     => 'OMLMS\DataStores\ChapterStore',
		'quiz'        => 'OMLMS\DataStores\QuizStore',
		'lesson'      => 'OMLMS\DataStores\LessonStore',
		'question'    => 'OMLMS\DataStores\QuestionStore',
		'student'     => 'OMLMS\DataStores\StudentStore',
		'certificate' => 'OMLMS\DataStores\CertificateStore',
		'attempt' 	  => 'OMLMS\DataStores\AttemptStore',
		'webhook'     => 'OMLMS\DataStores\WebhookStore',
	);


	/**
	 * DataStores constructor.
	 *
	 * Create datastore to interact with the DB
	 *
	 * @param $object_type
	 * @throws \Exception
	 * @since 1.0.0
	 */
	public function __construct( $object_type ) {
		$this->stores      = apply_filters( 'creator_lms_data_stores', $this->stores );
		$this->object_type = $object_type;

		if ( ! array_key_exists( $object_type, $this->stores ) ) {
			throw new \Exception( __( 'Invalid data store.', 'ohmylms' ) );
		}

		if ( array_key_exists( $object_type, $this->stores ) ) {
			$store          = $this->stores[ $object_type ];
			$this->instance = new $store();
		} else {
			throw new \Exception( __( 'Invalid data store.', 'ohmylms' ) );
		}
	}


	/**
	 * Loads a data store
	 *
	 * @param $object_type
	 * @return DataStores
	 * @throws \Exception
	 * @since 1.0.0
	 */
	public static function load( $object_type ) {
		$store = new DataStores( $object_type );
		return $store->instance;
	}


	/**
	 * Read an object from the data store
	 *
	 * @param $data Data
	 * @since 1.0.0
	 */
	public function read( &$data ) {
		$this->instance->read( $data );
	}

	/**
	 * Create a object in datastore
	 *
	 * @param $data Data
	 * @since 1.0.0
	 */
	public function create( &$data ) {
		$this->instance->create( $data );
	}


	/**
	 * Update object in data store
	 *
	 * @param $data Data
	 *
	 * @since 1.0.0
	 */
	public function update( &$data ) {
		$this->instance->update( $data );
	}


	/**
	 * Delete an object
	 *
	 * @param $data Data
	 *
	 * @since 1.0.0
	 */
	public function delete( &$data, $args = array() ) {
		$this->instance->delete( $data, $args );
	}



	/**
	 * Update or delete post meta based on the value.
	 *
	 * @param Data   $object The data object.
	 * @param string $meta_key The meta key.
	 * @param mixed  $meta_value The meta value.
	 * @return bool True if the meta was updated or deleted, false otherwise.
	 *
	 * @since 1.0.0
	 */
	protected function update_or_delete_post_meta( $object, $meta_key, $meta_value ) {
		if ( in_array( $meta_value, array( array(), '' ), true ) && ! in_array( $meta_key, $this->must_exist_meta_keys, true ) ) {
			$updated = delete_post_meta( $object->get_id(), $meta_key );
		} else {
			$updated = update_post_meta( $object->get_id(), $meta_key, $meta_value );
		}

		return (bool) $updated;
	}
}
