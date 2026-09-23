<?php
namespace OMLMS\Extensions;

/** Opt-in asset switch. The shipped build stays active until acceptance passes. */
final class SourceAssets {
    public static function init() {
        if (!defined('OMLMS_SOURCE_ASSETS') || !OMLMS_SOURCE_ASSETS) { return; }
        add_filter('script_loader_src', [__CLASS__, 'url'], 20);
        add_filter('style_loader_src', [__CLASS__, 'url'], 20);
        add_action('admin_enqueue_scripts', [__CLASS__, 'enqueue'], 11);
        add_action('wp_enqueue_scripts', [__CLASS__, 'enqueue'], 11);
    }
    public static function url($url) {
        $base = plugins_url('/', OHMYLMS_FILE);
        if (strpos($url, $base . 'assets/') !== 0) { return $url; }
        $relative = strtok(substr($url, strlen($base)), '?');
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
        $scripts = wp_scripts();
        $before = $scripts->queue;
        do_action('ohmylms_enqueue_extension_scripts', 'ohmylms-extension-sdk');
        if (isset($scripts->registered['creator-lms'])) {
            $scripts->registered['creator-lms']->deps = array_values(array_unique(array_merge($scripts->registered['creator-lms']->deps, ['ohmylms-extension-sdk'], array_diff($scripts->queue, $before))));
        }
    }
}
