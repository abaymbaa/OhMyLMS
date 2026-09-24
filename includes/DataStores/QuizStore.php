<?php

namespace OMLMS\DataStores;

use OMLMS\Abstracts\DataStore;
use OMLMS\Data\Chapter;
use OMLMS\Data\Quiz;

defined( 'ABSPATH' ) || exit;

/**
 * Class QuizStore
 * Handles CRUD operations for Quiz data.
 *
 * @package OMLMS\DataStores
 * @since 1.0.0
 */
class QuizStore extends DataStore {

	protected $must_exist_meta_keys = array(
		'_quiz_settings',
	);
	/**
	 * Create a new quiz.
	 *
	 * @param Quiz $quiz
	 * @since 1.0.0
	 */
	public function create( &$quiz ): void {
		if ( ! $quiz->get_date_created( 'edit' ) ) {
			$quiz->set_date_created( time() );
		}
		/**
		 * Fires before quiz add
		 *
		 * @param string $quiz quiz object
		 * @since 1.0.0
		 */
		do_action( 'omlms_before_creating_new_quiz', $quiz );

		$slug = $quiz->get_slug( 'edit' );
		$slug = $this->generate_unique_slug( $slug, CREATOR_LMS_QUIZ_CPT );

		$quiz_id = wp_insert_post(
			apply_filters(
				'creator_lms_new_quiz_data', // Custom filter hook name
				array(
					'post_title'    => $quiz->get_name() ? $quiz->get_name() : __( 'Untitled', 'ohmylms' ),
					'post_content'  => $quiz->get_description(),
					'post_author'   => get_current_user_id(),
					'post_type'     => CREATOR_LMS_QUIZ_CPT,
					'post_status'   => 'publish',
					'post_name'     => $slug,
					'post_date'     => gmdate( 'Y-m-d H:i:s', $quiz->get_date_created( 'edit' )->getOffsetTimestamp() ),
					'post_date_gmt' => gmdate( 'Y-m-d H:i:s', $quiz->get_date_created( 'edit' )->getTimestamp() ),
				)
			),
			true
		);
		if ( $quiz_id && ! is_wp_error( $quiz_id ) ) {
			$quiz->set_id( $quiz_id );
			flush_rewrite_rules(true);
			$this->update_post_meta( $quiz );

			/**
			 * Fires after quiz add
			 *
			 * @param string $quiz quiz object
			 * @since 1.0.0
			 */
			do_action( 'omlms_after_creating_new_quiz', $quiz );

			if ( ! get_option( 'creatorlms_first_content_created', false ) ) {
				do_action( 'creatorlms_after_creating_first_content', $id, $lesson );
			}
		}
	}

	public function read( &$quiz ) {
		$post_object = get_post( $quiz->get_id() );
		if ( ! $quiz->get_id() || ! $post_object || CREATOR_LMS_QUIZ_CPT !== $post_object->post_type ) {
			return ( __( 'Invalid Quiz.', 'ohmylms' ) );
		}

		$quiz->set_props(
			array(
				'name'          => $post_object->post_title,
				'slug'          => $post_object->post_name,
				'status'        => $post_object->post_status,
				'date_created'  => $post_object->post_date_gmt,
				'date_modified' => $post_object->post_modified_gmt,
				'description'   => $post_object->post_content,
			)
		);

		$this->read_quiz_data( $quiz );
	}

	/**
	 * Update an existing quiz.
	 *
	 * @param Quiz $quiz
	 * @return void
	 * @since 1.0.0
	 */
	public function update( &$quiz ) {
		$slug = $quiz->get_slug( 'edit' );
		$slug = $this->generate_unique_slug( $slug, CREATOR_LMS_QUIZ_CPT );

		/**
		 * Before quiz update
		 *
		 * @param Quiz $quiz
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_before_updating_quiz', $quiz );

		$post_data = array(
			'post_content' => $quiz->get_description( 'edit' ),
			'post_excerpt' => $quiz->get_short_description( 'edit' ),
			'post_title'   => $quiz->get_name( 'edit' ),
			'post_status'  => $quiz->get_status( 'edit' ) ? $quiz->get_status( 'edit' ) : 'publish',
			'post_name'    => $quiz->get_name( 'edit' ),
			'post_type'    => CREATOR_LMS_QUIZ_CPT,
		);
		
		if ( $quiz->get_date_created( 'edit' ) ) {
			$post_data['post_date']     = gmdate( 'Y-m-d H:i:s', $quiz->get_date_created( 'edit' )->getOffsetTimestamp() );
			$post_data['post_date_gmt'] = gmdate( 'Y-m-d H:i:s', $quiz->get_date_created( 'edit' )->getTimestamp() );
		}
		$post_data['post_modified']     = current_time( 'mysql' );
		$post_data['post_modified_gmt'] = current_time( 'mysql', 1 );

		wp_update_post( array_merge( array( 'ID' => $quiz->get_id() ), $post_data ) );

		$this->update_post_meta( $quiz );
		/**
		 * Action hook to perform additional actions after a lesson is updated.
		 *
		 * @param int    $quiz_id The ID of the updated lesson.
		 * @param Quiz $quiz    The quiz object.
		 *
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_after_updating_quiz', $quiz->get_id(), $quiz );
	}

	/**
	 * Delete a quiz.
	 *
	 * @param Quiz  $quiz
	 * @param array $args
	 * @since 1.0.0
	 */
	public function delete( &$quiz, $args = array() ) {

		/**
		 * Before quiz delete
		 *
		 * @param Quiz $quiz
		 * @since 1.0.0
		 */
		do_action( 'omlms_before_quiz_delete', $quiz );

		wp_delete_post( $quiz->get_id(), true );

		/**
		 * After quiz delete
		 *
		 * @param Quiz $quiz
		 * @since 1.0.0
		 */
		do_action( 'omlms_after_quiz_delete', $quiz );

		return array(
			'status'  => 'success',
			'message' => __( 'Quiz has been deleted.', 'ohmylms' ),
		);
	}

	protected function read_quiz_data( &$quiz ) {
		$id               = $quiz->get_id();
		$post_meta_values = get_post_meta( $id );

		$meta_key_to_props = $this->quiz_meta_key();

		foreach ( $meta_key_to_props as $meta_key => $prop ) {
			$meta_value         = isset( $post_meta_values[ $meta_key ][0] ) ? $post_meta_values[ $meta_key ][0] : null;
			$set_props[ $prop ] = maybe_unserialize( $meta_value );
		}
		$quiz->set_props( $set_props );
	}

	protected function update_post_meta( &$quiz, $force = false ) {
		$props_to_update = $this->quiz_meta_key();
		foreach ( $props_to_update as $meta_key => $prop ) {
			$value = $quiz->{"get_$prop"}( 'edit' );
			$value = is_string( $value ) ? wp_slash( $value ) : $value;
			$this->update_or_delete_post_meta( $quiz, $meta_key, $value );
		}

		/**
		 * Fires after the meta data for a lesson is updated.
		 *
		 * @param WP_Post $quiz The updated lesson object.
		 *
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_lesson_meta_updated', $quiz );
	}

	/**
	 *  Get the quiz meta key
	 *
	 * @return mixed|null
	 */
	protected function quiz_meta_key() {
		return apply_filters(
			'creator_lms_quiz_meta_key_to_props',
			array(
				'_quiz_settings' => 'settings',
				'_drip_settings' => 'drip_settings',
			)
		);
	}


	/**
	 * Get the quiz questions.
	 *
	 * @param Quiz $quiz The quiz object.
	 * @return array The list of questions.
	 *
	 * @since 1.0.0
	 */
	public function get_questions( &$quiz, $return_type = 'array' ) {
		global $wpdb;
		$table_name         = $wpdb->prefix . 'omlms_quiz_questions_relationship';
		$quiz_id            = $quiz->get_id();
		$questions = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT * FROM {$table_name} WHERE quiz_id = %d ORDER BY order_number ASC",
				$quiz_id
			)
		);
		$filtered_questions = array();
		if ( $questions ) {
			foreach ( $questions as $question ) {
				$question_obj = omlms_get_question( $question->question_id );

				if ( 'objects' === $return_type ) {
					$filtered_questions[] = $question_obj;
					continue;
				}

				$question_settings = $question_obj->get_settings();

				$filtered_questions[] = array(
					'id'           => $question_obj->get_id(),
					'quiz_id'      => $quiz_id,
					'name'         => $question_obj->get_name(),
					'description'  => $question_obj->get_description(),
					'order_number' => $question->order_number,
					'thumbnail_id' => $question_obj->get_thumbnail_id(),
					'video_id'     => $question_obj->get_video_id(),
					'video_src'    => $question_obj->get_video_url(),
					'image_src'    => $question_obj->get_image_url(),
					'settings'     => $question_settings,
					'questions'    => $question_obj->get_questions(),
				);
			}
		}
		return $filtered_questions;
	}

	/**
	 * Set the contents of the chapter.
	 *
	 * @param Chapter $chapter The chapter object.
	 * @param array   $lessons The lessons to set for the chapter.
	 * @return bool True on success, false on failure.
	 *
	 * @since 1.0.0
	 */
	public function set_contents( $quiz, $questions ) {
		global $wpdb;
		// $table_name = $wpdb->prefix . 'omlms_quiz_questions_relationship';
		// $quiz_id = $quiz->get_id();
		// $values = array();
		// foreach ( $questions as $index => $question ) {
		// $values[] = $quiz_id;
		// $values[] = $question['id'];
		// $values[] = $question['order_number'];
		// $values[] = 'text';
		//
		// Create placeholders for each set of values
		// $placeholders[] = "(%d, %d, %d, %s)";
		// }
		//
		// Construct the query with ON DUPLICATE KEY UPDATE
		// $insert_query = "
		// INSERT INTO $table_name (chapter_id, content_id, order_number, content_type)
		// VALUES " . implode( ', ', $placeholders ) . "
		// ON DUPLICATE KEY UPDATE
		// order_number = VALUES(order_number)
		// ";
		//
		// Execute the query using prepared statements to prevent SQL injection
		// $wpdb->query( $wpdb->prepare( $insert_query, $values ) );

		return true;
	}

	public function get_quiz_attempt( $quiz, $student_id ) {
		global $wpdb;

		$attempt = $wpdb->get_row(
			$wpdb->prepare(
				"SELECT * FROM {$wpdb->prefix}omlms_quiz_attempts WHERE quiz_id = %d AND student_id = %d AND start_date IS NOT NULL AND start_date != '0000-00-00 00:00:00' AND status = 'in-progress'",
				$quiz->get_id(),
				$student_id
			),
			ARRAY_A
		);
		return $attempt;
	}

	public function save_attempt( $quiz, $student_id, $arg ) {
		global $wpdb;

		$existing_attempt = $wpdb->get_row(
			$wpdb->prepare(
				"SELECT * FROM {$wpdb->prefix}omlms_quiz_attempts WHERE quiz_id = %d AND student_id = %d AND start_date IS NOT NULL AND start_date != '0000-00-00 00:00:00' AND status = 'in-progress'",
				$quiz->get_id(),
				$student_id
			)
		);

		if ( $existing_attempt ) {
			$wpdb->update(
				"{$wpdb->prefix}omlms_quiz_attempts",
				array(
					'course_id' => $arg['course_id'],
					'total'     => $arg['total'],
					'status'    => $arg['status'],
					'end_date'  => $arg['end_date'],
				),
				array(
					'id' => $existing_attempt->id,
				),
				array(
					'%d',
					'%d',
					'%s',
					'%s',
				),
				array(
					'%d',
				)
			);
		} else {
			$wpdb->insert(
				"{$wpdb->prefix}omlms_quiz_attempts",
				array(
					'course_id'  => $arg['course_id'],
					'quiz_id'    => $quiz->get_id(),
					'student_id' => $student_id,
					'total'      => $arg['total'],
					'status'     => $arg['status'],
					'start_date' => current_time( 'mysql' ),
				),
				array(
					'%d',
					'%d',
					'%d',
					'%d',
					'%s',
					'%s',
				)
			);
		}
	}

	public function update_attempt( $quiz, $student_id, $attempt_id, $arg ) {
		global $wpdb;

		$wpdb->update(
			"{$wpdb->prefix}omlms_quiz_attempts",
			array(
				'course_id' => $arg['course_id'],
				'total'     => $arg['total'],
				'status'    => $arg['status'],
				'end_date'  => $arg['end_date'],
			),
			array(
				'id' => $attempt_id,
			),
			array(
				'%d',
				'%d',
				'%s',
				'%s',
			),
			array(
				'%d',
			)
		);

		$get_attempts = $quiz->get_all_quiz_attempts_by_attempt_id( $student_id, $arg['course_id'], $attempt_id );
		if ( $get_attempts['total_achieved_marks'] >= $quiz->get_passing_grade() ) {
			$student = new \OMLMS\Data\Student( $student_id );
			$student->complete_lesson( $quiz->get_id(), $arg['course_id'] );
		}
	}


	public function get_all_quiz_attempts( $quiz, $student_id, $course_id ) {
		global $wpdb;

		$attempts = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT
            qa.id AS quiz_attempt_id,
            qa.course_id,
            qa.quiz_id,
            qa.student_id,
            qa.total AS total_marks,
            qa.status,
            qa.start_date,
            qa.end_date,
            GROUP_CONCAT(qa_answers.given_answer SEPARATOR ', ') AS answers,
            COUNT(qa_answers.given_answer) AS total_answers_count, -- Count of given answers
            SUM(qa_answers.achive_mark) AS total_achieved_marks,
            SUM(qa_answers.minus_mark) AS total_minus_marks
         FROM
            {$wpdb->prefix}omlms_quiz_attempts qa
         LEFT JOIN
            {$wpdb->prefix}omlms_quiz_attempts_answers qa_answers
         ON
            qa.id = qa_answers.quiz_attempt_id
         WHERE
            qa.quiz_id = %d
            AND qa.student_id = %d
            AND qa.course_id = %d
         GROUP BY
            qa.id",
				$quiz->get_id(),
				$student_id,
				$course_id
			),
			ARRAY_A
		);

		return $attempts;
	}

	public function get_all_quiz_attempts_by_attempt_id( $quiz, $student_id, $course_id, $attempt_id ) {
		global $wpdb;

		$attempts = $wpdb->get_row(
			$wpdb->prepare(
				"SELECT
            qa.id AS quiz_attempt_id,
            qa.course_id,
            qa.quiz_id,
            qa.student_id,
            qa.total AS total_marks,
            qa.status,
            qa.start_date,
            qa.end_date,
            GROUP_CONCAT(qa_answers.given_answer SEPARATOR ', ') AS answers,
            COUNT(qa_answers.given_answer) AS total_answers_count, -- Count of given answers
            SUM(qa_answers.achive_mark) AS total_achieved_marks,
            SUM(qa_answers.minus_mark) AS total_minus_marks
         FROM
            {$wpdb->prefix}omlms_quiz_attempts qa
         LEFT JOIN
            {$wpdb->prefix}omlms_quiz_attempts_answers qa_answers
         ON
            qa.id = qa_answers.quiz_attempt_id
         WHERE
            qa.quiz_id = %d
            AND qa.student_id = %d
            AND qa.course_id = %d
            AND qa.id = %d
         GROUP BY
            qa.id",
				$quiz->get_id(),
				$student_id,
				$course_id,
				$attempt_id
			),
			ARRAY_A
		);

		return $attempts;
	}


	public function get_report( $quiz ) {
		global $wpdb;

		$report = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT
		qa.id AS quiz_attempt_id,
		qa.course_id,
		qa.quiz_id,
		qa.student_id,
		qa.total AS total_marks,
		qa.status,
		qa.start_date,
		qa.end_date,
		GROUP_CONCAT(qa_answers.given_answer SEPARATOR ', ') AS answers,
		COUNT(qa_answers.given_answer) AS total_answers_count, -- Count of given answers
		SUM(qa_answers.achive_mark) AS total_achieved_marks,
		SUM(qa_answers.minus_mark) AS total_minus_marks,
		u.user_email AS student_email,
		u.display_name AS student_name
	 FROM
		{$wpdb->prefix}omlms_quiz_attempts qa
	 LEFT JOIN
		{$wpdb->prefix}omlms_quiz_attempts_answers qa_answers
	 ON
		qa.id = qa_answers.quiz_attempt_id
	 LEFT JOIN
		{$wpdb->prefix}users u
	 ON
		qa.student_id = u.ID
	 WHERE
		qa.quiz_id = %d
	 GROUP BY
		qa.id",
				$quiz->get_id()
			),
			ARRAY_A
		);
		return $report;
	}

	/**
	 * Get the report of a specific quiz attempt.
	 *
	 * @param Quiz $quiz The quiz object.
	 * @param int $attempt_id The ID of the quiz attempt.
	 * @return array The report of the quiz attempt.
	 * @since 1.0.0
	 */
	public function get_attempt_report( $quiz, $attempt_id ) {
		global $wpdb;
		$report = array();
		$quiz_result = array();
		$result = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT * from {$wpdb->prefix}omlms_quiz_attempts_answers WHERE quiz_attempt_id = %d",
				$attempt_id
			)
		);
		foreach ( $result as $key => $value ) {
			$quiz_result[ $value->question_id ] = (array) $value;
		}
		$questions 					= $this->get_questions( $quiz );
		$total_marks				= 0;
		// Grade-report status is supplied by the registered question type.
		
		foreach ( $questions as $key => $question ) {
			$question_id 									= $question['id'];
			$questions[ $key ]['given_answer'] 				= isset($quiz_result[ $question_id ]['given_answer']) ? (maybe_unserialize($quiz_result[ $question_id ]['given_answer'])) : null;
			$obj                               				= omlms_get_question( $question_id );
			$question_settings 				   				= $obj->get_settings();
			$question_type                                 	= isset( $question_settings['type'] ) ? $question_settings['type'] : '';
			$definition = \OMLMS\Extensions\Registry::get('question', $question_type);
			$questions[ $key ]['status']                   	= !empty($quiz_result[$question_id]['is_manually_reviewed']) || (isset($quiz_result[$question_id]) && !empty($definition) && empty($definition['manual'])) ? 'graded' : 'in-review';
			$questions[ $key ]['image']                    	= $obj->get_image_url();
			$questions[ $key ]['video']                    	= $obj->get_video_url();
			$questions[ $key ]['achive_mark']              	= $quiz_result[ $question_id ]['achive_mark'] ?? 0;
			$questions[ $key ]['quiz_attempts_answers_id'] 	= isset( $quiz_attempts_answers_id[ $key ] ) ? $quiz_attempts_answers_id[ $key ] : null;

			$total_marks = $total_marks + $questions[ $key ]['achive_mark'];
		}
		$report['questions'] 		= $questions;
		$report['quiz_attempt_id']	= $attempt_id;
		$report['status'] = $wpdb->get_var($wpdb->prepare(
			"SELECT status FROM {$wpdb->prefix}omlms_quiz_attempts WHERE id = %d AND quiz_id = %d",
			$attempt_id, $quiz->get_id()
		));
		$report['total_achieved_marks'] = $total_marks;
		return $report;
	}

	public function count_total_attempt( $quiz, $student_id, $course_id ) {
		global $wpdb;

		$count = $wpdb->get_var(
			$wpdb->prepare(
				"SELECT COUNT(*) FROM {$wpdb->prefix}omlms_quiz_attempts WHERE quiz_id = %d AND student_id = %d AND course_id = %d",
				$quiz->get_id(),
				$student_id,
				$course_id
			)
		);

		return $count;
	}

	public function update_attempt_report_manually( $quiz, $quiz_attempt_answer_id, $request ) {
		global $wpdb;
		$attempt_id             = isset( $request['attempt_id'] ) ? (int) $request['attempt_id'] : '';
		$quiz_attempt_answer_id = isset( $request['quiz_attempt_answer_id'] ) ? (int) $request['quiz_attempt_answer_id'] : '';
		$wpdb->update(
			"{$wpdb->prefix}omlms_quiz_attempts_answers",
			array(
				'is_manually_reviewed' => 1,
				'achive_mark'          => $request['marks'],
				'is_correct'           => 1,
			),
			array(
				'question_id'     => $quiz_attempt_answer_id,
				'quiz_attempt_id' => $attempt_id,
			),
			array(
				'%d',
				'%d',
			),
			array(
				'%d',
				'%d',
			)
		);
		$wpdb->update(
			"{$wpdb->prefix}omlms_quiz_attempts",
			array(
				'status' => 'completed',
			),
			array(
				'id' => $request['attempt_id'],
			),
			array(
				'%s',
			),
			array(
				'%d',
			)
		);
	}

	public function review_question( &$quiz, $question_id, $attempt_id, $data ) {
		if ( isset( $data['achive_mark'] ) ) {
			$achieve_mark = $data['achive_mark'];
			global $wpdb;

			$wpdb->update(
				"{$wpdb->prefix}omlms_quiz_attempts_answers",
				array(
					'is_manually_reviewed' => 1,
					'achive_mark'          => $achieve_mark,
					'is_correct'           => 1,
				),
				array(
					'question_id'     => $question_id,
					'quiz_attempt_id' => $attempt_id,
				),
				array(
					'%d',
					'%d',
				),
				array(
					'%d',
					'%d',
				)
			);
		}
	}
}
