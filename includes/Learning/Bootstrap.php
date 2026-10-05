<?php
namespace OhMyLMS\Learning;

defined('ABSPATH') || exit;

final class Bootstrap {
    private static $dirty = [];

    public static function init() {
        add_action('init', [Schema::class, 'install'], 7);
        add_action('admin_enqueue_scripts', static function () {
            if (isset($_GET['page']) && $_GET['page'] === 'ohmylms') { wp_enqueue_style('ohmylms-learning-editor', plugins_url('assets/css/learning-program.css', OHMYLMS_FILE), [], OHMYLMS_VERSION); }
        });
        add_action('ohmylms_skill_state_updated', static function ($student) { self::$dirty[(int) $student] = true; });
        add_action('ohmylms_attempt_graded', static function ($event) { self::$dirty[(int) $event['student_id']] = true; });
        add_action('ohmylms_learning_activity_completed', static function ($student, $course) { CompletionPolicy::award($student, $course); }, 10, 2);
        add_action('ohmylms_after_assignment_review', static function ($assignment, $course, $student) { CompletionPolicy::award($student, $course); }, 20, 3);
        add_action('shutdown', [__CLASS__, 'flush'], 30);
        add_action('ohmylms_process_evidence', [__CLASS__, 'flush'], 30);
        add_filter('pre_update_option_ohmylms_integrations', [__CLASS__, 'guard_addon'], 10, 2);
        Frontend::init();
    }

    public static function flush() {
        global $wpdb;
        if (!Schema::ready()) { return; }
        $students = array_keys(self::$dirty); self::$dirty = [];
        foreach ($students as $student) {
            $courses = $wpdb->get_col($wpdb->prepare('SELECT DISTINCT e.course_id FROM ' . Schema::table('enrollments') . " b JOIN {$wpdb->prefix}ohmylms_user_enrollment e ON e.id=b.enrollment_id WHERE e.user_id=%d AND e.status='enrolled' AND e.progress<>'completed' AND b.program_id>0", $student));
            foreach ($courses as $course) { CompletionPolicy::award($student, (int) $course); }
        }
    }

    public static function dependent_courses() {
        global $wpdb;
        if (!Schema::ready()) { return []; }
        $ids = $wpdb->get_col('SELECT DISTINCT p.course_id FROM ' . Schema::table('programs') . ' p JOIN ' . Schema::table('enrollments') . " b ON b.program_id=p.id JOIN {$wpdb->prefix}ohmylms_user_enrollment e ON e.id=b.enrollment_id JOIN {$wpdb->posts} c ON c.ID=p.course_id WHERE e.status='enrolled' AND e.progress<>'completed' AND c.post_status='publish' AND (p.mode<>'traditional' OR EXISTS (SELECT 1 FROM " . Schema::table('outcomes') . ' o WHERE o.program_id=p.id))');
        $current = $wpdb->get_col("SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key='" . CourseProgram::CURRENT . "'");
        foreach ($current as $id) { $program = CourseProgram::current($id); if ($program && get_post_status($id) === 'publish' && CourseProgram::needs_skills($program)) { $ids[] = $id; } }
        return array_values(array_unique(array_map('intval', $ids)));
    }

    public static function guard_addon($next, $old) {
        if (!empty($old['skills']['is_enable']) && empty($next['skills']['is_enable']) && self::dependent_courses()) {
            $next['skills'] = $old['skills'];
        }
        return $next;
    }
}
