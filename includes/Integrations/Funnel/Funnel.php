<?php 

namespace OMLMS\Integrations\Funnel;

use OMLMS\Integrations\Funnel\Includes\Hooks;
use OMLMS\Integrations\Funnel\Includes\FunnelManager;
use OMLMS\Integrations\Funnel\Includes\FunnelEndpoint;

class Funnel {

    public $integration_name = 'Funnel';

    public function __construct() {
        $this->define_constants();
        $this->init_classes();
    }

    /**
     * Define constants related to Funnel integration.
     * 
     * @since 1.0.0
     */
    public function define_constants() {
        // Define any constants needed for the Funnel integration
    }

    /**
     * Initialize classes related to Funnel integration.
     * 
     * @since 1.0.0
     */
    public function init_classes() {
        new Hooks();
        new FunnelEndpoint();
    }
}
