<?php
/** Khan level rules as an option: level rules, retry after a wrong answer, assessments, display and the setting. */
use OhMyLMS\Assessment\GradeEvents;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\Practice\Sessions;
use OhMyLMS\Skills\Khan\Levels;
use OhMyLMS\Skills\Khan\Schema as KhanSchema;
use OhMyLMS\Skills\Khan\Settings;
use OhMyLMS\Skills\MasteryDisplay;
use OhMyLMS\Skills\Taxonomy;

global $wpdb;
$run = wp_generate_password(6, false, false);
$previous_setting = get_option(Settings::OPTION, null);
register_shutdown_function(static function () use ($previous_setting) {
    if ($previous_setting === null) { delete_option(Settings::OPTION); } else { update_option(Settings::OPTION, $previous_setting); }
});

// ---- The rules, as pure functions ----
$exercise = [
    ['not-started', 6, 10, 'attempted'], ['not-started', 7, 10, 'familiar'], ['not-started', 10, 10, 'proficient'],
    ['attempted', 7, 10, 'familiar'], ['attempted', 3, 10, 'attempted'], ['familiar', 5, 10, 'familiar'], ['familiar', 10, 10, 'proficient'],
    ['proficient', 7, 10, 'proficient'], ['proficient', 10, 10, 'proficient'], ['mastered', 10, 10, 'mastered'], ['mastered', 9, 10, 'proficient'], ['mastered', 2, 10, 'proficient'],
    ['familiar', 0, 0, 'familiar'], ['not-started', 69, 100, 'attempted'], ['not-started', 70, 100, 'familiar'],
];
foreach ($exercise as [$before, $right, $total, $expect]) {
    ok(Levels::exercise($before, $right, $total) === $expect, "Exercise $before $right/$total gave " . Levels::exercise($before, $right, $total) . " not $expect");
}
$assessment = [
    ['not-started', true, 'familiar'], ['attempted', true, 'familiar'], ['familiar', true, 'proficient'], ['proficient', true, 'mastered'], ['mastered', true, 'mastered'],
    ['not-started', false, 'attempted'], ['attempted', false, 'attempted'], ['familiar', false, 'attempted'], ['proficient', false, 'familiar'], ['mastered', false, 'proficient'],
];
foreach ($assessment as [$before, $right, $expect]) {
    ok(Levels::assessment($before, $right) === $expect, "Assessment $before " . ($right ? 'right' : 'wrong') . ' gave ' . Levels::assessment($before, $right) . " not $expect");
}
ok(Levels::from_evidence('developing') === 'attempted' && Levels::from_evidence('mastered') === 'mastered' && Levels::from_evidence('not-assessed') === 'not-started', 'Evidence level mapping wrong');
ok(Levels::to_evidence('familiar') === 'developing' && Levels::to_evidence('proficient') === 'proficient' && Levels::to_evidence('not-started') === 'not-assessed', 'Khan level mapping wrong');

// ---- The setting ----
ok(Settings::get()['model'] === 'evidence' || get_option(Settings::OPTION, null) !== null, 'The model does not default to evidence');
update_option(Settings::OPTION, ['model' => 'nonsense']);
ok(Settings::get()['model'] === 'evidence', 'An invalid stored model was accepted');
ok(is_wp_error(Settings::validate(['model' => 'nonsense'])) && is_wp_error(Settings::validate('khan')) && !is_wp_error(Settings::validate(['model' => 'khan'])), 'Setting validation wrong');
as_user($admin);
$saved = call('POST', 'engagement/settings/mastery', ['model' => 'bogus']);
ok(status_of($saved) === 400, 'The route accepted a bad model');
$saved = call('POST', 'engagement/settings/mastery', ['model' => 'khan']);
ok(status_of($saved) === 200 && Settings::get()['model'] === 'khan' && KhanSchema::ready() && Settings::enabled(), 'Choosing Khan did not install storage: ' . wp_json_encode($saved->get_data()));
ok(call('GET', 'engagement/settings/mastery')->get_data() === ['model' => 'khan'], 'The saved model was not returned');
$learner = make_user('subscriber');
as_user($learner);
ok(in_array(status_of(call('POST', 'engagement/settings/mastery', ['model' => 'evidence'])), [401, 403], true), 'A learner changed the mastery model');
as_user($admin);

// ---- A skill with questions ----
$skill = (int) call('POST', 'skills', ['name' => 'Khan skill ' . $run, 'public_practice' => true])->get_data()['id'];
$fixture['terms'][] = [$skill, Taxonomy::NAME];
for ($n = 1; $n <= 8; $n++) {
    $response = call('POST', 'question', ['name' => "Khan q$n $run", 'description' => "Pick $n $run",
        'settings' => ['type' => 'single-choice', 'hint' => '<p>One</p>', 'explanation' => '<p>Because.</p>', 'score' => ['enabled' => true, 'value' => 1]],
        'questions' => [['answer' => 'Right', 'is_correct' => 1, 'order_number' => 1], ['answer' => 'Wrong', 'is_correct' => 0, 'order_number' => 2]],
        'skills' => ['p1' => ['primary' => $skill]], 'bank' => ['family_id' => "kh$n-$run"]]);
    ok(status_of($response) === 201, "Creating question $n failed: " . wp_json_encode($response->get_data()));
    $id = remember_post($response->get_data()['id']);
    ok(status_of(call('POST', 'question-bank/' . $id . '/approve')) === 200, "Approving question $n failed");
}
as_user($learner);
$act = static function ($uuid, $path, $body) { return call('POST', 'practice/sessions/' . $uuid . '/' . $path, $body); };
$tokens = static function ($state, $right) { return [array_column($state['current']['questions'], 'id', 'answer')[$right ? 'Right' : 'Wrong']]; };
$events = static function ($session_id) use ($wpdb) {
    return (int) $wpdb->get_var($wpdb->prepare('SELECT COUNT(*) FROM ' . Schema::table('grade_events') . " WHERE source_type='practice' AND source_id=%d", $session_id));
};

// ---- Retry after a wrong answer ----
$state = call('POST', 'practice/sessions', ['term_id' => $skill, 'item_limit' => 3])->get_data();
$session_id = (int) Sessions::get($state['uuid'])['id'];
ok($state['retry'] === true && $state['attempts'] === 0 && !isset($state['levels']), 'New session state wrong: ' . wp_json_encode(array_diff_key($state, ['current' => 1])));
$first = $state['current']['item_id'];
$wrong = $act($state['uuid'], 'answer', ['item_id' => $first, 'response' => $tokens($state, false)]);
ok(status_of($wrong) === 200 && $wrong->get_data()['retry'] === true && $wrong->get_data()['correct'] === false, 'A wrong answer did not offer another try: ' . wp_json_encode($wrong->get_data()));
ok($wrong->get_data()['feedback'] === [] && !isset($wrong->get_data()['receipt']), 'A wrong first answer revealed the solution');
ok(strpos(wp_json_encode($wrong->get_data()), 'Because') === false, 'The explanation leaked before the question was closed');
ok($events($session_id) === 1, 'The first wrong try was not recorded as one grade event');
$open = Sessions::state(Sessions::get($state['uuid']));
ok($open['answered'] === 0 && $open['current']['item_id'] === $first && $open['attempts'] === 1 && $open['results'] === [], 'The question did not stay open: ' . wp_json_encode(array_diff_key($open, ['current' => 1])));
$again = $act($state['uuid'], 'answer', ['item_id' => $first, 'response' => $tokens($state, false)]);
ok($again->get_data()['retry'] === true && $events($session_id) === 1, 'A second wrong try wrote another grade event');
$right = $act($state['uuid'], 'answer', ['item_id' => $first, 'response' => $tokens($state, true)]);
ok(status_of($right) === 200 && $right->get_data()['correct'] === true && $right->get_data()['assisted'] === true && !empty($right->get_data()['feedback']['correct_options']), 'The right retry did not close the question');
ok($events($session_id) === 1, 'The right retry wrote a grade event');
$row = $wpdb->get_row($wpdb->prepare('SELECT * FROM ' . Schema::table('practice_items') . ' WHERE id=%d', $first), ARRAY_A);
ok((int) $row['correct'] === 1 && (int) $row['assisted'] === 1 && (int) $row['tries'] === 3 && $row['answered_at'] !== null, 'The retried item row is wrong');
$state = $right->get_data()['session'];
ok($state['results'] === ['help'] && $state['answered'] === 1, 'A retried answer is not shown as right with help: ' . wp_json_encode($state['results']));
$grade = $wpdb->get_row($wpdb->prepare('SELECT correct, superseded_by FROM ' . Schema::table('grade_events') . " WHERE source_type='practice' AND source_id=%d", $session_id), ARRAY_A);
ok((int) $grade['correct'] === 0 && (int) $grade['superseded_by'] === 0, 'The first try no longer stands as a wrong first try');
ok(status_of($act($state['uuid'], 'answer', ['item_id' => $first, 'response' => $tokens($state, true)])) === 409, 'A closed question could be answered again');
// Finish: two more first-try right answers, so 2 of 3 were right first time (67%): Attempted.
foreach ([1, 2] as $n) {
    $step = $act($state['uuid'], 'answer', ['item_id' => $state['current']['item_id'], 'response' => $tokens($state, true)]);
    ok($step->get_data()['correct'] === true && $step->get_data()['assisted'] === false, 'First-try answer wrong: ' . wp_json_encode(array_diff_key($step->get_data(), ['session' => 1])));
    $state = $step->get_data()['session'];
}
ok($state['status'] === 'complete' && $state['correct'] === 3, 'The session did not finish: ' . wp_json_encode(array_diff_key($state, ['current' => 1])));
ok(count($state['levels']) === 1 && $state['levels'][0]['before'] === 'not-started' && $state['levels'][0]['after'] === 'attempted' && $state['levels'][0]['change'] === 'up', 'Summary level change wrong: ' . wp_json_encode($state['levels']));
ok(Levels::current($learner, $skill) === 'attempted', 'Level after a 67% exercise is not Attempted');
ok( array() === Levels::current_many( $learner, array() ), 'An empty skill list must not generate an invalid IN query' );
$bulk_levels = Levels::current_many( $learner, array( $skill, (string) $skill, 0, $skill + 1000000 ) );
ok( 2 === count( $bulk_levels ) && 'attempted' === $bulk_levels[ $skill ] && 'not-started' === $bulk_levels[ $skill + 1000000 ], 'Bulk levels must deduplicate terms, retain unknown skills and prefer recorded Khan history' );
$stored = $wpdb->get_var($wpdb->prepare('SELECT level FROM ' . Schema::table('student_skill_state') . ' WHERE student_id=%d AND term_id=%d', $learner, $skill));
ok($stored === 'developing', 'The stored evidence level does not follow: ' . var_export($stored, true));
Levels::apply_practice($state['uuid']);
ok((int) $wpdb->get_var($wpdb->prepare('SELECT COUNT(*) FROM ' . KhanSchema::table() . ' WHERE student_id=%d AND term_id=%d', $learner, $skill)) === 1, 'Replaying the finished session moved the skill twice');

// ---- A perfect exercise: Proficient, and the stored level follows ----
$state = call('POST', 'practice/sessions', ['term_id' => $skill, 'item_limit' => 3])->get_data();
for ($n = 0; $n < 3; $n++) {
    $step = $act($state['uuid'], 'answer', ['item_id' => $state['current']['item_id'], 'response' => $tokens($state, true)]);
    $state = $step->get_data()['session'];
}
ok($state['levels'][0]['before'] === 'attempted' && $state['levels'][0]['after'] === 'proficient', 'A perfect exercise did not reach Proficient: ' . wp_json_encode($state['levels']));
$stored = $wpdb->get_var($wpdb->prepare('SELECT level FROM ' . Schema::table('student_skill_state') . ' WHERE student_id=%d AND term_id=%d', $learner, $skill));
ok($stored === 'proficient', 'The stored level did not become proficient: ' . var_export($stored, true));
$shown = MasteryDisplay::for_student($learner, [$skill])[$skill];
ok($shown['key'] === 'proficient' && $shown['source'] === 'khan', 'The display does not use the Khan level: ' . wp_json_encode($shown));
ok(MasteryDisplay::counts($learner)['proficient'] === 1, 'The mastery counts miss the Khan level');

// ---- Assessments move a skill one step ----
$version = (int) $wpdb->get_var($wpdb->prepare('SELECT version_id FROM ' . Schema::table('practice_items') . ' WHERE session_id=%d LIMIT 1', (int) Sessions::get($state['uuid'])['id']));
$question = (int) $wpdb->get_var($wpdb->prepare('SELECT question_id FROM ' . Schema::table('practice_items') . ' WHERE version_id=%d LIMIT 1', $version));
$grade_quiz = static function ($attempt, $correct_flags) use ($learner, $version, $question) {
    foreach ($correct_flags as $i => $flag) {
        GradeEvents::record(['source_type' => 'quiz', 'source_id' => $attempt, 'item_id' => 9000 + $attempt * 10 + $i, 'student_id' => $learner, 'question_id' => $question, 'version_id' => $version,
            'awarded' => $flag ? 1 : 0, 'max_marks' => 1, 'fraction' => $flag ? 1 : 0, 'correct' => $flag, 'grader' => 'auto', 'reason' => 'submitted']);
    }
    Levels::apply_attempt(['student_id' => $learner, 'attempt_id' => $attempt]);
};
$base = 900000 + (int) $learner;
$grade_quiz($base + 1, [true, true]);
ok(Levels::current($learner, $skill) === 'mastered', 'All right on a quiz did not move Proficient to Mastered');
$grade_quiz($base + 2, [true, false]);
ok(Levels::current($learner, $skill) === 'proficient', 'A miss on a quiz did not move Mastered to Proficient');
Levels::apply_attempt(['student_id' => $learner, 'attempt_id' => $base + 2]);
ok((int) $wpdb->get_var($wpdb->prepare('SELECT COUNT(*) FROM ' . KhanSchema::table() . " WHERE student_id=%d AND term_id=%d AND source_type='quiz'", $learner, $skill)) === 2, 'Replaying a graded attempt moved the skill twice');
$grade_quiz($base + 3, [false]);
ok(Levels::current($learner, $skill) === 'familiar', 'A miss did not move Proficient to Familiar');
ok(Levels::changes($learner, 'quiz', $base + 3)[0]['change'] === 'down', 'The change list does not say it went down');
// A practice exercise never lowers a skill: 2 of 3 right first time is Attempted, the skill stays Familiar.
$state = call('POST', 'practice/sessions', ['term_id' => $skill, 'item_limit' => 3])->get_data();
$miss = $act($state['uuid'], 'answer', ['item_id' => $state['current']['item_id'], 'response' => $tokens($state, false)]);
ok($miss->get_data()['retry'] === true, 'The wrong first answer was not offered another try');
$fixed = $act($state['uuid'], 'answer', ['item_id' => $state['current']['item_id'], 'response' => $tokens($state, true)]);
$state = $fixed->get_data()['session'];
foreach ([1, 2] as $n) {
    $step = $act($state['uuid'], 'answer', ['item_id' => $state['current']['item_id'], 'response' => $tokens($state, true)]);
    $state = $step->get_data()['session'];
}
ok($state['status'] === 'complete' && $state['levels'][0]['after'] === 'familiar' && $state['levels'][0]['change'] === 'same', 'A weaker exercise changed the level: ' . wp_json_encode($state['levels'] ?? null));

// A skipped question leaves the exercise result alone, and so does one left open.
$state = call('POST', 'practice/sessions', ['term_id' => $skill, 'item_limit' => 3])->get_data();
$act($state['uuid'], 'answer', ['item_id' => $state['current']['item_id'], 'response' => $tokens($state, false)]);
$skipped = $act($state['uuid'], 'skip', ['item_id' => $state['current']['item_id']]);
ok(status_of($skipped) === 200 && $skipped->get_data()['session']['answered'] === 0 && $skipped->get_data()['session']['skipped'] === 1, 'Skipping a question with a wrong first try failed');
$state = $skipped->get_data()['session'];
foreach ([1, 2, 3] as $n) {
    $step = $act($state['uuid'], 'answer', ['item_id' => $state['current']['item_id'], 'response' => $tokens($state, true)]);
    $state = $step->get_data()['session'];
}
ok($state['status'] === 'complete' && $state['levels'][0]['after'] === 'proficient', 'Three first-try answers beside a skipped question were not Proficient: ' . wp_json_encode($state['levels'] ?? null));

// ---- Switching back to the evidence model ----
as_user($admin);
call('POST', 'engagement/settings/mastery', ['model' => 'evidence']);
ok(!Settings::enabled(), 'The model did not switch back');
as_user($learner);
$state = call('POST', 'practice/sessions', ['term_id' => $skill, 'item_limit' => 3])->get_data();
ok($state['retry'] === false, 'Retry is offered without the Khan model');
$over = $act($state['uuid'], 'answer', ['item_id' => $state['current']['item_id'], 'response' => $tokens($state, false)]);
ok(empty($over->get_data()['retry']) && !empty($over->get_data()['feedback']['correct_options']) && $over->get_data()['session']['answered'] === 1, 'The evidence model no longer closes a wrong answer');
ok(MasteryDisplay::for_student($learner, [$skill])[$skill]['source'] !== 'khan', 'The display still uses Khan levels after switching back');
as_user($admin);

// The level log of this test's learner is removed with the learner.
$wpdb->delete(KhanSchema::table(), ['student_id' => $learner]);
