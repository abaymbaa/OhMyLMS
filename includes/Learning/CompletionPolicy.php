<?php
namespace OhMyLMS\Learning;

use OhMyLMS\Assessment\Schema as AssessmentSchema;
use OhMyLMS\Extensions\Addons;
use OhMyLMS\Skills\Mastery;
use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\Utility\Transaction;

defined('ABSPATH') || exit;

final class CompletionPolicy {
    /** Pure policy evaluation. Optional items never enter required denominators. */
    public static function evaluate(array $program, array $activities, array $skills, array $assessments, $pending = false) {
        $missing = []; $counts = ['activities' => ['met' => 0, 'total' => 0], 'outcomes' => ['met' => 0, 'total' => 0], 'assessments' => ['met' => 0, 'total' => 0]];
        foreach ($program['items'] as $item) {
            if (empty($item['required']) || $item['type'] === 'practice') { continue; }
            $kind = $item['type'] === 'quiz' ? 'assessments' : 'activities';
            $counts[$kind]['total']++;
            $met = $item['type'] === 'quiz' ? !empty($assessments[$item['content_id']]['passed']) : !empty($activities[$item['content_id']]);
            if ($met) { $counts[$kind]['met']++; }
            else { $missing[] = ['kind' => $kind, 'id' => $item['id'], 'content_id' => $item['content_id']]; }
        }
        foreach ($program['outcomes'] as $outcome) {
            if (empty($outcome['required'])) { continue; }
            $counts['outcomes']['total']++;
            $level = $skills[$outcome['term_id']]['level'] ?? 'not-assessed';
            $rank = array_search($level, Mastery::LEVELS, true);
            $target = array_search($outcome['target'], Mastery::LEVELS, true);
            if ($rank !== false && $target !== false && $rank >= $target) { $counts['outcomes']['met']++; }
            else { $missing[] = ['kind' => 'outcomes', 'term_id' => $outcome['term_id'], 'target' => $outcome['target']]; }
        }
        $total = array_sum(array_column($counts, 'total'));
        return ['eligible' => $total > 0 && !$missing && !$pending, 'pending' => (bool) $pending, 'dimensions' => $counts, 'missing' => $missing];
    }

    public static function status($student_id, $course_id) {
        global $wpdb;
        $enrollment = CourseProgram::enrollment($student_id, $course_id);
        if (!$enrollment) { return CourseProgram::error(__('Enroll in this course to open your learning path.', 'ohmylms'), 403); }
        $program = CourseProgram::for_enrollment($enrollment);
        if (!$program) { return CourseProgram::error(__('This enrollment uses the original course curriculum.', 'ohmylms'), 404); }
        $activities = array_fill_keys(array_map('intval', $wpdb->get_col($wpdb->prepare("SELECT content_id FROM {$wpdb->prefix}ohmylms_user_progress WHERE enrollment_id=%d AND status='completed'", $enrollment['id']))), true);
        foreach ($program['items'] as $item) {
            if ($item['type'] !== 'practice' && get_post_status($item['content_id']) !== 'publish') { unset($activities[$item['content_id']]); }
        }
        $assessments = [];
        foreach ($program['items'] as $item) {
            if ($item['type'] !== 'quiz') { continue; }
            $attempt = $wpdb->get_row($wpdb->prepare("SELECT a.*,r.total_marks,c.finalize_reason FROM {$wpdb->prefix}ohmylms_quiz_attempts a LEFT JOIN " . AssessmentSchema::table('attempt_context') . ' c ON c.attempt_id=a.id LEFT JOIN ' . AssessmentSchema::table('quiz_revisions') . " r ON r.id=c.revision_id WHERE a.student_id=%d AND a.course_id=%d AND a.quiz_id=%d AND a.status IN ('completed','passed','failed','in-review') ORDER BY a.id DESC LIMIT 1", $student_id, $course_id, $item['content_id']), ARRAY_A);
            $maximum = $attempt && $attempt['total_marks'] !== null ? (float) $attempt['total_marks'] : (float) ohmylms_get_quiz($item['content_id'])->get_total_marks();
            $score = $attempt && $maximum > 0 ? min(100, 100 * (float) $attempt['total'] / $maximum) : null;
            $assessments[$item['content_id']] = ['score' => $score === null ? null : round($score, 2), 'pass_percent' => $item['pass_percent'], 'passed' => get_post_status($item['content_id']) === 'publish' && $attempt && in_array($attempt['status'], ['completed', 'passed', 'failed'], true) && $attempt['finalize_reason'] !== 'exit' && $score !== null && $score + 0.0001 >= $item['pass_percent'], 'status' => $attempt['status'] ?? 'not-started', 'attempt_id' => (int) ($attempt['id'] ?? 0)];
        }
        $skills = [];
        $terms = array_map('intval', array_column($program['outcomes'], 'term_id'));
        $pending = false;
        if ($terms && AssessmentSchema::ready()) {
            $ids = implode(',', $terms);
            if ($program['recognize_prior'] && !$program['evidence_days']) {
                $rows = $wpdb->get_results($wpdb->prepare('SELECT * FROM ' . AssessmentSchema::table('student_skill_state') . " WHERE student_id=%d AND term_id IN ($ids)", $student_id), ARRAY_A);
                foreach ($rows as $row) { $skills[(int) $row['term_id']] = $row; }
            } else {
                $where = ''; $args = [$student_id];
                if ($program['evidence_days']) { $where .= ' AND e.evidence_at>=%s'; $args[] = gmdate('Y-m-d H:i:s', time() - $program['evidence_days'] * DAY_IN_SECONDS); }
                if (!$program['recognize_prior']) {
                    $where .= " AND e.evidence_at>=%s AND ((e.source_type IN ('practice','inline') AND p.course_id=%d) OR (e.source_type='quiz' AND a.course_id=%d))";
                    $bound = $wpdb->get_var($wpdb->prepare('SELECT bound_at FROM ' . Schema::table('enrollments') . ' WHERE enrollment_id=%d', $enrollment['id']));
                    array_push($args, $bound, $course_id, $course_id);
                }
                $rows = $wpdb->get_results($wpdb->prepare('SELECT e.* FROM ' . AssessmentSchema::table('skill_evidence') . ' e LEFT JOIN ' . AssessmentSchema::table('practice_sessions') . " p ON p.id=e.source_id AND e.source_type IN ('practice','inline') LEFT JOIN {$wpdb->prefix}ohmylms_quiz_attempts a ON a.id=e.source_id AND e.source_type='quiz' WHERE e.student_id=%d AND e.term_id IN ($ids) AND e.role='primary' AND e.superseded=0 $where ORDER BY e.evidence_at,e.id", $args), ARRAY_A);
                $grouped = [];
                foreach ($rows as $row) { $grouped[$row['term_id']][] = $row; }
                foreach ($terms as $term) { $skills[$term] = Mastery::evaluate($grouped[$term] ?? [], Mastery::rules(), time()); }
            }
            $pending = (bool) $wpdb->get_var($wpdb->prepare('SELECT o.id FROM ' . AssessmentSchema::table('evidence_outbox') . ' o JOIN ' . AssessmentSchema::table('grade_events') . ' g ON g.id=o.grade_event_id JOIN ' . AssessmentSchema::table('qb_version_skills') . " s ON s.version_id=g.version_id WHERE g.student_id=%d AND s.term_id IN ($ids) AND o.status IN ('pending','failed') LIMIT 1", $student_id));
        }
        $blocked = get_post_status($course_id) !== 'publish' || (CourseProgram::needs_skills($program) && !Addons::enabled('skills'));
        $result = self::evaluate($program, $activities, $skills, $assessments, $pending || $blocked);
        $award = $wpdb->get_row($wpdb->prepare('SELECT program_id,awarded_at FROM ' . Schema::table('awards') . ' WHERE enrollment_id=%d', $enrollment['id']), ARRAY_A);
        foreach ($program['items'] as &$item) {
            $item['name'] = $item['type'] === 'practice' ? (get_term($item['content_id'], Taxonomy::NAME)->name ?? __('Unavailable skill', 'ohmylms')) : get_the_title($item['content_id']);
            $item['complete'] = $item['type'] === 'practice' ? false : ($item['type'] === 'quiz' ? !empty($assessments[$item['content_id']]['passed']) : !empty($activities[$item['content_id']]));
            $item['available'] = $item['type'] === 'practice' ? !$blocked : get_post_status($item['content_id']) === 'publish';
            $item['url'] = $item['type'] === 'quiz' || $item['type'] === 'assignment' ? ohmylms_get_pretty_content_permalink($item['content_id']) : add_query_arg('learning_item', $item['id'], Frontend::url($course_id));
        }
        unset($item);
        foreach ($program['outcomes'] as &$outcome) {
            $term = get_term($outcome['term_id'], Taxonomy::NAME);
            $outcome['name'] = $term && !is_wp_error($term) ? $term->name : __('Unavailable skill', 'ohmylms');
            $outcome['state'] = $skills[$outcome['term_id']] ?? ['level' => 'not-assessed', 'review_due' => 0, 'evidence_count' => 0];
            $outcome['met'] = array_search($outcome['state']['level'], Mastery::LEVELS, true) >= array_search($outcome['target'], Mastery::LEVELS, true);
            $outcome['practice_url'] = add_query_arg(['ohmylms_practice' => $outcome['term_id'], 'learning_course' => $course_id], home_url('/'));
        }
        unset($outcome);
        return $result + ['program' => $program, 'student_id' => (int) $student_id, 'enrollment_id' => (int) $enrollment['id'], 'assessments' => $assessments, 'award' => $award, 'completed' => (bool) $award || $enrollment['progress'] === 'completed', 'blocked' => $blocked];
    }

    public static function award($student_id, $course_id) {
        global $wpdb;
        if (!CourseProgram::managed($student_id, $course_id)) { return null; }
        $state = self::status($student_id, $course_id);
        if (is_wp_error($state) || !$state['eligible'] || $state['completed']) { return $state; }
        try {
            $won = Transaction::run(static function () use ($wpdb, $state) {
                $enrollment = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE id=%d FOR UPDATE", $state['enrollment_id']), ARRAY_A);
                if (!$enrollment || $enrollment['status'] !== 'enrolled' || $enrollment['progress'] === 'completed') { return null; }
                $confirmed = self::status($enrollment['user_id'], $enrollment['course_id']);
                if (is_wp_error($confirmed) || !$confirmed['eligible'] || $confirmed['program']['id'] !== $state['program']['id']) { return null; }
                if (!$wpdb->insert(Schema::table('awards'), ['enrollment_id' => $enrollment['id'], 'program_id' => $confirmed['program']['id'], 'snapshot' => wp_json_encode($confirmed), 'awarded_at' => current_time('mysql', true)])) { throw new \RuntimeException('Award write failed'); }
                if ($wpdb->update($wpdb->prefix . 'ohmylms_user_enrollment', ['progress' => 'completed', 'end_date' => current_time('mysql')], ['id' => (int) $enrollment['id'], 'status' => 'enrolled']) !== 1) { throw new \RuntimeException('Completion write failed'); }
                return $enrollment;
            });
            if ($won) {
                \OhMyLMS\DataStores\StudentStore::clear_learning_cache($student_id, $course_id);
                do_action('ohmylms_course_completed', (int) $student_id, (int) $course_id, (int) $won['order_id']);
            }
        } catch (\Throwable $error) { return CourseProgram::error(__('Completion could not be saved. Please retry.', 'ohmylms'), 500); }
        return self::status($student_id, $course_id);
    }

    /** Compatibility meter uses the least complete dimension, with 100 reserved for an award. */
    public static function percentage(array $state) {
        if ($state['completed']) { return 100; }
        $ratios = [];
        foreach ($state['dimensions'] as $dimension) { if ($dimension['total']) { $ratios[] = 100 * $dimension['met'] / $dimension['total']; } }
        return $ratios ? min(99, (int) floor(min($ratios))) : 0;
    }
}
