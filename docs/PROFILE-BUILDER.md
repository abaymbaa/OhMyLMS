# Profile Builder

Administrators arrange the learner dashboard in the block editor. This first version covers the **student dashboard**; teacher, parent and school layouts reuse the same framework and are not built yet.

Admin page: **OhMyLMS → Profile Builder** (`edit.php?post_type=ohmylms_profile`). Open **Student dashboard** to edit it, or use **Reset to default** in the list to restore the shipped layout (earlier versions stay in the post's revisions).

## How it works

- A layout is one `ohmylms_profile` post per role (post meta `_ohmylms_profile_role`), created from the shipped default the first time an administrator opens the list. It is a **private** post, so only administrators can read or change it, including over REST. Layouts cannot be deleted, only reset.
- The layout is block markup. `templates/profile/student-dashboard.php` prints the dashboard frame (theme data, celebration popup) and renders the saved layout with `do_blocks()`.
- Every section is a **dynamic block** rendered on the server by a template in `templates/profile/sections/` (themes can override them in `yourtheme/ohmylms/profile/sections/`). Blocks are registered with `supports.autoRegister`, so there is no editor JavaScript to build: the editor shows a live server-side preview.
- A layout only decides *which* sections appear and in what order. Each section still decides, on the server, what the signed-in learner may see (for example achievements appear only when badges, streaks or levels are on). Guests see nothing.
- A saved layout is used only while it is active (private or published) and not empty. A draft or an empty layout falls back to the shipped default, so the dashboard never renders blank.
- The **Profile greeting** and **What should I work on?** blocks are locked against removal. Other blocks can be removed, moved or wrapped in ordinary core blocks such as Group and Columns. Each profile block can appear once.
- The `ohmylms/profile-*` blocks are available only inside profile layouts, not in posts or pages.

## Sections (student)

| Block | Shows |
| --- | --- |
| `ohmylms/profile-greeting` | Avatar, name and the background theme picker |
| `ohmylms/profile-work` | Continue learning, recent skills, recommendations |
| `ohmylms/profile-goals` | Points and level, streak, next milestone, course counts |
| `ohmylms/profile-week` | This week's practice answers, skills and active days |
| `ohmylms/profile-achievements` | Bonus points, level, badges |
| `ohmylms/profile-leaderboards` | Top learners of an enrolled course with a leaderboard |
| `ohmylms/profile-skills` | All skills with level and practice links |
| `ohmylms/profile-bundles` | Followed and suggested Course Bundles |
| `ohmylms/profile-memberships` | Memberships (Pro) |

The default layout reproduces the previous dashboard exactly; `tests/php/profile-builder-integration.php` renders the previous template (from git) and the new layout and compares them.

## Code

`includes/ProfileBuilder/`: `Layouts` (post type, storage, reset, permissions), `Defaults` (shipped block markup), `Blocks` (block registration and restrictions), `Sections` (the shared template context and section rendering).

The post type maps only the plural capabilities (`edit_posts`, …) to `manage_options`. It must not override `edit_post`, `read_post` or `delete_post`: that would make every `manage_options` check resolve through them. The integration suite checks that `manage_options` still behaves normally.

## Known limitations

- The editor preview uses the dashboard stylesheet but not the dashboard wrapper, so spacing and typography in the editor differ from the page.
- Only the student role has a layout. Teacher, parent and school dashboards need their own sections and, for parents and teachers, server-side checks that limit what they may see to their linked children or classes.
- One layout per role for the whole site; there is no per-school or per-user layout yet.
- A section's own content (for example the number of recent skills) is not configurable yet.

## Validation

```
OHMYLMS_TEST_CREDENTIALS=… php tests/php/profile-builder-integration.php
```

37 checks on the isolated site: block registration, default order and locks, one post per role, permissions (including REST), the same-markup comparison, saved/empty/draft layouts, reset, block restrictions and the editor preview endpoint.
