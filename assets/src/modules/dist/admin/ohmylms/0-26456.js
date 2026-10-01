// Reconstructed Webpack factory 26456; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    migrateSingleCourse: () => F,
    setAccountPrivacySettings: () => R,
    setAdvancedSettings: () => C,
    setCurrencySettings: () => E,
    setDesignSettings: () => _,
    setGeneralSettings: () => b,
    setLoadingSetting: () => P,
    setMigratedCourse: () => T,
    setMigrationCourses: () => k,
    setMigrationModalOpen: () => A,
    setMigrationStatus: () => M,
    setMigrationTool: () => I,
    setMigrationToolCourses: () => O,
    setPaymentSettings: () => w,
    setPermalinkSettings: () => x,
    setTaxSettings: () => S,
    updateAccountPrivacySettings: () => g,
    updateAdvancedSettings: () => y,
    updateCurrencySettings: () => f,
    updateDesignSettings: () => m,
    updateGeneralSettings: () => d,
    updateMigrationCourses: () => j,
    updatePaymentSettings: () => p,
    updatePermalinkSettings: () => h,
    updateTaxSettings: () => v
  });
  var r = n(12842),
    a = n.n(r),
    o = n(45050);
  function i(e) {
    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, i(e);
  }
  function l() {
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      r = n.iterator || "@@iterator",
      a = n.toStringTag || "@@toStringTag";
    function o(n, r, a, o) {
      var l = r && r.prototype instanceof u ? r : u,
        s = Object.create(l.prototype);
      return c(s, "_invoke", function (n, r, a) {
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
      }(n, a, o), !0), s;
    }
    var i = {};
    function u() {}
    function s() {}
    function d() {}
    t = Object.getPrototypeOf;
    var m = [][r] ? t(t([][r]())) : (c(t = {}, r, function () {
        return this;
      }), t),
      p = d.prototype = u.prototype = Object.create(m);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, c(e, a, "GeneratorFunction")), e.prototype = Object.create(p), e;
    }
    return s.prototype = d, c(p, "constructor", d), c(d, "constructor", s), s.displayName = "GeneratorFunction", c(d, a, "GeneratorFunction"), c(p), c(p, a, "Generator"), c(p, r, function () {
      return this;
    }), c(p, "toString", function () {
      return "[object Generator]";
    }), (l = function () {
      return {
        w: o,
        m: f
      };
    })();
  }
  function c(e, t, n, r) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    c = function (e, t, n, r) {
      function o(t, n) {
        c(e, t, function (e) {
          return this._invoke(t, n, e);
        });
      }
      t ? a ? a(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, c(e, t, n, r);
  }
  function u(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != i(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != i(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == i(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  function s(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        c = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(c) : Promise.resolve(c).then(r, a);
  }
  var d = function (e) {
      return {
        type: o.x8,
        payload: e
      };
    },
    m = function (e) {
      return {
        type: o.FM,
        payload: e
      };
    },
    p = function (e) {
      return {
        type: o.LI,
        payload: e
      };
    },
    f = function (e) {
      return {
        type: o.Gr,
        payload: e
      };
    },
    v = function (e) {
      return {
        type: o.Eg,
        payload: e
      };
    },
    g = function (e) {
      return {
        type: o.t2,
        payload: e
      };
    },
    h = function (e) {
      return {
        type: o.uJ,
        payload: e
      };
    },
    y = function (e) {
      return {
        type: o.RI,
        payload: e
      };
    },
    b = function (e) {
      var t = e.reduce(function (e, t) {
        return e[t.id] = t, e;
      }, {});
      return {
        type: o.At,
        payload: t
      };
    },
    _ = function (e) {
      var t = e.reduce(function (e, t) {
        return e[t.id] = t, e;
      }, {});
      return {
        type: o.Kl,
        payload: t
      };
    },
    w = function (e) {
      var t = e.reduce(function (e, t) {
        return e[t.id] = t, e;
      }, {});
      return {
        type: o.GP,
        payload: t
      };
    },
    E = function (e) {
      var t = e.reduce(function (e, t) {
        return e[t.id] = t, e;
      }, {});
      return {
        type: o.zb,
        payload: t
      };
    },
    S = function (e) {
      var t = e.reduce(function (e, t) {
        return e[t.id] = t, e;
      }, {});
      return {
        type: o.r6,
        payload: t
      };
    },
    R = function (e) {
      var t = e.reduce(function (e, t) {
        return e[t.id] = t, e;
      }, {});
      return {
        type: o.Ix,
        payload: t
      };
    },
    x = function (e) {
      var t = e.reduce(function (e, t) {
        return e[t.id] = t, e;
      }, {});
      return {
        type: o.Zb,
        payload: t
      };
    },
    C = function (e) {
      var t = e.reduce(function (e, t) {
        return e[t.id] = t, e;
      }, {});
      return {
        type: o.U6,
        payload: t
      };
    },
    P = function (e) {
      return {
        type: o.rC,
        payload: e
      };
    },
    O = function (e) {
      return {
        type: o._x,
        payload: e
      };
    },
    k = function (e) {
      return {
        type: o.jF,
        payload: e
      };
    },
    j = function (e) {
      return {
        type: o.iz,
        payload: e
      };
    },
    A = function (e) {
      return {
        type: o.$9,
        payload: e
      };
    },
    M = function (e) {
      return {
        type: o.f8,
        payload: e
      };
    },
    T = function (e) {
      return {
        type: o.lQ,
        payload: e
      };
    },
    I = function (e) {
      return {
        type: o.ZZ,
        payload: e
      };
    },
    F = function (e, t) {
      return function () {
        var n,
          r = (n = l().m(function n(r) {
            var o, i, c, s;
            return l().w(function (n) {
              for (;;) switch (n.p = n.n) {
                case 0:
                  return o = r.dispatch, n.p = 1, i = u({}, e, {
                    course_id: t
                  }), n.n = 2, a()({
                    path: "/ohmylms/v1/migrations/".concat(e),
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(i)
                  });
                case 2:
                  return "success" === (null == (c = n.v) ? void 0 : c.status) && o(T(t)), n.a(2, t);
                case 3:
                  n.p = 3, s = n.v, console.error(s);
                case 4:
                  return n.a(2);
              }
            }, n, null, [[1, 3]]);
          }), function () {
            var e = this,
              t = arguments;
            return new Promise(function (r, a) {
              var o = n.apply(e, t);
              function i(e) {
                s(o, r, a, i, l, "next", e);
              }
              function l(e) {
                s(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function (e) {
          return r.apply(this, arguments);
        };
      }();
    };
});
