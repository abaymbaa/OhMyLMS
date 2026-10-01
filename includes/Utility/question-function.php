<?php

/**
 * Get quiz object
 *
 * @param int $quiz_id
 * @return bool|\OhMyLMS\Data\Quiz
 * @throws Exception
 * @since 1.0.0
 */
function ohmylms_get_question( $quiz_id ) {
	return ohmylms()->question_factory->get_question( $quiz_id );
}

/**
 *
 */
function ohmylms_get_question_layouts() {
	$layouts = array(
		array(
			'slug' => 'one-question-per-page',
			'name' => 'One question per page',
		),
	);
	return apply_filters( 'ohmylms_question_layout', $layouts );
}
