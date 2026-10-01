/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAssignmentReport(readRuntime) {
  return function AssignmentReport() {
    const {
      Cm,
      HG,
      I: Controls,
      Q$,
      QZ,
      React,
      U$,
      Y$,
      b: I18n,
      df,
      f: Router,
      fN,
      g: ReactHooks,
      l,
      sN,
      uf,
      v,
    } = readRuntime();
    HG('ohmylms', 'assignments');
    var e = Q$((0, ReactHooks.useState)(''), 2),
      t = e[0],
      n = e[1],
      r = Q$((0, ReactHooks.useState)(1), 2),
      a = r[0],
      o = r[1],
      i = Q$((0, ReactHooks.useState)([]), 2),
      c = i[0],
      u = i[1],
      s = Q$((0, ReactHooks.useState)(!0), 2),
      d = s[0],
      m = s[1],
      p = Q$((0, ReactHooks.useState)(10), 1)[0],
      h = (0, Router.Zp)(),
      y = (0, Router.g)().id;
    (0, ReactHooks.useEffect)(
      function () {
        var e = (function () {
          var e,
            t =
              ((e = U$().m(function e() {
                var t, n;
                return U$().w(
                  function (e) {
                    for (;;)
                      switch ((e.p = e.n)) {
                        case 0:
                          return (
                            (e.p = 0),
                            m(!0),
                            (e.n = 1),
                            l()({
                              path: '/ohmylms/v1/assignment/'.concat(y, '/report'),
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
                          (u(t || []), (e.n = 4));
                          break;
                        case 3:
                          ((e.p = 3), (n = e.v), console.error(n));
                        case 4:
                          return ((e.p = 4), m(!1), e.f(4));
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
                    Y$(o, r, a, i, l, 'next', e);
                  }
                  function l(e) {
                    Y$(o, r, a, i, l, 'throw', e);
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
      [y],
    );
    var _ = c.filter(function (e) {
        return Object.values(e).some(function (e) {
          return String(e).toLowerCase().includes(t);
        });
      }),
      w = [
        {
          title: 'Name',
          dataIndex: 'display_name',
          key: 'display_name',
        },
        {
          title: 'Email',
          dataIndex: 'user_email',
          key: 'user_email',
        },
        {
          title: 'Total Submitted',
          dataIndex: 'submissions',
          key: 'submissions',
          render: function (e) {
            return (null == e ? void 0 : e.length) || 0;
          },
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: function (e, t) {
            var n = null == t ? void 0 : t.submissions[0].status;
            return (
              <Controls.BadgeWP
                style={{
                  textTransform: 'capitalize',
                }}
                variant={'submitted' === n ? 'warning' : 'passed' === n ? 'success' : 'danger'}
              >
                {'submitted' === n ? (0, I18n.__)('Pending', 'ohmylms') : n}
              </Controls.BadgeWP>
            );
          },
        },
        {
          title: 'Action',
          key: 'action',
          render: function (e, t) {
            return (
              <Controls.ButtonWP
                variant={'primary'}
                onClick={function () {
                  return (
                    (e = null == t ? void 0 : t.user_id),
                    void h('grade-assignment/'.concat(e))
                  );
                  var e;
                }}
              >
                {(0, I18n.__)('Details', 'ohmylms')}
              </Controls.ButtonWP>
            );
          },
        },
      ];
    return (
      <React.Fragment>
        <Controls.ContainerWP>
          <Controls.SpacerWP marginY={5}>
            <Controls.FlexWP align={'center'} justify={'space-between'} gap={2}>
              <Controls.CardWP isBorderless={!0}>
                <Controls.FlexWP justify={'center'} align={'center'} gap={2}>
                  <Controls.SpacerWP padding={2} marginBottom={0}>
                    <Controls.FlexWP justify={'center'} align={'center'} gap={2}>
                      <v.Link to={'/assignments'}>
                        <Controls.FlexWP justify={'flex-start'} align={'center'} gap={1}>
                          <QZ />
                          <Controls.TextWP size={15}>
                            {(0, I18n.__)('Assignments /', 'ohmylms')}
                          </Controls.TextWP>
                        </Controls.FlexWP>
                      </v.Link>
                      <Controls.TextWP size={15}>
                        {(0, I18n.__)('Result', 'ohmylms')}
                      </Controls.TextWP>
                    </Controls.FlexWP>
                  </Controls.SpacerWP>
                </Controls.FlexWP>
              </Controls.CardWP>
              <Controls.CardWP isBorderless={!0}>
                <Controls.SpacerWP padding={2} marginBottom={0}>
                  <Cm
                    placeholder={(0, I18n.__)('Search Submission', 'ohmylms')}
                    onChange={function (e) {
                      n(e.toLowerCase());
                    }}
                  />
                </Controls.SpacerWP>
              </Controls.CardWP>
            </Controls.FlexWP>
            <Controls.CardWP isBorderless={!0}>
              <Controls.SpacerWP padding={5} marginTop={4}>
                <sN.A
                  columns={w}
                  rowKey={'user_email'}
                  dataSource={_.slice((a - 1) * p, a * p)}
                  pagination={!1}
                  loading={d}
                  locale={{
                    emptyText: React.createElement(uf, {
                      icon: React.createElement(df, null),
                      title: (0, I18n.__)('No submission yet!', 'ohmylms'),
                    }),
                  }}
                />
                {_.length > p &&
                  React.createElement(fN, {
                    total: _.length,
                    currentPage: a,
                    onPageChange: function (e) {
                      o(e);
                    },
                    perPage: p,
                  })}
              </Controls.SpacerWP>
            </Controls.CardWP>
          </Controls.SpacerWP>
        </Controls.ContainerWP>
      </React.Fragment>
    );
  };
}
