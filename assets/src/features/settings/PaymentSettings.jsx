/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createPaymentSettings(readRuntime) {
  return function PaymentSettings() {
    const {
      B1: MemoTaxSettings,
      G1,
      I: Controls,
      P1: MemoCurrencySettings,
      Q1,
      React,
      SK: MemoSettingsActionBar,
      T: StoreModule,
      V1,
      Y1,
      Z1,
      b: I18n,
      ep,
      f: Router,
      g: ReactHooks,
      l,
      y: WordPressData,
      y1: MemoPaymentGatewaysSettings,
      z: Notifications,
    } = readRuntime();
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).isSettingsLoading();
      }, []),
      n = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getPaymentSettings();
      }, []),
      r = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCurrencySettings();
      }, []),
      a = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getTaxSettings();
      }, []),
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      c = (0, Notifications.A)(),
      u = c.openNotificationWithIcon,
      s = c.contextHolder,
      d = (0, Router.Zp)(),
      m = (0, Router.g)(),
      p = m.tab,
      v = (m.subTab, Z1((0, ReactHooks.useState)(!1), 2)),
      h = v[0],
      _ = v[1],
      w = Z1((0, ReactHooks.useState)('payments'), 2),
      E = w[0],
      S = w[1];
    function R(e) {
      var t = {};
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      return t;
    }
    function x(e) {
      var t = {};
      function n(e) {
        for (; 'object' === Q1(e) && null !== e && 'value' in e;) e = e.value;
        return e;
      }
      for (var r in e) e.hasOwnProperty(r) && (t[r] = n(e[r].value));
      return t;
    }
    var C = (function () {
        var e = Y1(
          G1().m(function e(t) {
            var r, a, o;
            return G1().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        _(!0),
                        (r = R(n)),
                        null != t &&
                          t.key &&
                          null != t &&
                          t.value &&
                          (r[null == t ? void 0 : t.key] = null == t ? void 0 : t.value),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/settings/payment-gateway',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(r),
                        })
                      );
                    case 1:
                      return (
                        null != (a = e.v) &&
                          a.success &&
                          u('success', 'Payment Settings Saved Successfully.'),
                        e.a(2, a)
                      );
                    case 2:
                      ((e.p = 2),
                        (o = e.v),
                        console.error(o),
                        u('error', 'Failed to update settings. Please try again.'));
                    case 3:
                      return ((e.p = 3), _(!1), e.f(3));
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      P = (0, ReactHooks.useCallback)(
        Y1(
          G1().m(function t() {
            var n, a, o;
            return G1().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      return (
                        (t.p = 0),
                        _(!0),
                        (n = x(r)),
                        (t.n = 1),
                        l()({
                          path: '/ohmylms/v1/settings/currency',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(n),
                        })
                      );
                    case 1:
                      (null != (a = t.v) &&
                        a.success &&
                        (e.setGlobalDataViaKey('currency_settings', n),
                        u('success', 'Currency settings updated successfully.')),
                        (t.n = 3));
                      break;
                    case 2:
                      ((t.p = 2),
                        (o = t.v),
                        console.error(o),
                        u('error', 'Failed to update settings. Please try again.'));
                    case 3:
                      return ((t.p = 3), _(!1), t.f(3));
                    case 4:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        ),
        [r],
      ),
      O = (0, ReactHooks.useCallback)(
        Y1(
          G1().m(function t() {
            var n, r, o, i, c, s, d, m, p;
            return G1().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      return (
                        (t.p = 0),
                        _(!0),
                        (o = x(a)),
                        (i =
                          (null == a || null === (n = a.ohmylms_existing_tax_rates) || void 0 === n
                            ? void 0
                            : n.value) || []),
                        (c =
                          (null == a || null === (r = a.ohmylms_new_tax_rates) || void 0 === r
                            ? void 0
                            : r.value) || []),
                        (s = []),
                        i.forEach(function (e) {
                          e.country &&
                            void 0 !== e.rate &&
                            '' !== e.rate &&
                            s.push({
                              id: e.id || Date.now() + Math.random(),
                              country: e.country,
                              state: e.state || '',
                              countryWide: e.countryWide || !1,
                              rate: parseFloat(e.rate) || 0,
                            });
                        }),
                        c.forEach(function (e) {
                          e.country &&
                            e.rate &&
                            parseFloat(e.rate) >= 0 &&
                            parseFloat(e.rate) <= 100 &&
                            s.push({
                              id: e.id || Date.now() + Math.random(),
                              country: e.country,
                              state: e.state || '',
                              countryWide: e.countryWide || !1,
                              rate: parseFloat(e.rate),
                            });
                        }),
                        (d = V1(
                          V1(
                            {
                              ohmylms_tax_enabled: o.ohmylms_tax_enabled || 'no',
                              ohmylms_tax_label: o.ohmylms_tax_label || 'Tax',
                              ohmylms_prices_include_tax: o.ohmylms_prices_include_tax || 'no',
                              ohmylms_eu_vat_enabled: o.ohmylms_eu_vat_enabled || 'no',
                              ohmylms_disable_vat_validation:
                                o.ohmylms_disable_vat_validation || 'no',
                              ohmylms_vat_number_label: o.ohmylms_vat_number_label || 'VAT Number',
                              ohmylms_fallback_tax_rate: o.ohmylms_fallback_tax_rate || '0.00',
                            },
                            o,
                          ),
                          {},
                          {
                            ohmylms_tax_rates: s,
                          },
                        )),
                        (t.n = 1),
                        l()({
                          path: '/ohmylms/v1/settings/tax',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(d),
                        })
                      );
                    case 1:
                      return (
                        null != (m = t.v) &&
                          m.success &&
                          (u('success', 'Tax settings updated successfully.'),
                          e.updateTaxSettings({
                            new_tax_rates: {
                              value: [],
                            },
                          })),
                        t.a(2, m)
                      );
                    case 2:
                      ((t.p = 2),
                        (p = t.v),
                        console.error(p),
                        u('error', 'Failed to update settings. Please try again.'));
                    case 3:
                      return ((t.p = 3), _(!1), t.f(3));
                    case 4:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        ),
        [a],
      ),
      k = [
        {
          label: <React.Fragment>{(0, I18n.__)('Payments', 'ohmylms')}</React.Fragment>,
          key: 'payments',
          children: <MemoPaymentGatewaysSettings isLoading={h} setIsLoading={_} handleSave={C} />,
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Currency Settings', 'ohmylms')}</React.Fragment>,
          key: 'currency',
          children: <MemoCurrencySettings formatData={x} />,
        },
        {
          label: <React.Fragment>{(0, I18n.__)('Taxes', 'ohmylms')}</React.Fragment>,
          key: 'tax',
          children: <MemoTaxSettings formatData={x} />,
        },
      ];
    return (
      (0, ReactHooks.useEffect)(
        function () {
          !t && o && u(i, o);
        },
        [o],
      ),
      (
        <React.Fragment>
          {s}
          <Controls.CardWP
            isBorderless={!0}
            variant={'secondary'}
            className={'ohmylms-full-screen-height'}
          >
            <Controls.SpacerWP padding={4} paddingTop={1} marginTop={4} marginBottom={0}>
              <ep.A
                items={k}
                className={'ohmylms-monetization-tabs'}
                onChange={function (e) {
                  (S(e), d('/settings/'.concat(p, '/').concat(e)));
                }}
                activekey={E}
              />
              <Controls.SpacerWP marginBottom={0} marginTop={4}>
                <MemoSettingsActionBar
                  activeTab={E}
                  handleSave={'currency' === E ? P : 'tax' === E ? O : C}
                  isSaving={h}
                />
              </Controls.SpacerWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
        </React.Fragment>
      )
    );
  };
}
