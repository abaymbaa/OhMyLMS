import { createComponentAdapter } from './component-adapter.mjs';

export const adaptQuizzes = createComponentAdapter({
  manifest: new URL('../assets/src/features/quizzes/components.json', import.meta.url),
  namespace: 'quizComponents',
  label: 'quiz',
  declarations: false,
});
