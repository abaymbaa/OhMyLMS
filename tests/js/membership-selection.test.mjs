import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transformSync } from '@babel/core';

const { code } = transformSync(fs.readFileSync('assets/src/features/memberships/MembershipCourses.jsx', 'utf8'), {
  configFile: false, babelrc: false,
  presets: [['@babel/preset-react', { pragma: 'createElement' }]],
  plugins: [() => ({ visitor: {
    ImportDeclaration(path) { path.remove(); },
    ExportNamedDeclaration(path) { path.replaceWith(path.node.declaration); },
  } })],
});
const element = (type, props, ...children) => ({ type, props: props || {}, children });
const factory = new Function('createElement', 'Notice', 'Spinner', 'CategoryMindmap', `${code}; return createMembershipCourses;`)(element, 'Notice', 'Spinner', 'CategoryMindmap');
function flatten(node) { return !node || typeof node !== 'object' ? [] : Array.isArray(node) ? node.flatMap(flatten) : [node, ...node.children.flatMap(flatten)]; }

test('membership editor restores all selections, saves IDs and shows the resolved preview', () => {
  const plan = { products: [{ id: 1, name: 'Direct course' }], course_categories: [10], course_tags: [20], excluded_courses: [3] };
  const states = [[], [{ value: 10, label: 'Mathematics' }], [{ value: 20, label: 'Advanced' }], { total: 1, courses: [{ id: 1, name: 'Direct course', reasons: ['Individual course'] }] }, '', '', false];
  let index = 0;
  const writes = [];
  const Component = factory(() => ({
    I: { SpacerWP: 'Spacer', HeadingWP: 'Heading', AdvancedSelectWP: 'Select' }, Ea: 'Card', T: { default: 'store' },
    b: { __: (text) => text }, Ge: (text) => text,
    g: { useState: () => [states[index++], () => {}], useEffect: () => {}, useRef: () => ({ current: 0 }) },
    y: { useSelect: (read) => read(() => ({ selectMembershipPlanData: () => plan })), useDispatch: () => ({ updateMembershipPlan: (...args) => writes.push(args) }) },
    l: () => () => Promise.resolve([]),
  }));
  const nodes = flatten(Component());
  const selects = nodes.filter((node) => node.type === 'Select');
  assert.deepEqual(selects.map((node) => node.props.value.map((item) => item.value)), [[1], [10], [20], [3]]);
  selects[1].props.onChange([{ value: 11, label: 'Algebra' }]);
  selects[2].props.onChange(null);
  selects[3].props.onChange([{ value: 5, label: 'Excluded' }]);
  assert.deepEqual(writes, [['course_categories', [11]], ['course_tags', []], ['excluded_courses', [5]]]);
  assert.ok(nodes.some((node) => node.type === 'td' && node.children.includes('Individual course')));
  assert.ok(nodes.some((node) => node.type === 'td' && node.children.includes('Direct course')));
  const mindmap = nodes.find((node) => node.type === 'CategoryMindmap');
  assert.deepEqual(mindmap.props.selected, [10]);
  mindmap.props.onChange([11]);
  assert.deepEqual(writes.at(-1), ['course_categories', [11]]);
});

test('category loading uses the REST root and survives a failed tag request', async () => {
  const effects = [];
  const states = [];
  const requests = [];
  let index = 0;
  globalThis.window = { ohmylms_params: { api_url: 'http://xyz.local/wp-json/' } };
  try {
    const Component = factory(() => ({
      I: { SpacerWP: 'Spacer', HeadingWP: 'Heading', AdvancedSelectWP: 'Select' }, Ea: 'Card', T: { default: 'store' },
      b: { __: (text) => text }, Ge: (text) => text,
      g: { useState: (initial) => { const slot = index++; states[slot] = initial; return [initial, (value) => { states[slot] = value; }]; }, useEffect: (effect) => effects.push(effect), useRef: () => ({ current: 0 }) },
      y: { useSelect: (read) => read(() => ({ selectMembershipPlanData: () => ({}) })), useDispatch: () => ({ updateMembershipPlan: () => {} }) },
      l: () => (settings) => {
        requests.push(settings);
        return settings.url.endsWith('/tags') ? Promise.reject(new Error('Invalid JSON')) : Promise.resolve([{ term_id: 3, name: 'Cambridge', parent: 0 }]);
      },
    }));
    Component();
    effects[0]();
    await new Promise((resolve) => setImmediate(resolve));
    assert.deepEqual(requests.map((request) => request.url), ['http://xyz.local/wp-json/ohmylms/v1/categories', 'http://xyz.local/wp-json/ohmylms/v1/tags']);
    assert.equal(states[1][0].label, 'Cambridge');
    assert.equal(states[7], 'ready');
    assert.equal(states[4], 'Invalid JSON');
  } finally { delete globalThis.window; }
});
