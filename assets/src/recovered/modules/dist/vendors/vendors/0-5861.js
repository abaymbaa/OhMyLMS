// Reconstructed Webpack factory 5861; arguments retain original semantics.
((e, t, n) => {
  var r = n(55580),
    a = n(68223),
    i = n(32804),
    o = n(76545),
    s = n(28303),
    l = n(72552),
    c = n(47473),
    u = "[object Map]",
    d = "[object Promise]",
    p = "[object Set]",
    f = "[object WeakMap]",
    h = "[object DataView]",
    _ = c(r),
    m = c(a),
    A = c(i),
    g = c(o),
    y = c(s),
    v = l;
  (r && v(new r(new ArrayBuffer(1))) != h || a && v(new a()) != u || i && v(i.resolve()) != d || o && v(new o()) != p || s && v(new s()) != f) && (v = function (e) {
    var t = l(e),
      n = "[object Object]" == t ? e.constructor : void 0,
      r = n ? c(n) : "";
    if (r) switch (r) {
      case _:
        return h;
      case m:
        return u;
      case A:
        return d;
      case g:
        return p;
      case y:
        return f;
    }
    return t;
  }), e.exports = v;
});
