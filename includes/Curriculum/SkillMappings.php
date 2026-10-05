<?php
namespace OhMyLMS\Curriculum;

use OhMyLMS\Skills\Taxonomy;

defined('ABSPATH') || exit;

/**
 * Explicit links from a curriculum-specific skill to a shared skill.
 *
 * Skills are never merged by name. Each curriculum keeps its own skill (with its own
 * requirements, difficulty and syllabus version) and its own evidence; a mapping only lets a
 * combined view show them together. Rules:
 *  - directional: a specific skill points at a shared skill;
 *  - no chains: a skill cannot be both a mapped (specific) skill and a shared target, so
 *    evidence is never pooled through two hops;
 *  - `equivalent` mappings pool evidence in combined views; `related` mappings are shown for
 *    reference only and add no evidence;
 *  - the note records how the requirements, difficulty or syllabus versions differ.
 */
final class SkillMappings {
    const RELATIONS = ['equivalent', 'related'];
    const LOCK = 'ohmylms-skill-mappings';

    public static function table() { return Schema::table('skill_mappings'); }

    private static function describe(array $row) {
        $specific = Taxonomy::describe((int) $row['specific_term_id']);
        $shared = Taxonomy::describe((int) $row['shared_term_id']);
        return [
            'id' => (int) $row['id'],
            'specific_id' => (int) $row['specific_term_id'],
            'shared_id' => (int) $row['shared_term_id'],
            'specific' => $specific ? ['id' => $specific['id'], 'name' => $specific['name'], 'code' => $specific['code']] : null,
            'shared' => $shared ? ['id' => $shared['id'], 'name' => $shared['name'], 'code' => $shared['code']] : null,
            'relation' => $row['relation'],
            'note' => (string) $row['note'],
            'updated_at' => $row['updated_at'],
        ];
    }

    /** Mappings in which the skill is the specific side (pointing at shared skills) or the shared target. */
    public static function for_skill($term_id) {
        global $wpdb;
        $term_id = (int) $term_id;
        $up = $wpdb->get_results($wpdb->prepare('SELECT * FROM ' . self::table() . ' WHERE specific_term_id=%d ORDER BY id', $term_id), ARRAY_A);
        $down = $wpdb->get_results($wpdb->prepare('SELECT * FROM ' . self::table() . ' WHERE shared_term_id=%d ORDER BY id', $term_id), ARRAY_A);
        return ['maps_to' => array_map([__CLASS__, 'describe'], $up), 'mapped_from' => array_map([__CLASS__, 'describe'], $down)];
    }

    /** Every mapping, optionally limited to a set of skill IDs on either side. */
    public static function all(array $term_ids = []) {
        global $wpdb;
        $term_ids = array_values(array_filter(array_map('intval', $term_ids)));
        if ($term_ids) {
            $placeholders = implode(',', array_fill(0, count($term_ids), '%d'));
            $rows = $wpdb->get_results($wpdb->prepare('SELECT * FROM ' . self::table() . " WHERE specific_term_id IN ($placeholders) OR shared_term_id IN ($placeholders) ORDER BY id", array_merge($term_ids, $term_ids)), ARRAY_A);
        } else {
            $rows = $wpdb->get_results('SELECT * FROM ' . self::table() . ' ORDER BY id', ARRAY_A);
        }
        return $rows ?: [];
    }

    /** Create or update one mapping. @return array|\WP_Error */
    public static function save($specific_id, $shared_id, $relation = 'equivalent', $note = '') {
        global $wpdb;
        $specific_id = (int) $specific_id;
        $shared_id = (int) $shared_id;
        $relation = sanitize_key((string) $relation);
        $note = sanitize_textarea_field((string) $note);
        if (!in_array($relation, self::RELATIONS, true)) { return Access::error('ohmylms_mapping_invalid', __('Choose an equivalent or related mapping.', 'ohmylms')); }
        if (mb_strlen($note) > 1000) { return Access::error('ohmylms_mapping_invalid', __('Notes can have at most 1000 characters.', 'ohmylms')); }
        if ($specific_id === $shared_id) { return Access::error('ohmylms_mapping_invalid', __('A skill cannot be mapped to itself.', 'ohmylms')); }
        foreach ([$specific_id, $shared_id] as $term_id) {
            if ($term_id <= 0 || !term_exists($term_id, Taxonomy::NAME)) { return Access::error('ohmylms_mapping_invalid', __('Both skills must exist.', 'ohmylms'), 404); }
        }
        $lock = self::LOCK . '-' . md5($wpdb->prefix);
        if ((string) $wpdb->get_var($wpdb->prepare('SELECT GET_LOCK(%s, 5)', $lock)) !== '1') { return Access::error('ohmylms_mapping_busy', __('Another mapping change is being saved. Try again.', 'ohmylms'), 409); }
        try {
            $table = self::table();
            if ($wpdb->get_var($wpdb->prepare("SELECT id FROM $table WHERE shared_term_id=%d LIMIT 1", $specific_id))) {
                return Access::error('ohmylms_mapping_chain', __('This skill is already the shared skill for other skills. A skill cannot be both, so evidence is never combined through two steps.', 'ohmylms'), 409);
            }
            if ($wpdb->get_var($wpdb->prepare("SELECT id FROM $table WHERE specific_term_id=%d LIMIT 1", $shared_id))) {
                return Access::error('ohmylms_mapping_chain', __('The chosen shared skill is itself mapped to another skill. Choose that skill instead.', 'ohmylms'), 409);
            }
            $now = current_time('mysql', true);
            $existing = (int) $wpdb->get_var($wpdb->prepare("SELECT id FROM $table WHERE specific_term_id=%d AND shared_term_id=%d", $specific_id, $shared_id));
            if ($existing) {
                $ok = $wpdb->update($table, ['relation' => $relation, 'note' => $note, 'updated_at' => $now], ['id' => $existing]);
            } else {
                $ok = $wpdb->insert($table, ['specific_term_id' => $specific_id, 'shared_term_id' => $shared_id, 'relation' => $relation, 'note' => $note, 'created_by' => get_current_user_id(), 'created_at' => $now, 'updated_at' => $now]);
                $existing = (int) $wpdb->insert_id;
            }
            if ($ok === false) { return Access::error('ohmylms_mapping_failed', __('The mapping could not be saved.', 'ohmylms'), 500); }
            return self::describe($wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE id=%d", $existing), ARRAY_A));
        } finally {
            $wpdb->get_var($wpdb->prepare('SELECT RELEASE_LOCK(%s)', $lock));
        }
    }

    public static function remove($specific_id, $shared_id) {
        global $wpdb;
        $wpdb->delete(self::table(), ['specific_term_id' => (int) $specific_id, 'shared_term_id' => (int) $shared_id]);
        return true;
    }

    /** Drop mappings of a deleted skill. */
    public static function remove_skill($term_id) {
        global $wpdb;
        if (!Schema::ready()) { return; }
        $wpdb->delete(self::table(), ['specific_term_id' => (int) $term_id]);
        $wpdb->delete(self::table(), ['shared_term_id' => (int) $term_id]);
    }
}
