/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCertificateTemplateCard(readRuntime) {
  return function CertificateTemplateCard(props) {
    const {
      CB,
      I: Controls,
      Kee,
      L: Entitlements,
      React,
      T: StoreModule,
      Xee,
      b: I18n,
      ete,
      f: Router,
      g: ReactHooks,
      l,
      y: WordPressData,
    } = readRuntime();
    (0, Entitlements.useIsPro)();
    var t = props.template,
      n = props.setOpenModal,
      r =
        ((0, WordPressData.useDispatch)(StoreModule.default),
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).selectCertificates();
        }, []),
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).selectTotalCertificatesNumber();
        }, []),
        ete((0, ReactHooks.useState)(!1), 2)),
      a = (r[0], r[1], ete((0, ReactHooks.useState)(!1), 2)),
      o = a[0],
      i = a[1],
      c = (0, Router.Zp)(),
      u = (function () {
        var e,
          r =
            ((e = Kee().m(function e() {
              var r, a, o, u;
              return Kee().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.p = 0),
                          i(!0),
                          (a = {
                            name: 'Untitled',
                            status: 'publish',
                            contents: (null == t ? void 0 : t.contents) || {},
                            html_contents: CB(
                              null == t || null === (r = t.contents) || void 0 === r
                                ? void 0
                                : r.elements,
                            ),
                          }),
                          (e.n = 1),
                          l()({
                            path: '/creator-lms/v1/certificates',
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(a),
                          })
                        );
                      case 1:
                        ((o = e.v), n(!1), c('/certificate-edit/'.concat(o.id)), (e.n = 3));
                        break;
                      case 2:
                        ((e.p = 2), (u = e.v), console.error(u));
                      case 3:
                        return ((e.p = 3), i(!1), e.f(3));
                      case 4:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[0, 2, 3, 4]],
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  Xee(o, r, a, i, l, 'next', e);
                }
                function l(e) {
                  Xee(o, r, a, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function () {
          return r.apply(this, arguments);
        };
      })();
    return (
      <React.Fragment>
        <Controls.CardWP>
          <Controls.SpacerWP padding={2}>
            <Controls.FlexWP align={'center'} justify={'center'} direction={'column'} gap={2}>
              <img
                src={null == t ? void 0 : t.image_src}
                alt={(0, I18n.__)('Certificate Template', 'ohmylms')}
                style={{
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
              <Controls.ButtonWP
                variant={'primary'}
                onClick={function () {
                  return u(null == t ? void 0 : t.id);
                }}
                loading={o}
                tabIndex={0}
                data-template-btn={!0}
                onKeyDown={function (e) {
                  ('Enter' !== e.key && ' ' !== e.key) || u(null == t ? void 0 : t.id);
                }}
              >
                {(0, I18n.__)('Use this template', 'ohmylms')}
              </Controls.ButtonWP>
            </Controls.FlexWP>
          </Controls.SpacerWP>
        </Controls.CardWP>
      </React.Fragment>
    );
  };
}
