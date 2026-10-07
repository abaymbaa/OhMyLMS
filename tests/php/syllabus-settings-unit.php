<?php
define('ABSPATH', __DIR__ . '/');
function __($text) { return $text; }
function sanitize_text_field($text) { return trim(strip_tags($text)); }
class WP_Error { public function __construct(...$args) {} }
require dirname(__DIR__, 2) . '/vendor/autoload.php';
use OhMyLMS\Curriculum\SyllabusSettings;
use OhMyLMS\Learning\CourseProgram;
function verify($value, $message) { if (!$value) { throw new RuntimeException($message); } }
$settings = SyllabusSettings::clean(['grade' => ' Grade 9 ', 'subject' => 'Математик', 'language' => 'Монгол', 'categories' => ['Core', 'Extended', 'Core', ' Олимпиад ', ''], 'price' => 100]);
verify($settings === ['grade' => 'Grade 9', 'subject' => 'Математик', 'language' => 'Монгол', 'categories' => ['Core', 'Extended', 'Олимпиад']], 'grade profiles retain custom categories and reject unrelated course fields');
verify(SyllabusSettings::clean(['categories' => []]) === ['categories' => []], 'category suggestions can be cleared without modifying skills');
verify(SyllabusSettings::clean(['grade' => str_repeat('x', 101)]) instanceof WP_Error, 'profile text has a length limit');
verify(SyllabusSettings::clean(['categories' => 'Core']) instanceof WP_Error, 'categories must be a list');
verify(SyllabusSettings::clean(['categories' => [str_repeat('x', 61)]]) instanceof WP_Error, 'category length is validated');
$program = ['mode' => 'skill-based', 'items' => [], 'outcomes' => [['term_id' => 1, 'required' => false]]];
verify(CourseProgram::completion_readiness($program, true) === [], 'grade skill collections need no course completion requirement');
verify(count(CourseProgram::completion_readiness($program, false)) === 2, 'ordinary courses retain completion checks');
$program['outcomes'] = [];
verify(count(CourseProgram::completion_readiness($program, true)) === 1, 'an empty syllabus cannot be published');
echo "syllabus settings unit checks passed: 8\n";
