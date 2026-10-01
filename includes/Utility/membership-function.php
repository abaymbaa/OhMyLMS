<?php

/**
 * Get membership object
 *
 * @param $membership_id
 * @return bool|\OhMyLMS\Data\Membership
 * @throws Exception
 * @since 1.0.0
 */
function ohmylms_get_membership( $membership_id ) {
	return ohmylms()->membership_factory->get_membership( $membership_id );
}
