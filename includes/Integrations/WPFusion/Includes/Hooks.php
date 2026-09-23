<?php
/**
 * Hooks Class for WP Fusion Integration
 * 
 * Registers the WP Fusion integration with CreatorLMS and manages
 * integration activation/deactivation events.
 * 
 * @package OMLMS\Integrations\WPFusion\Includes
 * @since 1.0.0
 */

namespace OMLMS\Integrations\WPFusion\Includes;

class Hooks {
    
    public function __construct() {
        add_filter( 'creatorlms_integrations', array($this, 'add_wpfusion') );
        add_filter( 'creatorlms_should_enable_wpfusion', array($this, 'should_enable_wpfusion') );
        add_action( 'update_option_creatorlms_integrations', array($this, 'on_integration_updated'), 10, 2 );
    }

    /**
     * Add WP Fusion integration to the list of available integrations.
     * 
     * @param array $integrations List of existing integrations.
     * @return array Updated list of integrations with WP Fusion added.
     * @since 1.0.0
     */
    public function add_wpfusion( $integrations ) {
       
        $integrations['wpfusion'] = array(
            'label' => __('WP Fusion', 'ohmylms'),
            'icon' => CREATORLMS_PRO_URL.'/includes/Integrations/WPFusion/Assets/Images/wp-fusion-icon.svg',
            'description' => __('Integrate WP Fusion to automatically manage tags, update contact fields, and sync student data with your CRM based on course activities.', 'ohmylms'),
            'categories' => array('crm'),
            'hasSettings' => false,
            'class' => 'OMLMS\Integrations\WPFusion',
            'dependency' => __('Requires WP Fusion Lite', 'ohmylms'),
            'is_valid'    => \OMLMS\Utility\LicenseHelper::is_feature_enabled('wpfusion'),
            'required_plan'    => \OMLMS\Utility\LicenseHelper::get_required_plan_for_feature('wpfusion'),
        );
        return $integrations;
    }

    /**
     * Check if WP Fusion integration is enabled
     * 
     * @param bool $should_enable Default value.
     * @return bool Whether WP Fusion should be enabled.
     * @since 1.0.0
     */
    public function should_enable_wpfusion( $should_enable ) {
        $integrations = get_option( 'creatorlms_integrations' );
        if ( empty( $integrations ) || ! is_array( $integrations ) ) {
            return false;
        }
  
        if ( ! isset( $integrations['wpfusion']['is_enable'] ) ) {
            return false;
        }
  
        return 1 === (int) $integrations['wpfusion']['is_enable'];
    }

    /**
     * Handle integration update - trigger table creation when WP Fusion is enabled
     * 
     * @param mixed $old_value Old integration settings
     * @param mixed $new_value New integration settings
     * @since 1.0.0
     */
    public function on_integration_updated( $old_value, $new_value ) {
        // Check if WP Fusion was just enabled
        $old_wpfusion_enabled = isset( $old_value['wpfusion']['is_enable'] ) && 1 === (int) $old_value['wpfusion']['is_enable'];
        $new_wpfusion_enabled = isset( $new_value['wpfusion']['is_enable'] ) && 1 === (int) $new_value['wpfusion']['is_enable'];

        // If WP Fusion just got enabled, trigger table creation
        if ( ! $old_wpfusion_enabled && $new_wpfusion_enabled ) {
            WPFusionMigration::maybe_omlms_integration_table();
        }
    }
}
