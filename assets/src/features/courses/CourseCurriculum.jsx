/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseCurriculum(readRuntime) {
  return function CourseCurriculum(props) {
    const {
      $p,
      Cp,
      D: Buttons,
      I: Controls,
      Ip,
      Jp,
      React,
      T: StoreModule,
      Xl,
      Ze,
      _,
      _f,
      b: I18n,
      bf,
      df,
      ef,
      f: Router,
      ff,
      g: ReactHooks,
      gf,
      hf,
      lc,
      uf,
      y: WordPressData,
    } = readRuntime();
    var t,
      n,
      courseId = props.courseId,
      a = void 0 === courseId ? null : courseId,
      handleAutomation = props.handleAutomation,
      handleIntegration = props.handleIntegration,
      setIsSaved = props.setIsSaved,
      setAutoSave = props.setAutoSave,
      u =
        (props.setActiveStep,
        props.activeStep,
        props.onSave,
        props.courseDescription,
        props.handleInputChange),
      onContentChange = props.onContentChange,
      handleRemoveMedia = props.handleRemoveMedia,
      handleUploadComplete = props.handleUploadComplete,
      p = (props.hasMedia, (0, Router.g)().id),
      v = Ze(),
      w = (0, WordPressData.useDispatch)(StoreModule.default),
      E = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAISuggestedCourses();
      }, []),
      S =
        ((0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getCourse();
        }, []),
        _f((0, ReactHooks.useState)(!1), 2)),
      R = (S[0], S[1], _f((0, ReactHooks.useState)([]), 2)),
      x = R[0],
      C = R[1],
      P = _f((0, ReactHooks.useState)([]), 2),
      O = (P[0], P[1]),
      k = _f((0, ReactHooks.useState)([]), 2),
      j = (k[0], k[1]),
      A = _f((0, ReactHooks.useState)(null), 2),
      M = A[0],
      F = A[1],
      N = _f((0, ReactHooks.useState)(!1), 2),
      W = N[0],
      z = N[1],
      B = _f((0, ReactHooks.useState)(null), 2),
      L = B[0],
      V = B[1],
      H = _f((0, ReactHooks.useState)(!0), 2),
      G = H[0],
      U = H[1],
      q = _f((0, ReactHooks.useState)(!0), 2),
      Y = q[0],
      Q = q[1],
      Z = _f((0, ReactHooks.useState)(0), 2),
      $ = Z[0],
      K = Z[1],
      J = _f((0, ReactHooks.useState)(!1), 2),
      X = (J[0], J[1]),
      ee = _f((0, ReactHooks.useState)(!1), 2),
      te = ee[0],
      ne = ee[1],
      re = (0, ReactHooks.useRef)(null),
      ae = (0, ReactHooks.useRef)(null),
      oe = _f((0, ReactHooks.useState)(null), 2),
      ie = (oe[0], oe[1]),
      le = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourseChapterSidebarOpen();
      }),
      ce = (0, WordPressData.useSelect)(
        function (e) {
          return a ? e(StoreModule.default).getCourseChapters(a) : {};
        },
        [a],
      ),
      ue = v ? (null === (t = E[p - 1]) || void 0 === t ? void 0 : t.chapters) : ce,
      se = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectCoursesLoading();
      }, []),
      de = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getIsOpenQuizBuilder();
      }, []),
      me = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourseInfoOpen();
      }),
      pe = (function () {
        var e,
          t =
            ((e = hf().m(function e() {
              var t;
              return hf().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return (
                        X(!0),
                        Object.values(ce.byId).reduce(function (e, t) {
                          return Math.max(e, t.order_number);
                        }, 0),
                        (e.n = 1),
                        w.addChapter(
                          {
                            name: '',
                            description: '',
                            status: 'publish',
                            order_number: Object.values(ue.byId).length,
                          },
                          a,
                        )
                      );
                    case 1:
                      ((t = e.v), ge(t), K(t), X(!1));
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
                  bf(o, r, a, i, l, 'next', e);
                }
                function l(e) {
                  bf(o, r, a, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    ((0, ReactHooks.useEffect)(
      function () {
        if (null != ue && ue.byId) {
          var e,
            t = Object.values(ue.byId).sort(function (e, t) {
              return (
                Number(null == e ? void 0 : e.order_number) -
                Number(null == t ? void 0 : t.order_number)
              );
            });
          (C(t),
            t.forEach(function (e, t) {
              setTimeout(function () {
                O(function (t) {
                  return [].concat(gf(t), [e.id]);
                });
              }, 50 * t);
            }),
            $ || K(null === (e = t[0]) || void 0 === e ? void 0 : e.id));
        } else if (v && (null == E ? void 0 : E.length) > 0) {
          var n;
          (C(E[p - 1].chapters),
            O(
              E[p - 1].chapters.map(function (e) {
                return e.id;
              }),
            ),
            K(null === (n = E[p - 1].chapters[0]) || void 0 === n ? void 0 : n.id));
        }
      },
      [ue],
    ),
      (0, ReactHooks.useEffect)(
        function () {
          var e;
          if (x.length > 0 && !L && !M && G)
            (V(null === (e = x[0]) || void 0 === e ? void 0 : e.id), U(!1));
          else if (1 === x.length) {
            var t;
            (V(null === (t = x[0]) || void 0 === t ? void 0 : t.id), U(!1));
          } else if (0 < x.length && !L) {
            var n;
            (V(null === (n = x[0]) || void 0 === n ? void 0 : n.id), U(!1));
          }
          return function () {
            U(!1);
          };
        },
        [x],
      ),
      (0, ReactHooks.useEffect)(function () {
        var e = re.current,
          t = ae.current;
        if (e && t) {
          var n = function () {
              var n = e.offsetHeight,
                r = t.offsetHeight;
              ie(n > r ? 'left' : r > n ? 'right' : null);
            },
            r = new ResizeObserver(n);
          return (
            r.observe(e),
            r.observe(t),
            n(),
            function () {
              r.disconnect();
            }
          );
        }
      }, []));
    var fe = function (e) {
        for (
          var t = function (e) {
              return (
                e.classList.contains('ohmylms-draggable-single-chapter') &&
                e.hasAttribute('draggable') &&
                'true' === e.getAttribute('draggable')
              );
            },
            n = e;
          n;
        ) {
          if (t(n)) return !0;
          n = n.parentElement;
        }
        return !1;
      },
      ve = function (e) {
        (w.setCourseLoading(!0),
          j(function (t) {
            return [].concat(gf(t), [e]);
          }),
          setTimeout(function () {
            var t = x.filter(function (t) {
              return t.id !== e;
            });
            (C(t),
              O(function (t) {
                return t.filter(function (t) {
                  return t !== e;
                });
              }),
              j(function (t) {
                return t.filter(function (t) {
                  return t !== e;
                });
              }),
              e == $ && K(t.length > 0 ? t[0].id : null),
              w.setCourseLoading(!1));
          }, 500));
      };
    if (!a) return null;
    var ge = function (e) {
        V(e);
      },
      he = function (e, t) {
        (w.updateChapterFields(e, {
          name: t,
        }),
          ne(!1));
      };
    return (
      <React.Fragment>
        <Controls.FlexWP align={'start'} justify={'start'} gap={0}>
          <Controls.FlexItemWP
            className={'ohmylms-chapter-sidebar '.concat(le ? 'ohmylms-chapter-sidebar-open' : '')}
          >
            {React.createElement(lc, {
              courseId: a,
              setActiveIndex: K,
              onExpand: ge,
              activeChapters: x,
            })}
            {se ? (
              <React.Fragment>
                <_.A active={!0} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className={'ohmylms-chapter-nav-wrapper'}>
                  {x.length > 0 &&
                    x.map(function (e, t) {
                      return (
                        <div
                          key={null == e ? void 0 : e.id}
                          draggable={!W && !v && Y}
                          onDragStart={function (t) {
                            return (function (e, t) {
                              (e.stopPropagation(),
                                fe(e.target) &&
                                  !W &&
                                  ((e.dataTransfer.dropEffect = 'copyMove'), F(t)));
                            })(t, e.id);
                          }}
                          onDragOver={function (t) {
                            return (function (e, t) {
                              if ((e.preventDefault(), M !== t && !W && fe(e.target))) {
                                var n = x.findIndex(function (e) {
                                    return e.id === M;
                                  }),
                                  r = x.findIndex(function (e) {
                                    return e.id === t;
                                  }),
                                  a = gf(x),
                                  o = _f(a.splice(n, 1), 1)[0];
                                a.splice(r, 0, o);
                                var i = [],
                                  l = a.filter(function (e) {
                                    var t = i.includes(e.id);
                                    return (t || i.push(e.id), !t);
                                  });
                                C(l);
                              }
                            })(t, e.id);
                          }}
                          onDrop={function (e) {
                            return (function (e) {
                              if (fe(e.target) && !W) {
                                var t = x.map(function (e, t) {
                                  return ff(
                                    ff({}, e),
                                    {},
                                    {
                                      order_number: t + 1,
                                    },
                                  );
                                });
                                (C(t), F(null), w.updateChapterOrdersAPI(a, t));
                              }
                            })(e);
                          }}
                          className={'ohmylms-draggable-single-chapter'}
                        >
                          <Ip
                            chapter={e}
                            chapterId={e.id}
                            courseId={a}
                            onDelete={ve}
                            chapterIndex={e.id}
                            isActive={$ === e.id}
                            onExpand={ge}
                            setIsDraggingContent={z}
                            handleAutomation={handleAutomation}
                            handleIntegration={handleIntegration}
                            setIsDraggableItem={Q}
                            setIsSaved={setIsSaved}
                            activeIndex={$}
                            setActiveIndex={K}
                            index={t}
                            showEdit={te}
                            setShowEdit={ne}
                            handleSaveName={he}
                          />
                        </div>
                      );
                    })}
                </div>
              </React.Fragment>
            )}
          </Controls.FlexItemWP>
          <Controls.FlexItemWP
            className={'ohmylms-chapter-preview '
              .concat(le ? 'ohmylms-chapter-sidebar-open' : '', ' ')
              .concat(me ? '' : 'ohmylms-course-info-closed')}
          >
            <div
              className={'ohmylms-course-info-wrapper '.concat(
                me ? '' : 'ohmylms-course-info-closed',
              )}
            >
              <$p
                handleInputChange={u}
                onContentChange={onContentChange}
                handleRemoveMedia={handleRemoveMedia}
                handleUploadComplete={handleUploadComplete}
              />
              <Buttons.A
                variant={'tertiary'}
                onClick={function () {
                  w.setCourseInfoOpen(!me);
                }}
                className={'ohmylms-course-info-toggle'}
                icon={me ? <Jp /> : React.createElement(ef, null)}
              />
            </div>
            <Controls.SpacerWP
              marginTop={2}
              paddingX={4}
              className={'ohmylms-chapter-content-wrapper'}
            >
              <Controls.FlexWP
                align={'start'}
                justify={'space-between'}
                gap={2}
                direction={'column'}
                className={'ohmylms-chapter-contents-wrapper'}
              >
                <div className={'ohmylms-chapter-contents'}>
                  {x.length > 0 ? (
                    x.map(function (e, t) {
                      return (
                        <React.Suspense
                          fallback={<_.A active={!0} />}
                          key={null == e ? void 0 : e.id}
                        >
                          <Xl
                            chapter={e}
                            chapterId={e.id}
                            courseId={a}
                            setAutoSave={setAutoSave}
                            onDelete={ve}
                            chapterIndex={e.id}
                            isActive={L === e.id}
                            onExpand={ge}
                            setIsDraggingContent={z}
                            handleAutomation={handleAutomation}
                            handleIntegration={handleIntegration}
                            setIsDraggableItem={Q}
                            setIsSaved={setIsSaved}
                            activeIndex={$}
                            showEdit={te}
                            setShowEdit={ne}
                            handleSaveName={he}
                          />
                        </React.Suspense>
                      );
                    })
                  ) : (
                    <React.Fragment>
                      <Controls.FlexWP align={'center'} justify={'center'}>
                        {React.createElement(uf, {
                          icon: React.createElement(df, null),
                          title: (0, I18n.__)('No chapter found!', 'ohmylms'),
                          description: (0, I18n.__)(
                            'Add your first chapter to get started.',
                            'ohmylms',
                          ),
                          ctaText: (0, I18n.__)('Add Chapter', 'ohmylms'),
                          ctaHandler: pe,
                        })}
                      </Controls.FlexWP>
                    </React.Fragment>
                  )}
                </div>
              </Controls.FlexWP>
            </Controls.SpacerWP>
          </Controls.FlexItemWP>
        </Controls.FlexWP>
        {de && <Cp chapterId={null === (n = x[0]) || void 0 === n ? void 0 : n.id} />}
      </React.Fragment>
    );
  };
}
