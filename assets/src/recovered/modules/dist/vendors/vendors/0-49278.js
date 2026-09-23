// Reconstructed Webpack factory 49278; arguments retain original semantics.
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
    useEffectEvent: () => m
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p = n(95696),
    f = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)))(n(41594)),
    h = f[" useEffectEvent ".trim().toString()],
    _ = f[" useInsertionEffect ".trim().toString()];
  function m(e) {
    if ("function" == typeof h) return h(e);
    const t = f.useRef(() => {
      throw new Error("Cannot call an event handler while rendering.");
    });
    return "function" == typeof _ ? _(() => {
      t.current = e;
    }) : (0, p.useLayoutEffect)(() => {
      t.current = e;
    }), f.useMemo(() => (...e) => t.current?.(...e), []);
  }
});
