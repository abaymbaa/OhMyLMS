/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createLessonEditor(readRuntime) {
  return function LessonEditor(props) {
    const {
      $r,
      Br,
      I: Controls,
      React,
      T: StoreModule,
      Ur,
      Vr,
      Wr: LearningEditorHeader,
      Yr,
      Zr,
      b: I18n,
      g: ReactHooks,
      kr: LessonContent,
      nr: LessonSettings,
      qr,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    var t = (0, Notifications.A)(),
      openNotificationWithIcon = t.openNotificationWithIcon,
      contextHolder = t.contextHolder,
      a = props.id,
      chapterId = props.chapterId,
      setOpenModal = props.setOpenModal,
      setLocalData = props.setLocalData,
      c = (props.handleAutomation, (0, WordPressData.useDispatch)(StoreModule.default)),
      u = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getLesson();
      }, []),
      s = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).geSelectedLessonId();
      }, []),
      d = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      m = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      p = (0, WordPressData.useSelect)(
        function (e) {
          return e(StoreModule.default).getCourseChaptersContent();
        },
        [chapterId],
      ),
      f = (0, WordPressData.useDispatch)(StoreModule.default),
      getLesson = f.getLesson,
      resetLessonState = f.resetLessonState,
      w = $r((0, ReactHooks.useState)(!1), 2),
      E = w[0],
      S = w[1],
      R = $r(
        (0, ReactHooks.useState)({
          description: '',
        }),
        2,
      ),
      x = R[0],
      C = R[1];
    ((0, ReactHooks.useEffect)(
      function () {
        !E && d && openNotificationWithIcon(m, d);
      },
      [d],
    ),
      (0, ReactHooks.useEffect)(
        function () {
          c.setSelectedLessonId(a);
        },
        [a],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          var e = (function () {
            var e,
              t =
                ((e = Yr().m(function e() {
                  var t;
                  return Yr().w(
                    function (e) {
                      for (;;)
                        switch ((e.p = e.n)) {
                          case 0:
                            if (((e.p = 0), s)) {
                              e.n = 1;
                              break;
                            }
                            return e.a(2);
                          case 1:
                            return (S(!0), (e.n = 2), getLesson(s));
                          case 2:
                            e.n = 4;
                            break;
                          case 3:
                            ((e.p = 3), (t = e.v), console.error('Error fetching course data:', t));
                          case 4:
                            return ((e.p = 4), S(!1), e.f(4));
                          case 5:
                            return e.a(2);
                        }
                    },
                    e,
                    null,
                    [[0, 3, 4, 5]],
                  );
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, a) {
                    var o = e.apply(t, n);
                    function i(e) {
                      Zr(o, r, a, i, l, 'next', e);
                    }
                    function l(e) {
                      Zr(o, r, a, i, l, 'throw', e);
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
              resetLessonState();
            }
          );
        },
        [s],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          u &&
            C({
              description: (null == x ? void 0 : x.description) || u.description || '',
            });
        },
        [u],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          setLocalData && setLocalData(x);
        },
        [x],
      ));
    var P = function () {
      if (
        ((u.description = x.description), c.updateLesson(null == u ? void 0 : u.id, u), chapterId)
      ) {
        var e = null == p ? void 0 : p.byId;
        e[null == u ? void 0 : u.id] = u;
        var t = Object.values(e).filter(function (e) {
          return void 0 !== (null == e ? void 0 : e.chapterId)
            ? (null == e ? void 0 : e.chapterId) === chapterId
            : (null == e ? void 0 : e.id) === (null == u ? void 0 : u.id);
        });
        c.setContentsToChapter(chapterId, t);
      }
    };
    return (
      <React.Fragment>
        {!chapterId && contextHolder}
        {!E || (null != u && u.id) ? (
          <React.Fragment>
            {!chapterId && (
              <LearningEditorHeader
                title={(0, I18n.__)('Lesson Outline', 'ohmylms')}
                redirection={'/lessons'}
                className={'omlms-lesson-editor-page-header'}
                rightContent={
                  <React.Fragment>
                    <Controls.ButtonWP
                      onClick={function () {
                        null != u &&
                          u.preview_url &&
                          window.open(null == u ? void 0 : u.preview_url, '_blank');
                      }}
                      icon={<Br />}
                      iconPosition={'right'}
                      className={'omlms-preview-btn'}
                    >
                      {(0, I18n.__)('Preview', 'ohmylms')}
                    </Controls.ButtonWP>
                    <Controls.ButtonWP onClick={P} className={'omlms-lesson-save-btn'}>
                      {(0, I18n.__)('Save', 'ohmylms')}
                    </Controls.ButtonWP>
                  </React.Fragment>
                }
              />
            )}
            <Controls.FlexWP
              className={Vr()(
                'omlms-lesson-editor-wrapper',
                !chapterId && 'omlms-lesson-editor-page',
              )}
              justify={'space-between'}
              gap={5}
            >
              <Controls.FlexItemWP flex={3}>
                <Controls.CardWP fullHeight={!0} isBorderless={!0}>
                  <Controls.SpacerWP padding={5} marginBottom={0}>
                    <LessonContent
                      lesson={u}
                      handleInputChange={function (e) {
                        c.setLesson({
                          name: e,
                        });
                      }}
                      handleEditorContentChange={function (e) {
                        C(function (t) {
                          return Ur(
                            Ur({}, t),
                            {},
                            {
                              description: e,
                            },
                          );
                        });
                      }}
                      handleUploadComplete={function (e, t) {
                        var n = {};
                        switch (t) {
                          case 'video':
                            (c.setLesson(
                              Ur(
                                Ur({}, u),
                                {},
                                {
                                  video_id: e.id,
                                  video_src: e.url,
                                  external_url: '',
                                },
                              ),
                            ),
                              (n = {
                                video_id: e.id,
                                video_src: e.url,
                                external_url: '',
                              }));
                            break;
                          case 'audio':
                            (c.setLesson(
                              Ur(
                                Ur({}, u),
                                {},
                                {
                                  audio_id: e.id,
                                  audio_src: e.url,
                                  external_url: '',
                                },
                              ),
                            ),
                              (n = {
                                audio_id: e.id,
                                audio_src: e.url,
                                external_url: '',
                              }));
                            break;
                          default:
                            (c.setLesson(
                              Ur(
                                Ur({}, u),
                                {},
                                {
                                  image_id: e.id,
                                  image_src: e.url,
                                },
                              ),
                            ),
                              (n = {
                                image_id: e.id,
                                image_src: e.url,
                              }));
                        }
                        c.updateLessonWithoutNotice(null == u ? void 0 : u.id, Ur(Ur({}, u), n));
                      }}
                      handleRemoveMedia={function (e) {
                        var t = Ur(
                          Ur({}, u),
                          {},
                          qr(
                            qr(qr({}, ''.concat(e, '_id'), null), ''.concat(e, '_src'), null),
                            'external_url',
                            null,
                          ),
                        );
                        c.setLesson(t);
                      }}
                      setOpenModal={setOpenModal}
                      saveLesson={P}
                      chapterId={chapterId}
                      onExternalUploadComplete={function (e, t) {
                        (c.setLesson(
                          Ur(
                            Ur({}, u),
                            {},
                            {
                              external_url: e.url,
                              video_id: null,
                              video_src: '',
                              audio_id: null,
                              audio_src: '',
                            },
                          ),
                        ),
                          c.updateLessonWithoutNotice(
                            null == u ? void 0 : u.id,
                            Ur(
                              Ur({}, u),
                              {},
                              {
                                external_url: e.url,
                                video_id: null,
                                video_src: '',
                                audio_id: null,
                                audio_src: '',
                              },
                            ),
                          ));
                      }}
                    />
                  </Controls.SpacerWP>
                </Controls.CardWP>
              </Controls.FlexItemWP>
              <Controls.FlexItemWP flex={2}>
                <Controls.CardWP fullHeight={!0} isBorderless={!0}>
                  <LessonSettings setOpenModal={setOpenModal} lesson={u} chapterId={chapterId} />
                </Controls.CardWP>
              </Controls.FlexItemWP>
            </Controls.FlexWP>
          </React.Fragment>
        ) : (
          <Controls.SkeletonWP rows={10} />
        )}
      </React.Fragment>
    );
  };
}
