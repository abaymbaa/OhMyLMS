<?php

/**
 * Get chapter object
 *
 * @param $assignment_id
 * @return bool|\OhMyLMS\Data\Chapter
 * @throws Exception
 * @since 1.0.0
 */
function ohmylms_get_assignment( $assignment_id ) {
	return ohmylms()->assignment_factory->get_assignment( $assignment_id );
}
