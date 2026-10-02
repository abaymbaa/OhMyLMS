<?php
namespace OhMyLMS\Skills;

use OhMyLMS\Assessment\Schema;

defined('ABSPATH') || exit;

/**
 * Next steps for a learner, phrased as suggestions:
 *  - help: repeated recent errors on a skill suggest its linked lessons, and prerequisites
 *    that are not yet proficient (a hint to revisit, not proof of a deficit);
 *  - review: proficient/mastered skills whose evidence has gone stale;
 *  - ready: unassessed skills whose prerequisites are all proficient or mastered.
 */
final class Recommendations {
    public static function for_student($student_id, $limit = 8) {
        global $wpdb;
        $student_id = (int) $student_id;
        $states = [];
        foreach ($wpdb->get_results($wpdb->prepare("SELECT term_id, level, review_due FROM " . Schema::table('student_skill_state') . " WHERE student_id=%d", $student_id), ARRAY_A) as $row) {
            $states[(int) $row['term_id']] = $row;
        }
        $strong = static function ($term_id) use ($states) { return isset($states[$term_id]) && in_array($states[$term_id]['level'], ['proficient', 'mastered'], true); };
        $items = [];
        foreach ($states as $term_id => $state) {
            if ($state['level'] === 'developing' && self::struggling($student_id, $term_id)) {
                $weak_prerequisites = array_values(array_filter(Taxonomy::prerequisites($term_id), static function ($id) use ($strong) { return !$strong($id); }));
                $items[] = ['type' => 'help', 'term_id' => $term_id, 'lessons' => Taxonomy::linked_posts($term_id, OHMYLMS_LESSON_CPT), 'prerequisites' => $weak_prerequisites,
                    'message' => __('Recent answers on this skill had errors. Revisiting the lesson or a prerequisite may help.', 'ohmylms')];
            }
            if (!empty($state['review_due'])) {
                $items[] = ['type' => 'review', 'term_id' => $term_id, 'lessons' => [], 'prerequisites' => [], 'message' => __('Time for a short review to keep this skill fresh.', 'ohmylms')];
            }
        }
        foreach (get_terms(['taxonomy' => Taxonomy::NAME, 'hide_empty' => false, 'fields' => 'ids']) as $term_id) {
            $term_id = (int) $term_id;
            if (isset($states[$term_id])) { continue; }
            $prerequisites = Taxonomy::prerequisites($term_id);
            if ($prerequisites && count(array_filter($prerequisites, $strong)) === count($prerequisites)) {
                $items[] = ['type' => 'ready', 'term_id' => $term_id, 'lessons' => Taxonomy::linked_posts($term_id, OHMYLMS_LESSON_CPT), 'prerequisites' => [],
                    'message' => __('You are ready to start this skill.', 'ohmylms')];
            }
        }
        $order = ['help' => 0, 'review' => 1, 'ready' => 2];
        usort($items, static function ($left, $right) use ($order) { return $order[$left['type']] <=> $order[$right['type']]; });
        foreach ($items as &$item) {
            $skill = Taxonomy::describe($item['term_id']);
            $item['skill'] = $skill ? ['id' => $skill['id'], 'name' => $skill['name']] : null;
            $item['lessons'] = array_map(static function ($id) { return ['id' => $id, 'title' => get_the_title($id), 'url' => get_permalink($id)]; }, array_slice($item['lessons'], 0, 3));
            $item['prerequisites'] = array_map(static function ($id) { $term = get_term($id, Taxonomy::NAME); return ['id' => (int) $id, 'name' => $term && !is_wp_error($term) ? $term->name : '']; }, $item['prerequisites']);
        }
        return array_slice($items, 0, $limit);
    }

    /** Two or more misses among the last three independent first tries. */
    public static function struggling($student_id, $term_id) {
        global $wpdb;
        $rows = $wpdb->get_results($wpdb->prepare(
            "SELECT awarded, available FROM " . Schema::table('skill_evidence') . " WHERE student_id=%d AND term_id=%d AND role='primary' AND superseded=0 AND independent=1 ORDER BY evidence_at DESC, id DESC LIMIT 3",
            $student_id, $term_id
        ), ARRAY_A);
        $misses = count(array_filter($rows, static function ($row) { return (float) $row['awarded'] < (float) $row['available'] - 0.0001; }));
        return $misses >= 2;
    }
}
