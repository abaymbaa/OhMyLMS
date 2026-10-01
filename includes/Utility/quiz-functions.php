<?php

/**
 * Get quiz object
 *
 * @param int $quiz_id
 * @return bool|\OhMyLMS\Data\Quiz
 * @throws Exception
 * @since 1.0.0
 */
function ohmylms_get_quiz( $quiz_id ) {
	return ohmylms()->quiz_factory->get_quiz( $quiz_id );
}