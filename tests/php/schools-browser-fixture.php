<?php
if (PHP_SAPI !== 'cli') { exit; }
$config = json_decode(file_get_contents(getenv('OMLMS_TEST_CREDENTIALS')), true);
require $config['site'] . '/wp-load.php';
if (!defined('OMLMS_TEST_SITE') || DB_NAME !== 'ohmylms_source_test') { throw new RuntimeException('Requires disposable test site'); }
use OMLMS\Schools\Schema;
use OMLMS\Schools\Service;
$action = $argv[1] ?? ''; $name = $argv[2] ?? '';
if (!preg_match('/^School browser [0-9]+$/', $name)) { throw new RuntimeException('Invalid fixture name'); }
if ($action === 'cleanup') {
    $schools = $wpdb->get_col($wpdb->prepare('SELECT id FROM ' . Schema::table('schools') . ' WHERE name=%s', $name));
    foreach ($schools as $school) {
        $students = $wpdb->get_col($wpdb->prepare('SELECT user_id FROM ' . Schema::table('school_student_profiles') . ' WHERE school_id=%d', $school));
        require_once ABSPATH . 'wp-admin/includes/user.php';
        foreach ($students as $student) { if ((int) get_user_meta($student, '_omlms_managed_school', true) === (int) $school) { wp_delete_user($student); } }
        $classes = $wpdb->get_col($wpdb->prepare('SELECT id FROM ' . Schema::table('classes') . ' WHERE school_id=%d', $school));
        foreach ($classes as $class) { $wpdb->delete(Schema::table('class_memberships'), ['class_id' => $class]); }
        foreach (['academic_years', 'classes', 'school_memberships', 'school_student_profiles', 'school_invitations', 'guardian_links', 'school_audit_log'] as $table) { $wpdb->delete(Schema::table($table), ['school_id' => $school]); }
        $wpdb->delete(Schema::table('schools'), ['id' => $school]);
    }
    echo "School browser fixture cleaned.\n";
}
