<?php 

namespace OhMyLMS\Integrations\ContentProtection\Includes;

class Hooks {
    
    public function __construct() {
        add_filter( 'ohmylms_integrations', array($this, 'add_content_protection') );
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
            'icon' => OHMYLMS_PRO_URL.'/includes/Integrations/ContentProtection/Assets/Images/content-protection-icon.svg',
            'description' => __('Protect your content by disabling copying, inspecting, and screen recording features.', 'ohmylms'),
            'categories'  => array('course-engagement'),
            'hasSettings' => false,
            'class'       => 'OhMyLMS\Integrations\ContentProtection',
            'is_valid'    => true,
        );
        return $integrations;
    }


    /**
     * Check if cohort is enable
     * 
     * @since 1.0.0
     */
    public function should_show_cohort( $should_show ) {
        $integrations = get_option( 'ohmylms_integrations' );
  
        if ( empty( $integrations ) || ! is_array( $integrations ) ) {
            return $should_show;
        }
  
        if ( ! isset( $integrations['content_protection']['is_enable'] ) ) {
            return $should_show;
        }

        return 1 === (int) $integrations['content_protection']['is_enable'];
     }

}