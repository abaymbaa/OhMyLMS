<?php

/**
 * Get quiz object
 *
 * @param int $quiz_id
 * @return bool|\OMLMS\Data\Quiz
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_question( $quiz_id ) {
	return OMLMS()->question_factory->get_question( $quiz_id );
}

/**
 *
 */
function omlms_get_question_layouts() {
	$layouts = array(
		array(
			'slug' => 'one-question-per-page',
			'name' => 'One question per page',
		),
	);
	return apply_filters( 'creator_lms_question_layout', $layouts );
}
