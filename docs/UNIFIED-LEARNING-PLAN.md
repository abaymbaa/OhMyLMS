# Unified traditional, skill-based and blended learning

Planning proposal - 2026-10-05. This document proposes changes; it does not enable
new completion rules, migrate content or change the running LMS.

## 1. Product decision

Keep one course system with three learning modes: Traditional, Skill-based and
Blended. A course remains the container for enrollment, pricing, access, teachers,
chapters and certificates. Its learning mode determines the default student view,
recommended next action and completion requirements.

Use a new `learning_mode` setting, separate from the current course `type` setting
(such as self-paced) and from scheduling/cohort settings. Delivery schedule and
learning structure are independent choices.

| Mode | Student starts with | Lessons | Skill outcomes | Default completion |
|---|---|---|---|---|
| Traditional | Ordered curriculum | Required when marked required | Optional supporting evidence | Required activities complete and required assessments passed |
| Skill-based | Skill catalog and next recommended skill | Optional help by default | Required outcomes | Every required outcome meets its target; any explicitly required checkpoint passes |
| Blended | Guided curriculum with practice steps | Selected lessons required | Selected outcomes required | Required activities complete, required outcomes met and required assessments passed |

These are authoring presets with visible rules, not three independent engines.
Recommend Traditional for migrated courses, Blended as the offered template for
new guided math courses, and Skill-based for practice subscriptions or remediation.

## 2. What the repository already provides

Verified in the current source, not a claim of live-site acceptance:

| Existing foundation | Source | How to use it |
|---|---|---|
| Course, chapter, lesson, quiz and question content | `includes/Data/`, `includes/DataStores/`, `includes/PostTypes/` | Retain IDs and current authoring/storage contracts |
| Skill taxonomy, UUIDs, codes and prerequisites | `includes/Skills/Taxonomy.php` | One reusable skill catalog |
| Part-level primary/supporting skill mappings | `includes/QuestionBank/SkillMap.php` | Attribute evidence to the actual assessed skill |
| Approved questions, immutable versions, quiz revisions | `includes/QuestionBank/`, `includes/Assessment/` | Shared question bank and historical accuracy |
| Skill practice and inline sessions | `includes/Practice/Sessions.php` | Reuse session delivery, ownership and grading |
| Easy/standard/challenge selection | `includes/Practice/Selector.php` | Extend selection with explicit course scope |
| Evidence and per-student skill state | `includes/Skills/Evidence.php`, `Mastery.php` | Canonical skill progress |
| Help, review and ready recommendations | `includes/Skills/Recommendations.php` | Extend with enrollment, course and teacher context |
| Enrollment and membership access | Current course and membership services | Retain commercial and access behavior |
| On-demand admin feature bundles | `assets/src/extensions/lazyFeatures.js` | Load new authoring screens only when opened |

The core practice service explicitly does not trigger course completion today.
There is no unified three-mode completion evaluator. The new layer must bridge
evidence to published course requirements without changing the grading engine.

The separate SmartScore add-on stores student scores per quiz. Its quiz score
must remain a distinct historical metric. Do not reinterpret those scores as
skill proficiency or merge them into the evidence record without a valid mapping.

## 3. Content model and ownership

| Object | Meaning | Proposed storage |
|---|---|---|
| Course | Product, enrollment and learning program | Existing course CPT/data store |
| Unit | A chapter such as Fractions | Existing chapter model; "Unit" can be a learner-facing label |
| Lesson | Teaching material: text, video, worked examples | Existing lesson CPT |
| Skill | One measurable ability | Existing `ohmylms_skill` taxonomy and term metadata |
| Question | Reusable task and its approved versions | Existing question CPT plus question-bank tables |
| Quiz/exam | Defined assessment and grading policy | Existing quiz CPT and revision/attempt tables |
| Practice | A learner's interaction with a selected question pool | Existing practice session/item tables |
| Course outcome | A course's required skill and target level | New explicit course-to-skill requirement records |
| Curriculum item | Placement of a lesson, practice target, quiz or assignment | Extend existing chapter/content relationships, with settings per placement |
| Completion award | Evidence that this learner met a published course policy | Existing completion record extended with a durable policy/evidence snapshot |

A course-to-skill taxonomy link currently means association. It must not silently
become a mandatory completion requirement. Explicit outcome records distinguish
required skills from optional/supporting skills.

Keep grade level, curriculum standard and subject as catalog classifications or
mapping metadata. Reuse a skill across grades when the measurable ability is the
same. Create a new skill when the expected ability changes, not simply because
the grade or course changes.

Topic parents such as Fractions organize the catalog. Attainment should normally
be measured on precise leaf skills. A topic's progress is a transparent rollup of
its selected outcomes, not a claim that one answered question mastered the topic.

Prerequisites form a directed acyclic graph, separate from the catalog hierarchy.
"Fractions contains equivalent fractions" is different from "equivalent fractions
is a prerequisite for adding unlike fractions".

## 4. Worked example: Grade 5 Mathematics / Fractions

The author creates one unit with these reusable outcomes:

| Skill code | Skill | Prerequisite | Target |
|---|---|---|---|
| FRA-EQ | Recognize equivalent fractions | Basic fraction meaning | Proficient |
| FRA-LIKE | Add fractions with like denominators | Basic fraction meaning | Proficient |
| FRA-UNLIKE | Add fractions with unlike denominators | FRA-EQ and FRA-LIKE | Proficient |

Supporting lessons explain equivalent fractions, adding like fractions and common
denominators. A checkpoint quiz covers the unit. Every question part has one
primary assessed skill; other relevant skills are supporting mappings.

Traditional path: lessons -> checkpoint -> unit completion. Practice remains
available, and mapped answers can build skill evidence without gating completion.

Skill-based path: choose or check readiness for a skill -> optional lesson ->
practice -> meet the skill target -> continue to another skill. The checkpoint is
required only if the author explicitly adds that requirement.

Blended path: required lesson -> linked practice -> next lesson/skill -> checkpoint.
The unit completes only when its required learning activities and outcomes are met.

A learner who is already proficient in FRA-LIKE can receive prior-knowledge credit
when the course policy allows it. The UI shows "Target already met" and still offers
practice and optional lessons. This does not automatically skip a separately
required lesson in a Traditional or Blended course.

## 5. Teacher workflow

1. Create a course and choose its learning mode, separately from pacing/cohort type.
2. Define the unit structure and select skill outcomes from the shared catalog.
3. Set each outcome's target, required/optional status and prerequisite behavior.
4. Arrange typed curriculum items: lesson, skill practice, quiz, assignment.
5. Link existing lessons and approved question pools; author missing content.
6. Configure completion, checkpoint, prior-knowledge credit and evidence-recency rules.
7. Preview as a new learner, an already-proficient learner and a struggling learner.
8. Publish a versioned course policy after readiness validation.

Course editor tabs: Overview, Curriculum, Outcomes, Completion, Access, Reports.
Outcome and skill-practice controls appear when the Skills add-on is enabled.
The existing assessment editor remains the home for detailed quiz/exam settings.

Readiness checks must identify required skills with empty/inadequate pools,
unpublished or inaccessible lessons, missing skill mappings, cycles, impossible
requirements and inaccessible required checkpoints. Warn about insufficient item
families for the configured proficiency target; block publication when a required
target cannot be achieved with its permitted content.

Teacher reports show learner-by-skill status, activity completion, checkpoint grades,
review due flags and the reason a course is not complete. Teachers can assign a
lesson, a skill target or an assessment, with a due date and suggested next action.
An assignment records its target and deadline rather than copying the content.

## 6. Student workflow

Course home adapts its primary view: Curriculum for Traditional, Skills for
Skill-based, and Learning path for Blended. Students can access the other allowed
views without losing their place.

Every skill detail shows its name, target, current level, prerequisites, related
lessons, practice action and recent evidence. Start with Proficient as the typical
course target; Mastered is a higher retention target requiring later evidence.

During practice: one question -> answer -> feedback/explanation -> next question.
Hints are available and recorded as assistance. Pause/resume uses the existing
session. A short session has a defined limit; finishing a session is distinct from
reaching a skill target. If the pool is exhausted, show that state honestly and
offer appropriate help instead of falsely awarding proficiency.

Recommended next-action order: unfinished required checkpoint/activity when due,
help for a struggling target, prerequisite support, scheduled review, then an unmet
ready outcome. Resolve ties using the author's order and learner choice. Check
access before proposing a lesson or practice pool.

Catalog navigation: subject -> grade/curriculum -> topic -> skill. Students can enter
practice from the catalog or from an enrolled course. A public skill description
does not automatically grant access to its paid lessons or question pool.

## 7. Progress and completion rules

Show three separate dimensions:

- Activity completion: for example, 6 of 8 required lessons/assignments complete.
- Outcome attainment: for example, 4 of 6 required skills at their target level.
- Assessment results: for example, checkpoint 82%, pass mark 80%.

Do not average these into an unexplained percentage. Course completion is an explicit
AND of all configured required conditions. Optional activities do not enter the
required denominator. A mode changes defaults; the published requirements are the
actual contract presented to the learner.

Use one CompletionPolicy service for eligibility and missing-requirement reasons.
Evaluate on relevant progress, skill-state and grading events, plus on resume when
time-sensitive evidence rules need refreshing. Make awarding idempotent, use one
completion event, and preserve existing certificate/notification consumers.

New enrollment records reference a published policy version. Publishing new targets
must not silently add work to learners already enrolled. Authors may explicitly
upgrade an in-progress cohort after a preview; preserve older policy snapshots.

Once a completion/certificate is awarded, later forgetting or review-due status does
not automatically revoke it. Show current skill state alongside the historical award.
Exceptional administrative revocation is a separate audited action.

For Skill-based and Blended courses, default to recognizing relevant existing skill
evidence. Authors can require recent evidence or a course checkpoint. Course-local
target evaluation must record the scope/recency policy without overwriting the
learner's global skill record. Diagnostic prechecks are optional evidence sources;
a single correct answer must not automatically award mastery.

Current mastery defaults use diverse independent first tries and a later review
answer for Mastered. Retain those transparent rules initially; version rule changes,
calibrate with real classroom data and explain the requirements in the UI.

## 8. Access, reusable content and modularity

Retain the existing enrollment, purchase and membership model for every course mode.
Resolve content access through explicit grants and course context, not through skill
proficiency. Mastering a skill in one course does not grant access to another product.

Introduce a PracticeAccessPolicy used by session creation, next-item selection and
recommendation generation. Validate `course_id` against actual enrollment; do not
treat a client-provided course ID as authorization. Scope pools to allowed banks and
approved question versions. Secure assessment questions remain excluded from practice.

Guest practice is allowed only for explicitly public pools. Guest history can be
claimed into an authenticated account through the existing verified claim process.
Completion and paid-content credit require an authenticated eligible learner.

Retain core Courses, Lessons, Assessments, Question Bank and enrollment services.
Skills, skill practice authoring, outcomes and recommendations form the optional
Skills capability. Shared grading/history readers remain available for old records.
Do not split out a second question bank, grading engine or duplicate skill catalog.

Before disabling Skills, identify active published Skill-based/Blended courses.
Block a normal switch-off until those courses are paused or explicitly converted;
offer an impact preview. Never silently make all skill requirements pass or strand
learners with an empty screen. Historical records remain readable. Restoring the
add-on restores its authoring and practice capabilities.

## 9. Implementation design

Recommended additive services under a dedicated Learning namespace:

- CourseProgram: read/publish learning mode, selected outcomes and curriculum placements.
- CompletionPolicy: evaluate requirements, return missing conditions and award once.
- LearningPath: calculate accessible next actions and explain their reasons.
- PracticeAccessPolicy: authorize course/catalog practice and constrain selection.

Extend existing chapters and content relationships rather than replacing them all
at once. Add a typed skill-practice placement that references a skill and optional
pool settings. Do not create dummy lesson posts for each practice session.

Proposed new storage is deliberately small: versioned course-policy records and
explicit course-outcome rows (course/policy/skill/target/required/order). Reuse existing
progress/enrollment/attempt tables; add policy references and immutable completion
snapshots through an additive migration. Final table/column names require a focused
schema audit before implementation.

Proposed APIs extend existing course editing and add course outcome, published-policy,
learner progress and next-action resources. All eligibility is recomputed server-side.
Use existing authoring permissions and object checks, and scope teacher reports to
authorized courses and students. Reuse existing practice endpoints after adding
course access checks and pool constraints.

Question-bank and lesson relationships are many-to-many at the learning-resource
level. Preserve current enrollment and lesson-completion semantics until placement-
aware progress is implemented; a completed lesson should not silently complete all
occurrences in unrelated courses. Cross-course skill evidence has its own explicit
recognition policy.

Performance: batch-read skill states, paginate catalogs and reports, index new course
outcome lookups, and calculate aggregate progress from caches updated by events.
Keep evidence writes durable and process outbox updates asynchronously. Show pending
evaluation when needed; never award from an unconfirmed browser count. Lazy-load the
new authoring and catalog screens using the existing SDK feature boundaries.

## 10. Delivery sequence and acceptance gates

| Phase | Deliverable | Acceptance gate |
|---|---|---|
| 0. Baseline and migration inventory | Document current completion consumers, relationships, active courses, add-on states and legacy SmartScore records | Existing traditional enrollment, lesson completion, quizzes and certificates pass on an isolated copy; rollback inventory exists |
| 1. Unified model | Learning mode, explicit outcomes, typed placements, published policies, read-only eligibility preview | No existing course changes behavior; traditional remains the migration default; invalid policies are rejected |
| 2. Teacher builder | Outcomes/Completion views, skill-practice item, pool readiness and learner previews | Author can publish the Fractions example in each mode without duplicating skills or questions |
| 3. Learner experience | Course home modes, skill detail, practice integration, authorized next actions and progress dimensions | Learner can start, pause, resume, learn, practice and take a checkpoint on desktop/mobile |
| 4. Completion and reporting | Canonical evaluator, durable awards, prior-credit policy, teacher matrix and interventions | Correct mode-specific eligibility; no duplicate certificates; historical awards persist after review becomes due |
| 5. Pilot and rollout | Small math unit, observed classroom use, reviewed content coverage, migration tools | Teachers can explain every recommendation and completion decision; opt-in rollout succeeds before broad conversion |

Run a vertical pilot through phases 1-4 on one unit before expanding the catalog.
Content design and engineering can proceed together, but publishing required skills
depends on having enough approved, varied questions. Estimate implementation time
after phase 0 rather than committing to a timeline from file inspection alone.

Release tests include all three modes, fresh/experienced learners, failed/regraded
quizzes, hints/retries, manual marking, empty pools, prerequisite cycles, cross-course
credit, unauthorized practice, guest claiming, stale evidence, add-on disable, new
policy versions, repeated events and mobile navigation. Include a full traditional
course regression and load checks for large catalogs and teacher reports.

## 11. Migration and rollback

Introduce the model behind a feature flag. Existing courses default to Traditional
and retain their old progress and enrollment records. Backfill identifiers/settings
idempotently and provide a dry-run preview. Course authors explicitly opt into skill
outcomes or a different mode. Keep record IDs and existing URLs working.

Before migration, capture compatible code/database backups. Rehearse on a copy and
compare course counts, progress, grades and certificates before/after. Rollback the
new UI/services by disabling the flag while retaining additive records; do not drop
historical evidence. New-mode courses require an explicit pause/compatibility path
on rollback, rather than silently treating skill-only curricula as empty courses.

Legacy SmartScore history remains visible as legacy quiz practice. For canonical
skill attainment, use only evidence whose question versions and skill mappings can
be established. Unmappable historical totals are not invented skill evidence.

## 12. Recommended first release

Deliver three course presets, shared reusable skills/questions, a typed practice
item, clear per-course outcome targets, separate progress dimensions, explicit
completion rules and a teacher outcome report. Use the current rule-based practice
and mastery services. Defer a new statistical adaptive model, automatic curriculum
generation, separate paid skill products and complex prerequisite locking.

Start with soft prerequisite recommendations; allow an author to require a prerequisite
only when an accessible path and an authorized teacher override exist. Use Proficient
as the first pilot's course target and reserve Mastered for a later review goal.

This is compatible with the organization demonstrated by IXL's skill plans, which
map selected skills to curriculum and textbooks. IXL's SmartScore is its proprietary
model; the proposed LMS uses its own recorded evidence and published rules.

References checked 2026-10-05:
- https://www.ixl.com/skill-plans
- https://www.ixl.com/help-center/article/1272663/how_does_the_smartscore_work
- Local sources listed in section 2 and `docs/ASSESSMENT-ENGINE.md`.
