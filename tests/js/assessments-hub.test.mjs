import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transformSync } from '@babel/core';

const source = fs.readFileSync('assets/src/features/assessment/AssessmentsHub.jsx', 'utf8');
const { code } = transformSync(source, {
  configFile: false, babelrc: false,
  presets: [['@babel/preset-react', { pragma: 'createElement' }]],
  plugins: [() => ({ visitor: {
    ImportDeclaration(path) { path.remove(); },
    ExportNamedDeclaration(path) { path.replaceWith(path.node.declaration); },
  } })],
});
const element = (type, props, ...children) => ({ type, props: props || {}, children });
const { assessmentsRoutes } = new Function('createElement', '__', 'useEffect', `${code}; return { assessmentsRoutes };`)(element, (text) => text, () => {});

test('Assessments defaults to the existing quizzes screen and retains all three screens', () => {
  const Quiz = () => null, Assignments = () => null, Bank = () => null;
  const original = [{ path: '/quizzes', element: Quiz }, { path: '/assignments', element: Assignments }];
  const routes = assessmentsRoutes(original, Bank);
  assert.deepEqual(routes.map((route) => route.path), ['/assessments', '/assessments/question-bank', '/assessments/assignments']);
  routes.forEach((route, index) => {
    const rendered = route.element({ example: 1 });
    const nav = rendered.children[1];
    const links = nav.children[0];
    assert.deepEqual(links.map((link) => link.props.href), routes.map((item) => '#' + item.path));
    assert.equal(links.filter((link) => link.props['aria-current'] === 'page').length, 1);
    assert.equal(links[index].props['aria-current'], 'page');
    assert.equal(rendered.children[2].type, [Quiz, Bank, Assignments][index]);
    assert.equal(rendered.children[2].props.example, 1);
  });
  assert.equal(original[0].element, Quiz);
  assert.equal(original[1].element, Assignments);
});
