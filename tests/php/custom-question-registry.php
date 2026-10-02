<?php
/** Standalone add-on contract regression: no WordPress bootstrap or database. */
define('ABSPATH', __DIR__);
function plugin_dir_path($file) { return dirname($file) . '/'; }
function __($value, $domain = '') { return $value; }
function add_action($name, $callback) { if ($name === 'ohmylms_register_extensions') $callback(); }
function ohmylms_register_question_type($type, $definition) { \OhMyLMS\Extensions\Registry::register('question', $type, $definition); }
require dirname(__DIR__, 2) . '/includes/Extensions/Registry.php';
require dirname(__DIR__, 3) . '/ohmylms-custom-question/ohmylms-custom-question.php';
$definition = \OhMyLMS\Extensions\Registry::get('question', 'custom-type');
$checks = [
    isset($definition['render']) && is_callable($definition['render']),
    $definition['validate']('custom'),
    $definition['validate'](['custom']),
    !$definition['validate'](['custom', 'extra']),
    !$definition['validate']([['nested']]),
    $definition['grade'](' CUSTOM ')['fraction'] === 1,
    $definition['grade'](['custom'])['correct'],
    !$definition['grade']('wrong')['correct'],
];
if (in_array(false, $checks, true)) throw new RuntimeException('Question add-on contract failed.');
echo count($checks) . " custom-question registry checks passed.\n";
