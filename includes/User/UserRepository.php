<?php

namespace OMLMS\User;

/**
 * Responsible to handle all user and enrollment related database operations
 *
 * @since 1.0.0
 */
class UserRepository {

	/**
	 * Find is user enrolled
	 *
	 * @param $course_id
	 * @param $user_id
	 * @return string|null
	 * @since 1.0.0
	 */
	public static function query_is_user_enrolled( $course_id, $user_id ): ?string {
		global $wpdb;
		$table_name = $wpdb->prefix . 'omlms_user_enrollment';

		return $wpdb->get_var(
			$wpdb->prepare(
				"SELECT id FROM {$wpdb->prefix}omlms_user_enrollment WHERE course_id = %d AND user_id = %d AND status = %s",
				$course_id,
				$user_id,
				'enrolled'
			)
		);
	}

	/**
	 * Insert new enrollment
	 *
	 * @param $data
	 * @return array
	 * @since 1.0.0
	 */
	public static function insert_new_enrollment( $data ): array {
		global $wpdb;
		$table_name = $wpdb->prefix . 'omlms_users_enrolled_in_courses';
		try {
			$wpdb->insert( $table_name, $data );
			return array(
				'status'  => 'success',
				'message' => __( 'Successfully enrolled.', 'ohmylms' ),
			);
		} catch ( \Exception $e ) {
			return array(
				'status'           => 'error',
				'message'          => __( 'Failed to enroll. Please try again.', 'ohmylms' ),
				'original_message' => $e->getMessage(),
			);
		}
	}
}
