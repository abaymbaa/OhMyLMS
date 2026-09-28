/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createDesignSettings(readRuntime) {
  return function DesignSettings(props) {
    const {
      B0,
      D0,
      I: Controls,
      JJ,
      React,
      SK: MemoSettingsActionBar,
      T: StoreModule,
      W0,
      b: I18n,
      ep,
      f: Router,
      g: ReactHooks,
      k0,
      l,
      y: WordPressData,
    } = readRuntime();
    var t = props.activeTab,
      n = props.handleSave,
      r = props.handleMigration,
      a = props.selectedCourses,
      o = props.isSaving,
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      c = (0, Router.g)(),
      u = c.tab,
      s = c.subTab,
      d = c.subPanel,
      m = (0, Router.Zp)(),
      p = (0, ReactHooks.useMemo)(function () {
        return [
          {
            label: (0, I18n.__)('Course Listing Page', 'ohmylms'),
            key: 'course-list',
            children: <JJ />,
          },
          {
            label: (0, I18n.__)('Course Details Page', 'ohmylms'),
            key: 'course-details',
            children: React.createElement(k0, null),
          },
          {
            label: (0, I18n.__)('Checkout Page', 'ohmylms'),
            key: 'checkout-page',
            children: <D0 />,
          },
        ];
      }, []);
    return (
      (0, ReactHooks.useEffect)(function () {
        var e = (function () {
          var e,
            t =
              ((e = W0().m(function e() {
                var t;
                return W0().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          i.setLoadingSetting(!0),
                          (e.n = 1),
                          l()({
                            path: 'creator-lms/v1/settings/design',
                          })
                        );
                      case 1:
                        ((t = e.v), i.setDesignSettings(t), i.setLoadingSetting(!1));
                      case 2:
                        return e.a(2);
                    }
                }, e);
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, a) {
                  var o = e.apply(t, n);
                  function i(e) {
                    B0(o, r, a, i, l, 'next', e);
                  }
                  function l(e) {
                    B0(o, r, a, i, l, 'throw', e);
                  }
                  i(void 0);
                });
              });
          return function () {
            return t.apply(this, arguments);
          };
        })();
        e();
      }, []),
      (
        <React.Fragment>
          <Controls.CardWP
            isBorderless={!0}
            variant={'secondary'}
            className={'omlms-full-screen-height'}
          >
            <Controls.SpacerWP padding={4} paddingTop={2} marginTop={4} marginBottom={0}>
              <ep.A
                items={p}
                onChange={function (e) {
                  var t = '/settings/'.concat(u, '/').concat(e);
                  m(
                    'course-details' === e
                      ? ''.concat(t, '/').concat(null != d ? d : 'unenroll-view')
                      : t,
                  );
                }}
                activekey={s}
              />
              <Controls.SpacerWP marginBottom={0} marginTop={4}>
                <MemoSettingsActionBar
                  activeTab={t}
                  handleSave={n}
                  handleMigration={r}
                  selectedCourses={a}
                  isSaving={o}
                />
              </Controls.SpacerWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
        </React.Fragment>
      )
    );
  };
}
