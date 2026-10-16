<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the established Composer class/file mapping; see docs/CODING-STANDARDS.md.

namespace OhMyLMS\Integrations\ContentProtection;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use OhMyLMS\Integrations\ContentProtection\Includes\Hooks;

class ContentProtection {

	public $integration_name = 'Content Protection';

	public function __construct() {
		$this->define_constants();
		$this->init_classes();
	}

	/**
	 * Define constants related to Content Protection integration.
	 *
	 * @since 1.0.0
	 */
	public function define_constants() {
	}

	/**
	 * Initialize classes related to Content Protection integration.
	 *
	 * @since 1.0.0
	 */
	public function init_classes() {
		new Hooks();
	}
}
