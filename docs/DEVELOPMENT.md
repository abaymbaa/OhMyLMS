# Source development

Student frontend modules and add-on contracts are documented in [INTERACTIVITY.md](INTERACTIVITY.md).
They load on demand independently of the opt-in admin source build. The maintained frontend
`assets/src/frontend/js/ohmylms.js` handles remaining legacy integrations; its URL is selected by
`Extensions/Interactivity.php`. Original compiled frontend assets remain provenance, so turning off
`OHMYLMS_SOURCE_ASSETS` restores the admin asset selection but does not disable the migrated frontend.

The source build is opt-in. Read ACCEPTANCE.md before enabling it on a working site.

For component conventions, factory contracts and the feature development workflow, read [REACT-DEVELOPMENT.md](REACT-DEVELOPMENT.md). Run `npm run check` before delivering source changes.

## Source layout

- `assets/src/manifest.json`: original SHA-256/size, asset-to-source and numeric module mappings.
- `assets/src/modules/`: 831 extracted Webpack factories. Vendor-bundle modules are under `dist/vendors/`.
- `assets/src/application/`: ordered fragments of factory 1841. `routes.js` is the admin route table, `screens/<feature>/` holds each screen (`*Route.js` is the memoized route wrapper, `*Screen.js` the implementation), and `shared/<topic>.js` are byte-sized slices of shared code, named after the feature they mostly contain (a slice can include helpers for neighbouring features because the original scope was cut by size, not by feature). Fragment order in `manifest.json` is significant; rebuilding must produce an identical `ohmylms.js`.
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

## Known issues

- Source-built vendor bundles break the lesson editor. `tools/vendor-adapters.mjs` redirects the ESM copy of prosemirror-state to the CJS copy, but prosemirror-model and prosemirror-transform stay duplicated (ESM 58903/38262 vs CJS 77712/36553). In the browser, Enter and the `/` block menu throw `Can not convert <paragraph> to a Fragment (looks like multiple versions of prosemirror-model were loaded)`. Removing the state adapter is worse (`Adding different instances of a keyed plugin`). `SourceAssets::url()` therefore keeps `assets/dist/vendors/*` on the shipped files while the app and SDK use the source build. A proper fix must unify all three ProseMirror packages onto one copy, mapping the minified ESM export names; then remove that exception.

## Block-based Text lessons and the future quiz/question engine

Status: an embedded standalone WordPress block editor for Text lessons was tried and rolled back (the editing experience was not what was wanted). Text lessons use the original lesson editor again. Any future custom blocks must be added to that editor, or a new editor approach agreed first. Video and audio lessons are unchanged: the media is played directly from the lesson page. Video/audio lesson design will be discussed separately.

- Instructors author. Students only view and interact.
- Lessons render through `the_content()`. Lesson navigation uses full page loads today.

### Requirements recorded for the Question Bank and Exam Engine (not built yet)

Build these into the question bank / exam builder, not into the Text lesson editor.

1. **Inline quiz blocks record performance data.** Quiz blocks inside Text lessons (`ohmylms/quiz` -> `quiz-question` -> `quiz-answer`, core paragraph/group/columns nested inside) feed a Student Performance dashboard used for recommendations and for skills mastered or needing improvement. They are not practice-only.
2. **Skills.** Each question links to one or more skills (taxonomy terms). The old creatorlms-skills plugin was removed on purpose; build the skills model fresh in ohmylms.
3. **Record every attempt**: user, lesson, question uuid, chosen option, correct/incorrect, timestamp. Keep a snapshot of correctness on each attempt.
4. **Edits after attempts exist.** If a teacher changes a quiz after students have taken it, previous scores stay valid and performance is evaluated against what the student saw then. Questions need a persistent `uuid` and a version; attempts store the correctness snapshot.
5. **Answer key stays server-side.** `isCorrect` is never output to the page. The Interactivity store posts the choice to a REST endpoint that grades and records it.
6. **Anonymous students.** If a student is not logged in, keep the attempts in the browser (local storage). Ask them to create an account or log in right after the quiz ends, then attach the stored attempts to the account. Design the exam engine and question bank with this in mind.
7. **Completion is unchanged.** Blocks never gate "Mark Complete".

## Interactive items in the lesson editor's "/" menu

The Text lesson editor's slash menu is a fixed list in a recovered module (`0-66427.js`). `tools/slash-adapters.mjs` patches the slash extension (`0-70181.js`) so the menu also reads `window.ohmylms.extensions.slashGroups()`: commands registered with `registerSlashCommand(id, {label, description, aliases, iconName, action(editor)})` appear in an "Interactive" group (`iconName` is any Lucide icon name; unknown names show no icon).

Interactive content is stored as a shortcode, e.g. `[ohmylms_activity type="reveal" prompt="..." answer="..."]`, and rendered by PHP (`ohmylms_register_activity`, see `includes/Extensions/Activities.php`). Behaviour uses the WordPress Interactivity API (`assets/extensions/reveal.js`, a script module). Only the shortcode is saved, so content filtering never strips markup. Plain shortcode attributes cannot contain double quotes; use a `data='{...}'` JSON attribute for richer data.

To add an activity: register the PHP activity, add a script module if it needs behaviour, and register a slash command whose action inserts its shortcode. Lesson pages render content after `wp_head`; on block themes `Activities::ensure_import_map()` prints the module import map in the footer so late-enqueued modules resolve `@wordpress/interactivity`.
