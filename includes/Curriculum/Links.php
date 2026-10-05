<?php
namespace OhMyLMS\Curriculum;

use OhMyLMS\Assessment\Schema as AssessmentSchema;
use OhMyLMS\QuestionBank\Banks;
use OhMyLMS\Skills\Taxonomy;

defined('ABSPATH') || exit;

/**
 * Curriculum membership of existing content. A link only says "this content belongs under
 * this curriculum item": it never copies content, changes access, or sets a learning mode.
 * Content can sit under several items, in the same or different curricula.
 *
 * Types: course, skill, bank (question bank) and quiz (a quiz or an exam, which is a quiz
 * with the exam preset).
 */
final class Links {
    const TYPES = ['course', 'skill', 'bank', 'quiz'];
    const MAX_PER_ITEM = 500;
    const POST_STATUSES = ['publish', 'draft', 'pending', 'private', 'future'];

    public static function table() { return Schema::table('curriculum_links'); }

    public static function valid_type($type) { return in_array($type, self::TYPES, true); }

    private static function post_type($type) {
        return $type === 'course' ? OHMYLMS_COURSE_CPT : ($type === 'quiz' ? OHMYLMS_QUIZ_CPT : '');
    }

    /** Does a link target of this type and ID exist (and is it not in the trash)? */
    public static function target_exists($type, $id) {
        $id = (int) $id;
        if ($id <= 0) { return false; }
        if ($type === 'course' || $type === 'quiz') {
            $status = get_post_status($id);
            return get_post_type($id) === self::post_type($type) && $status && !in_array($status, ['trash', 'auto-draft'], true);
        }
        if ($type === 'skill') { return (bool) term_exists($id, Taxonomy::NAME); }
        if ($type === 'bank') { return AssessmentSchema::ready() && Banks::get($id) !== null; }
        return false;
    }

    /** @return true|\WP_Error */
    public static function add($item_id, $type, $object_id) {
        global $wpdb;
        if (!Items::get($item_id)) { return Items::missing(); }
        if (!self::valid_type($type)) { return Access::error('ohmylms_link_invalid', __('Choose course, skill, question bank or quiz/exam content.', 'ohmylms')); }
        if (!self::target_exists($type, $object_id)) { return Access::error('ohmylms_link_invalid', __('That content does not exist.', 'ohmylms'), 404); }
        $count = (int) $wpdb->get_var($wpdb->prepare('SELECT COUNT(*) FROM ' . self::table() . ' WHERE item_id=%d', (int) $item_id));
        if ($count >= self::MAX_PER_ITEM) { return Access::error('ohmylms_link_limit', sprintf(__('A curriculum item can link to at most %d pieces of content.', 'ohmylms'), self::MAX_PER_ITEM), 409); }
        $ok = $wpdb->query($wpdb->prepare('INSERT IGNORE INTO ' . self::table() . ' (item_id, object_type, object_id, created_by, created_at) VALUES (%d, %s, %d, %d, %s)', (int) $item_id, $type, (int) $object_id, get_current_user_id(), current_time('mysql', true)));
        if ($ok === false) { return Access::error('ohmylms_link_failed', __('The link could not be saved.', 'ohmylms'), 500); }
        if ($type === 'course') { Placement::changed(); }
        return true;
    }

    /** Removing a link that does not exist succeeds, so repeated requests are harmless. */
    public static function remove($item_id, $type, $object_id) {
        global $wpdb;
        if (!Items::get($item_id)) { return Items::missing(); }
        if (!self::valid_type($type)) { return Access::error('ohmylms_link_invalid', __('Unknown content type.', 'ohmylms')); }
        $wpdb->delete(self::table(), ['item_id' => (int) $item_id, 'object_type' => $type, 'object_id' => (int) $object_id]);
        if ($type === 'course') { Placement::changed(); }
        return true;
    }

    /** Titles and status for known IDs of one type; deleted content is reported as unavailable. */
    public static function labels($type, array $ids) {
        $ids = array_values(array_unique(array_filter(array_map('intval', $ids))));
        $labels = [];
        foreach ($ids as $id) {
            if ($type === 'course' || $type === 'quiz') {
                $post = get_post($id);
                $valid = $post && $post->post_type === self::post_type($type) && $post->post_status !== 'trash';
                $labels[$id] = ['title' => $valid ? (get_the_title($post) ?: '#' . $id) : '', 'status' => $valid ? $post->post_status : 'missing'];
            } elseif ($type === 'skill') {
                $term = get_term($id, Taxonomy::NAME);
                $valid = $term && !is_wp_error($term);
                $labels[$id] = ['title' => $valid ? $term->name : '', 'status' => $valid ? 'active' : 'missing', 'code' => $valid ? (string) get_term_meta($id, '_ohmylms_skill_code', true) : ''];
            } elseif ($type === 'bank') {
                $bank = AssessmentSchema::ready() ? Banks::get($id) : null;
                $labels[$id] = ['title' => $bank ? $bank['name'] : '', 'status' => $bank ? $bank['visibility'] : 'missing'];
            }
            if (($labels[$id]['title'] ?? '') === '') { $labels[$id]['title'] = ''; }
        }
        return $labels;
    }

    /** Links of one item grouped by type, in the order they were added. */
    public static function for_item($item_id) {
        global $wpdb;
        $grouped = array_fill_keys(self::TYPES, []);
        foreach ($wpdb->get_results($wpdb->prepare('SELECT object_type, object_id FROM ' . self::table() . ' WHERE item_id=%d ORDER BY id', (int) $item_id), ARRAY_A) as $row) {
            if (isset($grouped[$row['object_type']])) { $grouped[$row['object_type']][] = (int) $row['object_id']; }
        }
        foreach ($grouped as $type => $ids) {
            $labels = self::labels($type, $ids);
            $grouped[$type] = array_map(static function ($id) use ($labels) { return ['id' => $id, 'available' => ($labels[$id]['status'] ?? 'missing') !== 'missing'] + $labels[$id]; }, $ids);
        }
        return $grouped;
    }

    /** Find content to link: matching titles, or the given IDs. Administrators see all statuses. */
    public static function targets($type, $search = '', array $include = []) {
        global $wpdb;
        $include = array_values(array_filter(array_map('intval', $include)));
        $rows = [];
        if ($type === 'course' || $type === 'quiz') {
            $args = ['post_type' => self::post_type($type), 'post_status' => self::POST_STATUSES, 'numberposts' => 20, 'orderby' => 'title', 'order' => 'ASC', 'suppress_filters' => true];
            if ($include) { $args['post__in'] = $include; $args['numberposts'] = count($include); } else { $args['s'] = sanitize_text_field((string) $search); }
            foreach (get_posts($args) as $post) { $rows[] = ['id' => (int) $post->ID, 'title' => get_the_title($post) ?: '#' . $post->ID, 'status' => $post->post_status]; }
        } elseif ($type === 'skill') {
            $args = ['taxonomy' => Taxonomy::NAME, 'hide_empty' => false, 'number' => $include ? count($include) : 20, 'orderby' => 'name'];
            if ($include) { $args['include'] = $include; } else { $args['search'] = sanitize_text_field((string) $search); }
            foreach (get_terms($args) as $term) { $rows[] = ['id' => (int) $term->term_id, 'title' => $term->name, 'status' => 'active', 'code' => (string) get_term_meta($term->term_id, '_ohmylms_skill_code', true)]; }
        } elseif ($type === 'bank' && AssessmentSchema::ready()) {
            $table = AssessmentSchema::table('qb_banks');
            if ($include) {
                $placeholders = implode(',', array_fill(0, count($include), '%d'));
                $found = $wpdb->get_results($wpdb->prepare("SELECT id, name, visibility FROM $table WHERE id IN ($placeholders) ORDER BY name", $include), ARRAY_A);
            } else {
                $found = $wpdb->get_results($wpdb->prepare("SELECT id, name, visibility FROM $table WHERE name LIKE %s ORDER BY name LIMIT 20", '%' . $wpdb->esc_like(sanitize_text_field((string) $search)) . '%'), ARRAY_A);
            }
            foreach ($found as $bank) { $rows[] = ['id' => (int) $bank['id'], 'title' => $bank['name'], 'status' => $bank['visibility']]; }
        }
        return $rows;
    }

    /** Curriculum items an object belongs to, each with its full path (for display in other modules). */
    public static function memberships($type, $object_id) {
        global $wpdb;
        $ids = array_map('intval', $wpdb->get_col($wpdb->prepare('SELECT item_id FROM ' . self::table() . ' WHERE object_type=%s AND object_id=%d ORDER BY item_id', $type, (int) $object_id)));
        $result = [];
        foreach ($ids as $id) {
            $item = Items::get($id);
            if ($item) { $result[] = Items::describe($item) + ['path' => Items::path_names($id, false)]; }
        }
        return $result;
    }

    /** Distinct object IDs of one type linked to any of the given items. */
    public static function object_ids(array $item_ids, $type) {
        global $wpdb;
        $item_ids = array_values(array_filter(array_map('intval', $item_ids)));
        if (!$item_ids || !self::valid_type($type)) { return []; }
        $placeholders = implode(',', array_fill(0, count($item_ids), '%d'));
        return array_map('intval', $wpdb->get_col($wpdb->prepare('SELECT DISTINCT object_id FROM ' . self::table() . " WHERE object_type=%s AND item_id IN ($placeholders) ORDER BY object_id", array_merge([$type], $item_ids))));
    }

    /** Drop every link to content that no longer exists. */
    public static function remove_object($type, $object_id) {
        global $wpdb;
        if (!self::valid_type($type) || !Schema::ready()) { return; }
        $wpdb->delete(self::table(), ['object_type' => $type, 'object_id' => (int) $object_id]);
        if ($type === 'course') { Placement::changed(); }
    }
}
