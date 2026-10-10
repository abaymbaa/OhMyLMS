# Math input and equations

Enable the opt-in rollout with `define( 'OHMYLMS_MATHLIVE_ENABLED', true );` in `wp-config.php`, or the `ohmylms_mathlive_enabled` filter. The local `800.local` site is enabled for acceptance testing. Disabling presentation retains native expression inputs and existing grading contracts.

MathLive 0.111.1 and Compute Engine 0.151.0 are pinned in npm. Run `npm ci` and `npm run build` with the repository's Node/npm versions. The build packages fonts and licenses locally. No separate KaTeX dependency or computation service is added. MathLive's distributed fonts retain their upstream names.

Expression answers, alternatives and expression blanks use a shared MathLive field while the existing named input continues to carry the answer. Numerical values and tolerances retain their original controls. Learner menus and the mobile keyboard expose basic supported notation. Typing or pasting unsupported notation still reaches bounded PHP validation and is rejected. Native inputs remain usable if the runtime fails.

Use **Insert equation** for prompts, choices, hints and explanations. Choose inline or display layout. Prompts show editable equation fields directly; **Edit original source** in the equation dialog provides a text fallback. Storage uses the existing content string with explicit markers:

```
[[ohmylms-math:latex:display]]\frac{1}{2}x={{a}}[[/ohmylms-math]]
```

Dollar signs remain ordinary text. WordPress HTML sanitization is unchanged. The browser renderer uses text nodes and rejects presentation commands that inject HTML, URLs or macros. Editing preserves source tokens; save/reopen and snapshot publishing store markers rather than custom-element HTML.

Enable **Randomize numbers**, define variables and use `{{a}}` or computed tokens such as `{{a*b}}` inside equations. MathLive displays these as locked placeholders and restores the original token on edits. Variable buttons insert tokens into answer and equation controls. Range, step, exclusions, calculated variables, conditions and sample-count controls use the existing server randomization model. **Show examples** checks concrete server-generated instances. Compute Engine loads only when a teacher requests **Check syntax with Compute Engine**; this is advisory and does not replace server validation, randomization or grading. It never rewrites the formula or runs learner solving.

The CAS accepts bounded fractions, roots, powers, single-letter variables, supported functions and equations. It retains equivalence and required expanded/factored/simplified checks. A scalar solution (`3`) and an equation (`x=3`) remain different answer categories: author an alternative if both should be accepted. The acceptance quiz includes a randomized scalar alternative. Learner payloads retain public answer-form instructions but omit expected answers, alternatives, tolerances and randomization settings.

The new `includes/Assessment/MathLive.php` follows the existing PSR-4 namespace/file mapping. Its PascalCase filename intentionally retains that mapping; WordPressCS filename findings are reported rather than suppressed or addressed by a breaking rename.

## Verification

- Production source build and asset synchronization passed. Webpack warns about the 806 KiB MathLive entry and the optional approximately 3.9 MiB Compute Engine chunk.
- CAS: 94 checks passed. Randomization/templates: 1,666 checks passed.
- JavaScript: 339 of 340 tests passed. The unchanged `assets/js/elementor-widgets.js` fails the pre-existing recovery AST hash expectation.
- Six MathLive browser tests passed: real PHP template/native POST/server grading; fractions, roots, powers and equations; equivalent and required forms; explicit markers and local fonts; restoration event, randomized tokens and dynamic mounts/cleanup; plain fallback and unsupported input; mobile keyboard and physical keys; direct author editing/serialization/reopen; and template/lazy-loader coexistence without duplicate script execution.
- Local quiz 150 (**MathLive acceptance test**) was created through the admin UI. Its two randomized questions were edited, saved, duplicated and reopened. Published snapshots preserved original markers. Fixed seeds reproduced the same instances; learner payload checks and authoritative grading passed. Actual preview submissions returned **2 / 2** for equation solutions and for number-only alternatives.
- Changed PHP syntax, source-contract checks, new math-module ESLint and scoped math CSS checks passed.
- Repository-wide checks remain blocked by existing formatting violations (10 unrelated files), PHP standards findings across 730 files, JavaScript standards findings and CSS standards findings. No baseline or rule suppression was added.
- The existing general PHP unit harness fails because its anonymous question fixture lacks `get_settings()`. The general interactivity browser fixture fails before quiz rendering because it does not provide `OhMyLMS\Assessment\Schema`; its run was stopped after confirming this blocker. The guarded disposable-site assessment integration suite was unavailable; it was not pointed at the user's working database.

Persistent enrolled-learner attempts and theme-specific override combinations have not been exercised end to end on `800.local`. Browser restoration-event and deterministic snapshot checks cover the integration boundary, but do not substitute for that acceptance pass. Compute Engine syntax recognition can exceed the server's supported notation. These differences are explained in the teacher controls.

## Manual acceptance

1. Open quiz 150, edit an equation directly, insert an inline fraction, save and reopen. Confirm tokens remain variables and ordinary dollar amounts remain text.
2. Draw sample variants; check range/exclusions/conditions and calculated variables. Verify syntax checking leaves original formulas untouched.
3. Preview and submit a correct solution, an equivalent solution, an incorrect solution and an unsupported expression. Check each required answer form and expression blank.
4. On an enrolled learner account, answer multiple questions, navigate pages, autosave, leave/resume and submit. Check the saved attempt review and ensure no expected answers appear before feedback is permitted.
5. On a touch device, open/dismiss the math keyboard; use Tab and physical keys. Block the runtime request and confirm the plain input can still submit. Repeat with active theme overrides and custom question extensions.

No deployment or merge was performed.
