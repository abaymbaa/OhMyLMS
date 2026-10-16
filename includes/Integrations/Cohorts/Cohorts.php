<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the established Composer class/file mapping; see docs/CODING-STANDARDS.md.

namespace OhMyLMS\Integrations\Cohorts;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use OhMyLMS\Integrations\Cohorts\Includes\CohortReminderScheduler;
use OhMyLMS\Integrations\Cohorts\Includes\Hooks;

class Cohorts {

	public $integration_name = 'Cohorts';

	public function __construct() {
		$this->define_constants();
		$this->init_classes();
	}

	/**
	 * Define constants related to Cohorts integration.
	 *
	 * @since 1.0.0
	 */
	public function define_constants() {
	}

	/**
	 * Initialize classes related to Cohorts integration.
	 *
	 * @since 1.0.0
	 */
	public function init_classes() {
		new Hooks();
		CohortReminderScheduler::init();
	}
}
