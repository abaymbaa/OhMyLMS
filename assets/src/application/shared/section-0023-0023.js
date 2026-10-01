// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const Sf = function (e) {
  var t,
    n,
    r = e.courseId,
    a = void 0 === r ? null : r,
    o = e.handleAutomation,
    i = e.handleIntegration,
    l = e.setIsSaved,
    c = e.setAutoSave,
    u = (e.setActiveStep, e.activeStep, e.onSave, e.courseDescription, e.handleInputChange),
    s = e.onContentChange,
    d = e.handleRemoveMedia,
    m = e.handleUploadComplete,
    p = (e.hasMedia, (0, f.g)().id),
    v = Ze(),
    w = (0, y.useDispatch)(T.default),
    E = (0, y.useSelect)(function (e) {
      return e(T.default).getAISuggestedCourses();
    }, []),
    S = ((0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []), _f((0, g.useState)(!1), 2)),
    R = (S[0], S[1], _f((0, g.useState)([]), 2)),
    x = R[0],
    C = R[1],
    P = _f((0, g.useState)([]), 2),
    O = (P[0], P[1]),
    k = _f((0, g.useState)([]), 2),
    j = (k[0], k[1]),
    A = _f((0, g.useState)(null), 2),
    M = A[0],
    F = A[1],
    N = _f((0, g.useState)(!1), 2),
    W = N[0],
    z = N[1],
    B = _f((0, g.useState)(null), 2),
    L = B[0],
    V = B[1],
    H = _f((0, g.useState)(!0), 2),
    G = H[0],
    U = H[1],
    q = _f((0, g.useState)(!0), 2),
    Y = q[0],
    Q = q[1],
    Z = _f((0, g.useState)(0), 2),
    $ = Z[0],
    K = Z[1],
    J = _f((0, g.useState)(!1), 2),
    X = (J[0], J[1]),
    ee = _f((0, g.useState)(!1), 2),
    te = ee[0],
    ne = ee[1],
    re = (0, g.useRef)(null),
    ae = (0, g.useRef)(null),
    oe = _f((0, g.useState)(null), 2),
    ie = (oe[0], oe[1]),
    le = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChapterSidebarOpen();
    }),
    ce = (0, y.useSelect)(function (e) {
      return a ? e(T.default).getCourseChapters(a) : {};
    }, [a]),
    ue = v ? null === (t = E[p - 1]) || void 0 === t ? void 0 : t.chapters : ce,
    se = (0, y.useSelect)(function (e) {
      return e(T.default).selectCoursesLoading();
    }, []),
    de = (0, y.useSelect)(function (e) {
      return e(T.default).getIsOpenQuizBuilder();
    }, []),
    me = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseInfoOpen();
    }),
    pe = function () {
      var e,
        t = (e = hf().m(function e() {
          var t;
          return hf().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return X(!0), Object.values(ce.byId).reduce(function (e, t) {
                  return Math.max(e, t.order_number);
                }, 0), e.n = 1, w.addChapter({
                  name: "",
                  description: "",
                  status: "publish",
                  order_number: Object.values(ue.byId).length
                }, a);
              case 1:
                t = e.v, ge(t), K(t), X(!1);
              case 2:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              bf(o, r, a, i, l, "next", e);
            }
            function l(e) {
              bf(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  (0, g.useEffect)(function () {
    if (null != ue && ue.byId) {
      var e,
        t = Object.values(ue.byId).sort(function (e, t) {
          return Number(null == e ? void 0 : e.order_number) - Number(null == t ? void 0 : t.order_number);
        });
      C(t), t.forEach(function (e, t) {
        setTimeout(function () {
          O(function (t) {
            return [].concat(gf(t), [e.id]);
          });
        }, 50 * t);
      }), $ || K(null === (e = t[0]) || void 0 === e ? void 0 : e.id);
    } else if (v && (null == E ? void 0 : E.length) > 0) {
      var n;
      C(E[p - 1].chapters), O(E[p - 1].chapters.map(function (e) {
        return e.id;
      })), K(null === (n = E[p - 1].chapters[0]) || void 0 === n ? void 0 : n.id);
    }
  }, [ue]), (0, g.useEffect)(function () {
    var e;
    if (x.length > 0 && !L && !M && G) V(null === (e = x[0]) || void 0 === e ? void 0 : e.id), U(!1);else if (1 === x.length) {
      var t;
      V(null === (t = x[0]) || void 0 === t ? void 0 : t.id), U(!1);
    } else if (0 < x.length && !L) {
      var n;
      V(null === (n = x[0]) || void 0 === n ? void 0 : n.id), U(!1);
    }
    return function () {
      U(!1);
    };
  }, [x]), (0, g.useEffect)(function () {
    var e = re.current,
      t = ae.current;
    if (e && t) {
      var n = function () {
          var n = e.offsetHeight,
            r = t.offsetHeight;
          ie(n > r ? "left" : r > n ? "right" : null);
        },
        r = new ResizeObserver(n);
      return r.observe(e), r.observe(t), n(), function () {
        r.disconnect();
      };
    }
  }, []);
  var fe = function (e) {
      for (var t = function (e) {
          return e.classList.contains("ohmylms-draggable-single-chapter") && e.hasAttribute("draggable") && "true" === e.getAttribute("draggable");
        }, n = e; n;) {
        if (t(n)) return !0;
        n = n.parentElement;
      }
      return !1;
    },
    ve = function (e) {
      w.setCourseLoading(!0), j(function (t) {
        return [].concat(gf(t), [e]);
      }), setTimeout(function () {
        var t = x.filter(function (t) {
          return t.id !== e;
        });
        C(t), O(function (t) {
          return t.filter(function (t) {
            return t !== e;
          });
        }), j(function (t) {
          return t.filter(function (t) {
            return t !== e;
          });
        }), e == $ && K(t.length > 0 ? t[0].id : null), w.setCourseLoading(!1);
      }, 500);
    };
  if (!a) return null;
  var ge = function (e) {
      V(e);
    },
    he = function (e, t) {
      w.updateChapterFields(e, {
        name: t
      }), ne(!1);
    };
  return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    align: "start",
    justify: "start",
    gap: 0
  }, h().createElement(I.FlexItemWP, {
    className: "ohmylms-chapter-sidebar ".concat(le ? "ohmylms-chapter-sidebar-open" : "")
  }, h().createElement(lc, {
    courseId: a,
    setActiveIndex: K,
    onExpand: ge,
    activeChapters: x
  }), se ? h().createElement(h().Fragment, null, h().createElement(_.A, {
    active: !0
  })) : h().createElement(h().Fragment, null, h().createElement("div", {
    className: "ohmylms-chapter-nav-wrapper"
  }, x.length > 0 && x.map(function (e, t) {
    return h().createElement("div", {
      key: null == e ? void 0 : e.id,
      draggable: !W && !v && Y,
      onDragStart: function (t) {
        return function (e, t) {
          e.stopPropagation(), fe(e.target) && !W && (e.dataTransfer.dropEffect = "copyMove", F(t));
        }(t, e.id);
      },
      onDragOver: function (t) {
        return function (e, t) {
          if (e.preventDefault(), M !== t && !W && fe(e.target)) {
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
                return t || i.push(e.id), !t;
              });
            C(l);
          }
        }(t, e.id);
      },
      onDrop: function (e) {
        return function (e) {
          if (fe(e.target) && !W) {
            var t = x.map(function (e, t) {
              return ff(ff({}, e), {}, {
                order_number: t + 1
              });
            });
            C(t), F(null), w.updateChapterOrdersAPI(a, t);
          }
        }(e);
      },
      className: "ohmylms-draggable-single-chapter"
    }, h().createElement(Ip, {
      chapter: e,
      chapterId: e.id,
      courseId: a,
      onDelete: ve,
      chapterIndex: e.id,
      isActive: $ === e.id,
      onExpand: ge,
      setIsDraggingContent: z,
      handleAutomation: o,
      handleIntegration: i,
      setIsDraggableItem: Q,
      setIsSaved: l,
      activeIndex: $,
      setActiveIndex: K,
      index: t,
      showEdit: te,
      setShowEdit: ne,
      handleSaveName: he
    }));
  })))), h().createElement(I.FlexItemWP, {
    className: "ohmylms-chapter-preview ".concat(le ? "ohmylms-chapter-sidebar-open" : "", " ").concat(me ? "" : "ohmylms-course-info-closed")
  }, h().createElement("div", {
    className: "ohmylms-course-info-wrapper ".concat(me ? "" : "ohmylms-course-info-closed")
  }, h().createElement($p, {
    handleInputChange: u,
    onContentChange: s,
    handleRemoveMedia: d,
    handleUploadComplete: m
  }), h().createElement(D.A, {
    variant: "tertiary",
    onClick: function () {
      w.setCourseInfoOpen(!me);
    },
    className: "ohmylms-course-info-toggle",
    icon: me ? h().createElement(Jp, null) : h().createElement(ef, null)
  })), h().createElement(I.SpacerWP, {
    marginTop: 2,
    paddingX: 4,
    className: "ohmylms-chapter-content-wrapper"
  }, h().createElement(I.FlexWP, {
    align: "start",
    justify: "space-between",
    gap: 2,
    direction: "column",
    className: "ohmylms-chapter-contents-wrapper"
  }, h().createElement("div", {
    className: "ohmylms-chapter-contents"
  }, x.length > 0 ? x.map(function (e, t) {
    return h().createElement(h().Suspense, {
      fallback: h().createElement(_.A, {
        active: !0
      }),
      key: null == e ? void 0 : e.id
    }, h().createElement(Xl, {
      chapter: e,
      chapterId: e.id,
      courseId: a,
      setAutoSave: c,
      onDelete: ve,
      chapterIndex: e.id,
      isActive: L === e.id,
      onExpand: ge,
      setIsDraggingContent: z,
      handleAutomation: o,
      handleIntegration: i,
      setIsDraggableItem: Q,
      setIsSaved: l,
      activeIndex: $,
      showEdit: te,
      setShowEdit: ne,
      handleSaveName: he
    }));
  }) : h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    align: "center",
    justify: "center"
  }, h().createElement(uf, {
    icon: h().createElement(df, null),
    title: (0, b.__)("No chapter found!", "ohmylms"),
    description: (0, b.__)("Add your first chapter to get started.", "ohmylms"),
    ctaText: (0, b.__)("Add Chapter", "ohmylms"),
    ctaHandler: pe
  })))))))), de && h().createElement(Cp, {
    chapterId: null === (n = x[0]) || void 0 === n ? void 0 : n.id
  }));
};
var Rf = ["title", "description", "isItProFeature", "inputType", "tooltip", "value", "onChange", "isDescriptionHTML", "spacerPadding", "spacerMarginBottom", "showProTag", "error", "required", "headerFontSize"];
function xf() {
  return xf = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xf.apply(null, arguments);
}
var Cf = function (e) {
  var t = true,
    n = e.title,
    r = e.description,
    a = e.isItProFeature,
    o = void 0 !== a && a,
    i = e.inputType,
    l = void 0 === i ? "text" : i,
    c = e.tooltip,
    u = e.value,
    s = e.onChange,
    d = e.isDescriptionHTML,
    m = void 0 !== d && d,
    p = e.spacerPadding,
    f = void 0 === p ? 4 : p,
    v = e.spacerMarginBottom,
    g = void 0 === v ? 2 : v,
    h = e.showProTag,
    y = void 0 === h || h,
    _ = e.error,
    w = void 0 === _ ? "" : _,
    E = e.required,
    S = void 0 !== E && E,
    R = e.headerFontSize,
    x = void 0 === R ? "18px" : R,
    C = function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
          return n;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
      return a;
    }(e, Rf);
  return React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    padding: f,
    marginBottom: g
  }, React.createElement(I.FlexWP, {
    gap: 8,
    align: "flex-start",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, n && React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "center",
    gap: "1",
    justify: "flex-start"
  }, React.createElement(I.HeadingWP, {
    level: "4",
    color: "#000D25",
    size: x
  }, n, S && React.createElement(React.Fragment, null, React.createElement("span", {
    style: {
      color: "#FF4955"
    }
  }, "*")), o && !t && y && React.createElement("span", {
    className: "ohmylms-pro-tag"
  }, (0, b.__)("Pro", "ohmylms"))), c && React.createElement(V.A, {
    text: c,
    placement: "top"
  }, React.createElement("span", null, React.createElement(Mt.A, null)))), React.createElement(I.SpacerWP, {
    marginBottom: 2
  })), r && React.createElement(Yt.A, {
    style: {
      maxWidth: "450px"
    },
    as: "p",
    lineHeight: "1.5",
    color: "#687784",
    size: "14px",
    html: m
  }, r)), React.createElement(I.FlexItemWP, {
    isBlock: !0
  }, "textarea" === l ? React.createElement(W.A, xf({
    onChange: s,
    value: u,
    disabled: o && !t
  }, C)) : "number" === l ? React.createElement(I.InputNumberWP, xf({}, C, {
    type: l,
    value: u,
    onChange: s,
    disabled: o && !t
  })) : React.createElement(I.InputWP, xf({}, C, {
    type: l,
    value: u,
    onChange: s,
    disabled: o && !t
  })))), w && React.createElement(Yt.A, {
    as: "p",
    size: "13px",
    color: "#FF4955",
    align: "right",
    style: {
      marginTop: "4px"
    }
  }, w)));
};
const Pf = (0, g.memo)(Cf);
var Of = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "15",
    height: "15",
    fill: "none",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: ".2",
    d: "M16.248 9.526a.75.75 0 00-.75.75v3.02a2.202 2.202 0 01-2.2 2.199h-8.59a2.202 2.202 0 01-2.2-2.2v-8.59a2.202 2.202 0 012.2-2.2h3.018a.75.75 0 100-1.5H4.707a3.704 3.704 0 00-3.7 3.7v8.59a3.704 3.704 0 003.7 3.7h8.591a3.704 3.704 0 003.7-3.7v-3.019a.75.75 0 00-.75-.75z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: ".2",
    d: "M16.234 1h-4.662a.75.75 0 00-.75.735.764.764 0 00.767.765h2.854L8.47 8.475a.75.75 0 001.06 1.06l5.975-5.973v2.865a.75.75 0 001.5 0V1.77a.771.771 0 00-.77-.771z"
  })));
};
const kf = (0, g.memo)(Of);
var jf = n(21186);
function Af(e) {
  return Af = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Af(e);
}
function Mf() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Tf(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Tf(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Tf(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Tf(d, "constructor", u), Tf(u, "constructor", c), c.displayName = "GeneratorFunction", Tf(u, a, "GeneratorFunction"), Tf(d), Tf(d, a, "Generator"), Tf(d, r, function () {
    return this;
  }), Tf(d, "toString", function () {
    return "[object Generator]";
  }), (Mf = function () {
    return {
      w: o,
      m
    };
  })();
}
function Tf(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Tf = function (e, t, n, r) {
    function o(t, n) {
      Tf(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Tf(e, t, n, r);
}
function If(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Ff(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Ff(Object(n), !0).forEach(function (t) {
      Df(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ff(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Df(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Af(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Af(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Af(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Wf(e, t) {
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
      if ("string" == typeof e) return zf(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zf(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function zf(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
const Bf = function (e) {
  var t = e.isCommunityEnabled,
    n = e.courseId,
    r = e.course,
    a = e.onToggleCommunity,
    o = e.onUpdateCourse,
    i = (0, g.useRef)(!1),
    c = Wf((0, g.useState)(""), 2),
    u = c[0],
    s = c[1],
    d = Wf((0, g.useState)((null == r ? void 0 : r.space_title) || ""), 2),
    m = (d[0], d[1]),
    p = Wf((0, g.useState)((null == r ? void 0 : r.space_description) || ""), 2),
    f = (p[0], p[1]),
    v = Wf((0, g.useState)(""), 2),
    y = v[0],
    _ = v[1];
  return (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = Mf().m(function e() {
          var t, a;
          return Mf().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, e.n = 1, l()({
                  path: "/ohmylms/v1/communities/space/course/".concat(n),
                  method: "GET"
                });
              case 1:
                (t = e.v) && t.url ? (s(t.url), _("")) : _((0, b.__)("Community space not found for this course.", "ohmylms")), !t || null == t || !t.title || null != r && r.space_title || (m(null == t ? void 0 : t.title), o && o(Nf(Nf({}, r), {}, {
                  space_title: null == t ? void 0 : t.title
                }))), !t || null == t || !t.description || null != r && r.space_description || (f(null == t ? void 0 : t.description), o && o(Nf(Nf({}, r), {}, {
                  space_description: null == t ? void 0 : t.description
                }))), e.n = 3;
                break;
              case 2:
                e.p = 2, a = e.v, console.error("Error fetching community data:", a), _((0, b.__)("Unable to fetch community space. It may have been deleted or there was a network error.", "ohmylms"));
              case 3:
                return e.a(2);
            }
          }, e, null, [[0, 2]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              If(o, r, a, i, l, "next", e);
            }
            function l(e) {
              If(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    "yes" === t && (e(), i.current = !0);
  }, [t, n]), (0, g.useEffect)(function () {
    void 0 !== (null == r ? void 0 : r.space_title) && m(r.space_title), void 0 !== (null == r ? void 0 : r.space_description) && f(r.space_description);
  }, [null == r ? void 0 : r.space_title, null == r ? void 0 : r.space_description]), h().createElement(I.ContainerWP, {
    className: "ohmylms-community-settings"
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    paddingY: 10
  }, h().createElement(I.CardWP, {
    variant: "secondary",
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 10,
    marginBottom: 0
  }, h().createElement("h2", {
    className: "title"
  }, (0, b.__)("Community Settings", "ohmylms")), h().createElement("p", {
    className: "description"
  }, (0, b.__)("Enable a discussion space for your students. Once enabled, a dedicated community will be created for this course.", "ohmylms")), h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 3
  }, h().createElement(I.FlexWP, {
    gap: 4,
    direction: "column"
  }, h().createElement(Kt, {
    title: (0, b.__)("Enable Community for this Course", "ohmylms"),
    description: (0, b.__)("Allow students to participate in course discussions.", "ohmylms"),
    isChecked: "yes" === t,
    onChange: function (e) {
      a && a(e);
    },
    conditionalChild: h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary"
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 2,
      padding: 1
    }, h().createElement(I.SpacerWP, {
      padding: 4
    }, h().createElement(I.FlexWP, {
      gap: 8,
      align: "flex-start",
      justify: "space-between"
    }, h().createElement(I.FlexItemWP, {
      isBlock: !0
    }, h().createElement(I.HeadingWP, {
      level: "4"
    }, (0, b.__)("Space URL", "ohmylms")), h().createElement(I.TextWP, null, (0, b.__)("A unique URL to access the space.", "ohmylms"))), h().createElement(I.FlexItemWP, {
      isBlock: !0,
      className: "ohmylms-coupon-generate ohmylms-community-generate"
    }, h().createElement(I.FlexWP, {
      gap: 2
    }, h().createElement(I.FlexItemWP, {
      style: {
        position: "relative",
        width: "calc(100% - 40px)"
      }
    }, h().createElement(I.InputWP, {
      type: "text",
      value: u,
      readOnly: !0
    }), h().createElement(I.ButtonWP, {
      className: "ohmylms-coupon-generate-btn ohmylms-community-generate-btn",
      onClick: function () {
        return window.open(u, "_blank");
      }
    }, h().createElement(kf, null))), h().createElement(jf.A, {
      textToCopy: u
    }))))))))
  }))))))), y && h().createElement(I.NoticeWP, {
    status: "error"
  }, y));
};
var Lf = "automation-canvas",
  Vf = "automation-canvas/automation",
  Hf = "automation-canvas/step",
  Gf = n(87240);
function Uf(e) {
  return Uf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Uf(e);
}
function qf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? qf(Object(n), !0).forEach(function (t) {
      Qf(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qf(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Qf(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Uf(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Uf(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Uf(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Zf = function () {
    return {
      type: "SET_ACTIVATION_PANEL_VISIBILITY",
      value: !1
    };
  },
  $f = function (e) {
    return (0, y.dispatch)(Lf).closeActivationPanel(), function (t) {
      return t.registry.dispatch(Gf.M_).enableComplementaryArea(Lf, e);
    };
  },
  Kf = function (e) {
    return (0, y.dispatch)(Lf).closeActivationPanel(), function (e) {
      return e.registry.dispatch(Gf.M_).disableComplementaryArea(Lf);
    };
  };
function Jf(e) {
  return {
    type: "SET_INSERTER_POPOVER",
    data: e
  };
}
function Xf(e) {
  return {
    type: "ADD_STEP",
    value: e
  };
}
function ev(e) {
  return {
    type: "ADD_LOGICAL_STEP",
    value: e
  };
}
function tv(e, t, n, r) {
  return {
    type: "SET_SELECTED_STEP",
    value: e,
    index: t,
    condition: n,
    conditionIndex: r
  };
}
function nv(e) {
  return {
    type: "FULL_AUTOMATION_DATA",
    data: e
  };
}
function rv(e) {
  return {
    type: "DELETE_SELECTED_STEP",
    index: e
  };
}
function av(e, t, n) {
  return {
    type: "DELETE_CONDITIONAL_SELECTED_STEP",
    index: e,
    condition: t,
    conditionIndex: n
  };
}
function ov(e) {
  return {
    type: "UPDATE_AUTOMATION",
    automation: Yf(Yf({}, (0, y.select)(Lf).getAutomationData()), {}, {
      name: e
    })
  };
}
function iv(e) {
  return {
    type: "UPDATE_AUTOMATION",
    automation: Yf(Yf({}, (0, y.select)(Lf).getAutomationData()), {}, {
      author: e
    })
  };
}
function lv(e) {
  return {
    type: "UPDATE_AUTOMATION",
    automation: Yf(Yf({}, (0, y.select)(Lf).getAutomationData()), {}, {
      status: e
    })
  };
}
function cv(e) {
  return {
    type: "UPDATE_AUTOMATION",
    automation: Yf(Yf({}, (0, y.select)(Lf).getAutomationData()), {}, {
      trigger_name: e
    })
  };
}
function uv(e) {
  return {
    type: "REGISTER_STEP_TYPE",
    stepType: e
  };
}
function sv(e) {
  return {
    type: "UNREGISTER_STEP_TYPE",
    stepKey: e
  };
}
function dv(e) {
  return {
    type: "UNREGISTER_ALL_EXCEPT_STEP_TYPES",
    keepStepKeys: e
  };
}
function mv(e) {
  return {
    type: "UNREGISTER_ALL_EXCEPT_TRIGGER_TYPES",
    triggerGroup: e
  };
}
function pv(e, t, n, r, a, o) {
  return {
    type: "UPDATE_STEP_ARGS",
    index: e,
    selectedStepCondition: t,
    selectedLogicalStepIndex: n,
    settingsType: r,
    name: a,
    value: o
  };
}
function fv(e) {
  return trackErrors(e), {
    type: "SET_ERRORS",
    errors: e
  };
}
function vv(e) {
  return {
    type: "SET_DATA_LOADER",
    dataLoader: e
  };
}
function gv(e) {
  return {
    type: "SET_SAVE_LOADER",
    saveLoader: e
  };
}
function hv(e) {
  return {
    type: "SET_SHOW_STAT",
    showStat: e
  };
}
function yv(e) {
  return {
    type: "SET_MAYBE_SAVE",
    save: e
  };
}
function bv(e) {
  return {
    type: "SET_UPDATE_CLICKED",
    save: e
  };
}
function _v(e, t, n, r) {
  return {
    type: "SET_OPEN_AI_MODAL",
    value: e,
    field: t,
    headingText: n,
    promptType: r
  };
}
function wv(e) {
  return {
    type: "SET_EMAIL_CONDITION",
    emailConditions: e
  };
}
function Ev(e, t, n, r, a, o) {
  return {
    type: "SET_CTA_PRO_MODAL",
    display: e,
    icon: t,
    title: n,
    text: r,
    link: a,
    feature: o
  };
}
function Sv(e) {
  return {
    type: "SET_CONTACT_CONDITION",
    contactConditions: e
  };
}
function Rv(e) {
  return {
    type: "SET_SEGMENT_CONDITION",
    segmentConditions: e
  };
}
function xv(e) {
  return {
    type: "SET_ACTIVATE_AUTO_SAVE",
    value: e
  };
}
