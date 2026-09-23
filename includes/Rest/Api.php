<?php

namespace OMLMS\Rest;

use OMLMS\Admin\Settings\AdminSettings;
use OMLMS\Admin\Settings\RegisterSettings;

/**
 * API Manager class.
 *
 * All API classes would be registered here.
 *
 * @since 1.0.0
 */
class Api {

	/**
	 * Class dir and class name mapping.
	 *
	 * @var array
	 *
	 * @since 1.0.0
	 */
	protected $class_map;

	/**
	 * Constructor.
	 */
	public function __construct() {
		if ( ! class_exists( 'WP_REST_Server' ) ) {
			return;
		}

		$controllers_v1  = array(
			\OMLMS\Rest\V1\PluginController::class,
			\OMLMS\Rest\V1\CourseController::class,
			\OMLMS\Rest\V1\SetupWizardController::class,
			\OMLMS\Rest\V1\StudentController::class,
			\OMLMS\Rest\V1\UserController::class,
			\OMLMS\Rest\V1\ChapterController::class,
			\OMLMS\Rest\V1\LessonController::class,
			\OMLMS\Rest\V1\QuizController::class,
			\OMLMS\Rest\V1\QuestionController::class,
			\OMLMS\Rest\V1\SettingsController::class,
			\OMLMS\Rest\V1\CategoryController::class,
			\OMLMS\Rest\V1\TagController::class,
			\OMLMS\Rest\V1\EmailController::class,
			\OMLMS\Rest\V1\DashboardController::class,
			\OMLMS\Rest\V1\AnalyticsController::class,
			\OMLMS\Rest\V1\CertificateController::class,
			\OMLMS\Rest\V1\MigrationController::class,
			\OMLMS\Rest\V1\NotificationController::class,
			\OMLMS\Rest\V1\IntegrationsController::class,
			\OMLMS\Rest\V1\AppController::class,
			\OMLMS\Rest\V1\WebhookController::class,
		);
		$controllers_v1  = apply_filters( 'creator_lms_rest_v1_controllers', $controllers_v1 );
		$controllers_v2  = array();
		$this->class_map = array_merge( $controllers_v1, $controllers_v2 );

		// Init REST API routes.
		add_action( 'rest_api_init', array( $this, 'register_rest_routes' ), 10 );
		add_action( 'rest_api_init', array( $this, 'register_admin_settings' ), 10 );
	}

	/**
	 * Register REST API routes.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function register_rest_routes(): void {
		foreach ( $this->class_map as $controller_class ) {
			$controller_instance = new $controller_class();
			$controller_instance->register_routes();
		}
	}

	/**
	 * Register admin settings.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function register_admin_settings() {
		$settings = AdminSettings::get_settings_objects();

		foreach ( $settings as $setting ) {
			new RegisterSettings( $setting );
		}
	}
}
