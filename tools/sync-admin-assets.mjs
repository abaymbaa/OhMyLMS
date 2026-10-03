import fs from 'node:fs';
import path from 'node:path';

// Ship the same admin app and SDK used during development, including add-on settings.
const root = path.resolve(import.meta.dirname, '..');
for (const [source, target] of [
  ['build/assets/dist/admin/ohmylms.js', 'assets/dist/admin/ohmylms.js'],
  ['build/assets/dist/admin/ohmylms.js.map', 'assets/dist/admin/ohmylms.js.map'],
  ['build/sdk/extensions.js', 'assets/dist/admin/extensions.js'],
  ['build/sdk/extensions.js.map', 'assets/dist/admin/extensions.js.map'],
  ['build/sdk/extensions.asset.php', 'assets/dist/admin/extensions.asset.php'],
]) {
  fs.copyFileSync(path.join(root, source), path.join(root, target));
}
console.log('Updated shipped admin app and extension SDK.');
