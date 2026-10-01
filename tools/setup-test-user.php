<?php
if (PHP_SAPI !== 'cli') { exit; }
$credentials = json_decode(file_get_contents($argv[1]), true);
require $credentials['site'] . '/wp-load.php';
if (!defined('OHMYLMS_TEST_SITE') || DB_NAME !== 'ohmylms_source_test') { throw new RuntimeException('Not an isolated test site'); }
$user = get_user_by('login', $credentials['username']);
if (!$user) {
    $id = wp_create_user($credentials['username'], $credentials['password'], 'ohmylms-test@example.invalid');
    if (is_wp_error($id)) { throw new RuntimeException($id->get_error_message()); }
    $user = get_user_by('id', $id);
}
$user->set_role('administrator');
update_option('home', WP_HOME);
update_option('siteurl', WP_SITEURL);
delete_option('cron');
wp_cache_flush();
flush_rewrite_rules(false);
echo "Isolated administrator ready; external network and email are blocked.\n";
