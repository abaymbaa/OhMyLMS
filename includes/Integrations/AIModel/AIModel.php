<?php 

namespace OMLMS\Integrations\AIModel;

if (!defined('ABSPATH')) exit;

use \OMLMS\Integrations\AIModel\Includes\Hooks;

class AIModel {

    public $integration_name = 'AI Model';

    public function __construct() {
        $this->define_constants();
        $this->init_classes();
    }

    /**
     * Define constants related to AI Model integration.
     * 
     * @since 1.0.0
     */
    public function define_constants() {

    }

    /**
     * Initialize classes related to AI Model integration.
     * 
     * @since 1.0.0
     */
    public function init_classes() {
        \add_action(
            'rest_api_init',
            array( \OMLMS\Integrations\AIModel\Includes\Rest\AISettingsController::instance(), 'register_routes' )
        );
        \add_action(
            'rest_api_init',
            array( \OMLMS\Integrations\AIModel\Includes\Rest\ClaudeRequestController::instance(), 'register_routes' )
        );
        new Hooks();
    }
}