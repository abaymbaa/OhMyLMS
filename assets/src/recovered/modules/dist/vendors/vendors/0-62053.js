// Reconstructed Webpack factory 62053; arguments retain original semantics.
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
    Primitive: () => A,
    Root: () => y,
    dispatchDiscreteCustomEvent: () => g
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = d(n(75206)),
    _ = n(56612),
    m = n(74848),
    A = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
      const n = (0, _.createSlot)(`Primitive.${t}`),
        r = f.forwardRef((e, r) => {
          const {
              asChild: a,
              ...i
            } = e,
            o = a ? n : t;
          return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, m.jsx)(o, {
            ...i,
            ref: r
          });
        });
      return r.displayName = `Primitive.${t}`, {
        ...e,
        [t]: r
      };
    }, {});
  function g(e, t) {
    e && h.flushSync(() => e.dispatchEvent(t));
  }
  var y = A;
});
