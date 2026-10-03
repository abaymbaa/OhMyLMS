<?php
/** Loopback-only router for MCP HTTP transport tests; never deploy this fixture. */
if ( PHP_SAPI !== 'cli-server' || ! in_array( $_SERVER['REMOTE_ADDR'] ?? '', array( '127.0.0.1', '::1' ), true ) ) {
    http_response_code( 403 ); exit;
}
$config = json_decode( file_get_contents( getenv( 'OHMYLMS_TEST_CREDENTIALS' ) ), true );
$source = file_get_contents( $config['site'] . '/wp-config.php' );
if ( ! preg_match( "/define\(\s*'DB_NAME'\s*,\s*'ohmylms_source_test'\s*\)/", $source ) ) {
    http_response_code( 403 ); exit;
}
define( 'WP_ENVIRONMENT_TYPE', 'local' );
require $config['site'] . '/index.php';
