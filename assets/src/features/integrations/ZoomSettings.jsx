/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createZoomSettings(readRuntime) {
  return function ZoomSettings(props) {
    const { H6, I: Controls, L6, Pf, React, V6, Y6, b: I18n, g: ReactHooks, l, q6 } = readRuntime();
    var t = props.onSave,
      n = props.onCancel,
      r = Y6(
        (0, ReactHooks.useState)({
          account_id: '',
          client_id: '',
          client_secret: '',
          webhook_secret_token: '',
        }),
        2,
      ),
      a = r[0],
      o = r[1],
      i = Y6((0, ReactHooks.useState)(''), 2),
      c = i[0],
      u = i[1],
      s = Y6((0, ReactHooks.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = Y6((0, ReactHooks.useState)({}), 2),
      f = p[0],
      v = p[1],
      h = Y6((0, ReactHooks.useState)(!0), 2),
      y = h[0],
      _ = h[1];
    (0, ReactHooks.useEffect)(function () {
      var e = !0;
      function t() {
        return (t = q6(
          H6().m(function t() {
            var n;
            return H6().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      return (
                        (t.p = 0),
                        (t.n = 1),
                        l()({
                          path: '/creatorlms/v1/zoom/settings/credentials',
                          method: 'GET',
                        })
                      );
                    case 1:
                      ((n = t.v),
                        e &&
                          null != n &&
                          n.data &&
                          (o({
                            account_id: n.data.account_id || '',
                            client_id: n.data.client_id || '',
                            client_secret: n.data.client_secret || '',
                            webhook_secret_token: n.data.webhook_secret_token || '',
                          }),
                          u(n.data.webhook_url || '')),
                        (t.n = 3));
                      break;
                    case 2:
                      ((t.p = 2), t.v);
                    case 3:
                      return ((t.p = 3), e && _(!1), t.f(3));
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
    var w = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
          t = {};
        return (
          (e.account_id && e.account_id.trim()) ||
            (t.account_id = (0, I18n.__)('Account ID is required', 'ohmylms')),
          (e.client_id && e.client_id.trim()) ||
            (t.client_id = (0, I18n.__)('Client ID is required', 'ohmylms')),
          (e.client_secret && e.client_secret.trim()) ||
            (t.client_secret = (0, I18n.__)('Client Secret is required', 'ohmylms')),
          t
        );
      },
      E = (function () {
        var e = q6(
          H6().m(function e() {
            var n, r, o;
            return H6().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (((n = w()), v(n), !(Object.keys(n).length > 0))) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        m(!0),
                        (e.p = 2),
                        (e.n = 3),
                        l()({
                          path: '/creatorlms/v1/zoom/settings/credentials',
                          method: 'POST',
                          data: a,
                        })
                      );
                    case 3:
                      (null != (r = e.v) &&
                        r.success &&
                        t &&
                        t(
                          'success',
                          (0, I18n.__)('Zoom credentials saved successfully.', 'ohmylms'),
                        ),
                        (e.n = 5));
                      break;
                    case 4:
                      ((e.p = 4),
                        (o = e.v),
                        t && t('error', (0, I18n.__)('Something went wrong.', 'ohmylms')),
                        console.error(o));
                    case 5:
                      return ((e.p = 5), m(!1), e.f(5));
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
      S = function (e, t) {
        (o(function (n) {
          return L6(L6({}, n), {}, V6({}, e, t));
        }),
          v(function (t) {
            return L6(L6({}, t), {}, V6({}, e, void 0));
          }));
      };
    return y ? (
      <div>{(0, I18n.__)('Loading Zoom settings...', 'ohmylms')}</div>
    ) : (
      <React.Fragment>
        <Controls.CardWP
          variant={'secondary'}
          isBorderless={!0}
          style={{
            minHeight: '280px',
          }}
        >
          <Controls.SpacerWP marginBottom={5} marginTop={5} padding={1}>
            <Pf
              title={(0, I18n.__)('Account ID', 'ohmylms')}
              inputType={'text'}
              value={a.account_id}
              onChange={function (e) {
                return S('account_id', e);
              }}
              placeholder={(0, I18n.__)('Enter your Zoom Account ID', 'ohmylms')}
              spacerMarginBottom={0}
              error={f.account_id}
            />
            <Pf
              title={(0, I18n.__)('Client ID', 'ohmylms')}
              inputType={'text'}
              value={a.client_id}
              onChange={function (e) {
                return S('client_id', e);
              }}
              placeholder={(0, I18n.__)('Enter your Zoom Client ID', 'ohmylms')}
              spacerMarginBottom={0}
              error={f.client_id}
            />
            <Pf
              title={(0, I18n.__)('Client Secret', 'ohmylms')}
              inputType={'textarea'}
              value={a.client_secret}
              onChange={function (e) {
                return S('client_secret', e);
              }}
              placeholder={(0, I18n.__)('Enter your Zoom Client Secret', 'ohmylms')}
              spacerMarginBottom={0}
              error={f.client_secret}
            />
            {c && (
              <Pf
                title={(0, I18n.__)('Webhook URL', 'ohmylms')}
                inputType={'text'}
                value={c}
                readOnly={!0}
                spacerMarginBottom={0}
                description={(0, I18n.__)(
                  'Paste this into your Zoom app\'s Event Subscriptions endpoint URL, subscribed to the "Recording Completed" event.',
                  'ohmylms',
                )}
              />
            )}
            <Pf
              title={(0, I18n.__)('Webhook Secret Token', 'ohmylms')}
              inputType={'text'}
              value={a.webhook_secret_token}
              onChange={function (e) {
                return S('webhook_secret_token', e);
              }}
              placeholder={(0, I18n.__)(
                "Enter the Secret Token from your Zoom app's Event Subscriptions page",
                'ohmylms',
              )}
              spacerMarginBottom={0}
              description={(0, I18n.__)(
                'Required for auto-attaching cloud recordings — without it, recordings must be added by hand.',
                'ohmylms',
              )}
            />
          </Controls.SpacerWP>
        </Controls.CardWP>
        <Controls.FlexWP justify={'flex-end'} gap={2}>
          <Controls.ButtonWP isSecondary={!0} onClick={n}>
            {(0, I18n.__)('Cancel', 'ohmylms')}
          </Controls.ButtonWP>
          <Controls.ButtonWP isPrimary={!0} onClick={E} disabled={d}>
            {d ? (0, I18n.__)('Saving...', 'ohmylms') : (0, I18n.__)('Save', 'ohmylms')}
          </Controls.ButtonWP>
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
