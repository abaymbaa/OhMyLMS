<?php
/**
 * Syllabuses: any curriculum item can be one, with skill groups and skills inside it, and a CSV import.
 * Disposable WordPress database only: configured through OHMYLMS_TEST_CREDENTIALS.
 * Names are made up to illustrate the shapes of real syllabuses; they are not syllabus definitions.
 */
if (PHP_SAPI !== 'cli') { exit; }
define('WP_DISABLE_FATAL_ERROR_HANDLER', true);
$config = json_decode(file_get_contents(getenv('OHMYLMS_TEST_CREDENTIALS')), true);
$_SERVER['HTTP_HOST'] = $_SERVER['HTTP_HOST'] ?? '127.0.0.1:8099';
require $config['site'] . '/wp-load.php';
if (!defined('OHMYLMS_TEST_SITE') || DB_NAME !== 'ohmylms_source_test') { throw new RuntimeException('Requires disposable test site'); }
require_once ABSPATH . 'wp-admin/includes/user.php';

use OhMyLMS\Assessment\Schema as AssessmentSchema;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Links;
use OhMyLMS\Curriculum\Schema;
use OhMyLMS\Curriculum\Syllabus;
use OhMyLMS\Learning\Schema as LearningSchema;
use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\Tracks\Progress;

$checks = 0; $users = []; $item_ids = []; $stray_terms = [];
$admin = get_user_by('login', $config['username'])->ID;
$tag = wp_generate_password(5, false, false);
function ok($condition, $message) { global $checks; if (!$condition) { throw new RuntimeException($message); } $checks++; }
function api($method, $path, $body = [], $query = []) {
    $request = new WP_REST_Request($method, '/ohmylms/v1/' . $path);
    if ($query) { $request->set_query_params($query); }
    if ($body) { $request->set_header('Content-Type', 'application/json'); $request->set_body(wp_json_encode($body)); }
    return rest_do_request($request);
}
function code($response) { return $response->get_data()['code'] ?? ''; }
function item($name, $parent = 0, $type = 'custom', array $extra = []) {
    global $item_ids;
    $response = api('POST', 'curriculum/items', array_merge(['name' => $name, 'item_type' => $type, 'parent_id' => $parent], $extra));
    ok($response->get_status() === 201, 'Curriculum create failed: ' . wp_json_encode($response->get_data()));
    $id = (int) $response->get_data()['item']['id']; $item_ids[] = $id; return $id;
}
function count_rows($table) { global $wpdb; return (int) $wpdb->get_var("SELECT COUNT(*) FROM $table"); }
function outline($id) { $response = api('GET', "curriculum/items/$id/syllabus"); ok($response->get_status() === 200, 'Outline failed: ' . wp_json_encode($response->get_data())); return $response->get_data(); }
function content_named($outline, $name) { foreach ($outline['contents'] as $content) { if ($content['name'] === $name) { return $content; } } return null; }
function group_in($outline, $code) { foreach ($outline['contents'] as $content) { foreach ($content['groups'] as $group) { if ($group['code'] === $code || $group['name'] === $code) { return $group; } } } return null; }
function skill_in($outline, $code) { foreach ($outline['contents'] as $content) { foreach ($content['groups'] as $group) { foreach ($group['skills'] as $skill) { if ($skill['code'] === $code) { return $skill + ['group_id' => $group['id']]; } } } } return null; }
function import_rows($id, array $rows, $dry = false) { return api('POST', "curriculum/items/$id/syllabus/import", ['rows' => $rows, 'dry_run' => $dry]); }
function snapshot_counts() {
    global $wpdb;
    return [count_rows(Items::table()), count_rows(Syllabus::groups_table()), count_rows(Syllabus::placements_table()), (int) wp_count_terms(['taxonomy' => Taxonomy::NAME, 'hide_empty' => false])];
}

try {
    wp_set_current_user($admin);
    global $wpdb;
    Schema::install(); ok(Schema::ready(), 'Curriculum tables unavailable');
    AssessmentSchema::install(); LearningSchema::install();
    foreach (array_keys(Schema::definitions()) as $name) { ok($wpdb->get_var($wpdb->prepare('SHOW TABLES LIKE %s', Schema::table($name))) === Schema::table($name), "Table $name missing"); }
    foreach (['is_syllabus', 'skill_root_id'] as $column) { ok((bool) $wpdb->get_var($wpdb->prepare('SHOW COLUMNS FROM ' . Items::table() . ' LIKE %s', $column)), "Column $column missing"); }
    $start = snapshot_counts();

    // ---- Any item can become a syllabus ----
    $cambridge = item('Cambridge ' . $tag, 0, 'framework');
    $igcse = item('IGCSE', $cambridge, 'level');
    $plain = item('Mathematics 0580 ' . $tag, $igcse, 'subject');
    $row = static function ($id) { foreach (api('GET', 'curriculum/tree')->get_data()['items'] as $entry) { if ($entry['id'] === $id) { return $entry; } } return null; };
    ok($row($plain)['is_syllabus'] === false && !isset($row($plain)['syllabus']), 'a new item is an ordinary item with no syllabus counts');
    ok(api('GET', "curriculum/items/$plain/syllabus")->get_status() === 400 && code(api('GET', "curriculum/items/$plain/syllabus")) === 'ohmylms_syllabus_invalid', 'an ordinary item has no syllabus outline');
    $flagged = api('PUT', "curriculum/items/$plain", ['is_syllabus' => true]);
    ok($flagged->get_status() === 200 && $flagged->get_data()['item']['is_syllabus'] === true && $flagged->get_data()['item']['item_type'] === 'subject', 'any item becomes a syllabus and keeps its own type');
    ok($row($plain)['syllabus'] === ['groups' => 0, 'skills' => 0], 'a syllabus reports its group and skill counts');
    $typed = item('Typed syllabus ' . $tag, $igcse, 'syllabus');
    ok($row($typed)['is_syllabus'] === true, 'typing an item "syllabus" makes it one');
    $retyped = api('PUT', "curriculum/items/$typed", ['item_type' => 'unit', 'is_syllabus' => false]);
    ok($retyped->get_data()['item']['is_syllabus'] === false, 'a syllabus with no groups can be turned back into an ordinary item');

    // ---- Skill groups ----
    $syllabus = $plain;
    $other_group_owner = item('Another syllabus ' . $tag, $igcse, 'syllabus');
    $topic = item('1 Number', $syllabus, 'topic');
    $bad = api('POST', "curriculum/items/$syllabus/syllabus/groups", ['name' => '']);
    ok($bad->get_status() === 400, 'a skill group needs a name or a code');
    $elsewhere = item('Elsewhere ' . $tag, $cambridge, 'topic');
    ok(api('POST', "curriculum/items/$syllabus/syllabus/groups", ['name' => 'Lost', 'item_id' => $elsewhere])->get_status() === 400, 'a group cannot sit outside the syllabus');
    $made = api('POST', "curriculum/items/$syllabus/syllabus/groups", ['name' => 'Types of number', 'code' => 'C1.1', 'item_id' => $topic]);
    ok($made->get_status() === 201 && ($g1 = (int) $made->get_data()['group_id']) > 0, 'a group is added under a content item');
    $g2 = (int) api('POST', "curriculum/items/$syllabus/syllabus/groups", ['code' => 'C1.2', 'item_id' => $topic])->get_data()['group_id'];
    $g3 = (int) api('POST', "curriculum/items/$syllabus/syllabus/groups", ['name' => 'Syllabus-level group'])->get_data()['group_id'];
    $o = outline($syllabus);
    ok(group_in($o, 'C1.2')['name'] === 'C1.2', 'a group given only a code is named by its code');
    ok(array_column(content_named($o, '1 Number')['groups'], 'id') === [$g1, $g2] && array_column($o['contents'][0]['groups'], 'id') === [$g3], 'groups sit under the item they were added to');
    ok(api('POST', "curriculum/items/$syllabus/syllabus/groups/$g2/move", ['item_id' => $topic, 'position' => 0])->get_status() === 200 && array_column(content_named(outline($syllabus), '1 Number')['groups'], 'id') === [$g2, $g1], 'a group moves to another position');
    api('POST', "curriculum/items/$syllabus/syllabus/groups/$g2/move", ['item_id' => $topic, 'position' => 1]);
    ok(api('PUT', "curriculum/items/$syllabus/syllabus/groups/$g2", ['code' => 'C1.2x'])->get_status() === 200 && group_in(outline($syllabus), 'C1.2x')['name'] === 'C1.2', 'a code-only edit keeps the name');
    api('PUT', "curriculum/items/$syllabus/syllabus/groups/$g2", ['code' => 'C1.2', 'name' => 'Sets']);
    ok(api('PUT', "curriculum/items/$syllabus/syllabus/groups/$g2", ['name' => ''])->get_status() === 400, 'a group cannot lose its name');
    ok(api('PUT', "curriculum/items/$other_group_owner/syllabus/groups/$g2", ['name' => 'Stolen'])->get_status() === 404 && group_in(outline($syllabus), 'C1.2')['name'] === 'Sets', 'a group can only be edited through its own syllabus');
    $no_flag = api('PUT', "curriculum/items/$syllabus", ['is_syllabus' => false]);
    ok($no_flag->get_status() === 409 && code($no_flag) === 'ohmylms_syllabus_has_groups', 'a syllabus with skill groups cannot be switched off');

    // ---- Skills ----
    $made = api('POST', "curriculum/items/$syllabus/syllabus/groups/$g1/skills", ['name' => 'Identify natural numbers', 'code' => 'C1.1.1', 'description' => 'e.g. six billion']);
    ok($made->get_status() === 201 && ($t1 = (int) $made->get_data()['skill']['term_id']) > 0, 'a skill is created in a group');
    $o = outline($syllabus);
    ok($o['root_skill'] > 0 && get_term($o['root_skill'], Taxonomy::NAME)->name !== '' && (int) get_term($t1, Taxonomy::NAME)->parent === $o['root_skill'], 'skills are created under one root library skill for the syllabus');
    ok(skill_in($o, 'C1.1.1')['name'] === 'Identify natural numbers' && skill_in($o, 'C1.1.1')['description'] === 'e.g. six billion', 'the skill is in the outline with its code and notes');
    ok(get_term_meta($t1, '_ohmylms_skill_code', true) === 'C1.1.1' && Taxonomy::uuid($t1) !== '', 'the library skill carries the code and a UUID');
    $t2 = (int) api('POST', "curriculum/items/$syllabus/syllabus/groups/$g1/skills", ['name' => 'Identify prime numbers', 'code' => 'C1.1.2'])->get_data()['skill']['term_id'];
    $dup = api('POST', "curriculum/items/$syllabus/syllabus/groups/$g2/skills", ['name' => 'Another', 'code' => 'c1.1.1']);
    ok($dup->get_status() === 409 && code($dup) === 'ohmylms_syllabus_code_taken', 'a skill code is unique within the syllabus (ignoring case)');
    $same_name = api('POST', "curriculum/items/$syllabus/syllabus/groups/$g2/skills", ['name' => 'Identify natural numbers', 'code' => 'C1.2.1']);
    ok($same_name->get_status() === 201 && $same_name->get_data()['skill']['name'] === 'Identify natural numbers' && (int) $same_name->get_data()['skill']['term_id'] !== $t1, 'two skills may share their text in a syllabus: the name is kept exactly and the codes tell them apart');
    $t3 = (int) $same_name->get_data()['skill']['term_id'];
    ok(skill_in(outline($syllabus), 'C1.2.1')['name'] === skill_in(outline($syllabus), 'C1.1.1')['name'] && skill_in(outline($syllabus), 'C1.2.1')['term_id'] === $t3, 'both skills read back with their own code');
    ok(api('POST', "curriculum/items/$syllabus/syllabus/groups/$g2/skills", ['name' => ''])->get_status() === 400, 'a skill needs a name');
    ok(api('POST', "curriculum/items/$syllabus/syllabus/groups/$g2/skills", ['name' => 'x', 'code' => str_repeat('c', 41)])->get_status() === 400, 'a skill code has a length limit');
    $maths_skill = (int) api('POST', "curriculum/items/$syllabus/syllabus/groups/$g2/skills", ['name' => 'Use a > 0 and D < 0, x<y & "quotes"', 'code' => 'C1.2.2'])->get_data()['skill']['term_id'];
    ok(skill_in(outline($syllabus), 'C1.2.2')['name'] === 'Use a > 0 and D < 0, x<y & "quotes"', 'maths symbols survive saving and reading back');
    // The skill library and the curriculum skill lists read the same text, not "&gt;" and "&lt;".
    ok(api('GET', "skills/$maths_skill")->get_data()['name'] === 'Use a > 0 and D < 0, x<y & "quotes"', 'the skill API returns the text itself, not HTML entities');
    ok(in_array('Use a > 0 and D < 0, x<y & "quotes"', array_column(api('GET', 'skills')->get_data()['skills'], 'name'), true), 'the skill library lists it the same way');
    ok(Links::targets('skill', 'quotes')[0]['title'] === 'Use a > 0 and D < 0, x<y & "quotes"', 'the curriculum skill picker shows the text too');
    // The same objective text in another syllabus is a different skill: skills are never merged by name.
    $other = item('Other syllabus ' . $tag, $igcse, 'syllabus');
    $og = (int) api('POST', "curriculum/items/$other/syllabus/groups", ['name' => 'G'])->get_data()['group_id'];
    $ot = api('POST', "curriculum/items/$other/syllabus/groups/$og/skills", ['name' => 'Identify natural numbers', 'code' => 'C1.1.1']);
    ok($ot->get_status() === 201 && $ot->get_data()['skill']['name'] === 'Identify natural numbers' && (int) $ot->get_data()['skill']['term_id'] !== $t1, 'the same text in another syllabus is a separate skill');
    ok(outline($other)['root_skill'] !== outline($syllabus)['root_skill'], 'each syllabus has its own root skill');
    // Edit, reorder, move, remove.
    ok(api('PUT', "curriculum/items/$syllabus/syllabus/skills/$t2", ['name' => 'Identify primes', 'description' => 'a note'])->get_status() === 200 && skill_in(outline($syllabus), 'C1.1.2')['name'] === 'Identify primes', 'a skill is renamed and annotated');
    ok(api('PUT', "curriculum/items/$syllabus/syllabus/skills/$t2", ['code' => 'C1.1.1'])->get_status() === 409, 'a skill cannot take another skill\'s code');
    $foreign = (int) $ot->get_data()['skill']['term_id'];
    ok(api('PUT', "curriculum/items/$syllabus/syllabus/skills/$foreign", ['name' => 'Hijacked'])->get_status() === 404 && get_term($foreign, Taxonomy::NAME)->name === 'Identify natural numbers', 'a skill of another syllabus cannot be edited through this one');
    ok(api('POST', "curriculum/items/$syllabus/syllabus/groups/$g1/skills/$t2/move", ['position' => 0])->get_status() === 200 && array_column(group_in(outline($syllabus), 'C1.1')['skills'], 'term_id') === [$t2, $t1], 'a skill moves up in its group');
    ok(api('POST', "curriculum/items/$syllabus/syllabus/groups/$g1/skills/$t2/move", ['group_id' => $g2])->get_status() === 200 && array_column(group_in(outline($syllabus), 'C1.2')['skills'], 'term_id') === [$t3, $maths_skill, $t2] && array_column(group_in(outline($syllabus), 'C1.1')['skills'], 'term_id') === [$t1], 'a skill moves into another group');
    ok(api('DELETE', "curriculum/items/$syllabus/syllabus/groups/$g2/skills/$t2")->get_status() === 200 && term_exists($t2, Taxonomy::NAME) && !in_array($t2, array_column(group_in(outline($syllabus), 'C1.2')['skills'], 'term_id'), true), 'removing a skill from a group keeps it in the library');
    $existing = (int) wp_insert_term('Library skill ' . $tag, Taxonomy::NAME)['term_id'];
    ok(api('POST', "curriculum/items/$syllabus/syllabus/groups/$g2/skills", ['term_id' => $existing])->get_status() === 201 && api('POST', "curriculum/items/$syllabus/syllabus/groups/$g1/skills", ['term_id' => $existing])->get_status() === 409, 'an existing library skill can be placed once per syllabus');
    $totals = outline($syllabus)['totals'];
    ok($totals === ['contents' => 1, 'groups' => 3, 'skills' => 4], 'totals count contents, groups and skills: ' . wp_json_encode($totals));
    ok($row($syllabus)['syllabus'] === ['groups' => 3, 'skills' => 4], 'the tree rows carry the same counts');

    // ---- Importing ----
    $csv = [
        ['line' => 2, 'content' => '2 Algebra', 'group_code' => 'C2.1', 'group' => 'Basic algebra', 'skill_code' => 'C2.1.1', 'skill' => 'Simplify expressions', 'description' => 'collect like terms'],
        ['line' => 3, 'content' => '2 Algebra', 'group_code' => 'C2.1', 'group' => 'Basic algebra', 'skill_code' => 'C2.1.2', 'skill' => 'Expand brackets'],
        ['line' => 4, 'content_code' => '11.1', 'content' => 'Квадрат тэгшитгэл ба тэнцэтгэл биш', 'group_code' => 'М11.1А', 'skill_code' => 'М11.1А1', 'skill' => 'Квадрат тэгшитгэлийн графикийг зөв зурах.'],
        ['line' => 5, 'content_code' => '11.1', 'content' => 'Квадрат тэгшитгэл ба тэнцэтгэл биш', 'group_code' => 'М11.1А', 'skill_code' => 'М11.1А2', 'skill' => 'Үргэлж эерэг байх нөхцөлийг (a > 0, D < 0) хэрэглэх.'],
        ['line' => 6, 'content' => 'Paper 1 > 3 Geometry', 'group' => 'Angles', 'skill' => 'Name angles'],
        ['line' => 7, 'content' => '4 Heading only'],
    ];
    $before = snapshot_counts();
    $dry = import_rows($syllabus, $csv, true);
    ok($dry->get_status() === 200 && $dry->get_data()['report']['valid'] === true && $dry->get_data()['report']['applied'] === false, 'a dry run reports without applying');
    $r = $dry->get_data()['report'];
    ok($r['contents']['create'] === 5 && $r['groups']['create'] === 3 && $r['skills']['create'] === 5, 'the dry run counts what would be created: ' . wp_json_encode([$r['contents'], $r['groups'], $r['skills']]));
    ok(snapshot_counts() === $before, 'a dry run changes nothing');
    $applied = import_rows($syllabus, $csv, false);
    ok($applied->get_status() === 200 && $applied->get_data()['report']['applied'] === true && isset($applied->get_data()['contents']), 'the import is applied and the new outline returned');
    $o = outline($syllabus);
    ok(content_named($o, '2 Algebra') && content_named($o, 'Paper 1') && content_named($o, '3 Geometry') && content_named($o, '4 Heading only') && content_named($o, '11.1') === null && content_named($o, 'Квадрат тэгшитгэл ба тэнцэтгэл биш')['code'] === '11.1', 'contents are created, nested by ">" paths, with their codes');
    ok(content_named($o, '3 Geometry')['parent_id'] === content_named($o, 'Paper 1')['id'] && content_named($o, 'Paper 1')['parent_id'] === $syllabus, 'a content path nests under the syllabus');
    ok(group_in($o, 'М11.1А')['name'] === 'М11.1А' && skill_in($o, 'М11.1А2')['name'] === 'Үргэлж эерэг байх нөхцөлийг (a > 0, D < 0) хэрэглэх.', 'Mongolian names, codes and maths text are stored and read back exactly');
    ok(array_column(group_in($o, 'C2.1')['skills'], 'code') === ['C2.1.1', 'C2.1.2'] && skill_in($o, 'C2.1.1')['description'] === 'collect like terms', 'imported skills keep file order and notes');
    $after_import = snapshot_counts();
    $again = import_rows($syllabus, $csv, false);
    $r = $again->get_data()['report'];
    ok($again->get_status() === 200 && $r['valid'] && $r['contents']['create'] + $r['groups']['create'] + $r['skills']['create'] + $r['skills']['update'] + $r['skills']['move'] === 0, 'importing the same file again changes nothing in the plan');
    ok(snapshot_counts() === $after_import, 'a repeated import adds no rows');
    // Edits: new name for a code, a moved skill, a new skill; nothing is deleted.
    $moving_term = skill_in($o, 'C2.1.2')['term_id'];
    $edit = [
        ['line' => 2, 'content' => '2 Algebra', 'group_code' => 'C2.1', 'skill_code' => 'C2.1.1', 'skill' => 'Simplify algebraic expressions'],
        ['line' => 3, 'content' => '2 Algebra', 'group_code' => 'C2.2', 'group' => 'Equations', 'skill_code' => 'C2.1.2', 'skill' => 'Expand brackets'],
        ['line' => 4, 'content' => '2 Algebra', 'group_code' => 'C2.2', 'skill_code' => 'C2.2.1', 'skill' => 'Solve linear equations'],
    ];
    $applied = import_rows($syllabus, $edit, false);
    $r = $applied->get_data()['report'];
    ok($applied->get_status() === 200 && $r['skills']['update'] === 1 && $r['skills']['move'] === 1 && $r['skills']['create'] === 1 && $r['groups']['create'] === 1, 'an edit file updates, moves and adds: ' . wp_json_encode($r['skills']));
    $o = outline($syllabus);
    ok(skill_in($o, 'C2.1.1')['name'] === 'Simplify algebraic expressions' && skill_in($o, 'C2.1.2')['group_id'] === group_in($o, 'C2.2')['id'] && skill_in($o, 'C2.1.2')['term_id'] === $moving_term, 'the renamed skill, and the moved skill (the same library skill, not a copy), are where the file put them');
    ok(skill_in($o, 'М11.1А1') !== null && skill_in($o, 'C1.1.1') !== null, 'skills the file does not mention stay');
    // Long names in Cyrillic that begin alike: WordPress alone gives them the same truncated slug and fails the insert.
    $long = str_repeat('Урвуу функцийн ', 3);
    $cyrillic = import_rows($syllabus, [
        ['line' => 2, 'content' => 'Long names', 'group_code' => 'L1', 'skill_code' => 'L1.1', 'skill' => $long . 'тодорхойлогдох мужийг тодорхойлох.'],
        ['line' => 3, 'content' => 'Long names', 'group_code' => 'L1', 'skill_code' => 'L1.2', 'skill' => $long . 'тодорхойлогдох мужийг мэдэх.'],
        ['line' => 4, 'content' => 'Long names', 'group_code' => 'L1', 'skill_code' => 'L1.3', 'skill' => str_repeat('Нэг ', 40) . 'урт нэр, хэтэрхий урт.'],
    ], false);
    ok($cyrillic->get_status() === 200 && $cyrillic->get_data()['report']['skills']['create'] === 3 && $cyrillic->get_data()['report']['applied'] === true, 'long Cyrillic names that begin alike are all created: ' . wp_json_encode($cyrillic->get_data()['report']['errors'] ?? $cyrillic->get_data()));
    $o = outline($syllabus);
    ok(skill_in($o, 'L1.1')['name'] === $long . 'тодорхойлогдох мужийг тодорхойлох.' && skill_in($o, 'L1.2') !== null && skill_in($o, 'L1.3') !== null, 'and read back exactly');
    ok(strlen(get_term(skill_in($o, 'L1.1')['term_id'], Taxonomy::NAME)->slug) < 40, 'imported skills get a short slug of their own');
    // Problems stop everything.
    $before = snapshot_counts();
    $broken = import_rows($syllabus, [['line' => 2, 'content' => 'Fine', 'group' => 'G', 'skill' => 'ok'], ['line' => 3, 'skill_code' => 'NO-NAME'], ['line' => 4, 'group_code' => 'G2', 'skill_code' => 'C1.1.1', 'skill' => 'Clash']], false);
    ok($broken->get_status() === 200 && $broken->get_data()['report']['valid'] === false && $broken->get_data()['report']['applied'] === false && count($broken->get_data()['report']['errors']) >= 1, 'a bad row is reported and nothing is applied');
    ok(snapshot_counts() === $before, 'a refused import changes nothing');
    ok(import_rows($cambridge, $csv)->get_status() === 400, 'only a syllabus accepts an import');
    ok(api('POST', "curriculum/items/$syllabus/syllabus/import", [])->get_status() === 400, 'an import needs rows');
    // A failure part-way rolls the whole import back, including the library skills already created.
    // A syllabus at depth 8: "Fits" lands at 9, then "A > B > C" needs depth 11 and runs into the limit of 10.
    $deep = $cambridge;
    for ($i = 0; $i < 7; $i++) { $deep = item("Deep $i $tag", $deep, 'topic'); }
    $deep_syllabus = (int) $deep; ok(api('PUT', "curriculum/items/$deep_syllabus", ['is_syllabus' => true])->get_status() === 200, 'the deep syllabus is flagged');
    $before = snapshot_counts();
    $failed = import_rows($deep_syllabus, [
        ['line' => 2, 'content' => 'Fits', 'group' => 'Early group', 'skill' => 'Created before the failure', 'skill_code' => 'Z1'],
        ['line' => 3, 'content' => 'A > B > C', 'group' => 'Too deep', 'skill' => 'Never created', 'skill_code' => 'Z2'],
    ], false);
    ok($failed->get_status() >= 400 && snapshot_counts() === $before, 'an import that fails part-way leaves nothing behind (' . $failed->get_status() . ')');
    ok(get_terms(['taxonomy' => Taxonomy::NAME, 'name' => 'Created before the failure', 'hide_empty' => false, 'fields' => 'ids']) === [], 'no library skill is left from the failed import');

    // ---- Tracks and membership integration ----
    $scope = Items::with_descendants($syllabus);
    ok(in_array($t1, Links::object_ids($scope, 'skill'), true) && in_array(skill_in(outline($syllabus), 'C2.1.1')['term_id'], Links::object_ids($scope, 'skill'), true) && !in_array($t1, Links::object_ids([$other], 'skill'), true), 'skills in groups count as the syllabus\'s skills (and only its) for learning tracks');
    $paths = array_map(static function ($m) { return $m['name']; }, Links::memberships('skill', $t1));
    ok($paths === ['1 Number'], 'a skill reports the content item its group sits under: ' . wp_json_encode($paths));
    $student = wp_create_user('syl-' . wp_generate_password(8, false, false), wp_generate_password(24), 'syl-' . wp_generate_password(8, false, false) . '@example.invalid'); $users[] = $student;
    $summary = Progress::curriculum($student, $syllabus);
    ok($summary !== null && in_array($t1, $summary['skill_ids'], true), 'the learner dashboard lists the syllabus\'s skills');

    // ---- Deleting ----
    $dependents = api('GET', "curriculum/items/$topic")->get_data()['dependents'];
    ok($dependents['own_groups'] === 2, 'delete confirmation counts the skill groups under an item');
    $needs = api('DELETE', "curriculum/items/$topic", ['children' => '']);
    ok($needs->get_status() === 409 && code($needs) === 'ohmylms_curriculum_needs_confirmation', 'deleting an item with skill groups needs confirmation');
    $groups_before = count_rows(Syllabus::groups_table());
    $skill_ids_in_topic = array_merge(array_column(group_in(outline($syllabus), 'C1.1')['skills'], 'term_id'), array_column(group_in(outline($syllabus), 'C1.2')['skills'], 'term_id'));
    $deleted = api('DELETE', "curriculum/items/$topic", ['children' => '', 'confirm' => true]);
    ok($deleted->get_status() === 200 && $deleted->get_data()['groups_removed'] === 2 && count_rows(Syllabus::groups_table()) === $groups_before - 2, 'deleting an item removes its skill groups');
    foreach ($skill_ids_in_topic as $term_id) { ok(term_exists((int) $term_id, Taxonomy::NAME) !== null, 'the skills of a deleted group stay in the library'); }
    $loose = api('DELETE', "curriculum/items/$syllabus/syllabus/groups/$g3");
    ok($loose->get_status() === 200, 'an empty group is deleted without confirmation');
    $with_skills = group_in(outline($syllabus), 'C2.1');
    $needs = api('DELETE', "curriculum/items/$syllabus/syllabus/groups/{$with_skills['id']}");
    ok($needs->get_status() === 409 && code($needs) === 'ohmylms_syllabus_needs_confirmation', 'deleting a group that holds skills needs confirmation');
    $kept = array_column($with_skills['skills'], 'term_id');
    ok(api('DELETE', "curriculum/items/$syllabus/syllabus/groups/{$with_skills['id']}", ['confirm' => true])->get_data()['skills_detached'] === count($kept) && term_exists((int) $kept[0], Taxonomy::NAME), 'a confirmed group delete keeps its skills');
    // Deleting a library skill drops its placement; deleting the root skill lets it be made again.
    $victim = skill_in(outline($syllabus), 'М11.1А1');
    wp_delete_term($victim['term_id'], Taxonomy::NAME);
    ok(skill_in(outline($syllabus), 'М11.1А1') === null && (int) $wpdb->get_var($wpdb->prepare('SELECT COUNT(*) FROM ' . Syllabus::placements_table() . ' WHERE term_id=%d', $victim['term_id'])) === 0, 'deleting a library skill removes its placement');
    // Deleting a root skill leaves its children as top-level skills; remember the one so cleanup can find it.
    $stray_terms[] = $foreign;
    $root = outline($other)['root_skill']; wp_delete_term($root, Taxonomy::NAME);
    ok((int) Items::get($other)['skill_root_id'] === 0, 'deleting the root skill forgets it');
    ok(api('POST', "curriculum/items/$other/syllabus/groups/$og/skills", ['name' => 'Again', 'code' => 'A1'])->get_status() === 201 && outline($other)['root_skill'] > 0, 'a new root skill is created when needed');

    // ---- Permissions ----
    $teacher = wp_create_user('syl-t-' . wp_generate_password(8, false, false), wp_generate_password(24), 'syl-t-' . wp_generate_password(8, false, false) . '@example.invalid'); $users[] = $teacher;
    (new WP_User($teacher))->set_role('editor');
    wp_set_current_user($teacher);
    ok(api('GET', "curriculum/items/$syllabus/syllabus")->get_status() === 403 && import_rows($syllabus, $csv, true)->get_status() === 403, 'only administrators can read or import a syllabus');
    wp_set_current_user(0);
    ok(api('GET', "curriculum/items/$syllabus/syllabus")->get_status() === 401, 'guests are refused');
    wp_set_current_user($admin);
} finally {
    wp_set_current_user($admin);
    foreach (array_reverse($item_ids) as $id) { if (Items::get($id)) { Items::delete($id, 'delete', true); } }
    // Remove the library skills these syllabuses created: each root skill's children first, then the root.
    $roots = $wpdb->get_col($wpdb->prepare("SELECT m.term_id FROM {$wpdb->termmeta} m WHERE m.meta_key=%s AND m.meta_value IN (" . implode(',', array_fill(0, max(1, count($item_ids)), '%d')) . ')', array_merge([Syllabus::ROOT_META], $item_ids ?: [0])));
    foreach ($roots as $term_id) {
        if (!term_exists((int) $term_id, Taxonomy::NAME)) { continue; }
        foreach (get_term_children((int) $term_id, Taxonomy::NAME) as $child) { wp_delete_term((int) $child, Taxonomy::NAME); }
        wp_delete_term((int) $term_id, Taxonomy::NAME);
    }
    foreach (get_terms(['taxonomy' => Taxonomy::NAME, 'hide_empty' => false, 'name__like' => 'Library skill ' . $tag, 'fields' => 'ids']) as $term_id) { wp_delete_term((int) $term_id, Taxonomy::NAME); }
    foreach ($stray_terms as $term_id) { if (term_exists((int) $term_id, Taxonomy::NAME)) { wp_delete_term((int) $term_id, Taxonomy::NAME); } }
    foreach ($users as $user_id) { wp_delete_user($user_id); }
    if (isset($start)) {
        $end = snapshot_counts();
        if ($end !== $start) { fwrite(STDERR, 'Cleanup left rows behind: ' . wp_json_encode([$start, $end]) . "\n"); }
    }
}
echo "$checks syllabus integration checks passed.\n";
