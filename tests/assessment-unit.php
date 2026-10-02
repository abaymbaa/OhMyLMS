<?php
/** Pure unit checks for assessment logic (no WordPress database). */
define('ABSPATH', __DIR__ . '/');
define('DAY_IN_SECONDS', 86400);
function __($text) { return $text; }
function get_option() { return false; }
require dirname(__DIR__) . '/vendor/autoload.php';
use OhMyLMS\Assessment\NumericAnswer as N;
use OhMyLMS\Assessment\Structured as S;
use OhMyLMS\Assessment\Scoring;
use OhMyLMS\Skills\Mastery;
$checks = 0;
function check($condition, $message) { global $checks; if (!$condition) { throw new RuntimeException($message); } $checks++; }

// Parsing: accepted forms and rejected input.
foreach (['3' => 3.0, '-2.50' => -2.5, '.5' => 0.5, '2,5' => 2.5, '1.2e3' => 1200.0, '3/4' => 0.75, '-1/2' => -0.5, '1 1/2' => 1.5, ' 7 ' => 7.0, "\u{2212}4" => -4.0] as $input => $expected) {
    check(abs(N::parse($input) - $expected) < 1e-12, "parse $input");
}
foreach (['', '   ', 'abc', '1,000.5', '1/0', '2x', '1e999', '3/4/5', 'NaN', 'INF', '0x1A', str_repeat('9', 70)] as $input) {
    check(N::parse($input) === null, "reject '$input'");
}
check(N::parse('3/4', false) === null, 'fractions can be disabled');
check(N::parse(['4.5']) === 4.5, 'array input');
// Tolerance.
check(N::matches(0.30000000000000004, 0.3), 'float noise absorbed');
check(!N::matches(0.31, 0.3), 'exact means exact');
check(N::matches(9.8, 10, 0.2) && !N::matches(9.7, 10, 0.2), 'absolute tolerance');
check(N::matches(103, 100, 0.05, 'relative') && !N::matches(106, 100, 0.05, 'relative'), 'relative tolerance');
check(!N::matches(null, 3) && !N::matches(3, 'x'), 'invalid values never match');
$grade = N::grade(['2/3'], ['answer' => 0.6667, 'tolerance' => 0.001]);
check($grade['correct'] && $grade['fraction'] === 1.0, 'fraction answer within tolerance');
check(!N::grade(['banana'], ['answer' => 1])['valid'], 'invalid input flagged, graded wrong');
check(N::grade(['-3'], ['answers' => [3, -3]])['correct'], 'alternative answers');

// Structured grading and weights.
$question = new class {
    public function get_settings() { return ['parts' => [
        ['id' => 'a', 'kind' => 'numerical', 'marks' => 2, 'answer' => 4, 'tolerance' => 0],
        ['id' => 'b', 'kind' => 'text', 'marks' => 1, 'accepted' => ['x = 2', 'x=2']],
        ['id' => 'c', 'kind' => 'written', 'marks' => 3],
    ]]; }
};
$weights = S::weights($question->get_settings());
check(abs($weights['a'] - 2 / 6) < 1e-12 && abs(array_sum($weights) - 1) < 1e-12, 'part weights follow marks');
$result = S::grade(['a' => '4', 'b' => '  X = 2 ', 'c' => 'Because...'], $question);
check($result['manual'] && $result['parts']['a'] === 1.0 && $result['parts']['b'] === 1.0 && $result['parts']['c'] === null && abs($result['fraction'] - 0.5) < 1e-12, 'structured auto parts + pending written');
$result = S::grade(['a' => '5', 'b' => 'x=2'], $question);
check(!$result['manual'] && $result['parts']['c'] === 0.0 && abs($result['fraction'] - 1 / 6) < 1e-12 && !$result['correct'], 'blank written part scores zero without review');
check(S::validate_settings(['parts' => [['id' => 'a', 'kind' => 'numerical', 'answer' => 'x']]]) !== true, 'non-numeric answer rejected');
check(S::validate_settings(['parts' => [['id' => 'a', 'kind' => 'text'], ['id' => 'a', 'kind' => 'written']]]) !== true, 'duplicate part IDs rejected');
check(S::validate_settings($question->get_settings()) === true, 'valid parts accepted');
$public = S::public_parts($question->get_settings());
check(!isset($public[0]['answer']) && !isset($public[1]['accepted']) && $public[2]['kind'] === 'written', 'learner view strips keys');

// Scoring policies.
check(Scoring::award(3, 0.5, Scoring::LEGACY) === 2.0 && Scoring::award(3, 0.5, Scoring::DECIMAL) === 1.5, 'legacy rounds, decimal keeps halves');
check(Scoring::award(2, 1.7, Scoring::DECIMAL) === 2.0 && Scoring::award(2, -1, Scoring::DECIMAL) === 0.0, 'fractions clamped');
check(Scoring::display(4.25) === '4.25' && Scoring::display(5.0) === '5', 'display trims zeros');

// Mastery rules: transparent thresholds.
$rules = ['window' => 8, 'proficient_min' => 3, 'proficient_families' => 2, 'proficient_accuracy' => 0.8, 'mastered_min' => 5, 'mastered_families' => 3, 'mastered_accuracy' => 0.85, 'review_gap_hours' => 24, 'review_after_days' => 14];
$row = function ($ok, $family, $at, $independent = 1, $first = 1) { return ['awarded' => $ok ? 1 : 0, 'available' => 1, 'independent' => $independent, 'first_try' => $first, 'family_id' => $family, 'question_id' => crc32($family), 'evidence_at' => gmdate('Y-m-d H:i:s', $at)]; };
$now = 2000000000;
check(Mastery::evaluate([], $rules, $now)['level'] === 'not-assessed', 'no evidence');
check(Mastery::evaluate([$row(0, 'a', $now)], $rules, $now)['level'] === 'developing', 'any evidence is developing');
$same_family = [$row(1, 'a', $now - 30), $row(1, 'a', $now - 20), $row(1, 'a', $now - 10)];
check(Mastery::evaluate($same_family, $rules, $now)['level'] === 'developing', 'one family is not proficiency');
$retries = [$row(1, 'a', $now - 30, 1, 0), $row(1, 'b', $now - 20, 1, 0), $row(1, 'c', $now - 10, 1, 0)];
check(Mastery::evaluate($retries, $rules, $now)['level'] === 'developing', 'repeats do not count');
$mixed = [$row(1, 'a', $now - 50), $row(0, 'b', $now - 40), $row(1, 'c', $now - 30), $row(1, 'd', $now - 20), $row(0, 'e', $now - 10)];
check(Mastery::evaluate($mixed, $rules, $now)['level'] === 'developing', '60% accuracy is not proficient');
// Mongolian (Cyrillic) answers: case and spacing ignored, letters preserved.
check(S::normalize_text('  Х = 2 ') === S::normalize_text('х=2'), 'Cyrillic case-insensitive match');
check(S::normalize_text('Өндөр') !== S::normalize_text('Ондор'), 'Cyrillic letters not folded');
echo "$checks assessment unit checks passed.\n";
