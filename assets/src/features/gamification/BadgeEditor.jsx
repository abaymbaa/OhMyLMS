/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createBadgeEditor(readRuntime) {
  return function BadgeEditor(props) {
    const {
      FK,
      I: Controls,
      J2,
      L2: BadgeImageField,
      Pf,
      Q2,
      React,
      T: StoreModule,
      U2: AchievementRules,
      Y2,
      Z2,
      b: I18n,
      e3,
      g: ReactHooks,
      l,
      n3,
      t3,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    const streakBadge = props.awardSource === 'streak' || props.data?.award_source === 'streak';
    var data = props.data,
      isOpen = props.isOpen,
      onClose = props.onClose,
      fetchData = props.fetchData,
      setItems = props.setItems,
      i =
        (props.badgeList,
        props.setBadge,
        {
          name: '',
          description: '',
          image: null,
          color: '#6e42d3',
          ...(streakBadge ? { award_source: 'streak' } : {}),
          rules: streakBadge
            ? []
            : [
                {
                  dataLabel: 'Points',
                  dataValue: 'points',
                  dataFieldType: 'select',
                  compareSign: '>=',
                  compareData: 0,
                  compareDataFieldType: 'input',
                },
              ],
        }),
      c = n3((0, ReactHooks.useState)(e3({}, i)), 2),
      u = c[0],
      s = c[1],
      d = n3((0, ReactHooks.useState)(!1), 2),
      m = d[0],
      p = d[1],
      f = (0, Notifications.A)(),
      openNotificationWithIcon = f.openNotificationWithIcon,
      contextHolder = f.contextHolder,
      _ = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      w = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      E = function () {
        m || onClose(!1);
      },
      S = function (e, t) {
        s(function (n) {
          return e3(e3({}, n), {}, t3({}, e, t));
        });
      },
      R = (function () {
        var e = J2(
          Z2().m(function e() {
            var t;
            return Z2().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        p(!0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/engagement/badges',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(u),
                        })
                      );
                    case 1:
                      (e.v.success &&
                        (props.onCreated?.(e.v.badge),
                        openNotificationWithIcon(
                          'success',
                          (0, I18n.__)('Badge updated successfully!', 'ohmylms'),
                        ),
                        setItems(function (e) {
                          return e.map(function (e) {
                            return e.slug === u.slug ? e3(e3({}, e), u) : e;
                          });
                        })),
                        (e.n = 3));
                      break;
                    case 2:
                      ((e.p = 2), (t = e.v), console.error(t));
                    case 3:
                      return ((e.p = 3), p(!1), e.f(3));
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      x = (function () {
        var e = J2(
          Z2().m(function e() {
            return Z2().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        p(!0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/engagement/badges',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(u),
                        })
                      );
                    case 1:
                      (e.v.success &&
                        (props.onCreated?.(e.v.badge),
                        openNotificationWithIcon(
                          'success',
                          (0, I18n.__)('Badge created successfully!', 'ohmylms'),
                        ),
                        setItems(function (e) {
                          return [u].concat(Q2(e));
                        })),
                        (e.n = 3));
                      break;
                    case 2:
                      ((e.p = 2),
                        e.v,
                        openNotificationWithIcon(
                          'error',
                          (0, I18n.__)('Something went wrong!', 'ohmylms'),
                        ));
                    case 3:
                      return ((e.p = 3), p(!1), onClose(!1), e.f(3));
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      C = (function () {
        var e = J2(
          Z2().m(function e() {
            var n, r, o, i;
            return Z2().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (u.name && '' !== u.name.trim()) {
                        e.n = 1;
                        break;
                      }
                      return (
                        openNotificationWithIcon(
                          'error',
                          (0, I18n.__)('The fields cannot be empty.', 'ohmylms'),
                        ),
                        e.a(2)
                      );
                    case 1:
                      ((n = Y2(u.rules)), (e.p = 2), n.s());
                    case 3:
                      if ((r = n.n()).done) {
                        e.n = 5;
                        break;
                      }
                      if (!(
                        null === (o = r.value).compareData ||
                        '' === o.compareData ||
                        o.compareData < 0
                      )) {
                        e.n = 4;
                        break;
                      }
                      return (
                        openNotificationWithIcon(
                          'error',
                          (0, I18n.__)('The fields cannot be empty or negative.', 'ohmylms'),
                        ),
                        e.a(2)
                      );
                    case 4:
                      e.n = 3;
                      break;
                    case 5:
                      e.n = 7;
                      break;
                    case 6:
                      ((e.p = 6), (i = e.v), n.e(i));
                    case 7:
                      return ((e.p = 7), n.f(), e.f(7));
                    case 8:
                      if (null == data || !data.slug) {
                        e.n = 10;
                        break;
                      }
                      return ((e.n = 9), R());
                    case 9:
                      e.n = 11;
                      break;
                    case 10:
                      return ((e.n = 11), x());
                    case 11:
                      fetchData();
                    case 12:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[2, 6, 7, 8]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    if (
      ((0, ReactHooks.useEffect)(
        function () {
          data && s(data);
        },
        [data],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          !m && _ && openNotificationWithIcon(w, _);
        },
        [_],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          isOpen && s(data || e3({}, i));
        },
        [data, isOpen],
      ),
      !isOpen)
    )
      return null;
    var P =
      !u.name ||
      '' === u.name.trim() ||
      u.rules.some(function (e) {
        return null === e.compareData || '' === e.compareData || e.compareData < 0;
      });
    return (
      <React.Fragment>
        {contextHolder}
        <Controls.ModalWP
          title={
            null != data && data.slug
              ? (0, I18n.__)('Edit Achievement Badge', 'ohmylms')
              : (0, I18n.__)('Create New Achievement Badge', 'ohmylms')
          }
          onRequestClose={E}
          shouldCloseOnEsc={!0}
          shouldCloseOnClickOutside={!0}
          size={'large'}
        >
          <Controls.CardWP isBorderless={!0} variant={'secondary'}>
            <Controls.SpacerWP padding={3}>
              <Pf
                title={(0, I18n.__)('Badge Name', 'ohmylms')}
                description={(0, I18n.__)(
                  'Give this badge a clear and meaningful name that reflects the learner’s achievement.',
                  'ohmylms',
                )}
                inputType={'text'}
                value={null == u ? void 0 : u.name}
                onChange={function (e) {
                  return S('name', e);
                }}
                placeholder={(0, I18n.__)('Enter badge name', 'ohmylms')}
                required={!0}
              />
              <Pf
                title={(0, I18n.__)('Badge Description', 'ohmylms')}
                description={(0, I18n.__)(
                  'Provide a short description explaining when or why this badge is awarded.',
                  'ohmylms',
                )}
                inputType={'textarea'}
                value={null == u ? void 0 : u.description}
                onChange={function (e) {
                  return S('description', e);
                }}
                placeholder={(0, I18n.__)('Enter badge description', 'ohmylms')}
              />
              <Controls.SpacerWP padding={2}>
                <BadgeImageField
                  title={(0, I18n.__)('Badge Icon', 'ohmylms')}
                  description={(0, I18n.__)(
                    'Upload a custom icon to visually represent this badge.',
                    'ohmylms',
                  )}
                  handleChange={function (e) {
                    return S('image', e);
                  }}
                  handleRemove={function () {
                    return S('image', null);
                  }}
                  brandingImg={null == u ? void 0 : u.image}
                  alertTitle={(0, I18n.__)('Remove Badge Icon', 'ohmylms')}
                  alertDescription={(0, I18n.__)(
                    'Are you sure you want to remove this badge icon?',
                    'ohmylms',
                  )}
                  showDivider={!1}
                  maxWidth={'345px'}
                />
              </Controls.SpacerWP>
              <Controls.SpacerWP marginBottom={2} paddingY={4}>
                <FK
                  title={(0, I18n.__)('Color', 'ohmylms')}
                  description={(0, I18n.__)(
                    'Choose a color to visually represent this badge.',
                    'ohmylms',
                  )}
                  initialColor={null == u ? void 0 : u.color}
                  onChange={function (e) {
                    return S('color', e);
                  }}
                  variant={'secondary'}
                  isBorderless={!0}
                  padding={2}
                  isShowResetBtn={!0}
                  defaultColor={'#6e42d3'}
                />
              </Controls.SpacerWP>
              {streakBadge ? (
                <p>
                  {I18n.__(
                    'This badge is awarded at the streak milestone selected in Streaks settings.',
                    'ohmylms',
                  )}
                </p>
              ) : (
                <AchievementRules
                  rules={null == u ? void 0 : u.rules}
                  setRules={function (e) {
                    return S('rules', e);
                  }}
                />
              )}
            </Controls.SpacerWP>
          </Controls.CardWP>
          <Controls.SpacerWP paddingTop={4}>
            <Controls.FlexWP justify={'flex-end'} gap={2}>
              <Controls.ButtonWP variant={'secondary'} onClick={E} disabled={m}>
                {(0, I18n.__)('Cancel', 'ohmylms')}
              </Controls.ButtonWP>
              <Controls.ButtonWP variant={'primary'} disabled={P} onClick={C} isBusy={m}>
                {null != data && data.slug
                  ? (0, I18n.__)('Update Badge', 'ohmylms')
                  : (0, I18n.__)('Create Badge', 'ohmylms')}
              </Controls.ButtonWP>
            </Controls.FlexWP>
          </Controls.SpacerWP>
        </Controls.ModalWP>
      </React.Fragment>
    );
  };
}
