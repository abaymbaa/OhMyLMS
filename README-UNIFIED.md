# OhMyLMS unified plugin

OhMyLMS is an LMS for WordPress, derived from CreatorLMS 1.2.19 and its Pro add-on, which were merged into one codebase in the `OhMyLMS` namespace. `ohmylms()` is the single runtime instance. The original CreatorLMS and Pro plugins must be inactive; the bootstrap refuses to load alongside them.

## Naming and storage

Everything uses the `ohmylms` prefix: tables (`wp_ohmylms_*`), post types (`ohmylms-*`), options and meta (`ohmylms_*`), functions, hooks, constants (`OHMYLMS_*`), CSS classes (`ohmylms-*`), blocks (`ohmylms/*`), the REST namespace (`/ohmylms/v1`), the admin page (`admin.php?page=ohmylms`), shortcodes, the text domain and theme template overrides (`<theme>/ohmylms/`). No compatibility aliases for the former CreatorLMS names are shipped.

## Extensions

Register trusted plugin or theme callbacks on `ohmylms_register_extensions`. IDs must begin with a lowercase letter and contain lowercase letters, digits, `_` or `-`. Duplicate IDs throw. See `examples/extensions.php` for a layout, numeric question, lesson type and reveal activity. The examples are opt-in and are not loaded by the main plugin.

* `ohmylms_register_layout($id, $definition)`: `label`, `contexts` (course/chapter/lesson/quiz), and `render($args)` are required. Render callbacks emit HTML. `$args` includes `content_id`, `course_id`, `context` and contextual template arguments.
* `ohmylms_register_question_type($id, $definition)`: `label`, `render($questionArray, $attemptArray)`, `validate($answer, $questionModel)` and `grade($answer, $questionModel)`. `editor` describes settings; `manual: true` identifies types requiring human review in reports. Grading returns `fraction` (0–1), `correct` and `manual`; a `WP_Error` rejects the submission. The legacy attempt total uses whole points, so earned fractions are rounded to whole points. Render form fields under the existing question ID naming convention demonstrated in the example. Validators must accept empty answers for unanswered timeout submissions. Escape all emitted output.
* `ohmylms_register_lesson_type($id, $definition)`: `label`, `render($lessonModel)` and optional `editor`. Built-in text/audio/video remain registered.
* `ohmylms_register_activity($id, $definition)`: `label` and `render($dataArray)`. Use `[ohmylms_activity type="your-id" data='{"key":"value"}']` or the dynamic `ohmylms/activity` block. An unknown activity renders nothing.

The native **Layouts & extensions** submenu accepts a content ID. Content `_ohmylms_layout` takes precedence over course `_ohmylms_layout_defaults[context]`. Empty means inherit; `default` explicitly uses built-in rendering. Missing/unsupported registrations fall back to the course selection and then built-in rendering. Registered layouts can be overridden by `theme/ohmylms/layouts/ID/CONTEXT.php`; the template receives `$args`. A recursion guard allows wrappers to delegate to the built-in template. Existing complete theme overrides can bypass new extension entry points and may need to adopt them explicitly.

The existing React editor remains available. Extension question configuration uses the native settings surface in this phase; there is no new production quiz design, activity library or exam mode. `/ohmylms/v1/extensions` exposes labels and editor metadata to authorized editors, never callbacks.

## Events

Hooks receive one associative-array argument, after persisted changes where applicable. Consumers should be idempotent and use attempt/content/student identifiers; completion hooks may also originate in legacy integrations.

| Hook | Payload |
| --- | --- |
| `ohmylms_attempt_started` | `quiz_id`, `attempt_id`, `student_id`, `course_id` |
| `ohmylms_attempt_submitted` | above plus `total`, `status`, `reason` (`submit`, `timeout`, `exit`) |
| `ohmylms_attempt_graded` | same attempt identifiers and totals; manual review uses `reason=manual-review` |
| `ohmylms_answer_graded` | stored answer fields: `quiz_id`, `student_id`, `question_id`, `quiz_attempt_id`, serialized `given_answer`, `question_marks`, `achive_mark`, `minus_mark`, `is_correct`, plus attempt `status` |
| `ohmylms_lesson_completed` | `lesson_id`, `course_id`, `student_id` |
| `ohmylms_course_completed` | `course_id`, `student_id`, `order_id` |

Normal and timeout submissions use `OhMyLMSQuizSubmission`. It checks enrollment/edit permission, attempt ownership, quiz membership, required answers, deadlines and registered validators; it serializes concurrent submissions and writes answers and the attempt in one transaction. Pending manual review does not complete the quiz.

## Dependencies and services

Composer lock/autoload files are bundled. Action Scheduler and Dompdf remain available. Vendor license clients, update clients and telemetry libraries are removed. The legacy license helper is an offline compatibility facade exposing bundled availability, and tracking settings are disabled at runtime. External payment, meeting, AI and mail integrations still require the owner's service credentials. Original attribution and license texts are retained.

## Validation

Workspace scripts in `.ohmylms-work` use disposable WordPress/MySQL databases for fresh installation, repeated upgrades and existing-record preservation. `integration-test.php` exercises nine built-in question types plus an extension type, ownership failures, timer grading, three built-in quiz displays, layout precedence/fallback, shortcode/block activities, REST aliases, merged models and PDF output. `preservation-test.php` compares 253 pre-existing records across nine content/progress tables. `audit.py` checks PHP syntax, duplicate declarations and filename case. `tests/unit.php` covers registry and grading edge cases.

Browser acceptance and broader membership, assignment, cohort, certificate and Classes workflows must also be checked; class resolution alone is not evidence that these workflows pass. See the workspace verification notes for current results and outstanding work.

## Naming (ohmylms)

