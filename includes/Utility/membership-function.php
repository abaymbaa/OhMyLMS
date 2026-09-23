<?php

/**
 * Get membership object
 *
 * @param $membership_id
 * @return bool|\OMLMS\Data\Membership
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_membership( $membership_id ) {
	return OMLMS_PRO()->membership_factory->get_membership( $membership_id );
}
