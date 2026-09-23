// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const dG = function (e) {
    var t,
      n = e.courseId,
      r = void 0 === n ? null : n,
      a = e.enableSpin,
      o = void 0 !== a && a,
      i = (0, L.useIsPro)(),
      c = (0, f.g)(),
      u = c.id,
      s = c.step,
      d = Ze(),
      m = cG((0, g.useState)(!0), 2),
      p = m[0],
      v = m[1],
      _ = (0, y.useDispatch)(T.default),
      w = (0, y.useSelect)(function (e) {
        return e(T.default).getNotificationMessage();
      }, []),
      E = (0, y.useSelect)(function (e) {
        return e(T.default).getNotificationStatus();
      }, []),
      S = (0, y.useSelect)(function (e) {
        return e(T.default).getAISuggestedCourses();
      }, []),
      R = (0, y.useSelect)(function (e) {
        return e(T.default).getCourse();
      }, []),
      x = d ? S[u - 1] : R,
      C = (0, y.useSelect)(function (e) {
        return e(T.default).getCourseChapters();
      }, []),
      P = cG((0, g.useState)({
        description: ""
      }), 2),
      O = P[0],
      k = P[1],
      j = (0, y.useDispatch)(T.default),
      A = j.getCourse,
      M = j.resetCourseState,
      F = j.getTags,
      N = j.getCategories,
      D = cG((0, g.useState)(!0), 2),
      W = D[0],
      B = D[1],
      V = cG((0, g.useState)(!1), 2),
      H = V[0],
      G = V[1],
      U = cG((0, g.useState)(!1), 2),
      q = U[0],
      Y = U[1],
      Q = cG((0, g.useState)("course"), 2),
      Z = Q[0],
      $ = Q[1],
      K = cG((0, g.useState)("course"), 2),
      J = K[0],
      X = K[1],
      ee = cG((0, g.useState)(null), 2),
      te = ee[0],
      ne = ee[1],
      re = cG((0, g.useState)(null), 2),
      ae = re[0],
      oe = re[1],
      ie = cG((0, g.useState)(!0), 2),
      le = ie[0],
      ce = ie[1],
      ue = cG((0, g.useState)(!0), 2),
      se = (ue[0], ue[1]),
      de = cG((0, g.useState)(null != s ? s : "content"), 2),
      me = de[0],
      pe = de[1],
      fe = cG((0, g.useState)([]), 2),
      ve = fe[0],
      ge = fe[1],
      he = (0, y.useSelect)(function (e) {
        return e(T.default).isValidCourseSettings();
      }),
      ye = ((0, y.useSelect)(function (e) {
        return e(T.default).getCourseInfoOpen();
      }), (0, y.useSelect)(function (e) {
        return e(T.default).getCourseChapterSidebarOpen();
      }), cG((0, g.useState)(!1), 2)),
      be = ye[0],
      _e = ye[1],
      we = (0, z.A)(),
      Ee = we.openNotificationWithIcon,
      Se = we.contextHolder,
      Re = (0, y.useSelect)(function (e) {
        return e(T.default).getAllIntegrations();
      }, []),
      xe = (0, f.Zp)(),
      Ce = JW().totalSteps;
    (0, g.useEffect)(function () {
      if (d) {
        var e = JSON.parse(localStorage.getItem("aiCourseOutline"));
        e && _.setAiCourseOutline(e);
      }
    }, [d]), (0, g.useEffect)(function () {
      var e,
        t = !0,
        n = function () {
          var e = lG(aG().m(function e() {
            var t;
            return aG().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (e.p = 0, r) {
                    e.n = 1;
                    break;
                  }
                  return e.a(2);
                case 1:
                  return B(!0), _.setCourseLoading(!0), e.n = 2, A(r);
                case 2:
                  r ? setTimeout(lG(aG().m(function e() {
                    return aG().w(function (e) {
                      for (;;) switch (e.n) {
                        case 0:
                          _.setCourseLoading(!0), _.setCourseLoading(!1), v(!1);
                        case 1:
                          return e.a(2);
                      }
                    }, e);
                  })), 300) : _.setCourseLoading(!1), e.n = 4;
                  break;
                case 3:
                  e.p = 3, t = e.v, console.error("Error fetching course data:", t);
                case 4:
                  return e.p = 4, B(!1), ce(!1), e.f(4);
                case 5:
                  return e.a(2);
              }
            }, e, null, [[0, 3, 4, 5]]);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
      return !t || o || d || (n(), e = setTimeout(function () {
        F(""), N(""), clearTimeout(e);
      }, 1e3)), t && (document.body.style.background = "#FFFFFF"), function () {
        t = !1, d || M(), clearTimeout(e), document.body.style.background = "#F4F5F7";
      };
    }, [r]), (0, g.useEffect)(function () {
      x && !p && le && (k({
        description: O.description || x.description || ""
      }), Oe());
    }, [x]), (0, g.useEffect)(function () {
      C && !p && le && (k({
        description: O.description || x.description || ""
      }), Oe());
    }, [C]), (0, g.useEffect)(function () {
      x && k(nG(nG({}, O), {}, {
        description: null == x ? void 0 : x.description
      }));
    }, [x]), (0, g.useEffect)(function () {
      s && s !== me ? pe(s) : s || "content" === me || pe("content");
    }, [s, me]);
    var Pe = function () {
        var e = lG(aG().m(function e(t, n, a) {
          var o, i, l, c, u;
          return aG().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return x.description = O.description, o = "publish" === x.status && "publish" === t ? "update" : t, t && (_.setCourse(nG(nG({}, x), {}, {
                  status: t
                })), x.status = t), "future" === t && n && (_.setCourse(nG(nG({}, x), {}, {
                  post_date: n,
                  status: t
                })), x.status = t, x.post_date = n), e.n = 1, _.updateCourse(r, x);
              case 1:
                if (i = e.v, l = C.allIds.map(function (e) {
                  return C.byId[e];
                }), _.saveCourseChapters(r, l), !i) {
                  e.n = 8;
                  break;
                }
                u = o, e.n = "publish" === u ? 2 : "draft" === u ? 3 : "future" === u ? 4 : "update" === u ? 5 : 6;
                break;
              case 2:
                return c = "Course has been published successfully", e.a(3, 7);
              case 3:
                return c = "Course has been saved as draft successfully", e.a(3, 7);
              case 4:
                return c = "Course has been scheduled successfully", e.a(3, 7);
              case 5:
                return c = "Course has been updated successfully", e.a(3, 7);
              case 6:
                return c = "Course has been saved successfully", e.a(3, 7);
              case 7:
                "settings" === a && (c = "Course settings have been saved successfully"), _.showNotification(c, "success");
              case 8:
                ce(!1), se(!0);
              case 9:
                return e.a(2);
            }
          }, e);
        }));
        return function (t, n, r) {
          return e.apply(this, arguments);
        };
      }(),
      Oe = function () {
        var e = lG(aG().m(function e() {
          var t, n;
          return aG().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return x.description = O.description, e.n = 1, _.updateCourseWithoutNotice(r, x);
              case 1:
                return t = e.v, n = C.allIds.map(function (e) {
                  return C.byId[e];
                }), _.saveCourseChaptersWithoutNotice(r, n), ce(!1), se(!0), "untitled" !== (null == x ? void 0 : x.slug) && "" !== (null == x ? void 0 : x.slug) || _.setSlugAndURL(null == t ? void 0 : t.slug, null == t ? void 0 : t.course_url), e.a(2, t);
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
      ke = function () {
        var e = lG(aG().m(function e(t, n) {
          var a, o;
          return aG().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                o = n, e.n = "video" === o ? 1 : 3;
                break;
              case 1:
                return _.setCourse(nG(nG({}, x), {}, {
                  video_id: t.id,
                  video_src: t.url
                })), e.n = 2, _.setFeaturedImage(r, t, "video");
              case 2:
                return e.v, e.a(3, 5);
              case 3:
                return _.setCourse(nG(nG({}, x), {}, {
                  thumbnail_id: t.id,
                  image_src: null !== (a = null == t ? void 0 : t.url) && void 0 !== a ? a : null == t ? void 0 : t.source_url
                })), e.n = 4, _.setFeaturedImage(r, t, "image");
              case 4:
                e.v;
              case 5:
                se(!1);
              case 6:
                return e.a(2);
            }
          }, e);
        }));
        return function (t, n) {
          return e.apply(this, arguments);
        };
      }(),
      je = function () {
        var e = lG(aG().m(function e(t) {
          return aG().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return e.n = 1, _.removeFeaturedImage(r, t);
              case 1:
                se(!1);
              case 2:
                return e.a(2);
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
      Ae = function (e, t, n) {
        var r;
        if (i) {
          if (null === (r = window) || void 0 === r || null === (r = r.creator_lms_params) || void 0 === r || !r.is_mailmint_active) {
            localStorage.setItem("clms_automation_for_what", e), localStorage.setItem("clms_automation_content_id", t), localStorage.setItem("clms_automation_content_name", n), _.setIsProModalOpen(!0), _.updateProModalTitle((0, b.__)("Missing Mail Mint Plugin!", "ohmylms")), _.updateProModalContent((0, b.__)("Mail Mint is required to enable automation. Please install and activate the plugin.", "ohmylms")), _.updateProModalButtonText((0, b.__)("Install and Activate", "ohmylms")), _.updateProModalButtonAction("activate-mail-mint");
            var a = function (e) {
              var t = e.detail,
                n = t.forWhat,
                r = t.contentId,
                a = t.contentName;
              $(n), G(!0), ne(r), oe(a);
            };
            return window.addEventListener("openAutomationModal", a), void (window.removeAutomationListener = function () {
              window.removeEventListener("openAutomationModal", a);
            });
          }
          $(e), G(!0), ne(t), oe(n);
        } else _.setIsProModalOpen(!0);
      },
      Me = function (e, t, n) {
        i ? (X(e), Y(!0), ne(t), oe(n)) : _.setIsProModalOpen(!0);
      };
    (0, g.useEffect)(function () {
      if (localStorage.getItem("omlms_automation_modal_open") && !o) {
        var e = localStorage.getItem("clms_automation_for_what"),
          t = localStorage.getItem("clms_automation_content_id"),
          n = localStorage.getItem("clms_automation_content_name");
        Ae(e, t, n), localStorage.removeItem("omlms_automation_modal_open"), localStorage.removeItem("clms_automation_for_what"), localStorage.removeItem("clms_automation_content_id"), localStorage.removeItem("clms_automation_content_name");
      }
    }, []);
    (0, g.useEffect)(function () {
      var e = !0;
      return e && x && C && (function () {
        var e,
          t,
          n,
          r,
          a = !0;
        null != x && x.name && "" !== (null == x || null === (e = x.name) || void 0 === e ? void 0 : e.trim()) && "Untitled" !== (null == x ? void 0 : x.name) || (a = !1), null != x && x.description && "" !== (null == x || null === (t = x.description) || void 0 === t ? void 0 : t.trim()) || null != O && O.description && "" !== (null == O || null === (n = O.description) || void 0 === n ? void 0 : n.trim()) ? _.setCourse(nG(nG({}, x), {}, {
          description: (null == O ? void 0 : O.description) || (null == x ? void 0 : x.description) || ""
        })) : a = !1, null != x && x.image_src || null != x && x.video_src || (a = !1), 0 == (null == C || null === (r = C.allIds) || void 0 === r ? void 0 : r.length) && (a = !1);
        var o,
          i = !1,
          l = function (e) {
            var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
              if (Array.isArray(e) || (t = uG(e))) {
                t && (e = t);
                var n = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return n >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[n++]
                    };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: r
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var a,
              o = !0,
              i = !1;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                var e = t.next();
                return o = e.done, e;
              },
              e: function (e) {
                i = !0, a = e;
              },
              f: function () {
                try {
                  o || null == t.return || t.return();
                } finally {
                  if (i) throw a;
                }
              }
            };
          }(null == C ? void 0 : C.allIds);
        try {
          for (l.s(); !(o = l.n()).done;) {
            var c,
              u = o.value,
              s = null == C ? void 0 : C.byId[u];
            if ((null == s || null === (c = s.content) || void 0 === c ? void 0 : c.length) > 0) {
              i = !0;
              break;
            }
          }
        } catch (e) {
          l.e(e);
        } finally {
          l.f();
        }
        return i || (a = !1), a;
      }() ? ge(function (e) {
        return [].concat(eG(e), [0]);
      }) : ge(function (e) {
        return e.filter(function (e) {
          return 0 !== e;
        });
      }), "draft" !== (null == x ? void 0 : x.status) ? ge(function (e) {
        return [].concat(eG(e), [2]);
      }) : ge(function (e) {
        return e.filter(function (e) {
          return 2 !== e;
        });
      })), function () {
        e = !1;
      };
    }, [x, C]), (0, g.useEffect)(function () {
      var e = !0;
      return ge(e && he ? function (e) {
        return [].concat(eG(e), [1]);
      } : function (e) {
        return e.filter(function (e) {
          return 1 !== e;
        });
      }), function () {
        e = !1;
      };
    }, [he]), (0, g.useEffect)(function () {
      !W && w && Ee(E, w);
    }, [w]);
    var Te = function () {
      var e = lG(aG().m(function e(t) {
        var n;
        return aG().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/creator-lms/v1/courses/".concat(r),
                method: "POST",
                data: {
                  has_community: t ? "yes" : "no",
                  name: x.name ? x.name : "Untitled"
                }
              });
            case 1:
              e.v ? _.setCourse(nG(nG({}, x), {}, {
                has_community: t ? "yes" : "no"
              })) : console.error("Failed to update community status"), e.n = 3;
              break;
            case 2:
              e.p = 2, n = e.v, console.error("Error updating community status:", n);
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
    return h().createElement(h().Fragment, null, Se, h().createElement("div", {
      className: "omlms-course-builder-wrapper omlms-steps-".concat(Ce)
    }, h().createElement(oz, {
      activeStep: me,
      setActiveStep: pe,
      courseId: r,
      handleAutomation: Ae,
      handleIntegration: Me,
      courseDescription: (null == O ? void 0 : O.description) || (null == x ? void 0 : x.description) || "",
      setLocalCourse: k,
      loading: W,
      courseName: null == x ? void 0 : x.name,
      onSave: Pe,
      isCommunityEnabled: null == Re || null === (t = Re.community) || void 0 === t ? void 0 : t.is_enable
    }), h().createElement("div", {
      className: "omlms-course-builder-content"
    }, W ? h().createElement(h().Fragment, null, h().createElement(I.SkeletonWP, {
      active: !0,
      rows: 10
    })) : h().createElement(h().Fragment, null, "content" === me ? h().createElement(h().Fragment, null, h().createElement(Sf, {
      handleAutomation: Ae,
      handleIntegration: Me,
      courseId: r,
      setIsSaved: se,
      setAutoSave: ce,
      setActiveStep: pe,
      activeStep: me,
      completedSteps: ve,
      setCompletedSteps: ge,
      onSave: Pe,
      courseDescription: (null == O ? void 0 : O.description) || (null == x ? void 0 : x.description) || "",
      handleInputChange: function (e) {
        150 < e.length || (_.setCourse(nG(nG({}, x), {}, {
          name: e
        })), ce(!1), se(!1));
      },
      onContentChange: function (e) {
        k(function (t) {
          return nG(nG({}, t), {}, {
            description: e
          });
        }), se(!1);
      },
      handleRemoveMedia: je,
      handleUploadComplete: ke,
      hasMedia: Boolean(null == x ? void 0 : x.image_src) || Boolean(null == x ? void 0 : x.video_src),
      loading: W
    })) : "settings" === me ? h().createElement(h().Fragment, null, h().createElement(qt, {
      isVisible: "settings" === me
    }, h().createElement(MH, {
      setActiveStep: pe,
      activeStep: me,
      onSave: Pe
    }))) : "community" === me ? h().createElement(h().Fragment, null, h().createElement(qt, {
      isVisible: "community" === me
    }, h().createElement(Bf, {
      isCommunityEnabled: x.has_community,
      courseId: r,
      course: x,
      onToggleCommunity: Te,
      onUpdateCourse: function (e) {
        _.setCourse(e);
      }
    }))) : "funnel" === me ? h().createElement(h().Fragment, null, h().createElement(qt, {
      isVisible: "funnel" === me
    }, h().createElement(GH, {
      setActiveStep: pe,
      activeStep: me,
      onSave: Pe
    }))) : h().createElement(h().Fragment, null, h().createElement(qt, {
      isVisible: "preview" === me
    }, h().createElement(JH, {
      completedSteps: ve,
      onSave: Pe
    })))))), H && h().createElement(ZD, {
      isOpen: H,
      onClose: function () {
        return G(!1);
      },
      automationFor: Z,
      contentId: te,
      contentName: ae
    }), q && h().createElement(TW, {
      isOpen: q,
      onClose: function () {
        return Y(!1);
      },
      integrationFor: J,
      contentId: te,
      contentName: ae
    }), be && h().createElement(Ie, {
      title: (0, b.__)("Delete Course", "ohmylms"),
      description: (0, b.__)("Are you sure you want to delete this course?", "ohmylms"),
      onClose: function () {
        return _e(!1);
      },
      onDelete: function () {
        _e(!1), _.deleteCourse(r), xe(-1);
      },
      isOpen: be,
      isDelete: !0
    }));
  },
  mG = function (e) {
    var t = e.dashboardCardData,
      n = e.dataLoading,
      r = e.withIn,
      a = void 0 === r ? "last 30 days" : r,
      o = e.variant,
      i = void 0 === o ? "secondary" : o;
    return h().createElement(h().Fragment, null, t.map(function (e, t) {
      var r,
        o = (null == e ? void 0 : e.iconColor) || "#33A646";
      return h().createElement(I.FlexBlockWP, {
        key: e.label + t,
        className: null !== (r = null == e ? void 0 : e.card_class) && void 0 !== r ? r : ""
      }, h().createElement(I.CardWP, {
        isBorderless: !0,
        variant: i,
        key: e.label
      }, h().createElement(I.SpacerWP, {
        paddingX: 4,
        paddingY: 5,
        marginBottom: 0
      }, n ? h().createElement(_.A, {
        rows: 3,
        active: !0
      }) : h().createElement(h().Fragment, null, h().createElement(I.BadgeWP, {
        isBorderLess: !0,
        isRounded: !0,
        padding: "7px"
      }, h().createElement("svg", {
        width: "13",
        height: "12",
        fill: "none",
        viewBox: "0 0 13 12",
        xmlns: "http://www.w3.org/2000/svg"
      }, h().createElement("path", {
        fill: o,
        fillRule: "evenodd",
        d: "M4.982 2.253c-.069-.285-.523-.285-.591 0L3.669 5.26c-.179.746-.917 1.28-1.772 1.28H1.06C.728 6.54.457 6.297.457 6c0-.298.27-.54.604-.54h.836c.285 0 .53-.177.59-.426l.722-3.007c.341-1.422 2.613-1.422 2.954 0l1.853 7.72c.068.284.522.284.59 0l.722-3.007c.18-.747.918-1.28 1.773-1.28h.835c.334 0 .604.242.604.54 0 .298-.27.54-.604.54h-.835c-.285 0-.532.177-.591.426l-.722 3.007c-.341 1.422-2.613 1.422-2.954 0l-1.852-7.72z",
        clipRule: "evenodd"
      }))), h().createElement(I.SpacerWP, {
        marginBottom: 5
      }), h().createElement(I.FlexWP, {
        direction: "column",
        gap: 2,
        className: "content-area"
      }, h().createElement(I.FlexWP, {
        align: "center",
        gap: 2,
        justify: "flex-start"
      }, h().createElement(I.TextWP, {
        as: "span",
        size: "14",
        variant: "muted"
      }, e.label), e.tooltip && h().createElement(V.A, {
        text: e.tooltip,
        className: "omlms-tooltip",
        placement: "top"
      }, h().createElement(h().Fragment, null, h().createElement(Mt.A, null)))), h().createElement("span", {
        style: {
          fontSize: "36px",
          fontWeight: "500",
          lineHeight: 1
        },
        className: "omlms-card-value"
      }, e.value), a && h().createElement(I.BadgeWP, {
        isBorderLess: !0,
        variant: null == e ? void 0 : e.progression_state,
        isRounded: !1,
        style: {
          width: "fit-content"
        }
      }, h().createElement(I.FlexWP, {
        justify: "flex-start",
        gap: 3,
        align: "center"
      }, "0%" !== e.progression_percent && h().createElement(h().Fragment, null, h().createElement("svg", {
        style: {
          transform: "rotate(".concat("card-refund" === (null == e ? void 0 : e.card_class) ? "success" !== (null == e ? void 0 : e.progression_state) ? "0deg" : "180deg" : "success" === (null == e ? void 0 : e.progression_state) ? "0deg" : "180deg", ")")
        },
        width: "12",
        height: "14",
        fill: "none",
        viewBox: "0 0 12 14",
        xmlns: "http://www.w3.org/2000/svg"
      }, h().createElement("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M1 6l5-5 5 5"
      }), h().createElement("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M6 13V1"
      }))), h().createElement(I.TextWP, {
        html: !0,
        as: "p",
        size: "12px",
        variant: "muted"
      }, (0, b.__)("".concat(e.progression_percent, " within ").concat(a), "ohmylms")))))))));
    }));
  };

var pG = n(22601),
  fG = function () {
    return React.createElement(React.Fragment, null, React.createElement("svg", {
      fill: "none",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M2.761 2.034c.46 0 .833.373.833.834V16.2c0 .46.373.833.834.833H17.76a.833.833 0 010 1.667H4.428a2.5 2.5 0 01-2.5-2.5V2.868c0-.46.373-.834.833-.834z",
      clipRule: "evenodd"
    }), React.createElement("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M6.094 7.034c.46 0 .833.373.833.834v6.666a.833.833 0 01-1.666 0V7.868c0-.46.373-.834.833-.834zm3.333 5c.46 0 .833.373.833.833v1.667a.833.833 0 01-1.666 0v-1.667c0-.46.373-.833.833-.833zm3.334-8.333c.46 0 .833.373.833.834v10a.833.833 0 01-1.666 0v-10c0-.46.373-.834.833-.834zm3.333 5c.46 0 .833.373.833.834v5a.833.833 0 01-1.666 0v-5c0-.46.373-.834.833-.834z",
      clipRule: "evenodd"
    })));
  };

const vG = (0, g.memo)(fG);

var gG = n(53725),
  hG = function (e) {
    var t,
      n = e.course,
      r = (e.isHover, (0, f.Zp)()),
      a = (0, g.useCallback)(function () {
        r("/course-edit/".concat(null == n ? void 0 : n.id));
      }, [null == n ? void 0 : n.id, r]),
      o = (0, g.useCallback)(function () {
        r("/course/".concat(null == n ? void 0 : n.id, "/report"));
      }, [null == n ? void 0 : n.id, r]);
    return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
      align: "start",
      justify: "start",
      gap: 4
    }, React.createElement(v.Link, {
      to: "/course-edit/".concat(null == n ? void 0 : n.id),
      className: "omlms-td-thumbnail"
    }, null != n && n.image_src ? React.createElement(gG.A, {
      shape: "square",
      src: n.image_src,
      size: 100
    }) : null != n && n.video_src ? React.createElement("video", {
      src: n.video_src
    }) : React.createElement("span", null, React.createElement(SB, null))), React.createElement(I.FlexWP, {
      direction: "column",
      className: "omlms-td-thumbnail-title"
    }, React.createElement(v.Link, {
      to: "/course-edit/".concat(null == n ? void 0 : n.id),
      title: null == n ? void 0 : n.name,
      style: {
        textDecoration: "none"
      }
    }, React.createElement(I.TextWP, {
      as: "span",
      color: "#000d25",
      size: 16,
      numberOfLines: 2,
      truncate: !0
    }, Ge(null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : null == n ? void 0 : n.title))), React.createElement(I.FlexWP, {
      align: "center",
      justify: "flex-start",
      gap: 1,
      className: "omlms-td-thumbnail-title-actions"
    }, React.createElement(I.ButtonWP, {
      onClick: a,
      label: (0, b.__)("Edit", "ohmylms"),
      variant: "text",
      style: {
        height: "26px",
        padding: "5px"
      }
    }, React.createElement(pG.A, null)), React.createElement(I.ButtonWP, {
      onClick: o,
      icon: React.createElement(vG, null),
      label: (0, b.__)("Analytics", "ohmylms"),
      variant: "text",
      style: {
        height: "26px"
      }
    })))));
  };

const yG = (0, g.memo)(hG);

function bG(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
