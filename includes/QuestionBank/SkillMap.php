<?php
namespace OhMyLMS\QuestionBank;

use OhMyLMS\Assessment\Schema;
use OhMyLMS\Skills\Taxonomy;

defined('ABSPATH') || exit;

/**
 * Part-level skill attribution for questions.
 *
 * Draft mapping lives in post meta `_ohmylms_skill_map`:
 *   ['p1' => ['primary' => term_id, 'supporting' => [term_id, ...]], ...]
 * Each atomic part assesses one primary skill; supporting skills inform
 * recommendations only. The mapping is part of the version content hash and
 * is frozen into qb_version_skills when a version is captured.
 */
final class SkillMap {
    const META = '_ohmylms_skill_map';

    /** Current normalized mapping for the editable question. */
    public static function current($question_id) {
        $map = get_post_meta((int) $question_id, self::META, true);
        return self::normalize(is_array($map) ? $map : []);
    }

    public static function normalize(array $map) {
        $clean = [];
        foreach ($map as $part => $roles) {
            $part = preg_replace('/[^a-z0-9_-]/i', '', (string) $part) ?: 'p1';
            $primary = (int) ($roles['primary'] ?? 0);
            $supporting = array_values(array_unique(array_filter(array_map('intval', (array) ($roles['supporting'] ?? [])), static function ($id) use ($primary) { return $id > 0 && $id !== $primary; })));
            sort($supporting);
            if ($primary || $supporting) { $clean[$part] = ['primary' => $primary, 'supporting' => $supporting]; }
        }
        ksort($clean);
        return $clean;
    }

    /** Validate term IDs against the skills taxonomy; returns normalized map or WP_Error. */
    public static function validate($map) {
        if (!is_array($map)) { return new \WP_Error('ohmylms_skill_map_invalid', __('Skill mapping must be an object keyed by part.', 'ohmylms'), ['status' => 400]); }
        $map = self::normalize($map);
        foreach ($map as $roles) {
            foreach (array_merge([$roles['primary']], $roles['supporting']) as $term_id) {
                if ($term_id && !term_exists((int) $term_id, Taxonomy::NAME)) {
                    return new \WP_Error('ohmylms_skill_missing', __('A mapped skill does not exist.', 'ohmylms'), ['status' => 400, 'term_id' => $term_id]);
                }
            }
        }
        return $map;
    }

    /** Save the draft mapping and keep taxonomy relationships in step for filtering. */
    public static function save($question_id, array $map) {
        $map = self::normalize($map);
        update_post_meta((int) $question_id, self::META, $map);
        $terms = [];
        foreach ($map as $roles) { $terms = array_merge($terms, [$roles['primary']], $roles['supporting']); }
        wp_set_object_terms((int) $question_id, array_values(array_unique(array_filter($terms))), Taxonomy::NAME);
        return $map;
    }

    /** Freeze the mapping for a newly captured version. */
    public static function freeze($question_id, $version_id) {
        global $wpdb;
        $table = Schema::table('qb_version_skills');
        foreach (self::current($question_id) as $part => $roles) {
            $rows = $roles['primary'] ? [[$roles['primary'], 'primary']] : [];
            foreach ($roles['supporting'] as $term_id) { $rows[] = [$term_id, 'supporting']; }
            foreach ($rows as [$term_id, $role]) {
                $wpdb->query($wpdb->prepare(
                    "INSERT IGNORE INTO $table (version_id, part_id, term_id, skill_uuid, role) VALUES (%d, %s, %d, %s, %s)",
                    $version_id, $part, $term_id, Taxonomy::uuid($term_id), $role
                ));
            }
        }
    }

    /** Frozen mapping of a version: list of ['part_id','term_id','role']. */
    public static function for_version($version_id) {
        global $wpdb;
        $table = Schema::table('qb_version_skills');
        return $wpdb->get_results($wpdb->prepare("SELECT part_id, term_id, skill_uuid, role FROM $table WHERE version_id=%d ORDER BY part_id, role", (int) $version_id), ARRAY_A);
    }
}
