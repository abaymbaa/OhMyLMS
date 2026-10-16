<?php
/** Pure checks for lesson-group arrangement, advisory course-link rules and the course_links schema (no WordPress database). */
define('ABSPATH', __DIR__ . '/');
function __($text) { return $text; }
require dirname(__DIR__, 2) . '/vendor/autoload.php';
use OhMyLMS\Curriculum\CourseLinks;
use OhMyLMS\Curriculum\Schema;
use OhMyLMS\Learning\ProgramGroups;
$checks = 0;
function check($condition, $message) { global $checks; if (!$condition) { throw new RuntimeException($message); } $checks++; }

// ---- Outline grouping ----
$groups = [['id' => 'g1', 'chapter_id' => 10, 'title' => 'Intro'], ['id' => 'g2', 'chapter_id' => 10, 'title' => 'Empty'], ['id' => 'g3', 'chapter_id' => 20, 'title' => 'Other unit']];
$rows = [['name' => 'a', 'group_id' => 'g1'], ['name' => 'b', 'group_id' => ''], ['name' => 'c', 'group_id' => 'g1'], ['name' => 'd']];
$arranged = ProgramGroups::arrange($groups, $rows, 10);
check(count($arranged['groups']) === 1 && $arranged['groups'][0]['title'] === 'Intro', 'only populated groups of this unit are returned');
check(array_column($arranged['groups'][0]['items'], 'name') === ['a', 'c'], 'group items keep their order');
check(array_column($arranged['ungrouped'], 'name') === ['b', 'd'], 'ungrouped rows keep their order');
$plain = ProgramGroups::arrange([], $rows, 10);
check($plain['groups'] === [] && count($plain['ungrouped']) === 4, 'no groups: everything is ungrouped, as today');
$orphan = ProgramGroups::arrange([], [['name' => 'x', 'group_id' => 'gone']], 10);
check(count($orphan['ungrouped']) === 1, 'a row pointing at a missing group is still shown');
check(ProgramGroups::check_member($groups, 'g1', 10) === null && ProgramGroups::check_member($groups, '', 10) === null, 'members and ungrouped pass');
check(ProgramGroups::check_member($groups, 'g1', 20) === 'group_chapter' && ProgramGroups::check_member($groups, 'zz', 10) === 'group', 'wrong unit and unknown group fail');

// ---- Course link rules ----
check(CourseLinks::creates_cycle([], 1, 1), 'a self link is a cycle');
check(CourseLinks::creates_cycle([2 => [3], 3 => [1]], 1, 2), 'a direct-or-indirect loop is a cycle');
check(!CourseLinks::creates_cycle([2 => [3]], 1, 2), 'a chain is not a cycle');
check(!CourseLinks::creates_cycle([2 => [3], 4 => [3]], 1, 3), 'a shared target is not a cycle');
$ok = CourseLinks::validate(1, [['course_id' => 2, 'type' => 'subcourse'], ['course_id' => 3, 'type' => 'get_ready']], []);
check(is_array($ok) && array_column($ok, 'position') === [0, 1], 'valid links get positions');
check(CourseLinks::validate(1, [['course_id' => 1, 'type' => 'subcourse']], []) === 'self', 'no self link');
check(CourseLinks::validate(1, [['course_id' => 2, 'type' => 'friend']], []) === 'type', 'type is whitelisted');
check(CourseLinks::validate(1, [['course_id' => 2, 'type' => 'subcourse'], ['course_id' => 2, 'type' => 'subcourse']], []) === 'duplicate', 'same link twice is rejected');
check(is_array(CourseLinks::validate(1, [['course_id' => 2, 'type' => 'subcourse'], ['course_id' => 2, 'type' => 'get_ready']], [])), 'the same course may be linked in two different ways');
check(CourseLinks::validate(1, [['course_id' => 2, 'type' => 'prerequisite']], [2 => [1]]) === 'cycle', 'a prerequisite loop through another course is rejected');
check(CourseLinks::validate(1, [['course_id' => 2, 'type' => 'subcourse']], [2 => [1]]) === 'cycle', 'sub-course and prerequisite share one graph');
check(is_array(CourseLinks::validate(1, [['course_id' => 2, 'type' => 'get_ready']], [2 => [1]])), 'get-ready suggestions may point both ways');
check(is_array(CourseLinks::validate(1, [['course_id' => 2, 'type' => 'subcourse']], [1 => [9]])), "this course's own old edges are ignored while replacing");
$many = [];
for ($i = 2; $i < 54; $i++) { $many[] = ['course_id' => $i, 'type' => 'get_ready']; }
check(CourseLinks::validate(1, $many, []) === 'too_many', 'more than 50 links are rejected');
check(CourseLinks::validate(1, 'x', []) === 'invalid' && CourseLinks::validate(1, [['type' => 'subcourse']], []) === 'invalid', 'malformed input is rejected');

// ---- Schema ----
check(Schema::VERSION === '7', 'schema version is bumped for course_links');
$definitions = Schema::definitions();
check(isset($definitions['course_links']), 'course_links is defined');
foreach (['course_id bigint unsigned', 'related_course_id bigint unsigned', 'link_type varchar(20)', 'position int unsigned', 'created_by', 'created_at datetime', 'UNIQUE KEY course_link (course_id,related_course_id,link_type)', 'KEY related (related_course_id,link_type)'] as $part) {
    check(strpos($definitions['course_links'], $part) !== false, "course_links has $part");
}
echo "Course links checks passed: $checks\n";
