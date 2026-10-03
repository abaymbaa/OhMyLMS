#!/usr/bin/env bash
# Provisions a disposable local WordPress site for developing OhMyLMS.
# WordPress core comes from Composer (johnpbloch/wordpress-core); the database is a local MariaDB.
# Usage: tools/setup-wp-dev.sh [start]   (no argument = full setup; "start" = just start DB + server)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="$ROOT/.wp-dev"
PORT="${OHMYLMS_DEV_PORT:-8099}"
DB_PORT=10005
DB_NAME=ohmylms_source_test
DB_DATA="$SITE/mysql-data"
DB_SOCK="$SITE/mysql.sock"

start_db() {
  mysqladmin --protocol=socket -S "$DB_SOCK" ping >/dev/null 2>&1 && return
  mkdir -p "$DB_DATA"
  [ -d "$DB_DATA/mysql" ] || mariadb-install-db --user="$(id -un)" --datadir="$DB_DATA" --auth-root-authentication-method=normal >/dev/null
  nohup mariadbd --user="$(id -un)" --datadir="$DB_DATA" --socket="$DB_SOCK" --port="$DB_PORT" --bind-address=127.0.0.1 --pid-file="$SITE/mysql.pid" >"$SITE/mysql.log" 2>&1 &
  for _ in $(seq 30); do mysqladmin --protocol=socket -S "$DB_SOCK" ping >/dev/null 2>&1 && return; sleep 1; done
  echo "MariaDB did not start; see $SITE/mysql.log" >&2; exit 1
}

start_server() {
  pgrep -f "php -S 127.0.0.1:$PORT" >/dev/null && return
  nohup php -S "127.0.0.1:$PORT" -t "$SITE/wordpress" >"$SITE/server.log" 2>&1 &
}

mkdir -p "$SITE"
if [ "${1:-}" = start ]; then start_db; start_server; echo "http://127.0.0.1:$PORT (admin / admin)"; exit; fi

if [ ! -f "$SITE/wordpress/wp-load.php" ]; then
  mkdir -p "$SITE/core"
  (cd "$SITE/core" && composer require johnpbloch/wordpress-core --no-interaction --no-audit)
  rm -rf "$SITE/wordpress"
  cp -R "$SITE/core/vendor/johnpbloch/wordpress-core" "$SITE/wordpress"
fi

start_db
mariadb --protocol=socket -S "$DB_SOCK" -uroot -e "CREATE DATABASE IF NOT EXISTS $DB_NAME CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; ALTER USER 'root'@'localhost' IDENTIFIED BY 'root'; FLUSH PRIVILEGES;" 2>/dev/null \
  || mariadb --protocol=socket -S "$DB_SOCK" -uroot -proot -e "CREATE DATABASE IF NOT EXISTS $DB_NAME CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"

if [ ! -f "$SITE/wordpress/wp-config.php" ]; then
  cat > "$SITE/wordpress/wp-config.php" <<PHP
<?php
define('DB_NAME', '$DB_NAME');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define('DB_HOST', '127.0.0.1:$DB_PORT');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');
\$table_prefix = 'wp_';
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
define('WP_HOME', 'http://127.0.0.1:$PORT');
define('WP_SITEURL', 'http://127.0.0.1:$PORT');
define('DISALLOW_FILE_MODS', true);
define('AUTOMATIC_UPDATER_DISABLED', true);
define('WP_AUTO_UPDATE_CORE', false);
define('OHMYLMS_SOURCE_ASSETS', true);
if (!defined('ABSPATH')) define('ABSPATH', __DIR__ . '/');
require_once ABSPATH . 'wp-settings.php';
PHP
fi

mkdir -p "$SITE/wordpress/wp-content/plugins"
ln -sfn "$ROOT" "$SITE/wordpress/wp-content/plugins/ohmylms"

SITE="$SITE" php -d display_errors=0 -r '
define("WP_INSTALLING", true);
require getenv("SITE")."/wordpress/wp-load.php";
require ABSPATH."wp-admin/includes/upgrade.php";
if (!is_blog_installed()) { wp_install("OhMyLMS Dev", "admin", "admin@example.test", true, "", "admin"); echo "WordPress installed\n"; }
else echo "WordPress already installed\n";
' 2>&1
SITE="$SITE" php -d display_errors=0 -r '
require getenv("SITE")."/wordpress/wp-load.php";
require_once ABSPATH."wp-admin/includes/plugin.php";
$r = activate_plugin("ohmylms/ohmylms.php");
echo is_wp_error($r) ? "Activation failed: ".$r->get_error_message()."\n" : "OhMyLMS activated\n";
'
start_server
echo "Ready: http://127.0.0.1:$PORT/wp-admin  (admin / admin)"
