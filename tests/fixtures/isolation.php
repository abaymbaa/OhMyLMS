<?php
// Loaded only by the disposable installation created by tools/create-test-site.py.
if (!defined('OMLMS_TEST_SITE') || !OMLMS_TEST_SITE) { return; }
add_filter('pre_option_active_plugins', static function () {
    return ['ohmylms/ohmylms.php', 'creatorlms-qpay/creatorlms-qpay.php', 'creatorlms-custom-question/creatorlms-custom-question.php'];
});
add_filter('pre_http_request', static function () {
    return new WP_Error('omlms_test_network_blocked', 'External HTTP is blocked on the isolated test site.');
}, PHP_INT_MAX);
add_filter('pre_wp_mail', '__return_true', PHP_INT_MAX);
add_filter('automatic_updater_disabled', '__return_true');
add_filter('action_scheduler_allow_async_request_runner', '__return_false');
