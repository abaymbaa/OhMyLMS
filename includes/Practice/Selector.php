<?php
namespace OhMyLMS\Practice;

use OhMyLMS\Assessment\Schema;
use OhMyLMS\QuestionBank\Usage;
use OhMyLMS\Skills\Taxonomy;

defined('ABSPATH') || exit;

/**
 * Chooses the next practice question for a skill.
 *
 * Pool: approved, non-secure (not exam-only), non-archived versions whose frozen mapping
 * assesses the skill (or a sub-skill) as primary, and that grade automatically.
 * Difficulty follows teacher bands: two correct in a row moves up, two misses move down.
 * Questions already issued in the session are excluded and unused families are preferred;
 * when nothing new remains the session reports that instead of repeating questions.
 */
final class Selector {
    const BANDS = ['easy', 'standard', 'challenge'];

    /** @return array{question_id:int,version_id:int,difficulty:string,family_id:string}|null */
    public static function next(array $session, array $issued, $band) {
        $pool = self::pool((int) $session['term_id']);
        $used_questions = array_map('intval', array_column($issued, 'question_id'));
        $used_families = array_filter(array_column($issued, 'family_id'));
        $available = array_values(array_filter($pool, static function ($row) use ($used_questions) { return !in_array((int) $row['question_id'], $used_questions, true); }));
        if (!$available) { return null; }
        $fresh = array_values(array_filter($available, static function ($row) use ($used_families) { return $row['family_id'] === '' || !in_array($row['family_id'], $used_families, true); }));
        $candidates = $fresh ?: $available;
        // Nearest band first: the target band, then the adjacent ones.
        $target = array_search($band, self::BANDS, true);
        $target = $target === false ? 1 : $target;
        usort($candidates, static function ($left, $right) use ($target) {
            return abs(array_search($left['difficulty'], self::BANDS, true) - $target) <=> abs(array_search($right['difficulty'], self::BANDS, true) - $target);
        });
        $best = abs(array_search($candidates[0]['difficulty'], self::BANDS, true) - $target);
        $nearest = array_values(array_filter($candidates, static function ($row) use ($best, $target) { return abs(array_search($row['difficulty'], self::BANDS, true) - $target) === $best; }));
        return $nearest[random_int(0, count($nearest) - 1)];
    }

    /** Every eligible question for a skill and its sub-skills. */
    public static function pool($term_id) {
        global $wpdb;
        $terms = array_merge([(int) $term_id], array_map('intval', get_term_children((int) $term_id, Taxonomy::NAME) ?: []));
        $placeholders = implode(',', array_fill(0, count($terms), '%d'));
        $manual = array_keys(array_filter(\OhMyLMS\Extensions\Registry::all('question'), static function ($definition) { return !empty($definition['manual']) || empty($definition['snapshot']); }));
        $rows = $wpdb->get_results($wpdb->prepare(
            "SELECT DISTINCT q.question_id, q.approved_version_id AS version_id, q.difficulty, q.family_id, v.type, v.settings
             FROM " . Schema::table('qb_questions') . " q
             JOIN " . Schema::table('qb_version_skills') . " s ON s.version_id=q.approved_version_id AND s.role='primary'
             JOIN " . Schema::table('qb_question_versions') . " v ON v.id=q.approved_version_id
             JOIN {$wpdb->posts} p ON p.ID=q.question_id
             WHERE q.approved_version_id>0 AND q.secure=0 AND p.post_status NOT IN ('trash', %s) AND s.term_id IN ($placeholders)",
            array_merge([Usage::ARCHIVED], $terms)
        ), ARRAY_A);
        return array_values(array_filter(array_map(static function ($row) use ($manual) {
            if (in_array($row['type'], $manual, true)) { return null; }
            // Structured questions with teacher-marked parts cannot give immediate practice feedback.
            if ($row['type'] === 'structured') {
                foreach (\OhMyLMS\Assessment\Structured::parts(json_decode($row['settings'], true) ?: []) as $part) { if ($part['kind'] === 'written') { return null; } }
            }
            unset($row['settings']);
            return $row;
        }, $rows)));
    }

    /** Adjust the band from the most recent answers in the session. */
    public static function band($band, array $answered) {
        $index = array_search($band, self::BANDS, true);
        $index = $index === false ? 1 : $index;
        $last = array_slice($answered, -2);
        if (count($last) === 2) {
            $correct = count(array_filter($last, static function ($item) { return (int) $item['correct'] === 1; }));
            if ($correct === 2) { $index = min(2, $index + 1); }
            if ($correct === 0) { $index = max(0, $index - 1); }
        }
        return self::BANDS[$index];
    }
}
