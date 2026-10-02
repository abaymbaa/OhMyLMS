# Question bank, versioned assessments and skill evidence

Status: implemented on branch `assessment-engine` (2026-10-02) against the
"OhMyLMS implementation plan — repository-based revision" (v2.0). Not yet released
to a live site; the classroom pilot is still to be run. This document describes what
exists, how it fits together, how to roll it out and back, and what is deliberately
out of scope.

The engine extends the existing quiz/question post types, React editors, question
type registry, submission/review entry points and gradebook. There is no second
quiz engine. Every response-producing surface — quizzes, exams, skill practice and
inline lesson checks — shares one chain:

**question version → grading contract → grade event → evidence outbox → skill evidence → skill state → recommendations**

Grades and skill levels stay separate: gradebook overrides are never skill evidence,
and practice or inline checks never touch course completion.

## Ticket map

| Ticket | Delivered | Main code |
|---|---|---|
| A01 | Isolated test site restored (`tools/create-test-site.py` renamed to ohmylms identifiers); pre-existing rename bug fixed (two completion hooks shared a name and crashed quiz completion) | `tools/`, `includes/Extensions/Bootstrap.php` |
| A02 | Object-level authorization for every question/quiz route and nested write; foreign option IDs rejected; reports scoped to their own quiz | `QuestionBank/AccessPolicy.php`, `QuestionBank/DraftWriter.php`, `Rest/V1/QuestionController.php`, `Rest/V1/QuizController.php` |
| A03 | Atomic nested saves with per-child errors; stale-save conflict (409); editor save-generation guard keeps edits made during a save; delete split into remove-from-quiz / archive / delete-unused | `DraftWriter.php`, `QuestionBank/Usage.php`, `features/quizzes/useQuizEditor.js`, `model.mjs` |
| A04 | Question UUIDs, immutable content-hashed versions, resumable migration with inventory | `QuestionBank/VersionPublisher.php`, `Assessment/Migration.php`, `Assessment/Schema.php` |
| A05 | Quiz revisions and slots; per-attempt frozen items (seeded order, opaque option tokens); snapshot-aware graders; versioned reports | `Assessment/RevisionPublisher.php`, `AttemptItems.php`, `Grader.php`, `AttemptReport.php`, `Quiz/Submission.php`, `Quiz/Review.php`, quiz templates |
| A06 | Bank search/filter, approval, archive/restore, duplicate (to edit shared questions), banks and grants, quiz references, version pins; React bank page and quiz-editor picker | `Rest/V1/QuestionBankController.php`, `QuestionBank/Banks.php`, `features/question-bank/` |
| A07 | Skill taxonomy (UUIDs, codes, acyclic prerequisites, lesson/course links); part-level skill maps frozen per version | `Skills/Taxonomy.php`, `QuestionBank/SkillMap.php`, `Rest/V1/SkillController.php`, `SkillsPage.jsx` |
| A08 | Autosave/resume, UTC deadlines with grace and a finalizer for closed browsers, decimal scoring migration, grade-event history, exam preset (sections, slot marks, availability, feedback release, extra time) | `Responses.php`, `Deadlines.php`, `Scoring.php`, `AssessmentSettings.php`, `Rest/V1/AttemptController.php`, `assets/js/quiz-autosave.js`, `features/assessment/` |
| A09 | Evidence outbox processor, transparent mastery rules, rebuild, learner dashboard and teacher skill report | `Skills/Evidence.php`, `Skills/Mastery.php`, `Skills/Recommendations.php`, `Rest/V1/SkillReportController.php`, `PerformancePage.jsx` |
| A10 | Adaptive skill practice and inline lesson checks on shared versions/grading | `Practice/Selector.php`, `Practice/Sessions.php`, `Practice/Inline.php`, `assets/js/practice.js`, `assets/js/inline-check.js` |
| A11 | Guest credentials, local history and a one-time, replay-safe claim | `Practice/Guests.php`, `Rest/V1/PracticeController.php` |
| A12 | Numerical type (tolerance, fractions, invalid input), structured multi-part questions with per-part evidence, limited random pools, migration rehearsal tool, non-recording author preview | `NumericAnswer.php`, `Structured.php`, `Pools.php`, `tools/assessment-rehearsal.php`, `Rest/V1/PreviewController.php` |

## Data model

All new tables are additive sidecars (`Assessment\Schema`, version option
`ohmylms_assessment_schema`). Existing attempt IDs and answer rows stay the
compatibility anchor; the gradebook keeps reading `ohmylms_quiz_attempts_answers`,
whose `question_marks` are frozen per attempt.

| Table | Purpose |
|---|---|
| `qb_banks`, `qb_grants` | Bank ownership and use < edit < approve grants |
| `qb_questions` | UUID and indexed bank attributes per question post (bank, family, difficulty, source, secure, current/approved version) |
| `qb_question_versions` | Immutable content: title, body, settings, options with correctness, media references, extension data, part weights, schema/grader version, content hash, migration-snapshot flag |
| `qb_version_skills` | Frozen part-level skill mapping (primary/supporting) |
| `quiz_revisions`, `quiz_revision_slots` | Frozen settings, slot marks, sections, pinned/approved versions, pool rules |
| `attempt_context`, `attempt_items` | Revision, scoring policy, UTC deadline, grace, extra time, seed; issued versions, option order, display, per-item result |
| `response_drafts`, `response_events` | Server-received autosaves (newest sequence wins) and their history |
| `grade_events` | Every grade and regrade per item/part, with reviewer, reason and supersession |
| `evidence_outbox` | One row per grade event, written in the grading transaction |
| `skill_evidence`, `student_skill_state` | Reconstructible contributions and cached levels |
| `practice_sessions`, `practice_items` | Skill practice and inline checks |
| `guest_sessions` | Hashed guest credentials and their claim |

Attempt score columns are `decimal(12,4)` after the decimal migration. Attempts keep the
scoring policy they started with: `legacy-int` (whole points, as before) or `decimal`.

## Key rules

- **Versions.** Every successful save captures a version; unchanged content reuses the
  latest one (content hash, including the skill map). Migration-time versions are labelled
  as snapshots, not reconstructions of the past.
- **Which version a quiz uses.** A pinned version; otherwise the current version when the
  quiz owner may edit the question; otherwise (shared, use-only) the approved version.
  Evaluated for the quiz owner, never for the learner.
- **Delivery.** Selection, question order and option order are fixed at attempt start from a
  stored seed. Option values are per-attempt HMAC tokens (matching definitions use a
  separate token kind), so markup never reveals correctness, pairings or order. Text-answer
  option text, `is_correct`, rubrics, tolerances and answer settings are never output.
- **Deadlines.** UTC deadline = start + time limit + extra time. Answers within the grace
  period count; after it, only autosaved, server-received answers are graded. A cron job
  (every five minutes) and the next start finalize abandoned attempts.
- **Question types** must declare `'snapshot' => true` (grade only the object passed in);
  publishing a quiz that contains a type without it fails with `quiz_type_unversioned`.
  Option-referencing types declare `'answers' => 'options'`; types may name learner-visible
  settings in `'public_settings'` and validate authoring with `'validate_settings'`.
- **Evidence.** Only the primary skill of each part receives attainment credit; supporting
  skills inform recommendations. Assisted (hinted) answers and repeats are recorded but do
  not count toward levels. A regrade supersedes the old contribution exactly once, even
  when the attempt total does not change.
- **Mastery levels** (option `ohmylms_mastery_rules`): Not assessed → Developing →
  Proficient (≥3 independent first-try correct from ≥2 families, ≥80% recent accuracy) →
  Mastered (≥5 from ≥3 families, ≥85%, plus a correct answer ≥24 h after first reaching
  proficiency). Review due is a separate flag after 14 days without evidence. No probability
  score is shown.
- **Practice** uses approved, non-secure, non-archived, automatically gradable versions; it
  adapts between easy/standard/challenge bands, avoids repeating questions and families,
  and says so when the pool is exhausted.
- **Inline checks** (`[ohmylms_question uuid="…"]` or the `question-check` activity) render
  the approved version with a signed, per-render token and never affect completion.
- **Guests** answer on public lesson pages with a pseudonymous credential (stored hashed);
  results stay server-side and are attached only by an authenticated, one-time claim.

## REST API (ohmylms/v1)

| Route | Who | Purpose |
|---|---|---|
| `question-bank` (GET), `question-bank/{id}` | authors | Search/filter; detail with versions, skill map, usage |
| `question-bank/{id}/approve|archive|restore|duplicate` | per policy | Lifecycle; duplicate with `quiz_id` swaps the reference |
| `question-bank/versions/{version}` | users of the question | Frozen version |
| `question-banks`, `question-banks/{id}`, `…/grants` | owner/admin | Banks and sharing |
| `quiz/{id}/questions` (POST), `quiz/{id}/questions/{q}` (DELETE), `…/pin` | quiz editors | Place by reference, remove from quiz, pin a version |
| `quiz/{id}/revisions` (GET/POST) | quiz editors | History; publish |
| `quiz/{id}/assessment-settings`, `quiz/{id}/pools` | quiz editors | Exam settings; random pools |
| `quiz/{id}/preview`, `…/preview/grade` | quiz editors | Non-recording preview |
| `attempts/{id}`, `attempts/{id}/responses` | the attempt's learner | Resume; autosave |
| `skills`, `skills/{id}`, `skills/{id}/lessons`, `question/{id}/skills` | authors | Catalogue and mappings |
| `practice/sessions…`, `practice/inline`, `practice/guest`, `practice/claim`, `me/skills` | learners/guests | Practice, inline checks, claims, own progress |
| `reports/skills?course_id|class_id`, `reports/skills/students/{id}` | course editors, class teachers, guardians (with `school_id`) | Skill reports |
| `assessment/migration` | administrators | Inventory and migration |

Existing question/quiz routes are unchanged in shape; `quiz/{id}` updates now also return
`saved_ids`, and questions include `modified`, `uuid`, `version`, `readonly`.

## Release switches

All default on; define in `wp-config.php` to turn off:

- `OHMYLMS_VERSIONED_ENGINE` — new launches use revisions and frozen items. Off = new
  attempts start on the legacy engine; already-started versioned attempts keep their
  reader/writer and reports.
- `OHMYLMS_PRACTICE_ENABLED` — skill practice, inline checks, guests.
- `OHMYLMS_QUESTION_BANK_UI` — bank, skills and performance admin pages.

The admin pages and editor panels are SDK extensions and need `OHMYLMS_SOURCE_ASSETS`.

## Rollout

1. Back up the database. On a staging copy run
   `php tools/assessment-rehearsal.php /path/to/wordpress` (inventory and checksums),
   then `--run`. It migrates and verifies that question links, option IDs and content,
   attempt totals/statuses, gradebook totals and overrides are unchanged; exit code 0 means
   unchanged. It refuses production unless `--i-have-a-backup` is given.
2. Deploy; the schema installs on `init` and the question backfill runs in WP-Cron batches
   (`GET/POST /assessment/migration` shows and drives it). Active legacy attempts finish on
   the legacy engine.
3. Approve bank questions that should be shared or practised; map skills; publish quizzes.

**Rollback:** set `OHMYLMS_VERSIONED_ENGINE` false to stop new versioned launches while
existing ones finish. Never restore an old database over new submissions; the new tables
can stay in place with the code switched off.

## Verification

```sh
OHMYLMS_TEST_CREDENTIALS=/path/test-credentials.json php tests/php/assessment-integration.php authoring versioning bank deadlines evidence math
php tests/assessment-unit.php
node --test tests/js/assessment.test.mjs tests/js/question-bank.test.mjs tests/js/quizzes.test.mjs tests/js/quiz-reports.test.mjs
```

Latest run: 266 integration checks, 49 unit checks, all existing PHP suites passing
(extensions 60, gradebook, schools, students, WordPress API 27, account blocks 44,
leaderboard, view-as, membership 15, QPay 59), JavaScript 91/92 — the one failure is the
pre-existing parity check of the shipped admin bundle, failing before this work.

Browser checks on the isolated site: quiz editor (version bar, bank picker, numerical and
structured editors, assessment settings), question bank and skills pages, learner quiz
delivery (tokens, no keys, stable order on refresh), autosave and resume after reload,
submission, versioned grading view including structured parts, inline check as a guest,
claim after login, skills dashboard, practice runner to an exhausted pool, and the
performance report.

## Limitations and later work

- Classroom pilot, full RTL/mobile acceptance and enabling on the math site remain.
- Translations: new strings use the `ohmylms` text domain but `languages/ohmylms.pot` has not
  been regenerated (WP-CLI is not installed here): run `wp i18n make-pot . languages/ohmylms.pot`
  and `wp i18n make-json languages`. The site currently runs in English and there is no
  Mongolian plugin translation yet. Mongolian (Cyrillic) content itself is verified: question
  text, skill names, family IDs and case-insensitive text answers.
- Math rendering uses the site's KaTeX auto-render (`wpmath`). Server-rendered quizzes and
  lesson checks are covered by its page-load pass; content added later by the practice runner
  and feedback is re-rendered through `window.ohmylmsTypeset`.
- Inline checks are authored as shortcode text. A spike in the retained lesson editor confirmed
  the shortcode round-trips intact (saved inside its own paragraph); curly quotes or a bare UUID
  are also accepted. A native editor node was not built.
- Media are frozen by attachment ID and URL; replacing a file in place still changes it.
- Structured questions: teachers can mark each part in the grading screen (sent as
  `part_marks`) or enter a whole-question mark (automatic parts keep their scores, the rest goes
  to written parts). Choice-type parts are not supported.
- Pool feasibility is checked greedily across pools; unusual overlaps may be reported short.
- Not built: symbolic equivalence, follow-through marking, Moodle XML import/export,
  generators, PDF/mark-scheme export, AI drafting.
