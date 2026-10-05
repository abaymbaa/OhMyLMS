<?php
namespace OhMyLMS\Learning;

defined('ABSPATH') || exit;

final class LearningPath {
    public static function available(array $item, $student, $course) {
        if (empty($item['available'])) { return false; }
        if ($item['type'] === 'practice') { return true; }
        return !apply_filters('ohmylms_is_lesson_locked', false, $item['content_id'], $course, $student)
            && !apply_filters('ohmylms_is_lesson_sequentially_locked', false, $item['content_id'], $course, $student);
    }

    public static function next(array $state) {
        if ($state['blocked']) { return null; }
        $program = $state['program'];
        foreach ($program['items'] as $item) {
            if (!$item['available']) { continue; }
            if ($item['type'] === 'practice') {
                foreach ($program['outcomes'] as $outcome) {
                    if ($outcome['term_id'] === $item['content_id'] && !$outcome['met']) { return ['name' => $outcome['name'], 'url' => $outcome['practice_url'], 'reason' => __('Skill target remaining', 'ohmylms')]; }
                }
            } elseif ($item['required'] && !$item['complete'] && self::available($item, $state['student_id'], $program['course_id'])) {
                return ['name' => $item['name'], 'url' => $item['url'], 'reason' => __('Required activity remaining', 'ohmylms')];
            }
        }
        foreach ($program['outcomes'] as $outcome) {
            if ($outcome['required'] && !$outcome['met']) { return ['name' => $outcome['name'], 'url' => $outcome['practice_url'], 'reason' => __('Skill target remaining', 'ohmylms')]; }
        }
        return null;
    }
}
