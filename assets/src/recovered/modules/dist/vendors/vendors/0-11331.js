// Reconstructed Webpack factory 11331; arguments retain original semantics.
((e, t, n) => {
  var r = n(72552),
    a = n(28879),
    i = n(40346),
    o = Function.prototype,
    s = Object.prototype,
    l = o.toString,
    c = s.hasOwnProperty,
    u = l.call(Object);
  e.exports = function (e) {
    if (!i(e) || "[object Object]" != r(e)) return !1;
    var t = a(e);
    if (null === t) return !0;
    var n = c.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && l.call(n) == u;
  };
});
