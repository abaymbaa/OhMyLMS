# Skill and student performance tracking

One system tells where a learner stands on each skill. Every answer is evidence in one ledger, one
engine turns the evidence into a stored state, and every screen, report, MCP tool and AI note reads that
state through one API.

```
answer → grade event → evidence outbox → skill_evidence ──► Engine ──► student_skill_state ──► Snapshot ──► screens, reports, MCP
                                  (only activities that count)    │         (level + mastery score)        └──► AI notes (explain only)
                                                                   └──► skill_level_events (what each activity did)
```

## The ledger

`skill_evidence` (see [the assessment engine](ASSESSMENT-ENGINE.md)) holds one row per graded answer per
skill: marks, whether it was independent (no hint), whether it was a first try, the question family and
difficulty, and the activity it came from. Rows are written once per grade event and a regrade supersedes
the old row. Everything below is derived from this table, so it can always be rebuilt.

**Which activities count.** *Settings → Gamification → XP and mastery → Answers that count toward skills*
switches each activity (quiz, practice, exam, inline check, question player, or any registered assessment
kind) on or off. A kind's default comes from its profile (`skills` => true; see
[assessment profiles](ASSESSMENT-PROFILES.md)). Changing it rebuilds the evidence in the background.

## One scale, three policies

Every level is one of `not-started`, `attempted`, `familiar`, `proficient`, `mastered`
(`Performance\Levels`). A **policy** decides which level some evidence earns; it is a pure function, so
switching policy is a rebuild and never a data migration. Choose one under *How skill levels are decided*.

| Policy | How it decides |
| --- | --- |
| `evidence` (default) | Familiar: two or more independent first tries at 60% or better. Proficient: three correct from two question families at 80% or better over the last eight. Mastered: five from three families at 85%, plus a correct answer a day after first reaching proficient. Thresholds: option `ohmylms_mastery_rules`. |
| `steps` | Replays the answers activity by activity. Practice sets the level (under 70% right first time is Attempted, 70-99% Familiar, all right Proficient) and never lowers it. A quiz, exam or question player moves it up one step when every question on the skill is right and down one when any is missed. A learner may retry a wrong practice answer. |
| `score` | The level is the band the 0-100 mastery score sits in. |

The 0-100 **mastery score** (`Skills\ScoreModel`) is always computed beside the level and shown when
*Show the mastery score* is on. The XP, streak and medal features read it as before.

A policy is a class implementing `Performance\Policy` (`id`, `label`, `description`, `level( $rows,
$context )`). Add one with the `ohmylms_performance_policies` filter.

## The engine and the state

`Performance\Engine::recompute( $student, $term )` loads the countable evidence, asks the active policy for
the level, computes the mastery score, accuracy, review timing and counts, and writes one row to
`student_skill_state`. It also logs what the newest activities did to the level in `skill_level_events`
(the "Leveled up: Not started → Familiar" lines on the result screen). Both tables are derived.

States are recomputed whenever evidence changes (`Skills\Evidence`, run after each request, with a
one-minute WP-Cron fallback). `Evidence::rebuild( $student )` rebuilds one learner;
`Engine::schedule_rebuild()` rebuilds everyone in slices after a settings change. `ohmylms_skill_state_updated`,
`ohmylms_skill_score_updated` and `ohmylms_skill_score_milestone` fire as before.

## Reading it

`Performance\Snapshot` is the only reader: `students()` and `student()` for the level of each skill,
`skills()` for everything a dashboard shows, `counts()`, `started_terms()` and `next_steps()`. The
learner dashboard, teacher and school reports, course outlines, bundles, completion rules and recommendations
all use it, or the state table it reads.

REST: `GET /reports/skills` (learners x skills for a course or class), `GET /reports/skills/students/{id}`,
`POST /reports/skills/students/{id}/rebuild`, `POST /reports/skills/students/{id}/insight`, and the settings
at `/engagement/settings/mastery`.

## AI notes

With an AI provider connected under *AI settings* and *Write AI study notes* on, a learner can ask for a short
note about their own skills (My skills) and a teacher for a note about a learner (the student report).

- **AI explains, never decides.** Levels, scores and evidence come only from the engine. The model is told so,
  and its words are stored as text only.
- **Only skill names and numbers leave the site.** No name, e-mail, user or site identifier.
- **Cached.** A note is stored with a hash of the facts it came from and is reused until the learner's skills
  change; the daily limit set for AI applies per reader.
- **Optional.** When AI is off, unconfigured or failing, every screen works exactly as before.

A learner can only ask for their own note (audience `student`); staff with full access to a learner ask for
the `teacher` note. Guardians see summaries only.

## MCP

`get_student_skills`, `get_skill_report`, `get_performance_settings`, `set_performance_settings` and
`write_student_skill_note`. Levels are not writable. See [MCP](MCP.md).

## Tests

`php tests/php/performance-unit.php` (pure) and
`OHMYLMS_TEST_CREDENTIALS=... php tests/php/assessment-integration.php performance` on the isolated test site.
