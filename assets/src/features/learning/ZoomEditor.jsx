/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createZoomEditor(readRuntime) {
  return function ZoomEditor(props) {
    const {
      Cl,
      El,
      L: Entitlements,
      M,
      Pl,
      Qi,
      React,
      T: StoreModule,
      _l,
      b: I18n,
      co,
      g: ReactHooks,
      il,
      jo,
      si,
      sn,
      wl,
      xl,
      y: WordPressData,
      z: Notifications
    } = readRuntime();
    var t,
      isOpen = props.isOpen,
      onClose = props.onClose,
      chapterId = props.chapterId,
      courseId = props.courseId;
    M().noConflict();
    var i,
      l,
      c = (0, WordPressData.useDispatch)(StoreModule.default),
      u = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getLesson();
      }, []),
      s = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourseChaptersContent();
      }, [chapterId]),
      d = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).geSelectedLessonId();
      }, []),
      m = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      p = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      f = Pl((0, ReactHooks.useState)(d), 2),
      v = f[0],
      h = f[1],
      _ = Pl((0, ReactHooks.useState)(!1), 2),
      w = _[0],
      E = _[1],
      S = Pl((0, ReactHooks.useState)(!1), 2),
      R = S[0],
      x = S[1],
      C = Pl((0, ReactHooks.useState)(!1), 2),
      P = C[0],
      O = C[1],
      k = Pl((0, ReactHooks.useState)((null == u ? void 0 : u.timezone) || sn().tz.guess() || 'UTC'), 2),
      j = k[0],
      A = k[1],
      I = (0, Notifications.A)(),
      openNotificationWithIcon = I.openNotificationWithIcon,
      contextHolder = I.contextHolder,
      D = true,
      W = Qi(),
      B = (null == u ? void 0 : u.zoom_plan) || jo,
      V = function (e) {
        var t,
          n = null === (t = Object.values(e)) || void 0 === t ? void 0 : t.map(function (e) {
            var t;
            return parseInt(null !== (t = null == e ? void 0 : e.order_number) && void 0 !== t ? t : 0, 10);
          });
        return n.length ? Math.max.apply(Math, Cl(n)) : 0;
      },
      H = function () {
        var e = xl(El().m(function e() {
          var t, n, r, i, l, d, m, p, f, v, g, y, b;
          return El().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return e.p = 1, E(!0), v = V(s.byId), g = v + 1, e.n = 2, c.addZoomClass({
                  topic: null == u ? void 0 : u.topic,
                  agenda: null == u ? void 0 : u.agenda,
                  date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
                  duration: null == u ? void 0 : u.duration,
                  duration_unit: 'min',
                  password: null == u ? void 0 : u.password,
                  timezone: j,
                  order: g,
                  type: 2,
                  content_type: 'session',
                  platform: 'zoom',
                  host_video: null !== (t = null == u ? void 0 : u.host_video) && void 0 !== t && t,
                  participant_video: null !== (n = null == u ? void 0 : u.participant_video) && void 0 !== n && n,
                  join_before_host: null !== (r = null == u ? void 0 : u.join_before_host) && void 0 !== r && r,
                  mute_upon_entry: null !== (i = null == u ? void 0 : u.mute_upon_entry) && void 0 !== i && i,
                  auto_record: null !== (l = null == u ? void 0 : u.auto_record) && void 0 !== l && l,
                  zoom_plan: null !== (d = null == u ? void 0 : u.zoom_plan) && void 0 !== d ? d : jo,
                  cover_image_id: null !== (m = null == u ? void 0 : u.cover_image_id) && void 0 !== m ? m : null,
                  cover_video_id: null !== (p = null == u ? void 0 : u.cover_video_id) && void 0 !== p ? p : null,
                  attachments: null !== (f = null == u ? void 0 : u.attachments) && void 0 !== f ? f : [],
                  course_id: courseId
                }, chapterId);
              case 2:
                y = e.v, h(y), e.n = 4;
                break;
              case 3:
                e.p = 3, b = e.v, console.error(b);
              case 4:
                return e.p = 4, E(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[1, 3, 4, 5]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      G = function () {
        var e = xl(El().m(function e() {
          var t, n, r, o, i, l, s;
          return El().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return e.p = 1, E(!0), e.n = 2, c.updateZoomClass(v, _l(_l({}, u), {}, {
                  duration_unit: 'min',
                  type: 2,
                  content_type: 'session',
                  platform: 'zoom',
                  date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
                  timezone: j,
                  host_video: null !== (t = null == u ? void 0 : u.host_video) && void 0 !== t && t,
                  participant_video: null !== (n = null == u ? void 0 : u.participant_video) && void 0 !== n && n,
                  join_before_host: null !== (r = null == u ? void 0 : u.join_before_host) && void 0 !== r && r,
                  mute_upon_entry: null !== (o = null == u ? void 0 : u.mute_upon_entry) && void 0 !== o && o,
                  auto_record: null !== (i = null == u ? void 0 : u.auto_record) && void 0 !== i && i,
                  zoom_plan: null !== (l = null == u ? void 0 : u.zoom_plan) && void 0 !== l ? l : jo
                }), chapterId);
              case 2:
                e.n = 4;
                break;
              case 3:
                e.p = 3, s = e.v, console.error(s);
              case 4:
                return e.p = 4, E(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[1, 3, 4, 5]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      U = (0, ReactHooks.useCallback)(function (e, t) {
        'timezone' === e ? (A(t), c.setLesson(_l(_l({}, u), {}, {
          timezone: t
        }))) : 'date' === e ? c.setLesson(_l(_l({}, u), {}, {
          date: t,
          rawDate: t
        })) : c.setLesson(_l(_l({}, u), {}, wl({}, e, t)));
      }, [u]),
      q = (0, ReactHooks.useCallback)(function (e) {
        c.setLesson(_l(_l({}, u), e));
      }, [u]),
      Y = si({
        plan: B,
        title: null == u ? void 0 : u.topic,
        initialAutoRecord: null !== (t = null == u ? void 0 : u.auto_record) && void 0 !== t && t,
        initialState: (null == u ? void 0 : u.recording_state) || 'empty',
        initialSource: (null == u ? void 0 : u.recording_source) || void 0,
        duration: null == u ? void 0 : u.recording_duration,
        onAttach: function (e) {
          var t = e.source,
            n = e.url;
          return q({
            recording_source: t,
            recording_url: n || '',
            recording_state: 'attached'
          });
        },
        onDetach: function () {
          return q({
            recording_source: '',
            recording_url: '',
            recording_state: 'empty'
          });
        },
        pickMedia: function () {
          return new Promise(function (e) {
            W({
              type: 'video',
              title: (0, I18n.__)('Select or Upload Recording', 'ohmylms'),
              onSelect: function (t) {
                return e({
                  id: null == t ? void 0 : t.id,
                  url: null == t ? void 0 : t.url,
                  fileName: (null == t ? void 0 : t.filename) || (null == t ? void 0 : t.title) || (null == t ? void 0 : t.name)
                });
              },
              onClose: function () {
                return e(null);
              }
            });
          });
        }
      }),
      Q = function () {
        var e = xl(El().m(function e() {
          var t;
          return El().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (e.p = 0, d) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return x(!0), e.n = 2, c.getZoomClass(d);
              case 2:
                e.n = 4;
                break;
              case 3:
                e.p = 3, t = e.v, console.error('Error fetching course data:', t);
              case 4:
                return e.p = 4, x(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[0, 3, 4, 5]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();
    return (0, ReactHooks.useEffect)(function () {
      var e = !0;
      return e && Q(), function () {
        e = !1, c.resetLessonState();
      };
    }, [d]), (0, ReactHooks.useEffect)(function () {
      !R && m && openNotificationWithIcon(p, m);
    }, [m]), isOpen ? <React.Fragment>
          {!chapterId && contextHolder}
          {React.createElement(il, {
        isOpen: isOpen,
        loading: R,
        saving: w,
        onClose: function () {
          w || R || onClose();
        },
        onSave: function () {
          v ? G() : H();
        },
        onPreview: function () {
          null != u && u.preview_url && window.open(u.preview_url, '_blank');
        },
        title: (0, I18n.__)('Live Session (Zoom)', 'ohmylms'),
        saveLabel: v ? (0, I18n.__)('Update Meeting', 'ohmylms') : (0, I18n.__)('Create Meeting', 'ohmylms'),
        saveDisabled: !(null != u && null !== (i = u.topic) && void 0 !== i && i.trim() && null != u && null !== (l = u.agenda) && void 0 !== l && l.trim() && j && null != u && u.date && null != u && u.duration) || w || !D,
        editor: {
          topic: null == u ? void 0 : u.topic,
          agenda: null == u ? void 0 : u.agenda,
          onChange: U,
          disabled: !D,
          cover: {
            imageSrc: null == u ? void 0 : u.cover_image_src,
            videoSrc: null == u ? void 0 : u.cover_video_src,
            onChangeMany: q
          }
        },
        settings: {
          timezone: j,
          timezoneOptions: co,
          date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
          duration: null == u ? void 0 : u.duration,
          password: null == u ? void 0 : u.password,
          toggles: {
            mute_upon_entry: null == u ? void 0 : u.mute_upon_entry,
            join_before_host: null == u ? void 0 : u.join_before_host,
            host_video: null == u ? void 0 : u.host_video,
            participant_video: null == u ? void 0 : u.participant_video
          },
          autoRecord: null == u ? void 0 : u.auto_record,
          plan: B,
          recordingBlockProps: Y.blockProps,
          showRecordingBlock: !!v,
          onChange: U,
          attachments: (null == u ? void 0 : u.attachments) || [],
          onAddFiles: function (e) {
            return q({
              attachments: [].concat(Cl((null == u ? void 0 : u.attachments) || []), Cl(e))
            });
          },
          onRemoveFile: function (e) {
            return q({
              attachments: ((null == u ? void 0 : u.attachments) || []).filter(function (t) {
                return t.id !== e;
              })
            });
          },
          disabled: !D
        }
      })}

        </React.Fragment> : null;
  };
}
