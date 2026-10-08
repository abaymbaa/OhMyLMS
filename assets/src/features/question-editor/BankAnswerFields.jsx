import { createElement } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Button, CheckboxControl, TextControl } from '@wordpress/components';
import { NumericalEditor, StructuredEditor } from './MathEditors';

/** Private answer controls used by the question block; they save through the assessment writer. */
export function BankAnswerFields({ type, options = [], settings, onChange }) {
  if (type === 'numerical')
    return (
      <NumericalEditor
        value={settings}
        onChange={(patch) => onChange({ settings: { ...settings, ...patch } })}
      />
    );
  if (type === 'structured')
    return (
      <StructuredEditor
        value={settings}
        onChange={(patch) =>
          onChange({
            settings: {
              ...settings,
              ...patch,
              score: {
                enabled: true,
                value: (patch.parts || settings.parts || []).reduce(
                  (sum, part) => sum + Number(part.marks || 0),
                  0,
                ),
              },
            },
          })
        }
      />
    );
  if (['short-text', 'long-text'].includes(type))
    return <p>{__('Learners write their answer; a teacher marks it.', 'ohmylms')}</p>;
  if (type === 'statement')
    return <p>{__('The statement is the question content above.', 'ohmylms')}</p>;
  const choices = ['single-choice', 'multiple-choice', 'true-false'].includes(type);
  const patchOption = (index, patch) =>
    onChange({
      questions: options.map((option, position) =>
        position === index ? { ...option, ...patch } : option,
      ),
    });
  const reorder = (index, direction) => {
    const next = [...options];
    [next[index], next[index + direction]] = [next[index + direction], next[index]];
    onChange({
      questions: next.map((option, position) => ({ ...option, order_number: position + 1 })),
    });
  };
  return (
    <div className="ohmylms-bank-block-answers">
      {type === 'fill-in-the-blank' && (
        <p>
          {__(
            'Use {answer} in the question title for inline blanks, or enter accepted answers below.',
            'ohmylms',
          )}
        </p>
      )}
      {options.map((option, index) => (
        <fieldset key={option.id || index}>
          {choices && (
            <CheckboxControl
              label={sprintf(__('Correct answer %d', 'ohmylms'), index + 1)}
              checked={option.is_correct === true || Number(option.is_correct) === 1}
              onChange={(correct) =>
                onChange({
                  questions: options.map((item, position) => ({
                    ...item,
                    is_correct:
                      position === index
                        ? correct
                        : type === 'multiple-choice'
                          ? item.is_correct
                          : false,
                  })),
                })
              }
            />
          )}
          <TextControl
            label={sprintf(__('Answer %d', 'ohmylms'), index + 1)}
            value={option.answer || ''}
            disabled={type === 'true-false'}
            onChange={(answer) => patchOption(index, { answer })}
          />
          {type === 'matching' && (
            <TextControl
              label={sprintf(__('Match %d', 'ohmylms'), index + 1)}
              value={option.matching_data?.label || ''}
              onChange={(label) =>
                patchOption(index, { matching_data: { ...option.matching_data, label } })
              }
            />
          )}
          {type === 'reorder' && (
            <>
              <Button disabled={index === 0} onClick={() => reorder(index, -1)}>
                {__('Move up', 'ohmylms')}
              </Button>
              <Button disabled={index === options.length - 1} onClick={() => reorder(index, 1)}>
                {__('Move down', 'ohmylms')}
              </Button>
            </>
          )}
          {options.length > 2 && type !== 'true-false' && (
            <Button
              isDestructive
              variant="tertiary"
              onClick={() =>
                onChange({ questions: options.filter((_, position) => index !== position) })
              }
            >
              {__('Remove answer', 'ohmylms')}
            </Button>
          )}
        </fieldset>
      ))}
      {type !== 'true-false' && type !== 'fill-in-the-blank' && (
        <Button
          variant="secondary"
          onClick={() =>
            onChange({
              questions: [
                ...options,
                {
                  answer: '',
                  is_correct: false,
                  order_number: options.length + 1,
                  matching_data: { label: '' },
                },
              ],
            })
          }
        >
          {__('Add answer', 'ohmylms')}
        </Button>
      )}
    </div>
  );
}
