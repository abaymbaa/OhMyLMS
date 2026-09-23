# Acceptance status — 2026-09-23

**Not released to the math site.** This is a tested source-recovery/extension foundation, not completion of every approved release gate.

## Evidence

- Code/add-on snapshots and database backup outside Git; 281 baseline asset hashes.
- Separate local WordPress DB, disposable fixtures, blocked HTTP/email.
- 831 recovered factories, 238 application fragments, 99 rebuilt assets with source maps.
- Separate Git review repository with baseline commit `1a6386ae223b47b47584318a3330083cdadf2c89`; implementation staged for comparison without touching the shared workspace index.
- Fresh source-only workspace installed locked dependencies offline and successfully built without old compiled assets.
- All 142 current generated artifacts match that separate source-only build byte for byte.
- Initial recovered dashboard screenshot matched original pixels.
- Eight browser scenarios pass together: asset inventory/errors, custom page, rendering isolation, membership create/reopen/settings, custom editor store updates, 11 admin routes, mobile/RTL screenshots, custom and built-in lesson saving/reopening, and the student course slot.
- 60 isolated PHP checks: content create/reopen, settings permissions/schema, custom question rendering/grading, enrollment denial, timers, duplicate submissions, progress, totals/coupons, checkout metadata and mocked QPay success/failure/partial/repeated callbacks.
- Registry/form/AST/source-map tests, built-in grading tests and two-build hash comparison. Use DEVELOPMENT.md commands to verify current checkout.

Checkout fixes: extension metadata now persists after the order has an ID; both QPay confirmation paths require the verified payment to cover the order total. No real payment requests were sent.

The original lesson editor also reproduced a ProseMirror duplicate-plugin exception. The source build now adapts the duplicate state-module exports to share one instance. The original assets remain unchanged for baseline comparison.

The student template rendered block-theme headers after `wp_head`, too late for WordPress's module import map. Header/footer blocks are now prepared before `wp_head`; the student page passes without the unresolved interactivity-module error. The closing body tag is also corrected.

## Remaining release gates

- Convert remaining reconstructed shared scopes into independent named modules. Editable fragments are not the final maintainability goal.
- Verify original JavaScript dependency versions and restore missing licence notices from verified provenance. Original package manifest/source map were absent.
- Complete original-vs-rebuilt visual/end-to-end comparisons for every authoring, student, restriction and checkout path, including every built-in question editor. API/grading tests are not full browser coverage.
- Exercise QPay browser polling/concurrent callbacks and the existing custom-question add-on's full browser flow. Sequential duplicate callbacks are covered; loading add-ons is not full compatibility proof.
- Test actual WordPress RTL locale/assets and all responsive screens. Document direction screenshots alone are insufficient. Check every dynamic chunk/fallback URL.
- Final math-site smoke test with matched rollback before enabling rebuilt assets there.

The read-only `http://math.local` smoke request failed at the local connection layer, including an elevated retry. No HTTP response was obtained. The isolated site at `127.0.0.1:8099` remained available. Rebuilt assets have not been enabled on math.

The isolated PHP log records pre-existing Razorpay PHP 8.2 dynamic-property deprecations, distinct from browser console errors. Historical test failures remain in logs after fixes/reruns.
