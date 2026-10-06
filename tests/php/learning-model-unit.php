<?php
/**
 * Pure unit checks for the Content Hub learning model (no WordPress database): where content is placed,
 * which course a learner opens it in, and what a program may contain.
 */
define('ABSPATH', __DIR__ . '/');
define('OHMYLMS_LESSON_CPT', 'ohmylms-lesson');
define('OHMYLMS_QUIZ_CPT', 'ohmylms-quiz');
define('OHMYLMS_COURSE_CPT', 'ohmylms-course');
function __($text) { return $text; }
function is_wp_error($value) { return $value instanceof WP_Error; }
class WP_Error { public function __construct(public $code = '', public $message = '', public $data = []) {} }
$GLOBALS['skills'] = [11 => true, 12 => true, 13 => true];
$GLOBALS['post_types'] = [101 => 'ohmylms-lesson', 102 => 'ohmylms-lesson', 201 => 'ohmylms-quiz', 202 => 'ohmylms-quiz', 301 => 'ohmylms-assignment'];
$GLOBALS['can_edit'] = true;
function term_exists($id) { return isset($GLOBALS['skills'][$id]); }
function get_post_type($id) { return $GLOBALS['post_types'][$id] ?? false; }
function current_user_can() { return $GLOBALS['can_edit']; }
function rest_authorization_required_code() { return 403; }
function is_user_logged_in() { return true; }
function wp_generate_uuid4() { static $n = 0; return sprintf('00000000-0000-4000-8000-%012d', ++$n); }
$wpdb = new class {
    public $prefix = 'wp_';
    public function prepare($sql) { return $sql; }
    public function get_col() { return [7001, 7002]; } // chapters of the course under test
};
require dirname(__DIR__, 2) . '/vendor/autoload.php';
use OhMyLMS\Learning\CourseProgram;
use OhMyLMS\Learning\Placements;
$checks = 0;
function check($condition, $message) { global $checks; if (!$condition) { throw new RuntimeException($message); } $checks++; }

// ---- Placement index: which courses place which content ----
$index = Placements::index_from([
    [10, json_encode(['items' => [['type' => 'lesson', 'content_id' => 101], ['type' => 'quiz', 'content_id' => 201], ['type' => 'practice', 'content_id' => 11]]])],
    [20, ['items' => [['type' => 'quiz', 'content_id' => 201], ['type' => 'assignment', 'content_id' => 301], ['type' => 'lesson', 'content_id' => 101]]]],
    [30, 'not json'],
]);
check($index[201] === [10, 20], 'a quiz placed in two courses lists both, ordered');
check($index[101] === [10, 20] && $index[301] === [20], 'lessons and assignments are indexed too');
check(!isset($index[11]), 'practice items reference skills, not content');
check(Placements::index_from([]) === [], 'no programs, no placements');
check(Placements::index_from([[5, ['items' => [['type' => 'quiz', 'content_id' => 9], ['type' => 'quiz', 'content_id' => 9]]]]])[9] === [5], 'a repeated placement in one course counts once');

// ---- Which course a learner opens content in ----
$enrolled = static function (array $in) { return static function ($course) use ($in) { return in_array($course, $in, true); }; };
check(Placements::choose([5, 10, 20], $enrolled([5, 10])) === 5, 'the home course stays the default when the learner is enrolled in it');
check(Placements::choose([5, 10, 20], $enrolled([20])) === 20, 'a learner enrolled only in a placing course opens it there');
check(Placements::choose([5, 10, 20], $enrolled([10, 20])) === 10, 'the first enrolled candidate wins');
check(Placements::choose([5, 10], $enrolled([])) === 5, 'with no enrollment the first candidate (home) is used');
check(Placements::choose([0, 10, '10'], $enrolled([])) === 10, 'empty and duplicate candidates are dropped');
check(Placements::choose([], $enrolled([1])) === 0, 'no candidates, no course');

// ---- Program rules ----
$base = static function (array $over = []) {
    return array_replace_recursive(['mode' => 'skill-based', 'recognize_prior' => true, 'bank_ids' => [], 'outcomes' => [
        ['term_id' => 11, 'target' => 'proficient', 'required' => true, 'chapter_id' => 7001],
        ['term_id' => 12, 'target' => 'proficient', 'required' => true, 'chapter_id' => 7002],
        ['term_id' => 13, 'target' => 'mastered', 'required' => false],
    ], 'items' => []], $over);
};
$normalize = static function (array $data) { return CourseProgram::normalize(55, $data); };

$program = $normalize($base());
check(!is_wp_error($program), 'a skill-based program with chapters normalizes');
check(array_column($program['outcomes'], 'chapter_id') === [7001, 7002] && !isset($program['outcomes'][2]['chapter_id']), 'skills keep their chapter and may stay unplaced');
check(array_column($program['outcomes'], 'term_id') === [11, 12, 13], 'skill order within the catalog is preserved');

$bad = $base(); $bad['outcomes'][0]['chapter_id'] = 9999;
check(is_wp_error($normalize($bad)), 'a chapter from another course is rejected');

$withItems = $base(['items' => [
    ['type' => 'lesson', 'content_id' => 101, 'chapter_id' => 7001, 'required' => false],
    ['type' => 'lesson', 'content_id' => 102, 'skill_ids' => [11, '12', 11], 'required' => true],
    ['type' => 'quiz', 'content_id' => 201, 'chapter_id' => 7002, 'required' => true, 'pass_percent' => 70],
    ['type' => 'assignment', 'content_id' => 301, 'skill_ids' => [13], 'required' => false],
]]);
$items = $normalize($withItems);
check(!is_wp_error($items), 'chapter and skill-scoped attachments normalize: ' . (is_wp_error($items) ? $items->message : ''));
check(!isset($items['items'][0]['skill_ids']) && $items['items'][0]['chapter_id'] === 7001, 'a chapter attachment has no skill scope');
check($items['items'][1]['skill_ids'] === [11, 12], 'a skill scope is de-duplicated and cast to integers');
check($items['items'][3]['skill_ids'] === [13], 'assignments can be scoped to skills');
check($items['items'][2]['pass_percent'] === 70.0, 'quiz checkpoints keep their pass percentage');

$outside = $base(['items' => [['type' => 'lesson', 'content_id' => 101, 'skill_ids' => [99]]]]);
check(is_wp_error($normalize($outside)), 'content cannot be attached to a skill that is not in the program');

// A quiz or assignment that belongs to another course (or none) can be placed: assessments are reusable.
$reuse = $normalize($base(['items' => [['type' => 'quiz', 'content_id' => 202, 'required' => true, 'pass_percent' => 80]]]));
check(!is_wp_error($reuse), 'a quiz from outside this course can be placed');

$twice = $base(['items' => [['type' => 'lesson', 'content_id' => 101], ['type' => 'lesson', 'content_id' => 101, 'skill_ids' => [11]]]]);
check(is_wp_error($normalize($twice)), 'a resource is placed only once in a course');

$GLOBALS['can_edit'] = false;
$denied = $normalize($base(['items' => [['type' => 'lesson', 'content_id' => 101]]]));
check(is_wp_error($denied) && ($denied->data['status'] ?? 0) === 403, 'content the author cannot edit cannot be placed');
$GLOBALS['can_edit'] = true;
$wrongType = $base(['items' => [['type' => 'lesson', 'content_id' => 201]]]);
check(is_wp_error($normalize($wrongType)), 'a quiz cannot be placed as a lesson');
echo "Learning model checks passed: $checks\n";
