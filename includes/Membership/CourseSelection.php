<?php
namespace OhMyLMS\Membership;

defined('ABSPATH') || exit;

/** Resolves live membership rules and keeps membership-owned enrollments in sync. */
final class CourseSelection {
    private static $queued = false;

    public static function ids($values) {
        return array_values(array_unique(array_filter(array_map('absint', (array) $values))));
    }

    /**
     * Courses a membership plan includes. Curriculum items (with everything beneath them) and
     * Learning Tracks are the rules to choose from. Legacy category and tag rules, saved before they
     * were replaced, still resolve so existing members keep the access they were granted until an
     * administrator removes those rules.
     */
    public static function resolve($products, $categories, $tags, $excluded, $curriculum = [], $tracks = []) {
        $ids = self::ids(array_column((array) $products, 'id'));
        $tax = ['relation' => 'OR'];
        foreach (['course_category' => $categories, 'course_tag' => $tags] as $taxonomy => $terms) {
            $terms = self::ids($terms);
            if ($terms) $tax[] = ['taxonomy' => $taxonomy, 'field' => 'term_id', 'terms' => $terms, 'include_children' => $taxonomy === 'course_category'];
        }
        if (count($tax) > 1) {
            $ids = array_merge($ids, get_posts(['post_type' => 'ohmylms-course', 'post_status' => 'publish', 'posts_per_page' => -1, 'fields' => 'ids', 'tax_query' => $tax]));
        }
        $curriculum = self::ids($curriculum);
        if ($curriculum) $ids = array_merge($ids, \OhMyLMS\Curriculum\Placement::course_ids_for_items($curriculum));
        $tracks = self::ids($tracks);
        if ($tracks) $ids = array_merge($ids, \OhMyLMS\Curriculum\Placement::course_ids_for_tracks($tracks));
        $ids = array_diff(self::ids($ids), self::ids($excluded));
        $result = [];
        foreach ($ids as $id) {
            if (get_post_type($id) !== 'ohmylms-course' || get_post_status($id) !== 'publish') continue;
            $result[] = ['id' => $id, 'value' => $id, 'name' => get_the_title($id), 'label' => get_the_title($id)];
        }
        return $result;
    }

    public static function init() {
        add_action('save_post', [__CLASS__, 'post_changed'], 20, 2);
        add_action('before_delete_post', [__CLASS__, 'post_changed'], 20, 2);
        add_action('set_object_terms', [__CLASS__, 'terms_changed'], 20, 4);
        foreach (['created_course_category', 'edited_course_category', 'delete_course_category', 'delete_course_tag', 'ohmylms_curriculum_changed', 'ohmylms_curriculum_items_deleted', 'ohmylms_after_enrolled_student', 'ohmylms_after_enrollment_processed', 'ohmylms_membership_status_updated'] as $hook) add_action($hook, [__CLASS__, 'queue']);
        add_action('shutdown', [__CLASS__, 'flush']);
    }
    public static function queue() { self::$queued = true; }
    public static function post_changed($id, $post) {
        if (in_array($post->post_type, ['ohmylms-course', 'ohmylms-membership'], true)) self::queue();
    }
    public static function terms_changed($id, $terms, $tt_ids, $taxonomy) {
        if (in_array($taxonomy, ['course_category', 'course_tag'], true)) self::queue();
    }
    public static function flush() {
        if (!self::$queued) return;
        self::$queued = false;
        foreach (get_posts(['post_type' => 'ohmylms-membership', 'post_status' => ['publish', 'draft', 'pending', 'future', 'private', 'trash'], 'posts_per_page' => -1, 'fields' => 'ids']) as $id) self::sync($id);
    }

    public static function sync($membership_id) {
        global $wpdb;
        $plan = ohmylms_get_membership($membership_id);
        if (!$plan) return;
        $courses = $plan->get_status() === 'publish' ? array_column($plan->get_products(), 'id') : [];
        $members = $wpdb->get_results($wpdb->prepare("SELECT user_id, order_id, status FROM {$wpdb->prefix}ohmylms_user_membership WHERE membership_id=%d AND status IN ('enrolled','pending')", $membership_id), ARRAY_A);
        $table = $wpdb->prefix . 'ohmylms_user_enrollment';
        // Adopt old checkout rows only when their order identifies this membership.
        foreach ($members as $member) {
            if ((int) $member['order_id'] > 0) $wpdb->query($wpdb->prepare("UPDATE $table SET membership_id=%d WHERE user_id=%d AND order_id=%d AND (membership_id IS NULL OR membership_id=0)", $membership_id, $member['user_id'], $member['order_id']));
        }
        $rows = $wpdb->get_results($wpdb->prepare("SELECT id,user_id,order_id,course_id,status FROM $table WHERE membership_id=%d", $membership_id), ARRAY_A);
        $desired = [];
        foreach ($members as $member) foreach ($courses as $course) {
            $key = $member['user_id'] . ':' . $course;
            if (!isset($desired[$key]) || $member['status'] === 'enrolled') $desired[$key] = [$member, $course];
        }
        foreach ($rows as $row) {
            $key = $row['user_id'] . ':' . $row['course_id'];
            $status = isset($desired[$key]) ? $desired[$key][0]['status'] : 'cancelled';
            $order = isset($desired[$key]) ? (int) $desired[$key][0]['order_id'] : (int) $row['order_id'];
            if ($row['status'] !== $status || (int) $row['order_id'] !== $order) $wpdb->update($table, ['status' => $status, 'order_id' => $order], ['id' => $row['id']]);
            unset($desired[$key]);
        }
        foreach ($desired as [$member, $course]) {
            $wpdb->insert($table, ['user_id' => (int) $member['user_id'], 'order_id' => (int) $member['order_id'], 'membership_id' => (int) $membership_id, 'course_id' => (int) $course, 'status' => $member['status'], 'progress' => 'running', 'start_date' => current_time('mysql')]);
        }
    }
}
