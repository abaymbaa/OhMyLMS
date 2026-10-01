<?php

/**
 * Get certificate object
 *
 * @param $certificate_id
 * @return bool|\OhMyLMS\Data\Certificate
 * @throws Exception
 * @since 1.0.0
 */
function ohmylms_get_certificate( $certificate_id ) {
	return ohmylms()->certificate_factory->get_certificate( $certificate_id );
}
