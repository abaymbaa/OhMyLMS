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
function omlms_add_notice( $message, $notice_type = 'success', $data = array() ) {
	if ( ! did_action( 'creator_lms_init' ) ) {
		return;
	}

	$notices = \CodeRex\Ecommerce\ecommerce()->session->get( 'cr_notices', array() );
	if ( ! empty( $message ) ) {
		$notices[ $notice_type ][] = array(
			'notice' => $message,
			'data'   => $data,
		);
	}

	\CodeRex\Ecommerce\ecommerce()->session->set( 'cr_notices', $notices );
}


function omlms_notice_count() {
}
