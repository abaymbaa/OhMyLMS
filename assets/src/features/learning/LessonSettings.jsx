/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createLessonSettings(readRuntime) {
  return function LessonSettings(props) {
    const {
      $n,
      Dn: DownloadResources,
      Gn: DeleteLearningItem,
      He,
      I: Controls,
      Jn,
      Kt,
      L: Entitlements,
      Pn: DripSettings,
      Qn,
      React,
      Rt,
      T: StoreModule,
      Xn,
      b: I18n,
      cn: PrerequisiteSettings,
      g: ReactHooks,
      l,
      qn,
      sn,
      y: WordPressData,
      zt,
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o,
      i,
      c,
      u,
      s = true,
      lesson = props.lesson,
      chapterId = props.chapterId,
      setOpenModal = props.setOpenModal,
      byId = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourseChapters();
      }, []).byId,
      v = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourseChaptersContent();
      }, []),
      h = byId && byId[chapterId],
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
          Xn(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })((0, ReactHooks.useState)(!1), 2),
      w = _[0],
      E = _[1],
      S = (0, WordPressData.useDispatch)(StoreModule.default),
      R =
        'cohort-based' ===
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getCourseType();
        }, []),
      x = (function () {
        var e,
          t =
            ((e = $n().m(function e() {
              var t,
                n,
                r,
                a,
                o,
                i,
                c = arguments;
              return $n().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return (
                        (t = c.length > 0 && void 0 !== c[0] ? c[0] : ''),
                        (e.n = 1),
                        l()({
                          path: '/ohmylms/v1/chapters/'
                            .concat(chapterId, '/search-contents?term=')
                            .concat(t),
                          method: 'GET',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 1:
                      return (
                        (n = e.v),
                        (r = null == h ? void 0 : h.content.map(String)),
                        (a = r.indexOf(String(lesson.id))),
                        (o = n.data.filter(function (e) {
                          return (
                            (null == e ? void 0 : e.value) != lesson.id &&
                            r.indexOf(String(null == e ? void 0 : e.value)) < a
                          );
                        })),
                        (i = o.filter(function (e) {
                          var t, n, r, a, o;
                          return !(
                            (null !== (t = null == v ? void 0 : v.byId) && void 0 !== t
                              ? t
                              : null == v
                                ? void 0
                                : v.byId[e.value]) &&
                            null != v &&
                            null !== (n = v.byId[e.value]) &&
                            void 0 !== n &&
                            n.prerequisites &&
                            null != v &&
                            null !== (r = v.byId[e.value]) &&
                            void 0 !== r &&
                            null !== (r = r.prerequisites) &&
                            void 0 !== r &&
                            r.enable &&
                            (null == v ||
                            null === (a = v.byId[e.value]) ||
                            void 0 === a ||
                            null === (a = a.prerequisites) ||
                            void 0 === a ||
                            null === (a = a.data) ||
                            void 0 === a
                              ? void 0
                              : a.length) > 0 &&
                            (null == v ||
                            null === (o = v.byId[e.value]) ||
                            void 0 === o ||
                            null === (o = o.prerequisites) ||
                            void 0 === o
                              ? void 0
                              : o.data
                            ).some(function (e) {
                              return e.value == lesson.id;
                            })
                          );
                        })),
                        e.a(2, {
                          data: i,
                        })
                      );
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  Jn(o, r, a, i, l, 'next', e);
                }
                function l(e) {
                  Jn(o, r, a, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      C = (0, ReactHooks.useCallback)(
        function () {
          null != lesson &&
            lesson.id &&
            (S.deleteLessonFromChapter(null == lesson ? void 0 : lesson.id, chapterId),
            setOpenModal(!1));
        },
        [chapterId, lesson, S],
      ),
      P = (0, ReactHooks.useCallback)(
        function (e) {
          Number(e) < 1 ||
            S.setLesson(
              Qn(
                Qn({}, lesson),
                {},
                {
                  drip_settings: Qn(
                    Qn({}, lesson.drip_settings),
                    {},
                    {
                      days: e,
                    },
                  ),
                },
              ),
            );
        },
        [S, lesson],
      );
    return (
      <React.Fragment>
        <Controls.SpacerWP paddingX={5} paddingTop={5} paddingBottom={0}>
          <Controls.FlexWP align={'center'} gap={3} justify={'flex-start'}>
            <Rt />
            {(0, I18n.__)('Settings', 'ohmylms')}
          </Controls.FlexWP>
        </Controls.SpacerWP>
        {React.createElement(zt, {
          visibility: null == lesson ? void 0 : lesson.status,
          onVisibilityChange: function (e) {
            S.setLesson(
              Qn(
                Qn({}, lesson),
                {},
                {
                  status: e,
                },
              ),
            );
          },
        })}
        <Kt
          title={(0, I18n.__)('Allow Lesson Preview', 'ohmylms')}
          tooltip={(0, I18n.__)(
            'Allow students to preview the lesson without enrolling in the course.',
            'ohmylms',
          )}
          onChange={function () {
            S.setLesson(
              Qn(
                Qn({}, lesson),
                {},
                {
                  preview_enable: !(null != lesson && lesson.preview_enable),
                },
              ),
            );
          }}
          isChecked={null == lesson ? void 0 : lesson.preview_enable}
        />
        {chapterId && (
          <PrerequisiteSettings
            title={(0, I18n.__)('Prerequisites', 'ohmylms')}
            tooltip={(0, I18n.__)(
              'Set content that students must complete before accessing this one.',
              'ohmylms',
            )}
            onChange={function () {
              var e;
              S.setLesson(
                Qn(
                  Qn({}, lesson),
                  {},
                  {
                    prerequisites: Qn(
                      Qn({}, lesson.prerequisites),
                      {},
                      {
                        enable: !(
                          null != lesson &&
                          null !== (e = lesson.prerequisites) &&
                          void 0 !== e &&
                          e.enable
                        ),
                      },
                    ),
                  },
                ),
              );
            }}
            isChecked={
              null == lesson || null === (t = lesson.prerequisites) || void 0 === t
                ? void 0
                : t.enable
            }
            childTitle={(0, I18n.__)(
              'Members can access this content if they have completed all of the following content:',
              'ohmylms',
            )}
            childPlaceholder={(0, I18n.__)('Type to search course modules', 'ohmylms')}
            childNotFoundMessage={(0, I18n.__)('No Lessons Found', 'ohmylms')}
            isMultiple={!0}
            onSearch={x}
            onChildChange={function (e) {
              var t = e.map(function (e) {
                return {
                  label: e.label,
                  value: e.value,
                };
              });
              S.setLesson(
                Qn(
                  Qn({}, lesson),
                  {},
                  {
                    prerequisites: Qn(
                      Qn({}, lesson.prerequisites),
                      {},
                      {
                        data: qn(t),
                      },
                    ),
                  },
                ),
              );
            }}
            defaultValue={
              null == lesson || null === (n = lesson.prerequisites) || void 0 === n
                ? void 0
                : n.data
            }
          />
        )}
        <DripSettings
          onChange={function () {
            {
              var e = !lesson.drip_settings.enable;
              S.setLesson(
                Qn(
                  Qn({}, lesson),
                  {},
                  {
                    drip_settings: Qn(
                      Qn({}, null == lesson ? void 0 : lesson.drip_settings),
                      {},
                      {
                        enable: e,
                      },
                      e && {
                        type: R ? 'cohort-start' : 'enrollment-from-x-days',
                      },
                    ),
                  },
                ),
              );
            }
          }}
          onDripFeedTypeChange={function (e) {
            {
              var t,
                n,
                r = Qn(
                  Qn({}, lesson.drip_settings),
                  {},
                  {
                    type: e,
                  },
                );
              if ('specific-date' === e)
                (delete r.days,
                  (r.date =
                    (null == lesson || null === (t = lesson.drip_settings) || void 0 === t
                      ? void 0
                      : t.date) || sn()(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSSD')),
                  (r.time =
                    (null == lesson || null === (n = lesson.drip_settings) || void 0 === n
                      ? void 0
                      : n.time) || sn()(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSSD')));
              else if ('cohort-from-x-days' === e || 'enrollment-from-x-days' === e) {
                var a;
                (delete r.date,
                  delete r.time,
                  (r.days =
                    (null == lesson || null === (a = lesson.drip_settings) || void 0 === a
                      ? void 0
                      : a.days) || 1));
              } else 'cohort-start' === e && (delete r.days, delete r.date, delete r.time);
              S.setLesson(
                Qn(
                  Qn({}, lesson),
                  {},
                  {
                    drip_settings: r,
                  },
                ),
              );
            }
          }}
          handleDripDatePickerChange={function (e, t) {
            S.setLesson(
              Qn(
                Qn({}, lesson),
                {},
                {
                  drip_settings: Qn(
                    Qn({}, lesson.drip_settings),
                    {},
                    {
                      date: e ? sn()(e).format('YYYY-MM-DDTHH:mm:ss.SSS') : null,
                    },
                  ),
                },
              ),
            );
          }}
          handleDripTimePickerChange={function (e) {
            S.setLesson(
              Qn(
                Qn({}, lesson),
                {},
                {
                  drip_settings: Qn(
                    Qn({}, lesson.drip_settings),
                    {},
                    {
                      time: e ? sn()(e).format('YYYY-MM-DDTHH:mm:ss.SSS') : null,
                    },
                  ),
                },
              ),
            );
          }}
          handleDayChange={P}
          isChecked={
            null == lesson || null === (r = lesson.drip_settings) || void 0 === r
              ? void 0
              : r.enable
          }
          dripFeedType={
            null == lesson || null === (a = lesson.drip_settings) || void 0 === a ? void 0 : a.type
          }
          dripDate={
            (null == lesson || null === (o = lesson.drip_settings) || void 0 === o
              ? void 0
              : o.date) || sn()().startOf('day').format('YYYY-MM-DD')
          }
          dripTime={
            (null == lesson || null === (i = lesson.drip_settings) || void 0 === i
              ? void 0
              : i.time) || new Date()
          }
          enrollmentFromXDays={
            null == lesson || null === (c = lesson.drip_settings) || void 0 === c ? void 0 : c.days
          }
          isCohortBased={R}
        />
        <DownloadResources
          resources={
            (null == lesson || null === (u = lesson.download_resource) || void 0 === u
              ? void 0
              : u.file) || []
          }
          handleResources={function (e) {
            var t;
            S.setLesson(
              Qn(
                Qn({}, lesson),
                {},
                {
                  download_resource: Qn(
                    Qn({}, null == lesson ? void 0 : lesson.download_resource),
                    {},
                    {
                      file: [].concat(
                        qn(
                          (null == lesson || null === (t = lesson.download_resource) || void 0 === t
                            ? void 0
                            : t.file) || [],
                        ),
                        qn(e),
                      ),
                    },
                  ),
                },
              ),
            );
          }}
          handleDeleteResource={function (e) {
            var t,
              n =
                null == lesson ||
                null === (t = lesson.download_resource) ||
                void 0 === t ||
                null === (t = t.file) ||
                void 0 === t
                  ? void 0
                  : t.filter(function (t) {
                      return t.id !== e;
                    });
            S.setLesson(
              Qn(
                Qn({}, lesson),
                {},
                {
                  download_resource: Qn(
                    Qn({}, lesson.download_resource),
                    {},
                    {
                      file: n,
                    },
                  ),
                },
              ),
            );
          }}
          tooltipText={(0, I18n.__)(
            'Upload downloadable files or materials for students to access with this lesson.',
            'ohmylms',
          )}
        />
        {chapterId && (
          <Controls.SpacerWP padding={5} marginBottom={0}>
            <DeleteLearningItem
              label={(0, I18n.__)('Delete Lesson', 'ohmylms')}
              onDelete={C}
              alertTitle={(0, I18n.__)('Delete Lesson', 'ohmylms')}
              alertDescription={(0, I18n.__)(
                'Are you sure you want to delete this lesson?',
                'ohmylms',
              )}
              className={'ohmylms-lesson-settings-delete-button'}
            />
          </Controls.SpacerWP>
        )}
        {w && (
          <React.Fragment>
            <He.default isOpen={w} onClose={E} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };
}
