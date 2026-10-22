# Guidance (phase 3 of the skill graph)

Guidance turns a learner's levels on the shared skill library into advice: how strong they are in each area of
maths, what to do next, which reviews are due, what is holding them back, and how ready they are for a target
exam or syllabus. It reads and never writes. Levels still come only from the performance engine
([PERFORMANCE.md](PERFORMANCE.md)); the links it follows come from phase 2 ([AI-SKILL-ANALYSIS.md](AI-SKILL-ANALYSIS.md)).

## Where a learner stands

A learner's level on a shared skill pools their evidence on that skill and on every syllabus objective mapped to it
as **equivalent**, de-duplicated so one answer counts once, and is decided by the site's level policy. So practice on
a Grade 7 objective, an IGCSE objective and the shared skill itself all build the same backbone level.

**Scope.** Skills usually learned up to a grade: the `grade` asked for, else the learner's profile grade, else one
above the highest grade they have worked in, else the lowest grade in the library (a new learner starts at the
bottom). `subject` narrows the library; by default every subject is used.

## The rules (`Guidance\Model`)

- **Strength by area:** for each domain, the average of its skills' level weights (Not started 0, Attempted 0.25,
  Familiar 0.5, Proficient 0.85, Mastered 1), as 0–100, with counts of proficient and mastered skills.
- **Ready to learn (the frontier):** skills not yet Proficient whose every prerequisite is Proficient. Lowest grade
  first, then skills that unlock more, then skills already started.
- **Gaps:** for a skill the learner is stuck on (two misses in a row while still learning), each prerequisite that is
  not Proficient. Fixing the prerequisite comes before pushing on the stuck skill.
- **Reviews with implicit credit:** a skill due for review earns credit from correct, independent work on skills that
  **include** it since it was last practised: the sum of their weights. At 1 or more the review is **covered** and no
  separate review is needed.
- **The personal path** (five steps at most):
  1. one review that no ready skill includes (reviews that a ready skill includes happen while learning it);
  2. one fix, when a gap exists;
  3. started skills to **keep going** with, then new skills to **learn next**. Among them, skills that also review due
     skills come first, so one session counts twice;
  4. more reviews if room is left.
  Each step names the skills it also reviews and links to practice: the shared skill, or the equivalent objective
  with the most approved practice questions (no link when no question exists yet).
- **Readiness:** for a target syllabus (an exam such as Digital SAT, or the next course), the share of the shared
  skills its objectives map to that the learner holds at Proficient, with the missing skills.

## Where it shows

- **My skills** (`[ohmylms_skills]`): **Your next steps** with practice buttons, **Strength by area** bars, and a
  line naming reviews already covered by harder work.
- **Student report** (Content Hub → Performance → a learner): next steps and strength by area for the teacher.
- **REST:** `GET /ohmylms/v1/reports/skills/students/{id}/guidance` with optional `subject`, `grade`, `target`.
  The learner, administrators and staff with access to the learner (same rules as the skill report) may read it.
- **MCP:** `get_student_guidance`.

## Next

4. Visualisations: coherence map (domains × grades), syllabus comparison, student skill map.
5. Adaptive placement test, using the same graph to infer what a new learner already knows.

## Tests

`php tests/php/guidance-unit.php` (the rules) and `OHMYLMS_TEST_CREDENTIALS=... php tests/php/guidance-integration.php`
(pooled levels, the path, covered reviews, readiness, practice links, the dashboard and access).
