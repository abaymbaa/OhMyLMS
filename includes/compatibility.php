<?php
defined('ABSPATH') || exit;

// Keep old third-party class references working without loading a second implementation.
spl_autoload_register(function ($class) {
    foreach (['CreatorLmsPro\\', 'CreatorLms\\'] as $prefix) {
        if (stripos($class, $prefix) !== 0) continue;
        $target = 'OMLMS\\' . substr($class, strlen($prefix));
        if (class_exists($target) || interface_exists($target)) class_alias($target, $class);
        return;
    }
});

// New API namespace shares the exact existing handlers and permission callbacks.
add_action('rest_api_init', function () {
    foreach (rest_get_server()->get_routes() as $route => $handlers) {
        if (strpos($route, '/creator-lms/v1/') !== 0) continue;
        unset($handlers['namespace']);
        foreach ($handlers as $key => &$handler) {
            if (is_int($key) && isset($handler['methods']) && is_array($handler['methods'])) {
                $handler['methods'] = implode(',', array_keys(array_filter($handler['methods'])));
            }
        }
        unset($handler);
        register_rest_route('ohmylms/v1', substr($route, strlen('/creator-lms/v1')), $handlers);
    }
}, 100);

add_filter('creator_lms_locate_template', function ($path, $name) {
    $override = locate_template('ohmylms/' . $name);
    return $override ?: $path;
}, 20, 2);

add_filter('omlms_get_template_part', function ($path, $slug, $name) {
    $override = locate_template('ohmylms/' . $slug . ($name ? '-' . $name : '') . '.php');
    return $override ?: $path;
}, 20, 3);
