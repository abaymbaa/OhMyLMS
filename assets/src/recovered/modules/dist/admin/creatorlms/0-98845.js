// Reconstructed Webpack factory 98845; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    deleteEmailTemplate: () => b,
    fetchDefaultEmailTemplate: () => x,
    fetchSavedEmailTemplate: () => h,
    getBuilderData: () => S,
    getImageSrc: () => k,
    saveBuilderData: () => w,
    saveEmailTemplate: () => p,
    sendTestEmail: () => P,
    updateEmailTemplate: () => v
  });
  var r = n(12842),
    a = n.n(r);
  function o(e) {
    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, o(e);
  }
  function i() {
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      r = n.iterator || "@@iterator",
      a = n.toStringTag || "@@toStringTag";
    function o(n, r, a, o) {
      var i = r && r.prototype instanceof u ? r : u,
        s = Object.create(i.prototype);
      return l(s, "_invoke", function (n, r, a) {
        var o,
          i,
          l,
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
              return o = t, i = 0, l = e, m.n = n, c;
            }
          };
        function p(n, r) {
          for (i = n, l = r, t = 0; !d && u && !a && t < s.length; t++) {
            var a,
              o = s[t],
              p = m.p,
              f = o[2];
            n > 3 ? (a = f === r) && (l = o[(i = o[4]) ? 5 : (i = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (i = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, i = 0));
          }
          if (a || n > 1) return c;
          throw d = !0, r;
        }
        return function (a, s, f) {
          if (u > 1) throw TypeError("Generator is already running");
          for (d && 1 === s && p(s, f), i = s, l = f; (t = i < 2 ? e : l) || !d;) {
            o || (i ? i < 3 ? (i > 1 && (m.n = -1), p(i, l)) : m.n = l : m.v = l);
            try {
              if (u = 2, o) {
                if (i || (a = "next"), t = o[a]) {
                  if (!(t = t.call(o, l))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  l = t.value, i < 2 && (i = 0);
                } else 1 === i && (t = o.return) && t.call(o), i < 2 && (l = TypeError("The iterator does not provide a '" + a + "' method"), i = 1);
                o = e;
              } else if ((t = (d = m.n < 0) ? l : n.call(r, m)) !== c) break;
            } catch (t) {
              o = e, i = 1, l = t;
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
    var c = {};
    function u() {}
    function s() {}
    function d() {}
    t = Object.getPrototypeOf;
    var m = [][r] ? t(t([][r]())) : (l(t = {}, r, function () {
        return this;
      }), t),
      p = d.prototype = u.prototype = Object.create(m);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, l(e, a, "GeneratorFunction")), e.prototype = Object.create(p), e;
    }
    return s.prototype = d, l(p, "constructor", d), l(d, "constructor", s), s.displayName = "GeneratorFunction", l(d, a, "GeneratorFunction"), l(p), l(p, a, "Generator"), l(p, r, function () {
      return this;
    }), l(p, "toString", function () {
      return "[object Generator]";
    }), (i = function () {
      return {
        w: o,
        m: f
      };
    })();
  }
  function l(e, t, n, r) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    l = function (e, t, n, r) {
      function o(t, n) {
        l(e, t, function (e) {
          return this._invoke(t, n, e);
        });
      }
      t ? a ? a(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, l(e, t, n, r);
  }
  function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(n), !0).forEach(function (t) {
        s(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function s(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != o(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != o(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == o(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  function d(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        c = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(c) : Promise.resolve(c).then(r, a);
  }
  function m(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, a) {
        var o = e.apply(t, n);
        function i(e) {
          d(o, r, a, i, l, "next", e);
        }
        function l(e) {
          d(o, r, a, i, l, "throw", e);
        }
        i(void 0);
      });
    };
  }
  function p(e) {
    return f.apply(this, arguments);
  }
  function f() {
    return (f = m(i().m(function e(t) {
      var n;
      return i().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return n = {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(t)
            }, e.n = 1, a()(u({
              path: "mrm/v1/campaign/email/template"
            }, n));
          case 1:
            return e.a(2, e.v);
        }
      }, e);
    }))).apply(this, arguments);
  }
  function v(e, t) {
    return g.apply(this, arguments);
  }
  function g() {
    return (g = m(i().m(function e(t, n) {
      var r, o;
      return i().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return r = "mrm/v1/email/templates/".concat(n), o = {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(t)
            }, e.n = 1, a()(u({
              path: r
            }, o));
          case 1:
            return e.a(2, e.v);
        }
      }, e);
    }))).apply(this, arguments);
  }
  function h(e, t) {
    return y.apply(this, arguments);
  }
  function y() {
    return (y = m(i().m(function e(t, n) {
      var r, o, l;
      return i().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return o = "mrm/v1/campaign/email/template/".concat(t, "/").concat(n, "/").concat(null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r ? void 0 : r.current_userID), l = {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            }, e.n = 1, a()(u({
              path: o
            }, l));
          case 1:
            return e.a(2, e.v);
        }
      }, e);
    }))).apply(this, arguments);
  }
  function b(e) {
    return _.apply(this, arguments);
  }
  function _() {
    return (_ = m(i().m(function e(t) {
      var n, r, o;
      return i().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return r = "mrm/v1/campaign/email/template/0/0/".concat(null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n ? void 0 : n.current_userID, "/").concat(t, "/delete"), o = {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              }
            }, e.n = 1, a()(u({
              path: r
            }, o));
          case 1:
            return e.a(2, e.v);
        }
      }, e);
    }))).apply(this, arguments);
  }
  function w(e, t, n, r) {
    return E.apply(this, arguments);
  }
  function E() {
    return E = m(i().m(function e(t, n, r, o) {
      var l,
        c,
        s,
        d,
        m = arguments;
      return i().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return l = m.length > 4 && void 0 !== m[4] ? m[4] : "", c = m.length > 5 && void 0 !== m[5] ? m[5] : "advanced-builder", s = "mrm/v1/campaign/".concat(t, "/email/").concat(n, "/").concat(l), d = {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify({
                email_body: o,
                json_data: r,
                status: "published",
                editor_type: c
              })
            }, e.n = 1, a()(u({
              path: s
            }, d));
          case 1:
            return e.a(2, e.v);
        }
      }, e);
    })), E.apply(this, arguments);
  }
  function S(e, t) {
    return R.apply(this, arguments);
  }
  function R() {
    return R = m(i().m(function e(t, n) {
      var r,
        o,
        l,
        c = arguments;
      return i().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return r = c.length > 2 && void 0 !== c[2] ? c[2] : "", o = "mrm/v1/campaign/".concat(t, "/email/").concat(n, "/").concat(r), l = {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            }, e.n = 1, a()(u({
              path: o
            }, l));
          case 1:
            return e.a(2, e.v);
        }
      }, e);
    })), R.apply(this, arguments);
  }
  function x(e, t) {
    return C.apply(this, arguments);
  }
  function C() {
    return (C = m(i().m(function e(t, n) {
      var r, o;
      return i().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return r = "mrm/v1/campaign/email/default-template?limit=".concat(t, "&offset=").concat(n), o = {
              method: "GET",
              headers: {
                "Content-type": "application/json"
              }
            }, e.n = 1, a()(u({
              path: r
            }, o));
          case 1:
            return e.a(2, e.v);
        }
      }, e);
    }))).apply(this, arguments);
  }
  function P(e) {
    return O.apply(this, arguments);
  }
  function O() {
    return (O = m(i().m(function e(t) {
      var n;
      return i().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return n = {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify({
                json_data: t
              })
            }, e.n = 1, a()(u({
              path: "mrm/v1/campaign/sendTest"
            }, n));
          case 1:
            return e.a(2, e.v);
        }
      }, e);
    }))).apply(this, arguments);
  }
  function k() {
    return j.apply(this, arguments);
  }
  function j() {
    return (j = m(i().m(function e() {
      var t, n;
      return i().w(function (e) {
        for (;;) if (0 === e.n) return t = new Promise(function (e) {
          var t = wp.media({
            title: "Insert a media",
            library: {
              type: "image"
            },
            multiple: !1,
            button: {
              text: "Insert"
            }
          });
          t.on("close", function () {
            if (t.state().get("selection").first()) {
              var n = t.state().get("selection").first().toJSON();
              e(n.url);
            } else e("");
          }), t.open();
        }), n = t.then(function (e) {
          return e;
        }), e.a(2, n);
      }, e);
    }))).apply(this, arguments);
  }
});
