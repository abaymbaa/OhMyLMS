// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function gp() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return hp(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (hp(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, hp(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, hp(d, "constructor", u), hp(u, "constructor", c), c.displayName = "GeneratorFunction", hp(u, a, "GeneratorFunction"), hp(d), hp(d, a, "Generator"), hp(d, r, function () {
    return this;
  }), hp(d, "toString", function () {
    return "[object Generator]";
  }), (gp = function () {
    return {
      w: o,
      m
    };
  })();
}
function hp(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  hp = function (e, t, n, r) {
    function o(t, n) {
      hp(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, hp(e, t, n, r);
}
function yp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function bp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? yp(Object(n), !0).forEach(function (t) {
      _p(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yp(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function _p(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != vp(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != vp(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == vp(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ep(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Sp(e, t) {
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
      if ("string" == typeof e) return Rp(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rp(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Rp(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var xp = function (e) {
  var t = e.chapterId,
    n = (0, y.useDispatch)(T.default),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).getIsOpenQuizBuilder();
    }, []),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getSelectedQuizId();
    }, []),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getQuiz();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, []),
    l = (0, y.useSelect)(function (e) {
      return e(T.default).getAllQuestions();
    }, [null == o ? void 0 : o.id]) || [],
    c = ((0, y.useSelect)(function (e) {
      return e(T.default).getCourseChaptersContent();
    }, [t]), Sp((0, g.useState)(!1), 2)),
    u = c[0],
    s = c[1],
    d = Sp((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = Sp((0, g.useState)(!0), 2),
    v = f[0],
    h = f[1],
    _ = Sp((0, g.useState)(!1), 2),
    w = _[0],
    E = _[1],
    S = Sp((0, g.useState)(!1), 2),
    R = S[0],
    x = S[1],
    C = function () {
      n.setIsOpenQuizBuilder(!1);
    },
    P = function (e) {
      null != e && e.temp && (delete e.temp, delete e.id);
    },
    O = function () {
      var e,
        t = (e = gp().m(function e() {
          var t, r, a, c;
          return gp().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (!m) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                if ((0, Ec.$)(i).isValid || null == i || null === (t = i.settings) || void 0 === t || !t.type) {
                  e.n = 2;
                  break;
                }
                return n.setQuizError(!0), e.a(2);
              case 2:
                return p(!0), e.p = 3, (a = bp({}, o)).content = l, null == a || null === (r = a.content) || void 0 === r || r.forEach(function (e) {
                  var t;
                  P(e), null == e || null === (t = e.questions) || void 0 === t || t.forEach(function (e) {
                    P(e);
                  });
                }), e.n = 4, n.updateQuiz(o.id, a);
              case 4:
                n.setChapterContentTitle(o.id, o.name), h(!0), E(!1), e.n = 6;
                break;
              case 5:
                e.p = 5, c = e.v, console.error(c);
              case 6:
                return e.p = 6, p(!1), e.f(6);
              case 7:
                return e.a(2);
            }
          }, e, null, [[3, 5, 6, 7]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Ep(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Ep(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    k = (0, g.useCallback)(function () {
      v ? C() : x(!0);
    }, [v]);
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && o && l.length > 0 && (w && h(!1), E(!0)), function () {
      e = !1;
    };
  }, [o, l]), React.createElement(React.Fragment, null, React.createElement(I.ModalWP, {
    openModal: r,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    onRequestClose: k,
    title: (0, b.__)("Quiz", "ohmylms"),
    style: {
      maxWidth: "1500px"
    },
    className: "ohmylms-create-modal-wrapper",
    size: "fill",
    headerActions: React.createElement(I.FlexWP, {
      gap: 3,
      align: "center",
      justify: "flex-end"
    }, React.createElement(ra, {
      label: (0, b.__)("Result", "ohmylms"),
      icon: React.createElement(za, null),
      customClass: "ohmylms-quiz-report-btn",
      onClick: function () {
        var e = "".concat(window.location.origin, "/wp-admin/admin.php?page=ohmylms#").concat("/quiz-report", "/").concat(a);
        window.open(e, "_blank");
      },
      variant: "default"
    }), React.createElement(ra, {
      label: (0, b.__)("Settings", "ohmylms"),
      icon: React.createElement(Rt, {
        style: {
          width: "18px",
          height: "18px"
        }
      }),
      onClick: function () {
        var e;
        (0, Ec.$)(i).isValid || null == i || null === (e = i.settings) || void 0 === e || !e.type ? s(!0) : n.setQuizError(!0);
      },
      variant: "default",
      customClass: "ohmylms-quiz-settings-btn-header"
    }), React.createElement(ra, {
      label: (0, b.__)("Preview", "ohmylms"),
      icon: React.createElement(Br, null),
      onClick: function () {
        null != o && o.preview_url && window.open(null == o ? void 0 : o.preview_url, "_blank");
      },
      variant: "default",
      customClass: "ohmylms-quiz-preview-btn-header"
    }), React.createElement(ra, {
      label: (0, b.__)("Save", "ohmylms"),
      customClass: "ohmylms-quiz-save-btn",
      onClick: O,
      loading: m,
      variant: "primary",
      className: "ohmylms-save-quiz-btn-header",
      padding: "10px 24px"
    }))
  }, React.createElement(fp, {
    chapterId: t,
    isSettingsOpen: u,
    setIsSettingsOpen: s
  })), R && React.createElement(Ie, {
    title: (0, b.__)("Warning!", "ohmylms"),
    description: (0, b.__)("You have unsaved changes. Do you want to close without saving?", "ohmylms"),
    onClose: function () {
      return x(!1);
    },
    onDelete: function () {
      return C();
    },
    isOpen: R,
    type: "warning",
    actionBtnText: (0, b.__)("Close", "ohmylms")
  }));
};
const Cp = (0, g.memo)(xp);
var Pp = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "9",
    height: "14",
    fill: "none",
    viewBox: "0 0 9 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    fillOpacity: ".35",
    stroke: "#fff",
    strokeWidth: ".2",
    d: "M1.8 10.6c.937 0 1.7.745 1.7 1.65 0 .905-.763 1.65-1.7 1.65-.938 0-1.7-.745-1.7-1.65 0-.905.762-1.65 1.7-1.65zm5.4 0c.938 0 1.7.745 1.7 1.65 0 .905-.762 1.65-1.7 1.65-.937 0-1.7-.745-1.7-1.65 0-.905.763-1.65 1.7-1.65zM1.8 5.35c.937 0 1.7.745 1.7 1.65 0 .905-.763 1.65-1.7 1.65C.862 8.65.1 7.905.1 7c0-.905.762-1.65 1.7-1.65zm5.4 0c.938 0 1.7.745 1.7 1.65 0 .905-.762 1.65-1.7 1.65-.937 0-1.7-.745-1.7-1.65 0-.905.763-1.65 1.7-1.65zM1.8.1c.937 0 1.7.745 1.7 1.65 0 .905-.763 1.65-1.7 1.65C.862 3.4.1 2.655.1 1.75.1.845.862.1 1.8.1zm5.4 0c.938 0 1.7.745 1.7 1.65 0 .905-.762 1.65-1.7 1.65-.937 0-1.7-.745-1.7-1.65C5.5.845 6.263.1 7.2.1z"
  })));
};
const Op = (0, g.memo)(Pp);
function kp() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return jp(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (jp(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, jp(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, jp(d, "constructor", u), jp(u, "constructor", c), c.displayName = "GeneratorFunction", jp(u, a, "GeneratorFunction"), jp(d), jp(d, a, "Generator"), jp(d, r, function () {
    return this;
  }), jp(d, "toString", function () {
    return "[object Generator]";
  }), (kp = function () {
    return {
      w: o,
      m
    };
  })();
}
function jp(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  jp = function (e, t, n, r) {
    function o(t, n) {
      jp(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, jp(e, t, n, r);
}
function Ap(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Mp(e, t) {
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
      if ("string" == typeof e) return Tp(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tp(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Tp(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
const Ip = function (e) {
  var t,
    n = e.chapter,
    r = e.chapterId,
    a = e.courseId,
    o = e.onDelete,
    i = e.chapterIndex,
    l = e.isActive,
    c = e.onExpand,
    u = (e.handleAutomation, e.handleIntegration, e.setIsDraggableItem, e.setIsSaved, e.activeIndex, e.setActiveIndex),
    s = (e.total, e.index),
    d = (e.showEdit, e.setShowEdit),
    m = (e.handleSaveName, (0, f.g)().id),
    p = false,
    v = (0, y.useDispatch)("ohmylms/store"),
    _ = (0, y.useSelect)(function (e) {
      return e(T.default).getCourse();
    }, []),
    w = Mp((0, g.useState)(n.name || n.title), 2),
    S = w[0],
    R = (w[1], Mp((0, g.useState)(n.description || ""), 2)),
    x = R[0],
    C = (R[1], Mp((0, g.useState)(0 === i ? ["1"] : []), 2)),
    P = C[0],
    O = C[1],
    k = Mp((0, g.useState)(!1), 2),
    j = (k[0], k[1], Mp((0, g.useState)(!1), 2)),
    A = (j[0], j[1], Mp((0, g.useState)(!1), 2)),
    M = (A[0], A[1], Mp((0, g.useState)(!1), 2)),
    F = (M[0], M[1], Mp((0, g.useState)(!1), 2)),
    N = F[0],
    D = F[1],
    W = Mp((0, g.useState)(!1), 2),
    z = W[0],
    B = W[1],
    L = Mp((0, g.useState)(!1), 2),
    V = L[0],
    H = L[1],
    G = (0, y.useSelect)(function (e) {
      return e(T.default).getCourseChapterSidebarOpen();
    }),
    U = ((0, y.useSelect)(function (e) {
      return e("ohmylms/store").getCourseChaptersContent();
    }, [n.id]), p && (null === (t = _[m - 1]) || void 0 === t || null === (t = t.chapters.find(function (e) {
      return e.id === r;
    })) || void 0 === t || t.content), (0, g.useRef)(null), (0, y.useSelect)(function (e) {
      return e(T.default).getChapterLastIndex();
    }, []));
  (0, g.useEffect)(function () {
    i === (null == U ? void 0 : U.lastIndex) && O(function (e) {
      return e.includes("1") ? [] : ["1"];
    });
  }, [U]);
  var Y = (0, g.useCallback)(E()(function (e, t) {
    v.updateChapterFields(e, t);
  }, 300), [v]);
  (0, g.useEffect)(function () {
    S === n.name && x === (n.description || "") || Y(n.id, {
      name: S,
      description: x
    });
  }, [x, n.id, Y]), (0, g.useEffect)(function () {
    var e = !0;
    return e && P.length > 0 && !p && v.getLessonByChapterId(r), function () {
      e = !1;
    };
  }, [r, P, p]), (0, g.useCallback)(function (e) {
    if (e.target.closest(".ant-collapse-arrow")) return O(function (e) {
      return e.includes("1") ? [] : ["1"];
    }), void c(l ? null : r);
    O(["1"]), c(r);
  }, []), (0, b.__)("Delete", "ohmylms");
  var Q = function () {
    var e,
      t = (e = kp().m(function e() {
        return kp().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              return o(r), e.n = 1, v.deleteChapter(r, a);
            case 1:
              e.v;
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
            Ap(o, r, a, i, l, "next", e);
          }
          function l(e) {
            Ap(o, r, a, i, l, "throw", e);
          }
          i(void 0);
        });
      });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    onMouseEnter: function () {
      return H(!0);
    },
    onMouseLeave: function () {
      return H(!1);
    },
    gap: 2,
    className: "ohmylms-chapter-single-nav ".concat(l ? "active" : "", " ").concat(V ? "show-dragable" : ""),
    align: "center",
    justify: "flex-start"
  }, G && h().createElement("span", {
    className: "ohmylms-chapter-nav-drag-icon ".concat(V ? "show" : "")
  }, h().createElement(Op, null)), h().createElement(I.CardWP, {
    className: "ohmylms-chapter-nav ".concat(l ? "active" : "", " ").concat(V ? "show-dragable" : ""),
    onClick: function () {
      return function (e) {
        c(r), u(e), d(!1), p || setTimeout(function () {
          ec(r), v.setCourseInfoOpen(!1);
        }, 300);
      }(i);
    }
  }, G ? h().createElement(h().Fragment, null, h().createElement(I.FlexWP, null, h().createElement(I.FlexItemWP, {
    width: "calc(100% - 36px)"
  }, h().createElement(I.TextWP, {
    as: "span"
  }, n.name ? n.name : null != n && n.title ? null == n ? void 0 : n.title : (0, b.__)("Untitled", "ohmylms"))), h().createElement(I.FlexItemWP, null, h().createElement("div", {
    style: {
      opacity: l || V || N ? 1 : 0,
      visibility: l || V || N ? "visible" : "hidden",
      transition: "opacity 0.3s ease"
    }
  }, h().createElement(I.DropdownMenuWP, {
    onToggle: function (e) {
      return D(!N);
    },
    controls: [{
      title: (0, b.__)("Delete", "ohmylms"),
      onClick: function () {
        B(!0), H(!1);
      },
      icon: h().createElement(We, null)
    }],
    icon: h().createElement(q.Icon, {
      icon: Ne.A
    })
  }))))) : h().createElement(h().Fragment, null, h().createElement(I.TextWP, {
    as: "p",
    className: "ohmylms-chapter-nav-index",
    align: "center"
  }, s + 1)))), z && h().createElement(Ie, {
    title: (0, b.__)("Delete Chapter", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete this chapter?", "ohmylms"),
    onClose: function () {
      return B(!1);
    },
    onDelete: Q,
    isOpen: z,
    isDelete: !0
  }));
};
var Fp = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "30",
    height: "26",
    viewBox: "0 0 30 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "30",
    height: "26",
    fill: "#F4F5F7",
    rx: "2"
  }), React.createElement("path", {
    fill: "#7A8B9A",
    d: "M20.25 6.25H9.75c-.825 0-1.5.675-1.5 1.5v10.5c0 .825.675 1.5 1.5 1.5h10.5c.825 0 1.5-.675 1.5-1.5V7.75c0-.825-.675-1.5-1.5-1.5zM9.75 7.375h10.5c.225 0 .375.15.375.375v6.3l-2.25-2.175c-.225-.225-.6-.225-.75 0l-2.7 2.625L12.75 13c-.225-.15-.45-.15-.6 0l-2.7 1.95v-7.2c-.075-.225.075-.375.3-.375zm10.5 11.25H9.75c-.225 0-.375-.15-.375-.375v-1.8l3.075-2.25 2.25 1.425c.225.15.525.15.675-.075L18 13l2.625 2.55v2.7c0 .225-.15.375-.375.375z"
  })));
};
const Np = (0, g.memo)(Fp);
var Dp = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "30",
    height: "26",
    viewBox: "0 0 30 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "30",
    height: "26",
    fill: "#F4F5F7",
    rx: "2"
  }), React.createElement("path", {
    fill: "#7A8B9A",
    "fill-rule": "evenodd",
    d: "M15 19a6 6 0 100-12 6 6 0 000 12zm0 1.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#7A8B9A",
    "fill-rule": "evenodd",
    d: "M13.5 14.902L16.794 13 13.5 11.098v3.804zm4.044-.603c1-.577 1-2.02 0-2.598L14.25 9.799A1.5 1.5 0 0012 11.098v3.804a1.5 1.5 0 002.25 1.299l3.294-1.902z",
    "clip-rule": "evenodd"
  })));
};
const Wp = (0, g.memo)(Dp);
var zp = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "30",
    height: "26",
    viewBox: "0 0 30 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "30",
    height: "26",
    fill: "#F4F5F7",
    rx: "2"
  }), React.createElement("path", {
    fill: "#7A8B9A",
    d: "M11.25 9.4h6.15l-1.275 1.35.825.825 2.7-2.7-2.625-3-.825.75 1.425 1.725H11.25c-.675 0-1.275.225-1.725.675-1.05 1.125-1.05 3.15-1.05 4.2v.15H9.6v-.225c0-.825 0-2.625.75-3.375.225-.225.525-.375.9-.375zm10.35 3v-.15h-1.125v.225c0 .825 0 2.625-.75 3.375-.225.225-.525.375-.975.375H12.6l1.275-1.275-.825-.825-2.625 2.625 2.625 3 .825-.75-1.425-1.725h6.3c.675 0 1.275-.225 1.725-.675 1.125-1.05 1.125-3.15 1.125-4.2z"
  })));
};
const Bp = (0, g.memo)(zp);
var Lp = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "30",
    height: "26",
    viewBox: "0 0 30 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "30",
    height: "26",
    fill: "#FF4955",
    rx: "2"
  }), React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M15 8.125a1.688 1.688 0 00-1.591 1.125h3.182A1.688 1.688 0 0015 8.125zM15 7a2.813 2.813 0 00-2.756 2.25H9.75v1.125h.953l.613 6.748a2.062 2.062 0 002.054 1.875h3.26a2.062 2.062 0 002.054-1.875l.613-6.748h.953V9.25h-2.494A2.814 2.814 0 0015 7zm3.168 3.375h-6.336l.604 6.646a.938.938 0 00.934.852h3.26a.938.938 0 00.934-.852l.604-6.646z",
    clipRule: "evenodd"
  })));
};
const Vp = (0, g.memo)(Lp);
var Hp = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "13",
    height: "15",
    viewBox: "0 0 13 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#000D25",
    d: "M.528 1.1c0-.154.037-.306.107-.442.23-.44.75-.6 1.163-.354l10.29 6.088c.14.083.255.206.332.355.23.44.08.995-.332 1.239l-10.29 6.088a.8.8 0 01-.415.115c-.472 0-.855-.408-.855-.911V1.1z"
  })));
};
const Gp = (0, g.memo)(Hp);
function Up(e, t) {
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
      if ("string" == typeof e) return qp(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qp(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function qp(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
