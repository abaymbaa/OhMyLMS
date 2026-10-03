/** Pure helpers for the question bank, skills and picker UIs. */

export const DIFFICULTIES = ['easy', 'standard', 'challenge'];
export const STATUSES = ['draft', 'approved', 'archived'];

/** Drop empty filters so URLs and requests stay stable. */
export function cleanFilters(filters) {
  const result = {};
  for (const [key, value] of Object.entries(filters || {})) {
    if (value !== '' && value !== null && value !== undefined && value !== false)
      result[key] = value;
  }
  return result;
}

/** One-line status for a bank row. */
export function versionLabel(item) {
  if (!item?.version) return '';
  if (!item.approved_version_id) return `v${item.version} · draft`;
  return item.approved_is_current
    ? `v${item.version} · approved`
    : `v${item.version} · newer than approved`;
}

/** Build a parent/child tree from a flat skill list; unknown parents become roots. */
export function skillTree(skills) {
  const byId = new Map((skills || []).map((skill) => [skill.id, { ...skill, children: [] }]));
  const roots = [];
  for (const skill of byId.values()) {
    const parent = skill.parent && byId.get(skill.parent);
    if (parent) parent.children.push(skill);
    else roots.push(skill);
  }
  const sort = (list) => {
    list.sort((left, right) => left.name.localeCompare(right.name));
    list.forEach((skill) => sort(skill.children));
    return list;
  };
  return sort(roots);
}

/** Flatten a tree with depth for indented selects. */
export function flattenTree(tree, depth = 0) {
  return tree.flatMap((skill) => [{ ...skill, depth }, ...flattenTree(skill.children, depth + 1)]);
}

/**
 * Would making `candidate` a prerequisite of `skillId` create a cycle?
 * Mirrors the server check so the UI can disable invalid choices.
 */
export function createsCycle(skills, skillId, candidate) {
  if (skillId === candidate) return true;
  const byId = new Map((skills || []).map((skill) => [skill.id, skill]));
  const seen = new Set();
  const stack = [candidate];
  while (stack.length) {
    const current = stack.pop();
    if (current === skillId) return true;
    if (seen.has(current)) continue;
    seen.add(current);
    stack.push(...(byId.get(current)?.prerequisites || []));
  }
  return false;
}

/** Normalize a part => roles skill map, removing empty parts and duplicate supporting skills. */
export function normalizeSkillMap(map) {
  const result = {};
  for (const [part, roles] of Object.entries(map || {})) {
    const primary = Number(roles?.primary) || 0;
    const supporting = [...new Set((roles?.supporting || []).map(Number))].filter(
      (id) => id > 0 && id !== primary,
    );
    if (primary || supporting.length) result[part] = { primary, supporting };
  }
  return result;
}

export function setPrimarySkill(map, part, skillId) {
  const current = map?.[part] || { primary: 0, supporting: [] };
  return normalizeSkillMap({ ...map, [part]: { ...current, primary: Number(skillId) || 0 } });
}

export function toggleSupportingSkill(map, part, skillId) {
  const current = map?.[part] || { primary: 0, supporting: [] };
  const id = Number(skillId);
  const supporting = current.supporting.includes(id)
    ? current.supporting.filter((value) => value !== id)
    : [...current.supporting, id];
  return normalizeSkillMap({ ...map, [part]: { ...current, supporting } });
}

/** Questions already in the quiz cannot be added again. */
export function selectableResults(items, existingIds) {
  const existing = new Set((existingIds || []).map(Number));
  return (items || []).map((item) => ({ ...item, alreadyInQuiz: existing.has(Number(item.id)) }));
}

/** Append newly linked server questions to the editor list without touching local edits. */
export function appendLinkedQuestions(current, serverContent, addedIds) {
  const present = new Set((current || []).map((question) => Number(question.id)));
  const added = new Set((addedIds || []).map(Number));
  const extra = (serverContent || []).filter(
    (question) => added.has(Number(question.id)) && !present.has(Number(question.id)),
  );
  return [...(current || []), ...extra];
}

/** Numerical editor helpers. */
export const numbersToList = (values) => (Array.isArray(values) ? values.join(', ') : '');
export function listToNumbers(text) {
  const numbers = String(text || '')
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item !== '' && Number.isFinite(Number(item)))
    .map(Number);
  return numbers.length ? numbers : undefined;
}

/** Structured-part helpers; part IDs are stable once created. */
export function addPart(parts) {
  const used = new Set((parts || []).map((part) => part.id));
  let index = (parts || []).length;
  let id = String.fromCharCode(97 + (index % 26));
  while (used.has(id)) id = `p${++index}`;
  return [...(parts || []), { id, label: `(${id})`, kind: 'written', marks: 1, prompt: '' }];
}
export function updatePart(parts, index, fields) {
  return (parts || []).map((part, position) =>
    position === index ? { ...part, ...fields } : part,
  );
}
export function removePart(parts, index) {
  return (parts || []).filter((_, position) => position !== index);
}

/** Types the bank's New question form can write; others are authored inside a quiz. */
export const NEW_QUESTION_TYPES = [
  'single-choice',
  'multiple-choice',
  'true-false',
  'short-text',
  'long-text',
  'numerical',
  'structured',
];
const CHOICE_TYPES = ['single-choice', 'multiple-choice'];

/** A blank draft for the New question form. */
export function emptyDraft(type = 'single-choice') {
  return {
    type,
    name: '',
    description: '',
    marks: 1,
    options:
      type === 'true-false'
        ? [
            { answer: 'True', correct: true },
            { answer: 'False', correct: false },
          ]
        : CHOICE_TYPES.includes(type)
          ? [
              { answer: '', correct: true },
              { answer: '', correct: false },
            ]
          : [],
    settings: type === 'structured' ? { parts: addPart([]) } : {},
  };
}

/** Change the draft's type, keeping the shared fields. */
export function changeDraftType(draft, type) {
  const blank = emptyDraft(type);
  const keepOptions = CHOICE_TYPES.includes(type) && CHOICE_TYPES.includes(draft.type);
  return {
    ...blank,
    name: draft.name,
    description: draft.description,
    marks: draft.marks,
    options: keepOptions ? draft.options : blank.options,
  };
}

/** Mark one option correct (single choice, true/false) or toggle it (multiple choice). */
export function setOptionCorrect(draft, index, correct) {
  const single = draft.type !== 'multiple-choice';
  return {
    ...draft,
    options: draft.options.map((option, position) => ({
      ...option,
      correct: position === index ? correct : single ? false : option.correct,
    })),
  };
}

/** Problems that block saving, as message keys for the form. */
export function validateDraft(draft) {
  const problems = [];
  if (!String(draft.name || '').trim()) problems.push('name');
  if (!(Number(draft.marks) >= 0)) problems.push('marks');
  if (CHOICE_TYPES.includes(draft.type) || draft.type === 'true-false') {
    if (draft.options.length < 2) problems.push('options-count');
    if (draft.options.some((option) => !String(option.answer || '').trim()))
      problems.push('options-empty');
    const correct = draft.options.filter((option) => option.correct).length;
    if (draft.type === 'multiple-choice' ? correct < 1 : correct !== 1)
      problems.push('options-correct');
  }
  if (draft.type === 'numerical') {
    const answers = [draft.settings.answer, ...(draft.settings.answers || [])].filter(
      (value) => value !== undefined && value !== null && value !== '',
    );
    if (!answers.length || answers.some((value) => !Number.isFinite(Number(value))))
      problems.push('numerical-answer');
  }
  if (draft.type === 'structured' && !(draft.settings.parts || []).length) problems.push('parts');
  return problems;
}

/** REST payload for POST /question (no quiz: the question goes straight to the bank). */
export function draftToPayload(draft) {
  const options = CHOICE_TYPES.includes(draft.type) || draft.type === 'true-false';
  return {
    name: String(draft.name).trim(),
    description: draft.description || '',
    settings: {
      ...draft.settings,
      type: draft.type,
      required: false,
      // A structured question is worth the sum of its parts.
      score: {
        enabled: true,
        value:
          draft.type === 'structured'
            ? (draft.settings.parts || []).reduce((sum, part) => sum + (Number(part.marks) || 0), 0)
            : Number(draft.marks) || 0,
      },
    },
    questions: options
      ? draft.options.map((option, index) => ({
          answer: String(option.answer).trim(),
          is_correct: option.correct ? 1 : 0,
          order_number: index + 1,
        }))
      : [],
  };
}
