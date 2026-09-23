// Reconstructed Webpack factory 10207; arguments retain original semantics.
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
    composeRefs: () => h,
    useComposedRefs: () => _
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
    value: e,
    enumerable: !0
  }), e)))(n(41594));
  function f(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
  }
  function h(...e) {
    return t => {
      let n = !1;
      const r = e.map(e => {
        const r = f(e, t);
        return n || "function" != typeof r || (n = !0), r;
      });
      if (n) return () => {
        for (let t = 0; t < r.length; t++) {
          const n = r[t];
          "function" == typeof n ? n() : f(e[t], null);
        }
      };
    };
  }
  function _(...e) {
    return p.useCallback(h(...e), e);
  }
});
