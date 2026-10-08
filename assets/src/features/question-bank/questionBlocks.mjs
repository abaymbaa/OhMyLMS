export const QUESTION_BLOCK_PREFIX = 'ohmylms/question-';
export const QUESTION_BLOCK_TYPES = [
  ['single-choice', 'Single choice'],
  ['multiple-choice', 'Multiple choice'],
  ['true-false', 'True / false'],
  ['short-text', 'Short answer'],
  ['long-text', 'Long answer'],
  ['fill-in-the-blank', 'Fill in the blank'],
  ['statement', 'Statement'],
  ['reorder', 'Reorder'],
  ['matching', 'Matching'],
  ['numerical', 'Numerical'],
  ['structured', 'Structured (multi-part)'],
];
export const questionBlockName = (type) => QUESTION_BLOCK_PREFIX + type;
export const isQuestionBlock = (block) => block.name.startsWith(QUESTION_BLOCK_PREFIX);
/** Answer keys, grading settings and options never enter public block content. */
export function publicQuestionBlocks(blocks) {
  return blocks
    .filter((block) => !isQuestionBlock(block))
    .map((block) => ({
      ...block,
      innerBlocks: block.innerBlocks ? publicQuestionBlocks(block.innerBlocks) : [],
    }));
}

/** Canonical assessment data when an author inserts a question-type block. */
export function questionTypePatch(question, type, seed = Date.now()) {
  if (question.settings?.type === type) return {};
  const settings = {
    type,
    score: question.settings?.score || { enabled: true, value: 1 },
    ...Object.fromEntries(
      ['required', 'randomize', 'hint', 'explanation']
        .filter((key) => question.settings?.[key] !== undefined)
        .map((key) => [key, question.settings[key]]),
    ),
  };
  if (type === 'structured')
    settings.parts = [{ id: 'p1', label: 'a', kind: 'written', marks: 1, prompt: '' }];
  const count = ['short-text', 'long-text', 'statement', 'fill-in-the-blank'].includes(type)
    ? 1
    : 2;
  const questions = ['numerical', 'structured'].includes(type)
    ? []
    : Array.from({ length: count }, (_, index) => ({
        id: seed + index,
        answer: type === 'true-false' ? (index ? 'False' : 'True') : '',
        is_correct: ['statement', 'fill-in-the-blank'].includes(type),
        order_number: index + 1,
        temp: true,
        ...(['matching', 'reorder'].includes(type)
          ? { matching_data: { label: '', image_id: '', image_url: '' } }
          : {}),
      }));
  return { settings, questions };
}

/** A learner-facing preview model excludes correctness, expected values and teacher-only notes. */
export function questionPreviewModel(question) {
  const type = question.settings?.type || question.type;
  const name = question.name || '';
  const title =
    type === 'fill-in-the-blank'
      ? name
          .split(/(\{[^{}<>]+\})/u)
          .filter(Boolean)
          .map((text) => (text.startsWith('{') && text.endsWith('}') ? { blank: true } : { text }))
      : [{ text: name }];
  return {
    type,
    title,
    body: question.description || '',
    unit: question.settings?.unit || '',
    options: (question.questions || question.options || []).map((option, index) => ({
      id: String(option.id ?? index),
      answer: option.answer || '',
      match: option.matching_data?.label || '',
    })),
    parts: (question.settings?.parts || []).map(({ id, label, prompt, kind, marks }) => ({
      id,
      label,
      prompt,
      kind,
      marks,
    })),
  };
}

/** Missing authored content should be explained in preview, rather than rendered as empty controls. */
export function questionPreviewIssues(question) {
  const view = questionPreviewModel(question);
  const issues = [];
  if (!question.name?.trim() || question.name === 'Untitled') issues.push('title');
  if (!QUESTION_BLOCK_TYPES.some(([type]) => type === view.type)) issues.push('type');
  if (
    ['single-choice', 'multiple-choice', 'true-false', 'matching', 'reorder'].includes(view.type)
  ) {
    if (view.options.length < 2 || view.options.some((option) => !option.answer.trim()))
      issues.push('answers');
  }
  if (view.type === 'matching' && view.options.some((option) => !option.match.trim()))
    issues.push('matches');
  if (view.type === 'structured' && !view.parts.length) issues.push('parts');
  return issues;
}
