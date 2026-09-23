// Reconstructed Webpack factory 63386; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    r: () => s,
    w: () => u
  });
  var r = n(12842),
    a = n.n(r);
  function o() {
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      r = n.iterator || "@@iterator",
      a = n.toStringTag || "@@toStringTag";
    function l(n, r, a, o) {
      var l = r && r.prototype instanceof u ? r : u,
        s = Object.create(l.prototype);
      return i(s, "_invoke", function (n, r, a) {
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
    var m = [][r] ? t(t([][r]())) : (i(t = {}, r, function () {
        return this;
      }), t),
      p = d.prototype = u.prototype = Object.create(m);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, a, "GeneratorFunction")), e.prototype = Object.create(p), e;
    }
    return s.prototype = d, i(p, "constructor", d), i(d, "constructor", s), s.displayName = "GeneratorFunction", i(d, a, "GeneratorFunction"), i(p), i(p, a, "Generator"), i(p, r, function () {
      return this;
    }), i(p, "toString", function () {
      return "[object Generator]";
    }), (o = function () {
      return {
        w: l,
        m: f
      };
    })();
  }
  function i(e, t, n, r) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    i = function (e, t, n, r) {
      function o(t, n) {
        i(e, t, function (e) {
          return this._invoke(t, n, e);
        });
      }
      t ? a ? a(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, i(e, t, n, r);
  }
  function l(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        c = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(c) : Promise.resolve(c).then(r, a);
  }
  function c(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, a) {
        var o = e.apply(t, n);
        function i(e) {
          l(o, r, a, i, c, "next", e);
        }
        function c(e) {
          l(o, r, a, i, c, "throw", e);
        }
        i(void 0);
      });
    };
  }
  var u = function () {
      var e = c(o().m(function e(t) {
        var n,
          r,
          i,
          l,
          c,
          u,
          s,
          d,
          m,
          p,
          f,
          v = arguments;
        return o().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (n = v.length > 1 && void 0 !== v[1] ? v[1] : "ai-image.png", e.p = 1, r = t.match(/^data:(.+);base64,(.+)$/)) {
                e.n = 2;
                break;
              }
              throw new Error("Invalid base64 image format");
            case 2:
              for (i = r[1], l = r[2], c = atob(l), u = [], s = 0; s < c.length; s++) u.push(c.charCodeAt(s));
              return d = new Blob([new Uint8Array(u)], {
                type: i
              }), (m = new FormData()).append("file", d, n), e.n = 3, a()({
                path: "/wp/v2/media",
                method: "POST",
                body: m
              });
            case 3:
              return p = e.v, e.a(2, p);
            case 4:
              throw e.p = 4, f = e.v, console.error("Error uploading image via apiFetch:", f), f;
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 4]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    s = function () {
      var e = c(o().m(function e(t) {
        var n, r, i;
        return o().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, n = {
                url: t
              }, e.n = 1, a()({
                path: "/creatorlms/v1/claude/ai-image-upload",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
              });
            case 1:
              return r = e.v, e.a(2, r);
            case 2:
              e.p = 2, i = e.v, console.error(i);
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
});
