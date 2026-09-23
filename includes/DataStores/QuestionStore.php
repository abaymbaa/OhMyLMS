<?php

namespace OMLMS\DataStores;

use OMLMS\Abstracts\DataStore;
use OMLMS\Data\Question;

defined( 'ABSPATH' ) || exit;

/**
 * Class QuestionStore
 * Handles CRUD operations for Question data.
 *
 * @package OMLMS\DataStores
 * @since 1.0.0
 */
class QuestionStore extends DataStore {

	protected $must_exist_meta_keys = array(
		'_questions_settings',
		'_thumbnail_id' 	=> 'thumbnail_id',
		'_video_id'     	=> 'video_id',
		'_image_id'     	=> 'image_id',
	);
	/**
	 * Create a new question.
	 *
	 * @param Question $question
	 * @since 1.0.0
	 */
	public function create( &$question ): void {
		if ( ! $question->get_date_created( 'edit' ) ) {
			$question->set_date_created( time() );
		}
		/**
		 * Fires before question add
		 *
		 * @param string $question question object
		 * @since 1.0.0
		 */
		do_action( 'omlms_before_creating_new_question', $question );

		$question_id = wp_insert_post(
			apply_filters(
				'creator_lms_new_question_data', // Custom filter hook name
				array(
					'post_title'    => $question->get_name() ? $question->get_name() : __( 'Untitled', 'ohmylms' ),
					'post_content'  => $question->get_description(),
					'post_author'   => get_current_user_id(),
					'post_type'     => CREATOR_LMS_QUESTION_CPT,
					'post_status'   => 'publish',
					'post_name'     => $question->get_slug( 'edit' ),
					'post_date'     => gmdate( 'Y-m-d H:i:s', $question->get_date_created( 'edit' )->getOffsetTimestamp() ),
					'post_date_gmt' => gmdate( 'Y-m-d H:i:s', $question->get_date_created( 'edit' )->getTimestamp() ),
				)
			),
			true
		);
		if ( $question_id && ! is_wp_error( $question_id ) ) {
			$question->set_id( $question_id );
			flush_rewrite_rules(true);
			$this->update_post_meta( $question );

			/**
			 * Fires after question add
			 *
			 * @param string $question question object
			 * @since 1.0.0
			 */
			do_action( 'omlms_after_creating_new_question', $question );
		}
	}

	public function read( &$question ) {
		$post_object = get_post( $question->get_id() );
		if ( ! $question->get_id() || ! $post_object || CREATOR_LMS_QUESTION_CPT !== $post_object->post_type ) {
			return ( __( 'Invalid Question.', 'ohmylms' ) );
		}

		$question->set_props(
			array(
				'name'          => $post_object->post_title,
				'slug'          => $post_object->post_name,
				'status'        => $post_object->post_status,
				'date_created'  => $post_object->post_date_gmt,
				'date_modified' => $post_object->post_modified_gmt,
				'description'   => $post_object->post_content,
			)
		);

		$this->read_question_data( $question );
	}

	/**
	 * Update an existing question.
	 *
	 * @param Question $question
	 * @return void
	 * @since 1.0.0
	 */
	public function update( &$question ) {
		/**
		 * Before question update
		 *
		 * @param Question $question
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_before_updating_question', $question );

		$post_data = array(
			'post_content' => $question->get_description( 'edit' ),
			'post_excerpt' => $question->get_short_description( 'edit' ),
			'post_title'   => $question->get_name( 'edit' ),
			'post_status'  => $question->get_status( 'edit' ) ? $question->get_status( 'edit' ) : 'publish',
			'post_name'    => $question->get_slug( 'edit' ),
			'post_type'    => CREATOR_LMS_QUESTION_CPT,
		);
		if ( $question->get_date_created( 'edit' ) ) {
			$post_data['post_date']     = gmdate( 'Y-m-d H:i:s', $question->get_date_created( 'edit' )->getOffsetTimestamp() );
			$post_data['post_date_gmt'] = gmdate( 'Y-m-d H:i:s', $question->get_date_created( 'edit' )->getTimestamp() );
		}
		$post_data['post_modified']     = current_time( 'mysql' );
		$post_data['post_modified_gmt'] = current_time( 'mysql', 1 );

		wp_update_post( array_merge( array( 'ID' => $question->get_id() ), $post_data ) );

		$this->update_post_meta( $question );
		/**
		 * Action hook to perform additional actions after a lesson is updated.
		 *
		 * @param int    $question_id The ID of the updated lesson.
		 * @param Question $question    The question object.
		 *
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_after_updating_question', $question->get_id(), $question );
	}

	/**
	 * Delete a question.
	 *
	 * @param Question $question
	 * @param array    $args
	 * @since 1.0.0
	 */
	public function delete( &$question, $args = array() ) {

		/**
		 * Before question delete
		 *
		 * @param Question $question
		 * @since 1.0.0
		 */
		do_action( 'omlms_before_question_delete', $question );

		wp_delete_post( $question->get_id(), true );

		/**
		 * After question delete
		 *
		 * @param Question $question
		 * @since 1.0.0
		 */
		do_action( 'omlms_after_question_delete', $question );

		return array(
			'status'  => 'success',
			'message' => __( 'Question has been deleted.', 'ohmylms' ),
		);
	}

	protected function read_question_data( &$question ) {
		$id               = $question->get_id();
		$post_meta_values = get_post_meta( $id );

		$meta_key_to_props = $this->question_meta_key();

		foreach ( $meta_key_to_props as $meta_key => $prop ) {
			$meta_value         = isset( $post_meta_values[ $meta_key ][0] ) ? $post_meta_values[ $meta_key ][0] : null;
			$set_props[ $prop ] = maybe_unserialize( $meta_value );
		}
		$question->set_props( $set_props );
	}

	protected function update_post_meta( &$question, $force = false ) {
		$props_to_update = $this->question_meta_key();
		foreach ( $props_to_update as $meta_key => $prop ) {
			$value = $question->{"get_$prop"}( 'edit' );
			$value = is_string( $value ) ? wp_slash( $value ) : $value;
			$this->update_or_delete_post_meta( $question, $meta_key, $value );
		}

		/**
		 * Fires after the meta data for a lesson is updated.
		 *
		 * @param WP_Post $question The updated lesson object.
		 *
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_lesson_meta_updated', $question );
	}

	/**
	 *  Get the question meta key
	 *
	 * @return mixed|null
	 */
	protected function question_meta_key() {
		return apply_filters(
			'creator_lms_question_meta_key_to_props',
			array(
				'_question_settings' => 'settings',
				'_thumbnail_id'      => 'thumbnail_id',
				'_image_id'          => 'image_id',
				'_video_id'          => 'video_id',
			)
		);
	}


	public function get_questions( $question ) {
		global $wpdb;

		$answers_table = $wpdb->prefix . 'omlms_question_answers';
		$meta_table    = $wpdb->prefix . 'omlms_question_answermeta';
		$question_id   = $question->get_id();

		$results = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT * FROM $answers_table WHERE question_id = %d ORDER BY order_number ASC",
				$question_id
			),
			ARRAY_A
		);

		foreach ( $results as &$answer ) {
			$meta_values = [
				'_thumbnail_id'  => '',
				'_matching_data' => '',
				'_image_url' 	=> '',
			];

			$answer_meta = $wpdb->get_results(
				$wpdb->prepare(
					"SELECT meta_key, meta_value FROM $meta_table WHERE answer_id = %d",
					$answer['id']
				),
				ARRAY_A
			);

			if ( ! empty( $answer_meta ) ) {
				foreach ( $answer_meta as $meta ) {
					if ( array_key_exists( $meta['meta_key'], $meta_values ) ) {
						$meta_values[ $meta['meta_key'] ] = $meta['meta_value'];
					}
				}
			}
			$answer['thumbnail_id']  = $meta_values['_thumbnail_id'];
			$answer['matching_data'] = maybe_unserialize($meta_values['_matching_data']);
			$answer['image_url'] = ! empty( $answer['thumbnail_id'] ) ? wp_get_attachment_url( $answer['thumbnail_id'] ) : '';
		}

		return $results;
	}

	public function save_attempt_answer( $question, $student_id, $data ) {
		global $wpdb;
		$table_name = $wpdb->prefix . 'omlms_quiz_attempts_answers';
		foreach ( $data as $key => $value ) {
			if ( is_array( $value ) ) {
				$data[ $key ] = maybe_serialize( $value );
			}
		}
		$wpdb->insert( $table_name, $data );
	}

	public function save_quiz_answer( $question, $questions, $question_id ) {

		$question_data    = omlms_get_question( $question_id );
		$all_ready_answer = $this->get_questions( $question_data );
		$answers          = ! empty( $questions['questions'] ) ? $questions['questions'] : array();
		if ( empty( $answers ) ) {
			return;
		}
		global $wpdb;
		$table_name = $wpdb->prefix . 'omlms_question_answers';

		$existing_ids = array_column( $all_ready_answer, 'id' );
		$new_ids      = array_column( $answers, 'id' );

		// Update or insert answers
		foreach ( $answers as $answer ) {
			$data = array(
				'question_id'  => $question_data->get_id(),
				'answer'       => $answer['answer'],
				'order_number' => isset( $answer['order_number'] ) ? $answer['order_number'] : 0,
				'is_correct'   => isset( $answer['is_correct'] ) ? $answer['is_correct'] : 0,
			);

			$format = array( '%d', '%s', '%d', '%d' );

			if ( isset( $answer['id'] ) && ! empty( $answer['id'] ) ) {
				// Update existing record
				$wpdb->update(
					$table_name,
					$data,
					array( 'id' => $answer['id'] ),
					$format,
					array( '%d' )
				);
			} else {
				// Insert new record
				$wpdb->insert(
					$table_name,
					$data,
					$format
				);
			}
		}

		// Delete answers that are not in the new answers list
		$ids_to_delete = array_diff( $existing_ids, $new_ids );
		if ( ! empty( $ids_to_delete ) ) {
			foreach ( $ids_to_delete as $id ) {
				$wpdb->delete( $table_name, array( 'id' => $id ), array( '%d' ) );
			}
		}
	}
}
