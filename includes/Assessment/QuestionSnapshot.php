<?php
namespace OhMyLMS\Assessment;

defined('ABSPATH') || exit;

/**
 * Read-only question object built from an immutable version row.
 *
 * It exposes the same accessors graders and renderers use on the editable
 * OhMyLMS\Data\Question, so a version-aware question type grades exactly what
 * the learner saw, never the current draft.
 */
class QuestionSnapshot {
    private $version;

    public function __construct(array $version) {
        $this->version = $version;
        // Option images resolve to the copies frozen with this version.
        foreach ((array) ($version['options'] ?? []) as $index => $option) {
            $id = (int) ($option['id'] ?? 0);
            if (!empty($option['image_url'])) { $this->version['options'][$index]['image_url'] = $this->frozen_url('option:' . $id, (string) $option['image_url']); }
            if (!empty($option['matching_data']['image_url'])) { $this->version['options'][$index]['matching_data']['image_url'] = $this->frozen_url('match:' . $id, (string) $option['matching_data']['image_url']); }
        }
    }

    /** Decode a qb_question_versions row (JSON columns) into a snapshot. */
    public static function from_row($row) {
        if (!$row) { return null; }
        $row = (array) $row;
        foreach (['settings', 'options', 'media', 'extension', 'parts'] as $column) {
            $value = isset($row[$column]) && is_string($row[$column]) ? json_decode($row[$column], true) : ($row[$column] ?? []);
            $row[$column] = is_array($value) ? $value : [];
        }
        return new self($row);
    }

    public function get_id() { return (int) $this->version['question_id']; }
    public function get_version_id() { return (int) $this->version['id']; }
    public function get_version_no() { return (int) $this->version['version_no']; }
    public function get_uuid() { return (string) $this->version['question_uuid']; }
    public function get_type() { return (string) $this->version['type']; }
    public function get_name() { return (string) $this->version['title']; }
    public function get_description() { return \OhMyLMS\QuestionBank\MediaFreezer::body((string) $this->version['body'], $this->frozen()); }
    public function get_settings(): array { return $this->version['settings']; }
    /** Full option rows, including correctness. Server-side use only. */
    public function get_questions(): array { return $this->version['options']; }
    public function get_correct_options() {
        return array_values(array_filter($this->version['options'], static function ($option) { return !empty($option['is_correct']); }));
    }
    public function get_parts() { return $this->version['parts'] ?: [['id' => 'p1', 'fraction' => 1]]; }
    public function get_extension_settings() { return $this->version['extension']; }
    public function get_thumbnail_id() { return (int) ($this->version['media']['thumbnail_id'] ?? 0); }
    public function get_image_id() { return (int) ($this->version['media']['image_id'] ?? 0); }
    public function get_video_id() { return (int) ($this->version['media']['video_id'] ?? 0); }
    public function get_image_url() { return $this->frozen_url('image', (string) ($this->version['media']['image_url'] ?? '')); }
    public function get_video_url() { return $this->frozen_url('video', (string) ($this->version['media']['video_url'] ?? '')); }
    /** Frozen media copies captured with this version (see QuestionBank\MediaFreezer). */
    public function frozen() { return (array) ($this->version['media']['frozen'] ?? []); }
    private function frozen_url($key, $live) {
        $frozen = $this->frozen();
        return isset($frozen[$key]['url']) ? (string) $frozen[$key]['url'] : $live;
    }
    public function is_migration_snapshot() { return !empty($this->version['is_migration_snapshot']); }
    public function to_array() { return $this->version; }

    /** Types whose option text is the expected answer and must never reach the learner. */
    public static function hides_option_text($type) {
        return in_array($type, ['statement', 'fill-in-the-blank', 'short-text', 'long-text'], true);
    }

    /**
     * Learner-safe question in the array shape the quiz templates render.
     *
     * Correctness, expected text and teacher-only settings are removed. Option IDs are
     * replaced by per-delivery tokens so markup cannot reveal matches or ordering.
     *
     * @param array $option_order Option IDs in delivery order.
     * @param array $tokens       option id => token.
     * @param array $display      Extra frozen presentation data (e.g. matching definition order).
     */
    public function student_view(array $option_order = [], array $tokens = [], array $display = [], array $definition_tokens = []) {
        $type = $this->get_type();
        $by_id = [];
        foreach ($this->version['options'] as $option) { $by_id[(int) $option['id']] = $option; }
        $ordered = [];
        foreach ($option_order ?: array_keys($by_id) as $option_id) {
            if (!isset($by_id[(int) $option_id])) { continue; }
            $ordered[] = $this->safe_option($by_id[(int) $option_id], $tokens, $type);
        }
        $definitions = [];
        foreach ((array) ($display['definitions'] ?? []) as $option_id) {
            if (isset($by_id[(int) $option_id])) { $definitions[] = $this->safe_option($by_id[(int) $option_id], $definition_tokens ?: $tokens, $type); }
        }
        // Only settings a renderer needs are public; a type may name more via 'public_settings'.
        $definition = \OhMyLMS\Extensions\Registry::get('question', $type);
        $public = array_merge(['type', 'required', 'score', 'randomize'], (array) ($definition['public_settings'] ?? []));
        $settings = array_intersect_key($this->get_settings(), array_flip($public));
        if ($type === 'structured') { $settings['parts'] = Structured::public_parts($this->get_settings()); }
        return InlineBlanks::public_view([
            'id' => $this->get_id(),
            'uuid' => $this->get_uuid(),
            'version_id' => $this->get_version_id(),
            'name' => $this->get_name(),
            'description' => $this->get_description(),
            'settings' => $settings,
            'questions' => $ordered,
            'definitions' => $definitions,
            'image_src' => $this->get_image_url(),
            'video_src' => $this->get_video_url(),
            'frozen' => true,
        ]);
    }

    private function safe_option(array $option, array $tokens, $type) {
        $id = (int) $option['id'];
        $matching = is_array($option['matching_data'] ?? null) ? $option['matching_data'] : [];
        return [
            'id' => $tokens[$id] ?? (string) $id,
            'question_id' => $this->get_id(),
            'answer' => self::hides_option_text($type) ? '' : (string) ($option['answer'] ?? ''),
            'order_number' => 0,
            'image_url' => (string) ($option['image_url'] ?? ''),
            'thumbnail_id' => (int) ($option['thumbnail_id'] ?? 0),
            'matching_data' => array_intersect_key($matching, array_flip(['label', 'image_url'])),
        ];
    }
}
