# Question bulk import

Adds past papers or any other questions to the question bank from CSV or JSON. Every row is
checked first (a dry run); nothing is written until you ask for it. Uploading the same rows
again updates the same questions instead of creating duplicates.

Where: **OhMyLMS > Import questions** (admin page), or `POST /wp-json/ohmylms/v1/question-bank/import`.
Who: anyone who can edit posts. Each question is saved through the same writer the question
editor uses, so ownership, bank permissions, validation, versioning and skill mapping all apply.

## Row format

One row is one question. CSV needs a header row; JSON is a list of objects (or `{"rows": [...]}`).
Column names are case-insensitive; spaces and dashes are read as underscores.

| Field (aliases) | Meaning |
|---|---|
| `exam`, `paper`, `year`, `section`, `number` (`question_number`, `no`, `q`), `language` (`lang`) | Identify the question. **Number is required, plus an exam or a paper name.** Language defaults to `en`. These six fields form the import key, so the same exam/paper/year/section/number/language always means the same question. Kept on the question for rebuilding papers later. |
| `type` | `single-choice` (default), `multiple-choice`, `true-false`, `numerical`, `fill-in-the-blank`, or any other registered question type (see below). |
| `question` (`body`, `stem`) | The text learners see. For `fill-in-the-blank`, put each answer in braces: `The capital is {Paris}.` |
| `title` | Optional admin title. Default: exam, paper and year plus Q number. |
| `answers` (`choices`) | Answer texts separated by `\|`. True/false needs none. |
| `correct` (`answer`, `key`) | A letter (`B`), a 1-based number (`2`), or the answer text. Several with `\|` for multiple choice. For `numerical` it is the number (a decimal comma is accepted). |
| `tolerance`, `tolerance_type` (`absolute` or `relative`), `unit` | Numerical questions only. |
| `skills` (`skill`, `skill_codes`) | Skill codes, UUIDs or `#termID`, separated by `;` or `,`. **The first is the primary skill**, the rest supporting. At least one is required: a question without a skill cannot count toward progress. A code shared by several skills is rejected; use the UUID. |
| `family` (`family_id`) | Groups variants of the same question. Practice needs at least two families per skill, so give unrelated questions different families (or leave blank). |
| `difficulty` | `easy`, `standard` (default) or `challenge`. |
| `marks` (`score`, `points`) | Score for the question. |
| `explanation` (`solution`) | Shown after answering in practice. |
| `image` | A media library image ID or URL (upload the screenshot first). Becomes the question image. |
| `confidence`, `notes` (`ai_confidence`, `ai_notes`, `rationale`) | For AI-classified rows: how sure the classifier is (0 to 1) and why it chose those skills. Shown to the reviewer; they are not part of the question, so changing only these does not update a question. |
| `settings`, `options_raw` | JSON, for question types that are not listed above. `settings` is the type's settings object; `options_raw` is its list of `{answer, is_correct}` rows if it uses options. |

Example (CSV):

```
exam,paper,year,section,number,type,question,answers,correct,skills,family,difficulty
Digital SAT,2023-03 US,2023,Math M1,1,single-choice,"What is 2+2?",3|4|5|6,B,ALG.1,add-1,easy
```

## Checking and importing

1. **Check rows** reports for every row: will create, will update, no change, or error with the reason. Nothing is written.
2. **Import** writes. If any row has an error, **nothing is imported** unless you tick *Import the valid rows even if other rows have errors*.
3. *Approve imported questions* approves each new or changed question so it can be used in practice and exams. Without it, questions stay drafts of their approval and are not drawn into practice.
4. *Update questions that were imported before* controls whether changed rows overwrite the existing question. With it off, changed rows are reported as "no change".
5. Choose a **bank** to put questions in a shared question bank (you need edit permission on it).

The admin page accepts up to 1000 rows per submission and checks every batch before writing the first one.
The REST route accepts up to 200 rows per request; split larger files into batches and send each with `dry_run: true` first.

## REST

`POST /ohmylms/v1/question-bank/import` with `rows` (decoded list) or `text` plus `format` (`auto`, `json`, `csv`), and:
`dry_run` (**defaults to true**; send `false` to write), `bank_id`, `approve`, `update_existing` (default true), `skip_invalid`.
The response lists each row with `row`, `key`, `status` (`create`, `update`, `unchanged`, `error`), `id`, `errors`, `warnings`,
plus `counts`, `committed`, `approved`.

## What is stored

Each question gets `_ohmylms_import_key` (the identity above), `_ohmylms_import_hash` (a fingerprint of what was written, so identical re-uploads are skipped) and
`_ohmylms_import_paper` (exam, paper, year, section, number, language). The bank's `source` field holds a readable
"Exam · Paper · Year · Section · Qn" string, and `family_id` and `difficulty` use the bank's existing attributes. Nothing is added to the database schema.

## Behaviour worth knowing

- **Manual types** (`short-text`, `long-text`) are accepted with a warning: they are marked by hand, so they are never used in practice and never move SmartScore.
- **Editing and status:** the existing question writer sets a question's post status to *draft* whenever its content is saved. The import puts imported questions back to *published* after writing.
- **Changed questions** get a new version. With *Approve* ticked, the new version is approved; otherwise the previously approved version stays in use.
- **Other question types:** any type registered through the extension registry can be imported by giving its `settings` (and `options_raw`). The writer validates them with the type's own rules.
- **AI classification and review:** import through the MCP tool (`import_questions`) always flags questions for review and never approves them. The admin page lists them under **Waiting for review** with the skills the AI chose, its confidence and its notes; *Approve selected* approves the current version, *Keep as draft* only removes the flag. See `docs/MCP.md`.
- **Not included yet:** translations of a question, an Exam content type, bulk PDF/page attachments, reading questions out of a PDF. See `CONTINUE-LEARNER-HUB.md`.
