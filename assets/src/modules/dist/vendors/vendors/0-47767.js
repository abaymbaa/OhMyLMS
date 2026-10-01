// Reconstructed Webpack factory 47767; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    $3: () => N,
    $P: () => f,
    AV: () => ue,
    BV: () => ae,
    C5: () => ee,
    Eu: () => ue,
    Ew: () => W,
    FE: () => j,
    Ix: () => re,
    J8: () => z,
    KC: () => E,
    KP: () => G,
    KT: () => de,
    LG: () => H,
    P1: () => b,
    RQ: () => A,
    Ri: () => h,
    Rq: () => s,
    UX: () => d,
    V8: () => Z,
    Ye: () => O,
    Zp: () => y,
    bg: () => fe,
    cq: () => U,
    fS: () => J,
    g: () => w,
    jD: () => ie,
    jb: () => c,
    mP: () => K,
    oI: () => Y,
    ph: () => M,
    qh: () => ne,
    r5: () => V,
    sp: () => o,
    sv: () => te,
    vL: () => F,
    wE: () => pe,
    wQ: () => m,
    x$: () => C,
    yN: () => u,
    zy: () => _
  });
  var r = n(41594),
    a = n(45588);
  function i() {
    return i = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, i.apply(this, arguments);
  }
  const o = r.createContext(null),
    s = r.createContext(null),
    l = r.createContext(null),
    c = r.createContext(null),
    u = r.createContext(null),
    d = r.createContext({
      outlet: null,
      matches: [],
      isDataRoute: !1
    }),
    p = r.createContext(null);
  function f(e, t) {
    let {
      relative: n
    } = void 0 === t ? {} : t;
    h() || (0, a.Oi)(!1);
    let {
        basename: i,
        navigator: o
      } = r.useContext(c),
      {
        hash: s,
        pathname: l,
        search: u
      } = C(e, {
        relative: n
      }),
      d = l;
    return "/" !== i && (d = "/" === l ? i : (0, a.HS)([i, l])), o.createHref({
      pathname: d,
      search: u,
      hash: s
    });
  }
  function h() {
    return null != r.useContext(u);
  }
  function _() {
    return h() || (0, a.Oi)(!1), r.useContext(u).location;
  }
  function m() {
    return r.useContext(u).navigationType;
  }
  function A(e) {
    h() || (0, a.Oi)(!1);
    let {
      pathname: t
    } = _();
    return r.useMemo(() => (0, a.B6)(e, (0, a.RO)(t)), [t, e]);
  }
  function g(e) {
    r.useContext(c).static || r.useLayoutEffect(e);
  }
  function y() {
    let {
      isDataRoute: e
    } = r.useContext(d);
    return e ? function () {
      let {
          router: e
        } = L(I.UseNavigateStable),
        t = B(P.UseNavigateStable),
        n = r.useRef(!1);
      return g(() => {
        n.current = !0;
      }), r.useCallback(function (r, a) {
        void 0 === a && (a = {}), n.current && ("number" == typeof r ? e.navigate(r) : e.navigate(r, i({
          fromRouteId: t
        }, a)));
      }, [e, t]);
    }() : function () {
      h() || (0, a.Oi)(!1);
      let e = r.useContext(o),
        {
          basename: t,
          future: n,
          navigator: i
        } = r.useContext(c),
        {
          matches: s
        } = r.useContext(d),
        {
          pathname: l
        } = _(),
        u = JSON.stringify((0, a.yD)(s, n.v7_relativeSplatPath)),
        p = r.useRef(!1);
      return g(() => {
        p.current = !0;
      }), r.useCallback(function (n, r) {
        if (void 0 === r && (r = {}), !p.current) return;
        if ("number" == typeof n) return void i.go(n);
        let o = (0, a.Gh)(n, JSON.parse(u), l, "path" === r.relative);
        null == e && "/" !== t && (o.pathname = "/" === o.pathname ? t : (0, a.HS)([t, o.pathname])), (r.replace ? i.replace : i.push)(o, r.state, r);
      }, [t, i, u, l, e]);
    }();
  }
  const v = r.createContext(null);
  function E() {
    return r.useContext(v);
  }
  function b(e) {
    let t = r.useContext(d).outlet;
    return t ? r.createElement(v.Provider, {
      value: e
    }, t) : t;
  }
  function w() {
    let {
        matches: e
      } = r.useContext(d),
      t = e[e.length - 1];
    return t ? t.params : {};
  }
  function C(e, t) {
    let {
        relative: n
      } = void 0 === t ? {} : t,
      {
        future: i
      } = r.useContext(c),
      {
        matches: o
      } = r.useContext(d),
      {
        pathname: s
      } = _(),
      l = JSON.stringify((0, a.yD)(o, i.v7_relativeSplatPath));
    return r.useMemo(() => (0, a.Gh)(e, JSON.parse(l), s, "path" === n), [e, l, s, n]);
  }
  function O(e, t) {
    return M(e, t);
  }
  function M(e, t, n, o) {
    h() || (0, a.Oi)(!1);
    let {
        navigator: s
      } = r.useContext(c),
      {
        matches: l
      } = r.useContext(d),
      p = l[l.length - 1],
      f = p ? p.params : {},
      m = (p && p.pathname, p ? p.pathnameBase : "/");
    p && p.route;
    let A,
      g = _();
    if (t) {
      var y;
      let e = "string" == typeof t ? (0, a.Rr)(t) : t;
      "/" === m || (null == (y = e.pathname) ? void 0 : y.startsWith(m)) || (0, a.Oi)(!1), A = e;
    } else A = g;
    let v = A.pathname || "/",
      E = v;
    if ("/" !== m) {
      let e = m.replace(/^\//, "").split("/");
      E = "/" + v.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let b = (0, a.ue)(e, {
        pathname: E
      }),
      w = D(b && b.map(e => Object.assign({}, e, {
        params: Object.assign({}, f, e.params),
        pathname: (0, a.HS)([m, s.encodeLocation ? s.encodeLocation(e.pathname).pathname : e.pathname]),
        pathnameBase: "/" === e.pathnameBase ? m : (0, a.HS)([m, s.encodeLocation ? s.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
      })), l, n, o);
    return t && w ? r.createElement(u.Provider, {
      value: {
        location: i({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, A),
        navigationType: a.rc.Pop
      }
    }, w) : w;
  }
  function S() {
    let e = V(),
      t = (0, a.pX)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
      };
    return r.createElement(r.Fragment, null, r.createElement("h2", null, "Unexpected Application Error!"), r.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), n ? r.createElement("pre", {
      style: i
    }, n) : null, null);
  }
  const T = r.createElement(S, null);
  class k extends r.Component {
    constructor(e) {
      super(e), this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error
      };
    }
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
        error: e.error,
        location: e.location,
        revalidation: e.revalidation
      } : {
        error: void 0 !== e.error ? e.error : t.error,
        location: t.location,
        revalidation: e.revalidation || t.revalidation
      };
    }
    componentDidCatch(e, t) {
      console.error("React Router caught the following error during render", e, t);
    }
    render() {
      return void 0 !== this.state.error ? r.createElement(d.Provider, {
        value: this.props.routeContext
      }, r.createElement(p.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  }
  function x(e) {
    let {
        routeContext: t,
        match: n,
        children: a
      } = e,
      i = r.useContext(o);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), r.createElement(d.Provider, {
      value: t
    }, a);
  }
  function D(e, t, n, i) {
    var o;
    if (void 0 === t && (t = []), void 0 === n && (n = null), void 0 === i && (i = null), null == e) {
      var s;
      if (!n) return null;
      if (n.errors) e = n.matches;else {
        if (!(null != (s = i) && s.v7_partialHydration && 0 === t.length && !n.initialized && n.matches.length > 0)) return null;
        e = n.matches;
      }
    }
    let l = e,
      c = null == (o = n) ? void 0 : o.errors;
    if (null != c) {
      let e = l.findIndex(e => e.route.id && void 0 !== (null == c ? void 0 : c[e.route.id]));
      e >= 0 || (0, a.Oi)(!1), l = l.slice(0, Math.min(l.length, e + 1));
    }
    let u = !1,
      d = -1;
    if (n && i && i.v7_partialHydration) for (let e = 0; e < l.length; e++) {
      let t = l[e];
      if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (d = e), t.route.id) {
        let {
            loaderData: e,
            errors: r
          } = n,
          a = t.route.loader && void 0 === e[t.route.id] && (!r || void 0 === r[t.route.id]);
        if (t.route.lazy || a) {
          u = !0, l = d >= 0 ? l.slice(0, d + 1) : [l[0]];
          break;
        }
      }
    }
    return l.reduceRight((e, a, i) => {
      let o,
        s = !1,
        p = null,
        f = null;
      var h;
      n && (o = c && a.route.id ? c[a.route.id] : void 0, p = a.route.errorElement || T, u && (d < 0 && 0 === i ? ($[h = "route-fallback"] || ($[h] = !0), s = !0, f = null) : d === i && (s = !0, f = a.route.hydrateFallbackElement || null)));
      let _ = t.concat(l.slice(0, i + 1)),
        m = () => {
          let t;
          return t = o ? p : s ? f : a.route.Component ? r.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, r.createElement(x, {
            match: a,
            routeContext: {
              outlet: e,
              matches: _,
              isDataRoute: null != n
            },
            children: t
          });
        };
      return n && (a.route.ErrorBoundary || a.route.errorElement || 0 === i) ? r.createElement(k, {
        location: n.location,
        revalidation: n.revalidation,
        component: p,
        error: o,
        children: m(),
        routeContext: {
          outlet: null,
          matches: _,
          isDataRoute: !0
        }
      }) : m();
    }, null);
  }
  var I = function (e) {
      return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
    }(I || {}),
    P = function (e) {
      return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
    }(P || {});
  function L(e) {
    let t = r.useContext(o);
    return t || (0, a.Oi)(!1), t;
  }
  function R(e) {
    let t = r.useContext(s);
    return t || (0, a.Oi)(!1), t;
  }
  function B(e) {
    let t = function () {
        let e = r.useContext(d);
        return e || (0, a.Oi)(!1), e;
      }(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || (0, a.Oi)(!1), n.route.id;
  }
  function N() {
    return B(P.UseRouteId);
  }
  function U() {
    return R(P.UseNavigation).navigation;
  }
  function F() {
    let e = L(I.UseRevalidator),
      t = R(P.UseRevalidator);
    return r.useMemo(() => ({
      revalidate: e.router.revalidate,
      state: t.revalidation
    }), [e.router.revalidate, t.revalidation]);
  }
  function j() {
    let {
      matches: e,
      loaderData: t
    } = R(P.UseMatches);
    return r.useMemo(() => e.map(e => (0, a.ro)(e, t)), [e, t]);
  }
  function H() {
    let e = R(P.UseLoaderData),
      t = B(P.UseLoaderData);
    if (!e.errors || null == e.errors[t]) return e.loaderData[t];
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")");
  }
  function W(e) {
    return R(P.UseRouteLoaderData).loaderData[e];
  }
  function K() {
    let e = R(P.UseActionData),
      t = B(P.UseLoaderData);
    return e.actionData ? e.actionData[t] : void 0;
  }
  function V() {
    var e;
    let t = r.useContext(p),
      n = R(P.UseRouteError),
      a = B(P.UseRouteError);
    return void 0 !== t ? t : null == (e = n.errors) ? void 0 : e[a];
  }
  function z() {
    let e = r.useContext(l);
    return null == e ? void 0 : e._data;
  }
  function Y() {
    let e = r.useContext(l);
    return null == e ? void 0 : e._error;
  }
  let Q = 0;
  function G(e) {
    let {
        router: t,
        basename: n
      } = L(I.UseBlocker),
      o = R(P.UseBlocker),
      [s, l] = r.useState(""),
      c = r.useCallback(t => {
        if ("function" != typeof e) return !!e;
        if ("/" === n) return e(t);
        let {
          currentLocation: r,
          nextLocation: o,
          historyAction: s
        } = t;
        return e({
          currentLocation: i({}, r, {
            pathname: (0, a.pb)(r.pathname, n) || r.pathname
          }),
          nextLocation: i({}, o, {
            pathname: (0, a.pb)(o.pathname, n) || o.pathname
          }),
          historyAction: s
        });
      }, [n, e]);
    return r.useEffect(() => {
      let e = String(++Q);
      return l(e), () => t.deleteBlocker(e);
    }, [t]), r.useEffect(() => {
      "" !== s && t.getBlocker(s, c);
    }, [t, s, c]), s && o.blockers.has(s) ? o.blockers.get(s) : a.G3;
  }
  const $ = {},
    q = (e, t, n) => {};
  function Z(e, t) {
    void 0 === (null == e ? void 0 : e.v7_startTransition) && q("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), void 0 !== (null == e ? void 0 : e.v7_relativeSplatPath) || t && void 0 !== t.v7_relativeSplatPath || q("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"), t && (void 0 === t.v7_fetcherPersist && q("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"), void 0 === t.v7_normalizeFormMethod && q("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"), void 0 === t.v7_partialHydration && q("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"), void 0 === t.v7_skipActionErrorRevalidation && q("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"));
  }
  const X = r.startTransition;
  function J(e) {
    let {
        basename: t,
        children: n,
        initialEntries: i,
        initialIndex: o,
        future: s
      } = e,
      l = r.useRef();
    null == l.current && (l.current = (0, a.sC)({
      initialEntries: i,
      initialIndex: o,
      v5Compat: !0
    }));
    let c = l.current,
      [u, d] = r.useState({
        action: c.action,
        location: c.location
      }),
      {
        v7_startTransition: p
      } = s || {},
      f = r.useCallback(e => {
        p && X ? X(() => d(e)) : d(e);
      }, [d, p]);
    return r.useLayoutEffect(() => c.listen(f), [c, f]), r.useEffect(() => Z(s), [s]), r.createElement(re, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: c,
      future: s
    });
  }
  function ee(e) {
    let {
      to: t,
      replace: n,
      state: i,
      relative: o
    } = e;
    h() || (0, a.Oi)(!1);
    let {
        future: s,
        static: l
      } = r.useContext(c),
      {
        matches: u
      } = r.useContext(d),
      {
        pathname: p
      } = _(),
      f = y(),
      m = (0, a.Gh)(t, (0, a.yD)(u, s.v7_relativeSplatPath), p, "path" === o),
      A = JSON.stringify(m);
    return r.useEffect(() => f(JSON.parse(A), {
      replace: n,
      state: i,
      relative: o
    }), [f, A, o, n, i]), null;
  }
  function te(e) {
    return b(e.context);
  }
  function ne(e) {
    (0, a.Oi)(!1);
  }
  function re(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: o,
      navigationType: s = a.rc.Pop,
      navigator: l,
      static: d = !1,
      future: p
    } = e;
    h() && (0, a.Oi)(!1);
    let f = t.replace(/^\/*/, "/"),
      _ = r.useMemo(() => ({
        basename: f,
        navigator: l,
        static: d,
        future: i({
          v7_relativeSplatPath: !1
        }, p)
      }), [f, p, l, d]);
    "string" == typeof o && (o = (0, a.Rr)(o));
    let {
        pathname: m = "/",
        search: A = "",
        hash: g = "",
        state: y = null,
        key: v = "default"
      } = o,
      E = r.useMemo(() => {
        let e = (0, a.pb)(m, f);
        return null == e ? null : {
          location: {
            pathname: e,
            search: A,
            hash: g,
            state: y,
            key: v
          },
          navigationType: s
        };
      }, [f, m, A, g, y, v, s]);
    return null == E ? null : r.createElement(c.Provider, {
      value: _
    }, r.createElement(u.Provider, {
      children: n,
      value: E
    }));
  }
  function ae(e) {
    let {
      children: t,
      location: n
    } = e;
    return O(ue(t), n);
  }
  function ie(e) {
    let {
      children: t,
      errorElement: n,
      resolve: a
    } = e;
    return r.createElement(le, {
      resolve: a,
      errorElement: n
    }, r.createElement(ce, null, t));
  }
  var oe = function (e) {
    return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e;
  }(oe || {});
  const se = new Promise(() => {});
  class le extends r.Component {
    constructor(e) {
      super(e), this.state = {
        error: null
      };
    }
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    componentDidCatch(e, t) {
      console.error("<Await> caught the following error during render", e, t);
    }
    render() {
      let {
          children: e,
          errorElement: t,
          resolve: n
        } = this.props,
        i = null,
        o = oe.pending;
      if (n instanceof Promise) {
        if (this.state.error) {
          o = oe.error;
          let e = this.state.error;
          i = Promise.reject().catch(() => {}), Object.defineProperty(i, "_tracked", {
            get: () => !0
          }), Object.defineProperty(i, "_error", {
            get: () => e
          });
        } else n._tracked ? (i = n, o = "_error" in i ? oe.error : "_data" in i ? oe.success : oe.pending) : (o = oe.pending, Object.defineProperty(n, "_tracked", {
          get: () => !0
        }), i = n.then(e => Object.defineProperty(n, "_data", {
          get: () => e
        }), e => Object.defineProperty(n, "_error", {
          get: () => e
        })));
      } else o = oe.success, i = Promise.resolve(), Object.defineProperty(i, "_tracked", {
        get: () => !0
      }), Object.defineProperty(i, "_data", {
        get: () => n
      });
      if (o === oe.error && i._error instanceof a.tH) throw se;
      if (o === oe.error && !t) throw i._error;
      if (o === oe.error) return r.createElement(l.Provider, {
        value: i,
        children: t
      });
      if (o === oe.success) return r.createElement(l.Provider, {
        value: i,
        children: e
      });
      throw i;
    }
  }
  function ce(e) {
    let {
        children: t
      } = e,
      n = z(),
      a = "function" == typeof t ? t(n) : t;
    return r.createElement(r.Fragment, null, a);
  }
  function ue(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return r.Children.forEach(e, (e, i) => {
      if (!r.isValidElement(e)) return;
      let o = [...t, i];
      if (e.type === r.Fragment) return void n.push.apply(n, ue(e.props.children, o));
      e.type !== ne && (0, a.Oi)(!1), e.props.index && e.props.children && (0, a.Oi)(!1);
      let s = {
        id: e.props.id || o.join("-"),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        loader: e.props.loader,
        action: e.props.action,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy
      };
      e.props.children && (s.children = ue(e.props.children, o)), n.push(s);
    }), n;
  }
  function de(e) {
    return D(e);
  }
  function pe(e) {
    let t = {
      hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
    };
    return e.Component && Object.assign(t, {
      element: r.createElement(e.Component),
      Component: void 0
    }), e.HydrateFallback && Object.assign(t, {
      hydrateFallbackElement: r.createElement(e.HydrateFallback),
      HydrateFallback: void 0
    }), e.ErrorBoundary && Object.assign(t, {
      errorElement: r.createElement(e.ErrorBoundary),
      ErrorBoundary: void 0
    }), t;
  }
  function fe(e, t) {
    return (0, a.aE)({
      basename: null == t ? void 0 : t.basename,
      future: i({}, null == t ? void 0 : t.future, {
        v7_prependBasename: !0
      }),
      history: (0, a.sC)({
        initialEntries: null == t ? void 0 : t.initialEntries,
        initialIndex: null == t ? void 0 : t.initialIndex
      }),
      hydrationData: null == t ? void 0 : t.hydrationData,
      routes: e,
      mapRouteProperties: pe,
      dataStrategy: null == t ? void 0 : t.dataStrategy,
      patchRoutesOnNavigation: null == t ? void 0 : t.patchRoutesOnNavigation
    }).initialize();
  }
});
