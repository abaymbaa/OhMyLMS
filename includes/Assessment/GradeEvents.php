<?php
namespace OhMyLMS\Assessment;

defined('ABSPATH') || exit;

/**
 * Item-level grade history. Each grade or regrade is a new event; the previous
 * current event for the same item is marked superseded. Every event also gets
 * an evidence-outbox row in the same transaction, so skill evidence is updated
 * exactly once per grade even if a request dies after commit.
 */
final class GradeEvents {
    /**
     * @param array $event source_type, source_id, item_id, student_id, question_id, version_id,
     *                     awarded, max_marks, fraction, correct, grader, reviewer_id, reason
     * @return int event ID
     */
    public static function record(array $event) {
        global $wpdb;
        $table = Schema::table('grade_events');
        $part = (string) ($event['part_id'] ?? '');
        $previous = (int) $wpdb->get_var($wpdb->prepare(
            "SELECT id FROM $table WHERE source_type=%s AND source_id=%d AND item_id=%d AND part_id=%s AND superseded_by=0 ORDER BY id DESC LIMIT 1",
            $event['source_type'], $event['source_id'], $event['item_id'], $part
        ));
        $row = [
            'source_type' => (string) $event['source_type'],
            'source_id' => (int) $event['source_id'],
            'item_id' => (int) $event['item_id'],
            'part_id' => $part,
            'student_id' => (int) ($event['student_id'] ?? 0),
            'question_id' => (int) $event['question_id'],
            'version_id' => (int) $event['version_id'],
            'awarded' => round((float) $event['awarded'], 4),
            'max_marks' => round((float) $event['max_marks'], 4),
            'fraction' => round((float) $event['fraction'], 6),
            'correct' => !empty($event['correct']) ? 1 : 0,
            'grader' => (string) ($event['grader'] ?? 'auto'),
            'reviewer_id' => (int) ($event['reviewer_id'] ?? 0),
            'reason' => (string) ($event['reason'] ?? ''),
            'supersedes' => $previous,
            'created_at' => current_time('mysql', true),
        ];
        if (!$wpdb->insert($table, $row)) { throw new \RuntimeException('Grade event write failed'); }
        $id = (int) $wpdb->insert_id;
        if ($previous && $wpdb->update($table, ['superseded_by' => $id], ['id' => $previous]) === false) { throw new \RuntimeException('Grade event supersede failed'); }
        if (!$wpdb->insert(Schema::table('evidence_outbox'), ['grade_event_id' => $id, 'status' => 'pending', 'created_at' => current_time('mysql', true)])) {
            throw new \RuntimeException('Evidence outbox write failed');
        }
        return $id;
    }

    /** Current (non-superseded) event for an item, or null. */
    public static function current($source_type, $source_id, $item_id) {
        global $wpdb;
        return $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM " . Schema::table('grade_events') . " WHERE source_type=%s AND source_id=%d AND item_id=%d AND superseded_by=0 ORDER BY id DESC LIMIT 1",
            $source_type, $source_id, $item_id
        ), ARRAY_A) ?: null;
    }

    /** Full history for an item, oldest first. */
    public static function history($source_type, $source_id, $item_id) {
        global $wpdb;
        return $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM " . Schema::table('grade_events') . " WHERE source_type=%s AND source_id=%d AND item_id=%d ORDER BY id",
            $source_type, $source_id, $item_id
        ), ARRAY_A);
    }

    public static function get($id) {
        global $wpdb;
        return $wpdb->get_row($wpdb->prepare("SELECT * FROM " . Schema::table('grade_events') . " WHERE id=%d", (int) $id), ARRAY_A) ?: null;
    }
}
