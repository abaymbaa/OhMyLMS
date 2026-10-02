<?php
namespace OhMyLMS\Assessment;

defined('ABSPATH') || exit;

/**
 * Durable, server-received responses for versioned attempts.
 *
 * Autosave writes the latest response per item (with a client sequence number so a
 * late, older request cannot overwrite a newer one) and appends a response event.
 * Deadline finalization grades only these server-received responses.
 */
final class Responses {
    /**
     * Save one item's response. Responses must be untokenized option IDs/text already.
     *
     * @return array|\WP_Error ['item_id','sequence','received_at','accepted'=>bool]
     */
    public static function save($attempt_id, array $item, $response, $sequence) {
        global $wpdb;
        $sequence = max(0, (int) $sequence);
        $table = Schema::table('response_drafts');
        $existing = $wpdb->get_row($wpdb->prepare("SELECT id, sequence FROM $table WHERE attempt_id=%d AND item_id=%d", $attempt_id, $item['id']), ARRAY_A);
        $now = current_time('mysql', true);
        if ($existing && (int) $existing['sequence'] > $sequence) {
            return ['item_id' => (int) $item['id'], 'sequence' => (int) $existing['sequence'], 'received_at' => $now, 'accepted' => false];
        }
        $encoded = wp_json_encode($response);
        $ok = $existing
            ? $wpdb->update($table, ['response' => $encoded, 'sequence' => $sequence, 'received_at' => $now], ['id' => (int) $existing['id']])
            : $wpdb->insert($table, ['attempt_id' => (int) $attempt_id, 'item_id' => (int) $item['id'], 'response' => $encoded, 'sequence' => $sequence, 'received_at' => $now]);
        if ($ok === false) { return new \WP_Error('quiz_storage', __('Could not save your answer. Please retry.', 'ohmylms'), ['status' => 500]); }
        $wpdb->insert(Schema::table('response_events'), ['attempt_id' => (int) $attempt_id, 'item_id' => (int) $item['id'], 'sequence' => $sequence, 'response' => $encoded, 'received_at' => $now]);
        return ['item_id' => (int) $item['id'], 'sequence' => $sequence, 'received_at' => $now, 'accepted' => true];
    }

    /** @return array question_id => response for every server-received draft. */
    public static function saved($attempt_id) {
        global $wpdb;
        $drafts = Schema::table('response_drafts'); $items = Schema::table('attempt_items');
        $rows = $wpdb->get_results($wpdb->prepare("SELECT i.question_id, d.response FROM $drafts d JOIN $items i ON i.id=d.item_id AND i.attempt_id=d.attempt_id WHERE d.attempt_id=%d", (int) $attempt_id), ARRAY_A);
        $result = [];
        foreach ($rows as $row) {
            $value = json_decode($row['response'], true);
            if ($value !== null) { $result[(int) $row['question_id']] = $value; }
        }
        return $result;
    }

    /** Saved drafts keyed by item ID, for resuming a delivery. */
    public static function for_resume($attempt_id) {
        global $wpdb;
        $rows = $wpdb->get_results($wpdb->prepare("SELECT item_id, response, sequence FROM " . Schema::table('response_drafts') . " WHERE attempt_id=%d", (int) $attempt_id), ARRAY_A);
        $result = [];
        foreach ($rows as $row) { $result[(int) $row['item_id']] = ['response' => json_decode($row['response'], true), 'sequence' => (int) $row['sequence']]; }
        return $result;
    }
}
