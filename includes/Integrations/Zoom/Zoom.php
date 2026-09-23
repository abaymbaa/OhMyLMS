<?php 

namespace OMLMS\Integrations\Zoom;

if (!defined('ABSPATH')) exit;

use OMLMS\Integrations\Zoom\Includes\Hooks;
use OMLMS\Integrations\Zoom\Includes\SessionReminderScheduler;

class Zoom {

    public $integration_name = 'Zoom';

    const Version = '1.0.0';


    public function __construct() {
        $this->define_constants();
        $this->init_classes();
    }

    private function init_classes() {
        // Register REST API routes for Zoom settings
        // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedFunctionFound
        \add_action(
            'rest_api_init',
            array( \OMLMS\Integrations\Zoom\Includes\Rest\ZoomSettingsController::instance(), 'register_routes' )
        );

        // Register the recording.completed webhook receiver.
        \add_action(
            'rest_api_init',
            array( \OMLMS\Integrations\Zoom\Includes\Rest\ZoomWebhookController::instance(), 'register_routes' )
        );

        new Hooks();
        SessionReminderScheduler::init();
    }

    private function define_constants() {
        define( 'CREATORLMS_ZOOM_INTEGRATION_URL', plugins_url( '', CREATORLMS_PRO_FILE ) );
    }
}