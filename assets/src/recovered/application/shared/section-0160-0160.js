// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function s5() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return d5(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (d5(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, d5(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, d5(d, "constructor", u), d5(u, "constructor", c), c.displayName = "GeneratorFunction", d5(u, a, "GeneratorFunction"), d5(d), d5(d, a, "Generator"), d5(d, r, function () {
    return this;
  }), d5(d, "toString", function () {
    return "[object Generator]";
  }), (s5 = function () {
    return {
      w: o,
      m
    };
  })();
}

function d5(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  d5 = function (e, t, n, r) {
    function o(t, n) {
      d5(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, d5(e, t, n, r);
}

function m5(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function p5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? m5(Object(n), !0).forEach(function (t) {
      f5(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m5(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function f5(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != u5(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != u5(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == u5(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function v5(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function g5(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        v5(o, r, a, i, l, "next", e);
      }
      function l(e) {
        v5(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function h5(e, t) {
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
  }(e, t) || y5(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function y5(e, t) {
  if (e) {
    if ("string" == typeof e) return b5(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b5(e, t) : void 0;
  }
}

function b5(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var _5 = function () {
  var e = (0, L.useIsPro)(),
    t = (0, y.useDispatch)(T.default),
    n = h5((0, g.useState)({
      enable: !1,
      rules: [{
        label: (0, b.__)("Allow course purchases using bonus points", "ohmylms"),
        tooltip: (0, b.__)("Enable learners to redeem their earned points for course access.", "ohmylms"),
        slug: "purchase_course",
        value: !1
      }]
    }), 2),
    r = n[0],
    a = n[1],
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getGamificationSettings();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    u = h5((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = h5((0, g.useState)(!1), 2),
    p = m[0],
    f = m[1],
    v = (0, z.A)(),
    h = v.openNotificationWithIcon,
    _ = v.contextHolder;
  (0, g.useEffect)(function () {
    var t = function () {
      var e = g5(s5().m(function e() {
        var t, n;
        return s5().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              return d(!0), e.n = 1, l()({
                path: "creator-lms/v1/engagement/settings/reward"
              });
            case 1:
              t = e.v, a(t || r), d(!1), t && (n = w(t.rules || [], S), a(p5(p5({}, t), {}, {
                rules: n
              })));
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
    e && t();
  }, []);
  var w = function (e, t) {
    var n = function (e) {
      return function (e) {
        if (Array.isArray(e)) return b5(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || y5(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }(e);
    return t.forEach(function (t) {
      e.some(function (e) {
        return e.slug === t.slug;
      }) || n.push(t);
    }), n;
  };
  (0, g.useEffect)(function () {
    !s && i && h(c, i);
  }, [i]);
  var E = function () {
      var n = g5(s5().m(function n() {
        var a;
        return s5().w(function (n) {
          for (;;) switch (n.p = n.n) {
            case 0:
              if (e) {
                n.n = 1;
                break;
              }
              return n.a(2);
            case 1:
              return t.setLoadingSetting(!0), f(!0), n.p = 2, n.n = 3, l()({
                path: "/creator-lms/v1/engagement/settings/reward",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
              });
            case 3:
              return null != (a = n.v) && a.success && t.setGlobalDataViaKey("engagement_settings", p5(p5({}, o), {}, {
                reward_settings: r
              })), h("success", (0, b.__)("Settings saved successfully.", "ohmylms")), n.a(2, a);
            case 4:
              n.p = 4, n.v, f(!1), h("error", (0, b.__)("Something went wrong.", "ohmylms"));
            case 5:
              return n.p = 5, t.setLoadingSetting(!1), f(!1), n.f(5);
            case 6:
              return n.a(2);
          }
        }, n, null, [[2, 4, 5, 6]]);
      }));
      return function () {
        return n.apply(this, arguments);
      };
    }(),
    S = [{
      label: (0, b.__)("Allow purchasing course using bonus point", "ohmylms"),
      tooltip: (0, b.__)("Award points when a user completes an entire course.", "ohmylms"),
      slug: "purchase_course",
      value: !0
    }];
  return s ? React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    marginTop: 2.5,
    padding: 6
  }, React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 15
  })))) : React.createElement(React.Fragment, null, _, React.createElement(I.ProOverlayWP, {
    title: (0, b.__)("The Reward System is a Pro feature and will be available soon. Stay tuned to unlock advanced gamification tools that boost learner motivation and course completion rates.", "ohmylms")
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
  }, e && React.createElement(React.Fragment, null, r.rules.map(function (e, t) {
    return React.createElement(I.CardWP, {
      key: t,
      isBorderless: !0,
      padding: "24px",
      fullWidth: !0
    }, React.createElement(I.FlexWP, {
      align: "flex-start",
      justify: "flex-start",
      direction: "column",
      gap: 3
    }, React.createElement(React.Fragment, {
      key: e.value
    }, React.createElement(I.FlexWP, {
      align: "center",
      justify: "space-between",
      style: {
        width: "100%"
      }
    }, React.createElement(I.FlexItemWP, null, React.createElement(I.HeadingWP, {
      level: "4"
    }, (0, b.__)(e.label, "ohmylms")), React.createElement(I.SpacerWP, {
      marginBottom: 1
    }), React.createElement(I.TextWP, null, (0, b.__)(e.tooltip, "ohmylms"))), React.createElement(I.FlexItemWP, null, React.createElement(I.SwitchWP, {
      checked: e.value,
      onChange: function (e) {
        return function (e, t) {
          a(function (n) {
            var r = n.rules.map(function (n, r) {
              return r === e ? p5(p5({}, n), {}, {
                value: t
              }) : n;
            });
            return p5(p5({}, n), {}, {
              rules: r
            });
          });
        }(t, e);
      }
    }))), void 0 !== (null == e ? void 0 : e.threshold) && e.value && React.createElement(I.FlexItemWP, {
      fullWidth: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 1
    }), React.createElement(I.FlexWP, {
      align: "flex-start",
      justify: "space-between"
    }, React.createElement(I.FlexItemWP, null, React.createElement(I.HeadingWP, {
      level: "5"
    }, (0, b.__)("Minimum Required Threshold", "ohmylms")), React.createElement(I.SpacerWP, {
      marginBottom: 1
    }), React.createElement(I.TextWP, null, (0, b.__)("Set the minimum percentage a learner must achieve to earn bonus points for this activity.", "ohmylms"))), React.createElement(I.FlexItemWP, null, React.createElement(I.InputNumberWP, {
      value: e.threshold,
      onChange: function (e) {
        return function (e, t) {
          a(function (n) {
            var r = n.rules.map(function (n, r) {
              return r === e ? p5(p5({}, n), {}, {
                threshold: t
              }) : n;
            });
            return p5(p5({}, n), {}, {
              rules: r
            });
          });
        }(t, e);
      },
      min: 0,
      max: 100,
      suffix: "%"
    })))))));
  }))))), React.createElement(I.SpacerWP, {
    paddingTop: 6,
    paddingBottom: 25
  }, React.createElement(I.FlexWP, {
    justify: "flex-end"
  }, React.createElement(I.ButtonWP, {
    variant: "primary",
    size: "md",
    onClick: E,
    isBusy: p
  }, (0, b.__)("Save", "ohmylms")))));
};

const w5 = (0, g.memo)(_5);

function E5(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var S5 = function () {
  var e = (0, z.A)(),
    t = (e.openNotificationWithIcon, e.contextHolder),
    n = (0, f.g)(),
    r = (n.tab, n.subTab),
    a = (n.subPanel, (0, f.Zp)()),
    o = function (e, t) {
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
          if ("string" == typeof e) return E5(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E5(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(["point-settings", "badge-settings", "level-settings", "reward-settings", "leaderboard-settings"].includes(r) ? r : "point-settings"), 2),
    i = o[0],
    l = o[1],
    c = (0, g.useMemo)(function () {
      return [{
        label: React.createElement(React.Fragment, null, (0, b.__)("Bonus Point", "ohmylms")),
        key: "point-settings",
        children: React.createElement(N2, null)
      }, {
        label: React.createElement(React.Fragment, null, (0, b.__)("Achievement Badges", "ohmylms")),
        key: "badge-settings",
        children: React.createElement(E3, null)
      }, {
        label: React.createElement(React.Fragment, null, (0, b.__)("Learner Levels", "ohmylms")),
        key: "level-settings",
        children: React.createElement(c5, null)
      }, {
        label: React.createElement(React.Fragment, null, (0, b.__)("Reward", "ohmylms")),
        key: "reward-settings",
        children: React.createElement(w5, null)
      }, {
        label: React.createElement(React.Fragment, null, (0, b.__)("Leaderboard", "ohmylms")),
        key: "leaderboard-settings",
        children: React.createElement(S2, null)
      }];
    }, []);
  return React.createElement(React.Fragment, null, t, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    className: "omlms-full-screen-height"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    paddingTop: 1,
    marginTop: 4,
    marginBottom: 0
  }, React.createElement(I.TabsWP, {
    items: c,
    onChange: function (e) {
      return function (e) {
        l(e), a("/settings/gamification-settings/".concat(e));
      }(e);
    },
    activekey: i
  }))));
};

const R5 = (0, g.memo)(S5);
