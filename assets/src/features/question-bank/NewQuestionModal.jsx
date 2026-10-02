import { createElement, Fragment, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
  Button,
  CheckboxControl,
  Modal,
  Notice,
  SelectControl,
  TextControl,
  TextareaControl,
} from '@wordpress/components';
import { createBankQuestion } from './api.mjs';
import {
  NEW_QUESTION_TYPES,
  changeDraftType,
  draftToPayload,
  emptyDraft,
  setOptionCorrect,
  validateDraft,
} from './model.mjs';
import { NumericalEditor, PracticeFeedbackFields, StructuredEditor } from './MathEditors';

const TYPE_LABELS = () => ({
  'single-choice': __('Single choice', 'ohmylms'),
  'multiple-choice': __('Multiple choice', 'ohmylms'),
  'true-false': __('True / false', 'ohmylms'),
  'short-text': __('Short answer (teacher marked)', 'ohmylms'),
  'long-text': __('Long answer (teacher marked)', 'ohmylms'),
  numerical: __('Numerical', 'ohmylms'),
  structured: __('Structured (multi-part)', 'ohmylms'),
});

const PROBLEMS = () => ({
  name: __('Give the question a title.', 'ohmylms'),
  marks: __('Marks must be zero or more.', 'ohmylms'),
  'options-count': __('Add at least two answer options.', 'ohmylms'),
  'options-empty': __('Fill in every answer option.', 'ohmylms'),
  'options-correct': __('Mark the correct answer.', 'ohmylms'),
  'numerical-answer': __('Enter the expected number.', 'ohmylms'),
  parts: __('Add at least one part.', 'ohmylms'),
});

/**
 * Write a new question straight into the bank. It is saved without a quiz; afterwards
 * the bank's detail view sets its bank, skills and difficulty and approves it.
 */
export function NewQuestionModal({ onClose, onCreated }) {
  const [draft, setDraft] = useState(() => emptyDraft());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [tried, setTried] = useState(false);
  const labels = TYPE_LABELS();
  const problems = validateDraft(draft);
  const set = (fields) => setDraft({ ...draft, ...fields });
  const setOption = (index, fields) =>
    set({
      options: draft.options.map((option, position) =>
        position === index ? { ...option, ...fields } : option,
      ),
    });
  const choices = ['single-choice', 'multiple-choice'].includes(draft.type);

  async function save() {
    setTried(true);
    if (problems.length) return;
    setSaving(true);
    setError('');
    try {
      const created = await createBankQuestion(draftToPayload(draft));
      onCreated(created.id);
    } catch (cause) {
      setError(cause.message || __('Could not save the question.', 'ohmylms'));
      setSaving(false);
    }
  }

  return (
    <Modal title={__('New question', 'ohmylms')} onRequestClose={onClose} size="large">
      <div className="ohmylms-new-question">
        {error && (
          <Notice status="error" onRemove={() => setError('')}>
            {error}
          </Notice>
        )}
        <SelectControl
          label={__('Question type', 'ohmylms')}
          value={draft.type}
          options={NEW_QUESTION_TYPES.map((type) => ({ value: type, label: labels[type] }))}
          onChange={(type) => setDraft(changeDraftType(draft, type))}
          help={__(
            'Matching, reorder, fill-in-the-blank and statement questions are written inside a quiz; they appear here once saved.',
            'ohmylms',
          )}
        />
        <TextControl
          label={__('Title', 'ohmylms')}
          value={draft.name}
          onChange={(name) => set({ name })}
        />
        <TextareaControl
          label={__('Question text', 'ohmylms')}
          help={__('Maths can be written in LaTeX, e.g. \\(\\frac{1}{2}\\).', 'ohmylms')}
          value={draft.description}
          onChange={(description) => set({ description })}
          rows={4}
        />
        {draft.type !== 'structured' && (
          <TextControl
            label={__('Marks', 'ohmylms')}
            type="number"
            min={0}
            step="0.5"
            value={String(draft.marks)}
            onChange={(marks) => set({ marks })}
          />
        )}
        {(choices || draft.type === 'true-false') && (
          <fieldset className="ohmylms-new-question-options">
            <legend>
              {draft.type === 'multiple-choice'
                ? __('Answers (tick every correct one)', 'ohmylms')
                : __('Answers (tick the correct one)', 'ohmylms')}
            </legend>
            {draft.options.map((option, index) => (
              <div key={index} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <CheckboxControl
                  label={sprintf(__('Correct answer %d', 'ohmylms'), index + 1)}
                  hideLabelFromVision
                  checked={!!option.correct}
                  onChange={(correct) => setDraft(setOptionCorrect(draft, index, correct))}
                />
                {choices ? (
                  <TextControl
                    label={sprintf(__('Answer %d', 'ohmylms'), index + 1)}
                    hideLabelFromVision
                    placeholder={sprintf(__('Answer %d', 'ohmylms'), index + 1)}
                    value={option.answer}
                    onChange={(answer) => setOption(index, { answer })}
                  />
                ) : (
                  <span>
                    {option.answer === 'True' ? __('True', 'ohmylms') : __('False', 'ohmylms')}
                  </span>
                )}
                {choices && draft.options.length > 2 && (
                  <Button
                    variant="tertiary"
                    isDestructive
                    label={sprintf(__('Remove answer %d', 'ohmylms'), index + 1)}
                    onClick={() =>
                      set({ options: draft.options.filter((_, position) => position !== index) })
                    }
                  >
                    {__('Remove', 'ohmylms')}
                  </Button>
                )}
              </div>
            ))}
            {choices && (
              <Button
                variant="secondary"
                onClick={() => set({ options: [...draft.options, { answer: '', correct: false }] })}
              >
                {__('Add answer', 'ohmylms')}
              </Button>
            )}
          </fieldset>
        )}
        {draft.type === 'numerical' && (
          <NumericalEditor
            value={draft.settings}
            onChange={(fields) => set({ settings: { ...draft.settings, ...fields } })}
          />
        )}
        {draft.type === 'structured' && (
          <StructuredEditor
            value={draft.settings}
            onChange={(fields) => set({ settings: { ...draft.settings, ...fields } })}
          />
        )}
        {['short-text', 'long-text'].includes(draft.type) && (
          <p>
            {__(
              'Learners type their answer and a teacher marks it in the grading screen.',
              'ohmylms',
            )}
          </p>
        )}
        <PracticeFeedbackFields
          question={{ settings: { ...draft.settings, type: draft.type } }}
          onChange={({ settings }) => {
            const { type, ...rest } = settings;
            set({ settings: rest });
          }}
        />
        {tried && problems.length > 0 && (
          <Notice status="warning" isDismissible={false}>
            <ul style={{ margin: 0 }}>
              {problems.map((problem) => (
                <li key={problem}>{PROBLEMS()[problem]}</li>
              ))}
            </ul>
          </Notice>
        )}
        <p>
          {__(
            'The question is saved to the bank without a quiz. Next you can set its bank, skills and difficulty, and approve it.',
            'ohmylms',
          )}
        </p>
        <Button variant="primary" isBusy={saving} disabled={saving} onClick={save}>
          {__('Save question', 'ohmylms')}
        </Button>{' '}
        <Button variant="tertiary" onClick={onClose}>
          {__('Cancel', 'ohmylms')}
        </Button>
      </div>
    </Modal>
  );
}
