// Reconstructed Webpack factory 22799; arguments retain original semantics.
((e, t) => {
  "use strict";

  var n = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    s = Symbol.for("react.provider"),
    l = Symbol.for("react.context"),
    c = Symbol.for("react.server_context"),
    u = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    p = Symbol.for("react.suspense_list"),
    f = Symbol.for("react.memo"),
    h = Symbol.for("react.lazy");
  Symbol.for("react.offscreen");
  function _(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case n:
          switch (e = e.type) {
            case a:
            case o:
            case i:
            case d:
            case p:
              return e;
            default:
              switch (e = e && e.$$typeof) {
                case c:
                case l:
                case u:
                case h:
                case f:
                case s:
                  return e;
                default:
                  return t;
              }
          }
        case r:
          return t;
      }
    }
  }
  Symbol.for("react.module.reference"), t.isForwardRef = function (e) {
    return _(e) === u;
  }, t.isFragment = function (e) {
    return _(e) === a;
  };
});
