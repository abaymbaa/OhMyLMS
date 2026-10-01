// Reconstructed Webpack factory 45588; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r() {
    return r = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, r.apply(this, arguments);
  }
  var a;
  n.d(t, {
    AO: () => f,
    B6: () => L,
    G3: () => ue,
    Gh: () => H,
    HC: () => J,
    HS: () => W,
    HW: () => ce,
    Oi: () => c,
    Pq: () => Y,
    RO: () => R,
    Rr: () => h,
    Sk: () => X,
    TM: () => l,
    V2: () => Z,
    VV: () => ee,
    aE: () => he,
    o1: () => N,
    pX: () => te,
    pb: () => B,
    rc: () => a,
    ro: () => E,
    sC: () => o,
    tH: () => Q,
    tW: () => P,
    ue: () => y,
    v6: () => q,
    yD: () => j,
    zR: () => s
  }), function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
  }(a || (a = {}));
  const i = "popstate";
  function o(e) {
    void 0 === e && (e = {});
    let t,
      {
        initialEntries: n = ["/"],
        initialIndex: r,
        v5Compat: i = !1
      } = e;
    t = n.map((e, t) => _(e, "string" == typeof e ? null : e.state, 0 === t ? "default" : void 0));
    let o = c(null == r ? t.length - 1 : r),
      s = a.Pop,
      l = null;
    function c(e) {
      return Math.min(Math.max(e, 0), t.length - 1);
    }
    function d() {
      return t[o];
    }
    function _(e, n, r) {
      void 0 === n && (n = null);
      let a = p(t ? d().pathname : "/", e, n, r);
      return u("/" === a.pathname.charAt(0), "relative pathnames are not supported in memory history: " + JSON.stringify(e)), a;
    }
    function m(e) {
      return "string" == typeof e ? e : f(e);
    }
    return {
      get index() {
        return o;
      },
      get action() {
        return s;
      },
      get location() {
        return d();
      },
      createHref: m,
      createURL: e => new URL(m(e), "http://localhost"),
      encodeLocation(e) {
        let t = "string" == typeof e ? h(e) : e;
        return {
          pathname: t.pathname || "",
          search: t.search || "",
          hash: t.hash || ""
        };
      },
      push(e, n) {
        s = a.Push;
        let r = _(e, n);
        o += 1, t.splice(o, t.length, r), i && l && l({
          action: s,
          location: r,
          delta: 1
        });
      },
      replace(e, n) {
        s = a.Replace;
        let r = _(e, n);
        t[o] = r, i && l && l({
          action: s,
          location: r,
          delta: 0
        });
      },
      go(e) {
        s = a.Pop;
        let n = c(o + e),
          r = t[n];
        o = n, l && l({
          action: s,
          location: r,
          delta: e
        });
      },
      listen: e => (l = e, () => {
        l = null;
      })
    };
  }
  function s(e) {
    return void 0 === e && (e = {}), _(function (e, t) {
      let {
        pathname: n,
        search: r,
        hash: a
      } = e.location;
      return p("", {
        pathname: n,
        search: r,
        hash: a
      }, t.state && t.state.usr || null, t.state && t.state.key || "default");
    }, function (e, t) {
      return "string" == typeof t ? t : f(t);
    }, null, e);
  }
  function l(e) {
    return void 0 === e && (e = {}), _(function (e, t) {
      let {
        pathname: n = "/",
        search: r = "",
        hash: a = ""
      } = h(e.location.hash.substr(1));
      return n.startsWith("/") || n.startsWith(".") || (n = "/" + n), p("", {
        pathname: n,
        search: r,
        hash: a
      }, t.state && t.state.usr || null, t.state && t.state.key || "default");
    }, function (e, t) {
      let n = e.document.querySelector("base"),
        r = "";
      if (n && n.getAttribute("href")) {
        let t = e.location.href,
          n = t.indexOf("#");
        r = -1 === n ? t : t.slice(0, n);
      }
      return r + "#" + ("string" == typeof t ? t : f(t));
    }, function (e, t) {
      u("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")");
    }, e);
  }
  function c(e, t) {
    if (!1 === e || null == e) throw new Error(t);
  }
  function u(e, t) {
    if (!e) {
      "undefined" != typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (e) {}
    }
  }
  function d(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t
    };
  }
  function p(e, t, n, a) {
    return void 0 === n && (n = null), r({
      pathname: "string" == typeof e ? e : e.pathname,
      search: "",
      hash: ""
    }, "string" == typeof t ? h(t) : t, {
      state: n,
      key: t && t.key || a || Math.random().toString(36).substr(2, 8)
    });
  }
  function f(e) {
    let {
      pathname: t = "/",
      search: n = "",
      hash: r = ""
    } = e;
    return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t;
  }
  function h(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
    }
    return t;
  }
  function _(e, t, n, o) {
    void 0 === o && (o = {});
    let {
        window: s = document.defaultView,
        v5Compat: l = !1
      } = o,
      u = s.history,
      h = a.Pop,
      _ = null,
      m = A();
    function A() {
      return (u.state || {
        idx: null
      }).idx;
    }
    function g() {
      h = a.Pop;
      let e = A(),
        t = null == e ? null : e - m;
      m = e, _ && _({
        action: h,
        location: v.location,
        delta: t
      });
    }
    function y(e) {
      let t = "null" !== s.location.origin ? s.location.origin : s.location.href,
        n = "string" == typeof e ? e : f(e);
      return n = n.replace(/ $/, "%20"), c(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t);
    }
    null == m && (m = 0, u.replaceState(r({}, u.state, {
      idx: m
    }), ""));
    let v = {
      get action() {
        return h;
      },
      get location() {
        return e(s, u);
      },
      listen(e) {
        if (_) throw new Error("A history only accepts one active listener");
        return s.addEventListener(i, g), _ = e, () => {
          s.removeEventListener(i, g), _ = null;
        };
      },
      createHref: e => t(s, e),
      createURL: y,
      encodeLocation(e) {
        let t = y(e);
        return {
          pathname: t.pathname,
          search: t.search,
          hash: t.hash
        };
      },
      push: function (e, t) {
        h = a.Push;
        let r = p(v.location, e, t);
        n && n(r, e), m = A() + 1;
        let i = d(r, m),
          o = v.createHref(r);
        try {
          u.pushState(i, "", o);
        } catch (e) {
          if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
          s.location.assign(o);
        }
        l && _ && _({
          action: h,
          location: v.location,
          delta: 1
        });
      },
      replace: function (e, t) {
        h = a.Replace;
        let r = p(v.location, e, t);
        n && n(r, e), m = A();
        let i = d(r, m),
          o = v.createHref(r);
        u.replaceState(i, "", o), l && _ && _({
          action: h,
          location: v.location,
          delta: 0
        });
      },
      go: e => u.go(e)
    };
    return v;
  }
  var m;
  !function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
  }(m || (m = {}));
  const A = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function g(e, t, n, a) {
    return void 0 === n && (n = []), void 0 === a && (a = {}), e.map((e, i) => {
      let o = [...n, String(i)],
        s = "string" == typeof e.id ? e.id : o.join("-");
      if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!a[s], 'Found a route id collision on id "' + s + "\".  Route id's must be globally unique within Data Router usages"), function (e) {
        return !0 === e.index;
      }(e)) {
        let n = r({}, e, t(e), {
          id: s
        });
        return a[s] = n, n;
      }
      {
        let n = r({}, e, t(e), {
          id: s,
          children: void 0
        });
        return a[s] = n, e.children && (n.children = g(e.children, t, o, a)), n;
      }
    });
  }
  function y(e, t, n) {
    return void 0 === n && (n = "/"), v(e, t, n, !1);
  }
  function v(e, t, n, r) {
    let a = B(("string" == typeof t ? h(t) : t).pathname || "/", n);
    if (null == a) return null;
    let i = b(e);
    !function (e) {
      e.sort((e, t) => e.score !== t.score ? t.score - e.score : function (e, t) {
        return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
      }(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)));
    }(i);
    let o = null;
    for (let e = 0; null == o && e < i.length; ++e) {
      let t = R(a);
      o = I(i[e], t, r);
    }
    return o;
  }
  function E(e, t) {
    let {
      route: n,
      pathname: r,
      params: a
    } = e;
    return {
      id: n.id,
      pathname: r,
      params: a,
      data: t[n.id],
      handle: n.handle
    };
  }
  function b(e, t, n, r) {
    void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
    let a = (e, a, i) => {
      let o = {
        relativePath: void 0 === i ? e.path || "" : i,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: a,
        route: e
      };
      o.relativePath.startsWith("/") && (c(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length));
      let s = W([r, o.relativePath]),
        l = n.concat(o);
      e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), b(e.children, t, l, s)), (null != e.path || e.index) && t.push({
        path: s,
        score: D(s, e.index),
        routesMeta: l
      });
    };
    return e.forEach((e, t) => {
      var n;
      if ("" !== e.path && null != (n = e.path) && n.includes("?")) for (let n of w(e.path)) a(e, t, n);else a(e, t);
    }), t;
  }
  function w(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      i = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [i, ""] : [i];
    let o = w(r.join("/")),
      s = [];
    return s.push(...o.map(e => "" === e ? i : [i, e].join("/"))), a && s.push(...o), s.map(t => e.startsWith("/") && "" === t ? "/" : t);
  }
  const C = /^:[\w-]+$/,
    O = 3,
    M = 2,
    S = 1,
    T = 10,
    k = -2,
    x = e => "*" === e;
  function D(e, t) {
    let n = e.split("/"),
      r = n.length;
    return n.some(x) && (r += k), t && (r += M), n.filter(e => !x(e)).reduce((e, t) => e + (C.test(t) ? O : "" === t ? S : T), r);
  }
  function I(e, t, n) {
    void 0 === n && (n = !1);
    let {
        routesMeta: r
      } = e,
      a = {},
      i = "/",
      o = [];
    for (let e = 0; e < r.length; ++e) {
      let s = r[e],
        l = e === r.length - 1,
        c = "/" === i ? t : t.slice(i.length) || "/",
        u = L({
          path: s.relativePath,
          caseSensitive: s.caseSensitive,
          end: l
        }, c),
        d = s.route;
      if (!u && l && n && !r[r.length - 1].route.index && (u = L({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: !1
      }, c)), !u) return null;
      Object.assign(a, u.params), o.push({
        params: a,
        pathname: W([i, u.pathname]),
        pathnameBase: K(W([i, u.pathnameBase])),
        route: d
      }), "/" !== u.pathnameBase && (i = W([i, u.pathnameBase]));
    }
    return o;
  }
  function P(e, t) {
    void 0 === t && (t = {});
    let n = e;
    n.endsWith("*") && "*" !== n && !n.endsWith("/*") && (u(!1, 'Route path "' + n + '" will be treated as if it were "' + n.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + n.replace(/\*$/, "/*") + '".'), n = n.replace(/\*$/, "/*"));
    const r = n.startsWith("/") ? "/" : "",
      a = e => null == e ? "" : "string" == typeof e ? e : String(e);
    return r + n.split(/\/+/).map((e, n, r) => {
      if (n === r.length - 1 && "*" === e) return a(t["*"]);
      const i = e.match(/^:([\w-]+)(\??)$/);
      if (i) {
        const [, e, n] = i;
        let r = t[e];
        return c("?" === n || null != r, 'Missing ":' + e + '" param'), a(r);
      }
      return e.replace(/\?$/g, "");
    }).filter(e => !!e).join("/");
  }
  function L(e, t) {
    "string" == typeof e && (e = {
      path: e,
      caseSensitive: !1,
      end: !0
    });
    let [n, r] = function (e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !0), u("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
        let r = [],
          a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (r.push({
            paramName: t,
            isOptional: null != n
          }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return e.endsWith("*") ? (r.push({
          paramName: "*"
        }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r];
      }(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let i = a[0],
      o = i.replace(/(.)\/+$/, "$1"),
      s = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let {
          paramName: r,
          isOptional: a
        } = t;
        if ("*" === r) {
          let e = s[n] || "";
          o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const l = s[n];
        return e[r] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e;
      }, {}),
      pathname: i,
      pathnameBase: o,
      pattern: e
    };
  }
  function R(e) {
    try {
      return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return u(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    }
  }
  function B(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function N(e, t) {
    void 0 === t && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: a = ""
      } = "string" == typeof e ? h(e) : e,
      i = n ? n.startsWith("/") ? n : function (e, t) {
        let n = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach(e => {
          ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
        }), n.length > 1 ? n.join("/") : "/";
      }(n, t) : t;
    return {
      pathname: i,
      search: V(r),
      hash: z(a)
    };
  }
  function U(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.';
  }
  function F(e) {
    return e.filter((e, t) => 0 === t || e.route.path && e.route.path.length > 0);
  }
  function j(e, t) {
    let n = F(e);
    return t ? n.map((e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase) : n.map(e => e.pathnameBase);
  }
  function H(e, t, n, a) {
    let i;
    void 0 === a && (a = !1), "string" == typeof e ? i = h(e) : (i = r({}, e), c(!i.pathname || !i.pathname.includes("?"), U("?", "pathname", "search", i)), c(!i.pathname || !i.pathname.includes("#"), U("#", "pathname", "hash", i)), c(!i.search || !i.search.includes("#"), U("#", "search", "hash", i)));
    let o,
      s = "" === e || "" === i.pathname,
      l = s ? "/" : i.pathname;
    if (null == l) o = n;else {
      let e = t.length - 1;
      if (!a && l.startsWith("..")) {
        let t = l.split("/");
        for (; ".." === t[0];) t.shift(), e -= 1;
        i.pathname = t.join("/");
      }
      o = e >= 0 ? t[e] : "/";
    }
    let u = N(i, o),
      d = l && "/" !== l && l.endsWith("/"),
      p = (s || "." === l) && n.endsWith("/");
    return u.pathname.endsWith("/") || !d && !p || (u.pathname += "/"), u;
  }
  const W = e => e.join("/").replace(/\/\/+/g, "/"),
    K = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    V = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
    z = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "",
    Y = function (e, t) {
      void 0 === t && (t = {});
      let n = "number" == typeof t ? {
          status: t
        } : t,
        a = new Headers(n.headers);
      return a.has("Content-Type") || a.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(e), r({}, n, {
        headers: a
      }));
    };
  class Q extends Error {}
  class G {
    constructor(e, t) {
      let n;
      this.pendingKeysSet = new Set(), this.subscribers = new Set(), this.deferredKeys = [], c(e && "object" == typeof e && !Array.isArray(e), "defer() only accepts plain objects"), this.abortPromise = new Promise((e, t) => n = t), this.controller = new AbortController();
      let r = () => n(new Q("Deferred data aborted"));
      this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", r), this.controller.signal.addEventListener("abort", r), this.data = Object.entries(e).reduce((e, t) => {
        let [n, r] = t;
        return Object.assign(e, {
          [n]: this.trackPromise(n, r)
        });
      }, {}), this.done && this.unlistenAbortSignal(), this.init = t;
    }
    trackPromise(e, t) {
      if (!(t instanceof Promise)) return t;
      this.deferredKeys.push(e), this.pendingKeysSet.add(e);
      let n = Promise.race([t, this.abortPromise]).then(t => this.onSettle(n, e, void 0, t), t => this.onSettle(n, e, t));
      return n.catch(() => {}), Object.defineProperty(n, "_tracked", {
        get: () => !0
      }), n;
    }
    onSettle(e, t, n, r) {
      if (this.controller.signal.aborted && n instanceof Q) return this.unlistenAbortSignal(), Object.defineProperty(e, "_error", {
        get: () => n
      }), Promise.reject(n);
      if (this.pendingKeysSet.delete(t), this.done && this.unlistenAbortSignal(), void 0 === n && void 0 === r) {
        let n = new Error('Deferred data for key "' + t + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
        return Object.defineProperty(e, "_error", {
          get: () => n
        }), this.emit(!1, t), Promise.reject(n);
      }
      return void 0 === r ? (Object.defineProperty(e, "_error", {
        get: () => n
      }), this.emit(!1, t), Promise.reject(n)) : (Object.defineProperty(e, "_data", {
        get: () => r
      }), this.emit(!1, t), r);
    }
    emit(e, t) {
      this.subscribers.forEach(n => n(e, t));
    }
    subscribe(e) {
      return this.subscribers.add(e), () => this.subscribers.delete(e);
    }
    cancel() {
      this.controller.abort(), this.pendingKeysSet.forEach((e, t) => this.pendingKeysSet.delete(t)), this.emit(!0);
    }
    async resolveData(e) {
      let t = !1;
      if (!this.done) {
        let n = () => this.cancel();
        e.addEventListener("abort", n), t = await new Promise(t => {
          this.subscribe(r => {
            e.removeEventListener("abort", n), (r || this.done) && t(r);
          });
        });
      }
      return t;
    }
    get done() {
      return 0 === this.pendingKeysSet.size;
    }
    get unwrappedData() {
      return c(null !== this.data && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((e, t) => {
        let [n, r] = t;
        return Object.assign(e, {
          [n]: $(r)
        });
      }, {});
    }
    get pendingKeys() {
      return Array.from(this.pendingKeysSet);
    }
  }
  function $(e) {
    if (!function (e) {
      return e instanceof Promise && !0 === e._tracked;
    }(e)) return e;
    if (e._error) throw e._error;
    return e._data;
  }
  const q = function (e, t) {
      return void 0 === t && (t = {}), new G(e, "number" == typeof t ? {
        status: t
      } : t);
    },
    Z = function (e, t) {
      void 0 === t && (t = 302);
      let n = t;
      "number" == typeof n ? n = {
        status: n
      } : void 0 === n.status && (n.status = 302);
      let a = new Headers(n.headers);
      return a.set("Location", e), new Response(null, r({}, n, {
        headers: a
      }));
    },
    X = (e, t) => {
      let n = Z(e, t);
      return n.headers.set("X-Remix-Reload-Document", "true"), n;
    },
    J = (e, t) => {
      let n = Z(e, t);
      return n.headers.set("X-Remix-Replace", "true"), n;
    };
  class ee {
    constructor(e, t, n, r) {
      void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
    }
  }
  function te(e) {
    return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e;
  }
  const ne = ["post", "put", "patch", "delete"],
    re = new Set(ne),
    ae = ["get", ...ne],
    ie = new Set(ae),
    oe = new Set([301, 302, 303, 307, 308]),
    se = new Set([307, 308]),
    le = {
      state: "idle",
      location: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    },
    ce = {
      state: "idle",
      data: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    },
    ue = {
      state: "unblocked",
      proceed: void 0,
      reset: void 0,
      location: void 0
    },
    de = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    pe = e => ({
      hasErrorBoundary: Boolean(e.hasErrorBoundary)
    }),
    fe = "remix-router-transitions";
  function he(e) {
    const t = e.window ? e.window : "undefined" != typeof window ? window : void 0,
      n = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement,
      i = !n;
    let o;
    if (c(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) o = e.mapRouteProperties;else if (e.detectErrorBoundary) {
      let t = e.detectErrorBoundary;
      o = e => ({
        hasErrorBoundary: t(e)
      });
    } else o = pe;
    let s,
      l,
      d,
      f = {},
      h = g(e.routes, o, void 0, f),
      _ = e.basename || "/",
      b = e.dataStrategy || Ce,
      w = e.patchRoutesOnNavigation,
      C = r({
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1
      }, e.future),
      O = null,
      M = new Set(),
      S = null,
      T = null,
      k = null,
      x = null != e.hydrationData,
      D = y(h, e.history.location, _),
      I = !1,
      P = null;
    if (null == D && !w) {
      let t = Be(404, {
          pathname: e.history.location.pathname
        }),
        {
          matches: n,
          route: r
        } = Re(h);
      D = n, P = {
        [r.id]: t
      };
    }
    if (D && !e.hydrationData && ut(D, h, e.history.location.pathname).active && (D = null), D) {
      if (D.some(e => e.route.lazy)) l = !1;else if (D.some(e => e.route.loader)) {
        if (C.v7_partialHydration) {
          let t = e.hydrationData ? e.hydrationData.loaderData : null,
            n = e.hydrationData ? e.hydrationData.errors : null;
          if (n) {
            let e = D.findIndex(e => void 0 !== n[e.route.id]);
            l = D.slice(0, e + 1).every(e => !ye(e.route, t, n));
          } else l = D.every(e => !ye(e.route, t, n));
        } else l = null != e.hydrationData;
      } else l = !0;
    } else if (l = !1, D = [], C.v7_partialHydration) {
      let t = ut(null, h, e.history.location.pathname);
      t.active && t.matches && (I = !0, D = t.matches);
    }
    let L,
      R,
      N = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: D,
        initialized: l,
        navigation: le,
        restoreScrollPosition: null == e.hydrationData && null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || P,
        fetchers: new Map(),
        blockers: new Map()
      },
      U = a.Pop,
      F = !1,
      j = !1,
      H = new Map(),
      W = null,
      K = !1,
      V = !1,
      z = [],
      Y = new Set(),
      Q = new Map(),
      G = 0,
      $ = -1,
      q = new Map(),
      Z = new Set(),
      X = new Map(),
      J = new Map(),
      ee = new Set(),
      ne = new Map(),
      re = new Map();
    function ae(e, t) {
      void 0 === t && (t = {}), N = r({}, N, e);
      let n = [],
        a = [];
      C.v7_fetcherPersist && N.fetchers.forEach((e, t) => {
        "idle" === e.state && (ee.has(t) ? a.push(t) : n.push(t));
      }), ee.forEach(e => {
        N.fetchers.has(e) || Q.has(e) || a.push(e);
      }), [...M].forEach(e => e(N, {
        deletedFetchers: a,
        viewTransitionOpts: t.viewTransitionOpts,
        flushSync: !0 === t.flushSync
      })), C.v7_fetcherPersist ? (n.forEach(e => N.fetchers.delete(e)), a.forEach(e => Ke(e))) : a.forEach(e => ee.delete(e));
    }
    function ie(t, n, i) {
      var o, l;
      let c,
        {
          flushSync: u
        } = void 0 === i ? {} : i,
        d = null != N.actionData && null != N.navigation.formMethod && ze(N.navigation.formMethod) && "loading" === N.navigation.state && !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
      c = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : d ? N.actionData : null;
      let p = n.loaderData ? Ie(N.loaderData, n.loaderData, n.matches || [], n.errors) : N.loaderData,
        f = N.blockers;
      f.size > 0 && (f = new Map(f), f.forEach((e, t) => f.set(t, ue)));
      let _,
        m = !0 === F || null != N.navigation.formMethod && ze(N.navigation.formMethod) && !0 !== (null == (l = t.state) ? void 0 : l._isRedirect);
      if (s && (h = s, s = void 0), K || U === a.Pop || (U === a.Push ? e.history.push(t, t.state) : U === a.Replace && e.history.replace(t, t.state)), U === a.Pop) {
        let e = H.get(N.location.pathname);
        e && e.has(t.pathname) ? _ = {
          currentLocation: N.location,
          nextLocation: t
        } : H.has(t.pathname) && (_ = {
          currentLocation: t,
          nextLocation: N.location
        });
      } else if (j) {
        let e = H.get(N.location.pathname);
        e ? e.add(t.pathname) : (e = new Set([t.pathname]), H.set(N.location.pathname, e)), _ = {
          currentLocation: N.location,
          nextLocation: t
        };
      }
      ae(r({}, n, {
        actionData: c,
        loaderData: p,
        historyAction: U,
        location: t,
        initialized: !0,
        navigation: le,
        revalidation: "idle",
        restoreScrollPosition: ct(t, n.matches || N.matches),
        preventScrollReset: m,
        blockers: f
      }), {
        viewTransitionOpts: _,
        flushSync: !0 === u
      }), U = a.Pop, F = !1, j = !1, K = !1, V = !1, z = [];
    }
    async function oe(t, n, i) {
      L && L.abort(), L = null, U = t, K = !0 === (i && i.startUninterruptedRevalidation), function (e, t) {
        if (S && k) {
          let n = lt(e, t);
          S[n] = k();
        }
      }(N.location, N.matches), F = !0 === (i && i.preventScrollReset), j = !0 === (i && i.enableViewTransition);
      let o = s || h,
        l = i && i.overrideNavigation,
        c = null != i && i.initialHydration && N.matches && N.matches.length > 0 && !I ? N.matches : y(o, n, _),
        u = !0 === (i && i.flushSync);
      if (c && N.initialized && !V && (d = N.location, p = n, d.pathname === p.pathname && d.search === p.search && ("" === d.hash ? "" !== p.hash : d.hash === p.hash || "" !== p.hash)) && !(i && i.submission && ze(i.submission.formMethod))) return void ie(n, {
        matches: c
      }, {
        flushSync: u
      });
      var d, p;
      let f = ut(c, o, n.pathname);
      if (f.active && f.matches && (c = f.matches), !c) {
        let {
          error: e,
          notFoundMatches: t,
          route: r
        } = ot(n.pathname);
        return void ie(n, {
          matches: t,
          loaderData: {},
          errors: {
            [r.id]: e
          }
        }, {
          flushSync: u
        });
      }
      L = new AbortController();
      let A,
        g = Te(e.history, n, L.signal, i && i.submission);
      if (i && i.pendingError) A = [Le(c).route.id, {
        type: m.error,
        error: i.pendingError
      }];else if (i && i.submission && ze(i.submission.formMethod)) {
        let t = await async function (e, t, n, r, i, o) {
          void 0 === o && (o = {}), we();
          let s,
            l = function (e, t) {
              return {
                state: "submitting",
                location: e,
                formMethod: t.formMethod,
                formAction: t.formAction,
                formEncType: t.formEncType,
                formData: t.formData,
                json: t.json,
                text: t.text
              };
            }(t, n);
          if (ae({
            navigation: l
          }, {
            flushSync: !0 === o.flushSync
          }), i) {
            let n = await dt(r, t.pathname, e.signal);
            if ("aborted" === n.type) return {
              shortCircuited: !0
            };
            if ("error" === n.type) {
              let e = Le(n.partialMatches).route.id;
              return {
                matches: n.partialMatches,
                pendingActionResult: [e, {
                  type: m.error,
                  error: n.error
                }]
              };
            }
            if (!n.matches) {
              let {
                notFoundMatches: e,
                error: n,
                route: r
              } = ot(t.pathname);
              return {
                matches: e,
                pendingActionResult: [r.id, {
                  type: m.error,
                  error: n
                }]
              };
            }
            r = n.matches;
          }
          let c = qe(r, t);
          if (c.route.action || c.route.lazy) {
            if (s = (await ve("action", N, e, [c], r, null))[c.route.id], e.signal.aborted) return {
              shortCircuited: !0
            };
          } else s = {
            type: m.error,
            error: Be(405, {
              method: e.method,
              pathname: t.pathname,
              routeId: c.route.id
            })
          };
          if (We(s)) {
            let t;
            return t = o && null != o.replace ? o.replace : Se(s.response.headers.get("Location"), new URL(e.url), _) === N.location.pathname + N.location.search, await Ae(e, s, !0, {
              submission: n,
              replace: t
            }), {
              shortCircuited: !0
            };
          }
          if (je(s)) throw Be(400, {
            type: "defer-action"
          });
          if (He(s)) {
            let e = Le(r, c.route.id);
            return !0 !== (o && o.replace) && (U = a.Push), {
              matches: r,
              pendingActionResult: [e.route.id, s]
            };
          }
          return {
            matches: r,
            pendingActionResult: [c.route.id, s]
          };
        }(g, n, i.submission, c, f.active, {
          replace: i.replace,
          flushSync: u
        });
        if (t.shortCircuited) return;
        if (t.pendingActionResult) {
          let [e, r] = t.pendingActionResult;
          if (He(r) && te(r.error) && 404 === r.error.status) return L = null, void ie(n, {
            matches: t.matches,
            loaderData: {},
            errors: {
              [e]: r.error
            }
          });
        }
        c = t.matches || c, A = t.pendingActionResult, l = Xe(n, i.submission), u = !1, f.active = !1, g = Te(e.history, g.url, g.signal);
      }
      let {
        shortCircuited: v,
        matches: E,
        loaderData: b,
        errors: w
      } = await async function (t, n, a, i, o, l, c, u, d, p, f) {
        let m = o || Xe(n, l),
          A = l || c || Ze(m),
          g = !(K || C.v7_partialHydration && d);
        if (i) {
          if (g) {
            let e = he(f);
            ae(r({
              navigation: m
            }, void 0 !== e ? {
              actionData: e
            } : {}), {
              flushSync: p
            });
          }
          let e = await dt(a, n.pathname, t.signal);
          if ("aborted" === e.type) return {
            shortCircuited: !0
          };
          if ("error" === e.type) {
            let t = Le(e.partialMatches).route.id;
            return {
              matches: e.partialMatches,
              loaderData: {},
              errors: {
                [t]: e.error
              }
            };
          }
          if (!e.matches) {
            let {
              error: e,
              notFoundMatches: t,
              route: r
            } = ot(n.pathname);
            return {
              matches: t,
              loaderData: {},
              errors: {
                [r.id]: e
              }
            };
          }
          a = e.matches;
        }
        let y = s || h,
          [v, E] = ge(e.history, N, a, A, n, C.v7_partialHydration && !0 === d, C.v7_skipActionErrorRevalidation, V, z, Y, ee, X, Z, y, _, f);
        if (st(e => !(a && a.some(t => t.route.id === e)) || v && v.some(t => t.route.id === e)), $ = ++G, 0 === v.length && 0 === E.length) {
          let e = tt();
          return ie(n, r({
            matches: a,
            loaderData: {},
            errors: f && He(f[1]) ? {
              [f[0]]: f[1].error
            } : null
          }, Pe(f), e ? {
            fetchers: new Map(N.fetchers)
          } : {}), {
            flushSync: p
          }), {
            shortCircuited: !0
          };
        }
        if (g) {
          let e = {};
          if (!i) {
            e.navigation = m;
            let t = he(f);
            void 0 !== t && (e.actionData = t);
          }
          E.length > 0 && (e.fetchers = function (e) {
            return e.forEach(e => {
              let t = N.fetchers.get(e.key),
                n = Je(void 0, t ? t.data : void 0);
              N.fetchers.set(e.key, n);
            }), new Map(N.fetchers);
          }(E)), ae(e, {
            flushSync: p
          });
        }
        E.forEach(e => {
          Ve(e.key), e.controller && Q.set(e.key, e.controller);
        });
        let b = () => E.forEach(e => Ve(e.key));
        L && L.signal.addEventListener("abort", b);
        let {
          loaderResults: w,
          fetcherResults: O
        } = await Ee(N, a, v, E, t);
        if (t.signal.aborted) return {
          shortCircuited: !0
        };
        L && L.signal.removeEventListener("abort", b), E.forEach(e => Q.delete(e.key));
        let M = Ne(w);
        if (M) return await Ae(t, M.result, !0, {
          replace: u
        }), {
          shortCircuited: !0
        };
        if (M = Ne(O), M) return Z.add(M.key), await Ae(t, M.result, !0, {
          replace: u
        }), {
          shortCircuited: !0
        };
        let {
          loaderData: S,
          errors: T
        } = De(N, a, w, f, E, O, ne);
        ne.forEach((e, t) => {
          e.subscribe(n => {
            (n || e.done) && ne.delete(t);
          });
        }), C.v7_partialHydration && d && N.errors && (T = r({}, N.errors, T));
        let k = tt(),
          x = nt($),
          D = k || x || E.length > 0;
        return r({
          matches: a,
          loaderData: S,
          errors: T
        }, D ? {
          fetchers: new Map(N.fetchers)
        } : {});
      }(g, n, c, f.active, l, i && i.submission, i && i.fetcherSubmission, i && i.replace, i && !0 === i.initialHydration, u, A);
      v || (L = null, ie(n, r({
        matches: E || c
      }, Pe(A), {
        loaderData: b,
        errors: w
      })));
    }
    function he(e) {
      return e && !He(e[1]) ? {
        [e[0]]: e[1].data
      } : N.actionData ? 0 === Object.keys(N.actionData).length ? null : N.actionData : void 0;
    }
    async function Ae(i, o, s, l) {
      let {
        submission: u,
        fetcherSubmission: d,
        preventScrollReset: f,
        replace: h
      } = void 0 === l ? {} : l;
      o.response.headers.has("X-Remix-Revalidate") && (V = !0);
      let m = o.response.headers.get("Location");
      c(m, "Expected a Location header on the redirect Response"), m = Se(m, new URL(i.url), _);
      let A = p(N.location, m, {
        _isRedirect: !0
      });
      if (n) {
        let n = !1;
        if (o.response.headers.has("X-Remix-Reload-Document")) n = !0;else if (de.test(m)) {
          const r = e.history.createURL(m);
          n = r.origin !== t.location.origin || null == B(r.pathname, _);
        }
        if (n) return void (h ? t.location.replace(m) : t.location.assign(m));
      }
      L = null;
      let g = !0 === h || o.response.headers.has("X-Remix-Replace") ? a.Replace : a.Push,
        {
          formMethod: y,
          formAction: v,
          formEncType: E
        } = N.navigation;
      !u && !d && y && v && E && (u = Ze(N.navigation));
      let b = u || d;
      if (se.has(o.response.status) && b && ze(b.formMethod)) await oe(g, A, {
        submission: r({}, b, {
          formAction: m
        }),
        preventScrollReset: f || F,
        enableViewTransition: s ? j : void 0
      });else {
        let e = Xe(A, u);
        await oe(g, A, {
          overrideNavigation: e,
          fetcherSubmission: d,
          preventScrollReset: f || F,
          enableViewTransition: s ? j : void 0
        });
      }
    }
    async function ve(e, t, n, a, i, s) {
      let l,
        d = {};
      try {
        l = await async function (e, t, n, a, i, o, s, l, d, p) {
          let f = o.map(e => e.route.lazy ? async function (e, t, n) {
              if (!e.lazy) return;
              let a = await e.lazy();
              if (!e.lazy) return;
              let i = n[e.id];
              c(i, "No route found in manifest");
              let o = {};
              for (let e in a) {
                let t = void 0 !== i[e] && "hasErrorBoundary" !== e;
                u(!t, 'Route "' + i.id + '" has a static property "' + e + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e + '" will be ignored.'), t || A.has(e) || (o[e] = a[e]);
              }
              Object.assign(i, o), Object.assign(i, r({}, t(i), {
                lazy: void 0
              }));
            }(e.route, d, l) : void 0),
            h = o.map((e, n) => {
              let o = f[n],
                s = i.some(t => t.route.id === e.route.id);
              return r({}, e, {
                shouldLoad: s,
                resolve: async n => (n && "GET" === a.method && (e.route.lazy || e.route.loader) && (s = !0), s ? async function (e, t, n, r, a, i) {
                  let o,
                    s,
                    l = r => {
                      let o,
                        l = new Promise((e, t) => o = t);
                      s = () => o(), t.signal.addEventListener("abort", s);
                      let c = a => "function" != typeof r ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "' + e + '" [routeId: ' + n.route.id + "]")) : r({
                          request: t,
                          params: n.params,
                          context: i
                        }, ...(void 0 !== a ? [a] : [])),
                        u = (async () => {
                          try {
                            return {
                              type: "data",
                              result: await (a ? a(e => c(e)) : c())
                            };
                          } catch (e) {
                            return {
                              type: "error",
                              result: e
                            };
                          }
                        })();
                      return Promise.race([u, l]);
                    };
                  try {
                    let a = n.route[e];
                    if (r) {
                      if (a) {
                        let e,
                          [t] = await Promise.all([l(a).catch(t => {
                            e = t;
                          }), r]);
                        if (void 0 !== e) throw e;
                        o = t;
                      } else {
                        if (await r, a = n.route[e], !a) {
                          if ("action" === e) {
                            let e = new URL(t.url),
                              r = e.pathname + e.search;
                            throw Be(405, {
                              method: t.method,
                              pathname: r,
                              routeId: n.route.id
                            });
                          }
                          return {
                            type: m.data,
                            result: void 0
                          };
                        }
                        o = await l(a);
                      }
                    } else {
                      if (!a) {
                        let e = new URL(t.url);
                        throw Be(404, {
                          pathname: e.pathname + e.search
                        });
                      }
                      o = await l(a);
                    }
                    c(void 0 !== o.result, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.");
                  } catch (e) {
                    return {
                      type: m.error,
                      result: e
                    };
                  } finally {
                    s && t.signal.removeEventListener("abort", s);
                  }
                  return o;
                }(t, a, e, o, n, p) : Promise.resolve({
                  type: m.data,
                  result: void 0
                }))
              });
            }),
            _ = await e({
              matches: h,
              request: a,
              params: o[0].params,
              fetcherKey: s,
              context: p
            });
          try {
            await Promise.all(f);
          } catch (e) {}
          return _;
        }(b, e, 0, n, a, i, s, f, o);
      } catch (e) {
        return a.forEach(t => {
          d[t.route.id] = {
            type: m.error,
            error: e
          };
        }), d;
      }
      for (let [e, t] of Object.entries(l)) if (Fe(t)) {
        let r = t.result;
        d[e] = {
          type: m.redirect,
          response: Me(r, n, e, i, _, C.v7_relativeSplatPath)
        };
      } else d[e] = await Oe(t);
      return d;
    }
    async function Ee(t, n, r, a, i) {
      let o = t.matches,
        s = ve("loader", 0, i, r, n, null),
        l = Promise.all(a.map(async t => {
          if (t.matches && t.match && t.controller) {
            let n = (await ve("loader", 0, Te(e.history, t.path, t.controller.signal), [t.match], t.matches, t.key))[t.match.route.id];
            return {
              [t.key]: n
            };
          }
          return Promise.resolve({
            [t.key]: {
              type: m.error,
              error: Be(404, {
                pathname: t.path
              })
            }
          });
        })),
        c = await s,
        u = (await l).reduce((e, t) => Object.assign(e, t), {});
      return await Promise.all([Ye(n, c, i.signal, o, t.loaderData), Qe(n, u, a)]), {
        loaderResults: c,
        fetcherResults: u
      };
    }
    function we() {
      V = !0, z.push(...st()), X.forEach((e, t) => {
        Q.has(t) && Y.add(t), Ve(t);
      });
    }
    function ke(e, t, n) {
      void 0 === n && (n = {}), N.fetchers.set(e, t), ae({
        fetchers: new Map(N.fetchers)
      }, {
        flushSync: !0 === (n && n.flushSync)
      });
    }
    function xe(e, t, n, r) {
      void 0 === r && (r = {});
      let a = Le(N.matches, t);
      Ke(e), ae({
        errors: {
          [a.route.id]: n
        },
        fetchers: new Map(N.fetchers)
      }, {
        flushSync: !0 === (r && r.flushSync)
      });
    }
    function Ue(e) {
      return J.set(e, (J.get(e) || 0) + 1), ee.has(e) && ee.delete(e), N.fetchers.get(e) || ce;
    }
    function Ke(e) {
      let t = N.fetchers.get(e);
      !Q.has(e) || t && "loading" === t.state && q.has(e) || Ve(e), X.delete(e), q.delete(e), Z.delete(e), C.v7_fetcherPersist && ee.delete(e), Y.delete(e), N.fetchers.delete(e);
    }
    function Ve(e) {
      let t = Q.get(e);
      t && (t.abort(), Q.delete(e));
    }
    function $e(e) {
      for (let t of e) {
        let e = et(Ue(t).data);
        N.fetchers.set(t, e);
      }
    }
    function tt() {
      let e = [],
        t = !1;
      for (let n of Z) {
        let r = N.fetchers.get(n);
        c(r, "Expected fetcher: " + n), "loading" === r.state && (Z.delete(n), e.push(n), t = !0);
      }
      return $e(e), t;
    }
    function nt(e) {
      let t = [];
      for (let [n, r] of q) if (r < e) {
        let e = N.fetchers.get(n);
        c(e, "Expected fetcher: " + n), "loading" === e.state && (Ve(n), q.delete(n), t.push(n));
      }
      return $e(t), t.length > 0;
    }
    function rt(e) {
      N.blockers.delete(e), re.delete(e);
    }
    function at(e, t) {
      let n = N.blockers.get(e) || ue;
      c("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state);
      let r = new Map(N.blockers);
      r.set(e, t), ae({
        blockers: r
      });
    }
    function it(e) {
      let {
        currentLocation: t,
        nextLocation: n,
        historyAction: r
      } = e;
      if (0 === re.size) return;
      re.size > 1 && u(!1, "A router only supports one blocker at a time");
      let a = Array.from(re.entries()),
        [i, o] = a[a.length - 1],
        s = N.blockers.get(i);
      return s && "proceeding" === s.state ? void 0 : o({
        currentLocation: t,
        nextLocation: n,
        historyAction: r
      }) ? i : void 0;
    }
    function ot(e) {
      let t = Be(404, {
          pathname: e
        }),
        n = s || h,
        {
          matches: r,
          route: a
        } = Re(n);
      return st(), {
        notFoundMatches: r,
        route: a,
        error: t
      };
    }
    function st(e) {
      let t = [];
      return ne.forEach((n, r) => {
        e && !e(r) || (n.cancel(), t.push(r), ne.delete(r));
      }), t;
    }
    function lt(e, t) {
      return T && T(e, t.map(e => E(e, N.loaderData))) || e.key;
    }
    function ct(e, t) {
      if (S) {
        let n = lt(e, t),
          r = S[n];
        if ("number" == typeof r) return r;
      }
      return null;
    }
    function ut(e, t, n) {
      if (w) {
        if (!e) return {
          active: !0,
          matches: v(t, n, _, !0) || []
        };
        if (Object.keys(e[0].params).length > 0) return {
          active: !0,
          matches: v(t, n, _, !0)
        };
      }
      return {
        active: !1,
        matches: null
      };
    }
    async function dt(e, t, n, r) {
      if (!w) return {
        type: "success",
        matches: e
      };
      let a = e;
      for (;;) {
        let e = null == s,
          i = s || h,
          l = f;
        try {
          await w({
            signal: n,
            path: t,
            matches: a,
            fetcherKey: r,
            patch: (e, t) => {
              n.aborted || be(e, t, i, l, o);
            }
          });
        } catch (e) {
          return {
            type: "error",
            error: e,
            partialMatches: a
          };
        } finally {
          e && !n.aborted && (h = [...h]);
        }
        if (n.aborted) return {
          type: "aborted"
        };
        let c = y(i, t, _);
        if (c) return {
          type: "success",
          matches: c
        };
        let u = v(i, t, _, !0);
        if (!u || a.length === u.length && a.every((e, t) => e.route.id === u[t].route.id)) return {
          type: "success",
          matches: null
        };
        a = u;
      }
    }
    return d = {
      get basename() {
        return _;
      },
      get future() {
        return C;
      },
      get state() {
        return N;
      },
      get routes() {
        return h;
      },
      get window() {
        return t;
      },
      initialize: function () {
        if (O = e.history.listen(t => {
          let {
            action: n,
            location: r,
            delta: a
          } = t;
          if (R) return R(), void (R = void 0);
          u(0 === re.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
          let i = it({
            currentLocation: N.location,
            nextLocation: r,
            historyAction: n
          });
          if (i && null != a) {
            let t = new Promise(e => {
              R = e;
            });
            return e.history.go(-1 * a), void at(i, {
              state: "blocked",
              location: r,
              proceed() {
                at(i, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: r
                }), t.then(() => e.history.go(a));
              },
              reset() {
                let e = new Map(N.blockers);
                e.set(i, ue), ae({
                  blockers: e
                });
              }
            });
          }
          return oe(n, r);
        }), n) {
          !function (e, t) {
            try {
              let n = e.sessionStorage.getItem(fe);
              if (n) {
                let e = JSON.parse(n);
                for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []));
              }
            } catch (e) {}
          }(t, H);
          let e = () => function (e, t) {
            if (t.size > 0) {
              let n = {};
              for (let [e, r] of t) n[e] = [...r];
              try {
                e.sessionStorage.setItem(fe, JSON.stringify(n));
              } catch (e) {
                u(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").");
              }
            }
          }(t, H);
          t.addEventListener("pagehide", e), W = () => t.removeEventListener("pagehide", e);
        }
        return N.initialized || oe(a.Pop, N.location, {
          initialHydration: !0
        }), d;
      },
      subscribe: function (e) {
        return M.add(e), () => M.delete(e);
      },
      enableScrollRestoration: function (e, t, n) {
        if (S = e, k = t, T = n || null, !x && N.navigation === le) {
          x = !0;
          let e = ct(N.location, N.matches);
          null != e && ae({
            restoreScrollPosition: e
          });
        }
        return () => {
          S = null, k = null, T = null;
        };
      },
      navigate: async function t(n, i) {
        if ("number" == typeof n) return void e.history.go(n);
        let o = _e(N.location, N.matches, _, C.v7_prependBasename, n, C.v7_relativeSplatPath, null == i ? void 0 : i.fromRouteId, null == i ? void 0 : i.relative),
          {
            path: s,
            submission: l,
            error: c
          } = me(C.v7_normalizeFormMethod, !1, o, i),
          u = N.location,
          d = p(N.location, s, i && i.state);
        d = r({}, d, e.history.encodeLocation(d));
        let f = i && null != i.replace ? i.replace : void 0,
          h = a.Push;
        !0 === f ? h = a.Replace : !1 === f || null != l && ze(l.formMethod) && l.formAction === N.location.pathname + N.location.search && (h = a.Replace);
        let m = i && "preventScrollReset" in i ? !0 === i.preventScrollReset : void 0,
          A = !0 === (i && i.flushSync),
          g = it({
            currentLocation: u,
            nextLocation: d,
            historyAction: h
          });
        if (!g) return await oe(h, d, {
          submission: l,
          pendingError: c,
          preventScrollReset: m,
          replace: i && i.replace,
          enableViewTransition: i && i.viewTransition,
          flushSync: A
        });
        at(g, {
          state: "blocked",
          location: d,
          proceed() {
            at(g, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: d
            }), t(n, i);
          },
          reset() {
            let e = new Map(N.blockers);
            e.set(g, ue), ae({
              blockers: e
            });
          }
        });
      },
      fetch: function (t, n, r, a) {
        if (i) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        Ve(t);
        let o = !0 === (a && a.flushSync),
          l = s || h,
          u = _e(N.location, N.matches, _, C.v7_prependBasename, r, C.v7_relativeSplatPath, n, null == a ? void 0 : a.relative),
          d = y(l, u, _),
          p = ut(d, l, u);
        if (p.active && p.matches && (d = p.matches), !d) return void xe(t, n, Be(404, {
          pathname: u
        }), {
          flushSync: o
        });
        let {
          path: f,
          submission: m,
          error: A
        } = me(C.v7_normalizeFormMethod, !0, u, a);
        if (A) return void xe(t, n, A, {
          flushSync: o
        });
        let g = qe(d, f),
          v = !0 === (a && a.preventScrollReset);
        m && ze(m.formMethod) ? async function (t, n, r, a, i, o, l, u, d) {
          function p(e) {
            if (!e.route.action && !e.route.lazy) {
              let e = Be(405, {
                method: d.formMethod,
                pathname: r,
                routeId: n
              });
              return xe(t, n, e, {
                flushSync: l
              }), !0;
            }
            return !1;
          }
          if (we(), X.delete(t), !o && p(a)) return;
          let f = N.fetchers.get(t);
          ke(t, function (e, t) {
            return {
              state: "submitting",
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t ? t.data : void 0
            };
          }(d, f), {
            flushSync: l
          });
          let m = new AbortController(),
            A = Te(e.history, r, m.signal, d);
          if (o) {
            let e = await dt(i, new URL(A.url).pathname, A.signal, t);
            if ("aborted" === e.type) return;
            if ("error" === e.type) return void xe(t, n, e.error, {
              flushSync: l
            });
            if (!e.matches) return void xe(t, n, Be(404, {
              pathname: r
            }), {
              flushSync: l
            });
            if (p(a = qe(i = e.matches, r))) return;
          }
          Q.set(t, m);
          let g = G,
            v = (await ve("action", 0, A, [a], i, t))[a.route.id];
          if (A.signal.aborted) return void (Q.get(t) === m && Q.delete(t));
          if (C.v7_fetcherPersist && ee.has(t)) {
            if (We(v) || He(v)) return void ke(t, et(void 0));
          } else {
            if (We(v)) return Q.delete(t), $ > g ? void ke(t, et(void 0)) : (Z.add(t), ke(t, Je(d)), Ae(A, v, !1, {
              fetcherSubmission: d,
              preventScrollReset: u
            }));
            if (He(v)) return void xe(t, n, v.error);
          }
          if (je(v)) throw Be(400, {
            type: "defer-action"
          });
          let E = N.navigation.location || N.location,
            b = Te(e.history, E, m.signal),
            w = s || h,
            O = "idle" !== N.navigation.state ? y(w, N.navigation.location, _) : N.matches;
          c(O, "Didn't find any matches after fetcher action");
          let M = ++G;
          q.set(t, M);
          let S = Je(d, v.data);
          N.fetchers.set(t, S);
          let [T, k] = ge(e.history, N, O, d, E, !1, C.v7_skipActionErrorRevalidation, V, z, Y, ee, X, Z, w, _, [a.route.id, v]);
          k.filter(e => e.key !== t).forEach(e => {
            let t = e.key,
              n = N.fetchers.get(t),
              r = Je(void 0, n ? n.data : void 0);
            N.fetchers.set(t, r), Ve(t), e.controller && Q.set(t, e.controller);
          }), ae({
            fetchers: new Map(N.fetchers)
          });
          let x = () => k.forEach(e => Ve(e.key));
          m.signal.addEventListener("abort", x);
          let {
            loaderResults: D,
            fetcherResults: I
          } = await Ee(N, O, T, k, b);
          if (m.signal.aborted) return;
          m.signal.removeEventListener("abort", x), q.delete(t), Q.delete(t), k.forEach(e => Q.delete(e.key));
          let P = Ne(D);
          if (P) return Ae(b, P.result, !1, {
            preventScrollReset: u
          });
          if (P = Ne(I), P) return Z.add(P.key), Ae(b, P.result, !1, {
            preventScrollReset: u
          });
          let {
            loaderData: R,
            errors: B
          } = De(N, O, D, void 0, k, I, ne);
          if (N.fetchers.has(t)) {
            let e = et(v.data);
            N.fetchers.set(t, e);
          }
          nt(M), "loading" === N.navigation.state && M > $ ? (c(U, "Expected pending action"), L && L.abort(), ie(N.navigation.location, {
            matches: O,
            loaderData: R,
            errors: B,
            fetchers: new Map(N.fetchers)
          })) : (ae({
            errors: B,
            loaderData: Ie(N.loaderData, R, O, B),
            fetchers: new Map(N.fetchers)
          }), V = !1);
        }(t, n, f, g, d, p.active, o, v, m) : (X.set(t, {
          routeId: n,
          path: f
        }), async function (t, n, r, a, i, o, s, l, u) {
          let d = N.fetchers.get(t);
          ke(t, Je(u, d ? d.data : void 0), {
            flushSync: s
          });
          let p = new AbortController(),
            f = Te(e.history, r, p.signal);
          if (o) {
            let e = await dt(i, new URL(f.url).pathname, f.signal, t);
            if ("aborted" === e.type) return;
            if ("error" === e.type) return void xe(t, n, e.error, {
              flushSync: s
            });
            if (!e.matches) return void xe(t, n, Be(404, {
              pathname: r
            }), {
              flushSync: s
            });
            a = qe(i = e.matches, r);
          }
          Q.set(t, p);
          let h = G,
            _ = (await ve("loader", 0, f, [a], i, t))[a.route.id];
          if (je(_) && (_ = (await Ge(_, f.signal, !0)) || _), Q.get(t) === p && Q.delete(t), !f.signal.aborted) {
            if (!ee.has(t)) return We(_) ? $ > h ? void ke(t, et(void 0)) : (Z.add(t), void (await Ae(f, _, !1, {
              preventScrollReset: l
            }))) : void (He(_) ? xe(t, n, _.error) : (c(!je(_), "Unhandled fetcher deferred data"), ke(t, et(_.data))));
            ke(t, et(void 0));
          }
        }(t, n, f, g, d, p.active, o, v, m));
      },
      revalidate: function () {
        we(), ae({
          revalidation: "loading"
        }), "submitting" !== N.navigation.state && ("idle" !== N.navigation.state ? oe(U || N.historyAction, N.navigation.location, {
          overrideNavigation: N.navigation,
          enableViewTransition: !0 === j
        }) : oe(N.historyAction, N.location, {
          startUninterruptedRevalidation: !0
        }));
      },
      createHref: t => e.history.createHref(t),
      encodeLocation: t => e.history.encodeLocation(t),
      getFetcher: Ue,
      deleteFetcher: function (e) {
        let t = (J.get(e) || 0) - 1;
        t <= 0 ? (J.delete(e), ee.add(e), C.v7_fetcherPersist || Ke(e)) : J.set(e, t), ae({
          fetchers: new Map(N.fetchers)
        });
      },
      dispose: function () {
        O && O(), W && W(), M.clear(), L && L.abort(), N.fetchers.forEach((e, t) => Ke(t)), N.blockers.forEach((e, t) => rt(t));
      },
      getBlocker: function (e, t) {
        let n = N.blockers.get(e) || ue;
        return re.get(e) !== t && re.set(e, t), n;
      },
      deleteBlocker: rt,
      patchRoutes: function (e, t) {
        let n = null == s;
        be(e, t, s || h, f, o), n && (h = [...h], ae({}));
      },
      _internalFetchControllers: Q,
      _internalActiveDeferreds: ne,
      _internalSetRoutes: function (e) {
        f = {}, s = g(e, o, void 0, f);
      }
    }, d;
  }
  function _e(e, t, n, r, a, i, o, s) {
    let l, c;
    if (o) {
      l = [];
      for (let e of t) if (l.push(e), e.route.id === o) {
        c = e;
        break;
      }
    } else l = t, c = t[t.length - 1];
    let u = H(a || ".", j(l, i), B(e.pathname, n) || e.pathname, "path" === s);
    if (null == a && (u.search = e.search, u.hash = e.hash), (null == a || "" === a || "." === a) && c) {
      let e = $e(u.search);
      if (c.route.index && !e) u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";else if (!c.route.index && e) {
        let e = new URLSearchParams(u.search),
          t = e.getAll("index");
        e.delete("index"), t.filter(e => e).forEach(t => e.append("index", t));
        let n = e.toString();
        u.search = n ? "?" + n : "";
      }
    }
    return r && "/" !== n && (u.pathname = "/" === u.pathname ? n : W([n, u.pathname])), f(u);
  }
  function me(e, t, n, r) {
    if (!r || !function (e) {
      return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body);
    }(r)) return {
      path: n
    };
    if (r.formMethod && (a = r.formMethod, !ie.has(a.toLowerCase()))) return {
      path: n,
      error: Be(405, {
        method: r.formMethod
      })
    };
    var a;
    let i,
      o,
      s = () => ({
        path: n,
        error: Be(400, {
          type: "invalid-body"
        })
      }),
      l = r.formMethod || "get",
      u = e ? l.toUpperCase() : l.toLowerCase(),
      d = Ue(n);
    if (void 0 !== r.body) {
      if ("text/plain" === r.formEncType) {
        if (!ze(u)) return s();
        let e = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((e, t) => {
          let [n, r] = t;
          return "" + e + n + "=" + r + "\n";
        }, "") : String(r.body);
        return {
          path: n,
          submission: {
            formMethod: u,
            formAction: d,
            formEncType: r.formEncType,
            formData: void 0,
            json: void 0,
            text: e
          }
        };
      }
      if ("application/json" === r.formEncType) {
        if (!ze(u)) return s();
        try {
          let e = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
          return {
            path: n,
            submission: {
              formMethod: u,
              formAction: d,
              formEncType: r.formEncType,
              formData: void 0,
              json: e,
              text: void 0
            }
          };
        } catch (e) {
          return s();
        }
      }
    }
    if (c("function" == typeof FormData, "FormData is not available in this environment"), r.formData) i = ke(r.formData), o = r.formData;else if (r.body instanceof FormData) i = ke(r.body), o = r.body;else if (r.body instanceof URLSearchParams) i = r.body, o = xe(i);else if (null == r.body) i = new URLSearchParams(), o = new FormData();else try {
      i = new URLSearchParams(r.body), o = xe(i);
    } catch (e) {
      return s();
    }
    let p = {
      formMethod: u,
      formAction: d,
      formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
      formData: o,
      json: void 0,
      text: void 0
    };
    if (ze(p.formMethod)) return {
      path: n,
      submission: p
    };
    let _ = h(n);
    return t && _.search && $e(_.search) && i.append("index", ""), _.search = "?" + i, {
      path: f(_),
      submission: p
    };
  }
  function Ae(e, t, n) {
    void 0 === n && (n = !1);
    let r = e.findIndex(e => e.route.id === t);
    return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
  }
  function ge(e, t, n, a, i, o, s, l, c, u, d, p, f, h, _, m) {
    let A = m ? He(m[1]) ? m[1].error : m[1].data : void 0,
      g = e.createURL(t.location),
      v = e.createURL(i),
      E = n;
    o && t.errors ? E = Ae(n, Object.keys(t.errors)[0], !0) : m && He(m[1]) && (E = Ae(n, m[0]));
    let b = m ? m[1].statusCode : void 0,
      w = s && b && b >= 400,
      C = E.filter((e, n) => {
        let {
          route: i
        } = e;
        if (i.lazy) return !0;
        if (null == i.loader) return !1;
        if (o) return ye(i, t.loaderData, t.errors);
        if (function (e, t, n) {
          let r = !t || n.route.id !== t.route.id,
            a = void 0 === e[n.route.id];
          return r || a;
        }(t.loaderData, t.matches[n], e) || c.some(t => t === e.route.id)) return !0;
        let s = t.matches[n],
          u = e;
        return Ee(e, r({
          currentUrl: g,
          currentParams: s.params,
          nextUrl: v,
          nextParams: u.params
        }, a, {
          actionResult: A,
          actionStatus: b,
          defaultShouldRevalidate: !w && (l || g.pathname + g.search === v.pathname + v.search || g.search !== v.search || ve(s, u))
        }));
      }),
      O = [];
    return p.forEach((e, i) => {
      if (o || !n.some(t => t.route.id === e.routeId) || d.has(i)) return;
      let s = y(h, e.path, _);
      if (!s) return void O.push({
        key: i,
        routeId: e.routeId,
        path: e.path,
        matches: null,
        match: null,
        controller: null
      });
      let c = t.fetchers.get(i),
        p = qe(s, e.path),
        m = !1;
      f.has(i) ? m = !1 : u.has(i) ? (u.delete(i), m = !0) : m = c && "idle" !== c.state && void 0 === c.data ? l : Ee(p, r({
        currentUrl: g,
        currentParams: t.matches[t.matches.length - 1].params,
        nextUrl: v,
        nextParams: n[n.length - 1].params
      }, a, {
        actionResult: A,
        actionStatus: b,
        defaultShouldRevalidate: !w && l
      })), m && O.push({
        key: i,
        routeId: e.routeId,
        path: e.path,
        matches: s,
        match: p,
        controller: new AbortController()
      });
    }), [C, O];
  }
  function ye(e, t, n) {
    if (e.lazy) return !0;
    if (!e.loader) return !1;
    let r = null != t && void 0 !== t[e.id],
      a = null != n && void 0 !== n[e.id];
    return !(!r && a) && ("function" == typeof e.loader && !0 === e.loader.hydrate || !r && !a);
  }
  function ve(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"];
  }
  function Ee(e, t) {
    if (e.route.shouldRevalidate) {
      let n = e.route.shouldRevalidate(t);
      if ("boolean" == typeof n) return n;
    }
    return t.defaultShouldRevalidate;
  }
  function be(e, t, n, r, a) {
    var i;
    let o;
    if (e) {
      let t = r[e];
      c(t, "No route found to patch children into: routeId = " + e), t.children || (t.children = []), o = t.children;
    } else o = n;
    let s = g(t.filter(e => !o.some(t => we(e, t))), a, [e || "_", "patch", String((null == (i = o) ? void 0 : i.length) || "0")], r);
    o.push(...s);
  }
  function we(e, t) {
    return "id" in e && "id" in t && e.id === t.id || e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive && (!(e.children && 0 !== e.children.length || t.children && 0 !== t.children.length) || e.children.every((e, n) => {
      var r;
      return null == (r = t.children) ? void 0 : r.some(t => we(e, t));
    }));
  }
  async function Ce(e) {
    let {
        matches: t
      } = e,
      n = t.filter(e => e.shouldLoad);
    return (await Promise.all(n.map(e => e.resolve()))).reduce((e, t, r) => Object.assign(e, {
      [n[r].route.id]: t
    }), {});
  }
  async function Oe(e) {
    let {
      result: t,
      type: n
    } = e;
    if (Ve(t)) {
      let e;
      try {
        let n = t.headers.get("Content-Type");
        e = n && /\bapplication\/json\b/.test(n) ? null == t.body ? null : await t.json() : await t.text();
      } catch (e) {
        return {
          type: m.error,
          error: e
        };
      }
      return n === m.error ? {
        type: m.error,
        error: new ee(t.status, t.statusText, e),
        statusCode: t.status,
        headers: t.headers
      } : {
        type: m.data,
        data: e,
        statusCode: t.status,
        headers: t.headers
      };
    }
    var r, a, i, o, s, l, c, u;
    return n === m.error ? Ke(t) ? t.data instanceof Error ? {
      type: m.error,
      error: t.data,
      statusCode: null == (i = t.init) ? void 0 : i.status,
      headers: null != (o = t.init) && o.headers ? new Headers(t.init.headers) : void 0
    } : {
      type: m.error,
      error: new ee((null == (r = t.init) ? void 0 : r.status) || 500, void 0, t.data),
      statusCode: te(t) ? t.status : void 0,
      headers: null != (a = t.init) && a.headers ? new Headers(t.init.headers) : void 0
    } : {
      type: m.error,
      error: t,
      statusCode: te(t) ? t.status : void 0
    } : function (e) {
      let t = e;
      return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData;
    }(t) ? {
      type: m.deferred,
      deferredData: t,
      statusCode: null == (s = t.init) ? void 0 : s.status,
      headers: (null == (l = t.init) ? void 0 : l.headers) && new Headers(t.init.headers)
    } : Ke(t) ? {
      type: m.data,
      data: t.data,
      statusCode: null == (c = t.init) ? void 0 : c.status,
      headers: null != (u = t.init) && u.headers ? new Headers(t.init.headers) : void 0
    } : {
      type: m.data,
      data: t
    };
  }
  function Me(e, t, n, r, a, i) {
    let o = e.headers.get("Location");
    if (c(o, "Redirects returned/thrown from loaders/actions must have a Location header"), !de.test(o)) {
      let s = r.slice(0, r.findIndex(e => e.route.id === n) + 1);
      o = _e(new URL(t.url), s, a, !0, o, i), e.headers.set("Location", o);
    }
    return e;
  }
  function Se(e, t, n) {
    if (de.test(e)) {
      let r = e,
        a = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
        i = null != B(a.pathname, n);
      if (a.origin === t.origin && i) return a.pathname + a.search + a.hash;
    }
    return e;
  }
  function Te(e, t, n, r) {
    let a = e.createURL(Ue(t)).toString(),
      i = {
        signal: n
      };
    if (r && ze(r.formMethod)) {
      let {
        formMethod: e,
        formEncType: t
      } = r;
      i.method = e.toUpperCase(), "application/json" === t ? (i.headers = new Headers({
        "Content-Type": t
      }), i.body = JSON.stringify(r.json)) : "text/plain" === t ? i.body = r.text : "application/x-www-form-urlencoded" === t && r.formData ? i.body = ke(r.formData) : i.body = r.formData;
    }
    return new Request(a, i);
  }
  function ke(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries()) t.append(n, "string" == typeof r ? r : r.name);
    return t;
  }
  function xe(e) {
    let t = new FormData();
    for (let [n, r] of e.entries()) t.append(n, r);
    return t;
  }
  function De(e, t, n, a, i, o, s) {
    let {
      loaderData: l,
      errors: u
    } = function (e, t, n, r, a) {
      let i,
        o = {},
        s = null,
        l = !1,
        u = {},
        d = n && He(n[1]) ? n[1].error : void 0;
      return e.forEach(n => {
        if (!(n.route.id in t)) return;
        let p = n.route.id,
          f = t[p];
        if (c(!We(f), "Cannot handle redirect results in processLoaderData"), He(f)) {
          let t = f.error;
          if (void 0 !== d && (t = d, d = void 0), s = s || {}, a) s[p] = t;else {
            let n = Le(e, p);
            null == s[n.route.id] && (s[n.route.id] = t);
          }
          o[p] = void 0, l || (l = !0, i = te(f.error) ? f.error.status : 500), f.headers && (u[p] = f.headers);
        } else je(f) ? (r.set(p, f.deferredData), o[p] = f.deferredData.data, null == f.statusCode || 200 === f.statusCode || l || (i = f.statusCode), f.headers && (u[p] = f.headers)) : (o[p] = f.data, f.statusCode && 200 !== f.statusCode && !l && (i = f.statusCode), f.headers && (u[p] = f.headers));
      }), void 0 !== d && n && (s = {
        [n[0]]: d
      }, o[n[0]] = void 0), {
        loaderData: o,
        errors: s,
        statusCode: i || 200,
        loaderHeaders: u
      };
    }(t, n, a, s, !1);
    return i.forEach(t => {
      let {
          key: n,
          match: a,
          controller: i
        } = t,
        s = o[n];
      if (c(s, "Did not find corresponding fetcher result"), !i || !i.signal.aborted) if (He(s)) {
        let t = Le(e.matches, null == a ? void 0 : a.route.id);
        u && u[t.route.id] || (u = r({}, u, {
          [t.route.id]: s.error
        })), e.fetchers.delete(n);
      } else if (We(s)) c(!1, "Unhandled fetcher revalidation redirect");else if (je(s)) c(!1, "Unhandled fetcher deferred data");else {
        let t = et(s.data);
        e.fetchers.set(n, t);
      }
    }), {
      loaderData: l,
      errors: u
    };
  }
  function Ie(e, t, n, a) {
    let i = r({}, t);
    for (let r of n) {
      let n = r.route.id;
      if (t.hasOwnProperty(n) ? void 0 !== t[n] && (i[n] = t[n]) : void 0 !== e[n] && r.route.loader && (i[n] = e[n]), a && a.hasOwnProperty(n)) break;
    }
    return i;
  }
  function Pe(e) {
    return e ? He(e[1]) ? {
      actionData: {}
    } : {
      actionData: {
        [e[0]]: e[1].data
      }
    } : {};
  }
  function Le(e, t) {
    return (t ? e.slice(0, e.findIndex(e => e.route.id === t) + 1) : [...e]).reverse().find(e => !0 === e.route.hasErrorBoundary) || e[0];
  }
  function Re(e) {
    let t = 1 === e.length ? e[0] : e.find(e => e.index || !e.path || "/" === e.path) || {
      id: "__shim-error-route__"
    };
    return {
      matches: [{
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }],
      route: t
    };
  }
  function Be(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: a,
        type: i,
        message: o
      } = void 0 === t ? {} : t,
      s = "Unknown Server Error",
      l = "Unknown @remix-run/router error";
    return 400 === e ? (s = "Bad Request", a && n && r ? l = "You made a " + a + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === i ? l = "defer() is not supported in actions" : "invalid-body" === i && (l = "Unable to encode submission body")) : 403 === e ? (s = "Forbidden", l = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (s = "Not Found", l = 'No route matches URL "' + n + '"') : 405 === e && (s = "Method Not Allowed", a && n && r ? l = "You made a " + a.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')), new ee(e || 500, s, new Error(l), !0);
  }
  function Ne(e) {
    let t = Object.entries(e);
    for (let e = t.length - 1; e >= 0; e--) {
      let [n, r] = t[e];
      if (We(r)) return {
        key: n,
        result: r
      };
    }
  }
  function Ue(e) {
    return f(r({}, "string" == typeof e ? h(e) : e, {
      hash: ""
    }));
  }
  function Fe(e) {
    return Ve(e.result) && oe.has(e.result.status);
  }
  function je(e) {
    return e.type === m.deferred;
  }
  function He(e) {
    return e.type === m.error;
  }
  function We(e) {
    return (e && e.type) === m.redirect;
  }
  function Ke(e) {
    return "object" == typeof e && null != e && "type" in e && "data" in e && "init" in e && "DataWithResponseInit" === e.type;
  }
  function Ve(e) {
    return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "object" == typeof e.headers && void 0 !== e.body;
  }
  function ze(e) {
    return re.has(e.toLowerCase());
  }
  async function Ye(e, t, n, r, a) {
    let i = Object.entries(t);
    for (let o = 0; o < i.length; o++) {
      let [s, l] = i[o],
        c = e.find(e => (null == e ? void 0 : e.route.id) === s);
      if (!c) continue;
      let u = r.find(e => e.route.id === c.route.id),
        d = null != u && !ve(u, c) && void 0 !== (a && a[c.route.id]);
      je(l) && d && (await Ge(l, n, !1).then(e => {
        e && (t[s] = e);
      }));
    }
  }
  async function Qe(e, t, n) {
    for (let r = 0; r < n.length; r++) {
      let {
          key: a,
          routeId: i,
          controller: o
        } = n[r],
        s = t[a];
      e.find(e => (null == e ? void 0 : e.route.id) === i) && je(s) && (c(o, "Expected an AbortController for revalidating fetcher deferred result"), await Ge(s, o.signal, !0).then(e => {
        e && (t[a] = e);
      }));
    }
  }
  async function Ge(e, t, n) {
    if (void 0 === n && (n = !1), !(await e.deferredData.resolveData(t))) {
      if (n) try {
        return {
          type: m.data,
          data: e.deferredData.unwrappedData
        };
      } catch (e) {
        return {
          type: m.error,
          error: e
        };
      }
      return {
        type: m.data,
        data: e.deferredData.data
      };
    }
  }
  function $e(e) {
    return new URLSearchParams(e).getAll("index").some(e => "" === e);
  }
  function qe(e, t) {
    let n = "string" == typeof t ? h(t).search : t.search;
    if (e[e.length - 1].route.index && $e(n || "")) return e[e.length - 1];
    let r = F(e);
    return r[r.length - 1];
  }
  function Ze(e) {
    let {
      formMethod: t,
      formAction: n,
      formEncType: r,
      text: a,
      formData: i,
      json: o
    } = e;
    if (t && n && r) return null != a ? {
      formMethod: t,
      formAction: n,
      formEncType: r,
      formData: void 0,
      json: void 0,
      text: a
    } : null != i ? {
      formMethod: t,
      formAction: n,
      formEncType: r,
      formData: i,
      json: void 0,
      text: void 0
    } : void 0 !== o ? {
      formMethod: t,
      formAction: n,
      formEncType: r,
      formData: void 0,
      json: o,
      text: void 0
    } : void 0;
  }
  function Xe(e, t) {
    return t ? {
      state: "loading",
      location: e,
      formMethod: t.formMethod,
      formAction: t.formAction,
      formEncType: t.formEncType,
      formData: t.formData,
      json: t.json,
      text: t.text
    } : {
      state: "loading",
      location: e,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
  }
  function Je(e, t) {
    return e ? {
      state: "loading",
      formMethod: e.formMethod,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formData: e.formData,
      json: e.json,
      text: e.text,
      data: t
    } : {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: t
    };
  }
  function et(e) {
    return {
      state: "idle",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: e
    };
  }
  Symbol("deferred");
});
