/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createQuizSettingsFields(readRuntime) {
  return function QuizSettingsFields(props) {
    const {
      $m,
      Bt,
      He,
      I: Controls,
      Km,
      L: Entitlements,
      Pn,
      React,
      T: StoreModule,
      Um,
      Vm,
      Ym,
      Zm,
      b: I18n,
      g: ReactHooks,
      qm,
      sn,
      vn,
      y: WordPressData,
      zm,
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o,
      i,
      l,
      c,
      u,
      s = (0, Entitlements.useIsPro)(),
      d =
        (props.chapterId,
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getQuizSettings();
        }, [])),
      quiz = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getQuiz();
      }, []),
      p =
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getAllQuestions();
        }, []) || [],
      Router =
        'cohort-based' ===
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getCourseType();
        }, []),
      setQuiz = (0, WordPressData.useDispatch)(StoreModule.default).setQuiz,
      h =
        ((0, WordPressData.useDispatch)(StoreModule.default), Ym((0, ReactHooks.useState)(!1), 2)),
      _ = (h[0], h[1], Ym((0, ReactHooks.useState)(!1), 2)),
      w = (_[0], _[1], Ym((0, ReactHooks.useState)(!1), 2)),
      E = w[0],
      S = w[1],
      R = [
        'time_limit',
        'hide_answers',
        'move_to_next_section',
        'randomize_questions',
        'allow_attempts',
        'question_in_one_page',
        'layout',
        'hide_question_number',
        'short_text_limit',
        'long_text_limit',
      ],
      x = function (e, t) {
        s || !R.includes(e)
          ? setQuiz({
              settings: Um(Um({}, d), {}, qm({}, e, t)),
            })
          : S(!0);
      },
      C = function (e, t, n) {
        s || !R.includes(e)
          ? setQuiz(
              n
                ? {
                    settings: Um(
                      Um({}, d),
                      {},
                      qm({}, e, Um(Um({}, null == d ? void 0 : d[e]), {}, qm({}, n, t))),
                    ),
                  }
                : {
                    settings: Um(Um({}, d), {}, qm({}, e, t)),
                  },
            )
          : S(!0);
      },
      P = (0, ReactHooks.useCallback)(
        function (e) {
          Number(e) < 1 ||
            setQuiz(
              Um(
                Um({}, quiz),
                {},
                {
                  drip_settings: Um(
                    Um({}, null == quiz ? void 0 : quiz.drip_settings),
                    {},
                    {
                      days: e,
                    },
                  ),
                },
              ),
            );
        },
        [quiz, setQuiz],
      ),
      O = p.reduce(function (e, t) {
        var n;
        return (
          e +
          Number(
            (null == t ||
            null === (n = t.settings) ||
            void 0 === n ||
            null === (n = n.score) ||
            void 0 === n
              ? void 0
              : n.value) || 0,
          )
        );
      }, 0);
    return (
      (0, ReactHooks.useEffect)(function () {
        (null != d && d.allow_attempts) ||
          setQuiz({
            settings: Um(
              Um({}, d),
              {},
              {
                allow_attempts: 1,
              },
            ),
          });
      }, []),
      (
        <React.Fragment>
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Visibility', 'ohmylms'),
              description: (0, I18n.__)(
                'Choose whether to publish this quiz for members or save it as a draft to keep editing.',
                'ohmylms',
              ),
              className: 'omlms-quiz-visibility-settings',
            },
            <vn.A
              value={null == quiz ? void 0 : quiz.status}
              onChange={function (e) {
                return setQuiz({
                  status: e,
                });
              }}
              options={Zm}
              placeholder={(0, I18n.__)('Select Visibility', 'ohmylms')}
              className={'omlms-quiz-visibility-select'}
            />,
          )}
          <Pn
            onChange={function () {
              var e;
              if (s) {
                var t = !(
                  null != quiz &&
                  null !== (e = quiz.drip_settings) &&
                  void 0 !== e &&
                  e.enable
                );
                setQuiz(
                  Um(
                    Um({}, quiz),
                    {},
                    {
                      drip_settings: Um(
                        Um({}, null == quiz ? void 0 : quiz.drip_settings),
                        {},
                        {
                          enable: t,
                        },
                        t && {
                          type: Router ? 'cohort-start' : 'enrollment-from-x-days',
                        },
                      ),
                    },
                  ),
                );
              } else S(!0);
            }}
            isChecked={
              null == quiz || null === (t = quiz.drip_settings) || void 0 === t ? void 0 : t.enable
            }
            onDripFeedTypeChange={function (e) {
              if (s) {
                var t,
                  n,
                  r = Um(
                    Um({}, null == quiz ? void 0 : quiz.drip_settings),
                    {},
                    {
                      type: e,
                    },
                  );
                if ('specific-date' === e)
                  (delete r.days,
                    (r.date =
                      (null == quiz || null === (t = quiz.drip_settings) || void 0 === t
                        ? void 0
                        : t.date) || sn()(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSSD')),
                    (r.time =
                      (null == quiz || null === (n = quiz.drip_settings) || void 0 === n
                        ? void 0
                        : n.time) || sn()(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSSD')));
                else if ('cohort-from-x-days' === e || 'enrollment-from-x-days' === e) {
                  var a;
                  (delete r.date,
                    delete r.time,
                    (r.days =
                      (null == quiz || null === (a = quiz.drip_settings) || void 0 === a
                        ? void 0
                        : a.days) || 1));
                } else 'cohort-start' === e && (delete r.days, delete r.date, delete r.time);
                setQuiz(
                  Um(
                    Um({}, quiz),
                    {},
                    {
                      drip_settings: r,
                    },
                  ),
                );
              } else S(!0);
            }}
            handleDripDatePickerChange={function (e, t) {
              setQuiz(
                Um(
                  Um({}, quiz),
                  {},
                  {
                    drip_settings: Um(
                      Um({}, null == quiz ? void 0 : quiz.drip_settings),
                      {},
                      {
                        date: e ? sn()(e).format('YYYY-MM-DDTHH:mm:ss.SSS') : null,
                      },
                    ),
                  },
                ),
              );
            }}
            handleDripTimePickerChange={function (e) {
              setQuiz(
                Um(
                  Um({}, quiz),
                  {},
                  {
                    drip_settings: Um(
                      Um({}, null == quiz ? void 0 : quiz.drip_settings),
                      {},
                      {
                        time: e ? sn()(e).format('YYYY-MM-DDTHH:mm:ss.SSS') : null,
                      },
                    ),
                  },
                ),
              );
            }}
            handleDayChange={P}
            dripFeedType={
              null == quiz || null === (n = quiz.drip_settings) || void 0 === n ? void 0 : n.type
            }
            dripDate={
              (null == quiz || null === (r = quiz.drip_settings) || void 0 === r
                ? void 0
                : r.date) || sn()().startOf('day').format('YYYY-MM-DD')
            }
            dripTime={
              (null == quiz || null === (a = quiz.drip_settings) || void 0 === a
                ? void 0
                : a.time) || new Date()
            }
            enrollmentFromXDays={
              null == quiz || null === (o = quiz.drip_settings) || void 0 === o ? void 0 : o.days
            }
            isCohortBased={Router}
            padding={0}
          />
          <Controls.DividerWP marginStart={4} marginEnd={4} />
          <Controls.SpacerWP marginBottom={3} />
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Time Limit', 'ohmylms'),
              description: (0, I18n.__)(
                'Set a time limit for how long students have to complete the quiz.',
                'ohmylms',
              ),
              className: 'omlms-quiz-time-limit-settings',
            },
            <Controls.FlexWP justify={'flex-end'} align={'center'} gap={2}>
              <Controls.InputNumberWP
                type={'number'}
                min={0}
                max={1e3}
                value={null == d || null === (i = d.time_limit) || void 0 === i ? void 0 : i.value}
                controls={!1}
                style={{
                  width: 100,
                }}
                className={'omlms-time-limit-input'}
                onChange={function (e) {
                  var t = e;
                  /^\d*\.?\d*$/.test(t) && C('time_limit', t, 'value');
                }}
                onKeyDown={function (e) {
                  (['e', 'E', '+', '-', '/', '\\', '.', ',', '*', ' '].includes(e.key) ||
                    (/[a-zA-Z]/.test(e.key) &&
                      !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'].includes(
                        e.key,
                      ))) &&
                    e.preventDefault();
                }}
                onBlur={function () {
                  var e;
                  (null == d || null === (e = d.time_limit) || void 0 === e ? void 0 : e.value) <
                    0 && C('time_limit', 0, 'value');
                }}
                disabled={!s}
              />
              <vn.A
                value={
                  (null == d || null === (l = d.time_limit) || void 0 === l ? void 0 : l.type) ||
                  'minutes'
                }
                onChange={function (e) {
                  return C('time_limit', e, 'type');
                }}
                options={$m}
                placeholder={(0, I18n.__)('Select Time Type', 'ohmylms')}
                disabled={!s}
                className={'omlms-time-limit-type-select'}
              />
            </Controls.FlexWP>,
          )}
          <Vm
            handleChange={C}
            isChecked={
              null == d || null === (c = d.passing_grade) || void 0 === c ? void 0 : c.enabled
            }
            value={null == d || null === (u = d.passing_grade) || void 0 === u ? void 0 : u.value}
            maxScore={O}
          />
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Hide Answers On Results Page', 'ohmylms'),
              description: (0, I18n.__)(
                'Keep the correct answers hidden after quiz completion to focus students on learning.',
                'ohmylms',
              ),
              className: 'omlms-quiz-hide-answers-settings',
            },
            <div
              style={{
                display: 'inline-block',
                opacity: s ? 1 : 0.3,
                cursor: 'pointer',
              }}
            >
              <Bt.A
                checked={(null == d ? void 0 : d.hide_answers) || !1}
                onChange={function (e) {
                  return x('hide_answers', e);
                }}
                className={'omlms-hide-answers-switch'}
              />
            </div>,
          )}
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Move to Next Section Without Passing Grade', 'ohmylms'),
              description: (0, I18n.__)(
                'Allow students to continue to the next section even if they don’t pass the quiz.',
                'ohmylms',
              ),
              className: 'omlms-quiz-move-next-settings',
            },
            <div
              style={{
                display: 'inline-block',
                opacity: s ? 1 : 0.3,
                cursor: 'pointer',
              }}
            >
              <Bt.A
                checked={(null == d ? void 0 : d.move_to_next_section) || !1}
                onChange={function (e) {
                  return x('move_to_next_section', e);
                }}
                className={'omlms-move-next-switch'}
              />
            </div>,
          )}
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Randomize Quiz Questions', 'ohmylms'),
              description: (0, I18n.__)(
                'Shuffle the question order to create a different quiz experience each time.',
                'ohmylms',
              ),
              className: 'omlms-quiz-randomize-questions-settings',
            },
            <div
              style={{
                display: 'inline-block',
                opacity: s ? 1 : 0.3,
                cursor: 'pointer',
              }}
            >
              <Bt.A
                checked={(null == d ? void 0 : d.randomize_questions) || !1}
                onChange={function (e) {
                  return x('randomize_questions', e);
                }}
                className={'omlms-randomize-questions-switch'}
              />
            </div>,
          )}
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Attempts Allowed', 'ohmylms'),
              description: (0, I18n.__)(
                'Limit the number of times a student can retake the quiz for better evaluation.',
                'ohmylms',
              ),
              className: 'omlms-quiz-attempts-allowed-settings',
            },
            <Controls.InputNumberWP
              type={'number'}
              min={0}
              max={1e3}
              value={null == d ? void 0 : d.allow_attempts}
              controls={!1}
              style={{
                width: 100,
              }}
              onChange={function (e) {
                var t = e;
                /^\d*\.?\d*$/.test(t) && x('allow_attempts', t);
              }}
              onKeyDown={function (e) {
                (['e', 'E', '+', '-', '/', '\\', '.', ',', '*', ' '].includes(e.key) ||
                  (/[a-zA-Z]/.test(e.key) &&
                    !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'].includes(
                      e.key,
                    ))) &&
                  e.preventDefault();
              }}
              onBlur={function () {
                (null == d ? void 0 : d.allow_attempts) < 0 && x('allow_attempts', 0);
              }}
              className={'omlms-attempts-allowed-input'}
            />,
          )}
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Question Layout', 'ohmylms'),
              description: (0, I18n.__)(
                'Choose how your quiz questions are displayed to students.',
                'ohmylms',
              ),
              isItProFeature: !0,
              className: 'omlms-quiz-layout-settings-card',
            },
            <div className={'omlms-quiz-layout-settings'}>
              <vn.A
                value={(null == d ? void 0 : d.layout) || 'one_question_per_page'}
                onChange={function (e) {
                  return C('layout', e);
                }}
                options={Km}
                placeholder={(0, I18n.__)('Select layout', 'ohmylms')}
                showSearch={!1}
                classNames={{
                  popup: {
                    root: 'omlms-ant-select-dropdown',
                  },
                }}
                disabled={!s}
              />
              {'number_of_questions_per_page' === (null == d ? void 0 : d.layout) && (
                <React.Fragment>
                  <Controls.SpacerWP />
                  <Controls.InputNumberWP
                    type={'number'}
                    min={0}
                    max={1e3}
                    value={null == d ? void 0 : d.question_in_one_page}
                    controls={!1}
                    style={{
                      width: 170,
                      marginLeft: 'auto',
                    }}
                    onChange={function (e) {
                      var t = e;
                      /^\d*\.?\d*$/.test(t) && x('question_in_one_page', t);
                    }}
                    onKeyDown={function (e) {
                      (['e', 'E', '+', '-', '/', '\\', '.', ',', '*', ' '].includes(e.key) ||
                        (/[a-zA-Z]/.test(e.key) &&
                          ![
                            'Backspace',
                            'Tab',
                            'ArrowLeft',
                            'ArrowRight',
                            'Delete',
                            'Enter',
                          ].includes(e.key))) &&
                        e.preventDefault();
                    }}
                    onBlur={function () {
                      (null == d ? void 0 : d.question_in_one_page) < 0 &&
                        x('question_in_one_page', value);
                    }}
                    className={'omlms-questions-per-page-input'}
                  />
                </React.Fragment>
              )}
            </div>,
          )}
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Hide Question Number', 'ohmylms'),
              isItProFeature: !0,
              className: 'omlms-quiz-hide-question-number-settings',
            },
            <div
              style={{
                display: 'inline-block',
                opacity: s ? 1 : 0.3,
                cursor: 'pointer',
              }}
            >
              <Bt.A
                checked={(null == d ? void 0 : d.hide_question_number) || !1}
                onChange={function (e) {
                  return x('hide_question_number', e);
                }}
                className={'omlms-hide-question-number-switch'}
              />
            </div>,
          )}
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Set Character Limit for Short Answers', 'ohmylms'),
              isItProFeature: !0,
              className: 'omlms-quiz-short-answer-limit-settings',
            },
            <Controls.InputNumberWP
              type={'number'}
              min={0}
              max={1e3}
              placeholder={(0, I18n.__)('Set Character Limit', 'ohmylms')}
              value={null == d ? void 0 : d.short_text_limit}
              controls={!1}
              style={{
                width: 170,
              }}
              onChange={function (e) {
                var t = e;
                /^\d*\.?\d*$/.test(t) && x('short_text_limit', t);
              }}
              onKeyDown={function (e) {
                (['e', 'E', '+', '-', '/', '\\', '.', ',', '*', ' '].includes(e.key) ||
                  (/[a-zA-Z]/.test(e.key) &&
                    !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'].includes(
                      e.key,
                    ))) &&
                  e.preventDefault();
              }}
              onBlur={function () {
                (null == d ? void 0 : d.short_text_limit) < 0 && x('short_text_limit', 0);
              }}
              disabled={!s}
              className={'omlms-short-answer-limit-input'}
            />,
          )}
          {React.createElement(
            zm,
            {
              title: (0, I18n.__)('Set Character Limit for Long Answers', 'ohmylms'),
              showDivider: !1,
              isItProFeature: !0,
              className: 'omlms-quiz-long-answer-limit-settings',
            },
            <Controls.InputNumberWP
              type={'number'}
              min={0}
              max={1e3}
              placeholder={(0, I18n.__)('Set Character Limit', 'ohmylms')}
              value={null == d ? void 0 : d.long_text_limit}
              controls={!1}
              style={{
                width: 170,
              }}
              onChange={function (e) {
                var t = e;
                /^\d*\.?\d*$/.test(t) && x('long_text_limit', t);
              }}
              onKeyDown={function (e) {
                (['e', 'E', '+', '-', '/', '\\', '.', ',', '*', ' '].includes(e.key) ||
                  (/[a-zA-Z]/.test(e.key) &&
                    !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'].includes(
                      e.key,
                    ))) &&
                  e.preventDefault();
              }}
              onBlur={function () {
                (null == d ? void 0 : d.long_text_limit) < 0 && x('long_text_limit', 0);
              }}
              disabled={!s}
              className={'omlms-long-answer-limit-input'}
            />,
          )}
          {E && (
            <React.Fragment>
              <He.default isOpen={E} onClose={S} />
            </React.Fragment>
          )}
        </React.Fragment>
      )
    );
  };
}
