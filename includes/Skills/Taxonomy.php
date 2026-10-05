<?php
namespace OhMyLMS\Skills;

defined('ABSPATH') || exit;

/**
 * Learning-skill catalogue. Independent of the student profile "skills" field,
 * which stays a free-text profile attribute.
 *
 * Terms carry a stable UUID (for import/export), an optional short code and
 * prerequisite skills (acyclic). Lessons and courses are linked through the
 * same taxonomy; questions through QuestionBank\SkillMap.
 */
final class Taxonomy {
    const NAME = 'ohmylms_skill';

    public static function register() {
        register_taxonomy(self::NAME, [OHMYLMS_QUESTION_CPT, OHMYLMS_LESSON_CPT, OHMYLMS_COURSE_CPT], [
            'labels' => [
                'name' => __('Skills', 'ohmylms'),
                'singular_name' => __('Skill', 'ohmylms'),
                'add_new_item' => __('Add skill', 'ohmylms'),
                'edit_item' => __('Edit skill', 'ohmylms'),
                'search_items' => __('Search skills', 'ohmylms'),
            ],
            'hierarchical' => true,
            'public' => false,
            'show_ui' => false,
            'show_in_rest' => false,
            'rewrite' => false,
            'query_var' => false,
            'capabilities' => [
                'manage_terms' => 'edit_posts',
                'edit_terms' => 'edit_posts',
                'delete_terms' => 'manage_options',
                'assign_terms' => 'edit_posts',
            ],
        ]);
        register_term_meta(self::NAME, '_ohmylms_skill_uuid', ['type' => 'string', 'single' => true]);
        register_term_meta(self::NAME, '_ohmylms_skill_code', ['type' => 'string', 'single' => true]);
        register_term_meta(self::NAME, '_ohmylms_prerequisites', ['type' => 'array', 'single' => true]);
    }

    /** Stable UUID for a skill, assigned on first use. */
    public static function uuid($term_id) {
        $term_id = (int) $term_id;
        if (!$term_id) { return ''; }
        $uuid = (string) get_term_meta($term_id, '_ohmylms_skill_uuid', true);
        if ($uuid === '' && term_exists($term_id, self::NAME)) {
            $uuid = wp_generate_uuid4();
            add_term_meta($term_id, '_ohmylms_skill_uuid', $uuid, true) || ($uuid = (string) get_term_meta($term_id, '_ohmylms_skill_uuid', true));
        }
        return $uuid;
    }

    public static function by_uuid($uuid) {
        $terms = get_terms(['taxonomy' => self::NAME, 'hide_empty' => false, 'meta_key' => '_ohmylms_skill_uuid', 'meta_value' => (string) $uuid, 'number' => 1, 'fields' => 'ids']);
        return is_array($terms) && $terms ? (int) $terms[0] : 0;
    }

    /** @return int[] */
    public static function prerequisites($term_id) {
        $value = get_term_meta((int) $term_id, '_ohmylms_prerequisites', true);
        return array_values(array_filter(array_map('intval', is_array($value) ? $value : [])));
    }

    /** Set prerequisites after rejecting unknown terms, self-references and cycles. */
    public static function set_prerequisites($term_id, array $prerequisites) {
        $term_id = (int) $term_id;
        $prerequisites = array_values(array_unique(array_filter(array_map('intval', $prerequisites))));
        foreach ($prerequisites as $id) {
            if ($id === $term_id) { return new \WP_Error('ohmylms_skill_cycle', __('A skill cannot be its own prerequisite.', 'ohmylms'), ['status' => 400]); }
            if (!term_exists($id, self::NAME)) { return new \WP_Error('ohmylms_skill_missing', __('A prerequisite skill does not exist.', 'ohmylms'), ['status' => 400]); }
            if (self::reaches($id, $term_id)) {
                return new \WP_Error('ohmylms_skill_cycle', __('These prerequisites would create a cycle.', 'ohmylms'), ['status' => 400, 'term_id' => $id]);
            }
        }
        update_term_meta($term_id, '_ohmylms_prerequisites', $prerequisites);
        return $prerequisites;
    }

    /** Does following prerequisites from $from eventually reach $target? */
    public static function reaches($from, $target, array $seen = []) {
        if ((int) $from === (int) $target) { return true; }
        if (isset($seen[$from])) { return false; }
        $seen[$from] = true;
        foreach (self::prerequisites($from) as $next) {
            if (self::reaches($next, $target, $seen)) { return true; }
        }
        return false;
    }

    /** Public, JSON-safe description of a skill. */
    public static function describe($term) {
        $term = $term instanceof \WP_Term ? $term : get_term((int) $term, self::NAME);
        if (!$term || is_wp_error($term)) { return null; }
        return [
            'id' => (int) $term->term_id,
            'uuid' => self::uuid($term->term_id),
            'name' => $term->name,
            'slug' => $term->slug,
            'code' => (string) get_term_meta($term->term_id, '_ohmylms_skill_code', true),
            'description' => $term->description,
            'parent' => (int) $term->parent,
            'prerequisites' => self::prerequisites($term->term_id),
            'public_practice' => (bool) get_term_meta($term->term_id, '_ohmylms_public_practice', true),
            'lessons' => self::linked_posts($term->term_id, OHMYLMS_LESSON_CPT),
            'courses' => self::linked_posts($term->term_id, OHMYLMS_COURSE_CPT),
        ];
    }

    /** @return int[] */
    public static function linked_posts($term_id, $post_type) {
        return array_map('intval', get_posts(['post_type' => $post_type, 'post_status' => 'any', 'fields' => 'ids', 'numberposts' => 200,
            'tax_query' => [['taxonomy' => self::NAME, 'field' => 'term_id', 'terms' => (int) $term_id, 'include_children' => false]]]));
    }
}
