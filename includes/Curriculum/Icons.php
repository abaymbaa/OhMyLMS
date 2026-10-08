<?php
namespace OhMyLMS\Curriculum;

defined('ABSPATH') || exit;

/** The editor and API share one supported icon catalogue. Empty means use the default for the node kind. */
final class Icons {
    public static function clean($value) {
        $options = json_decode(file_get_contents(dirname(__DIR__, 2) . '/assets/src/features/curriculum/icons.json'), true);
        if (!is_string($value) || ($value !== '' && !in_array($value, array_column($options ?: [], 'id'), true))) {
            return Access::error('ohmylms_curriculum_icon_invalid', __('Choose an icon from the icon picker.', 'ohmylms'));
        }
        return $value;
    }
}
