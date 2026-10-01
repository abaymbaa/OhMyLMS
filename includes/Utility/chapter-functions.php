<?php

/**
 * Get chapter object
 *
 * @param $chapter_id
 * @return bool|\OhMyLMS\Data\Chapter
 * @throws Exception
 * @since 1.0.0
 */
function ohmylms_get_chapter( $chapter_id ) {
	return ohmylms()->chapter_factory->get_chapter( $chapter_id );
}
