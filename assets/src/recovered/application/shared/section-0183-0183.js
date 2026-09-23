// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var T8 = function () {
  var e = (0, y.useSelect)(function (e) {
      return e(T.default).selectMembershipPlanData();
    }, []),
    t = (0, y.useDispatch)(T.default).updateMembershipPlan,
    n = j8((0, g.useState)([]), 2),
    r = (n[0], n[1]),
    a = j8((0, g.useState)([]), 2),
    o = a[0],
    i = a[1],
    c = j8((0, g.useState)([]), 2),
    u = (c[0], c[1]),
    s = j8((0, g.useState)(!1), 2),
    d = s[0],
    m = s[1],
    p = function (e) {
      return e && Array.isArray(e) ? e.map(function (e) {
        return {
          id: null == e ? void 0 : e.id,
          name: null == e ? void 0 : e.name,
          image_src: (null == e ? void 0 : e.image_src) || null,
          date_created: (null == e ? void 0 : e.date_created) || {}
        };
      }) : [];
    },
    f = function () {
      var e,
        t = (e = S8().m(function e(t) {
          var n, a, o, c;
          return S8().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, m(!0), e.n = 1, l()({
                  path: "/creator-lms/v1/courses?search=".concat(t, "&post_status=publish"),
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
              case 1:
                if (o = e.v) {
                  e.n = 2;
                  break;
                }
                o = [];
              case 2:
                a = p(n = o), r(function (e) {
                  var t = [].concat(x8(e), x8(a));
                  return Array.from(new Map(t.map(function (e) {
                    return [e.id, e];
                  })).values());
                }), i(n.map(function (e) {
                  return {
                    label: Ge(null == e ? void 0 : e.name),
                    value: e.id
                  };
                })), e.n = 4;
                break;
              case 3:
                e.p = 3, c = e.v, console.error(c);
              case 4:
                return e.p = 4, m(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[0, 3, 4, 5]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              C8(o, r, a, i, l, "next", e);
            }
            function l(e) {
              C8(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return t.apply(this, arguments);
      };
    }(),
    v = (0, g.useCallback)(function (e) {
      !function (e, n, r) {
        t(e, r ? O8(O8({}, o[e]), {}, k8({}, r, n)) : n);
      }("products", e.map(function (e) {
        return O8(O8({}, e), {}, {
          id: e.value
        });
      }));
    }, []),
    h = (0, g.useCallback)(function (e) {
      f(e);
    }, []);
  return (0, g.useEffect)(function () {
    f("");
    var t = ((null == e ? void 0 : e.products) || []).map(function (e) {
      return e.name;
    });
    u(t);
  }, []), React.createElement(I.SpacerWP, {
    marginTop: 4,
    className: "omlms-membership-plan-course-section"
  }, React.createElement(Ea, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    margin: 0
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Course", "ohmylms")), React.createElement(I.SpacerWP, null), React.createElement(I.AdvancedSelectWP, {
    isMulti: !0,
    closeMenuOnSelect: !1,
    defaultValue: null == e ? void 0 : e.products,
    options: o,
    onChange: v,
    isDisabled: d,
    onSearch: h
  }))));
};

const I8 = (0, g.memo)(T8);

function F8() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return N8(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (N8(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, N8(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, N8(d, "constructor", u), N8(u, "constructor", c), c.displayName = "GeneratorFunction", N8(u, a, "GeneratorFunction"), N8(d), N8(d, a, "Generator"), N8(d, r, function () {
    return this;
  }), N8(d, "toString", function () {
    return "[object Generator]";
  }), (F8 = function () {
    return {
      w: o,
      m
    };
  })();
}

function N8(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  N8 = function (e, t, n, r) {
    function o(t, n) {
      N8(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, N8(e, t, n, r);
}

function D8(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function W8(e, t) {
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
      if ("string" == typeof e) return z8(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z8(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function z8(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
