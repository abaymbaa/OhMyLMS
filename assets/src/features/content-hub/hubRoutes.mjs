/**
 * Routing data for the Content Hub, kept free of React so it can be tested on its own.
 *
 * The hub replaces the Courses and Skills submenus. Its tabs are Catalog (a grade or exam built from
 * chapters and skills), Courses, Lessons and Skills. The old `#/courses` and `#/extensions/skills`
 * addresses keep working and open the matching tab, so existing links and bookmarks survive.
 */
export const HUB_PATH = '/content-hub';

export const HUB_TABS = [
  { id: 'catalog', path: '/content-hub', label: 'Catalog' },
  { id: 'courses', path: '/content-hub/courses', label: 'Courses' },
  { id: 'lessons', path: '/content-hub/lessons', label: 'Lessons' },
  { id: 'skills', path: '/content-hub/skills', label: 'Skills' },
];

/** Core screens that are opened from the hub; the admin menu keeps Content Hub highlighted for them. */
export const HUB_MENU_ROUTES = [
  '/course-edit/:id/:step?/:subStep?',
  '/course/:id/report',
  '/courses/:id/students',
  '/lesson-edit/:id',
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
 * Hub routes. `screen(Component, tab)` wraps a page in the hub frame; `pages` are the tab bodies
 * and `routes` the application's own route table (its `/courses` screen becomes the Courses tab).
 */
export function contentHubRoutes(routes, pages, screen) {
  const courses = routes.find((route) => route.path === '/courses');
  return [
    { path: '/content-hub', element: screen(pages.CatalogPage, 'catalog') },
    { path: '/content-hub/catalog/:courseId', element: screen(pages.CatalogPage, 'catalog') },
    ...(courses
      ? [{ path: '/content-hub/courses', element: screen(courses.element, 'courses') }]
      : []),
    { path: '/content-hub/lessons', element: screen(pages.LessonsPage, 'lessons') },
    { path: '/content-hub/skills', element: screen(pages.SkillsPage, 'skills') },
  ];
}
