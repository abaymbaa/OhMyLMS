// Reconstructed Webpack factory 50104; arguments retain original semantics.
((e, t, n) => {
  var r = n(53661);
  function a(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
    var n = function () {
      var r = arguments,
        a = t ? t.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(a)) return i.get(a);
      var o = e.apply(this, r);
      return n.cache = i.set(a, o) || i, o;
    };
    return n.cache = new (a.Cache || r)(), n;
  }
  a.Cache = r, e.exports = a;
});
