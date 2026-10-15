# Continue the OhMyLMS learner experience

Last updated: October 15, 2026, Asia/Ulaanbaatar.

## Decisions agreed October 15, 2026 (implementation authorized)

The user approved building in this live plugin folder, using the PLAN section 12 defaults,
and including a Khan-style **teacher shell after the learner slices**. Defaults taken:

1. Landing: last visited destination; first visit goes to Classes if active class, else My learning.
2. Navigation: My learning, Classes, Browse subjects, Achievements, History, Membership;
   Settings lower. Skills live in course/unit context.
3. Following only pins; it never enrolls or purchases.
4. Labels: Collections (bundles). **Roadmaps are not learner-facing** (user decision, October 15, 2026): they are the shared-syllabus skill-mapping layer, hidden from Browse subjects and every learner list; Slice E is dropped.
5. Appearance: system/light/dark preference stored on the device. Legacy embedded views
   stay on a light surface until replaced, so the default is light.
6. Membership first slice: overview, plans, purchases, invoices, links to existing flows.
7. Profile first slice: display name, avatar, appearance, notifications, connections.

**Deviation from the earlier recommendation:** the learner app stays **server-rendered with
progressive enhancement**, not a new React entry. Reasons: the existing hub is server-rendered,
works without JavaScript, supports bookmarks, and a new React entry needs build manifests,
contracts and routing work that does not help the visual goal. Revisit only if a screen
needs client-side state. **Explicitly skipped by the user:** the learner app's **Tutor Me** and the teacher app's **Teacher Tools** menu. Do not build or stub them. Teacher scope is learner-first; MAPPING.md D1-D6 remain open.

## Previous instruction: planning first (superseded by the decisions above)

The user wants a comprehensive, resumable plan before further application changes.
The next Khan Academy-style rebuild is **not implemented**. Continue the planning
discussion first. Earlier authorization to build the initial hub is not evidence
that a newly proposed data migration has been approved.

This file is a shared checkpoint for the user, Codex, Claude Code, or another
coding assistant. It records local work; it does not dispatch work to another
assistant or schedule an automatic continuation.

## Read these files in order

1. `AGENTS.md`: repository development and validation requirements.
2. `docs/learner-experience/PLAN.md`: target experience, entity mapping, delivery
   slices, acceptance criteria, open decisions, and migration boundaries.
3. `docs/learner-experience/RESEARCH.md`: what was actually observed in the user's
   Khan Academy browser account, including the library-to-course-to-lesson flow.
4. `docs/learner-experience/MAPPING.md`: Khan vs OhMyLMS data model, gaps, rename rules.
5. `docs/STUDENT-HOME.md`: the initial hub that already exists, its limitations,
   compatibility behavior, and validation.

## Latest user direction

- Use Khan Academy's actual learner interface as the main reference.
- Replace the old dashboard/profile/course-list presentation; putting those old
  screens inside a new frame does not meet the intended design.
- Cover the learner hub, class interface, independent learning, library, skills,
  profile/settings, and a Membership menu entry.
- Reconsider how courses, roadmaps, and course bundles appear together.
- Preserve self-paced learning without requiring a class or teacher.
- Keep parent connections in the design. Teacher tools are explicitly excluded
  for now. A counselor authorization model is not defined or implemented.
- Produce the plan before writing the next application implementation.
- Keep small, explicit checkpoints so another assistant can resume safely.

## What is already implemented

The initial server-rendered hub is live on the local site:

- Learner page: `http://800.local/student-home/`.
- Layout editor: `http://800.local/wp-admin/admin.php?page=ohmylms-student-home`.
- Shortcode: `[ohmylms_student_hub]`.
- Main implementation: `includes/Student/Hub.php`.
- Views: `templates/student-hub/`.
- Authored assets: `assets/css/student-hub.css`, `assets/js/student-hub.js`.
- Integration checks: `tests/php/student-hub-integration.php`.

Its current sections are Home, My classes, My learning, My work, Progress, and
Account. It provisions one published page, redirects configured legacy account
entry points, saves administrator layout settings, and supports invitation
acceptance through the existing school service.

My classes displays the current learner's active school/class memberships,
assigned work, and existing teacher/guardian connections. My learning provides
independent course discovery. The user does not need to join a class to study.

**This is a functional first version, not the requested final visual design.**
It still renders legacy course, profile, catalog, and some achievement views.
Membership is currently an account subview, not its own primary menu item.

## Current repository state

All work is local and uncommitted. No branch, commit, push, or PR was created for
this learner-hub work. Read `git status` and the diff before editing; another
assistant may have added changes after this checkpoint.

Tracked files modified by the initial hub:

- `eslint.config.cjs`
- `includes/Assets/FrontendAssets.php`
- `includes/Shortcodes/Shortcodes.php`
- `includes/Utility/profile-functions.php`
- `package.json`
- `phpcs.xml.dist`

New application/documentation/test paths created by that work:

- `includes/Student/Hub.php`
- `templates/student-hub/`
- `assets/css/student-hub.css`
- `assets/js/student-hub.js`
- `docs/STUDENT-HOME.md`
- `tests/php/student-hub-integration.php`

This transition plan adds documentation only. No second-generation learner UI or
entity migration has been implemented during this planning phase.

## Last verified checks

- 50 disposable WordPress integration checks passed.
- Existing JavaScript suite: 414 passed, one skipped, zero failed.
- Production build succeeded, with two existing math-runtime size warnings.
- Source check passed: 1,603 JavaScript/JSX files; 236 contracts; 19 manifests.
- Targeted JavaScript ESLint, Prettier, and new CSS Stylelint passed.
- New production PHP: zero PHPCS errors, six direct-query/caching warnings.
- Test fixture PHP: zero PHPCS errors, 30 local-file/direct-query warnings.
- Full repository standards command still fails on existing unrelated PHP debt.
  Do not report the whole repository as standards-clean.
- Browser checked saved settings, card move controls, course tabs/discovery,
  invitation entry, full-width layout, and a 390px preview without overflow.

Tests used the disposable database `ohmylms_source_test`, never the user's live
learning records. Fixtures were cleaned. Provider credentials were not required.
The proof image is an ignored local artifact at `test-results/student-home.png`.

## Exact next step

Review PLAN sections 3–7 with the user: navigation, course/roadmap/bundle mapping,
the class/independent-learning distinction, and Membership. Resolve the small set
of open product decisions in section 12. Then update this checkpoint with the
agreed decisions. Do not start the shell rewrite while the user is asking to plan.

## Delivery ledger

| Slice | Status | Evidence / next action |
|---|---|---|
| Initial functional hub | Implemented; superseded as visual direction | Existing files and checks above |
| Live reference inspection | Completed for class, library, course overview, and article flow | RESEARCH.md |
| New experience plan | Draft ready for discussion | PLAN.md |
| Navigation/entity decisions | Proposed; awaiting discussion | PLAN sections 3–7, 12 |
| New visual shell | Implemented; browser-checked light, dark, 390px | Slice A notes below |
| Class screen redesign | Implemented; browser-checked with a removable fixture | Slice B notes below |
| Library redesign | Implemented (first version); browser-checked | Slice C notes below |
| Course/unit navigator | Implemented (first version); browser-checked, see notes | Slice D notes below |
| Roadmap presentation | **Dropped by user** | Roadmaps are hidden infrastructure |
| Bundle presentation | Not started | Slice F |
| My learning / following | Implemented; browser-checked with a removable fixture | Slice G notes below |
| History / achievements / skills | History and Achievements implemented; skills stay inside course view | Slice H notes below |
| Profile/settings replacement | Not started | Slice I |
| Membership primary section | Not started | Slice J |
| Compatibility and release checks | Initial hub only | Slice K |

## Checkpoint discipline

After each accepted decision or completed slice, update this file before another
large step. Record the changed files, checks actually run, outcomes, known failures,
and one precise next action. Never mark a proposed feature as implemented.

If work stops mid-slice, record incomplete code and any temporary test fixtures
explicitly. On resuming, inspect the current diff and rerun the smallest relevant
check instead of assuming that another assistant's edits match this document.

Do not record passwords, API keys, cookies, invitation tokens, class share codes,
student roster details, or private account identifiers in these handoff files.

## Slice A progress (October 15, 2026)

Changed (all uncommitted, live plugin folder): `templates/student-hub/workspace.php`
(left rail with icons, lower Settings/Customize/appearance/account row, top bar, mobile
drawer, Membership rail entry when commerce is on, legacy views wrapped in `oml-hub-legacy`),
`assets/css/student-hub.css` (Khan-style tokens, light/dark/system, hard-shadow button,
signed-out card), `assets/js/student-hub.js` (device-only appearance preference, rail
open/close, Escape), `includes/Student/Hub.php` (signed-out markup gets `oml-hub-signin`).
Section ids and `Hub::url()` are unchanged; no stored data touched.

Checks run: PHP syntax on workspace.php passes; ESLint and Prettier on student-hub.js pass;
Stylelint on student-hub.css passes. Signed-out page checked in the browser.

**Not done:** the 50-check integration script was NOT run (it needs the private
`OHMYLMS_TEST_CREDENTIALS`, unset in this shell). The signed-in shell, dark theme and a
390px view have not been looked at yet because 800.local needs the user to sign in.
Plus Jakarta Sans is named in the font stack but not loaded; it falls back to Noto Sans or
the system font. Skipped on purpose: Tutor Me and Teacher Tools.

**Exact next step:** user signs in on 800.local in the browser pane; then screenshot
`/student-home/` in light, dark and 390px, fix any layout issues, run the integration script
with the credentials, then start Slice C (library) on a `LearnerCatalog` read-model.

## Slice A verification and Slice C (October 15, 2026)

**Slice A verified** on 800.local while signed in: light, dark, and a 375px viewport
(drawer opens, no horizontal overflow). Fixed along the way: WordPress admin-bar offset on the
rail, dim greeting text in dark, light card tints in dark, and the signed-out card layout.

**Slice C built:** new section `library` ("Browse subjects", after My learning).
- `includes/Student/LearnerCatalog.php`: read-only adapter. Subjects are curriculum items
  that have published courses beneath them (`Placement::public_items`,
  `published_courses_by_item`); only published courses are returned; legacy category/tag
  taxonomies are not read. Search filters by course title and prunes empty groups.
- `templates/student-hub/library.php`: heading banner, search, two-column expandable subject
  tiles (native `<details>`, works without JavaScript), nested groups, empty states.
- `Hub.php`: `library` section, `hub_q` query var, settings version 3. `upgrade()` now adds
  `library` after `learn` for stored version 2 settings, and runs on `init` as well as
  `admin_init` for any visitor (it only rewrites this plugin's option).
- Data on this site is tiny: one subject with one course, so large catalogs are untested.

Checks: PHP syntax passes on all changed PHP; PHPCS on `includes/Student` and
`templates/student-hub` reports zero errors and the same six intentional warnings in
`Hub.php`; Stylelint, ESLint and Prettier pass. Browser: library, search hit and search miss.

**Not done / not verified:** the 50-check integration script (needs the private
`OHMYLMS_TEST_CREDENTIALS`, unset here) and the JS/build suite were not run. Its
section-registry assertions may need updating for the new `library` section. Subject tiles use
a letter, not the curriculum `icon` field. Courses link to the normal course permalink; the
course overview page (Slice D) does not exist yet. D1-D6 decisions in MAPPING.md still open;
D3 (which item types are Subjects) is currently "top-level items with courses".

**Exact next step:** run the integration script with credentials and fix any assertion on the
new section; then Slice D: course overview (hero, Course progress strip, unit accordions) fed
by a course-outline read-model (chapters via `ohmylms_chapter_relationship`, program items,
`student_skill_state` through a MasteryAdapter).

## Roadmap exclusion (October 15, 2026)

User: roadmaps are only a shared-syllabus mapping; skills done in one syllabus or its linked
course update other courses; they are not simple courses. `LearnerCatalog::subjects()` now
skips any course with non-empty `_ohmylms_roadmap_sources`. Checked in the browser: the only
course on 800.local was a roadmap course, so Browse subjects now shows its empty state
(a real course is needed to see a tile again). PHPCS clean on the file; PHP syntax passes.
Still to handle: My learning and `Hub::catalog_url()`/"Explore courses" still use the legacy
course list and may show roadmap courses; fix when those views are replaced (Slice G).

## Browse subjects: bundles and admin setting (October 15, 2026)

User: Browse subjects lists only courses and course bundles, and which curriculum levels
count as "subjects" must be adjustable in the admin dashboard.

- Setting lives in **OhMyLMS -> Student Home** (the hub's own editor, `templates/student-hub/editor.php`),
  panel "Browse subjects". Chosen over the Curriculum admin because the library is a hub
  section and the page already stores hub options. Stored in the existing `ohmylms_student_hub`
  option as `library_types` (curriculum item types; empty means every top-level item) and
  `library_bundles` (default on). No schema or curriculum data change.
- `LearnerCatalog::subjects( $search, $types )`: with types set, the outermost item of a chosen
  type becomes a tile and deeper levels become groups inside it. Courses linked only above a
  chosen level are not listed (stated in the admin help text). The `roadmap` type is not offered.
- `LearnerCatalog::bundles()`: published bundles with their published, non-roadmap courses.
  Viewing a bundle grants no access. Shown under "Course bundles" on the library page.
- Checked in the browser: panel renders, saving `subject` persisted and reloaded checked, then
  reverted to none. No courses or bundles exist on 800.local to see tiles, so the tile and
  bundle rendering is verified only by PHP syntax, PHPCS (zero errors, same six warnings in
  Hub.php) and the empty state, not with real bundle data. The `subjects()` type filtering
  has not been exercised against a real tree.
- Not run: the 50-check integration script (private credentials); its assertions about section
  lists and settings keys may need updating for `library`, `library_types`, `library_bundles`.

## Library verified with real data (October 15, 2026)

Created temporary test data on 800.local (two curriculum items, four courses incl. one draft, one
published bundle) through the plugin's REST API, verified, then deleted it all. Confirmed afterwards:
31 original curriculum items remain, test courses return 404, no bundles, library shows its empty
state, and `library_types` is back to empty.

Verified in the browser:
- Subject tile with a direct course plus a nested group; draft course hidden; counts correct.
- Bundle tile listing its published courses, shown under "Course bundles".
- Search: finds the course inside both the subject group and the bundle; a draft course title finds nothing.
- Type filter: with `topic` chosen, the tile became the topic with only its own course; a course linked
  only at the parent level dropped out (documented in the admin help text). Bundles unaffected.
- Admin panel save and reload persisted `library_types`.
Not verified: very large catalogs; the 50-check integration script (private credentials); subject icons.
Data note: roadmap/syllabus items on this site (ids 1, 6, 27) carry draft or roadmap courses, so they
do not appear; Digital SAT Mathematics (course 132) and IGCSE 0580 (course 153) will appear once published.
API note for future tests: courses use `name` (not `title`); bundle members are `{type, id}`;
the front end has no REST nonce, so run REST calls from a wp-admin page.

## Scope widened by the user (October 15, 2026)

User: do not only restyle the front end; looking "forced" is not good. The backend, the database,
course names and course structures may be changed where the Khan-style experience needs it. Treat
this as permission to build real structure, but still keep changes additive and reversible, keep
stored identifiers and public contracts working, document each one here, and test on the disposable
database or with removable test data. Standing requirement from the user: **Khan says "Unit" where
this LMS says "Chapter"; change it and adapt the whole LMS.**

### Terminology layer ("Chapter" becomes "Unit")

- `includes/Utility/Terminology.php`, registered in `Shortcodes.php` next to `Hub::init()`. A `gettext`,
  `gettext_with_context`, `ngettext` and `ngettext_with_context` filter for the `ohmylms` and `ohmylms-pro`
  text domains, plus an inline script after `wp-i18n` registering the same rule on `wp.hooks`
  (`i18n.gettext` family) so the React course editor and admin screens follow.
- Only displayed words change. Post type `ohmylms-chapter`, tables, REST routes (`/chapters`), URLs, CSS classes
  and hooks are untouched; nothing is migrated, and unchecking restores "chapter".
- Strings that already have a translation (for example es_ES "Capítulo") keep it. Edit those `.po` files
  if a shipped language should say Unit. No Mongolian locale ships with the plugin yet.
- Admin: **OhMyLMS -> Student Home -> Wording** (enable, singular word, plural word). Stored in option
  `ohmylms_terminology`, saved by the same capability and nonce check as the hub settings. Default on, "Unit"/"Units".
- Verified in the browser on 800.local: JS `__('Chapter','ohmylms')` returns "Unit", `_n` returns "Units", another
  text domain is untouched; the learner course page shows "1 unit" and "Expand all units"; the admin course editor
  shows "Add Unit", "Unit" and "Add unit description" with no remaining "chapter" text.
- Not covered: hard-coded English that is not wrapped in a translation function, the sample data inside
  `video-player-settings.js`, URL slugs, and the wording inside post content already saved by authors.
  Search again for stragglers when screens are rebuilt.

### Slice D: course overview

- `includes/Student/CourseOutline.php`: read-only course outline for the current learner. Draft, private,
  password-protected and roadmap courses are never described (404 style error). Units come from the enrollment's
  program version when managed, otherwise the current program or the original chapter structure. Skills and levels
  come from `CompletionPolicy::status` and `Mastery`. Not-enrolled visitors see titles only and every link goes to the
  course page. One primary action: Start/Continue learning, View course or Review course.
- `templates/student-hub/course.php`: breadcrumb, hero (title, unit and skill counts, description, action), collapsible
  Course progress card with percent chip, "x of N skills to Proficient" (or activities complete), a progress bar and a
  strip of one coloured dot per activity per unit, then unit accordions with an Expand all control.
- Route: `Hub::course_url()` -> `hub_section=library&hub_course=<id>`; library tiles and bundles now link to it.
- Verified on 800.local with a removable test course (one unit, three lessons, one quiz): not-enrolled view
  (View course, "Enroll to track your progress", dots, accordion, Expand/Collapse all) and enrolled view (Start learning,
  "0 of 4 activities complete", unit count 0/4). All test data was then deleted (course, chapters, lessons, quiz,
  curriculum item, enrollment); 31 original curriculum items remain.
- NOT verified: completed or mastered states (dots turn green/amber/purple only when the evidence pipeline reports
  them), a managed skill-based program, multiple units (the REST API would not attach extra chapters to a course;
  the accordion code handles it), practice rows, mobile width of this page, very large courses (maybe one
  completion query per lesson for non-program enrollments).
- API notes: creating a chapter with `course_id` did not link it to the course; the course's auto-created default chapter
  did link. Use `PUT /courses/{id}` and the default chapter, or the admin editor, for multi-unit fixtures.

### Next backend steps worth doing (each additive, needs a decision from the user)

1. Lesson groups inside units (MAPPING D1): add an optional group label to program items.
2. Khan mastery names (D2): display mapping for Attempted/Familiar/Proficient/Mastered.
3. Rename Chapter strings that are hard-coded, and translate for the languages you ship.
4. Review `/chapters` REST naming only if an external consumer needs `/units`; add an alias, never remove the old route.

## Khan mastery names (October 15, 2026) - MAPPING D2 resolved

View-only mapping, as requested. `includes/Skills/MasteryDisplay.php`:
- SmartScore bands onto four names: below the second band (70) is **Attempted**, 70-79 **Familiar**, 80-99
  (Proficient and Challenge Zone) **Proficient**, 100 **Mastered**; no scored answers is **Not started**. Thresholds
  come from the administrator's tuned bands (`Score::config()`), not hard-coded numbers (70/80 are only the fallback).
- Without a SmartScore (the feature is off by default, or the skill has no score row), it falls back to the stored
  evidence level: not-assessed to Not started, developing to Attempted, proficient to Proficient, mastered to Mastered.
  The stored model has no "familiar", so that name only appears when SmartScore is on.
- `MasteryDisplay::for_student( $student_id, $term_ids )`: one batch read, uses `Score::summary()` when enabled.
  Caveat: `Score::summary()` may recompute and store a missing score the first time (existing behavior), so
  "view only" means nothing here changes mastery, completion or awards; the first read of an unscored skill can
  populate that score row.
- Wired into `CourseOutline`: practice rows now carry display `level`, `label` and `score`; dots use classes
  `is-attempted`, `is-familiar`, `is-proficient`, `is-mastered`, neutral for not started; the "x of N skills to
  Proficient" count and percent use the display level. Visitors and unenrolled learners see no levels.
- Completion, certificates, recommendations and `CompletionPolicy` still use the stored level and targets. So the
  overview can say "Proficient" while a program target is judged on the stored level; they usually agree, and can
  differ for skills whose SmartScore is high but whose evidence rules have not marked them proficient.

Verified:
- `php tests/php/mastery-display-unit.php` passes (69.99/70/79.99/80/99.99/100 boundaries, tuned bands, missing bands,
  fallback levels, ordering). `php tests/php/terminology-unit.php` passes (rename rules, custom words, limits, disabled,
  translated strings kept, other domains untouched); it found and I fixed a missing-`mbstring` crash risk.
- Real database, through WordPress from the command line (read-only except three temporary rows, deleted; 0 left):
  stored levels gave Attempted, Proficient and Mastered; an unknown skill gave Not started; SQL ran with no DB error.
- Browser: course overview still renders (units, rows, dots, no PHP notices). Test course, chapter, lessons and
  curriculum item were created and then deleted; 31 original curriculum items remain.

Not verified: practice rows and dots coloured by mastery in the browser (a skill practice program cannot be
published without at least three approved questions per skill, so a visual fixture needs a question bank), the
SmartScore branch against real score rows (SmartScore is switched off on 800.local; covered by unit tests only),
the 50-check integration script, and the full JS build/test suite.

Command-line probe tip for next time: PHP at `C:/php8.5.4/php.exe` needs
`-d extension_dir=C:/php8.5.4/ext -d extension=mysqli -d extension=mbstring`, and Local's MySQL is on
`127.0.0.1:10006` (define `DB_HOST` before `wp-load.php`). Keep such probes read-only or delete what they add.

**Exact next step:** pick one of: lesson groups inside units (MAPPING D1), a published-question fixture to see
mastery colours, or Slice G (My learning, hiding roadmap courses from the legacy course list).

## Mastery display verified in the browser (October 15, 2026)

Fixture on 800.local: bank, six approved questions (two real skills, three questions and three families each),
a course with one unit, one lesson and two skill-practice items, published program, admin enrolled, and temporary
`student_skill_state` rows (developing and proficient). Seen in the browser: hero "Continue learning" (goes to the
learning path), "2 skills", progress card "1 of 2 skills to Proficient" with a 50% chip and a filled blue bar, dots
grey (lesson), amber (Attempted), green (Proficient), rows labelled Attempted and Proficient with matching icon
colours (fixed during this check: row icons now follow the level, not only "complete"). Baseline before progress:
"0 of 2 skills to Proficient", both skills "Not started".
Whole fixture then removed: REST deletes (course, unit, lesson, curriculum item, six questions, unenroll), and
exact-id database cleanup of what the plugin leaves behind (program, 2 outcomes, enrollment binding, 6
question-skill links, the bank row, temporary skill-state rows). Re-audit shows 0 fixture rows; 31 curriculum
items remain; SmartScore stays off. One unrelated `learning_enrollments` row with program_id 0 pre-exists and was
not touched. Learned: deleting a course via REST leaves its learning program, outcomes and binding rows; deleting a
question leaves `question_skills` rows; there is no REST delete for question banks.

NOT verified: **Familiar** (and SmartScore-driven Mastered). SmartScore is off and its tables
(`wp_ohmylms_skill_scores`, `XpSchema`) are not installed on this site, so `Score::enabled()` is false. Showing it
means installing/enabling the XP and SmartScore feature, which I did not do as a side effect. The score branch is
covered by `tests/php/mastery-display-unit.php` only.

## New requirements from the user (October 15, 2026): question bank scale and reach

User plans to upload Digital SAT, IELTS and Cambridge Mathematics past papers into the question bank. Every
question will be connected to skills, measured, and must drive the learner progress bar. The bank must be flexible
for any exam, topic or subject, support more question types, and support translations.

What the code already gives (checked, not assumed):
- Skill link to progress is real: `question_skills` / `qb_version_skills` -> `skill_evidence` -> `student_skill_state` and
  SmartScore -> `CourseOutline` -> dots and "x of N skills to Proficient". Quiz-level evidence (`quiz_skills`) also feeds it.
- Question types are an extension registry (`Extensions\Registry`, `QuestionTypes`): built in are single-choice, multiple-choice,
  true-false, short-text, long-text, fill-in-the-blank, dropdown-blanks, matching, numerical and structured (plus passage).
  New types can be added without core changes; see `docs/EXTENSIONS.md`.
- Banks (`qb_banks`: owner, course, visibility, grants), versions (immutable snapshots, approval), `family_id`, `difficulty`,
  `source`, `secure` flag per question; `docs/QUIZ-IMPORT-EXPORT.md` describes the existing quiz import/export.

Gaps and risks to design before the big upload (each is a candidate backend task; none started):
1. **Pool rules:** practice only draws approved, non-`secure`, auto-gradable questions with a primary skill. Written, manual
   or teacher-marked parts (IELTS writing/speaking, Cambridge working) are excluded from practice and cannot move
   SmartScore. Decide the exam-mode vs practice split and mark real past papers `secure` only if they must stay out of practice.
2. **Families:** a skill needs >=3 approved questions and >=2 families to publish a target. Past-paper variants (same
   stem, new numbers) must share a `family_id`; unrelated questions must not, or mastery looks narrower than it is.
3. **Translations:** none for questions. Skill translations exist but only for `en` and `mn` (hard-coded in `Skills\Translations`).
   Needs a design: a question translation links to its source (uuid), shares skill map, family and difficulty, has its own
   language, and learners get their language with fallback; evidence must count toward the same skill either way.
4. **Bulk import:** only `CourseImporter`, `ScormImporter` and the quiz import exist. A past-paper import (CSV/JSON/QTI-like) with
   dry-run, per-row errors, source/paper/year/question-number metadata, skill codes, family and difficulty, idempotent
   re-runs (no duplicates), and approval in bulk is the main missing tool. `DraftWriter::save_many` is the transactional writer to build on.
5. **Taxonomy beyond skills:** exam, paper, year, section, topic and language are not first-class filters. Prefer additive
   attributes on `qb_questions` (or a small meta table) over new post types; keep skills as the only mastery link.
6. **Scale:** `Selector::pool` joins four tables per skill with no per-skill cache; thousands of questions and a
   few hundred skills need an index review and bounded queries before launch. Test with a generated load set.
7. **Rights:** past papers are copyrighted by their publishers; confirm the licence before upload (recorded as a note only).
8. **Progress semantics:** a past-paper quiz attempt feeds evidence for each question's skills, so one long paper can move many
   skills at once. Decide whether exam attempts count the same as practice (`independent`/`first_try` rules in `ScoreModel`).

Suggested order for this track: (a) bulk import with dry-run and metadata, (b) question translation model, (c) exam/paper/year
attributes and filters, (d) pool and index review with a load fixture, (e) new question types as the papers require
(IELTS: matching headings, gap-fill, map labelling, speaking and writing capture with manual marking).

## Question bulk import (October 15, 2026)

Built and verified. User guide: `docs/QUESTION-BULK-IMPORT.md`.

- `includes/QuestionBank/BulkImport.php`: parse JSON/CSV, normalise (aliases), identity key (exam, paper, year, section, number,
  language), per-type validation (single/multiple choice, true/false, numerical, fill-in-the-blank, plus any registered type through
  `settings` and `options_raw`), skill resolution by code, UUID or `#id` (ambiguous codes rejected), `DraftWriter::prepare_many` as the
  authority before any write, `DraftWriter::save_many` for writing, bulk approval through the normal approve route, idempotency by import
  key plus content fingerprint.
- `includes/Rest/V1/QuestionImportController.php`: `POST /ohmylms/v1/question-bank/import` (dry run is the default; 401 when not
  logged in; needs `edit_posts`; 200 rows per request).
- `includes/QuestionBank/ImportPage.php` and `templates/admin/import-questions.php`: **OhMyLMS -> Import questions**; check, then import;
  all batches are checked before the first write; up to 1000 rows or 2 MB per submission.
- Row metadata kept per question: `_ohmylms_import_key`, `_ohmylms_import_hash`, `_ohmylms_import_paper`; bank `source`, `family_id`,
  `difficulty` use existing attributes. No schema change.
- Images: `image` accepts a media library ID or URL and sets the question image. Question-level images only; PDFs are not attached yet.

Tests: `php tests/php/bulk-import-unit.php` passes (parsing JSON/CSV, BOM, multi-line cells, aliases, keys, all validation rules, payload
shape, fingerprint). PHPCS on the new files: zero errors and zero warnings.
Live on 800.local (removable fixtures, all deleted afterwards): dry run (4 create, 2 errors: unknown skill, duplicate row); a real import with
errors and no "skip invalid" wrote nothing (checked in the database); real import with approve created 4 approved questions with correct
family, difficulty, source and skill mapping (primary and supporting); identical re-run gave 4 unchanged and 0 writes; an edited row
updated the same question (no duplicate) with a new approved version; "updates off" reported a warning instead; CSV with a multi-line stem,
`B|D` multiple answers, marks and a bank worked; the admin page showed check results, blocked an import with errors, and imported with
"skip invalid" and approve; unauthenticated calls got 401.
Cleanup: REST deletes, then exact-id removal of leftovers the plugin does not remove itself (question-skill links, the bank row).

Found along the way (existing behaviour, not caused by the import): `QuestionStore::update` sets an edited question's post status to draft
(confirmed with a stack trace and a direct `DraftWriter::save`, even when the payload says publish). Practice only needs an approved version,
so it keeps working, but the question list shows such questions as drafts. The import restores publish. The normal editor probably does the
same; worth a separate look.

NOT verified: image column with a real attachment, `fill-in-the-blank` or numerical answers actually being graded in a learner attempt,
very large uploads and timing (nothing beyond a handful of rows was run), question types beyond the five tested, the import under a
non-administrator author account, and the JS build/test suite.

### Exam content type: design for the user's decision (not started)

User wants: upload an exam paper (PDF and/or screenshots), save every question into the bank, and save the PDF/images as an **Exam** for a
course or as a stand-alone exam; Quiz = checking what was learned, Exam = mock readiness. New content type next to Quiz.

What already exists and should be reused: the assessment engine's exam preset on a quiz (`AssessmentSettings`: kind `exam`, timed
deadline with grace, sections with slot marks and optional page breaks, availability window, feedback released after close, per-student
accommodations, exam-only questions via the bank `secure` flag, versioned revisions, autosave, evidence into skills). See
`docs/ASSESSMENT-ENGINE.md` (A08 and the exam notes).
Option A (recommended): an Exam is a quiz-engine assessment with kind `exam` that the product presents as its own content type: its own
label, icon, list, "Add exam" in the course builder, and a **paper documents** panel (attached PDFs/images shown as the source paper,
downloadable or viewable in the exam page). Questions come from the bank in paper order; import rows with the same exam/paper/year
(and section) can create or refresh the exam automatically. Reuses attempts, grading, evidence, reports.
Option B: a new post type `ohmylms-exam` with its own tables. Cleaner in naming but duplicates attempts, grading, evidence and reports.
Gaps to design for A: how it appears as a course content type (the course builder source is `assets/src/features/courses/`; compiled
admin bundles must not be edited by hand), program item type (`lesson|quiz|assignment|practice` today), learner navigation (units list,
"Exam" icon/label in the overview), progress semantics (exam attempts feed skill evidence for every question's skills), attachments
(media IDs on the exam, validated as PDF/image, and which learners may see the source paper), stand-alone exams (not in any course), and
whether the exam uses `secure` questions that never appear in practice.

## MCP tools for AI classification and review (October 15, 2026)

Built and verified. Guide: `docs/MCP.md`, section "Question bank: classify and import with AI".

- Tools (ability IDs `ohmylms/search-skill-catalogue`, `import-questions`, `list-questions-for-review`, `review-questions`):
  `search_skill_catalogue` (code, UUID or words; objective; parent path; child count; paged), `import_questions` (dry run default; max 100 rows),
  `list_questions_for_review`, `review_questions` (approve or dismiss, max 50).
- New code: `includes/MCP/QuestionBankTools.php` (definitions), `includes/Rest/V1/QuestionBankToolsController.php` (internal routes
  `/mcp-question-bank/...`, registered in `Rest/Api.php`; merged in `MCP/Server::tools()`), `includes/QuestionBank/SkillCatalogue.php`,
  `includes/QuestionBank/ReviewQueue.php` (flag meta `_ohmylms_review_status` and `_ohmylms_review_data`), a `review` option in `BulkImport`
  and `confidence` and `notes` row fields, and a **Waiting for review** list with Approve and Keep as draft on **OhMyLMS -> Import questions**.
- Rules enforced on the server: MCP imports are always flagged and never approved (no `approve` argument; the ability schema rejects it);
  a changed question returns to review while its earlier approved version stays live; approval goes through the normal approve route.
- Verified live on 800.local with removable fixtures (all deleted, leftovers removed by exact id): skill search by code, words, UUID, parent and
  empty result with correct paths and child counts (DSAT.D.1.5 sits under Digital SAT Mathematics, 109 children); dry run, default dry run,
  real import (flagged pending, `approved_version` 0, confidence and notes stored); an `approve` argument ignored on the route and rejected
  by the ability layer; list shows skills with codes; approve gives an approved version; dismiss leaves it unapproved; repeat and unknown ids
  are skipped; bad decision rejected; identical re-import unchanged; edit after approval re-flags and keeps the old approved version; the
  admin review list and its Approve button. Through the Abilities API as admin: all four tools registered, MCP add-on enabled, same results.
- Tests: `bulk-import-unit.php` extended (confidence range, aliases, review fields kept out of the payload and fingerprint); PHPCS clean on the
  new files. NOT run: a real MCP client over HTTP with a bearer token (no token was created; that is the user's step), the JS build/test suite,
  the 50-check integration script, large batches, non-administrator accounts (the tools need `manage_options`).

Open points:
- The skill catalogue returns the skill tree as stored; AI quality depends on the skill names and objectives. 45 of the 47 root skills have no
  children, and the parents have no code, so a model may need objectives or descriptions before a big upload.
- Flagging cannot tell a reviewer's edit in the question editor from an AI edit; editing a flagged question in the editor leaves the flag
  until someone approves or dismisses it.
- A script-based batch classifier (any model provider) is not written; it should call `search_skill_catalogue` and `import_questions` with
  `dry_run` first, in batches of at most 100 rows.

## Real paper study and skill-search improvement (October 15, 2026)

The owner supplied a real Cambridge IGCSE 0580 Paper 4 question paper and mark scheme (20 and 10 pages) as material "for improvement".
Full analysis and design: `docs/EXAM-PAPERS-AND-FIGURES.md` (the paper's text is not copied into the repo).

Built: `SkillCatalogue::search` is now ranked (any word, name/code weighted over objective/description, three-letter stemming, filler
words ignored, exact code or UUID first). Verified live: empty search lists all 476 skills, parent browsing (109 children), exact code first, no
match returns 0, junk or SQL-looking input is harmless, paging works; all 26 questions of the real paper found a sensible Cambridge skill among the top results.
PHPCS clean on the file. The earlier unit tests still pass.

Key findings from the paper:
- The plugin already has a `structured` multi-part question type with part marks, numeric/text/hand-marked parts, teacher-only rubric and **per-part skills**.
  The bulk import cannot create it yet: next task is a `parts` field on import rows (mark-scheme partial marks go to the part rubric).
- Exam needs: paper header fields, attached documents (question paper, mark scheme released after results, formula sheet), a paper mode with
  teacher or self marking for hand-marked parts, and (decision needed) a hidden single-exam wrapper course for stand-alone exams because all quiz access,
  attempts (`course_id`) and reports are course-based.
- Figures: store a declarative, validated figure spec (2D SVG, 3D Three.js with SVG fallback), never AI-written HTML or script; a person checks the rebuilt figure
  against the original. Three.js is not in the project; load it lazily like MathLive.

Not built this round: `parts` import, figure renderer, Exam entity (only discovery and design). Nothing was imported into the live site from the paper; the classification
test used only read-only skill searches. The earlier "Exam content type" slice is still not started in code.

## Khan navigation, History, Achievements, Classes (October 15, 2026)

The owner dropped the Exam work and asked to keep replicating Khan Academy. Done this round (Tutor Me and Teacher Tools remain skipped by decision):

- **Rail order** now: Home, My classes, My learning, Browse subjects, Achievements, History, Membership; Settings below. New sections `achievements` and `history`
  replace `work` and `progress` in navigation (settings version 4; the upgrade swaps them in saved navigation and runs for any visitor). `work` and `progress` stay valid
  section ids for old bookmarks and can be re-enabled in the admin editor; fresh installs exclude them (`Hub::LEGACY_SECTIONS`).
- **History** (`includes/Student/HistoryFeed.php`, `templates/student-hub/history.php`): one dated list merging completed lessons, quiz and exam attempts (with score percent
  and Exam or Quiz label) and finished skill practice (with answers right out of answers given), newest first, filters for period (week, month, all) and type, totals (activities,
  practice answers, active days), 20 per page. One UNION query paged in SQL, titles hydrated only for the page; practice times shifted from UTC to site time so sources sort together.
  Verified on 800.local with the admin's 6 real quiz attempts (type and 7-day filters, unknown type falls back to all, no learner returns nothing, no DB errors); mobile 375px has no overflow.
  Not shown because the data does not exist: minutes spent and skill-level change per activity (Khan has both).
- **Achievements** (`templates/student-hub/achievements.php`): Khan-style banner; **Mastery learning** tiles (Attempted, Familiar, Proficient, Mastered) from the new
  `MasteryDisplay::counts()`; XP tiles only when XP is enabled; the existing streak card only when streaks are enabled; badges when badges are enabled; completed courses with the
  existing certificate download button (its data attributes were verified against the download script). Verified empty and populated (temporary skill rows, removed).
- **Classes** (`templates/student-hub/classes.php`): Khan layout. Class selector on top, "You have no assignments to complete / Explore the library or check another class / Go to library" hero when empty,
  otherwise an assignment list (overdue badge, completed struck through, Open assignment) with a right column: Mastery learning legend (counts) and the class card with a link to
  Teachers and guardians. The old sub-navigation is gone for classes; Join a class and Connections are linked from the page, and Connections has a back link. Verified on 800.local with a
  throwaway school, class and two assignments (created and then deleted by exact id; all school tables are empty again), including the join form, connections view and mobile.
- Files: `includes/Student/HistoryFeed.php`, `includes/Student/Hub.php`, `includes/Skills/MasteryDisplay.php` (`counts`), templates `history.php`, `achievements.php`, `classes.php`,
  `workspace.php`, `assets/css/student-hub.css`. Stylelint and PHPCS clean on all touched files (Hub.php keeps its six intentional direct-query warnings). Unit tests still pass.

NOT verified or not done: the 50-check integration script (needs the private test credentials; its section-list assertions may need updating for the new default navigation); the
JS build and test suite; History with lessons or practice rows (the admin has only quiz attempts); SmartScore-driven Familiar tiles (SmartScore is off on this site); XP, streak and
badge tiles (those features are disabled on 800.local, so only their absence was seen); the "Mission" and "Gem challenge" cards (not built, no equivalent data); My learning (next).

Navigation upgrade checked live (`Hub::upgrade`, run against the real setting and then restored identically): saved version 3 navigation becomes
home, learn, library, achievements, history, account (My work and Progress removed, Achievements and History added); version 2 gains classes as before; fresh defaults
exclude the legacy sections. `tests/php/student-hub-integration.php` was updated to cover every section (including the legacy ones through the registry) and to assert this upgrade;
syntax checked only, the script itself still needs the private test credentials to run.

**Exact next steps (pick in this order unless told otherwise):** (1) My learning in the Khan style, using only real follow/enrol data and hiding roadmap courses
from the legacy course list (`Hub::catalog_url`, `ShortcodeCourseList`); (2) Settings (account, appearance, notifications, connections) replacing the legacy profile rendering,
with the Khan "disabled until changed" save buttons; (3) Membership as a primary section; (4) the teacher shell; (5) activity player context (exit control, unit navigation, return to the course overview).

## My learning and roadmap hiding (October 16, 2026)

- **My learning** (`includes/Student/MyLearning.php`, `templates/student-hub/my-learning.php`): one Khan-style page replacing My courses, Learning paths and Explore courses
  (those old links open it; `Hub::views('learn')` is now empty). A "Continue learning" card for the most recent course in progress, a grid of the learner's enrolled courses with
  a real progress bar and a Start or Continue button (completed courses show a full bar and Review course), and "Collections you follow" listing each followed bundle's courses.
  Progress comes from the same `CourseOutline` the course page uses, so both screens always agree. Following a collection still only lists it (no access, no enrolment).
  Courses in progress come first, then completed; 12 per page. Per-course outline work means a learner with very many enrolments pays one outline per card shown (12 per page).
- **Roadmap courses are hidden at the source.** `LearnerCatalog::hide_roadmaps` (a `pre_get_posts` guard registered from `Shortcodes.php`) removes roadmap courses from every
  front-end course list: the old `[ohmylms_course_list]` shortcode, the course archive and AJAX course filters. It leaves wp-admin, REST (the editors), single course pages and
  queries for one explicit course alone. The probe caught a recursion bug in my first version (the roadmap lookup was filtered by its own guard and found nothing, which would have
  shown roadmaps again); fixed with a flag, and proved: with the guard 0 courses, without it the roadmap course 280 is present, an explicit load of 280 still works, the
  shortcode output does not contain it. My learning and Browse subjects never list roadmap courses either.
- `Hub::catalog_url()` now prefers Browse subjects over the old catalog page when the library section is enabled.
- Verified on 800.local with a removable fixture: two published courses (one in progress, one completed), the admin enrolled in both and in the roadmap course, a published followed
  collection. The page showed only the two real courses (roadmap hidden even though enrolled), in-progress first, correct buttons and labels, the followed collection with its courses, and no
  overflow at 375px. Empty state checked before. Then everything was removed: collection and follow, both courses with their units and lessons, all three enrolments and the three
  learning-binding rows that viewing a course creates; the admin has no enrolments again; roadmap course 280 untouched.
- Lint: PHPCS and Stylelint clean on touched files. The integration script was updated (its "My Courses" assertion now expects the new page) but still needs the private credentials to run.

NOT verified: legacy `profile/my-courses.php` is no longer used by the hub (still used outside it); My learning with 13+ courses (paging) or a managed skill-based program card; the old
course archive page rendered in a browser (checked through queries and the shortcode, not visually); learners who are enrolled only in unpublished courses (they are simply not listed).

## Settings (October 16, 2026) - BUILT, NOT YET TESTED (hand-off point)

Replaces the legacy Profile / Edit profile / Preferences / Notifications screens inside the hub with one Khan-style Settings area. Every change made:

- **New `includes/Student/SettingsSave.php`** - safe per-card save handler. `admin_post_ohmylms_hub_settings` (registered by `SettingsSave::init()` in `includes/Shortcodes/Shortcodes.php`, next to `LearnerCatalog::init()`).
  Cards: `account` (first/last/display name), `about` (bio, interests, country, phone, whatsapp, address), `email` (needs current password), `password` (current + new + confirm, min 8,
  keeps the session signed in via `wp_set_auth_cookie`), `notifications` (four on/off prefs). Each card changes ONLY its own fields (the legacy `FormHandler::save_account_details` reset every
  unposted field, which is why it was not reused). Per-card nonce `ohmylms_hub_settings_<card>`, signed-in learner only, always acts on the current user. Pure logic is in
  `SettingsSave::apply($user_id,$card,$input)` (returns `saved` + `errors`) so it can be tested from CLI; `handle()` is only nonce/redirect glue. Result is shown once via a 60-second
  transient (`flash()`).
- **New `templates/student-hub/settings.php`** - views: Account (Basics, About you, Email, Password cards), Appearance (device-only Match device / Light / Dark using the existing
  `[data-hub-theme-set]` buttons; applies at once, stored in localStorage, no server save), Notifications (four checkboxes), Connections (read-only list of the learner's classes with teacher and
  guardian display names via `Hub::supporters`, plus Join a class). Each form carries `data-hub-dirty`; its Save button has `data-hub-save` and starts `disabled`.
- **`includes/Student/Hub.php`** - `views('account')` is now account, appearance, notifications, classes (labelled Connections) + the unchanged commerce views (orders/invoice/billing/membership).
  Legacy endpoint map: profile, profile-edit, edit-profile -> account; settings -> appearance; notification -> notifications. `Hub::account()` no longer maps profile/profile-edit/settings/notifications
  (only commerce views still use the legacy renderers). Unknown views fall back to the first view (account).
- **`templates/student-hub/workspace.php`** - Settings rail link now points at `account/account`; section `account` renders `settings.php` for the four new views and the legacy wrapper for commerce views.
- **`assets/js/student-hub.js`** - dirty-state: snapshots non-hidden field values on load and enables Save only when they differ (re-checked on input, change and `pageshow`).
- **`assets/css/student-hub.css`** - `.oml-hub-settings`, `-settings-card`, `-field`, `-check`, `-actions`, `-save` (+`:disabled`), `-theme-large`, `-notice` (inserted before the editor-grid rules).

Honesty notes:
- The notification preferences are STORED on the learner but a grep found nothing outside Student/FormHandler/templates that reads them, so they may not drive any email. The UI does not claim they do.
- "Save buttons disabled until you change something" applies to every server-saved card. Appearance has no Save button because it applies instantly and is saved on the device only.

Verified: `php -l` on all touched PHP; PHPCS has no errors on `SettingsSave.php`, `settings.php`, `workspace.php` (Hub.php shows only its existing direct-DB warnings; `Shortcodes.php` has many errors that predate this slice - my change there is one added line).

NOT verified / TO DO next (for whoever continues, e.g. Codex):
1. Node build tools were not found at `%LOCALAPPDATA%\OhMyLMS-build-tools\node-v26.0.0-win-x64` this session, so Stylelint, ESLint and Prettier have NOT been run on `student-hub.css` / `student-hub.js`. Run them (watch for no-descending-specificity and CRLF vs LF).
2. Test `SettingsSave::apply()` by CLI with a throwaway user (create, test, delete): partial save keeps untouched profile fields; wrong current password rejected for email and password cards; duplicate email rejected;
   display name that is an email rejected; notifications off/on round-trip. Never test on the admin's real account or change its password.
3. Look at the page in the browser (desktop + 375px, light + dark): all four views, Save disabled on load and enabled after an edit, flash message after saving, Appearance buttons, Join a class link.
4. Confirm the admin_post form works for a logged-in learner and `wp_safe_redirect` lands on `Hub::url('account', <tab>)`; confirm no leftover `ohmylms_hub_settings_flash_*` transients matter.
5. Update `tests/php/student-hub-integration.php` if it asserts the old Profile/Preferences labels (not checked).
6. Remaining roadmap: Membership as a primary section (slice J), activity player context (exit control, return to course overview), Khan-style teacher shell (Teacher Tools excluded), Mission/Gem cards (no data).

## Hand-off summary (October 16, 2026)

Work happens in the LIVE plugin folder `C:\Users\abaym\Local Sites\xyz\app\public\wp-content\plugins\OhMyLMS` (site http://800.local), not the git worktree. All work is uncommitted on `main`.
Decisions to keep: no Tutor Me, no Teacher Tools, no Exam content type, roadmaps never shown to learners, "Chapter" reads "Unit" via the Terminology layer, AI-imported questions stay unapproved until a person approves.
Slices done (details above in this file): A shell, C library, D course overview, mastery names, bulk import + MCP tools, History/Achievements/Classes, My learning + roadmap hiding, Settings (built, untested).

### Settings verification (October 16, 2026, later)

- CLI probe with a throwaway user (deleted afterwards): 16/16 checks passed. About saves; Basics saves and keeps bio/phone/interests; email-as-display-name rejected; email change rejected with wrong
  password and accepted with the right one; password change rejected for wrong current, too short, mismatch and accepted otherwise; notifications round-trip on/off and keep the bio; unknown card and no user rejected.
  (The "email already registered" branch was not exercised.)
- Browser on 800.local: all four views render; subnav shows Account, Appearance, Notifications, Connections plus commerce tabs; all Save buttons disabled on load, enabled after an edit and disabled again
  when the edit is reverted; no horizontal overflow at 375px. A real notifications submit saved, redirected back, showed "Your changes were saved." and persisted; the admin's setting was then restored to its original (all off).
- Still NOT done: Stylelint/ESLint/Prettier on `student-hub.css` / `student-hub.js` (Node tools not found); real browser submit of the email/password cards (deliberately not run on the admin account); Connections with a real class; light-theme visual check of Settings.

### Settings lint and light theme (October 16, 2026, final)

- Node tools are the plugin's local `node_modules` with system Node v25.2.1 (`npx --no-install eslint|stylelint|prettier`); the pinned v26 path from earlier notes does not exist on this machine.
- ESLint, Stylelint and Prettier now pass on `assets/js/student-hub.js` and `assets/css/student-hub.css`. Fixes: Prettier reformat of the dirty-state filter; the notice paragraphs got their own class
  `oml-hub-notice-line` (was `.oml-hub-notice p`, a no-descending-specificity error) in both CSS and `templates/student-hub/settings.php`. PHPCS still clean on `settings.php`.
- Light theme checked in the browser: Settings and Appearance render correctly. Remaining unverified: Connections with a real class, email/password cards submitted through the browser.

## Activity player context (October 16, 2026)

- **New `includes/Student/PlayerContext.php`** (registered in `Shortcodes::init()` after `SettingsSave::init()`): on `ohmylms_before_lesson_main_content` (priority 1) signed-in learners see a slim bar above lessons,
  quizzes and assignments: "<- Course overview" plus the course title. The link goes to the Khan-style overview (`Hub::course_url`) when Browse subjects is enabled, otherwise to the course page.
  It only links; it changes no progress, access or content. Nothing is shown to signed-out users or when no course is found.
- **New `assets/css/player-context.css`**, enqueued on `wp_enqueue_scripts` only for signed-in learners on lesson/quiz/assignment pages (light bar, wraps on small screens). Stylelint and PHPCS clean.
- Verified: render probe from CLI on the existing quiz 297 (course 119) returned the bar with the overview link `.../student-home/?hub_section=library&hub_course=119`; logged-out returned nothing; the hook is registered.
- NOT verified: the bar in a real browser page. Course 119 is a draft and visiting its quiz hits the known draft-course redirect/malformed-permalink quirk, so I did not see it rendered. The bar is light-only (does not follow the hub dark theme),
  and it is not shown on session (Zoom/Meet) pages. Next time a published course with a lesson exists, load a lesson and check the bar, its position under the theme header and the 375px layout.

## Course page now opens the Khan-style overview (October 16, 2026)

- The user opened `http://800.local/?post_type=ohmylms-course&p=119/course-quizzes/all-question-types-test/` and it showed the OLD single-course page. (That URL is not a supported or deprecated route: the site uses plain permalinks and the
  draft course's quiz link is built by appending a pretty path to `?p=119`; WordPress ignores the extra path and serves the course.)
- `Hub::redirect_course_page()` (template_redirect, priority 6): signed-in users who open a front-end single course page are redirected to `Hub::course_url()` (the Khan-style overview). Skipped for roadmap courses,
  when Browse subjects is off, with `?preview=...` or `?legacy=1`, and for signed-out visitors (public course page stays). `is_preview()` cannot be used: it is true for editors viewing drafts.
- The old course page is still where enrolment happens, so every outline link to it (`View course`, unenrolled activity rows, `Review course`) now goes through `CourseOutline::course_page()` which adds `?legacy=1`; otherwise those links would redirect back to the overview.
- Verified: probe redirected course 119 to the overview; browser followed it and showed the Khan-style overview; the "View course" link is `...&p=119&legacy=1` and returns 200 (no loop). PHPCS clean on both files.
- NOT verified: enrolling from the legacy page and returning; a lesson URL of a published course (lessons still use the classic lesson template with only the new exit bar); the lesson/quiz player itself is NOT yet Khan-styled.

## Final hand-off for Codex (October 16, 2026)

State: everything below is committed on `main` in the live plugin folder `C:\Users\abaym\Local Sites\xyz\app\public\wp-content\plugins\OhMyLMS` (site http://800.local). Work there, not in the `.codex\worktrees` checkout.

Built this session, newest first (details in the sections above):
1. Course pages -> Khan-style overview redirect (`Hub::redirect_course_page`, `?legacy=1` escape, `CourseOutline::course_page`).
2. Activity player exit bar (`Student/PlayerContext.php`, `assets/css/player-context.css`).
3. Settings: Account, Appearance, Notifications, Connections (`Student/SettingsSave.php`, `templates/student-hub/settings.php`); verified by CLI probe + browser + lint.
4. My learning + roadmap hiding; History, Achievements, Classes; question bulk import + MCP tools; mastery names; course overview; library; shell.

How to lint (this machine): `npx --no-install eslint|stylelint|prettier ...` from the plugin folder; PHPCS via `C:/php8.5.4/php.exe tools/coding-standards/vendor/squizlabs/php_codesniffer/bin/phpcs --standard=phpcs.xml.dist <files>`.
CLI probes need `-d extension_dir=C:/php8.5.4/ext -d extension=mysqli -d extension=mbstring -d extension=openssl`, `define('DB_HOST','127.0.0.1:10006')` and `$_SERVER['HTTP_HOST']='800.local'` before `wp-load.php`.
Rules: never log in as other users or change the admin password; fixtures must be removable and removed; AI-imported questions stay unapproved; no Tutor Me, Teacher Tools or Exam type.

Next candidates, in suggested order:
1. Khan-style lesson/quiz/assignment PLAYER (single-lesson templates still classic; only the exit bar was added; the bar is light-only and absent on session pages). Verify with a published fixture course (drafts hit the plain-permalink quirk).
2. Membership as a primary section (rail link exists; renders legacy purchase screens).
3. Khan-style teacher shell (role switch, no Teacher Tools).
4. Not verified anywhere: Connections with a real class, email/password cards via the browser, enrol-from-legacy-page round trip, the 50-check integration script (needs private credentials), the JS build/test suite.
