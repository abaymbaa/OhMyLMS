<?php
namespace OMLMS\Rest\V1;

use OMLMS\Abstracts\RestController;
use WP_REST_Server;
use WP_REST_Response;
use WP_Error;

class AppController extends RestController {

    protected $base = 'app';

    /**
     * Register API routes
     */
    public function register_routes() {
        \register_rest_route(
            $this->namespace,
            '/' . $this->base . '/data',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_app_data' ),
                    'permission_callback' => array( $this, 'get_items_permissions_check' ),
                    'args'                => array(
                        'type' => array(
                            'description' => 'Type of data to fetch (categories, integrations, currency_settings, all)',
                            'type'        => 'string',
                            'required'    => false,
                        ),
                    ),
                ),
            )
        );
    }

    /**
     * Permission check (same as AnalyticsController)
     */
    public function get_items_permissions_check( $request ) {
        return \current_user_can( 'edit_posts' );
    }

    /**
     * Main handler for fetching app data
     */
    public function get_app_data( $request ) {
        $type = $request->get_param('type');
        $result = array();

        if ( empty($type) || $type === 'all' ) {
            $result['categories'] = $this->get_categories();
            $result['integrations'] = $this->get_integrations();
            $result['currency_settings'] = $this->get_currency_settings();
            $result['engagement_settings'] = $this->get_engagement_settings();
            $result['ai_settings'] = $this->get_ai_settings();
            $result['license_info'] = $this->get_license_info();
            $result['plan_features'] = $this->get_plan_features();
        } else {
            switch ( $type ) {
                case 'categories':
                    $result['categories'] = $this->get_categories();
                    break;
                case 'integrations':
                    $result['integrations'] = $this->get_integrations();
                    break;
                case 'currency_settings':
                    $result['currency_settings'] = $this->get_currency_settings();
                    break;
                case 'engagement_settings':
                    $result['engagement_settings'] = $this->get_engagement_settings();
                    break;
                case 'ai_settings':
                    $result['ai_settings'] = $this->get_ai_settings();
                    break;
                case 'license_info':
                    $result['license_info'] = $this->get_license_info();
                    break;
                case 'plan_features':
                    $result['plan_features'] = $this->get_plan_features();
                    break;
                default:
                    return new \WP_Error( 'invalid_type', \__( 'Invalid type parameter.', 'ohmylms' ), array( 'status' => 400 ) );
            }
        }

        return \rest_ensure_response( $result );
    }

    /**
     * Get the additional resources for a course.
     *
     * @param Course $course The course object.
     * @return array
     * @since 1.0.0
     */
    public function get_engagement_settings() {
        if ( !creator_lms_is_pro() ) return array();
        $point_settings = \OMLMS\Engagement\Point::get_rules();
        $badge_settings = \OMLMS\Engagement\Badge::get_rules();
        $reward_settings = \OMLMS\Engagement\Reward::get_rules();

        return array(
            'point_settings' => $point_settings,
            'badge_settings' => $badge_settings,
            'reward_settings' => $reward_settings,
        );
    }


    /**
     * Get AI settings for the app.
     */
    public function get_ai_settings() {
        if ( !creator_lms_is_pro() ) return array();
        $user_id = \get_current_user_id();
		$settings = \get_user_meta( $user_id, 'creatorlms_ai_api_credentials', true );
        $text_credit = get_option( 'creatorlms_pro_token_remaining', 0 );
        $image_count = get_option( 'creatorlms_pro_image_token_remaining', 0 );
		if ( empty( $settings ) ) {
			$settings = array();
		}
        $settings['text_credit'] = $text_credit;
        $settings['image_count'] = $image_count;
		return $settings;
    }

    /**
     * Get license information for the app.
     */
    public function get_license_info() {
        if ( !creator_lms_is_pro() ) return array();
        return \OMLMS\Utility\LicenseHelper::get_license_data();
    }


    /**
     * Get license information for the app.
     */
    public function get_plan_features() {
        if ( !creator_lms_is_pro() ) return array();
        return \OMLMS\Utility\LicenseHelper::get_plan_features();
    }

    /**
     * Get all course categories (course_category terms)
     */
    private function get_categories() {
        $args = array(
            'taxonomy'   => 'course_category',
            'hide_empty' => false,
            'orderby'    => 'parent',
            'order'      => 'ASC',
        );
        $terms = get_terms( $args );
        if ( is_wp_error( $terms ) ) {
            return array();
        }
        // Return only id, name, slug, parent for each term
        $categories = array();
        foreach ( $terms as $term ) {
            $categories[] = array(
                'id'     => $term->term_id,
                'name'   => $term->name,
                'slug'   => $term->slug,
                'parent' => $term->parent,
            );
        }
        return $categories;
    }

    /**
     * Get integrations from wp_options
     */
    private function get_integrations() {
        $is_community_active = defined( 'CREATORLMS_COMMUNITY_VERSION' );

        if ( !creator_lms_is_pro() && !$is_community_active ) return array();
        else if($is_community_active && !creator_lms_is_pro()) {
            $integrations = array(
                'community' => array(
                    'is_enable' => 1,
                ),
            );    
            return $integrations;
        }

        $integrations = get_option( 'creatorlms_integrations', array() );
        if( $is_community_active ) {
            $integrations['community']['is_enable'] = 1;
        } else {
            $integrations['community']['is_enable'] = 0;
        }

        return $integrations;
    }

    /**
     * Get currency settings from wp_options
     */
    private function get_currency_settings() {
        $keys = array(
            'creator_lms_currency',
            'creator_lms_currency_pos',
            'creator_lms_price_thousand_sep',
            'creator_lms_price_decimal_sep',
            'creator_lms_price_num_decimals',
        );
        $settings = array();
        foreach ( $keys as $key ) {
            $settings[ $key ] = get_option( $key, '' );
        }
        return $settings;
    }
}