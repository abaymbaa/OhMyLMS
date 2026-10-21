# Wordwall-inspired activities: first implementation

Implemented 2026-10-21. This is the first delivery of the [34-template plan](WORDWALL-TEMPLATE-AUDIT-AND-PLAN.md), not complete Wordwall parity.

## Existing blocks extended

**Build from tiles** now offers Math tiles, Words (sentence ordering) and Letters (anagram). It keeps the existing `build-expression` ID, response sequence, immutable versions and grader. New language modes use exact ordering; mathematical equivalence remains a Math-only option. Repeated letters stay separate selectable tiles, and Unicode grapheme segmentation avoids breaking combining marks. Changing mode explicitly converts the current answer and clears distractors/alternative orders; Gutenberg Undo restores the previous definition. The chooser also finds this block when searching for anagram, spelling, letters or words. Single choice and Multiple select now have distinct labels; IDs are preserved.

**Question Player** now offers Standard, Flashcards, Matching pairs, Hangman and Spell the word. Flashcards and Matching Pairs are also inserter variations of the existing `ohmylms/question-player` block. They store references and an `activityMode` attribute, not another copy of the questions or answer keys.

Use approved Matching questions with text on both sides of each pair. Select at most 24 pairs per activity. Flashcards reveal the reverse of each front card; Matching pairs hides both sides and remembers successful matches and turns. These are study activities: the server disables academic grading and skill effects regardless of submitted client flags. No grade events or mastery evidence are written. A standard placement without a mode retains its original configuration key and behavior.

Study mode reuses authenticated placement access, frozen question versions and practice-session storage. Opaque card IDs are scoped to each session; hidden backs and the private pair map are not preloaded into the browser. Reveal state is saved under a row lock with a revision. A stale/repeated request returns the current state instead of applying the action twice. Resume restores open cards, revealed backs, matched pairs and turns. Card reveals and play-again are keyboard buttons, and there is no required animation or timer. Study-player JavaScript loads only when a study run is played.

The first study release uses text pairs. Media-rich cards, self-rating, spaced repetition, free token boards and arcade modes remain later work.

## Hangman and Spell the word

These are additional inserter variations and Play mode choices on the existing Question Player block. Reuse approved **Type the answer (automatic)** questions or **Build from tiles → Letters** questions. Put a clue in the question statement; plain text is used, falling back to the title. Avoid including the answer in that clue. Media/audio clue presentation is not included in this delivery.

Each accepted answer must contain a letter and at most 64 grapheme clusters. Hangman uses the first accepted answer, ignores letter case, reveals repeated occurrences together and displays spaces, punctuation and numbers automatically. Type a single letter using the learner's keyboard; a six-step drawing and textual mistake counter track progress. Duplicate guesses do not count twice. Canonically equivalent Unicode spellings are not folded; use the same written character form as the target.

Spelling accepts a typed whole word or phrase. Automatic text questions keep their existing case, whitespace and punctuation rules and accepted alternatives. Letter-tile questions use their primary constructed answer with case-insensitive comparison; tile alternatives are not imported into spelling in this release. After six mistakes, the round ends and reveals the answer. Correct guesses also finish a round. Next word advances through the frozen selection; Play again creates a new session.

The server retains the target and checks each guess. Public Hangman state contains only revealed characters; spelling state never contains accepted answers before the round ends. Mistakes, guessed letters, the current round and completion persist under a revision-checked session lock. These modes always disable academic grading and skill effects. Their JavaScript loads separately only when a word game is played. Keyboard forms, visible labels, status announcements and a static drawing provide play without a timer or required animation.

## New response format

**Type the answer (automatic)** uses the new `text-entry` ID. Enter accepted answers, one per line, and choose case sensitivity, repeated-whitespace handling and punctuation handling. Leading/trailing whitespace is ignored. It performs literal normalized comparison, not semantic or AI grading; Short answer and Long answer retain teacher marking. Case handling supports Mongolian Cyrillic. Canonically equivalent Unicode spellings are not automatically folded by this grader; enter an alternative when necessary.

Accepted answers are private settings; learner input is limited to 2000 characters. The bounded server validator rejects empty/invalid answer lists and malformed comparison settings; the grader awards no credit to multiple submitted guesses. It participates in native authoring, live preview, immutable bank approval, quiz/practice/question-player rendering, server grading, and expected-answer reporting. Existing quiz autosave handles its conventional named input. Study progress is persisted by the study service; the standard standalone Question Player's existing draft behavior is unchanged.

## Compatibility and validation

Existing type IDs, mathematical tile grading, manual short-answer semantics, course outcomes and player themes keep their contracts. The new PascalCase PHP filenames follow the plugin's established PSR-4 class mapping; their narrow filename-sniff exception is documented in the source and this document.

Checks include language-token tests (Mongolian repeated letters and combining marks), bounded automatic-answer checks, frozen publish/player grading, private-answer projection, reveal/resume, stale and forged actions, completion without grade events, and browser playback. Use the dedicated disposable migration database for `tests/php/wordwall-integration.php`; that suite refuses other databases and rolls its fixtures back. The browser spec `tests/browser/wordwall-activities.spec.cjs` is restricted to the disposable server at port 8100 and checks the native authoring controls plus learner playback. `tests/browser/word-games.spec.cjs` additionally checks both word modes, repeated Cyrillic letters, multi-round advancement, mistake limits, refresh recovery, completion and restart.

Later delivery: crossword, wordsearch, explicit memory recall, image reveal, draggable labeling, teacher tools, maths-generator wizard and arcade modes. See the full audit matrix for scope and sequencing.
