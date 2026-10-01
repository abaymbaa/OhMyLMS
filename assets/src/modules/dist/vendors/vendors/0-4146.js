// Reconstructed Webpack factory 4146; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r = n(73404),
    a = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    },
    i = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    },
    o = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
    s = {};
  function l(e) {
    return r.isMemo(e) ? o : s[e.$$typeof] || a;
  }
  s[r.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s[r.Memo] = o;
  var c = Object.defineProperty,
    u = Object.getOwnPropertyNames,
    d = Object.getOwnPropertySymbols,
    p = Object.getOwnPropertyDescriptor,
    f = Object.getPrototypeOf,
    h = Object.prototype;
  e.exports = function e(t, n, r) {
    if ("string" != typeof n) {
      if (h) {
        var a = f(n);
        a && a !== h && e(t, a, r);
      }
      var o = u(n);
      d && (o = o.concat(d(n)));
      for (var s = l(t), _ = l(n), m = 0; m < o.length; ++m) {
        var A = o[m];
        if (!(i[A] || r && r[A] || _ && _[A] || s && s[A])) {
          var g = p(n, A);
          try {
            c(t, A, g);
          } catch (e) {}
        }
      }
    }
    return t;
  };
});
