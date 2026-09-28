import { createComponentAdapter } from './component-adapter.mjs';

export const adaptAiCourse = createComponentAdapter({
  manifest: new URL('../assets/src/features/ai-course-outline/components.json', import.meta.url),
  namespace: 'aiCourseComponents',
  label: 'AI course',
  declarations: false,
});
