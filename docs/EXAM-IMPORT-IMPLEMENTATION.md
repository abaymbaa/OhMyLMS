# Exam import implementation status

This branch implements structured imports, private PDF extraction jobs, teacher review,
an Exams tab and content type, and an exam shell using the existing quiz player.
The workflow has synthetic WordPress integration and desktop browser coverage. Extraction
quality on the owner's actual papers and providers is still awaiting supplied PDFs.

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
2. **Implemented:** private storage and explicit extraction through the configured AI provider,
   optional mark scheme, inventory followed by five-question batches, schema validation,
   usage accounting, bounded retries and checkpoints. Native PDF requests support OpenAI,
   Anthropic and Gemini; actual provider extraction accuracy remains unverified.
3. **Implemented:** side-by-side paper/review form, editable parts, marks, answers, source
   pages and skill search. Teacher review, commit, exact-version approval and publication
   are separate actions. Re-extraction preserves the saved teacher draft.
4. **Implemented:** Exam metadata and all imported questions in source order, pinned approved
   versions, and a private backing course/quiz using the existing assessment engine.
5. **Implemented:** standalone exam shell, existing typed answers/working, server timing,
   autosave, teacher marking and release-controlled results/mark scheme. This extends the
   quiz player; it does not add a new handwriting or automatic method-marking engine.
6. **Implemented:** signed-in standalone access and `[ohmylms_exam exam="ID"]` embedding.
   Original paper figures remain available through protected PDF references; rebuilding
   figures as interactive question assets is deferred.
7. **Implemented:** Question Bank views by curriculum descendants, roadmap, course and
   skills using existing links and objectives, without copying questions. See the bulk
   import document for extension hooks and limits.
8. **Next:** test the supplied real papers and mockups, then complete mobile, accessibility,
   provider failure and load verification on staging before release.

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
