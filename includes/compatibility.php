<?php
defined('ABSPATH') || exit;

// Let themes override templates from <theme>/ohmylms/.
add_filter('ohmylms_locate_template', function ($path, $name) {
    $override = locate_template('ohmylms/' . $name);
    return $override ?: $path;
}, 20, 2);

add_filter('ohmylms_get_template_part', function ($path, $slug, $name) {
    $override = locate_template('ohmylms/' . $slug . ($name ? '-' . $name : '') . '.php');
    return $override ?: $path;
}, 20, 3);
