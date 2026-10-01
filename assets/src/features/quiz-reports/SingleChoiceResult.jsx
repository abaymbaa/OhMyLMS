/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createSingleChoiceResult(readRuntime) {
  return function SingleChoiceResult(props) {
    const { I: Controls, React, b: I18n, p$: QuizQuestionHeader } = readRuntime();
    var t,
      n,
      data = props.data,
      index = props.index,
      o = (function (e) {
        var t = e.given_answer,
          n = e.questions;
        if (!t || !Array.isArray(t)) return 'in-review';
        var r = n
            .filter(function (e) {
              return '1' === e.is_correct;
            })
            .map(function (e) {
              return e.id;
            }),
          a = t.every(function (e) {
            return r.includes(e);
          });
        return 'single-choice' === e.settings.type
          ? a && 1 === t.length
            ? 'correct'
            : 'incorrect'
          : a && t.length === r.length
            ? 'correct'
            : 'incorrect';
      })(data),
      i =
        null == data || null === (t = data.questions) || void 0 === t
          ? void 0
          : t.map(function (e) {
              return {
                label: e.answer,
                value: String(e.id),
              };
            });
    return (
      <React.Fragment>
        <div className={'ohmylms-question-types ohmylms-single-choice-question ohmylms-'.concat(o)}>
          <QuizQuestionHeader data={data} index={index} />
          <div className={'ohmylms-question-options-wrapper'}>
            <Controls.TextWP as={'p'} size={14} variant={'muted'}>
              {(0, I18n.__)('Select single', 'ohmylms')}
            </Controls.TextWP>
            <Controls.SpacerWP marginBottom={2} />
            <Controls.CardWP
              isBorderless={!0}
              variant={'secondary'}
              style={{
                padding: '16px',
              }}
            >
              <Controls.FlexWP direction={'column'} gap={3}>
                <Controls.RadioWP
                  key={index}
                  selected={
                    null != data && data.given_answer
                      ? null == data
                        ? void 0
                        : data.given_answer[0]
                      : null
                  }
                  disabled={!0}
                  options={i}
                />
              </Controls.FlexWP>
            </Controls.CardWP>
            <Controls.SpacerWP />
            <Controls.CardWP
              style={{
                padding: '16px',
              }}
            >
              <Controls.HeadingWP level={4} size={'14'} weight={'400'}>
                {(0, I18n.__)('Answer of this question:')}
                <br />
                <strong>
                  {(null == data ||
                  null === (n = data.questions) ||
                  void 0 === n ||
                  null ===
                    (n = n.find(function (e) {
                      return '1' === (null == e ? void 0 : e.is_correct);
                    })) ||
                  void 0 === n
                    ? void 0
                    : n.answer) || (0, I18n.__)('No correct answer')}
                </strong>
              </Controls.HeadingWP>
            </Controls.CardWP>
          </div>
        </div>
      </React.Fragment>
    );
  };
}
