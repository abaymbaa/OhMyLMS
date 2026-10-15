# OhMyLMS learner experience transition plan

Status: **planning draft; application implementation has not started**.

Last updated: October 15, 2026, Asia/Ulaanbaatar.

Start/resume checkpoint: `CONTINUE-LEARNER-HUB.md` at the repository root.

## 1. Intended outcome

Create one coherent learner application using Khan Academy's observed navigation,
layout, course browsing, and activity transitions as the main reference. Add
OhMyLMS Membership to that experience. Retain one WordPress entry page and the
existing shortcode, while replacing the legacy visible screens inside it.

The current initial hub is functional, but wrapping the old profile, catalog,
course-list, and dashboard templates does not satisfy this next design direction.
Reuse trusted services and records underneath a new presentation layer.

The user explicitly requested planning before further application changes.

## 2. Scope and boundaries

### Included

- Learner shell, class interface, and independent learning.
- Subject library, course overview, units, skills, and activity entry/return flow.
- Coherent learner presentation for courses, roadmaps, and course bundles.
- History, achievements, profile/settings, and approved parent connections.
- Membership as a visible menu section.
- Administrator customization of supported navigation, labels, and appearance.
- Compatibility for existing URLs, shortcodes, enrollments, and learning records.

### Excluded for now

- Teacher tools or a teacher-dashboard rebuild.
- Copying Khan Academy's educational content, brand, proprietary assets, or data.
- A new learner AI tutor merely to match the reference menu.
- New counselor permissions, shared class-code issuance, automated invitation
  emails, or roster imports without separate scope and access requirements.
- Changes to scoring/mastery/evidence contracts or automatic completion rules.
- Deleting existing courses, curriculum items, bundles, pages, or identifiers.

Parent connections are included through existing approved relationships. This
does not imply unrestricted parent editing of the learner's whole account.

## 3. Proposed navigation

The following is a proposal to discuss, not a frozen implementation contract.

| General learner navigation | Purpose |
|---|---|
| My learning | Followed/enrolled courses and paths; continue independently |
| Classes | Selected class, assigned work, approved connections, joining |
| Browse subjects | Subject hierarchy → courses; access to roadmaps/collections |
| Skills | Learner skill discovery/progress if useful as a primary destination |
| Achievements | Supported badges, streaks, XP, certificates |
| History | Activity and results with meaningful filters |
| Membership | Current plan/access, renewals, purchases and invoices |
| Settings, placed lower | Account, appearance, notifications and connections |

Do not force all eight items into equal top-level tabs if it makes the interface
crowded. Skills may fit within the library/course context; that is an open decision.

### Context changes

1. **General context:** persistent learner sidebar and account controls.
2. **Library/course context:** subject/course navigator with a clear route back
   to general navigation; course overview and unit accordions in the main area.
3. **Activity context:** focused player, exit control, lesson navigation and
   genuine completion/attempt actions, preserving course/unit return context.

Membership and Settings must remain reachable without confusing course navigation.
Mobile navigation should preserve the same destinations with a collapsible rail.

## 4. Entity mapping: avoid a destructive rewrite

| Learner concept | Existing source | Proposed treatment |
|---|---|---|
| Subject / qualification / grade grouping | Curriculum items, hierarchy, course placement | Library groups and breadcrumbs |
| Course | Existing course post and published learning program | Primary teachable course with overview and units |
| Unit | Existing chapter and its program placements | Learner label for a chapter; retain stored/public IDs |
| Skill | Shared skill term and existing mappings/mastery | Reusable learning target; level/evidence stay service-owned |
| Lesson / quiz / assignment / practice | Existing content and versioned assessment services | Activities placed within units or attached to skills |
| Roadmap | Existing curriculum roadmap and ordered shared-skill references | Ordered skill path that can span sources/courses |
| Course bundle | Existing curated course/curriculum membership | Collection/program landing page and optional follow action |
| Membership | Existing commerce plans, subscriptions, ownership and access | Commerce/account section, separate from learning structure |

Important distinctions:

- A roadmap is not automatically a course. It may order skills across courses.
- A bundle is not automatically a membership plan. Following it does not buy,
  enroll, grant access, or complete anything.
- Course progress, skill mastery, and engagement are different measurements.
- Reusing a shared skill must not duplicate or falsely merge its evidence.
- Chapter → Unit can be a presentation change; no database rename is needed.
- A published program version remains the learner enrollment's learning contract.

Before changing stored relationships, produce an explicit migration proposal,
impact inventory, backup/rollback approach, and tests. None is approved yet.

## 5. Course, roadmap, and bundle experience

### Course

- Subject/course breadcrumb and context sidebar.
- Title, useful description, unit/skill counts when supported by real data.
- Continue/start action respecting enrollment and content access.
- Skill progress summary separate from activity completion.
- Expandable units with lesson, practice, quiz and assessment entries.
- Unavailable content handled without revealing protected content or draft text.
- Existing enrolled learners see their enrollment's program version.

### Roadmap

- Distinct path heading and explanation.
- Ordered stages/skills, optionally grouped by existing topics.
- Current learner's supported mastery state and next useful action.
- Links to permitted learning activities that develop each skill.
- Clear source/curriculum context without exposing internal mapping jargon.
- Missing mappings/content are honest empty states, not invented progress.

### Bundle / collection

- Title, description, ordered visible courses and included curriculum context.
- Per-course progress and entry points; avoid an invented aggregate percentage.
- Follow/unfollow only changes the learner's collection list.
- Locked courses explain their actual membership/enrollment requirement.
- Membership purchase and course enrollment remain explicit separate actions.

### Library

- Search and expandable curriculum/subject groups.
- Clear course links and a selected course state.
- Discoverable paths and collections without presenting them as interchangeable.
- Large catalogs need pagination or bounded loading and reliable empty states.
- Use `Curriculum\Placement`, `Items`, and `Links`; do not revive retired course
  categories/tags or guess a new subject from title text.

## 6. Class and independent learning

### Classes

- Active class selector and consistent selected-class context.
- Assigned work and relevant due dates/status.
- A useful library action when the class has no work.
- Current approved teacher/guardian connections in an appropriate account area.
- Existing invitation acceptance only, unless a new join-code model is scoped.

### Independent learning

- Course discovery, continue learning, and supported practice without a class.
- Distinguish previewing, following/pinning, enrollment, and purchasing.
- Independent progress must not become visible to staff/parents solely because
  the UI shows them as a connection. Follow the existing school data scopes.
- Revoking a class or guardian relationship must take effect immediately.

## 7. Settings and Membership

### Settings/profile replacement

Use new learner-facing layouts and forms rather than rendering the old profile
shortcode/template. Decide the required fields and supported actions first.

- Account basics: display name and approved profile fields.
- Appearance: light/dark/system if supported; administrator branding remains separate.
- Notifications: only real supported preferences.
- Classes/connections: approved relationships and their actual scope.
- Password/email/linked login changes: existing secure services or explicitly
  designed validated endpoints, including reauthentication when needed.

Avoid creating controls that only change the browser while appearing saved.

### Membership menu

- Visible main destination when commerce is enabled.
- Current membership/subscription state and dates from the owning records.
- Available plans and a valid purchase/renewal/manage route.
- Purchases and invoices may be secondary views in this section.
- Ownership checks apply to every displayed order, invoice and subscription.
- Payment/cancellation/refund operations retain existing nonce/capability and
  business rules; the visual redesign must not bypass them.
- Empty and commerce-disabled states must be intentional.

## 8. Implementation architecture

### Keep

- `includes/Student/Hub.php`: entry point, compatibility, settings and current
  nonce/capability behavior, refactoring carefully as responsibility grows.
- Existing learning, school, curriculum, bundle, commerce, assessment and
  engagement services as authoritative sources.
- One canonical WordPress page and `[ohmylms_student_hub]` compatibility.

### Replace incrementally

- Visible learner templates and navigation in `templates/student-hub/`.
- CSS/interaction layer in authored source.
- Direct rendering of `profile/my-courses.php`, old profile/account views,
  `ShortcodeCourseList::output()`, and legacy dashboard widgets in the new hub.

### Suggested separation

1. Route/state parsing with allowlisted section/type/ID parameters.
2. Read-model adapters for library, course outline, roadmap and collection.
3. Presentation components/templates that receive normalized data.
4. Small authenticated mutation endpoints reusing existing policies.
5. Shared design tokens and reusable navigation, panel, accordion, row, badge,
   empty-state and form components.

Choose server-rendered progressive enhancement versus a dedicated front-end entry
after checking the repository's build/source conventions. The current hub is
server-rendered; a new app entry needs explicit loading, routing, accessibility,
error states, asset generation and meaningful tests. Do not use iframes to hide
old student pages inside the learner application.

## 9. Resumable implementation slices

All slices below are **not started**. Each should finish with a usable result,
targeted validation, and an updated root checkpoint.

### Slice A — shared shell and design tokens

- [ ] Agree navigation and default landing behavior.
- [ ] Build the persistent desktop rail, lower Settings/account area and mobile rail.
- [ ] Define spacing, typography, surfaces, borders, selected/focus states, icons.
- [ ] Define light/dark appearance behavior and administrator branding interaction.
- [ ] Preserve the existing canonical entry and customization compatibility.

Acceptance: consistent shell on desktop/mobile; keyboard reachable navigation;
no dead menu items; no accidental membership/access changes.

### Slice B — class landing screen

- [ ] Replace the current generic class layout with the reference's work-plus-summary layout.
- [ ] Preserve selection across assignment/connection navigation and page reloads.
- [ ] Handle no class, no assignments, archived class, revoked membership and pagination.
- [ ] Display only supported mastery/engagement summaries with accurate labels.

Acceptance: a synthetic two-class learner can switch reliably; another learner
cannot see the work; self-paced library remains reachable without a class.

### Slice C — subject library

- [ ] Normalize published course grouping through curriculum placement.
- [ ] Build subject expansion, search, course links and return navigation.
- [ ] Define entry points for paths and collections.
- [ ] Bound loading and avoid one-query-per-course metadata/placement lookups.

Acceptance: public draft/private records stay hidden; empty/large catalogs work;
curriculum grouping matches existing records and does not duplicate courses.

### Slice D — course and unit navigator

- [ ] Build course-context navigation and course overview.
- [ ] Read published/enrollment-pinned program versions correctly.
- [ ] Render unit accordions and activity/skill rows.
- [ ] Connect continue/start and focused player return context.
- [ ] Show course challenges only when a real configured assessment exists.

Acceptance: units preserve order; two enrollments using different program versions
retain their own contracts; protected content stays protected; exit returns to
the correct course/unit without submitting or completing work.

### Slice E — roadmap path view (DROPPED October 15, 2026)

The user decided roadmaps are shared-syllabus mapping infrastructure, not learner courses.
Do not build this slice. Exclude roadmap courses from every learner list. Keep only the
requirement that mastery shown in one course reflects mapped evidence from other courses.

- [ ] Read the existing ordered shared-skill references and source context.
- [ ] Group/label stages using actual topic structure where available.
- [ ] Connect authorized learning/practice actions.
- [ ] Represent not-assessed/missing-content states accurately.

Acceptance: no copied skills or changed mappings/evidence; existing ordered paths
and shared skill IDs remain intact.

### Slice F — collection/bundle view

- [ ] Build collection landing and visible member courses.
- [ ] Integrate current follow/unfollow APIs.
- [ ] Distinguish followed, enrolled, locked and completed states.
- [ ] Reuse per-course progress; avoid invented aggregate scores.

Acceptance: following/unfollowing changes no enrollment, membership, evidence or
completion record; draft bundles and protected course content stay hidden.

### Slice G — My learning

- [ ] Agree whether saved courses differ from enrollments.
- [ ] Implement continue and the agreed followed/pinned/enrolled collections.
- [ ] Keep independent learning prominent and usable with no school relationships.

Acceptance: persistence survives reload; one learner's saved list is isolated;
choosing a course does not silently purchase/enroll unless explicitly intended.

### Slice H — skills, history and achievements

- [ ] Give skills a consistent learner-facing level/evidence presentation.
- [ ] Design history overview/results filters from available activity records.
- [ ] Rebuild achievements from supported badges/XP/streak/certificate services.
- [ ] Preserve distinctions between mastery, attempts, progress and engagement.

Acceptance: figures match service outputs; no arbitrary score conversion; private
activities stay scoped to the learner and authorized relationships.

### Slice I — profile/settings

- [ ] Agree fields/actions and replace legacy profile rendering.
- [ ] Implement validated saves, visible success/error states and persistence.
- [ ] Add appearance and existing notification/connection preferences.
- [ ] Test authentication-sensitive actions separately if included.

Acceptance: CSRF and ownership checks pass; partial updates preserve unrelated
profile fields; no new credential or parent permissions are implied by the UI.

### Slice J — Membership

- [ ] Promote Membership into the agreed main navigation.
- [ ] Add plan/subscription overview and owned purchases/invoice subviews.
- [ ] Connect to existing valid checkout/manage flows.
- [ ] Test disabled commerce, no plan, expired plan and another customer's invoice.

Acceptance: ownership/access are unchanged; no fake successful payment or
cancellation state; billing does not control mastery or course completion.

### Slice K — compatibility and rollout

- [ ] Verify configured legacy page URLs/endpoints and custom endpoint slugs.
- [ ] Confirm old public shortcodes/hooks remain compatible where required.
- [ ] Verify browser Back/Forward, direct links, reload and activity return.
- [ ] Test keyboard behavior, narrow screens, loading/empty/error states.
- [ ] Rebuild generated assets from authored source and run relevant checks.
- [ ] Record remaining standards debt accurately; update documentation/checkpoint.

Acceptance: new learner experience is coherent end to end; no legacy screen is
accidentally embedded in an unfinished route; rollback/compatibility is understood.

## 10. Code map for resuming

| Area | Relevant paths |
|---|---|
| Current hub | `includes/Student/Hub.php`, `templates/student-hub/`, `assets/css/student-hub.css`, `assets/js/student-hub.js` |
| Current hub checks | `tests/php/student-hub-integration.php`, `docs/STUDENT-HOME.md` |
| Course structure/program | `includes/Learning/Catalog.php`, `CourseProgram.php`, `CompletionPolicy.php`, `Frontend.php` in that directory |
| Curriculum/placement | `includes/Curriculum/Items.php`, `Links.php`, `Placement.php`, `Syllabus.php`, `Roadmaps.php`, `SkillMappings.php` |
| Bundles/follows/progress | `includes/Bundles/Bundles.php`, `Follows.php`, `Progress.php`, `Combined.php`, `Frontend.php` |
| Learner bundle API | `includes/Rest/V1/MyBundlesController.php` |
| School access/work | `includes/Schools/Access.php`, `Service.php`, `Controller.php`, `Schema.php` |
| School frontend | `includes/Schools/Views.php`, `assets/src/features/schools/index.jsx` |
| Skills/practice | `includes/Skills/`, `includes/Practice/Dashboard.php`, `Frontend.php` in that directory |
| Student data | `includes/Data/Student.php`, `includes/DataStores/StudentStore.php` |
| Membership/commerce | `includes/Data/Membership.php`, `packages/e-commerce/includes/`, existing subscription/order stores |
| Legacy profile rendering | `includes/Shortcodes/ShortCodeMyProfile.php`, `ShortCodeProfile.php`, `templates/profile/` |
| Admin catalog/bundles | `assets/src/features/content-hub/`, `curriculum/`, `bundles/` |
| Source/build/standards | `package.json`, `eslint.config.cjs`, `phpcs.xml.dist`, `tools/build-assets.mjs`, `tools/check-source.mjs` |

Read current implementations before assuming helper signatures or data shapes.
For example, course placement already replaces legacy category/tag taxonomy reads.

## 11. Validation and handoff rules

- Respect `AGENTS.md` and the user's current scope.
- Never edit generated/runtime/dependency bundles directly.
- Preserve public names, hooks, REST fields, and assessment/program contracts.
- Check capabilities/nonces/ownership; validate IDs against the current learner.
- Escape output for its actual context; do not escape complete trusted HTML as text.
- Use meaningful integration cases rather than tests that merely mirror markup.
- Use the disposable test database for fixtures. Never reset the user's site.
- Avoid collecting/exporting roster/contact data during reference research.
- Capture a useful local preview when an implemented UI change is verified.
- Update `CONTINUE-LEARNER-HUB.md` after every slice, including what remains.

### Existing checks and local environment

The initial hub passed 50 WordPress integration checks and the existing JavaScript
suite passed 414 tests with one skipped. Production build passed with two existing
math-runtime size warnings. Targeted new JS/CSS checks pass. New production PHP has
zero PHPCS errors and six intentional fresh-query/caching warnings; the fixture has
30 local-file/direct-query warnings. Full repository standards still fail on old debt.

On the current Windows machine the pinned Node runtime is under
`$env:LOCALAPPDATA/OhMyLMS-build-tools/node-v26.0.0-win-x64`; PHP used for tests is
`C:/php8.5.4/php.exe` with mysqli/mbstring extensions. These are environment details,
not portable product requirements. Locate equivalents on another machine.

`OHMYLMS_TEST_CREDENTIALS` points to a private local fixture configuration. Do not
copy its contents into the repository or this handoff. The test script guards the
disposable `ohmylms_source_test` database and restores fixtures/settings.

Useful commands, selecting only relevant checks after each change:

```text
npm run lint:source
npm test
npm run build
npx eslint assets/js/student-hub.js
npx prettier --check assets/js/student-hub.js
npx stylelint assets/css/student-hub.css
php tools/coding-standards/vendor/squizlabs/php_codesniffer/bin/phpcs --standard=phpcs.xml.dist includes/Student/Hub.php templates/student-hub
php tests/php/student-hub-integration.php
git diff --check
```

The full standards command is `npm run lint:standards`. Its existing failures do
not justify blanket baselines, disabling checks, or claiming a clean repository.

## 12. Product decisions to discuss before implementation

Keep discussion focused; decide these in small groups rather than presenting a
large questionnaire.

1. **Landing:** My learning by default, last selected destination, or Classes for
   learners with active classes? Independent learners must always work normally.
2. **Main navigation:** Should Skills and Achievements be separate destinations,
   or should skills live primarily in the subject/course context?
3. **Following:** Does adding a course to My learning only pin it, or also enroll
   when the course is free? Paid access must remain explicit.
4. **Library naming:** Should learners see “Roadmaps” and “Course bundles,” or
   more familiar labels such as “Learning paths” and “Collections”?
5. **Appearance:** Dark, light, or system default? The inspected reference used dark.
6. **Membership scope:** Overview/purchases/invoices first, or also self-service
   cancellation/renewal inside the new shell using existing supported services?
7. **Profile scope:** Which editable fields and authentication/account-management
   actions belong in the first replacement?

These decisions do not require deleting or converting current records. Any later
change to data semantics needs its own documented decision and compatibility work.

## 13. Definition of completion

The work is complete only when the agreed slices are implemented and the learner
can move from subject discovery to course/unit/activity and back, use independent
or class learning, inspect progress, manage supported settings, and reach owned
membership information within one coherent experience. All relevant access,
compatibility, responsive, and validation checks must pass or have an explicitly
documented existing limitation.

A plan, new sidebar, screenshot, or collection of old embedded screens is not the
completed transition.
