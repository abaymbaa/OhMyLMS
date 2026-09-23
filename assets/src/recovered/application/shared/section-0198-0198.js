// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Y9(e) {
  return Y9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Y9(e);
}

function Q9(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function Z9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Q9(Object(n), !0).forEach(function (t) {
      $9(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q9(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function $9(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Y9(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Y9(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Y9(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function K9() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return J9(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (J9(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, J9(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, J9(d, "constructor", u), J9(u, "constructor", c), c.displayName = "GeneratorFunction", J9(u, a, "GeneratorFunction"), J9(d), J9(d, a, "Generator"), J9(d, r, function () {
    return this;
  }), J9(d, "toString", function () {
    return "[object Generator]";
  }), (K9 = function () {
    return {
      w: o,
      m
    };
  })();
}

function J9(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  J9 = function (e, t, n, r) {
    function o(t, n) {
      J9(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, J9(e, t, n, r);
}

function X9(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function eee(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        X9(o, r, a, i, l, "next", e);
      }
      function l(e) {
        X9(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function tee(e, t) {
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
      if ("string" == typeof e) return nee(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nee(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function nee(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ree = {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "13px",
    outline: "none",
    boxSizing: "border-box"
  },
  aee = {
    display: "block",
    marginBottom: "6px",
    fontWeight: 500,
    fontSize: "13px"
  },
  oee = function (e) {
    var t = e.isOpen,
      n = e.setIsOpen,
      r = e.onEnrollment,
      a = void 0 === r ? function () {} : r,
      o = e.onCancel,
      i = void 0 === o ? function () {} : o,
      c = e.className,
      u = e.courseId,
      s = e.setNotification,
      d = tee((0, g.useState)(""), 2),
      m = d[0],
      p = d[1],
      f = tee((0, g.useState)(""), 2),
      v = f[0],
      h = f[1],
      y = tee((0, g.useState)(""), 2),
      _ = y[0],
      w = y[1],
      E = tee((0, g.useState)(null), 2),
      S = E[0],
      R = E[1],
      x = tee((0, g.useState)(!1), 2),
      C = x[0],
      P = x[1],
      O = tee((0, g.useState)(!1), 2),
      k = O[0],
      j = O[1],
      A = (0, g.useCallback)(function () {
        p(""), h(""), w(""), R(null);
      }, []),
      M = (0, g.useCallback)(function (e) {
        p(e.target.value), R(null);
      }, []),
      T = (0, g.useCallback)(eee(K9().m(function e() {
        var t, n, r;
        return K9().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (t = m.trim()) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return P(!0), e.p = 2, e.n = 3, l()({
                path: "/creator-lms/v1/users/?search=".concat(encodeURIComponent(t)),
                method: "GET"
              });
            case 3:
              n = e.v, r = Array.isArray(n) ? n.find(function (e) {
                var n;
                return (null === (n = e.email) || void 0 === n ? void 0 : n.toLowerCase()) === t.toLowerCase();
              }) : null, R(r ? {
                found: !0,
                display_name: r.display_name,
                username: r.username,
                id: r.id
              } : {
                found: !1
              }), e.n = 5;
              break;
            case 4:
              e.p = 4, e.v, R({
                found: !1
              });
            case 5:
              return e.p = 5, P(!1), e.f(5);
            case 6:
              return e.a(2);
          }
        }, e, null, [[2, 4, 5, 6]]);
      })), [m]),
      F = (0, g.useCallback)(function (e) {
        "Enter" === e.key && T();
      }, [T]),
      N = (0, g.useCallback)(eee(K9().m(function e() {
        var t, r, o, i, c;
        return K9().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if ((t = m.trim()) && u) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return j(!0), e.p = 2, r = {
                email: t
              }, v.trim() && (r.first_name = v.trim()), _.trim() && (r.last_name = _.trim()), e.n = 3, l()({
                path: "/creator-lms/v1/courses/".concat(u, "/enroll-by-email"),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
              });
            case 3:
              null != (o = e.v) && o.success ? (i = o.is_new_user ? (0, b.__)("New student account created and enrolled. Login details sent by email.", "ohmylms") : (0, b.__)("Student enrolled successfully.", "ohmylms"), s(i), a(), n(!1), A()) : s((null == o ? void 0 : o.message) || (0, b.__)("Enrollment failed.", "ohmylms")), e.n = 5;
              break;
            case 4:
              e.p = 4, c = e.v, s((null == c ? void 0 : c.message) || (0, b.__)("Something went wrong.", "ohmylms"));
            case 5:
              return e.p = 5, j(!1), e.f(5);
            case 6:
              return e.a(2);
          }
        }, e, null, [[2, 4, 5, 6]]);
      })), [m, v, _, u, s, a, n, A]),
      D = (0, g.useCallback)(function () {
        n(!1), A(), i();
      }, [n, i, A]),
      W = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.trim()),
      z = S && !S.found;
    return React.createElement(React.Fragment, null, t && React.createElement(I.ModalWP, {
      shouldCloseOnEsc: !0,
      shouldCloseOnClickOutside: !0,
      title: (0, b.__)("Enroll Student", "ohmylms"),
      onRequestClose: D,
      className: "omlms-enrollment-modal ".concat(c || "")
    }, React.createElement("div", {
      style: {
        marginBottom: "12px"
      }
    }, React.createElement("label", {
      style: aee
    }, (0, b.__)("Student Email", "ohmylms"), React.createElement("span", {
      style: {
        color: "#e53e3e"
      }
    }, " *")), React.createElement(I.FlexWP, {
      gap: 2,
      justify: "flex-start"
    }, React.createElement("input", {
      type: "email",
      value: m,
      onChange: M,
      onKeyDown: F,
      placeholder: (0, b.__)("Enter email address…", "ohmylms"),
      style: Z9(Z9({}, ree), {}, {
        flex: 1
      })
    }), React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: T,
      disabled: !W || C,
      isBusy: C
    }, (0, b.__)("Check", "ohmylms")))), S && React.createElement("div", {
      style: {
        padding: "10px 14px",
        borderRadius: "6px",
        fontSize: "13px",
        marginBottom: "14px",
        background: S.found ? "#f0fdf4" : "#fff7ed",
        border: "1px solid ".concat(S.found ? "#bbf7d0" : "#fed7aa"),
        color: S.found ? "#166534" : "#9a3412"
      }
    }, S.found ? React.createElement(React.Fragment, null, React.createElement("strong", null, (0, b.__)("User found:", "ohmylms")), " ", S.display_name, " (", S.username, ")", " — ", (0, b.__)("will be enrolled in this course.", "ohmylms")) : React.createElement(React.Fragment, null, React.createElement("strong", null, (0, b.__)("No account found.", "ohmylms")), " ", (0, b.__)("A new student account will be created and login details sent by email.", "ohmylms"))), z && React.createElement(I.FlexWP, {
      gap: 2,
      justify: "flex-start",
      style: {
        marginBottom: "14px"
      }
    }, React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("label", {
      style: aee
    }, (0, b.__)("First Name", "ohmylms"), React.createElement("span", {
      style: {
        color: "#9ca3af",
        fontWeight: 400
      }
    }, " (", (0, b.__)("optional", "ohmylms"), ")")), React.createElement("input", {
      type: "text",
      value: v,
      onChange: function (e) {
        return h(e.target.value);
      },
      placeholder: (0, b.__)("First name", "ohmylms"),
      style: ree
    })), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("label", {
      style: aee
    }, (0, b.__)("Last Name", "ohmylms"), React.createElement("span", {
      style: {
        color: "#9ca3af",
        fontWeight: 400
      }
    }, " (", (0, b.__)("optional", "ohmylms"), ")")), React.createElement("input", {
      type: "text",
      value: _,
      onChange: function (e) {
        return w(e.target.value);
      },
      placeholder: (0, b.__)("Last name", "ohmylms"),
      style: ree
    }))), React.createElement(I.SpacerWP, null), React.createElement(I.FlexWP, {
      justify: "flex-end"
    }, React.createElement(I.ButtonWP, {
      variant: "tertiary",
      onClick: D
    }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
      variant: "primary",
      onClick: N,
      disabled: !W || k,
      isBusy: k
    }, z ? (0, b.__)("Create & Enroll", "ohmylms") : (0, b.__)("Enroll", "ohmylms")))));
  };

const iee = (0, g.memo)(oee);

function lee(e) {
  return lee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, lee(e);
}

function cee(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function uee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? cee(Object(n), !0).forEach(function (t) {
      see(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cee(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function see(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != lee(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != lee(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == lee(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function dee() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return mee(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (mee(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, mee(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, mee(d, "constructor", u), mee(u, "constructor", c), c.displayName = "GeneratorFunction", mee(u, a, "GeneratorFunction"), mee(d), mee(d, a, "Generator"), mee(d, r, function () {
    return this;
  }), mee(d, "toString", function () {
    return "[object Generator]";
  }), (dee = function () {
    return {
      w: o,
      m
    };
  })();
}

function mee(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  mee = function (e, t, n, r) {
    function o(t, n) {
      mee(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, mee(e, t, n, r);
}

function pee(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function fee(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        pee(o, r, a, i, l, "next", e);
      }
      function l(e) {
        pee(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function vee(e, t) {
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
      if ("string" == typeof e) return gee(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gee(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function gee(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

n(81381);
