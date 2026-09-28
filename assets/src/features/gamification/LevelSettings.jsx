/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createLevelSettings(readRuntime) {
  return function LevelSettings() {
    const {
      $3: LevelList,
      He,
      I: Controls,
      L: Entitlements,
      React,
      T: StoreModule,
      X3,
      a5,
      b: I18n,
      g: ReactHooks,
      l,
      o5,
      t5,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    var e = (0, Entitlements.useIsPro)(),
      t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = o5(
        (0, ReactHooks.useState)({
          enable: !1,
          rules: [
            {
              levelId: 0,
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
      o = o5((0, ReactHooks.useState)([]), 2),
      i = o[0],
      c = o[1],
      u = (0, Notifications.A)(),
      openNotificationWithIcon = u.openNotificationWithIcon,
      contextHolder = u.contextHolder,
      m = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      p = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      f = o5((0, ReactHooks.useState)(!1), 2),
      v = f[0],
      h = f[1],
      _ = o5((0, ReactHooks.useState)(!1), 2),
      w = _[0],
      E = _[1],
      S = o5((0, ReactHooks.useState)(!1), 2),
      R = S[0],
      x = S[1];
    ((0, ReactHooks.useEffect)(function () {
      var t = (function () {
        var e = a5(
          t5().m(function e() {
            var t;
            return t5().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return (
                      h(!0),
                      (e.n = 1),
                      l()({
                        path: 'creator-lms/v1/engagement/settings/level',
                      })
                    );
                  case 1:
                    ((t = e.v), a(t || r), h(!1));
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
          !v && m && openNotificationWithIcon(p, m);
        },
        [m],
      ));
    var C = (function () {
      var n = a5(
        t5().m(function n() {
          var a;
          return t5().w(
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
                      E(!0),
                      (n.p = 2),
                      (a = X3({}, r)),
                      0 < i.length && (a.levels = i),
                      (n.n = 3),
                      l()({
                        path: '/creator-lms/v1/engagement/settings/level',
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(a),
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
                    return ((n.p = 5), t.setLoadingSetting(!1), E(!1), n.f(5));
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
          !v && m && openNotificationWithIcon(p, m);
        },
        [m],
      ),
      v ? (
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
              'Level is available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.',
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
                <LevelList setLevelList={c} />
              </Controls.FlexWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
          <Controls.SpacerWP paddingTop={6} paddingBottom={25}>
            <Controls.FlexWP justify={'flex-end'}>
              <Controls.ButtonWP variant={'primary'} size={'md'} onClick={C} isBusy={w}>
                {(0, I18n.__)('Save', 'ohmylms')}
              </Controls.ButtonWP>
            </Controls.FlexWP>
          </Controls.SpacerWP>
          {R && (
            <React.Fragment>
              <He.default isOpen={R} onClose={x} />
            </React.Fragment>
          )}
        </React.Fragment>
      )
    );
  };
}
