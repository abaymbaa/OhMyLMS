<?php
namespace OhMyLMS\Engagement;

final class StreakSettings {
    public static function defaults() {
        return ['enable' => false, 'lesson' => true, 'quiz' => true, 'practice' => true,
            'practice_minimum' => 3, 'freezes' => true, 'initial_freezes' => 2, 'maximum_freezes' => 2,
            'refill_days' => 7, 'milestones' => [
                ['days' => 7, 'badge' => 'streak-7', 'points' => 0],
                ['days' => 30, 'badge' => 'streak-30', 'points' => 0],
                ['days' => 100, 'badge' => 'streak-100', 'points' => 0],
            ]];
    }

    public static function get() {
        $settings = self::validate(array_replace(self::defaults(), (array) get_option('ohmylms_streak_settings', [])));
        return is_wp_error($settings) ? self::defaults() : $settings;
    }

    public static function validate($settings) {
        $fail = static function () { return new \WP_Error('streak_settings', __('Invalid streak settings.', 'ohmylms'), ['status' => 400]); };
        if (!is_array($settings)) { return $fail(); }
        $settings = array_replace(self::defaults(), $settings);
        foreach (['enable', 'lesson', 'quiz', 'practice', 'freezes'] as $key) {
            if (!in_array($settings[$key], [true, false, 0, 1, '0', '1'], true)) { return $fail(); }
            $settings[$key] = in_array($settings[$key], [true, 1, '1'], true);
        }
        foreach (['practice_minimum' => [1, 30], 'initial_freezes' => [0, 10], 'maximum_freezes' => [0, 10], 'refill_days' => [1, 365]] as $key => $range) {
            if (filter_var($settings[$key], FILTER_VALIDATE_INT) === false || $settings[$key] < $range[0] || $settings[$key] > $range[1]) { return $fail(); }
            $settings[$key] = (int) $settings[$key];
        }
        if ($settings['initial_freezes'] > $settings['maximum_freezes'] || !is_array($settings['milestones']) || count($settings['milestones']) > 20) { return $fail(); }
        $seen = []; $milestones = [];
        foreach ($settings['milestones'] as $milestone) {
            if (!is_array($milestone) || !isset($milestone['days'], $milestone['points'], $milestone['badge'])
                || filter_var($milestone['days'], FILTER_VALIDATE_INT) === false || $milestone['days'] < 1 || $milestone['days'] > 10000
                || filter_var($milestone['points'], FILTER_VALIDATE_INT) === false || $milestone['points'] < 0 || $milestone['points'] > 100000
                || !is_string($milestone['badge']) || strlen($milestone['badge']) > 45 || sanitize_key($milestone['badge']) !== $milestone['badge']
                || isset($seen[$milestone['days']])) { return $fail(); }
            $seen[$milestone['days']] = true;
            $milestones[] = ['days' => (int) $milestone['days'], 'points' => (int) $milestone['points'], 'badge' => $milestone['badge']];
        }
        $settings['milestones'] = $milestones;
        return array_intersect_key($settings, self::defaults());
    }

    public static function enabled() { return !empty(self::get()['enable']); }

    public static function badges() {
        $badges = [];
        foreach ([7, 30, 100] as $days) {
            $badges[] = ['slug' => 'streak-' . $days, 'name' => sprintf(__('%d-day learning streak', 'ohmylms'), $days), 'description' => __('Qualifying learning days in one streak.', 'ohmylms'), 'image' => plugins_url('assets/images/streak-badge.svg', OHMYLMS_FILE), 'color' => '#365dbe', 'rules' => []];
        }
        return $badges;
    }
}
