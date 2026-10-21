# Wordwall template audit and OhMyLMS implementation plan

Prepared 2026-10-21. Status: first delivery plus Hangman and Spell the word implemented; remaining phases proposed. See [first-delivery behavior and limits](WORDWALL-ACTIVITIES.md). The implementation extends Build from tiles for letters/words instead of introducing a duplicate word-builder type.

## Evidence and scope

Reviewed all 34 template cards in the signed-in Wordwall picker supplied by the user: 12 Standard and 22 Pro templates. Cross-checked the official catalogue and help pages. This is a catalogue and code audit, not a claim that every template was created or play-tested. No Wordwall resources were created or changed. Printables and classroom tools absent from this picker (for example Seating plan) are outside this inventory.

References:

- [User's template picker](https://wordwall.net/create/picktemplate?folderId=0)
- [Official plans and template inventory](https://www.wordwall.net/price-plans)
- [Official template help catalogue](https://wordwall.zendesk.com/hc/en-gb/sections/360005042778-Templates)
- [Image quiz mechanics](https://wordwall.zendesk.com/hc/en-gb/articles/360015997958--How-to-create-an-Image-Quiz-activity)
- [Wordwall features and template switching](https://www.wordwall.net/features)

Local code reviewed: `questionBlocks.mjs`, `QuestionTypeChooser.jsx`, `interactiveModel.mjs`, `extendedModel.mjs`, `Extensions/QuestionTypes.php`, `Assessment/QuestionSnapshot.php`, `Practice/QuestionPlayer.php`, `Blocks/QuestionPlayerBlock.php`, `Quiz/PlayerTemplates.php`, the current player scripts, and the existing question-type and player documentation. Existing documentation's historical format counts are not used as proof of support; the current registry and controls are the implementation references.

## Recommendation

Extend the existing native question authoring and player engine. Add five focused response/content families and a separate activity-mode registry. Do not create 34 unrelated graders or replace the current player with another isolated player.

Keep three concepts separate:

1. **Question type:** what the author defines, what response the learner submits, and how it is graded.
2. **Activity mode:** how compatible question content is presented, sequenced, revealed or turned into a game.
3. **Visual theme:** appearance only. Existing Playful, Classic, Paper and Focus designs remain themes; their current IDs and meaning must not change.

Default new game activities to practice. Accuracy, game points, time, hints and participation are separate measurements. A player mode must not silently change exam grading or mastery evidence.

## Complete template comparison

“Existing” means a native interaction exists, not identical Wordwall gameplay. Every proposed ID below is a design choice, not a shipped identifier.

| # | Wordwall template | OhMyLMS coverage and required work | Delivery |
| --- | --- | --- | --- |
| 1 | Anagram | Reorder/tile foundations exist; add Unicode-aware letter construction | `word-builder`, anagram mode |
| 2 | Spin the wheel | No dedicated wheel; reuse selected question/prompt pool | Teacher-led wheel mode; no marks for random selection |
| 3 | Open the box | No box reveal; reuse content/question items | Box-reveal mode |
| 4 | Unjumble | `reorder` and `build-expression` provide foundations | Sentence-order mode; optional accepted-order support without changing old scoring |
| 5 | Matching pairs | `matching` defines pairs; concealed memory-board play is missing | Memory-pairs mode over matching content |
| 6 | Quiz | Choice interactions and quiz player exist | Reuse; verify compatible choice configuration |
| 7 | Group sort | `categorize` exists | Reuse; add drag/tap/keyboard presentation where absent |
| 8 | Match up | `matching` exists | Reuse matching, including keyboard alternative |
| 9 | Flash cards | Paired content exists; dedicated reveal/study cycle is missing | Flashcard study mode; reveal and self-rating are not automatic correctness |
| 10 | Speaking cards | Statement/passage/manual-response foundations exist | Random prompt deck; optional teacher-marked response |
| 11 | Complete the sentence | `fill-in-the-blank` supports drag blanks; dropdown and multi-blank also exist | Reuse blank engine; verify distractors and repeated words |
| 12 | Find the match | Matching/choice content exists; eliminate-as-matched play missing | Elimination matching mode |
| 13 | Gameshow quiz | Choice questions exist; lifelines/rounds/game points missing | Gameshow mode |
| 14 | Type the answer | `short-text` is manual; exact auto-marking exists within blanks but lacks a clear dedicated format | Add `text-entry` using shared normalization, without reinterpreting historical short-text |
| 15 | Spell the word | Dedicated spelling player now reuses existing word answers | Implemented `spell-word` Question Player mode over text-entry and letter tiles; typed input |
| 16 | Flip tiles | No dedicated zoom/flip board | Reuse study deck, tile layout |
| 17 | Wordsearch | No dedicated generated word grid | New `wordsearch` type and renderer |
| 18 | Labelled diagram | `labeling` exists, currently selection controls rather than pin dragging | Extend existing labeling player with normalized target coordinates and drag/tap/keyboard input |
| 19 | Hangman | Server-checked letter guesses, six mistakes and saved progress | Implemented `hangman` Question Player mode over text-entry and letter tiles |
| 20 | Crossword | No intersecting clue/answer grid | New `crossword` type and renderer |
| 21 | True or false | `true-false` exists; timed stream is different | Timed binary-choice mode |
| 22 | Maze chase | Choice content exists; movement/collision game missing | Maze mode; accessible stationary answer alternative |
| 23 | Flying fruit | Choice content exists; moving-target game missing | Moving-target mode |
| 24 | Balloon pop | Matching content exists; motion and drop mechanics missing | Balloon matching mode |
| 25 | Pair or No Pair | Matching defines correct pairs; generated pair verification missing | Pair-verification mode with explicit correct/incorrect pair sampling |
| 26 | Rank order | `reorder` exists | Reuse; preserve current grading unless an author explicitly selects a newer policy |
| 27 | Whack-a-mole | Choice/set-classification foundations exist; repeated target gameplay missing | Target-classification mode with sufficient correct items and distractors |
| 28 | Airplane | Choice content exists; navigation/collision game missing | Flight mode with keyboard/touch and stationary alternative |
| 29 | Image quiz | Image prompts/choices exist; progressive concealment and buzzer missing | Image-reveal mode, with frozen image and timed reveal state |
| 30 | Speed sorting | `categorize` exists; speed/lives game loop missing | Timed sorting mode |
| 31 | Watch and memorize | No explicit study-then-hidden-recall interaction | New `memory-recall` type with phase-aware delivery |
| 32 | Win or lose quiz | Choice grading exists; wagering is missing | Practice-only confidence/wager mode; game stake cannot change academic marks |
| 33 | Maths generator | Variables/formulas, numerical/expression questions and seeded instances exist | Authoring wizard over existing template engine; not a new answer type |
| 34 | Word magnets | Reorder/tile interaction partly covers constrained ordering; free arrangement missing | Token-board mode; ordered answers use sequence grading, free composition is ungraded/manual |

## Five new families: editor, player, response and grading

### 1. Text entry (`text-entry`) — first priority

- Gutenberg editor: prompt, accepted answers, case/whitespace/punctuation policies, optional hints and maximum response length. Preview the exact normalization rule. Use accepted answers rather than an unrestricted regular-expression evaluator.
- Learner: text input, optional audio prompt, accessible label and feedback; normal autosave/resume.
- Private definition: accepted strings and normalized keys. Public projection: input configuration only.
- Response: one bounded string; server performs the same versioned normalization used by editor examples.
- Grade: exact accepted-answer matching. No automatic semantic or AI equivalence claim. Keep `short-text` and `long-text` manual behavior intact. Numerical and mathematical equivalence remain their existing types.

### 2. Word builder (`word-builder`) — first priority

- Shared content supports Anagram, Spell the word and Hangman modes.
- Editor: target word/phrase, clue or image/audio, accepted alternatives, language/alphabet, space/punctuation handling, hints, distractor letters and default practice mode.
- Learner: draggable letters plus tap-to-place and keyboard actions; spelling can accept typing. Repeated letters have distinct tile IDs. Show clear cursor/slot state.
- Grade: normalized constructed text against accepted answers; don't grade repeated-letter IDs as if identical letters have different meanings.
- Segment by grapheme clusters, normalize consistently on PHP and JS, support Mongolian Cyrillic including Ө/Ү, preserve author-selected case/punctuation semantics. Specify a fallback when platform segmentation differs.
- Hangman needs server-checked guess/reveal state, persisted guessed letters and mistake count. Do not ship a hidden target in the DOM and pretend it is secure assessment.

### 3. Crossword (`crossword`) — second priority

- Editor: clue/answer pairs with stable IDs, language, optional media clues, generate layout, review conflicts, manual adjustments and regenerate preview.
- Validate answer alphabet, intersecting letters, word bounds, connectivity policy and impossible layouts. Bounded seeded generation must either produce a valid layout or return an actionable error.
- Freeze the published layout; reopening/resuming an attempt must not regenerate a different puzzle.
- Learner: accessible numbered grid, across/down clue lists, active-word highlighting, touch keyboard and keyboard navigation.
- Response: bounded cell text keyed by cell ID. Grade per word, with intersections validated once; report missing/incorrect words and preserve the configured partial-credit policy. Keep answer placement private until permitted review.

### 4. Wordsearch (`wordsearch`) — second priority

- Editor: word/clue list, grid size, allowed directions, backward/diagonal policy, alphabet and generated-layout preview.
- Generate a deterministic grid under caps; detect unsupported long words, duplicates, overlaps and accidental extra occurrences according to a documented policy. Authors review before publishing.
- Learner: select start/end cells by pointer or keyboard; selected paths remain visible and can be corrected.
- Response: stable start/end coordinates or cell paths, validated against the frozen grid on the server. Grade distinct found targets; duplicate/reversed paths cannot earn repeated credit.
- The puzzle grid necessarily exposes letters from which answers can be inferred. Describe it as word-search practice, not as an answer-secret exam format.

### 5. Memory recall (`memory-recall`) — second priority

- Editor: study items, distractors, display order and study duration; first version assesses the set of items remembered. Ordered sequence recall is a separate explicit response policy if added later.
- Player phases: ready → study → hidden recall → feedback. Freeze the chosen study set and distractors per attempt.
- Resume uses server-recorded phase/deadline; refreshing cannot restart study time or award extra study exposure unnoticed. Keyboard/reduced-motion alternatives remain available.
- Response: selected opaque item IDs. Define exact-set or bounded net-correct scoring so selecting everything does not earn full credit.
- Measure memory practice separately from mastery of the item's underlying mathematics; default to no skill evidence.

## Activity player architecture

Add an activity-mode registry beside the existing question-type registry. Each mode declares supported interaction families, minimum content, media requirements, input alternatives, whether it reveals answers, scoring policy, resume state schema and bundle entry. Its compatibility function explains unavailable modes (for example no image, not enough pairs, manual-only questions or unsupported media).

Extend the existing Question Player placement and server run lifecycle with optional `activityMode` and bounded mode settings; legacy placements default to standard. Teacher-led tools use a presentation/study path rather than weakening the current QuestionPlayer eligibility guard, which excludes manually marked questions. Keep Quiz Player's attempt, enrollment and assessment policies authoritative.

Do not repurpose `player_template` to mean game mode: it currently changes appearance only. Let the author choose **Response format**, then **Play mode**, then **Visual theme**. Compatible mode switching preserves source question IDs and immutable versions. Any content conversion that changes answer structure creates a reviewed new draft, not an in-place rewrite of published questions.

Shared mode runtime owns stable item IDs, seeded shuffles, pause/reduced-motion behavior, score events, feedback, retries, focus, touch/keyboard controls and resume. Reuse it across:

- Study/reveal: Flash cards, Speaking cards, Flip tiles, Open the box, Spin the wheel.
- Pair games: Matching pairs, Find the match, Pair or No Pair, Balloon pop.
- Timed quiz/sort: Gameshow, timed True or false, Speed sorting, Win or lose.
- Visual reveal: Image quiz.
- Arcade movement: Maze chase, Flying fruit, Whack-a-mole, Airplane.
- Construction: Anagram, spelling, Hangman, Unjumble and Word magnets.

For flashcards and memory pairs, return content/reveal results through the appropriate study session contract. Do not preload a private matching key merely for game convenience. Visible study answers and assisted rounds must be recorded as such. Reuse existing server scoring; the browser's reported collision count, timer or game score is not authoritative academic evidence.

Split mode assets into lazy-loaded bundles and enqueue only the selected mode. Avoid loading all word/puzzle/arcade code into every quiz, especially given the existing bundle-size warnings. Timers and animation stop when the player unmounts; multiple player blocks on one page remain isolated.

## Mathematics generator

Build a topic/preset wizard over existing variables, constraints and seeded concrete question instances. Start with arithmetic, fractions/percentages and simple algebra using existing numerical/expression types. Provide ranges, exclusions, difficulty and answer-form controls. Show generated examples and reject impossible constraints. Preserve instance seeds, private formulas, historical versions and evidence-family rules. This is generation tooling, not another grader. No parameterized-image promise: that remains a separate capability.

## Delivery order and acceptance gates

1. **Foundation and quick reuse:** mode registry/compatibility manifest, versioned response contracts, restore state, accessible mode picker, drag-labeling enhancement, study deck and image reveal. Preserve old placements and all existing player themes.
2. **Core new types:** text entry and word builder, followed by sentence construction and pair games. Deliver complete authoring → save/reopen → publish → learner → resume → grade → report flows.
3. **Puzzles and memory:** crossword, wordsearch and memory recall. Freeze generated layouts and test phase transitions, Unicode, impossible inputs and large-but-bounded definitions.
4. **Teacher and practice modes:** wheel, boxes, magnets, Gameshow, timed sorting/binary choices, wager mode and maths-generator wizard.
5. **Arcade:** maze, moving targets, balloon physics, mole targets and flight; reuse one interaction/event runtime where practical. Ship mobile, keyboard, pause and reduced-motion equivalents alongside each game.

Within each phase, release individual modes only after their gates pass; do not show nonfunctional tiles in the production chooser.

Every new type requires:

- Server registry, settings validator, learner-safe projection, immutable publishing/media collection, versioned response normalization and grader.
- Gutenberg editor and live preview sharing schemas with bank authoring; consistent type labels. The existing chooser currently labels both choice IDs “Multiple select”; clarify this before adding more choices while preserving IDs.
- Learner renderer across quiz, practice and question-player surfaces, plus inline placements where supported. Unsupported contexts must be explicitly gated.
- Autosave/resume, required-answer checks, duplicate-submit handling, answer review, reports, partial credit and relevant skill-evidence policy.
- Tests for permission/access, private-key leakage, unknown/duplicate IDs, failed saves, shuffled content, concurrent/stale submissions, mobile and keyboard operation, and historical attempts after upgrades.
- No silent reinterpretation of old short-text, reorder, matching, quiz settings or stored answers. Snapshot and grader schema versions need an explicit compatibility strategy.

Completion means an end-to-end playable, resumable and reportable activity. A new dropdown option, theme or editor card is not sufficient.

## First implementation slice

Start with the mode foundation, `text-entry`, `word-builder`, Flash cards and Matching pairs. This adds useful recall/vocabulary mechanics with broad content reuse before undertaking the larger puzzle generators and arcade work. Follow with drag-labeling and Image quiz. Keep the full 34-template matrix above as the coverage checklist for later phases.
