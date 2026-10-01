/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createBrandingSettings(readRuntime) {
  return function BrandingSettings(props) {
    const {
      BK,
      GK,
      HK,
      I: Controls,
      M,
      Nm,
      React,
      SK: MemoSettingsActionBar,
      T: StoreModule,
      VK,
      b: I18n,
      g: ReactHooks,
      hu,
      l,
      y: WordPressData,
      zK,
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o,
      i,
      c = props.activeTab,
      u = props.handleSave,
      s = props.handleMigration,
      d = props.selectedCourses,
      m = props.isSaving;
    M().noConflict();
    var p = (0, WordPressData.useDispatch)(StoreModule.default),
      f = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getDesignSettings();
      }, []),
      v =
        (null == f || null === (t = f.ohmylms_video_player_logo) || void 0 === t
          ? void 0
          : t.value) || '',
      h =
        (null == f || null === (n = f.ohmylms_video_player_logo_bg_color) || void 0 === n
          ? void 0
          : n.value) || '#6E42D3',
      _ = (function (e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (!c && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return HK(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? HK(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })((0, ReactHooks.useState)(''), 2),
      w = _[0],
      E = _[1],
      S = (0, ReactHooks.useRef)(!1),
      R = (0, ReactHooks.useCallback)(
        function () {
          var e, t, n, r;
          return {
            primary:
              null == f ||
              null === (e = f.ohmylms_primary_color_scheme) ||
              void 0 === e ||
              null === (e = e.value) ||
              void 0 === e
                ? void 0
                : e.toLowerCase(),
            heading:
              null == f ||
              null === (t = f.ohmylms_heading_color_scheme) ||
              void 0 === t ||
              null === (t = t.value) ||
              void 0 === t
                ? void 0
                : t.toLowerCase(),
            text:
              null == f ||
              null === (n = f.ohmylms_body_text_color_scheme) ||
              void 0 === n ||
              null === (n = n.value) ||
              void 0 === n
                ? void 0
                : n.toLowerCase(),
            progress:
              null == f ||
              null === (r = f.ohmylms_body_progress_color_scheme) ||
              void 0 === r ||
              null === (r = r.value) ||
              void 0 === r
                ? void 0
                : r.toLowerCase(),
          };
        },
        [f],
      );
    (0, ReactHooks.useEffect)(
      function () {
        var e, t;
        if (
          !S.current &&
          null != f &&
          null !== (e = f.ohmylms_primary_color_scheme) &&
          void 0 !== e &&
          e.value
        ) {
          S.current = !0;
          var n =
            null == f || null === (t = f.ohmylms_color_preset) || void 0 === t ? void 0 : t.value;
          if (
            n &&
            GK.find(function (e) {
              return e.value === n;
            })
          )
            E(n);
          else {
            var r = R(),
              a = GK.find(function (e) {
                return (
                  e.colors.primary.toLowerCase() === r.primary &&
                  e.colors.heading.toLowerCase() === r.heading &&
                  e.colors.text.toLowerCase() === r.text &&
                  e.colors.progress.toLowerCase() === r.progress
                );
              });
            E((null == a ? void 0 : a.value) || GK[0].value);
          }
        }
      },
      [f, R],
    );
    var x = (0, ReactHooks.useMemo)(
        function () {
          var e = GK.find(function (e) {
            return e.value === w;
          });
          if (!e) return !1;
          var t = R();
          return (
            e.colors.primary.toLowerCase() !== t.primary ||
            e.colors.heading.toLowerCase() !== t.heading ||
            e.colors.text.toLowerCase() !== t.text ||
            e.colors.progress.toLowerCase() !== t.progress
          );
        },
        [w, R],
      ),
      C = x ? ''.concat(w, '-customized') : w,
      P = (0, ReactHooks.useMemo)(
        function () {
          var e = GK.map(function (e) {
            return {
              label: e.label,
              value: e.value,
            };
          });
          if (x) {
            var t = GK.find(function (e) {
              return e.value === w;
            });
            t &&
              e.push({
                label: ''.concat(t.label, ' (').concat((0, I18n.__)('Customized', 'ohmylms'), ')'),
                value: ''.concat(w, '-customized'),
              });
          }
          return e;
        },
        [x, w],
      ),
      O = (0, ReactHooks.useCallback)(
        function (e) {
          if (!e.endsWith('-customized')) {
            var t = GK.find(function (t) {
              return t.value === e;
            });
            t &&
              (E(e),
              p.updateDesignSettings({
                ohmylms_color_preset: {
                  value: e,
                },
                ohmylms_primary_color_scheme: {
                  value: t.colors.primary,
                },
                ohmylms_heading_color_scheme: {
                  value: t.colors.heading,
                },
                ohmylms_body_text_color_scheme: {
                  value: t.colors.text,
                },
                ohmylms_body_progress_color_scheme: {
                  value: t.colors.progress,
                },
              }));
          }
        },
        [p],
      ),
      k = (0, ReactHooks.useMemo)(
        function () {
          var e = GK.find(function (e) {
            return e.value === w;
          });
          return (null == e ? void 0 : e.colors) || GK[0].colors;
        },
        [w],
      ),
      j = [
        {
          title: (0, I18n.__)('Primary Color', 'ohmylms'),
          description: (0, I18n.__)(
            'Choose the main brand color used for buttons and highlights.',
            'ohmylms',
          ),
          isShowResetBtn: !0,
          defaultColor: k.primary,
          initialColor:
            null == f || null === (r = f.ohmylms_primary_color_scheme) || void 0 === r
              ? void 0
              : r.value,
          onChange: function (e) {
            p.updateDesignSettings({
              ohmylms_primary_color_scheme: {
                value: e,
              },
            });
          },
        },
        {
          title: (0, I18n.__)('Heading Color', 'ohmylms'),
          description: (0, I18n.__)('Set the color for all main headings and titles.', 'ohmylms'),
          isShowResetBtn: !0,
          defaultColor: k.heading,
          initialColor:
            null == f || null === (a = f.ohmylms_heading_color_scheme) || void 0 === a
              ? void 0
              : a.value,
          onChange: function (e) {
            p.updateDesignSettings({
              ohmylms_heading_color_scheme: {
                value: e,
              },
            });
          },
        },
        {
          title: (0, I18n.__)('Text Color', 'ohmylms'),
          description: (0, I18n.__)('Define the default color for body text.', 'ohmylms'),
          isShowResetBtn: !0,
          defaultColor: k.text,
          initialColor:
            null == f || null === (o = f.ohmylms_body_text_color_scheme) || void 0 === o
              ? void 0
              : o.value,
          onChange: function (e) {
            p.updateDesignSettings({
              ohmylms_body_text_color_scheme: {
                value: e,
              },
            });
          },
        },
        {
          title: (0, I18n.__)('Progress bar Color', 'ohmylms'),
          description: (0, I18n.__)('Choose the color used for course progress bars.', 'ohmylms'),
          isShowResetBtn: !0,
          defaultColor: k.progress,
          initialColor:
            null == f || null === (i = f.ohmylms_body_progress_color_scheme) || void 0 === i
              ? void 0
              : i.value,
          onChange: function (e) {
            p.updateDesignSettings({
              ohmylms_body_progress_color_scheme: {
                value: e,
              },
            });
          },
        },
      ],
      A = function () {
        var e = wp.media({
          title: (0, I18n.__)('Select Logo Image', 'ohmylms'),
          button: {
            text: (0, I18n.__)('Use this image', 'ohmylms'),
          },
          multiple: !1,
        });
        (e.on('select', function () {
          var t = e.state().get('selection').first().toJSON();
          'image' === t.type &&
            p.updateDesignSettings({
              ohmylms_video_player_logo: {
                value: t.url,
              },
            });
        }),
          e.open());
      };
    return (
      (0, ReactHooks.useEffect)(function () {
        var e = (function () {
          var e,
            t =
              ((e = BK().m(function e() {
                var t;
                return BK().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          p.setLoadingSetting(!0),
                          (e.n = 1),
                          l()({
                            path: 'ohmylms/v1/settings/design',
                          })
                        );
                      case 1:
                        ((t = e.v), p.setDesignSettings(t), p.setLoadingSetting(!1));
                      case 2:
                        return e.a(2);
                    }
                }, e);
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, a) {
                  var o = e.apply(t, n);
                  function i(e) {
                    VK(o, r, a, i, l, 'next', e);
                  }
                  function l(e) {
                    VK(o, r, a, i, l, 'throw', e);
                  }
                  i(void 0);
                });
              });
          return function () {
            return t.apply(this, arguments);
          };
        })();
        e();
      }, []),
      (
        <React.Fragment>
          <Controls.CardWP
            isBorderless={!0}
            variant={'secondary'}
            className={'ohmylms-full-screen-height'}
          >
            <Controls.SpacerWP padding={4} marginTop={0} marginBottom={0}>
              <Controls.CardWP isBorderless={!0}>
                <Controls.SpacerWP
                  paddingTop={2}
                  paddingBottom={6}
                  paddingX={2}
                  marginTop={0}
                  marginBottom={4}
                >
                  <Nm
                    title={(0, I18n.__)('Color Preset', 'ohmylms')}
                    description={(0, I18n.__)(
                      'Pick a preset to get started. You can change colors later whenever you like.',
                      'ohmylms',
                    )}
                    placeholder={(0, I18n.__)('Select Color Preset', 'ohmylms')}
                    staticSearch={!0}
                    isSearchable={!1}
                    isMulti={!1}
                    data={P}
                    value={C}
                    onChange={O}
                    selectorWeight={'400px'}
                  />
                  <Controls.SpacerWP marginBottom={0} marginX={4}>
                    {React.createElement(zK, {
                      colorsConfig: j,
                      showDivider: !1,
                    })}
                  </Controls.SpacerWP>
                </Controls.SpacerWP>
              </Controls.CardWP>
              <Controls.CardWP isBorderless={!0}>
                <Controls.SpacerWP padding={6} marginBottom={4}>
                  <h3
                    style={{
                      margin: '0px 0px 8px',
                      fontSize: '16px',
                      fontWeight: 600,
                    }}
                  >
                    {(0, I18n.__)('Video Player Branding', 'ohmylms')}
                  </h3>
                  <p
                    style={{
                      marginTop: '0px',
                      marginBottom: '16px',
                      color: '#687784',
                      fontSize: '14px',
                    }}
                  >
                    {(0, I18n.__)(
                      'Upload your logo to display on the video player during lesson playback.',
                      'ohmylms',
                    )}
                  </p>
                  {v ? (
                    <Controls.FlexWP
                      align={'flex-start'}
                      justify={'flex-start'}
                      direction={'column'}
                      gap={'3'}
                    >
                      <Controls.AvatarWP
                        shape={'square'}
                        src={v}
                        alt={'logo'}
                        style={{
                          height: 'auto',
                          maxHeight: '50px',
                          width: 'auto',
                        }}
                      />
                      {React.createElement(hu, {
                        handleEdit: A,
                        handleDelete: function () {
                          p.updateDesignSettings({
                            ohmylms_video_player_logo: {
                              value: '',
                            },
                          });
                        },
                        justify: 'flex-start',
                        alertTitle: (0, I18n.__)('Remove video player logo', 'ohmylms'),
                        alertDescription: (0, I18n.__)(
                          'Are you sure you want to remove the video player logo?',
                          'ohmylms',
                        ),
                      })}
                    </Controls.FlexWP>
                  ) : (
                    <Controls.ButtonWP variant={'secondary'} onClick={A}>
                      {(0, I18n.__)('Upload Logo', 'ohmylms')}
                    </Controls.ButtonWP>
                  )}
                  <Controls.SpacerWP marginTop={4} marginBottom={0}>
                    {React.createElement(zK, {
                      colorsConfig: [
                        {
                          title: (0, I18n.__)('Logo Background Color', 'ohmylms'),
                          description: (0, I18n.__)(
                            'Background color shown behind the logo on the video player.',
                            'ohmylms',
                          ),
                          isShowResetBtn: !0,
                          defaultColor: '#6E42D3',
                          initialColor: h,
                          onChange: function (e) {
                            return p.updateDesignSettings({
                              ohmylms_video_player_logo_bg_color: {
                                value: e,
                              },
                            });
                          },
                        },
                      ],
                      showDivider: !1,
                    })}
                  </Controls.SpacerWP>
                </Controls.SpacerWP>
              </Controls.CardWP>
              <MemoSettingsActionBar
                activeTab={c}
                handleSave={u}
                handleMigration={s}
                selectedCourses={d}
                isSaving={m}
              />
            </Controls.SpacerWP>
          </Controls.CardWP>
        </React.Fragment>
      )
    );
  };
}
