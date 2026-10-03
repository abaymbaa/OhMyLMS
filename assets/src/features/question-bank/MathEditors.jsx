import { createElement, Fragment } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
  Button,
  CheckboxControl,
  SelectControl,
  TextControl,
  TextareaControl,
} from '@wordpress/components';
import { addPart, listToNumbers, numbersToList, removePart, updatePart } from './model.mjs';

/** Numerical question settings: expected value(s), tolerance and unit. */
export function NumericalEditor({ value, onChange }) {
  return (
    <div className="ohmylms-numerical-editor">
      <TextControl
        type="number"
        step="any"
        label={__('Correct answer', 'ohmylms')}
        value={value.answer ?? ''}
        onChange={(answer) => onChange({ answer: answer === '' ? undefined : Number(answer) })}
      />
      <TextControl
        label={__('Other accepted answers (comma separated, optional)', 'ohmylms')}
        value={numbersToList(value.answers)}
        onChange={(text) => onChange({ answers: listToNumbers(text) })}
      />
      <div style={{ display: 'flex', gap: 12 }}>
        <TextControl
          type="number"
          min={0}
          step="any"
          label={__('Tolerance', 'ohmylms')}
          value={value.tolerance ?? 0}
          onChange={(tolerance) => onChange({ tolerance: Math.max(0, Number(tolerance) || 0) })}
        />
        <SelectControl
          label={__('Tolerance type', 'ohmylms')}
          value={value.tolerance_type || 'absolute'}
          options={[
            { value: 'absolute', label: __('Absolute (± value)', 'ohmylms') },
            { value: 'relative', label: __('Relative (± fraction of answer)', 'ohmylms') },
          ]}
          onChange={(tolerance_type) => onChange({ tolerance_type })}
        />
        <TextControl
          label={__('Unit shown to learners', 'ohmylms')}
          value={value.unit || ''}
          onChange={(unit) => onChange({ unit })}
        />
      </div>
      <CheckboxControl
        label={__('Accept fractions such as 3/4 or 1 1/2', 'ohmylms')}
        checked={value.allow_fractions !== false}
        onChange={(allow_fractions) => onChange({ allow_fractions })}
      />
    </div>
  );
}

/** Structured question parts: shared stem (question text) plus separately scored parts. */
export function StructuredEditor({ value, onChange }) {
  const parts = value.parts || [];
  const set = (index, fields) => onChange({ parts: updatePart(parts, index, fields) });
  return (
    <div className="ohmylms-structured-editor">
      <p>
        {__(
          'The question text and image are the shared stem. Each part is scored separately; written parts are marked by a teacher.',
          'ohmylms',
        )}
      </p>
      {parts.map((part, index) => (
        <fieldset key={index} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12 }}>
          <legend>{sprintf(__('Part %s', 'ohmylms'), part.label || part.id)}</legend>
          <div style={{ display: 'flex', gap: 12 }}>
            <TextControl
              label={__('Label', 'ohmylms')}
              value={part.label || ''}
              onChange={(label) => set(index, { label })}
            />
            <SelectControl
              label={__('Answer type', 'ohmylms')}
              value={part.kind || 'written'}
              options={[
                { value: 'numerical', label: __('Number', 'ohmylms') },
                { value: 'text', label: __('Short exact text', 'ohmylms') },
                { value: 'written', label: __('Written (teacher marks)', 'ohmylms') },
              ]}
              onChange={(kind) => set(index, { kind })}
            />
            <TextControl
              type="number"
              min={0}
              step="0.5"
              label={__('Marks', 'ohmylms')}
              value={part.marks ?? 1}
              onChange={(marks) => set(index, { marks: Number(marks) })}
            />
          </div>
          <TextareaControl
            label={__('Part prompt', 'ohmylms')}
            value={part.prompt || ''}
            onChange={(prompt) => set(index, { prompt })}
          />
          {part.kind === 'numerical' && (
            <div style={{ display: 'flex', gap: 12 }}>
              <TextControl
                type="number"
                step="any"
                label={__('Answer', 'ohmylms')}
                value={part.answer ?? ''}
                onChange={(answer) =>
                  set(index, { answer: answer === '' ? undefined : Number(answer) })
                }
              />
              <TextControl
                type="number"
                min={0}
                step="any"
                label={__('Tolerance', 'ohmylms')}
                value={part.tolerance ?? 0}
                onChange={(tolerance) => set(index, { tolerance: Number(tolerance) || 0 })}
              />
              <TextControl
                label={__('Unit', 'ohmylms')}
                value={part.unit || ''}
                onChange={(unit) => set(index, { unit })}
              />
            </div>
          )}
          {part.kind === 'text' && (
            <TextControl
              label={__('Accepted answers (comma separated, case-insensitive)', 'ohmylms')}
              value={(part.accepted || []).join(', ')}
              onChange={(text) =>
                set(index, {
                  accepted: text
                    .split(',')
                    .map((item) => item.trim())
                    .filter(Boolean),
                })
              }
            />
          )}
          <TextareaControl
            label={__('Marking notes (teachers only)', 'ohmylms')}
            value={part.rubric || ''}
            onChange={(rubric) => set(index, { rubric })}
          />
          <Button
            variant="tertiary"
            isDestructive
            onClick={() => onChange({ parts: removePart(parts, index) })}
          >
            {__('Remove part', 'ohmylms')}
          </Button>
        </fieldset>
      ))}
      <Button variant="secondary" onClick={() => onChange({ parts: addPart(parts) })}>
        {__('Add part', 'ohmylms')}
      </Button>
    </div>
  );
}

/** Practice feedback fields shared by all question types. */
export function PracticeFeedbackFields({ question, onChange }) {
  if (!question || !question.settings?.type) return null;
  const settings = question.settings || {};
  return (
    <details className="ohmylms-practice-feedback-fields" style={{ margin: '12px 0' }}>
      <summary>{__('Hint and explanation (practice and lesson checks)', 'ohmylms')}</summary>
      <TextareaControl
        label={__('Hint (using it marks the answer as assisted)', 'ohmylms')}
        value={settings.hint || ''}
        onChange={(hint) => onChange({ settings: { ...settings, hint } })}
      />
      <TextareaControl
        label={__('Explanation shown after answering', 'ohmylms')}
        value={settings.explanation || ''}
        onChange={(explanation) => onChange({ settings: { ...settings, explanation } })}
      />
    </details>
  );
}
