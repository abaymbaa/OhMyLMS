/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseFunnel(readRuntime) {
  return function CourseFunnel(props) {
    const {
      $e,
      BH,
      DH,
      FH,
      Ge,
      HH,
      I: Controls,
      Jt,
      L: Entitlements,
      LH,
      NH,
      React,
      T: StoreModule,
      VH,
      We,
      b: I18n,
      df,
      g: ReactHooks,
      l,
      q,
      y: WordPressData,
    } = readRuntime();
    (props.onSave, props.setActiveStep, props.activeStep);
    var t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourse();
      }, []),
      r = true,
      a = LH(
        (0, ReactHooks.useState)([
          {
            label: (0, I18n.__)('Select type', 'ohmylms'),
            value: '',
          },
          {
            label: (0, I18n.__)('Upsell', 'ohmylms'),
            value: 'upsell',
          },
          {
            label: (0, I18n.__)('Downsell', 'ohmylms'),
            value: 'downsell',
          },
        ]),
        1,
      )[0],
      o = LH(
        (0, ReactHooks.useState)([
          {
            label: (0, I18n.__)('Select action', 'ohmylms'),
            value: '',
          },
          {
            label: (0, I18n.__)('Next Step', 'ohmylms'),
            value: 'next_step',
          },
          {
            label: (0, I18n.__)('Final Thank You Page', 'ohmylms'),
            value: 'thank_you_page',
          },
        ]),
        1,
      )[0],
      i = LH(
        (0, ReactHooks.useState)([
          {
            label: (0, I18n.__)('No discount', 'ohmylms'),
            value: 'no_discount',
            disabled: !r,
          },
          {
            label: (0, I18n.__)('Discount percentage', 'ohmylms'),
            value: 'percentage',
            disabled: !r,
          },
          {
            label: (0, I18n.__)('Discount amount', 'ohmylms'),
            value: 'amount',
            disabled: !r,
          },
        ]),
        1,
      )[0],
      c = LH(
        (0, ReactHooks.useState)([
          {
            label: (0, I18n.__)('Select offer type', 'ohmylms'),
            value: '',
          },
          {
            label: (0, I18n.__)('Course', 'ohmylms'),
            value: 'course',
          },
          {
            label: (0, I18n.__)('Membership', 'ohmylms'),
            value: 'membership',
          },
        ]),
        1,
      )[0],
      u = LH((0, ReactHooks.useState)((null == n ? void 0 : n.funnel_steps) || []), 2),
      s = u[0],
      d = u[1],
      m = LH((0, ReactHooks.useState)(null), 2),
      p = m[0],
      f = m[1];
    (0, ReactHooks.useEffect)(
      function () {
        s.length > 0 && !p ? f(s[0].step_id) : 0 === s.length && f(null);
      },
      [s, p],
    );
    var v = (function () {
        var e = BH(
          DH().m(function e(t) {
            var n, r, a;
            return DH().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/page/search?value='.concat(t),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 1:
                      return (
                        (n = e.v),
                        (r = Object.entries(n || {}).map(function (e) {
                          var t = LH(e, 2);
                          return {
                            value: t[0],
                            label: t[1],
                          };
                        })),
                        e.a(2, r)
                      );
                    case 2:
                      return (
                        (e.p = 2),
                        (a = e.v),
                        console.error('Error fetching pages:', a),
                        e.a(2, [])
                      );
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
      _ = (function () {
        var e = BH(
          DH().m(function e(t) {
            var n, r;
            return DH().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    if (!(t.length >= 3)) {
                      e.n = 4;
                      break;
                    }
                    return ((e.n = 1), v(t || ''));
                  case 1:
                    if (0 !== (n = e.v).length) {
                      e.n = 2;
                      break;
                    }
                    return e.a(2, []);
                  case 2:
                    return (
                      (r =
                        null == n
                          ? void 0
                          : n.map(function (e) {
                              return {
                                label: Ge(null == e ? void 0 : e.label),
                                value: null == e ? void 0 : e.value,
                              };
                            })),
                      e.a(2, r)
                    );
                  case 3:
                    e.n = 5;
                    break;
                  case 4:
                    return e.a(2, []);
                  case 5:
                    return e.a(2);
                }
            }, e);
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      w = (function () {
        var e = BH(
          DH().m(function e(t) {
            var n, r, a;
            return DH().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/courses?search='.concat(t),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 1:
                      return (
                        (n = e.v),
                        (r = n.map(function (e) {
                          return {
                            value: null == e ? void 0 : e.id,
                            label: null == e ? void 0 : e.name,
                          };
                        })),
                        e.a(2, r)
                      );
                    case 2:
                      return (
                        (e.p = 2),
                        (a = e.v),
                        console.error('Error fetching courses:', a),
                        e.a(2, [])
                      );
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
      E = (function () {
        var e = BH(
          DH().m(function e(t) {
            var n, r;
            return DH().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    if (!(t.length >= 3)) {
                      e.n = 4;
                      break;
                    }
                    return ((e.n = 1), w(t));
                  case 1:
                    if (0 !== (n = e.v).length) {
                      e.n = 2;
                      break;
                    }
                    return e.a(2, []);
                  case 2:
                    return (
                      (r =
                        null == n
                          ? void 0
                          : n.map(function (e) {
                              return {
                                label: Ge(null == e ? void 0 : e.label),
                                value: null == e ? void 0 : e.value,
                              };
                            })),
                      e.a(2, r)
                    );
                  case 3:
                    e.n = 5;
                    break;
                  case 4:
                    return e.a(2, []);
                  case 5:
                    return e.a(2);
                }
            }, e);
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      S = (function () {
        var e = BH(
          DH().m(function e(t) {
            var n, r, a;
            return DH().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/membership?search='.concat(t),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 1:
                      return (
                        (n = e.v),
                        (r = n.map(function (e) {
                          return {
                            value: null == e ? void 0 : e.id,
                            label: null == e ? void 0 : e.name,
                          };
                        })),
                        e.a(2, r)
                      );
                    case 2:
                      return (
                        (e.p = 2),
                        (a = e.v),
                        console.error('Error fetching memberships:', a),
                        e.a(2, [])
                      );
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
      R = (function () {
        var e = BH(
          DH().m(function e(t) {
            var n, r;
            return DH().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    if (!(t.length >= 3)) {
                      e.n = 4;
                      break;
                    }
                    return ((e.n = 1), S(t));
                  case 1:
                    if (0 !== (n = e.v).length) {
                      e.n = 2;
                      break;
                    }
                    return e.a(2, []);
                  case 2:
                    return (
                      (r =
                        null == n
                          ? void 0
                          : n.map(function (e) {
                              return {
                                label: Ge(null == e ? void 0 : e.label),
                                value: null == e ? void 0 : e.value,
                              };
                            })),
                      e.a(2, r)
                    );
                  case 3:
                    e.n = 5;
                    break;
                  case 4:
                    return e.a(2, []);
                  case 5:
                    return e.a(2);
                }
            }, e);
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      x = function () {
        return (0, I18n.__)('Please enter 3 or more characters...', 'ohmylms');
      },
      C = function () {
        return (0, I18n.__)('Please enter 3 or more characters...', 'ohmylms');
      },
      P = function () {
        return (0, I18n.__)('Please enter 3 or more characters...', 'ohmylms');
      },
      O = function () {
        {
          var e = {
              step_id: 'step_'.concat(s.length + 1),
              step_type: '',
              offer_type: '',
              course_id: '',
              membership_id: '',
              discount_type: 'no_discount',
              discount_value: '',
              offer_page_id: '',
              condition: {
                accepted: {
                  action: '',
                },
                declined: {
                  action: '',
                },
              },
            },
            t = [].concat(
              (function (e) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return HH(e);
                  })(e) ||
                  (function (e) {
                    if (
                      ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                      null != e['@@iterator']
                    )
                      return Array.from(e);
                  })(e) ||
                  VH(e) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                  })()
                );
              })(s),
              [e],
            );
          (d(t), j(t), f(e.step_id));
        }
      },
      k = function (e, t, n) {
        {
          var a = s.map(function (r) {
            return r.step_id === e
              ? FH(
                  FH({}, r),
                  {},
                  'acceptedAction' === t
                    ? {
                        condition: FH(
                          FH({}, r.condition),
                          {},
                          {
                            accepted: {
                              action: n,
                            },
                          },
                        ),
                      }
                    : 'declinedAction' === t
                      ? {
                          condition: FH(
                            FH({}, r.condition),
                            {},
                            {
                              declined: {
                                action: n,
                              },
                            },
                          ),
                        }
                      : 'course_id' === t
                        ? NH(
                            NH({}, t, (null == n ? void 0 : n.value) || n),
                            'course_name',
                            (null == n ? void 0 : n.label) || '',
                          )
                        : 'membership_id' === t
                          ? NH(
                              NH({}, t, (null == n ? void 0 : n.value) || n),
                              'membership_name',
                              (null == n ? void 0 : n.label) || '',
                            )
                          : 'offer_page_id' === t
                            ? NH(
                                NH({}, t, (null == n ? void 0 : n.value) || n),
                                'page_name',
                                (null == n ? void 0 : n.label) || '',
                              )
                            : 'offer_type' === t
                              ? NH(
                                  NH(
                                    NH(NH(NH({}, t, n), 'course_id', ''), 'course_name', ''),
                                    'membership_id',
                                    '',
                                  ),
                                  'membership_name',
                                  '',
                                )
                              : NH({}, t, n),
                )
              : r;
          });
          (d(a), j(a));
        }
      },
      j = function (e) {
        t.setCourse(
          FH(
            FH({}, n),
            {},
            {
              funnel_steps: e,
            },
          ),
        );
      },
      A = function () {
        return s.find(function (e) {
          return e.step_id === p;
        });
      };
    return (
      <Controls.ContainerWP>
        <Controls.SpacerWP marginBottom={0} paddingY={10}>
          <Controls.CardWP
            variant={'secondary'}
            isBorderless={!0}
            minHeight={'calc(100vh - 200px)'}
          >
            <Controls.SpacerWP padding={10} marginBottom={0}>
              <Controls.FlexWP
                justify={'space-between'}
                align={'center'}
                style={{
                  marginBottom: '24px',
                }}
              >
                <Controls.FlexItemWP>
                  <Controls.HeadingWP
                    level={3}
                    style={{
                      margin: 0,
                    }}
                  >
                    {(0, I18n.__)('One-Click Offer Settings', 'ohmylms')}
                  </Controls.HeadingWP>
                  <Controls.TextWP
                    style={{
                      color: '#666',
                      margin: '4px 0 0 0',
                      fontSize: '14px',
                    }}
                  >
                    {(0, I18n.__)(
                      'Configure your funnel sequence to show additional offers after checkout',
                      'ohmylms',
                    )}
                  </Controls.TextWP>
                </Controls.FlexItemWP>
              </Controls.FlexWP>
              {0 === s.length ? (
                <Controls.CardWP
                  variant={'outline'}
                  className={'funnel-empty-state'}
                  isBorderless={!0}
                >
                  <Controls.SpacerWP padding={8}>
                    <Controls.FlexWP direction={'column'} align={'center'} gap={3}>
                      <Controls.FlexItemWP>
                        <div className={'funnel-empty-icon'}>{React.createElement(df, null)}</div>
                      </Controls.FlexItemWP>
                      <Controls.FlexItemWP>
                        <Controls.HeadingWP
                          level={4}
                          style={{
                            margin: 0,
                            textAlign: 'center',
                          }}
                        >
                          {(0, I18n.__)('No funnel steps yet!', 'ohmylms')}
                        </Controls.HeadingWP>
                      </Controls.FlexItemWP>
                      <Controls.FlexItemWP>
                        <Controls.TextWP
                          style={{
                            color: '#666',
                            textAlign: 'center',
                            margin: 0,
                          }}
                        >
                          {(0, I18n.__)(
                            'Boost revenue with upsells and downsells after course purchase.',
                            'ohmylms',
                          )}
                        </Controls.TextWP>
                      </Controls.FlexItemWP>
                      <Controls.FlexItemWP>
                        <Controls.ButtonWP
                          variant={'primary'}
                          icon={<q.Icon icon={$e.A} width={'24px'} height={'24px'} />}
                          onClick={O}
                          disabled={!r}
                        >
                          {(0, I18n.__)('Add New Step', 'ohmylms')}
                        </Controls.ButtonWP>
                      </Controls.FlexItemWP>
                    </Controls.FlexWP>
                  </Controls.SpacerWP>
                </Controls.CardWP>
              ) : (
                <Controls.FlexWP gap={6} align={'flex-start'}>
                  <Controls.FlexItemWP
                    style={{
                      minWidth: '350px',
                      maxWidth: '400px',
                    }}
                  >
                    <Controls.CardWP variant={'outline'} isBorderless={!0}>
                      <Controls.SpacerWP padding={4}>
                        <Controls.HeadingWP
                          level={4}
                          style={{
                            margin: '0 0 16px 0',
                          }}
                        >
                          {(0, I18n.__)('Active Steps', 'ohmylms')}
                          {' ('}
                          {s.length}
                          {')'}
                        </Controls.HeadingWP>
                        <Controls.FlexWP direction={'column'} gap={2}>
                          {s.map(function (e, t) {
                            var n = (function (e, t) {
                                var n,
                                  r = e.step_type
                                    ? (null ===
                                        (n = a.find(function (t) {
                                          return t.value === e.step_type;
                                        })) || void 0 === n
                                        ? void 0
                                        : n.label) || e.step_type
                                    : (0, I18n.__)('No step selected', 'ohmylms'),
                                  o = (0, I18n.__)('No offer selected', 'ohmylms');
                                return (
                                  'course' === e.offer_type && e.course_name
                                    ? (o = e.course_name)
                                    : 'membership' === e.offer_type &&
                                      e.membership_name &&
                                      (o = e.membership_name),
                                  {
                                    stepNumber: t + 1,
                                    stepType: r,
                                    courseName: o,
                                  }
                                );
                              })(e, t),
                              r = p === e.step_id;
                            return (
                              <Controls.FlexItemWP key={e.step_id}>
                                <Controls.CardWP
                                  variant={r ? 'primary' : 'outline'}
                                  className={'funnel-step-summary '.concat(r ? 'selected' : '')}
                                  style={{
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                  }}
                                  onClick={function () {
                                    f(e.step_id);
                                  }}
                                >
                                  <Controls.SpacerWP padding={3}>
                                    <Controls.FlexWP direction={'column'} gap={1}>
                                      <Controls.FlexWP justify={'space-between'} align={'center'}>
                                        <Controls.HeadingWP
                                          level={6}
                                          style={{
                                            margin: 0,
                                            fontSize: '14px',
                                            fontWeight: '600',
                                          }}
                                        >
                                          {(0, I18n.__)('Step', 'ohmylms')} {n.stepNumber}
                                        </Controls.HeadingWP>
                                        {s.length > 0 && (
                                          <Controls.ButtonWP
                                            variant={'text'}
                                            size={'small'}
                                            icon={<We />}
                                            onClick={function (t) {
                                              var n, r, a;
                                              (t.stopPropagation(),
                                                (n = e.step_id),
                                                (r = s.filter(function (e) {
                                                  return e.step_id !== n;
                                                })),
                                                (a = r.map(function (e, t) {
                                                  return FH(
                                                    FH({}, e),
                                                    {},
                                                    {
                                                      step_id: 'step_'.concat(t + 1),
                                                    },
                                                  );
                                                })),
                                                d(a),
                                                j(a),
                                                p === n &&
                                                  (a.length > 0 ? f(a[0].step_id) : f(null)));
                                            }}
                                            style={{
                                              minWidth: 'auto',
                                              padding: '2px 4px',
                                              height: '20px',
                                              color: '#dc2626',
                                            }}
                                          />
                                        )}
                                      </Controls.FlexWP>
                                      <Controls.TextWP
                                        style={{
                                          margin: 0,
                                          fontSize: '12px',
                                          color: '#666',
                                          fontWeight: '500',
                                        }}
                                      >
                                        {n.stepType}
                                      </Controls.TextWP>
                                      <Controls.TextWP
                                        style={{
                                          margin: 0,
                                          fontSize: '11px',
                                          color: '#888',
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis',
                                          whiteSpace: 'nowrap',
                                        }}
                                      >
                                        {n.courseName}
                                      </Controls.TextWP>
                                    </Controls.FlexWP>
                                  </Controls.SpacerWP>
                                </Controls.CardWP>
                              </Controls.FlexItemWP>
                            );
                          })}
                          <Controls.FlexItemWP>
                            <Controls.ButtonWP
                              variant={'outline'}
                              icon={<q.Icon icon={$e.A} width={'24px'} height={'24px'} />}
                              onClick={O}
                              style={{
                                width: '100%',
                                justifyContent: 'center',
                                padding: '12px',
                                borderStyle: 'dashed',
                                color: 'var(--wp-components-color-accent)',
                                borderColor: '#C8D2E9',
                              }}
                              disabled={!r}
                            >
                              {(0, I18n.__)('Add New Step', 'ohmylms')}
                            </Controls.ButtonWP>
                          </Controls.FlexItemWP>
                        </Controls.FlexWP>
                      </Controls.SpacerWP>
                    </Controls.CardWP>
                  </Controls.FlexItemWP>
                  <Controls.FlexItemWP flex={'1'}>
                    {p && A() ? (
                      <Controls.CardWP variant={'outline'} isBorderless={!0}>
                        <Controls.SpacerWP padding={4}>
                          {(function (e, t) {
                            var n = A(),
                              l = s.findIndex(function (e) {
                                return e.step_id === p;
                              });
                            return (
                              <Controls.FlexWP direction={'column'} gap={4}>
                                <Controls.FlexItemWP>
                                  <Controls.HeadingWP
                                    level={4}
                                    style={{
                                      margin: 0,
                                    }}
                                  >
                                    {(0, I18n.__)('Step', 'ohmylms')} {l + 1}{' '}
                                    {(0, I18n.__)('Settings', 'ohmylms')}
                                  </Controls.HeadingWP>
                                </Controls.FlexItemWP>
                                <Controls.CardWP
                                  isBorderless={!0}
                                  padding={'16px'}
                                  variant={'secondary'}
                                >
                                  <Controls.FlexItemWP>
                                    <Controls.FlexWP gap={8} align={'flex-start'}>
                                      <Controls.FlexItemWP flex={'2'}>
                                        <Controls.HeadingWP level={4}>
                                          {(0, I18n.__)('Step Type', 'ohmylms')}
                                        </Controls.HeadingWP>
                                        <Controls.SpacerWP marginBottom={1} />
                                        <Controls.TextWP>
                                          {(0, I18n.__)(
                                            'Choose the type of offer for this funnel step.',
                                            'ohmylms',
                                          )}
                                        </Controls.TextWP>
                                      </Controls.FlexItemWP>
                                      <Controls.FlexItemWP flex={'2'}>
                                        <Controls.SelectWP
                                          value={n.step_type}
                                          onChange={function (e) {
                                            return k(n.step_id, 'step_type', e);
                                          }}
                                          options={a}
                                          placeholder={(0, I18n.__)('Select type', 'ohmylms')}
                                          disabled={!r}
                                        />
                                      </Controls.FlexItemWP>
                                    </Controls.FlexWP>
                                  </Controls.FlexItemWP>
                                  <Controls.SpacerWP marginBottom={4} />
                                  <Controls.FlexItemWP>
                                    <Controls.FlexWP gap={8} align={'flex-start'}>
                                      <Controls.FlexItemWP flex={'2'}>
                                        <Controls.HeadingWP level={4}>
                                          {(0, I18n.__)('Offer Page', 'ohmylms')}
                                        </Controls.HeadingWP>
                                        <Controls.SpacerWP marginBottom={1} />
                                        <Controls.TextWP>
                                          {(0, I18n.__)(
                                            'Choose the page template for this offer.',
                                            'ohmylms',
                                          )}
                                        </Controls.TextWP>
                                      </Controls.FlexItemWP>
                                      <Controls.FlexItemWP flex={'2'}>
                                        <Jt.A
                                          className={
                                            'ohmylms-single-select ohmylms-search-select auto-height'
                                          }
                                          classNamePrefix={'ohmylms-react-select'}
                                          placeholder={(0, I18n.__)(
                                            'Type to search pages...',
                                            'ohmylms',
                                          )}
                                          value={
                                            n.offer_page_id && n.page_name
                                              ? {
                                                  value: n.offer_page_id,
                                                  label: n.page_name,
                                                }
                                              : null
                                          }
                                          onChange={function (e) {
                                            return k(n.step_id, 'offer_page_id', e);
                                          }}
                                          loadOptions={_}
                                          noOptionsMessage={C}
                                          isClearable={!0}
                                          key={'page-'.concat(n.step_id)}
                                          isDisabled={!r}
                                        />
                                      </Controls.FlexItemWP>
                                    </Controls.FlexWP>
                                  </Controls.FlexItemWP>
                                </Controls.CardWP>
                                <Controls.CardWP
                                  isBorderless={!0}
                                  padding={'16px'}
                                  variant={'secondary'}
                                >
                                  <Controls.FlexItemWP>
                                    <Controls.FlexWP gap={8} align={'flex-start'}>
                                      <Controls.FlexItemWP flex={'2'}>
                                        <Controls.HeadingWP level={4}>
                                          {(0, I18n.__)('Offer Type', 'ohmylms')}
                                        </Controls.HeadingWP>
                                        <Controls.SpacerWP marginBottom={1} />
                                        <Controls.TextWP>
                                          {(0, I18n.__)(
                                            'Choose what type of product to offer.',
                                            'ohmylms',
                                          )}
                                        </Controls.TextWP>
                                      </Controls.FlexItemWP>
                                      <Controls.FlexItemWP flex={'2'}>
                                        <Controls.SelectWP
                                          value={n.offer_type || ''}
                                          onChange={function (e) {
                                            return k(n.step_id, 'offer_type', e);
                                          }}
                                          options={c}
                                          placeholder={(0, I18n.__)('Select offer type', 'ohmylms')}
                                          disabled={!r}
                                        />
                                      </Controls.FlexItemWP>
                                    </Controls.FlexWP>
                                  </Controls.FlexItemWP>
                                  {'course' === n.offer_type && (
                                    <Controls.SpacerWP marginBottom={0} marginTop={4}>
                                      <Controls.FlexItemWP>
                                        <Controls.FlexWP gap={8} align={'flex-start'}>
                                          <Controls.FlexItemWP flex={'2'}>
                                            <Controls.HeadingWP level={4}>
                                              {(0, I18n.__)('Course', 'ohmylms')}
                                            </Controls.HeadingWP>
                                            <Controls.SpacerWP marginBottom={1} />
                                            <Controls.TextWP>
                                              {(0, I18n.__)(
                                                'Select the course to offer in this step.',
                                                'ohmylms',
                                              )}
                                            </Controls.TextWP>
                                          </Controls.FlexItemWP>
                                          <Controls.FlexItemWP flex={'2'}>
                                            <Jt.A
                                              className={
                                                'ohmylms-single-select ohmylms-search-select auto-height'
                                              }
                                              classNamePrefix={'ohmylms-react-select'}
                                              placeholder={(0, I18n.__)(
                                                'Type to search courses...',
                                                'ohmylms',
                                              )}
                                              value={
                                                n.course_id && n.course_name
                                                  ? {
                                                      value: n.course_id,
                                                      label: n.course_name,
                                                    }
                                                  : null
                                              }
                                              onChange={function (e) {
                                                return k(n.step_id, 'course_id', e);
                                              }}
                                              loadOptions={E}
                                              noOptionsMessage={x}
                                              isClearable={!0}
                                              key={'course-'.concat(n.step_id)}
                                              disabled={!r}
                                            />
                                          </Controls.FlexItemWP>
                                        </Controls.FlexWP>
                                      </Controls.FlexItemWP>
                                    </Controls.SpacerWP>
                                  )}
                                  {'membership' === n.offer_type && (
                                    <Controls.SpacerWP marginBottom={0} marginTop={4}>
                                      <Controls.FlexItemWP>
                                        <Controls.FlexWP gap={8} align={'flex-start'}>
                                          <Controls.FlexItemWP flex={'2'}>
                                            <Controls.HeadingWP level={4}>
                                              {(0, I18n.__)('Membership', 'ohmylms')}
                                            </Controls.HeadingWP>
                                            <Controls.SpacerWP marginBottom={1} />
                                            <Controls.TextWP>
                                              {(0, I18n.__)(
                                                'Select the membership plan to offer in this step.',
                                                'ohmylms',
                                              )}
                                            </Controls.TextWP>
                                          </Controls.FlexItemWP>
                                          <Controls.FlexItemWP flex={'2'}>
                                            <Jt.A
                                              className={
                                                'ohmylms-single-select ohmylms-search-select auto-height'
                                              }
                                              classNamePrefix={'ohmylms-react-select'}
                                              placeholder={(0, I18n.__)(
                                                'Type to search memberships...',
                                                'ohmylms',
                                              )}
                                              value={
                                                n.membership_id && n.membership_name
                                                  ? {
                                                      value: n.membership_id,
                                                      label: n.membership_name,
                                                    }
                                                  : null
                                              }
                                              onChange={function (e) {
                                                return k(n.step_id, 'membership_id', e);
                                              }}
                                              loadOptions={R}
                                              noOptionsMessage={P}
                                              isClearable={!0}
                                              key={'membership-'.concat(n.step_id)}
                                              isDisabled={!r}
                                            />
                                          </Controls.FlexItemWP>
                                        </Controls.FlexWP>
                                      </Controls.FlexItemWP>
                                    </Controls.SpacerWP>
                                  )}
                                </Controls.CardWP>
                                <Controls.CardWP
                                  isBorderless={!0}
                                  padding={'16px'}
                                  variant={'secondary'}
                                  className={'ohmylms-funnel-discount-section'}
                                >
                                  <Controls.FlexItemWP>
                                    <Controls.FlexWP gap={1} align={'flex-start'}>
                                      <Controls.FlexItemWP flex={'1'}>
                                        <Controls.HeadingWP level={4}>
                                          {(0, I18n.__)('Discount', 'ohmylms')}
                                        </Controls.HeadingWP>
                                        <Controls.SpacerWP marginBottom={1} />
                                        <Controls.TextWP>
                                          {(0, I18n.__)(
                                            'Configure discount options for this offer.',
                                            'ohmylms',
                                          )}
                                        </Controls.TextWP>
                                      </Controls.FlexItemWP>
                                      <Controls.FlexItemWP flex={'2'}>
                                        <Controls.FlexWP direction={'column'} gap={3}>
                                          <Controls.RadioGroupWP
                                            options={i}
                                            value={n.discount_type || 'no_discount'}
                                            onChange={function (e) {
                                              return k(n.step_id, 'discount_type', e);
                                            }}
                                            isBlock={!0}
                                            optionType={'button'}
                                            buttonStyle={'outline'}
                                          />
                                          {('percentage' === n.discount_type ||
                                            'amount' === n.discount_type) && (
                                            <Controls.FlexWP justify={'flex-end'} align={'center'}>
                                              <Controls.FlexWP
                                                align={'center'}
                                                gap={1}
                                                style={{
                                                  maxWidth: '120px',
                                                }}
                                              >
                                                <Controls.FlexItemWP flex={'1'}>
                                                  <Controls.InputNumberWP
                                                    value={n.discount_value || ''}
                                                    onChange={function (e) {
                                                      return k(n.step_id, 'discount_value', e);
                                                    }}
                                                    placeholder={'0'}
                                                    min={0}
                                                    max={
                                                      'percentage' === n.discount_type
                                                        ? 100
                                                        : void 0
                                                    }
                                                    suffix={
                                                      'percentage' ===
                                                      (null == n ? void 0 : n.discount_type)
                                                        ? '%'
                                                        : ''
                                                    }
                                                    disabled={!r}
                                                  />
                                                </Controls.FlexItemWP>
                                              </Controls.FlexWP>
                                            </Controls.FlexWP>
                                          )}
                                        </Controls.FlexWP>
                                      </Controls.FlexItemWP>
                                    </Controls.FlexWP>
                                  </Controls.FlexItemWP>
                                </Controls.CardWP>
                                <Controls.FlexItemWP>
                                  <Controls.CardWP
                                    variant={'secondary'}
                                    isBorderless={!0}
                                    className={'condition-settings'}
                                  >
                                    <Controls.SpacerWP padding={3}>
                                      <Controls.FlexWP direction={'column'} gap={3}>
                                        <Controls.FlexItemWP>
                                          <Controls.HeadingWP level={4}>
                                            {(0, I18n.__)('Conditional Step Actions', 'ohmylms')}
                                          </Controls.HeadingWP>
                                        </Controls.FlexItemWP>
                                        <Controls.FlexItemWP>
                                          <Controls.FlexWP gap={4} wrap={!0}>
                                            <Controls.FlexItemWP flex={'1'}>
                                              <Controls.FlexWP direction={'column'} gap={1}>
                                                <Controls.TextWP>
                                                  {(0, I18n.__)(
                                                    'When the Offer is Accepted',
                                                    'ohmylms',
                                                  )}
                                                </Controls.TextWP>
                                                <Controls.SelectWP
                                                  value={
                                                    (null === (e = n.condition) ||
                                                    void 0 === e ||
                                                    null === (e = e.accepted) ||
                                                    void 0 === e
                                                      ? void 0
                                                      : e.action) || ''
                                                  }
                                                  onChange={function (e) {
                                                    return k(n.step_id, 'acceptedAction', e);
                                                  }}
                                                  options={o}
                                                  placeholder={(0, I18n.__)(
                                                    'Select action',
                                                    'ohmylms',
                                                  )}
                                                  disabled={!r}
                                                />
                                              </Controls.FlexWP>
                                            </Controls.FlexItemWP>
                                            <Controls.FlexItemWP flex={'1'}>
                                              <Controls.FlexWP direction={'column'} gap={1}>
                                                <Controls.TextWP>
                                                  {(0, I18n.__)(
                                                    'When the Offer is Declined',
                                                    'ohmylms',
                                                  )}
                                                </Controls.TextWP>
                                                <Controls.SelectWP
                                                  value={
                                                    (null === (t = n.condition) ||
                                                    void 0 === t ||
                                                    null === (t = t.declined) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t.action) || ''
                                                  }
                                                  onChange={function (e) {
                                                    return k(n.step_id, 'declinedAction', e);
                                                  }}
                                                  options={o}
                                                  placeholder={(0, I18n.__)(
                                                    'Select action',
                                                    'ohmylms',
                                                  )}
                                                  disabled={!r}
                                                />
                                              </Controls.FlexWP>
                                            </Controls.FlexItemWP>
                                          </Controls.FlexWP>
                                        </Controls.FlexItemWP>
                                      </Controls.FlexWP>
                                    </Controls.SpacerWP>
                                  </Controls.CardWP>
                                </Controls.FlexItemWP>
                              </Controls.FlexWP>
                            );
                          })()}
                        </Controls.SpacerWP>
                      </Controls.CardWP>
                    ) : (
                      <Controls.CardWP variant={'outline'} isBorderless={!0}>
                        <Controls.SpacerWP padding={8}>
                          <Controls.FlexWP direction={'column'} align={'center'} gap={3}>
                            <Controls.FlexItemWP>
                              <Controls.HeadingWP
                                level={5}
                                style={{
                                  margin: 0,
                                  textAlign: 'center',
                                  color: '#666',
                                }}
                              >
                                {(0, I18n.__)('Select a step to edit', 'ohmylms')}
                              </Controls.HeadingWP>
                            </Controls.FlexItemWP>
                            <Controls.FlexItemWP>
                              <Controls.TextWP
                                style={{
                                  color: '#888',
                                  textAlign: 'center',
                                  margin: 0,
                                }}
                              >
                                {(0, I18n.__)(
                                  'Choose a step from the left panel to configure its settings',
                                  'ohmylms',
                                )}
                              </Controls.TextWP>
                            </Controls.FlexItemWP>
                          </Controls.FlexWP>
                        </Controls.SpacerWP>
                      </Controls.CardWP>
                    )}
                  </Controls.FlexItemWP>
                </Controls.FlexWP>
              )}
            </Controls.SpacerWP>
          </Controls.CardWP>
        </Controls.SpacerWP>
      </Controls.ContainerWP>
    );
  };
}
