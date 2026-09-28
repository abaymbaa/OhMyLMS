# General Settings React source

Edit the JSX files in this directory and run `npm run build` from the plugin root.

## Components

- `SettingsPage`: Settings route, tab navigation, data loading, persistence and migration actions.
- `GeneralSettings`, `GeneralSettingsFields` and `SettingsActionBar`: general page assignments and shared save controls.
- `BrandingSettings`, `AccountPrivacySettings`, `PermalinkSettings` and `AdvancedSettings`: their corresponding non-email settings tabs.
- `DesignSettings`: course-list, course-details and checkout design sections.
- `PaymentSettings`, `PaymentGatewaysSettings`, `CurrencySettings` and `TaxSettings`: payment configuration tabs and panels.
- `MigrationSettings`, `MigrationPlatformSelector`, `MigrationImport`, `MigrationFileDropzone`, `MigrationResources` and `MigrationProgressModal`: provider selection, archive import and migration progress UI.

## Runtime integration

`components.json` records the 19 original factory-1841 bindings and their runtime dependencies. `tools/settings-adapters.mjs` replaces every implementation during the adapted build and fails when a binding is missing. The recovered fragments remain the parity baseline; do not rerun the one-time extractor over authored changes.

Email Settings is intentionally excluded because it is maintained in `../emails`. Gamification and Webhooks remain separate feature/runtime modules even though the Settings route renders their tabs. Shared design controls, gateway-specific forms, WordPress data stores, REST behavior, permissions and Pro gating continue to come from the recovered runtime.

Source activation remains controlled by `OMLMS_SOURCE_ASSETS`. Building does not change site configuration.

## Validation

- `npm run lint`
- `npm test`
- `npm run build`
- Settings route coverage in `tests/browser/extensions.spec.cjs`
