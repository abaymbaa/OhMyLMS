/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createGoogleMeetEditor(readRuntime) {
  return function GoogleMeetEditor(props) {
    const {
      Bl,
      Fl,
      Il,
      L: Entitlements,
      Ll,
      M,
      Nl,
      Qi,
      React,
      T: StoreModule,
      b: I18n,
      co,
      g: ReactHooks,
      il,
      si,
      sn,
      ul,
      y: WordPressData,
      z: Notifications,
      zl,
    } = readRuntime();
    var isOpen = props.isOpen,
      onClose = props.onClose,
      chapterId = props.chapterId,
      courseId = props.courseId;
    M().noConflict();
    var o,
      i,
      l,
      c = (0, WordPressData.useDispatch)(StoreModule.default),
      u = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getLesson();
      }, []),
      s = (0, WordPressData.useSelect)(
        function (e) {
          return e(StoreModule.default).getCourseChaptersContent();
        },
        [chapterId],
      ),
      d = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).geSelectedLessonId();
      }, []),
      m = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      p = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      f = Ll((0, ReactHooks.useState)(d), 2),
      v = f[0],
      h = f[1],
      _ = Ll((0, ReactHooks.useState)(!1), 2),
      w = _[0],
      E = _[1],
      S = Ll((0, ReactHooks.useState)(!1), 2),
      R = S[0],
      x = S[1],
      C = Ll(
        (0, ReactHooks.useState)((null == u ? void 0 : u.timezone) || sn().tz.guess() || 'UTC'),
        2,
      ),
      P = C[0],
      O = C[1],
      k = (0, Notifications.A)(),
      openNotificationWithIcon = k.openNotificationWithIcon,
      contextHolder = k.contextHolder,
      I = (0, Entitlements.useFeatureAccess)('googlemeet'),
      F = Qi(),
      N = function (e) {
        var t,
          n =
            null === (t = Object.values(e)) || void 0 === t
              ? void 0
              : t.map(function (e) {
                  var t;
                  return parseInt(
                    null !== (t = null == e ? void 0 : e.order_number) && void 0 !== t ? t : 0,
                    10,
                  );
                });
        return n.length ? Math.max.apply(Math, Bl(n)) : 0;
      },
      D = function () {
        var e = (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
          t = parseInt(null == u ? void 0 : u.duration, 10) || 60;
        return e ? sn()(e).add(t, 'minute').format('YYYY-MM-DDTHH:mm:ss') : '';
      },
      W = (function () {
        var e = zl(
          Nl().m(function e() {
            var t, n, o, i, l;
            return Nl().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (I) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        (e.p = 1),
                        E(!0),
                        (n = N(s.byId)),
                        (o = n + 1),
                        (e.n = 2),
                        c.addGoogleMeetClass(
                          {
                            topic: null == u ? void 0 : u.topic,
                            agenda: null == u ? void 0 : u.agenda,
                            date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
                            endDate: D(),
                            duration: parseInt(null == u ? void 0 : u.duration, 10) || 60,
                            timezone: P,
                            order: o,
                            content_type: 'session',
                            platform: 'googlemeet',
                            attachments:
                              null !== (t = null == u ? void 0 : u.attachments) && void 0 !== t
                                ? t
                                : [],
                            course_id: courseId,
                          },
                          chapterId,
                        )
                      );
                    case 2:
                      if (((i = e.v), h(i), !chapterId)) {
                        e.n = 3;
                        break;
                      }
                      return ((e.n = 3), c.getLessonByChapterId(chapterId));
                    case 3:
                      e.n = 5;
                      break;
                    case 4:
                      ((e.p = 4), (l = e.v), console.error(l));
                    case 5:
                      return ((e.p = 5), E(!1), e.f(5));
                    case 6:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 4, 5, 6]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      B = (function () {
        var e = zl(
          Nl().m(function e() {
            var t;
            return Nl().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (I) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        (e.p = 1),
                        E(!0),
                        (e.n = 2),
                        c.updateGoogleMeetClass(
                          v,
                          Il(
                            Il({}, u),
                            {},
                            {
                              content_type: 'session',
                              platform: 'googlemeet',
                              date:
                                (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
                              endDate: D(),
                              duration: parseInt(null == u ? void 0 : u.duration, 10) || 60,
                              timezone: P,
                            },
                          ),
                          chapterId,
                        )
                      );
                    case 2:
                      if (!chapterId) {
                        e.n = 3;
                        break;
                      }
                      return ((e.n = 3), c.getLessonByChapterId(chapterId));
                    case 3:
                      e.n = 5;
                      break;
                    case 4:
                      ((e.p = 4), (t = e.v), console.error(t));
                    case 5:
                      return ((e.p = 5), E(!1), e.f(5));
                    case 6:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 4, 5, 6]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      V = (0, ReactHooks.useCallback)(
        function (e, t) {
          'timezone' === e
            ? (O(t),
              c.setLesson(
                Il(
                  Il({}, u),
                  {},
                  {
                    timezone: t,
                  },
                ),
              ))
            : 'date' === e
              ? c.setLesson(
                  Il(
                    Il({}, u),
                    {},
                    {
                      date: t,
                      rawDate: t,
                    },
                  ),
                )
              : c.setLesson(Il(Il({}, u), {}, Fl({}, e, t)));
        },
        [u],
      ),
      H = (0, ReactHooks.useCallback)(
        function (e) {
          c.setLesson(Il(Il({}, u), e));
        },
        [u],
      ),
      G = si({
        title: null == u ? void 0 : u.topic,
        initialState: (null == u ? void 0 : u.recording_state) || 'empty',
        initialSource: (null == u ? void 0 : u.recording_source) || void 0,
        onAttach: function (e) {
          var t = e.source,
            n = e.url;
          return H({
            recording_source: t,
            recording_url: n || '',
            recording_state: 'attached',
          });
        },
        onDetach: function () {
          return H({
            recording_source: '',
            recording_url: '',
            recording_state: 'empty',
          });
        },
        pickMedia: function () {
          return new Promise(function (e) {
            F({
              type: 'video',
              title: (0, I18n.__)('Select or Upload Recording', 'ohmylms'),
              onSelect: function (t) {
                return e({
                  id: null == t ? void 0 : t.id,
                  url: null == t ? void 0 : t.url,
                  fileName:
                    (null == t ? void 0 : t.filename) ||
                    (null == t ? void 0 : t.title) ||
                    (null == t ? void 0 : t.name),
                });
              },
              onClose: function () {
                return e(null);
              },
            });
          });
        },
      }),
      U = (function () {
        var e = zl(
          Nl().m(function e() {
            var t;
            return Nl().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (((e.p = 0), d)) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (x(!0), (e.n = 2), c.getGoogleMeetClass(d));
                    case 2:
                      e.n = 4;
                      break;
                    case 3:
                      ((e.p = 3), (t = e.v), console.error('Error fetching course data:', t));
                    case 4:
                      return ((e.p = 4), x(!1), e.f(4));
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 3, 4, 5]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    return (
      (0, ReactHooks.useEffect)(
        function () {
          var e = !0;
          return (
            e && U(),
            function () {
              ((e = !1), c.resetLessonState());
            }
          );
        },
        [d],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          !R && m && openNotificationWithIcon(p, m);
        },
        [m],
      ),
      isOpen ? (
        <React.Fragment>
          {!chapterId && contextHolder}
          {React.createElement(il, {
            isOpen: isOpen,
            loading: R,
            saving: w,
            onClose: function () {
              w || R || onClose();
            },
            onSave: function () {
              I && (v ? B() : W());
            },
            onPreview: function () {
              null != u && u.preview_url && window.open(u.preview_url, '_blank');
            },
            title: (0, I18n.__)('Live Session (Google Meet)', 'ohmylms'),
            saveLabel: v
              ? (0, I18n.__)('Update Meeting', 'ohmylms')
              : (0, I18n.__)('Create Meeting', 'ohmylms'),
            saveDisabled:
              ((l = (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date)),
              !(
                null != u &&
                null !== (o = u.topic) &&
                void 0 !== o &&
                o.trim() &&
                null != u &&
                null !== (i = u.agenda) &&
                void 0 !== i &&
                i.trim() &&
                P &&
                l &&
                parseInt(null == u ? void 0 : u.duration, 10) > 0
              ) ||
                w ||
                !I),
            SettingsPanel: ul,
            editor: {
              topic: null == u ? void 0 : u.topic,
              agenda: null == u ? void 0 : u.agenda,
              onChange: V,
              disabled: !I,
            },
            settings: {
              timezone: P,
              timezoneOptions: co,
              date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
              duration: null == u ? void 0 : u.duration,
              recordingBlockProps: G.blockProps,
              showRecordingBlock: !!v,
              onChange: V,
              attachments: (null == u ? void 0 : u.attachments) || [],
              onAddFiles: function (e) {
                return H({
                  attachments: [].concat(Bl((null == u ? void 0 : u.attachments) || []), Bl(e)),
                });
              },
              onRemoveFile: function (e) {
                return H({
                  attachments: ((null == u ? void 0 : u.attachments) || []).filter(function (t) {
                    return t.id !== e;
                  }),
                });
              },
              disabled: !I,
            },
          })}
        </React.Fragment>
      ) : null
    );
  };
}
