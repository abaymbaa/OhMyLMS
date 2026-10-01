// Reconstructed Webpack factory 55745; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r,
    a = Object.create,
    i = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.getPrototypeOf,
    c = Object.prototype.hasOwnProperty,
    u = (e, t, n, r) => {
      if (t && "object" == typeof t || "function" == typeof t) for (let a of s(t)) c.call(e, a) || a === n || i(e, a, {
        get: () => t[a],
        enumerable: !(r = o(t, a)) || r.enumerable
      });
      return e;
    },
    d = {};
  ((e, t) => {
    for (var n in t) i(e, n, {
      get: t[n],
      enumerable: !0
    });
  })(d, {
    useSize: () => h
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)))(n(41594)),
    f = n(95696);
  function h(e) {
    const [t, n] = p.useState(void 0);
    return (0, f.useLayoutEffect)(() => {
      if (e) {
        n({
          width: e.offsetWidth,
          height: e.offsetHeight
        });
        const t = new ResizeObserver(t => {
          if (!Array.isArray(t)) return;
          if (!t.length) return;
          const r = t[0];
          let a, i;
          if ("borderBoxSize" in r) {
            const e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            a = t.inlineSize, i = t.blockSize;
          } else a = e.offsetWidth, i = e.offsetHeight;
          n({
            width: a,
            height: i
          });
        });
        return t.observe(e, {
          box: "border-box"
        }), () => t.unobserve(e);
      }
      n(void 0);
    }, [e]), t;
  }
});
