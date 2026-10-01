<?php
/**
 * Badge system Helper class.
 * 
 * This class handles the Badge system settings and functionality.
 * @since 1.0.0
 * @package OhMyLMSPro
 */
namespace OhMyLMS\Engagement;

use OhMyLMS\Engagement\Achievements;

class Badge {


    public static function get_badges() {
        return get_option( 'ohmylms_badges', array() );
    }
    
    /**
     * Get the point settings.
     *
     * @return array
     */
    public static function get_rules() {
        $settings = get_option( 'ohmylms_badge_settings', array() );
        return apply_filters( 'ohmylms_badge_settings', $settings );
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
     * Helper to compare values with a sign
     */
    private static function compare_with_sign($value, $compareSign, $compareData) {
        switch ($compareSign) {
            case '>=': return $value >= $compareData;
            case '<=': return $value <= $compareData;
            case '>':  return $value > $compareData;
            case '<':  return $value < $compareData;
            case '!=': return $value != $compareData;
            case '==':
            case '=':  return $value == $compareData;
            default:   return false;
        }
    }

    /**
     * Maybe met rules for a specific event.
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function maybe_met_rules() {
        $badges = self::get_badges();
        $met_badge_slugs = array();
        if( !empty( $badges ) && is_array($badges) ) {
            foreach ( $badges as $badge ) {
                $all_rules_met = true;
                if( isset( $badge['rules'] ) && is_array( $badge['rules'] )) {
                    foreach( $badge['rules'] as $settings ) {
                        if( isset( $settings['dataValue'], $settings['compareData'], $settings['compareSign'] ) && 'points' === $settings['dataValue'] ) {
                            $points = Point::get_total_points( get_current_user_id() );
                            if( !self::compare_with_sign($points, $settings['compareSign'], $settings['compareData']) ) {
                                $all_rules_met = false;
                                break;
                            }
                        }
                        if( isset( $settings['dataValue'], $settings['compareData'], $settings['compareSign'] ) && 'completed_lesson' === $settings['dataValue'] ) {
                            $points = Point::get_total_points( get_current_user_id() );
                            if( !self::compare_with_sign($points, $settings['compareSign'], $settings['compareData']) ) {
                                $all_rules_met = false;
                                break;
                            }
                        }
                        if( isset( $settings['dataValue'], $settings['compareData'], $settings['compareSign'] ) && 'completed_courses' === $settings['dataValue'] ) {
                            $student = new \OhMyLMS\Data\Student( get_current_user_id() );
                            if( ! $student ) {
                                $all_rules_met = false;
                                break;
                            }
                            $completed_course = $student->get_completed_course_count();
                            if( !self::compare_with_sign($completed_course, $settings['compareSign'], $settings['compareData']) ) {
                                $all_rules_met = false;
                                break;
                            }
                        }
                    }
                }
                if ($all_rules_met && isset($badge['slug'])) {
                    $met_badge_slugs[] = $badge['slug'];
                }
            }
        }
        return $met_badge_slugs;
    }


    /**
     * Add badge to a user.
     *
     * @param int $user_id
     * @param int $points
     * @param string $reason
     * @return bool
     * @since 1.0.0
     */
    public static function add_badge( $user_id, $type, $badge_id, $reason = '', $course_id = null, $membership_id = null, $content_id = null ) {
        if( ! self::maybe_enable() ) {
            return false; // Point system is not enabled
        }

        $data = array(
            'user_id'       => $user_id,
            'type'          => $type,
            'badge_id'      => $badge_id,
            'reason'        => $reason,
            'course_id'     => $course_id,
            'membership_id' => $membership_id,
            'content_id'    => $content_id,
            'date_created'  => current_time( 'mysql' ),
        );
       

        $response = Achievements::insert_achievement( $data );
        if( $response ) {
            set_transient( 'badge_added_for_user_' . $user_id, true, 60 );
            do_action( 'ohmylms_after_badge_added', $user_id, $badge_id, $type );
        }
        return true;
    }
    

    /**
     * Get all the badges of a user.
     *
     * @param int $user_id The user ID to get badges for.
     * @return array Array of badge objects or empty array if no badges found.
     * @since 1.0.0
     */
    public static function get_all_badges_of_a_user( $user_id ) {
        // Validate user ID
        if ( ! is_numeric( $user_id ) || $user_id <= 0 ) {
            return array();
        }

        global $wpdb;

        $table_name = $wpdb->prefix . 'ohmylms_user_achievement';

        // Query to get unique badge IDs for the user
        $query = $wpdb->prepare(
            "
            SELECT DISTINCT badge_id 
            FROM {$table_name}
            WHERE user_id = %d
                AND badge_id IS NOT NULL
                AND type = %s
                AND status = %s
            ORDER BY badge_id ASC
            ",
            $user_id,
            'badge',
            'active'
        );

        $badge_ids = $wpdb->get_col( $query );

        // Return empty array if no badges found
        if ( empty( $badge_ids ) || ! is_array( $badge_ids ) ) {
            return array();
        }

        // Get all available badges once
        $all_badges = self::get_badges();
        if ( empty( $all_badges ) || ! is_array( $all_badges ) ) {
            return array();
        }

        // Create a lookup map for O(1) access instead of O(n) nested loops
        $badge_lookup = array();
        foreach ( $all_badges as $badge ) {
            if ( isset( $badge['slug'] ) && ! empty( $badge['slug'] ) ) {
                $badge_lookup[ $badge['slug'] ] = $badge;
            }
        }

        // Build result array using the lookup map
        $user_badges = array();
        foreach ( $badge_ids as $badge_id ) {
            if ( isset( $badge_lookup[ $badge_id ] ) ) {
                $user_badges[] = $badge_lookup[ $badge_id ];
            }
        }

        return $user_badges;
    }
}