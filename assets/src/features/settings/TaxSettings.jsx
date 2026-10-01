/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createTaxSettings(readRuntime) {
  return function TaxSettings(props) {
    const {
      D1,
      F1,
      I: Controls,
      I1,
      Kt,
      M1,
      N1,
      Nm,
      Pf,
      React,
      T: StoreModule,
      W1,
      b: I18n,
      g: ReactHooks,
      k1,
      l,
      nf,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    props.formatData;
    var t,
      n,
      r,
      a,
      o,
      i,
      c,
      u,
      s,
      d,
      m,
      p,
      f = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getTaxSettings();
      }, []),
      v = (0, WordPressData.useDispatch)(StoreModule.default),
      h = (0, Notifications.A)(),
      _ = (h.openNotificationWithIcon, h.contextHolder),
      w =
        (null == f || null === (t = f.ohmylms_countries) || void 0 === t ? void 0 : t.value) || [],
      E = (null == f || null === (n = f.ohmylms_states) || void 0 === n ? void 0 : n.value) || {},
      S = N1(
        (0, ReactHooks.useState)({
          country: '',
          state: '',
          countryWide: !1,
          rate: '',
        }),
        2,
      ),
      R = (S[0], S[1], N1((0, ReactHooks.useState)([]), 2)),
      x = R[0],
      C = R[1],
      P = N1((0, ReactHooks.useState)(!1), 2),
      O = (P[0], P[1], N1((0, ReactHooks.useState)([]), 2)),
      k = O[0],
      j = O[1],
      A = function (e, t) {
        v.updateTaxSettings(
          F1({}, e, {
            value: t,
          }),
        );
      },
      M = function (e, t, n) {
        j(function (r) {
          var a = r.map(function (r) {
            if (r.id === e) {
              var a = I1(I1({}, r), {}, F1({}, t, n));
              return (
                'country' === t && ((a.state = ''), (a.countryWide = !0)),
                'state' === t && (a.countryWide = !n || '' === n),
                'countryWide' === t && !0 === n && (a.state = ''),
                a
              );
            }
            return r;
          });
          return (
            v.updateTaxSettings({
              ohmylms_new_tax_rates: {
                value: a,
              },
            }),
            a
          );
        });
      },
      F = (0, ReactHooks.useCallback)(
        M1(
          k1().m(function e() {
            var t, n, r, a;
            return k1().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        v.setLoadingSetting(!0),
                        (e.n = 1),
                        l()({
                          path: 'ohmylms/v1/settings/tax',
                        })
                      );
                    case 1:
                      ((t = e.v),
                        v.setTaxSettings(t),
                        (n = t.find(function (e) {
                          return 'ohmylms_existing_tax_rates' === e.id;
                        })),
                        (r = t.find(function (e) {
                          return 'ohmylms_new_tax_rates' === e.id;
                        })),
                        null != n && n.value && Array.isArray(n.value) && C(n.value),
                        null != r && r.value && Array.isArray(r.value) && j(r.value),
                        v.setLoadingSetting(!1),
                        (e.n = 3));
                      break;
                    case 2:
                      ((e.p = 2), (a = e.v), console.error('Error fetching tax data:', a));
                    case 3:
                      return ((e.p = 3), v.setLoadingSetting(!1), e.f(3));
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        ),
        [v],
      );
    return (
      (0, ReactHooks.useEffect)(
        function () {
          F();
        },
        [F],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          var e, t;
          (null != f &&
            null !== (e = f.ohmylms_existing_tax_rates) &&
            void 0 !== e &&
            e.value &&
            Array.isArray(f.ohmylms_existing_tax_rates.value) &&
            C(f.ohmylms_existing_tax_rates.value),
            null != f &&
              null !== (t = f.ohmylms_new_tax_rates) &&
              void 0 !== t &&
              t.value &&
              Array.isArray(f.ohmylms_new_tax_rates.value) &&
              j(f.ohmylms_new_tax_rates.value));
        },
        [
          null == f || null === (r = f.ohmylms_existing_tax_rates) || void 0 === r
            ? void 0
            : r.value,
          null == f || null === (a = f.ohmylms_new_tax_rates) || void 0 === a ? void 0 : a.value,
        ],
      ),
      (
        <React.Fragment>
          {_}
          <Controls.CardWP isBorderless={!0}>
            <Controls.SpacerWP marginBottom={0} marginTop={2.5} padding={2}>
              <Controls.FlexWP gap={4} direction={'column'}>
                <Kt
                  title={(0, I18n.__)('Enable Tax Calculations', 'ohmylms')}
                  description={(0, I18n.__)(
                    'When taxes are enabled, rates are applied based on the customer’s address entered at checkout.',
                    'ohmylms',
                  )}
                  isChecked={
                    'yes' ===
                    (null == f || null === (o = f.ohmylms_tax_enabled) || void 0 === o
                      ? void 0
                      : o.value)
                  }
                  onChange={function (e) {
                    return A('ohmylms_tax_enabled', e ? 'yes' : 'no');
                  }}
                  customClass={'ohmylms-tax-enable-switcher'}
                  isDefaultStyle={!0}
                  align={'flex-start'}
                  conditionalChild={
                    <React.Fragment>
                      <Controls.SpacerWP marginBottom={4} />
                      <Controls.FlexWP
                        direction={'column'}
                        gap={4}
                        justify={'flex-start'}
                        align={'flex-start'}
                      >
                        <Controls.CardWP
                          isBorderless={!0}
                          variant={'secondary'}
                          padding={'16px'}
                          fullWidth={!0}
                        >
                          <Pf
                            title={(0, I18n.__)('Tax Label', 'ohmylms')}
                            description={(0, I18n.__)(
                              'Label to display for tax (e.g., "VAT", "GST", "Sales Tax").',
                              'ohmylms',
                            )}
                            value={
                              (null == f || null === (i = f.ohmylms_tax_label) || void 0 === i
                                ? void 0
                                : i.value) || 'Tax'
                            }
                            onChange={function (e) {
                              return A('ohmylms_tax_label', e);
                            }}
                            placeholder={(0, I18n.__)('Tax', 'ohmylms')}
                            headerFontSize={'16px'}
                          />
                          <Nm
                            title={(0, I18n.__)('Prices Include Tax', 'ohmylms')}
                            description={(0, I18n.__)(
                              'This controls if entered prices include tax or not.',
                              'ohmylms',
                            )}
                            value={
                              (null == f ||
                              null === (c = f.ohmylms_prices_include_tax) ||
                              void 0 === c
                                ? void 0
                                : c.value) || 'no'
                            }
                            onChange={function (e) {
                              return A('ohmylms_prices_include_tax', e);
                            }}
                            staticSearch={!0}
                            headerFontSize={'16px'}
                            options={[
                              {
                                label: (0, I18n.__)(
                                  'Yes, I will enter prices inclusive of tax',
                                  'ohmylms',
                                ),
                                value: 'yes',
                              },
                              {
                                label: (0, I18n.__)(
                                  'No, I will enter prices exclusive of tax',
                                  'ohmylms',
                                ),
                                value: 'no',
                              },
                            ]}
                          />
                        </Controls.CardWP>
                        <Controls.CardWP
                          isBorderless={!0}
                          variant={'secondary'}
                          padding={'16px'}
                          fullWidth={!0}
                        >
                          <Controls.SpacerWP padding={0} marginBottom={0}>
                            <Kt
                              title={(0, I18n.__)('Enable EU VAT', 'ohmylms')}
                              description={(0, I18n.__)(
                                'When this is checked, VAT taxes will be calculated for any customers who are located in the European Union. The plugin comes with the current standard VAT rate for each EU country. You can change these as required in the Tax Rates section below.',
                                'ohmylms',
                              )}
                              isChecked={
                                'yes' ===
                                (null == f ||
                                null === (u = f.ohmylms_eu_vat_enabled) ||
                                void 0 === u
                                  ? void 0
                                  : u.value)
                              }
                              onChange={function (e) {
                                return A('ohmylms_eu_vat_enabled', e ? 'yes' : 'no');
                              }}
                              headerFontSize={'16px'}
                              isDefaultStyle={!0}
                              align={'flex-start'}
                              variant={'secondary'}
                            />
                            {'yes' ===
                              (null == f || null === (s = f.ohmylms_eu_vat_enabled) || void 0 === s
                                ? void 0
                                : s.value) && (
                              <React.Fragment>
                                <Kt
                                  title={(0, I18n.__)('Disable VAT Number Validation', 'ohmylms')}
                                  description={(0, I18n.__)(
                                    'When this option is checked, the VAT number will not be validated by VIES online service.',
                                    'ohmylms',
                                  )}
                                  isChecked={
                                    'yes' ===
                                    (null == f ||
                                    null === (d = f.ohmylms_disable_vat_validation) ||
                                    void 0 === d
                                      ? void 0
                                      : d.value)
                                  }
                                  onChange={function (e) {
                                    return A('ohmylms_disable_vat_validation', e ? 'yes' : 'no');
                                  }}
                                  headerFontSize={'16px'}
                                  isDefaultStyle={!0}
                                  align={'flex-start'}
                                  variant={'secondary'}
                                />
                                <Pf
                                  title={(0, I18n.__)('VAT Number Field Label', 'ohmylms')}
                                  description={(0, I18n.__)(
                                    'The label that appears at checkout for the VAT number field.',
                                    'ohmylms',
                                  )}
                                  value={
                                    (null == f ||
                                    null === (m = f.ohmylms_vat_number_label) ||
                                    void 0 === m
                                      ? void 0
                                      : m.value) || ''
                                  }
                                  onChange={function (e) {
                                    return A('ohmylms_vat_number_label', e);
                                  }}
                                  placeholder={(0, I18n.__)('VAT Number', 'ohmylms')}
                                  headerFontSize={'16px'}
                                />
                              </React.Fragment>
                            )}
                          </Controls.SpacerWP>
                        </Controls.CardWP>
                        <Controls.CardWP
                          isBorderless={!0}
                          variant={'secondary'}
                          padding={'16px'}
                          style={{
                            width: '100%',
                          }}
                        >
                          <Controls.SpacerWP padding={4} marginBottom={0}>
                            <Controls.HeadingWP
                              level={4}
                              className={'tax-section-title'}
                              size={'16px'}
                            >
                              {(0, I18n.__)('Set up Tax Rates', 'ohmylms')}
                            </Controls.HeadingWP>
                            <Controls.TextWP className={'tax-description'} color={'#687784'}>
                              {(0, I18n.__)(
                                'Configure tax rates for different countries and regions. You can add multiple tax rates for different locations.',
                                'ohmylms',
                              )}
                            </Controls.TextWP>
                            <Controls.SpacerWP marginBottom={4} />
                            <div
                              className={'ohmylms-table-wrapper ohmylms-tax-table'}
                              style={{
                                position: 'relative',
                              }}
                            >
                              <table className={'ohmylms-table'}>
                                <thead className={'ohmylms-table-thead'}>
                                  <tr className={'ohmylms-table-header-row'}>
                                    <th className={'ohmylms-th tax-country'}>
                                      {(0, I18n.__)('Country', 'ohmylms')}
                                    </th>
                                    <th className={'ohmylms-th tax-state-code'}>
                                      {(0, I18n.__)('State Code', 'ohmylms')}
                                    </th>
                                    <th className={'ohmylms-th tax-country-wide'}>
                                      {(0, I18n.__)('Country Wide', 'ohmylms')}
                                    </th>
                                    <th className={'ohmylms-th tax-rate'}>
                                      {(0, I18n.__)('Rate', 'ohmylms')}
                                    </th>
                                    <th className={'ohmylms-th tax-action'}>
                                      <div className={'tax-action'} />
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className={'ohmylms-table-tbody'}>
                                  {k.map(function (e) {
                                    return (
                                      <tr key={e.id} className={'ohmylms-tr tax-rate-form'}>
                                        <td className={'ohmylms-td tax-country'}>
                                          <select
                                            value={e.country}
                                            onChange={function (t) {
                                              return M(e.id, 'country', t.target.value);
                                            }}
                                            className={'tax-country'}
                                          >
                                            <option value={''}>
                                              {(0, I18n.__)('Select Country', 'ohmylms')}
                                            </option>
                                            {w.map(function (e) {
                                              return (
                                                <option key={e.value} value={e.value}>
                                                  {e.label}
                                                </option>
                                              );
                                            })}
                                          </select>
                                        </td>
                                        <td className={'ohmylms-td tax-state-code'}>
                                          <Controls.TooltipWP
                                            text={
                                              null != e && e.countryWide
                                                ? (0, I18n.__)(
                                                    'To enable on specific state, deselect "Apply to whole country"',
                                                    'ohmylms',
                                                  )
                                                : (0, I18n.__)('Select a state', 'ohmylms')
                                            }
                                            className={'tax-state-code'}
                                          >
                                            <select
                                              value={e.state}
                                              onChange={function (t) {
                                                return M(e.id, 'state', t.target.value);
                                              }}
                                              disabled={e.countryWide || !e.country}
                                              style={{
                                                width: '100%',
                                              }}
                                            >
                                              <option value={''}>
                                                {(0, I18n.__)('——', 'ohmylms')}
                                              </option>
                                              {e.country &&
                                                E[e.country] &&
                                                E[e.country].map(function (e) {
                                                  return (
                                                    <option key={e.value} value={e.value}>
                                                      {e.label}
                                                    </option>
                                                  );
                                                })}
                                            </select>
                                          </Controls.TooltipWP>
                                        </td>
                                        <td className={'ohmylms-td tax-country-wide'}>
                                          <label
                                            className={'tax-rate-checkbox-label tax-country-wide'}
                                          >
                                            <input
                                              type={'checkbox'}
                                              checked={e.countryWide}
                                              onChange={function (t) {
                                                (M(e.id, 'countryWide', t.target.checked),
                                                  t.target.checked && M(e.id, 'state', ''));
                                              }}
                                              disabled={!e.country}
                                            />
                                            <span
                                              className={
                                                e.country ? '' : 'tax-rate-checkbox-disabled'
                                              }
                                            >
                                              {(0, I18n.__)('Apply to whole country', 'ohmylms')}
                                            </span>
                                          </label>
                                        </td>
                                        <td className={'ohmylms-td tax-rate'}>
                                          <Controls.InputNumberWP
                                            value={e.rate}
                                            onChange={function (t) {
                                              M(e.id, 'rate', 0 > t ? 0 : 100 >= t ? t : 100);
                                            }}
                                            onKeyDown={function (e) {
                                              ('-' !== e.key &&
                                                '+' !== e.key &&
                                                'e' !== e.key &&
                                                'E' !== e.key) ||
                                                e.preventDefault();
                                            }}
                                            placeholder={'0.00'}
                                            step={'0.01'}
                                            min={'0'}
                                            max={100}
                                            suffix={'%'}
                                            className={'tax-rate'}
                                          />
                                        </td>
                                        <td className={'ohmylms-td tax-action'}>
                                          <div className={'tax-rate-remove-container tax-action'}>
                                            <Controls.ButtonWP
                                              type={'link'}
                                              size={'small'}
                                              onClick={function () {
                                                return (
                                                  (t = e.id),
                                                  void j(function (e) {
                                                    var n = e.filter(function (e) {
                                                      return e.id !== t;
                                                    });
                                                    return (
                                                      v.updateTaxSettings({
                                                        ohmylms_new_tax_rates: {
                                                          value: n,
                                                        },
                                                      }),
                                                      n
                                                    );
                                                  })
                                                );
                                                var t;
                                              }}
                                              className={'tax-rate-remove-btn'}
                                              title={(0, I18n.__)('Cancel', 'ohmylms')}
                                            >
                                              <svg
                                                width={'16'}
                                                height={'16'}
                                                viewBox={'0 0 24 24'}
                                                fill={'currentColor'}
                                              >
                                                <path
                                                  d={
                                                    'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
                                                  }
                                                />
                                              </svg>
                                            </Controls.ButtonWP>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                              {0 === x.length && 0 === k.length && (
                                <div className={'tax-rates-no-data'}>
                                  {(0, I18n.__)('No rates found.', 'ohmylms')}
                                </div>
                              )}
                            </div>
                            {x.length > 0 && (
                              <div className={'existing-tax-rates'}>
                                <Controls.TextWP className={'existing-tax-rates-title'}>
                                  {(0, I18n.__)('Current Tax Rates:', 'ohmylms')}
                                  {' ('}
                                  {x.length}
                                  {')'}
                                </Controls.TextWP>
                                {x.map(function (e) {
                                  return (
                                    <div key={e.id} className={'existing-tax-rate'}>
                                      <div className={'existing-tax-rate-country'}>
                                        {
                                          ((t = e.country),
                                          (n = w.find(function (e) {
                                            return e.value === t;
                                          }))
                                            ? n.label
                                            : t)
                                        }
                                      </div>
                                      <div>
                                        {(function (e, t) {
                                          var n = E[e];
                                          if (!n || !t) return t || '——';
                                          var r = n.find(function (e) {
                                            return e.value === t;
                                          });
                                          return r ? r.label : t;
                                        })(e.country, e.state)}
                                      </div>
                                      <div>
                                        <span
                                          className={'existing-tax-rate-badge '.concat(
                                            e.countryWide
                                              ? 'existing-tax-rate-badge--yes'
                                              : 'existing-tax-rate-badge--no',
                                          )}
                                        >
                                          {e.countryWide
                                            ? (0, I18n.__)('Yes', 'ohmylms')
                                            : (0, I18n.__)('No', 'ohmylms')}
                                        </span>
                                      </div>
                                      <div className={'existing-tax-rate-percentage'}>
                                        {e.rate}
                                        {'%'}
                                      </div>
                                      <Controls.ButtonWP
                                        type={'link'}
                                        size={'small'}
                                        onClick={function () {
                                          return (
                                            (t = e.id),
                                            void C(function (e) {
                                              var n = e.filter(function (e) {
                                                return e.id !== t;
                                              });
                                              return (
                                                v.updateTaxSettings({
                                                  ohmylms_existing_tax_rates: {
                                                    value: n,
                                                  },
                                                }),
                                                n
                                              );
                                            })
                                          );
                                          var t;
                                        }}
                                        className={'tax-rate-remove-btn'}
                                        title={(0, I18n.__)('Remove this tax rate', 'ohmylms')}
                                      >
                                        <svg
                                          width={'16'}
                                          height={'16'}
                                          viewBox={'0 0 24 24'}
                                          fill={'currentColor'}
                                        >
                                          <path
                                            d={
                                              'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
                                            }
                                          />
                                        </svg>
                                      </Controls.ButtonWP>
                                    </div>
                                  );
                                  var t, n;
                                })}
                              </div>
                            )}
                            <div className={'add-tax-rate-container'}>
                              <Controls.ButtonWP
                                variant={'secondary'}
                                onClick={function () {
                                  var e = {
                                    id: Date.now() + Math.random(),
                                    country: '',
                                    state: '',
                                    countryWide: !1,
                                    rate: '',
                                  };
                                  j(function (t) {
                                    var n = [].concat(
                                      (function (e) {
                                        return (
                                          (function (e) {
                                            if (Array.isArray(e)) return W1(e);
                                          })(e) ||
                                          (function (e) {
                                            if (
                                              ('undefined' != typeof Symbol &&
                                                null != e[Symbol.iterator]) ||
                                              null != e['@@iterator']
                                            )
                                              return Array.from(e);
                                          })(e) ||
                                          D1(e) ||
                                          (function () {
                                            throw new TypeError(
                                              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                            );
                                          })()
                                        );
                                      })(t),
                                      [e],
                                    );
                                    return (
                                      v.updateTaxSettings({
                                        ohmylms_new_tax_rates: {
                                          value: n,
                                        },
                                      }),
                                      n
                                    );
                                  });
                                }}
                                className={'add-tax-rate-btn'}
                              >
                                {React.createElement(nf, null)}
                                {(0, I18n.__)('Add Tax Rate', 'ohmylms')}
                              </Controls.ButtonWP>
                            </div>
                            <div className={'fallback-tax-rate-section'}>
                              <Pf
                                title={(0, I18n.__)('Fallback Tax Rate', 'ohmylms')}
                                description={(0, I18n.__)(
                                  'Customers not in a specific rate will be charged this tax rate. Enter a percentage, such as 6.5 for 6.5%.',
                                  'ohmylms',
                                )}
                                inputType={'number'}
                                value={
                                  (null == f ||
                                  null === (p = f.ohmylms_fallback_tax_rate) ||
                                  void 0 === p
                                    ? void 0
                                    : p.value) || ''
                                }
                                onChange={function (e) {
                                  return A('ohmylms_fallback_tax_rate', e);
                                }}
                                placeholder={'0.00'}
                                min={'0'}
                                max={'100'}
                                step={'0.01'}
                                suffix={'%'}
                                headerFontSize={'16px'}
                              />
                            </div>
                          </Controls.SpacerWP>
                        </Controls.CardWP>
                      </Controls.FlexWP>
                    </React.Fragment>
                  }
                />
              </Controls.FlexWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
        </React.Fragment>
      )
    );
  };
}
