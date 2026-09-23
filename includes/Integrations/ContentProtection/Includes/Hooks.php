<?php 

namespace OMLMS\Integrations\ContentProtection\Includes;

class Hooks {
    
    public function __construct() {
        add_filter( 'creatorlms_integrations', array($this, 'add_content_protection') );
    }


    /**
     * Add Content Protection integration to the list of available integrations.
     * 
     * @param array $integrations List of existing integrations.
     * @return array Updated list of integrations with Content Protection added.
     * @since 1.0.0
     */
    public function add_content_protection( $integrations ) {
        $integrations['content_protection'] = array(
            'label' => __('Content Protection', 'ohmylms'),
            'icon' => CREATORLMS_PRO_URL.'/includes/Integrations/ContentProtection/Assets/Images/content-protection-icon.svg',
            'description' => __('Protect your content by disabling copying, inspecting, and screen recording features.', 'ohmylms'),
            'categories'  => array('course-engagement'),
            'hasSettings' => false,
            'class'       => 'OMLMS\Integrations\ContentProtection',
            'is_valid'    => \OMLMS\Utility\LicenseHelper::is_feature_enabled('content_protection'),
            'required_plan'    => \OMLMS\Utility\LicenseHelper::get_required_plan_for_feature('content_protection'),
        );
        return $integrations;
    }


    /**
     * Check if cohort is enable
     * 
     * @since 1.0.0
     */
    public function should_show_cohort( $should_show ) {
        $integrations = get_option( 'creatorlms_integrations' );
  
        if ( empty( $integrations ) || ! is_array( $integrations ) ) {
            return $should_show;
        }
  
        if ( ! isset( $integrations['content_protection']['is_enable'] ) ) {
            return $should_show;
        }

        return 1 === (int) $integrations['content_protection']['is_enable'];
     }

}