// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Gl = function (e) {
  var t = e.isOpen,
    n = e.onClose,
    r = e.chapterId,
    a = e.courseId;
  M().noConflict();
  var o,
    i,
    l,
    c = (0, y.useDispatch)(T.default),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getLesson();
    }, []),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, [r]),
    d = (0, y.useSelect)(function (e) {
      return e(T.default).geSelectedLessonId();
    }, []),
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    p = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    f = Ll((0, g.useState)(d), 2),
    v = f[0],
    h = f[1],
    _ = Ll((0, g.useState)(!1), 2),
    w = _[0],
    E = _[1],
    S = Ll((0, g.useState)(!1), 2),
    R = S[0],
    x = S[1],
    C = Ll((0, g.useState)((null == u ? void 0 : u.timezone) || sn().tz.guess() || "UTC"), 2),
    P = C[0],
    O = C[1],
    k = (0, z.A)(),
    j = k.openNotificationWithIcon,
    A = k.contextHolder,
    I = true,
    F = Qi(),
    N = function (e) {
      var t,
        n = null === (t = Object.values(e)) || void 0 === t ? void 0 : t.map(function (e) {
          var t;
          return parseInt(null !== (t = null == e ? void 0 : e.order_number) && void 0 !== t ? t : 0, 10);
        });
      return n.length ? Math.max.apply(Math, Bl(n)) : 0;
    },
    D = function () {
      var e = (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
        t = parseInt(null == u ? void 0 : u.duration, 10) || 60;
      return e ? sn()(e).add(t, "minute").format("YYYY-MM-DDTHH:mm:ss") : "";
    },
    W = function () {
      var e = zl(Nl().m(function e() {
        var t, n, o, i, l;
        return Nl().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, E(!0), n = N(s.byId), o = n + 1, e.n = 2, c.addGoogleMeetClass({
                topic: null == u ? void 0 : u.topic,
                agenda: null == u ? void 0 : u.agenda,
                date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
                endDate: D(),
                duration: parseInt(null == u ? void 0 : u.duration, 10) || 60,
                timezone: P,
                order: o,
                content_type: "session",
                platform: "googlemeet",
                attachments: null !== (t = null == u ? void 0 : u.attachments) && void 0 !== t ? t : [],
                course_id: a
              }, r);
            case 2:
              if (i = e.v, h(i), !r) {
                e.n = 3;
                break;
              }
              return e.n = 3, c.getLessonByChapterId(r);
            case 3:
              e.n = 5;
              break;
            case 4:
              e.p = 4, l = e.v, console.error(l);
            case 5:
              return e.p = 5, E(!1), e.f(5);
            case 6:
              return e.a(2);
          }
        }, e, null, [[1, 4, 5, 6]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    B = function () {
      var e = zl(Nl().m(function e() {
        var t;
        return Nl().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, E(!0), e.n = 2, c.updateGoogleMeetClass(v, Il(Il({}, u), {}, {
                content_type: "session",
                platform: "googlemeet",
                date: (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date),
                endDate: D(),
                duration: parseInt(null == u ? void 0 : u.duration, 10) || 60,
                timezone: P
              }), r);
            case 2:
              if (!r) {
                e.n = 3;
                break;
              }
              return e.n = 3, c.getLessonByChapterId(r);
            case 3:
              e.n = 5;
              break;
            case 4:
              e.p = 4, t = e.v, console.error(t);
            case 5:
              return e.p = 5, E(!1), e.f(5);
            case 6:
              return e.a(2);
          }
        }, e, null, [[1, 4, 5, 6]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    V = (0, g.useCallback)(function (e, t) {
      "timezone" === e ? (O(t), c.setLesson(Il(Il({}, u), {}, {
        timezone: t
      }))) : "date" === e ? c.setLesson(Il(Il({}, u), {}, {
        date: t,
        rawDate: t
      })) : c.setLesson(Il(Il({}, u), {}, Fl({}, e, t)));
    }, [u]),
    H = (0, g.useCallback)(function (e) {
      c.setLesson(Il(Il({}, u), e));
    }, [u]),
    G = si({
      title: null == u ? void 0 : u.topic,
      initialState: (null == u ? void 0 : u.recording_state) || "empty",
      initialSource: (null == u ? void 0 : u.recording_source) || void 0,
      onAttach: function (e) {
        var t = e.source,
          n = e.url;
        return H({
          recording_source: t,
          recording_url: n || "",
          recording_state: "attached"
        });
      },
      onDetach: function () {
        return H({
          recording_source: "",
          recording_url: "",
          recording_state: "empty"
        });
      },
      pickMedia: function () {
        return new Promise(function (e) {
          F({
            type: "video",
            title: (0, b.__)("Select or Upload Recording", "ohmylms"),
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
    U = function () {
      var e = zl(Nl().m(function e() {
        var t;
        return Nl().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (e.p = 0, d) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return x(!0), e.n = 2, c.getGoogleMeetClass(d);
            case 2:
              e.n = 4;
              break;
            case 3:
              e.p = 3, t = e.v, console.error("Error fetching course data:", t);
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
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && U(), function () {
      e = !1, c.resetLessonState();
    };
  }, [d]), (0, g.useEffect)(function () {
    !R && m && j(p, m);
  }, [m]), t ? React.createElement(React.Fragment, null, !r && A, React.createElement(il, {
    isOpen: t,
    loading: R,
    saving: w,
    onClose: function () {
      w || R || n();
    },
    onSave: function () {
      v ? B() : W();
    },
    onPreview: function () {
      null != u && u.preview_url && window.open(u.preview_url, "_blank");
    },
    title: (0, b.__)("Live Session (Google Meet)", "ohmylms"),
    saveLabel: v ? (0, b.__)("Update Meeting", "ohmylms") : (0, b.__)("Create Meeting", "ohmylms"),
    saveDisabled: (l = (null == u ? void 0 : u.rawDate) || (null == u ? void 0 : u.date), !(null != u && null !== (o = u.topic) && void 0 !== o && o.trim() && null != u && null !== (i = u.agenda) && void 0 !== i && i.trim() && P && l && parseInt(null == u ? void 0 : u.duration, 10) > 0) || w || !I),
    SettingsPanel: ul,
    editor: {
      topic: null == u ? void 0 : u.topic,
      agenda: null == u ? void 0 : u.agenda,
      onChange: V,
      disabled: !I
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
          attachments: [].concat(Bl((null == u ? void 0 : u.attachments) || []), Bl(e))
        });
      },
      onRemoveFile: function (e) {
        return H({
          attachments: ((null == u ? void 0 : u.attachments) || []).filter(function (t) {
            return t.id !== e;
          })
        });
      },
      disabled: !I
    }
  })) : null;
};
const Ul = (0, g.memo)(Gl);
function ql() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Yl(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (Yl(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Yl(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Yl(d, "constructor", u), Yl(u, "constructor", c), c.displayName = "GeneratorFunction", Yl(u, a, "GeneratorFunction"), Yl(d), Yl(d, a, "Generator"), Yl(d, r, function () {
    return this;
  }), Yl(d, "toString", function () {
    return "[object Generator]";
  }), (ql = function () {
    return {
      w: o,
      m
    };
  })();
}
function Yl(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Yl = function (e, t, n, r) {
    function o(t, n) {
      Yl(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Yl(e, t, n, r);
}
function Ql(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Zl(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Ql(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Ql(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function $l(e, t) {
  return function (e) {
    if (Array.isArray(e)) return e;
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
      var r,
        a,
        o,
        i,
        l = [],
        c = !0,
        u = !1;
      try {
        if (o = (n = n.call(e)).next, 0 === t) {
          if (Object(n) !== n) return;
          c = !1;
        } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
      } catch (e) {
        u = !0, a = e;
      } finally {
        try {
          if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
        } finally {
          if (u) throw a;
        }
      }
      return l;
    }
  }(e, t) || Kl(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Kl(e, t) {
  if (e) {
    if ("string" == typeof e) return Jl(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Jl(e, t) : void 0;
  }
}
function Jl(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
const Xl = function (e) {
  var t,
    n = e.chapter,
    r = e.chapterId,
    a = e.courseId,
    o = e.onDelete,
    i = e.chapterIndex,
    l = e.isActive,
    c = e.onExpand,
    u = e.setAutoSave,
    s = e.handleAutomation,
    d = e.handleIntegration,
    m = e.setIsDraggableItem,
    p = e.setIsSaved,
    v = e.activeIndex,
    b = (e.showEdit, e.setShowEdit, e.handleSaveName),
    w = (0, f.g)().id,
    S = false,
    R = (0, y.useDispatch)("ohmylms/store"),
    x = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    C = $l((0, g.useState)(n.name || n.title), 2),
    P = (C[0], C[1]),
    O = $l((0, g.useState)(n.description || ""), 2),
    k = O[0],
    j = O[1],
    A = $l((0, g.useState)(0 === i ? ["1"] : []), 2),
    M = A[0],
    I = A[1],
    F = $l((0, g.useState)(!1), 2),
    N = F[0],
    D = F[1],
    W = $l((0, g.useState)(!1), 2),
    z = W[0],
    B = W[1],
    L = $l((0, g.useState)(!1), 2),
    V = L[0],
    H = L[1],
    G = $l((0, g.useState)(!1), 2),
    U = G[0],
    q = G[1],
    Y = $l((0, g.useState)(!1), 2),
    Q = Y[0],
    Z = Y[1],
    $ = $l((0, g.useState)(!1), 2),
    K = $[0],
    J = $[1],
    X = (0, y.useSelect)(function (e) {
      return e("ohmylms/store").getCourseChaptersContent();
    }, [r]),
    ee = S ? (null === (t = x[w - 1]) || void 0 === t || null === (t = t.chapters.find(function (e) {
      return e.id === r;
    })) || void 0 === t ? void 0 : t.content) || [] : X,
    te = (0, g.useRef)(null),
    ne = (0, y.useSelect)(function (e) {
      return e(T.default).getChapterLastIndex();
    }, []);
  (0, g.useEffect)(function () {
    i === (null == ne ? void 0 : ne.lastIndex) && I(function (e) {
      return e.includes("1") ? [] : ["1"];
    });
  }, [ne]);
  var re = (0, g.useCallback)(E()(function (e, t) {
    R.updateChapterFields(e, t);
  }, 300), [R]);
  (0, g.useEffect)(function () {
    k !== (n.description || "") && re(n.id, {
      description: k
    });
  }, [k, n.id, re]), (0, g.useEffect)(function () {
    var e = !0;
    return e && M.length > 0 && !S && R.getLessonByChapterId(r), function () {
      e = !1;
    };
  }, [r, M, S]);
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
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || Kl(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
              return n = l.length > 1 && void 0 !== l[1] ? l[1] : "text", e.p = 1, B(!0), r = ae(ee.byId), a = parseInt(null != r ? r : 0) + 1, e.n = 2, R.addLesson({
                type: n,
                name: "",
                status: "publish",
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
                name: "Untitled",
                type: "quiz",
                description: "",
                order_number: n
              }, r);
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
                type: "assignment",
                name: "Untitled",
                status: "publish",
                order_number: n
              }, r);
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
    ue = (0, g.useCallback)(function (e) {
      if (e.target.closest(".ant-collapse-arrow")) return I(function (e) {
        return e.includes("1") ? [] : ["1"];
      }), void c(l ? null : r);
      I(["1"]), c(r);
    }, []);
  return h().createElement(h().Fragment, null, v === r && h().createElement("div", {
    className: "ohmylms-single-chapter-content-item"
  }, h().createElement(ie, {
    name: n.name || n.title,
    description: k,
    setName: function (e) {
      P(e), R.updateChapterFields(r, {
        name: e
      });
    },
    setDescription: j,
    chapterId: r,
    courseId: a,
    onDelete: o,
    isActive: l,
    setAutoSave: u,
    tabKey: "1",
    handleOpenChapter: ue,
    setIsDraggableItem: m,
    setIsSaved: p,
    handleSaveName: b
  }), h().createElement(h().Suspense, {
    fallback: h().createElement(_.A, {
      active: !0
    })
  }, h().createElement(ot, {
    chapter: n,
    contents: ee,
    handleCreateLesson: function () {
      te.current = document.activeElement, D(!0);
    },
    handleLessonEdit: function (e, t, n) {
      "quiz" === t ? (R.setSelectedQuizId(e), R.setIsOpenQuizBuilder(!0)) : "assignment" === t ? (q(!0), R.setSelectedAssignmentId(e)) : "session" === t ? (R.setSelectedLessonId(e), "zoom" === n ? (J(!1), Z(!0)) : "googlemeet" === n && (Z(!1), J(!0))) : (H(!0), R.setSelectedLessonId(e));
    },
    courseId: a,
    handleAutomation: s,
    handleIntegration: d
  }))), N && h().createElement(wt, {
    openModal: N,
    setOpenModal: D,
    handleCreateLesson: function (e) {
      "assignment" === e ? ce() : null != n && n.id && oe(null == n ? void 0 : n.id, e);
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
    chapterId: r,
    courseId: a
  }), Q && h().createElement(Al, {
    isOpen: Q,
    onClose: function () {
      return Z(!1);
    },
    chapterId: r,
    courseId: a
  }), K && h().createElement(Ul, {
    isOpen: K,
    onClose: function () {
      J(!1), R.setSelectedLessonId(null);
    },
    chapterId: r,
    courseId: a
  }), V && h().createElement(ga, {
    openModal: V,
    setOpenModal: H,
    chapterId: r,
    handleAutomation: s
  }), U && h().createElement(oo, {
    openModal: U,
    setOpenModal: q,
    chapterId: r,
    handleAutomation: s
  }));
};
var ec = function (e) {
    var t = document.getElementById("ohmylms-chapter-name-".concat(e));
    t && t.focus();
  },
  tc = n(78879),
  nc = n(40524);
function rc() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return ac(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (ac(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, ac(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, ac(d, "constructor", u), ac(u, "constructor", c), c.displayName = "GeneratorFunction", ac(u, a, "GeneratorFunction"), ac(d), ac(d, a, "Generator"), ac(d, r, function () {
    return this;
  }), ac(d, "toString", function () {
    return "[object Generator]";
  }), (rc = function () {
    return {
      w: o,
      m
    };
  })();
}
function ac(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  ac = function (e, t, n, r) {
    function o(t, n) {
      ac(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, ac(e, t, n, r);
}
function oc(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function ic(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
const lc = function (e) {
  var t = e.courseId,
    n = e.setActiveIndex,
    r = e.onExpand,
    a = e.activeChapters,
    o = false,
    i = function (e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r,
            a,
            o,
            i,
            l = [],
            c = !0,
            u = !1;
          try {
            if (o = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              c = !1;
            } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
          } catch (e) {
            u = !0, a = e;
          } finally {
            try {
              if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
            } finally {
              if (u) throw a;
            }
          }
          return l;
        }
      }(e, t) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return ic(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ic(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    l = (i[0], i[1]),
    c = (0, y.useDispatch)(T.default),
    u = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChapterSidebarOpen();
    }),
    s = (0, y.useSelect)(function (e) {
      return e(T.default).selectCoursesLoading();
    }, []),
    d = (0, y.useSelect)(function (e) {
      return t ? e(T.default).getCourseChapters(t) : {};
    }, [t]),
    m = function () {
      var e,
        a = (e = rc().m(function e() {
          var a;
          return rc().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (!o) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return l(!0), Object.values(d.byId).reduce(function (e, t) {
                  return Math.max(e, t.order_number);
                }, 0), Object.values(d.byId).length, e.n = 2, c.addChapter({
                  name: "",
                  description: "",
                  status: "publish",
                  order_number: Object.values(d.byId).length
                }, t);
              case 2:
                a = e.v, r(a), n(a), l(!1), setTimeout(function () {
                  ec(a), c.setCourseInfoOpen(!1);
                }, 300);
              case 3:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              oc(o, r, a, i, l, "next", e);
            }
            function l(e) {
              oc(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return a.apply(this, arguments);
      };
    }();
  return h().createElement(I.SpacerWP, {
    paddingY: 4,
    paddingX: 2,
    marginBottom: 4,
    style: {
      borderBottom: "1px solid #E5E7EB"
    }
  }, h().createElement(I.FlexWP, {
    gap: 2,
    wrap: "wrap"
  }, u && h().createElement(h().Fragment, null, h().createElement(I.FlexItemWP, null, h().createElement(D.A, {
    variant: "primary",
    onClick: m,
    disabled: o || s
  }, h().createElement(q.Icon, {
    icon: $e.A,
    width: "24px",
    height: "24px"
  }), u ? (0, b.__)("Add Chapter", "ohmylms") : "")), a.length > 0 && h().createElement(I.FlexItemWP, null, h().createElement(I.FlexWP, {
    gap: 1,
    align: "center",
    justify: "flex-start"
  }, h().createElement("svg", {
    fill: "none",
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, h().createElement("path", {
    fill: "#7A8B9A",
    d: "M9.714 3.571h4v1.143h-4V3.571zm0 2.858h4V7.57h-4V6.43zm0 2.857h4v1.143h-4V9.286zM2.285 3.57h4v1.143h-4V3.571zm0 2.858h4V7.57h-4V6.43zm0 2.857h4v1.143h-4V9.286z"
  }), h().createElement("path", {
    fill: "#7A8B9A",
    d: "M14.857.714H1.143A1.143 1.143 0 000 1.857v10.286a1.143 1.143 0 001.143 1.143h13.714A1.143 1.143 0 0016 12.143V1.857A1.143 1.143 0 0014.857.714zM1.143 1.857h6.286v10.286H1.143V1.857zM8.57 12.143V1.857h6.286v10.286H8.571z"
  })), h().createElement(I.TextWP, {
    as: "span"
  }, a.length, " "), h().createElement(I.TextWP, {
    as: "span"
  }, a.length > 1 ? (0, b.__)("Chapters", "ohmylms") : (0, b.__)("Chapter", "ohmylms"))))), h().createElement(I.FlexItemWP, null, h().createElement(D.A, {
    onClick: function () {
      c.setCourseChapterSidebarOpen(!u);
    },
    variant: "default"
  }, u ? h().createElement(q.Icon, {
    width: "24px",
    height: "24px",
    icon: nc.A
  }) : h().createElement(q.Icon, {
    width: "24px",
    height: "24px",
    icon: tc.A
  })))));
};
var cc = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6.504 1v11M1 6.5h11"
  })));
};
const uc = (0, g.memo)(cc);
