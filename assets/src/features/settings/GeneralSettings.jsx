/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createGeneralSettings(readRuntime) {
  return function GeneralSettings(props) {
    const {
      CK,
      I: Controls,
      PK,
      RK,
      React,
      SK: MemoSettingsActionBar,
      T: StoreModule,
      g: ReactHooks,
      l,
      wK: MemoGeneralSettingsFields,
      y: WordPressData,
    } = readRuntime();
    var t = props.activeTab,
      n = props.handleSave,
      r = props.handleMigration,
      a = props.selectedCourses,
      o = props.isSaving,
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      c = PK(
        (0, ReactHooks.useState)([
          {
            disabled: !0,
            label: 'Select an page',
            value: '',
          },
        ]),
        2,
      ),
      u = c[0],
      s = c[1],
      d = function (e) {
        return e
          ? Object.entries(e).map(function (e) {
              var t = PK(e, 2),
                n = t[0];
              return {
                label: t[1],
                value: n,
              };
            })
          : [];
      };
    return (
      (0, ReactHooks.useEffect)(function () {
        var e = (function () {
          var e,
            t =
              ((e = RK().m(function e() {
                var t, n, r;
                return RK().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          i.setLoadingSetting(!0),
                          (e.n = 1),
                          l()({
                            path: 'creator-lms/v1/settings/general',
                          })
                        );
                      case 1:
                        return (
                          (t = e.v),
                          i.setGeneralSettings(t),
                          (e.n = 2),
                          l()({
                            path: '/creator-lms/v1/page/search?value=',
                            method: 'GET',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          })
                        );
                      case 2:
                        return ((n = e.v), (e.n = 3), d(n));
                      case 3:
                        ((r = e.v), s(r), i.setLoadingSetting(!1));
                      case 4:
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
                    CK(o, r, a, i, l, 'next', e);
                  }
                  function l(e) {
                    CK(o, r, a, i, l, 'throw', e);
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
            <Controls.SpacerWP padding={4} marginTop={0} marginBottom={0}>
              <MemoGeneralSettingsFields pages={u} setPages={s} />
              <MemoSettingsActionBar
                activeTab={t}
                handleSave={n}
                handleMigration={r}
                selectedCourses={a}
                isSaving={o}
              />
            </Controls.SpacerWP>
          </Controls.CardWP>
        </React.Fragment>
      )
    );
  };
}
