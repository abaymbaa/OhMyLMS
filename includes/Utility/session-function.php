<?php

/**
 * Get chapter object
 *
 * @param $assignment_id
 * @return bool|\OhMyLMS\Data\Chapter
 * @throws Exception
 * @since 1.0.0
 */
function ohmylms_get_session( $session_id ) {
	return ohmylms()->session_factory->get_session( $session_id );
}
