<?php
/**
 * Plugin Name: OhMyLMS
 * Description: Unified, extensible LMS based on CreatorLMS.
 * Version: 1.2.20
 * Author: OhMyLMS contributors; original work by WPFunnels Team
 * License: GPL-2.0-or-later
 * Text Domain: ohmylms
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */
defined('ABSPATH') || exit;
$ohmylms_active = array_merge((array) get_option('active_plugins', []), array_keys((array) get_site_option('active_sitewide_plugins', [])));
if (array_intersect(['creatorlms/creatorlms.php', 'creatorlms-pro/creatorlms-pro.php'], $ohmylms_active) || defined('OMLMS_FILE')) {
    add_action('admin_notices', function () {
        echo '<div class="notice notice-error"><p>OhMyLMS is paused because CreatorLMS or CreatorLMS Pro is active. Deactivate the original plugins before activating OhMyLMS. Existing data is preserved.</p></div>';
    });
    return;
}
unset($ohmylms_active);
define('OHMYLMS_FILE', __FILE__);
define('OHMYLMS_DIR', __DIR__);
define('OHMYLMS_VERSION', '1.2.20');
define('OMLMS_FILE', __FILE__);
define('CREATOR_LMS_VERSION', OHMYLMS_VERSION);
define('CREATOR_LMS_DIR', __DIR__);
define('CREATOR_LMS_API_VERSION', 'v1');
define('CREATOR_LMS_API_URL', 'creator-lms/v1');
define('CREATOR_LMS_PLUGIN_BASENAME', plugin_basename(__FILE__));
define('CREATOR_LMS_PRO_VERSION', OHMYLMS_VERSION);
define('CREATORLMS_PRO_FILE', __FILE__);
define('CREATORLMS_PRO_DIR', __DIR__);
define('CREATORLMS_PRO_PATH', __DIR__);
define('CREATORLMS_PRO_URL', plugins_url('', __FILE__));
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/includes/compatibility.php';
require_once __DIR__ . '/includes/extensions.php';
if (!class_exists('ActionScheduler', false)) require_once __DIR__ . '/vendor/woocommerce/action-scheduler/action-scheduler.php';
require_once __DIR__ . '/includes/Packages.php';
require_once __DIR__ . '/includes/OMLMS.php';
require_once __DIR__ . '/includes/cl-functions.php';
function ohmylms() { return OMLMS::instance(); }
function OMLMS() { return ohmylms(); }
function OMLMS_PRO() { return ohmylms(); }
class_alias('OMLMS', 'CreatorLms');
class_alias('OMLMS', 'CreatorLmsPro');
$GLOBALS['ohmylms'] = $GLOBALS['creator_lms'] = ohmylms();
register_activation_hook(__FILE__, ['OMLMS\\Install', 'install']);
register_deactivation_hook(__FILE__, function () { do_action('creatorlms_plugin_deactivated'); });
