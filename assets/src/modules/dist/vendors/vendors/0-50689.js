// Reconstructed Webpack factory 50689; arguments retain original semantics.
((e, t, n) => {
  var r = n(50002),
    a = Object.prototype.hasOwnProperty;
  e.exports = function (e, t, n, i, o, s) {
    var l = 1 & n,
      c = r(e),
      u = c.length;
    if (u != r(t).length && !l) return !1;
    for (var d = u; d--;) {
      var p = c[d];
      if (!(l ? p in t : a.call(t, p))) return !1;
    }
    var f = s.get(e),
      h = s.get(t);
    if (f && h) return f == t && h == e;
    var _ = !0;
    s.set(e, t), s.set(t, e);
    for (var m = l; ++d < u;) {
      var A = e[p = c[d]],
        g = t[p];
      if (i) var y = l ? i(g, A, p, t, e, s) : i(A, g, p, e, t, s);
      if (!(void 0 === y ? A === g || o(A, g, n, i, s) : y)) {
        _ = !1;
        break;
      }
      m || (m = "constructor" == p);
    }
    if (_ && !m) {
      var v = e.constructor,
        E = t.constructor;
      v == E || !("constructor" in e) || !("constructor" in t) || "function" == typeof v && v instanceof v && "function" == typeof E && E instanceof E || (_ = !1);
    }
    return s.delete(e), s.delete(t), _;
  };
});
