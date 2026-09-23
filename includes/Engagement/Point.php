<?php
/**
 * Point system Helper class.
 * 
 * This class handles the point system settings and functionality.
 * @since 1.0.0
 * @package CreatorLmsPro
 */
namespace OMLMS\Engagement;

use OMLMS\Engagement\Achievements;

class Point {
    
    /**
     * Get the point settings.
     *
     * @return array
     */
    public static function get_rules() {
        $settings = get_option( 'creator_lms_point_settings', array() );
        return apply_filters( 'creator_lms_point_settings', $settings );
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
                    if( ! isset($rule['threshold']) || ( isset($rule['threshold'] ) && $rule['threshold'] <= $threshold ) ) {
                        return true;
                    } 
                }
            }
        }
        return false;
    }

    /**
     * Add points to a user.
     *
     * @param int $user_id
     * @param int $points
     * @param string $reason
     * @return bool
     * @since 1.0.0
     */
    public static function add_points( $user_id, $type, $points, $reason = '', $course_id = null, $membership_id = null, $content_id = null ) {
        if( ! self::maybe_enable() ) {
            return false; // Point system is not enabled
        }

        $data = array(
            'user_id'       => $user_id,
            'type'          => $type,
            'points'        => $points,
            'reason'        => $reason,
            'course_id'     => $course_id,
            'membership_id' => $membership_id,
            'content_id'    => $content_id,
            'date_created'  => current_time( 'mysql' ),
        );
        $response = Achievements::insert_achievement( $data );
        if( $response ) {
            set_transient( 'points_added_for_user_' . $user_id, true, 60 );
            do_action( 'creator_lms_after_point_added', $user_id, $points, $type );
            
            // Trigger gamification event for tracking
            do_action( 'creatorlms_gamification_trigger_used', $type, array( 'points' => $points, 'user_id' => $user_id ) );
        }
        return $response;
    }

    public static function maybe_enable_email_for_a_slug( $slug ) {
        $settings = self::get_rules();
        if ( !empty($settings['rules']) && is_array($settings['rules']) ) {
            foreach ( $settings['rules'] as $rule ) {
                if( isset($rule['email'], $rule['email']['enable']) && $rule['slug'] == $slug && $rule['email']['enable'] ) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Send email 
     * 
     */
    public static function send_email( $body, $to, $subject ) {
        $headers = array('MIME-Version: 1.0','Content-Type: text/html; charset=UTF-8');
		wp_mail( $to, $subject, $body, $headers );
    }


    /**
     * Add points to a user.
     *
     * @param int $user_id
     * @param int $points
     * @param string $reason
     * @return bool
     * @since 1.0.0
     */
    public static function deduct_points( $user_id, $type, $points, $reason = '', $course_id = null, $membership_id = null, $content_id = null ) {
        if( ! self::maybe_enable() ) {
            return false; // Point system is not enabled
        }

        $data = array(
            'user_id'       => $user_id,
            'type'          => $type,
            'points'        => $points ? -$points : 0, // Deduct points
            'reason'        => $reason,
            'course_id'     => $course_id,
            'membership_id' => $membership_id,
            'content_id'    => $content_id,
            'date_created'  => current_time( 'mysql' ),
        );
        $response = Achievements::insert_achievement( $data );
        if( $response ) {
            do_action( 'creator_lms_after_point_deduct', $user_id, $points, $type );
        }
        return $response;
    }

    /**
     * Get points for a rules slug.
     * * @param string $slug
     * @return int
     * @since 1.0.0 
     */
    public static function get_points_for_slug( $slug ) {
        $settings = self::get_rules();
        if ( !empty($settings['rules']) && is_array($settings['rules']) ) {
            foreach ( $settings['rules'] as $rule ) {
                if ( isset($rule['point'], $rule['point']) && $rule['slug'] === $slug ) {
                    return intval($rule['point'] ?? 0);
                }
            }
        }
        return 0; // Default points if not found
    }


    /**
     * Get points for a rules slug.
     * * @param string $slug
     * @return int
     * @since 1.0.0 
     */
    public static function get_email_settings_for_slug( $slug ) {
        $settings = self::get_rules();
        if ( !empty($settings['rules']) && is_array($settings['rules']) ) {
            foreach ( $settings['rules'] as $rule ) {
                if ( isset($rule['email'] ) && $rule['slug'] === $slug ) {
                    return $rule['email'];
                }
            }
        }
        return [];
    }

    /**
     * Get the total points for a user.
     *
     * @param int $user_id
     * @return int
     * @since 1.0.0
     */
    public static function get_total_points( $user_id ) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'omlms_user_achievement';
        $total_points = $wpdb->get_var( $wpdb->prepare(
            "SELECT SUM(points) FROM {$table_name} WHERE user_id = %d AND status = 'active'",
            $user_id
        ) );
        return intval($total_points);
    }
}