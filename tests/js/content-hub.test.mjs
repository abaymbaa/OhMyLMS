import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transformSync } from '@babel/core';
import {
  HUB_ALIASES,
  HUB_APP_ROUTES,
  HUB_EXTENSION_TABS,
  HUB_MENU_ROUTES,
  HUB_TABS,
  catalogPath,
  contentHubRoutes,
  hashQuery,
} from '../../assets/src/features/content-hub/hubRoutes.mjs';

const createElement = (type, props, ...children) => ({ type, props: props || {}, children });
const load = (file, names, scope) => {
  const { code } = transformSync(fs.readFileSync(file, 'utf8'), {
    configFile: false,
    babelrc: false,
    presets: [['@babel/preset-react', { pragma: 'createElement' }]],
    plugins: [
      () => ({
        visitor: {
          ImportDeclaration(path) {
            path.remove();
          },
          ExportNamedDeclaration(path) {
            path.replaceWith(path.node.declaration);
          },
        },
      }),
    ],
  });
  return new Function(...Object.keys(scope), `${code}; return { ${names.join(', ')} };`)(
    ...Object.values(scope),
  );
};

const AddMenu = () => null;
const HubContext = { Provider: 'HubContext.Provider' };
const { ContentHubFrame, contentHubScreen } = load(
  'assets/src/features/content-hub/ContentHub.jsx',
  ['ContentHubFrame', 'contentHubScreen'],
  { createElement, __: (text) => text, useMenuHighlight: () => {}, AddMenu, HubContext, HUB_TABS },
);

test('The hub has Catalog, Courses, Lessons, the three assessment tabs, Skills, Curriculum and Learning Tracks under one base path', () => {
  assert.deepEqual(
    HUB_TABS.map((tab) => tab.id),
    [
      'catalog',
      'courses',
      'lessons',
      'quizzes',
      'question-bank',
      'assignments',
      'skills',
      'curriculum',
      'tracks',
    ],
  );
  assert.deepEqual(
    HUB_TABS.map((tab) => tab.label),
    [
      'Catalog',
      'Courses',
      'Lessons',
      'Quizzes',
      'Question Bank',
      'Assignments',
      'Skills',
      'Curriculum',
      'Learning Tracks',
    ],
  );
  assert.equal(HUB_TABS[0].path, '/content-hub');
  for (const tab of HUB_TABS) assert.ok(tab.path.startsWith('/content-hub'), tab.path);
  assert.equal(new Set(HUB_TABS.map((tab) => tab.path)).size, HUB_TABS.length);
});

const allPages = {
  CatalogPage: () => null,
  LessonsPage: () => null,
  QuestionBankPage: () => null,
  SkillsPage: () => null,
  CurriculumPage: () => null,
  TracksPage: () => null,
};

test('Hub routes reuse the application list screens and the SDK pages', () => {
  const Courses = () => null;
  const Quizzes = () => null;
  const Assignments = () => null;
  const seen = [];
  const screen = (Component, tab) => {
    seen.push([tab, Component]);
    return { tab, Component };
  };
  const routes = contentHubRoutes(
    [
      { path: '/courses', element: Courses },
      { path: '/quizzes', element: Quizzes },
      { path: '/assignments', element: Assignments },
      { path: '/certificates', element: () => null },
    ],
    allPages,
    screen,
  );
  assert.deepEqual(
    routes.map((route) => route.path),
    [
      '/content-hub',
      '/content-hub/catalog/:courseId',
      '/content-hub/courses',
      '/content-hub/lessons',
      '/content-hub/quizzes',
      '/content-hub/question-bank',
      '/content-hub/assignments',
      '/content-hub/skills',
      '/content-hub/curriculum',
      '/content-hub/tracks',
      '/assessments',
      '/assessments/question-bank',
      '/assessments/assignments',
    ],
  );
  const byTab = Object.fromEntries(seen.map(([tab, Component]) => [tab, Component]));
  assert.equal(byTab.courses, Courses, 'the existing course list becomes the Courses tab');
  assert.equal(byTab.quizzes, Quizzes, 'the existing quiz list becomes the Quizzes tab');
  assert.equal(byTab.assignments, Assignments, 'the existing assignment list becomes the Assignments tab');
  assert.equal(byTab.catalog, allPages.CatalogPage);
  assert.equal(byTab.lessons, allPages.LessonsPage);
  assert.equal(byTab['question-bank'], allPages.QuestionBankPage);
  assert.equal(byTab.skills, allPages.SkillsPage);
  assert.equal(byTab.curriculum, allPages.CurriculumPage);
  assert.equal(byTab.tracks, allPages.TracksPage);
  assert.deepEqual(
    Object.keys(byTab).sort(),
    HUB_TABS.map((tab) => tab.id).sort(),
    'every tab has a route',
  );
});

test('The old Assessments addresses open the Quizzes, Question Bank and Assignments tabs', () => {
  const routes = contentHubRoutes(
    [
      { path: '/quizzes', element: 'quizzes screen' },
      { path: '/assignments', element: 'assignments screen' },
    ],
    allPages,
    (Component, tab) => ({ tab, Component }),
  );
  const at = (path) => routes.find((route) => route.path === path).element;
  assert.equal(at('/assessments'), at('/content-hub/quizzes'));
  assert.equal(at('/assessments/question-bank'), at('/content-hub/question-bank'));
  assert.equal(at('/assessments/assignments'), at('/content-hub/assignments'));
  assert.deepEqual(HUB_ALIASES, {
    '/assessments': 'quizzes',
    '/assessments/question-bank': 'question-bank',
    '/assessments/assignments': 'assignments',
  });
});

test('Without the application list screens the hub still serves its own tabs', () => {
  const routes = contentHubRoutes([], allPages, (c, t) => t);
  assert.deepEqual(
    routes.map((route) => route.path),
    [
      '/content-hub',
      '/content-hub/catalog/:courseId',
      '/content-hub/lessons',
      '/content-hub/question-bank',
      '/content-hub/skills',
      '/content-hub/curriculum',
      '/content-hub/tracks',
      '/assessments/question-bank',
    ],
  );
  assert.deepEqual(HUB_APP_ROUTES, {
    '/courses': 'courses',
    '/quizzes': 'quizzes',
    '/assignments': 'assignments',
  });
});

test('The frame links every tab, marks the active one and offers the Add menu', () => {
  HUB_TABS.forEach((active) => {
    const frame = ContentHubFrame({ active: active.id, children: 'body' });
    const [header, nav, provider] = frame.children;
    assert.equal(header.type, 'header');
    assert.equal(header.children[0].children[0].children[0], 'Content Hub');
    assert.equal(header.children[1].type, AddMenu);
    const links = nav.children[0];
    assert.deepEqual(
      links.map((link) => link.props.href),
      HUB_TABS.map((tab) => `#${tab.path}`),
    );
    assert.deepEqual(
      links.filter((link) => link.props['aria-current'] === 'page').map((link) => link.props.href),
      [`#${active.path}`],
    );
    assert.equal(provider.type, HubContext.Provider);
    assert.deepEqual(provider.props.value, { active: active.id });
    assert.equal(provider.children[0], 'body');
  });
});

test('A wrapped screen receives its original props', () => {
  const Inner = () => null;
  const screen = contentHubScreen(Inner, 'courses');
  const rendered = screen({ example: 1 });
  assert.equal(rendered.type, ContentHubFrame);
  assert.equal(rendered.props.active, 'courses');
  assert.equal(rendered.children[0].type, Inner);
  assert.equal(rendered.children[0].props.example, 1);
});

test('Catalog addresses and hash queries', () => {
  assert.equal(catalogPath(), '/content-hub');
  assert.equal(catalogPath(42), '/content-hub/catalog/42');
  assert.equal(catalogPath('7'), '/content-hub/catalog/7');
  assert.equal(hashQuery('#/content-hub/skills?add=123').get('add'), '123');
  assert.equal(hashQuery('#/content-hub/skills').get('add'), null);
  assert.equal(hashQuery(undefined).get('add'), null);
});

test('Editors opened from the hub keep its menu entry highlighted', () => {
  assert.ok(HUB_MENU_ROUTES.includes('/course-edit/:id/:step?/:subStep?'));
  assert.ok(HUB_MENU_ROUTES.includes('/lesson-edit/:id'));
  for (const path of [
    '/quiz-edit/:id',
    '/quiz-report/:id',
    '/quiz-report/:id/grade-quiz/:quizId',
    '/assignment-edit/:id',
    '/assignment-report/:id',
    '/assignment-report/:id/grade-assignment/:assignmentId',
  ])
    assert.ok(HUB_MENU_ROUTES.includes(path), path);
  for (const path of Object.keys(HUB_APP_ROUTES))
    assert.ok(!HUB_MENU_ROUTES.includes(path), `${path} is a hub tab, not a bare route`);
});

test('The admin menu offers Content Hub instead of Courses, Assessments, Skills, Curriculum and Learning Tracks', () => {
  const menu = fs.readFileSync('includes/Admin/Menu.php', 'utf8');
  const labels = [...menu.matchAll(/esc_attr__\( '([^']+)', 'ohmylms' \), \$capability, 'admin\.php\?page=' \. \$slug \. '#([^']+)'/g)].map(
    (match) => [match[1], match[2]],
  );
  const names = labels.map(([label]) => label);
  assert.ok(names.includes('Content Hub'));
  assert.deepEqual(labels.find(([label]) => label === 'Content Hub'), ['Content Hub', '/content-hub']);
  assert.ok(!names.includes('Courses'), 'no Courses submenu');
  assert.ok(!names.includes('Skills'), 'no Skills submenu');
  assert.ok(!names.includes('Curriculum'), 'no Curriculum submenu');
  assert.ok(!names.includes('Learning Tracks'), 'no Learning Tracks submenu');
  assert.ok(!names.includes('Assessments'), 'no Assessments submenu');
  assert.ok(
    !labels.some(([, hash]) =>
      [
        '/courses',
        '/quizzes',
        '/assignments',
        '/assessments',
        '/extensions/skills',
        '/extensions/question-bank',
        '/extensions/curriculum',
        '/extensions/tracks',
      ].includes(hash),
    ),
  );
  // Certificates keeps its entry only while Gamification, which holds it as a tab, is off.
  assert.ok(names.includes('Certificates'), 'the other entries are untouched');
  assert.ok(names.indexOf('Content Hub') < names.indexOf('Certificates'));
});

test('Old addresses open the hub tabs', () => {
  const source = fs.readFileSync('assets/src/extensions/index.jsx', 'utf8');
  // The application's own list screens (courses, quizzes, assignments) become tabs at their old routes.
  assert.match(source, /HUB_APP_ROUTES\[route\.path\]\)\s*return \{ \.\.\.route, element: contentHubScreen\(route\.element, HUB_APP_ROUTES\[route\.path\]\) \}/);
  // The SDK pages open at #/extensions/<id> inside the hub frame, on the tab named in HUB_EXTENSION_TABS.
  assert.match(source, /HUB_EXTENSION_TABS\[entry\.id\]\s*\? contentHubScreen\(extensionPage\(entry\), HUB_EXTENSION_TABS\[entry\.id\]\)/);
  assert.deepEqual(HUB_EXTENSION_TABS, {
    skills: 'skills',
    'question-bank': 'question-bank',
    curriculum: 'curriculum',
    tracks: 'tracks',
  });
  for (const tab of [...Object.values(HUB_EXTENSION_TABS), ...Object.values(HUB_APP_ROUTES), ...Object.values(HUB_ALIASES)])
    assert.ok(HUB_TABS.some((entry) => entry.id === tab), tab);
  // The retired category and tag screens open Curriculum and Learning Tracks, now hub tabs too.
  assert.match(source, /replacedBy = \{ '\/categories': 'curriculum', '\/tags': 'tracks' \}/);
  assert.match(source, /contentHubScreen\(extensionPage\(replacement\), HUB_EXTENSION_TABS\[replacement\.id\]\)/);
  // The hub's list screens keep their extension slots, and the old Assessments frame is gone.
  assert.match(source, /HUB_APP_ROUTES\[route\.path\]\s*\? \{ \.\.\.route, element: wrapScreen\(route\.element, route\.path, registry\) \}/);
  assert.doesNotMatch(source, /assessmentScreen|assessmentsRoutes|AssessmentsHub/);
  assert.ok(!fs.existsSync('assets/src/features/assessment/AssessmentsHub.jsx'));
});

test('Question Bank, Curriculum and Learning Tracks drop their own page title level inside the hub', () => {
  for (const file of [
    'assets/src/features/question-bank/QuestionBankPage.jsx',
    'assets/src/features/curriculum/CurriculumPage.jsx',
    'assets/src/features/tracks/TracksPage.jsx',
  ]) {
    const source = fs.readFileSync(file, 'utf8');
    assert.match(source, /const hub = useContext\(HubContext\);/, file);
    assert.match(source, /headingLevel=\{hub \? 2 : 1\}/, file);
  }
});
