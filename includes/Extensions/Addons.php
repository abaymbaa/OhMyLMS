<?php
namespace OhMyLMS\Extensions;

/** Bundled modules share the existing Add-ons settings and stay opt-in. */
final class Addons {
    const IDS = ['skills', 'question_bank'];

    public static function definitions() {
        return [
            'skills' => [
                'label' => __('Skills', 'ohmylms'),
                'description' => __('Skills module. Feature screens are planned.', 'ohmylms'),
                'icon' => plugins_url('includes/Integrations/Gamification/Assets/Images/gamification-icon.svg', OHMYLMS_FILE),
            ],
            'question_bank' => [
                'label' => __('Question Bank', 'ohmylms'),
                'description' => __('Question Bank module. Feature screens are planned.', 'ohmylms'),
                'icon' => plugins_url('includes/Integrations/ContentProtection/Assets/Images/content-protection-icon.svg', OHMYLMS_FILE),
            ],
        ];
    }

    public static function enabled($id) {
        $settings = get_option('ohmylms_integrations', []);
        return is_array($settings) && 1 === (int) ($settings[$id]['is_enable'] ?? 0);
    }

    public static function init() {
        add_filter('ohmylms_integrations', [__CLASS__, 'manifest']);
    }

    public static function manifest($manifest) {
        foreach (self::definitions() as $id => $definition) {
            $manifest[$id] = array_merge($definition, [
                'categories' => ['course-enhancements'],
                'hasSettings' => false,
                'class' => '',
                'is_valid' => true,
                'is_enable' => self::enabled($id) ? 1 : 0,
            ]);
        }
        return $manifest;
    }
}
