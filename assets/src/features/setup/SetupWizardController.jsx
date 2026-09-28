/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createSetupWizardController(readRuntime) {
  return function SetupWizardController() {
    const {
      Fne: MemoSetupCompletion,
      Nte,
      React,
      T: StoreModule,
      Zte: MemoSetupWelcome,
      ane: MemoSetupLevelSelection,
      b: I18n,
      cre: MemoCourseImport,
      f: Router,
      g: ReactHooks,
      hne: MemoSetupPreferences,
      jne: MemoSetupNiche,
      m,
      mre,
      pre,
      ure,
      vre,
      y: WordPressData,
    } = readRuntime();
    var e = pre((0, ReactHooks.useState)(!1), 2),
      t = e[0],
      n = e[1],
      r = pre((0, ReactHooks.useState)('welcome'), 2),
      a = r[0],
      o = r[1],
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      l =
        ((0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getSetupWizardData();
        }, []),
        (0, Router.Zp)()),
      c = function (e) {
        o(vre[e] || e);
      },
      u = (function () {
        var e = mre(
          ure().m(function e(t) {
            var n;
            return ure().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        (e.n = 1),
                        m({
                          path: 'creator-lms/v1/setup-wizard/onboarding-skipped',
                          method: 'POST',
                          data: {
                            step: t,
                          },
                          headers: {
                            nonce: window.creator_lms_params.setup_wizard_nonce,
                          },
                        })
                      );
                    case 1:
                      e.n = 3;
                      break;
                    case 2:
                      ((e.p = 2),
                        (n = e.v),
                        console.error('Failed to track onboarding skipped:', n));
                    case 3:
                      l('/dashboard');
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    return (
      (0, ReactHooks.useEffect)(function () {
        m({
          path: 'creator-lms/v1/setup-wizard/onboarding-started',
          method: 'POST',
          headers: {
            nonce: window.creator_lms_params.setup_wizard_nonce,
          },
        }).catch(function (e) {
          console.error('Failed to track onboarding started:', e);
        });
      }, []),
      (0, ReactHooks.useEffect)(function () {
        var e = (function () {
          var e = mre(
            ure().m(function e() {
              var t, r, a, o;
              return ure().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.n = 1),
                          (0, Nte.nb)({
                            plugin: 'creator-lms',
                            version: '1.1.16',
                            theme: {
                              color: '#6E42D3',
                            },
                            steps: [
                              {
                                id: 'welcome',
                                title: (0, I18n.__)('Welcome', 'ohmylms'),
                                canSkip: !1,
                                canGoBack: !1,
                              },
                              {
                                id: 'level-selection',
                                title: (0, I18n.__)('Experience Level', 'ohmylms'),
                                canSkip: !1,
                                canGoBack: !0,
                              },
                              {
                                id: 'preferences',
                                title: (0, I18n.__)('Preferences', 'ohmylms'),
                                canSkip: !1,
                                canGoBack: !0,
                              },
                              {
                                id: 'niche',
                                title: (0, I18n.__)('Niche', 'ohmylms'),
                                canSkip: !1,
                                canGoBack: !0,
                              },
                              {
                                id: 'course-creation',
                                title: (0, I18n.__)('Course Import', 'ohmylms'),
                                canSkip: !0,
                                canGoBack: !0,
                              },
                              {
                                id: 'completion',
                                title: (0, I18n.__)('Complete', 'ohmylms'),
                                canSkip: !1,
                                canGoBack: !1,
                              },
                            ],
                            firstStrike: {
                              label: (0, I18n.__)('Setup Wizard Completed', 'ohmylms'),
                              verify: (function () {
                                var e = mre(
                                  ure().m(function e() {
                                    var t;
                                    return ure().w(function (e) {
                                      for (;;)
                                        if (0 === e.n)
                                          return (
                                            (t = Nte.Hi.getProgress()),
                                            e.a(2, t && 100 === t.percent)
                                          );
                                    }, e);
                                  }),
                                );
                                return function () {
                                  return e.apply(this, arguments);
                                };
                              })(),
                              successRedirect: '/dashboard',
                            },
                            telemetry: {
                              onSetupCompleted: (function () {
                                var e = mre(
                                  ure().m(function e(t) {
                                    var n;
                                    return ure().w(
                                      function (e) {
                                        for (;;)
                                          switch ((e.p = e.n)) {
                                            case 0:
                                              return (
                                                (e.p = 0),
                                                (e.n = 1),
                                                m({
                                                  path: 'creator-lms/v1/setup-wizard/onboarding-completed',
                                                  method: 'POST',
                                                  headers: {
                                                    nonce:
                                                      window.creator_lms_params.setup_wizard_nonce,
                                                  },
                                                })
                                              );
                                            case 1:
                                              e.n = 3;
                                              break;
                                            case 2:
                                              ((e.p = 2),
                                                (n = e.v),
                                                console.error(
                                                  'Failed to track onboarding completed:',
                                                  n,
                                                ));
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
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })(),
                              onFirstStrikeCompleted: (function () {
                                var e = mre(
                                  ure().m(function e(t) {
                                    return ure().w(function (e) {
                                      for (;;)
                                        switch (e.n) {
                                          case 0:
                                            l('/dashboard');
                                          case 1:
                                            return e.a(2);
                                        }
                                    }, e);
                                  }),
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })(),
                            },
                          })
                        );
                      case 1:
                        return ((e.n = 2), Nte.Hi.start());
                      case 2:
                        return (
                          n(!0),
                          Nte.Ft.on(
                            'onboarding_completed',
                            (function () {
                              var e = mre(
                                ure().m(function e(t) {
                                  var n;
                                  return ure().w(
                                    function (e) {
                                      for (;;)
                                        switch ((e.p = e.n)) {
                                          case 0:
                                            return (
                                              (e.p = 0),
                                              (e.n = 1),
                                              m({
                                                path: 'creator-lms/v1/setup-wizard/onboarding-completed',
                                                method: 'POST',
                                                headers: {
                                                  nonce:
                                                    window.creator_lms_params.setup_wizard_nonce,
                                                },
                                              })
                                            );
                                          case 1:
                                            e.n = 3;
                                            break;
                                          case 2:
                                            ((e.p = 2),
                                              (n = e.v),
                                              console.error(
                                                'Failed to track onboarding completed:',
                                                n,
                                              ));
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
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })(),
                          ),
                          i.setLoadingSetting(!0),
                          (e.p = 3),
                          (e.n = 4),
                          m({
                            path: 'creator-lms/v1/settings/design',
                          })
                        );
                      case 4:
                        return (
                          (t = e.v),
                          i.setDesignSettings(t),
                          (e.n = 5),
                          m({
                            path: 'creator-lms/v1/settings/currency',
                          })
                        );
                      case 5:
                        ((r = e.v),
                          i.setCurrencySettings(r),
                          (a = {}),
                          null == r ||
                            r.forEach(function (e) {
                              a[null == e ? void 0 : e.id] = null == e ? void 0 : e.value;
                            }),
                          i.setGlobalDataViaKey('currency_settings', a),
                          (e.n = 7));
                        break;
                      case 6:
                        ((e.p = 6), (o = e.v), console.error('Failed to load settings:', o));
                      case 7:
                        i.setLoadingSetting(!1);
                      case 8:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[3, 6]],
              );
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        e();
      }, []),
      t ? (
        <div className={'linno-onboarding-wrapper'}>
          {(function () {
            var e = {
              onTabChange: c,
              onWizardSkip: u,
            };
            switch (a) {
              case 'welcome':
              default:
                return <MemoSetupWelcome {...e} />;
              case 'level-selection':
                return <MemoSetupLevelSelection {...e} />;
              case 'preferences':
                return <MemoSetupPreferences {...e} />;
              case 'niche':
                return <MemoSetupNiche {...e} />;
              case 'course-creation':
                return <MemoCourseImport {...e} />;
              case 'completion':
                return <MemoSetupCompletion {...e} />;
            }
          })()}
        </div>
      ) : null
    );
  };
}
