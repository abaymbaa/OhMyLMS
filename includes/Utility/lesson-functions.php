<?php

/**
 * Get lesson object
 *
 * @param $lesson_id
 * @return bool|\OhMyLMS\Data\Lesson
 * @throws Exception
 * @since 1.0.0
 */
function ohmylms_get_lesson( $lesson_id ) {
	return ohmylms()->lesson_factory->get_lesson( $lesson_id );
}
