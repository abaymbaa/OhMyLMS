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
    private function valid_group($group) {
        return in_array($group, apply_filters('ohmylms_engagement_setting_groups', ['point', 'badge', 'level', 'reward', 'leaderboard', 'streak']), true);
    }

    private function validate_settings($group, $settings) {
        if ($group === 'streak') {
            $validated = \OhMyLMS\Engagement\StreakSettings::validate($settings);
            if (is_wp_error($validated)) { return $validated; }
            $badges = array_column(\OhMyLMS\Engagement\Badge::get_badges(true), 'slug');
            foreach ($validated['milestones'] as $reward) {
                if ($reward['badge'] && !in_array($reward['badge'], $badges, true)) { return new WP_Error('streak_badge', __('Choose an existing milestone badge.', 'ohmylms'), ['status' => 400]); }
            }
            return $validated;
        }
        $error = new WP_Error('engagement_settings', __('Invalid gamification settings.', 'ohmylms'), ['status' => 400]);
        if (!is_array($settings)) { return $error; }
        foreach (['enable', 'feature_enabled'] as $key) {
            if (isset($settings[$key])) {
                if (!in_array($settings[$key], [true, false, 0, 1, '0', '1'], true)) { return $error; }
                $settings[$key] = in_array($settings[$key], [true, 1, '1'], true);
            }
        }
        if (in_array($group, ['point', 'reward'], true)) {
            if (isset($settings['rules']) && !is_array($settings['rules'])) { return $error; }
            foreach ($settings['rules'] ?? [] as $rule) {
                if (!is_array($rule) || empty($rule['slug']) || !isset($rule['value']) || !in_array($rule['value'], [true, false, 0, 1, '0', '1'], true)) { return $error; }
                foreach (['point', 'threshold'] as $field) {
                    if (isset($rule[$field]) && (!is_numeric($rule[$field]) || !is_finite((float) $rule[$field]) || $rule[$field] < 0 || $rule[$field] > 1000000)) { return $error; }
                }
            }
        }
        if ($group === 'level' && isset($settings['levels'])) {
            if (!is_array($settings['levels'])) { return $error; }
            foreach ($settings['levels'] as $level) { if (!\OhMyLMS\Engagement\Rules::valid($level['rules'] ?? [])) { return $error; } }
        }
        if ($group === 'leaderboard') {
            if (isset($settings['rules']) && !in_array($settings['rules'], ['completion_rate', 'highest_quiz', 'fastest_time'], true)) { return $error; }
            if (isset($settings['threshold']) && $settings['threshold'] !== '' && (!is_numeric($settings['threshold']) || $settings['threshold'] < 0 || $settings['threshold'] > 100)) { return $error; }
            if (isset($settings['students_number']) && $settings['students_number'] !== '' && (!is_numeric($settings['students_number']) || $settings['students_number'] < 1 || $settings['students_number'] > 100)) { return $error; }
        }
        return $settings;
    }
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
        if (!$this->valid_group($group_id)) { return new WP_Error('rest_invalid_group_id', __('Invalid group ID.', 'ohmylms'), ['status' => 400]); }
        if ($group_id === 'streak') { return rest_ensure_response(\OhMyLMS\Engagement\StreakSettings::get()); }
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
        if (!$this->valid_group($group_id)) { return new WP_Error('rest_invalid_group_id', __('Invalid group ID.', 'ohmylms'), ['status' => 400]); }
        $settings = $this->validate_settings($group_id, $settings);
        if (is_wp_error($settings)) { return $settings; }
        if ($group_id === 'streak' && $settings['enable'] && !\OhMyLMS\Engagement\StreakSchema::install()) {
            return new WP_Error('streak_schema', __('Could not install streak storage.', 'ohmylms'), ['status' => 500]);
        }
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
        $badges = $request->get_param('include_streak') ? \OhMyLMS\Engagement\Badge::get_badges(true) : get_option('ohmylms_badges', []);
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
        $streak_badge = ($new_badge['award_source'] ?? '') === 'streak';
        if ($streak_badge) {
            $new_badge['rules'] = [];
        } elseif (!\OhMyLMS\Engagement\Rules::valid($new_badge['rules'] ?? [])) {
            return new WP_Error('badge_rules', __('Define valid badge conditions.', 'ohmylms'), ['status' => 400]);
        }
        $existing_badges = get_option( 'ohmylms_badges', array() );
        $is_exist = false;
        foreach( $existing_badges as $key=>$badge ) {
            if( isset($badge['slug'], $new_badge['slug']) && ($new_badge['slug'] === $badge['slug']) ) {
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
                'badge' => $new_badge,
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
        if (!\OhMyLMS\Engagement\Rules::valid($new_level['rules'] ?? [])) { return new WP_Error('level_rules', __('Define valid level conditions.', 'ohmylms'), ['status' => 400]); }
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
            'rules'           => 'completion_rate',
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
