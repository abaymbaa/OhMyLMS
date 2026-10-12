# Shared skills, general roadmaps and syllabus mapping

Status: implementation authorized and the first reusable implementation is in place. See [SHARED-SKILLS.md](SHARED-SKILLS.md) for the shipped workflow, API, MCP tools, validation and remaining limitations. This original phased plan is retained as context; the current implementation supports multiple sources and any subject, grade or level.

## Intended result

Administrators compare existing Cambridge, Mongolia national curriculum, and examination syllabuses in one workspace, create or adjust shared mathematics skills, and explicitly save each mapping. Students see Mathematics in their profile, with shared mastery and views for a selected syllabus or examination, including Digital SAT when its objectives have been entered and reviewed.

The user will enter skills before implementation resumes. Mapping and skill restructuring remain manual. Automatic matching is outside the initial scope.

## Existing foundation verified in source

- `assets/src/features/curriculum/SkillMappings.jsx` already provides manual mapping selection, equivalent/related relationships, notes, and removal.
- `includes/Curriculum/SkillMappings.php` stores directional mappings and prevents mapping chains. A specific skill can link to multiple shared skills; a shared target cannot itself point to another target.
- `includes/Rest/V1/SkillMappingController.php` provides administrator-only mapping endpoints.
- `includes/Tracks/Progress.php` builds combined shared-skill views while retaining source levels and curriculum context.
- `includes/Tracks/Combined.php` deduplicates answer evidence. Combined evaluation does not write skill state or complete courses.

This is a source audit, not verification of imported syllabus records or live behavior.

## Phase 1: inspect data and agree on skill granularity

1. Inspect the actual imported mathematics syllabuses and existing skill library: stable IDs, objective codes, descriptions, grade/examination, syllabus version, and memberships.
2. Choose one topic across two syllabuses as a pilot. Define shared skills as assessable abilities with explicit scope, rather than broad topic titles.
3. Agree on how shared mathematics skills are identified and grouped using the existing taxonomy. Avoid inferring equivalence from identical names.
4. Inventory current question-to-skill links and available student evidence, so progress gaps can be distinguished from mapping gaps.

Deliverable: pilot dataset and a short definition guide for equivalent versus related mappings.

## Phase 2: comparison workspace

Extend the curriculum feature with a dedicated comparison page and reuse its existing APIs and controls.

- Select two syllabuses initially; permit changing selections without losing unsaved work.
- Show each syllabus in its own column, with a shared-skill editor between them. Keep codes, descriptions, grade, version, and curriculum paths visible or readily expandable.
- Search and filter by topic, grade, syllabus version, mapping status, and shared skill. Keep source ordering available; rows are not assumed to be equivalent because they line up visually.
- Select one or more source objectives and an existing shared skill, or create a shared skill inline.
- Preview the proposed relationship, affected objectives, and note; save only on an explicit administrator action.
- Support inspecting, editing, and removing existing mappings. Preserve the existing per-item mapping editor as a compatible entry point.
- Paginate large lists and scope server reads to selected syllabuses. Add bounded query parameters if existing endpoints cannot serve the comparison efficiently, preserving current contracts.

Deliverable: administrator can compare and map the pilot entirely in one interface.

## Phase 3: shared-skill editing and review

- Rename and edit a shared skill's description or grouping while preserving its stable identity, mappings, resources, and evidence.
- Display every affected syllabus objective before adjusting a shared skill's scope.
- Save each relationship as equivalent or related, with a note explaining scope, difficulty, or version differences. Leave uncertain objectives unmapped.
- Show mapping coverage separately from student mastery: unmapped objectives, related-only links, and mapped objectives by syllabus.
- Warn about unsaved edits and reject stale concurrent updates rather than silently replacing another administrator's changes.
- Treat splitting and merging as a later explicit operation with impact preview and per-mapping reassignment. Historical evidence must not be copied to multiple new skills automatically.

Initial release: creation, rename, description/group edits, and manual reassignment. Structural split/merge tools follow after evidence rules are defined.

## Phase 4: Mathematics in student profiles

Integrate with existing profile navigation and track/progress services after checking their extension points.

- Show shared mathematics skills grouped by topic, with mastery level, evidence count, and an unassessed state.
- Open a skill to inspect contributing objectives, evidence, mapping relationships, and notes.
- Allow selection of Cambridge, Mongolia, or an entered examination syllabus to show its required objectives, direct progress, mapping coverage, and remaining gaps.
- Initially label pooled results as shared mastery and retain each objective's direct progress. Transferred syllabus credit requires a separately defined and tested policy for scope, difficulty, evidence, and syllabus version.
- Keep course completion separate. A related mapping contributes no pooled evidence, and one answer counts once in a shared-skill calculation.
- Show empty states for missing mappings and missing evidence; do not present either as failed mastery.

Deliverable: one Mathematics profile section with traceable shared progress and syllabus-specific views, without misleading completion claims.

## Phase 5: validation and rollout

Add meaningful coverage alongside existing curriculum, syllabus, and track tests:

- Mapping save/edit/remove, capability and nonce checks, invalid targets, and prohibited chains.
- Renaming preserves identity and mappings; equivalent evidence is deduplicated; related evidence is excluded; course completion is unchanged.
- Correct unmapped and unassessed states, syllabus-version filters, access to student data, and concurrent edit behavior.
- Browser workflow: compare two syllabuses, create a shared skill, map both objectives, rename it, reopen the workspace, and inspect student progress.

Run repository formatting and standards checks, relevant JavaScript and PHP tests, PHP syntax checks, and browser tests. Build generated assets from authored source with the repository build workflow; never edit generated bundles directly. Report existing and new violations accurately without blanket suppressions.

Validate the pilot with real imported records, then expand topic by topic. Administrator mapping saves are the explicit activation action in the first release; a separate draft/publish lifecycle is not assumed.

## Completion criteria

The administrator can compare, create, rename, map, and revise shared skills in one workspace. Source syllabus requirements remain inspectable. Student Mathematics progress explains its evidence and distinguishes shared mastery, direct syllabus progress, and mapping coverage. Existing identifiers, API behavior, question extensions, and assessment contracts remain compatible.
