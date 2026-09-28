# Certificates React source

Edit the JSX files in this directory and run `npm run build` from the plugin root.

## Components

- `CertificatesPage`, `CertificateList`, and `CertificateNameCell`: certificate route, filtering, sorting, bulk deletion, pagination, and row actions.
- `CertificateTemplateDialog` and `CertificateTemplateCard`: template selection and certificate creation.
- `CertificateEditPage` and `CertificateEditor`: editor loading, layout, notifications, PDF export, and course assignment.
- `CertificateEditorHeader`, `CertificateControls`, and `CertificatePreview`: save/publish controls, design fields, and live certificate rendering.
- `CertificateTextField`, `CertificateImageField`, and `CertificateCourseSelector`: reusable editor controls.

## Runtime integration

`components.json` records the 13 original factory-1841 bindings and their runtime dependencies. `tools/certificate-adapters.mjs` replaces every implementation during the adapted build and fails when a binding is missing. The recovered fragments remain the parity baseline; do not rerun the one-time extractor over authored changes.

The components continue to use the existing WordPress data store, REST endpoints, shared controls, certificate templates, HTML-to-image/PDF helpers, styles, permissions, and Pro gating. Some transpiler helpers are still supplied by the recovered runtime, so these are editable named React modules rather than a standalone application.

Source activation remains controlled by `OMLMS_SOURCE_ASSETS`. Building does not change site configuration.

## Validation

- `npm run lint`
- `npm test`
- `npm run build`
- Certificate route coverage in `tests/browser/extensions.spec.cjs`
