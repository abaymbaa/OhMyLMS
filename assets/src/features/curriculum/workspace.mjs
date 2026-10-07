/**
 * Pure helpers for the syllabus workspace: the full-page editor with the outline on the left and the
 * selected topic, chapter or skill on the right.
 *
 * Words: a syllabus holds topics (curriculum items beneath it), a topic holds chapters (skill groups), a
 * chapter holds skills. A syllabus is also a course: every chapter is a chapter of that course and every
 * skill one of its outcomes.
 *
 * The outline is what the server returns: `contents` (the syllabus first, then its topics in tree order with
 * a `depth`), each with its `groups`, each with its `skills`. The server validates every change again.
 */

export const CURRICULUM_PATH = '/content-hub/curriculum';
export const workspacePath = (id) => `${CURRICULUM_PATH}/syllabus/${Number(id)}`;

export const contentKey = (id) => `c:${id}`;
export const groupKey = (id) => `g:${id}`;
export const skillKey = (groupId, termId) => `s:${groupId}:${termId}`;

/** The syllabus whose workspace is open, read from the hash route `#/content-hub/curriculum/syllabus/ID`. */
export function syllabusIdFromHash(hash) {
  const match = /#\/content-hub\/curriculum\/syllabus\/(\d+)/.exec(String(hash || ''));
  return match ? Number(match[1]) : 0;
}

/** "1.1 · Quadratic equations", or just the name when the topic has no code. */
export function topicLabel(content) {
  return content.code ? `${content.code} · ${content.name}` : content.name;
}

/**
 * Nest the outline for the left panel. The syllabus itself is the root. Under every topic come its chapters
 * (skill groups) and then its sub-topics, which is also the order the course shows its chapters in; under
 * every chapter come its skills. `index` finds any node by key, and every node knows its parent's key.
 */
export function buildOutline(outline) {
  const contents = outline?.contents || [];
  const index = new Map();
  if (!contents.length) return { root: null, index };
  const byId = new Map();
  for (const content of contents) {
    const node = {
      key: contentKey(content.id),
      kind: 'content',
      id: content.id,
      depth: content.depth,
      content,
      parentKey: null,
      children: [],
    };
    byId.set(content.id, node);
    index.set(node.key, node);
  }
  const root = byId.get(contents[0].id);
  // Chapters first, so they sit before the sub-topics in every branch.
  for (const content of contents) {
    const parent = byId.get(content.id);
    for (const group of content.groups || []) {
      const groupNode = {
        key: groupKey(group.id),
        kind: 'group',
        id: group.id,
        group,
        parentKey: parent.key,
        children: [],
      };
      index.set(groupNode.key, groupNode);
      for (const skill of group.skills || []) {
        const skillNode = {
          key: skillKey(group.id, skill.term_id),
          kind: 'skill',
          id: skill.term_id,
          skill,
          groupId: group.id,
          parentKey: groupNode.key,
          children: [],
        };
        index.set(skillNode.key, skillNode);
        groupNode.children.push(skillNode);
      }
      parent.children.push(groupNode);
    }
  }
  for (const content of contents.slice(1)) {
    const node = byId.get(content.id);
    const parent = byId.get(content.parent_id) || root;
    node.parentKey = parent.key;
    parent.children.push(node);
  }
  return { root, index };
}

/** Nodes from the syllabus down to the one with this key (empty when the key is unknown). */
export function pathTo(index, key) {
  const path = [];
  const seen = new Set();
  let node = index.get(key);
  while (node && !seen.has(node.key)) {
    seen.add(node.key);
    path.unshift(node);
    node = node.parentKey ? index.get(node.parentKey) : null;
  }
  return path;
}

/** Keys of every node above this one, nearest first. */
export function ancestorKeys(index, key) {
  return pathTo(index, key)
    .slice(0, -1)
    .reverse()
    .map((node) => node.key);
}

/** The topic (or the syllabus) a node belongs to; a topic is its own. New chapters go there. */
export function containerOf(tree, key) {
  let node = tree.index.get(key);
  while (node && node.kind !== 'content') node = tree.index.get(node.parentKey);
  return node || tree.root;
}

/** What lives under a node, at any depth. */
export function nodeCounts(node) {
  const counts = { topics: 0, chapters: 0, skills: 0 };
  const walk = (current) => {
    for (const child of current.children) {
      if (child.kind === 'content') counts.topics += 1;
      else if (child.kind === 'group') counts.chapters += 1;
      else counts.skills += 1;
      walk(child);
    }
  };
  if (node) walk(node);
  return counts;
}

export const topicsOf = (node) =>
  (node?.children || []).filter((child) => child.kind === 'content');
export const chaptersOf = (node) =>
  (node?.children || []).filter((child) => child.kind === 'group');

/** The chapter to show first: the first chapter of the syllabus, else its first topic, else the syllabus. */
export function defaultKey(tree) {
  if (!tree.root) return '';
  const first = (node) => {
    if (chaptersOf(node)[0]) return chaptersOf(node)[0].key;
    for (const topic of topicsOf(node)) {
      const found = first(topic);
      if (found) return found;
    }
    return '';
  };
  return first(tree.root) || topicsOf(tree.root)[0]?.key || tree.root.key;
}

/**
 * Keep a selection valid after the outline changes. A node that has gone is replaced by `fallback` (the
 * parent the editor remembered), and failing that by the syllabus.
 */
export function resolveKey(tree, key, fallback = '') {
  if (tree.index.has(key)) return key;
  if (tree.index.has(fallback)) return fallback;
  return tree.root?.key || '';
}

/** Keys that start open: the syllabus and every branch on the way to the selection. */
export function openFor(tree, key) {
  return new Set([tree.root?.key, ...ancestorKeys(tree.index, key)].filter(Boolean));
}

/** Position to ask for when moving a node one step (-1 up, +1 down) among siblings of its own kind. */
export function stepAmongSiblings(tree, node, direction) {
  const parent = tree.index.get(node.parentKey);
  const siblings = (parent?.children || []).filter((child) => child.kind === node.kind);
  const at = siblings.findIndex((child) => child.key === node.key);
  const to = at + direction;
  if (at < 0 || to < 0 || to >= siblings.length) return null;
  return to;
}

/** Hash route that edits a piece of content: lessons, quizzes and assignments have editors of their own. */
export function editPath(type, id) {
  const paths = { lesson: 'lesson-edit', quiz: 'quiz-edit', assignment: 'assignment-edit' };
  return paths[type] ? `/${paths[type]}/${id}` : '';
}

/** Hints that mirror the server's rules for a topic's own fields. */
export function validateTopic(draft) {
  const errors = {};
  const name = String(draft?.name ?? '').trim();
  if (!name) errors.name = 'required';
  else if (name.length > 190) errors.name = 'too-long';
  for (const key of ['code', 'version'])
    if (String(draft?.[key] ?? '').trim().length > 60) errors[key] = 'too-long';
  if (String(draft?.description ?? '').length > 2000) errors.description = 'too-long';
  return errors;
}

/** The sentence under the title: the course a syllabus is, in words. */
export function courseState(course) {
  if (!course) return 'none';
  if (course.status === 'publish' && course.published) return 'live';
  if (course.published) return 'published-draft';
  return 'draft';
}
