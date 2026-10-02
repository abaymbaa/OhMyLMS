/** REST option IDs may be numbers or strings; result controls compare them strictly. */
export function normalizeQuizReport(attempt) {
  if (!attempt?.report) return attempt;
  return {
    ...attempt,
    report: {
      ...attempt.report,
      questions: (attempt.report.questions || []).map((question) => {
        const type = question.settings?.type;
        let givenAnswer = question.given_answer;
        if (
          ['single-choice', 'multiple-choice', 'true-false', 'reorder'].includes(type) &&
          Array.isArray(givenAnswer)
        ) {
          givenAnswer = givenAnswer.map(String);
        } else if (type === 'matching' && givenAnswer && typeof givenAnswer === 'object') {
          givenAnswer = Object.fromEntries(
            Object.entries(givenAnswer).map(([key, value]) => [key, String(value)]),
          );
        }
        return {
          ...question,
          given_answer: givenAnswer,
          questions: (question.questions || []).map((option) => ({
            ...option,
            id: String(option.id),
            is_correct: String(Number(option.is_correct)),
          })),
        };
      }),
    },
  };
}

const list = (values) =>
  Array.isArray(values) ? values : values === undefined || values === null ? [] : [values];

/** Teacher-facing description of the expected answer for numerical and other types. */
export function describeExpected(question) {
  const settings = question?.settings || {};
  if (settings.type === 'numerical') {
    const answers = [...list(settings.answer), ...list(settings.answers)].join(' or ');
    const tolerance = Number(settings.tolerance) || 0;
    const range = tolerance
      ? ` ± ${tolerance}${settings.tolerance_type === 'relative' ? ' (relative)' : ''}`
      : '';
    return `${answers}${range}${settings.unit ? ` ${settings.unit}` : ''}`;
  }
  const correct = (question?.questions || []).filter((option) => String(option.is_correct) === '1');
  return correct.map((option) => option.answer).join(', ') || '—';
}

/** One row per structured part: learner response next to the expected answer or notes. */
export function structuredRows(question) {
  const given =
    question?.given_answer && typeof question.given_answer === 'object'
      ? question.given_answer
      : {};
  return (question?.settings?.parts || []).map((part) => {
    let expected = part.rubric || '';
    if (part.kind === 'numerical') {
      expected = `${[...list(part.answer), ...list(part.answers)].join(' or ')}${Number(part.tolerance) ? ` ± ${part.tolerance}` : ''}${part.unit ? ` ${part.unit}` : ''}`;
    } else if (part.kind === 'text') {
      expected = (part.accepted || []).join(' / ');
    }
    const state = question?.parts?.[part.id] || {};
    const edited = question?.part_marks?.[part.id];
    return {
      id: part.id,
      label: part.label || part.id,
      prompt: part.prompt || '',
      marks: part.marks ?? 1,
      given: given[part.id] ?? '',
      expected: expected || '—',
      max: state.max ?? null,
      awarded: edited !== undefined ? edited : (state.awarded ?? null),
      kind: part.kind,
    };
  });
}

/**
 * Set one structured part's mark in the grading state. The question total becomes the
 * sum of part marks (edited ones, else the current award), and the edited parts are sent
 * to the server as part_marks.
 */
export function setPartMark(attempt, questionId, partId, value) {
  const questions = (attempt?.report?.questions || []).map((question) => {
    if (question.id !== questionId) return question;
    const max = Number(question.parts?.[partId]?.max ?? Infinity);
    const mark = Math.max(0, Math.min(max, Number(value) || 0));
    const partMarks = { ...(question.part_marks || {}), [partId]: mark };
    const total = Object.entries(question.parts || {}).reduce(
      (sum, [id, part]) => sum + Number(id in partMarks ? partMarks[id] : part.awarded || 0),
      0,
    );
    return { ...question, part_marks: partMarks, achive_mark: Math.round(total * 10000) / 10000 };
  });
  return { ...attempt, report: { ...attempt.report, questions } };
}
