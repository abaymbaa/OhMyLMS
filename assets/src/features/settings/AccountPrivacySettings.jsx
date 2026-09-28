/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAccountPrivacySettings(readRuntime) {
  return function AccountPrivacySettings(props) {
    const {
      $K,
      Ea,
      Ge,
      He,
      I: Controls,
      L: Entitlements,
      Pf,
      React,
      SK: MemoSettingsActionBar,
      T: StoreModule,
      YK,
      ZK,
      b: I18n,
      g: ReactHooks,
      l,
      y: WordPressData,
      zm,
    } = readRuntime();
    (0, Entitlements.useIsPro)();
    var t,
      n,
      r,
      a,
      o = props.activeTab,
      i = props.handleSave,
      c = props.handleMigration,
      u = props.selectedCourses,
      s = props.isSaving,
      d = (0, WordPressData.useDispatch)(StoreModule.default),
      m = (function (e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (!c && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return $K(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? $K(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })((0, ReactHooks.useState)(!1), 2),
      p = m[0],
      f = m[1],
      v = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAccountPrivacySettings();
      }, []);
    return (
      (0, ReactHooks.useEffect)(function () {
        var e = (function () {
          var e,
            t =
              ((e = YK().m(function e() {
                var t;
                return YK().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          d.setLoadingSetting(!0),
                          (e.n = 1),
                          l()({
                            path: 'creator-lms/v1/settings/account-and-privacy',
                          })
                        );
                      case 1:
                        ((t = e.v), d.setAccountPrivacySettings(t), d.setLoadingSetting(!1));
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
                    ZK(o, r, a, i, l, 'next', e);
                  }
                  function l(e) {
                    ZK(o, r, a, i, l, 'throw', e);
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
          <Ea isBorderless={!0} variant={'secondary'} className={'omlms-full-screen-height'}>
            <Controls.SpacerWP padding={4} marginTop={0} marginBottom={0}>
              <Controls.CardWP isBorderless={!0}>
                <Controls.SpacerWP paddingY={4} paddingX={2} marginTop={0} marginBottom={4}>
                  <Controls.SpacerWP paddingX={4} paddingTop={4} paddingBottom={4} marginBottom={0}>
                    {React.createElement(
                      zm,
                      {
                        title: (0, I18n.__)('Allow Guest Checkout', 'ohmylms'),
                        description: (0, I18n.__)(
                          'Allow visitors to purchase courses without creating an account first.',
                          'ohmylms',
                        ),
                        variant: 'v2',
                        align: 'flex-start',
                      },
                      <Controls.SwitchWP
                        checked={
                          'yes' ===
                          (null == v ||
                          null === (t = v.creator_lms_allow_purchase_without_login) ||
                          void 0 === t
                            ? void 0
                            : t.value)
                        }
                        onChange={function (e) {
                          return (function (e) {
                            d.updateAccountPrivacySettings({
                              creator_lms_allow_purchase_without_login: {
                                value: e ? 'yes' : 'no',
                              },
                            });
                          })(e);
                        }}
                        isDefaultStyle={!0}
                      />,
                    )}
                  </Controls.SpacerWP>
                  <Controls.SpacerWP paddingX={4} paddingTop={4} paddingBottom={4} marginBottom={0}>
                    {React.createElement(
                      zm,
                      {
                        title: (0, I18n.__)('Require Email Verification', 'ohmylms'),
                        description: (0, I18n.__)(
                          'Students must verify their email address before accessing course content.',
                          'ohmylms',
                        ),
                        variant: 'v2',
                        align: 'flex-start',
                      },
                      <Controls.SwitchWP
                        checked={
                          'yes' ===
                          (null == v ||
                          null === (n = v.omlms_require_email_verification) ||
                          void 0 === n
                            ? void 0
                            : n.value)
                        }
                        onChange={function (e) {
                          return (function (e) {
                            d.updateAccountPrivacySettings({
                              omlms_require_email_verification: {
                                value: e ? 'yes' : 'no',
                              },
                            });
                          })(e);
                        }}
                        isDefaultStyle={!0}
                      />,
                    )}
                  </Controls.SpacerWP>
                  <Controls.SpacerWP paddingX={4} paddingTop={4} paddingBottom={4} marginBottom={0}>
                    {React.createElement(
                      zm,
                      {
                        title: (0, I18n.__)('Checkout Phone Field', 'ohmylms'),
                        description: (0, I18n.__)(
                          'Show the billing phone number as optional, force it to be required, or hide it. Some payment gateways (e.g. Authorize.Net) can still make it required on their own.',
                          'ohmylms',
                        ),
                        variant: 'v2',
                        align: 'flex-start',
                      },
                      <Controls.SelectWP
                        value={
                          (null == v ||
                          null === (r = v.creator_lms_checkout_phone_field) ||
                          void 0 === r
                            ? void 0
                            : r.value) || 'optional'
                        }
                        options={[
                          {
                            label: (0, I18n.__)('Optional', 'ohmylms'),
                            value: 'optional',
                          },
                          {
                            label: (0, I18n.__)('Required', 'ohmylms'),
                            value: 'required',
                          },
                          {
                            label: (0, I18n.__)('Hidden', 'ohmylms'),
                            value: 'hidden',
                          },
                        ]}
                        onChange={function (e) {
                          return (function (e) {
                            d.updateAccountPrivacySettings({
                              creator_lms_checkout_phone_field: {
                                value: e,
                              },
                            });
                          })(e);
                        }}
                      />,
                    )}
                  </Controls.SpacerWP>
                  <Pf
                    title={(0, I18n.__)('Privacy Policy Message', 'ohmylms')}
                    description={(0, I18n.__)(
                      'Display a short note to assure students about your data privacy practices.',
                      'ohmylms',
                    )}
                    inputType={'textarea'}
                    onChange={function (e) {
                      d.updateAccountPrivacySettings({
                        creator_lms_privacy_policy_message: {
                          value: e,
                        },
                      });
                    }}
                    value={Ge(
                      null == v ||
                        null === (a = v.creator_lms_privacy_policy_message) ||
                        void 0 === a
                        ? void 0
                        : a.value,
                    )}
                  />
                </Controls.SpacerWP>
              </Controls.CardWP>
              <MemoSettingsActionBar
                activeTab={o}
                handleSave={i}
                handleMigration={c}
                selectedCourses={u}
                isSaving={s}
              />
            </Controls.SpacerWP>
          </Ea>
          {p && (
            <React.Fragment>
              <He.default isOpen={p} onClose={f} />
            </React.Fragment>
          )}
        </React.Fragment>
      )
    );
  };
}
