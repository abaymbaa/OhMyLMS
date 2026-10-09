<?php
namespace OhMyLMS\Learning;

defined( 'ABSPATH' ) || exit;

final class Bootstrap {
	private static $dirty = array();

	public static function init() {
		add_action( 'init', array( Schema::class, 'install' ), 7 );
		add_action(
			'admin_enqueue_scripts',
			static function () {
				if ( isset( $_GET['page'] ) && $_GET['page'] === 'ohmylms' ) {
					wp_enqueue_style( 'ohmylms-learning-editor', plugins_url( 'assets/css/learning-program.css', OHMYLMS_FILE ), array(), OHMYLMS_VERSION ); }
			}
		);
		add_action(
			'ohmylms_skill_state_updated',
			static function ( $student ) {
				self::$dirty[ (int) $student ] = true;
			}
		);
		add_action(
			'ohmylms_attempt_graded',
			static function ( $event ) {
				self::$dirty[ (int) $event['student_id'] ] = true;
			}
		);
		add_action(
			'ohmylms_learning_activity_completed',
			static function ( $student, $course ) {
				CompletionPolicy::award( $student, $course );
			},
			10,
			2
		);
		add_action(
			'ohmylms_after_assignment_review',
			static function ( $assignment, $course, $student ) {
				CompletionPolicy::award( $student, $course );
			},
			20,
			3
		);
		add_action(
			'transition_post_status',
			static function ( $new, $old, $post ) {
				if ( $post && $post->post_type === OHMYLMS_COURSE_CPT && $new !== $old ) {
					Placements::flush(); }
			},
			10,
			3
		);
		// Before deletion, while the post type can still be read.
		add_action(
			'before_delete_post',
			static function ( $id ) {
				if ( get_post_type( $id ) === OHMYLMS_COURSE_CPT ) {
					Placements::flush();
				} }
		);
		add_action( 'shutdown', array( __CLASS__, 'flush' ), 30 );
		add_action( 'ohmylms_process_evidence', array( __CLASS__, 'flush' ), 30 );
		Frontend::init();
	}

	public static function flush() {
		global $wpdb;
		if ( ! Schema::ready() ) {
			return; }
		$students    = array_keys( self::$dirty );
		self::$dirty = array();
		foreach ( $students as $student ) {
			$courses = $wpdb->get_col( $wpdb->prepare( 'SELECT DISTINCT e.course_id FROM ' . Schema::table( 'enrollments' ) . " b JOIN {$wpdb->prefix}ohmylms_user_enrollment e ON e.id=b.enrollment_id WHERE e.user_id=%d AND e.status='enrolled' AND e.progress<>'completed' AND b.program_id>0", $student ) );
			foreach ( $courses as $course ) {
				CompletionPolicy::award( $student, (int) $course ); }
		}
	}
}
