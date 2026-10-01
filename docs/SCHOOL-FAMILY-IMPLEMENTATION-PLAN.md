# OhMyLMS school, teacher, parent, and student implementation plan

Status: initial implementation is now available. See [setup and implementation boundaries](SCHOOL-FAMILY-SETUP.md). The phases below remain the design reference; a real-school pilot and deployment-specific policy review are still release activities.
Date: 2026-09-30

## 1. Product scope and defaults

Build school and family learning within the existing OhMyLMS plugin, with no Pro/free feature split. Use IXL's public school roster and family workflows as reference, not as a claim about its internal architecture or an exact feature clone.

Recommended defaults:

- One WordPress installation supports multiple schools and independent families.
- One WordPress user represents one person. Existing student IDs, progress, purchases, and enrollments remain unchanged.
- A school is an organization, not a shared login or WordPress administrator account.
- One person can be both a teacher and a parent, and belong to multiple schools.
- School administration is invitation based initially. Independent teacher onboarding follows the school pilot.
- Students can register without selecting a course. Creating an account, joining a class, receiving an assignment, and gaining paid content access are separate operations.
- School-created child accounts can use a generated username without requiring a personal email. Adult accounts require verified email.
- No district hierarchy, adaptive scoring engine, school billing, or external roster synchronization in the first release.

## 2. Account structure

School → academic years → classes → teacher and student memberships.
Parent/guardian → approved guardian links → students.
Student → existing learning history, plus class memberships and assigned work.

Students may belong to several classes and have several guardians. Removing a student from a class must not delete their account or learning history. A teacher leaving a school loses school access immediately; their personal account remains.

| Account responsibility | Dashboard | Allowed scope |
| --- | --- | --- |
| Platform administrator | All schools and platform settings | Entire installation, with audit records for sensitive actions |
| School administrator | Staff, master roster, classes, school reports | Their active school memberships only |
| Teacher | Classes, assigned work, completion, grading | Their active classes and approved teaching content |
| Parent/guardian | Child selector, progress, upcoming work | Approved linked children and explicitly shared information |
| Student | My learning, assignments, progress | Their own records |

WordPress roles provide base capabilities. Relationship records determine the actual scope. Switching dashboards or supplying a school ID never grants permissions. Do not give teachers broad WordPress administrator/editor privileges to make existing screens work. Course creation and publishing are separate capabilities from teaching and grading.

## 3. Registration and identity

| Flow | Inputs | Result |
| --- | --- | --- |
| Public student signup | Email and password; optional first/last name | Student account, email verification according to policy, no enrollment |
| School-created student | Display name, school student ID, grade/year as appropriate; generated unique username | Student account linked to school, optional class placement; email optional |
| Parent signup | Name, email, password or configured Google login | Parent account with no child access until a link is approved |
| Teacher invitation | Verified recipient email, display name, password or Google login | Teacher membership in the inviting school and assigned classes |
| School administrator invitation | Verified recipient email and account setup | Administrator membership for the named school only |

For child accounts, use a designated school or guardian recovery process instead of invented email addresses. Never display or retain plaintext passwords. Initial credentials or activation links must expire or require password change. Grade belongs to an academic-year record so promotion does not rewrite history.

Guardian linking: authorized school staff issue a child-specific, expiring invitation. The intended parent verifies their identity and accepts it. Support revocation and multiple guardians. Do not allow linking by searching a child's name, guessing a student ID, sharing a general class code, or matching an unverified email.

Teacher invitations must be single use, expire, and be bound to the intended school, role, and recipient. Class codes, if added, use expiry, rotation, throttling, and school approval where needed; they never grant staff or guardian access.

Reuse the existing Google integration after an authentication review. Store provider plus stable provider subject as the identity key; require proof of ownership before linking to an existing local account. Google login authenticates identity, while invitations and memberships decide permissions. Keep OAuth secrets server side and test callback state binding, replay protection, and same-site redirect validation.

## 4. Data model

Use the configured WordPress table prefix. Proposed logical tables:

| Table | Key fields and constraints |
| --- | --- |
| ohmylms_schools | ID, name, slug, timezone, status, created_by; unique slug |
| ohmylms_school_memberships | school_id, user_id, role, status, joined_at, ended_at; unique school/user/role |
| ohmylms_school_student_profiles | school_id, user_id, external_student_id; unique school/user and school/external ID |
| ohmylms_academic_years | ID, school_id, label, starts_at, ends_at, status |
| ohmylms_classes | ID, school_id, academic_year_id, name, subject, grade, status |
| ohmylms_class_memberships | class_id, user_id, role, status, joined_at, ended_at; unique class/user/role |
| ohmylms_guardian_links | guardian_user_id, student_user_id, status, approved_by, approved_at, revoked_at; unique guardian/student |
| ohmylms_invitations | token_hash, purpose, school/class/student context, recipient, expires_at, consumed_at, invited_by |
| ohmylms_learning_assignments | ID, school_id, class_id, creator_id, existing content type/ID, due_at, status, completion rule |
| ohmylms_assignment_recipients | assignment_id, student_user_id, assigned_at, status, completed_at; unique assignment/student |
| ohmylms_audit_log | actor_id, school_id, action, object type/ID, timestamp, minimal change metadata |

Index membership lookups in both directions, school/status filters, and assignment recipients by student/status. Check parent-school-class consistency in service methods because table references alone do not establish authorization. Store timestamps in UTC and display them in school/user timezone.

Existing OhMyLMS assignment content and submissions remain the learning records. The new learning-assignment table distributes existing content to classes or individual students; it must not create a second grading system. Snapshot recipients when publishing work; explicitly offer whether newly joined students receive outstanding assignments. Define whether prior completion counts, defaulting to completion after assignment for new work.

Do not duplicate quiz attempts, course completion, or scores. Build reports from the existing records, adding school/class context where needed to prevent exposure of unrelated home or other-school activity. Guardian report scope must be explicit; private staff notes and unrelated student data are excluded.

## 5. Existing code integration

Confirmed integration points from the local source:

- `includes/Ajax.php`: existing signup handler creates accounts separately from course selection and supports optional profile fields.
- `includes/Services/GoogleAuthService.php` and `includes/Rest/V1/AuthController.php`: Google login, account creation, settings, and callbacks.
- Existing email-verification service and student-role helpers: preserve and extend instead of replacing them.
- `includes/Install.php` and `includes/Utility/update-functions.php`: schema/version migrations and existing student-role migration.
- `includes/Data/Assignment.php`, assignment storage, REST controller, and learning UI: reuse learning and grading behavior. Audit existing `edit_posts` checks before exposing any teacher routes.
- `includes/Blocks/BlocksManager.php`: register new OhMyLMS blocks without changing legacy block identifiers.
- Existing student, course, quiz, and report services: inventory exact tables, ownership checks, and completion hooks in phase 0 before implementation.

Proposed modules: school and membership repositories; an authorization service; invitation and guardian-link services; assignment distribution service; school/teacher/guardian REST controllers; dashboard UI components. Follow the repository's existing naming and dependency conventions during implementation.

Every endpoint, report, export, search, count, and background job must check both capability and relationship scope. Apply filtering in the database query, not after loading all students. Include school/user scope in caches and invalidate access when memberships change. Audit invitation acceptance, role changes, guardian links, exports, and account recovery without logging passwords or tokens.

## 6. Screens and blocks

Introduce these blocks, all under the OhMyLMS category:

1. OhMyLMS Student Registration — account-only signup and configured Google button.
2. OhMyLMS Parent Registration — parent signup plus invitation acceptance guidance.
3. OhMyLMS School Dashboard — school switcher, roster, staff, classes, and reports.
4. OhMyLMS Teacher Dashboard — class switcher, assigned work, student progress, grading.
5. OhMyLMS Parent Dashboard — child switcher, shared progress, assignments, link status.

Extend the existing student dashboard with classes and assigned work. Use one authentication layer and shared form components. Teacher and school administrator onboarding should be invitation pages rather than unrestricted role-selection blocks.

Block editor previews use sample data, never real student records. Render authorized dashboards on the server/API side and show appropriate signed-out, pending-invitation, empty-roster, and revoked-access states. Support keyboard navigation, mobile layouts, translation, and accessible form errors.

## 7. Delivery phases and acceptance gates

| Phase | Work | Completion criteria |
| --- | --- | --- |
| 0. Inventory and contracts | Map identity, capabilities, progress, content access, schema, migrations, and asset pipeline; document permission matrix | Existing account/progress behavior recorded; schema and API contracts reviewed; decisions below resolved or defaults recorded |
| 1. Foundation | Add versioned tables, scoped authorization, school memberships, audit events, feature toggle | Two test schools cannot access each other's data through direct IDs, lists, search, exports, or counts; migrations safely rerun |
| 2. Onboarding and rosters | School setup, teacher/admin invitations, student registration, child accounts, master roster, classes, guardian invitations | Accounts join the correct school/class; public signup cannot escalate roles; expired/replayed invitations fail; existing accounts are reused only after verified matching |
| 3. Teacher/student workflow | Teacher dashboard, class assignments, existing completion/grading integration, student dashboard extensions | Teacher assigns approved content, student completes it, authorized teacher sees the result; unrelated teachers are denied |
| 4. Family workflow | Parent signup, verified guardian links, child selector, shared progress and work | Parent can see only approved children; revocation takes effect immediately; multiple children/guardians work correctly |
| 5. School administration | CSV preview/import, school reports, staff removal, class archive, year rollover | Repeated import does not duplicate users; partial errors are reported; rollover preserves historical work and permissions |
| 6. Pilot and release | Accessibility, load checks, build verification, migration rehearsal, recovery rehearsal, documentation | End-to-end school and family scenarios pass; staging pilot approved; release and recovery steps documented |

Earliest useful pilot: phases 0–4 using manual roster creation. CSV import and school reporting follow before wider rollout. Estimate schedule after phase 0; the current source needs an authorization audit before a reliable duration can be given.

## 8. Validation and migration

Automated coverage should prioritize authorization and state transitions:

- Cross-school reads/writes, teacher-to-teacher leakage, guessed child IDs, revoked memberships, and parent scope.
- Duplicate email/username/external student ID handling; simultaneous invitation acceptance; expired and reused tokens.
- A person who is both teacher and parent, teachers in multiple schools, co-teachers, and a child in multiple classes.
- Signup with no course, child signup without email, local and Google identity linking, verification and recovery flows.
- Assignment recipients, prior completion, late joiners, grading ownership, and due dates across timezones.
- Archive versus deletion, academic-year rollover, repeated migration/import, and preservation of existing enrollments and progress.

Browser acceptance scenario: create School A and School B; invite teachers; create students; assign work; complete and grade it; link a parent; inspect progress; revoke access; verify denials and preserved history.

Use additive migrations and an internal rollout toggle, not a paid-feature gate. Existing users start with no school relationship; never attach everyone to a default school automatically. Back up and rehearse migration on staging. Disable new routes/UI for application rollback while preserving added records; do not drop tables as rollback. Define backup restore and reconciliation procedures before production migration.

Build with `npm run build` from the OhMyLMS directory. This site has source assets enabled and serves generated `build/` assets, so verify the generated files as well as source. Use existing lint/test commands and targeted integration tests appropriate to the changed modules.

## 9. Decisions before implementation

Recommended starting choices, subject to owner review:

1. Multiple schools per installation; platform administrators create schools during the first release.
2. Invite-only school staff; independent teacher onboarding deferred.
3. Child accounts may omit personal email; school staff manage recovery unless an approved guardian is authorized.
4. Parents initially receive read-only shared reports. Messaging, assigning work, and purchasing for children are later features.
5. Class membership does not bypass paid content checks. First release assigns content students already have access to; school-funded entitlements need a separate access policy.
6. Match imported students by school external ID or verified existing identity, never name alone; ambiguous matches require review.
7. Define which school/home learning records parents and schools may view, account retention, export/deletion ownership, and the target age groups/operating countries before launch.

## 10. Reference workflows

IXL's public guides support the broad patterns used here: separate school master rosters and teacher rosters, school administrators managing accounts and school reports, co-teaching, and guardian-facing learning information. OhMyLMS's schema, permission model, and phased delivery above are proposed designs, not descriptions of IXL internals.

- [IXL administrator quick-start guide](https://www.ixl.com/materials/userguides/IXLQuickStart_Administrator.pdf)
- [IXL teacher user guide](https://www.ixl.com/userguides/us/IXLUserGuide.pdf)
- [IXL user guides](https://www.ixl.com/userguides)
- [IXL co-taught classes](https://blog.ixl.com/2024/07/29/create-co-taught-classes-on-ixl/)
- [Google identity verification and account linking](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)
