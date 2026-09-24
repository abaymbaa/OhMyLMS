# Quiz report live integration — xyz.local, 2026-09-24

The actual WordPress site at `http://xyz.local` was tested with its existing signed-in
administrator browser session. No new administrator credentials were created or saved.
The source build was temporarily enabled with `OMLMS_SOURCE_ASSETS`; the browser's
script inventory confirmed both the built extension SDK and built admin application.

## Site configuration

Local site ID: `PFRRu4Kvx`. MySQL port: `10005`. Site root is the `xyz/app/public`
directory containing this plugin. The database contained only legacy `wp_crlms_*`
tables, while the current PHP code queries `wp_omlms_*`. Twenty-one missing current
tables were created from `OMLMS\Install`'s checked-in schemas. No existing table was
altered and no legacy records were migrated. Those new tables remain initialized.

## Live checks

- Created one draft course/quiz, a disposable subscriber, nine question types and
  twelve attempts. Fixture IDs and ownership markers were stored in the ignored
  `test-results/quiz-reports-live-fixture.json` file.
- Report rendered ten rows on page 1 and two on page 2. Search from page 2 correctly
  returned the matching first attempt after the pagination fix.
- Grading displayed all nine question types and four manual mark inputs.
- Correct choice, true/false, reorder and matching results displayed correctly after
  normalizing numeric/string REST option IDs. Pending state matched the database.
- Set four manual marks to 8 through the browser and clicked **Upgrade Grade**.
  The real HTTP/PHP save changed the first attempt from 50 to 82, marked it completed,
  and displayed Pass. Automatic reload and a second explicit reload retained all marks.
- An independent PHP REST/database check verified marks `[8,8,8,8,10,10,10,10,10]`,
  score 82 and completed status. A second attempt retained score 50 and pending status.
- Guest requests to the list, detail and grade-write routes returned 401; subscriber
  requests returned 403. These permission checks dispatched the registered real PHP
  REST routes, without HTTP cookie authentication.
- Fixture cleanup removes owned posts, options, relationships, enrollment/progress,
  attempts, answers, student, and related achievement/notification rows, then checks
  that the posts, student and attempts are absent.

## Fixes discovered through integration

1. Reset report pagination on search changes.
2. Include the actual attempt status in the PHP report payload.
3. Normalize REST option/answer ID types for consistent result badges and selection.

The browser also logged shared vendor warnings about duplicate Yjs imports and
WordPress store registration. They did not prevent these workflows and remain outside
this feature's fixes. This test does not cover real email delivery, every permission
role, every wrong/empty answer case, or comprehensive mobile layouts.

## Repeat

Use a signed-in administrator browser on `xyz.local` and temporarily enable the source
build. Run the CLI-only helper from the plugin root with the Local MySQL port:

```powershell
php -d extension_dir=C:/php8.5.4/ext -d extension=mysqli -d extension=mbstring -d mysqli.default_port=10005 tools/quiz-reports-live-fixture.php inspect
php -d extension_dir=C:/php8.5.4/ext -d extension=mysqli -d extension=mbstring -d mysqli.default_port=10005 tools/quiz-reports-live-fixture.php create
```

Use the returned quiz ID at `#/quiz-report/<quiz-id>`. Change all four manual marks
in the first attempt to 8 and save. Then run:

```powershell
php -d extension_dir=C:/php8.5.4/ext -d extension=mysqli -d extension=mbstring -d mysqli.default_port=10005 tools/quiz-reports-live-fixture.php verify 82
php -d extension_dir=C:/php8.5.4/ext -d extension=mysqli -d extension=mbstring -d mysqli.default_port=10005 tools/quiz-reports-live-fixture.php cleanup
```

Always clean up, including after failure, and restore the prior source-asset setting.
The helper refuses other site names/URLs and never resets existing account passwords.
The `schema` action creates only absent tables; it is unnecessary after this setup.
