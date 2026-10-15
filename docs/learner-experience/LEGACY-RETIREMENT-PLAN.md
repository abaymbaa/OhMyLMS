# Legacy retirement: inventory and proposal

Inventory taken October 16, 2026 against http://800.local and the plugin source. Nothing
below has been changed by this document. Rules from the user: retire old pages and
shortcodes only as replacements are verified; preserve custom content and working
redirects.

## What exists

### Pages on 800.local

| Page | State | Owner | Notes |
| --- | --- | --- | --- |
| 318 Student Home | published | OhMyLMS | the hub; also configured as the student dashboard/profile/courses page |
| 115, 117, 118 (old dashboard/profile/courses) | trashed | OhMyLMS | retired earlier; ledger option `ohmylms_hub_retired_pages`; redirects work |
| 395 Checkout | published | OhMyLMS | active dependency; keep |
| 123 All Membership | published | OhMyLMS | `ohmylms_membership_page_id`; keep |
| 313, 314 "TEST quiz player/review shortcode" | trashed | test fixtures | safe to delete permanently (needs your OK) |
| 6, 7, 8, 9 (draft), 10, 36 (`cr-*`, My Dashboard, My Courses, Legacy profile) | published/draft | a different, older plugin | content uses `creator_lms_*` tags that nothing registers, so they print raw text; 36 duplicates 123 |
| 2 Sample Page, 3 Privacy Policy | WordPress defaults | site | untouched |

No navigation menus exist, so no menu entry depends on any page.

### Shortcodes registered by the plugin

| Tag | Status | Consumers found |
| --- | --- | --- |
| `ohmylms_dashboard`, `ohmylms_profile`, `ohmylms_my_courses`, `ohmylms_my_profile` | adapters render a link to the hub (`LegacyPages::link`) | `Install.php` and `SettingsController` still provision pages with them when the hub is off; `FrontendAssets`, `Dashboard`, `CommonHook` use the conditional checks; legacy renderer classes are the rollback path |
| `ohmylms_checkout`, `_course_list`, `_membership_plan`, `_offer_button`, `_buy_now` | active | commerce and catalog; keep |
| `ohmylms_student_hub`, `_quiz`, `_quiz_review`, `_question`, `_skills`, `_practice`, `_learning`, `_bundles`, `_subject_skills`, `_activity` | active | keep |
| School portal tags (`student_registration`, `teacher_registration`, `parent_registration`, `sign_in`, `school_dashboard`, `teacher_dashboard`, `parent_dashboard`, `student_assignments`) and blocks | active | see portal below |

### The school portal (`/?ohmylms_portal=1&view=...`)

| View | Replacement | Still used by |
| --- | --- | --- |
| `teacher-dashboard` | teacher workspace | redirects already (signed-in eligible users, not invitation or file flows) |
| `parent-dashboard` | parent workspace (P1/P2) | not redirected yet |
| `student-assignments` | learner Classes | not redirected yet |
| `school-dashboard` (administration) | none in the hub | admin links (`PeopleDirectory.jsx`), View-as preview |
| sign-in, student/teacher/parent registration | hub sign-in chooser, parent sign-up | `Controller` login URL, school invitation links, registration blocks |

School invitation emails use `Views::portal_url()` (`Service.php`), so the portal route
must keep working for links already sent.

## Proposal

### Retire now (low risk, reversible)

1. **Redirect `parent-dashboard` to the parent workspace and `student-assignments` to
   the learner Classes view**, with the same guards as the teacher redirect (GET only,
   signed in and eligible, never for invitation, file or admin preview flows). Add probe
   and live checks. Nothing is deleted; the old views stay as fallback for ineligible users.
2. **Permanently delete trashed test pages 313 and 314** (fixtures, no content worth
   keeping). Needs your OK because deletion is permanent.
3. **Update `Install.php`/`SettingsController` provisioning** so a hub-enabled site never
   recreates dashboard/profile/courses pages (the ledger already prevents it for the three
   retired IDs; make the REST settings path respect it too).

### Retire after migrating a consumer

4. **Move school invitation links to the hub** (join view plus sign-in chooser) while the
   portal URL keeps working for emails already sent. Then the registration views and
   blocks can redirect to the hub chooser.
5. **Give school administration a hub or admin home** and repoint `PeopleDirectory.jsx`
   and View-as, then the portal route can be retired with a permanent redirect.
6. **Drop the legacy renderers** (`ShortCodeDashboard`, `ShortCodeProfile`,
   `ShortCodeMyCourses`, `ShortCodeMyProfile`) only when the hub-disabled rollback is no
   longer needed. Keep the shortcode tags themselves as link adapters indefinitely: they
   are cheap and protect embedded copies.

### Needs your decision (not this plugin's)

7. The `cr-*` / `creator_lms_*` pages (6, 7, 8, 9, 10, 36) belong to an older plugin, show
   raw tags, and 36 duplicates 123. Trashing them is safe in practice but they are
   custom site content, so I will not touch them without your instruction.

### Keep

Checkout, membership, course list, offer/buy shortcodes, quiz and practice shortcodes, the
admin `ohmylms-schools` redirect, and the retirement ledger with its redirects.

## Verification each step needs

Probe for the redirect/guard, live browser check as the relevant role (signed in by you),
confirmation that invitation, file and preview routes are untouched, ledger/rollback note
in `CONTINUE-LEARNER-HUB.md`.

## Status of the retire-now steps (October 16, 2026)

1. **Done.** `LegacyPages::portal_target()` and `redirect_portal()` send eligible
   signed-in users from `?ohmylms_portal=1&view=parent-dashboard` to the parent workspace
   and from `view=student-assignments` to the learner Classes view (only when they
   actually have a class). Invitation, school-file and `school=` links, signed-out
   visitors, View-as sessions and non-GET requests are never redirected. Probe
   `test-results/legacy-redirect-probe.php`: 12 checks passed. Over HTTP on 800.local the
   portal views still return 200 for signed-out visitors, and the earlier retired page URLs
   still redirect (302) to the hub. A signed-in parent session redirect was tested by
   probe, not in the browser.
2. **Done.** Trashed test pages 313 and 314 were checked (page type, trash status, test
   title, no menu or child references) and permanently deleted. The ledger (115, 117,
   118) is intact. Trashed page 312 ("TEST quiz player block") is another test fixture
   and was left because it was not named.
3. **No code change needed.** Both `Install::create_pages()` and the REST
   `restore_pages` apply the `ohmylms_default_pages` filter, and `LegacyPages` already
   removes retired definitions from it. A probe confirms only the three retired keys are
   dropped. Calling the REST restore itself was avoided because it would also recreate
   other missing default pages on the live site.

## Step 5 findings: the school portal is not a legacy page (October 16, 2026)

Inspection of `assets/src/features/schools/index.jsx` (about 2,300 lines) and
`Schools/Views.php` shows the portal's `school-dashboard` is the full school
administration product, not a retired learner page. It covers schools, academic years,
classes, staff and roster management, roster import, invitations for every role
(including activation), grading, skill reports and managed students. The same app also
runs inside wp-admin (`admin-management`, `Views.php:99`) and the Account Hub's
People/Classes/Schools tabs. Rebuilding that in the hub would be a large new product, so
the earlier idea of giving administration a hub home is **withdrawn**.

Revised direction:

1. **Keep the portal app as "School administration"** for school admins and platform
   admins (and keep the wp-admin host). Do not retire its route; `PeopleDirectory.jsx` and
   View-as depend on it.
2. **Retire only the learner-facing portal surfaces**: `parent-dashboard` and
   `student-assignments` (done), the teacher dashboard (done), and then sign-in and
   registration.
3. **Registration is the open policy question.** The hub chooser only creates parent
   accounts. The portal also offers student and teacher self-registration through the same
   `Controller::signup()`. Before redirecting those views and blocks, decide whether
   student and teacher self-registration should exist. If yes, add them to the hub chooser
   (the handler already accepts the role); if no, disable them first (a school-level
   policy switch) and then retire the blocks.
4. After 3, point `loginUrl`/`logoutUrl` in the portal config at the hub and keep a
   redirect for the old registration URLs.

Needs from you: whether student and teacher self-registration should remain.
