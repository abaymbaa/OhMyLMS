<?php

namespace OMLMS\Utility;

/**
 * CreatorLMS Pro Functions
 * 
 * Utility functions for CreatorLMS Pro
 *
 * @since 1.0.0
 */
class ProFunctions {

    /**
     * Encrypt license key for display
     *
     * @param string $key
     * @return string
     */
    public static function encrypt_key( $key ) {
        if ( empty( $key ) ) {
            return '';
        }
        
        $key_length = strlen( $key );
        if ( $key_length <= 8 ) {
            return str_repeat( '*', $key_length );
        }
        
        return substr( $key, 0, 4 ) . str_repeat( '*', $key_length - 8 ) . substr( $key, -4 );
    }

    /**
     * Decrypt license key (for form submission handling)
     *
     * @param string $key
     * @return string
     */
    public static function decrypt_key( $key ) {
        // If key contains asterisks, it's encrypted display format
        if ( strpos( $key, '*' ) !== false ) {
            return get_option( 'creatorlms_pro_license_key', '' );
        }
        
        return $key;
    }

    /**
     * Sanitize license key
     *
     * @param string $key
     * @return string
     */
    public static function sanitize_license_key( $key ) {
        return sanitize_text_field( trim( $key ) );
    }

    /**
     * Validate license key format
     *
     * @param string $key
     * @return bool
     */
    public static function is_valid_license_format( $key ) {
        // Basic validation - adjust according to your license key format
        return ! empty( $key ) && strlen( $key ) >= 10;
    }

    /**
     * Get formatted license expiry date
     *
     * @param string $date
     * @return string
     */
    public static function format_license_date( $date ) {
        if ( empty( $date ) ) {
            return __( 'N/A', 'ohmylms' );
        }

        $timestamp = is_numeric( $date ) ? $date : strtotime( $date );
        return date_i18n( get_option( 'date_format' ), $timestamp );
    }

    /**
     * Check if license is expired
     *
     * @param string $end_date
     * @return bool
     */
    public static function is_license_expired( $end_date ) {
        if ( empty( $end_date ) ) {
            return true;
        }

        $end_timestamp = is_numeric( $end_date ) ? $end_date : strtotime( $end_date );
        return $end_timestamp < time();
    }

    /**
     * Get license status badge HTML
     *
     * @param string $status
     * @return string
     */
    public static function get_license_status_badge( $status ) {
        $class = 'badge badge-';
        $text = '';

        switch ( $status ) {
            case 'activate':
                $class .= 'success';
                $text = __( 'Active', 'ohmylms' );
                break;
            case 'expired':
                $class .= 'warning';
                $text = __( 'Expired', 'ohmylms' );
                break;
            case 'deactivate':
            default:
                $class .= 'danger';
                $text = __( 'Inactive', 'ohmylms' );
                break;
        }

        return sprintf( '<span class="%s">%s</span>', esc_attr( $class ), esc_html( $text ) );
    }


    /**
     * Get sanitized GET/POST data
     *
     * @return array
     */
    public static function get_sanitized_get_post() {
        $data = array(
            'get'  => array(),
            'post' => array()
        );

        if ( ! empty( $_GET ) ) {
            $data['get'] = array_map( 'sanitize_text_field', $_GET );
        }

        if ( ! empty( $_POST ) ) {
            $data['post'] = array_map( 'sanitize_text_field', $_POST );
        }

        return $data;
    }

    /**
     * Check if current user can manage licenses
     *
     * @return bool
     */
    public static function can_manage_license() {
        return current_user_can( 'manage_options' );
    }

    /**
     * Get license API endpoints
     *
     * @return array
     */
    public static function get_license_endpoints() {
        return array(
            'primary'   => CREATORLMS_PRO_API_URL,
            'fallback'  => CREATORLMS_PRO_LICENSE_URL
        );
    }

    /**
     * Format license key for storage
     *
     * @param string $key
     * @return string
     */
    public static function format_license_key_for_storage( $key ) {
        return strtoupper( trim( $key ) );
    }

    /**
     * Get license remaining days
     *
     * @param string $end_date
     * @return int
     */
    public static function get_license_remaining_days( $end_date ) {
        if ( empty( $end_date ) ) {
            return 0;
        }

        $end_timestamp = is_numeric( $end_date ) ? $end_date : strtotime( $end_date );
        $current_timestamp = time();
        
        if ( $end_timestamp <= $current_timestamp ) {
            return 0;
        }

        return ceil( ( $end_timestamp - $current_timestamp ) / DAY_IN_SECONDS );
    }

    /**
     * Check if plugin update is available
     *
     * @return bool True if update is available
     * @since 1.0.0
     */
    public static function is_update_available() {
        $creatorlms_pro = \CreatorLmsPro::instance();
        $updater = $creatorlms_pro->get_updater();
        
        if ( ! $updater ) {
            return false;
        }
        
        return $updater->is_update_available();
    }

    /**
     * Get current plugin version
     *
     * @return string Current version
     * @since 1.0.0
     */
    public static function get_current_version() {
        return defined( 'CREATOR_LMS_PRO_VERSION' ) ? CREATOR_LMS_PRO_VERSION : '1.0.0';
    }


      /**
     * Get domain name for licensing
     *
     * @return string
     */
    public static function get_domain() {
        $domain = get_site_url();
        $domain = str_replace( array( 'http://', 'https://', 'www.' ), '', $domain );
        $domain = untrailingslashit( $domain );

        return $domain;
    }

    /**
     * Log licensing events for debugging
     *
     * @param string $message
     * @param array $data
     */
    public static function log_license_event( $message, $data = array() ) {
        if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
            error_log( 
                sprintf( 
                    '[CreatorLMS Pro License] %s: %s', 
                    $message, 
                    ! empty( $data ) ? wp_json_encode( $data ) : '' 
                ) 
            );
        }
    }

    /**
     * Get latest available version
     *
     * @return string|false Latest version or false if not available
     * @since 1.0.0
     */
    public static function get_latest_version() {
        $creatorlms_pro = \CreatorLmsPro::instance();
        $updater = $creatorlms_pro->get_updater();
        
        if ( ! $updater ) {
            return false;
        }
        
        return $updater->get_latest_version();
    }

    /**
     * Force update check
     *
     * @return bool True if check was performed
     * @since 1.0.0
     */
    public static function force_update_check() {
        $creatorlms_pro = \CreatorLmsPro::instance();
        $updater = $creatorlms_pro->get_updater();
        
        if ( ! $updater ) {
            return false;
        }
        
        return $updater->force_update_check();
    }

    /**
     * Get update information
     *
     * @return array|false Update info or false if no update
     * @since 1.0.0
     */
    public static function get_update_info() {
        $creatorlms_pro = \CreatorLmsPro::instance();
        $updater = $creatorlms_pro->get_updater();
        
        if ( ! $updater ) {
            return false;
        }
        
        return $updater->get_update_info();
    }
}
