# Choice controls verification — 2026-10-09

Inspected the Wayground Multiple Select editor, including its bottom-left Multiple correct answers and conditional Allow partial grading switches. See [Wayground question types](https://help.wayground.com/support/solutions/articles/158000411419-question-types-explained) for the reference's multi-selection and partial-credit behavior.

OhMyLMS now presents both choice modes through one Multiple select entry. The existing public type identifiers and radio/checkbox player renderers are preserved. Selection-mode changes update only the selected question, preserve answer identities/content/media, and normalize correctness when returning to single selection. Partial grading is opt-in, restricted to multiple-choice grading, and reads the frozen question settings. Its net-credit formula subtracts incorrect selections and clamps at zero; unknown IDs count as incorrect, and duplicate IDs are deduplicated.

Browser checks on an unsaved draft confirmed that enabling multiple answers changes answer controls to checkboxes, permits independent correct selections, shows the partial-grading switch, and hides it when multiple answers are turned off. The unified selector displays one choice entry. No test question was saved; the previously saved comparison quiz was empty at verification time.

43 relevant JavaScript tests, 18 frozen choice-grading checks and 186 assessment checks pass. Modified editor components pass WordPress ESLint; stage CSS passes Stylelint. New PHP grading tests pass PHPCS, and the grader passes PHP syntax checks. The touched existing QuestionTypes class reports 14 legacy PHPCS errors and 8 warnings; no newly added grading lines have findings and no rules were suppressed. Production assets were rebuilt/synced, and source parsing/contract checks pass (1,563 files, 236 contracts).

## Switch flicker fix

Choice-mode changes formerly changed the QuestionForm React key, unmounting and recreating the fullscreen modal. Quiz and new-bank forms now share a stable key for the two choice modes; other response families and different question identities still receive distinct keys. New-bank creation also uses its existing outer fullscreen dialog rather than opening a second nested modal. Its adapter updates the draft's type when selection mode changes, so payload construction retains the selected mode.

Browser verification confirmed the same switch ID and retained checkbox focus after repeated off/on changes in both quiz and bank drafts. The bank form exposes two correct-answer checkboxes and only one visible dialog. Drafts were not saved. Eleven relevant JavaScript checks pass, including workspace identity, metadata preservation and prompt contracts. Production assets were rebuilt and synced; parsing and component contracts pass. The helper and FormWorkspace pass ESLint. Broader existing modules still report 59 legacy errors in QuestionCanvas and 3 in NewQuestionModal; no rules were suppressed.
