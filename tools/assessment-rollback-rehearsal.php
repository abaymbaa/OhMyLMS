<?php
/**
 * Rollback rehearsal for the assessment engine. Run it on a migrated DATABASE COPY
 * (after tools/assessment-rehearsal.php --run), never on a live site.
 *
 *   php tools/assessment-rollback-rehearsal.php /path/to/wordpress prepare      # new code: fixture + in-flight versioned attempt
 *   php tools/assessment-rollback-rehearsal.php /path/to/wordpress engine-off   # new code with OHMYLMS_VERSIONED_ENGINE false
 *   php tools/assessment-rollback-rehearsal.php /path/to/wordpress old-code     # pre-assessment plugin code, new data retained
 *   php tools/assessment-rollback-rehearsal.php /path/to/wordpress forward      # new code again
 *
 * The WordPress bootstrap decides which code and switch apply; this script only checks the
 * expected behavior of each step and compares gradebook totals and attempts across steps.
 * Prints JSON; exit code 0 = every check passed. Works with old code (no new classes needed
 * in old-code).
 */
if (PHP_SAPI !== 'cli' || count($argv) < 3) { fwrite(STDERR, "Usage: php tools/assessment-rollback-rehearsal.php /path/to/wordpress prepare|engine-off|old-code|forward\n"); exit(2); }
define('WP_DISABLE_FATAL_ERROR_HANDLER', true);
require rtrim($argv[1], '/\\') . '/wp-load.php';
$step = $argv[2];
if (wp_get_environment_type() === 'production' || stripos(DB_NAME, 'rehearsal') === false) {
    fwrite(STDERR, "Refusing: run this only on a database copy whose name contains 'rehearsal'.\n");
    exit(2);
}
require_once ABSPATH . 'wp-admin/includes/user.php';
global $wpdb;
$p = $wpdb->prefix;
$state_file = sys_get_temp_dir() . '/ohmylms-rollback-' . DB_NAME . '.json';
$state = $step === 'prepare' ? [] : (json_decode((string) @file_get_contents($state_file), true) ?: []);
if ($step !== 'prepare' && !$state) { fwrite(STDERR, "Run the prepare step first.\n"); exit(2); }
$report = ['step' => $step, 'database' => DB_NAME, 'checks' => [], 'failed' => []];
$check = static function ($ok, $name, $detail = null) use (&$report) {
    $report['checks'][] = $name . ($ok ? ': ok' : ': FAILED');
    if (!$ok) { $report['failed'][] = $detail === null ? $name : [$name => $detail]; }
};
$admin = (int) $wpdb->get_var("SELECT user_id FROM {$p}usermeta WHERE meta_key='{$p}capabilities' AND meta_value LIKE '%administrator%' ORDER BY user_id LIMIT 1");
wp_set_current_user($admin);
$rest = static function ($method, $path, $data = []) {
    $request = new WP_REST_Request($method, '/ohmylms/v1/' . $path);
    if ($data) { $request->set_header('Content-Type', 'application/json'); $request->set_body(wp_json_encode($data)); }
    return rest_do_request($request);
};
/** Gradebook totals for every course and every attempt row, readable by old and new code. */
$snapshot = static function () use ($wpdb, $p) {
    $books = [];
    foreach ($wpdb->get_col($wpdb->prepare("SELECT ID FROM {$wpdb->posts} WHERE post_type=%s AND post_status<>'trash' ORDER BY ID", OHMYLMS_COURSE_CPT)) as $course) {
        $book = \OhMyLMS\Schools\Gradebook::read((int) $course);
        $rows = [];
        foreach (array_merge($book['students'], ...array_column($book['classes'], 'students')) as $student) {
            $rows[(int) $student['id']] = [round((float) ($student['total']['score'] ?? 0), 4), round((float) ($student['total']['max'] ?? 0), 4)];
        }
        ksort($rows);
        $books[(int) $course] = $rows;
    }
    $attempts = [];
    foreach ($wpdb->get_results("SELECT id, total, status FROM {$p}ohmylms_quiz_attempts ORDER BY id", ARRAY_A) as $row) { $attempts[(int) $row['id']] = [round((float) $row['total'], 4), $row['status']]; }
    return ['gradebook' => $books, 'attempts' => $attempts];
};
/** Compare two snapshots, ignoring the given attempts and courses (expected to change). */
$compare = static function ($before, $after, $ignore_attempts = [], $ignore_courses = []) {
    $changed = [];
    foreach ($before['attempts'] as $id => $row) {
        if (!in_array($id, $ignore_attempts, true) && ($after['attempts'][$id] ?? null) != $row) { $changed[] = "attempt $id"; }
    }
    foreach ($before['gradebook'] as $course => $rows) {
        if (!in_array($course, $ignore_courses, true) && ($after['gradebook'][$course] ?? null) != $rows) { $changed[] = "gradebook course $course"; }
    }
    return $changed;
};
$column = static function ($table, $name) use ($wpdb, $p) {
    return strtolower((string) $wpdb->get_var($wpdb->prepare("SELECT DATA_TYPE FROM information_schema.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME=%s AND COLUMN_NAME=%s", $p . $table, $name)));
};
$versioned_context = static function ($attempt) use ($wpdb, $p) {
    return (bool) $wpdb->get_var($wpdb->prepare("SELECT attempt_id FROM {$p}ohmylms_attempt_context WHERE attempt_id=%d", $attempt));
};
$right_option = static function () use ($wpdb, $p, &$state) {
    return (int) $wpdb->get_var($wpdb->prepare("SELECT id FROM {$p}ohmylms_question_answers WHERE question_id=%d AND is_correct=1", $state['question']));
};

try {
    switch ($step) {
        case 'prepare':
            $check(class_exists('\OhMyLMS\Assessment\Engine') && \OhMyLMS\Assessment\Engine::versioned(), 'new code with the versioned engine on');
            $course = $rest('POST', 'courses', ['name' => 'Rollback rehearsal course', 'status' => 'publish'])->get_data()['id'];
            $quiz = $rest('POST', 'quiz', ['name' => 'Rollback rehearsal quiz', 'status' => 'publish'])->get_data()['id'];
            $chapter = wp_insert_post(['post_type' => 'ohmylms-chapter', 'post_title' => 'Rollback chapter', 'post_status' => 'publish']);
            $wpdb->insert("{$p}ohmylms_chapter_relationship", ['course_id' => $course, 'chapter_id' => $chapter, 'order_number' => 0]);
            $wpdb->insert("{$p}ohmylms_content_relationship", ['chapter_id' => $chapter, 'content_id' => $quiz, 'content_type' => 'quiz', 'order_number' => 0]);
            $rest('PUT', "quiz/$quiz", ['settings' => ['allow_attempts' => 10]]);
            $question = $rest('POST', 'question', ['quiz_id' => $quiz, 'name' => 'Rollback 2 + 2', 'settings' => ['type' => 'single-choice', 'score' => ['enabled' => true, 'value' => 2]],
                'questions' => [['answer' => '4', 'is_correct' => 1, 'order_number' => 1], ['answer' => '5', 'is_correct' => 0, 'order_number' => 2]]])->get_data()['id'];
            $revision = \OhMyLMS\Assessment\RevisionPublisher::publish($quiz);
            $check(!is_wp_error($revision), 'revision published');
            $students = [];
            foreach (['inflight', 'legacy', 'oldcode', 'forward'] as $role) {
                $id = wp_create_user("rollback-$role-" . wp_generate_password(6, false, false), wp_generate_password(24), "rollback-$role-" . wp_generate_password(6, false, false) . '@example.invalid');
                $wpdb->insert("{$p}ohmylms_user_enrollment", ['user_id' => $id, 'course_id' => $course, 'status' => 'enrolled', 'progress' => 'running', 'start_date' => current_time('mysql')]);
                $students[$role] = $id;
            }
            $state = compact('course', 'quiz', 'question', 'students');
            // An attempt started on the versioned engine with an autosaved answer, left unfinished.
            wp_set_current_user($students['inflight']);
            $attempt = \OhMyLMS\Quiz\Submission::start($quiz, $students['inflight']);
            $state['inflight_attempt'] = $attempt;
            $check($versioned_context($attempt), 'in-flight attempt runs on the versioned engine');
            $token = '';
            foreach (\OhMyLMS\Assessment\AttemptItems::delivery($attempt) as $view) { foreach ($view['questions'] as $option) { if ($option['answer'] === '4') { $token = $option['id']; } } }
            $saved = $rest('POST', "attempts/$attempt/responses", ['question_id' => $question, 'response' => [$token], 'sequence' => 1]);
            $check($saved->get_status() === 200, 'answer autosaved', $saved->get_data());
            $state['token'] = $token;
            wp_set_current_user($admin);
            $state['snapshots']['prepare'] = $snapshot();
            break;

        case 'engine-off':
            $check(class_exists('\OhMyLMS\Assessment\Engine') && !\OhMyLMS\Assessment\Engine::versioned(), 'new code with the versioned engine switched off');
            wp_set_current_user($state['students']['legacy']);
            $legacy = \OhMyLMS\Quiz\Submission::start($state['quiz'], $state['students']['legacy']);
            $check($legacy && !$versioned_context($legacy), 'new attempts start on the legacy engine');
            $result = \OhMyLMS\Quiz\Submission::submit($state['quiz'], $legacy, $state['students']['legacy'], [$state['question'] => [(string) $right_option()]]);
            $check(!is_wp_error($result) && (float) $result['total'] === 2.0, 'legacy attempt graded', $result);
            // The in-flight versioned attempt finishes with its frozen items and saved answer.
            wp_set_current_user($state['students']['inflight']);
            $resume = $rest('GET', "attempts/{$state['inflight_attempt']}");
            $check($resume->get_status() === 200, 'in-flight attempt still resumes', $resume->get_data());
            $result = \OhMyLMS\Quiz\Submission::submit($state['quiz'], $state['inflight_attempt'], $state['students']['inflight'], [$state['question'] => [$state['token']]]);
            $check(!is_wp_error($result) && (float) $result['total'] === 2.0, 'in-flight versioned attempt submitted and graded', $result);
            wp_set_current_user($admin);
            $report_response = $rest('GET', "quiz/{$state['quiz']}/report/{$state['inflight_attempt']}");
            $check($report_response->get_status() === 200, 'versioned attempt report readable with the engine off');
            $state['legacy_attempt'] = $legacy;
            $after = $snapshot();
            $changed = $compare($state['snapshots']['prepare'], $after, [$state['inflight_attempt']], [$state['course']]);
            $check(!$changed, 'nothing else changed', $changed);
            $state['snapshots']['engine-off'] = $after;
            break;

        case 'old-code':
            $check(!class_exists('\OhMyLMS\Assessment\Engine'), 'pre-assessment plugin code is running');
            $check($column('ohmylms_quiz_attempts', 'total') === 'decimal', 'decimal score columns kept (old code did not revert them)');
            $after = $snapshot();
            $changed = $compare($state['snapshots']['engine-off'], $after);
            $check(!$changed, 'old code reads the same gradebook totals and attempts', $changed);
            // Old code reports the versioned attempt from its compatibility answer rows.
            $report_response = $rest('GET', "quiz/{$state['quiz']}/report/{$state['inflight_attempt']}");
            $check($report_response->get_status() === 200, 'old code opens the versioned attempt report', $report_response->get_data());
            // Old code can still run a whole attempt with the migrated schema.
            wp_set_current_user($state['students']['oldcode']);
            $old = \OhMyLMS\Quiz\Submission::start($state['quiz'], $state['students']['oldcode']);
            $result = $old ? \OhMyLMS\Quiz\Submission::submit($state['quiz'], $old, $state['students']['oldcode'], [$state['question'] => [(string) $right_option()]]) : null;
            $check($old && !is_wp_error($result) && (float) ($result['total'] ?? -1) === 2.0, 'old code starts and grades an attempt', $result);
            wp_set_current_user($admin);
            $state['old_attempt'] = $old;
            $state['snapshots']['old-code'] = $snapshot();
            break;

        case 'forward':
            $check(class_exists('\OhMyLMS\Assessment\Engine') && \OhMyLMS\Assessment\Engine::versioned(), 'new code with the versioned engine on again');
            $after = $snapshot();
            // If the old-code step stopped early, compare with the last complete snapshot.
            $changed = isset($state['snapshots']['old-code']) ? $compare($state['snapshots']['old-code'], $after) : $compare($state['snapshots']['engine-off'], $after, [], [$state['course']]);
            $check(!$changed, 'new code reads everything written while rolled back', $changed);
            if (!empty($state['old_attempt'])) {
                $report_response = $rest('GET', "quiz/{$state['quiz']}/report/{$state['old_attempt']}");
                $check($report_response->get_status() === 200, 'report for the attempt written by old code opens');
            }
            wp_set_current_user($state['students']['forward']);
            $attempt = \OhMyLMS\Quiz\Submission::start($state['quiz'], $state['students']['forward']);
            $check($versioned_context($attempt), 'new attempts use the versioned engine again');
            wp_set_current_user($admin);
            break;

        default:
            fwrite(STDERR, "Unknown step $step\n");
            exit(2);
    }
} catch (Throwable $error) {
    $report['failed'][] = get_class($error) . ': ' . $error->getMessage() . ' @ ' . basename($error->getFile()) . ':' . $error->getLine();
}
file_put_contents($state_file, wp_json_encode($state));
$report['passed'] = !$report['failed'];
echo wp_json_encode($report, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n";
exit($report['failed'] ? 1 : 0);
