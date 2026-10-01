// Reconstructed Webpack factory 21186; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => s
  });
  var r = n(41594),
    a = n(12470);
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
  function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var u = function (e) {
    var t,
      n,
      i = e.textToCopy,
      u = (t = (0, r.useState)(!1), n = 2, function (e) {
        if (Array.isArray(e)) return e;
      }(t) || function (e, t) {
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
      }(t, n) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return c(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
        }
      }(t, n) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()),
      s = u[0],
      d = u[1],
      m = function () {
        var e,
          t = (e = o().m(function e() {
            var t, n;
            return o().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (e.p = 0, !navigator.clipboard || !window.isSecureContext) {
                    e.n = 2;
                    break;
                  }
                  return e.n = 1, navigator.clipboard.writeText(i);
                case 1:
                  e.n = 3;
                  break;
                case 2:
                  (t = document.createElement("textarea")).value = i, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.focus(), t.select(), document.execCommand("copy"), document.body.removeChild(t);
                case 3:
                  d(!0), setTimeout(function () {
                    return d(!1);
                  }, 2e3), e.n = 5;
                  break;
                case 4:
                  e.p = 4, n = e.v, console.error(n);
                case 5:
                  return e.a(2);
              }
            }, e, null, [[0, 4]]);
          }), function () {
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
          });
        return function () {
          return t.apply(this, arguments);
        };
      }();
    return React.createElement(React.Fragment, null, React.createElement("button", {
      onClick: m,
      title: "Copy",
      className: "ohmylms-copy-to-clipboard",
      style: {
        position: "relative",
        background: "none",
        border: "none",
        boxShadow: "none",
        cursor: "pointer",
        gap: "6px",
        padding: 0,
        color: "#6E42D3"
      }
    }, React.createElement("svg", {
      style: {
        display: "block"
      },
      width: "21",
      height: "22",
      fill: "none",
      viewBox: "0 0 21 22",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#7A8B9A",
      stroke: "#fff",
      "stroke-width": ".2",
      d: "M5.25 6.287h.775v1.55H5.25a.974.974 0 00-.975.976v8.75c0 .538.437.974.975.974h7a.974.974 0 00.975-.974v-.776h1.55v.776a2.526 2.526 0 01-2.525 2.525h-7a2.526 2.526 0 01-2.525-2.526v-8.75A2.526 2.526 0 015.25 6.287z"
    }), React.createElement("path", {
      fill: "#7A8B9A",
      stroke: "#fff",
      "stroke-width": ".2",
      d: "M8.75 2.787h5.038l.204.009h.009c.591.051 1.15.308 1.572.731l1.962 1.962c.423.423.68.981.73 1.573l.002.008c.005.068.008.136.008.204v6.788a2.526 2.526 0 01-2.525 2.526h-7a2.526 2.526 0 01-2.525-2.526v-8.75A2.526 2.526 0 018.75 2.788zm5.35 1.599l-.076-.02a.975.975 0 00-.236-.028H8.75a.974.974 0 00-.975.974v8.75c0 .539.437.975.975.975h7a.974.974 0 00.975-.975V7.274c0-.08-.01-.16-.029-.236l-.02-.075h-.926a1.65 1.65 0 01-1.65-1.65v-.927z"
    })), s && React.createElement("div", {
      style: {
        position: "absolute",
        bottom: "calc(100% + 10px)",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        color: "#ffffff",
        fontSize: "12px",
        padding: "4px 12px",
        borderRadius: "50px",
        whiteSpace: "nowrap",
        fontWeight: "400",
        zIndex: 10
      }
    }, (0, a.__)("Copied!", "ohmylms"))));
  };
  const s = (0, r.memo)(u);
});
