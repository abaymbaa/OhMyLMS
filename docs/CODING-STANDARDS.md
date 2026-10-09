# WordPress coding standards

OhMyLMS uses the official [WordPress coding standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/) tooling:

- PHP: WordPressCS through PHP_CodeSniffer and PHP Code Beautifier, using `phpcs.xml.dist`.
- JavaScript/JSX: `@wordpress/eslint-plugin` and WordPress's `wp-prettier` formatter with `@wordpress/prettier-config`.
- CSS/SCSS: `@wordpress/stylelint-config` and its SCSS configuration.
- Editor and Git settings preserve tabs and LF line endings on Windows as well as other systems.

## Install and run

```sh
npm ci
composer install --working-dir=tools/coding-standards --no-plugins --no-scripts
npm run lint:php
npm run lint:js
npm run lint:css
npm run format:check
```

`npm run lint` runs the source-contract check and the standards checks. Existing findings are reported as failures; they are not hidden behind a baseline. `npm run lint:standards` runs just the standards checks. PHP tooling is isolated from the plugin's runtime Composer dependencies.

Automatic fix commands are `npm run lint:php:fix`, `npm run lint:js:fix`, `npm run lint:css:fix`, and `npm run format`. Review changes and run relevant tests before rebuilding and shipping assets. PHP Code Beautifier uses exit status 1 when it successfully fixes files; this is distinct from a PHP syntax failure.

The PHP launcher uses PHP on PATH, the `PHP_BINARY` environment variable, or an installed Local PHP runtime on Windows. It enables the Local runtime's mbstring extension for the checker. Standard PHP installations should have the extensions required by WordPressCS enabled.

## Compatibility boundaries

- Vendor dependencies, generated bundles, and recovered upstream runtime assets are not edited or reformatted as plugin source.
- WordPress imports are host-provided dependencies managed by the existing dependency-extraction build. ESLint marks the exact imported WordPress packages as external core modules rather than requiring the plugin to bundle another copy of WordPress.
- Reconstructed React factories use hoisted legacy aliases. Converting those aliases to `let`/`const` introduced a verified quiz-report regression. Only those marked factory files have exceptions for `no-var` and `prefer-const`. Other checks still run on them; their remaining findings remain visible.
- Existing public PHP names, hooks, REST fields, database schema, CSS selectors, and PSR-4 file mappings must remain compatible. Naming migrations require an explicit compatibility plan; a formatter must not rename these interfaces silently.

These boundaries are not a claim of full compliance. See the audit report for unresolved findings. Follow `AGENTS.md` for every future change; use modern declarations and WordPress conventions in new authored code.

## Review findings manually

Escaping findings require identifying whether the output is plain text, an attribute, a URL, or deliberately rendered HTML. Sanitization and nonce findings require examining the request and permission boundary, including existing REST authentication. Database caching warnings require distinguishing reads from writes. Do not blanket-escape markup, add fake documentation, change loose comparison behavior, reorder CSS cascades, or disable rules simply to make the report green.

Remaining recovered JavaScript needs source-level cleanup with regression tests. CSS specificity and selector naming changes also need coordination with the templates and script consumers. Run the full audit again after those migrations.
