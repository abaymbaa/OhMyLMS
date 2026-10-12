# Learning React source

Edit the JSX files here, then run `npm run build` from the plugin directory.
`npm run dev` watches changes and rebuilds the SDK.

## Components

- LessonEditor, LessonContent, LessonSettings: lesson authoring and settings.
- LearningContentForm, LearningMediaField: text, image, video and audio inputs.
- LearningEditorHeader, PrerequisiteSettings, DripSettings, DownloadResources,
  DeleteLearningItem: shared learning editor UI.
- AssignmentEditor, AssignmentContent, AssignmentSettings: assignment authoring.
- AssignmentList, AssignmentNameCell: assignment listing and actions.
- AssignmentReport, AssignmentGrading, AssignmentResultHeader,
  AssignmentSubmission, AssignmentGradeForm: submissions and grading.
- QuizList, QuizNameCell: quiz listing (question editing remains in ../quizzes).
- SessionList, GoogleMeetEditor, ZoomEditor: live sessions and meeting dialogs.

## Runtime integration

Built-in text, audio and video lessons now open the native WordPress post editor.
`NativeLessonRoute.jsx` redirects old standalone hash URLs and offers a new-tab link
from course dialogs. Custom lesson-editor extensions retain their existing editor.
`NativeLessonSettings.jsx` adds LMS panels using Gutenberg SlotFills; it does not
replace the editor canvas, toolbar, inserter, list view or WordPress editor CSS.
The Block inspector opens by default. The return route is stored per lesson in tab
session storage because WordPress replaces the URL when saving.

PHP registers the existing `ohmylms-lesson` post type with editor, REST and revision
support. The additional `ohmylms_lesson_settings` field on `/wp/v2/ohmylms-lessons`
uses the existing metadata keys. Content remains `post_content`, lesson IDs stay
the same, and `/ohmylms/v1/lessons` remains compatible. Native saves do not move
course placements. The native REST controller restricts lesson reads to editors,
including published lessons; learner access still goes through the LMS player.

Compatibility exceptions: `LessonPostType.php`, `NativeLessonEditor.php` and
`NativeLessonController.php` follow the plugin's PSR-4 autoload mapping. Their
CamelCase filenames are required by that mapping and are reported by WPCS's
filename rules. The native back-button SlotFill is exposed by WordPress only as
`__experimentalMainDashboardButton`; the settings panel retains a normal return
link if that export is unavailable.

Run `php tests/php/native-lesson-editor-integration.php` with
`OHMYLMS_TEST_SITE_PATH` set to a local WordPress checkout. It uses connection-local
temporary post tables. The updated `lesson-block-editor.spec.cjs` verifies native
content/settings saves, reloads, syllabus return links and the left sidebars.
Its login can use the existing external credentials file or a short-lived
`OHMYLMS_TEST_STORAGE_STATE` file. Never commit either authentication file.

components.json records the original runtime bindings and dependencies. The learning
adapter replaces all 25 component implementations during the application build and
fails if a binding is missing. The SDK must load before the admin application.
The existing PHP backend, WordPress data store, media library, common controls,
styles and entitlement checks remain in use. Some extracted logic retains transpiled
helpers provided by that runtime; these are editable JSX modules, not a standalone app.

LessonContent also retains the custom lesson-editor extension hook. Do not overwrite
it by rerunning the one-time extraction script. Recovered files are the parity baseline;
make ongoing edits in this directory instead.

Source builds are used when OHMYLMS_SOURCE_ASSETS is enabled. Building alone does not
change that site configuration.

## Validation

- `npm run lint`
- `npm test`
- `npm run build`
- `npm run test:browser -- tests/browser/learning.spec.cjs`

Browser tests use OHMYLMS_TEST_CREDENTIALS and the isolated WordPress test server. They
serve workspace bundles, check all three lists, save and reload real lesson/assignment
fixtures, verify custom lesson rendering, and check grading with a mocked report API.
