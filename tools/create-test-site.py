"""Create a disposable WordPress copy outside the live site's web root."""
from pathlib import Path
import json
import secrets
import shutil
import subprocess
import sys

plugin = Path(__file__).resolve().parents[1]
live = plugin.parents[2]
target = Path(sys.argv[1]).resolve()
if target.exists(): raise SystemExit('Refusing to overwrite an existing test site')
shutil.copytree(live, target, ignore=shutil.ignore_patterns('wp-content', 'wp-config.php', '*.sql', '*.zip', 'wp-cli.yml'))
content = target / 'wp-content'
content.mkdir()
shutil.copytree(live / 'wp-content/themes', content / 'themes')
(content / 'plugins').mkdir()
for name in ('ohmylms', 'ohmylms-qpay', 'ohmylms-custom-question'):
    dest = str(content / 'plugins' / name).replace("'", "''")
    src = str(plugin.parent / name).replace("'", "''")
    subprocess.run(['powershell', '-NoProfile', '-Command', f"New-Item -ItemType Junction -Path '{dest}' -Target '{src}' | Out-Null"], check=True)
(content / 'mu-plugins').mkdir()
shutil.copyfile(plugin / 'tests/fixtures/isolation.php', content / 'mu-plugins/isolation.php')
secret = secrets.token_urlsafe(32)
config = """<?php
define('DB_NAME', 'ohmylms_source_test');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define('DB_HOST', '127.0.0.1:10005');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');
$table_prefix = 'wp_';
define('WP_HOME', 'http://127.0.0.1:8099');
define('WP_SITEURL', WP_HOME);
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
define('DISABLE_WP_CRON', true);
define('AUTOMATIC_UPDATER_DISABLED', true);
define('WP_MEMORY_LIMIT', '512M');
define('OHMYLMS_TEST_SITE', true);
define('OHMYLMS_SOURCE_ASSETS', file_exists(__DIR__ . '/.source-assets'));
define('OHMYLMS_ENABLED_MODULES', file_exists(__DIR__ . '/.example-modules') ? ['examples'] : []);
"""
for key in ('AUTH_KEY','SECURE_AUTH_KEY','LOGGED_IN_KEY','NONCE_KEY','AUTH_SALT','SECURE_AUTH_SALT','LOGGED_IN_SALT','NONCE_SALT'):
    config += f"define('{key}', '{secrets.token_urlsafe(48)}');\n"
config += "if (!defined('ABSPATH')) define('ABSPATH', __DIR__ . '/');\nrequire ABSPATH . 'wp-settings.php';\n"
(target / 'wp-config.php').write_text(config, encoding='utf-8')
(target.parent / 'test-credentials.json').write_text(json.dumps({'username':'ohmylms-test-admin','password':secret,'site':str(target)}), encoding='utf-8')
print('Isolated code installed; credentials stored outside the repository.')
