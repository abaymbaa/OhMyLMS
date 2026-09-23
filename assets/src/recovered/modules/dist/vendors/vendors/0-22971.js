// Reconstructed Webpack factory 22971; arguments retain original semantics.
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
    useControllableState: () => m,
    useControllableStateReducer: () => v
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = n(95696),
    _ = f[" useInsertionEffect ".trim().toString()] || h.useLayoutEffect;
  function m({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
  }) {
    const [a, i, o] = function ({
        defaultProp: e,
        onChange: t
      }) {
        const [n, r] = f.useState(e),
          a = f.useRef(n),
          i = f.useRef(t);
        return _(() => {
          i.current = t;
        }, [t]), f.useEffect(() => {
          a.current !== n && (i.current?.(n), a.current = n);
        }, [n, a]), [n, r, i];
      }({
        defaultProp: t,
        onChange: n
      }),
      s = void 0 !== e,
      l = s ? e : a;
    {
      const t = f.useRef(void 0 !== e);
      f.useEffect(() => {
        const e = t.current;
        if (e !== s) {
          const t = e ? "controlled" : "uncontrolled",
            n = s ? "controlled" : "uncontrolled";
          console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
        }
        t.current = s;
      }, [s, r]);
    }
    const c = f.useCallback(t => {
      if (s) {
        const n = function (e) {
          return "function" == typeof e;
        }(t) ? t(e) : t;
        n !== e && o.current?.(n);
      } else i(t);
    }, [s, e, i, o]);
    return [l, c];
  }
  var A = d(n(41594)),
    g = n(49278),
    y = Symbol("RADIX:SYNC_STATE");
  function v(e, t, n, r) {
    const {
        prop: a,
        defaultProp: i,
        onChange: o,
        caller: s
      } = t,
      l = void 0 !== a,
      c = (0, g.useEffectEvent)(o);
    {
      const e = A.useRef(void 0 !== a);
      A.useEffect(() => {
        const t = e.current;
        if (t !== l) {
          const e = t ? "controlled" : "uncontrolled",
            n = l ? "controlled" : "uncontrolled";
          console.warn(`${s} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
        }
        e.current = l;
      }, [l, s]);
    }
    const u = [{
      ...n,
      state: i
    }];
    r && u.push(r);
    const [d, p] = A.useReducer((t, n) => {
        if (n.type === y) return {
          ...t,
          state: n.state
        };
        const r = e(t, n);
        return l && !Object.is(r.state, t.state) && c(r.state), r;
      }, ...u),
      f = d.state,
      h = A.useRef(f);
    A.useEffect(() => {
      h.current !== f && (h.current = f, l || c(f));
    }, [c, f, h, l]);
    const _ = A.useMemo(() => void 0 !== a ? {
      ...d,
      state: a
    } : d, [d, a]);
    return A.useEffect(() => {
      l && !Object.is(a, d.state) && p({
        type: y,
        state: a
      });
    }, [a, d.state, l]), [_, p];
  }
});
