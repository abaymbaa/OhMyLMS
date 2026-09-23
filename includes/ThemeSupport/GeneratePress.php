<?php
namespace OMLMS\ThemeSupport;

defined( 'ABSPATH' ) || exit;

/**
 * Class GeneratePress
 *
 * Handles the theme support for GeneratePress theme.
 */
class GeneratePress {


	public function init() {
		add_filter( 'creator_lms_enqueue_styles', array( $this, 'enqueue_styles' ) );
	}

	public function enqueue_styles( $styles ) {
		$styles['omlms-general'] = array(
			'src'     => CREATOR_LMS_ASSETS_URL . ( '/theme-support/theme-generatepress.css' ),
			'deps'    => array(),
			'version' => CREATOR_LMS_VERSION,
			'media'   => 'all',
			'has_rtl' => true,
		);
		return is_array( $styles ) ? array_filter( $styles ) : array();
	}
}
