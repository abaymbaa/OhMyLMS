<?php
/** Run on the local WordPress site; all fixture writes use connection-local temporary tables. */
if (PHP_SAPI !== 'cli' || empty($argv[1])) { exit("Usage: php gradebook-integration.php /path/to/wordpress\n"); }
define('DISABLE_WP_CRON', true);
$GLOBALS['wp_filter']['pre_http_request'][10][] = ['function' => function () { return new WP_Error('test_network', 'External requests disabled during gradebook tests.'); }, 'accepted_args' => 3];
$GLOBALS['wp_filter']['pre_wp_mail'][10][] = ['function' => function () { return true; }, 'accepted_args' => 2];
require rtrim($argv[1], '/\\') . '/wp-load.php';
if (wp_get_environment_type() !== 'local') { throw new RuntimeException('This test requires a local WordPress environment.'); }

use OhMyLMS\Schools\Gradebook;
use OhMyLMS\Schools\GradebookMath;
use OhMyLMS\Schools\Schema;
use OhMyLMS\Schools\Service;

function gb_check($value, $message) { if (!$value) { throw new RuntimeException($message); } }
function gb_request($method, $suffix = '', $data = [], $expected = 200) {
    $r = new WP_REST_Request($method, '/ohmylms/v1/courses/900000011/gradebook' . $suffix);
    $r->set_header('X-WP-Nonce', wp_create_nonce('wp_rest'));
    $r->set_body_params($data);
    $response = rest_do_request($r);
    gb_check($response->get_status() === $expected, "$method $suffix returned " . $response->get_status() . ' ' . wp_json_encode($response->get_data()));
    return $response->get_data();
}

$original_prefix = $wpdb->prefix;
$test_prefix = 'gbtest_' . bin2hex(random_bytes(6)) . '_';
$tables = ['users', 'usermeta', 'posts', 'postmeta'];
foreach (['course_classes', 'course_class_students', 'gradebook_overrides', 'user_enrollment', 'classes', 'schools', 'school_memberships', 'class_memberships', 'school_audit_log', 'chapter_relationship', 'content_relationship', 'quiz_questions_relationship', 'quiz_attempts', 'quiz_attempts_answers', 'assignment_attempts'] as $name) { $tables[] = 'ohmylms_' . $name; }
foreach ($tables as $name) {
    gb_check($wpdb->query("CREATE TEMPORARY TABLE `{$test_prefix}{$name}` LIKE `{$original_prefix}{$name}`") !== false, 'Could not create temporary ' . $name);
}
$wpdb->set_prefix($test_prefix);
// Third-party enrollment/meta listeners must not fire on fixture identities.
foreach (['ohmylms_manual_student_enrollment', 'added_user_meta', 'updated_user_meta', 'added_post_meta', 'updated_post_meta'] as $hook) { remove_all_actions($hook); }
$enrolled_events = [];
add_action('ohmylms_manual_student_enrollment', function ($user, $course) use (&$enrolled_events) { $enrolled_events[] = [$user, $course]; }, 10, 2);
foreach ([900000001 => 'Admin', 900000002 => 'Alice', 900000003 => 'Bob', 900000004 => 'Blocked', 900000005 => 'Carol'] as $id => $name) {
    gb_check($wpdb->insert($wpdb->users, ['ID' => $id, 'user_login' => 'gb-' . $id, 'user_pass' => 'test-unused', 'user_email' => "$id@example.invalid", 'display_name' => $name, 'user_registered' => current_time('mysql')]) !== false, 'User fixture failed');
}
$admin = wp_set_current_user(900000001); $admin->allcaps['manage_options'] = true;
$course = 900000011; $quiz = 900000012; $assignment = 900000013; $chapter = 900000014; $question = 900000015;
foreach ([$course => OHMYLMS_COURSE_CPT, $quiz => OHMYLMS_QUIZ_CPT, $assignment => OHMYLMS_ASSIGNMENT_CPT, $chapter => 'ohmylms-chapter', $question => OHMYLMS_QUESTION_CPT] as $id => $type) {
    gb_check($wpdb->insert($wpdb->posts, ['ID' => $id, 'post_author' => 900000001, 'post_title' => "Gradebook fixture $id", 'post_type' => $type, 'post_status' => 'publish', 'post_content' => '', 'post_excerpt' => '', 'to_ping' => '', 'pinged' => '', 'post_content_filtered' => '']) !== false, 'Post fixture failed');
}
update_post_meta($question, '_question_settings', ['type' => 'single-choice', 'score' => ['enabled' => true, 'value' => 10]]);
update_post_meta($assignment, '_total_points', 20);
Service::insert('chapter_relationship', ['course_id' => $course, 'chapter_id' => $chapter, 'order_number' => 1]);
foreach ([$quiz, $assignment] as $index => $content) { Service::insert('content_relationship', ['chapter_id' => $chapter, 'content_id' => $content, 'order_number' => $index + 1]); }
Service::insert('quiz_questions_relationship', ['quiz_id' => $quiz, 'question_id' => $question, 'order_number' => 1]);
$class_a = Service::insert('classes', ['school_id' => 0, 'academic_year_id' => 0, 'name' => 'Class A']);
$class_b = Service::insert('classes', ['school_id' => 0, 'academic_year_id' => 0, 'name' => 'Class B']);
foreach ([[$class_a, 900000002], [$class_a, 900000003], [$class_a, 900000004], [$class_b, 900000003]] as [$class, $user]) {
    Service::insert('class_memberships', ['class_id' => $class, 'user_id' => $user, 'role' => 'student', 'status' => 'active', 'joined_at' => Service::now()]);
}
Service::insert('user_enrollment', ['course_id' => $course, 'user_id' => 900000004, 'status' => 'banned', 'progress' => 'running', 'start_date' => current_time('mysql')]);
$empty = gb_request('GET'); gb_check(count($empty['items']) === 2 && $empty['items'][0]['max'] === 10.0, 'Assessment columns or quiz maximum wrong');
wp_set_current_user(900000002); gb_request('GET', '', [], 403);
$admin = wp_set_current_user(900000001); $admin->allcaps['manage_options'] = true;
$result = gb_request('POST', '/classes', ['class' => $class_a, 'enroll' => true]);
gb_check($result === ['included' => 2, 'enrolled' => 2, 'skipped' => 1], 'Class enrollment did not skip blocked student');
$repeat = gb_request('POST', '/classes/' . $class_a, ['enroll' => true]);
gb_check($repeat['enrolled'] === 0 && count($enrolled_events) === 2, 'Repeated sync duplicated enrollments or enrollment hooks');
gb_request('POST', '/classes', ['class' => $class_b, 'enroll' => false]);
$attempt = Service::insert('quiz_attempts', ['course_id' => $course, 'quiz_id' => $quiz, 'student_id' => 900000002, 'total' => 4, 'status' => 'completed', 'start_date' => current_time('mysql')]);
Service::insert('quiz_attempts_answers', ['student_id' => 900000002, 'quiz_id' => $quiz, 'question_id' => $question, 'quiz_attempt_id' => $attempt, 'given_answer' => 'test', 'question_marks' => 10, 'achive_mark' => 4, 'minus_mark' => 0]);
Service::insert('quiz_attempts', ['course_id' => $course, 'quiz_id' => $quiz, 'student_id' => 900000002, 'total' => 0, 'status' => 'in-progress', 'start_date' => current_time('mysql')]);
Service::insert('assignment_attempts', ['user_id' => 900000002, 'course_id' => $course, 'assignment_id' => $assignment, 'content' => 'test', 'files' => '', 'score' => 10, 'status' => 'passed', 'start_date' => current_time('mysql')]);
gb_request('POST', '/grades', ['user_id' => 900000003, 'content_id' => $quiz, 'score' => 0]);
$book = gb_request('GET'); $group = $book['classes'][0];
gb_check(count($book['classes']) === 2 && count($group['students']) === 2 && count($book['students']) === 1 && $book['student_count'] === 3, 'Nested grouping or deduplication wrong');
gb_check($group['students'][0]['cells'][$quiz]['score'] === 4.0 && $group['students'][0]['cells'][$quiz]['max'] === 10.0, 'Quiz earned points were mistaken for maximum points, or a pending retake hid the grade');
gb_check(abs($group['students'][0]['total']['percent'] - 46.67) < 0.001 && abs($group['percent'] - 23.34) < 0.001, 'Weighted student or class average wrong');
gb_check(abs($book['average'] - 23.34) < 0.001, 'Overlapping class counted a student twice in course average');
gb_request('POST', '/grades', ['user_id' => 900000003, 'content_id' => $quiz, 'score' => 11], 400);
gb_request('POST', '/grades', ['user_id' => 900000005, 'content_id' => $quiz, 'score' => 5], 403);
gb_request('POST', '/grades', ['user_id' => 900000003, 'content_id' => $course, 'score' => 5], 400);
gb_request('DELETE', '/grades', ['user_id' => 900000003, 'content_id' => $quiz]);
gb_check(gb_request('GET')['classes'][0]['percent'] === 46.67, 'Reset grade did not restore an ungraded cell');
Service::insert('class_memberships', ['class_id' => $class_a, 'user_id' => 900000005, 'role' => 'student', 'status' => 'active', 'joined_at' => Service::now()]);
gb_check(gb_request('POST', '/classes/' . $class_a, ['enroll' => false])['enrolled'] === 0, 'Group-only sync enrolled a new student');
gb_check(gb_request('POST', '/classes/' . $class_a, ['enroll' => true])['enrolled'] === 1, 'Roster sync failed to enroll new student');
gb_request('DELETE', '/classes/' . $class_a);
$book = gb_request('GET'); gb_check(count($book['classes']) === 1 && $book['student_count'] === 4 && count($book['students']) === 3, 'Removing a class lost students or failed to preserve overlapping class');
gb_check(GradebookMath::total([['score' => null, 'max' => 10], ['score' => 0, 'max' => 10]])['percent'] === 0.0, 'Zero and ungraded were conflated');
echo "Gradebook integration passed: real SQL, REST authorization, enrollment, repeat sync, blocked students, nested grouping, overlapping classes, score calculations, overrides, reset and detach.\n";
// Temporary tables disappear with this database connection; no fixture rows touch live tables.
