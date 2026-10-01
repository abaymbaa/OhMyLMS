// Reconstructed Webpack factory 28586; arguments retain original semantics.
((e, t, n) => {
  var r = n(56449),
    a = n(44394),
    i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
  e.exports = function (e, t) {
    if (r(e)) return !1;
    var n = typeof e;
    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !a(e)) || o.test(e) || !i.test(e) || null != t && e in Object(t);
  };
});
