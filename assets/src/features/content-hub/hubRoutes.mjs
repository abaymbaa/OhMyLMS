/**
 * Routing data for the Content Hub, kept free of React so it can be tested on its own.
 *
 * The hub replaces the Courses, Skills, Curriculum, Learning Tracks and Assessments submenus. Its tabs
 * are Catalog (a grade or exam built from chapters and skills), Courses, Lessons, Quizzes, Question Bank,
 * Assignments, Skills, Curriculum and Learning Tracks. Every address those screens had keeps working and
 * opens the matching tab (`#/courses`, `#/quizzes`, `#/assignments`, `#/assessments`,
 * `#/assessments/question-bank`, `#/assessments/assignments`, `#/extensions/skills`,
 * `#/extensions/question-bank`, `#/extensions/curriculum`, `#/extensions/tracks`, `#/categories` and
 * `#/tags`), so existing links and bookmarks survive.
 */
export const HUB_PATH = '/content-hub';

export const HUB_TABS = [
  { id: 'catalog', path: '/content-hub', label: 'Catalog' },
  { id: 'courses', path: '/content-hub/courses', label: 'Courses' },
  { id: 'lessons', path: '/content-hub/lessons', label: 'Lessons' },
  { id: 'quizzes', path: '/content-hub/quizzes', label: 'Quizzes' },
  { id: 'question-bank', path: '/content-hub/question-bank', label: 'Question Bank' },
  { id: 'assignments', path: '/content-hub/assignments', label: 'Assignments' },
  { id: 'skills', path: '/content-hub/skills', label: 'Skills' },
  { id: 'curriculum', path: '/content-hub/curriculum', label: 'Curriculum' },
  { id: 'tracks', path: '/content-hub/tracks', label: 'Learning Tracks' },
];

/** SDK admin pages that are hub tabs, keyed by their `#/extensions/<id>` address. */
export const HUB_EXTENSION_TABS = {
  skills: 'skills',
  'question-bank': 'question-bank',
  curriculum: 'curriculum',
  tracks: 'tracks',
};

/** The application's own list screens that are hub tabs, keyed by their old route. */
export const HUB_APP_ROUTES = {
  '/courses': 'courses',
  '/quizzes': 'quizzes',
  '/assignments': 'assignments',
};

/** The retired Assessments addresses and the tab each one opens. */
export const HUB_ALIASES = {
  '/assessments': 'quizzes',
  '/assessments/question-bank': 'question-bank',
  '/assessments/assignments': 'assignments',
};

/** Hub-provided page for each tab that is not one of the application's own screens. */
const TAB_PAGES = {
  catalog: 'CatalogPage',
  lessons: 'LessonsPage',
  'question-bank': 'QuestionBankPage',
  skills: 'SkillsPage',
  curriculum: 'CurriculumPage',
  tracks: 'TracksPage',
};

/** Core screens that are opened from the hub; the admin menu keeps Content Hub highlighted for them. */
export const HUB_MENU_ROUTES = [
  '/course-edit/:id/:step?/:subStep?',
  '/course/:id/report',
  '/courses/:id/students',
  '/lesson-edit/:id',
  '/quiz-edit/:id',
  '/quiz-report/:id',
  '/quiz-report/:id/grade-quiz/:quizId',
  '/assignment-edit/:id',
  '/assignment-report/:id',
  '/assignment-report/:id/grade-assignment/:assignmentId',
];

export const catalogPath = (courseId) =>
  courseId ? `${HUB_PATH}/catalog/${Number(courseId)}` : HUB_PATH;

/** Query parameters of the current hash route, e.g. `#/content-hub/skills?add=1`. */
export function hashQuery(hash) {
  const text = String(hash || '');
  const index = text.indexOf('?');
  return new URLSearchParams(index === -1 ? '' : text.slice(index + 1));
}

/**
 * Hub routes. `screen(Component, tab)` wraps a page in the hub frame; `pages` are the tab bodies and
 * `routes` the application's own route table (its `/courses`, `/quizzes` and `/assignments` screens
 * become the Courses, Quizzes and Assignments tabs, and are left out when the application lacks them).
 * The old Assessments addresses reuse the screens of the tabs they open.
 */
export function contentHubRoutes(routes, pages, screen) {
  const appRoute = Object.fromEntries(
    Object.entries(HUB_APP_ROUTES).map(([path, tab]) => [tab, path]),
  );
  const hub = [];
  const screens = {};
  for (const tab of HUB_TABS) {
    const Component = appRoute[tab.id]
      ? routes.find((route) => route.path === appRoute[tab.id])?.element
      : pages[TAB_PAGES[tab.id]];
    if (appRoute[tab.id] && !Component) continue;
    screens[tab.id] = screen(Component, tab.id);
    hub.push({ path: tab.path, element: screens[tab.id] });
    if (tab.id === 'catalog') {
      hub.push({ path: '/content-hub/catalog/:courseId', element: screen(Component, 'catalog') });
    }
  }
  const aliases = Object.entries(HUB_ALIASES)
    .filter(([, tab]) => screens[tab])
    .map(([path, tab]) => ({ path, element: screens[tab] }));
  return [...hub, ...aliases];
}
