// Reconstructed Webpack factory 21020; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r = n(41594),
    a = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    l = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function c(e, t, n) {
    var r,
      i = {},
      c = null,
      u = null;
    for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) o.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
    return {
      $$typeof: a,
      type: e,
      key: c,
      ref: u,
      props: i,
      _owner: s.current
    };
  }
  t.Fragment = i, t.jsx = c, t.jsxs = c;
});
