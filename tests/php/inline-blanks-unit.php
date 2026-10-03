<?php
define('ABSPATH', __DIR__);
require dirname(__DIR__, 2) . '/includes/Assessment/InlineBlanks.php';
require dirname(__DIR__, 2) . '/includes/Assessment/QuestionSnapshot.php';
require dirname(__DIR__, 2) . '/includes/Extensions/QuestionTypes.php';
require dirname(__DIR__, 2) . '/includes/Extensions/Registry.php';
require dirname(__DIR__, 2) . '/includes/QuestionBank/MediaFreezer.php';
function check($value, $message) { if (!$value) { throw new RuntimeException($message); } }
function wp_kses_post($text) { return strip_tags($text, '<b><em>'); }
function esc_attr($text) { return htmlspecialchars((string) $text, ENT_QUOTES); }
function __($text, $domain) { return $text; }
use OhMyLMS\Assessment\InlineBlanks as B;
use OhMyLMS\Extensions\QuestionTypes as Q;
$parsed = B::parse('The capital is {Paris}, and {東京} is in {Japan}.');
check($parsed['answers'] === ['Paris', '東京', 'Japan'], 'Ordered answers');
check(array_column($parsed['parts'], 'length') === [5, 2, 5], 'Unicode character widths');
check(B::parse('{} { } incomplete {')['answers'] === [], 'Empty and unmatched braces are literal');
check(B::parse('{A&amp;B}')['answers'] === ['A&B'], 'HTML entities count as characters');
$view = B::public_view(['id' => 7, 'name' => 'The capital is {Paris}, in {France}.', 'settings' => ['type' => 'fill-in-the-blank']]);
check(strpos(json_encode($view), 'Paris') === false && strpos(json_encode($view), 'France') === false, 'No answers in public view');
$html = B::render($view, ['id' => 9]);
check(substr_count($html, '<input') === 2, 'One input per blank');
check(strpos($html, 'size="5"') !== false, 'Five character input');
check(strpos($html, 'font:inherit;') !== false, 'Blank font matches surrounding question');
check(strpos($html, 'attempt[9][quiz_question][7][]') !== false, 'Ordered form submission');
check(strpos($html, 'The capital is ') === 0 && substr($html, -1) === '.', 'Surrounding text preserved');
$question = new class {
    function get_name() { return 'The capital is {Paris}, in {France}.'; }
    function get_questions() { return [['answer' => 'old answer', 'is_correct' => 1]]; }
};
check(Q::grade_builtin('fill-in-the-blank', ['Paris', 'France'], $question)['correct'], 'All blanks correct');
check(Q::grade_builtin('fill-in-the-blank', ['Paris', ''], $question)['fraction'] === 0.5, 'Independent partial credit');
check(!B::complete($question, ['Paris', '']), 'Required blanks reject empty positions');
check(!B::complete($question, ['Paris']), 'Required blanks reject missing positions');
check(B::complete($question, ['Paris', 'France']), 'All required blanks supplied');
check(!isset(Q::grade_builtin('fill-in-the-blank', ['Paris', 'France'], $question)['parts']), 'Do not use structured-question grade event contract');
check(Q::grade_builtin('fill-in-the-blank', ['France', 'Paris'], $question)['fraction'] === 0, 'Blank order matters');
check(!Q::grade_builtin('fill-in-the-blank', ['paris', 'France'], $question)['correct'], 'Case-sensitive answers');
check(!Q::grade_builtin('fill-in-the-blank', ['Paris', 'France', 'extra'], $question)['correct'], 'Reject extra answers');
$legacy = new class {
    function get_name() { return 'Legacy question'; }
    function get_questions() { return [['answer' => 'old answer', 'is_correct' => 1]]; }
};
check(Q::grade_builtin('fill-in-the-blank', ['old answer'], $legacy)['correct'], 'Legacy grading preserved');
$snapshot = new \OhMyLMS\Assessment\QuestionSnapshot([
    'id' => 1, 'question_id' => 7, 'question_uuid' => 'test', 'version_no' => 1,
    'type' => 'fill-in-the-blank', 'title' => 'The capital is {Paris}.', 'body' => '',
    'settings' => ['type' => 'fill-in-the-blank'], 'options' => [], 'media' => [],
]);
Q::register_defaults();
$public = $snapshot->student_view();
check(strpos(json_encode($public), 'Paris') === false, 'Frozen delivery strips expected answer from title');
check($public['inline_blanks'][1]['length'] === 5, 'Frozen delivery preserves blank width');
check(Q::grade_builtin('fill-in-the-blank', ['Paris'], $snapshot)['correct'], 'Frozen title remains authoritative for grading');
$insensitive = new \OhMyLMS\Assessment\QuestionSnapshot([
    'id' => 2, 'question_id' => 7, 'question_uuid' => 'test', 'version_no' => 2,
    'type' => 'fill-in-the-blank', 'title' => '{Paris} and {Өдөр}', 'body' => '',
    'settings' => ['type' => 'fill-in-the-blank', 'case_sensitive' => false], 'options' => [], 'media' => [],
]);
check(Q::grade_builtin('fill-in-the-blank', ['pARIS', 'өдөр'], $insensitive)['correct'], 'Case-insensitive grading supports Latin and Mongolian');
check(!Q::grade_builtin('fill-in-the-blank', ['Paris extra', 'өдөр'], $insensitive)['correct'], 'Ignoring case still requires the complete answer');
check(!Q::grade_builtin('fill-in-the-blank', ['paris'], $snapshot)['correct'], 'Existing frozen versions remain case-sensitive');
$legacyInsensitive = new class {
    function get_name() { return 'Legacy question'; }
    function get_settings() { return ['case_sensitive' => false]; }
    function get_questions() { return [['answer' => 'Paris', 'is_correct' => 1]]; }
};
check(Q::grade_builtin('fill-in-the-blank', ['PARIS'], $legacyInsensitive)['correct'], 'Legacy blanks honor case setting');
check(!B::matches('axb', 'a.b', $legacyInsensitive), 'Expected answers are literal, not regex');
echo "Inline blank parsing, rendering, privacy and grading checks passed.\n";
