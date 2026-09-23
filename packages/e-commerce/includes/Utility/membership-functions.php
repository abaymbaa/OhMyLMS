<?php

/**
 * Get membership object
 * 
 * @param int|bool $membership_id Membership ID or false to get current post's membership
 * @return bool|OMLMS\Membership
 * @throws \Exception
 * @since 1.0.0
 */
function ecommerce_get_membership( $membership_id ) {
	return OMLMS()->membership_factory->get_membership( $membership_id );
}