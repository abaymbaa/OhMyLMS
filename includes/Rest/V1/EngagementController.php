<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use WP_REST_Server;
use WP_REST_Request;
use WP_Error;

/**
 * EngagementController class.
 *
 * Handles REST API endpoints for engagement features, such as leaderboard settings.
 *
 * @since 1.0.0
 */
class EngagementController extends RestController {
    /**
     * The base route for the controller.
     *
     * @var string
     */
    protected $base = 'engagement';

    /**
     * Register the routes for the controller.
     *
     * @since 1.0.0
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->base . '/settings/(?P<group_id>[\w-]+)',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_settings' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                ),
                array(
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => array( $this, 'save_settings' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                ),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->base . '/badges',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_badges' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                ),
                array(
                    'methods'             => WP_REST_Server::DELETABLE,
                    'callback'            => array( $this, 'delete_badges' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                ),
                array(
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => array( $this, 'save_badges' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                ),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->base . '/levels',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_levels' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                ),
                array(
                    'methods'             => WP_REST_Server::DELETABLE,
                    'callback'            => array( $this, 'delete_levels' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                ),
                array(
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => array( $this, 'save_levels' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                ),
            )
        );
    }

    /**
     * Get the leaderboard settings.
     *
     * @param WP_REST_Request $request The request object.
     * @return \WP_REST_Response|\WP_Error The response or error object.
     *
     * @since 1.0.0
     */
    public function get_settings( WP_REST_Request $request ) {
        if( !isset( $request['group_id'] ) || empty( $request['group_id'] ) ) {
            return new WP_Error(
                'rest_invalid_group_id',
                __( 'Invalid group ID.', 'ohmylms' ),
                array( 'status' => 400 )
            );
        }
        $group_id = $request['group_id'];
        $function_name = 'get_'.$group_id.'_default_settings';
        $settings = get_option( 'ohmylms_'.$group_id.'_settings' ); 
        return rest_ensure_response( $settings );
    }

    /**
     * Save the leaderboard settings.
     *
     * @param WP_REST_Request $request The request object.
     * @return \WP_REST_Response|\WP_Error The response or error object.
     *
     * @since 1.0.0
     */
    public function save_settings( WP_REST_Request $request ) {
        if( !isset( $request['group_id'] ) || empty( $request['group_id'] ) ) {
            return new WP_Error(
                'rest_invalid_group_id',
                __( 'Invalid group ID.', 'ohmylms' ),
                array( 'status' => 400 )
            );
        }

        $settings = $request->get_json_params();
        $group_id = $request['group_id'];
        update_option( 'ohmylms_'.$group_id.'_settings', $settings );
        if( 'level' === $group_id ) {
            $levels = isset( $settings['levels'] ) ? $settings['levels'] : array();
            update_option( 'ohmylms_levels', $levels );
        }

        if( 'point' === $group_id ) {
            do_action( 'ohmylms_point_settings_updated', $settings );
        }
        
        return rest_ensure_response(
            array(
                'success' => true,
                'message' => __( 'Settings saved successfully.', 'ohmylms' ),
            )
        );
    }

    /**
     * Get the badges.
     *
     * @param WP_REST_Request $request The request object.
     * @return \WP_REST_Response|\WP_Error The response or error object.
     *
     * @since 1.0.0
     */
    public function get_badges( WP_REST_Request $request ) {
        $badges = get_option( 'ohmylms_badges', array() );
        return rest_ensure_response( $badges );
    }


    /**
     * Save the badges.
     *
     * @param WP_REST_Request $request The request object.
     * @return \WP_REST_Response|\WP_Error The response or error object.
     *
     * @since 1.0.0
     */
    public function save_badges( WP_REST_Request $request ) {
        $new_badge = $request->get_json_params();
        if ( ! is_array( $new_badge ) || empty( $new_badge ) ) {
            return new WP_Error(
                'rest_invalid_badges',
                __( 'Invalid badges data.', 'ohmylms' ),
                array( 'status' => 400 )
            );
        }
        $existing_badges = get_option( 'ohmylms_badges', array() );
        $is_exist = false;
        foreach( $existing_badges as $key=>$badge ) {
            if( isset($badge['slug']) && ($new_badge['slug'] === $badge['slug']) ) {
                $existing_badges[$key] = $new_badge;
                $is_exist = true;
            }
        }

        if( ! $is_exist ) { 
            if( isset($new_badge['name']) ) {
                $new_badge['slug'] = $this->generate_slug( $new_badge['name'] );
            }
            
            array_push( $existing_badges, $new_badge );
        }

        update_option( 'ohmylms_badges', $existing_badges );
        return rest_ensure_response(
            array(
                'success' => true,
                'message' => __( 'Badges saved successfully.', 'ohmylms' ),
            )
        );
    }

    public function generate_slug( $string ) {
        // Convert to lowercase
        $slug = strtolower( $string );

        // Replace spaces and underscores with hyphens
        $slug = preg_replace( '/[\s_]+/', '-', $slug );

        // Remove non-alphanumeric characters (except hyphens)
        $slug = preg_replace( '/[^a-z0-9\-]/', '', $slug );

        // Remove multiple hyphens
        $slug = preg_replace( '/-+/', '-', $slug );

        // Trim hyphens from both ends
        $slug = trim( $slug, '-' );

        return $slug;
    }


    /**
     * Save the badges.
     *
     * @param WP_REST_Request $request The request object.
     * @return \WP_REST_Response|\WP_Error The response or error object.
     *
     * @since 1.0.0
     */
    public function delete_badges( WP_REST_Request $request ) {
        $badges = $request->get_json_params();
        if ( ! is_array( $badges ) ) {
            return new WP_Error(
                'rest_invalid_badges',
                __( 'Invalid badges data.', 'ohmylms' ),
                array( 'status' => 400 )
            );
        }

        update_option( 'ohmylms_badges', $badges );

        
        return rest_ensure_response(
            array(
                'success' => true,
                'message' => __( 'Badges deleted successfully.', 'ohmylms' ),
            )
        );
    }



    /**
     * Get the levels.
     *
     * @param WP_REST_Request $request The request object.
     * @return \WP_REST_Response|\WP_Error The response or error object.
     *
     * @since 1.0.0
     */
    public function get_levels( WP_REST_Request $request ) {
        $levels = get_option( 'ohmylms_levels', array() );
        return rest_ensure_response( $levels );
    }


    /**
     * Save the levels.
     *
     * @param WP_REST_Request $request The request object.
     * @return \WP_REST_Response|\WP_Error The response or error object.
     *
     * @since 1.0.0
     */
    public function save_levels( WP_REST_Request $request ) {
        $new_level = $request->get_json_params();
        if ( ! is_array( $new_level ) || empty( $new_level ) ) {
            return new WP_Error(
                'rest_invalid_levels',
                __( 'Invalid levels data.', 'ohmylms' ),
                array( 'status' => 400 )
            );
        }
        $existing_levels = get_option( 'ohmylms_levels', array() );
        $is_exist = false;
        foreach( $existing_levels as $key=>$level ) {
            if( isset( $new_level['slug'] ) && $new_level['slug'] === $level['slug'] ) {
                $existing_levels[$key] = $new_level;
                $is_exist = true;
            }
        }

        if( ! $is_exist ) { 
            if( isset($new_level['name']) ) {
                $new_level['slug'] = $this->generate_slug( $new_level['name'] );
            }
            
            array_push( $existing_levels, $new_level );
        }
        update_option( 'ohmylms_levels', $existing_levels );
        return rest_ensure_response(
            array(
                'success' => true,
                'message' => __( 'Badges saved successfully.', 'ohmylms' ),
            )
        );
    }

    /**
     * Save the badges.
     *
     * @param WP_REST_Request $request The request object.
     * @return \WP_REST_Response|\WP_Error The response or error object.
     *
     * @since 1.0.0
     */
    public function delete_levels( WP_REST_Request $request ) {
        $levels = $request->get_json_params();
        if ( ! is_array( $levels ) ) {
            return new WP_Error(
                'rest_invalid_levels',
                __( 'Invalid levels data.', 'ohmylms' ),
                array( 'status' => 400 )
            );
        }

        update_option( 'ohmylms_levels', $levels );

        
        return rest_ensure_response(
            array(
                'success' => true,
                'message' => __( 'Badges deleted successfully.', 'ohmylms' ),
            )
        );
    }

    /**
     * Check if the current user has permission to manage options.
     *
     * @return bool
     * @since 1.0.0
     */
    public function has_permission() {
        return current_user_can( 'manage_options' );
    }

    /**
     * Get the default leaderboard settings.
     *
     * @return array
     * @since 1.0.0
     */
    private function get_leaderboard_default_settings() {
        return array(
            'enable'          => false,
            'rules'           => array(
                array( 'based_on' => 'most_courses' ),
            ),
            'students_number' => 10,
        );
    }


    /**
     * Get the default point settings.
     *
     * @return array
     * @since 1.0.0
     */
    private function get_point_default_settings() {
        return array(
            'enable'          => false,
            'rules'           => array(
                array( 
                    "label" => __('Course completion rate', 'ohmylms'),
                    "tooltip" =>  __('', 'ohmylms'),
                    "slug" => 'course_completion_rate',
                    "value" => true,
                    "threshold" => 100
                ),
                array( 
                    "label" => __('Complete lesson', 'ohmylms'),
                    "tooltip" =>  __('', 'ohmylms'),
                    "slug" => 'lesson_complete',
                    "value" => true,
                ),
                array( 
                    "label" => __('Quiz passing mark', 'ohmylms'),
                    "tooltip" =>  __('', 'ohmylms'),
                    "slug" => 'quiz_passing_mark',
                    "value" => true,
                    "threshold" => 30
                ),
                array( 
                    "label" => __('Assignment passing mark', 'ohmylms'),
                    "tooltip" =>  __('', 'ohmylms'),
                    "slug" => 'assignment_passing_mark',
                    "value" => true,
                    "threshold" => 30
                ),
                array( 
                    "label" => __('Submit quiz', 'ohmylms'),
                    "tooltip" =>  __('', 'ohmylms'),
                    "slug" => 'submit_quiz',
                    "value" => true,
                ),
                array( 
                    "label" => __('Submit assignment', 'ohmylms'),
                    "tooltip" =>  __('', 'ohmylms'),
                    "slug" => 'submit_assignment',
                    "value" => true,
                ),
            )
        );
    }


    /**
     * Get the default reward settings.
     *
     * @return array
     * @since 1.0.0
     */
    private function get_reward_default_settings() {
        return false;
    }
    

    /**
     * Get the default leaderboard settings.
     *
     * @return array
     * @since 1.0.0
     */
    private function get_badge_default_settings() {
        return false;
    }

    /**
     * Get the default level settings.
     *
     * @return array
     * @since 1.0.0
     */
    private function get_level_default_settings() {
        return false;
    }
}
