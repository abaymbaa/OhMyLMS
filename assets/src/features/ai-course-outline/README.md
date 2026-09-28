# AI Course Outline Generator React source

Eighteen editable components cover the complete generator route: prompt templates and carousel controls, generator state and entitlement gating, outline preview, chapter and lesson navigation, preview actions, modal and route shell.

`components.json` records their factory-1841 bindings and runtime dependencies. `tools/ai-course-adapters.mjs` replaces every implementation during adapted builds and fails if a binding is missing. Existing AI requests, credit checks, settings, integrations, stores, course creation endpoint and router behavior remain in the recovered runtime.

Edit the JSX files here and validate with `npm run lint`, `npm test`, `npm run build`, and the `/ai-course-outline-gen` browser workflow.
