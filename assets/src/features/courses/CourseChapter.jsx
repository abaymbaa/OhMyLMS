/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseChapter(readRuntime) {
  return function CourseChapter(props) {
    const {
      $l,
      Al,
      E,
      Jl,
      Kl,
      React,
      T: StoreModule,
      Ul,
      Zl,
      _,
      f: Router,
      g: ReactHooks,
      ga,
      ie,
      oo,
      ot,
      ql,
      wt,
      y: WordPressData
    } = readRuntime();
    var t,
      chapter = props.chapter,
      chapterId = props.chapterId,
      courseId = props.courseId,
      onDelete = props.onDelete,
      chapterIndex = props.chapterIndex,
      isActive = props.isActive,
      onExpand = props.onExpand,
      setAutoSave = props.setAutoSave,
      handleAutomation = props.handleAutomation,
      handleIntegration = props.handleIntegration,
      setIsDraggableItem = props.setIsDraggableItem,
      setIsSaved = props.setIsSaved,
      activeIndex = props.activeIndex,
      b = (props.showEdit, props.setShowEdit, props.handleSaveName),
      w = (0, Router.g)().id,
      S = false,
      R = (0, WordPressData.useDispatch)('ohmylms/store'),
      x = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourse();
      }, []),
      C = $l((0, ReactHooks.useState)(chapter.name || chapter.title), 2),
      P = (C[0], C[1]),
      O = $l((0, ReactHooks.useState)(chapter.description || ''), 2),
      k = O[0],
      j = O[1],
      A = $l((0, ReactHooks.useState)(0 === chapterIndex ? ['1'] : []), 2),
      M = A[0],
      I = A[1],
      F = $l((0, ReactHooks.useState)(!1), 2),
      N = F[0],
      D = F[1],
      W = $l((0, ReactHooks.useState)(!1), 2),
      z = W[0],
      B = W[1],
      L = $l((0, ReactHooks.useState)(!1), 2),
      V = L[0],
      H = L[1],
      G = $l((0, ReactHooks.useState)(!1), 2),
      U = G[0],
      q = G[1],
      Y = $l((0, ReactHooks.useState)(!1), 2),
      Q = Y[0],
      Z = Y[1],
      $ = $l((0, ReactHooks.useState)(!1), 2),
      K = $[0],
      J = $[1],
      X = (0, WordPressData.useSelect)(function (e) {
        return e('ohmylms/store').getCourseChaptersContent();
      }, [chapterId]),
      ee = S ? (null === (t = x[w - 1]) || void 0 === t || null === (t = t.chapters.find(function (e) {
        return e.id === chapterId;
      })) || void 0 === t ? void 0 : t.content) || [] : X,
      te = (0, ReactHooks.useRef)(null),
      ne = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getChapterLastIndex();
      }, []);
    (0, ReactHooks.useEffect)(function () {
      chapterIndex === (null == ne ? void 0 : ne.lastIndex) && I(function (e) {
        return e.includes('1') ? [] : ['1'];
      });
    }, [ne]);
    var re = (0, ReactHooks.useCallback)(E()(function (e, t) {
      R.updateChapterFields(e, t);
    }, 300), [R]);
    (0, ReactHooks.useEffect)(function () {
      k !== (chapter.description || '') && re(chapter.id, {
        description: k
      });
    }, [k, chapter.id, re]), (0, ReactHooks.useEffect)(function () {
      var e = !0;
      return e && M.length > 0 && !S && R.getLessonByChapterId(chapterId), function () {
        e = !1;
      };
    }, [chapterId, M, S]);
    var ae = function (e) {
        var t,
          n = null === (t = Object.values(e)) || void 0 === t ? void 0 : t.map(function (e) {
            var t;
            return parseInt(null !== (t = null == e ? void 0 : e.order_number) && void 0 !== t ? t : 0, 10);
          });
        return n.length ? Math.max.apply(Math, function (e) {
          return function (e) {
            if (Array.isArray(e)) return Jl(e);
          }(e) || function (e) {
            if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator']) return Array.from(e);
          }(e) || Kl(e) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
          }();
        }(n)) : 0;
      },
      oe = function () {
        var e = Zl(ql().m(function e(t) {
          var n,
            r,
            a,
            o,
            i,
            l = arguments;
          return ql().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return n = l.length > 1 && void 0 !== l[1] ? l[1] : 'text', e.p = 1, B(!0), r = ae(ee.byId), a = parseInt(null != r ? r : 0) + 1, e.n = 2, R.addLesson({
                  type: n,
                  name: '',
                  status: 'publish',
                  order_number: a
                }, t);
              case 2:
                (o = e.v) && (D(!1), H(!0), R.setSelectedLessonId(o)), e.n = 4;
                break;
              case 3:
                e.p = 3, i = e.v, console.error(i);
              case 4:
                return e.p = 4, B(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[1, 3, 4, 5]]);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
      le = function () {
        var e = Zl(ql().m(function e() {
          var t, n, a;
          return ql().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return B(!0), t = ae(ee.byId), n = t + 1, e.n = 1, R.addQuiz({
                  name: 'Untitled',
                  type: 'quiz',
                  description: '',
                  order_number: n
                }, chapterId);
              case 1:
                a = e.v, B(!1), D(!1), R.setIsOpenQuizBuilder(!0), R.setSelectedQuizId(a);
              case 2:
                return e.a(2);
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      ce = function () {
        var e = Zl(ql().m(function e() {
          var t, n, a;
          return ql().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return B(!0), t = ae(ee.byId), n = parseInt(t) + 1, e.n = 1, R.addAssignment({
                  type: 'assignment',
                  name: 'Untitled',
                  status: 'publish',
                  order_number: n
                }, chapterId);
              case 1:
                a = e.v, B(!1), D(!1), q(!0), R.setSelectedAssignmentId(a);
              case 2:
                return e.a(2);
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      ue = (0, ReactHooks.useCallback)(function (e) {
        if (e.target.closest('.ant-collapse-arrow')) return I(function (e) {
          return e.includes('1') ? [] : ['1'];
        }), void onExpand(isActive ? null : chapterId);
        I(['1']), onExpand(chapterId);
      }, []);
    return <React.Fragment>
        {activeIndex === chapterId && <div className={'ohmylms-single-chapter-content-item'}>
            {React.createElement(ie, {
          name: chapter.name || chapter.title,
          description: k,
          setName: function (e) {
            P(e), R.updateChapterFields(chapterId, {
              name: e
            });
          },
          setDescription: j,
          chapterId: chapterId,
          courseId: courseId,
          onDelete: onDelete,
          isActive: isActive,
          setAutoSave: setAutoSave,
          tabKey: '1',
          handleOpenChapter: ue,
          setIsDraggableItem: setIsDraggableItem,
          setIsSaved: setIsSaved,
          handleSaveName: b
        })}
            <React.Suspense fallback={<_.A active={!0} />}>
              {React.createElement(ot, {
            chapter: chapter,
            contents: ee,
            handleCreateLesson: function () {
              te.current = document.activeElement, D(!0);
            },
            handleLessonEdit: function (e, t, n) {
              'quiz' === t ? (R.setSelectedQuizId(e), R.setIsOpenQuizBuilder(!0)) : 'assignment' === t ? (q(!0), R.setSelectedAssignmentId(e)) : 'session' === t ? (R.setSelectedLessonId(e), 'zoom' === n ? (J(!1), Z(!0)) : 'googlemeet' === n && (Z(!1), J(!0))) : (H(!0), R.setSelectedLessonId(e));
            },
            courseId: courseId,
            handleAutomation: handleAutomation,
            handleIntegration: handleIntegration
          })}
            </React.Suspense>
          </div>}
        {N && React.createElement(wt, {
        openModal: N,
        setOpenModal: D,
        handleCreateLesson: function (e) {
          'assignment' === e ? ce() : null != chapter && chapter.id && oe(null == chapter ? void 0 : chapter.id, e);
        },
        handleCreateQuiz: le,
        loader: z,
        lastFocusedElement: te,
        handleOpenZoom: function () {
          D(!1), J(!1), Z(!0);
        },
        handleOpenGoogleMeet: function () {
          D(!1), Z(!1), J(!0);
        },
        chapterId: chapterId,
        courseId: courseId
      })}
        {Q && <Al isOpen={Q} onClose={function () {
        return Z(!1);
      }} chapterId={chapterId} courseId={courseId} />}
        {K && <Ul isOpen={K} onClose={function () {
        J(!1), R.setSelectedLessonId(null);
      }} chapterId={chapterId} courseId={courseId} />}
        {V && React.createElement(ga, {
        openModal: V,
        setOpenModal: H,
        chapterId: chapterId,
        handleAutomation: handleAutomation
      })}
        {U && React.createElement(oo, {
        openModal: U,
        setOpenModal: q,
        chapterId: chapterId,
        handleAutomation: handleAutomation
      })}
      </React.Fragment>;
  };
}
