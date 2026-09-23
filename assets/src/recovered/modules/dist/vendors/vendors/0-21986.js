// Reconstructed Webpack factory 21986; arguments retain original semantics.
((e, t, n) => {
  var r = n(51873),
    a = n(37828),
    i = n(75288),
    o = n(25911),
    s = n(20317),
    l = n(84247),
    c = r ? r.prototype : void 0,
    u = c ? c.valueOf : void 0;
  e.exports = function (e, t, n, r, c, d, p) {
    switch (n) {
      case "[object DataView]":
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        e = e.buffer, t = t.buffer;
      case "[object ArrayBuffer]":
        return !(e.byteLength != t.byteLength || !d(new a(e), new a(t)));
      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return i(+e, +t);
      case "[object Error]":
        return e.name == t.name && e.message == t.message;
      case "[object RegExp]":
      case "[object String]":
        return e == t + "";
      case "[object Map]":
        var f = s;
      case "[object Set]":
        var h = 1 & r;
        if (f || (f = l), e.size != t.size && !h) return !1;
        var _ = p.get(e);
        if (_) return _ == t;
        r |= 2, p.set(e, t);
        var m = o(f(e), f(t), r, c, d, p);
        return p.delete(e), m;
      case "[object Symbol]":
        if (u) return u.call(e) == u.call(t);
    }
    return !1;
  };
});
