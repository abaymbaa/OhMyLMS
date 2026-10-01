// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function o6(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  o6 = function (e, t, n, r) {
    function o(t, n) {
      o6(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, o6(e, t, n, r);
}
function i6(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function l6(e, t) {
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
      if ("string" == typeof e) return c6(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c6(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function c6(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var u6 = function () {
    return React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "55",
      height: "55",
      viewBox: "0 0 55 55",
      fill: "none"
    }, React.createElement("path", {
      d: "M25.7813 36.6667V33.2292H29.2188V36.6667H25.7813Z",
      fill: "#444D5E"
    }), React.createElement("path", {
      d: "M25.7813 18.3334L25.7813 29.7917H29.2188V18.3334L25.7813 18.3334Z",
      fill: "#444D5E"
    }), React.createElement("path", {
      fillRule: "evenodd",
      "clip-rule": "evenodd",
      d: "M27.5001 9.16675C17.3749 9.16675 9.16675 17.3749 9.16675 27.5001C9.16675 37.6253 17.3749 45.8334 27.5001 45.8334C37.6253 45.8334 45.8334 37.6253 45.8334 27.5001C45.8334 17.3749 37.6253 9.16675 27.5001 9.16675ZM12.6042 27.5001C12.6042 35.7268 19.2733 42.3959 27.5001 42.3959C35.7268 42.3959 42.3959 35.7268 42.3959 27.5001C42.3959 19.2733 35.7268 12.6042 27.5001 12.6042C19.2733 12.6042 12.6042 19.2733 12.6042 27.5001Z",
      fill: "#444D5E"
    }));
  },
  s6 = function () {
    var e = l6((0, g.useState)(!1), 2),
      t = e[0],
      n = e[1],
      r = l6((0, g.useState)(null), 2),
      a = r[0],
      o = r[1],
      i = l6((0, g.useState)("json"), 2),
      l = i[0],
      c = i[1],
      u = l6((0, g.useState)(!1), 2),
      s = u[0],
      d = u[1],
      m = (0, y.useDispatch)(T.default),
      p = (0, f.Zp)(),
      v = true,
      h = function () {
        var e,
          t = (e = a6().m(function e() {
            var t, r, o;
            return a6().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if ("json" !== l || v) {
                    e.n = 1;
                    break;
                  }
                  return d(!0), e.a(2);
                case 1:
                  if (a) {
                    e.n = 2;
                    break;
                  }
                  return e.a(2);
                case 2:
                  if (e.p = 2, n(!0), "scorm" !== l) {
                    e.n = 4;
                    break;
                  }
                  return e.n = 3, m.importScormCourse(a);
                case 3:
                  r = e.v, e.n = 6;
                  break;
                case 4:
                  return e.n = 5, m.importCourse(a);
                case 5:
                  r = e.v;
                case 6:
                  null != (t = r) && t.success && p("/courses"), e.n = 8;
                  break;
                case 7:
                  e.p = 7, o = e.v, console.error("Error importing course:", o);
                case 8:
                  return e.p = 8, n(!1), e.f(8);
                case 9:
                  return e.a(2);
              }
            }, e, null, [[2, 7, 8, 9]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                i6(o, r, a, i, l, "next", e);
              }
              function l(e) {
                i6(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      }();
    return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      isBorderless: !0,
      padding: "24px"
    }, React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      padding: "24px 16px"
    }, React.createElement(I.FlexWP, {
      direction: "column",
      gap: 6,
      justify: "center",
      align: "center",
      style: {
        textAlign: "center",
        minHeight: "258px"
      }
    }, React.createElement(u6, null), React.createElement(I.HeadingWP, {
      as: "h3",
      size: "20",
      weight: "400",
      color: "#444d5e",
      style: {
        margin: 0
      }
    }, (0, b.__)("No supported plugin detected on this site.", "ohmylms")), React.createElement(I.TextWP, {
      as: "p",
      size: "14",
      color: "#000d25",
      align: "center",
      weight: "400",
      style: {
        margin: 0,
        maxWidth: "729px"
      }
    }, (0, b.__)("We currently support migration from ", "ohmylms"), React.createElement("strong", null, (0, b.__)("Tutor LMS, LearnPress, LearDash and MasterStudy LMS. ", "ohmylms")), (0, b.__)("To use migration, please install and activate the supported platform on the same site as CLMS or use ", "ohmylms"), React.createElement("strong", null, (0, b.__)("Import option", "ohmylms")), (0, b.__)(".", "ohmylms")))), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 12
    }, React.createElement(I.HeadingWP, {
      as: "h4",
      size: "18px",
      color: "#000D25",
      weight: "600"
    }, (0, b.__)("You can import your data instead", "ohmylms")), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 6
    }, React.createElement(r6, {
      onFileChange: function (e, t) {
        "json" !== t || v ? (o(e), c(t)) : d(!0);
      },
      jsonImportEnabled: v
    })))), React.createElement(I.SpacerWP, {
      padding: 0,
      marginBottom: 0,
      marginTop: 4
    }, React.createElement(I.FlexWP, {
      justify: "flex-end"
    }, React.createElement(I.ButtonWP, {
      variant: "primary",
      size: "md",
      onClick: h,
      isBusy: t,
      disabled: !a || t
    }, (0, b.__)("Import", "ohmylms")))), s && React.createElement(He.default, {
      isOpen: s,
      onClose: d
    }));
  };
const d6 = (0, g.memo)(s6);
var m6, p6, f6, v6, g6;
function h6(e) {
  return function (e) {
    if (Array.isArray(e)) return y6(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return y6(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y6(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function y6(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var b6 = (null === (m6 = window.ohmylms_params) || void 0 === m6 ? void 0 : m6.plugin_assets) + "images/",
  _6 = [].concat(h6(null !== (p6 = window) && void 0 !== p6 && null !== (p6 = p6.ohmylms_params) && void 0 !== p6 && p6.is_tutor_lms_active ? [{
    label: (0, b.__)("Tutor LMS", "ohmylms"),
    value: "tutorLMS",
    icon: b6 + "tutor_icon.svg"
  }] : []), h6(null !== (f6 = window) && void 0 !== f6 && null !== (f6 = f6.ohmylms_params) && void 0 !== f6 && f6.is_learndash_lms_active ? [{
    label: (0, b.__)("LearnDash", "ohmylms"),
    value: "learnDash",
    icon: b6 + "learndash_icon.svg"
  }] : []), h6(null !== (v6 = window) && void 0 !== v6 && null !== (v6 = v6.ohmylms_params) && void 0 !== v6 && v6.is_learnpress_active ? [{
    label: (0, b.__)("LearnPress", "ohmylms"),
    value: "learnPress",
    icon: b6 + "learnpress_icon.svg"
  }] : []), h6(null !== (g6 = window) && void 0 !== g6 && null !== (g6 = g6.ohmylms_params) && void 0 !== g6 && g6.is_masterstudy_active ? [{
    label: (0, b.__)("MasterStudy LMS", "ohmylms"),
    value: "masterStudy",
    icon: b6 + "masterstudy_icon.svg"
  }] : [])),
  w6 = function () {
    return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      className: "ohmylms-full-screen-height"
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      paddingTop: 6,
      marginTop: 4,
      marginBottom: 0
    }, _6.length > 0 ? React.createElement(React.Fragment, null, React.createElement(X4, null)) : React.createElement(React.Fragment, null, React.createElement(d6, null)), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 18,
      paddingBottom: 28
    }, React.createElement(k4, null)))));
  };
const E6 = (0, g.memo)(w6);
function S6(e) {
  return function (e) {
    if (Array.isArray(e)) return j6(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || k6(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function R6() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return x6(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (x6(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, x6(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, x6(d, "constructor", u), x6(u, "constructor", c), c.displayName = "GeneratorFunction", x6(u, a, "GeneratorFunction"), x6(d), x6(d, a, "Generator"), x6(d, r, function () {
    return this;
  }), x6(d, "toString", function () {
    return "[object Generator]";
  }), (R6 = function () {
    return {
      w: o,
      m
    };
  })();
}
function x6(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  x6 = function (e, t, n, r) {
    function o(t, n) {
      x6(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, x6(e, t, n, r);
}
function C6(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function P6(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        C6(o, r, a, i, l, "next", e);
      }
      function l(e) {
        C6(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function O6(e, t) {
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
  }(e, t) || k6(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function k6(e, t) {
  if (e) {
    if ("string" == typeof e) return j6(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? j6(e, t) : void 0;
  }
}
function j6(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
