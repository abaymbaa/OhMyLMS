<?php
namespace OMLMS\Utility;
final class LicenseHelper {
 public static function is_pro_active() { return true; }
 public static function is_feature_enabled($feature) { return true; }
 public static function get_required_plan_for_feature($feature) { return ''; }
 public static function get_license_plan() { return 'bundled'; }
 public static function get_license_data() { return ['status'=>'valid','license_status'=>'valid','plan'=>'bundled']; }
 public static function get_plan_features() { return ['bundled'=>self::bundled_features()]; }
 public static function check_license_or_show_notice($feature = '') { return true; }
 public static function get_license_error_message() { return ''; }
 public static function display_license_notice($feature = '') {}
 public static function init_expiration_warnings() {}

public static function bundled_features() {
        return [
            'unlimited_courses' => true,
            'monetization_options' => 5,
            'webhooks' => true,
            'wpfusion' => true,
            'course_layout' => true,
            'ai_model' => true,
            'checkout_layout' => true,
            'memberships' => true,
            'interactive_quizzes' => true,
            'cohort' => true,
            'funnel' => true,
            'zoom' => true,
            'googlemeet' => true,
            'community' => true,
            'gamification' => true,
            'content_protection' => true,
            'student_analytics' => true,
            'course_analytics' => true,
            'import_export' => true,
            'earning_reports' => true,
            'download_resources' => true,
            'drip_settings' => true,
            'duplicate_course' => true,
            'manual_course_enrollment' => true,
            'statement_type_quiz' => true,
            'fill_in_the_blank_type_quiz' => true,
            'time_limit_in_quiz' => true,
            'options_on_quiz_settings' => true,
            'certificate_settings' => true,
            'assignment' => true,
            'site_license' => 'unlimited',
        ];
    }
}
