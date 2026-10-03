<?php
/**
 * Assessment migration rehearsal (run on a staging copy first).
 *
 *   php tools/assessment-rehearsal.php /path/to/wordpress            # inventory + checksums only
 *   php tools/assessment-rehearsal.php /path/to/wordpress --run      # migrate, then verify nothing changed
 *
 * Verifies that question links, option IDs and content, attempt totals and statuses,
 * gradebook totals and gradebook overrides are identical before and after the migration.
 * Refuses to run outside local/staging environments unless --i-have-a-backup is passed.
 * Prints a JSON report; exit code 0 = unchanged, 1 = differences, 2 = refused.
 */
if (PHP_SAPI !== 'cli' || empty($argv[1])) { fwrite(STDERR, "Usage: php tools/assessment-rehearsal.php /path/to/wordpress [--run] [--i-have-a-backup]\n"); exit(2); }
define('WP_DISABLE_FATAL_ERROR_HANDLER', true);
require rtrim($argv[1], '/\\') . '/wp-load.php';
$run = in_array('--run', $argv, true);
$environment = wp_get_environment_type();
if ($run && !in_array($environment, ['local', 'staging', 'development'], true) && !in_array('--i-have-a-backup', $argv, true) && !(defined('OHMYLMS_TEST_SITE') && OHMYLMS_TEST_SITE)) {
    fwrite(STDERR, "Refusing to migrate a '$environment' site without --i-have-a-backup. Back up the database first.\n");
    exit(2);
}

function rehearsal_snapshot() {
    global $wpdb;
    $p = $wpdb->prefix;
    $hash = static function ($rows) { return hash('sha256', wp_json_encode($rows)); };
    $snapshot = [
        'links' => $hash($wpdb->get_results("SELECT quiz_id, question_id, order_number FROM {$p}ohmylms_quiz_questions_relationship ORDER BY quiz_id, question_id, id", ARRAY_N)),
        'options' => $hash($wpdb->get_results("SELECT id, question_id, answer, order_number, is_correct FROM {$p}ohmylms_question_answers ORDER BY id", ARRAY_N)),
        'option_meta' => $hash($wpdb->get_results("SELECT answer_id, meta_key, meta_value FROM {$p}ohmylms_question_answermeta ORDER BY id", ARRAY_N)),
        // Totals compared numerically so a column type change (bigint -> decimal) is not a difference.
        'attempts' => $hash(array_map(static function ($row) { return [(int) $row[0], round((float) $row[1], 4), $row[2]]; }, $wpdb->get_results("SELECT id, total, status FROM {$p}ohmylms_quiz_attempts ORDER BY id", ARRAY_N))),
        'answers' => $hash(array_map(static function ($row) { return [(int) $row[0], round((float) $row[1], 4), round((float) $row[2], 4), (int) $row[3]]; }, $wpdb->get_results("SELECT id, question_marks, achive_mark, is_correct FROM {$p}ohmylms_quiz_attempts_answers ORDER BY id", ARRAY_N))),
        'gradebook' => [],
        'overrides' => '',
    ];
    if (class_exists('\OhMyLMS\Schools\Gradebook') && $wpdb->get_var("SHOW TABLES LIKE '{$p}ohmylms_gradebook_overrides'")) {
        $snapshot['overrides'] = $hash($wpdb->get_results("SELECT course_id, content_id, user_id, score, max_score FROM {$p}ohmylms_gradebook_overrides ORDER BY id", ARRAY_N));
        foreach ($wpdb->get_col($wpdb->prepare("SELECT ID FROM {$wpdb->posts} WHERE post_type=%s AND post_status<>'trash'", OHMYLMS_COURSE_CPT)) as $course) {
            $book = \OhMyLMS\Schools\Gradebook::read((int) $course);
            $rows = [];
            foreach (array_merge($book['students'], ...array_column($book['classes'], 'students')) as $student) {
                $rows[(int) $student['id']] = [round((float) ($student['total']['score'] ?? 0), 4), round((float) ($student['total']['max'] ?? 0), 4)];
            }
            ksort($rows);
            $snapshot['gradebook'][(int) $course] = $hash($rows);
        }
    }
    return $snapshot;
}

$report = ['site' => home_url('/'), 'environment' => $environment, 'database' => DB_NAME, 'ran_migration' => $run];
$report['inventory_before'] = \OhMyLMS\Assessment\Migration::inventory();
$before = rehearsal_snapshot();
if ($run) {
    \OhMyLMS\Assessment\Schema::install();
    $report['migration'] = \OhMyLMS\Assessment\Migration::run_all();
    $report['decimal_scores'] = get_option(\OhMyLMS\Assessment\Scoring::MIGRATED_OPTION) === '1';
    $report['inventory_after'] = \OhMyLMS\Assessment\Migration::inventory();
}
$after = rehearsal_snapshot();
$differences = [];
foreach ($before as $key => $value) {
    if ($value !== $after[$key]) { $differences[] = $key; }
}
$report['unchanged'] = !$differences;
$report['differences'] = $differences;
$report['orphans'] = array_intersect_key($report['inventory_before'], array_flip(['orphan_links', 'orphan_options', 'orphan_attempt_answers']));
echo wp_json_encode($report, JSON_PRETTY_PRINT) . "\n";
exit($differences ? 1 : 0);
