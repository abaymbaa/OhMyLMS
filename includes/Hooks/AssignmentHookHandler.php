<?php

namespace OhMyLMS\Hooks;

use OhMyLMS\Abstracts\HookHandler;
use OhMyLMS\Data\Lesson;

/**
 * Handles hooks related to lessons in the OhMyLMS plugin.
 *
 * @since 1.0.0
 */
class AssignmentHookHandler extends HookHandler {

	public function register_hooks() {
		add_action( 'ohmylms_rest_insert_assignment', array( $this, 'link_assignment_with_chapter' ), 10, 2 );
		add_action( 'ohmylms_rest_delete_assignment', array( $this, 'unlink_chapter_from_assignment' ), 10 );
	}


	/**
	 * Link lesson with chapter.
	 * Update
	 */
	public function link_assignment_with_chapter( $lesson, $request ) {
		if ( ! is_a( $lesson, 'WP_Post' ) ) {
			return;
		}
		$lesson_id = $lesson->ID;

		if ( empty( $request['chapter_id'] ) ) {
			return;
		}

		$chapter_id   = intval( $request['chapter_id'] );
		$order_number = ! empty( $request['assignment_order'] ) ? intval( $request['assignment_order'] ) : 0;
		$this->update_content_relationship( $chapter_id, $lesson_id, $order_number );
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
	public function update_content_relationship( $chapter_id, $lesson_id, $order_number = 0 ) {
		if ( ! $chapter_id || ! $lesson_id ) {
			return;
		}

		global $wpdb;
		$table_name = $wpdb->prefix . OHMYLMS_CONTENT_RELATIONSHIP;

		// Check if the relationship already exists
		$exists = $wpdb->get_var(
			$wpdb->prepare(
				"SELECT ID FROM $table_name WHERE chapter_id = %d AND content_id = %d LIMIT 1",
				$chapter_id,
				$lesson_id
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
					'content_id' => $lesson_id,
					'chapter_id' => $chapter_id,
				),
				array( '%d' ),
				array( '%d', '%d' )
			);
		} else {
			$wpdb->insert(
				$table_name,
				array(
					'content_id'   => $lesson_id,
					'chapter_id'   => $chapter_id,
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
		do_action( 'ohmylms_chapter_lesson_relationship_created', $chapter_id, $lesson_id );
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
	public function unlink_chapter_from_assignment( $assignment_id ) {

		if ( ! $assignment_id ) {
			return;
		}

		global $wpdb;
		$table_name = $wpdb->prefix . OHMYLMS_CONTENT_RELATIONSHIP;

		$wpdb->delete(
			$table_name,
			array(
				'content_id' => $assignment_id,
			),
			array(
				'%d',
				'%d',
			)
		);

		$table_name = $wpdb->prefix . 'ohmylms_user_progress';
		$wpdb->delete(
			$table_name,
			array(
				'content_id' => $assignment_id,
			),
			array(
				'%d',
				'%d',
			)
		);
	}
}
