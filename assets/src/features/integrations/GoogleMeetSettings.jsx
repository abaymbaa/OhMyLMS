/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createGoogleMeetSettings(readRuntime) {
  return function GoogleMeetSettings(props) {
    const { I: Controls, J6, K6, Pf, React, X6, b: I18n, g: ReactHooks, l, n7, r7 } = readRuntime();
    var t = props.onSave,
      n = props.onCancel,
      r = r7(
        (0, ReactHooks.useState)({
          client_id: '',
          client_secret: '',
          redirect_url: '',
        }),
        2,
      ),
      a = r[0],
      o = r[1],
      i = r7((0, ReactHooks.useState)(!1), 2),
      c = i[0],
      u = i[1],
      s = r7((0, ReactHooks.useState)({}), 2),
      d = s[0],
      m = s[1],
      p = r7((0, ReactHooks.useState)(!0), 2),
      f = p[0],
      v = p[1],
      h = r7((0, ReactHooks.useState)(!1), 2),
      y = h[0],
      _ = h[1],
      w = r7((0, ReactHooks.useState)(!1), 2),
      E = w[0],
      S = w[1],
      R = r7((0, ReactHooks.useState)('unknown'), 2),
      x = R[0],
      C = R[1];
    (0, ReactHooks.useEffect)(function () {
      var e = !0;
      function t() {
        return (t = n7(
          X6().m(function t() {
            var n, r;
            return X6().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      return (
                        (t.p = 0),
                        (t.n = 1),
                        l()({
                          path: '/ohmylms/v1/googlemeet/settings/credentials',
                          method: 'GET',
                        })
                      );
                    case 1:
                      ((n = t.v),
                        e &&
                          null != n &&
                          n.data &&
                          (o({
                            client_id: n.data.client_id || '',
                            client_secret: n.data.client_secret || '',
                            redirect_url: n.data.redirect_url || '',
                          }),
                          null != n &&
                            null !== (r = n.data) &&
                            void 0 !== r &&
                            null !== (r = r.tokens) &&
                            void 0 !== r &&
                            r.access_token &&
                            C('valid')),
                        (t.n = 3));
                      break;
                    case 2:
                      ((t.p = 2), t.v);
                    case 3:
                      return ((t.p = 3), e && v(!1), t.f(3));
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
    var P = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
          t = {};
        return (
          (e.client_id && e.client_id.trim()) ||
            (t.client_id = (0, I18n.__)('Client ID is required', 'ohmylms')),
          (e.client_secret && e.client_secret.trim()) ||
            (t.client_secret = (0, I18n.__)('Client Secret is required', 'ohmylms')),
          t
        );
      },
      O = (function () {
        var e = n7(
          X6().m(function e() {
            var n, r, o;
            return X6().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (((n = P()), m(n), !(Object.keys(n).length > 0))) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        u(!0),
                        (e.p = 2),
                        (e.n = 3),
                        l()({
                          path: '/ohmylms/v1/googlemeet/settings/credentials',
                          method: 'POST',
                          data: a,
                        })
                      );
                    case 3:
                      (null != (r = e.v) &&
                        r.success &&
                        (_(!0),
                        t &&
                          t(
                            'success',
                            (0, I18n.__)(
                              'Google Meet credentials saved successfully. Please authenticate with Google.',
                              'ohmylms',
                            ),
                          )),
                        (e.n = 5));
                      break;
                    case 4:
                      ((e.p = 4),
                        (o = e.v),
                        t && t('error', (0, I18n.__)('Something went wrong.', 'ohmylms')),
                        console.error(o));
                    case 5:
                      return ((e.p = 5), u(!1), e.f(5));
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
      })(),
      k = (function () {
        var e = n7(
          X6().m(function e() {
            var n, r;
            return X6().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        S(!0),
                        (e.p = 1),
                        (e.n = 2),
                        l()({
                          path: '/ohmylms/v1/googlemeet/settings/oauth-url',
                          method: 'GET',
                        })
                      );
                    case 2:
                      if (null == (n = e.v) || !n.success || !n.auth_url) {
                        e.n = 3;
                        break;
                      }
                      ((window.location.href = n.auth_url), (e.n = 4));
                      break;
                    case 3:
                      throw new Error((null == n ? void 0 : n.message) || 'OAuth URL not found');
                    case 4:
                      e.n = 6;
                      break;
                    case 5:
                      ((e.p = 5),
                        (r = e.v),
                        console.error('OAuth authentication failed:', r),
                        t &&
                          t('error', (0, I18n.__)('Failed to start authentication.', 'ohmylms')));
                    case 6:
                      return ((e.p = 6), S(!1), e.f(6));
                    case 7:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 5, 6, 7]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      j = function (e, t) {
        (o(function (n) {
          return K6(K6({}, n), {}, J6({}, e, t));
        }),
          m(function (t) {
            return K6(K6({}, t), {}, J6({}, e, void 0));
          }));
      };
    return f ? (
      <div>{(0, I18n.__)('Loading Google Meet settings...', 'ohmylms')}</div>
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
                return j('client_id', e);
              }}
              placeholder={(0, I18n.__)('Enter your Google Client ID', 'ohmylms')}
              spacerMarginBottom={0}
              error={d.client_id}
            />
            <Pf
              title={(0, I18n.__)('Client Secret', 'ohmylms')}
              inputType={'text'}
              value={a.client_secret}
              onChange={function (e) {
                return j('client_secret', e);
              }}
              placeholder={(0, I18n.__)('Enter your Google Client Secret', 'ohmylms')}
              spacerMarginBottom={0}
              error={d.client_secret}
            />
            <Pf
              title={(0, I18n.__)('Redirect URL', 'ohmylms')}
              inputType={'text'}
              value={a.redirect_url}
              onChange={function (e) {
                return j('redirect_url', e);
              }}
              placeholder={(0, I18n.__)('Enter your Google Redirect URL', 'ohmylms')}
              spacerMarginBottom={0}
              error={d.redirect_url}
            />
          </Controls.SpacerWP>
        </Controls.CardWP>
        <Controls.FlexWP justify={'flex-end'} gap={2}>
          <Controls.ButtonWP isSecondary={!0} onClick={n}>
            {(0, I18n.__)('Cancel', 'ohmylms')}
          </Controls.ButtonWP>
          <Controls.ButtonWP isPrimary={!0} onClick={O} disabled={c}>
            {c ? (0, I18n.__)('Saving...', 'ohmylms') : (0, I18n.__)('Save', 'ohmylms')}
          </Controls.ButtonWP>
          {'valid' === x && !y && (
            <Controls.ButtonWP isPrimary={!0} disabled={!0}>
              {(0, I18n.__)('Google Meet Authenticated', 'ohmylms')}
            </Controls.ButtonWP>
          )}
          {y && (
            <Controls.ButtonWP isPrimary={!0} onClick={k} disabled={E}>
              {E
                ? (0, I18n.__)('Redirecting...', 'ohmylms')
                : (0, I18n.__)('Authenticate with Google', 'ohmylms')}
            </Controls.ButtonWP>
          )}
          {'error' === x && (
            <Controls.ButtonWP isPrimary={!0} disabled={!0}>
              {(0, I18n.__)('Error checking authentication', 'ohmylms')}
            </Controls.ButtonWP>
          )}
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
