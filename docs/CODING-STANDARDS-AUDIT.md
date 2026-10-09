# WordPress coding standards audit

The plugin is **not yet fully compliant**. Automatic corrections and official tooling are in place, but the remaining findings require source-level review. The standards commands intentionally fail while these findings remain; there is no blanket baseline hiding them.

## Scope and results

PHP was checked against the full WordPressCS standard across 771 plugin-owned files. Vendor dependencies and generated assets were excluded. The initial audit reported 122,082 errors and 10,442 warnings. After automatic fixes, it reported **13,054 errors and 2,636 warnings**. A second targeted fixer pass found no further automatically applicable changes.

JavaScript auditing covers authored feature modules, extensions, and interactivity code (424 files), with **6,944 errors and 28 warnings** remaining. CSS auditing covers 102 stylesheet files and reports **1,634 remaining findings**. Native scripts under `assets/js` received formatting updates but are outside the current ESLint command. Recovered upstream application/runtime assets and third-party dependencies are outside the authored-source audit. These scope boundaries mean this report is not a certification of every file in the repository.

## Remaining manual work

- PHP: contextual output escaping, prepared queries and caching, nonce/request boundaries, Yoda comparisons, documentation and translator comments, and naming/file conventions.
- JavaScript: shadowed recovered aliases, loose comparisons, unused expressions/variables, nested ternaries, fallthrough, internationalization, and accessibility findings.
- CSS: descending specificity, existing selector naming, import placement, duplicate selectors, and deprecated or unknown properties and values.

Public PHP interfaces, PSR-4 mappings, database fields, and CSS selectors need compatible migrations before renaming. Escaping and query findings need inspection of the actual trust boundary. CSS rules need coordinated template changes and visual regression checks. Mechanical changes to these areas could alter behavior.

Reconstructed React factories retain a narrowly scoped `no-var`/`prefer-const` exception because converting their hoisted aliases caused a verified runtime regression. Other rules remain enabled. New authored modules do not receive this exception.

## Validation after the corrections

- All 771 audited PHP files passed PHP syntax checks.
- All 270 JavaScript tests passed.
- Registry/grading checks, inline-blank compatibility checks, and all 19 syllabus settings checks passed.
- Source-contract validation passed for 1,545 JavaScript/JSX files, 236 contracts, and 19 manifests.
- The SDK production build passed and its admin assets were synchronized.

These checks validate syntax and covered behavior; they do not resolve the outstanding standards or security review findings.

## Reproduce and maintain

See [CODING-STANDARDS.md](CODING-STANDARDS.md) for installation and audit commands. Full JSON reports are local audit artifacts under ignored `.wp-dev/`; rerun the commands to audit the current checkout. [AGENTS.md](../AGENTS.md) records WordPress conventions for future development. New and modified code must follow those instructions and pass the relevant checks without expanding legacy exceptions.
