<?php

namespace OMLMS\ThemeSupport;

defined( 'ABSPATH' ) || exit;

/**
 * Class Twenty Twenty Five
 *
 * Handles the theme support for Twenty Twenty Five theme.
 */
class TwentyTwentyFive {

	public function init() {
		add_filter( 'creator_lms_enqueue_styles', array( $this, 'enqueue_styles' ) );
	}

	public function enqueue_styles( $styles ) {
		$styles['omlms-general'] = array(
			'src'     => CREATOR_LMS_ASSETS_URL . ( '/theme-support/theme-twenty-twenty-five.css' ),
			'deps'    => array(),
			'version' => CREATOR_LMS_VERSION,
			'media'   => 'all',
			'has_rtl' => true,
		);
		return is_array( $styles ) ? array_filter( $styles ) : array();
	}
}
