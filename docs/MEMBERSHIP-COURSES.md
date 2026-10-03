# Membership course selection

Membership plans combine individual courses, course categories (including descendants) and course tags. A match through any inclusion is sufficient. Explicit course exclusions take priority over every inclusion. Only published courses enter the resolved set; future matching publications are included automatically.

The Courses step restores all saved selections and previews the currently included courses with their matching sources. POST `/ohmylms/v1/membership/course-preview` computes unsaved selections without changing enrollments and requires the existing membership-editor permission.

The Courses step also provides a category mindmap with expandable branches and category course lists. The mindmap and category picker share the same selection; selecting a parent highlights inherited subcategories and updates the preview. Its reusable UI is in `assets/src/extensions/mindmap/`; the membership category adapter contains the inclusion rules. Future category and skill editors should reuse the shared mindmap.

The explicit `products` selection remains separate from `course_categories`, `course_tags` and `excluded_courses`. Metadata uses `_products`, `_course_categories`, `_course_tags` and `_excluded_courses`. `Membership::get_products('edit')` reads explicit choices for editing/persistence; its default view resolves current rules for checkout, course counts and member-facing lists. Omitted fields preserve existing selections.

Plan saves, course publication/status changes, course term assignments and category hierarchy changes synchronize membership-owned enrollment rows. Active members gain newly matching courses. Losing the last inclusion match, excluding a course or unpublishing it revokes this plan's grant, including courses already started. Progress is retained. Pending memberships remain pending; inactive memberships receive no active grant. Membership renewals retain progress while updating the order reference.

Independent course purchases, manual enrollments and other memberships are separate sources of access. Synchronization only changes rows belonging to this plan. Legacy rows can be attributed to a plan through its membership order; unscoped rows without reliable provenance are preserved.

Checks: `php tests/php/membership-selection-unit.php`, `node --test tests/js/membership-selection.test.mjs`, `npm test`, and `npm run build`.
