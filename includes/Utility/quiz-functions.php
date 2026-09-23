<?php

/**
 * Get quiz object
 *
 * @param int $quiz_id
 * @return bool|\OMLMS\Data\Quiz
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_quiz( $quiz_id ) {
	return OMLMS()->quiz_factory->get_quiz( $quiz_id );
}