<?php

namespace OMLMS\Admin;

use OMLMS\Utility\ScormHelper;

defined('ABSPATH') || exit;

/**
 * Class ScormAdminNotices
 *
 * Handles admin notices and scheduled tasks for SCORM export.
 */
class ScormAdminNotices {

    /**
     * Initialize hooks.
     */
    public static function init() {
        add_action('admin_notices', [__CLASS__, 'show_scorm_feature_notice']);
        add_action('creatorlms_cleanup_scorm_temp_files', [__CLASS__, 'cleanup_temp_files']);
        
        // Schedule cleanup task if not scheduled
        if (!wp_next_scheduled('creatorlms_cleanup_scorm_temp_files')) {
            wp_schedule_event(time(), 'daily', 'creatorlms_cleanup_scorm_temp_files');
        }
    }

    /**
     * Show SCORM feature notice (dismissible).
     */
    public static function show_scorm_feature_notice() {
        $screen = get_current_screen();
        
        // Only show on course listing page
        if (!$screen || $screen->id !== 'edit-omlms-course') {
            return;
        }

        // Check if user dismissed the notice
        $user_id = get_current_user_id();
        $dismissed = get_user_meta($user_id, 'creatorlms_scorm_notice_dismissed', true);
        
        if ($dismissed) {
            return;
        }

        ?>
        <div class="notice notice-info is-dismissible creatorlms-scorm-notice">
            <h3><?php _e('New Feature: SCORM Export', 'creator-lms-pro'); ?></h3>
            <p>
                <?php _e('You can now export your courses as SCORM packages! This allows you to use your courses in any SCORM-compliant LMS platform like Moodle, Canvas, or Blackboard.', 'creator-lms-pro'); ?>
            </p>
            <p>
                <strong><?php _e('How to use:', 'creator-lms-pro'); ?></strong>
            </p>
            <ul style="list-style: disc; margin-left: 20px;">
                <li><?php _e('Select one or more courses from the list', 'creator-lms-pro'); ?></li>
                <li><?php _e('Choose "Export as SCORM" from the Bulk Actions dropdown', 'creator-lms-pro'); ?></li>
                <li><?php _e('Select your preferred SCORM version (1.2 or 2004)', 'creator-lms-pro'); ?></li>
                <li><?php _e('Download and import the package into your LMS', 'creator-lms-pro'); ?></li>
            </ul>
            <p>
                <a href="<?php echo esc_url(admin_url('admin.php?page=creatorlms-scorm-docs')); ?>" class="button button-primary">
                    <?php _e('Learn More', 'creator-lms-pro'); ?>
                </a>
                <button type="button" class="button creatorlms-dismiss-scorm-notice">
                    <?php _e('Dismiss', 'creator-lms-pro'); ?>
                </button>
            </p>
        </div>
        <script>
        jQuery(document).ready(function($) {
            $('.creatorlms-dismiss-scorm-notice').on('click', function() {
                $.post(ajaxurl, {
                    action: 'creatorlms_dismiss_scorm_notice',
                    nonce: '<?php echo wp_create_nonce('creatorlms_scorm_notice'); ?>'
                });
                $('.creatorlms-scorm-notice').fadeOut();
            });
        });
        </script>
        <?php
    }

    /**
     * Clean up old temporary SCORM files.
     */
    public static function cleanup_temp_files() {
        $deleted = ScormHelper::clean_old_temp_files(1); // Delete files older than 1 day
        
        if ($deleted > 0) {
            ScormHelper::log('Cleaned up temporary SCORM files', 'info', ['deleted_count' => $deleted]);
        }
    }
}

// Handle AJAX request to dismiss notice
add_action('wp_ajax_creatorlms_dismiss_scorm_notice', function() {
    check_ajax_referer('creatorlms_scorm_notice', 'nonce');
    
    $user_id = get_current_user_id();
    update_user_meta($user_id, 'creatorlms_scorm_notice_dismissed', true);
    
    wp_send_json_success();
});
