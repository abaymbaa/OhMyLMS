# Email settings and templates React source

Edit the JSX files in this directory and run `npm run build` from the plugin root.

## Components

- `EmailSettingsPage` and `EmailTemplateList`: administrator/student notification tabs, template enablement and editor navigation.
- `EmailPersonalization`, `EmailButtonPosition`, and `EmailSenderOptions`: branding, colors, button alignment, sender details and footer settings.
- `EmailEditorPage`, `EmailEditor`, and `EmailEditorHeader`: individual template routing, responsive preview selection and persistence.
- `EmailPreview` and `EmailFields`: template-specific HTML preview and subject, heading, body, footer, suggestion and button fields.
- `EmailDesktopIcon` and `EmailMobileIcon`: responsive preview controls.

## Runtime integration

`components.json` records the 12 original factory-1841 bindings and their runtime dependencies. `tools/email-adapters.mjs` replaces every implementation during the adapted build and fails when a binding is missing. The recovered fragments remain the parity baseline; do not rerun the one-time extractor over authored changes.

The components retain the existing WordPress data store, REST actions, rich-text editor, shared controls, notification templates, branding settings and permissions. Template-specific HTML generation remains local to `EmailPreview.jsx`. Some transpiler helpers are still supplied by the recovered runtime, so these are editable named React modules rather than a standalone application.

Source activation remains controlled by `OMLMS_SOURCE_ASSETS`. Building does not change site configuration.

## Validation

- `npm run lint`
- `npm test`
- `npm run build`
- Email settings route coverage in `tests/browser/extensions.spec.cjs`
