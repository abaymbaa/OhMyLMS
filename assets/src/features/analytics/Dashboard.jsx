/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createDashboard(readRuntime) {
  return function Dashboard() {
    const {
      D: Buttons,
      GG,
      HG,
      I: Controls,
      L: Entitlements,
      NG: DashboardOverview,
      React,
      T: StoreModule,
      VG: CourseImportDialog,
      YG: PageHeader,
      b: I18n,
      cU,
      dU,
      g: ReactHooks,
      lU: CourseCreateDialog,
      mU,
      nf,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    HG('ohmylms', 'dashboard');
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = (0, Notifications.A)(),
      n = t.openNotificationWithIcon,
      r = t.contextHolder,
      a = true,
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      l = mU((0, ReactHooks.useState)(!1), 2),
      c = l[0],
      u = l[1],
      s = mU((0, ReactHooks.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = mU((0, ReactHooks.useState)(!1), 2),
      f = p[0],
      v = (p[1], mU((0, ReactHooks.useState)(!1), 2)),
      h = v[0],
      _ = v[1],
      w = mU((0, ReactHooks.useState)(!1), 2),
      E = w[0],
      S = w[1],
      R = (0, ReactHooks.useRef)(null),
      x = mU((0, ReactHooks.useState)(!1), 2),
      C = x[0],
      P = x[1],
      O =
        ((0, ReactHooks.useCallback)(
          function () {
            u(!0);
          },
          [a],
        ),
        (function () {
          var t = dU(
            cU().m(function t(n) {
              var r, a;
              return cU().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (n) {
                          t.n = 1;
                          break;
                        }
                        return t.a(2);
                      case 1:
                        return ((t.p = 1), m(!0), (t.n = 2), e.importCourse(n));
                      case 2:
                        (null != (r = t.v) && r.success && u(!1), (t.n = 4));
                        break;
                      case 3:
                        ((t.p = 3), (a = t.v), console.error('Error exporting course:', a));
                      case 4:
                        return ((t.p = 4), m(!1), t.f(4));
                      case 5:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 3, 4, 5]],
              );
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })()),
      k = (function () {
        var e = dU(
          cU().m(function e() {
            return cU().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    S(!0);
                  case 1:
                    return e.a(2);
                }
            }, e);
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    return (
      (0, ReactHooks.useEffect)(
        function () {
          o && n(i, o);
        },
        [o],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          var e = function (e) {
            R.current && !R.current.contains(e.target) && P(!1);
          };
          return (
            C
              ? document.addEventListener('mousedown', e)
              : document.removeEventListener('mousedown', e),
            function () {
              document.removeEventListener('mousedown', e);
            }
          );
        },
        [C],
      ),
      (
        <React.Fragment>
          {r}
          <Controls.SurfaceWP>
            <Controls.ContainerWP isFullWidth={!0}>
              {h && (
                <GG.A
                  status={'error'}
                  isClosable={!0}
                  onRemove={function () {
                    return _(!1);
                  }}
                >
                  {(0, I18n.__)('Error creating course. Please try again.', 'ohmylms')}
                </GG.A>
              )}
              <PageHeader title={(0, I18n.__)('Overview', 'ohmylms')} showAddButton={!1}>
                <Buttons.A
                  variant={'primary'}
                  isBusy={f}
                  onClick={k}
                  icon={React.createElement(nf, null)}
                  iconPosition={'left'}
                >
                  {(0, I18n.__)('Add Course', 'ohmylms')}
                </Buttons.A>
              </PageHeader>
              <DashboardOverview handleAddCourse={k} />
              <Controls.SpacerWP marginBottom={0} paddingBottom={5} />
              {c && (
                <React.Fragment>
                  <CourseImportDialog
                    onClose={function () {
                      (u(!1), m(!1));
                    }}
                    onAction={O}
                    isOpen={c}
                    cancelBtnText={(0, I18n.__)('Cancel', 'ohmylms')}
                    actionBtnText={(0, I18n.__)('Import', 'ohmylms')}
                    loading={d}
                  />
                </React.Fragment>
              )}
              {E && (
                <CourseCreateDialog
                  isOpen={E}
                  onClose={function () {
                    return S(!1);
                  }}
                />
              )}
            </Controls.ContainerWP>
          </Controls.SurfaceWP>
        </React.Fragment>
      )
    );
  };
}
