<?php
define('ABSPATH', __DIR__);
require dirname(__DIR__, 2) . '/includes/Curriculum/QuizKind.php';
function check($value, $message) { if (!$value) { throw new RuntimeException($message); } }
use OhMyLMS\Curriculum\QuizKind;

// Quiz kinds default to a plain quiz and map to unit or course scope.
check(QuizKind::normalize('') === 'quiz' && QuizKind::normalize('bogus') === 'quiz', 'Unknown kind falls back to quiz');
check(QuizKind::scope('unit_test') === 'unit' && QuizKind::scope('quiz') === 'unit', 'Quizzes and unit tests scope to a unit');
check(QuizKind::scope('course_challenge') === 'course', 'Course challenge scopes to the course');
check(QuizKind::scope('bogus') === 'unit', 'Unknown kind scopes like a plain quiz');
echo "quiz-kind-unit: ok\n";
