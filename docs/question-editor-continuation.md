# Question editor continuation — 9 October 2026

## Resume outcome

The continuation below records the state at the credit pause. Work has since resumed: production build/sync, current browser previews, saved counts and focused checks were completed. Use [question-editor-verification.md](question-editor-verification.md) for the current results and parity limits. Wayground is confirmed at 26 questions, and whole-quiz preview supports its premium formats despite individual cards showing Unlock. The companion slide preview was checked. OhMyLMS remains at 39 questions/38 types; its extra insertion example was already changed to Build a chart version 2 when resumed and that edit was preserved. Full Wayground feature parity remains incomplete as documented.

Resume this existing task. Do not restart, recreate the demo quizzes, discard changes, or claim complete Wayground parity yet. The user paused because credits were nearly exhausted.

## User objective and constraints

Make OhMyLMS question insertion and editing intuitive using Wayground's authoring flow as the reference. Cover every existing question type, add missing Wayground formats (explicitly approved), create comparison quizzes in both products, and verify insertion and learner output while preserving OhMyLMS assessment behavior.

Repository: `C:\Users\theby\Local Sites\800\app\public\wp-content\plugins\OhMyLMS`.

Follow AGENTS.md: official WordPress standards; preserve public names, custom extensions and versioned assessment contracts; edit authored source and rebuild; report existing lint failures accurately without suppressions. Do not spawn agents unless explicitly authorized. No commit or PR was requested.

The working tree includes pre-existing settings/AI tutor work. Preserve `SettingsPage.jsx`, `AiTutorSettings.jsx`, `docs/AI-TUTOR.md`, `includes/AI/AdminPage.php` and their generated outputs. Do not broadly reset or clean generated chunks; several predated this task.

## Saved deliverables

- OhMyLMS draft quiz **79**, “OhMyLMS — every question type comparison”: http://800.local/wp-admin/admin.php?page=ohmylms#/quiz-edit/79
- It contains **39 persisted questions covering 38 types**. The extra poll was inserted through the browser, saved, reloaded, and its prompt/choices confirmed. It is named Question 39, with prompt “Insertion check: Which practice format would you choose?” and Drawing/Video/Practice questions choices.
- Wayground comparison quiz: https://wayground.com/activity/admin/quiz/6ac86b7fb55f13275caa8e4c/edit
- **25 questions were confirmed saved** before the final interactive-video group was added. That group was saved last; the user's latest browser URL returned to the quiz with `at=6ac881662b4485ca7f04fc29`. Verify the resulting count and group before declaring completion.
- Wayground companion lesson for the Slide format: https://wayground.com/activity/presentation/6ac87a493e2eb76a4aaa06bc/edit
- A separate saved OhMyLMS question-bank sample “Editor demo: What is 2 + 2?” was created earlier and verified. Preserve it.
- Both comparison quizzes are drafts. Premium Wayground questions can be authored/saved, but saved editing/preview shows Unlock. Do not purchase an upgrade or bypass this restriction.

## Implemented source

The original 24 types now use a searchable chooser before insertion, a prominent rich prompt, formatting/image controls, clearer type-specific answer setup, collapsed settings, and a learner preview. Quiz and question bank share this form. New option rows have unique temporary IDs. A numeric `settings.parts` crash in shade-model preview was fixed.

`QuestionMediaUpload.jsx` opens the real WordPress media library. It releases the recovered Lodash global through public `noConflict()` to restore original Underscore before opening wp.media. This fixed an observed media-library failure without editing recovered bundles.

Added 14 formats, bringing the total to 38: passage, graphing, hot-text, match-table-grid, labeling, hotspot, draw, audio-response, video-response, poll, word-cloud, discussion-board, slide, interactive-video.

Main new files:

- `assets/src/features/question-editor/{QuestionTypeChooser.jsx,QuestionMediaUpload.jsx,ExtendedEditor.jsx,ExtendedPreview.jsx,extendedModel.mjs}`
- `assets/interactivity/extended-questions.js` (classic authored script, separately enqueued)
- `assets/css/{question-editor.css,extended-questions.css}`
- `includes/Assessment/ExtendedQuestions.php`
- `templates/single-lesson/quiz-loop/extended.php`
- `assets/src/features/quiz-reports/ExtendedResponse.jsx`
- `assets/images/question-type-diagram.svg`
- `tests/extended-questions-unit.php`, `tests/php/fixtures/class-wp-error.php`, `tests/js/{extended-questions,question-type-insertion,question-media-upload}.test.mjs`
- `tools/question-type-comparison.mjs` creates reusable demo JSON.

Integrations modified question bank/editor models, answer fields, preview, quiz cards, reports, extension registration and enqueueing. Passage questions now use existing structured grading, part weights, teacher marking and report rows. MediaFreezer and QuestionSnapshot now freeze/resolve local upload URLs stored in `settings.image_url` and `settings.video_url`.

New automatic grading handles selected tokens, grid mappings, labels, hotspot regions, graph points/straight lines and text answers at video checkpoints. Manual responses use existing pending-review behavior. Poll/word cloud/slide have zero marks. Private grading keys are excluded from learner settings. Recording/upload is bounded, unsafe media schemes rejected, and record streams stop on removal or timeout. Radio group names are unique per widget instance.

## Browser verification completed

- All original 24 types were mounted in the editor and preview.
- All additional 14 types mounted in editor learner preview.
- Saved OhMyLMS quiz player navigated all 38 original examples.
- Responded to all new automatic formats through actual controls; drew a triangle, uploaded a generated WAV (playable), supplied a video link, answered poll/word/discussion/video checkpoint, and submitted.
- Preview result showed **8 / 35**, with “Some answers require manual grading.” Legacy questions were mostly left unanswered, so this is not a full-answer scoring assertion.
- Read-only integration script checked all 15 added-format examples against actual immutable snapshots: automatic fractions 1, manual pending true, unscored fractions 0, no private keys in student views.
- The question 39 UI insertion was separately saved and verified after reload.

Wayground examples cover MCQ, true/false, multiple select, inline/table blanks, open ended, poll, word cloud, match, reorder, categorize, dropdown, drag/drop, audio/video response, draw, discussion, graphing, labeling, hotspot, hot text, passage with child MCQ, multi-part with two written children, and interactive video with a child MCQ at 00:00. The video is Khan Academy “Measuring the sides of a rectangle to find area”, YouTube ID `0L9kFgpct1Y`. Slide required exporting to a companion lesson; a title slide exists there.

## Verification results and commands

Last relevant JS run: **90 tests passed** across editor/bank/report/insertion/media/extended/shared answer tests. Last isolated PHP: **84 extended checks passed**. Existing assessment unit suite: **186 checks passed** with mbstring enabled. PHP syntax passed all 13 touched plugin/test PHP files. Source contracts passed: 1559 JS/JSX files, 236 contracts across 19 manifests. Production SDK build passed.

New authored JS components/widget lint clean at their last checks; new CSS clean. New PHP template and test harness clean. ExtendedQuestions.php has only two WordPress filename errors because the repository autoloads PascalCase PSR-4 class files. Document this narrow compatibility exception rather than rename mappings or suppress rules.

Broad repository standards already fail on legacy/recovered code. A scoped run of touched legacy JS files reported 59 errors/2 warnings before some new nested ternaries were removed; rerun for the final accurate count. Do not claim all standards pass. Earlier full JS run had thousands of existing errors; full PHP and admin-ui CSS also had existing violations.

Useful commands (Node available directly; npm may not be on PATH):

```powershell
node node_modules/webpack-cli/bin/cli.js --config webpack.config.cjs --mode production
node tools/sync-admin-assets.mjs
node tools/check-source.mjs
node tools/wp-standards.mjs check includes/Assessment/ExtendedQuestions.php templates/single-lesson/quiz-loop/extended.php
node node_modules/stylelint/bin/stylelint.mjs assets/css/question-editor.css assets/css/extended-questions.css
```

PHP executable: `C:\Users\theby\AppData\Roaming\Local\lightning-services\php-8.2.29+0\bin\win64\php.exe`.
Use `-d extension_dir=<same bin directory>\ext -d extension=mbstring` for assessment tests. Local WordPress CLI bootstrap also needs `-d extension=mysqli -d mysqli.default_port=10005`.

Ignored helper `build/check-question-comparison.php` is read-only and verifies the saved 39-question/38-type quiz and immutable grades. **Do not rerun `build/create-question-comparison.php`**: it updates quiz 79 from the original 38-example fixture and would remove the extra UI insertion check. State/fixtures are in `build/question-type-comparison*.json`. No credentials were written into these scripts.

## Remaining work when resumed

1. Verify the final Wayground interactive-video save and preview available formats. Saved premium previews are account-blocked; record this accurately. Verify the companion slide lesson. Do not recreate either quiz.
2. The **last source change** regrouped QuestionTypeChooser into Basic, Interactive and responses, Mathematics, Visual learning, Content and multimedia. It was formatted but **not rebuilt/synced yet**. Finish the final build and sync, then reload browser documents (hash navigation alone retains old modules).
3. Recheck the latest direct widget changes: graph axis numbers, unique radio groups, empty media player hidden until a response exists, word-cloud rendering. The word cloud visualizes an individual learner's words. Discussion currently submits an individual response for teacher review, **not a live shared peer wall**. Graphing supports points and straight lines, **not Wayground inequalities/curves**. Video checkpoint responses are text; passage parts follow native structured numerical/expression/written capabilities. These are material parity limits; either implement required remaining behavior or explicitly document them instead of claiming an exact clone.
4. Improve client validation if needed: `extendedIssues()` currently has basic image/video/token/graph/grid checks; server validation is stronger. Check empty-prompt navigation after the latest `canLeaveQuestion()` change. Recording was not exercised against user microphone/camera permissions; upload was tested.
5. Check teacher media/drawing rendering and passage part marking against actual report data if feasible without modifying real learner attempts. Preserve frozen contracts and permission boundaries.
6. Run final targeted tests/standards after further changes. Add a final comparison/QA document with mappings, saved examples, verified behavior, account limitations and PSR-4 filename compatibility exception. Update `docs/question-block-editor.md` with the added formats if needed.
7. Capture current screenshots, preserve the deliverable tabs, reset any temporary viewport override, and provide quiz links plus concise results and remaining limitations. No final completion claim has been sent yet.

## Browser state and proof artifacts

Use only `mcp__cua_repl` for UI automation. Browser ID **2**, local editor tab **1**, Wayground tab **2**, OhMyLMS saved preview tab **3**. The preview URL contains a nonce: open it using the editor's Preview button and do not put its nonce URL into documentation or final links.

If resuming with compacted context, call `await cua.rewriteDocumentation()` first. Rebind existing tabs by known ID if necessary; do not reselect a browser just to recover a stale tab. `evaluate` is read-only DOM inspection only. Native images/files generated for uploads are test data, not personal files. Read file-upload docs before uploads.

There was a temporary viewport override for authoring checks; reset it before finishing. Tab deliverable/handoff marks are turn-scoped.

Existing screenshots (earlier versions, refresh before final delivery):

`C:\Users\theby\.codex\visualizations\2026\10\09\01a11ede-2f0f-71b0-a3db-41c650728751\ohmylms-question-editor.jpg`

Same directory: `ohmylms-question-preview.jpg`, `wayground-preview.jpg`.
