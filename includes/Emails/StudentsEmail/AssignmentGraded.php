<?php

namespace OMLMS\Emails\StudentsEmail;

use OMLMS\Emails\Emails;

class AssignmentGraded {

	public function __construct() {
		add_action( 'creator_lms_after_assignment_review', array( $this, 'trigger' ), 10, 4 );
	}

	public function basic_settings(): array {
		return array(
			'id'             => 'student_assignment_graded',
			'template_html'  => 'emails/student-assignment-graded.php',
			'title'          => __( 'Notify Student When Assignment Is Graded', 'ohmylms' ),
			'tooltip'        => __( 'Sent to the student after an instructor grades their assignment submission.', 'ohmylms' ),
			'recipient_type' => 'student',
			'description'    => __( 'Sent to the student after an instructor grades their assignment submission.', 'ohmylms' ),
		);
	}

	public function default_settings(): array {
		return array(
			'enable'             => true,
			'heading'            => __( 'Your Assignment Has Been Graded', 'ohmylms' ),
			'subject'            => __( 'Your assignment {assignment_name} has been graded', 'ohmylms' ),
			'additional_content' => '<p style="margin: 0 0 15px 0; padding:0; color: #1F2328; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6;">Dear {student_name},</p><p style="margin: 0 0 15px 0; padding:0; color: #1F2328; font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.6;">Your instructor has reviewed and graded your assignment submission. Please log in to view your result and any feedback provided.</p>',
			'button_text'        => __( 'View My Grade', 'ohmylms' ),
			'footer_text'        => __( 'Click the button below to view your grade and instructor feedback.', 'ohmylms' ),
			'button_link'        => '',
			'recipient_email'    => array(),
		);
	}

	public function trigger( $assignment_id, $course_id, $student_id, $status ) {
		$settings = get_option( 'create_lms_email_student_assignment_graded', $this->default_settings() );

		if ( empty( $settings['enable'] ) ) {
			return;
		}

		$student = get_userdata( $student_id );
		if ( ! $student ) {
			return;
		}

		$course = omlms_get_course( $course_id );
		if ( ! $course ) {
			return;
		}

		$assignment       = get_post( $assignment_id );
		$assignment_title = $assignment ? $assignment->post_title : '';

		global $wpdb;
		$attempt     = $wpdb->get_row( $wpdb->prepare( "SELECT score FROM {$wpdb->prefix}omlms_assignment_attempts WHERE user_id = %d AND assignment_id = %d ORDER BY id DESC LIMIT 1", $student_id, $assignment_id ) );
		$score       = $attempt ? $attempt->score : '';
		$total_marks = get_post_meta( $assignment_id, '_total_points', true );

		$email_settings = Emails::get_email_settings();

		$to      = $student->user_email;
		$subject = isset( $settings['subject'] ) ? $settings['subject'] : '';
		$subject = $this->replace_tags( $subject, $student->display_name, $course->get_name(), $assignment_title, $status );

		if ( isset( $settings['button_link'] ) && empty( $settings['button_link'] ) ) {
			$settings['button_link'] = omlms_get_page_permalink( 'student_dashboard' );
		}

		ob_start();
		omlms_get_template(
			'emails/student-assignment-graded',
			array(
				'student'          => $student,
				'course'           => $course,
				'assignment_title' => $assignment_title,
				'status'           => $status,
				'score'            => $score,
				'total_marks'      => $total_marks,
				'settings'         => $settings,
				'email_settings'   => $email_settings,
			)
		);
		$html_body = ob_get_clean();
		$html_body = $this->replace_tags( $html_body, $student->display_name, $course->get_name(), $assignment_title, $status );

		$headers      = array( 'MIME-Version: 1.0', 'Content-Type: text/html; charset=UTF-8' );
		$sender_name  = $email_settings['creator_lms_email_sender_name'];
		$sender_email = $email_settings['creator_lms_email_sender_email_address'];
		if ( $sender_email && $sender_name ) {
			$headers[] = 'From: ' . $sender_name . ' <' . $sender_email . '>';
		}

		wp_mail( $to, $subject, $html_body, $headers );
	}

	private function replace_tags( $content, $student_name, $course_name, $assignment_name, $status ) {
		$status_label = 'passed' === $status ? __( 'Passed', 'ohmylms' ) : __( 'Failed', 'ohmylms' );
		return str_replace(
			array( '{student_name}', '{course_name}', '{assignment_name}', '{status}' ),
			array( $student_name, $course_name, $assignment_name, $status_label ),
			$content
		);
	}
}
