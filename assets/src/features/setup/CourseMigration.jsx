/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseMigration(readRuntime) {
  return function CourseMigration(props) {
    const {
      Dne,
      Gne,
      Gte,
      Hne,
      I: Controls,
      Lne,
      React,
      T: StoreModule,
      Vne,
      Wne,
      b: I18n,
      g: ReactHooks,
      hB,
      l,
      qne,
      une,
      y: WordPressData,
    } = readRuntime();
    var t = props.onTabChange,
      n = props.handleBack,
      r = (0, WordPressData.useDispatch)(StoreModule.default),
      a = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getSetupWizardData();
      }, []),
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCurrencySettings();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getDesignSettings();
      }, []),
      c = Vne((0, ReactHooks.useState)([]), 2),
      u = c[0],
      s = c[1],
      d = Vne((0, ReactHooks.useState)(!1), 2),
      m = d[0],
      p = d[1],
      f = Vne((0, ReactHooks.useState)([]), 2),
      v = f[0],
      h = f[1],
      _ = Vne((0, ReactHooks.useState)('selection'), 2),
      w = _[0],
      E = _[1],
      S = Vne((0, ReactHooks.useState)(0), 2),
      R = S[0],
      x = S[1],
      C = Vne((0, ReactHooks.useState)(-1), 2),
      P = (C[0], C[1]),
      O = (0, ReactHooks.useMemo)(
        function () {
          var e,
            t,
            n = null == a ? void 0 : a.selectedPlatform,
            r = {
              label: n,
              icon:
                (null === (e = window.creator_lms_params) || void 0 === e
                  ? void 0
                  : e.plugin_assets) + 'images/creator-logo.svg',
            },
            o =
              (null === (t = window.creator_lms_params) || void 0 === t
                ? void 0
                : t.plugin_assets) + 'images/';
          return (
            'tutorLMS' === n
              ? (r = {
                  label: 'Tutor LMS',
                  icon: o + 'tutor_icon.svg',
                })
              : 'learnDash' === n
                ? (r = {
                    label: 'LearnDash',
                    icon: o + 'learndash_icon.svg',
                  })
                : 'learnPress' === n
                  ? (r = {
                      label: 'LearnPress',
                      icon: o + 'learnpress_icon.svg',
                    })
                  : 'masterStudy' === n &&
                    (r = {
                      label: 'MasterStudy LMS',
                      icon: o + 'masterstudy_icon.svg',
                    }),
            r
          );
        },
        [null == a ? void 0 : a.selectedPlatform],
      );
    (0, ReactHooks.useEffect)(
      function () {
        var e = (function () {
          var e = Lne(
            Wne().m(function e() {
              var t, n;
              return Wne().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        if (null != a && a.selectedPlatform) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2);
                      case 1:
                        return (
                          p(!0),
                          (e.p = 2),
                          (e.n = 3),
                          l()({
                            path: '/creator-lms/v1/migrations/'.concat(
                              a.selectedPlatform,
                              '/courses',
                            ),
                          })
                        );
                      case 3:
                        (null != (t = e.v) &&
                          t.courses &&
                          (s(t.courses),
                          h(
                            t.courses.map(function (e) {
                              return e.id;
                            }),
                          )),
                          (e.n = 5));
                        break;
                      case 4:
                        ((e.p = 4), (n = e.v), console.error('Failed to fetch courses', n));
                      case 5:
                        return ((e.p = 5), p(!1), e.f(5));
                      case 6:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[2, 4, 5, 6]],
              );
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        e();
      },
      [null == a ? void 0 : a.selectedPlatform],
    );
    var k = (function () {
        var e = Lne(
          Wne().m(function e() {
            var t, n, r;
            return Wne().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (a.certificate) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2, null);
                    case 1:
                      if (
                        ((e.p = 1),
                        (t = hB.find(function (e) {
                          return e.id === a.certificate;
                        })))
                      ) {
                        e.n = 2;
                        break;
                      }
                      return e.a(2, null);
                    case 2:
                      return (
                        (e.n = 3),
                        l()({
                          path: '/creator-lms/v1/certificates/',
                          method: 'POST',
                          data: {
                            name: 'Certificate Template '.concat(a.certificate),
                            status: 'publish',
                            contents: t.contents,
                            template_thumbnail: t.image_src,
                          },
                        })
                      );
                    case 3:
                      return ((n = e.v), e.a(2, (null == n ? void 0 : n.id) || null));
                    case 4:
                      return (
                        (e.p = 4),
                        (r = e.v),
                        console.error('Error creating certificate:', r),
                        e.a(2, null)
                      );
                  }
              },
              e,
              null,
              [[1, 4]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      j = (function () {
        var e = Lne(
          Wne().m(function e(t) {
            var n, a, o, i;
            return Wne().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (t && 'others' !== t && une[t]) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        (e.p = 1),
                        (a = une[t].data),
                        (e.n = 2),
                        l()({
                          path: '/creator-lms/v1/setup-wizard/import-course',
                          method: 'POST',
                          data: a,
                          headers: {
                            nonce: window.creator_lms_params.setup_wizard_nonce,
                          },
                        })
                      );
                    case 2:
                      (null != (o = e.v) &&
                        null !== (n = o.course_ids) &&
                        void 0 !== n &&
                        n.length &&
                        r.setSetupWizardData({
                          imported_course_ids: o.course_ids,
                        }),
                        (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3), (i = e.v), console.error('Error importing sample course:', i));
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 3]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      A = (function () {
        var e = Lne(
          Wne().m(function e() {
            var t, n, l, c, u, s, d, m, p, f, v, g, h, y, b, _;
            return Wne().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return ((e.p = 0), (e.n = 1), k());
                    case 1:
                      return (
                        (y = e.v),
                        (b = {
                          optin: {
                            creatorlms_allow_tracking: null != a && a.isOptEnabled ? 'yes' : 'no',
                          },
                          language: null !== (t = a.language) && void 0 !== t ? t : 'en_US',
                          certificate: a.certificate,
                          certificate_id: y,
                          niche: a.niche ? [a.niche] : [],
                          level: a.level,
                          design: {
                            creator_lms_archive_page_layout:
                              null !== (n = a.archive_page_layout) && void 0 !== n
                                ? n
                                : null === (l = i.creator_lms_archive_page_layout) || void 0 === l
                                  ? void 0
                                  : l.value,
                            creator_lms_columns_per_row:
                              a.courses_per_row ||
                              (null === (c = i.creator_lms_columns_per_row) || void 0 === c
                                ? void 0
                                : c.value) ||
                              4,
                            creator_lms_courses_per_page:
                              a.courses_per_page ||
                              (null === (u = i.creator_lms_courses_per_page) || void 0 === u
                                ? void 0
                                : u.value) ||
                              10,
                          },
                          currency: {
                            creator_lms_currency:
                              null !== (s = a.currency) && void 0 !== s
                                ? s
                                : null == o || null === (d = o.creator_lms_currency) || void 0 === d
                                  ? void 0
                                  : d.value,
                            creator_lms_currency_pos:
                              (null == o ||
                              null === (m = o.creator_lms_currency_pos) ||
                              void 0 === m
                                ? void 0
                                : m.value) || 'left',
                            creator_lms_price_thousand_sep:
                              (null == o ||
                              null === (p = o.creator_lms_price_thousand_sep) ||
                              void 0 === p
                                ? void 0
                                : p.value) || ',',
                            creator_lms_price_decimal_sep:
                              (null == o ||
                              null === (f = o.creator_lms_price_decimal_sep) ||
                              void 0 === f
                                ? void 0
                                : f.value) || '.',
                            creator_lms_price_num_decimals:
                              (null == o ||
                              null === (v = o.creator_lms_price_num_decimals) ||
                              void 0 === v
                                ? void 0
                                : v.value) || '2',
                          },
                          contact: {
                            email:
                              null != a && a.isOptEnabled
                                ? null === (g = window.creator_lms_params) || void 0 === g
                                  ? void 0
                                  : g.admin_email
                                : '',
                            name:
                              null != a && a.isOptEnabled
                                ? null === (h = window.creator_lms_params) || void 0 === h
                                  ? void 0
                                  : h.admin_name
                                : '',
                          },
                          wizard_data: a,
                        }),
                        (e.n = 2),
                        r.saveSetup(b)
                      );
                    case 2:
                      return ((e.n = 3), j(null == a ? void 0 : a.niche));
                    case 3:
                      (y &&
                        r.setSetupWizardData({
                          certificate_id: y,
                        }),
                        (e.n = 5));
                      break;
                    case 4:
                      ((e.p = 4), (_ = e.v), console.error('Error saving setup wizard data:', _));
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 4]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      M = (function () {
        var e = Lne(
          Wne().m(function e() {
            var n, r, o;
            return Wne().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        E('migrating'),
                        (e.n = 1),
                        new Promise(function (e) {
                          return setTimeout(e, 800);
                        })
                      );
                    case 1:
                      return (
                        x(1),
                        (e.n = 2),
                        new Promise(function (e) {
                          return setTimeout(e, 800);
                        })
                      );
                    case 2:
                      (x(2), (n = 0));
                    case 3:
                      if (!(n < v.length)) {
                        e.n = 9;
                        break;
                      }
                      return (
                        (r = v[n]),
                        P(n),
                        x(3 + n),
                        (e.p = 4),
                        (e.n = 5),
                        l()({
                          path: '/creator-lms/v1/migrations/'.concat(a.selectedPlatform),
                          method: 'POST',
                          data: Dne({}, a.selectedPlatform, {
                            course_id: r,
                          }),
                        })
                      );
                    case 5:
                      e.n = 7;
                      break;
                    case 6:
                      ((e.p = 6),
                        (o = e.v),
                        console.error('Failed to migrate course '.concat(r, ':'), o));
                    case 7:
                      return (
                        (e.n = 8),
                        new Promise(function (e) {
                          return setTimeout(e, 500);
                        })
                      );
                    case 8:
                      (n++, (e.n = 3));
                      break;
                    case 9:
                      return ((e.n = 10), A());
                    case 10:
                      return (
                        (e.n = 11),
                        new Promise(function (e) {
                          return setTimeout(e, 500);
                        })
                      );
                    case 11:
                      t('wizard-completion');
                    case 12:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[4, 6]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      F = (function () {
        var e = Lne(
          Wne().m(function e() {
            return Wne().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return (t('wizard-completion'), (e.n = 1), A());
                  case 1:
                    return e.a(2);
                }
            }, e);
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      N = u.length > 0 && v.length === u.length,
      D = 'M10.5303 0.53033L3.53033 7.53033L0.53033 4.53033';
    return 'selection' === w ? (
      <React.Fragment>
        <Gte
          level={null == a ? void 0 : a.level}
          currentStep={
            'experienced' == (null == a ? void 0 : a.level) ||
            'intermediate' == (null == a ? void 0 : a.level)
              ? 2
              : 0
          }
          isShowIndicator={!0}
        />
        <Controls.ContainerWP>
          <div
            className={'omlms-setup-wizard-level-selection-wrapper omlms-setup-wizard-card-wrapper'}
          >
            <div className={'omlms-setup-wizard__container'}>
              <div className={'omlms-setup-wizard__header'}>
                <Controls.HeadingWP
                  as={'h2'}
                  color={'#000d25'}
                  size={'24'}
                  align={'center'}
                  weight={'600'}
                >
                  {(0, I18n.__)('Let’s Start Your Course Draft', 'ohmylms')}
                </Controls.HeadingWP>
                <Controls.TextWP
                  as={'p'}
                  size={'18'}
                  color={'#687784'}
                  align={'center'}
                  weight={'400'}
                  style={{
                    maxWidth: '500px',
                    margin: 'auto',
                  }}
                >
                  {(0, I18n.__)(
                    "We've fetched your courses to help you build a draft. Nothing is live yet - you're in control.",
                    'ohmylms',
                  )}
                </Controls.TextWP>
              </div>
              <Controls.FlexWP
                direction={'column'}
                gap={6}
                items={'center'}
                justify={'center'}
                style={{
                  width: '790px',
                  margin: 'auto',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    border: '1px solid rgba(200, 210, 233, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 9px',
                    width: '100%',
                    maxWidth: '614px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px',
                    }}
                  >
                    <img
                      src={O.icon}
                      alt={O.label}
                      style={{
                        width: '29px',
                        height: '29px',
                      }}
                    />
                    <Controls.TextWP size={'18'} weight={'600'} color={'#000d25'}>
                      {O.label}
                    </Controls.TextWP>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      padding: '8px',
                    }}
                  >
                    <Controls.TextWP size={'14'} color={'#444d5e'}>
                      {(0, I18n.__)('Migrating from', 'ohmylms')}
                    </Controls.TextWP>
                    <Controls.TextWP size={'16'} weight={'500'} color={'#444d5e'}>
                      {O.label}
                    </Controls.TextWP>
                  </div>
                </div>
                <div
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px 0px rgba(110, 66, 211, 0.14)',
                    padding: '24px',
                    width: '100%',
                    maxWidth: '614px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      background: '#f4f5f7',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '42px',
                      height: '40px',
                      padding: '16px 24px 16px 12px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      className={'omlms-setup-wizard-checkbox'}
                      onClick={function () {
                        v.length === u.length
                          ? h([])
                          : h(
                              u.map(function (e) {
                                return e.id;
                              }),
                            );
                      }}
                      style={{
                        position: 'relative',
                        width: '16px',
                        height: '16px',
                        background: N ? '#6e42d3' : 'white',
                        border: '1px solid #6e42d3',
                        borderRadius: '4px',
                        flexShrink: 0,
                        cursor: 'pointer',
                      }}
                    >
                      {N && (
                        <div
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: 'calc(50%)',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '7px',
                          }}
                        >
                          <svg
                            style={{
                              display: 'block',
                              width: '100%',
                              height: '100%',
                            }}
                            fill={'none'}
                            preserveAspectRatio={'none'}
                            viewBox={'0 0 11.0607 8.59099'}
                          >
                            <path d={D} stroke={'#FFF'} strokeWidth={'1.5'} />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span
                        style={{
                          background: 'rgba(200, 210, 233, 0.5)',
                          borderRadius: '20px',
                          padding: '0 8px',
                          fontSize: '12px',
                          color: '#6e42d3',
                          fontWeight: 600,
                        }}
                      >
                        {v.length}
                      </span>
                      <Controls.TextWP size={'12'} weight={'500'} color={'#7a8b9a'}>
                        {(0, I18n.__)('Courses selected', 'ohmylms')}
                      </Controls.TextWP>
                    </div>
                  </div>
                  {m ? (
                    <Controls.FlexWP
                      justify={'center'}
                      align={'center'}
                      style={{
                        padding: '40px',
                      }}
                    >
                      <Controls.SpinWP />
                    </Controls.FlexWP>
                  ) : (
                    <div
                      style={{
                        maxHeight: '400px',
                        overflowY: 'auto',
                      }}
                    >
                      {u.map(function (e, t) {
                        var n = v.includes(e.id);
                        return (
                          <div
                            key={e.id}
                            style={{
                              borderBottom: '0.5px solid rgba(200, 210, 233, 0.5)',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '30px',
                            }}
                          >
                            <div
                              className={'omlms-setup-wizard-checkbox'}
                              onClick={function () {
                                return (
                                  (t = e.id),
                                  void (v.includes(t)
                                    ? h(
                                        v.filter(function (e) {
                                          return e !== t;
                                        }),
                                      )
                                    : h(
                                        [].concat(
                                          (function (e) {
                                            return (
                                              (function (e) {
                                                if (Array.isArray(e)) return Gne(e);
                                              })(e) ||
                                              (function (e) {
                                                if (
                                                  ('undefined' != typeof Symbol &&
                                                    null != e[Symbol.iterator]) ||
                                                  null != e['@@iterator']
                                                )
                                                  return Array.from(e);
                                              })(e) ||
                                              Hne(e) ||
                                              (function () {
                                                throw new TypeError(
                                                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                );
                                              })()
                                            );
                                          })(v),
                                          [t],
                                        ),
                                      ))
                                );
                                var t;
                              }}
                              style={{
                                position: 'relative',
                                width: '16px',
                                height: '16px',
                                background: n ? '#6e42d3' : 'white',
                                border: '1px solid #6e42d3',
                                borderRadius: '4px',
                                flexShrink: 0,
                                cursor: 'pointer',
                              }}
                            >
                              {n && (
                                <div
                                  style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: 'calc(50%)',
                                    transform: 'translate(-50%, -50%)',
                                    width: '10px',
                                    height: '7px',
                                  }}
                                >
                                  <svg
                                    style={{
                                      display: 'block',
                                      width: '100%',
                                      height: '100%',
                                    }}
                                    fill={'none'}
                                    preserveAspectRatio={'none'}
                                    viewBox={'0 0 11.0607 8.59099'}
                                  >
                                    <path d={D} stroke={'white'} strokeWidth={'1.5'} />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                gap: '20px',
                                alignItems: 'center',
                              }}
                            >
                              <div
                                style={{
                                  width: '80px',
                                  height: '50px',
                                  background: '#e1e1e1',
                                  borderRadius: '4px',
                                  overflow: 'hidden',
                                }}
                              >
                                {e.thumbnail && (
                                  <img
                                    src={e.thumbnail}
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'cover',
                                    }}
                                  />
                                )}
                              </div>
                              <div>
                                <Controls.TextWP size={'14'} weight={'700'} color={'#000d25'}>
                                  {e.title || e.label}
                                </Controls.TextWP>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {0 === u.length && !m && (
                        <div
                          style={{
                            padding: '20px',
                            textAlign: 'center',
                          }}
                        >
                          <Controls.TextWP>
                            {(0, I18n.__)('No courses found to migrate.', 'ohmylms')}
                          </Controls.TextWP>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Controls.FlexWP>
            </div>
          </div>
          <Controls.SpacerWP marginBottom={0} marginTop={6}>
            <Controls.FlexWP
              items={'center'}
              justify={'between'}
              gap={4}
              style={{
                maxWidth: '846px',
                justifyContent: 'space-between',
                margin: '0 auto',
              }}
            >
              <Controls.ButtonWP variant={'secondary'} onClick={n}>
                {(0, I18n.__)('Back', 'ohmylms')}
              </Controls.ButtonWP>
              <Controls.FlexWP items={'center'} justify={'end'} gap={3}>
                {0 !== u.length || m ? (
                  <Controls.ButtonWP variant={'primary'} onClick={M} disabled={0 === v.length || m}>
                    {(0, I18n.__)('Continue', 'ohmylms')}
                  </Controls.ButtonWP>
                ) : (
                  <Controls.ButtonWP variant={'primary'} onClick={F}>
                    {(0, I18n.__)('Skip', 'ohmylms')}
                  </Controls.ButtonWP>
                )}
              </Controls.FlexWP>
            </Controls.FlexWP>
          </Controls.SpacerWP>
        </Controls.ContainerWP>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Gte
          level={null == a ? void 0 : a.level}
          currentStep={
            'experienced' == (null == a ? void 0 : a.level) ||
            'intermediate' == (null == a ? void 0 : a.level)
              ? 2
              : 0
          }
          isShowIndicator={!0}
        />
        <Controls.ContainerWP>
          <div className={'omlms-setup-wizard__container'}>
            <div className={'omlms-setup-wizard__header'}>
              <Controls.HeadingWP
                as={'h2'}
                color={'#000d25'}
                size={'24'}
                align={'center'}
                weight={'600'}
              >
                {(0, I18n.__)('🤝 Your Migration Assistant', 'ohmylms')}
              </Controls.HeadingWP>
              <Controls.TextWP
                as={'p'}
                size={'18'}
                color={'#687784'}
                align={'center'}
                weight={'400'}
                style={{
                  maxWidth: '400px',
                  margin: 'auto',
                }}
              >
                {(0, I18n.__)('Your data is safe. We migrate with care.', 'ohmylms')}
              </Controls.TextWP>
            </div>
            <Controls.FlexWP
              direction={'column'}
              gap={6}
              items={'center'}
              justify={'center'}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Controls.CardWP
                isBorderless={!0}
                style={{
                  width: '768px',
                  padding: '32px',
                }}
              >
                <div
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    border: '1px solid rgba(200, 210, 233, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 9px',
                    width: '100%',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px',
                    }}
                  >
                    <img
                      src={O.icon}
                      alt={O.label}
                      style={{
                        width: '29px',
                        height: '29px',
                      }}
                    />
                    <Controls.TextWP size={'18'} weight={'600'} color={'#000d25'}>
                      {O.label}
                    </Controls.TextWP>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      padding: '8px',
                    }}
                  >
                    <Controls.TextWP size={'12'} color={'#687784'}>
                      {(0, I18n.__)('Progress', 'ohmylms')}
                    </Controls.TextWP>
                    <Controls.TextWP
                      size={'16'}
                      weight={'600'}
                      color={R >= 2 + v.length ? '#22C55E' : '#6e42d3'}
                    >
                      {Math.min(R, 2 + v.length)}
                      {'/'}
                      {2 + v.length}
                    </Controls.TextWP>
                  </div>
                </div>
                <div
                  style={{
                    height: '8px',
                    background: '#F0F0F1',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: ''.concat((Math.min(R, 2 + v.length) / (2 + v.length)) * 100, '%'),
                      background: '#22C55E',
                      transition: 'width 0.5s ease',
                    }}
                  />
                </div>
              </Controls.CardWP>
              <Controls.CardWP
                isBorderless={!0}
                style={{
                  width: '704px',
                  padding: '32px',
                  background: '#F6F7F9',
                }}
              >
                <Controls.HeadingWP
                  size={'18'}
                  weight={'600'}
                  style={{
                    marginBottom: '20px',
                  }}
                >
                  {(0, I18n.__)('Migration Checklist', 'ohmylms')}
                </Controls.HeadingWP>
                <Controls.FlexWP direction={'column'} gap={4}>
                  {React.createElement(qne, {
                    title: (0, I18n.__)('Platform Connection', 'ohmylms'),
                    desc: (0, I18n.__)('Securely connecting to your account', 'ohmylms'),
                    status: R >= 1 ? 'complete' : 0 === R ? 'processing' : 'pending',
                  })}
                  {React.createElement(qne, {
                    title: (0, I18n.__)('Content Found', 'ohmylms'),
                    desc: (0, I18n.__)(
                      'Found '
                        .concat(v.length, ' course')
                        .concat(1 !== v.length ? 's' : '', ' to import'),
                      'ohmylms',
                    ),
                    status: R >= 2 ? 'complete' : 1 === R ? 'processing' : 'pending',
                  })}
                  {v.map(function (e, t) {
                    var n = u.find(function (t) {
                        return t.id === e;
                      }),
                      r = 3 + t,
                      a = 'pending';
                    return (
                      R > r ? (a = 'complete') : R === r && (a = 'processing'),
                      React.createElement(qne, {
                        key: e,
                        title: (0, I18n.__)('Importing Course', 'ohmylms'),
                        desc: (null == n ? void 0 : n.title) || 'Course '.concat(e),
                        status: a,
                      })
                    );
                  })}
                </Controls.FlexWP>
              </Controls.CardWP>
            </Controls.FlexWP>
          </div>
        </Controls.ContainerWP>
      </React.Fragment>
    );
  };
}
