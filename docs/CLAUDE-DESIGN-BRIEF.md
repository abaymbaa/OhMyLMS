# OhMyLMS: product brief for Claude Design

Paste or upload this file as context. It describes what exists today, what the screens must show, and the technical constraints the finished design has to respect.

## 1. What OhMyLMS is

OhMyLMS is a WordPress LMS plugin (derived from CreatorLMS, fully renamed to `ohmylms`). It runs courses, chapters, lessons (text, video, audio), quizzes, assignments, memberships, WooCommerce/QPay payments, certificates, badges/points/leaderboards, and a React admin app.

The product is a **math-practice and school platform in the style of IXL**. Target market: Mongolia. Content and UI strings are Mongolian first, English second. Every layout must tolerate long Mongolian words and Cyrillic text.

Core learning model:

- **Skill** = one quiz (for example "A1 · 2.C"). Every student gets a **SmartScore 0-100 per skill**.
- 0-79 Learning. 80 Proficient. 90-99 Challenge Zone (harder questions, big penalty for mistakes). 100 Mastered (date stored, `best` never decreases).
- **Modes per quiz:** Track (normal attempts update the score), Practice (endless one-question-at-a-time stream, instant feedback, "Sorry, incorrect" panel with the correct answer and explanation, live score), Off.
- Questions have difficulty (Easy/Normal/Hard) and an explanation.
- Students see skills as **score rings** under a course.
- Planned next: a Student Performance dashboard (skills mastered, skills needing work, recommendations), and anonymous practice that is saved after the student registers.

## 2. People and relationships

| Role | What they do | Scope of data they may see |
| --- | --- | --- |
| Platform admin | Runs the installation, all schools, audit | Everything |
| School administrator | Staff, roster, classes, years, reports | Own school only |
| Teacher | Classes, assigns work, reviews and grades submissions | Own classes (also independent classes with no school) |
| Parent/guardian | Follows linked children | Linked children, school-distributed work only |
| Student | Practises, does assignments, sees progress | Own records only |

Structure: **School → academic years → classes → teacher and student memberships.** Parent → approved guardian links → students.

Rules the design must make visible or at least not contradict:

- One person can hold several roles (teacher + parent) and belong to several schools. The UI needs a **context/role switcher**.
- A student can be in several classes and have several guardians.
- Removing a student from a class never deletes their account or history.
- Independent classes (no school) exist and are listed separately from school classes.
- School-created children may have no email, only a generated username.
- Passwords are never shown. Staff issue an expiring "password setup / recovery" link.
- Guardian link is by expiring invitation from school staff. Parents cannot search for children.
- An admin can use **View as** another account (return banner needed).

## 3. Screens to design (per audience)

### Student
- **Home / My learning**: continue where you left off, assigned work with due dates, skills in progress, streak/points/badges.
- **Skill practice**: question card, answer input types (multiple choice, numeric, text), instant feedback panel (correct/incorrect, explanation), live SmartScore ring and progress to 80/90/100, Challenge Zone state, mastery celebration.
- **Skill list / course map**: skills grouped by topic with score rings (not started, learning, proficient, mastered).
- **My assignments**: due, overdue, completed, link into the lesson/quiz.
- **My progress**: skills mastered, needs-work list, recommendations, time practised, questions answered.
- **Profile and settings**: avatar, name, password, connect Google, language.
- **Anonymous state**: practising without an account, then a "save your progress" register/login prompt right after the quiz.

### Parent
- **Child selector** (multiple children, multiple schools).
- **Per-child overview**: school-distributed work, completion, due dates, mastery summary, recent activity.
- **Accept invitation** flow, revoke link, add another child.
- Report-style view that is calm and readable, not gamified.

### Teacher
- **Dashboard**: my classes (school and independent), what needs grading, overdue work, students struggling.
- **Class page**: roster, add students or co-teachers from the school roster, assignments list, class report.
- **Create assignment**: choose published course, optional activity, recipients (class or individuals), due date in the school timezone, "does earlier completion count?" choice.
- **Review submissions**: queue, submission viewer with files, grade and feedback.
- **Class and student reports**: assigned vs completed, SmartScore by skill (heatmap student x skill), CSV export.
- **Create independent class** form.

### School administrator
- **School dashboard**: classes, teachers, students counts, completion overview, alerts.
- **Roster**: student table (name, external student ID, class, status), search, pagination (50 per page), add student, invite existing account, CSV import (preview, per-row errors, up to 200 rows).
- **Staff and invitations**: invite teacher or admin, link shown once, expires in 48 hours, history.
- **Academic years**: create, archive, copy classes to a new year (empty rosters, explicit promotion).
- **Classes**: create, archive, assign teachers.
- **Guardian links**: invite parent for a student, revoke.
- **School report** with CSV export.

### Platform admin (WordPress admin)
- Account hub with tabs: Students, Teachers, Parents, All accounts, Classes, Schools. Search, pagination, role badges, edit links.

### Public/auth
- Student registration (email, password of at least 12 characters, optional names), parent registration, login, lost/reset password, Google sign-in button, invitation acceptance, email verification.

## 4. Design requirements

- IXL-like clarity: a calm, content-first layout; strong score rings and progress bars; clear "what should I do next"; a distinct feel for the Challenge Zone.
- Audiences differ: students young to teen (friendly, motivating), parents (reassuring, simple), teachers and admins (dense, data-rich, efficient tables).
- Responsive from 360px phones up (school staff and parents use phones). Touch targets 44px+.
- Accessible: WCAG AA contrast, never colour alone for status, visible focus, keyboard navigable, screen-reader labels for score rings.
- Mongolian Cyrillic first: pick a typeface with full Cyrillic support; allow 30-40% longer strings than English.
- Light and dark themes if feasible.
- Empty, loading, error and "no permission" states for each screen.
- A shared component set: header with role/context switcher, score ring, skill card, assignment card, data table, invitation card, stat tile, badge, toast, modal.

## 5. Technical constraints (important for hand-off)

- The school UI is a **React app** mounted into WordPress. Source: `assets/src/features/schools/` (`index.jsx`, `PeopleDirectory.jsx`, `PeopleTabs.jsx`, `AddModal.jsx`, `ViewAsModal.jsx`, `api.mjs`). Styles: `assets/schools/schools.css`. Built output goes to `build/` and is never hand-edited. Build with `npm run build`, validate with `npm run check`.
- It renders from Gutenberg blocks and shortcodes: School Dashboard, Teacher Dashboard, Parent Dashboard, Student Assignments, Student Registration, Parent Registration. The standalone portal is `/?ohmylms_portal=1`.
- Data comes from REST under `/wp-json/ohmylms/v1/` (school, classes, assignments, gradebook, student, quiz, analytics, engagement). Designs should map onto those data shapes, not invent new backend concepts.
- CSS classes use the `ohmylms-` prefix; theme template overrides live in `<theme>/ohmylms/`.
- Authorization is enforced server-side by relationship records. The UI shows only what the signed-in account may see.
- Out of scope for now: district hierarchy, school billing, SIS / Google Classroom sync, parent messaging, adaptive scoring changes.
