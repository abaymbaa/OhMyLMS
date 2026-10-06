<?php
namespace OhMyLMS\Extensions;

/**
 * Bundled modules share the existing Add-ons settings and stay opt-in. Skills (like the Question Bank)
 * is part of the core product: it is always on, has no Add-ons card and cannot be switched off.
 */
final class Addons {
    /** Former add-ons that are now always on. */
    const CORE = ['skills'];
    /** Bundled modules that still have an Add-ons switch. */
    const IDS = [];

    public static function definitions() {
        return [];
    }

    public static function enabled($id) {
        if (in_array($id, self::CORE, true)) { return true; }
        $settings = get_option('ohmylms_integrations', []);
        return is_array($settings) && 1 === (int) ($settings[$id]['is_enable'] ?? 0);
    }

    public static function init() {
        add_filter('ohmylms_integrations', [__CLASS__, 'manifest']);
    }

    public static function manifest($manifest) {
        unset($manifest['question_bank'], $manifest['skills']);
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
