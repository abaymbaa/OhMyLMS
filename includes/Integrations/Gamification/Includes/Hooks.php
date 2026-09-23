<?php 

namespace OMLMS\Integrations\Gamification\Includes;

class Hooks {
    
    public function __construct() {
        add_filter( 'creatorlms_integrations', array($this, 'add_chort') );
    }


    /**
     * Add gamification integration to the list of available integrations.
     * 
     * @param array $integrations List of existing integrations.
     * @return array Updated list of integrations with gamification added.
     * @since 1.0.0
     */
    public function add_chort( $integrations ) {
        $integrations['gamification'] = array(
            'label' => __('Gamification', 'ohmylms'),
            'icon' => CREATORLMS_PRO_URL.'/includes/Integrations/Gamification/Assets/Images/gamification-icon.svg',
            'description' => __('Engage learners with points, badges, levels, and leaderboards to motivate progress through gamification.', 'ohmylms'),
            'categories' => array('course-engagement'),
            'hasSettings' => false,
            'class' => 'OMLMS\Integrations\Gamification',
            'is_valid'    => \OMLMS\Utility\LicenseHelper::is_feature_enabled('gamification'),
            'required_plan'    => \OMLMS\Utility\LicenseHelper::get_required_plan_for_feature('gamification'),
        );
        return $integrations;
    }

    /**
     * Check if gamification is enable
     * 
     * @since 1.0.0
     */
    public function should_show_cohort( $should_show ) {
        $integrations = get_option( 'creatorlms_integrations' );
  
        if ( empty( $integrations ) || ! is_array( $integrations ) ) {
            return $should_show;
        }
  
        if ( ! isset( $integrations['gamification']['is_enable'] ) ) {
            return $should_show;
        }
  
        return 1 === (int) $integrations['gamification']['is_enable'];
     }

}