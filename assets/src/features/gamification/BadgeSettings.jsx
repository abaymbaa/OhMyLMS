/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createBadgeSettings(readRuntime) {
  return function BadgeSettings() {
    const {
      He,
      I: Controls,
      L: Entitlements,
      React,
      T: StoreModule,
      b: I18n,
      b3,
      f3: BadgeList,
      g: ReactHooks,
      l,
      v3,
      y: WordPressData,
      y3,
      z: Notifications,
    } = readRuntime();
    var e = (0, Entitlements.useIsPro)(),
      t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = b3(
        (0, ReactHooks.useState)({
          enable: !1,
          rules: [
            {
              badgeId: 0,
              settings: [
                {
                  dataLabel: 'Points',
                  dataValue: 'points',
                  dataFieldType: 'select',
                  compareSign: '>=',
                  compareData: 100,
                  compareDataFieldType: 'input',
                },
              ],
            },
          ],
        }),
        2,
      ),
      r = n[0],
      a = n[1],
      o = b3((0, ReactHooks.useState)([]), 2),
      i = (o[0], o[1], b3((0, ReactHooks.useState)(!1), 2)),
      c =
        (i[0],
        i[1],
        b3(
          (0, ReactHooks.useState)({
            name: '',
            slug: '',
            description: '',
            image: null,
          }),
          2,
        )),
      u = (c[0], c[1], (0, Notifications.A)()),
      openNotificationWithIcon = u.openNotificationWithIcon,
      contextHolder = u.contextHolder,
      m = b3((0, ReactHooks.useState)(!1), 2),
      p =
        (m[0],
        m[1],
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getNotificationMessage();
        }, [])),
      f = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      v = b3((0, ReactHooks.useState)(!1), 2),
      h = v[0],
      _ = v[1],
      w = b3((0, ReactHooks.useState)(!1), 2),
      E = w[0],
      S = w[1],
      R = b3((0, ReactHooks.useState)(!1), 2),
      x = R[0],
      C = R[1],
      P = b3((0, ReactHooks.useState)(null), 2);
    (P[0],
      P[1],
      (0, ReactHooks.useEffect)(function () {
        var t = (function () {
          var e = y3(
            v3().m(function e() {
              var t;
              return v3().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return (
                        _(!0),
                        (e.n = 1),
                        l()({
                          path: 'creator-lms/v1/engagement/settings/badge',
                        })
                      );
                    case 1:
                      ((t = e.v), a(t || r), _(!1));
                    case 2:
                      return e.a(2);
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        e && t();
      }, []),
      (0, ReactHooks.useEffect)(
        function () {
          !h && p && openNotificationWithIcon(f, p);
        },
        [p],
      ));
    var O = (function () {
      var n = y3(
        v3().m(function n() {
          return v3().w(
            function (n) {
              for (;;)
                switch ((n.p = n.n)) {
                  case 0:
                    if (e) {
                      n.n = 1;
                      break;
                    }
                    return n.a(2);
                  case 1:
                    return (
                      t.setLoadingSetting(!0),
                      S(!0),
                      (n.p = 2),
                      (n.n = 3),
                      l()({
                        path: '/creator-lms/v1/engagement/settings/badge',
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(r),
                      })
                    );
                  case 3:
                    (openNotificationWithIcon(
                      'success',
                      (0, I18n.__)('Settings saved successfully.', 'ohmylms'),
                    ),
                      (n.n = 5));
                    break;
                  case 4:
                    ((n.p = 4),
                      n.v,
                      openNotificationWithIcon(
                        'error',
                        (0, I18n.__)('Something went wrong.', 'ohmylms'),
                      ));
                  case 5:
                    return ((n.p = 5), t.setLoadingSetting(!1), S(!1), n.f(5));
                  case 6:
                    return n.a(2);
                }
            },
            n,
            null,
            [[2, 4, 5, 6]],
          );
        }),
      );
      return function () {
        return n.apply(this, arguments);
      };
    })();
    return (
      (0, ReactHooks.useEffect)(
        function () {
          !h && p && openNotificationWithIcon(f, p);
        },
        [p],
      ),
      h ? (
        <Controls.CardWP isBorderless={!0}>
          <Controls.SpacerWP marginTop={2.5} padding={6}>
            <Controls.SkeletonWP active={!0} rows={15} />
          </Controls.SpacerWP>
        </Controls.CardWP>
      ) : (
        <React.Fragment>
          {contextHolder}
          <Controls.ProOverlayWP
            title={(0, I18n.__)(
              'Badges are available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.',
              'ohmylms',
            )}
          />
          <Controls.CardWP isBorderless={!0} variant={'secondary'}>
            <Controls.SpacerWP padding={0} marginTop={2.5} marginBottom={0}>
              <Controls.FlexWP
                justify={'flex-start'}
                align={'flex-start'}
                direction={'column'}
                gap={3}
              >
                <BadgeList />
              </Controls.FlexWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
          <Controls.SpacerWP paddingTop={6} paddingBottom={25}>
            <Controls.FlexWP justify={'flex-end'}>
              <Controls.ButtonWP variant={'primary'} size={'md'} onClick={O} isBusy={E}>
                {(0, I18n.__)('Save', 'ohmylms')}
              </Controls.ButtonWP>
            </Controls.FlexWP>
          </Controls.SpacerWP>
          {x && (
            <React.Fragment>
              <He.default isOpen={x} onClose={C} />
            </React.Fragment>
          )}
        </React.Fragment>
      )
    );
  };
}
