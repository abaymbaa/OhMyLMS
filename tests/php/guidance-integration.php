<?php
/** Guidance on the shared skill library: pooled levels, path, reviews with implicit credit, readiness and access. Isolated site only. */
if ( PHP_SAPI !== 'cli' ) { exit; }
$config = json_decode( file_get_contents( getenv( 'OHMYLMS_TEST_CREDENTIALS' ) ), true );
$_SERVER['HTTP_HOST'] = '127.0.0.1:8100';
require $config['site'] . '/wp-load.php';
if ( ! defined( 'OHMYLMS_TEST_SITE' ) || ! in_array( DB_NAME, array( 'ohmylms_source_test', 'ohmylms_streak_test' ), true ) ) { throw new RuntimeException( 'Requires an isolated database.' ); }

use OhMyLMS\Assessment\Schema as AssessmentSchema;
use OhMyLMS\Curriculum\Comparison;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Schema;
use OhMyLMS\Curriculum\SkillEdges;
use OhMyLMS\Curriculum\SkillMappings;
use OhMyLMS\Curriculum\Syllabus;
use OhMyLMS\Guidance\Guidance;
use OhMyLMS\Performance\Settings as PerformanceSettings;
use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\Student\LearnerProfile;

global $wpdb;
$checks = 0; $items = array(); $terms = array(); $users = array(); $posts = array();
$admin  = get_user_by( 'login', $config['username'] )->ID;
$tag    = wp_generate_password( 6, false, false );
$policy = get_option( PerformanceSettings::OPTION, null );
function ok( $value, $message ) { global $checks; if ( ! $value ) { throw new RuntimeException( $message ); } ++$checks; }
function api( $method, $path, array $data = array() ) {
	$request = new WP_REST_Request( $method, '/ohmylms/v1/' . $path );
	if ( 'GET' === $method ) { $request->set_query_params( $data ); }
	else { $request->set_header( 'Content-Type', 'application/json' ); $request->set_body( wp_json_encode( $data ) ); }
	return rest_do_request( $request );
}

try {
	wp_set_current_user( $admin );
	Schema::install(); AssessmentSchema::install();
	delete_option( PerformanceSettings::OPTION );
	$subject = 'Guidance ' . $tag;
	$shared  = static function ( $name, $domain, $from, $to ) use ( $subject, $tag, &$terms ) {
		$skill   = Comparison::save_shared( 0, array( 'name' => $name . ' ' . $tag, 'subject' => $subject, 'domain' => $domain, 'grade_from' => $from, 'grade_to' => $to ) );
		$terms[] = $skill['id'];
		return (int) $skill['id'];
	};
	$simplify  = $shared( 'Simplify expressions', 'algebra', 6, 6 );
	$linear    = $shared( 'Solve linear equations', 'algebra', 7, 8 );
	$quadratic = $shared( 'Solve quadratic equations', 'algebra', 9, 9 );
	$triangle  = $shared( 'Area of triangles', 'geometry', 6, 6 );
	$composite = $shared( 'Area of composite shapes', 'geometry', 7, 7 );
	$calculus  = $shared( 'Differentiate', 'calculus', 12, 12 );
	ok( true === SkillEdges::add_prerequisite( $linear, $simplify ) && true === SkillEdges::add_prerequisite( $quadratic, $linear ) && true === SkillEdges::add_prerequisite( $composite, $triangle ), 'prerequisites' );
	ok( true === SkillEdges::add_encompass( $quadratic, $linear, 0.6 ) && true === SkillEdges::add_encompass( $composite, $triangle, 1.0 ), 'included skills' );

	// A syllabus whose objectives map to the shared skills, and an exam to measure readiness for.
	$item = Items::create( array( 'name' => 'Grade 7 ' . $tag, 'is_syllabus' => true ) ); $grade7 = (int) $item['id']; $items[] = $grade7;
	$group = Syllabus::add_group( $grade7, array( 'name' => 'Algebra' ) );
	$o_linear   = (int) Syllabus::create_skill( $grade7, $group, array( 'name' => 'Solve equations ' . $tag, 'code' => '7.1' ) )['term_id']; $terms[] = $o_linear;
	$o_triangle = (int) Syllabus::create_skill( $grade7, $group, array( 'name' => 'Triangle area ' . $tag, 'code' => '7.2' ) )['term_id']; $terms[] = $o_triangle;
	ok( ! is_wp_error( SkillMappings::save( $o_linear, $linear, 'equivalent' ) ) && ! is_wp_error( SkillMappings::save( $o_triangle, $triangle, 'equivalent' ) ), 'objectives map to shared skills' );
	$item = Items::create( array( 'name' => 'Exam ' . $tag, 'is_syllabus' => true ) ); $exam = (int) $item['id']; $items[] = $exam;
	$egroup = Syllabus::add_group( $exam, array( 'name' => 'Algebra' ) );
	$e1 = (int) Syllabus::create_skill( $exam, $egroup, array( 'name' => 'Exam linear ' . $tag, 'code' => 'E1' ) )['term_id']; $terms[] = $e1;
	$e2 = (int) Syllabus::create_skill( $exam, $egroup, array( 'name' => 'Exam quadratic ' . $tag, 'code' => 'E2' ) )['term_id']; $terms[] = $e2;
	SkillMappings::save( $e1, $linear, 'equivalent' ); SkillMappings::save( $e2, $quadratic, 'equivalent' );

	// A practice question for the linear objective, so the path can link to practice.
	$question = api( 'POST', 'question', array( 'name' => 'Guidance q ' . $tag, 'settings' => array( 'type' => 'single-choice', 'score' => array( 'enabled' => true, 'value' => 1 ) ), 'questions' => array( array( 'answer' => 'Right', 'is_correct' => 1, 'order_number' => 1 ), array( 'answer' => 'Wrong', 'is_correct' => 0, 'order_number' => 2 ) ), 'skills' => array( 'p1' => array( 'primary' => $o_linear ) ) ) );
	ok( 201 === $question->get_status(), 'question: ' . wp_json_encode( $question->get_data() ) );
	$posts[] = (int) $question->get_data()['id'];
	ok( 200 === api( 'POST', 'question-bank/' . $question->get_data()['id'] . '/approve' )->get_status(), 'question approved' );

	// A learner in grade 9 with evidence.
	$learner = wp_create_user( 'guidance-' . $tag, wp_generate_password(), 'guidance-' . $tag . '@example.org' ); $users[] = $learner;
	update_user_meta( $learner, LearnerProfile::META_GRADE, '9' );
	$event = 7700000 + wp_rand( 1, 99999 ) * 10;
	$evidence = static function ( $term, $correct, $family, $days_ago ) use ( $wpdb, $learner, &$event ) {
		++$event;
		$wpdb->insert( AssessmentSchema::table( 'skill_evidence' ), array( 'grade_event_id' => $event, 'student_id' => $learner, 'term_id' => $term, 'part_id' => 'p1', 'role' => 'primary', 'awarded' => $correct ? 1 : 0, 'available' => 1, 'independent' => 1, 'first_try' => 1, 'difficulty' => 'standard', 'family_id' => $family, 'source_type' => 'practice', 'source_id' => $event, 'question_id' => $event, 'version_id' => 1, 'evidence_at' => gmdate( 'Y-m-d H:i:s', time() - (int) ( $days_ago * DAY_IN_SECONDS ) ), 'superseded' => 0 ) );
	};
	// Simplify: mastered (proficient, then correct again days later).
	foreach ( array( array( 'a', 10 ), array( 'b', 9.99 ), array( 'c', 9.98 ), array( 'd', 5 ), array( 'e', 4 ) ) as $row ) { $evidence( $simplify, true, $row[0], $row[1] ); }
	// Linear, through the mapped objective: proficient long ago, so a review is due.
	foreach ( array( 'f', 'g', 'h' ) as $i => $family ) { $evidence( $o_linear, true, $family, 40 - $i * 0.01 ); }
	// Triangles, through the objective: proficient long ago, due.
	foreach ( array( 'i', 'j', 'k' ) as $i => $family ) { $evidence( $o_triangle, true, $family, 41 - $i * 0.01 ); }
	// Composite areas: one correct answer today, which reviews triangles fully.
	$evidence( $composite, true, 'l', 0.01 );

	$states = Guidance::states( $learner, array( $simplify, $linear, $quadratic, $triangle, $composite, $calculus ) );
	ok( 'mastered' === $states[ $simplify ]['level'], 'simplify is mastered: ' . wp_json_encode( $states[ $simplify ] ) );
	ok( 'proficient' === $states[ $linear ]['level'] && 1 === $states[ $linear ]['review_due'], 'evidence on the mapped objective counts for the shared skill: ' . wp_json_encode( $states[ $linear ] ) );
	ok( 'attempted' === $states[ $composite ]['level'] && $states[ $composite ]['last_correct_at'] > time() - DAY_IN_SECONDS, 'composite areas started today' );
	ok( ! isset( $states[ $quadratic ] ) && ! isset( $states[ $calculus ] ), 'untouched skills have no state' );

	// ---- The learner's own guidance ----
	wp_set_current_user( $learner );
	$response = api( 'GET', 'reports/skills/students/' . $learner . '/guidance', array( 'subject' => $subject ) );
	ok( 200 === $response->get_status(), 'a learner reads their own guidance: ' . wp_json_encode( $response->get_data() ) );
	$guide = $response->get_data();
	ok( 9 === $guide['ceiling'] && 'Grade 9' === $guide['grade'], 'the profile grade sets the scope' );
	ok( 5 === $guide['counts']['skills'] && 4 === $guide['counts']['started'] && 3 === $guide['counts']['proficient'] && 1 === $guide['counts']['mastered'], 'calculus (grade 12) is out of scope: ' . wp_json_encode( $guide['counts'] ) );
	$domains = array_column( $guide['domains'], null, 'domain' );
	ok( 62 === $domains['algebra']['strength'] && 55 === $domains['geometry']['strength'] && ! isset( $domains['calculus'] ), 'strength by area: ' . wp_json_encode( $guide['domains'] ) );
	ok( array( $composite, $quadratic ) === array_column( $guide['ready'], 'id' ), 'ready to learn: composite areas and quadratics: ' . wp_json_encode( array_column( $guide['ready'], 'name' ) ) );
	ok( array( $linear ) === array_column( $guide['reviews'], 'id' ), 'linear equations are due for review: ' . wp_json_encode( array_column( $guide['reviews'], 'name' ) ) );
	ok( 1 === count( $guide['covered'] ) && $triangle === $guide['covered'][0]['id'] && $composite === $guide['covered'][0]['by'][0]['id'], 'triangles need no separate review: today\'s composite work covered them' );
	$path = $guide['path'];
	ok( array( 'continue', 'learn' ) === array_column( $path, 'type' ) && array( $composite, $quadratic ) === array_column( $path, 'id' ), 'the path: keep going with composite areas, then learn quadratics: ' . wp_json_encode( $path ) );
	ok( array( $linear ) === array_column( $path[1]['reviews'], 'id' ), 'learning quadratics also reviews linear equations, so no separate review step' );
	ok( null === $path[0]['practice_url'] && 'Attempted' === $path[0]['level_label'], 'no practice link where no question exists' );
	ok( false !== strpos( (string) $guide['reviews'][0]['practice_url'], 'ohmylms_practice=' . $o_linear ), 'practice for a shared skill goes to the objective that has questions: ' . wp_json_encode( $guide['reviews'][0] ) );
	ok( array() === $guide['gaps'], 'no gaps' );
	ok( ! isset( $guide['readiness'] ), 'readiness only with a target' );

	$ready = api( 'GET', 'reports/skills/students/' . $learner . '/guidance', array( 'subject' => $subject, 'target' => $exam ) )->get_data()['readiness'];
	ok( 50 === $ready['percent'] && 2 === $ready['total'] && 'Exam ' . $tag === $ready['name'] && $quadratic === $ready['missing'][0]['id'], 'readiness for the exam: ' . wp_json_encode( $ready ) );
	$lower = api( 'GET', 'reports/skills/students/' . $learner . '/guidance', array( 'subject' => $subject, 'grade' => 6 ) )->get_data();
	ok( 6 === $lower['ceiling'] && 2 === $lower['counts']['skills'], 'a grade can be asked for' );

	// ---- The dashboard shows it ----
	$html = \OhMyLMS\Practice\Frontend::guidance( $learner );
	ok( false !== strpos( $html, 'Your next steps' ) && false !== strpos( $html, 'Keep going' ) && false !== strpos( $html, 'Strength by area' ) && false !== strpos( $html, 'No separate review needed' ), 'My skills shows next steps, strengths and covered reviews' );
	$stranger = wp_create_user( 'guidance-new-' . $tag, wp_generate_password(), 'guidance-new-' . $tag . '@example.org' ); $users[] = $stranger;
	$fresh = Guidance::for_student( $stranger, array( 'subject' => $subject ) );
	ok( 6 === $fresh['ceiling'] && 'learn' === $fresh['path'][0]['type'] && in_array( $fresh['path'][0]['id'], array( $simplify, $triangle ), true ), 'a new learner starts at the lowest grade with skills that need nothing first: ' . wp_json_encode( array_column( $fresh['path'], 'name' ) ) );

	// ---- Access ----
	wp_set_current_user( $stranger );
	ok( in_array( api( 'GET', 'reports/skills/students/' . $learner . '/guidance' )->get_status(), array( 401, 403 ), true ), 'another learner cannot read it' );
	wp_set_current_user( $admin );
	ok( 200 === api( 'GET', 'reports/skills/students/' . $learner . '/guidance', array( 'subject' => $subject ) )->get_status(), 'an administrator can' );
	$tools   = \OhMyLMS\MCP\PerformanceTools::definitions();
	$execute = new ReflectionMethod( \OhMyLMS\MCP\Abilities::class, 'execute' );
	$execute->setAccessible( true );
	$mcp = $execute->invoke( null, 'get_student_guidance', $tools['get_student_guidance'], array( 'student_id' => $learner, 'subject' => $subject ) );
	ok( ! is_wp_error( $mcp ) && 2 === count( $mcp['data']['path'] ), 'the MCP tool returns the path: ' . ( is_wp_error( $mcp ) ? $mcp->get_error_message() : '' ) );
	echo $checks . " guidance integration checks passed.\n";
} finally {
	wp_set_current_user( $admin );
	if ( null === $policy ) { delete_option( PerformanceSettings::OPTION ); } else { update_option( PerformanceSettings::OPTION, $policy ); }
	foreach ( $users as $id ) { $wpdb->delete( AssessmentSchema::table( 'skill_evidence' ), array( 'student_id' => $id ) ); }
	foreach ( $terms as $id ) { $wpdb->delete( SkillMappings::table(), array( 'specific_term_id' => $id ) ); $wpdb->delete( SkillEdges::table(), array( 'skill_id' => $id ) ); }
	foreach ( $items as $id ) { $item = Items::get( $id ); if ( $item ) { $course = $item['course_id']; $root = $item['skill_root_id']; Items::delete( $id, 'delete', true ); if ( $course ) { wp_delete_post( $course, true ); } if ( $root ) { wp_delete_term( $root, Taxonomy::NAME ); } } }
	foreach ( $terms as $id ) { wp_delete_term( $id, Taxonomy::NAME ); }
	foreach ( $posts as $id ) { wp_delete_post( $id, true ); }
	require_once ABSPATH . 'wp-admin/includes/user.php';
	foreach ( $users as $id ) { if ( $id && ! is_wp_error( $id ) ) { wp_delete_user( $id ); } }
}
