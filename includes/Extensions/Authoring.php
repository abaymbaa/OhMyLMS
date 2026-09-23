<?php
namespace OMLMS\Extensions;

final class Authoring {
    public static function init() {
        add_action('omlms_before_creating_new_question', [__CLASS__, 'validate_question']);
        add_action('creator_lms_before_updating_question', [__CLASS__, 'validate_question']);
    }
    public static function validate_question($question) {
        $settings = $question->get_settings();
        $definition = Registry::get('question', $settings['type'] ?? '');
        $schema = $definition['editor']['schema'] ?? null;
        if (!$schema) { return; }
        $valid = rest_validate_value_from_schema($settings, $schema, 'settings');
        if (is_wp_error($valid)) {
            throw new \OMLMS\DataException('ohmylms_invalid_question_settings', $valid->get_error_message(), 400);
        }
    }
}
