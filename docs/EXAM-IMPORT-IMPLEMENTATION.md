# Exam import implementation status

This branch implements structured question-bank imports and the private PDF/job foundation.
It does **not** yet provide PDF extraction, an import review UI, an Exams tab, an Exam content type or an exam player.
Do not describe those features as available until their delivery and integration tests pass.

## Implemented in this change

- An explicit `parts` field for JSON/CSV structured-question import.
- Compatibility with the existing `settings.parts` input.
- Stable part IDs, labels, prompts, numerical/text/written kinds, marks and private rubric.
- Part skill overrides and row-skill inheritance, including batched skill-code resolution.
- Existing draft writer, versioning, review and approval paths remain the persistence authority.
- Derived total marks in the assessment engine's enabled/value score format.
- Validation of conflicting totals, conflicting part definitions, invalid part settings and the
  50-part delivery limit. Unsupported question interactions are not installed automatically.
- Synthetic unit fixtures covering the import contracts and learner-safe projection.
- Runtime rehearsals on the owner's Local WordPress LMS and the disposable WordPress installation:
  repeat imports, review approval, frozen question versions, marking and per-part skill evidence.
- Private PDF upload API, owner-scoped persistent import records, status/list/retry/delete routes,
  source integrity validation and bounded Action Scheduler processing. See [EXAM-IMPORT-JOBS.md](EXAM-IMPORT-JOBS.md).

See [QUESTION-BULK-IMPORT.md](QUESTION-BULK-IMPORT.md) for the format and example.

## Remaining sequence

1. **Complete:** exercise structured imports on both Local and disposable WordPress, including repeat imports,
   frozen versions, review approval and per-part skill evidence after teacher marking.
2. **Foundation complete:** private document storage, import job persistence and bounded validation stage.
   Jobs intentionally stop at `ready_for_extraction`; add extraction stages next.
3. Add PDF structure extraction and optional mark-scheme alignment through the server-side
   AI provider, with schema validation, source figures, usage accounting and safe retry.
4. Build the side-by-side import review UI. Commit bank drafts explicitly and separately
   from approval and exam publication. Preserve teacher changes on subsequent extraction.
5. Add an Exam content type, curriculum metadata, exam/assessment adapter and Exams hub tab.
   Use the existing versioned assessment engine rather than creating a second grading engine.
6. Add the separate exam player shell, typed mathematical working, teacher review, server
   timing, autosave and release-controlled results/documents.
7. Add standalone access and lesson/WordPress embedding without exposing secure answer data.
8. Run regression, access, browser, accessibility and load verification on staging before release.

Question-bank items are shared by quizzes, exams and future interactive books. Published uses
must pin approved versions; edits must not change an existing attempt's content or score.

## Deferred extensions

Overleaf ZIP ingestion, declarative/interactive figures, independent section timers, handwriting
uploads, adaptive testing and offline book/practice support have separate delivery gates.
Rubric import does not implement automatic Cambridge method or follow-through marks.
Papers without a mark scheme require reviewed AI solution drafts; practice raw points must
not be presented as an official Digital SAT scaled score.

## Development and release policy

Follow `AGENTS.md` and `docs/DEVELOPMENT.md`. Edit authored code and rebuild assets through the
repository tools. Run syntax, standards, focused PHP tests, `npm run check`, build and
reproducibility checks. A source/unit result does not establish WordPress runtime correctness.
Report unavailable tests and unrelated existing failures separately from regressions.

Continue in the feature branch and use a reviewable pull request. Merge into `main` after the
owner's go-ahead; production deployment is separate from merging code.
