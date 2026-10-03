import { __ } from '@wordpress/i18n';
import { QuestionBankPage } from './QuestionBankPage';
import { SkillsPage } from './SkillsPage';
import { BankPicker } from './BankPicker';
import { SkillMapEditor } from './SkillMapEditor';
import { QuestionVersionBar } from './QuestionVersionBar';
import { AssessmentSettingsPanel } from '../assessment/AssessmentSettingsPanel';
import { PerformancePage } from '../assessment/PerformancePage';
import { InlineCheckPanel } from '../assessment/InlineCheckPanel';
import { NumericalEditor, StructuredEditor, PracticeFeedbackFields } from './MathEditors';

export const questionBankComponents = {
  QuestionBankPage,
  SkillsPage,
  BankPicker,
  SkillMapEditor,
  QuestionVersionBar,
  AssessmentSettingsPanel,
  PerformancePage,
  InlineCheckPanel,
  NumericalEditor,
  StructuredEditor,
  PracticeFeedbackFields,
};

/** Core admin pages, registered through the public extension registry before app bootstrap. */
export function registerQuestionBankPages(registry) {
  const flags = window.ohmylmsAssessment || {};
  if (flags.bankUi === false) return;
  registry.registerAdminPage('question-bank', {
    label: __('Question bank', 'ohmylms'),
    render: QuestionBankPage,
    priority: 1,
  });
  registry.registerEditorPanel('assessment-settings', {
    label: __('Assessment settings', 'ohmylms'),
    slot: '/quiz-edit/:id',
    render: AssessmentSettingsPanel,
    priority: 1,
  });
  registry.registerAdminPage('performance', {
    label: __('Skill performance', 'ohmylms'),
    render: PerformancePage,
    priority: 1,
  });
  if (flags.practice !== false) {
    registry.registerEditorPanel('inline-question-checks', {
      label: __('Inline question checks', 'ohmylms'),
      slot: '/lesson-edit/:id',
      render: InlineCheckPanel,
      priority: 1,
    });
  }
  registry.registerQuestionEditor('numerical', {
    label: __('Numerical', 'ohmylms'),
    description: __('A number checked with a tolerance', 'ohmylms'),
    render: NumericalEditor,
  });
  registry.registerQuestionEditor('structured', {
    label: __('Structured (multi-part)', 'ohmylms'),
    description: __('A shared stem with separately scored parts', 'ohmylms'),
    render: StructuredEditor,
  });
  if (flags.skills === true) registry.registerAdminPage('skills', {
    label: __('Skills', 'ohmylms'),
    render: SkillsPage,
    priority: 1,
  });
}
