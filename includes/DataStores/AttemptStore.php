<?php
namespace OMLMS\DataStores;

use OMLMS\Abstracts\DataStore;

defined( 'ABSPATH' ) || exit;

class AttemptStore extends DataStore {
    public function create( &$data ) {}

    /**
     * Read an attempt from the database and populate the data object.
     *
     * @param \OMLMS\Data\Attempt $data The attempt data object to populate.
     * @return bool Returns true on success, false on failure.
     *
     * @since 1.0.0
     */
    public function read( &$data ) {
        if ( ! $data instanceof \OMLMS\Data\Attempt ) {
            return false;
        }

        global $wpdb;
        $attempt_id = $data->get_id();
        if ( ! $attempt_id ) {
            return false;
        }

        $query = $wpdb->prepare(
            "SELECT * FROM {$wpdb->prefix}omlms_quiz_attempts WHERE id = %d",
            $attempt_id
        );
        $result = $wpdb->get_row( $query, ARRAY_A );

        if ( ! $result ) {
            return false;
        }
        $data->set_props( $result );
    }

    public function update( &$data ) {}
    public function delete( &$data, $args = array() ) {}

    /**
     * Get the student associated with an attempt.
     *
     * @param \OMLMS\Data\Attempt $attempt The attempt object.
     * @return \OMLMS\Data\Student|bool Returns the Student object if found, or false if not.
     *
     * @since 1.0.0
     */
    public function get_student( &$attempt ) {
        if ( ! $attempt instanceof \OMLMS\Data\Attempt ) {
            return false;
        }

        global $wpdb;
        $student_id = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT student_id FROM {$wpdb->prefix}omlms_quiz_attempts WHERE id = %d",
                $attempt->get_id()
            )
        );
        if ( ! $student_id ) {
            return false;
        }
        $student = omlms_get_student( $student_id );
        return $student;
    }


	/**
	 * Get the total score for an attempt.
	 *
	 * @param \OMLMS\Data\Attempt $attempt The attempt object.
	 * @return float|bool Returns the total score as a float, or false on failure.
	 * @since 1.0.0
	 */
	public function get_total_score( &$attempt ) {
		if ( ! $attempt instanceof \OMLMS\Data\Attempt ) {
			return false;
		}
		global $wpdb;
		$total_score = $wpdb->get_var(
			$wpdb->prepare(
				"SELECT SUM(achive_mark) FROM {$wpdb->prefix}omlms_quiz_attempts_answers WHERE quiz_attempt_id = %d",
				$attempt->get_id()
			)
		);
		return $total_score ? (float) $total_score : 0.0;
	}
}
