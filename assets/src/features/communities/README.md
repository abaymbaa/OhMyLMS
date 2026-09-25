# Communities React source

Edit the five JSX components in this directory and run `npm run build` from the plugin root.

- CommunitiesPage: main admin route and heading.
- CommunityList: analytics cards, spaces table, View/Settings actions and detail loading.
- CommunityEditor: authored Details/Courses flow, validation, Pro gating and save lifecycle.
- CommunityDetails: title, slug, description, space photo and cover image.
- CommunityCourses: course search, availability filtering and assignment.
- model.mjs: title and slug validation.

`components.json` records the five runtime bindings. `tools/community-adapters.mjs`
replaces their implementations during the source build and fails on missing bindings.
The editor uses native async/await and prevents duplicate submissions, validates again
on save, and retains the dialog after unsuccessful responses. Closing is blocked while
its save is pending. Other components contain reconstructed JSX with explicit shared
runtime dependencies, including some transpiler helpers. WordPress stores, REST APIs,
common controls, styling and backend permissions remain in use.

The existing course-level Community component remains in `../courses/`. Frontend
community feeds and PHP endpoints are outside this admin conversion. Recovered files
remain the parity baseline. Do not rerun the one-time extractor over authored changes.
Source activation still uses `OMLMS_SOURCE_ASSETS`; building does not change site configuration.

## Validation

- `npm run build`: all five adapters integrated; SDK compiled (bundle-size warnings).
- `npm run lint`: source parsing.
- `npm test`: includes five community tests: all five render trees compared with the
  recovered baseline; analytics/detail request contracts; automatic/custom slugs and
  image IDs; course selection; validation, Pro gating, failure/retry and duplicate saves.
- `npm run test:browser -- tests/browser/communities.spec.cjs`: browser scenario uses
  isolated WordPress login and workspace bundles with mocked community/course responses.
  It covers listing, opening settings, slug validation, failure/retry and reopening.
  It does not establish real backend community persistence or complete frontend acceptance.

Known shared-control limitation: programmatic Next navigation updates the displayed Courses pane and active CSS class, but the recovered TabsWP control leaves aria-selected stale. The browser scenario checks the actual pane and Save button. This conversion does not replace that shared tab control.
