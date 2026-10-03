<?php
namespace OhMyLMS\Extensions;

/** Opt-in asset switch. The shipped build stays active until acceptance passes. */
final class SourceAssets {
    public static function init() {
        if (!defined('OHMYLMS_SOURCE_ASSETS') || !OHMYLMS_SOURCE_ASSETS) { return; }
        add_filter('script_loader_src', [__CLASS__, 'url'], 20);
        add_filter('style_loader_src', [__CLASS__, 'url'], 20);
        add_action('admin_enqueue_scripts', [__CLASS__, 'enqueue'], 11);
        add_action('wp_enqueue_scripts', [__CLASS__, 'enqueue'], 11);
    }
    public static function url($url) {
        $base = plugins_url('/', OHMYLMS_FILE);
        if (strpos($url, $base . 'assets/') !== 0) { return $url; }
        $relative = strtok(substr($url, strlen($base)), '?');
        // The source-built vendor/editor bundles load two copies of prosemirror-model/transform, which
        // breaks the lesson editor (Enter and the slash menu throw). Keep them on the shipped build.
        // See docs/DEVELOPMENT.md (Known issues).
        if (strpos($relative, 'assets/dist/vendors/') === 0) { return $url; }
        $file = OHMYLMS_DIR . '/build/' . $relative;
        if (!is_file($file)) { return $url; }
        return $base . 'build/' . $relative . '?ver=' . substr(hash_file('sha256', $file), 0, 12);
    }
    public static function enqueue() {
        $asset_file = OHMYLMS_DIR . '/build/sdk/extensions.asset.php';
        if (!is_file($asset_file)) { return; }
        $asset = require $asset_file;
        wp_enqueue_script('ohmylms-extension-sdk', plugins_url('build/sdk/extensions.js', OHMYLMS_FILE), $asset['dependencies'], $asset['version'], true);
        wp_localize_script('ohmylms-extension-sdk', 'ohmylmsExtensionManifest', array_merge(Registry::manifest(), ['settings'=>Settings::manifest()]));
        wp_localize_script('ohmylms-extension-sdk', 'ohmylmsAssessment', [
            'versioned' => \OhMyLMS\Assessment\Engine::versioned(),
            'bankUi' => \OhMyLMS\Assessment\Engine::bank_ui(),
            'practice' => \OhMyLMS\Assessment\Engine::practice(),
            'isAdmin' => current_user_can('manage_options'),
        ]);
        $scripts = wp_scripts();
        if (isset($scripts->registered['ohmylms-vendor'])) {
            $scripts->registered['ohmylms-vendor']->deps = array_values(array_unique(array_merge($scripts->registered['ohmylms-vendor']->deps, ['wp-preferences', 'wp-keyboard-shortcuts'])));
        }
        $before = $scripts->queue;
        do_action('ohmylms_enqueue_extension_scripts', 'ohmylms-extension-sdk');
        if (isset($scripts->registered['ohmylms'])) {
            $scripts->registered['ohmylms']->deps = array_values(array_unique(array_merge($scripts->registered['ohmylms']->deps, ['ohmylms-extension-sdk'], array_diff($scripts->queue, $before))));
        }
    }
}
