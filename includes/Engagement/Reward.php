<?php
/**
 * Reward system Helper class.
 * 
 * This class handles the reward system settings and functionality.
 * @since 1.0.0
 * @package CreatorLmsPro
 */
namespace OMLMS\Engagement;

use OMLMS\Engagement\Achievements;

class Reward {
    
    /**
     * Get the point settings.
     *
     * @return array
     */
    public static function get_rules() {
        $settings = get_option( 'creator_lms_reward_settings', array() );
        return apply_filters( 'creator_lms_reward_settings', $settings );
    }

    /**
     * Maybe enable the point system.
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function maybe_enable() {
        return true;
    }

    /**
     * Maybe met rules for a specific event.
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function maybe_met_rules( $event, $threshold = 0 ) {
        $settings = self::get_rules();
        if ( !empty($settings['rules']) && is_array($settings['rules']) ) {
            foreach ( $settings['rules'] as $rule ) {
                if ( isset($rule['slug'], $rule['value']) && $rule['slug'] === $event && $rule['value'] ) {
                    if( ! isset($rule['threshold']) || ( isset($rule['threshold'] ) && $rule['threshold'] == $threshold ) ) {
                        return true;
                    } 
                }
            }
        }
        return false;
    }
}