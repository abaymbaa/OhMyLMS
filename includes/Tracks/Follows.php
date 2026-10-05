<?php
namespace OhMyLMS\Tracks;

use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Links;
use OhMyLMS\Curriculum\Schema;

defined('ABSPATH') || exit;

/**
 * A learner's choice to show a track on their own dashboard.
 *
 * Following is deliberately thin: one row per learner and track. It never creates or changes
 * an enrollment, never grants access to a course or its content, and never affects course
 * completion or skill state. Removing a track from the dashboard deletes only that row.
 */
final class Follows {
    const MAX_PER_USER = 50;

    public static function table() { return Schema::table('track_follows'); }

    public static function is_following($user_id, $track_id) {
        global $wpdb;
        return (bool) $wpdb->get_var($wpdb->prepare('SELECT id FROM ' . self::table() . ' WHERE user_id=%d AND track_id=%d', (int) $user_id, (int) $track_id));
    }

    /** Following needs a published track; repeating the request is harmless. */
    public static function follow($user_id, $track_id) {
        global $wpdb;
        $track = Tracks::get($track_id);
        if (!$track || $track['status'] !== 'published') { return Tracks::missing(); }
        if (!self::is_following($user_id, $track_id)) {
            if ((int) $wpdb->get_var($wpdb->prepare('SELECT COUNT(*) FROM ' . self::table() . ' WHERE user_id=%d', (int) $user_id)) >= self::MAX_PER_USER) {
                return Access::error('ohmylms_track_follow_limit', sprintf(__('You can follow at most %d tracks. Remove one first.', 'ohmylms'), self::MAX_PER_USER), 409);
            }
            $inserted = $wpdb->query($wpdb->prepare('INSERT IGNORE INTO ' . self::table() . ' (track_id, user_id, followed_at) VALUES (%d, %d, %s)', (int) $track_id, (int) $user_id, current_time('mysql', true)));
            if ($inserted === false) { return Access::error('ohmylms_track_failed', __('The track could not be added to your dashboard.', 'ohmylms'), 500); }
        }
        return true;
    }

    public static function unfollow($user_id, $track_id) {
        global $wpdb;
        $wpdb->delete(self::table(), ['user_id' => (int) $user_id, 'track_id' => (int) $track_id]);
        return true;
    }

    /** Published tracks the learner follows, in the order they were added. */
    public static function followed($user_id) {
        global $wpdb;
        return $wpdb->get_results($wpdb->prepare('SELECT t.* FROM ' . self::table() . ' f JOIN ' . Tracks::table() . " t ON t.id=f.track_id WHERE f.user_id=%d AND t.status='published' ORDER BY f.followed_at, f.id", (int) $user_id), ARRAY_A) ?: [];
    }

    /** IDs of courses the learner is currently enrolled in. */
    public static function enrolled_courses($user_id) {
        global $wpdb;
        return array_map('intval', $wpdb->get_col($wpdb->prepare("SELECT DISTINCT course_id FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE user_id=%d AND status='enrolled'", (int) $user_id)));
    }

    /** Every course a track refers to: direct members plus courses linked under its curriculum members. */
    public static function track_courses($track_id) {
        $courses = []; $items = [];
        foreach (Tracks::members($track_id) as $member) {
            if ($member['type'] === 'course') { $courses[] = $member['id']; } else { $items = array_merge($items, Items::with_descendants($member['id'])); }
        }
        return array_values(array_unique(array_merge($courses, $items ? Links::object_ids($items, 'course') : [])));
    }

    /**
     * Published tracks the learner has not added, most relevant first. Relevance is only the
     * number of the learner's enrolled courses a track includes; ties keep the administrator's order.
     */
    public static function suggested($user_id, $limit = 12) {
        $following = array_map('intval', array_column(self::followed($user_id), 'id'));
        $enrolled = self::enrolled_courses($user_id);
        $suggestions = [];
        foreach (Tracks::all('published') as $row) {
            if (in_array((int) $row['id'], $following, true) || !Tracks::members((int) $row['id'])) { continue; }
            $overlap = count(array_intersect($enrolled, self::track_courses((int) $row['id'])));
            $suggestions[] = ['row' => $row, 'overlap' => $overlap];
        }
        usort($suggestions, static function ($left, $right) { return $right['overlap'] <=> $left['overlap'] ?: (int) $left['row']['position'] <=> (int) $right['row']['position'] ?: (int) $left['row']['id'] <=> (int) $right['row']['id']; });
        return array_map(static function ($suggestion) { return $suggestion['row'] + ['enrolled_overlap' => $suggestion['overlap']]; }, array_slice($suggestions, 0, $limit));
    }

    public static function remove_user($user_id) {
        global $wpdb;
        if (!Schema::ready()) { return; }
        $wpdb->delete(self::table(), ['user_id' => (int) $user_id]);
    }
}
