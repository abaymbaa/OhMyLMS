<?php

/**
 * Gateway Autoloader for OhMyLMS
 *
 * Automatically loads gateway files based on folder names.
 * For example, if a folder is named "Mollie", it will try to load "mollie.php"
 *
 * @package    CreatorLmsPro
 * @subpackage CreatorLmsPro/includes
 * @since      1.0.0
 */

 namespace OMLMS\Gateways;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class GatewayAutoloader {

    /**
     * Base directory for the plugin
     *
     * @var string
     */
    private $base_dir;

    /**
     * Constructor
     *
     * @param string $base_dir The base directory for the plugin
     */
    public function __construct( $base_dir = null ) {
        $this->base_dir = $base_dir ?: dirname( CREATORLMS_PRO_FILE );
    }

    /**
     * Load gateway files based on folder names
     * 
     * This method scans the Gateways directory and loads files that match the folder name
     * For example, if there's a folder named "Mollie", it will try to load "mollie.php"
     */
    public function load_gateways() {
        $gateways_path = $this->base_dir . '/includes/Gateways/';
        if ( ! is_dir( $gateways_path ) ) {
            return;
        }

        // Temporarily exclude these gateways
        $excluded_gateways = array( 'Mollie' );

        $folders = glob( $gateways_path . '/*', GLOB_ONLYDIR );
        foreach ( $folders as $folder ) {
            $folder_name = basename( $folder );
            
            // Skip excluded gateways
            if ( in_array( $folder_name, $excluded_gateways ) ) {
                continue;
            }
            
            $file_name = strtolower( $folder_name ) . '.php';
            $file_path = $folder . '/' . $file_name;
            if ( file_exists( $file_path ) ) {
                require_once $file_path;
            }
        }
    }
} 