<?php

/**
 * Get chapter object
 *
 * @param $chapter_id
 * @return bool|\OMLMS\Data\Chapter
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_chapter( $chapter_id ) {
	return OMLMS()->chapter_factory->get_chapter( $chapter_id );
}
