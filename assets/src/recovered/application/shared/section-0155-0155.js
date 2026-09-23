// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var E2 = function () {
  var e = (0, L.useIsPro)(),
    t = (0, y.useDispatch)(T.default),
    n = _2((0, g.useState)({
      enable: !1,
      rules: "completion_rate",
      threshold: "",
      students_number: ""
    }), 2),
    r = n[0],
    a = n[1],
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    c = _2((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1],
    d = _2((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = (0, z.A)(),
    v = f.openNotificationWithIcon,
    h = f.contextHolder,
    _ = function () {
      var t = b2(p2().m(function t() {
        var n, r;
        return p2().w(function (t) {
          for (;;) switch (t.p = t.n) {
            case 0:
              if (e) {
                t.n = 1;
                break;
              }
              return t.a(2);
            case 1:
              return t.p = 1, s(!0), t.n = 2, l()({
                path: "creator-lms/v1/engagement/settings/leaderboard"
              });
            case 2:
              n = t.v, a(function (e) {
                return g2(g2({}, e), n);
              }), t.n = 4;
              break;
            case 3:
              t.p = 3, r = t.v, console.error(r);
            case 4:
              return t.p = 4, s(!1), t.f(4);
            case 5:
              return t.a(2);
          }
        }, t, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return t.apply(this, arguments);
      };
    }();
  (0, g.useEffect)(function () {
    var e = !0;
    return e && _(), function () {
      e = !1;
    };
  }, []), (0, g.useEffect)(function () {
    !u && o && v(i, o);
  }, [o]);
  var w = function () {
      var n = b2(p2().m(function n() {
        var a;
        return p2().w(function (n) {
          for (;;) switch (n.p = n.n) {
            case 0:
              if (e) {
                n.n = 1;
                break;
              }
              return n.a(2);
            case 1:
              if ("" !== r.students_number && null !== r.students_number) {
                n.n = 2;
                break;
              }
              return v("error", (0, b.__)("The fields cannot be empty.", "ohmylms")), n.a(2);
            case 2:
              if ("fastest_time" === r.rules) {
                n.n = 3;
                break;
              }
              if ("" !== r.threshold && null !== r.threshold) {
                n.n = 3;
                break;
              }
              return v("error", (0, b.__)("The fields cannot be empty.", "ohmylms")), n.a(2);
            case 3:
              return t.setLoadingSetting(!0), p(!0), n.p = 4, n.n = 5, l()({
                path: "/creator-lms/v1/engagement/settings/leaderboard",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
              });
            case 5:
              return a = n.v, v("success", (0, b.__)("Settings saved successfully.", "ohmylms")), n.a(2, a);
            case 6:
              n.p = 6, n.v, p(!1), v("error", (0, b.__)("Something went wrong.", "ohmylms"));
            case 7:
              return n.p = 7, t.setLoadingSetting(!1), p(!1), n.f(7);
            case 8:
              return n.a(2);
          }
        }, n, null, [[4, 6, 7, 8]]);
      }));
      return function () {
        return n.apply(this, arguments);
      };
    }(),
    E = function (t, n) {
      if (e) {
        var o = g2(g2({}, r), {}, h2({}, t, n));
        a(o);
      }
    },
    S = [{
      label: (0, b.__)("Course completion rate", "ohmylms"),
      value: "completion_rate"
    }, {
      label: (0, b.__)("Highest average quiz score", "ohmylms"),
      value: "highest_quiz"
    }, {
      label: (0, b.__)("Fastest completion time", "ohmylms"),
      value: "fastest_time"
    }];
  if (u) return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    marginTop: 2.5,
    padding: 6
  }, React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 15
  }))));
  var R = "fastest_time" !== r.rules && ("" === r.threshold || null === r.threshold || r.threshold < 0) || "" === r.students_number || null === r.students_number || r.students_number < 0;
  return React.createElement(React.Fragment, null, h, React.createElement(I.ProOverlayWP, {
    title: (0, b.__)("Leaderboard is available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.", "ohmylms")
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 0,
    marginTop: 2.5,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "flex-start",
    direction: "column",
    gap: 3
  }, e && React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "24px",
    fullWidth: !0
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    justify: "flex-start",
    gap: 10,
    direction: "column"
  }, React.createElement(I.FlexItemWP, {
    fullWidth: !0
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    style: {
      width: "50%"
    }
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Rank students based on", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Select a criterion to rank students.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    style: {
      width: "40%"
    }
  }, React.createElement(I.SelectWP, {
    placeholder: (0, b.__)("Select a criterion", "ohmylms"),
    onChange: function (t) {
      if (e) {
        var n = g2(g2({}, r), {}, {
          rules: t
        });
        a(n);
      }
    },
    value: r.rules,
    options: S
  })))), "fastest_time" !== r.rules && React.createElement(React.Fragment, null, React.createElement(I.FlexItemWP, {
    fullWidth: !0
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    style: {
      width: "50%"
    }
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Set the threshold for the leaderboard", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Set the minimum threshold value required for students to be included in the leaderboard.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    style: {
      width: "40%"
    }
  }, React.createElement(I.InputNumberWP, {
    value: null == r ? void 0 : r.threshold,
    onChange: function (e) {
      return E("threshold", e);
    },
    min: 0,
    suffix: "completion_rate" === (null == r ? void 0 : r.rules) || "highest_quiz" === (null == r ? void 0 : r.rules) ? "%" : ""
  }))))))), React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "24px",
    fullWidth: !0
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    justify: "flex-start",
    gap: 4,
    direction: "column"
  }, React.createElement(I.FlexItemWP, {
    fullWidth: !0
  }, React.createElement(I.FlexWP, {
    align: "flex-start",
    justify: "space-between"
  }, React.createElement(I.FlexItemWP, {
    style: {
      width: "50%"
    }
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Minimum Students Required", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 1
  }), React.createElement(I.TextWP, null, (0, b.__)("Set the minimum number of students required to display the leaderboard.", "ohmylms"))), React.createElement(I.FlexItemWP, {
    style: {
      width: "40%"
    }
  }, React.createElement(I.InputNumberWP, {
    value: r.students_number,
    onChange: function (e) {
      return E("students_number", e);
    },
    min: 0
  })))))))))), React.createElement(I.SpacerWP, {
    paddingTop: 6,
    paddingBottom: 25
  }, React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    size: "md",
    onClick: w,
    isBusy: m,
    disabled: R
  }, (0, b.__)("Save", "ohmylms")))));
};

const S2 = (0, g.memo)(E2);

function R2(e) {
  return R2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, R2(e);
}

function x2() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return C2(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (C2(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, C2(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, C2(d, "constructor", u), C2(u, "constructor", c), c.displayName = "GeneratorFunction", C2(u, a, "GeneratorFunction"), C2(d), C2(d, a, "Generator"), C2(d, r, function () {
    return this;
  }), C2(d, "toString", function () {
    return "[object Generator]";
  }), (x2 = function () {
    return {
      w: o,
      m
    };
  })();
}

function C2(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  C2 = function (e, t, n, r) {
    function o(t, n) {
      C2(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, C2(e, t, n, r);
}

function P2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function O2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? P2(Object(n), !0).forEach(function (t) {
      k2(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P2(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function k2(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != R2(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != R2(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == R2(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function j2(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function A2(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        j2(o, r, a, i, l, "next", e);
      }
      function l(e) {
        j2(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function M2(e, t) {
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
  }(e, t) || T2(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function T2(e, t) {
  if (e) {
    if ("string" == typeof e) return I2(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I2(e, t) : void 0;
  }
}

function I2(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
