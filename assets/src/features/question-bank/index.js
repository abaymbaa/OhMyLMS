import { registerQuestionBankPages as registerPages } from './registerPages';
import { QuestionBankPage } from './QuestionBankPage';
import { SkillsPage } from './SkillsPage';
import { BankPicker } from './BankPicker';
import { SkillMapEditor } from './SkillMapEditor';
import { QuestionVersionBar } from './QuestionVersionBar';
import { AssessmentSettingsPanel } from '../assessment/AssessmentSettingsPanel';
import { InlineCheckPanel } from '../assessment/InlineCheckPanel';
import { NumericalEditor, StructuredEditor, PracticeFeedbackFields } from './MathEditors';

export const questionBankComponents = {
  QuestionBankPage,
  SkillsPage,
  BankPicker,
  SkillMapEditor,
  QuestionVersionBar,
  AssessmentSettingsPanel,
  InlineCheckPanel,
  NumericalEditor,
  StructuredEditor,
  PracticeFeedbackFields,
};

export function registerQuestionBankPages(registry) {
  return registerPages(registry, questionBankComponents);
}
