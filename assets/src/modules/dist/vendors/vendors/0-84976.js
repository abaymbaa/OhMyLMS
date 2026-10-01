// Reconstructed Webpack factory 84976; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    AbortedDeferredError: () => o.tH,
    Await: () => i.jD,
    BrowserRouter: () => P,
    Form: () => j,
    HashRouter: () => L,
    Link: () => U,
    MemoryRouter: () => i.fS,
    NavLink: () => F,
    Navigate: () => i.C5,
    NavigationType: () => o.rc,
    Outlet: () => i.sv,
    Route: () => i.qh,
    Router: () => i.Ix,
    RouterProvider: () => x,
    Routes: () => i.BV,
    ScrollRestoration: () => H,
    UNSAFE_DataRouterContext: () => i.sp,
    UNSAFE_DataRouterStateContext: () => i.Rq,
    UNSAFE_ErrorResponseImpl: () => o.VV,
    UNSAFE_FetchersContext: () => C,
    UNSAFE_LocationContext: () => i.yN,
    UNSAFE_NavigationContext: () => i.jb,
    UNSAFE_RouteContext: () => i.UX,
    UNSAFE_ViewTransitionContext: () => w,
    UNSAFE_useRouteId: () => i.$3,
    UNSAFE_useScrollRestoration: () => ne,
    createBrowserRouter: () => y,
    createHashRouter: () => v,
    createMemoryRouter: () => i.bg,
    createPath: () => o.AO,
    createRoutesFromChildren: () => i.AV,
    createRoutesFromElements: () => i.Eu,
    createSearchParams: () => p,
    defer: () => o.v6,
    generatePath: () => o.tW,
    isRouteErrorResponse: () => o.pX,
    json: () => o.Pq,
    matchPath: () => o.B6,
    matchRoutes: () => o.ue,
    parsePath: () => o.Rr,
    redirect: () => o.V2,
    redirectDocument: () => o.Sk,
    renderMatches: () => i.KT,
    replace: () => o.HC,
    resolvePath: () => o.o1,
    unstable_HistoryRouter: () => R,
    unstable_usePrompt: () => ae,
    useActionData: () => i.mP,
    useAsyncError: () => i.oI,
    useAsyncValue: () => i.J8,
    useBeforeUnload: () => re,
    useBlocker: () => i.KP,
    useFetcher: () => X,
    useFetchers: () => J,
    useFormAction: () => Z,
    useHref: () => i.$P,
    useInRouterContext: () => i.Ri,
    useLinkClickHandler: () => Y,
    useLoaderData: () => i.LG,
    useLocation: () => i.zy,
    useMatch: () => i.RQ,
    useMatches: () => i.FE,
    useNavigate: () => i.Zp,
    useNavigation: () => i.cq,
    useNavigationType: () => i.wQ,
    useOutlet: () => i.P1,
    useOutletContext: () => i.KC,
    useParams: () => i.g,
    useResolvedPath: () => i.x$,
    useRevalidator: () => i.vL,
    useRouteError: () => i.r5,
    useRouteLoaderData: () => i.Ew,
    useRoutes: () => i.Ye,
    useSearchParams: () => Q,
    useSubmit: () => q,
    useViewTransitionState: () => ie
  });
  var r = n(41594),
    a = n(75206),
    i = n(47767),
    o = n(45588);
  function s() {
    return s = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, s.apply(this, arguments);
  }
  function l(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a;
  }
  const c = "get",
    u = "application/x-www-form-urlencoded";
  function d(e) {
    return null != e && "string" == typeof e.tagName;
  }
  function p(e) {
    return void 0 === e && (e = ""), new URLSearchParams("string" == typeof e || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
      let r = e[n];
      return t.concat(Array.isArray(r) ? r.map(e => [n, e]) : [[n, r]]);
    }, []));
  }
  let f = null;
  const h = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
  function _(e) {
    return null == e || h.has(e) ? e : null;
  }
  const m = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    A = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
    g = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
  try {
    window.__reactRouterVersion = "6";
  } catch (e) {}
  function y(e, t) {
    return (0, o.aE)({
      basename: null == t ? void 0 : t.basename,
      future: s({}, null == t ? void 0 : t.future, {
        v7_prependBasename: !0
      }),
      history: (0, o.zR)({
        window: null == t ? void 0 : t.window
      }),
      hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
      routes: e,
      mapRouteProperties: i.wE,
      dataStrategy: null == t ? void 0 : t.dataStrategy,
      patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
      window: null == t ? void 0 : t.window
    }).initialize();
  }
  function v(e, t) {
    return (0, o.aE)({
      basename: null == t ? void 0 : t.basename,
      future: s({}, null == t ? void 0 : t.future, {
        v7_prependBasename: !0
      }),
      history: (0, o.TM)({
        window: null == t ? void 0 : t.window
      }),
      hydrationData: (null == t ? void 0 : t.hydrationData) || E(),
      routes: e,
      mapRouteProperties: i.wE,
      dataStrategy: null == t ? void 0 : t.dataStrategy,
      patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation,
      window: null == t ? void 0 : t.window
    }).initialize();
  }
  function E() {
    var e;
    let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = s({}, t, {
      errors: b(t.errors)
    })), t;
  }
  function b(e) {
    if (!e) return null;
    let t = Object.entries(e),
      n = {};
    for (let [e, r] of t) if (r && "RouteErrorResponse" === r.__type) n[e] = new o.VV(r.status, r.statusText, r.data, !0 === r.internal);else if (r && "Error" === r.__type) {
      if (r.__subType) {
        let t = window[r.__subType];
        if ("function" == typeof t) try {
          let a = new t(r.message);
          a.stack = "", n[e] = a;
        } catch (e) {}
      }
      if (null == n[e]) {
        let t = new Error(r.message);
        t.stack = "", n[e] = t;
      }
    } else n[e] = r;
    return n;
  }
  const w = r.createContext({
      isTransitioning: !1
    }),
    C = r.createContext(new Map()),
    O = r.startTransition,
    M = a.flushSync,
    S = r.useId;
  function T(e) {
    M ? M(e) : e();
  }
  class k {
    constructor() {
      this.status = "pending", this.promise = new Promise((e, t) => {
        this.resolve = t => {
          "pending" === this.status && (this.status = "resolved", e(t));
        }, this.reject = e => {
          "pending" === this.status && (this.status = "rejected", t(e));
        };
      });
    }
  }
  function x(e) {
    let {
        fallbackElement: t,
        router: n,
        future: a
      } = e,
      [o, s] = r.useState(n.state),
      [l, c] = r.useState(),
      [u, d] = r.useState({
        isTransitioning: !1
      }),
      [p, f] = r.useState(),
      [h, _] = r.useState(),
      [m, A] = r.useState(),
      g = r.useRef(new Map()),
      {
        v7_startTransition: y
      } = a || {},
      v = r.useCallback(e => {
        y ? function (e) {
          O ? O(e) : e();
        }(e) : e();
      }, [y]),
      E = r.useCallback((e, t) => {
        let {
          deletedFetchers: r,
          flushSync: a,
          viewTransitionOpts: i
        } = t;
        e.fetchers.forEach((e, t) => {
          void 0 !== e.data && g.current.set(t, e.data);
        }), r.forEach(e => g.current.delete(e));
        let o = null == n.window || null == n.window.document || "function" != typeof n.window.document.startViewTransition;
        if (i && !o) {
          if (a) {
            T(() => {
              h && (p && p.resolve(), h.skipTransition()), d({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: i.currentLocation,
                nextLocation: i.nextLocation
              });
            });
            let t = n.window.document.startViewTransition(() => {
              T(() => s(e));
            });
            return t.finished.finally(() => {
              T(() => {
                f(void 0), _(void 0), c(void 0), d({
                  isTransitioning: !1
                });
              });
            }), void T(() => _(t));
          }
          h ? (p && p.resolve(), h.skipTransition(), A({
            state: e,
            currentLocation: i.currentLocation,
            nextLocation: i.nextLocation
          })) : (c(e), d({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: i.currentLocation,
            nextLocation: i.nextLocation
          }));
        } else a ? T(() => s(e)) : v(() => s(e));
      }, [n.window, h, p, g, v]);
    r.useLayoutEffect(() => n.subscribe(E), [n, E]), r.useEffect(() => {
      u.isTransitioning && !u.flushSync && f(new k());
    }, [u]), r.useEffect(() => {
      if (p && l && n.window) {
        let e = l,
          t = p.promise,
          r = n.window.document.startViewTransition(async () => {
            v(() => s(e)), await t;
          });
        r.finished.finally(() => {
          f(void 0), _(void 0), c(void 0), d({
            isTransitioning: !1
          });
        }), _(r);
      }
    }, [v, l, p, n.window]), r.useEffect(() => {
      p && l && o.location.key === l.location.key && p.resolve();
    }, [p, h, o.location, l]), r.useEffect(() => {
      !u.isTransitioning && m && (c(m.state), d({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: m.currentLocation,
        nextLocation: m.nextLocation
      }), A(void 0));
    }, [u.isTransitioning, m]), r.useEffect(() => {}, []);
    let b = r.useMemo(() => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: e => n.navigate(e),
        push: (e, t, r) => n.navigate(e, {
          state: t,
          preventScrollReset: null == r ? void 0 : r.preventScrollReset
        }),
        replace: (e, t, r) => n.navigate(e, {
          replace: !0,
          state: t,
          preventScrollReset: null == r ? void 0 : r.preventScrollReset
        })
      }), [n]),
      M = n.basename || "/",
      S = r.useMemo(() => ({
        router: n,
        navigator: b,
        static: !1,
        basename: M
      }), [n, b, M]),
      x = r.useMemo(() => ({
        v7_relativeSplatPath: n.future.v7_relativeSplatPath
      }), [n.future.v7_relativeSplatPath]);
    return r.useEffect(() => (0, i.V8)(a, n.future), [a, n.future]), r.createElement(r.Fragment, null, r.createElement(i.sp.Provider, {
      value: S
    }, r.createElement(i.Rq.Provider, {
      value: o
    }, r.createElement(C.Provider, {
      value: g.current
    }, r.createElement(w.Provider, {
      value: u
    }, r.createElement(i.Ix, {
      basename: M,
      location: o.location,
      navigationType: o.historyAction,
      navigator: b,
      future: x
    }, o.initialized || n.future.v7_partialHydration ? r.createElement(D, {
      routes: n.routes,
      future: n.future,
      state: o
    }) : t))))), null);
  }
  const D = r.memo(I);
  function I(e) {
    let {
      routes: t,
      future: n,
      state: r
    } = e;
    return (0, i.ph)(t, void 0, r, n);
  }
  function P(e) {
    let {
        basename: t,
        children: n,
        future: a,
        window: s
      } = e,
      l = r.useRef();
    null == l.current && (l.current = (0, o.zR)({
      window: s,
      v5Compat: !0
    }));
    let c = l.current,
      [u, d] = r.useState({
        action: c.action,
        location: c.location
      }),
      {
        v7_startTransition: p
      } = a || {},
      f = r.useCallback(e => {
        p && O ? O(() => d(e)) : d(e);
      }, [d, p]);
    return r.useLayoutEffect(() => c.listen(f), [c, f]), r.useEffect(() => (0, i.V8)(a), [a]), r.createElement(i.Ix, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: c,
      future: a
    });
  }
  function L(e) {
    let {
        basename: t,
        children: n,
        future: a,
        window: s
      } = e,
      l = r.useRef();
    null == l.current && (l.current = (0, o.TM)({
      window: s,
      v5Compat: !0
    }));
    let c = l.current,
      [u, d] = r.useState({
        action: c.action,
        location: c.location
      }),
      {
        v7_startTransition: p
      } = a || {},
      f = r.useCallback(e => {
        p && O ? O(() => d(e)) : d(e);
      }, [d, p]);
    return r.useLayoutEffect(() => c.listen(f), [c, f]), r.useEffect(() => (0, i.V8)(a), [a]), r.createElement(i.Ix, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: c,
      future: a
    });
  }
  function R(e) {
    let {
        basename: t,
        children: n,
        future: a,
        history: o
      } = e,
      [s, l] = r.useState({
        action: o.action,
        location: o.location
      }),
      {
        v7_startTransition: c
      } = a || {},
      u = r.useCallback(e => {
        c && O ? O(() => l(e)) : l(e);
      }, [l, c]);
    return r.useLayoutEffect(() => o.listen(u), [o, u]), r.useEffect(() => (0, i.V8)(a), [a]), r.createElement(i.Ix, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: a
    });
  }
  const B = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    N = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    U = r.forwardRef(function (e, t) {
      let n,
        {
          onClick: a,
          relative: c,
          reloadDocument: u,
          replace: d,
          state: p,
          target: f,
          to: h,
          preventScrollReset: _,
          viewTransition: A
        } = e,
        g = l(e, m),
        {
          basename: y
        } = r.useContext(i.jb),
        v = !1;
      if ("string" == typeof h && N.test(h) && (n = h, B)) try {
        let e = new URL(window.location.href),
          t = h.startsWith("//") ? new URL(e.protocol + h) : new URL(h),
          n = (0, o.pb)(t.pathname, y);
        t.origin === e.origin && null != n ? h = n + t.search + t.hash : v = !0;
      } catch (e) {}
      let E = (0, i.$P)(h, {
          relative: c
        }),
        b = Y(h, {
          replace: d,
          state: p,
          target: f,
          preventScrollReset: _,
          relative: c,
          viewTransition: A
        });
      return r.createElement("a", s({}, g, {
        href: n || E,
        onClick: v || u ? a : function (e) {
          a && a(e), e.defaultPrevented || b(e);
        },
        ref: t,
        target: f
      }));
    }),
    F = r.forwardRef(function (e, t) {
      let {
          "aria-current": n = "page",
          caseSensitive: a = !1,
          className: c = "",
          end: u = !1,
          style: d,
          to: p,
          viewTransition: f,
          children: h
        } = e,
        _ = l(e, A),
        m = (0, i.x$)(p, {
          relative: _.relative
        }),
        g = (0, i.zy)(),
        y = r.useContext(i.Rq),
        {
          navigator: v,
          basename: E
        } = r.useContext(i.jb),
        b = null != y && ie(m) && !0 === f,
        w = v.encodeLocation ? v.encodeLocation(m).pathname : m.pathname,
        C = g.pathname,
        O = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
      a || (C = C.toLowerCase(), O = O ? O.toLowerCase() : null, w = w.toLowerCase()), O && E && (O = (0, o.pb)(O, E) || O);
      const M = "/" !== w && w.endsWith("/") ? w.length - 1 : w.length;
      let S,
        T = C === w || !u && C.startsWith(w) && "/" === C.charAt(M),
        k = null != O && (O === w || !u && O.startsWith(w) && "/" === O.charAt(w.length)),
        x = {
          isActive: T,
          isPending: k,
          isTransitioning: b
        },
        D = T ? n : void 0;
      S = "function" == typeof c ? c(x) : [c, T ? "active" : null, k ? "pending" : null, b ? "transitioning" : null].filter(Boolean).join(" ");
      let I = "function" == typeof d ? d(x) : d;
      return r.createElement(U, s({}, _, {
        "aria-current": D,
        className: S,
        ref: t,
        style: I,
        to: p,
        viewTransition: f
      }), "function" == typeof h ? h(x) : h);
    }),
    j = r.forwardRef((e, t) => {
      let {
          fetcherKey: n,
          navigate: a,
          reloadDocument: i,
          replace: o,
          state: u,
          method: d = c,
          action: p,
          onSubmit: f,
          relative: h,
          preventScrollReset: _,
          viewTransition: m
        } = e,
        A = l(e, g),
        y = q(),
        v = Z(p, {
          relative: h
        }),
        E = "get" === d.toLowerCase() ? "get" : "post";
      return r.createElement("form", s({
        ref: t,
        method: E,
        action: v,
        onSubmit: i ? f : e => {
          if (f && f(e), e.defaultPrevented) return;
          e.preventDefault();
          let t = e.nativeEvent.submitter,
            r = (null == t ? void 0 : t.getAttribute("formmethod")) || d;
          y(t || e.currentTarget, {
            fetcherKey: n,
            method: r,
            navigate: a,
            replace: o,
            state: u,
            relative: h,
            preventScrollReset: _,
            viewTransition: m
          });
        }
      }, A));
    });
  function H(e) {
    let {
      getKey: t,
      storageKey: n
    } = e;
    return ne({
      getKey: t,
      storageKey: n
    }), null;
  }
  var W, K;
  function V(e) {
    let t = r.useContext(i.sp);
    return t || (0, o.Oi)(!1), t;
  }
  function z(e) {
    let t = r.useContext(i.Rq);
    return t || (0, o.Oi)(!1), t;
  }
  function Y(e, t) {
    let {
        target: n,
        replace: a,
        state: s,
        preventScrollReset: l,
        relative: c,
        viewTransition: u
      } = void 0 === t ? {} : t,
      d = (0, i.Zp)(),
      p = (0, i.zy)(),
      f = (0, i.x$)(e, {
        relative: c
      });
    return r.useCallback(t => {
      if (function (e, t) {
        return !(0 !== e.button || t && "_self" !== t || function (e) {
          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
        }(e));
      }(t, n)) {
        t.preventDefault();
        let n = void 0 !== a ? a : (0, o.AO)(p) === (0, o.AO)(f);
        d(e, {
          replace: n,
          state: s,
          preventScrollReset: l,
          relative: c,
          viewTransition: u
        });
      }
    }, [p, d, f, a, s, n, e, l, c, u]);
  }
  function Q(e) {
    let t = r.useRef(p(e)),
      n = r.useRef(!1),
      a = (0, i.zy)(),
      o = r.useMemo(() => function (e, t) {
        let n = p(e);
        return t && t.forEach((e, r) => {
          n.has(r) || t.getAll(r).forEach(e => {
            n.append(r, e);
          });
        }), n;
      }(a.search, n.current ? null : t.current), [a.search]),
      s = (0, i.Zp)(),
      l = r.useCallback((e, t) => {
        const r = p("function" == typeof e ? e(o) : e);
        n.current = !0, s("?" + r, t);
      }, [s, o]);
    return [o, l];
  }
  (function (e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
  })(W || (W = {})), function (e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
  }(K || (K = {}));
  let G = 0,
    $ = () => "__" + String(++G) + "__";
  function q() {
    let {
        router: e
      } = V(W.UseSubmit),
      {
        basename: t
      } = r.useContext(i.jb),
      n = (0, i.$3)();
    return r.useCallback(function (r, a) {
      void 0 === a && (a = {}), function () {
        if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
      }();
      let {
        action: i,
        method: s,
        encType: l,
        formData: p,
        body: h
      } = function (e, t) {
        let n, r, a, i, s;
        if (d(l = e) && "form" === l.tagName.toLowerCase()) {
          let s = e.getAttribute("action");
          r = s ? (0, o.pb)(s, t) : null, n = e.getAttribute("method") || c, a = _(e.getAttribute("enctype")) || u, i = new FormData(e);
        } else if (function (e) {
          return d(e) && "button" === e.tagName.toLowerCase();
        }(e) || function (e) {
          return d(e) && "input" === e.tagName.toLowerCase();
        }(e) && ("submit" === e.type || "image" === e.type)) {
          let s = e.form;
          if (null == s) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let l = e.getAttribute("formaction") || s.getAttribute("action");
          if (r = l ? (0, o.pb)(l, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || c, a = _(e.getAttribute("formenctype")) || _(s.getAttribute("enctype")) || u, i = new FormData(s, e), !function () {
            if (null === f) try {
              new FormData(document.createElement("form"), 0), f = !1;
            } catch (e) {
              f = !0;
            }
            return f;
          }()) {
            let {
              name: t,
              type: n,
              value: r
            } = e;
            if ("image" === n) {
              let e = t ? t + "." : "";
              i.append(e + "x", "0"), i.append(e + "y", "0");
            } else t && i.append(t, r);
          }
        } else {
          if (d(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
          n = c, r = null, a = u, s = e;
        }
        var l;
        return i && "text/plain" === a && (s = i, i = void 0), {
          action: r,
          method: n.toLowerCase(),
          encType: a,
          formData: i,
          body: s
        };
      }(r, t);
      if (!1 === a.navigate) {
        let t = a.fetcherKey || $();
        e.fetch(t, n, a.action || i, {
          preventScrollReset: a.preventScrollReset,
          formData: p,
          body: h,
          formMethod: a.method || s,
          formEncType: a.encType || l,
          flushSync: a.flushSync
        });
      } else e.navigate(a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: p,
        body: h,
        formMethod: a.method || s,
        formEncType: a.encType || l,
        replace: a.replace,
        state: a.state,
        fromRouteId: n,
        flushSync: a.flushSync,
        viewTransition: a.viewTransition
      });
    }, [e, t, n]);
  }
  function Z(e, t) {
    let {
        relative: n
      } = void 0 === t ? {} : t,
      {
        basename: a
      } = r.useContext(i.jb),
      l = r.useContext(i.UX);
    l || (0, o.Oi)(!1);
    let [c] = l.matches.slice(-1),
      u = s({}, (0, i.x$)(e || ".", {
        relative: n
      })),
      d = (0, i.zy)();
    if (null == e) {
      u.search = d.search;
      let e = new URLSearchParams(u.search),
        t = e.getAll("index");
      if (t.some(e => "" === e)) {
        e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
        let n = e.toString();
        u.search = n ? "?" + n : "";
      }
    }
    return e && "." !== e || !c.route.index || (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), "/" !== a && (u.pathname = "/" === u.pathname ? a : (0, o.HS)([a, u.pathname])), (0, o.AO)(u);
  }
  function X(e) {
    var t;
    let {
        key: n
      } = void 0 === e ? {} : e,
      {
        router: a
      } = V(W.UseFetcher),
      l = z(K.UseFetcher),
      c = r.useContext(C),
      u = r.useContext(i.UX),
      d = null == (t = u.matches[u.matches.length - 1]) ? void 0 : t.route.id;
    c || (0, o.Oi)(!1), u || (0, o.Oi)(!1), null == d && (0, o.Oi)(!1);
    let p = S ? S() : "",
      [f, h] = r.useState(n || p);
    n && n !== f ? h(n) : f || h($()), r.useEffect(() => (a.getFetcher(f), () => {
      a.deleteFetcher(f);
    }), [a, f]);
    let _ = r.useCallback((e, t) => {
        d || (0, o.Oi)(!1), a.fetch(f, d, e, t);
      }, [f, d, a]),
      m = q(),
      A = r.useCallback((e, t) => {
        m(e, s({}, t, {
          navigate: !1,
          fetcherKey: f
        }));
      }, [f, m]),
      g = r.useMemo(() => r.forwardRef((e, t) => r.createElement(j, s({}, e, {
        navigate: !1,
        fetcherKey: f,
        ref: t
      }))), [f]),
      y = l.fetchers.get(f) || o.HW,
      v = c.get(f);
    return r.useMemo(() => s({
      Form: g,
      submit: A,
      load: _
    }, y, {
      data: v
    }), [g, A, _, y, v]);
  }
  function J() {
    let e = z(K.UseFetchers);
    return Array.from(e.fetchers.entries()).map(e => {
      let [t, n] = e;
      return s({}, n, {
        key: t
      });
    });
  }
  const ee = "react-router-scroll-positions";
  let te = {};
  function ne(e) {
    let {
        getKey: t,
        storageKey: n
      } = void 0 === e ? {} : e,
      {
        router: a
      } = V(W.UseScrollRestoration),
      {
        restoreScrollPosition: l,
        preventScrollReset: c
      } = z(K.UseScrollRestoration),
      {
        basename: u
      } = r.useContext(i.jb),
      d = (0, i.zy)(),
      p = (0, i.FE)(),
      f = (0, i.cq)();
    r.useEffect(() => (window.history.scrollRestoration = "manual", () => {
      window.history.scrollRestoration = "auto";
    }), []), function (e) {
      let {
        capture: t
      } = {};
      r.useEffect(() => {
        let n = null != t ? {
          capture: t
        } : void 0;
        return window.addEventListener("pagehide", e, n), () => {
          window.removeEventListener("pagehide", e, n);
        };
      }, [e, t]);
    }(r.useCallback(() => {
      if ("idle" === f.state) {
        let e = (t ? t(d, p) : null) || d.key;
        te[e] = window.scrollY;
      }
      try {
        sessionStorage.setItem(n || ee, JSON.stringify(te));
      } catch (e) {}
      window.history.scrollRestoration = "auto";
    }, [n, t, f.state, d, p])), "undefined" != typeof document && (r.useLayoutEffect(() => {
      try {
        let e = sessionStorage.getItem(n || ee);
        e && (te = JSON.parse(e));
      } catch (e) {}
    }, [n]), r.useLayoutEffect(() => {
      let e = t && "/" !== u ? (e, n) => t(s({}, e, {
          pathname: (0, o.pb)(e.pathname, u) || e.pathname
        }), n) : t,
        n = null == a ? void 0 : a.enableScrollRestoration(te, () => window.scrollY, e);
      return () => n && n();
    }, [a, u, t]), r.useLayoutEffect(() => {
      if (!1 !== l) if ("number" != typeof l) {
        if (d.hash) {
          let e = document.getElementById(decodeURIComponent(d.hash.slice(1)));
          if (e) return void e.scrollIntoView();
        }
        !0 !== c && window.scrollTo(0, 0);
      } else window.scrollTo(0, l);
    }, [d, l, c]));
  }
  function re(e, t) {
    let {
      capture: n
    } = t || {};
    r.useEffect(() => {
      let t = null != n ? {
        capture: n
      } : void 0;
      return window.addEventListener("beforeunload", e, t), () => {
        window.removeEventListener("beforeunload", e, t);
      };
    }, [e, n]);
  }
  function ae(e) {
    let {
        when: t,
        message: n
      } = e,
      a = (0, i.KP)(t);
    r.useEffect(() => {
      "blocked" === a.state && (window.confirm(n) ? setTimeout(a.proceed, 0) : a.reset());
    }, [a, n]), r.useEffect(() => {
      "blocked" !== a.state || t || a.reset();
    }, [a, t]);
  }
  function ie(e, t) {
    void 0 === t && (t = {});
    let n = r.useContext(w);
    null == n && (0, o.Oi)(!1);
    let {
        basename: a
      } = V(W.useViewTransitionState),
      s = (0, i.x$)(e, {
        relative: t.relative
      });
    if (!n.isTransitioning) return !1;
    let l = (0, o.pb)(n.currentLocation.pathname, a) || n.currentLocation.pathname,
      c = (0, o.pb)(n.nextLocation.pathname, a) || n.nextLocation.pathname;
    return null != (0, o.B6)(s.pathname, c) || null != (0, o.B6)(s.pathname, l);
  }
});
