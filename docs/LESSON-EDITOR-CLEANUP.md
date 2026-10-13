# Lesson editor cleanup

Audited on 2026-10-13. Built-in Block (`text`), audio and video lessons use the native WordPress post editor.

## Removed

- `assets/src/features/content-hub/BlockWorkspace.jsx`: retired embedded Gutenberg provider, canvas, toolbar, history, fullscreen, inserter, list view and inspector.
- `assets/src/features/learning/LessonBlockWorkspace.jsx`: wrapper for that retired editor.
- Embedded-editor-only flags in `LearningContentForm`, `LessonSettings` and `LessonEditor`.
- 90 retired editor rules from `assets/css/admin-ui.css`, including overrides that hid the WordPress admin navigation.
- Embedded block-editor settings and stylesheet enqueues from `includes/Extensions/SourceAssets.php`.
- `tools/probe-editor.cjs`: debug probe for the old source/shipped lesson editor comparison.
- Outdated hashed SDK chunks. The shipped chunk directory went from 968 files to 56 current files; builds now clean SDK output and sync only current chunks.
- Obsolete browser assertions that tried to edit built-in lessons inside the LMS React form. Native lesson coverage lives in `tests/browser/lesson-block-editor.spec.cjs`.

Additional file cleanup removed 18 one-time component extractors, their shared helper,
the original snapshot/review-repository utilities and four generated root logs. These
files are not used by the plugin, production build or tests. Source recovery inputs,
build adapters, development tools and test fixtures remain available.

## Retained intentionally

- `NativeLessonEditor.php`, `NativeLessonSettings.jsx`, `LessonPostType.php` and `NativeLessonController.php`: current native editor, settings, permissions and REST saving.
- `NativeLessonRoute.jsx`: compatibility redirects for existing lesson bookmarks; normal links open the native editor directly.
- `LessonEditor`, `LessonContent` and `LessonSettings`: custom lesson editor extension compatibility. `LessonContent` uses the shared legacy form or the registered extension, with settings retained.
- The shared rich-text/media editor and its recovered vendor runtime: assignments and custom lesson types still use them.
- Public question-block exports, assessment contracts and frontend activity rendering: independent extension interfaces and saved-content behavior.
- Recovered application fragments and original runtime snapshots: required by the parity/recovery build. They are provenance, not standalone editor implementations to delete.
- Stored `text` identifiers and existing lesson metadata: changing these would break saved lessons and integrations.

## Verification

- Production build and asset synchronization passed.
- All 1,594 authored/recovered JavaScript files parse; all 236 component contracts remain valid.
- JavaScript suite: 382 passed, 3 failed, 1 skipped. The failures predate this cleanup: quick-question prompt harness, quiz autosave harness and Elementor recovery parity.
- Custom editor rendering, fallback content, settings and lesson navigation regression tests passed.
- PHP syntax and changed-source formatting checks passed.
- Standards checks still report existing JavaScript/CSS violations; PHP standards tools are not installed.
- Native WordPress integration execution was attempted but could not connect to Local's database from the shell. Browser integration was not run.
