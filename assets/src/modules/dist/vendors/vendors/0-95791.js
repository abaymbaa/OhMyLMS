// Reconstructed Webpack factory 95791; arguments retain original semantics.
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
    createContext: () => h,
    createContextScope: () => _
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)))(n(41594)),
    f = n(74848);
  function h(e, t) {
    const n = p.createContext(t),
      r = e => {
        const {
            children: t,
            ...r
          } = e,
          a = p.useMemo(() => r, Object.values(r));
        return (0, f.jsx)(n.Provider, {
          value: a,
          children: t
        });
      };
    return r.displayName = e + "Provider", [r, function (r) {
      const a = p.useContext(n);
      if (a) return a;
      if (void 0 !== t) return t;
      throw new Error(`\`${r}\` must be used within \`${e}\``);
    }];
  }
  function _(e, t = []) {
    let n = [];
    const r = () => {
      const t = n.map(e => p.createContext(e));
      return function (n) {
        const r = n?.[e] || t;
        return p.useMemo(() => ({
          [`__scope${e}`]: {
            ...n,
            [e]: r
          }
        }), [n, r]);
      };
    };
    return r.scopeName = e, [function (t, r) {
      const a = p.createContext(r),
        i = n.length;
      n = [...n, r];
      const o = t => {
        const {
            scope: n,
            children: r,
            ...o
          } = t,
          s = n?.[e]?.[i] || a,
          l = p.useMemo(() => o, Object.values(o));
        return (0, f.jsx)(s.Provider, {
          value: l,
          children: r
        });
      };
      return o.displayName = t + "Provider", [o, function (n, o) {
        const s = o?.[e]?.[i] || a,
          l = p.useContext(s);
        if (l) return l;
        if (void 0 !== r) return r;
        throw new Error(`\`${n}\` must be used within \`${t}\``);
      }];
    }, m(r, ...t)];
  }
  function m(...e) {
    const t = e[0];
    if (1 === e.length) return t;
    const n = () => {
      const n = e.map(e => ({
        useScope: e(),
        scopeName: e.scopeName
      }));
      return function (e) {
        const r = n.reduce((t, {
          useScope: n,
          scopeName: r
        }) => ({
          ...t,
          ...n(e)[`__scope${r}`]
        }), {});
        return p.useMemo(() => ({
          [`__scope${t.scopeName}`]: r
        }), [r]);
      };
    };
    return n.scopeName = t.scopeName, n;
  }
});
