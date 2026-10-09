# XP, daily goal and mastery score

Both features are **off by default**. Switch them on under Gamification → *XP & mastery*
(Settings → Gamification has the same tab). Enabling installs two additive tables
(`ohmylms_xp_events`, `ohmylms_skill_scores`).

## XP

XP is a separate ledger from spendable points. It is never spent.

| Source | Default |
| --- | --- |
| Completed practice lesson (at least `min_answered` answers) | 10 |
| Perfect lesson (no mistakes) | +5 |
| Challenge zone: each first-try right answer made at score 90+ | +2 |
| Daily cap | 300 |

* Awards are idempotent per session (`event_key = practice:<uuid>`), so refreshing or
  replaying a request cannot pay twice. Replayed questions are not first tries.
* Days and weeks use the learner's streak timezone; the week runs Monday to Sunday.
* Daily goal: learners choose from `goals` (default 10, 20, 30; default 20). Reaching it is
  recorded once per day and can pay an optional bonus of points (needs Bonus Point on).
* Hooks: `ohmylms_xp_awarded`, `ohmylms_xp_goal_met`.
* REST: `GET/PUT /ohmylms/v1/engagement/xp` (learner summary, `goal` update);
  `GET/POST /ohmylms/v1/engagement/settings/xp` (admin).

## Mastery score (0–100 per skill)

Derived from the evidence ledger by `Skills\ScoreModel`, so it can be recomputed and tuned.

* Bands start at 0, 70, 80, 90 with a gain per correct answer and a loss per mistake
  (9/1.5, 5/3.5, 2.5/5, 1.5/6.5). Difficulty scales both by 0.75 + 0.25·d/2.
* A hint halves the gain; a wrong answer after a hint costs the full loss.
* The score never falls below the start of its current band.
* Only first-try answers count. Partial credit of 70% or more counts scaled.
* After 21 idle days it fades 1 point a week, never below 90.
* Medals: bronze 80, silver 90, gold 100 (kept at the peak). Score 80 unlocks the next skill.
* Existing learners are backfilled lazily the first time their scores are read.
* Hooks: `ohmylms_skill_score_updated`, `ohmylms_skill_score_milestone`.
* REST: `GET/POST /ohmylms/v1/engagement/settings/score`.

## Where learners see it

* Lesson summary: reward card with XP and its parts, daily-goal progress, mastery before to
  after with medals, and the streak.
* Student dashboard: XP card with week chart and goal picker; score and medal on recent skills.
* `[ohmylms_skills]`: a Mastery column.

## Not built

Leagues or cohorts, spending XP on streak freezes, and an XP mode for the leaderboard.
