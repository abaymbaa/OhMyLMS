# Integrations / Add-ons React source

Edit the JSX files in this directory and run `npm run build` from the plugin root.

## Components

- `IntegrationsPage`: Add-ons route, loading, search, category filters, enable toggles and upgrade/dependency handling.
- `IntegrationCard`: add-on summary, dependency notice, Manage action and enable switch.
- `IntegrationConfig`: provider settings header, local settings state and panel selection.
- `ZoomSettings`, `AiModelSettings`, `GoogleMeetSettings` and `GoogleSignInSettings`: provider-specific credentials, validation, persistence and authentication controls.

## Runtime integration

`components.json` records the seven original factory-1841 bindings and their runtime dependencies. `tools/integration-adapters.mjs` replaces every implementation during the adapted build and fails when a binding is missing. The recovered fragments remain the parity baseline; do not rerun the one-time extractor over authored changes.

The existing WordPress data store, REST endpoints, shared controls, entitlement checks, Pro modal and server-provided integration manifest remain in place. Source activation remains controlled by `OMLMS_SOURCE_ASSETS`; building does not change site configuration.

## Validation

- `npm run lint`
- `npm test`
- `npm run build`
- Add-ons route coverage at `/integrations` in `tests/browser/extensions.spec.cjs`
