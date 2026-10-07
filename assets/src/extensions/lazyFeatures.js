import { lazyFactories, lazyComponents } from './LazyFeature';
import quizzes from '../features/quizzes/components.json';
import courses from '../features/courses/components.json';
import students from '../features/students/components.json';
import gamification from '../features/gamification/components.json';
import reports from '../features/quiz-reports/components.json';
import learning from '../features/learning/components.json';
import memberships from '../features/memberships/components.json';
import communities from '../features/communities/components.json';
import analytics from '../features/analytics/components.json';
import commerce from '../features/commerce/components.json';
import certificates from '../features/certificates/components.json';
import emails from '../features/emails/components.json';
import settings from '../features/settings/components.json';
import integrations from '../features/integrations/components.json';
import webhooks from '../features/webhooks/components.json';
import taxonomies from '../features/taxonomies/components.json';
import setup from '../features/setup/components.json';

export const quizComponents = lazyFactories(
  quizzes,
  () => import(/* webpackChunkName: "quizzes" */ '../features/quizzes'),
  'quizComponents',
);
export const courseComponents = lazyFactories(
  courses,
  () => import(/* webpackChunkName: "courses" */ '../features/courses'),
  'courseComponents',
);
export const studentComponents = lazyFactories(
  students,
  () => import(/* webpackChunkName: "students" */ '../features/students'),
  'studentComponents',
);
export const gamificationComponents = lazyFactories(
  gamification,
  () => import(/* webpackChunkName: "gamification" */ '../features/gamification'),
  'gamificationComponents',
);
export const quizReportComponents = lazyFactories(
  reports,
  () => import(/* webpackChunkName: "quiz-reports" */ '../features/quiz-reports'),
  'quizReportComponents',
);
export const learningComponents = lazyFactories(
  learning,
  () => import(/* webpackChunkName: "learning" */ '../features/learning'),
  'learningComponents',
);
export const membershipComponents = lazyFactories(
  memberships,
  () => import(/* webpackChunkName: "memberships" */ '../features/memberships'),
  'membershipComponents',
);
export const communityComponents = lazyFactories(
  communities,
  () => import(/* webpackChunkName: "communities" */ '../features/communities'),
  'communityComponents',
);
export const analyticsComponents = lazyFactories(
  analytics,
  () => import(/* webpackChunkName: "analytics" */ '../features/analytics'),
  'analyticsComponents',
);
export const commerceComponents = lazyFactories(
  commerce,
  () => import(/* webpackChunkName: "commerce" */ '../features/commerce'),
  'commerceComponents',
);
export const certificateComponents = lazyFactories(
  certificates,
  () => import(/* webpackChunkName: "certificates" */ '../features/certificates'),
  'certificateComponents',
);
export const emailComponents = lazyFactories(
  emails,
  () => import(/* webpackChunkName: "emails" */ '../features/emails'),
  'emailComponents',
);
export const settingsComponents = lazyFactories(
  settings,
  () => import(/* webpackChunkName: "settings" */ '../features/settings'),
  'settingsComponents',
);
export const integrationComponents = lazyFactories(
  integrations,
  () => import(/* webpackChunkName: "integrations" */ '../features/integrations'),
  'integrationComponents',
);
export const webhookComponents = lazyFactories(
  webhooks,
  () => import(/* webpackChunkName: "webhooks" */ '../features/webhooks'),
  'webhookComponents',
);
export const taxonomyComponents = lazyFactories(
  taxonomies,
  () => import(/* webpackChunkName: "taxonomies" */ '../features/taxonomies'),
  'taxonomyComponents',
);
export const setupComponents = lazyFactories(
  setup,
  () => import(/* webpackChunkName: "setup" */ '../features/setup'),
  'setupComponents',
);

export const curriculumComponents = lazyComponents(
  ['CurriculumPage', 'SyllabusPage'],
  () => import(/* webpackChunkName: "curriculum" */ '../features/curriculum'),
  'curriculumComponents',
);
export const trackComponents = lazyComponents(
  ['TracksPage'],
  () => import(/* webpackChunkName: "tracks" */ '../features/tracks'),
  'trackComponents',
);

export const contentHubComponents = lazyComponents(
  ['LessonsPage'],
  () => import(/* webpackChunkName: "content-hub" */ '../features/content-hub'),
  'contentHubComponents',
);

export const questionBankComponents = lazyComponents(
  [
    'QuestionBankPage',
    'SkillsPage',
    'BankPicker',
    'SkillMapEditor',
    'QuestionVersionBar',
    'AssessmentSettingsPanel',
    'InlineCheckPanel',
    'NumericalEditor',
    'StructuredEditor',
    'PracticeFeedbackFields',
  ],
  () => import(/* webpackChunkName: "question-bank" */ '../features/question-bank'),
  'questionBankComponents',
);
