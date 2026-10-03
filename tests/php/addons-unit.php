<?php
// Each switch combination runs in a fresh process so require_once mirrors WordPress.
define('ABSPATH', __DIR__);
define('OHMYLMS_DIR', dirname(__DIR__, 2));
define('OHMYLMS_FILE', OHMYLMS_DIR . '/ohmylms.php');
define('OHMYLMS_SLUG', 'ohmylms');
define('OHMYLMS_ENABLED_MODULES', ['skills', 'question_bank', '../outside']);
require OHMYLMS_DIR . '/vendor/autoload.php';
$mode = $argv[1] ?? 'off';
$GLOBALS['addon_options'] = [
    'skills' => ['is_enable' => in_array($mode, ['skills', 'both'], true) ? 1 : 0],
    'question_bank' => ['is_enable' => in_array($mode, ['bank', 'both'], true) ? '1' : 0],
];
$GLOBALS['hooks'] = [];
$GLOBALS['loaded_addons'] = [];
function get_option($key, $default = []) { return $GLOBALS['addon_options']; }
function add_action($hook, $callback, $priority = 10) { $GLOBALS['hooks'][$hook][] = $callback; }
function add_filter($hook, $callback) { add_action($hook, $callback); }
function apply_filters($hook, $value) { return $value; }
function __($text, $domain) { return $text; }
function plugins_url($path, $file) { return $path; }
function do_action($hook) { $GLOBALS['loaded_addons'][] = $hook; }
function check($condition, $message) { if (!$condition) { throw new RuntimeException($message); } }
use OhMyLMS\Extensions\Addons;
use OhMyLMS\Extensions\Modules;
Addons::init();
$manifest = Addons::manifest(['existing' => ['is_enable' => 1]]);
check(isset($manifest['existing']), 'Existing add-ons retained');
check(count($manifest) === 3, 'Both bundled add-ons visible when disabled');
Modules::load();
$skills = in_array($mode, ['skills', 'both'], true);
$bank = in_array($mode, ['bank', 'both'], true);
check(in_array('ohmylms_skills_module_loaded', $GLOBALS['loaded_addons'], true) === $skills, 'Skills entry point follows its switch');
check(in_array('ohmylms_question_bank_module_loaded', $GLOBALS['loaded_addons'], true) === $bank, 'Question Bank entry point follows its switch');
check(count($GLOBALS['loaded_addons']) === (int) $skills + (int) $bank, 'Only enabled entry points load');
check($manifest['skills']['is_enable'] === (int) $skills, 'Skills manifest matches saved setting');
check($manifest['question_bank']['is_enable'] === (int) $bank, 'Question Bank manifest matches saved setting');
Modules::load();
check(count($GLOBALS['loaded_addons']) === (int) $skills + (int) $bank, 'Entry points load only once');
echo "Add-on switch checks passed: $mode\n";
