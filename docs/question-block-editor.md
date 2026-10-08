# Quiz and question form editors

See [ASSESSMENT-MODULES.md](ASSESSMENT-MODULES.md) for source module boundaries, public interfaces and extension guidance.

Quizzes and the question bank use form fields, without Gutenberg. Lesson authoring continues to use its existing Gutenberg workspace.

The Questions tab shows a stack of form-style question cards. Click **Add question** for a new single-choice draft, use its type dropdown to change the response format, and click a collapsed card to edit it. Each card provides duplicate, remove, move up/down and Required controls. Duplicate creates an independent draft, including new answer rows; removing a saved question only removes its quiz placement.

Question text and quiz introductions have a title field and a description/instructions field with bold, italic, underline and bullet-list formatting. Existing saved HTML, including content previously authored with blocks, is retained. Question settings are available below the response fields. Quiz settings are below the introduction. Answer controls continue to write through the assessment engine and versioned question writer.

The quiz type dropdown includes single choice, multiple choice, true / false, short answer, long answer, fill in the blank, statement, reorder, matching, numerical and structured questions. Changing type resets that card's answer fields while preserving Required, score and practice feedback. Question bank creation retains its supported types; existing bank questions retain their saved type.

Use **Preview question** and **Edit question** to switch between editing and the learner response layout. Preview uses unsaved title, prompt and answers. Responses in preview are temporary and are neither saved nor graded. Correctness flags, numerical expected values and teacher marking notes are excluded from preview. Inline blank solutions in the title are replaced with inputs. Preview uses static prompt HTML; dynamic shortcodes and server-rendered embeds still require page preview for final output, and site theme styling may differ.

The quiz header's **Preview** button opens the shipped learner quiz player directly in an author-only preview session. Save changes first: it previews saved questions and settings. It uses the same question renderers, page layout, Next/Previous navigation, required-answer checks, matching controls, timer and Submit controls as the normal player. It does not open a course page or require **Start Quiz**, enrollment or an available learner attempt.

Submitting preview grades the frozen preview questions on the server and shows a temporary score; manual answers remain pending. It creates no learner attempt, grade event or skill evidence and does not publish a quiz revision. **Try again** starts a fresh preview; the player's close control and **Exit** return to the quiz editor. Sessions expire after one hour. Already-open editor tabs must be reloaded after an editor update to load the current Preview action.
