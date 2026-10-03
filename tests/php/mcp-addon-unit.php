<?php
// MCP lifecycle and authorization checks without a WordPress database or network.
define('ABSPATH', __DIR__);
define('OHMYLMS_FILE', dirname(__DIR__, 2) . '/ohmylms.php');
define('OHMYLMS_VERSION', 'test');
$GLOBALS['mcp_integrations'] = [];
$GLOBALS['mcp_hooks'] = [];
$GLOBALS['mcp_abilities'] = [];
function get_option($key, $default = []) { return $key === 'ohmylms_integrations' ? $GLOBALS['mcp_integrations'] : $default; }
function add_action($hook, $callback, $priority = 10, $args = 1) { $GLOBALS['mcp_hooks'][$hook][] = $callback; }
function add_filter($hook, $callback, $priority = 10, $args = 1) { add_action($hook, $callback, $priority, $args); }
function __($value, $domain) { return $value; }
function plugins_url($path, $file) { return $path; }
function current_user_can($capability) { return true; }
function wp_register_ability($name, $definition) { $GLOBALS['mcp_abilities'][$name] = $definition; }
function is_wp_error($value) { return $value instanceof WP_Error; }
class WP_Error {
    public $code;
    public function __construct($code, $message, $data) { $this->code = $code; }
}
require dirname(__DIR__, 2) . '/includes/MCP/Server.php';
require dirname(__DIR__, 2) . '/includes/MCP/Abilities.php';
use OhMyLMS\MCP\Server;
use OhMyLMS\MCP\Abilities;
function mcp_addon_check($condition, $message) { if (!$condition) throw new RuntimeException($message); }
Server::init();
mcp_addon_check(!Server::enabled(), 'MCP is opt-in.');
mcp_addon_check(!isset($GLOBALS['mcp_hooks']['wp_abilities_api_init']), 'Disabled add-on does not register abilities.');
$manifest = Server::manifest(['ai_model' => ['is_enable' => 1], 'other' => ['is_enable' => 1]]);
mcp_addon_check(!isset($manifest['ai_model']) && isset($manifest['other']), 'MCP replaces AI Suite while retaining other add-ons.');
mcp_addon_check($manifest['mcp']['hasSettings'] && $manifest['mcp']['is_enable'] === 0, 'Disabled MCP remains visible with Manage.');
mcp_addon_check(!Server::readiness()['ready'], 'Disabled server reports unavailable.');
mcp_addon_check(Server::authorize(null)->code === 'mcp_disabled', 'Disabled server refuses authentication before inspecting credentials.');
$adapter = new class { public $calls = 0; public function create_server(...$args) { $this->calls++; return true; } };
Server::register_server($adapter);
mcp_addon_check($adapter->calls === 0, 'Disabled add-on does not create a server.');
$GLOBALS['mcp_integrations']['mcp'] = ['is_enable' => '1'];
mcp_addon_check(Server::enabled() && Server::manifest([])['mcp']['is_enable'] === 1, 'Saved switch enables MCP.');
Server::register_server($adapter);
mcp_addon_check($adapter->calls === 1, 'Enabled add-on creates a server.');
Abilities::register();
mcp_addon_check(count($GLOBALS['mcp_abilities']) === 9, 'Enabled MCP exposes its nine read-only abilities.');
$permission = $GLOBALS['mcp_abilities']['ohmylms/list-courses']['permission_callback'];
mcp_addon_check($permission(), 'Enabled administrator can use an ability.');
$GLOBALS['mcp_integrations']['mcp']['is_enable'] = 0;
mcp_addon_check(!$permission(), 'Disabling the switch immediately blocks existing abilities.');
mcp_addon_check(Server::authorize(null)->code === 'mcp_disabled', 'Disabling the switch immediately blocks existing tokens.');
echo "MCP add-on lifecycle checks passed.\n";
