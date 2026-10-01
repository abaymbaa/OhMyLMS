/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createTextAnswerResult(readRuntime) {
  return function TextAnswerResult(props) {
    const {
      I: Controls,
      React,
      V: Tooltip,
      _$,
      b: I18n,
      b$: AnswerIcon,
      g: ReactHooks,
      p$: QuizQuestionHeader,
    } = readRuntime();
    var t,
      n,
      index = props.index,
      data = props.data,
      o = (props.type, props.fetchData),
      setData = props.setData,
      l = (function (e) {
        var t,
          n,
          r = e.given_answer,
          a = e.questions;
        if (!r || !Array.isArray(r)) return 'in-review';
        var o = a
            .filter(function (e) {
              return 1 == (null == e ? void 0 : e.is_correct);
            })
            .map(function (e) {
              return null == e ? void 0 : e.id;
            }),
          i = r.every(function (e) {
            return null == o ? void 0 : o.includes(e);
          });
        return 'single-choice' ===
          (null == e || null === (t = e.settings) || void 0 === t ? void 0 : t.type)
          ? i && 1 === (null == r ? void 0 : r.length) && null != o && o.includes(r[0])
            ? 'correct'
            : 'incorrect'
          : 'multiple-choice' ===
              (null == e || null === (n = e.settings) || void 0 === n ? void 0 : n.type)
            ? i && (null == r ? void 0 : r.length) === (null == o ? void 0 : o.length)
              ? 'correct'
              : 'incorrect'
            : 'in-review';
      })(data),
      c = (function (e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (!c && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return _$(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? _$(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })((0, ReactHooks.useState)(0), 2);
    return (
      c[0],
      c[1],
      (
        <React.Fragment>
          <div
            className={'ohmylms-question-types ohmylms-text-type-question ohmylms-'
              .concat(l, ' ')
              .concat(null != data && data.explanation ? 'ohmylms-has-explanation' : '')}
          >
            <QuizQuestionHeader
              setData={setData}
              data={data}
              index={index}
              type={'text-type'}
              fetchData={o}
            />
            <Controls.CardWP
              isBorderless={!0}
              variant={'secondary'}
              style={{
                padding: '16px',
              }}
            >
              <Controls.TextWP as={'p'} size={14} variant={'muted'}>
                {(0, I18n.__)("Student's response:", 'ohmylms')}
              </Controls.TextWP>
              <div className={'ohmylms-question-options ohmylms-text-type'}>
                {(null != data &&
                  data.given_answer &&
                  (null == data ? void 0 : data.given_answer[0])) ||
                  (0, I18n.__)('No answer given', 'ohmylms')}
              </div>
              {(null == data ? void 0 : data.explanation) && (
                <Tooltip.A
                  title={
                    (null == data ? void 0 : data.explanation) ||
                    (0, I18n.__)('No explanation provided', 'ohmylms')
                  }
                >
                  <span className={'ohmylms-explanation-icon'}>
                    <AnswerIcon />
                  </span>
                </Tooltip.A>
              )}
            </Controls.CardWP>
            {'fill-in-the-blank' ===
              (null == data || null === (t = data.settings) || void 0 === t ? void 0 : t.type) && (
              <React.Fragment>
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
                        (n = n.filter(function (e) {
                          return '1' === (null == e ? void 0 : e.is_correct);
                        })) ||
                      void 0 === n ||
                      null ===
                        (n = n.map(function (e) {
                          return e.answer;
                        })) ||
                      void 0 === n
                        ? void 0
                        : n.join(', ')) || (0, I18n.__)('No correct answer')}
                    </strong>
                  </Controls.HeadingWP>
                </Controls.CardWP>
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      )
    );
  };
}
