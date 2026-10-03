<?php
namespace OhMyLMS\Skills;

use OhMyLMS\Assessment\Schema;

defined('ABSPATH') || exit;

/**
 * Transparent, configurable attainment rules (deliberately not a probability score).
 *
 * Only primary-skill, non-superseded, independent first-try evidence counts toward
 * attainment. Assisted answers and retries are recorded but kept separate.
 *
 *  - Developing: some evidence exists.
 *  - Proficient: enough recent independent questions, from enough families, at a high accuracy.
 *  - Mastered:   proficient criteria at a higher bar, plus a correct review answer given at
 *                least `review_gap_hours` after the learner first reached proficiency.
 *  - Review due: a separate flag when proficient/mastered evidence has gone stale.
 */
final class Mastery {
    const OPTION = 'ohmylms_mastery_rules';
    const LEVELS = ['not-assessed', 'developing', 'proficient', 'mastered'];

    public static function rules() {
        $defaults = [
            'window' => 8,                 // most recent independent first tries considered
            'proficient_min' => 3,         // independent questions needed
            'proficient_families' => 2,
            'proficient_accuracy' => 0.8,
            'mastered_min' => 5,
            'mastered_families' => 3,
            'mastered_accuracy' => 0.85,
            'review_gap_hours' => 24,      // spacing required before mastery is confirmed
            'review_after_days' => 14,     // stale evidence makes a review due
        ];
        $saved = get_option(self::OPTION);
        return array_merge($defaults, is_array($saved) ? array_intersect_key($saved, $defaults) : []);
    }

    /** Recompute and store the state for one learner and skill. */
    public static function recompute($student_id, $term_id) {
        global $wpdb;
        $rules = self::rules();
        $rows = $wpdb->get_results($wpdb->prepare(
            "SELECT awarded, available, independent, first_try, family_id, question_id, evidence_at FROM " . Schema::table('skill_evidence') . "
             WHERE student_id=%d AND term_id=%d AND role='primary' AND superseded=0 ORDER BY evidence_at ASC, id ASC",
            $student_id, $term_id
        ), ARRAY_A);
        $state = self::evaluate($rows, $rules, time());
        $state['student_id'] = (int) $student_id;
        $state['term_id'] = (int) $term_id;
        $state['updated_at'] = current_time('mysql', true);
        $table = Schema::table('student_skill_state');
        $existing = $wpdb->get_var($wpdb->prepare("SELECT id FROM $table WHERE student_id=%d AND term_id=%d", $student_id, $term_id));
        if ($existing) { $wpdb->update($table, $state, ['id' => (int) $existing]); }
        else { $wpdb->insert($table, $state); }
        do_action('ohmylms_skill_state_updated', (int) $student_id, (int) $term_id, $state);
        return $state;
    }

    /**
     * Pure evaluation of ordered evidence rows (oldest first). Exposed for tests and previews.
     *
     * @param array $rows each: awarded, available, independent, first_try, family_id, question_id, evidence_at (UTC)
     */
    public static function evaluate(array $rows, array $rules, $now) {
        $independent = array_values(array_filter($rows, static function ($row) { return !empty($row['independent']) && !empty($row['first_try']) && (float) $row['available'] > 0; }));
        $correct = static function ($row) { return (float) $row['awarded'] >= (float) $row['available'] - 0.0001; };
        $family = static function ($row) { return $row['family_id'] !== '' ? 'f:' . $row['family_id'] : 'q:' . $row['question_id']; };
        $level = $rows ? 'developing' : 'not-assessed';
        $recent = array_slice($independent, -max(1, (int) $rules['window']));
        $accuracy = $recent ? array_sum(array_map(static function ($row) { return min(1, (float) $row['awarded'] / (float) $row['available']); }, $recent)) / count($recent) : 0.0;
        $correct_recent = array_values(array_filter($recent, $correct));
        $families = count(array_unique(array_map($family, $correct_recent)));
        // First moment the proficient bar was met, walking the history forward.
        $proficient_at = null;
        for ($i = 0; $i < count($independent); $i++) {
            $window = array_slice($independent, max(0, $i + 1 - (int) $rules['window']), min($i + 1, (int) $rules['window']));
            $hits = array_values(array_filter($window, $correct));
            $acc = array_sum(array_map(static function ($row) { return min(1, (float) $row['awarded'] / (float) $row['available']); }, $window)) / count($window);
            if (count($hits) >= $rules['proficient_min'] && count(array_unique(array_map($family, $hits))) >= $rules['proficient_families'] && $acc >= $rules['proficient_accuracy']) {
                $proficient_at = strtotime($independent[$i]['evidence_at'] . ' UTC');
                break;
            }
        }
        $proficient_now = count($correct_recent) >= $rules['proficient_min'] && $families >= $rules['proficient_families'] && $accuracy >= $rules['proficient_accuracy'];
        if ($proficient_now) { $level = 'proficient'; }
        if ($proficient_now && $proficient_at !== null && count($correct_recent) >= $rules['mastered_min'] && $families >= $rules['mastered_families'] && $accuracy >= $rules['mastered_accuracy']) {
            $gap = (int) $rules['review_gap_hours'] * 3600;
            foreach ($correct_recent as $row) {
                if (strtotime($row['evidence_at'] . ' UTC') >= $proficient_at + $gap) { $level = 'mastered'; break; }
            }
        }
        $last = $rows ? strtotime(end($rows)['evidence_at'] . ' UTC') : null;
        $review_due_at = in_array($level, ['proficient', 'mastered'], true) && $last ? $last + (int) $rules['review_after_days'] * DAY_IN_SECONDS : null;
        return [
            'level' => $level,
            'review_due' => $review_due_at !== null && $now >= $review_due_at ? 1 : 0,
            'review_due_at' => $review_due_at ? gmdate('Y-m-d H:i:s', $review_due_at) : null,
            'evidence_count' => count($rows),
            'independent_correct' => count(array_filter($independent, $correct)),
            'families' => $families,
            'score' => round($accuracy, 4),
            'last_evidence_at' => $last ? gmdate('Y-m-d H:i:s', $last) : null,
        ];
    }

    /** Refresh stale review flags (time passing alone can make a review due). */
    public static function refresh_reviews($limit = 500) {
        global $wpdb;
        $table = Schema::table('student_skill_state');
        return (int) $wpdb->query($wpdb->prepare("UPDATE $table SET review_due=1 WHERE review_due=0 AND review_due_at IS NOT NULL AND review_due_at<=%s LIMIT %d", gmdate('Y-m-d H:i:s'), $limit));
    }

    public static function label($level) {
        return [
            'not-assessed' => __('Not assessed', 'ohmylms'),
            'developing' => __('Developing', 'ohmylms'),
            'proficient' => __('Proficient', 'ohmylms'),
            'mastered' => __('Mastered', 'ohmylms'),
        ][$level] ?? $level;
    }
}
