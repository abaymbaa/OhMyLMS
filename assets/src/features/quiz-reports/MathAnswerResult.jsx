import { createElement, Fragment } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { describeExpected, setPartMark, structuredRows } from './model.mjs';

/**
 * Report view for numerical, structured and other extension question types: the learner's
 * response, the expected answer and, for structured questions, each part with its marking
 * notes. Structured parts can be marked one by one (sent as part_marks, which take precedence);
 * a whole-question mark in the header keeps automatic part scores and gives the remainder to
 * written parts.
 */
export function MathAnswerResult({ data, index, setData, fetchData, Header, Controls }) {
  const type = data?.settings?.type;
  const given = data?.given_answer;
  return (
    <div
      className={`ohmylms-question-types ohmylms-text-type-question ohmylms-${data?.status || ''}`}
    >
      <Header setData={setData} data={data} index={index} type="text-type" fetchData={fetchData} />
      <Controls.CardWP isBorderless variant="secondary" style={{ padding: '16px' }}>
        {type === 'structured' ? (
          <table className="widefat striped ohmylms-structured-result">
            <thead>
              <tr>
                <th>{__('Part', 'ohmylms')}</th>
                <th>{__("Student's response", 'ohmylms')}</th>
                <th>{__('Expected / marking notes', 'ohmylms')}</th>
                <th>{__('Marks', 'ohmylms')}</th>
              </tr>
            </thead>
            <tbody>
              {structuredRows(data).map((row) => (
                <tr key={row.id}>
                  <td>
                    <strong>{row.label}</strong> {row.prompt}{' '}
                    <span>{sprintf(__('[%s marks]', 'ohmylms'), row.marks)}</span>
                  </td>
                  <td>{row.given || __('No answer given', 'ohmylms')}</td>
                  <td>{row.expected}</td>
                  <td>
                    {row.max === null ? (
                      '—'
                    ) : (
                      <Fragment>
                        <input
                          type="number"
                          min={0}
                          max={row.max}
                          step="0.25"
                          aria-label={sprintf(__('Marks for part %s', 'ohmylms'), row.label)}
                          value={row.awarded ?? ''}
                          placeholder={row.kind === 'written' ? __('to mark', 'ohmylms') : ''}
                          onChange={(event) =>
                            setData((attempt) =>
                              setPartMark(attempt, data.id, row.id, event.target.value),
                            )
                          }
                          style={{ width: 72 }}
                        />{' '}
                        / {row.max}
                      </Fragment>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Fragment>
            <Controls.TextWP as="p" size={14} variant="muted">
              {__("Student's response:", 'ohmylms')}
            </Controls.TextWP>
            <div className="ohmylms-question-options ohmylms-text-type">
              {Array.isArray(given) && given.length
                ? given.join(', ')
                : given && typeof given === 'object'
                  ? JSON.stringify(given)
                  : __('No answer given', 'ohmylms')}
            </div>
            <p>
              <strong>{__('Expected:', 'ohmylms')}</strong> {describeExpected(data)}
            </p>
          </Fragment>
        )}
        {data?.version && (
          <p className="ohmylms-version-note">
            {sprintf(
              __('Graded against version %d of this question', 'ohmylms'),
              data.version.number,
            )}
            {data.version.migration_snapshot ? ` · ${__('captured at migration', 'ohmylms')}` : ''}
          </p>
        )}
      </Controls.CardWP>
    </div>
  );
}
