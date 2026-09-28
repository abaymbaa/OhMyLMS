/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createMigrationProgressModal(readRuntime) {
  return function MigrationProgressModal(props) {
    const {
      I: Controls,
      M4,
      N4,
      React,
      T: StoreModule,
      T4,
      b: I18n,
      f: Router,
      g: ReactHooks,
      j4,
      y: WordPressData,
    } = readRuntime();
    props.lms;
    var t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = (0, Router.Zp)(),
      r = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMigrationModalOpen();
      }, []),
      a = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMigrationStatus();
      }, []),
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMigrationCourses();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMigrationToolCourses();
      }, []),
      l = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMigratedCourse();
      }, []),
      c = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getMigrationTool();
      }, []),
      u = (function (e, t) {
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
              if ('string' == typeof e) return T4(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? T4(e, t)
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
      s = u[0],
      d = u[1],
      m = (0, ReactHooks.useRef)(!1);
    ((0, ReactHooks.useEffect)(
      function () {
        if (r && 'migrating' === a && !m.current && c && 0 !== o.length) {
          ((m.current = !0), t.setMigratedCourse([]));
          var e = (function () {
            var e,
              n =
                ((e = j4().m(function e() {
                  var n, r;
                  return j4().w(
                    function (e) {
                      for (;;)
                        switch ((e.p = e.n)) {
                          case 0:
                            ((e.p = 0), (n = 0));
                          case 1:
                            if (!(n < o.length)) {
                              e.n = 3;
                              break;
                            }
                            return ((e.n = 2), t.migrateSingleCourse(c, o[n]));
                          case 2:
                            (n++, (e.n = 1));
                            break;
                          case 3:
                            e.n = 5;
                            break;
                          case 4:
                            ((e.p = 4), (r = e.v), console.error('Migration failed', r));
                          case 5:
                            return ((e.p = 5), t.setMigrationStatus(null), d(!0), e.f(5));
                          case 6:
                            return e.a(2);
                        }
                    },
                    e,
                    null,
                    [[0, 4, 5, 6]],
                  );
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, a) {
                    var o = e.apply(t, n);
                    function i(e) {
                      M4(o, r, a, i, l, 'next', e);
                    }
                    function l(e) {
                      M4(o, r, a, i, l, 'throw', e);
                    }
                    i(void 0);
                  });
                });
            return function () {
              return n.apply(this, arguments);
            };
          })();
          e();
        }
      },
      [r, a],
    ),
      (0, ReactHooks.useEffect)(
        function () {
          r || ((m.current = !1), d(!1), t.setMigratedCourse([]));
        },
        [r],
      ));
    var p = (0, ReactHooks.useCallback)(
        function () {
          'migrating' !== a &&
            (t.setMigrationModalOpen(!1),
            t.setMigrationStatus(null),
            t.setMigrationCourses([]),
            t.setMigratedCourse([]),
            d(!1),
            (m.current = !1));
        },
        [a],
      ),
      v = (0, ReactHooks.useCallback)(function () {
        (t.setMigrationModalOpen(!1),
          t.setMigrationStatus(null),
          t.setMigrationCourses([]),
          t.setMigratedCourse([]),
          d(!1),
          (m.current = !1),
          n('/courses'));
      }, []);
    if (!r) return null;
    var h = o.length,
      _ = l.length,
      w = h > 0 ? Math.round((_ / h) * 100) : 0,
      E = _ < h ? _ : -1;
    return s ? (
      <Controls.ModalWP
        title={''}
        onRequestClose={p}
        style={{
          maxWidth: '720px',
          width: '100%',
        }}
      >
        <div
          style={{
            padding: '56px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '56px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Controls.HeadingWP
              as={'h2'}
              size={'40px'}
              weight={'700'}
              color={'#000d25'}
              style={{
                margin: 0,
                lineHeight: '1.4',
                letterSpacing: '-0.4px',
                textAlign: 'center',
              }}
            >
              {'🎉 '}
              {(0, I18n.__)('Migration Complete!', 'ohmylms')}
              <br />
              {(0, I18n.__)('Your courses are safe.', 'ohmylms')}
            </Controls.HeadingWP>
            <Controls.TextWP
              as={'p'}
              size={'18'}
              weight={'500'}
              color={'#687784'}
              style={{
                margin: 0,
                maxWidth: '668px',
                lineHeight: '1.3',
                textAlign: 'center',
              }}
            >
              {(0, I18n.__)(
                'Your courses have been successfully imported. Everything is safe and private — ready for you to review and refine.',
                'ohmylms',
              )}
            </Controls.TextWP>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Controls.ButtonWP variant={'primary'} onClick={v}>
              <Controls.TextWP size={'16px'} color={'#FFFFFF'}>
                {(0, I18n.__)('Go to My Courses', 'ohmylms')}
              </Controls.TextWP>
            </Controls.ButtonWP>
            <Controls.TextWP
              as={'p'}
              size={'14'}
              color={'#687784'}
              style={{
                margin: 0,
                textAlign: 'center',
                maxWidth: '452px',
              }}
            >
              {(0, I18n.__)(
                'Nothing is published yet. Review your course whenever you like.',
                'ohmylms',
              )}
            </Controls.TextWP>
          </div>
        </div>
      </Controls.ModalWP>
    ) : (
      <Controls.ModalWP
        title={(0, I18n.__)('Content migration', 'ohmylms')}
        onRequestClose={p}
        style={{
          maxWidth: '720px',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              background: 'white',
              border: '1px solid rgba(200,210,233,0.5)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 9px',
            }}
          >
            <div
              style={{
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Controls.TextWP
                as={'p'}
                size={'18'}
                weight={'600'}
                color={'#000d25'}
                style={{
                  margin: 0,
                }}
              >
                {(0, I18n.__)('Migration Progress', 'ohmylms')}
              </Controls.TextWP>
              <Controls.TextWP
                as={'p'}
                size={'14'}
                weight={'500'}
                color={'#000d25'}
                style={{
                  margin: 0,
                  letterSpacing: '-0.14px',
                }}
              >
                {(0, I18n.__)('Migrating your content...', 'ohmylms')}
              </Controls.TextWP>
            </div>
            <div
              style={{
                padding: '8px',
                textAlign: 'right',
              }}
            >
              <Controls.TextWP
                as={'p'}
                size={'14'}
                color={'#444d5e'}
                style={{
                  margin: '0 0 4px',
                }}
              >
                {(0, I18n.__)('Progress', 'ohmylms')}
              </Controls.TextWP>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#0cae32',
                  letterSpacing: '-0.44px',
                }}
              >
                {_}
                {' / '}
                {h}
              </span>
            </div>
          </div>
          <div
            style={{
              height: '12px',
              backgroundColor: 'rgba(200,210,233,0.5)',
              borderRadius: '9999px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: ''.concat(w, '%'),
                backgroundColor: '#0cae32',
                borderRadius: '9999px',
                transition: 'width 0.5s ease',
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: '#f4f5f7',
              borderRadius: '8px',
              padding: '24px 24px 30px',
            }}
          >
            <Controls.TextWP
              as={'p'}
              size={'18'}
              weight={'600'}
              color={'#000d25'}
              style={{
                margin: '0 0 24px',
              }}
            >
              {(0, I18n.__)('Migration Checklist', 'ohmylms')}
            </Controls.TextWP>
            <Controls.FlexWP direction={'column'} gap={3}>
              {o.map(function (e, t) {
                var n = i.find(function (t) {
                    return t.value === e;
                  }),
                  r = (null == n ? void 0 : n.label) || String(e),
                  a = l.includes(e) ? 'complete' : t === E ? 'processing' : 'pending';
                return <N4 key={e} label={r} index={t} status={a} />;
              })}
            </Controls.FlexWP>
          </div>
        </div>
      </Controls.ModalWP>
    );
  };
}
