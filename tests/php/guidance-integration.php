<?php
/** Guidance engine: strength by area, next steps, covered reviews, readiness, REST, MCP and My skills. Isolated site only. */
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
use OhMyLMS\Performance\Guidance;
use OhMyLMS\Performance\Snapshot;
use OhMyLMS\Skills\Mastery;
use OhMyLMS\Skills\Taxonomy;

global $wpdb;
$checks = 0; $items = array(); $terms = array(); $users = array();
$before       = get_option( Comparison::OPTION, array() );
$rules_before = get_option( Mastery::OPTION, null );
$admin        = get_user_by( 'login', $config['username'] )->ID;
$tag          = wp_generate_password( 6, false, false );
function ok( $value, $message ) { global $checks; if ( ! $value ) { throw new RuntimeException( $message ); } ++$checks; }
function guidance_get( $student, array $query = array() ) {
	$request = new WP_REST_Request( 'GET', '/ohmylms/v1/reports/skills/students/' . $student . '/guidance' );
	$request->set_query_params( $query );
	return rest_do_request( $request );
}

try {
	wp_set_current_user( $admin );
	Schema::install();
	ok( Schema::ready() && AssessmentSchema::ready(), 'schemas are installed' );
	// Thirty days between reviews keeps the dates below easy to follow.
	update_option( Mastery::OPTION, array( 'review_after_days' => 30 ) );

	// ---- A small library: algebra, geometry, number ----
	$subject = 'Mathematics ' . $tag;
	$shared  = static function ( $name, $domain, $from, $to ) use ( $subject, $tag, &$terms ) {
		$skill = Comparison::save_shared( 0, array( 'name' => $name . ' ' . $tag, 'subject' => $subject, 'topic' => 'Guidance', 'domain' => $domain, 'grade_from' => $from, 'grade_to' => $to ) );
		ok( ! is_wp_error( $skill ), 'shared skill created: ' . $name );
		$terms[] = $skill['id'];
		return (int) $skill['id'];
	};
	$linear    = $shared( 'Solve linear equations', 'algebra', 7, 7 );
	$expand    = $shared( 'Expand brackets', 'algebra', 8, 8 );
	$quadratic = $shared( 'Solve quadratic equations', 'algebra', 9, 9 );
	$systems   = $shared( 'Solve simultaneous equations', 'algebra', 9, 9 );
	$triangle  = $shared( 'Area of a triangle', 'geometry', 6, 7 );
	$pythag    = $shared( 'Pythagoras theorem', 'geometry', 8, 8 );
	$integers  = $shared( 'Order integers', 'number', 6, 6 );
	ok( true === SkillEdges::add_prerequisite( $quadratic, $linear ) && true === SkillEdges::add_prerequisite( $quadratic, $expand ) && true === SkillEdges::add_prerequisite( $systems, $linear ) && true === SkillEdges::add_prerequisite( $pythag, $triangle ), 'prerequisites saved' );
	ok( true === SkillEdges::add_encompass( $quadratic, $linear, 0.5 ) && true === SkillEdges::add_encompass( $quadratic, $expand, 0.6 ), 'includes links saved' );

	// ---- A syllabus whose objectives map onto the library ----
	$item = Items::create( array( 'name' => 'Grade 9 ' . $tag, 'is_syllabus' => true ) ); $syllabus = (int) $item['id']; $items[] = $syllabus;
	update_option( Comparison::OPTION, array_merge( (array) $before, array( $subject => array( $syllabus ) ) ) );
	$group      = Syllabus::add_group( $syllabus, array( 'name' => 'Equations' ) );
	$objectives = array();
	foreach ( array( 'Linear equations', 'Quadratic equations', 'Read bar charts' ) as $index => $name ) {
		$term = Syllabus::create_skill( $syllabus, $group, array( 'name' => $name . ' ' . $tag, 'code' => '9.' . ( $index + 1 ) ) );
		ok( ! is_wp_error( $term ), 'objective created' );
		$terms[] = $term['term_id']; $objectives[] = (int) $term['term_id'];
	}
	ok( ! is_wp_error( SkillMappings::save( $objectives[0], $linear, 'equivalent' ) ) && ! is_wp_error( SkillMappings::save( $objectives[1], $quadratic, 'equivalent' ) ), 'objectives mapped' );

	// ---- A learner: states are derived rows, so the fixture writes them directly ----
	$learner = wp_create_user( 'guidance-' . $tag, wp_generate_password(), 'guidance-' . $tag . '@example.org' ); $users[] = $learner;
	$other   = wp_create_user( 'guidance-other-' . $tag, wp_generate_password(), 'guidance-other-' . $tag . '@example.org' ); $users[] = $other;
	$state   = static function ( $term, $level, $days_ago, $struggling = 0 ) use ( $wpdb, $learner ) {
		$wpdb->insert( AssessmentSchema::table( 'student_skill_state' ), array( 'student_id' => $learner, 'term_id' => $term, 'level' => $level, 'policy' => 'evidence', 'evidence_count' => 4, 'struggling' => $struggling, 'last_evidence_at' => gmdate( 'Y-m-d H:i:s', time() - $days_ago * DAY_IN_SECONDS ), 'updated_at' => current_time( 'mysql', true ) ) );
	};
	$state( $objectives[0], 'proficient', 40 );  // Linear, through the objective: review was due 10 days ago.
	$state( $expand, 'proficient', 20 );         // Fresh.
	$state( $quadratic, 'familiar', 1 );         // Recent work that includes linear (0.5) and expanding (0.6).
	$state( $triangle, 'attempted', 2, 1 );      // Struggling.
	$state( $integers, 'proficient', 50 );       // Due, nothing covers it.
	Guidance::flush();
	$guidance = Snapshot::guidance( $learner, 10 );

	// Strength by area.
	$areas = array_column( $guidance['areas'], null, 'domain' );
	ok( array( 'number', 'algebra', 'geometry' ) === array_column( $guidance['areas'], 'domain' ), 'areas, strongest first: ' . wp_json_encode( $guidance['areas'] ) );
	ok( 70 === $areas['algebra']['strength'] && 'steady' === $areas['algebra']['band'] && 3 === $areas['algebra']['started'] && 8 === $areas['algebra']['grade'] && 'Grade 8' === $areas['algebra']['grade_label'] && 'Algebra' === $areas['algebra']['label'], 'algebra pools the objective onto its shared skill' );
	ok( 20 === $areas['geometry']['strength'] && 'building' === $areas['geometry']['band'] && 80 === $areas['number']['strength'], 'geometry and number strengths' );

	// Next steps: help, the review nothing covers, then skills ready to learn.
	$steps = $guidance['next_steps'];
	ok( array( 'help', 'review', 'ready' ) === array_column( $steps, 'type' ), 'next step order: ' . wp_json_encode( array_column( $steps, 'type' ) ) );
	ok( $triangle === $steps[0]['skill']['id'] && $integers === $steps[1]['skill']['id'] && $systems === $steps[2]['skill']['id'], 'the struggling skill, the overdue skill and the ready skill' );
	ok( array( $linear ) === array_column( $steps[2]['prerequisites'], 'id' ) && '' !== $steps[2]['message'], 'a ready skill names what it builds on' );
	ok( ! in_array( $pythag, array_column( array_column( $steps, 'skill' ), 'id' ), true ), 'a skill whose prerequisite is still developing is not ready' );

	// Reviews covered by later work.
	ok( 1 === $guidance['reviews']['due'] && 1 === $guidance['reviews']['fresh'] && 1 === count( $guidance['reviews']['covered'] ), 'review counts: ' . wp_json_encode( $guidance['reviews'] ) );
	$covered = $guidance['reviews']['covered'][0];
	ok( $linear === $covered['skill']['id'] && 0.5 === $covered['credit'] && $quadratic === $covered['covered_by'][0]['id'] && strtotime( $covered['next_due_at'] . ' UTC' ) > time(), 'linear equations are kept fresh by quadratics: ' . wp_json_encode( $covered ) );
	$row = $wpdb->get_row( $wpdb->prepare( 'SELECT level, review_due FROM %i WHERE student_id=%d AND term_id=%d', AssessmentSchema::table( 'student_skill_state' ), $learner, $objectives[0] ), ARRAY_A );
	ok( 'proficient' === $row['level'] && 0 === (int) $row['review_due'], 'guidance never writes states' );

	// Readiness for the syllabus.
	$mine = null;
	foreach ( $guidance['readiness'] as $entry ) { if ( $syllabus === $entry['syllabus']['id'] ) { $mine = $entry; } }
	ok( $mine && 1 === count( $guidance['readiness'] ), 'only syllabuses the learner has started are listed: ' . wp_json_encode( $guidance['readiness'] ) );
	ok( 50 === $mine['percent'] && 3 === $mine['total'] && 1 === $mine['ready'] && 1 === $mine['learning'] && 1 === $mine['not_started'], 'readiness through the mapped objectives: ' . wp_json_encode( $mine ) );
	ok( array( $objectives[1], $objectives[2] ) === array_column( $mine['gaps'], 'id' ), 'gaps list the started objective first' );

	// A link removed changes the guidance on the next read.
	SkillEdges::remove( $quadratic, $linear, 'encompasses' );
	Guidance::flush();
	ok( 2 === Snapshot::guidance( $learner, 10 )['reviews']['due'], 'without the link the review is due again' );

	// ---- One subject at a time ----
	$other_subject = 'Physics ' . $tag;
	$force         = Comparison::save_shared( 0, array( 'name' => 'Forces ' . $tag, 'subject' => $other_subject, 'domain' => 'mechanics', 'grade_from' => 9, 'grade_to' => 9 ) );
	$terms[]       = (int) $force['id'];
	$state( (int) $force['id'], 'familiar', 1 );
	Guidance::flush();
	$all  = Snapshot::guidance( $learner, 10 );
	$only = Snapshot::guidance( $learner, 10, $subject );
	$phys = Snapshot::guidance( $learner, 10, $other_subject );
	ok( array( 'Mathematics ' . $tag, $other_subject ) === $all['subjects'] && '' === $all['subject'] && in_array( 'mechanics', array_column( $all['areas'], 'domain' ), true ), 'all subjects together: ' . wp_json_encode( $all['subjects'] ) );
	ok( $subject === $only['subject'] && ! in_array( 'mechanics', array_column( $only['areas'], 'domain' ), true ) && 1 === count( $only['readiness'] ), 'one subject leaves the others out' );
	ok( array( 'mechanics' ) === array_column( $phys['areas'], 'domain' ) && array() === $phys['readiness'] && array() === $phys['next_steps'], 'the other subject has only its own skill and no syllabus' );

	// ---- A placement test feeds ready skills ----
	$wpdb->insert( AssessmentSchema::table( 'practice_sessions' ), array( 'uuid' => wp_generate_uuid4(), 'student_id' => $learner, 'mode' => 'placement', 'term_id' => 0, 'policy' => wp_json_encode( array( 'placement' => array( 'subject' => $subject, 'grade' => 8, 'graph' => array(), 'askable' => array(), 'result' => array( 'known' => array( $triangle ), 'unknown' => array(), 'unsure' => array(), 'domains' => array(), 'start' => array( $integers ) ) ) ) ), 'status' => 'complete', 'item_limit' => 5, 'started_at' => current_time( 'mysql', true ), 'completed_at' => current_time( 'mysql', true ) ) );
	$placement_session = (int) $wpdb->insert_id;
	Guidance::flush();
	$placed = Snapshot::guidance( $learner, 10, $subject );
	$ready  = array_values( array_filter( $placed['next_steps'], static function ( $step ) { return 'ready' === $step['type']; } ) );
	ok( in_array( $pythag, array_column( array_column( $ready, 'skill' ), 'id' ), true ), 'a prerequisite the placement found known makes its skill ready: ' . wp_json_encode( array_column( array_column( $ready, 'skill' ), 'id' ) ) );
	$wpdb->delete( AssessmentSchema::table( 'practice_sessions' ), array( 'id' => $placement_session ) );

	// ---- REST and permissions ----
	wp_set_current_user( $learner );
	$own = guidance_get( $learner, array( 'limit' => 2 ) );
	ok( 200 === $own->get_status() && 2 === count( $own->get_data()['next_steps'] ) && isset( $own->get_data()['areas'], $own->get_data()['readiness'], $own->get_data()['reviews'] ), 'a learner reads their own guidance: ' . wp_json_encode( $own->get_data() ) );
	wp_set_current_user( $other );
	ok( 403 === guidance_get( $learner )->get_status(), 'another learner cannot read it' );
	wp_set_current_user( 0 );
	ok( in_array( guidance_get( $learner )->get_status(), array( 401, 403 ), true ), 'guests cannot read it' );
	wp_set_current_user( $admin );
	ok( 200 === guidance_get( $learner )->get_status(), 'administrators read any learner' );
	ok( array( 'mechanics' ) === array_column( guidance_get( $learner, array( 'subject' => $other_subject ) )->get_data()['areas'], 'domain' ), 'the route narrows to a subject' );
	ok( isset( \OhMyLMS\MCP\Server::tools()['get_student_guidance'] ) && '/reports/skills/students/{student_id}/guidance' === \OhMyLMS\MCP\Server::tools()['get_student_guidance']['route'], 'the MCP server lists the guidance tool' );

	// ---- My skills ----
	if ( \OhMyLMS\Practice\Frontend::enabled() ) {
		wp_set_current_user( $learner );
		Guidance::flush();
		$html = \OhMyLMS\Practice\Frontend::skills();
		ok( false !== strpos( $html, 'Strength by area' ) && false !== strpos( $html, 'Readiness' ) && false !== strpos( $html, 'Suggested next steps' ) && false !== strpos( $html, 'Grade 9 ' . $tag ), 'My skills shows the guidance' );
		ok( false === strpos( $html, '<script' ), 'My skills guidance adds no inline script' );
		wp_set_current_user( $admin );
	}
	echo $checks . " guidance integration checks passed.\n";
} finally {
	wp_set_current_user( $admin );
	update_option( Comparison::OPTION, $before );
	if ( null === $rules_before ) { delete_option( Mastery::OPTION ); } else { update_option( Mastery::OPTION, $rules_before ); }
	foreach ( $users as $id ) { $wpdb->delete( AssessmentSchema::table( 'student_skill_state' ), array( 'student_id' => $id ) ); }
	foreach ( $terms as $id ) { $wpdb->delete( SkillMappings::table(), array( 'specific_term_id' => $id ) ); $wpdb->delete( SkillEdges::table(), array( 'skill_id' => $id ) ); $wpdb->delete( SkillEdges::table(), array( 'other_id' => $id ) ); }
	foreach ( $items as $id ) { $item = Items::get( $id ); if ( $item ) { $course = $item['course_id']; $root = $item['skill_root_id']; Items::delete( $id, 'delete', true ); if ( $course ) { wp_delete_post( $course, true ); } if ( $root ) { wp_delete_term( $root, Taxonomy::NAME ); } } }
	foreach ( $terms as $id ) { wp_delete_term( $id, Taxonomy::NAME ); }
	require_once ABSPATH . 'wp-admin/includes/user.php';
	foreach ( $users as $id ) { if ( $id && ! is_wp_error( $id ) ) { wp_delete_user( $id ); } }
}
