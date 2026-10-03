// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var eU = function (e) {
  e.onBack;
  var t = e.handleCreateCourse,
    n = (e.showBackButton, e.courseType),
    r = e.loading,
    a = (0, y.useDispatch)(T.default),
    o = true,
    i = (0, f.Zp)(),
    l = function (e, t) {
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
          if ("string" == typeof e) return XG(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? XG(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    c = l[0],
    u = l[1],
    d = (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, []);
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    padding: "20px 64px 64px",
    fullHeight: !0
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    justify: "center",
    direction: "column",
    gap: 13
  }, React.createElement(I.HeadingWP, {
    level: 3,
    size: 30,
    weight: 600
  }, (0, b.__)("How would you like to build your course?", "ohmylms")), React.createElement(I.FlexWP, {
    gap: 2.5,
    align: "stretch"
  }, React.createElement(I.ButtonWP, {
    onClick: t,
    className: "ohmylms-course-type-btn ohmylms-manual-course",
    isBusy: r
  }, r && React.createElement(I.FlexWP, {
    align: "center",
    justify: "center",
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "color-mix(in srgb, var(--ohmylms-primary-color) 50%, transparent)",
      borderRadius: "4px"
    }
  }, React.createElement(I.SpinWP, {
    spinning: !0,
    delay: 0
  })), React.createElement(I.FlexWP, {
    gap: 2,
    justify: "flex-start",
    align: "center"
  }, React.createElement(pG.A, null), React.createElement(I.HeadingWP, {
    level: 4,
    size: 16
  }, (0, b.__)("Start from Scratch", "ohmylms"))), React.createElement(I.SpacerWP, {
    marginBottom: 3
  }), React.createElement(I.TextWP, {
    as: "p",
    color: "#7A8B9A",
    size: 13,
    lineHeight: "1.7em"
  }, (0, b.__)("Build your course from the ground up with complete control over every aspect of the content and structure.", "ohmylms"))), null))), c && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: c,
    onClose: u
  })));
};
const tU = (0, g.memo)(eU);
function nU() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return rU(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (rU(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, rU(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, rU(d, "constructor", u), rU(u, "constructor", c), c.displayName = "GeneratorFunction", rU(u, a, "GeneratorFunction"), rU(d), rU(d, a, "Generator"), rU(d, r, function () {
    return this;
  }), rU(d, "toString", function () {
    return "[object Generator]";
  }), (nU = function () {
    return {
      w: o,
      m
    };
  })();
}
function rU(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  rU = function (e, t, n, r) {
    function o(t, n) {
      rU(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, rU(e, t, n, r);
}
function aU(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function oU(e, t) {
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
      if ("string" == typeof e) return iU(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? iU(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function iU(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
const lU = function (e) {
  var t,
    n = e.isOpen,
    r = e.onClose,
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, []),
    o = oU((0, g.useState)("self-paced"), 2),
    i = o[0],
    l = o[1],
    c = oU((0, g.useState)(""), 2),
    u = c[0],
    s = (c[1], oU((0, g.useState)(!1), 2)),
    d = s[0],
    m = s[1],
    p = oU((0, g.useState)(null == a || null === (t = a.cohort) || void 0 === t ? void 0 : t.is_enable), 2),
    v = p[0],
    h = (p[1], oU((0, g.useState)(1), 2)),
    _ = h[0],
    w = h[1],
    E = (0, y.useDispatch)(T.default),
    S = (0, f.Zp)(),
    R = true;
  (0, g.useEffect)(function () {
    v || w(2);
  }, [v]);
  var x,
    C,
    P = function () {
      var e,
        t = (e = nU().m(function e() {
          var t,
            n,
            a,
            o,
            l = arguments;
          return nU().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (t = l.length > 0 && void 0 !== l[0] && l[0], !d) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                if ("cohort-based" !== i || R) {
                  e.n = 2;
                  break;
                }
                return e.a(2);
              case 2:
                return m(!0), n = {
                  title: "Untitled Course",
                  status: "draft",
                  course_type: v ? i : "self-paced",
                  creation_method: u,
                  isCommunityEnable: t ? "yes" : "no"
                }, e.p = 3, e.n = 4, E.createCourse(n);
              case 4:
                a = e.v, S("/course-edit/".concat(a.id, "/content")), e.n = 6;
                break;
              case 5:
                e.p = 5, o = e.v, console.error(o);
              case 6:
                return e.p = 6, m(!1), r(), e.f(6);
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
              aU(o, r, a, i, l, "next", e);
            }
            function l(e) {
              aU(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    O = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginInlineEnd: "5px"
    };
  return React.createElement(QG.A, {
    isOpen: n,
    title: v ? ("self-paced" === i ? C = (0, b.__)("Self Paced", "ohmylms") : "cohort-based" === i && (C = (0, b.__)("Cohort Based", "ohmylms")), React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
      align: "center",
      justify: "center",
      gap: 0
    }, React.createElement(I.ButtonWP, {
      onClick: function () {
        w(1);
      },
      className: "ohmylms-course-type-indicator ".concat(1 === _ ? "ohmylms-step-active" : "", " ").concat(2 === _ ? "ohmylms-step-done" : "")
    }, React.createElement(I.BadgeWP, {
      isRounded: !0,
      width: "30px",
      height: "30px",
      style: O,
      variant: 2 === _ ? "success" : "default"
    }, 1 === _ ? (0, b.__)("1", "ohmylms") : "✓"), 1 === _ ? (0, b.__)("Course Type", "ohmylms") : C), React.createElement(I.ProgressBarWP, {
      value: 1 === _ ? 0 : 100,
      style: {
        width: "20px"
      }
    }), React.createElement(I.ButtonWP, {
      style: {
        cursor: "default"
      },
      className: "ohmylms-course-type-indicator last-step ".concat(2 === _ ? "ohmylms-step-active" : "")
    }, React.createElement(I.BadgeWP, {
      isRounded: !0,
      width: "30px",
      height: "30px",
      style: O
    }, (0, b.__)("2", "ohmylms")), (0, b.__)("Build Type", "ohmylms"))))) : 2 !== _ || v ? null : React.createElement(I.TextWP, {
      as: "h1",
      size: "19px",
      weight: "700"
    }, (0, b.__)("OhMyLMS", "ohmylms")),
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    onRequestClose: r,
    size: "fill",
    style: {
      maxWidth: "790px",
      background: "#FFFFFF"
    },
    className: "ohmylms-course-type-modal ".concat(v ? "" : "ohmylms-no-cohort-type")
  }, 1 === _ && React.createElement(JG, {
    setCourseType: function (e) {
      ("cohort-based" !== e || R) && (l(e), w(2));
    }
  }), 2 === _ && React.createElement(tU, {
    onBack: function () {
      v ? w(1) : r();
    },
    handleCreateCourse: P,
    showBackButton: !1,
    courseType: i,
    text: (x = null, "self-paced" === i ? x = (0, b.__)("You're creating a Self-Paced course. How would you like to start?", "ohmylms") : "cohort-based" === i && (x = (0, b.__)("You're creating a Cohort-based course. How would you like to begin?", "ohmylms")), React.createElement(I.HeadingWP, {
      level: 3,
      weight: 600,
      style: {
        maxWidth: "410px",
        margin: "0 auto",
        fontSize: "22px"
      }
    }, x)),
    loading: d
  }));
};
function cU() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return uU(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (uU(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, uU(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, uU(d, "constructor", u), uU(u, "constructor", c), c.displayName = "GeneratorFunction", uU(u, a, "GeneratorFunction"), uU(d), uU(d, a, "Generator"), uU(d, r, function () {
    return this;
  }), uU(d, "toString", function () {
    return "[object Generator]";
  }), (cU = function () {
    return {
      w: o,
      m
    };
  })();
}
function uU(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  uU = function (e, t, n, r) {
    function o(t, n) {
      uU(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, uU(e, t, n, r);
}
function sU(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function dU(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        sU(o, r, a, i, l, "next", e);
      }
      function l(e) {
        sU(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function mU(e, t) {
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
      if ("string" == typeof e) return pU(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pU(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function pU(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
