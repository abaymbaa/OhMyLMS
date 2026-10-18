# Native Gutenberg quiz authoring

Choose **Create with Gutenberg** in Content Hub > Quizzes, or **Open Gutenberg editor** from an existing quiz. Both navigate to WordPress's actual `/wp-admin/post.php` editor. WordPress supplies the inserter, canvas, list view, toolbar, undo, revisions and post saving. There is no embedded editor provider or separate quiz canvas.

Use core headings, paragraphs, images and layout blocks for the introduction. Insert **OhMyLMS Multiple Choice** for single-choice or multiple-choice questions. **Multiple correct answers** preserves option identities. Save each question, then save the quiz; unsaved question changes lock post saving. Native block movement determines question order. The original form and custom question extensions remain available.

The native multiple-choice block uses compact answer rows. Each field has a **Format** disclosure for text and equation tools. **Settings & feedback** expands selection mode, partial grading, required/randomized answers, score, hint and explanation. Save status and optional help stay in a small footer. These controls change only editor presentation; existing question data and grading contracts are retained.

## Storage and delivery

Question blocks store only question ID, UUID and delivery mode. Prompts, answers and keys remain private in the versioned question bank, with capability checks and modified-version conflict protection. Native REST saves validate references, reject duplicate or missing questions, normalize attributes and transactionally synchronize quiz relationships. Publishing uses existing assessment revision rules. Removing a placement preserves its bank question and frozen revisions.

Core blocks become the quiz introduction; questions use the existing quiz player in placement order. They do not start lesson practice sessions. Other formats remain movable reference blocks and use their existing form editors. Duplicating a native question block shares its reference; duplicate references in one quiz are rejected. Insert a fresh block to create a new question.

Native lessons use the same block with approved-version selection, signed practice tokens and server grading. Lesson practice and quiz attempts remain separate. MathLive statement and option controls retain the equation contract and use the field's document for iframe selection and caret handling.

## Verification

Targeted JavaScript checks cover native navigation, original form routing, unavailable editor errors, reference-only storage, equations and failed save/approval retries. PHP integration on a disposable WordPress database passes 24 checks, including native REST creation, ordering, private data stripping, publishing, removal and unauthorized requests. The build passes with existing large math/vendor bundle warnings. Changed code passes targeted WordPress standards checks. Repository-wide checks still report unrelated existing violations; none are suppressed.

On 800.local, browser verification confirms **Create with Gutenberg** opens `/wp-admin/post.php?post=653&action=edit`. The native canvas now displays and accepts core paragraph content and multiple-choice questions. Question text, two answers, question saving and quiz draft saving were exercised in the browser.

Some embedded browsers fail to navigate core's blob-based canvas URL. `nativeCanvas.mjs` detects an unloaded native iframe after two seconds, reads the original core-generated blob and supplies that same document through `srcdoc`. Core's own load handler and React portal still create the editor. Healthy native canvases are untouched; there is no cloned editor or replacement document. Clipboard propagation is stopped inside question rich-text fields so Gutenberg does not treat pasted field text as a whole-block replacement. Regression tests cover recovery, healthy frames, unavailable blobs and question clipboard handling.
