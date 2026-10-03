# Inline fill-in-the-blank questions

In the quiz editor, select **Fill in the blank** and write the answer in braces in the question text:

`The capital of {France} is {Paris}.`

Students see two inputs at those positions, sized for six and five characters, using the surrounding text's font and size. Each input is graded against its corresponding answer. Each correct blank earns an equal share of the question's marks. Required questions need an answer in every blank. Inputs are not length-limited.

Use **Case-sensitive answers** in the question editor to control capitalization. It is on by default to preserve existing grading. Turn it off to accept both `Paris` and `paris`; Unicode capitalization, including Mongolian, is supported. The setting is saved with the question and its frozen versions, and also applies to legacy blanks.

The authored question title, including braces, is persisted and frozen with question versions. Learner delivery replaces the answers with text segments and character counts; expected answers are not sent to the student. Editing the current draft does not change grading for an existing frozen attempt.

Questions without brace answers retain their legacy separate answer fields and grading. Empty braces and unmatched braces remain literal text. Put brace answers in the question title, not its description, HTML attributes, or nested markup.

Run `php tests/php/inline-blanks-unit.php` for parsing, rendering, frozen-delivery privacy, required-blank, and grading checks.
