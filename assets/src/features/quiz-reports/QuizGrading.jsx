/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
import { normalizeQuizReport } from './model.mjs';
export function createQuizGrading(readRuntime) {
  return function QuizGrading() {
    const {
      B$,
      D$,
      Ge: decodeHtml,
      HG: useAdminScreen,
      I: Controls,
      I$: QuizQuestionResults,
      L$,
      N$: QuizResultSummary,
      QZ: BackIcon,
      R$,
      React,
      b: I18n,
      f: Router,
      g: ReactHooks,
      j$,
      l: ApiFetchModule,
      r$: DateIcon,
      sn: DateLibrary,
      v: RouterLinks,
    } = readRuntime();
    var e, t, n, r, a, o, i, c, u, s, d;
    useAdminScreen('creator-lms', 'quizzes');
    var m = L$((0, ReactHooks.useState)([]), 2),
      attempt = m[0],
      setAttempt = m[1],
      y = L$((0, ReactHooks.useState)(!0), 2),
      loading = y[0],
      setLoading = y[1],
      navigate = (0, Router.Zp)(),
      params = (0, Router.g)(),
      quizId = params.id,
      attemptId = params.quizId,
      fetchReport = (function () {
        var e = B$(
          D$().m(function e() {
            var t, n;
            return D$().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        setLoading(!0),
                        (e.n = 1),
                        ApiFetchModule()({
                          path: '/creator-lms/v1/quiz/'
                            .concat(quizId, '/report/')
                            .concat(attemptId),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 1:
                      if ((t = e.v)) {
                        e.n = 2;
                        break;
                      }
                      t = [];
                    case 2:
                      (setAttempt(normalizeQuizReport(t)), (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3), (n = e.v), console.error(n));
                    case 4:
                      return ((e.p = 4), setLoading(!1), e.f(4));
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 3, 4, 5]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    (0, ReactHooks.useEffect)(function () {
      fetchReport();
    }, []);
    var P,
      O,
      saveGrade = (function () {
        var e = B$(
          D$().m(function e() {
            var t, n;
            return D$().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        (e.n = 1),
                        ApiFetchModule()({
                          path: '/creator-lms/v1/quiz/'
                            .concat(quizId, '/report/')
                            .concat(attemptId),
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(attempt),
                        })
                      );
                    case 1:
                      ('success' === (null == (t = e.v) ? void 0 : t.status) &&
                        window.location.reload(),
                        (e.n = 3));
                      break;
                    case 2:
                      ((e.p = 2), (n = e.v), console.error(n));
                    case 3:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    return (
      <React.Fragment>
        <Controls.ContainerWP className={'omlms-quiz-report-details'}>
          <Controls.SpacerWP marginY={5}>
            <Controls.FlexWP gap={3} align={'center'} justify={'space-between'}>
              <Controls.FlexItemWP>
                <Controls.CardWP isBorderless={!0}>
                  <Controls.FlexWP justify={'center'} align={'center'} gap={2}>
                    <Controls.SpacerWP padding={2} marginBottom={0}>
                      <Controls.FlexWP justify={'center'} align={'center'} gap={2}>
                        <RouterLinks.Link to={'/quiz-edit/'.concat(quizId)}>
                          <Controls.FlexWP justify={'flex-start'} align={'center'} gap={1}>
                            <BackIcon />
                            <Controls.TextWP size={15}>
                              {(0, I18n.__)('Quiz /', 'ohmylms')}
                            </Controls.TextWP>
                          </Controls.FlexWP>
                        </RouterLinks.Link>
                        <RouterLinks.Link
                          to={'#'}
                          onClick={function () {
                            navigate(-1);
                          }}
                        >
                          <Controls.TextWP size={15}>
                            {(0, I18n.__)('Result /', 'ohmylms')}
                          </Controls.TextWP>
                        </RouterLinks.Link>
                        <Controls.TextWP size={15}>
                          {decodeHtml(
                            null == attempt || null === (e = attempt.student) || void 0 === e
                              ? void 0
                              : e.name,
                          )}
                        </Controls.TextWP>
                      </Controls.FlexWP>
                    </Controls.SpacerWP>
                  </Controls.FlexWP>
                </Controls.CardWP>
              </Controls.FlexItemWP>
              <Controls.FlexItemWP>
                <Controls.FlexWP gap={4} justify={'flex-start'}>
                  {(null == attempt ? void 0 : attempt.end_date) && (
                    <Controls.FlexItemWP>
                      <Controls.FlexWP gap={2} justify={'center'}>
                        <DateIcon />
                        <time
                          style={{
                            fontSize: '15px',
                            color: 'var(--wp-components-color-foreground)',
                          }}
                        >
                          {(0, I18n.__)('Date submitted', 'ohmylms')}
                          {': '}
                          {DateLibrary()(null == attempt ? void 0 : attempt.end_date).format(
                            'MMM D, YYYY h:mm A',
                          )}
                        </time>
                      </Controls.FlexWP>
                    </Controls.FlexItemWP>
                  )}
                  {(null == attempt || null === (t = attempt.report) || void 0 === t
                    ? void 0
                    : t.status) && (
                    <Controls.FlexItemWP>
                      <Controls.BadgeWP
                        style={{
                          textTransform: 'capitalize',
                        }}
                        isBorderLess={!0}
                        variant={
                          'in-review' ===
                          (null == attempt || null === (n = attempt.report) || void 0 === n
                            ? void 0
                            : n.status)
                            ? 'warning'
                            : 'completed' ===
                                (null == attempt || null === (r = attempt.report) || void 0 === r
                                  ? void 0
                                  : r.status)
                              ? 'success'
                              : 'danger'
                        }
                      >
                        {'in-review' ===
                        (null == attempt || null === (a = attempt.report) || void 0 === a
                          ? void 0
                          : a.status)
                          ? 'Pending'
                          : null == attempt || null === (o = attempt.report) || void 0 === o
                            ? void 0
                            : o.status}
                      </Controls.BadgeWP>
                    </Controls.FlexItemWP>
                  )}
                </Controls.FlexWP>
              </Controls.FlexItemWP>
              <Controls.ButtonWP onClick={saveGrade} variant={'primary'}>
                {(0, I18n.__)('Upgrade Grade', 'ohmylms')}
              </Controls.ButtonWP>
            </Controls.FlexWP>
            <Controls.SpacerWP marginBottom={10} />
            <div className={'omlms-quiz-report-content-wrapper'}>
              {loading ? (
                <Controls.SkeletonWP active={!0} rows={10} />
              ) : (
                <React.Fragment>
                  <Controls.FlexWP gap={6} align={'flex-start'} justify={'space-between'}>
                    <Controls.FlexBlockWP
                      style={{
                        flex: '5',
                      }}
                    >
                      <QuizQuestionResults
                        setData={setAttempt}
                        data={
                          null == attempt || null === (i = attempt.report) || void 0 === i
                            ? void 0
                            : i.questions
                        }
                        fetchData={fetchReport}
                      />
                    </Controls.FlexBlockWP>
                    <Controls.FlexBlockWP
                      style={{
                        flex: '2',
                      }}
                    >
                      <QuizResultSummary
                        data={{
                          score: (null == attempt ? void 0 : attempt.score) || 0,
                          correct: ''
                            .concat(
                              ((P =
                                null == attempt || null === (c = attempt.report) || void 0 === c
                                  ? void 0
                                  : c.questions),
                              (O = 0),
                              P && P.length
                                ? (P.forEach(function (e) {
                                    'correct' ===
                                      (function (e) {
                                        var t,
                                          n = e.given_answer,
                                          r = e.questions,
                                          a =
                                            null == e || null === (t = e.settings) || void 0 === t
                                              ? void 0
                                              : t.type;
                                        if (
                                          'true-false' === a ||
                                          'short-text' === a ||
                                          'long-text' === a ||
                                          'fill-in-the-blank' === a ||
                                          'statement' === a
                                        )
                                          return (null == e ? void 0 : e.achive_mark) > 0
                                            ? 'correct'
                                            : 'incorrect';
                                        if ('reorder' === a)
                                          return R$(n, r) ? 'correct' : 'incorrect';
                                        if ('matching' === a)
                                          return j$(n) ? 'correct' : 'incorrect';
                                        if (!n || !Array.isArray(n)) return 'incorrect';
                                        var o = r
                                            .filter(function (e) {
                                              return '1' === e.is_correct;
                                            })
                                            .map(function (e) {
                                              return e.id;
                                            }),
                                          i = n.every(function (e) {
                                            return o.includes(e);
                                          });
                                        return 'single-choice' === e.settings.type
                                          ? i && 1 === n.length && o.includes(n[0])
                                            ? 'correct'
                                            : 'incorrect'
                                          : 'multiple-choice' === e.settings.type
                                            ? i && n.length === o.length
                                              ? 'correct'
                                              : 'incorrect'
                                            : 'statement' === e.settings.type &&
                                                i &&
                                                n.length === o.length
                                              ? 'correct'
                                              : 'incorrect';
                                      })(e) && O++;
                                  }),
                                  O)
                                : O),
                              '/',
                            )
                            .concat(null == attempt ? void 0 : attempt.total_question),
                          isPass:
                            Number(null == attempt ? void 0 : attempt.score) >=
                            Number(null == attempt ? void 0 : attempt.passing_mark),
                          status:
                            null == attempt || null === (u = attempt.report) || void 0 === u
                              ? void 0
                              : u.status,
                          student_name: decodeHtml(
                            null == attempt || null === (s = attempt.student) || void 0 === s
                              ? void 0
                              : s.name,
                          ),
                          course_name: decodeHtml(
                            null == attempt || null === (d = attempt.course) || void 0 === d
                              ? void 0
                              : d.name,
                          ),
                        }}
                      />
                    </Controls.FlexBlockWP>
                  </Controls.FlexWP>
                </React.Fragment>
              )}
            </div>
          </Controls.SpacerWP>
        </Controls.ContainerWP>
      </React.Fragment>
    );
  };
}
