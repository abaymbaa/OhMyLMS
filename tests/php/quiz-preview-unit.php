<?php
/**
 * Standalone test for quiz preview mode in OhMyLMS\Quiz\Submission: an editor who is not enrolled
 * can retry freely and leaves no record (no attempt, completion, evidence or outbound events),
 * while enrolled learners keep being recorded exactly as before. No database or WordPress runtime.
 */
namespace OhMyLMS\Data {
    final class Student {
        public function __construct(private $id) {}
        public function maybe_enrolled($course_id) { return in_array([$this->id, $course_id], $GLOBALS['enrollments'], true); }
        public function is_course_completed($course_id) { return false; }
        public function complete_lesson($quiz_id, $course_id) { $GLOBALS['completed'][] = [$this->id, $quiz_id]; }
        public function get_over_all_completion_rate($course_id) { return 0; }
    }
}
namespace OhMyLMS\Assessment {
    final class Engine { public static function versioned() { return false; } }
    final class Schema {
        public static function ready() { return true; }
        public static function table($name) { return 'wp_ohmylms_' . $name; }
    }
}
namespace {
    define('ABSPATH', __DIR__); define('HOUR_IN_SECONDS', 3600);
    const ADMIN_UNENROLLED = 1, ADMIN_ENROLLED = 2, STUDENT_UNENROLLED = 3, STUDENT_ENROLLED = 4;
    const QUIZ = 20, COURSE = 50, ATTEMPT = 9;
    $current = ADMIN_UNENROLLED; $enrollments = [[ADMIN_ENROLLED, COURSE], [STUDENT_ENROLLED, COURSE]];
    $editors = [ADMIN_UNENROLLED, ADMIN_ENROLLED]; $actions = []; $completed = []; $transients = []; $take = 1; $used = 3;

    final class WP_Error { public function __construct(public $code = '', public $message = '', public $data = []) {} public function get_error_code() { return $this->code; } }
    function is_wp_error($value) { return $value instanceof WP_Error; }
    function get_post_type($id) { return $id === QUIZ ? 'ohmylms-quiz' : 'post'; }
    function ohmylms_get_course_by_content_id($id) { return $id === QUIZ ? COURSE : 0; }
    function user_can($user, $cap, $id = 0) { return in_array($user, $GLOBALS['editors'], true); }
    function current_user_can($cap, $id = 0) { return user_can($GLOBALS['current'], $cap, $id); }
    function apply_filters($hook, $value, ...$args) { return $value; }
    function do_action($hook, ...$args) { $GLOBALS['actions'][] = $hook; }
    function current_time($type) { return '2026-01-01 00:00:00'; }
    function set_transient($key, $value, $ttl) { $GLOBALS['transients'][$key] = $value; }
    function get_transient($key) { return $GLOBALS['transients'][$key] ?? false; }
    function delete_transient($key) { unset($GLOBALS['transients'][$key]); }
    function ohmylms_get_quiz($id) {
        return new class {
            public function get_quiz_attempt($student) { return null; }
            public function count_total_attempt($student, $course) { return $GLOBALS['used']; }
            public function get_take_attempts() { return $GLOBALS['take']; }
            public function get_questions() { return []; }
        };
    }
    $wpdb = new class {
        public $prefix = 'wp_'; public $insert_id = 0; public $queries = []; public $deleted = []; public $inserted = [];
        public function prepare($query, ...$args) { return $query; }
        public function query($sql) { $this->queries[] = $sql; return true; }
        public function get_var($sql) { return '1'; }
        public function insert($table, $row) { $this->inserted[] = $table; $this->insert_id = 42; return 1; }
        public function delete($table, $where) { $this->deleted[] = [$table, $where]; return 1; }
    };

    require __DIR__ . '/../../includes/Utility/Transaction.php';
    require __DIR__ . '/../../includes/Quiz/Submission.php';
    use OhMyLMS\Quiz\Submission;

    function check($value, $message) { if (!$value) { throw new \RuntimeException($message); } }
    function reset_state() { $GLOBALS['actions'] = []; $GLOBALS['completed'] = []; $GLOBALS['transients'] = []; $GLOBALS['wpdb']->deleted = []; $GLOBALS['wpdb']->inserted = []; $GLOBALS['wpdb']->queries = []; }
    function commit($student, $reason = 'submit') {
        $graded = ['rows' => [['question_marks' => 5, 'achive_mark' => 5, 'is_correct' => 1], ['question_marks' => 5, 'achive_mark' => 0, 'is_correct' => 0]],
            'total' => 5, 'manual' => false, 'status' => 'completed', 'reason' => $reason, 'passing' => 5, 'revision_id' => 3];
        $attempt = ['id' => ATTEMPT, 'quiz_id' => QUIZ, 'student_id' => $student];
        return (new \ReflectionMethod(Submission::class, 'after_commit'))->invoke(null, $attempt, COURSE, $graded);
    }
    function start($student) { $GLOBALS['current'] = $student; return Submission::start(QUIZ, $student); }

    // Who counts as previewing.
    check(Submission::is_preview(QUIZ, ADMIN_UNENROLLED) === true, 'Unenrolled admin is not previewing');
    check(Submission::is_preview(QUIZ, ADMIN_ENROLLED) === false, 'Enrolled admin must be recorded as a real learner');
    check(Submission::is_preview(QUIZ, STUDENT_UNENROLLED) === false, 'Unenrolled non-editor treated as previewing');
    check(Submission::is_preview(QUIZ, STUDENT_ENROLLED) === false, 'Enrolled student treated as previewing');
    check(Submission::is_preview(QUIZ, 0) === false, 'Guest treated as previewing');
    check(Submission::is_preview(99, ADMIN_UNENROLLED) === false, 'Non-quiz content treated as previewing');

    // A previewed submission records nothing and tells nobody, but still shows the score.
    reset_state(); commit(ADMIN_UNENROLLED);
    check($actions === [], 'Preview fired events: ' . implode(',', $actions));
    check($completed === [], 'Preview completed the lesson');
    $result = Submission::preview_result(QUIZ, ADMIN_UNENROLLED);
    check($result && $result['total'] === 5.0 && $result['max'] === 10.0 && $result['passing'] === 5.0 && $result['questions'] === 2 && $result['correct'] === 1 && $result['status'] === 'completed', 'Preview result summary is wrong');
    $erased = array_map(fn($d) => $d[0], $wpdb->deleted);
    foreach (['wp_ohmylms_quiz_attempts_answers', 'wp_ohmylms_attempt_context', 'wp_ohmylms_attempt_items', 'wp_ohmylms_response_drafts', 'wp_ohmylms_response_events', 'wp_ohmylms_quiz_attempts'] as $table) {
        check(in_array($table, $erased, true), "Preview left rows in $table");
    }
    check(end($wpdb->deleted) === ['wp_ohmylms_quiz_attempts', ['id' => ATTEMPT]], 'The attempt row itself was not erased last');
    check($wpdb->queries === ['START TRANSACTION', 'COMMIT'], 'Cleanup was not atomic');
    check(Submission::preview_result(QUIZ, STUDENT_ENROLLED) === null, 'Preview result leaked to another user');

    // Leaving a previewed quiz erases the attempt and any earlier result.
    reset_state(); commit(ADMIN_UNENROLLED); commit(ADMIN_UNENROLLED, 'exit');
    check(Submission::preview_result(QUIZ, ADMIN_UNENROLLED) === null, 'Exiting a preview kept a result');
    check($actions === [], 'Exiting a preview fired events');

    // A real learner is recorded exactly as before: completion, events, and no erasing.
    foreach ([STUDENT_ENROLLED, ADMIN_ENROLLED] as $learner) {
        reset_state(); commit($learner);
        check($completed === [[$learner, QUIZ]], 'Passing learner was not marked complete');
        foreach (['ohmylms_answer_graded', 'ohmylms_quiz_result', 'ohmylms_quiz_submission', 'ohmylms_attempt_submitted', 'ohmylms_attempt_graded', 'ohmylms_lesson_completed'] as $hook) {
            check(in_array($hook, $actions, true), "Learner submission no longer fires $hook");
        }
        check($wpdb->deleted === [] && $transients === [], 'Learner attempt was erased');
    }

    // Starting: previews ignore the attempt limit and announce nothing; learners keep both.
    $take = 1; $used = 3;
    reset_state(); $id = start(ADMIN_UNENROLLED);
    check($id === 42, 'Preview was blocked by the attempt limit');
    check(!in_array('ohmylms_attempt_started', $actions, true), 'Preview announced an attempt start');
    reset_state(); $blocked = start(STUDENT_ENROLLED);
    check($blocked instanceof WP_Error && $blocked->get_error_code() === 'quiz_attempt_limit', 'Learner attempt limit no longer enforced');
    check($wpdb->inserted === [], 'A blocked learner attempt was still written');
    $take = 5; reset_state(); $id = start(STUDENT_ENROLLED);
    check($id === 42 && $actions === ['ohmylms_attempt_started'], 'Learner start no longer announced');

    echo "Quiz preview: unenrolled editors retry freely and leave no record; enrolled learners are still recorded.\n";
}
