/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createSetupNiche(readRuntime) {
  return function SetupNiche(props) {
    const {
      Cne,
      Ene,
      Gte,
      I: Controls,
      Pne,
      React,
      T: StoreModule,
      X0,
      _ne,
      b: I18n,
      g: ReactHooks,
      hB,
      m,
      une,
      wne,
      xne,
      y: WordPressData,
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o = props.onTabChange,
      i = props.onWizardSkip,
      l = (0, WordPressData.useDispatch)(StoreModule.default),
      c = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getSetupWizardData();
      }, []),
      u = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCurrencySettings();
      }, []),
      s = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getDesignSettings();
      }, []),
      d = (function (e, t) {
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
          Pne(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })((0, ReactHooks.useState)(!1), 2),
      p = d[0],
      f = d[1],
      v = [].concat(
        Cne(
          null !== (t = window) &&
            void 0 !== t &&
            null !== (t = t.ohmylms_params) &&
            void 0 !== t &&
            t.is_tutor_lms_active
            ? [
                {
                  label: (0, I18n.__)('Tutor LMS', 'ohmylms'),
                  value: 'tutorLMS',
                },
              ]
            : [],
        ),
        Cne(
          null !== (n = window) &&
            void 0 !== n &&
            null !== (n = n.ohmylms_params) &&
            void 0 !== n &&
            n.is_learndash_lms_active
            ? [
                {
                  label: (0, I18n.__)('LearnDash', 'ohmylms'),
                  value: 'learnDash',
                },
              ]
            : [],
        ),
        Cne(
          null !== (r = window) &&
            void 0 !== r &&
            null !== (r = r.ohmylms_params) &&
            void 0 !== r &&
            r.is_learnpress_active
            ? [
                {
                  label: (0, I18n.__)('LearnPress', 'ohmylms'),
                  value: 'learnPress',
                },
              ]
            : [],
        ),
        Cne(
          null !== (a = window) &&
            void 0 !== a &&
            null !== (a = a.ohmylms_params) &&
            void 0 !== a &&
            a.is_masterstudy_active
            ? [
                {
                  label: (0, I18n.__)('MasterStudy LMS', 'ohmylms'),
                  value: 'masterStudy',
                },
              ]
            : [],
        ),
      ),
      h = v.length > 0,
      _ = (function () {
        var e = xne(
          Ene().m(function e() {
            var t, n, r;
            return Ene().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (c.certificate) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2, null);
                    case 1:
                      if (
                        ((e.p = 1),
                        (t = hB.find(function (e) {
                          return e.id === c.certificate;
                        })))
                      ) {
                        e.n = 2;
                        break;
                      }
                      return e.a(2, null);
                    case 2:
                      return (
                        (e.n = 3),
                        m({
                          path: '/ohmylms/v1/certificates/',
                          method: 'POST',
                          data: {
                            name: 'Certificate Template '.concat(c.certificate),
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
      w = (function () {
        var e = xne(
          Ene().m(function e() {
            var t, n, r, a, o, i, d, m, p, f, v, g, h, y, b, w;
            return Ene().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return ((e.p = 0), (e.n = 1), _());
                    case 1:
                      return (
                        (y = e.v),
                        (b = {
                          optin: {
                            ohmylms_allow_tracking: null != c && c.isOptEnabled ? 'yes' : 'no',
                          },
                          language: null !== (t = c.language) && void 0 !== t ? t : 'en_US',
                          certificate: c.certificate,
                          certificate_id: y,
                          niche: c.niche ? [c.niche] : [],
                          level: c.level,
                          design: {
                            ohmylms_archive_page_layout:
                              null !== (n = c.archive_page_layout) && void 0 !== n
                                ? n
                                : null === (r = s.ohmylms_archive_page_layout) || void 0 === r
                                  ? void 0
                                  : r.value,
                            ohmylms_columns_per_row:
                              c.courses_per_row ||
                              (null === (a = s.ohmylms_columns_per_row) || void 0 === a
                                ? void 0
                                : a.value) ||
                              4,
                            ohmylms_courses_per_page:
                              c.courses_per_page ||
                              (null === (o = s.ohmylms_courses_per_page) || void 0 === o
                                ? void 0
                                : o.value) ||
                              10,
                          },
                          currency: {
                            ohmylms_currency:
                              null !== (i = c.currency) && void 0 !== i
                                ? i
                                : null == u || null === (d = u.ohmylms_currency) || void 0 === d
                                  ? void 0
                                  : d.value,
                            ohmylms_currency_pos:
                              (null == u || null === (m = u.ohmylms_currency_pos) || void 0 === m
                                ? void 0
                                : m.value) || 'left',
                            ohmylms_price_thousand_sep:
                              (null == u ||
                              null === (p = u.ohmylms_price_thousand_sep) ||
                              void 0 === p
                                ? void 0
                                : p.value) || ',',
                            ohmylms_price_decimal_sep:
                              (null == u ||
                              null === (f = u.ohmylms_price_decimal_sep) ||
                              void 0 === f
                                ? void 0
                                : f.value) || '.',
                            ohmylms_price_num_decimals:
                              (null == u ||
                              null === (v = u.ohmylms_price_num_decimals) ||
                              void 0 === v
                                ? void 0
                                : v.value) || '2',
                          },
                          contact: {
                            email:
                              null != c && c.isOptEnabled
                                ? null === (g = window.ohmylms_params) || void 0 === g
                                  ? void 0
                                  : g.admin_email
                                : '',
                            name:
                              null != c && c.isOptEnabled
                                ? null === (h = window.ohmylms_params) || void 0 === h
                                  ? void 0
                                  : h.admin_name
                                : '',
                          },
                          wizard_data: c,
                        }),
                        (e.n = 2),
                        l.saveSetup(b)
                      );
                    case 2:
                      return ((e.n = 3), S(null == c ? void 0 : c.niche));
                    case 3:
                      (y &&
                        l.setSetupWizardData({
                          certificate_id: y,
                        }),
                        (e.n = 5));
                      break;
                    case 4:
                      ((e.p = 4), (w = e.v), console.error('Error saving setup wizard data:', w));
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
      E = function () {
        'beginner' === (null == c ? void 0 : c.level)
          ? o('wizard-preferences')
          : 'intermediate' === (null == c ? void 0 : c.level)
            ? o('wizard-completion')
            : null != c && c.migrate_courses
              ? (h &&
                  1 === v.length &&
                  l.setSetupWizardData({
                    selectedPlatform: v[0].value,
                    skipPlatformSelection: !0,
                  }),
                o('wizard-creation'))
              : o('wizard-completion');
      },
      S = (function () {
        var e = xne(
          Ene().m(function e(t) {
            var n, r, a, o;
            return Ene().w(
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
                        (r = une[t].data),
                        (e.n = 2),
                        m({
                          path: '/ohmylms/v1/setup-wizard/import-course',
                          method: 'POST',
                          data: r,
                          headers: {
                            nonce: window.ohmylms_params.setup_wizard_nonce,
                          },
                        })
                      );
                    case 2:
                      (null != (a = e.v) &&
                        null !== (n = a.course_ids) &&
                        void 0 !== n &&
                        n.length &&
                        l.setSetupWizardData({
                          imported_course_ids: a.course_ids,
                        }),
                        (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3), (o = e.v), console.error('Error importing sample course:', o));
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
      R = (function () {
        var e = xne(
          Ene().m(function e() {
            return Ene().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    if (!p) {
                      e.n = 1;
                      break;
                    }
                    return e.a(2);
                  case 1:
                    if (
                      'intermediate' !== (null == c ? void 0 : c.level) &&
                      ('experienced' !== (null == c ? void 0 : c.level) ||
                        (null != c && c.migrate_courses && h))
                    ) {
                      e.n = 3;
                      break;
                    }
                    return (f(!0), (e.n = 2), w());
                  case 2:
                    f(!1);
                  case 3:
                    E();
                  case 4:
                    return e.a(2);
                }
            }, e);
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      x = (function () {
        var e = xne(
          Ene().m(function e() {
            var t, n, r, a, o, i, d, m, p, f, v, g, h, y, b, w;
            return Ene().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return ((e.p = 0), (e.n = 1), _());
                    case 1:
                      return (
                        (y = e.v),
                        (b = {
                          optin: {
                            ohmylms_allow_tracking: null != c && c.isOptEnabled ? 'yes' : 'no',
                          },
                          language: null !== (t = c.language) && void 0 !== t ? t : 'en_US',
                          certificate: c.certificate,
                          certificate_id: y,
                          level: c.level,
                          design: {
                            ohmylms_archive_page_layout:
                              null !== (n = c.archive_page_layout) && void 0 !== n
                                ? n
                                : null === (r = s.ohmylms_archive_page_layout) || void 0 === r
                                  ? void 0
                                  : r.value,
                            ohmylms_columns_per_row:
                              c.courses_per_row ||
                              (null === (a = s.ohmylms_columns_per_row) || void 0 === a
                                ? void 0
                                : a.value) ||
                              4,
                            ohmylms_courses_per_page:
                              c.courses_per_page ||
                              (null === (o = s.ohmylms_courses_per_page) || void 0 === o
                                ? void 0
                                : o.value) ||
                              10,
                          },
                          currency: {
                            ohmylms_currency:
                              null !== (i = c.currency) && void 0 !== i
                                ? i
                                : null == u || null === (d = u.ohmylms_currency) || void 0 === d
                                  ? void 0
                                  : d.value,
                            ohmylms_currency_pos:
                              (null == u || null === (m = u.ohmylms_currency_pos) || void 0 === m
                                ? void 0
                                : m.value) || 'left',
                            ohmylms_price_thousand_sep:
                              (null == u ||
                              null === (p = u.ohmylms_price_thousand_sep) ||
                              void 0 === p
                                ? void 0
                                : p.value) || ',',
                            ohmylms_price_decimal_sep:
                              (null == u ||
                              null === (f = u.ohmylms_price_decimal_sep) ||
                              void 0 === f
                                ? void 0
                                : f.value) || '.',
                            ohmylms_price_num_decimals:
                              (null == u ||
                              null === (v = u.ohmylms_price_num_decimals) ||
                              void 0 === v
                                ? void 0
                                : v.value) || '2',
                          },
                          contact: {
                            email:
                              null != c && c.isOptEnabled
                                ? null === (g = window.ohmylms_params) || void 0 === g
                                  ? void 0
                                  : g.admin_email
                                : '',
                            name:
                              null != c && c.isOptEnabled
                                ? null === (h = window.ohmylms_params) || void 0 === h
                                  ? void 0
                                  : h.admin_name
                                : '',
                          },
                          wizard_data: c,
                        }),
                        (e.n = 2),
                        l.saveSetup(b)
                      );
                    case 2:
                      (y &&
                        l.setSetupWizardData({
                          certificate_id: y,
                        }),
                        (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3), (w = e.v), console.error('Error saving setup wizard data:', w));
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 3]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      C = [
        {
          label: (0, I18n.__)('Digital Marketing & Growth', 'ohmylms'),
          value: 'digital-marketing-growth',
        },
        {
          label: (0, I18n.__)('Tech Skills', 'ohmylms'),
          value: 'tech-skills',
        },
        {
          label: (0, I18n.__)('Creator Economy', 'ohmylms'),
          value: 'creator-economy',
        },
        {
          label: (0, I18n.__)('Others', 'ohmylms'),
          value: 'others',
        },
      ],
      P = [
        {
          label: h
            ? (0, I18n.__)('Yes, migrate my content', 'ohmylms')
            : (0, I18n.__)('Yes, import a course', 'ohmylms'),
          id: !0,
        },
        {
          label: (0, I18n.__)('No, start fresh', 'ohmylms'),
          id: !1,
        },
      ];
    return (
      <React.Fragment>
        <Gte
          level={null == c ? void 0 : c.level}
          currentStep={
            'experienced' == (null == c ? void 0 : c.level) ||
            'intermediate' == (null == c ? void 0 : c.level)
              ? 1
              : 0
          }
          isShowIndicator={!0}
          onSkip={function () {
            return null == i ? void 0 : i('niche');
          }}
        />
        <Controls.ContainerWP>
          <div
            className={
              'ohmylms-setup-wizard-level-selection-wrapper ohmylms-setup-wizard-card-wrapper'
            }
          >
            <div className={'ohmylms-setup-wizard__container'}>
              <div className={'ohmylms-setup-wizard__header'}>
                <Controls.HeadingWP
                  as={'h2'}
                  color={'#000d25'}
                  size={'24'}
                  align={'center'}
                  weight={'600'}
                >
                  {(0, I18n.__)('Your journey starts here!', 'ohmylms')}
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
                  {(0, I18n.__)(
                    "Tell us what you want to achieve first. We'll guide you step by step",
                    'ohmylms',
                  )}
                </Controls.TextWP>
              </div>
              <Controls.FlexWP
                direction={'column'}
                gap={6}
                style={{
                  minWidth: '780px',
                }}
              >
                <Controls.CardWP isBorderless={!0}>
                  <Controls.SpacerWP padding={6} marginBottom={0}>
                    <Controls.FlexWP gap={3} direction={'column'}>
                      <X0.A as={'h3'} size={'18'} color={'#000D25'} weight={'600'}>
                        {(0, I18n.__)("What's your course niche?", 'ohmylms')}
                      </X0.A>
                      <wne.A
                        selected={(null == c ? void 0 : c.niche) || ''}
                        onChange={function (e) {
                          return l.setSetupWizardData({
                            niche: e,
                          });
                        }}
                        options={C}
                        className={'ohmylms-setup-wizard-niche-options'}
                      />
                      <Controls.TextWP as={'p'} size={'12'} weight={'400'} color={'#687784'}>
                        {(0, I18n.__)(
                          "Don't overthink it - you can change this anytime.",
                          'ohmylms',
                        )}
                      </Controls.TextWP>
                    </Controls.FlexWP>
                  </Controls.SpacerWP>
                </Controls.CardWP>
                {'experienced' == (null == c ? void 0 : c.level) && h && (
                  <Controls.CardWP
                    isBorderless={!0}
                    style={{
                      width: '768px',
                    }}
                  >
                    <Controls.SpacerWP padding={6} marginBottom={0}>
                      <Controls.FlexWP gap={3} direction={'column'}>
                        <X0.A as={'h3'} size={'18'} color={'#000D25'} weight={'600'}>
                          {(function () {
                            if (h) {
                              var e,
                                t = v.map(function (e) {
                                  return e.label;
                                });
                              return (
                                (e =
                                  1 === t.length
                                    ? t[0]
                                    : 2 === t.length
                                      ? t.join(' or ')
                                      : t.slice(0, -1).join(', ') + ', or ' + t[t.length - 1]),
                                (0, I18n.__)(
                                  'Do you want to migrate your courses from '.concat(e, '?'),
                                  'ohmylms',
                                )
                              );
                            }
                            return (0, I18n.__)('Do you want to import a course?', 'ohmylms');
                          })()}
                        </X0.A>
                        <Controls.FlexWP
                          flexWrap={'wrap'}
                          gap={3}
                          align={'start'}
                          justify={'start'}
                        >
                          {P.map(function (e, t) {
                            return (
                              <_ne
                                key={t}
                                checked={e.id === (null == c ? void 0 : c.migrate_courses)}
                                onChange={function () {
                                  return l.setSetupWizardData({
                                    migrate_courses: e.id,
                                  });
                                }}
                                label={e.label}
                                id={e.id}
                              />
                            );
                          })}
                        </Controls.FlexWP>
                        <Controls.TextWP
                          as={'p'}
                          size={'12'}
                          weight={'400'}
                          color={void 0 === c.migrate_courses ? '#687784' : '#6E42D3'}
                        >
                          {c.migrate_courses
                            ? (0, I18n.__)(
                                'Nothing will be imported without your approval.',
                                'ohmylms',
                              )
                            : !1 === c.migrate_courses
                              ? h
                                ? (0, I18n.__)(
                                    'You can always migrate later if you change your mind.',
                                    'ohmylms',
                                  )
                                : (0, I18n.__)(
                                    'You can always import later if you change your mind.',
                                    'ohmylms',
                                  )
                              : (0, I18n.__)(
                                  'This is completely optional — you can start fresh if you like.',
                                  'ohmylms',
                                )}
                        </Controls.TextWP>
                      </Controls.FlexWP>
                    </Controls.SpacerWP>
                  </Controls.CardWP>
                )}
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
              <Controls.ButtonWP
                variant={'secondary'}
                onClick={function () {
                  'beginner' === (null == c ? void 0 : c.level)
                    ? o('wizard-level-selection')
                    : o('wizard-preferences');
                }}
              >
                {(0, I18n.__)('Back', 'ohmylms')}
              </Controls.ButtonWP>
              <Controls.FlexWP items={'center'} justify={'end'} gap={6}>
                <Controls.ButtonWP
                  variant={'tertiary'}
                  onClick={function () {
                    (l.setSetupWizardData({
                      niche: null,
                    }),
                      x(),
                      E());
                  }}
                  disabled={p}
                >
                  {(0, I18n.__)('Skip this step', 'ohmylms')}
                </Controls.ButtonWP>
                <Controls.ButtonWP variant={'primary'} onClick={R} isBusy={p}>
                  {(0, I18n.__)('Continue', 'ohmylms')}
                </Controls.ButtonWP>
              </Controls.FlexWP>
            </Controls.FlexWP>
          </Controls.SpacerWP>
        </Controls.ContainerWP>
      </React.Fragment>
    );
  };
}
