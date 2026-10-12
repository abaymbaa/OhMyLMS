<?php
/** Shared skills, multiple sources, reusable content, roadmaps and MCP. Isolated site only. */
if ( PHP_SAPI !== 'cli' ) { exit; }
$config = json_decode( file_get_contents( getenv( 'OHMYLMS_TEST_CREDENTIALS' ) ), true );
$_SERVER['HTTP_HOST'] = '127.0.0.1:8100';
require $config['site'] . '/wp-load.php';
if ( ! defined( 'OHMYLMS_TEST_SITE' ) || ! in_array( DB_NAME, array( 'ohmylms_source_test', 'ohmylms_streak_test' ), true ) ) { throw new RuntimeException( 'Requires an isolated database.' ); }

use OhMyLMS\Curriculum\Comparison;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Roadmaps;
use OhMyLMS\Curriculum\SharedContent;
use OhMyLMS\Curriculum\SkillMappings;
use OhMyLMS\Curriculum\SubjectProgress;
use OhMyLMS\Curriculum\Syllabus;
use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\MCP\Abilities;
use OhMyLMS\MCP\Server;

$checks = 0; $items = array(); $terms = array(); $posts = array(); $student = 0;
$before = get_option( Comparison::OPTION, array() );
$integrations = get_option( 'ohmylms_integrations', array() );
$admin = get_user_by( 'login', $config['username'] )->ID;
$tag = wp_generate_password( 6, false, false );
function ok( $value, $message ) { global $checks; if ( ! $value ) { throw new RuntimeException( $message ); } ++$checks; }
function call_api( $method, $path, array $data = array() ) {
    $request = new WP_REST_Request( $method, '/ohmylms/v1/syllabus-comparison/' . $path );
    if ( 'GET' === $method ) { $request->set_query_params( $data ); }
    else { $request->set_header( 'Content-Type', 'application/json' ); $request->set_body( wp_json_encode( $data ) ); }
    return rest_do_request( $request );
}
try {
    wp_set_current_user( $admin );
    OhMyLMS\Curriculum\Schema::install(); OhMyLMS\Assessment\Schema::install(); OhMyLMS\Learning\Schema::install();
    $shared = call_api( 'POST', 'shared-skills/save', array( 'name' => 'Solve linear equations ' . $tag, 'subject' => 'Mathematics', 'topic' => 'Algebra', 'description' => 'Solve a single variable linear equation with rational coefficients.' ) );
    ok( 200 === $shared->get_status(), 'shared creation: ' . wp_json_encode( $shared->get_data() ) );
    $shared = $shared->get_data(); $terms[] = $shared['id'];
    $science = Comparison::save_shared( 0, array( 'name' => 'Interpret evidence ' . $tag, 'subject' => 'Science', 'topic' => 'Reasoning' ) ); $terms[] = $science['id'];
    ok( count( Comparison::shared_skills( array( 'subject' => 'Science', 'search' => $tag ) )['items'] ) === 1, 'subject filter is optional and generic' );
    ok( count( Comparison::shared_skills( array( 'search' => $tag ) )['items'] ) === 2, 'one reusable library can cross subject groupings' );
    $objectives = array();
    foreach ( array( 'Cambridge', 'Mongolia', 'Standardized exam' ) as $label ) {
        $item = Items::create( array( 'name' => $label . ' ' . $tag, 'is_syllabus' => true, 'version' => '2028–2030' ) ); $id = (int) $item['id']; $items[] = $id;
        $group = Syllabus::add_group( $id, array( 'name' => 'Algebra' ) );
        $term = Syllabus::create_skill( $id, $group, array( 'name' => $label . ' equation ' . $tag, 'code' => 'L1', 'description' => 'Distinct source scope.' ) );
        ok( ! is_wp_error( $term ), 'source objective creation' ); $terms[] = $term['term_id']; $objectives[] = $term['term_id'];
        for ( $i = 0; $i < 31; ++$i ) { $extra = Syllabus::create_skill( $id, $group, array( 'name' => $label . ' extra ' . $tag . ' ' . $i, 'code' => 'X' . $i ) ); $terms[] = $extra['term_id']; }
    }
    $page = call_api( 'GET', 'objectives/' . $items[0], array() )->get_data();
    ok( 32 === $page['total'] && 30 === count( $page['items'] ), 'bounded source page' );
    ok( 2 === count( call_api( 'GET', 'objectives/' . $items[0], array( 'page' => 2 ) )->get_data()['items'] ), 'second source page' );
    ok( $page['items'][0]['term_id'] === $objectives[0], 'source order and identity retained' );
    ok( 1 === call_api( 'GET', 'objectives/' . $items[0], array( 'search' => 'L1' ) )->get_data()['total'], 'search by code' );
    $mapping = array( 'specific_id' => $objectives[0], 'shared_id' => $shared['id'], 'relation' => 'equivalent', 'note' => 'Reviewed', 'expected_revision' => '' );
    ok( 200 === call_api( 'PUT', 'mapping', $mapping )->get_status(), 'explicit mapping save' );
    ok( 409 === call_api( 'PUT', 'mapping', $mapping )->get_status(), 'concurrent new-pair collision rejected' );
    $mapping['specific_id'] = $objectives[1]; ok( 200 === call_api( 'PUT', 'mapping', $mapping )->get_status(), 'second syllabus maps to same shared identity' );
    $mapping['specific_id'] = $objectives[2]; $mapping['relation'] = 'related'; ok( 200 === call_api( 'PUT', 'mapping', $mapping )->get_status(), 'third syllabus related scope' );
    ok( 3 === count( Comparison::shared_skill( $shared['id'] )['mappings']['mapped_from'] ), 'all affected objectives visible' );
    ok( 409 === call_api( 'PUT', 'mapping', array( 'specific_id' => $shared['id'], 'shared_id' => $science['id'], 'relation' => 'equivalent', 'expected_revision' => '' ) )->get_status(), 'mapping chains rejected' );
    ok( 400 === call_api( 'PUT', 'mapping', array( 'specific_id' => $shared['id'], 'shared_id' => $shared['id'], 'relation' => 'equivalent', 'expected_revision' => '' ) )->get_status(), 'self mapping rejected' );
    $current = Comparison::shared_skill( $shared['id'] );
    $renamed = Comparison::save_shared( $shared['id'], array( 'name' => 'Renamed equation ' . $tag, 'subject' => 'General', 'topic' => 'Equations', 'expected_revision' => $current['revision'] ) );
    ok( $renamed['id'] === $shared['id'] && $renamed['uuid'] === $shared['uuid'], 'rename and grouping preserve stable identity' );
    ok( is_wp_error( Comparison::save_shared( $shared['id'], array( 'name' => 'Stale', 'expected_revision' => $current['revision'] ) ) ), 'stale skill edits rejected' );
    foreach ( array( OHMYLMS_LESSON_CPT, OHMYLMS_QUIZ_CPT, OHMYLMS_ASSIGNMENT_CPT ) as $type ) {
        $post = wp_insert_post( array( 'post_type' => $type, 'post_title' => 'Shared resource ' . $tag, 'post_status' => 'publish' ) ); $posts[] = $post;
        ok( ! is_wp_error( SharedContent::link( $shared['id'], $post, true ) ), 'connect ' . $type );
        ok( has_term( $shared['id'], Taxonomy::NAME, $post ), 'resource references shared identity' );
    }
    ok( 1 === count( SharedContent::listing( $shared['id'], array( 'kind' => 'quiz' ) )['items'] ), 'quizzes reusable through shared skill' );
    ok( 1 === count( SharedContent::owners( $objectives[0] ) ) && ! SharedContent::owners( $objectives[2] ), 'equivalent content inheritance excludes reference-only links' );
    $roadmap = call_api( 'POST', 'roadmaps', array( 'name' => 'General roadmap ' . $tag, 'subject' => 'Level 10', 'grade' => '10', 'skill_ids' => array( $science['id'], $shared['id'] ) ) );
    ok( 200 === $roadmap->get_status(), 'roadmap creation: ' . wp_json_encode( $roadmap->get_data() ) ); $roadmap = $roadmap->get_data(); $items[] = $roadmap['syllabus']['id'];
    ok( array_column( $roadmap['contents'][0]['groups'][0]['skills'], 'term_id' ) === array( $science['id'], $shared['id'] ), 'cross-subject roadmap preserves ordered references' );
    ok( 'draft' === get_post_status( $roadmap['syllabus']['course_id'] ), 'new roadmap stays draft' );
    $roadmap_item = Items::get( $roadmap['syllabus']['id'] );
    ok( 0 === (int) $roadmap_item['parent_id'] && 0 === (int) $roadmap_item['position'], 'shared roadmap is saved first at the curriculum root' );
    ok( $roadmap['syllabus']['id'] === Items::child_ids( 0 )[0], 'shared roadmap precedes existing top-level curriculums' );
    ok( 200 === call_api( 'PUT', 'configuration', array( 'subject' => 'General study plan', 'syllabus_ids' => $items ) )->get_status(), 'multiple syllabus plan configured' );
    ok( 4 === count( get_option( Comparison::OPTION )['General study plan'] ), 'configuration is not limited to two sources' );
    $empty = SubjectProgress::progress( $admin, 'General study plan' ); ok( ! $empty['syllabuses'], 'draft syllabuses hidden from learner profiles' );
    wp_update_post( array( 'ID' => $roadmap['syllabus']['course_id'], 'post_status' => 'publish' ) );
    $progress = SubjectProgress::progress( $admin, 'General study plan' );
    ok( 1 === count( $progress['syllabuses'] ) && 2 === count( $progress['shared'] ), 'published roadmap shows shared skills across library groupings' );
    ok( 2 === count( $progress['syllabuses'][0]['audit']['unassessed'] ) && ! $progress['syllabuses'][0]['audit']['unmapped'], 'unassessed roadmap abilities are not mapping failures' );
    $definitions = Server::tools(); ok( ! $definitions['save_shared_skill']['readonly'] && $definitions['list_shared_skills']['readonly'], 'MCP annotations distinguish writes from reads' );
    $execute = new ReflectionMethod( Abilities::class, 'execute' ); $execute->setAccessible( true );
    $mcp = $execute->invoke( null, 'list_shared_skills', $definitions['list_shared_skills'], array( 'search' => $tag ) ); ok( 2 === count( $mcp['data']['items'] ), 'MCP GET uses subject-agnostic service' );
    $mcp = $execute->invoke( null, 'connect_shared_skill_content', $definitions['connect_shared_skill_content'], array( 'id' => $shared['id'], 'content_id' => $posts[0], 'linked' => false ) ); ok( ! is_wp_error( $mcp ) && ! has_term( $shared['id'], Taxonomy::NAME, $posts[0] ), 'MCP write body dispatches to normal content service' );
    $student = wp_insert_user( array( 'user_login' => 'shared-test-' . $tag, 'user_pass' => wp_generate_password(), 'role' => 'subscriber' ) );
    wp_set_current_user( $student );
    ok( 403 === call_api( 'GET', 'syllabuses' )->get_status(), 'non-admin comparison reads denied' );
    ok( 403 === call_api( 'GET', 'audit/' . $admin )->get_status(), 'student cannot audit another account' );
    ok( 403 === call_api( 'PUT', 'mapping', $mapping )->get_status(), 'student mapping writes denied' );
    ok( 200 === call_api( 'GET', 'audit', array( 'student_id' => $admin ) )->get_status(), 'own-account audit remains available without accepting another identity' );
    wp_set_current_user( 0 );
    ok( 401 === call_api( 'GET', 'syllabuses' )->get_status(), 'anonymous source reads denied' );
    ok( 401 === call_api( 'PUT', 'mapping', $mapping )->get_status(), 'anonymous writes denied' );
    ok( is_wp_error( $execute->invoke( null, 'list_shared_skills', $definitions['list_shared_skills'], array() ) ), 'MCP internal REST dispatch retains permissions' );
    wp_set_current_user( $admin );
    $row = call_api( 'GET', 'objectives/' . $items[0], array( 'search' => 'L1' ) )->get_data()['items'][0]; $old = $row['maps_to'][0];
    ok( 409 === call_api( 'POST', 'mapping/remove', array( 'specific_id' => $objectives[0], 'shared_id' => $shared['id'], 'expected_revision' => 'wrong' ) )->get_status(), 'stale remove rejected' );
    ok( 200 === call_api( 'POST', 'mapping/remove', array( 'specific_id' => $objectives[0], 'shared_id' => $shared['id'], 'expected_revision' => $old['revision'] ) )->get_status(), 'current remove succeeds' );
    echo "Shared skills integration: $checks checks passed.\n";
} finally {
    wp_set_current_user( $admin ); update_option( Comparison::OPTION, $before ); update_option( 'ohmylms_integrations', $integrations );
    foreach ( $items as $id ) { $item = Items::get( $id ); if ( $item ) { $course = $item['course_id']; $root = $item['skill_root_id']; Items::delete( $id, 'delete', true ); if ( $course ) { wp_delete_post( $course, true ); } if ( $root ) { wp_delete_term( $root, Taxonomy::NAME ); } } }
    foreach ( $terms as $id ) { wp_delete_term( $id, Taxonomy::NAME ); }
    foreach ( $posts as $id ) { wp_delete_post( $id, true ); }
    if ( $student && ! is_wp_error( $student ) ) { require_once ABSPATH . 'wp-admin/includes/user.php'; wp_delete_user( $student ); }
}
