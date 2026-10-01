<?php 

namespace OhMyLMS\Integrations\Webhooks;
use \OhMyLMS\Integrations\Webhooks\Includes\Hooks;
use \OhMyLMS\Integrations\Webhooks\Includes\WebhooksMigration;

class Webhooks {

    public $integration_name = 'Webhooks';
    public $integration_key = 'webhooks';

    const Version = '1.0.0';

    public function __construct() {
        $this->define_constants();
        $this->init_classes();
    }

    /**
     * Define constants related to Webhooks integration.
     * 
     * @since 1.0.0
     */
    public function define_constants() {
        define( 'OHMYLMS_WEBHOOKS_VERSION', self::Version );
    }

    /**
     * Initialize classes related to Webhooks integration.
     * 
     * @since 1.0.0
     */
    public function init_classes() {
        new Hooks();
        
        // Initialize webhook migration system
        WebhooksMigration::init();
    }

    /**
     * Check if Webhooks integration is enabled
     * 
     * @return bool
     * @since 1.0.0
     */
    public function is_enabled() {
        $integrations = get_option( 'ohmylms_integrations', array() );
        return isset( $integrations[ $this->integration_key ]['is_enable'] ) && 
               $integrations[ $this->integration_key ]['is_enable'] == 1;
    }
}
