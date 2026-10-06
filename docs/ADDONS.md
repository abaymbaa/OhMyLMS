# Bundled add-ons and Assessments

Skills is a core feature, like the Question Bank: it has no Add-ons card or switch, always loads, and cannot be turned off. The skill library is the Skills tab of the [Content Hub](CONTENT-HUB.md). A saved Skills switch from an older version is ignored.

MCP is another optional add-on; see [MCP setup](MCP.md).

Question Bank is a core feature. Its former add-on card, saved switch and module configuration no longer control availability. Assessment services load through the core bootstrap.

The admin submenu has one **Assessments** link, opening Quizzes first. Internal navigation contains Quizzes, Question Bank and Assignments. Original list and editor URLs remain usable. Course creation keeps its existing workflow. These features have no Pro subscription requirement; normal WordPress permissions still apply.

Later integration requirements:

- Add reusable bank questions to quizzes.
- Draw random quiz questions based on skills.
- Create questions or quizzes inside assignments.

The current change groups navigation only; the requirements above are future work.

Trusted project modules still use `OHMYLMS_ENABLED_MODULES` and `ohmylms_enabled_modules`. The core Skills module always loads, whatever is listed. The legacy `question_bank` module ID is ignored.

Run `php tests/php/addons-unit.php off`, `skills`, `bank` and `both` to check that legacy saved switches change nothing. `tests/js/assessments-hub.test.mjs` verifies the default section, all three routes and preservation of the existing screens.
