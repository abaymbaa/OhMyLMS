<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\Schools\Access;
use OhMyLMS\Skills\Evidence;
use OhMyLMS\Skills\Mastery;
use OhMyLMS\Skills\Recommendations;
use OhMyLMS\Skills\Taxonomy;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined( 'ABSPATH' ) || exit;

/**
 * Teacher skill-performance reports, kept separate from grades. Access needs an explicit
 * scope: a course the viewer may edit, or a class they teach (Schools\Access). Grade
 * overrides never become skill evidence.
 */
class SkillReportController extends RestController {
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/reports/skills',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'matrix' ),
					'permission_callback' => array( $this, 'scope_permission' ),
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/reports/skills/students/(?P<student>[\d]+)',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'student' ),
					'permission_callback' => array( $this, 'student_permission' ),
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/reports/skills/students/(?P<student>[\d]+)/rebuild',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'rebuild' ),
					'permission_callback' => static function () {
														return current_user_can( 'manage_options' ); },
				),
			)
		);
	}

	/** Learners in the requested scope, or WP_Error. */
	private function scope_students( WP_REST_Request $request ) {
		global $wpdb;
		if ( (int) $request['class_id'] ) {
			if ( ! class_exists( Access::class ) || ! Access::classroom( (int) $request['class_id'] ) ) {
				return new WP_Error( 'ohmylms_forbidden', __( 'You cannot view this class.', 'ohmylms' ), array( 'status' => 403 ) ); }
			return array_map( 'intval', $wpdb->get_col( $wpdb->prepare( "SELECT user_id FROM {$wpdb->prefix}ohmylms_class_memberships WHERE class_id=%d AND role='student' AND status='active'", (int) $request['class_id'] ) ) );
		}
		$course = (int) $request['course_id'];
		if ( ! $course || get_post_type( $course ) !== OHMYLMS_COURSE_CPT ) {
			return new WP_Error( 'ohmylms_scope_required', __( 'Choose a course or class.', 'ohmylms' ), array( 'status' => 400 ) ); }
		if ( ! current_user_can( 'edit_post', $course ) ) {
			return new WP_Error( 'ohmylms_forbidden', __( 'You cannot view this course.', 'ohmylms' ), array( 'status' => rest_authorization_required_code() ) ); }
		return array_map( 'intval', $wpdb->get_col( $wpdb->prepare( "SELECT DISTINCT user_id FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE course_id=%d AND status='enrolled'", $course ) ) );
	}

	public function scope_permission( WP_REST_Request $request ) {
		if ( ! Schema::ready() ) {
			return new WP_Error( 'ohmylms_reports_unavailable', __( 'Reports are not installed yet.', 'ohmylms' ), array( 'status' => 503 ) ); }
		$students = $this->scope_students( $request );
		return is_wp_error( $students ) ? $students : true;
	}

	public function student_permission( WP_REST_Request $request ) {
		$access = $this->student_access( $request );
		return is_wp_error( $access ) ? $access : true;
	}

	/**
	 * How the viewer reaches this learner: 'full' (the learner, an administrator or a
	 * teacher/course scope) or 'guardian' (summary and suggestions only, no answer log).
	 */
	private function student_access( WP_REST_Request $request ) {
		if ( ! Schema::ready() ) {
			return new WP_Error( 'ohmylms_reports_unavailable', __( 'Reports are not installed yet.', 'ohmylms' ), array( 'status' => 503 ) ); }
		$student = (int) $request['student'];
		if ( ! is_user_logged_in() ) {
			return new WP_Error( 'ohmylms_forbidden', __( 'Sign in to view skills.', 'ohmylms' ), array( 'status' => rest_authorization_required_code() ) ); }
		if ( $student === get_current_user_id() || current_user_can( 'manage_options' ) ) {
			return 'full'; }
		// Guardians and teachers see a learner only through an explicit school relationship.
		$school = (int) $request['school_id'];
		if ( $school && class_exists( Access::class ) ) {
			if ( Access::school( $school, array( 'school_admin', 'teacher' ) ) && Access::student( $school, $student ) ) {
				return 'full'; }
			if ( Access::guardian( $school, $student ) ) {
				return 'guardian'; }
		}
		if ( ! (int) $request['class_id'] && ! (int) $request['course_id'] ) {
			return new WP_Error( 'ohmylms_forbidden', __( 'This learner is not in your scope.', 'ohmylms' ), array( 'status' => 403 ) ); }
		$students = $this->scope_students( $request );
		if ( is_wp_error( $students ) ) {
			return $students; }
		return in_array( $student, $students, true ) ? 'full' : new WP_Error( 'ohmylms_forbidden', __( 'This learner is not in your scope.', 'ohmylms' ), array( 'status' => 403 ) );
	}

	public function matrix( WP_REST_Request $request ) {
		global $wpdb;
		Evidence::process( 100 );
		$students = $this->scope_students( $request );
		$skills   = array();
		$rows     = array();
		if ( $students ) {
			$placeholders = implode( ',', array_fill( 0, count( $students ), '%d' ) );
			$states       = $wpdb->get_results( $wpdb->prepare( 'SELECT student_id, term_id, level, review_due, evidence_count, independent_correct, families FROM ' . Schema::table( 'student_skill_state' ) . " WHERE student_id IN ($placeholders)", $students ), ARRAY_A );
			foreach ( $states as $state ) {
				$skills[ (int) $state['term_id'] ]                             = true;
				$rows[ (int) $state['student_id'] ][ (int) $state['term_id'] ] = array(
					'level'               => $state['level'],
					'review_due'          => (bool) $state['review_due'],
					'evidence'            => (int) $state['evidence_count'],
					'independent_correct' => (int) $state['independent_correct'],
					'families'            => (int) $state['families'],
				);
			}
		}
		if ( (int) $request['course_id'] ) {
			foreach ( wp_get_object_terms( (int) $request['course_id'], Taxonomy::NAME, array( 'fields' => 'ids' ) ) as $term ) {
				$skills[ (int) $term ] = true; }
		}
		$skill_list = array_values( array_filter( array_map( array( Taxonomy::class, 'describe' ), array_keys( $skills ) ) ) );
		usort(
			$skill_list,
			static function ( $left, $right ) {
				return strcmp( $left['name'], $right['name'] );
			}
		);
		$learners = array_map(
			static function ( $id ) use ( $rows ) {
				$user = get_userdata( $id );
				return array(
					'id'     => $id,
					'name'   => $user ? $user->display_name : '#' . $id,
					'skills' => (object) ( $rows[ $id ] ?? array() ),
				);
			},
			$students
		);
		usort(
			$learners,
			static function ( $left, $right ) {
				return strcmp( $left['name'], $right['name'] );
			}
		);
		return rest_ensure_response(
			array(
				'skills'   => array_map(
					static function ( $skill ) {
						return array(
							'id'   => $skill['id'],
							'name' => $skill['name'],
							'code' => $skill['code'],
						);
					},
					$skill_list
				),
				'students' => $learners,
				'levels'   => array_map( array( Mastery::class, 'label' ), array_combine( Mastery::LEVELS, Mastery::LEVELS ) ),
			)
		);
	}

	public function student( WP_REST_Request $request ) {
		global $wpdb;
		$student = (int) $request['student'];
		Evidence::process( 100 );
		if ( $this->student_access( $request ) !== 'full' ) {
			return rest_ensure_response(
				array(
					'skills'          => Evidence::summary( $student ),
					'recommendations' => Recommendations::for_student( $student ),
					'evidence'        => array(),
				)
			);
		}
		$evidence = $wpdb->get_results(
			$wpdb->prepare(
				'SELECT e.term_id, e.part_id, e.role, e.awarded, e.available, e.independent, e.first_try, e.difficulty, e.source_type, e.source_id, e.question_id, e.version_id, e.evidence_at, e.superseded
             FROM ' . Schema::table( 'skill_evidence' ) . ' e WHERE e.student_id=%d ORDER BY e.evidence_at DESC, e.id DESC LIMIT 200',
				$student
			),
			ARRAY_A
		);
		foreach ( $evidence as &$row ) {
			$row['question'] = get_the_title( (int) $row['question_id'] ); }
		return rest_ensure_response(
			array(
				'skills'          => Evidence::summary( $student ),
				'recommendations' => Recommendations::for_student( $student ),
				'evidence'        => $evidence,
			)
		);
	}

	public function rebuild( WP_REST_Request $request ) {
		return rest_ensure_response(
			array(
				'processed' => Evidence::rebuild( (int) $request['student'] ),
				'skills'    => Evidence::summary( (int) $request['student'] ),
			)
		);
	}
}
