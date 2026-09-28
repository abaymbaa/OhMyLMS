/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCoursePricing(readRuntime) {
  return function CoursePricing() {
    const {
      I: Controls,
      Kt,
      NW,
      React,
      T: StoreModule,
      b: I18n,
      cz,
      g: ReactHooks,
      lo,
      sn,
      sz,
      uz,
      y: WordPressData,
    } = readRuntime();
    var e,
      t,
      n,
      r,
      a,
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).isGamificationEnable();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getGamificationSettings();
      }, []);
    (sn().extend(NW()), sn().extend(lo()));
    var l = (0, WordPressData.useDispatch)('creator-lms/store'),
      c = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourse();
      }, []),
      u = sz(
        (0, ReactHooks.useState)(
          (null == c || null === (e = c.sale_price_dates_from) || void 0 === e ? void 0 : e.date) &&
            (null == c || null === (t = c.sale_price_dates_to) || void 0 === t ? void 0 : t.date),
        ),
        2,
      ),
      s = u[0],
      d = u[1],
      m = sz((0, ReactHooks.useState)(''), 2),
      p = m[0],
      f = m[1],
      v = sz((0, ReactHooks.useState)({}), 2),
      _ = v[0],
      w = v[1],
      E = function (e) {
        return e ? sn()(e).format('YYYY-MM-DDTHH:mm:ss') : '';
      },
      price_type = c.price_type,
      regular_price = c.regular_price,
      sale_price = c.sale_price,
      purchase_point = c.purchase_point,
      P = function (e, t) {
        (p &&
          (l.setCourse(cz(cz({}, c), {}, uz({}, t, _[t]))),
          0 == regular_price && 'paid' === price_type
            ? (l.setIsValidCourseSettings(!1),
              f((0, I18n.__)('Regular price should be greater than 0', 'ohmylms')))
            : (f(''), l.setIsValidCourseSettings(!0))),
          w({}));
      },
      O = function (e, t) {
        var n = e.target.value;
        (0 == n && l.setCourse(cz(cz({}, c), {}, uz({}, t, ''))),
          'sale_price' !== t && w(cz(cz({}, _), {}, uz({}, t, n))));
      };
    return (
      <React.Fragment>
        <Controls.FlexWP
          justify={'space-between'}
          align={'flex-start'}
          className={'omlms-single-settings settings-price omlms-'.concat(price_type)}
        >
          <Controls.FlexItemWP
            style={{
              flex: '5',
            }}
          >
            <Controls.HeadingWP level={4}>{(0, I18n.__)('Pricing', 'ohmylms')}</Controls.HeadingWP>
            <Controls.SpacerWP marginBottom={1} />
            <Controls.TextWP>
              {(0, I18n.__)('Select if learners will pay or access for free.', 'ohmylms')}
            </Controls.TextWP>
          </Controls.FlexItemWP>
          <Controls.FlexItemWP
            style={{
              flex: '3',
            }}
          >
            <Controls.FlexWP align={'center'} justify={'flex-end'}>
              <Controls.RadioGroupWP
                onChange={function (e) {
                  ('free' === e && (l.setIsValidCourseSettings(!0), f(''), w({})),
                    l.setCourse(
                      cz(
                        cz({}, c),
                        {},
                        {
                          price_type: e,
                          sale_price: 'free' === e ? '' : c.sale_price,
                          regular_price: 'free' === e ? 0 : c.regular_price,
                        },
                      ),
                    ),
                    0 == c.regular_price &&
                      'free' !== e &&
                      (l.setIsValidCourseSettings(!1),
                      f((0, I18n.__)('Regular price should be greater than 0', 'ohmylms'))));
                }}
                value={'' === price_type ? 'free' : price_type}
                options={[
                  {
                    value: 'free',
                    label: (0, I18n.__)('Free', 'ohmylms'),
                  },
                  {
                    value: 'paid',
                    label: (0, I18n.__)('Paid', 'ohmylms'),
                  },
                ]}
                isBlock={!1}
              />
            </Controls.FlexWP>
            {'paid' === price_type && (
              <Controls.CardWP isBorderless={!0} variant={'secondary'}>
                <Controls.SpacerWP padding={4} marginBottom={0} marginTop={4}>
                  <Controls.FlexWP
                    direction={'column'}
                    justify={'flex-end'}
                    align={'flex-end'}
                    className={'omlms-settings-right'}
                  >
                    <div
                      className={'omlms-price-range'}
                      style={{
                        width: '100%',
                      }}
                    >
                      <Controls.FlexWP gap={4}>
                        <Controls.FlexBlockWP className={'omlms-single-price'}>
                          <Controls.TextWP as={'span'} variant={'muted'}>
                            {(0, I18n.__)('Regular Price', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.SpacerWP marginBottom={1} />
                          <Controls.InputNumberWP
                            value={regular_price ? parseFloat(regular_price).toFixed(2) : ''}
                            onFocus={function (e) {
                              return O(e, 'regular_price');
                            }}
                            onBlur={function (e) {
                              return P(0, 'regular_price');
                            }}
                            placeholder={(0, I18n.__)('0.00', 'ohmylms')}
                            className={
                              'omlms-course-settings-pricing-input-regular omlms-price-input'
                            }
                            onChange={function (e) {
                              /^\d*\.?\d*$/.test(e) &&
                                (function (e) {
                                  (Number(sale_price) > Number(e) && 'paid' === price_type
                                    ? (l.setIsValidCourseSettings(!1),
                                      f(
                                        (0, I18n.__)(
                                          'Discount price should be less than regular price',
                                          'ohmylms',
                                        ),
                                      ))
                                    : 0 == e
                                      ? (l.setIsValidCourseSettings(!1),
                                        f(
                                          (0, I18n.__)(
                                            'Regular price should be greater than 0',
                                            'ohmylms',
                                          ),
                                        ))
                                      : '' !== e && e
                                        ? (l.setIsValidCourseSettings(!0), f(''))
                                        : (l.setIsValidCourseSettings(!1),
                                          f(
                                            (0, I18n.__)(
                                              'Regular price can not be empty',
                                              'ohmylms',
                                            ),
                                          )),
                                    l.setCourse(
                                      cz(
                                        cz({}, c),
                                        {},
                                        {
                                          regular_price: e,
                                        },
                                      ),
                                    ));
                                })(e);
                            }}
                            onKeyDown={function (e) {
                              (['e', 'E', '+', '-', '/', '\\'].includes(e.key) ||
                                (/[a-zA-Z]/.test(e.key) &&
                                  ![
                                    'Backspace',
                                    'Tab',
                                    'ArrowLeft',
                                    'ArrowRight',
                                    'Delete',
                                    'Enter',
                                    '.',
                                  ].includes(e.key))) &&
                                e.preventDefault();
                            }}
                          />
                        </Controls.FlexBlockWP>
                        <Controls.FlexBlockWP className={'omlms-single-price'}>
                          <Controls.TextWP as={'span'} variant={'muted'}>
                            {(0, I18n.__)('Sale Price', 'ohmylms')}
                          </Controls.TextWP>
                          <Controls.SpacerWP marginBottom={1} />
                          <Controls.InputNumberWP
                            onFocus={function (e) {
                              return O(e, 'sale_price');
                            }}
                            value={sale_price ? parseFloat(sale_price).toFixed(2) : ''}
                            onBlur={function (e) {
                              return P(0, 'sale_price');
                            }}
                            placeholder={(0, I18n.__)('0.00', 'ohmylms')}
                            className={
                              'omlms-course-settings-pricing-input-discount omlms-price-input'
                            }
                            onChange={function (e) {
                              (/^\d*\.?\d*$/.test(e) || '' === e || null === e) &&
                                (function (e) {
                                  var t, n, r, a;
                                  (Number(e) >= Number(regular_price) && 'paid' === price_type
                                    ? (l.setIsValidCourseSettings(!1),
                                      f(
                                        (0, I18n.__)(
                                          'Discount price should be less than regular price',
                                          'ohmylms',
                                        ),
                                      ))
                                    : 0 == regular_price && 'paid' === price_type
                                      ? (l.setIsValidCourseSettings(!1),
                                        f(
                                          (0, I18n.__)(
                                            'Regular price should be greater than 0',
                                            'ohmylms',
                                          ),
                                        ))
                                      : (l.setIsValidCourseSettings(!0), f('')),
                                    null === e
                                      ? l.setCourse(
                                          cz(
                                            cz({}, c),
                                            {},
                                            {
                                              sale_price: null != e ? e : '',
                                              sale_price_dates_from: {
                                                date: '',
                                                timezone_type:
                                                  null == c ||
                                                  null === (t = c.sale_price_dates_from) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.timezone_type,
                                                timezone:
                                                  null == c ||
                                                  null === (n = c.sale_price_dates_from) ||
                                                  void 0 === n
                                                    ? void 0
                                                    : n.timezone,
                                              },
                                              sale_price_dates_to: {
                                                date: '',
                                                timezone_type:
                                                  null == c ||
                                                  null === (r = c.sale_price_dates_to) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : r.timezone_type,
                                                timezone:
                                                  null == c ||
                                                  null === (a = c.sale_price_dates_to) ||
                                                  void 0 === a
                                                    ? void 0
                                                    : a.timezone,
                                              },
                                            },
                                          ),
                                        )
                                      : l.setCourse(
                                          cz(
                                            cz({}, c),
                                            {},
                                            {
                                              sale_price: null != e ? e : '',
                                            },
                                          ),
                                        ));
                                })(e);
                            }}
                            onKeyDown={function (e) {
                              (['e', 'E', '+', '-', '/', '\\'].includes(e.key) ||
                                (/[a-zA-Z]/.test(e.key) &&
                                  ![
                                    'Backspace',
                                    'Tab',
                                    'ArrowLeft',
                                    'ArrowRight',
                                    'Delete',
                                    'Enter',
                                  ].includes(e.key))) &&
                                e.preventDefault();
                            }}
                          />
                        </Controls.FlexBlockWP>
                      </Controls.FlexWP>
                      <Controls.SpacerWP marginBottom={1} />
                      {p && <Controls.TextWP color={'#FF4955'}>{p}</Controls.TextWP>}
                      <Controls.SpacerWP marginBottom={3} />
                      {'' !== sale_price && (
                        <React.Fragment>
                          <Controls.CardWP>
                            <Kt
                              title={(0, I18n.__)('Sale Schedule', 'ohmylms')}
                              customClass={'schedule-price-handler'}
                              onChange={function () {
                                var e, t, n, r;
                                (d(!s),
                                  s &&
                                    l.setCourse(
                                      cz(
                                        cz({}, c),
                                        {},
                                        {
                                          sale_price_dates_from: {
                                            date: '',
                                            timezone_type:
                                              null == c ||
                                              null === (e = c.post_date) ||
                                              void 0 === e
                                                ? void 0
                                                : e.timezone_type,
                                            timezone:
                                              null == c ||
                                              null === (t = c.post_date) ||
                                              void 0 === t
                                                ? void 0
                                                : t.timezone,
                                          },
                                          sale_price_dates_to: {
                                            date: '',
                                            timezone_type:
                                              null == c ||
                                              null === (n = c.post_date) ||
                                              void 0 === n
                                                ? void 0
                                                : n.timezone_type,
                                            timezone:
                                              null == c ||
                                              null === (r = c.post_date) ||
                                              void 0 === r
                                                ? void 0
                                                : r.timezone,
                                          },
                                        },
                                      ),
                                    ));
                              }}
                              isChecked={s}
                              showDivider={!1}
                              conditionalChild={
                                <React.Fragment>
                                  <Controls.SpacerWP marginBottom={3} />
                                  <div
                                    style={{
                                      border: '1px solid #c8d2e9',
                                      height: '40px',
                                      display: 'inline-block',
                                    }}
                                  >
                                    <Controls.DateRangePickerWP
                                      initialStartDate={
                                        Boolean(null == c ? void 0 : c.sale_price_dates_from)
                                          ? null == c ||
                                            null === (n = c.sale_price_dates_from) ||
                                            void 0 === n
                                            ? void 0
                                            : n.date
                                          : null
                                      }
                                      initialEndDate={
                                        null != c && c.sale_price_dates_to
                                          ? null == c ||
                                            null === (r = c.sale_price_dates_to) ||
                                            void 0 === r
                                            ? void 0
                                            : r.date
                                          : null
                                      }
                                      onChange={function (e) {
                                        var t, n, r, a;
                                        l.setCourse(
                                          cz(
                                            cz({}, c),
                                            {},
                                            {
                                              sale_price_dates_from: {
                                                date: E(e[0]),
                                                timezone_type:
                                                  null == c ||
                                                  null === (t = c.post_date) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.timezone_type,
                                                timezone:
                                                  null == c ||
                                                  null === (n = c.post_date) ||
                                                  void 0 === n
                                                    ? void 0
                                                    : n.timezone,
                                              },
                                              sale_price_dates_to: {
                                                date: E(e[1]),
                                                timezone_type:
                                                  null == c ||
                                                  null === (r = c.post_date) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : r.timezone_type,
                                                timezone:
                                                  null == c ||
                                                  null === (a = c.post_date) ||
                                                  void 0 === a
                                                    ? void 0
                                                    : a.timezone,
                                              },
                                            },
                                          ),
                                        );
                                      }}
                                      disablePastDates={!0}
                                    />
                                  </div>
                                </React.Fragment>
                              }
                            />
                          </Controls.CardWP>
                        </React.Fragment>
                      )}
                      {(!0 === o || 1 === o) &&
                        (null == i ||
                        null === (a = i.reward_settings) ||
                        void 0 === a ||
                        null === (a = a.rules) ||
                        void 0 === a
                          ? void 0
                          : a.find(function (e) {
                              return 'purchase_course' === e.slug;
                            }).value) && (
                          <React.Fragment>
                            <Controls.FlexWP gap={4}>
                              <Controls.FlexBlockWP className={'omlms-single-price'}>
                                <Controls.SpacerWP marginBottom={1} />
                                <Controls.TextWP as={'span'} variant={'muted'}>
                                  {(0, I18n.__)('Purchase with Points', 'ohmylms')}
                                </Controls.TextWP>
                                <Controls.SpacerWP marginBottom={1} />
                                <Controls.InputNumberWP
                                  onFocus={function (e) {
                                    return O(e, 'purchase_point');
                                  }}
                                  value={purchase_point || ''}
                                  onBlur={function (e) {
                                    return P(0, 'purchase_point');
                                  }}
                                  placeholder={(0, I18n.__)('0', 'ohmylms')}
                                  className={
                                    'omlms-course-settings-pricing-input-discount omlms-price-input'
                                  }
                                  onChange={function (e) {
                                    (/^\d*\.?\d*$/.test(e) || '' === e || null === e) &&
                                      (function (e) {
                                        o
                                          ? l.setCourse(
                                              cz(
                                                cz({}, c),
                                                {},
                                                {
                                                  purchase_point: e,
                                                },
                                              ),
                                            )
                                          : l.setCourse(
                                              cz(
                                                cz({}, c),
                                                {},
                                                {
                                                  purchase_point: '',
                                                },
                                              ),
                                            );
                                      })(e);
                                  }}
                                  onKeyDown={function (e) {
                                    (['e', 'E', '+', '-', '/', '\\'].includes(e.key) ||
                                      (/[a-zA-Z]/.test(e.key) &&
                                        ![
                                          'Backspace',
                                          'Tab',
                                          'ArrowLeft',
                                          'ArrowRight',
                                          'Delete',
                                          'Enter',
                                        ].includes(e.key))) &&
                                      e.preventDefault();
                                  }}
                                />
                                <Controls.TextWP
                                  variant={'muted'}
                                  style={{
                                    marginTop: '10px',
                                  }}
                                >
                                  {(0, I18n.__)(
                                    'Learners can purchase this course using either money or points, based on the selected method.',
                                    'ohmylms',
                                  )}
                                </Controls.TextWP>
                              </Controls.FlexBlockWP>
                            </Controls.FlexWP>
                          </React.Fragment>
                        )}
                    </div>
                  </Controls.FlexWP>
                </Controls.SpacerWP>
              </Controls.CardWP>
            )}
          </Controls.FlexItemWP>
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
