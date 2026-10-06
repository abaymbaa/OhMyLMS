import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transformSync } from '@babel/core';
import {
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
  { createElement, __: (text) => text, useEffect: () => {}, AddMenu, HubContext, HUB_TABS },
);

test('The hub has Catalog, Courses, Lessons and Skills tabs under one base path', () => {
  assert.deepEqual(
    HUB_TABS.map((tab) => tab.id),
    ['catalog', 'courses', 'lessons', 'skills'],
  );
  assert.equal(HUB_TABS[0].path, '/content-hub');
  for (const tab of HUB_TABS) assert.ok(tab.path.startsWith('/content-hub'), tab.path);
  assert.equal(new Set(HUB_TABS.map((tab) => tab.path)).size, HUB_TABS.length);
});

test('Hub routes reuse the application Courses screen and the Skills library', () => {
  const Courses = () => null;
  const pages = { CatalogPage: () => null, LessonsPage: () => null, SkillsPage: () => null };
  const seen = [];
  const screen = (Component, tab) => {
    seen.push([tab, Component]);
    return { tab, Component };
  };
  const routes = contentHubRoutes(
    [{ path: '/courses', element: Courses }, { path: '/quizzes', element: () => null }],
    pages,
    screen,
  );
  assert.deepEqual(
    routes.map((route) => route.path),
    [
      '/content-hub',
      '/content-hub/catalog/:courseId',
      '/content-hub/courses',
      '/content-hub/lessons',
      '/content-hub/skills',
    ],
  );
  const byTab = Object.fromEntries(seen.map(([tab, Component]) => [tab, Component]));
  assert.equal(byTab.courses, Courses, 'the existing course list becomes the Courses tab');
  assert.equal(byTab.catalog, pages.CatalogPage);
  assert.equal(byTab.lessons, pages.LessonsPage);
  assert.equal(byTab.skills, pages.SkillsPage);
});

test('Without a course list screen the hub still serves its own tabs', () => {
  const routes = contentHubRoutes([], { CatalogPage: 1, LessonsPage: 2, SkillsPage: 3 }, (c, t) => t);
  assert.deepEqual(
    routes.map((route) => route.path),
    ['/content-hub', '/content-hub/catalog/:courseId', '/content-hub/lessons', '/content-hub/skills'],
  );
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
  assert.ok(!HUB_MENU_ROUTES.includes('/courses'), 'the Courses tab is a hub screen, not a bare route');
});

test('The admin menu offers Content Hub instead of Courses and Skills', () => {
  const menu = fs.readFileSync('includes/Admin/Menu.php', 'utf8');
  const labels = [...menu.matchAll(/esc_attr__\( '([^']+)', 'ohmylms' \), \$capability, 'admin\.php\?page=' \. \$slug \. '#([^']+)'/g)].map(
    (match) => [match[1], match[2]],
  );
  const names = labels.map(([label]) => label);
  assert.ok(names.includes('Content Hub'));
  assert.deepEqual(labels.find(([label]) => label === 'Content Hub'), ['Content Hub', '/content-hub']);
  assert.ok(!names.includes('Courses'), 'no Courses submenu');
  assert.ok(!names.includes('Skills'), 'no Skills submenu');
  assert.ok(!labels.some(([, hash]) => hash === '/courses' || hash === '/extensions/skills'));
  assert.ok(['Curriculum', 'Learning Tracks', 'Assessments'].every((name) => names.includes(name)));
  assert.ok(names.indexOf('Content Hub') < names.indexOf('Curriculum'));
});

test('Old Courses and Skills addresses open the hub tabs', () => {
  const source = fs.readFileSync('assets/src/extensions/index.jsx', 'utf8');
  assert.match(source, /route\.path === '\/courses'\)\s*return \{ \.\.\.route, element: contentHubScreen\(route\.element, 'courses'\) \}/);
  assert.match(source, /entry\.id === 'skills'\s*\? contentHubScreen\(extensionPage\(entry\), 'skills'\)/);
});
