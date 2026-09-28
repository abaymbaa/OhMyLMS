/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createQuizReport(readRuntime) {
  return function QuizReport() {
    const {
      Cm: SearchInput,
      HG: useAdminScreen,
      I: Controls,
      JZ,
      KZ,
      QZ: BackIcon,
      React,
      ZZ,
      b: I18n,
      df: EmptyIcon,
      f: Router,
      fN: Pagination,
      g: ReactHooks,
      l: ApiFetchModule,
      sN: Table,
      sn: DateLibrary,
      uf: EmptyState,
      v: RouterLinks,
    } = readRuntime();
    useAdminScreen('creator-lms', 'quizzes');
    var e = JZ((0, ReactHooks.useState)(''), 2),
      search = e[0],
      setSearch = e[1],
      r = JZ((0, ReactHooks.useState)(1), 2),
      page = r[0],
      setPage = r[1],
      i = JZ((0, ReactHooks.useState)([]), 2),
      submissions = i[0],
      setSubmissions = i[1],
      s = JZ((0, ReactHooks.useState)(!0), 2),
      loading = s[0],
      setLoading = s[1],
      perPage = JZ((0, ReactHooks.useState)(10), 1)[0],
      navigate = (0, Router.Zp)(),
      y = JZ((0, ReactHooks.useState)(0), 2),
      passingMark = y[0],
      setPassingMark = y[1],
      E = JZ((0, ReactHooks.useState)(0), 2),
      setTotalMarks = (E[0], E[1]),
      quizId = (0, Router.g)().id;
    (0, ReactHooks.useEffect)(
      function () {
        var e = (function () {
          var e,
            t =
              ((e = ZZ().m(function e() {
                var t, n, r;
                return ZZ().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          return (
                            (e.p = 0),
                            setLoading(!0),
                            (e.n = 1),
                            ApiFetchModule()({
                              path: '/creator-lms/v1/quiz/'.concat(quizId, '/report'),
                              method: 'GET',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            })
                          );
                        case 1:
                          if ((n = e.v)) {
                            e.n = 2;
                            break;
                          }
                          n = [];
                        case 2:
                          (setSubmissions((null == (t = n) ? void 0 : t.report) || []),
                            setPassingMark(Number(null == t ? void 0 : t.passing_mark) || 0),
                            setTotalMarks(Number(null == t ? void 0 : t.question_total_marks) || 0),
                            (e.n = 4));
                          break;
                        case 3:
                          ((e.p = 3), (r = e.v), console.error(r));
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
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, a) {
                  var o = e.apply(t, n);
                  function i(e) {
                    KZ(o, r, a, i, l, 'next', e);
                  }
                  function l(e) {
                    KZ(o, r, a, i, l, 'throw', e);
                  }
                  i(void 0);
                });
              });
          return function () {
            return t.apply(this, arguments);
          };
        })();
        e();
      },
      [quizId],
    );
    var onPageChange = (0, ReactHooks.useCallback)(function (e) {
        setPage(e);
      }, []),
      filteredSubmissions = submissions.filter(function (e) {
        return Object.values(e).some(function (e) {
          return String(e).toLowerCase().includes(search);
        });
      }),
      columns = [
        {
          title: 'Name',
          dataIndex: 'student_name',
          key: 'student_name',
        },
        {
          title: 'Email',
          dataIndex: 'student_email',
          key: 'student_email',
        },
        {
          title: 'Date Submitted',
          dataIndex: 'end_date',
          key: 'end_date',
          render: function (e) {
            return DateLibrary()(e).format('MMM D, YYYY h:mm A');
          },
        },
        {
          title: 'Score',
          dataIndex: 'score',
          key: 'score',
          render: function (e, t) {
            return <React.Fragment>{t.total_marks}</React.Fragment>;
          },
        },
        {
          title: 'Result',
          dataIndex: 'result',
          key: 'result',
          render: function (e, t) {
            var n = Number(null == t ? void 0 : t.total_marks) >= Number(passingMark);
            return (
              <Controls.BadgeWP
                variant={
                  'in-review' === (null == t ? void 0 : t.status)
                    ? 'warning'
                    : n
                      ? 'success'
                      : 'danger'
                }
              >
                {'in-review' === (null == t ? void 0 : t.status)
                  ? (0, I18n.__)('Pending', 'ohmylms')
                  : n
                    ? (0, I18n.__)('Pass', 'ohmylms')
                    : (0, I18n.__)('Fail', 'ohmylms')}
              </Controls.BadgeWP>
            );
          },
        },
        {
          title: '',
          key: 'action',
          render: function (e, t) {
            return (
              <Controls.ButtonWP
                variant={'primary'}
                onClick={function () {
                  return (
                    (e = null == t ? void 0 : t.quiz_attempt_id),
                    void navigate('grade-quiz/'.concat(e))
                  );
                  var e;
                }}
              >
                {(0, I18n.__)('Grade Quiz', 'ohmylms')}
              </Controls.ButtonWP>
            );
          },
        },
      ];
    return (
      <Controls.ContainerWP>
        <Controls.SpacerWP marginY={5}>
          <div>
            <Controls.FlexWP align={'center'} justify={'space-between'} gap={2}>
              <Controls.CardWP isBorderless={!0}>
                <Controls.FlexWP justify={'center'} align={'center'} gap={2}>
                  <Controls.SpacerWP padding={2} marginBottom={0}>
                    <Controls.FlexWP justify={'center'} align={'center'} gap={2}>
                      <RouterLinks.Link to={'/quizzes'}>
                        <Controls.FlexWP justify={'flex-start'} align={'center'} gap={1}>
                          <BackIcon />
                          {(0, I18n.__)('Quiz /', 'ohmylms')}
                        </Controls.FlexWP>
                      </RouterLinks.Link>
                      <Controls.TextWP as={'span'}>
                        {(0, I18n.__)('Result', 'ohmylms')}
                      </Controls.TextWP>
                    </Controls.FlexWP>
                  </Controls.SpacerWP>
                </Controls.FlexWP>
              </Controls.CardWP>
              <Controls.CardWP isBorderless={!0}>
                <Controls.SpacerWP padding={2} marginBottom={0}>
                  <SearchInput
                    placeholder={(0, I18n.__)('Search Submission', 'ohmylms')}
                    onChange={function (e) {
                      setSearch(e.toLowerCase());
                      setPage(1);
                    }}
                  />
                </Controls.SpacerWP>
              </Controls.CardWP>
            </Controls.FlexWP>
            <Controls.CardWP isBorderless={!0}>
              <Controls.SpacerWP padding={5} marginTop={4}>
                <Table.A
                  columns={columns}
                  rowKey={'quiz_attempt_id'}
                  dataSource={filteredSubmissions.slice((page - 1) * perPage, page * perPage)}
                  loading={loading}
                  pagination={!1}
                  locale={{
                    emptyText: (
                      <EmptyState
                        icon={<EmptyIcon />}
                        title={(0, I18n.__)('No submission yet!', 'ohmylms')}
                      />
                    ),
                  }}
                />
                {filteredSubmissions.length > perPage && (
                  <Pagination
                    total={filteredSubmissions.length}
                    currentPage={page}
                    onPageChange={onPageChange}
                    perPage={perPage}
                  />
                )}
              </Controls.SpacerWP>
            </Controls.CardWP>
          </div>
        </Controls.SpacerWP>
      </Controls.ContainerWP>
    );
  };
}
