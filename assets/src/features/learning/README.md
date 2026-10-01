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
