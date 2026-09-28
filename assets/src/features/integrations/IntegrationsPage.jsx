/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createIntegrationsPage(readRuntime) {
  return function IntegrationsPage() {
    const {
      B7,
      D7,
      F7,
      G7: IntegrationManifest,
      H7: IntegrationCategories,
      HG,
      He,
      I: Controls,
      L7,
      M7: MemoIntegrationConfig,
      React,
      T: StoreModule,
      W6: MemoIntegrationCard,
      YG,
      b: I18n,
      df,
      g: ReactHooks,
      uf,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    HG('creator-lms', 'integrations');
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getIntegrations();
      }, []),
      n = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      r = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      a = L7((0, ReactHooks.useState)(!1), 2),
      o = a[0],
      i = a[1],
      l = (0, Notifications.A)(),
      c = l.openNotificationWithIcon,
      u = l.contextHolder,
      s = L7((0, ReactHooks.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = L7((0, ReactHooks.useState)('all'), 2),
      f = p[0],
      v = p[1],
      h = L7((0, ReactHooks.useState)(''), 2),
      _ = h[0],
      w = h[1],
      E = L7((0, ReactHooks.useState)(null), 2),
      S = E[0],
      R = E[1],
      x = (function () {
        var t = B7(
          D7().m(function t() {
            var n;
            return D7().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      return ((t.p = 0), i(!0), (t.n = 1), e.getIntegrations());
                    case 1:
                      t.n = 3;
                      break;
                    case 2:
                      ((t.p = 2), (n = t.v), console.error('Error fetching integrations:', n));
                    case 3:
                      return ((t.p = 3), i(!1), t.f(3));
                    case 4:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        );
        return function () {
          return t.apply(this, arguments);
        };
      })();
    (0, ReactHooks.useEffect)(function () {
      var e = !0;
      return (
        e && x(),
        function () {
          e = !1;
        }
      );
    }, []);
    var C = Object.entries(IntegrationManifest).map(function (e) {
        var n = L7(e, 2),
          r = n[0];
        return F7(
          F7(
            {
              key: r,
            },
            n[1],
          ),
          (t && t[r]) || {},
        );
      }),
      P = Array.from(
        new Set(
          Object.values(IntegrationManifest).flatMap(function (e) {
            return e.categories || [];
          }),
        ),
      ),
      O = ['all'].concat(P),
      k = (function () {
        var n = B7(
          D7().m(function n(r) {
            var a, o, i;
            return D7().w(
              function (n) {
                for (;;)
                  switch ((n.p = n.n)) {
                    case 0:
                      if (null != r && r.is_valid) {
                        n.n = 1;
                        break;
                      }
                      return (
                        m(!0),
                        e.updateProModalTitle((0, I18n.__)('Upgrade Your Plan!', 'ohmylms')),
                        e.updateProModalContent(
                          (0, I18n.__)(
                            'This feature is on '.concat(
                              null == r ? void 0 : r.required_plan,
                              ' plan. Please upgrade your plan for access to this feature!',
                            ),
                            'ohmylms',
                          ),
                        ),
                        n.a(2)
                      );
                    case 1:
                      if (
                        'wpfusion' !== r.key ||
                        (null !== (a = window) &&
                          void 0 !== a &&
                          null !== (a = a.creator_lms_params) &&
                          void 0 !== a &&
                          a.is_wpfusion_active)
                      ) {
                        n.n = 2;
                        break;
                      }
                      return (
                        m(!0),
                        e.updateProModalTitle((0, I18n.__)('WP Fusion Required', 'ohmylms')),
                        e.updateProModalContent(
                          (0, I18n.__)(
                            'To enable the WP Fusion integration, please ensure that the WP Fusion Lite plugin is installed and activated on your site.',
                            'ohmylms',
                          ),
                        ),
                        e.updateProModalButtonText(null),
                        n.a(2)
                      );
                    case 2:
                      return (
                        (n.p = 2),
                        ((o =
                          t && Object.keys(t).length
                            ? F7({}, t)
                            : Object.fromEntries(
                                Object.entries(IntegrationManifest).map(function (e) {
                                  var t = L7(e, 2);
                                  return [
                                    t[0],
                                    {
                                      is_enable: 0,
                                      class: t[1].class,
                                    },
                                  ];
                                }),
                              ))[r.key] = F7(
                          F7({}, o[r.key]),
                          {},
                          {
                            is_enable: r.is_enable ? 0 : 1,
                          },
                        )),
                        (n.n = 3),
                        e.updateIntegrations(o)
                      );
                    case 3:
                      n.n = 5;
                      break;
                    case 4:
                      ((n.p = 4), (i = n.v), console.error('Error toggling integration:', i));
                    case 5:
                      return n.a(2);
                  }
              },
              n,
              null,
              [[2, 4]],
            );
          }),
        );
        return function (e) {
          return n.apply(this, arguments);
        };
      })(),
      j = function (t) {
        if (null == t || !t.is_valid)
          return (
            m(!0),
            e.updateProModalTitle((0, I18n.__)('Upgrade Your Plan!', 'ohmylms')),
            void e.updateProModalContent(
              (0, I18n.__)(
                'This feature is on '.concat(
                  null == t ? void 0 : t.required_plan,
                  '. Please upgrade your plan!',
                ),
                'ohmylms',
              ),
            )
          );
        R(t);
      },
      A = C.filter(function (e) {
        return 'all' === f || (e.categories && e.categories.includes(f));
      }).filter(function (e) {
        return e.label.toLowerCase().includes(_.toLowerCase());
      });
    return (
      (0, ReactHooks.useEffect)(
        function () {
          n && c(r, n);
        },
        [n],
      ),
      (
        <React.Fragment>
          {u}
          <Controls.ContainerWP>
            <YG
              title={(0, I18n.__)('Addons', 'ohmylms')}
              description={(0, I18n.__)(
                'Enable and manage addons for your LMS to enhance your course experience.',
                'ohmylms',
              )}
              showAddButton={!1}
            />
            <Controls.CardWP isBorderless={!0} className={'integrations-card'}>
              <Controls.SpacerWP padding={5} marginBottom={0}>
                {o && (
                  <Controls.SkeletonWP
                    active={!0}
                    rows={10}
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      zIndex: 3,
                      background: '#FFFFFF',
                      height: '100%',
                      padding: '40px',
                      borderRadius: '8px',
                    }}
                  />
                )}
                {S ? (
                  <MemoIntegrationConfig
                    integration={S}
                    onSave={function (e, t) {
                      c(e, t);
                    }}
                    onCancel={function () {
                      return R(null);
                    }}
                    className={'omlms-integrations-config'}
                  />
                ) : (
                  <React.Fragment>
                    <Controls.FlexWP gap={4} justifyContent={'space-between'}>
                      <div className={'integrations-filter-buttons'}>
                        {O.map(function (e) {
                          var t;
                          return (
                            <Controls.ButtonWP
                              key={e}
                              isPrimary={f === e}
                              onClick={function () {
                                return v(e);
                              }}
                            >
                              {'all' === e
                                ? (0, I18n.__)('All', 'ohmylms')
                                : (null === (t = IntegrationCategories[e]) || void 0 === t
                                    ? void 0
                                    : t.label) || e}
                            </Controls.ButtonWP>
                          );
                        })}
                      </div>
                      <div className={'integrations-search-control'}>
                        <Controls.SearchControlWP
                          value={_}
                          onChange={w}
                          placeholder={(0, I18n.__)('Search integrations…', 'ohmylms')}
                        />
                      </div>
                    </Controls.FlexWP>
                    <Controls.SpacerWP marginBottom={5} />
                    {0 < A.length ? (
                      <Controls.GridWP columns={3} gap={4}>
                        {A.map(function (e) {
                          return (
                            <MemoIntegrationCard
                              key={e.key}
                              integration={e}
                              onToggle={k}
                              onManage={j}
                            />
                          );
                        })}
                      </Controls.GridWP>
                    ) : (
                      <React.Fragment>
                        {React.createElement(uf, {
                          icon: React.createElement(df, null),
                          title: (0, I18n.__)('No integrations found', 'ohmylms'),
                        })}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </Controls.SpacerWP>
            </Controls.CardWP>
          </Controls.ContainerWP>
          {d && (
            <React.Fragment>
              <He.default isOpen={d} onClose={m} />
            </React.Fragment>
          )}
        </React.Fragment>
      )
    );
  };
}
