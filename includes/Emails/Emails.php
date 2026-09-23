<?php
namespace OMLMS\Emails;

class Emails {


	public function get_emails() {
		$emails = array(
			\OMLMS\Emails\CreatorsEmail\NewOrder::class,
			\OMLMS\Emails\CreatorsEmail\CancelledOrder::class,
			\OMLMS\Emails\CreatorsEmail\AssignmentSubmitted::class,
			\OMLMS\Emails\CreatorsEmail\QuizSubmitted::class,
			\OMLMS\Emails\StudentsEmail\NewOrder::class,
			\OMLMS\Emails\StudentsEmail\CompleteCourse::class,
			\OMLMS\Emails\StudentsEmail\ConfirmEnrollment::class,
			\OMLMS\Emails\StudentsEmail\CancelEnrollment::class,
			\OMLMS\Emails\StudentsEmail\AssignmentGraded::class,
			\OMLMS\Emails\StudentsEmail\QuizGraded::class,
			\OMLMS\Emails\StudentsEmail\ManualEnrollment::class,
			\OMLMS\Emails\StudentsEmail\EmailVerification::class,
		);
		return $emails;
	}

	public function register_email() {
		$emails = $this->get_emails();
		foreach ( $emails as $email ) {
			new $email();
		}
		$this->register_digest_cron();
	}

	public function register_digest_cron() {
		if ( ! wp_next_scheduled( 'omlms_send_assignment_submission_digest' ) ) {
			wp_schedule_event( time(), 'daily', 'omlms_send_assignment_submission_digest' );
		}
		if ( ! wp_next_scheduled( 'omlms_send_quiz_submission_digest' ) ) {
			wp_schedule_event( time(), 'daily', 'omlms_send_quiz_submission_digest' );
		}
	}

	public static function replace_merge_tags( $email, $order, $course = null ) {

		$replacements = array(
			'[student_name]'               => $order ? $order->get_student_name() : '',
			'[Student Name]'               => $order ? $order->get_student_name() : '',
			'Student Name'                 => $order ? $order->get_student_name() : '',
			'{student_name}'               => $order ? $order->get_student_name() : '',
			'{Student_name}'               => $order ? $order->get_student_name() : '',
			'{Student_Name}'               => $order ? $order->get_student_name() : '',
			'[course_name]'                => $course ? $course->get_name() : '',
			'[course name]'                => $course ? $course->get_name() : '',
			'[Course Name]'                => $course ? $course->get_name() : '',
			'[Course_Name]'                => $course ? $course->get_name() : '',
			'{course_name}'                => $course ? $course->get_name() : '',
			'{course name}'                => $course ? $course->get_name() : '',
			'{Course_name}'                => $course ? $course->get_name() : '',
			'{Course name}'                => $course ? $course->get_name() : '',
			'{Course_Name}'                => $course ? $course->get_name() : '',
			'{Course Name}'                => $course ? $course->get_name() : '',
			'<strong>Course Name</strong>' => $course ? '<strong>' . $course->get_name() . '</strong>' : '',
			'[Expected Processing Time]'   => '24 hours',
			'[Your Platform Name]'         => get_bloginfo( 'name' ),
			'[Site Name]'                  => get_bloginfo( 'name' ),
			'[email@example.com]'          => get_option( 'admin_email' ),
		);

		// Ensure the input is valid
		if ( ! is_string( $email ) || ! is_array( $replacements ) ) {
			return false; // Return false for invalid input
		}

		// Replace all occurrences in the HTML
		$updated_email = strtr( $email, $replacements );

		return $updated_email;
	}

	public static function get_email_settings() {
		$settings = array();
		$keys     = array(
			'creator_lms_email_branding_image',
			'creator_lms_email_base_color',
			'creator_lms_email_background_color',
			'creator_lms_email_body_background_color',
			'creator_lms_email_body_text_color',
			'creator_lms_email_button_possition',
			'creator_lms_email_sender_email_address',
			'creator_lms_email_sender_name',
			'creator_lms_email_footer_text',
		);

		foreach ( $keys as $key ) {
			$settings[ $key ] = get_option( $key, '' );
		}
		return $settings;
	}
}
