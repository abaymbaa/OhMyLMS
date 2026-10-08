/**
 * Keep saved option IDs and extension settings; remove only temporary UI IDs.
 * A temporary (unsaved or duplicated) question never sends option IDs: copied
 * option rows belong to the original question and must be created anew.
 */
export function prepareQuizPayload(quiz, questions) {
  const clean = (item) => {
    const copy = { ...item };
    if (copy.temp) {
      delete copy.temp;
      delete copy.id;
    }
    return copy;
  };
  const payload = {
    ...quiz,
    content: questions.map((question) => {
      const cleaned = clean(question);
      if (question.temp) delete cleaned.modified;
      else if (question.modified) cleaned.base_modified = question.modified;
      delete cleaned.modified;
      delete cleaned.usage;
      return {
        ...cleaned,
        questions: (question.questions || []).map((option) => {
          const copy = clean(option);
          if (question.temp) delete copy.id;
          return copy;
        }),
      };
    }),
  };
  delete payload.modified;
  if (quiz?.modified) payload.base_modified = quiz.modified;
  return payload;
}
export function canLeaveQuestion(question, validate) {
  return !question?.settings?.type || validate(question).isValid;
}
/** Reorder without mutating the store's option objects. */
export function moveOption(options, from, to) {
  if (
    !Number.isInteger(from) ||
    !Number.isInteger(to) ||
    from < 0 ||
    to < 0 ||
    from >= options.length ||
    to >= options.length
  )
    return options;
  const reordered = [...options];
  const [moved] = reordered.splice(from, 1);
  reordered.splice(to, 0, moved);
  return reordered.map((option, index) => ({ ...option, order_number: index + 1 }));
}

/** A new form card is an independent draft, including independent answer rows. */
export function newQuestionCard(source = {}, id = Date.now()) {
  return {
    id,
    temp: true,
    name: source.name || '',
    description: source.description || '',
    settings: structuredClone(
      source.settings || {
        type: 'single-choice',
        score: { enabled: true, value: 1 },
        required: false,
      },
    ),
    questions: (
      source.questions || [
        { answer: '', is_correct: true },
        { answer: '', is_correct: false },
      ]
    ).map((option, index) => {
      const copy = structuredClone(option);
      delete copy.id;
      delete copy.question_id;
      return { ...copy, id: id + index + 1, temp: true, order_number: index + 1 };
    }),
    ...(source.image_src ? { image_src: source.image_src, thumbnail_id: source.thumbnail_id } : {}),
    ...(source.video_src ? { video_src: source.video_src } : {}),
  };
}

const same = (left, right) => JSON.stringify(left) === JSON.stringify(right);

/** Quiz fields edited while a save was pending win over the server response. */
export function mergeSavedQuiz(saved, submitted, current) {
  const result = { ...saved };
  delete result.content;
  delete result.saved_ids;
  for (const key of Object.keys(current || {})) {
    if (key === 'modified') continue;
    if (!same(current[key], submitted?.[key])) result[key] = current[key];
  }
  return result;
}

/**
 * Combine the saved question list with edits made while the save was in flight.
 *
 * @param {Array} saved      Questions returned by the server (real IDs).
 * @param {Array} submitted  The store's questions when the save began (may hold temp IDs).
 * @param {Array} current    The store's questions now.
 * @param {Array} savedIds   Server IDs for each submitted question, in submitted order.
 */
export function mergeSavedQuestions(saved, submitted, current, savedIds = []) {
  const realId = new Map();
  submitted.forEach((question, index) => {
    if (savedIds[index] != null) realId.set(question.id, Number(savedIds[index]));
  });
  const byId = new Map((saved || []).map((question) => [Number(question.id), question]));
  const result = [];
  for (const question of current || []) {
    const id = realId.has(question.id)
      ? realId.get(question.id)
      : question.temp
        ? null
        : Number(question.id);
    const fresh = id != null ? byId.get(id) : undefined;
    const before = submitted.find((item) => item.id === question.id);
    if (!fresh) {
      // Added after the save began, or not returned: keep the local edit.
      result.push(question);
    } else if (before && same(before, question)) {
      result.push(fresh);
    } else {
      const merged = { ...question, id: fresh.id, modified: fresh.modified };
      delete merged.temp;
      result.push(merged);
    }
  }
  return result;
}

/** The question a failed batch save refers to, so the editor can select it. */
export function failedQuestion(error, submitted) {
  const first = error?.data?.errors?.[0];
  if (!first || !Number.isInteger(first.index)) return null;
  return submitted[first.index] || null;
}
