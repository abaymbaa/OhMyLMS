# Webhooks React source

Edit the JSX files in this directory and run `npm run build` from the plugin root.

## Components

- `WebhooksPage`: webhook list, loading, search, status filtering, selection, bulk actions, pagination, Pro/integration gating, editing and deletion.
- `WebhookDetails`: name, endpoint, trigger, HTTP method, data format and status fields.
- `WebhookDataMapping`: event-aware payload field mapping, row addition/removal and validation feedback.
- `WebhookEditorModal`: create/edit state, two-step navigation, validation, persistence and notifications.

## Runtime integration

`components.json` records the four original factory-1841 bindings and their runtime dependencies. `tools/webhook-adapters.mjs` replaces every implementation during the adapted build and fails when a binding is missing. The recovered fragments remain the parity baseline; do not rerun the one-time extractor over authored changes.

The existing WordPress data store, REST endpoints, shared controls, entitlement checks, Webhooks integration toggle and Pro modal remain in place. Source activation remains controlled by `OMLMS_SOURCE_ASSETS`; building does not change site configuration.

## Validation

- `npm run lint`
- `npm test`
- `npm run build`
- Webhooks route coverage at `/webhooks` in `tests/browser/extensions.spec.cjs`
