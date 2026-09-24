/** REST option IDs may be numbers or strings; result controls compare them strictly. */
export function normalizeQuizReport(attempt) {
  if (!attempt?.report) return attempt;
  return {...attempt, report: {...attempt.report, questions: (attempt.report.questions || []).map(question => {
    const type = question.settings?.type;
    let givenAnswer = question.given_answer;
    if (['single-choice', 'multiple-choice', 'true-false', 'reorder'].includes(type) && Array.isArray(givenAnswer)) {
      givenAnswer = givenAnswer.map(String);
    } else if (type === 'matching' && givenAnswer && typeof givenAnswer === 'object') {
      givenAnswer = Object.fromEntries(Object.entries(givenAnswer).map(([key, value]) => [key, String(value)]));
    }
    return {...question, given_answer: givenAnswer, questions: (question.questions || []).map(option => ({...option, id: String(option.id), is_correct: String(Number(option.is_correct))}))};
  })}};
}
