/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createGoogleSignInSettings(readRuntime) {
  return function GoogleSignInSettings(props) {
    const { E7, I: Controls, Pf, React, S7, _7, b: I18n, b7, g: ReactHooks, g7, l } = readRuntime();
    var t = props.onSave,
      n = props.onCancel,
      r = S7(
        (0, ReactHooks.useState)({
          client_id: '',
          client_secret: '',
        }),
        2,
      ),
      a = r[0],
      o = r[1],
      i = S7((0, ReactHooks.useState)(!1), 2),
      c = i[0],
      u = i[1],
      s = S7((0, ReactHooks.useState)(''), 2),
      d = s[0],
      m = s[1],
      p = S7((0, ReactHooks.useState)(!1), 2),
      f = p[0],
      v = p[1],
      h = S7((0, ReactHooks.useState)({}), 2),
      y = h[0],
      _ = h[1],
      w = S7((0, ReactHooks.useState)(!0), 2),
      E = w[0],
      S = w[1];
    (0, ReactHooks.useEffect)(function () {
      var e = !0;
      function t() {
        return (t = E7(
          g7().m(function t() {
            var n;
            return g7().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      return (
                        (t.p = 0),
                        (t.n = 1),
                        l()({
                          path: '/creator-lms/v1/auth/google/settings',
                        })
                      );
                    case 1:
                      ((n = t.v),
                        e &&
                          n &&
                          (o(function (e) {
                            return b7(
                              b7({}, e),
                              {},
                              {
                                client_id: n.client_id || '',
                              },
                            );
                          }),
                          u(!!n.has_client_secret),
                          m(n.redirect_uri || '')),
                        (t.n = 3));
                      break;
                    case 2:
                      ((t.p = 2), t.v);
                    case 3:
                      return ((t.p = 3), e && S(!1), t.f(3));
                    case 4:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        )).apply(this, arguments);
      }
      return (
        (function () {
          t.apply(this, arguments);
        })(),
        function () {
          e = !1;
        }
      );
    }, []);
    var R = function () {
        var e = {};
        return (
          (a.client_id && a.client_id.trim()) ||
            (e.client_id = (0, I18n.__)('Client ID is required', 'ohmylms')),
          c ||
            (a.client_secret && a.client_secret.trim()) ||
            (e.client_secret = (0, I18n.__)('Client Secret is required', 'ohmylms')),
          e
        );
      },
      x = function (e, t) {
        (o(function (n) {
          return b7(b7({}, n), {}, _7({}, e, t));
        }),
          _(function (t) {
            return b7(b7({}, t), {}, _7({}, e, void 0));
          }));
      },
      C = (function () {
        var e = E7(
          g7().m(function e() {
            var n, r, i;
            return g7().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (((n = R()), _(n), !(Object.keys(n).length > 0))) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        v(!0),
                        (e.p = 2),
                        (e.n = 3),
                        l()({
                          path: '/creator-lms/v1/auth/google/settings',
                          method: 'POST',
                          data: {
                            client_id: a.client_id,
                            client_secret: a.client_secret,
                          },
                        })
                      );
                    case 3:
                      ((r = e.v),
                        u(!(null == r || !r.has_client_secret)),
                        m((null == r ? void 0 : r.redirect_uri) || d),
                        o(function (e) {
                          return b7(
                            b7({}, e),
                            {},
                            {
                              client_secret: '',
                            },
                          );
                        }),
                        t &&
                          t('success', (0, I18n.__)('Google Sign-In settings saved.', 'ohmylms')),
                        (e.n = 5));
                      break;
                    case 4:
                      ((e.p = 4),
                        (i = e.v),
                        t &&
                          t(
                            'error',
                            (null == i ? void 0 : i.message) ||
                              (0, I18n.__)('Failed to save Google Sign-In settings.', 'ohmylms'),
                          ));
                    case 5:
                      return ((e.p = 5), v(!1), e.f(5));
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
    return E ? (
      <div>{(0, I18n.__)('Loading Google Sign-In settings...', 'ohmylms')}</div>
    ) : (
      <React.Fragment>
        <Controls.CardWP
          variant={'secondary'}
          isBorderless={!0}
          style={{
            minHeight: '220px',
          }}
        >
          <Controls.SpacerWP marginBottom={5} marginTop={5} padding={1}>
            <Pf
              title={(0, I18n.__)('Client ID', 'ohmylms')}
              inputType={'text'}
              value={a.client_id}
              onChange={function (e) {
                return x('client_id', e);
              }}
              placeholder={(0, I18n.__)('Enter your Google Client ID', 'ohmylms')}
              spacerMarginBottom={0}
              error={y.client_id}
            />
            <Pf
              title={(0, I18n.__)('Client Secret', 'ohmylms')}
              inputType={'text'}
              value={a.client_secret}
              onChange={function (e) {
                return x('client_secret', e);
              }}
              placeholder={
                c
                  ? (0, I18n.__)('Leave blank to keep the current secret', 'ohmylms')
                  : (0, I18n.__)('Enter your Google Client Secret', 'ohmylms')
              }
              spacerMarginBottom={0}
              error={y.client_secret}
            />
            <Controls.SpacerWP padding={4} marginBottom={0}>
              <Controls.TextWP as={'p'} size={'14px'} weight={600} color={'#000D25'}>
                {(0, I18n.__)('Authorized redirect URI', 'ohmylms')}
              </Controls.TextWP>
              <Controls.SpacerWP marginBottom={2} />
              <Controls.FlexWP gap={2} align={'center'}>
                <Controls.FlexItemWP isBlock={!0}>
                  <Controls.InputWP type={'text'} value={d} readOnly={!0} />
                </Controls.FlexItemWP>
                <Controls.CopyToClipboard textToCopy={d} />
              </Controls.FlexWP>
              <Controls.SpacerWP marginBottom={2} />
              <Controls.TextWP as={'p'} size={'13px'} color={'#687784'}>
                {(0, I18n.__)(
                  "Paste this into your Google Cloud OAuth client's Authorized redirect URIs.",
                  'ohmylms',
                )}
              </Controls.TextWP>
            </Controls.SpacerWP>
          </Controls.SpacerWP>
        </Controls.CardWP>
        <Controls.FlexWP justify={'flex-end'} gap={2}>
          <Controls.ButtonWP isSecondary={!0} onClick={n}>
            {(0, I18n.__)('Cancel', 'ohmylms')}
          </Controls.ButtonWP>
          <Controls.ButtonWP isPrimary={!0} onClick={C} disabled={f}>
            {f ? (0, I18n.__)('Saving...', 'ohmylms') : (0, I18n.__)('Save', 'ohmylms')}
          </Controls.ButtonWP>
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
