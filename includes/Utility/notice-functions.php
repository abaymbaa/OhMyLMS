<?php


/**
 * Add and store a notice
 *
 * @param string $message
 * @param string $type
 * @return void
 *
 * @since 1.0.0
 */
function ohmylms_add_notice( $message, $notice_type = 'success', $data = array() ) {
	if ( ! did_action( 'ohmylms_init' ) ) {
		return;
	}

	$notices = \CodeRex\Ecommerce\ecommerce()->session->get( 'ohmylms_notices', array() );
	if ( ! empty( $message ) ) {
		$notices[ $notice_type ][] = array(
			'notice' => $message,
			'data'   => $data,
		);
	}

	\CodeRex\Ecommerce\ecommerce()->session->set( 'ohmylms_notices', $notices );
}


function ohmylms_notice_count() {
}
