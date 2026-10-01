/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createLevelEditor(readRuntime) {
  return function LevelEditor(props) {
    const {
      C3,
      D3,
      F3,
      FK,
      I: Controls,
      N3,
      O3,
      Pf,
      React,
      T: StoreModule,
      T3,
      b: I18n,
      g: ReactHooks,
      j3,
      k3,
      l,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    var data = props.data,
      isOpen = props.isOpen,
      onClose = props.onClose,
      fetchData = props.fetchData,
      setItems = props.setItems,
      i =
        (props.levelList,
        props.setLevel,
        {
          name: '',
          description: '',
          color: '#6e42d3',
          textColor: '#ffffff',
          rules: [
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
      c = D3((0, ReactHooks.useState)(F3({}, i)), 2),
      u = c[0],
      s = c[1],
      d = D3((0, ReactHooks.useState)(!1), 2),
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
          return F3(F3({}, n), {}, N3({}, e, t));
        });
      },
      R = (function () {
        var e = T3(
          j3().m(function e() {
            var t;
            return j3().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        p(!0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/engagement/levels',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(u),
                        })
                      );
                    case 1:
                      (e.v.success &&
                        (openNotificationWithIcon(
                          'success',
                          (0, I18n.__)('Level updated successfully!', 'ohmylms'),
                        ),
                        setItems(function (e) {
                          return e.map(function (e) {
                            return e.slug === u.slug ? F3(F3({}, e), u) : e;
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
        var e = T3(
          j3().m(function e() {
            return j3().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        p(!0),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/engagement/levels',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(u),
                        })
                      );
                    case 1:
                      (e.v.success &&
                        (openNotificationWithIcon(
                          'success',
                          (0, I18n.__)('Level created successfully!', 'ohmylms'),
                        ),
                        setItems(function (e) {
                          return [u].concat(k3(e));
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
        var e = T3(
          j3().m(function e() {
            var n, r, o, i;
            return j3().w(
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
                      ((n = O3(u.rules)), (e.p = 2), n.s());
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
          isOpen && s(data || F3({}, i));
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
              ? (0, I18n.__)('Edit Learner Level', 'ohmylms')
              : (0, I18n.__)('Add New Learner Level', 'ohmylms')
          }
          onRequestClose={E}
          shouldCloseOnEsc={!0}
          shouldCloseOnClickOutside={!0}
          size={'large'}
        >
          <Controls.CardWP isBorderless={!0} variant={'secondary'}>
            <Controls.SpacerWP padding={3}>
              <Pf
                title={(0, I18n.__)('Level Name', 'ohmylms')}
                description={(0, I18n.__)(
                  'Give this level a meaning name learners will recognize.',
                  'ohmylms',
                )}
                inputType={'text'}
                value={null == u ? void 0 : u.name}
                onChange={function (e) {
                  return S('name', e);
                }}
                placeholder={(0, I18n.__)('Enter level name', 'ohmylms')}
                required={!0}
              />
              <Pf
                title={(0, I18n.__)('Level Description', 'ohmylms')}
                description={(0, I18n.__)(
                  'Explain what this level represents or how it’s achieved.',
                  'ohmylms',
                )}
                inputType={'textarea'}
                value={null == u ? void 0 : u.description}
                onChange={function (e) {
                  return S('description', e);
                }}
                placeholder={(0, I18n.__)('Enter level description', 'ohmylms')}
              />
              <Controls.SpacerWP marginBottom={4}>
                <FK
                  title={(0, I18n.__)('BackgroundColor', 'ohmylms')}
                  description={(0, I18n.__)('Choose a background color for the level.', 'ohmylms')}
                  initialColor={null == u ? void 0 : u.color}
                  onChange={function (e) {
                    return S('color', e);
                  }}
                  variant={'secondary'}
                  isBorderless={!0}
                  isShowResetBtn={!0}
                  defaultColor={'#6e42d3'}
                />
              </Controls.SpacerWP>
              <Controls.SpacerWP marginBottom={4}>
                <FK
                  title={(0, I18n.__)('Text Color', 'ohmylms')}
                  description={(0, I18n.__)('Choose a text color for the level.', 'ohmylms')}
                  initialColor={null == u ? void 0 : u.textColor}
                  onChange={function (e) {
                    return S('textColor', e);
                  }}
                  variant={'secondary'}
                  isBorderless={!0}
                  isShowResetBtn={!0}
                  defaultColor={'#ffffff'}
                />
              </Controls.SpacerWP>
              <C3
                rules={null == u ? void 0 : u.rules}
                setRules={function (e) {
                  return S('rules', e);
                }}
              />
            </Controls.SpacerWP>
          </Controls.CardWP>
          <Controls.SpacerWP paddingTop={4}>
            <Controls.FlexWP justify={'flex-end'} gap={2}>
              <Controls.ButtonWP variant={'secondary'} onClick={E} disabled={m}>
                {(0, I18n.__)('Cancel', 'ohmylms')}
              </Controls.ButtonWP>
              <Controls.ButtonWP variant={'primary'} disabled={P} onClick={C} isBusy={m}>
                {null != data && data.slug
                  ? (0, I18n.__)('Update', 'ohmylms')
                  : (0, I18n.__)('Create', 'ohmylms')}
              </Controls.ButtonWP>
            </Controls.FlexWP>
          </Controls.SpacerWP>
        </Controls.ModalWP>
      </React.Fragment>
    );
  };
}
