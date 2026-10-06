<?php
namespace OhMyLMS\Engagement;

/** Shared, fail-closed achievement conditions. Points remain the spendable balance. */
final class Rules {
    const FIELDS = ['points', 'completed_lesson', 'completed_courses'];
    const SIGNS = ['>=', '<=', '>', '<', '!=', '==', '='];

    public static function enabled($group) {
        $integrations = get_option('ohmylms_integrations', []);
        $settings = get_option('ohmylms_' . $group . '_settings', []);
        // Legacy "enable" fields were placeholders with no UI; preserve their old behavior.
        // The explicit switch introduced here defaults on for existing configurations.
        return !empty($integrations['gamification']['is_enable']) && (!isset($settings['feature_enabled']) || in_array($settings['feature_enabled'], [true, 1, '1'], true));
    }

    public static function valid($rules) {
        if (!is_array($rules) || !$rules) { return false; }
        foreach ($rules as $rule) {
            if (!is_array($rule) || !in_array($rule['dataValue'] ?? '', self::FIELDS, true)
                || !in_array($rule['compareSign'] ?? '', self::SIGNS, true)
                || !isset($rule['compareData']) || !is_numeric($rule['compareData'])
                || !is_finite((float) $rule['compareData']) || $rule['compareData'] < 0) { return false; }
        }
        return true;
    }

    public static function value($field, $user) {
        if ($field === 'points') { return Point::get_total_points($user); }
        if ($field === 'completed_courses') { return (new \OhMyLMS\Data\Student($user))->get_completed_course_count(); }
        if ($field === 'completed_lesson') {
            global $wpdb;
            return (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(DISTINCT p.content_id) FROM {$wpdb->prefix}ohmylms_user_progress p JOIN {$wpdb->prefix}ohmylms_user_enrollment e ON e.id=p.enrollment_id JOIN {$wpdb->posts} lesson ON lesson.ID=p.content_id WHERE e.user_id=%d AND p.status='completed' AND lesson.post_type=%s", $user, OHMYLMS_LESSON_CPT));
        }
        return null;
    }

    public static function compare($value, $sign, $required) {
        switch ($sign) {
            case '>=': return $value >= $required;
            case '<=': return $value <= $required;
            case '>': return $value > $required;
            case '<': return $value < $required;
            case '!=': return $value != $required;
            case '=': case '==': return $value == $required;
        }
        return false;
    }

    public static function met($rules, $user) {
        if (!$user || !self::valid($rules)) { return false; }
        foreach ($rules as $rule) {
            if (!self::compare(self::value($rule['dataValue'], $user), $rule['compareSign'], $rule['compareData'])) { return false; }
        }
        return true;
    }
}
