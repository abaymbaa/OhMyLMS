// Reconstructed Webpack factory 93086; arguments retain original semantics.
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
    d = (e, t, n) => (n = null != e ? a(l(e)) : {}, u(!t && e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)),
    p = {};
  ((e, t) => {
    for (var n in t) i(e, n, {
      get: t[n],
      enumerable: !0
    });
  })(p, {
    Portal: () => g,
    Root: () => y
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = d(n(75206)),
    _ = n(62053),
    m = n(95696),
    A = n(74848),
    g = f.forwardRef((e, t) => {
      const {
          container: n,
          ...r
        } = e,
        [a, i] = f.useState(!1);
      (0, m.useLayoutEffect)(() => i(!0), []);
      const o = n || a && globalThis?.document?.body;
      return o ? h.default.createPortal((0, A.jsx)(_.Primitive.div, {
        ...r,
        ref: t
      }), o) : null;
    });
  g.displayName = "Portal";
  var y = g;
});
