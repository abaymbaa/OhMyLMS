// Reconstructed Webpack factory 74205; arguments retain original semantics.
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
    Arrow: () => _,
    Root: () => m
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)))(n(41594)),
    f = n(62053),
    h = n(74848),
    _ = p.forwardRef((e, t) => {
      const {
        children: n,
        width: r = 10,
        height: a = 5,
        ...i
      } = e;
      return (0, h.jsx)(f.Primitive.svg, {
        ...i,
        ref: t,
        width: r,
        height: a,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : (0, h.jsx)("polygon", {
          points: "0,0 30,0 15,10"
        })
      });
    });
  _.displayName = "Arrow";
  var m = _;
});
