# React development guide

Start in `assets/src/features/<feature>/`. These files are editable source; the recovered application is the compatibility baseline. The SDK entry point in `assets/src/extensions/index.jsx` exposes feature factories to that application.

## Where new code belongs

- Components (`*.jsx`): rendering, accessible controls and event wiring. Use descriptive names for new props and local variables.
- Hooks (`use*.js`): editor state, effects and asynchronous orchestration. Ignore stale responses after navigation/unmount; preserve edits made while saves are pending. Follow `courses/useCourseEditor.js` for the existing save-generation pattern.
- API modules (`api.mjs`): REST calls and response handling. Accept an injected request function for tests. Keep WordPress permissions and validation on the server.
- Model modules (`model.mjs`): pure validation, transformations and payload preparation. Preserve unknown extension fields and avoid mutating store values.
- `index.js`: the feature's public component-factory registry. Import siblings directly within a feature to avoid circular imports through its registry.

Use WordPress-provided React (`@wordpress/element`), data and translation packages. Do not introduce a second React runtime. Keep hooks unconditional and include their reactive dependencies; stabilize callbacks when needed instead of suppressing dependency warnings. The current syntax/contract checker does not enforce React hook rules.

## Working with converted components

Converted components export `create<Component>(readRuntime)`. The factory returns a stable React component; it reads `readRuntime()` when rendered. Keep reads lazy because the recovered application's sibling bindings may not exist during factory registration. Instantiate factories only through the build adapters, never during another component's render.

`components.json` maps each recovered binding to its component name, file and dependency identifiers. The keys are compatibility identifiers, not recommended names for new application code. Destructure them with meaningful local aliases. When changing a dependency, update both the manifest and the component. Some manifests retain unused baseline dependencies deliberately.

To replace an existing recovered component:

1. Add the named factory in the feature folder and register it in `index.js`.
2. Add its original binding, file and runtime dependencies to `components.json`.
3. Use the feature's existing adapter. Ordinary top-level bindings use `tools/component-adapter.mjs`; its `declarations` option permits function declarations. Integrations, taxonomies and webhooks retain specialized adapters for object members, routes and wrappers.
4. Add behavior tests for the affected API/model and browser coverage for user-visible interactions.

For a new child component, use normal imports and props; no recovered binding or manifest entry is needed. For an entirely new feature, prefer the extension registry described in `EXTENSIONS.md`. If it must replace recovered functionality, add its adapter to `tools/build-recovered.mjs` and expose its registry in `assets/src/extensions/index.jsx`.

Do not rerun the one-time `extract-*`, `recover` or `split-admin` tools over authored changes. Never edit `build/` by hand. `commerce-reference/` is reference material and is excluded from formatting, as is `recovered/`.

## Daily workflow

```sh
npm ci
npm run dev
npm run format
npm run check
```

`format` applies the pinned Prettier configuration to authored features, extensions and adapter/check tooling. `format:check` reports drift without writing. `lint` parses all source and checks local module paths, unique manifest bindings/names, component files, exported factories and registry imports. These are structural checks, not a type checker or a hooks linter.

`check` runs formatting, contracts, the parity/behavior tests and the production build. For release work, also run `npm run test:reproducible` and the relevant browser suite on the isolated test site described in `DEVELOPMENT.md`. Browser tests require `OMLMS_TEST_CREDENTIALS`; they are not part of the default check.

Source assets still require `OMLMS_SOURCE_ASSETS`. A successful build alone does not enable them on a site. Much of the converted UI still relies on recovered stores, controls and transpiler helpers; migrate those boundaries incrementally with behavior coverage.
