<?php
/**
 * Native Gutenberg quiz saves against a disposable WordPress installation.
 *
 * @package OhMyLMS
 */

$native_site = getenv( 'OHMYLMS_TEST_SITE_PATH' );
if ( 'cli' !== PHP_SAPI || ! $native_site || ! is_file( $native_site . '/wp-load.php' ) ) {
	throw new RuntimeException( 'Set OHMYLMS_TEST_SITE_PATH to the disposable WordPress test installation.' );
}
require $native_site . '/wp-load.php';
if ( ! defined( 'OHMYLMS_TEST_SITE' ) || ! OHMYLMS_TEST_SITE || 'ohmylms_block_browser_1dea' !== DB_NAME ) {
	throw new RuntimeException( 'This test requires the isolated block-browser database.' );
}

use OhMyLMS\Assessment\RevisionPublisher;
use OhMyLMS\Assessment\PreviewPlayer;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\Learning\NativeQuizEditor;

/**
 * Assert an integration result.
 *
 * @param bool   $condition Expected condition.
 * @param string $message Failure description.
 * @throws RuntimeException When a check fails.
 */
function native_quiz_check( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( esc_html( $message ) );
	}
	++$GLOBALS['native_quiz_checks'];
}

/**
 * Send an authenticated test request through the real REST route permission callbacks.
 *
 * @param string $method Request method.
 * @param string $route Route.
 * @param array  $data Request data.
 * @return WP_REST_Response REST response.
 */
function native_quiz_request( $method, $route, $data = array() ) {
	$request = new WP_REST_Request( $method, $route );
	if ( 'GET' === $method ) {
		$request->set_query_params( $data );
	} else {
		$request->set_body_params( $data );
	}
	return rest_do_request( $request );
}

/**
 * Serialize a public reference; answer data must never be copied into the post.
 *
 * @param int    $id Question ID.
 * @param string $type Block name.
 * @return string Question block.
 */
function native_quiz_block( $id, $type = NativeQuizEditor::QUESTION_BLOCK ) {
	return '<!-- wp:' . $type . ' ' . wp_json_encode(
		array(
			'questionId'        => $id,
			'authoringRevision' => 4,
			'answer'            => 'must be removed',
		)
	) . ' /-->';
}

$GLOBALS['native_quiz_checks'] = 0;
$native_posts                  = array();
$native_admin                  = get_users(
	array(
		'role'   => 'administrator',
		'number' => 1,
	)
)[0];
wp_set_current_user( $native_admin->ID );
/**
 * Count durable practice sessions, deliberately bypassing caches in this regression test.
 *
 * @return int Session count.
 */
function native_quiz_practice_count() {
	global $wpdb;
	// phpcs:ignore WordPress.DB.DirectDatabaseQuery -- This integration assertion must inspect persisted evidence rather than a cached count.
	return (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM %i', Schema::table( 'practice_sessions' ) ) );
}
$practice_before = native_quiz_practice_count();

try {
	$quiz_post_type = get_post_type_object( 'ohmylms-quiz' );
	native_quiz_check( $quiz_post_type->show_ui && $quiz_post_type->show_in_rest && use_block_editor_for_post_type( 'ohmylms-quiz' ), 'Gutenberg is not enabled for quizzes.' );
	$quiz_type = native_quiz_request( 'GET', '/wp/v2/types/ohmylms-quiz', array( 'context' => 'edit' ) );
	native_quiz_check( 200 === $quiz_type->get_status() && false === $quiz_type->get_data()['viewable'], 'Native quiz editor still offers the standalone preview page.' );
	$regular_post_type = native_quiz_request( 'GET', '/wp/v2/types/post', array( 'context' => 'edit' ) );
	native_quiz_check( true === $regular_post_type->get_data()['viewable'] && $quiz_post_type->publicly_queryable, 'Removing the quiz preview affected other editors or learner routes.' );
	$created = native_quiz_request(
		'POST',
		'/ohmylms/v1/quiz',
		array(
			'name'   => 'Native quiz integration fixture',
			'status' => 'draft',
		)
	);
	native_quiz_check( 201 === $created->get_status(), 'LMS quiz draft creation failed.' );
	$quiz_id = (int) $created->get_data()['id'];
	native_quiz_check( str_contains( PreviewPlayer::url( $quiz_id, 'gutenberg' ), 'quiz_editor=gutenberg' ), 'Native previews lost their editor origin.' );
	native_quiz_check( get_edit_post_link( $quiz_id, 'raw' ) === PreviewPlayer::editor_url( $quiz_id, 'gutenberg' ), 'Closing a native preview does not return to Gutenberg.' );
	native_quiz_check( str_contains( PreviewPlayer::editor_url( $quiz_id ), '#/quiz-edit/' . $quiz_id ), 'Original editor previews lost their return path.' );
	native_quiz_check( PreviewPlayer::editor_url( $quiz_id ) === PreviewPlayer::editor_url( $quiz_id, 'https://example.com' ), 'An arbitrary preview return destination was accepted.' );
	$native_posts[] = $quiz_id;
	native_quiz_check( str_contains( $created->get_data()['native_editor_url'] ?? '', 'post.php?post=' . $quiz_id ), 'The new draft did not expose its native editor URL.' );
	$question_ids = array();
	foreach ( array( 'single-choice', 'multiple-choice', 'true-false' ) as $index => $format ) {
		$question = native_quiz_request(
			'POST',
			'/ohmylms/v1/question',
			array(
				'quiz_id'     => 1 === $index ? 0 : $quiz_id,
				'name'        => 'Native question ' . $index,
				'description' => 'Choose [[ohmylms-math:latex:inline]]x^2[[/ohmylms-math]].',
				'settings'    => array(
					'type'  => $format,
					'score' => array(
						'enabled' => true,
						'value'   => 1,
					),
				),
				'questions'   => array(
					array(
						'answer'       => 'true-false' === $format ? 'True' : '[[ohmylms-math:latex:inline]]x^2[[/ohmylms-math]]',
						'is_correct'   => true,
						'order_number' => 1,
					),
					array(
						'answer'       => 'true-false' === $format ? 'False' : 'x',
						'is_correct'   => false,
						'order_number' => 2,
					),
				),
			)
		);
		native_quiz_check( 201 === $question->get_status(), 'Question fixture creation failed: ' . wp_json_encode( $question->get_data() ) );
		$question_ids[] = (int) $question->get_data()['id'];
		$native_posts[] = (int) $question->get_data()['id'];
	}
	$route = '/wp/v2/ohmylms-quizzes/' . $quiz_id;
	$read  = native_quiz_request( 'GET', $route, array( 'context' => 'edit' ) );
	native_quiz_check( 200 === $read->get_status(), 'The native document cannot be read by its author.' );
	$raw = $read->get_data()['content']['raw'];
	native_quiz_check( str_contains( $raw, NativeQuizEditor::QUESTION_BLOCK ) && str_contains( $raw, NativeQuizEditor::REFERENCE_BLOCK ), 'Opening an existing quiz did not preserve both supported and other question formats.' );
	$heading = '<!-- wp:heading --><h2 class="wp-block-heading">Core Gutenberg heading</h2><!-- /wp:heading -->';
	$content = $heading . native_quiz_block( $question_ids[1] ) . native_quiz_block( $question_ids[2], NativeQuizEditor::REFERENCE_BLOCK ) . native_quiz_block( $question_ids[0] );
	$saved   = native_quiz_request(
		'POST',
		$route,
		array(
			'content' => $content,
			'title'   => 'Saved native quiz',
		)
	);
	native_quiz_check( 200 === $saved->get_status(), 'Native save failed: ' . wp_json_encode( $saved->get_data() ) );
	native_quiz_check( array( $question_ids[1], $question_ids[2], $question_ids[0] ) === array_map( 'intval', array_column( ohmylms_get_quiz( $quiz_id )->get_questions(), 'id' ) ), 'Block order was not written to quiz placements.' );
	$stored = get_post_field( 'post_content', $quiz_id );
	native_quiz_check( str_contains( $stored, $heading ) && ! str_contains( $stored, 'must be removed' ), 'Core block content was lost or private answer attributes entered the quiz post.' );
	native_quiz_check( str_contains( $stored, '"delivery":"quiz"' ), 'Quiz question placements did not retain quiz delivery context.' );
	native_quiz_check( str_contains( $stored, '"authoringRevision":4' ), 'Native saves lost the private question edit marker.' );
	$rendered = do_blocks( $stored );
	native_quiz_check( str_contains( $rendered, 'Core Gutenberg heading' ) && ! str_contains( $rendered, 'ohmylms-inline-check' ), 'Rendering a quiz introduction started inline practice.' );
	$duplicate = native_quiz_request( 'POST', $route, array( 'content' => native_quiz_block( $question_ids[0] ) . native_quiz_block( $question_ids[0] ) ) );
	native_quiz_check( 400 === $duplicate->get_status() && get_post_field( 'post_content', $quiz_id ) === $stored, 'Duplicate question references changed the saved quiz.' );
	$empty = native_quiz_request( 'POST', $route, array( 'content' => native_quiz_block( 0 ) ) );
	native_quiz_check( 400 === $empty->get_status(), 'An unsaved question block was accepted.' );
	$published = native_quiz_request( 'POST', $route, array( 'status' => 'publish' ) );
	native_quiz_check( 200 === $published->get_status(), 'Native publishing failed: ' . wp_json_encode( $published->get_data() ) );
	$revision = RevisionPublisher::latest( $quiz_id );
	native_quiz_check( ! empty( $revision['slots'] ) && 3 === count( $revision['slots'] ), 'Publishing did not freeze the existing assessment slots.' );
	$removed = native_quiz_request( 'POST', $route, array( 'content' => $heading . native_quiz_block( $question_ids[1] ) ) );
	native_quiz_check( 200 === $removed->get_status() && 1 === count( ohmylms_get_quiz( $quiz_id )->get_questions() ), 'Removing native blocks did not update placements.' );
	native_quiz_check( 'ohmylms-question' === get_post_type( $question_ids[0] ) && 3 === count( RevisionPublisher::revision( (int) $revision['id'] )['slots'] ), 'Question removal damaged bank content or an older frozen revision.' );
	$core = native_quiz_request(
		'POST',
		'/wp/v2/ohmylms-quizzes',
		array(
			'title'   => 'Native core creation',
			'status'  => 'draft',
			'content' => native_quiz_block( $question_ids[0] ),
		)
	);
	native_quiz_check( 201 === $core->get_status(), 'Native core creation failed.' );
	$native_posts[] = (int) $core->get_data()['id'];
	native_quiz_check( 1 === count( ohmylms_get_quiz( $core->get_data()['id'] )->get_questions() ), 'Native core creation did not create its placement.' );
	$written_quiz_id = (int) $core->get_data()['id'];
	foreach ( array( 'short-text', 'long-text', 'reorder' ) as $written_type ) {
		$written_question = native_quiz_request(
			'POST',
			'/ohmylms/v1/question',
			array(
				'quiz_id'     => $written_quiz_id,
				'name'        => 'Native written response',
				'description' => 'Explain your answer.',
				'settings'    => array(
					'type'  => $written_type,
					'score' => array(
						'enabled' => true,
						'value'   => 2,
					),
				),
				'questions'   => 'reorder' === $written_type ? array(
					array(
						'answer'       => 'First',
						'is_correct'   => false,
						'order_number' => 1,
					),
					array(
						'answer'       => 'Second',
						'is_correct'   => false,
						'order_number' => 2,
					),
				) : array(
					array(
						'answer'       => '',
						'is_correct'   => false,
						'order_number' => 1,
					),
				),
			)
		);
		native_quiz_check( 201 === $written_question->get_status(), 'Written question creation failed: ' . wp_json_encode( $written_question->get_data() ) );
		$native_posts[] = (int) $written_question->get_data()['id'];
	}
	$written_document = NativeQuizEditor::editor_content( get_post( $written_quiz_id ) );
	native_quiz_check( 4 === substr_count( $written_document, 'wp:ohmylms/shared-multiple-choice' ), 'Written questions did not open in the shared native question card.' );
	$written_saved = native_quiz_request(
		'POST',
		'/wp/v2/ohmylms-quizzes/' . $written_quiz_id,
		array(
			'content' => $written_document,
			'status'  => 'publish',
		)
	);
	native_quiz_check( 200 === $written_saved->get_status(), 'Native written quiz save failed.' );
	$written_types = array_column( array_column( ohmylms_get_quiz( $written_quiz_id )->get_questions(), 'settings' ), 'type' );
	native_quiz_check( in_array( 'short-text', $written_types, true ) && in_array( 'long-text', $written_types, true ), 'Written response contracts changed during native saving.' );
	native_quiz_check( in_array( 'reorder', $written_types, true ), 'Native saving lost the reorder question contract.' );
	native_quiz_check( 4 === count( RevisionPublisher::latest( $written_quiz_id )['slots'] ), 'Publishing lost the written question snapshots.' );
	wp_set_current_user( 0 );
	$denied = native_quiz_request( 'GET', $route, array( 'context' => 'edit' ) );
	native_quiz_check( 401 === $denied->get_status(), 'Anonymous native reads were allowed.' );
	$denied = native_quiz_request( 'POST', $route, array( 'content' => '' ) );
	native_quiz_check( 401 === $denied->get_status(), 'Anonymous native writes were allowed.' );
	native_quiz_check( native_quiz_practice_count() === $practice_before, 'Authoring created duplicate practice tracking.' );
	echo (int) $GLOBALS['native_quiz_checks'] . " native quiz integration checks passed.\n";
} finally {
	wp_set_current_user( $native_admin->ID );
	foreach ( array_reverse( $native_posts ) as $native_post_id ) {
		wp_delete_post( $native_post_id, true );
	}
	wp_set_current_user( 0 );
}
