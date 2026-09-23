<?php 

namespace OMLMS\Integrations\Gamification;
use \OMLMS\Integrations\Gamification\Includes\Hooks;

class Gamification {

    public $integration_name = 'Gamification';

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
    }
}