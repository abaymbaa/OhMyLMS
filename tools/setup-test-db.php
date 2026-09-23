<?php
if (PHP_SAPI !== 'cli') { exit; }
$credentials = json_decode(file_get_contents($argv[1]), true);
$site = realpath($credentials['site']);
if (!$site || strpos(file_get_contents($site . '/wp-config.php'), "'ohmylms_source_test'") === false) {
    throw new RuntimeException('Refusing to provision a database without the isolated test configuration.');
}
$db = new mysqli('127.0.0.1', 'root', 'root', '', 10005);
$db->query('CREATE DATABASE ohmylms_source_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
$db->close();
echo "Created isolated database. Import the baseline, then run tools/setup-test-user.php.\n";
