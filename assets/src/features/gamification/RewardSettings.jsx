/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
import { FeatureSwitch } from './FeatureSwitch';
export function createRewardSettings(readRuntime) {
  return function RewardSettings() {
    const {
      I: Controls,
      L: Entitlements,
      React,
      T: StoreModule,
      b: I18n,
      b5,
      g: ReactHooks,
      g5,
      h5,
      l,
      p5,
      s5,
      y: WordPressData,
      y5,
      z: Notifications,
    } = readRuntime();
    var e = true,
      t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = h5(
        (0, ReactHooks.useState)({
          enable: !1,
          rules: [
            {
              label: (0, I18n.__)('Allow course purchases using bonus points', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Enable learners to redeem their earned points for course access.',
                'ohmylms',
              ),
              slug: 'purchase_course',
              value: !1,
            },
          ],
        }),
        2,
      ),
      r = n[0],
      a = n[1],
      o = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getGamificationSettings();
      }, []),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      c = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      u = h5((0, ReactHooks.useState)(!1), 2),
      s = u[0],
      d = u[1],
      m = h5((0, ReactHooks.useState)(!1), 2),
      p = m[0],
      f = m[1],
      v = (0, Notifications.A)(),
      openNotificationWithIcon = v.openNotificationWithIcon,
      contextHolder = v.contextHolder;
    (0, ReactHooks.useEffect)(function () {
      var t = (function () {
        var e = g5(
          s5().m(function e() {
            var t, n;
            return s5().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return (
                      d(!0),
                      (e.n = 1),
                      l()({
                        path: 'ohmylms/v1/engagement/settings/reward',
                      })
                    );
                  case 1:
                    ((t = e.v),
                      a(t || r),
                      d(!1),
                      t &&
                        ((n = w(t.rules || [], S)),
                        a(
                          p5(
                            p5({}, t),
                            {},
                            {
                              rules: n,
                            },
                          ),
                        )));
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
      t();
    }, []);
    var w = function (e, t) {
      var n = (function (e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return b5(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          y5(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })(e);
      return (
        t.forEach(function (t) {
          e.some(function (e) {
            return e.slug === t.slug;
          }) || n.push(t);
        }),
        n
      );
    };
    (0, ReactHooks.useEffect)(
      function () {
        !s && i && openNotificationWithIcon(c, i);
      },
      [i],
    );
    var E = (function () {
        var n = g5(
          s5().m(function n() {
            var a;
            return s5().w(
              function (n) {
                for (;;)
                  switch ((n.p = n.n)) {
                    case 0:
                      {
                        n.n = 1;
                        break;
                      }
                      return n.a(2);
                    case 1:
                      return (
                        t.setLoadingSetting(!0),
                        f(!0),
                        (n.p = 2),
                        (n.n = 3),
                        l()({
                          path: '/ohmylms/v1/engagement/settings/reward',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(r),
                        })
                      );
                    case 3:
                      return (
                        null != (a = n.v) &&
                          a.success &&
                          t.setGlobalDataViaKey(
                            'engagement_settings',
                            p5(
                              p5({}, o),
                              {},
                              {
                                reward_settings: r,
                              },
                            ),
                          ),
                        openNotificationWithIcon(
                          'success',
                          (0, I18n.__)('Settings saved successfully.', 'ohmylms'),
                        ),
                        n.a(2, a)
                      );
                    case 4:
                      ((n.p = 4),
                        n.v,
                        f(!1),
                        openNotificationWithIcon(
                          'error',
                          (0, I18n.__)('Something went wrong.', 'ohmylms'),
                        ));
                    case 5:
                      return ((n.p = 5), t.setLoadingSetting(!1), f(!1), n.f(5));
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
      })(),
      S = [
        {
          label: (0, I18n.__)('Allow purchasing course using bonus point', 'ohmylms'),
          tooltip: (0, I18n.__)('Award points when a user completes an entire course.', 'ohmylms'),
          slug: 'purchase_course',
          value: !0,
        },
      ];
    return s ? (
      <React.Fragment>
        <Controls.CardWP isBorderless={!0}>
          <Controls.SpacerWP marginTop={2.5} padding={6}>
            <Controls.SkeletonWP active={!0} rows={15} />
          </Controls.SpacerWP>
        </Controls.CardWP>
      </React.Fragment>
    ) : (
      <React.Fragment>
        {contextHolder}
        <FeatureSwitch
          settings={r}
          setSettings={a}
          title={I18n.__('Point rewards', 'ohmylms')}
          description={I18n.__(
            'Let learners redeem earned points for eligible courses.',
            'ohmylms',
          )}
          label={I18n.__('Enable point rewards', 'ohmylms')}
        />

        <Controls.CardWP isBorderless={!0} variant={'secondary'}>
          <Controls.SpacerWP padding={0} marginTop={2.5} marginBottom={0}>
            <Controls.FlexWP
              justify={'flex-start'}
              align={'flex-start'}
              direction={'column'}
              gap={3}
            >
              {
                <React.Fragment>
                  {r.rules.map(function (e, t) {
                    return (
                      <Controls.CardWP key={t} isBorderless={!0} padding={'24px'} fullWidth={!0}>
                        <Controls.FlexWP
                          align={'flex-start'}
                          justify={'flex-start'}
                          direction={'column'}
                          gap={3}
                        >
                          <React.Fragment key={e.value}>
                            <Controls.FlexWP
                              align={'center'}
                              justify={'space-between'}
                              style={{
                                width: '100%',
                              }}
                            >
                              <Controls.FlexItemWP>
                                <Controls.HeadingWP level={'4'}>
                                  {(0, I18n.__)(e.label, 'ohmylms')}
                                </Controls.HeadingWP>
                                <Controls.SpacerWP marginBottom={1} />
                                <Controls.TextWP>
                                  {(0, I18n.__)(e.tooltip, 'ohmylms')}
                                </Controls.TextWP>
                              </Controls.FlexItemWP>
                              <Controls.FlexItemWP>
                                <Controls.SwitchWP
                                  checked={e.value}
                                  onChange={function (e) {
                                    return (function (e, t) {
                                      a(function (n) {
                                        var r = n.rules.map(function (n, r) {
                                          return r === e
                                            ? p5(
                                                p5({}, n),
                                                {},
                                                {
                                                  value: t,
                                                },
                                              )
                                            : n;
                                        });
                                        return p5(
                                          p5({}, n),
                                          {},
                                          {
                                            rules: r,
                                          },
                                        );
                                      });
                                    })(t, e);
                                  }}
                                />
                              </Controls.FlexItemWP>
                            </Controls.FlexWP>
                            {void 0 !== (null == e ? void 0 : e.threshold) && e.value && (
                              <Controls.FlexItemWP fullWidth={!0}>
                                <Controls.SpacerWP marginBottom={1} />
                                <Controls.FlexWP align={'flex-start'} justify={'space-between'}>
                                  <Controls.FlexItemWP>
                                    <Controls.HeadingWP level={'5'}>
                                      {(0, I18n.__)('Minimum Required Threshold', 'ohmylms')}
                                    </Controls.HeadingWP>
                                    <Controls.SpacerWP marginBottom={1} />
                                    <Controls.TextWP>
                                      {(0, I18n.__)(
                                        'Set the minimum percentage a learner must achieve to earn bonus points for this activity.',
                                        'ohmylms',
                                      )}
                                    </Controls.TextWP>
                                  </Controls.FlexItemWP>
                                  <Controls.FlexItemWP>
                                    <Controls.InputNumberWP
                                      value={e.threshold}
                                      onChange={function (e) {
                                        return (function (e, t) {
                                          a(function (n) {
                                            var r = n.rules.map(function (n, r) {
                                              return r === e
                                                ? p5(
                                                    p5({}, n),
                                                    {},
                                                    {
                                                      threshold: t,
                                                    },
                                                  )
                                                : n;
                                            });
                                            return p5(
                                              p5({}, n),
                                              {},
                                              {
                                                rules: r,
                                              },
                                            );
                                          });
                                        })(t, e);
                                      }}
                                      min={0}
                                      max={100}
                                      suffix={'%'}
                                    />
                                  </Controls.FlexItemWP>
                                </Controls.FlexWP>
                              </Controls.FlexItemWP>
                            )}
                          </React.Fragment>
                        </Controls.FlexWP>
                      </Controls.CardWP>
                    );
                  })}
                </React.Fragment>
              }
            </Controls.FlexWP>
          </Controls.SpacerWP>
        </Controls.CardWP>
        <Controls.SpacerWP paddingTop={6} paddingBottom={25}>
          <Controls.FlexWP justify={'flex-end'}>
            <Controls.ButtonWP variant={'primary'} size={'md'} onClick={E} isBusy={p}>
              {(0, I18n.__)('Save', 'ohmylms')}
            </Controls.ButtonWP>
          </Controls.FlexWP>
        </Controls.SpacerWP>
      </React.Fragment>
    );
  };
}
