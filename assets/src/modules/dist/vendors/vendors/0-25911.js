// Reconstructed Webpack factory 25911; arguments retain original semantics.
((e, t, n) => {
  var r = n(38859),
    a = n(14248),
    i = n(19219);
  e.exports = function (e, t, n, o, s, l) {
    var c = 1 & n,
      u = e.length,
      d = t.length;
    if (u != d && !(c && d > u)) return !1;
    var p = l.get(e),
      f = l.get(t);
    if (p && f) return p == t && f == e;
    var h = -1,
      _ = !0,
      m = 2 & n ? new r() : void 0;
    for (l.set(e, t), l.set(t, e); ++h < u;) {
      var A = e[h],
        g = t[h];
      if (o) var y = c ? o(g, A, h, t, e, l) : o(A, g, h, e, t, l);
      if (void 0 !== y) {
        if (y) continue;
        _ = !1;
        break;
      }
      if (m) {
        if (!a(t, function (e, t) {
          if (!i(m, t) && (A === e || s(A, e, n, o, l))) return m.push(t);
        })) {
          _ = !1;
          break;
        }
      } else if (A !== g && !s(A, g, n, o, l)) {
        _ = !1;
        break;
      }
    }
    return l.delete(e), l.delete(t), _;
  };
});
