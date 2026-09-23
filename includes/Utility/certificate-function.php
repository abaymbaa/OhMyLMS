<?php

/**
 * Get certificate object
 *
 * @param $certificate_id
 * @return bool|\OMLMS\Data\Certificate
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_certificate( $certificate_id ) {
	return OMLMS()->certificate_factory->get_certificate( $certificate_id );
}
