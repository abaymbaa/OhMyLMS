<?php
namespace OhMyLMS\Curriculum;

use OhMyLMS\Learning\Catalog;

defined('ABSPATH') || exit;

/** A grade/subject skill collection has its own profile, independent of commercial course settings. */
final class SyllabusSettings {
    const META = '_ohmylms_syllabus_settings';

    public static function defaults() {
        return ['grade' => '', 'subject' => '', 'language' => '', 'categories' => ['Core', 'Extended', 'Advanced']];
    }

    public static function category_allowed($category, array $categories) {
        return $category === '' || in_array($category, $categories, true);
    }

    public static function check_category($syllabus_id, array $fields) {
        if (!isset($fields['category']) || self::category_allowed($fields['category'], self::get($syllabus_id)['categories'])) { return true; }
        return Access::error('ohmylms_syllabus_category_unknown', __('Choose a category created on the syllabus home.', 'ohmylms'));
    }

    public static function clean(array $data) {
        $clean = [];
        foreach (['grade', 'subject', 'language'] as $field) {
            if (!array_key_exists($field, $data)) { continue; }
            if (!is_string($data[$field])) { return Access::error('ohmylms_syllabus_settings_invalid', __('Syllabus profile fields must be text.', 'ohmylms')); }
            $value = SyllabusRows::line($data[$field]);
            if (mb_strlen($value) > 100) { return Access::error('ohmylms_syllabus_settings_invalid', __('Syllabus profile fields can have at most 100 characters.', 'ohmylms')); }
            $clean[$field] = sanitize_text_field($value);
        }
        if (array_key_exists('categories', $data)) {
            if (!is_array($data['categories']) || count($data['categories']) > 50) { return Access::error('ohmylms_syllabus_settings_invalid', __('Use at most 50 skill categories.', 'ohmylms')); }
            $clean['categories'] = [];
            foreach ($data['categories'] as $category) {
                if (!is_string($category)) { return Access::error('ohmylms_syllabus_settings_invalid', __('Skill categories must be text.', 'ohmylms')); }
                $value = sanitize_text_field(SyllabusRows::line($category));
                if (mb_strlen($value) > 60) { return Access::error('ohmylms_syllabus_settings_invalid', __('A skill category can have at most 60 characters.', 'ohmylms')); }
                if ($value !== '' && !in_array($value, $clean['categories'], true)) { $clean['categories'][] = $value; }
            }
        }
        return $clean;
    }

    public static function get($syllabus_id) {
        $course = SyllabusCourse::course_id($syllabus_id);
        $saved = $course ? get_post_meta($course, self::META, true) : [];
        return (is_array($saved) ? $saved : []) + self::defaults();
    }

    public static function save($syllabus_id, array $data) {
        $clean = self::clean($data);
        if (is_wp_error($clean)) { return $clean; }
        $course = SyllabusCourse::course_id($syllabus_id);
        if (!$course) { return Access::error('ohmylms_syllabus_missing', __('Open the syllabus before saving its settings.', 'ohmylms'), 404); }
        $next = $clean + self::get($syllabus_id);
        if (isset($clean['categories'])) {
            $removed = array_diff(self::get($syllabus_id)['categories'], $clean['categories']);
            if ($removed) {
                $outline = Syllabus::outline($syllabus_id);
                if (is_wp_error($outline)) { return $outline; }
                foreach ($outline['contents'] as $content) { foreach ($content['groups'] as $group) { foreach ($group['skills'] as $skill) {
                    if (in_array($skill['category'] ?? '', $removed, true)) {
                        return Access::error('ohmylms_syllabus_category_used', sprintf(__('The category “%s” is used by skills. Change their category before removing it.', 'ohmylms'), $skill['category']), 409);
                    }
                } } }
            }
        }
        if ($next !== self::get($syllabus_id) && !update_post_meta($course, self::META, $next)) {
            return Access::error('ohmylms_syllabus_settings_failed', __('The syllabus settings could not be saved.', 'ohmylms'), 500);
        }
        return true;
    }

    public static function publish($syllabus_id) {
        $course = SyllabusCourse::course_id($syllabus_id);
        if (!$course) { return Access::error('ohmylms_syllabus_missing', __('This syllabus is unavailable.', 'ohmylms'), 404); }
        $synced = SyllabusCourse::sync($syllabus_id);
        if (is_wp_error($synced)) { return $synced; }
        $published = Catalog::publish($course);
        if (is_wp_error($published)) { return $published; }
        $saved = wp_update_post(['ID' => $course, 'post_status' => 'publish'], true);
        if (is_wp_error($saved)) { return $saved; }
        if (!$saved) { return Access::error('ohmylms_syllabus_publish_failed', __('The skill structure was published, but syllabus visibility could not be updated. Retry publishing.', 'ohmylms'), 500); }
        return true;
    }
}
