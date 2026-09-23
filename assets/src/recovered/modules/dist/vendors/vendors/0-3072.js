// Reconstructed Webpack factory 3072; arguments retain original semantics.
((e, t) => {
  "use strict";

  var n = "function" == typeof Symbol && Symbol.for,
    r = n ? Symbol.for("react.element") : 60103,
    a = n ? Symbol.for("react.portal") : 60106,
    i = n ? Symbol.for("react.fragment") : 60107,
    o = n ? Symbol.for("react.strict_mode") : 60108,
    s = n ? Symbol.for("react.profiler") : 60114,
    l = n ? Symbol.for("react.provider") : 60109,
    c = n ? Symbol.for("react.context") : 60110,
    u = n ? Symbol.for("react.async_mode") : 60111,
    d = n ? Symbol.for("react.concurrent_mode") : 60111,
    p = n ? Symbol.for("react.forward_ref") : 60112,
    f = n ? Symbol.for("react.suspense") : 60113,
    h = n ? Symbol.for("react.suspense_list") : 60120,
    _ = n ? Symbol.for("react.memo") : 60115,
    m = n ? Symbol.for("react.lazy") : 60116,
    A = n ? Symbol.for("react.block") : 60121,
    g = n ? Symbol.for("react.fundamental") : 60117,
    y = n ? Symbol.for("react.responder") : 60118,
    v = n ? Symbol.for("react.scope") : 60119;
  function E(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case r:
          switch (e = e.type) {
            case u:
            case d:
            case i:
            case s:
            case o:
            case f:
              return e;
            default:
              switch (e = e && e.$$typeof) {
                case c:
                case p:
                case m:
                case _:
                case l:
                  return e;
                default:
                  return t;
              }
          }
        case a:
          return t;
      }
    }
  }
  function b(e) {
    return E(e) === d;
  }
  t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = p, t.Fragment = i, t.Lazy = m, t.Memo = _, t.Portal = a, t.Profiler = s, t.StrictMode = o, t.Suspense = f, t.isAsyncMode = function (e) {
    return b(e) || E(e) === u;
  }, t.isConcurrentMode = b, t.isContextConsumer = function (e) {
    return E(e) === c;
  }, t.isContextProvider = function (e) {
    return E(e) === l;
  }, t.isElement = function (e) {
    return "object" == typeof e && null !== e && e.$$typeof === r;
  }, t.isForwardRef = function (e) {
    return E(e) === p;
  }, t.isFragment = function (e) {
    return E(e) === i;
  }, t.isLazy = function (e) {
    return E(e) === m;
  }, t.isMemo = function (e) {
    return E(e) === _;
  }, t.isPortal = function (e) {
    return E(e) === a;
  }, t.isProfiler = function (e) {
    return E(e) === s;
  }, t.isStrictMode = function (e) {
    return E(e) === o;
  }, t.isSuspense = function (e) {
    return E(e) === f;
  }, t.isValidElementType = function (e) {
    return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === o || e === f || e === h || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === g || e.$$typeof === y || e.$$typeof === v || e.$$typeof === A);
  }, t.typeOf = E;
});
