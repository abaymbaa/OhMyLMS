/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createQuizQuestionHeader(readRuntime) {
  return function QuizQuestionHeader(props) {
    const {
      Ge: decodeHtml,
      I: Controls,
      Mt: InfoIcon,
      React,
      V: Tooltip,
      b: I18n,
      f: Router,
      l$: IncorrectIcon,
      o$: CorrectIcon,
      s$,
      wn: NumberInput,
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o,
      data = props.data,
      index = props.index,
      type = props.type,
      u = void 0 === type ? '' : type,
      s = (props.fetchData, props.setData),
      isCorrect = props.isCorrect,
      m = (0, Router.g)();
    (m.id, m.quizId);
    var p =
      void 0 !== isCorrect
        ? isCorrect
          ? 'correct'
          : 'incorrect'
        : (function (e) {
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
          })(data);
    return (
      <React.Fragment>
        <Controls.FlexWP gap={3} justify={'space-between'}>
          <Controls.FlexItemWP>
            <Controls.BadgeWP variant={'secondary'} isBorderLess={!0}>
              {(0, I18n.__)('Question', 'ohmylms')} {index + 1}
            </Controls.BadgeWP>
            <Controls.BadgeWP
              variant={'warning'}
              style={{
                textTransform: 'capitalize',
                marginLeft: '8px',
              }}
              isBorderLess={!0}
            >
              {null !==
                (t =
                  null == data || null === (n = data.settings) || void 0 === n
                    ? void 0
                    : n.type.split('-').join(' ')) && void 0 !== t
                ? t
                : u}
            </Controls.BadgeWP>
          </Controls.FlexItemWP>
          <Controls.FlexItemWP>
            {'text-type' === u ? (
              <React.Fragment>
                <Controls.FlexWP
                  gap={2}
                  justify={'flex-start'}
                  className={'omlms-question-status-wrapper'}
                >
                  <Controls.FlexItemWP>
                    <Controls.FlexWP gap={2} justify={'flex-start'} className={'omlms-set-marks'}>
                      <Controls.FlexItemWP>
                        <Controls.FlexWP justify={'start'} gap={2}>
                          <Controls.TextWP as={'span'}>
                            {(0, I18n.__)('Set Marks', 'ohmylms')}
                          </Controls.TextWP>
                          <Tooltip.A
                            title={(0, I18n.__)(
                              'This Question Marks: '.concat(
                                null == data ||
                                  null === (r = data.settings) ||
                                  void 0 === r ||
                                  null === (r = r.score) ||
                                  void 0 === r
                                  ? void 0
                                  : r.value,
                              ),
                              'ohmylms',
                            )}
                            className={'omlms-tooltip'}
                          >
                            <InfoIcon.A />
                          </Tooltip.A>
                        </Controls.FlexWP>
                      </Controls.FlexItemWP>
                      <Controls.FlexItemWP>
                        <NumberInput.A
                          type={'number'}
                          min={0}
                          max={Number(
                            null == data ||
                              null === (a = data.settings) ||
                              void 0 === a ||
                              null === (a = a.score) ||
                              void 0 === a
                              ? void 0
                              : a.value,
                          )}
                          value={Number(null == data ? void 0 : data.achive_mark) || 0}
                          onChange={function (e) {
                            return (function (e) {
                              s(function (t) {
                                var n,
                                  r = s$({}, t),
                                  a =
                                    null == r ||
                                    null === (n = r.report) ||
                                    void 0 === n ||
                                    null === (n = n.questions) ||
                                    void 0 === n
                                      ? void 0
                                      : n.map(function (t) {
                                          return t.id === (null == data ? void 0 : data.id)
                                            ? s$(
                                                s$({}, t),
                                                {},
                                                {
                                                  achive_mark: e,
                                                },
                                              )
                                            : t;
                                        });
                                return s$(
                                  s$({}, r),
                                  {},
                                  {
                                    report: s$(
                                      s$({}, r.report),
                                      {},
                                      {
                                        questions: a,
                                      },
                                    ),
                                  },
                                );
                              });
                            })(e);
                          }}
                          controls={!1}
                        />
                      </Controls.FlexItemWP>
                    </Controls.FlexWP>
                  </Controls.FlexItemWP>
                  <Controls.FlexItemWP>
                    <Controls.BadgeWP
                      isBorderLess={!0}
                      variant={
                        'in-review' === (null == data ? void 0 : data.status)
                          ? 'warning'
                          : 'success'
                      }
                    >
                      {'in-review' === (null == data ? void 0 : data.status)
                        ? (0, I18n.__)('In Review', 'ohmylms')
                        : (0, I18n.__)('Graded', 'ohmylms')}
                    </Controls.BadgeWP>
                  </Controls.FlexItemWP>
                </Controls.FlexWP>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Controls.BadgeWP
                  variant={'correct' === p ? 'success' : 'danger'}
                  isBorderLess={!0}
                  style={{
                    textTransform: 'capitalize',
                  }}
                >
                  {'correct' === p ? <CorrectIcon /> : <IncorrectIcon />}
                  {p}
                </Controls.BadgeWP>
              </React.Fragment>
            )}
          </Controls.FlexItemWP>
        </Controls.FlexWP>
        <Controls.SpacerWP marginY={4}>
          <Controls.HeadingWP level={3} className={'omlms-question-name'}>
            {decodeHtml(null == data ? void 0 : data.name)}
            {(null == data || null === (o = data.settings) || void 0 === o
              ? void 0
              : o.required) && <span className={'omlms-required'}>{'*'}</span>}
          </Controls.HeadingWP>
          <Controls.SpacerWP marginBottom={3} />
          {(null == data ? void 0 : data.image) && (
            <img
              src={null == data ? void 0 : data.image}
              alt={''}
              style={{
                maxWidth: '100%',
                marginBottom: '20px',
                display: 'block',
              }}
            />
          )}
          {(null == data ? void 0 : data.video) && (
            <video
              controls={!0}
              style={{
                maxWidth: '100%',
                marginBottom: '20px',
                display: 'block',
              }}
            >
              <source src={null == data ? void 0 : data.video} type={'video/mp4'} />
            </video>
          )}
        </Controls.SpacerWP>
      </React.Fragment>
    );
  };
}
