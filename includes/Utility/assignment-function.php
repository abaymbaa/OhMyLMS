<?php

/**
 * Get chapter object
 *
 * @param $assignment_id
 * @return bool|\OMLMS\Data\Chapter
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_assignment( $assignment_id ) {
	return OMLMS_PRO()->assignment_factory->get_assignment( $assignment_id );
}
