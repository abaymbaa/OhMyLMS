<?php

/**
 * Get lesson object
 *
 * @param $lesson_id
 * @return bool|\OMLMS\Data\Lesson
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_lesson( $lesson_id ) {
	return OMLMS()->lesson_factory->get_lesson( $lesson_id );
}
