<?php
/**
 * Google Sign-In addon bootstrap.
 *
 * @package OMLMS\Integrations\GoogleSignIn
 * @since 1.0.0
 */

namespace OMLMS\Integrations\GoogleSignIn;

use OMLMS\Rest\V1\AuthController;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class GoogleSignIn
 */
class GoogleSignIn {

	/**
	 * Constructor.
	 */
	public function __construct() {
		new Hooks();

		\add_action( 'rest_api_init', array( new AuthController(), 'register_routes' ) );
	}
}
