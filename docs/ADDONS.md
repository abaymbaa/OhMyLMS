# Skills and Question Bank module structure

Skills and Question Bank are bundled optional modules controlled independently
in OhMyLMS > Addons. Both default to off. Their cards explicitly state that
feature screens are planned. This change provides structure and switches only.

The switches persist in `ohmylms_integrations` using `skills` and `question_bank`
keys. Switch changes request an admin reload, matching the existing Add-ons
workflow. Both shipped and source assets use the server-provided manifest.

Each enabled module loads its own entry point during `plugins_loaded`:

- `modules/skills/module.php` emits `ohmylms_skills_module_loaded`.
- `modules/question_bank/module.php` emits `ohmylms_question_bank_module_loaded`.

Future services should register their hooks from the relevant entry point.
Neither module currently creates taxonomies, screens, tables, questions or
mastery records. Turning a switch off simply prevents that entry point from
loading on the next request; it does not delete data or affect core quizzes.
Each switch works independently, with no dependency between the modules yet.

The loader uses a fixed list of bundled IDs. Client-supplied class names never
load module code. Trusted project modules still use `OHMYLMS_ENABLED_MODULES`
and `ohmylms_enabled_modules`; bundled IDs follow their saved switches even
when listed in that configuration.

Run `php tests/php/addons-unit.php off` and repeat with `skills`, `bank`, and
`both` to verify independent loading, manifest state and idempotent loading.
Future feature requirements remain recorded in DEVELOPMENT.md.
