# Syllabuses: skill groups, skills and CSV import

Any item in the **Curriculum** tab of the [Content Hub](CONTENT-HUB.md) can be a **syllabus**: Cambridge → IGCSE → Mathematics 0580, or a national grade 11 programme. A syllabus has its **contents** (topics or chapters), its **skill groups** and its **skills**, and the whole thing can be loaded from a CSV file. Syllabus names, codes and examples in this page and in the tests are made up to show shapes; they are not syllabus definitions.

## How a syllabus is laid out

```
Cambridge                       framework   ┐
└─ IGCSE                        qualification│ ordinary curriculum items
   └─ Mathematics 0580          subject      ┘  ← switched on as a syllabus
      ├─ 1 Number               topic        ┐ contents: ordinary items beneath the syllabus
      │  ├─ C1.1 Types of number              ┐ skill groups (named, coded, ordered)
      │  │   ├─ C1.1.1 Identify natural numbers   ┐ skills (library skills, ordered)
      │  │   └─ C1.1.2 Identify prime numbers     ┘
      │  └─ C1.2 Sets
      └─ 2 Algebra and graphs
```

- **A syllabus is any item.** Open an item with **Edit** and tick **This item is a syllabus**. It saves at once and keeps the item's own type (a "subject" stays a "subject"); it gets a **Syllabus** badge and a **Syllabus content** section. Items typed "syllabus" before this existed were switched on automatically.
- **Contents** are the items beneath the syllabus, added with **Add content** in the **Syllabus content** section (a syllabus row in the tree has no **Add child** button; it is a place for skill groups and skills). A content item is an ordinary curriculum item, so it keeps its own **Add child** for sub-topics, can be moved and reordered, linked to courses and put in Learning Tracks. A CSV import creates them too.
- **Skill groups** sit under the syllabus or under one of its contents. A group has a name, an optional code and optional notes, and is ordered among the groups beside it. A group given only a code is named by its code.
- **Skills** are placed in groups, in order. A skill has a name (the learning objective), an optional **code** and optional notes or examples.

The two references this was designed from fit this shape: a Cambridge IGCSE syllabus is topic → coded section (C1.1) → objectives, and the Mongolian grade 11 skill list is chapter (11.1) → skill group (М11.1А) → atomic skill (М11.1А1).

## Skills are real library skills

Skills created for a syllabus are ordinary skills in the skill library (Content Hub → **Skills**), so questions, lessons, practice and learner evidence work on them like any other skill.

- Each syllabus has one **root skill** in the library, named after the syllabus, created the first time a skill is added. Its skills are the root's children, so the library tree reads Syllabus → skills, and the same objective text in two syllabuses is two separate skills (skills are never merged by name; use [skill mappings](CURRICULUM-TRACKS.md) to relate them).
- **Names may repeat inside a syllabus** (the same objective in a Core and an Extended section); the **code** tells them apart. **Codes are unique within a syllabus**, ignoring case.
- A skill's name, code and notes are edited in the syllabus; the library shows the same values.
- **Removing a skill from a group, or deleting a group, never deletes the skill.** It stays in the library with its questions and evidence. Delete it there if you want it gone.
- An existing library skill can be placed in a group (**Add skill → Or add a skill that is already in the skill library**). It stays one skill; it can be in one group per syllabus.

## The outline editor

In the item's editor, **Syllabus content** lists contents, groups and skills. Large syllabuses open with their groups closed (**Open all groups** / **Close all groups**).

| You want to | Do this |
| --- | --- |
| Add a topic or chapter | **Add content** at the top |
| Add a skill group | **Add skill group** at the top (to the syllabus) or beside a content item |
| Add a skill | **Add skill** on its group |
| Change a group or skill | **Edit** on the row |
| Reorder, move to another group or content item, remove or delete | Inside the **Edit** form (rows stay quiet so a long syllabus is easy to scan) |
| Back up or edit in a spreadsheet | **Export CSV**, in the same layout the importer reads |
| Start a file | **Download template** |

A syllabus that still has skill groups cannot be switched back into an ordinary item; remove its groups first. Deleting an item that has skill groups says so and asks you to confirm.

## Importing from CSV

**Import CSV** opens a four-step dialog. Nothing is saved until the review is clean.

1. **Choose the file.** UTF-8, comma, semicolon or tab separated (Mongolian and other scripts are fine; save a spreadsheet as "CSV UTF-8"). Up to 5 MB and 5,000 rows per file; split a bigger syllabus into parts.
2. **Tell us what each column holds.** Columns are recognised from their titles ("Skill ID", "Ref", "Atomic Learning Objective", "Chapter", "Topic", "Section code", "Notes and examples" and similar) and you can change any of them. A **Skill** column is required; everything else is optional. Two options help with spreadsheets: *the first row holds column titles*, and *an empty content or group cell repeats the one above it* (for merged cells; only on rows that have a skill, and a group only continues within the same content).
3. **Review.** The file is checked on the server as a dry run: how many contents, skill groups and skills would be **new**, **updated**, **moved** or **unchanged**, plus every problem with its row number. If any row has a problem nothing is imported.
4. **Import.** Applied in one transaction: it either all happens or none of it.

### The columns

| Column | Meaning |
| --- | --- |
| Content code, Content | A topic or chapter. A path such as `Paper 1 > 1 Number` nests (the code belongs to the last level). Empty = directly under the syllabus. |
| Skill group code, Skill group name | A section or skill family. A code with no name names the group. Empty (on a row with a skill) = a group called "Skills" under that content, with a warning. |
| Skill code, Skill | The learning objective and its code. A code with no skill name is an error. |
| Notes | Notes or examples for the skill. |

```csv
content_code,content,group_code,group,skill_code,skill,description
1,Number,C1.1,Types of number,C1.1.1,Identify and use natural numbers,e.g. convert between numbers and words
1,Number,C1.1,Types of number,C1.1.2,Identify and use prime numbers,
11.1,Квадрат тэгшитгэл ба тэнцэтгэл биш,М11.1А,,М11.1А1,Квадрат тэгшитгэлийн графикийг зөв зурах.,
```

### Importing again is safe

An import **never deletes anything**: what the file leaves out stays. Rows are matched to what the syllabus already has:

- a content item, group or skill matches by its **code** when both have one, otherwise by its **name** (ignoring case and spacing);
- a skill with a code is found **anywhere in the syllabus**, so a skill whose code now sits under another group is **moved**, not duplicated;
- a match whose text differs is **updated** to the file's text (empty notes in the file never blank existing notes);
- the same skill code under two different groups in one file is an error, and an identical repeated row is ignored with a warning.

So importing the same file twice reports "nothing to import", and a corrected or extended file updates the syllabus in place.

## Where syllabus skills show up

- **Learning Tracks.** A syllabus's skills (and those of its contents) count as the skills of that curriculum item on a learner's track dashboard, and a skill shows the content item it belongs to.
- **Skill library.** Under the syllabus's root skill, with their codes.
- The Curriculum tree shows each syllabus with its number of skill groups and skills.

## REST API (`ohmylms/v1`, administrators only)

All routes are under `curriculum/items/{id}/syllabus` (`{id}` is the syllabus). Every write answers with the syllabus's fresh outline and the item tree.

| Route | Purpose |
| --- | --- |
| `GET …/syllabus` | The outline: contents (the syllabus first, with `depth`), each with `groups`, each with `skills`; totals; the root skill |
| `POST …/syllabus/groups` | Add a group (`name`, `code`, `description`, `item_id`, `position`) |
| `PUT/DELETE …/groups/{group}` | Edit a group; delete it (a group holding skills needs `confirm`) |
| `POST …/groups/{group}/move` | `item_id` and `position` |
| `POST …/groups/{group}/skills` | Create a skill (`name`, `code`, `description`) or place an existing one (`term_id`) |
| `PUT …/skills/{term}` | Edit a placed skill's name, code or notes |
| `DELETE …/groups/{group}/skills/{term}` | Take a skill out of the group (it stays in the library) |
| `POST …/groups/{group}/skills/{term}/move` | `group_id` and `position` |
| `POST …/syllabus/import` | `rows` and `dry_run`; answers a `report` (counts, `errors`, `warnings`, `applied`) |

`PUT curriculum/items/{id}` also accepts `is_syllabus`. Skill names and notes from the skill API (`skills`) and the curriculum skill pickers are returned as plain text (`a > 0`), not as the HTML entities WordPress stores (`a &gt; 0`).

## Storage

Schema version 2 of `OhMyLMS\Curriculum\Schema` (applied on the next page load, safe to repeat): two columns on `ohmylms_curriculum_items` (`is_syllabus`, `skill_root_id`) and two tables, `ohmylms_syllabus_groups` and `ohmylms_syllabus_group_skills` (the ordered placements). Skills themselves are terms of the `ohmylms_skill` taxonomy with the code in `_ohmylms_skill_code`; the root skill is marked with `_ohmylms_syllabus_item`. Deleting a curriculum item removes its groups and placements; deleting a library skill removes its placements.

Skills created here get a short slug of their own. WordPress derives one from the name, which for long names in Cyrillic and similar scripts is URL-encoded and cut at 200 characters; two objectives that begin the same then collide and the insert fails.

## Source

- PHP: `includes/Curriculum/Syllabus.php` (outline, groups, skills, import), `SyllabusRows.php` (cleans and checks rows), `SyllabusPlan.php` (matches rows against the syllabus and plans the operations; shared by the dry run and the import), controller `includes/Rest/V1/SyllabusController.php`. `Links::object_ids()` and `Links::memberships()` include syllabus skills.
- Admin UI: `assets/src/features/curriculum/` — `SyllabusPanel.jsx`, `SyllabusForms.jsx`, `ImportDialog.jsx`, `csv.mjs` (parser, column detection, export), `syllabus.mjs` (helpers), `download.mjs`.

## Validation

```sh
node --test tests/js/syllabus.test.mjs tests/js/curriculum.test.mjs tests/js/content-hub.test.mjs
php tests/php/syllabus-unit.php
OHMYLMS_TEST_CREDENTIALS=/path/test-credentials.json php tests/php/syllabus-integration.php
OHMYLMS_TEST_CREDENTIALS=... OHMYLMS_CHROMIUM_PATH=... npx playwright test tests/browser/syllabus.spec.cjs --workers=1
```

The integration suite refuses any database other than `ohmylms_source_test`. It covers the flag and its guard, group and skill editing, equal names and unique codes, maths and Cyrillic text, long names that begin alike, a dry run that changes nothing, an import applied, repeated and edited, a refused file, an import that fails part-way and rolls back (including the library skills it created), the Tracks and membership integration, deletion, and permissions.

## Known limitations

- PDF syllabuses are not read by the app; they are converted to CSV first (send one to a developer or assistant to convert and review).
- Skill groups are not nested inside each other, and a skill is in one group per syllabus.
- Reordering uses the Move up and Move down buttons in the edit form, not drag and drop.
- An import never deletes, so removing a skill from a syllabus is done in the outline.
- The Content Hub's course catalog does not yet offer a syllabus's groups as a unit (skills are picked one at a time).
- New strings are not yet in `languages/ohmylms.pot`.
