# Private PDF import jobs

This is the storage and queue milestone. It accepts a source PDF and validates its stored
integrity. It does not parse PDF structure, send documents to an AI provider, create questions,
approve bank content, or publish exams. No import screen is included yet.

## Storage configuration

Create a directory outside every web-server document root and public alias, writable only by
the PHP service account. Set `OHMYLMS_IMPORT_PRIVATE_DIR` in `wp-config.php` to its absolute path.
The directory must already exist; the plugin fails closed if it is missing, unwritable, or
resolves inside WordPress, `wp-content` or the current server document root. The administrator
must also keep it outside other served aliases, which PHP cannot discover. Back up private
sources together with WordPress job records. No public uploads or Media Library copies are made.

Files use generated UUID names and restrictive permissions. Client paths and document IDs are
never accepted for upload. A source is limited to the smaller of 10 MiB and WordPress's upload
limit. Extension, MIME, PHP upload status, size and PDF header are checked. This is not a PDF
parser or malware scan: deeper PDF validation belongs to the bounded extraction stage.

## Authoring REST API

All endpoints require `edit_posts` and `upload_files`; existing jobs are visible only to their
owner, including when another administrator requests them. WordPress REST authentication and
cookie nonce verification remain in effect. Request IDs are job IDs, not source-document IDs.

| Request | Behavior |
|---|---|
| `POST /wp-json/ohmylms/v1/exam-imports` | Multipart field `file`; store one source and queue validation. Returns 201 with job ID. |
| `GET /wp-json/ohmylms/v1/exam-imports?page=1` | Current owner's jobs, newest first, 20 per page. |
| `GET /wp-json/ohmylms/v1/exam-imports/{id}` | Safe status, attempts, error code, update timestamp and source name/size. |
| `POST /wp-json/ohmylms/v1/exam-imports/{id}` | Retry failed validation or recover an interrupted queued job, within three attempts. |
| `DELETE /wp-json/ohmylms/v1/exam-imports/{id}` | Delete job, private source and pending scheduler actions. |

Job records use a nonpublic `ohmylms-import` persistence type. It is separate from the future
Exam content type and is absent from WordPress's generic REST API, search, rewrite and admin UI.
Sources have no download endpoint in this milestone. Status never contains filesystem paths,
document handles, content hashes, provider responses or answer data.

Action Scheduler must be initialized before an upload is accepted. Hook
`ohmylms_validate_exam_import` in group `ohmylms-exam-import` runs one bounded validation:
check the owner's current capabilities, private source availability, byte count and SHA-256.
The state changes from `queued` to `ready_for_extraction` or `failed`. Duplicate deliveries of
completed stages do nothing. Database advisory locks serialize validation, retry and deletion.
If a runner is interrupted or cannot obtain the lock, an owner can requeue the persistent job;
there is no automatic unbounded retry loop. Extraction has not been connected to this hook.

## Runtime verification (October 18, 2026)

- `tests/php/exam-import-integration.php`: 22 checks on both the owner's installed Local LMS and
  disposable WordPress. Dry run, repeated import, review-only AI imports, explicit approval,
  changed draft versions, frozen delivery/grading, private rubric, teacher marking and skill evidence.
- Existing assessment phases `math versioning bank evidence`: 190 checks on disposable WordPress.
- `tests/php/exam-import-http.php`: 17 checks of multipart upload and real job persistence/scheduler dispatch on
  disposable WordPress. Tests ownership, listing, path rejection, idempotence, integrity failures,
  bounded retry and source cleanup. Its synthetic header fixture verifies storage, not PDF extraction.

Both new rehearsals roll back fixture database writes. The Local runner refuses nontransactional
tables and persistent object caches, blocks mail/network and removes fixture shutdown writers.
It permits only the explicit `--local` checkout in a Local WordPress environment; other runs
require `OHMYLMS_TEST_CREDENTIALS` and the disposable `ohmylms_source_test` database.

Example CLI for this Local installation (check Local's current MySQL port):

```powershell
php -d extension_dir=C:/php8.5.4/ext -d extension=mysqli -d extension=mbstring -d mysqli.default_port=10006 tests/php/exam-import-integration.php --local
```

For HTTP lifecycle checks, set `OHMYLMS_TEST_CREDENTIALS`, start PHP with mysqli/mbstring using
`php -S 127.0.0.1:8791 tests/php/exam-import-http.php`, then send a synthetic PDF with
`curl.exe -F file=@fixture.pdf http://127.0.0.1:8791/`. Stop the test server afterwards.
The router refuses ordinary PHP web-server execution and any database except the disposable one.

Other checks: bulk-import unit checks, 16 registry/grading checks and 15 membership permission
checks pass. JavaScript has 451 passing tests and one skipped test. Formatting and source contracts
pass. Production build succeeds with the existing two math-runtime size warnings; 215 generated
artifacts match across two builds. Unrelated generated output is excluded from this PHP milestone.
Changed PHP services and both new rehearsals pass syntax and focused WordPress standards.

`npm run check` fails at repository-wide PHP standards: 7,575 errors and 2,722 warnings in existing
code. Separate full JavaScript standards report 295 errors and 35 warnings; CSS reports 75 errors.
These findings are not suppressed. Browser, accessibility and load verification remain release gates;
neither these service rehearsals nor a successful build establishes those results.
