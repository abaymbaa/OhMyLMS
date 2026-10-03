<?php
namespace OhMyLMS\Extensions;

/** Bundled modules share the existing Add-ons settings and stay opt-in. */
final class Addons {
    const IDS = ['skills'];

    public static function definitions() {
        return [
            'skills' => [
                'label' => __('Skills', 'ohmylms'),
                'description' => __('Organize learning skills, prerequisites and links to lessons and courses.', 'ohmylms'),
                'icon' => plugins_url('includes/Integrations/Gamification/Assets/Images/gamification-icon.svg', OHMYLMS_FILE),
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
        unset($manifest['question_bank']);
        foreach (self::definitions() as $id => $definition) {
            $manifest[$id] = array_merge($definition, [
                'categories' => ['course-enhancements'],
                'hasSettings' => $id === 'skills',
                'class' => '',
                'is_valid' => true,
                'is_enable' => self::enabled($id) ? 1 : 0,
            ]);
        }
        return $manifest;
    }
}
