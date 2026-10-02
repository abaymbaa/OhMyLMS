# OhMyLMS school and family setup

## Open the portal

Use **WordPress Admin → OhMyLMS → Students** for management. The shared **Students**, **Teachers**, **Parents**, **All accounts**, **Classes**, and **Schools** tabs preserve the existing student enrollment/progress list and bring school management into the same navigation. Teacher and parent directories support search and pagination and include both account roles and active school/family relationships. Account directories and edit links require the appropriate WordPress capabilities. School rosters, invitations, and academic years remain available under Schools. The former People & Schools menu is removed; its admin URL remains valid.

The family learning portal remains available from the shortcut beneath the existing student dashboard or at `/?ohmylms_portal=1`. Publishing a page is optional.

The same OhMyLMS plugin includes all school and family features. No Pro/free block split is introduced.

## Create a class without a school

An administrator can assign the **OhMyLMS Teacher** WordPress role to a teacher account without inviting it to a school. Active school teachers can also create independent classes. In the learning portal, open **My classes**, then **Create independent class**. Enter a class name and optionally a subject and grade; no school or academic year is needed. Administrators use **Students → Classes**. Independent classes are listed separately from school classes and can be archived by their creator or a platform administrator. Other teachers cannot list, inspect, or archive them. School roster and invitation workflows remain school-specific.

## Set up a school

1. As the WordPress administrator, create a school and choose its IANA timezone, for example `Asia/Ulaanbaatar`.
2. Open **Years** and create an academic year with start/end dates.
3. Open **Classes** and create classes for the year.
4. Use **Invitations** to invite a school administrator or teacher. Select the recipient email; optionally select a class for a teacher. The invitation link is shown once and expires after 48 hours. Email is sent only when the checkbox is selected.
5. The recipient signs in with the invited email and accepts the link. New teachers can first register publicly; the invitation grants their school permissions. Public teacher registration grants the teacher account role and independent-class creation, without adding school membership.
6. In **Roster**, create school-managed students, or invite existing student accounts rather than duplicating them. Existing-account student invitations can also place a student in a class.
7. For a new school-managed child, issue a **Student password setup / recovery** invitation. Share it privately with the child or authorized guardian. The student selects a password using that link, receives their generated username, then signs in. School staff cannot retrieve plaintext passwords.
8. Open a class and select school roster members to add students or co-teachers.

School administrators can manage only their own school. Teachers can access only their assigned classes. Neither role receives WordPress administrator or general content-editing permissions.

## Parents and students

- Public student registration requires email and a password of at least 12 characters. First/last names are optional. It does not create an enrollment or order.
- School-managed child accounts require a name and school student ID, but no personal email.
- Parents register with email/password or use configured Google login. They initially have no child access.
- School administrators send a **Parent / guardian** invitation naming the student and recipient email. The signed-in recipient must match that email to accept it.
- Parents open **My children** to view the linked child's distributed school work and completion. Links are school-specific; no unrelated school/home history is exposed. Revocation is immediate.
- Students open **My assignments** for distributed work. Links lead to the existing learning pages.

One person can have more than one responsibility, including teacher and parent. Class removal, school membership removal, and year rollover preserve the person's WordPress account and learning records.

## Assigning and grading work

Teachers open a class, choose a published course, and optionally select an activity within it. Assignments are distributed to the current class roster. Recipients must already have an active enrollment; assignment does not bypass content/payment access.

Choose whether earlier completion counts. If someone already finished the selected work, the portal asks for that explicit choice instead of creating work they cannot complete again. New students do not automatically receive earlier assignments; create a new distribution when needed.

The due date uses the school's timezone. Completion comes from existing LMS completion events. Written assignment submissions can be reviewed and graded in **Review submissions**; existing grading and progress services remain the source of truth. Teacher submission access requires both a current class relationship and an explicit distribution of that activity. File downloads perform the same permission checks.

## Rosters, reporting, and school years

- CSV headers: `name,external_student_id`. Preview before import. Up to 200 rows / 100 KB per batch. Existing school IDs are skipped; names do not merge accounts. Errors are shown per row. Imported students use the same private password-setup process.
- **Report** shows assigned/completed work by class and exports CSV. Names are escaped against spreadsheet formula injection.
- **Years** can archive an old year and copy its active class definitions to a new year. New classes start with empty rosters; promotion and enrollment are explicit staff actions. The operation cannot be repeated for an already archived source year.
- Schools, class membership, and guardian access use separate database relationships. Removing a roster member does not delete purchases or historical learning records.

## Gutenberg blocks

Eight school and account blocks appear under **OhMyLMS**. In the page editor, click **+**, search for the block name, insert it, and publish the page:

- OhMyLMS Student Registration
- OhMyLMS Teacher Registration
- OhMyLMS Parent Registration
- OhMyLMS Sign In
- OhMyLMS School Dashboard
- OhMyLMS Teacher Dashboard
- OhMyLMS Parent Dashboard
- OhMyLMS Student Assignments

Each registration block displays a dedicated form for its role, with email and password fields. Teacher registration is public. Registration does not create school/class memberships, child links, orders or enrollments. Existing email verification, duplicate-email checks, nonce checks, rate limits and spam protection remain active. Signed-in visitors see dashboard and sign-out links instead of a registration form.

The Sign In block uses WordPress's native login form, supports email or username, Remember Me and password recovery, and redirects successful sign-ins to the learning portal. Configured Google sign-in is also available on this block. Failed sign-ins use the standard WordPress login error screen.

Equivalent shortcodes use underscores, for example `[ohmylms_student_registration]`, `[ohmylms_teacher_registration]`, `[ohmylms_parent_registration]`, and `[ohmylms_sign_in]`. Account blocks show form previews in the editor; private student records are not loaded into those previews.

## Google sign-in

Reuse the existing OhMyLMS Google Sign-In settings and callback URL. The button appears only when the integration is enabled and configured. Existing email/password users sign in first, then choose **Connect Google to this account**. A matching email alone cannot claim an existing account. Returning Google users are identified by Google's stable subject ID.

Local tests cover identity linking, browser-bound OAuth state, and replay rejection. Live Google authorization still requires configured credentials and an allowed deployment origin/callback and must be exercised using a real Google test account.

## Development and rollback

Run from the plugin directory:

```sh
npm run check
```

`npm run build` now builds both the existing SDK and `build/sdk/schools.js`. The school module uses generated files directly in both source-asset modes; do not edit `build/` by hand.

PHP implementation is in `includes/Schools/`; React source is in `assets/src/features/schools/`; editor registration and CSS are in `assets/schools/`. REST routes are under `ohmylms/v1/school/`. The additive schema has its own `ohmylms_school_schema` version and uses the configured WordPress table prefix.

Isolated verification:

```sh
php tests/php/schools-integration.php
npm run test:browser -- schools.spec.cjs
```

Set `OHMYLMS_TEST_CREDENTIALS` to the existing disposable site's external credentials file and enable mysqli/mbstring for its PHP runtime. Tests refuse the production database and clean up their fixtures. Mail/remote OAuth calls are blocked by the test installation.

To disable the new module without deleting data, define `OHMYLMS_SCHOOLS_ENABLED` as `false` in WordPress configuration. Leave the added tables intact. Back up the database before deploying to another installation; rollback code and database only as a coordinated restore.

## Current boundaries

This release implements the school/family workflows, not an IXL clone. Independent teacher onboarding, school-funded content entitlements/billing, SIS/Google Classroom synchronization, adaptive scoring, parent messaging, and a district hierarchy remain outside this release. Roster lists page in groups of 50; invitation history and submission review show the latest 50 and 100 records respectively. Year definitions, guardian links, and school reports currently have bounded lists of 100/100/200. Expand these limits and load-test against the intended school sizes before large deployment.

The standalone portal loads its own styles and school application dependencies. On installations with JetFormBuilder, its form-journey footer recorder is excluded from this page because it contains no Jet forms. Normal WordPress pages and embedded OhMyLMS blocks retain the site's usual asset hooks.

Validation on 2026-09-30: `npm run check` passed (75 JavaScript tests and production build); 16 PHP unit checks and 15 membership permission checks passed; the disposable school integration suite passed; both isolated portal browser tests passed, including student creation and guardian invitation/revocation. A read-only mobile registration browser check also passed on `http://math.test/?ohmylms_portal=1`. Live Google authorization and a real-school pilot are not part of these automated checks.

Guardian sharing currently covers school-distributed work only. Retention/export/deletion policy and deployment-specific child-account requirements must be settled before a real-school rollout. No existing users are automatically attached to a school.
