<?php
/** Phase 7: randomised question templates: authoring, per-attempt numbers, practice, evidence, previews. */
use OhMyLMS\Assessment\AttemptItems;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\Assessment\Template;
use OhMyLMS\Practice\Inline;
use OhMyLMS\QuestionBank\VersionPublisher;
use OhMyLMS\Quiz\Submission;
use OhMyLMS\Skills\Evidence;
use OhMyLMS\Skills\Taxonomy;

global $wpdb;
$t = static function ($name) { return Schema::table($name); };
as_user($admin);
$created = call('POST', 'skills', ['name' => 'Multiplication ' . wp_generate_password(5, false, false), 'public_practice' => true])->get_data();
$fixture['terms'][] = [$created['id'], Taxonomy::NAME];
$skill = (int) $created['id'];

// The numbers of a question, read from its delivered title "What is 7 × 4?".
$numbers = static function ($title) {
    ok((bool) preg_match('/(\d+) × (\d+)/', (string) $title, $m), 'No numbers in the delivered question: ' . $title);
    return [(int) $m[1], (int) $m[2]];
};
$template = static function ($extra = []) {
    return array_merge([
        'variables'   => [['name' => 'a', 'type' => 'int', 'min' => 3, 'max' => 9], ['name' => 'b', 'type' => 'int', 'min' => 2, 'max' => 8]],
        'constraints' => ['a>b'],
        'set'         => [['path' => 'answer', 'expr' => 'a*b']],
    ], $extra);
};
$settings = static function ($template_value) {
    return ['type' => 'numerical', 'answer' => 0, 'tolerance' => 0, 'unit' => '', 'score' => ['enabled' => true, 'value' => 2],
        'hint' => 'Think of {{a}} groups of {{b}}.', 'explanation' => '{{a}} × {{b}} = {{a*b}}', 'template' => $template_value];
};

// ---- Authoring validation: a template must work before it can be saved ----
$impossible = call('POST', 'question', ['name' => 'What is {{a}} × {{b}}?', 'settings' => $settings($template(['constraints' => ['a>100']]))]);
ok(status_of($impossible) === 400 && strpos($impossible->get_data()['message'], 'strict') !== false, 'Impossible template accepted: ' . wp_json_encode($impossible->get_data()));
$unknown = call('POST', 'question', ['name' => 'What is {{a}} × {{zz}}?', 'settings' => $settings($template())]);
ok(status_of($unknown) === 400, 'Unknown placeholder accepted');
$constant = call('POST', 'question', ['name' => 'What is {{a}} × {{b}}?', 'settings' => $settings(['variables' => [['name' => 'a', 'type' => 'int', 'min' => 3, 'max' => 3], ['name' => 'b', 'type' => 'int', 'min' => 2, 'max' => 2]], 'set' => [['path' => 'answer', 'expr' => 'a*b']]])]);
ok(status_of($constant) === 400, 'A template that never changes accepted');
$wrongkey = call('POST', 'question', ['name' => 'What is {{a}} × {{b}}?', 'settings' => $settings($template(['set' => [['path' => 'tolerance', 'expr' => '-1']]]))]);
ok(status_of($wrongkey) === 400, 'An example question that fails the type check was accepted (negative tolerance)');

// ---- The author's preview endpoint shows concrete examples ----
$preview = call('POST', 'question-template/preview', ['name' => 'What is {{a}} × {{b}}?', 'description' => '', 'settings' => $settings($template()), 'questions' => [], 'count' => 4]);
$data = $preview->get_data();
ok(status_of($preview) === 200 && $data['valid'] === true && count($data['samples']) === 4, 'Template preview failed: ' . wp_json_encode($data));
foreach ($data['samples'] as $sample) {
    [$a, $b] = $numbers($sample['title']);
    ok($a > $b && (string) $sample['expected'] === (string) ($a * $b), 'Preview example has the wrong answer: ' . wp_json_encode($sample));
}
$broken = call('POST', 'question-template/preview', ['name' => 'What is {{a}} × {{zz}}?', 'settings' => $settings($template()), 'questions' => []])->get_data();
ok($broken['valid'] === false && $broken['message'] !== '' && count($broken['samples']) > 0, 'Preview did not explain an invalid template');
as_user($subscriber_probe = make_user('subscriber'));
ok(status_of(call('POST', 'question-template/preview', ['settings' => $settings($template())])) === 403, 'A learner used the template preview');
as_user($admin);

// ---- A quiz question that is a template ----
[$course_id, $quiz_id] = course_with_quiz($admin, ['allow_attempts' => 20, 'layout' => 'all_questions_in_one_page']);
$created_q = call('POST', 'question', ['quiz_id' => $quiz_id, 'name' => 'What is {{a}} × {{b}}?', 'description' => '<p>Give the product of {{a}} and {{b}}.</p>',
    'settings' => $settings($template()), 'skills' => ['p1' => ['primary' => $skill]]]);
ok(status_of($created_q) === 201, 'Template question create failed: ' . wp_json_encode($created_q->get_data()));
$qid = remember_post($created_q->get_data()['id']);
$approved = call('POST', 'question-bank/' . $qid . '/approve');
ok(status_of($approved) === 200, 'Approve failed: ' . wp_json_encode($approved->get_data()));
$version_id = (int) VersionPublisher::identity($qid)['current_version_id'];
$frozen = VersionPublisher::snapshot($version_id);
ok($frozen->is_template() && strpos($frozen->get_name(), '{{') !== false && isset($frozen->get_settings()['template']), 'The frozen version is not the template');
$hash_before = $wpdb->get_var($wpdb->prepare("SELECT content_hash FROM {$t('qb_question_versions')} WHERE id=%d", $version_id));

$student = make_user('subscriber');
enroll($student, $course_id);
as_user($student);

// ---- Each attempt gets its own numbers, fixed for that attempt ----
$seen = [];
$first_attempt = null;
for ($i = 0; $i < 10; $i++) {
    $attempt = Submission::start($quiz_id, $student);
    ok(is_int($attempt), 'Start failed: ' . (is_wp_error($attempt) ? $attempt->get_error_message() : ''));
    $fixture['attempts'][] = $attempt;
    $item = AttemptItems::items($attempt)[0];
    ok(!empty($item['display']['instance_seed']), 'No instance seed stored on the attempt item');
    $view = AttemptItems::delivery($attempt)[0];
    [$a, $b] = $numbers($view['name']);
    $seen[$a . 'x' . $b] = true;
    if ($i === 0) { $first_attempt = [$attempt, $view, $a, $b]; }
    ok(wp_json_encode(AttemptItems::delivery($attempt)[0]) === wp_json_encode($view), 'Refreshing changed the numbers');
    // Learner-safe: nothing about how the numbers were made, no answer.
    $leak = wp_json_encode($view);
    ok(strpos($leak, '{{') === false && strpos($leak, '"template"') === false && strpos($leak, 'variables') === false && strpos($leak, '"answer":' . ($a * $b)) === false && strpos($leak, 'constraints') === false, 'Template or key leaked to the learner: ' . $leak);
    ok(strpos($view['description'], 'product of ' . $a . ' and ' . $b) !== false, 'Body not instantiated');
    // While the first attempt is open, the quiz page itself shows its numbers and no template text.
    if ($i === 0) {
        $GLOBALS['post'] = get_post($quiz_id); setup_postdata($GLOBALS['post']);
        ob_start(); ohmylms_get_template('single-lesson/quiz-form.php'); $page = ob_get_clean(); wp_reset_postdata();
        ok(strpos($page, 'What is ' . $a . ' × ' . $b . '?') !== false || strpos($page, 'What is ' . $a . ' &times; ' . $b) !== false || strpos($page, (string) $a) !== false, 'Quiz page does not show the numbers');
        ok(strpos($page, '{{a}}') === false && strpos($page, 'variables') === false && strpos($page, '"template"') === false, 'Quiz page contains template text');
    }
    $right = $i % 2 === 0;
    $result = Submission::submit($quiz_id, $attempt, $student, [$qid => [$right ? (string) ($a * $b) : (string) ($a * $b + 1)]]);
    ok(!is_wp_error($result), 'Submit failed: ' . (is_wp_error($result) ? $result->get_error_message() : ''));
    ok(abs((float) $result['total'] - ($right ? 2.0 : 0.0)) < 0.0001, "Attempt $i graded against the wrong numbers: total {$result['total']} for {$a}x{$b}");
}
ok(count($seen) >= 4, 'Ten attempts gave too few different questions: ' . implode(',', array_keys($seen)));

// ---- Review and reports show what the learner saw ----
[$attempt0, $view0, $a0, $b0] = $first_attempt;
as_user($admin);

$report = call('GET', 'quiz/' . $quiz_id . '/report/' . $attempt0)->get_data();
$entry = $report['report']['questions'][0];
ok($entry['name'] === 'What is ' . $a0 . ' × ' . $b0 . '?' && $entry['instance']['params']['a'] === $a0 && $entry['instance']['params']['b'] === $b0, 'Report shows other numbers than the learner saw: ' . wp_json_encode([$entry['name'], $entry['instance']]));
ok($entry['settings']['answer'] == $a0 * $b0 && !isset($entry['settings']['template']), 'Report settings are not the concrete question');
ok($entry['correct'] === true && (float) $entry['achive_mark'] === 2.0, 'Report verdict wrong');

// ---- Versions are immutable: editing the template does not disturb finished attempts ----
$edited = call('PUT', 'question/' . $qid, ['settings' => $settings($template(['variables' => [['name' => 'a', 'type' => 'int', 'min' => 11, 'max' => 19], ['name' => 'b', 'type' => 'int', 'min' => 2, 'max' => 8]], 'constraints' => []]))]);
ok(status_of($edited) === 200, 'Template edit failed: ' . wp_json_encode($edited->get_data()));
$after = call('GET', 'quiz/' . $quiz_id . '/report/' . $attempt0)->get_data()['report']['questions'][0];
ok($after['name'] === $entry['name'] && $after['instance'] == $entry['instance'], 'Editing the template changed a finished attempt');
ok($wpdb->get_var($wpdb->prepare("SELECT content_hash FROM {$t('qb_question_versions')} WHERE id=%d", $version_id)) === $hash_before, 'The frozen version changed');
$new_version = (int) VersionPublisher::identity($qid)['current_version_id'];
ok($new_version !== $version_id, 'Editing the template did not create a new version');

// ---- Author preview: concrete numbers, graded against the same numbers, nothing recorded ----
$before = (int) $wpdb->get_var("SELECT COUNT(*) FROM {$t('grade_events')}");
$view_response = call('POST', 'quiz/' . $quiz_id . '/preview');
ok(status_of($view_response) === 200, 'Preview failed: ' . wp_json_encode($view_response->get_data()));
$pq = $view_response->get_data()['questions'][0];
ok(strpos(wp_json_encode($pq), '{{') === false && strpos(wp_json_encode($pq), 'variables') === false, 'Preview leaked the template');
preg_match('/(\d+) × (\d+)/', $pq['name'], $pm);
$graded = call('POST', 'quiz/' . $quiz_id . '/preview/grade', ['token' => $pq['token'], 'response' => [(string) ((int) $pm[1] * (int) $pm[2])]]);
ok(status_of($graded) === 200 && $graded->get_data()['correct'] === true && $graded->get_data()['recorded'] === false, 'Preview graded against different numbers: ' . wp_json_encode($graded->get_data()));
$graded_wrong = call('POST', 'quiz/' . $quiz_id . '/preview/grade', ['token' => $pq['token'], 'response' => [(string) ((int) $pm[1] * (int) $pm[2] + 1)]]);
ok($graded_wrong->get_data()['correct'] === false, 'Preview accepted a wrong answer');
ok((int) $wpdb->get_var("SELECT COUNT(*) FROM {$t('grade_events')}") === $before, 'Preview recorded grade events');

// ---- Inline checks: the render token fixes the numbers ----
$token = Inline::sign($new_version, 4242);
ok(Inline::seed($token) === Inline::seed($token) && Inline::seed($token) > 0 && Inline::seed(Inline::sign($new_version, 4242)) !== Inline::seed($token), 'Inline token seed unstable or shared');
ok(Inline::seed('garbage') === 0, 'A forged token produced a seed');

// ---- Practice: a template is endless, each item has its own numbers, each counts as a first try ----
$approved = call('POST', 'question-bank/' . $qid . '/approve');
ok(status_of($approved) === 200, 'Second approve failed: ' . wp_json_encode($approved->get_data()));
as_user($student);
$session = call('POST', 'practice/sessions', ['term_id' => $skill, 'item_limit' => 5]);
ok(status_of($session) === 200 || status_of($session) === 201, 'Practice session failed: ' . wp_json_encode($session->get_data()));
$state = $session->get_data();
$signatures = [];
for ($n = 1; $n <= 5; $n++) {
    ok(!empty($state['current']), "Practice ended early at item $n (the template should be endless): " . wp_json_encode(['ended' => $state['ended'] ?? null, 'notice' => $state['notice'] ?? null]));
    $current = $state['current'];
    ok(strpos(wp_json_encode($current), '{{') === false && strpos(wp_json_encode($current), 'variables') === false, 'Practice view leaked the template');
    ok(!empty($current['has_hint']), 'Hint not offered');
    [$pa, $pb] = $numbers($current['name']);
    $signatures[$pa . 'x' . $pb] = true;
    if ($n === 2) {
        $hint = call('POST', 'practice/sessions/' . $state['uuid'] . '/hint', ['item_id' => $current['item_id']])->get_data();
        ok(strpos((string) $hint['hint'], 'Think of ' . $pa . ' groups of ' . $pb) !== false, 'The hint did not use this question\'s numbers: ' . wp_json_encode($hint));
    }
    $answer = call('POST', 'practice/sessions/' . $state['uuid'] . '/answer', ['item_id' => $current['item_id'], 'response' => [(string) ($n === 4 ? $pa * $pb + 1 : $pa * $pb)]])->get_data();
    ok($answer['correct'] === ($n !== 4), "Practice item $n graded against other numbers: " . wp_json_encode($answer));
    ok(strpos((string) $answer['feedback']['explanation'], $pa . ' × ' . $pb . ' = ' . ($pa * $pb)) !== false, 'The worked solution did not use the numbers shown');
    ok(!empty($answer['feedback']['expected']) && (string) $answer['feedback']['expected'][0] === (string) ($pa * $pb), 'Feedback shows the wrong correct answer');
    $state = $answer['session'];
}
ok(count($signatures) >= 4, 'Practice repeated the same numbers: ' . implode(',', array_keys($signatures)));
ok(($state['ended'] ?? null) === 'limit', 'Practice did not stop at its item limit: ' . wp_json_encode($state['ended'] ?? null));

// Every issue counts as an independent first try for the skill, not just the first.
Evidence::process();
$rows = $wpdb->get_results($wpdb->prepare("SELECT first_try, independent, awarded, available FROM {$t('skill_evidence')} WHERE student_id=%d AND source_type='practice' AND question_id=%d AND role='primary' AND superseded=0", $student, $qid), ARRAY_A);
ok(count($rows) === 5 && count(array_filter($rows, static function ($row) { return (int) $row['first_try'] === 1; })) === 5, 'Template issues were not each counted as a first try: ' . wp_json_encode($rows));
ok(count(array_filter($rows, static function ($row) { return (int) $row['independent'] === 1; })) === 4, 'The item that used the hint should not be independent: ' . wp_json_encode($rows));

// ---- A plain question is untouched by all of this ----
as_user($admin);
$plain = call('POST', 'question', ['quiz_id' => $quiz_id, 'name' => 'Plain {{a}} stays literal', 'settings' => ['type' => 'numerical', 'answer' => 12, 'score' => ['enabled' => true, 'value' => 1]]]);
ok(status_of($plain) === 201, 'Plain question with braces rejected');
$plain_id = remember_post($plain->get_data()['id']);
$plain_snapshot = VersionPublisher::snapshot((int) VersionPublisher::identity($plain_id)['current_version_id']);
ok(!$plain_snapshot->is_template() && $plain_snapshot->instantiate(5) === $plain_snapshot && $plain_snapshot->get_name() === 'Plain {{a}} stays literal', 'A plain question was altered by instantiation');
