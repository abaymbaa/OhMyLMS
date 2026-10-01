// Reconstructed Webpack factory 86306; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    arrow: () => b,
    autoPlacement: () => y,
    autoUpdate: () => r.ll,
    computePosition: () => r.rD,
    detectOverflow: () => r.__,
    flip: () => A,
    getOverflowAncestors: () => a.v9,
    hide: () => v,
    inline: () => E,
    limitShift: () => m,
    offset: () => h,
    platform: () => r.iD,
    shift: () => _,
    size: () => g,
    useFloating: () => p
  });
  var r = n(7315),
    a = n(86635),
    i = n(41594),
    o = n(75206),
    s = "undefined" != typeof document ? i.useLayoutEffect : function () {};
  function l(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    let n, r, a;
    if (e && t && "object" == typeof e) {
      if (Array.isArray(e)) {
        if (n = e.length, n !== t.length) return !1;
        for (r = n; 0 !== r--;) if (!l(e[r], t[r])) return !1;
        return !0;
      }
      if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length) return !1;
      for (r = n; 0 !== r--;) if (!{}.hasOwnProperty.call(t, a[r])) return !1;
      for (r = n; 0 !== r--;) {
        const n = a[r];
        if (!("_owner" === n && e.$$typeof || l(e[n], t[n]))) return !1;
      }
      return !0;
    }
    return e != e && t != t;
  }
  function c(e) {
    return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function u(e, t) {
    const n = c(e);
    return Math.round(t * n) / n;
  }
  function d(e) {
    const t = i.useRef(e);
    return s(() => {
      t.current = e;
    }), t;
  }
  function p(e) {
    void 0 === e && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: a = [],
        platform: p,
        elements: {
          reference: f,
          floating: h
        } = {},
        transform: _ = !0,
        whileElementsMounted: m,
        open: A
      } = e,
      [g, y] = i.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
      }),
      [v, E] = i.useState(a);
    l(v, a) || E(a);
    const [b, w] = i.useState(null),
      [C, O] = i.useState(null),
      M = i.useCallback(e => {
        e !== x.current && (x.current = e, w(e));
      }, []),
      S = i.useCallback(e => {
        e !== D.current && (D.current = e, O(e));
      }, []),
      T = f || b,
      k = h || C,
      x = i.useRef(null),
      D = i.useRef(null),
      I = i.useRef(g),
      P = null != m,
      L = d(m),
      R = d(p),
      B = d(A),
      N = i.useCallback(() => {
        if (!x.current || !D.current) return;
        const e = {
          placement: t,
          strategy: n,
          middleware: v
        };
        R.current && (e.platform = R.current), (0, r.rD)(x.current, D.current, e).then(e => {
          const t = {
            ...e,
            isPositioned: !1 !== B.current
          };
          U.current && !l(I.current, t) && (I.current = t, o.flushSync(() => {
            y(t);
          }));
        });
      }, [v, t, n, R, B]);
    s(() => {
      !1 === A && I.current.isPositioned && (I.current.isPositioned = !1, y(e => ({
        ...e,
        isPositioned: !1
      })));
    }, [A]);
    const U = i.useRef(!1);
    s(() => (U.current = !0, () => {
      U.current = !1;
    }), []), s(() => {
      if (T && (x.current = T), k && (D.current = k), T && k) {
        if (L.current) return L.current(T, k, N);
        N();
      }
    }, [T, k, N, L, P]);
    const F = i.useMemo(() => ({
        reference: x,
        floating: D,
        setReference: M,
        setFloating: S
      }), [M, S]),
      j = i.useMemo(() => ({
        reference: T,
        floating: k
      }), [T, k]),
      H = i.useMemo(() => {
        const e = {
          position: n,
          left: 0,
          top: 0
        };
        if (!j.floating) return e;
        const t = u(j.floating, g.x),
          r = u(j.floating, g.y);
        return _ ? {
          ...e,
          transform: "translate(" + t + "px, " + r + "px)",
          ...(c(j.floating) >= 1.5 && {
            willChange: "transform"
          })
        } : {
          position: n,
          left: t,
          top: r
        };
      }, [n, _, j.floating, g.x, g.y]);
    return i.useMemo(() => ({
      ...g,
      update: N,
      refs: F,
      elements: j,
      floatingStyles: H
    }), [g, N, F, j, H]);
  }
  const f = e => ({
      name: "arrow",
      options: e,
      fn(t) {
        const {
          element: n,
          padding: a
        } = "function" == typeof e ? e(t) : e;
        return n && (i = n, {}.hasOwnProperty.call(i, "current")) ? null != n.current ? (0, r.UE)({
          element: n.current,
          padding: a
        }).fn(t) : {} : n ? (0, r.UE)({
          element: n,
          padding: a
        }).fn(t) : {};
        var i;
      }
    }),
    h = (e, t) => ({
      ...(0, r.cY)(e),
      options: [e, t]
    }),
    _ = (e, t) => ({
      ...(0, r.BN)(e),
      options: [e, t]
    }),
    m = (e, t) => ({
      ...(0, r.ER)(e),
      options: [e, t]
    }),
    A = (e, t) => ({
      ...(0, r.UU)(e),
      options: [e, t]
    }),
    g = (e, t) => ({
      ...(0, r.Ej)(e),
      options: [e, t]
    }),
    y = (e, t) => ({
      ...(0, r.RK)(e),
      options: [e, t]
    }),
    v = (e, t) => ({
      ...(0, r.jD)(e),
      options: [e, t]
    }),
    E = (e, t) => ({
      ...(0, r.mG)(e),
      options: [e, t]
    }),
    b = (e, t) => ({
      ...f(e),
      options: [e, t]
    });
});
