/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAssignmentEditor(readRuntime) {
  return function AssignmentEditor(props) {
    const {
      $a,
      Br,
      Da: AssignmentSettings,
      I: Controls,
      La,
      React,
      T: StoreModule,
      Ua,
      Va,
      Wr: LearningEditorHeader,
      Ya,
      Za,
      b: I18n,
      f: Router,
      g: ReactHooks,
      qa,
      y: WordPressData,
      ya: AssignmentContent,
      z: Notifications,
      za,
    } = readRuntime();
    var t = (0, Notifications.A)(),
      openNotificationWithIcon = t.openNotificationWithIcon,
      contextHolder = t.contextHolder,
      a = props.id,
      chapterId = props.chapterId,
      setOpenModal = props.setOpenModal,
      setLocalData = props.setLocalData,
      c = (0, WordPressData.useDispatch)(StoreModule.default),
      u = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).isLoading();
      }, []),
      s = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAssignment();
      }, []),
      d = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).geSelectedAssignmentId();
      }, []),
      m = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      p = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      v = (0, WordPressData.useSelect)(
        function (e) {
          return e(StoreModule.default).getCourseChaptersContent();
        },
        [chapterId],
      ),
      h = (0, WordPressData.useDispatch)(StoreModule.default),
      getAssignment = h.getAssignment,
      resetAssignmentState = h.resetAssignmentState,
      E = (function (e, t) {
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
              if ('string' == typeof e) return $a(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? $a(e, t)
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
      })(
        (0, ReactHooks.useState)({
          description: '',
        }),
        2,
      ),
      S = E[0],
      R = E[1],
      x = (0, Router.Zp)();
    ((0, ReactHooks.useEffect)(
      function () {
        !u && m && openNotificationWithIcon(p, m);
      },
      [m],
    ),
      (0, ReactHooks.useEffect)(
        function () {
          var e = (function () {
            var e,
              t =
                ((e = Ya().m(function e() {
                  var t;
                  return Ya().w(
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
                            return ((e.n = 2), getAssignment(d));
                          case 2:
                            e.n = 4;
                            break;
                          case 3:
                            ((e.p = 3), (t = e.v), console.error('Error fetching course data:', t));
                          case 4:
                            return e.a(2);
                        }
                    },
                    e,
                    null,
                    [[0, 3]],
                  );
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, a) {
                    var o = e.apply(t, n);
                    function i(e) {
                      Za(o, r, a, i, l, 'next', e);
                    }
                    function l(e) {
                      Za(o, r, a, i, l, 'throw', e);
                    }
                    i(void 0);
                  });
                });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return (
            e(),
            function () {
              resetAssignmentState();
            }
          );
        },
        [d],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          s &&
            R({
              description: (null == S ? void 0 : S.description) || s.description || '',
            });
        },
        [s],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          setLocalData && setLocalData(S);
        },
        [S],
      ));
    var C = function () {
      if (
        La(s) &&
        ((s.description = S.description),
        c.updateAssignment(null == s ? void 0 : s.id, s),
        chapterId)
      ) {
        var e = null == v ? void 0 : v.byId;
        e[null == s ? void 0 : s.id] = s;
        var t = Object.values(e).filter(function (e) {
          return void 0 !== (null == e ? void 0 : e.chapterId)
            ? (null == e ? void 0 : e.chapterId) === chapterId
            : (null == e ? void 0 : e.id) === (null == s ? void 0 : s.id);
        });
        c.setContentsToChapter(chapterId, t);
      }
    };
    return (
      <React.Fragment>
        {!chapterId && contextHolder}
        {!u || (null != s && s.id) ? (
          <React.Fragment>
            {!chapterId && (
              <LearningEditorHeader
                title={(0, I18n.__)('Assignment Outline', 'ohmylms')}
                redirection={'/assignments'}
                rightContent={
                  <React.Fragment>
                    <Controls.ButtonWP
                      variant={'secondary'}
                      onClick={function () {
                        x('/assignment-report/'.concat(a));
                      }}
                      icon={React.createElement(za, null)}
                    >
                      {(0, I18n.__)('Result', 'ohmylms')}
                    </Controls.ButtonWP>
                    <Controls.ButtonWP
                      variant={'secondary'}
                      onClick={function () {
                        null != s &&
                          s.preview_url &&
                          window.open(null == s ? void 0 : s.preview_url, '_blank');
                      }}
                      icon={<Br />}
                    >
                      {(0, I18n.__)('Preview', 'ohmylms')}
                    </Controls.ButtonWP>
                    <Controls.ButtonWP variant={'primary'} onClick={C} disabled={!La(s) || u}>
                      {(0, I18n.__)('Save', 'ohmylms')}
                    </Controls.ButtonWP>
                  </React.Fragment>
                }
              />
            )}
            <Controls.SpacerWP paddingX={chapterId ? 0 : 4} paddingY={2}>
              <Controls.FlexWP align={'stretch'} gap={4}>
                <Controls.FlexBlockWP
                  style={{
                    flex: 3,
                  }}
                >
                  <AssignmentContent
                    assignment={s}
                    handleInputChange={function (e) {
                      c.setAssignment({
                        name: e,
                      });
                    }}
                    handleEditorContentChange={function (e) {
                      R(function (t) {
                        return Ua(
                          Ua({}, t),
                          {},
                          {
                            description: e,
                          },
                        );
                      });
                    }}
                    handleUploadComplete={function (e, t) {
                      switch (t) {
                        case 'video':
                          c.setAssignment(
                            Ua(
                              Ua({}, s),
                              {},
                              {
                                video_id: e.id,
                                video_src: e.url,
                              },
                            ),
                          );
                          break;
                        case 'audio':
                          c.setAssignment(
                            Ua(
                              Ua({}, s),
                              {},
                              {
                                audio_id: e.id,
                                audio_src: e.url,
                              },
                            ),
                          );
                          break;
                        default:
                          c.setAssignment(
                            Ua(
                              Ua({}, s),
                              {},
                              {
                                image_id: e.id,
                                image_src: e.url,
                              },
                            ),
                          );
                      }
                    }}
                    handleRemoveMedia={function (e) {
                      c.setAssignment(
                        Ua(
                          Ua({}, s),
                          {},
                          qa(qa({}, ''.concat(e, '_id'), null), ''.concat(e, '_src'), null),
                        ),
                      );
                    }}
                    setOpenModal={setOpenModal}
                    saveLesson={C}
                    chapterId={chapterId}
                    onExternalUploadComplete={function (e, t) {
                      c.setAssignment(
                        Ua(
                          Ua({}, s),
                          {},
                          {
                            external_url: e.url,
                          },
                        ),
                      );
                    }}
                  />
                </Controls.FlexBlockWP>
                <Controls.FlexBlockWP
                  style={{
                    flex: 2,
                  }}
                >
                  <AssignmentSettings
                    setOpenModal={setOpenModal}
                    assignment={s}
                    chapterId={chapterId}
                  />
                </Controls.FlexBlockWP>
              </Controls.FlexWP>
            </Controls.SpacerWP>
          </React.Fragment>
        ) : (
          <Va.A
            spinning={u}
            delay={0}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999,
            }}
          />
        )}
      </React.Fragment>
    );
  };
}
