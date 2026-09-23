<?php

/**
 * CreatorLMS Attempt Functions
 * 
 * This file contains functions to handle attempts in CreatorLMS.
 * 
 * @param int $attempt_id The ID of the attempt to retrieve.
 * @return \OMLMS\Data\Attempt|bool Returns the Attempt object if found, or false if not.
 * @since 1.0.0
 */
function creatorlms_get_attempt( $attempt_id ) {
	return OMLMS()->attempt_factory->get_attempt( $attempt_id );
}