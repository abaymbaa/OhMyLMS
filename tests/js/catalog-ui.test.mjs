import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { transformSync } from '@babel/core';
import { attachmentsFor } from '../../assets/src/features/content-hub/catalogModel.mjs';
import { catalogPath } from '../../assets/src/features/content-hub/hubRoutes.mjs';

const createElement = (type, props, ...children) => ({ type, props: props || {}, children: children.flat(Infinity).filter((child) => child !== null && child !== undefined && child !== false) });
const stub = (name) => Object.assign(() => null, { stubName: name });
const Button = stub('Button');
const CheckboxControl = stub('CheckboxControl');
const DropdownMenu = stub('DropdownMenu');
const SelectControl = stub('SelectControl');
const TextControl = stub('TextControl');
const stubs = new Set([Button, CheckboxControl, DropdownMenu, SelectControl, TextControl]);

const sprintf = (format, ...args) => {
  let next = 0;
  return String(format).replace(/%(?:(\d+)\$)?[sd]/g, (_, position) => args[position ? Number(position) - 1 : next++]);
};
const scope = {
  createElement, useState: (initial) => [initial, () => {}],
  __: (text) => text, _n: (one, many, count) => (count === 1 ? one : many), sprintf,
  Button, CheckboxControl, DropdownMenu, SelectControl, TextControl,
  attachmentsFor, catalogPath, editPath: (type, id) => `/${type}-edit/${id}`,
};
const { code } = transformSync(fs.readFileSync('assets/src/features/content-hub/ChapterBlock.jsx', 'utf8'), {
  configFile: false, babelrc: false,
  presets: [['@babel/preset-react', { pragma: 'createElement' }]],
  plugins: [() => ({ visitor: {
    ImportDeclaration(path) { path.remove(); },
    ExportNamedDeclaration(path) { path.replaceWith(path.node.declaration); },
  } })],
});
const { ChapterBlock, SkillRow, AttachmentItem } = new Function(...Object.keys(scope), `${code}; return { ChapterBlock, SkillRow, AttachmentItem };`)(...Object.values(scope));

/** Render user components into plain elements, leaving the stubbed controls in place. */
function expand(node) {
  if (node === null || node === undefined || typeof node !== 'object') return node;
  if (Array.isArray(node)) return node.map(expand);
  if (typeof node.type === 'function' && !stubs.has(node.type)) {
    return expand(node.type({ ...node.props, children: node.children }));
  }
  return { ...node, children: node.children.map(expand) };
}
const walk = (node, visit) => {
  if (!node || typeof node !== 'object') return;
  visit(node);
  (node.children || []).forEach((child) => walk(child, visit));
};
const find = (tree, predicate) => { const hits = []; walk(tree, (node) => predicate(node) && hits.push(node)); return hits; };
const text = (node) => (typeof node === 'string' ? node : node && typeof node === 'object' ? (node.children || []).map(text).join('') : '');
const byClass = (tree, name) => find(tree, (node) => String(node.props?.className || '').split(' ').includes(name));
const button = (tree, label) => find(tree, (node) => node.type === Button && text(node) === label)[0];

const skills = [
  { term_id: 1, name: 'Count to 100', code: 'A.1', questions: 12, target: 'proficient', required: true, chapter_id: 10, missing: false },
  { term_id: 2, name: 'Skip count', code: '', questions: 1, target: 'mastered', required: false, chapter_id: 10, missing: false },
  { term_id: 3, name: 'Add within 20', code: 'B.1', questions: 0, target: 'proficient', required: true, chapter_id: 20, missing: false },
];
const item = (over) => ({ id: 'x', type: 'lesson', content_id: 5, title: 'Counting lesson', status: 'publish', required: false, pass_percent: null, chapter_id: 10, skill_ids: [], also_in: [], ...over });
const attachments = [
  item({ id: 'a', content_id: 5, title: 'Counting lesson' }),
  item({ id: 'b', type: 'quiz', content_id: 6, title: 'Counting checkpoint', status: 'draft', required: true, pass_percent: 70, skill_ids: [1, 2], also_in: [{ id: 99, title: 'Grade 3 Math' }] }),
];
const chapters = [{ id: 10, name: 'Counting' }, { id: 20, name: 'Addition' }];
const calls = [];
const record = (name) => (...args) => calls.push([name, ...args]);
const actions = Object.fromEntries(['addSkills', 'attach', 'updateSkill', 'moveSkill', 'placeSkill', 'removeSkill', 'updateAttachment', 'removeAttachment', 'renameChapter', 'moveChapter', 'deleteChapter'].map((name) => [name, record(name)]));
const render = (props) => expand(createElement(ChapterBlock, { index: 0, total: 2, allSkills: skills, attachments, chapters, actions, busy: false, ...props }));

test('A chapter shows its name, its skills in order with their own codes, and its counts', () => {
  const tree = render({ chapter: chapters[0], skills: skills.slice(0, 2) });
  assert.equal(text(find(tree, (n) => n.type === 'h3')[0]), 'Counting');
  const rows = byClass(tree, 'ohmylms-catalog-skill-row');
  assert.equal(rows.length, 2);
  assert.deepEqual(rows.map((row) => text(byClass(row, 'ohmylms-catalog-code')[0])), ['A.1', '—'], 'a skill with no code shows a dash');
  assert.deepEqual(rows.map((row) => text(byClass(row, 'ohmylms-catalog-skill-name')[0])), ['Count to 100', 'Skip count']);
  assert.deepEqual(rows.map((row) => text(byClass(row, 'ohmylms-catalog-skill-meta')[0])), ['12 questions', '1 question']);
  assert.match(text(byClass(tree, 'ohmylms-catalog-chapter-head')[0]), /2 skills/);
});

test('Chapter content sits under the heading and skill content under each skill it covers', () => {
  const tree = render({ chapter: chapters[0], skills: skills.slice(0, 2) });
  const chapterList = byClass(tree, 'is-chapter')[0];
  assert.deepEqual(find(chapterList, (n) => n.type === 'a' && n.props.className === 'ohmylms-catalog-item-title').map(text), ['Counting lesson']);
  const [first, second] = byClass(tree, 'ohmylms-catalog-skill');
  const titles = (row) => find(row, (n) => n.props?.className === 'ohmylms-catalog-item-title').map(text);
  assert.deepEqual(titles(first), ['Counting checkpoint']);
  assert.deepEqual(titles(second), ['Counting checkpoint'], 'content scoped to two skills shows under both');
});

test('Attachments say whether they are published, required, graded and used elsewhere', () => {
  const quiz = expand(createElement(AttachmentItem, { item: attachments[1], skills, actions }));
  assert.match(text(quiz), /Quiz/);
  assert.match(text(quiz), /Not published/);
  assert.match(text(quiz), /Covers 2 skills/);
  assert.match(text(quiz), /Also in Grade 3 Math/);
  const link = find(quiz, (n) => n.type === 'a' && n.props.href === `#${catalogPath(99)}`);
  assert.equal(link.length, 1, 'it links to the other course catalog');
  assert.equal(find(quiz, (n) => n.props?.href === '#/quiz-edit/6').length, 1, 'the title opens the quiz editor');
  assert.equal(find(quiz, (n) => n.type === TextControl).length, 1, 'only a quiz has a pass percentage');
  const lesson = expand(createElement(AttachmentItem, { item: attachments[0], skills, actions }));
  assert.equal(find(lesson, (n) => n.type === TextControl).length, 0);
  assert.doesNotMatch(text(lesson), /Not published/);
  const missing = expand(createElement(AttachmentItem, { item: item({ status: 'missing' }), skills, actions }));
  assert.match(text(missing), /Unavailable/);
});

test('Editing a pass percentage clamps it and toggling required reports the change', () => {
  calls.length = 0;
  const quiz = expand(createElement(AttachmentItem, { item: attachments[1], skills, actions }));
  find(quiz, (n) => n.type === TextControl)[0].props.onChange('250');
  find(quiz, (n) => n.type === CheckboxControl)[0].props.onChange(false);
  find(quiz, (n) => n.type === Button && text(n) === 'Remove')[0].props.onClick();
  assert.deepEqual(calls, [
    ['updateAttachment', 'b', { pass_percent: 100 }],
    ['updateAttachment', 'b', { required: false }],
    ['removeAttachment', 'b'],
  ]);
});

test('Chapter footer buttons add skills or attach to the chapter', () => {
  calls.length = 0;
  const tree = render({ chapter: chapters[1], skills: [skills[2]] });
  button(tree, 'Add skills').props.onClick();
  button(tree, 'Attach to chapter').props.onClick();
  assert.deepEqual(calls, [['addSkills', 20], ['attach', { chapterId: 20, skillIds: [] }]]);
});

test('Skills not in a chapter get their own block with no chapter menu', () => {
  const tree = render({ chapter: null, skills: [{ ...skills[2], chapter_id: 0 }], attachments: [] });
  assert.equal(text(find(tree, (n) => n.type === 'h3')[0]), 'Not in a chapter yet');
  const menus = find(tree, (n) => n.type === DropdownMenu);
  assert.equal(menus.length, 1, 'only the skill row has a menu');
  assert.ok(button(tree, 'Attach to course'));
  const titles = menus[0].props.controls.map((control) => control.title);
  assert.ok(titles.includes('Move to “Counting”') && titles.includes('Move to “Addition”'));
  assert.ok(!titles.includes('Take out of its chapter'));
});

test('A skill menu offers ordering, attaching, moving and removal, wired to the right actions', () => {
  calls.length = 0;
  const row = expand(createElement(SkillRow, { skill: skills[0], chapters, skills, attachments, actions, busy: false }));
  const controls = find(row, (n) => n.type === DropdownMenu)[0].props.controls;
  const titles = controls.map((control) => control.title);
  assert.deepEqual(titles, ['Move up', 'Move down', 'Attach lesson, quiz or assignment', 'Move to “Addition”', 'Take out of its chapter', 'Remove from this course']);
  controls.forEach((control) => control.onClick());
  assert.deepEqual(calls, [
    ['moveSkill', 1, -1], ['moveSkill', 1, 1],
    ['attach', { chapterId: 10, skillIds: [1] }],
    ['placeSkill', 1, 20], ['placeSkill', 1, 0], ['removeSkill', 1],
  ]);
  calls.length = 0;
  const [target, required] = [SelectControl, CheckboxControl].map((type) => find(row, (n) => n.type === type)[0]);
  target.props.onChange('mastered');
  required.props.onChange(false);
  assert.deepEqual(calls, [['updateSkill', 1, { target: 'mastered' }], ['updateSkill', 1, { required: false }]]);
});

test('A skill that no longer exists in the library is marked and can still be removed', () => {
  const row = expand(createElement(SkillRow, { skill: { ...skills[0], missing: true, name: 'Unavailable skill' }, chapters, skills, attachments: [], actions, busy: false }));
  assert.equal(byClass(row, 'is-missing').length, 1);
});

test('Chapter menu orders and deletes, with the ends disabled', () => {
  calls.length = 0;
  const tree = render({ chapter: chapters[0], index: 0, total: 2, skills: [] });
  const controls = find(tree, (n) => n.type === DropdownMenu)[0].props.controls;
  assert.deepEqual(controls.map((c) => [c.title, Boolean(c.isDisabled)]), [['Move chapter up', true], ['Move chapter down', false], ['Delete chapter', false]]);
  controls[1].onClick(); controls[2].onClick();
  assert.deepEqual(calls, [['moveChapter', 10, 1], ['deleteChapter', 10]]);
  assert.match(text(tree), /No skills here yet\./);
});
