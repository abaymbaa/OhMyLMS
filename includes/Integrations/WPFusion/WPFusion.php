<?php
/**
 * WP Fusion Integration
 * 
 * Integrates CreatorLMS with WP Fusion to enable automated tag management,
 * contact field updates, and more based on CreatorLMS events.
 * 
 * @package OMLMS\Integrations\WPFusion
 * @since 1.0.0
 */

namespace OMLMS\Integrations\WPFusion;

if (!defined('ABSPATH')) exit;

use OMLMS\Integrations\WPFusion\Includes\Hooks;
use OMLMS\Integrations\WPFusion\Includes\WPFusionMigration;
use OMLMS\Integrations\WPFusion\Includes\TriggerHandler;

class WPFusion {

    public $integration_name = 'WP Fusion';
    public $integration_key = 'wpfusion';

    const Version = '1.0.0';

    public function __construct() {
        $this->define_constants();
        $this->init_classes();
    }

    /**
     * Define constants related to WP Fusion integration.
     * 
     * @since 1.0.0
     */
    public function define_constants() {
        define( 'CREATORLMS_WPFUSION_VERSION', self::Version );
        define( 'CREATORLMS_WPFUSION_DIR', dirname(__FILE__) );
        define( 'CREATORLMS_WPFUSION_URL', plugins_url( '', __FILE__ ) );
    }

    /**
     * Initialize classes related to WP Fusion integration.
     * 
     * @since 1.0.0
     */
    public function init_classes() {
        // Register REST API routes
        add_action(
            'rest_api_init',
            array( \OMLMS\Integrations\WPFusion\Includes\Rest\WPFusionAuthController::instance(), 'register_routes' )
        );
        
        add_action(
            'rest_api_init',
            array( \OMLMS\Integrations\WPFusion\Includes\Rest\WPFusionTriggersController::instance(), 'register_routes' )
        );

        // Initialize hooks and migration
        new Hooks();
        WPFusionMigration::init();
        
        // Initialize trigger handler if integration is enabled
        if ( $this->is_enabled() ) {
            new TriggerHandler();
        }
    }

    /**
     * Check if WP Fusion integration is enabled
     * 
     * @return bool
     * @since 1.0.0
     */
    public function is_enabled() {
        $integrations = get_option( 'creatorlms_integrations', array() );
        return isset( $integrations[ $this->integration_key ]['is_enable'] ) && 
               $integrations[ $this->integration_key ]['is_enable'] == 1;
    }
}
