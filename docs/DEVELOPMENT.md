# Source development

The source build is opt-in. Read ACCEPTANCE.md before enabling it on a working site.

## Source layout

- `assets/src/recovered/manifest.json`: original SHA-256/size, asset-to-source and numeric module mappings.
- `assets/src/recovered/modules/`: 831 extracted Webpack factories. Vendor-bundle modules are under `dist/vendors/`.
- `assets/src/recovered/application/`: 238 ordered fragments of factory 1841, including named screens and membership files.
- `assets/src/extensions/`: authored React components, registry, API client, error boundaries and editor integrations.
- `assets/src/features/`: membership validation and 17 quiz/question React components, including an authored quiz hook/API client and choice-options editor. See QUIZ-SOURCE.md for the compatibility boundaries and tested coverage.
- `tools/quiz-adapters.mjs`: checked integration of native quiz components into the recovered runtime.
- `assets/src/features/courses/`: 25 course components, authored editor/create/settings views, load/save and integration hooks, API client and model helpers. See COURSE-SOURCE.md for tested scope and compatibility boundaries.
- `tools/course-adapters.mjs`: checked integration of native course components into the recovered runtime.
- `tools/application-adapters.mjs`: checked AST integration points. Missing/changed patterns fail the build.
- `tools/vendor-adapters.mjs`: makes the two installed ProseMirror state export formats share the editor's existing CommonJS instance. The original duplicated generators caused `Adding different instances of a keyed plugin (plugin$)` in both original and recovered lesson screens. The parity build retains the untouched factories; the adapted build repairs the duplication rather than suppressing its error.
- `build/`: generated output; never edit it.

Recovered fragments are reconstructed compiled syntax, not original JSX. They retain shared lexical scope, minified names, transpiler helpers and some third-party code. Moving one into an ES module requires identifying its imports/exports. Original comments, names and package versions cannot be recovered reliably. The original readable frontend JS and SCSS remain; this first equivalent build uses recovered runtime/CSS snapshots, not an unverified SCSS recompilation.

## Commands

Use Node 26.0.0 and npm 11.12.1 as pinned in `.nvmrc` and `package.json`.

```sh
npm ci
npm run build
npm run dev
npm test
npm run lint
npm run test:reproducible
```

`build` reads recovered/authored source, not the previous compiled app. `dev` watches recovered source/build adapters and the React SDK. `test` compares the unadapted rebuilt AST with the shipped baseline and tests registry/form behavior. Syntax checks use Babel. Source maps embed source contents. The SDK uses WordPress-provided React and generates `extensions.asset.php` through [WordPress dependency extraction](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dependency-extraction-webpack-plugin/).

`recover`, `split-admin.mjs` and `import-static.mjs` are one-time migration tools, not build steps. Do not regenerate over edits. Installed PHP packages are included; do not clone another e-commerce package over this modified implementation.

For the disposable WordPress installation, set `OMLMS_TEST_CREDENTIALS` to its external JSON file and run `npm run test:browser` (Edge), then `php tests/php/extensions-integration.php` with mysqli/mbstring. The PHP suite refuses databases other than `ohmylms_source_test`. Also run `php tests/unit.php` and `php tests/membership-permissions.php`.

## Opt-in and rollback

On a test site:

```php
define('OMLMS_SOURCE_ASSETS', true);
define('OMLMS_ENABLED_MODULES', ['examples']); // Optional, disabled by default.
```

Without these constants, shipped assets remain active and examples remain disabled. Missing generated files currently fall back to shipped assets; check browser inventories for fallback URLs before release. Turning off `OMLMS_SOURCE_ASSETS` restores the old JavaScript. Full rollback restores all three matching plugin folders from the source-baseline snapshot. Restore a database only with its matching code backup. This stage performs no additional prefix migration.

## Fixtures and provenance

`tools/create-test-site.py`, `setup-test-db.php`, `setup-test-user.php` and `tests/fixtures/isolation.php` document isolation. The site has a separate DB, generated administrator and local-only server. HTTP/email are blocked; tests mock known QPay endpoints in memory. The copied database contains site data and stays outside Git.

`tests/baseline-assets.json` is a versionable asset inventory. Ignored `test-results/` contains screenshots, traces and script/style/global/network observations. Never commit credentials, SQL dumps or authenticated traces. New dependencies have lockfile versions/integrity hashes; existing PHP licence files are retained. Recovered third-party JS has asset hashes, but its original package versions and missing extracted notices are not fully verified. Hash pinning is not package provenance; do not invent versions/licences.
