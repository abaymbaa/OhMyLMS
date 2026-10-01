/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createMigrationImport(readRuntime) {
  return function MigrationImport() {
    const {
      He,
      I: Controls,
      L: Entitlements,
      React,
      T: StoreModule,
      a6,
      b: I18n,
      f: Router,
      g: ReactHooks,
      i6,
      l6,
      r6: MemoMigrationFileDropzone,
      u6,
      y: WordPressData,
    } = readRuntime();
    var e = l6((0, ReactHooks.useState)(!1), 2),
      t = e[0],
      n = e[1],
      r = l6((0, ReactHooks.useState)(null), 2),
      a = r[0],
      o = r[1],
      i = l6((0, ReactHooks.useState)('json'), 2),
      l = i[0],
      c = i[1],
      u = l6((0, ReactHooks.useState)(!1), 2),
      s = u[0],
      d = u[1],
      m = (0, WordPressData.useDispatch)(StoreModule.default),
      p = (0, Router.Zp)(),
      v = true,
      h = (function () {
        var e,
          t =
            ((e = a6().m(function e() {
              var t, r, o;
              return a6().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        if ('json' !== l || v) {
                          e.n = 1;
                          break;
                        }
                        return (d(!0), e.a(2));
                      case 1:
                        if (a) {
                          e.n = 2;
                          break;
                        }
                        return e.a(2);
                      case 2:
                        if (((e.p = 2), n(!0), 'scorm' !== l)) {
                          e.n = 4;
                          break;
                        }
                        return ((e.n = 3), m.importScormCourse(a));
                      case 3:
                        ((r = e.v), (e.n = 6));
                        break;
                      case 4:
                        return ((e.n = 5), m.importCourse(a));
                      case 5:
                        r = e.v;
                      case 6:
                        (null != (t = r) && t.success && p('/courses'), (e.n = 8));
                        break;
                      case 7:
                        ((e.p = 7), (o = e.v), console.error('Error importing course:', o));
                      case 8:
                        return ((e.p = 8), n(!1), e.f(8));
                      case 9:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[2, 7, 8, 9]],
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  i6(o, r, a, i, l, 'next', e);
                }
                function l(e) {
                  i6(o, r, a, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    return (
      <React.Fragment>
        <Controls.CardWP isBorderless={!0} padding={'24px'}>
          <Controls.CardWP isBorderless={!0} variant={'secondary'} padding={'24px 16px'}>
            <Controls.FlexWP
              direction={'column'}
              gap={6}
              justify={'center'}
              align={'center'}
              style={{
                textAlign: 'center',
                minHeight: '258px',
              }}
            >
              {React.createElement(u6, null)}
              <Controls.HeadingWP
                as={'h3'}
                size={'20'}
                weight={'400'}
                color={'#444d5e'}
                style={{
                  margin: 0,
                }}
              >
                {(0, I18n.__)('No supported plugin detected on this site.', 'ohmylms')}
              </Controls.HeadingWP>
              <Controls.TextWP
                as={'p'}
                size={'14'}
                color={'#000d25'}
                align={'center'}
                weight={'400'}
                style={{
                  margin: 0,
                  maxWidth: '729px',
                }}
              >
                {(0, I18n.__)('We currently support migration from ', 'ohmylms')}
                <strong>
                  {(0, I18n.__)('Tutor LMS, LearnPress, LearDash and MasterStudy LMS. ', 'ohmylms')}
                </strong>
                {(0, I18n.__)(
                  'To use migration, please install and activate the supported platform on the same site as CLMS or use ',
                  'ohmylms',
                )}
                <strong>{(0, I18n.__)('Import option', 'ohmylms')}</strong>
                {(0, I18n.__)('.', 'ohmylms')}
              </Controls.TextWP>
            </Controls.FlexWP>
          </Controls.CardWP>
          <Controls.SpacerWP marginBottom={0} marginTop={12}>
            <Controls.HeadingWP as={'h4'} size={'18px'} color={'#000D25'} weight={'600'}>
              {(0, I18n.__)('You can import your data instead', 'ohmylms')}
            </Controls.HeadingWP>
            <Controls.SpacerWP marginBottom={0} marginTop={6}>
              <MemoMigrationFileDropzone
                onFileChange={function (e, t) {
                  'json' !== t || v ? (o(e), c(t)) : d(!0);
                }}
                jsonImportEnabled={v}
              />
            </Controls.SpacerWP>
          </Controls.SpacerWP>
        </Controls.CardWP>
        <Controls.SpacerWP padding={0} marginBottom={0} marginTop={4}>
          <Controls.FlexWP justify={'flex-end'}>
            <Controls.ButtonWP
              variant={'primary'}
              size={'md'}
              onClick={h}
              isBusy={t}
              disabled={!a || t}
            >
              {(0, I18n.__)('Import', 'ohmylms')}
            </Controls.ButtonWP>
          </Controls.FlexWP>
        </Controls.SpacerWP>
        {s && <He.default isOpen={s} onClose={d} />}
      </React.Fragment>
    );
  };
}
