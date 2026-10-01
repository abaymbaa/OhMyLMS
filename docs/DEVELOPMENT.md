# Source development

The source build is opt-in. Read ACCEPTANCE.md before enabling it on a working site.

For component conventions, factory contracts and the feature development workflow, read [REACT-DEVELOPMENT.md](REACT-DEVELOPMENT.md). Run `npm run check` before delivering source changes.

## Source layout

- `assets/src/recovered/manifest.json`: original SHA-256/size, asset-to-source and numeric module mappings.
- `assets/src/recovered/modules/`: 831 extracted Webpack factories. Vendor-bundle modules are under `dist/vendors/`.
- `assets/src/recovered/application/`: 238 ordered fragments of factory 1841, including named screens and membership files.
- `assets/src/extensions/`: authored React components, registry, API client, error boundaries and editor integrations.
- `assets/src/features/`: membership validation and 17 quiz/question React components, including an authored quiz hook/API client and choice-options editor. See QUIZ-SOURCE.md for the compatibility boundaries and tested coverage.
- `tools/quiz-adapters.mjs`: checked integration of native quiz components into the recovered runtime.
- `assets/src/features/quiz-reports/`: ten editable report, grading and question-result components, integrated by `tools/quiz-report-adapters.mjs`. See the feature README for compatibility boundaries and validation.
- `assets/src/features/courses/`: 25 course components, authored editor/create/settings views, load/save and integration hooks, API client and model helpers. See COURSE-SOURCE.md for tested scope and compatibility boundaries.
- `tools/course-adapters.mjs`: checked integration of native course components into the recovered runtime.
- `tools/application-adapters.mjs`: checked AST integration points. Missing/changed patterns fail the build.
- Adapted application builds strip the retired `/license` and `/free-vs-pro` routes and their component implementations. Their recovered fragments remain untouched solely for parity/provenance checks.
- `assets/src/features/certificates/`: 13 editable certificate list, template, editor, design-control and preview React components integrated by `tools/certificate-adapters.mjs`.
- `assets/src/features/emails/`: 12 editable notification-template settings, personalization, editor, field and responsive-preview React components integrated by `tools/email-adapters.mjs`.
- `assets/src/features/settings/`: 19 editable General Settings route, design, account/privacy, permalink, advanced, payment and migration React components integrated by `tools/settings-adapters.mjs`. Email Settings remains in its dedicated feature.
- `assets/src/features/integrations/`: seven editable Add-ons route, card, configuration and provider settings React components integrated by `tools/integration-adapters.mjs`.
- `assets/src/features/webhooks/`: four editable webhook list, details, field-mapping and editor-modal React components integrated by `tools/webhook-adapters.mjs`.
- `assets/src/features/taxonomies/`: editable Categories and Tags routes plus their shared taxonomy modal, integrated by `tools/taxonomy-adapters.mjs`.
- `assets/src/features/setup/`: eleven editable Setup Wizard step, migration/import, controller and route components integrated by `tools/setup-adapters.mjs`.
- `assets/src/features/ai-course-outline/`: eighteen editable prompt-template, generator, outline-preview and route components integrated by `tools/ai-course-adapters.mjs`.
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

For the disposable WordPress installation, set `OHMYLMS_TEST_CREDENTIALS` to its external JSON file and run `npm run test:browser` (Edge), then `php tests/php/extensions-integration.php` with mysqli/mbstring. The PHP suite refuses databases other than `ohmylms_source_test`. Also run `php tests/unit.php` and `php tests/membership-permissions.php`.

## Opt-in and rollback

On a test site:

```php
define('OHMYLMS_SOURCE_ASSETS', true);
define('OHMYLMS_ENABLED_MODULES', ['examples']); // Optional, disabled by default.
```

Without these constants, shipped assets remain active and examples remain disabled. Missing generated files currently fall back to shipped assets; check browser inventories for fallback URLs before release. Turning off `OHMYLMS_SOURCE_ASSETS` restores the old JavaScript. Full rollback restores all three matching plugin folders from the source-baseline snapshot. Restore a database only with its matching code backup. This stage performs no additional prefix migration.

## Fixtures and provenance

`tools/create-test-site.py`, `setup-test-db.php`, `setup-test-user.php` and `tests/fixtures/isolation.php` document isolation. The site has a separate DB, generated administrator and local-only server. HTTP/email are blocked; tests mock known QPay endpoints in memory. The copied database contains site data and stays outside Git.

`tests/baseline-assets.json` is a versionable asset inventory. Ignored `test-results/` contains screenshots, traces and script/style/global/network observations. Never commit credentials, SQL dumps or authenticated traces. New dependencies have lockfile versions/integrity hashes; existing PHP licence files are retained. Recovered third-party JS has asset hashes, but its original package versions and missing extracted notices are not fully verified. Hash pinning is not package provenance; do not invent versions/licences.

## Communities source

Five Communities admin components now build from assets/src/features/communities through tools/community-adapters.mjs. See that feature's README for scope and validation. The editor has authored save/validation logic; other components retain documented compatibility dependencies.

## Dashboard and analytics source

Eighteen components now build from assets/src/features/analytics through tools/analytics-adapters.mjs. They cover the dashboard, course analytics, earnings reports and supporting controls; the existing course-row source is reused. See the feature README for compatibility boundaries and verification.
