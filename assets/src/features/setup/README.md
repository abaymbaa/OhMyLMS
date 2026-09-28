# Setup Wizard React source

Eleven editable components cover the complete onboarding route: welcome, experience level, regional/design preferences, niche, LMS migration, SCORM import, course import routing, completion, controller, wrapper and page shell.

`components.json` records their original factory-1841 bindings and runtime dependencies. `tools/setup-adapters.mjs` replaces every implementation during the adapted build and fails if any binding changes or disappears. Existing stores, REST requests, telemetry hooks, shared controls, migration endpoints and router behavior remain in the recovered runtime.

Edit the JSX files here and validate with `npm run lint`, `npm test`, `npm run build`, and the `/setup-wizard/:tab?` browser flow.
