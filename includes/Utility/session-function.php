<?php

/**
 * Get chapter object
 *
 * @param $assignment_id
 * @return bool|\OMLMS\Data\Chapter
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_session( $session_id ) {
	return OMLMS_PRO()->session_factory->get_session( $session_id );
}
