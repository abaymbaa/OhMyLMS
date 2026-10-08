import { store, getContext, getElement, withSyncEvent, withScope } from '@wordpress/interactivity';
import { isAnswered, emit } from 'ohmylms/interactivity';

const roots = new WeakMap();
const rootOf = () => getElement().ref.closest('[data-wp-interactive="ohmylms/quiz"]');
const questionBoxes = (root) => [...root.querySelectorAll('.ohmylms-quiz-box')];

function validate(root, context, currentOnly = false) {
  const errors = {};
  questionBoxes(root).forEach((box, index) => {
    const number = index + 1;
    const page = context.layout === 'number_of_questions_per_page' ? Math.ceil(number / context.perPage) : number;
    if (currentOnly && page !== context.page) return;
    const required = box.querySelector('.is-required');
    if (required && !['', '0', 'false', 'no'].includes(required.value) && !isAnswered(box, required.getAttribute('question-type'))) {
      errors[number] = true;
    }
  });
  context.errors = errors;
  const first = Number(Object.keys(errors)[0]);
  if (first) {
    if (!currentOnly) context.page = context.layout === 'number_of_questions_per_page' ? Math.ceil(first / context.perPage) : first;
    const box = questionBoxes(root)[first - 1];
    box.querySelector('input:not([type=hidden]),textarea,select')?.focus();
  }
  return !first;
}

const { actions } = store('ohmylms/quiz', {
  state: {
    get isPage() { const c = getContext(); return c.page === c.questionPage; },
    get isQuestion() { const c = getContext(); return c.layout !== 'one_question_per_page' || c.page === c.questionNumber; },
    get previousDisabled() { const c = getContext(); return c.page <= 1 || c.submitting; },
    get nextDisplay() { const c = getContext(); return c.page < c.totalPages ? '' : 'none'; },
    get submitDisplay() { const c = getContext(); return c.page >= c.totalPages || c.error ? '' : 'none'; },
    get requiredDisplay() { const c = getContext(); return c.errors[c.questionNumber] ? 'block' : 'none'; },
    get exitDisplay() { return getContext().exitOpen ? 'block' : 'none'; },
    get errorDisplay() { return getContext().error ? 'block' : 'none'; },
    get timerWidth() { const c = getContext(); return `${c.duration ? Math.max(0, c.remaining / c.duration * 100) : 0}%`; },
    get timeLabel() {
      const seconds = getContext().remaining;
      const pad = (value) => String(value).padStart(2, '0');
      return `${seconds >= 3600 ? `${pad(Math.floor(seconds / 3600))}h ` : ''}${pad(Math.floor(seconds % 3600 / 60))}m ${pad(seconds % 60)}s`;
    },
  },
  actions: {
    next: withSyncEvent((event) => {
      event.preventDefault(); event.stopPropagation();
      const c = getContext(), root = rootOf();
      if (c.submitting || c.page >= c.totalPages || !validate(root, c, true)) return;
      if (!emit(root, 'quiz-before-navigate', { quizId: c.quizId, page: c.page + 1 }, true)) return;
      c.page++;
      emit(root, 'quiz-navigated', { quizId: c.quizId, page: c.page });
    }),
    previous: withSyncEvent((event) => {
      event.preventDefault(); event.stopPropagation();
      const c = getContext(), root = rootOf();
      if (c.submitting || c.page <= 1 || !emit(root, 'quiz-before-navigate', { quizId: c.quizId, page: c.page - 1 }, true)) return;
      c.page--;
      emit(root, 'quiz-navigated', { quizId: c.quizId, page: c.page });
    }),
    submitClick: withSyncEvent((event) => { event.stopPropagation(); }),
    submit: withSyncEvent((event) => {
      event.stopPropagation();
      const c = getContext(), root = rootOf();
      const exit = ['ohmylms-quiz-exit-submission', 'ohmylms-quiz-preview-exit'].includes(event.target.querySelector('[name=action]')?.value);
      if (c.submitting || (!exit && !validate(root, c)) || !emit(root, 'quiz-before-submit', { quizId: c.quizId, exit }, true)) {
        event.preventDefault(); return;
      }
      // Native form POST retains the existing nonce, enrollment, grading and redirect checks.
      c.submitting = true;
    }),
    answerChanged: withSyncEvent((event) => {
      event.stopPropagation();
      const c = getContext(), input = event.target;
      const limit = Number(input.getAttribute('data-limit'));
      if (limit > 0 && input.value.length > limit) input.value = input.value.slice(0, limit);
      const hint = input.parentElement.querySelector('.ohmylms-character-limit-hints');
      if (hint && limit > 0) hint.textContent = `${input.value.length}/${limit}`;
      if (input.matches('.textarea-auto-resize')) { input.style.height = 'auto'; input.style.height = `${input.scrollHeight}px`; }
      if (c.questionNumber) c.errors = { ...c.errors, [c.questionNumber]: false };
      emit(rootOf(), 'quiz-answer-changed', { quizId: c.quizId, questionNumber: c.questionNumber });
    }),
    openExit: withSyncEvent((event) => { event.preventDefault(); event.stopPropagation(); getContext().exitOpen = true; }),
    closeExit: withSyncEvent((event) => { event.preventDefault(); event.stopPropagation(); getContext().exitOpen = false; }),
    escape(event) { if (event.key === 'Escape') getContext().exitOpen = false; },
    outside(event) { if (!event.target.closest('.quiz-alert-wrapper,.quiz-page-close')) getContext().exitOpen = false; },
    *expire() {
      const c = getContext(), root = rootOf();
      if (c.submitting) return;
      c.submitting = true;
      const form = root.querySelector('.ohmylms-quiz-form').closest('form');
      if (c.preview) {
        HTMLFormElement.prototype.submit.call(form);
        return;
      }
      const body = new URLSearchParams(new FormData(form));
      body.set('action', 'ohmylms_quiz_exit_submission');
      body.set('content_id', c.quizId); body.set('attempt_id', c.attemptId); body.set('nonce', c.expiryNonce);
      try {
        const response = yield fetch(c.ajaxUrl, { method: 'POST', credentials: 'same-origin', body });
        const result = yield response.json();
        if (!response.ok || !result.success || !result.data?.url) throw new Error(c.submissionError);
        emit(root, 'quiz-expired', { quizId: c.quizId });
        window.location.assign(result.data.url);
      } catch {
        c.error = c.submissionError; c.submitting = false;
        emit(root, 'quiz-error', { quizId: c.quizId, operation: 'expiry' });
      }
    },
  },
  callbacks: {
    mount() {
      const root = getElement().ref, c = getContext();
      if (roots.has(root)) return;
      const deadline = Date.now() + c.remaining * 1000;
      let timer;
      const expire = withScope(() => actions.expire());
      if (c.timed) timer = setInterval(() => {
        c.remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
        if (!c.remaining) { clearInterval(timer); expire(); }
      }, 250);
      roots.set(root, true);
      emit(root, 'quiz-mounted', { quizId: c.quizId });
      return () => { clearInterval(timer); roots.delete(root); emit(root, 'quiz-unmounted', { quizId: c.quizId }); };
    },
  },
});
