# Khan Academy exercises, quizzes and tests: observed behaviour and OhMyLMS gaps

Observed October 16, 2026 on khanacademy.org in the built-in browser, **signed out**, on 5th grade math
(Unit 1, Decimal place value). Mastery rules come from the Khan Academy Help Center articles
"How do Khan Academy's Mastery levels work?" and "What are Course and Unit Mastery?". No account,
learner data or progress was created. Signed-in only behaviour (results screens, saved progress, Level up
rewards) was **not observed** and is marked as such.

## 1. Course and unit structure

- A course has units. A unit lists, in order: skills (each one exercise), a **Quiz** after every three or four
  skills (Unit 1 has Quiz 1 to 4), then one **Unit test**. The course ends with a **Course challenge**.
  Course overview shows "130 skills" with a legend: Mastered, Proficient, Familiar, Attempted, Not started,
  plus Quiz and Unit test icons.
- Unit page: header "13 skills", one row per skill with its level in words (for example "unfamiliar" when not
  started), a **Level up** button that goes to the unit test, an "About this unit" blurb, a link to a prerequisite
  course ("Not feeling ready? Check out Get ready for 5th grade math").
- Lesson sidebar (left): course name, "Unit 1 > Lesson 1", the lesson's items (video, exercise, review article), a
  collapse arrow, breadcrumb at the bottom. An exercise page keeps the sidebar visible.

## 2. Exercise (practice) screen

- Header: skill title, standards link (for example CCSS.Math: 5.NBT.A.3), "Microsoft Teams" and "Share link".
- Question card, "Choose 1 answer", lettered radio rows A-D. Maths rendered inline.
- Bottom bar, always visible: restart icon, **"Do 7 problems"** with seven dots (becomes "2 of 7"), **Skip**, **Check**.
  Check is disabled until an answer exists. Enter also submits (checked on a numeric field).
- A per-question **Related content** card (video with duration) and **Report a problem**.
- Wrong answer: toast "Not quite! Give it another try!" with a **Show a step** button; the bar changes to
  **Hints** and **Try again**. The answer stays selected and can be changed. The dot for that question is half
  filled while the learner is still on it.
- **Hints are progressive**: "Hint #1, 1/4", **Get another hint (1/4)**. Hint text can use the question's numbers.
- Correct answer: chosen row turns green with a check, the other rows dim, **Next question** appears.
  Two feedback tiers: first try "Great work! You got it. Onward!"; after hints or retries "Nice work! Great that you
  stuck with it. Onward!". Both offer **See a step-by-step solution**.
- Dots: a green check dot means correct on the first try; a grey dot means the question needed help.
- Every problem is a new variation of the same template (the digits change: 12.47, then 4.09).
- First interaction shows a four-step tour: reach new Levels, build weekly streaks, jump to your next suggested
  skill, review recent courses. A header strip shows weekly streak and "Level 1, 0/1 skill".

## 3. Quiz and Unit test screens

- Quiz intro: "Time for a quiz? Get ready for questions on the unit so far. **5 questions, 5-10 minutes**", Let's go.
- Unit test intro: "All set for the unit test? ... **11 questions, 11-22 minutes**" (one to two minutes each).
- Both use the same runner as exercises ("Do 5 problems" / "Do 11 problems", Skip, Check) and draw questions from
  several skills in the unit (the Quiz 1 question was a different skill from the exercise). Free-text numeric
  answers appear in tests.
- Signed out, hints, retries and per-question feedback were still available. Whether signed-in quizzes and tests
  withhold hints or feedback was **not verified**.

## 4. Mastery rules (official)

Skill levels: Not started, Attempted, Familiar, Proficient, Mastered.

| Event | Result |
| --- | --- |
| Exercise finished below 70% | Attempted |
| Exercise finished 70-99% | Familiar |
| Exercise finished at 100% | Proficient |
| Mixed-skill assessment (quiz, unit test, challenge): question on the skill right | Not started or Attempted to Familiar; Familiar to Proficient; Proficient to Mastered |
| Mixed-skill assessment: question on the skill wrong | Not started or Familiar to Attempted; Proficient to Familiar; Mastered to Proficient |

- Only Proficient and Mastered count toward unit and course mastery percentage (5 of 20 skills = 25%).
- After any activity the learner sees which skills leveled up, leveled down, or stayed, with recommended lessons.
- Not verified here: whether an exercise can lower a Mastered skill (older community text said 70-99% drops Mastered
  to Proficient), and the exact unit test and course challenge question counts per skill.

## 5. OhMyLMS today

| Area | OhMyLMS now | Khan |
| --- | --- | --- |
| Skill exercise runner | Practice sessions (3-30 questions), Check, one authored hint, Next, summary, resume, templates with new numbers | Same idea plus progress dots, Skip, progressive hints, tiered feedback, restart, related content |
| Hints | One hint per question; a hint makes the answer "assisted" | Up to four progressive hints |
| Skip | Not supported | Skip on every question |
| Mastery levels | Evidence rules (developing, proficient, mastered) and an optional 0-100 SmartScore; display names mapped by `MasteryDisplay` | Level set by exercise percentage and by mixed-skill assessments, one step up or down |
| Quiz | Quiz engine with attempts, sections, exam preset, answer review | Short mixed-skill check, 5 questions, drives skill levels |
| Unit test, Course challenge | Do not exist | Present in every unit and course |
| Post-activity summary | Practice summary with accuracy and XP, mastery before/after when SmartScore on | Leveled up/down/same per skill plus recommended lessons |
| Quiz intro | None | Question count and time estimate before starting |
| Level up button | None | Starts the unit test |
| Standards badge | None | CCSS code on each exercise |
| Weekly streak and level strip | Streak card when streaks enabled | Header strip on every page |

## 6. Proposed slices (each additive, nothing built yet)

1. **Runner parity**: progress dots, Skip (counted as not answered), restart, tiered feedback text, multi-step
   hints (needs a hint list on questions), Enter-to-check, standards label. Runner only; no scoring change.
2. **Khan level rules as a selectable mastery model**: new setting, default unchanged. Exercise percentage
   to level, assessment answers to one-step moves, leveled up/down summary. Needs a decision on whether it
   replaces or sits beside the evidence and SmartScore models.
3. **Mixed-skill assessments**: a "Skill check" (quiz) and "Unit test" built from the unit's skills with a
   question count per skill and time estimate, intro screen, results with skill level changes.
4. **Course challenge** and the unit page **Level up** button, once 3 exists.
5. **Header strip** (weekly streak and level) and the first-use tour.

Open decisions for the owner: replace or add the Khan level model; whether quizzes hide hints and feedback until
the end when signed in (not observed); how many questions per skill in tests; whether Skip is allowed in
formal assessments.

## 7. Slice 1, runner parity: what was built (October 16, 2026)

Standard practice runner only (`assets/js/practice.js`, `includes/Practice/Sessions.php`). The fast-feedback
"lesson" style keeps its own header and gets none of these controls. No scoring, evidence, mastery or schema change.

- **Progress dots**, one per problem, in the order answered: right first time (green with a check), right after
  a hint (grey), not right (red with a cross), the current question (ring), not reached (empty). Each dot carries
  a text label for screen readers. The server returns `results` (`right`, `help`, `wrong`) and `skipped`.
- **Skip** (`POST /practice/sessions/{uuid}/skip`). The question is not graded and creates no grade event or
  evidence; its row is stored with no response and `display.skipped`. It is replaced by another question and does not
  use up one of the session's problems. At most `item_limit` skips per session; refused in lesson style and in
  finished sessions. Skipped questions are not replayed and do not move the difficulty band. `can_skip` in the
  session state tells the runner when to show the button.
- **Stepped hints.** A hint written with horizontal rules (`<hr>`) is shown one step at a time: "Hint 1 of 3",
  then "Get another hint (1/3)". A hint without a rule behaves as before. The first request still marks the question
  assisted, so later steps need no server call. Authors write the rules in the existing hint field.
- **Feedback tiers.** Right first time says "Great work! You got it. Onward!"; right after a hint says "Nice work!
  Great that you stuck with it. Onward!". The answer response now includes `assisted`.
- **Start over** link beside the dots (asks first; the old session's answers stay recorded).

Not built, on purpose:
- **Try again after a wrong answer.** Built in slice 2 (section 8), only with the Khan level rules on.
- Disabling Check until an answer exists, restart that reuses the same session, per-question related video,
  Report a problem, standards badge. New strings need the next translation catalog regeneration.

Verification: `node --test tests/js/practice-presentation.test.mjs` (6 pass, 3 new), assessment phase `skip`
(37 checks) plus phases lesson, xp, evidence (320 checks), learning (76), player templates (81), Student Home (88).
Browser (disposable site): hint steps, "Nice work" tier with a grey dot, "Great work" tier with a green dot, Skip
replacing a question without using a slot. PHPCS is not installed in this environment, so only PHP syntax,
ESLint, Prettier and Stylelint were run on the changed files; PHPCS on `Sessions.php`, `Frontend.php` and
`PracticeController.php` is outstanding.

## 8. Slice 2, Khan level rules as an option: what was built (October 16, 2026)

A site setting, **OhMyLMS -> Gamification -> XP & mastery -> Mastery model**: *Evidence rules (default)* or *Khan Academy levels*
(`ohmylms_mastery_settings`, REST `engagement/settings/mastery`). Nothing changes until an administrator picks Khan. Switching back
keeps every record; skills then use the evidence rules again.

With the Khan model on:

- **Exercise** (a finished practice session): right first time without a hint, out of the problems that counted (skipped ones do not).
  Under 70% is Attempted, 70-99% Familiar, 100% Proficient. An exercise raises a skill to that level and never lowers it, except that an
  imperfect exercise takes Mastered back to Proficient. (The Help Center does not say whether a weak exercise can lower a skill; this is
  the conservative reading and the one rule worth confirming with Khan's wording.)
- **Quiz or any graded attempt**: for each skill a question maps to (primary mapping), all right moves the skill up one step (Not started
  or Attempted to Familiar, Familiar to Proficient, Proficient to Mastered); any miss moves it down one step (floor Attempted). Runs on
  `ohmylms_attempt_graded`, so manually marked attempts count once they are graded.
- **Retry after a wrong answer** (standard practice runner only): the first answer is the learner's first try and is recorded exactly as
  before (grade event, evidence). A wrong first answer leaves the question open: nothing is revealed, the button says "Try again", hints
  and Skip stay available. The first right answer closes the question as right with help (grey dot), with no further grade event, so the
  wrong first try still stands in the evidence. Lesson style keeps its own replay of misses.
- **Where the level lives**: an append-only log `ohmylms_khan_level_events` (learner, skill, source, level before and after). The current
  level is the newest row; a skill with no Khan history shows its stored evidence level (developing as Attempted), so switching on is
  seamless. The stored evidence level (`student_skill_state.level`) follows the Khan level, so completion targets, recommendations and the
  hub keep working from one decision. A source can move a skill only once (unique key), so replays are harmless.
- **Display**: `MasteryDisplay` shows the Khan level (five names) for skills with history; the achievements counts include them. The
  practice summary lists "Leveled up / Leveled down / Stayed at" with before and after for the skill.

Not built: the leveled up/down list on the quiz result screen (the data is in `Levels::changes()`), the unit test and course challenge
(slice 3 and 4), a migration of old history into the log, teacher-side reports of Khan levels. Retry is not offered to guests' lesson
style or inside quizzes.

Verification: assessment phase `khan` (87 checks: all rule tables, setting validation and permissions, retry flow with event and
row checks, no leak of the solution, summary changes, assessment up/down, replay idempotency, evidence-model fallback), phases skip,
lesson, xp, evidence, templates, review (672 checks together), learning 76, player templates 81, Student Home 88, JS 423 (422 pass, 1
skipped). Browser: the setting saved from the admin tab (the first build missed the save logic and was fixed), a wrong then right
retry with the "Nice work" tier and grey dot, and "Leveled up: Attempted -> Familiar" on the summary. PHPCS is not installed in this
environment, so it is outstanding for the new `Skills/Khan/*`, `Sessions.php`, `EngagementController.php` and `MasteryDisplay.php`.

## 9. Slice 3, mixed-skill Quiz and Unit test: what was built (October 16, 2026)

This builds on the quiz engine's existing skill question pools (`Assessment\Pools`), so nothing about attempts, grading or revisions changed.
How the draw works: a quiz holds one rule per skill (skill, count, marks, optional difficulty and bank). A question is eligible when its
approved version has that skill as its primary skill (sub-skills count), it is not archived, and secure questions are allowed. Publishing
checks all rules together (different families, no double-counting). Each attempt gets its own seed; every slot takes the eligible,
unused-family question with the smallest hash of seed, rule and question, and the choice is frozen into the attempt.

- **Builder.** `POST /ohmylms/v1/skill-assessments` (needs `edit_posts`; runs the usual quiz permissions) or `Assessment\SkillAssessment::create()`.
  Body: `title`, `style` (`quiz`, `unit-test`, `course-challenge`), `skills` (1-40 skill IDs), `per_skill` (1-10, default 1), `time_limit`
  (minutes, optional), `publish` (publishes a frozen revision and the post), `chapter_id` (puts it at the end of that unit). At most 60
  questions in all. A shortage in any skill fails with the pool message and removes the half-made quiz.
- **Style.** New assessment setting `style` (quiz by default). It is only presentation: the intro wording and the unit test or
  challenge label. The kind (quiz, exam, practice) is unchanged.
- **Intro screen** (`Quiz\Intro`, shown on the Quiz Player block and the quiz page): "Time for a quiz?", "All set for the unit test?" or
  "Ready for the course challenge?", then "N questions · a-b minutes" (the quiz's own limit when it has one, otherwise one to two
  minutes a question) and "Covers N skills", plus a line about levels when the Khan model is on. It appears only for unit tests, course
  challenges and quizzes that draw from two or more skills; an ordinary quiz keeps its start screen.
- **Result screen.** With the Khan model on, the review lists each skill the attempt touched: "Leveled up: Not started -> Familiar",
  "Leveled down", or "Stayed at".

Not built: the unit page "Level up" button, placing a unit test automatically at the end of every unit, an authoring screen (the builder is
an API for now; the Account Hub could call it), a time-per-question rule, and any change to how a quiz is marked.

Verification: assessment phase `skillcheck` (58 checks: input validation, shortage rollback, builder output, one question per skill per
attempt, placement, the intro summary and wording, timed quiz, Khan level moves over two attempts, the result block, off-state), all
assessment phases together 808, learning 76, player templates 81, Student Home 88, quiz exchange 578, quiz player block 37. Browser
(disposable site): the intro on the player, a real attempt submitted through the player (2 of 3 right), and "Leveled up: Not started
-> Familiar" for two skills and "-> Attempted" for the missed one; the quiz page also shows the intro and the levels. PHPCS is not
installed here, so it is outstanding for the new files.

## 10. Authoring screen and AI quiz building (October 16, 2026)

- **OhMyLMS -> Skill assessments** (`Assessment\SkillAssessmentPage`, needs `edit_posts`). Steps: choose a course and unit (optional), search
  for more skills (optional), tick the skills (a unit's skills start ticked, each with how many different approved questions exist and a
  warning at 0), then set title, style (Quiz, Unit test, Course challenge), questions per skill, time limit, publish now or keep a draft, and
  whether to add it at the end of the unit. It calls the same `SkillAssessment::create()` as the REST route; the unit placement needs edit
  rights on the course. A unit's skills are the skills on its lessons plus the skills its quizzes are connected to.
- **AI.** The builder is also an assistant and MCP tool pair (`list_unit_skills`, `create_skill_assessment`), draft only, approved in the chat
  first. The AI chooses skills and counts; the questions are always existing approved questions of any question type. AI-written questions go
  through the import tools, arrive unapproved and flagged, and cannot be drawn until a person approves them.
- **Question types.** Pools draw any approved version whose primary skill matches, so single and multiple choice, true/false, numerical,
  fill-in-the-blank, matching, structured and the interactive types all work. Checked in tests with a single-choice and a numerical question
  drawn together and marked in one attempt. Hand-marked types still wait for a teacher, and Khan levels move only after the marking.
- **Bug fixed on the way.** `SkillCatalogue::search` hid any skill that had no code, no objective or no UUID (a NULL score), so skills made
  in the editor without those could not be found by word. Scores are now COALESCEd. This also helps the existing MCP search tool.

Verification: assessment phase `skillcheck` (85 checks, including unit skills, tool calls, a learner refused, a tool "publish" ignored, mixed
question types, and the screen's listing, search, create and error paths), all assessment phases together 835, assistant 28 (tool count now 14),
comparison 98, learning 76, player templates 81, Student Home 88, JS 423 (422 pass, 1 skipped). Browser: the menu entry, the unit's three skills
with counts, creating a published unit test from the form. `mcp-integration.php` stops at "Official adapter server not registered" on this test
site (the MCP adapter is not installed there); it was not run to completion. PHPCS is not installed here, so it is outstanding for the new
files. The authoring screen is plain PHP with no script, so there was no build step.
