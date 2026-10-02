const { defineConfig } = require('@playwright/test');
const path = require('node:path');
const php = process.env.OHMYLMS_PHP_BIN || 'php';
module.exports = defineConfig({
  testDir: 'browser', testMatch: 'interactivity.spec.cjs', timeout: 30000, workers: 1,
  use: { baseURL: 'http://127.0.0.1:8108', channel: 'msedge', headless: true },
  webServer: { command: `"${php}" -S 127.0.0.1:8108 "${path.join(__dirname, 'fixtures/interactivity.php')}"`, url: 'http://127.0.0.1:8108/fixture', reuseExistingServer: false, timeout: 15000 },
});
