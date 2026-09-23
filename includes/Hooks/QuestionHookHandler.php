<?php

namespace OMLMS\Hooks;

use OMLMS\Abstracts\HookHandler;

/**
 * Handles hooks related to lessons in the OhMyLMS plugin.
 *
 * @since 1.0.0
 */
class QuestionHookHandler extends HookHandler {

	public function register_hooks() {
		add_action( 'creator_lms_rest_insert_question', array( $this, 'link_question_with_quiz' ), 10, 2 );
		add_action( 'creator_lms_rest_question_updated', array( $this, 'link_question_with_quiz' ), 10, 2 );
		add_action( 'creator_lms_rest_delete_question', array( $this, 'unlink_quiz_from_question' ), 10 );
		add_action( 'creator_lms_rest_insert_question', array( $this, 'save_or_update_question_answer' ), 10, 2 );
		add_action( 'creator_lms_rest_question_updated', array( $this, 'save_or_update_question_answer' ), 10, 2 );
	}


	/**
	 * Link lesson with chapter.
	 * Update
	 */
	public function link_question_with_quiz( $question, $request ) {

		if ( ! is_a( $question, 'WP_Post' ) ) {
			return;
		}
		$question_id = $question->ID;

		if ( empty( $request['quiz_id'] ) ) {
			return;
		}

		$quiz_id      = intval( $request['quiz_id'] );
		$order_number = ! empty( $request['order_number'] ) ? intval( $request['order_number'] ) : 0;
		$this->update_content_relationship( $quiz_id, $question_id, $order_number );
	}



	/**
	 * Update the relationship between a chapter and a lesson.
	 *
	 * @param int $chapter_id The ID of the chapter.
	 * @param int $lesson_id The ID of the lesson.
	 * @param int $order_number The order number of the lesson in the chapter.
	 *
	 * @return void
	 *
	 * @since 1.0.0
	 */
	public function update_content_relationship( $quiz_id, $question_id, $order_number = 0 ) {
		if ( ! $quiz_id || ! $question_id ) {
			return;
		}

		global $wpdb;
		$table_name = $wpdb->prefix . CREATOR_LMS_QUIZ_QUESTION_RELATIONSHIP;

		// Check if the relationship already exists
		$exists = $wpdb->get_var(
			$wpdb->prepare(
				"SELECT ID FROM $table_name WHERE quiz_id = %d AND question_id = %d LIMIT 1",
				$quiz_id,
				$question_id
			)
		);

		// If exists, update the relationship, otherwise insert a new one
		if ( $exists ) {
			$wpdb->update(
				$table_name,
				array(
					'order_number' => $order_number,
				),
				array(
					'quiz_id'     => $quiz_id,
					'question_id' => $question_id,
				),
				array( '%d' ),
				array( '%d', '%d' )
			);
		} else {
			$wpdb->insert(
				$table_name,
				array(
					'quiz_id'      => $quiz_id,
					'question_id'  => $question_id,
					'order_number' => $order_number,
				),
				array( '%d', '%d', '%d' )
			);
		}

		/**
		 * Action triggered after a course and chapter relationship is created.
		 *
		 * @since 1.0.0
		 *
		 * @param int $chapter_id The ID of the chapter.
		 * @param int $lesson_id The ID of the lesson.
		 */
		do_action( 'creator_lms_quiz_question_relationship_created', $quiz_id, $question_id );
	}


	/**
	 * Unlink a lesson from a chapter.
	 *
	 * @param \WP_Post $lesson The lesson post object.
	 *
	 * @return void
	 *
	 * @since 1.0.0
	 */
	public function unlink_quiz_from_question( $request ) {
		$question_id = isset( $request['id'] ) ? (int) $request['id'] : 0;

		if ( ! $question_id ) {
			return;
		}

		global $wpdb;
		$table_name = $wpdb->prefix . CREATOR_LMS_QUIZ_QUESTION_RELATIONSHIP;

		$wpdb->delete(
			$table_name,
			array(
				'question_id' => $question_id,
			),
			array(
				'%d',
				'%d',
			)
		);
	}

	public function save_or_update_question_answer( $question, $request ) {

		$question_data    = omlms_get_question( $question->ID );
		$all_ready_answer = $question_data->get_questions();
		$answers          = ! empty( $request['questions'] ) ? $request['questions'] : array();
		if ( empty( $answers ) ) {
			return;
		}
		global $wpdb;
		$answers_table = $wpdb->prefix . 'omlms_question_answers';

		$existing_ids = array_column( $all_ready_answer, 'id' );
		$new_ids      = array_filter( array_column( $answers, 'id' ) );

		// Update or insert answers
		foreach ( $answers as $answer ) {
			$data = array(
				'question_id'  => $question_data->get_id(),
				'answer'       => $answer['answer'],
				'order_number' => isset( $answer['order_number'] ) ? $answer['order_number'] : 0,
				'is_correct'   => isset( $answer['is_correct'] ) ? $answer['is_correct'] : 0,
			);
			$format = array( '%d', '%s', '%d', '%d' );

			$answer_id = 0;
			if ( isset( $answer['id'] ) && ! empty( $answer['id'] ) ) {
				// Update existing record
				$wpdb->update(
					$answers_table,
					$data,
					array( 'id' => $answer['id'] ),
					$format,
					array( '%d' )
				);
				$answer_id = (int) $answer['id'];
			} else {
				// Insert new record
				$wpdb->insert(
					$answers_table,
					$data,
					$format
				);
				$answer_id = $wpdb->insert_id;
			}

			if ( $answer_id ) {
				$this->update_question_answer_meta( $answer_id, $answer );
			}
		}

		// Delete answers that are not in the new answers list
		$ids_to_delete = array_diff( $existing_ids, $new_ids );
		if ( ! empty( $ids_to_delete ) ) {
			$answermeta_table = $wpdb->prefix . 'omlms_question_answermeta';
			foreach ( $ids_to_delete as $id ) {
				$wpdb->delete( $answers_table, array( 'id' => $id ), array( '%d' ) );
				$wpdb->delete( $answermeta_table, array( 'answer_id' => $id ), array( '%d' ) );
			}
		}
	}

	/**
	 * Update question answer meta data.
	 *
	 * @param int   $answer_id   The ID of the answer.
	 * @param array $answer_data The answer data.
	 *
	 * @return void
	 *
	 * @since 1.0.0
	 */
	private function update_question_answer_meta( $answer_id, $answer_data ) {
		global $wpdb;

		$table = $wpdb->prefix . 'omlms_question_answermeta';

		// Define allowed meta keys
		$allowed_keys = [
			'thumbnail_id'  => '_thumbnail_id',
			'image_url'  	=> '_image_url',
			'matching_data' => '_matching_data',
		];

		foreach ( $allowed_keys as $key=>$meta_key ) {
			if ( isset( $answer_data[ $key ] ) ) {
				$meta_value = maybe_serialize( $answer_data[ $key ] );

				// Check if the meta already exists
				$existing = $wpdb->get_var(
					$wpdb->prepare(
						"SELECT meta_value FROM $table WHERE answer_id = %d AND meta_key = %s",
						$answer_id,
						$meta_key
					)
				);

				if ( null !== $existing ) {
					// Update existing meta
					$wpdb->update(
						$table,
						[ 'meta_value' => $meta_value ],
						[
							'answer_id' => $answer_id,
							'meta_key'  => $meta_key,
						],
						[ '%s' ],
						[ '%d', '%s' ]
					);
				} else {
					// Insert new meta
					$wpdb->insert(
						$table,
						[
							'answer_id'  => $answer_id,
							'meta_key'   => $meta_key,
							'meta_value' => $meta_value,
						],
						[ '%d', '%s', '%s' ]
					);
				}
			}
		}
	}


	/**
	 * Update or add meta data for a question answer.
	 *
	 * @param int    $answer_id  The ID of the answer.
	 * @param string $meta_key   The meta key.
	 * @param mixed  $meta_value The meta value.
	 * @return void
	 */
	protected function update_answer_meta( $answer_id, $meta_key, $meta_value ) {
		global $wpdb;
		$table_name = $wpdb->prefix . 'omlms_question_answermeta';

		$value = maybe_serialize( $meta_value );

		// Check if the meta key already exists for the given answer_id
		$existing_meta = $wpdb->get_var( $wpdb->prepare( "SELECT meta_key FROM $table_name WHERE answer_id = %d AND meta_key = %s", $answer_id, $meta_key ) );

		if ( empty( $meta_value ) ) {
			if ( null !== $existing_meta ) {
				// Delete meta if value is empty and it exists.
				$wpdb->delete(
					$table_name,
					array(
						'answer_id' => $answer_id,
						'meta_key'  => $meta_key,
					),
					array( '%d', '%s' )
				);
			}
			return;
		}

		if ( null !== $existing_meta ) {
			// Update existing meta
			$wpdb->update(
				$table_name,
				array( 'meta_value' => $value ),
				array(
					'answer_id' => $answer_id,
					'meta_key'  => $meta_key,
				),
				array( '%s' ),
				array( '%d', '%s' )
			);
		} else {
			// Insert new meta
			$wpdb->insert(
				$table_name,
				array(
					'answer_id'  => $answer_id,
					'meta_key'   => $meta_key,
					'meta_value' => $value,
				),
				array( '%d', '%s', '%s' )
			);
		}
	}
}
