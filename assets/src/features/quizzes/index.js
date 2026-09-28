import { createQuizEditor } from './QuizEditor';
import { createQuestionList } from './QuestionList';
import { createQuestionCanvas } from './QuestionCanvas';
import { createQuestionSettings } from './QuestionSettings';
import { createQuizSettings } from './QuizSettings';
import { createQuizSettingsFields } from './QuizSettingsFields';
import { createChoiceOptionsEditor } from './ChoiceOptionsEditor';
import { createTextAnswerEditor } from './TextAnswerEditor';
import { createMultipleChoiceEditor } from './MultipleChoiceEditor';
import { createSingleChoiceEditor } from './SingleChoiceEditor';
import { createTrueFalseEditor } from './TrueFalseEditor';
import { createShortTextEditor } from './ShortTextEditor';
import { createLongTextEditor } from './LongTextEditor';
import { createStatementEditor } from './StatementEditor';
import { createFillInTheBlankEditor } from './FillInTheBlankEditor';
import { createReorderEditor } from './ReorderEditor';
import { createMatchingEditor } from './MatchingEditor';
export const quizComponents = {
  QuizEditor: createQuizEditor,
  QuestionList: createQuestionList,
  QuestionCanvas: createQuestionCanvas,
  QuestionSettings: createQuestionSettings,
  QuizSettings: createQuizSettings,
  QuizSettingsFields: createQuizSettingsFields,
  ChoiceOptionsEditor: createChoiceOptionsEditor,
  TextAnswerEditor: createTextAnswerEditor,
  MultipleChoiceEditor: createMultipleChoiceEditor,
  SingleChoiceEditor: createSingleChoiceEditor,
  TrueFalseEditor: createTrueFalseEditor,
  ShortTextEditor: createShortTextEditor,
  LongTextEditor: createLongTextEditor,
  StatementEditor: createStatementEditor,
  FillInTheBlankEditor: createFillInTheBlankEditor,
  ReorderEditor: createReorderEditor,
  MatchingEditor: createMatchingEditor,
};
