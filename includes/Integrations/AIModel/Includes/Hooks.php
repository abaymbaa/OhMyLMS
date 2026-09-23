<?php 

namespace OMLMS\Integrations\AIModel\Includes;


class Hooks {
    
    public function __construct() {
        add_filter( 'creatorlms_integrations', array($this, 'add_ai_model') );
    }


    /**
     * Add AI Model integration to the list of available integrations.
     * 
     * @param array $integrations List of existing integrations.
     * @return array Updated list of integrations with AI Model added.
     * @since 1.0.0
     */
    public function add_ai_model( $integrations ) {
        $integrations['ai_model'] = array(
            'label' => __('AI Suite', 'ohmylms'),
            'icon' => CREATORLMS_PRO_URL.'/includes/Integrations/AIModel/Assets/Images/ai-model-icon.svg',
            'description' => __('Enable AI-driven features and enhancements for a personalized learning experience.', 'ohmylms'),
            'categories'  => array('ai-model'),
            'hasSettings' => true,
            'class'       => 'OMLMS\Integrations\AIModel',
            'is_valid'    => \OMLMS\Utility\LicenseHelper::is_feature_enabled('ai_model'),
            'required_plan'    => \OMLMS\Utility\LicenseHelper::get_required_plan_for_feature('ai_model'),
        );
        return $integrations;
    }


    /**
     * Check if zoom is enable
     * 
     * @since 1.0.0
     */
    public function register_session_menu( $should_show ) {
        $integrations = get_option('creatorlms_integrations');
        $zoom_enabled = isset($integrations['zoom']['is_enable']) && $integrations['zoom']['is_enable'];
        $meet_enabled = isset($integrations['google_meet']['is_enable']) && $integrations['google_meet']['is_enable'];
        if ( $zoom_enabled || $meet_enabled ) {
            return true;
        }
        return $should_show;
    }

}