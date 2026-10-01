// Reconstructed Webpack factory 87068; arguments retain original semantics.
((e, t, n) => {
  var r = n(37217),
    a = n(25911),
    i = n(21986),
    o = n(50689),
    s = n(5861),
    l = n(56449),
    c = n(3656),
    u = n(37167),
    d = "[object Arguments]",
    p = "[object Array]",
    f = "[object Object]",
    h = Object.prototype.hasOwnProperty;
  e.exports = function (e, t, n, _, m, A) {
    var g = l(e),
      y = l(t),
      v = g ? p : s(e),
      E = y ? p : s(t),
      b = (v = v == d ? f : v) == f,
      w = (E = E == d ? f : E) == f,
      C = v == E;
    if (C && c(e)) {
      if (!c(t)) return !1;
      g = !0, b = !1;
    }
    if (C && !b) return A || (A = new r()), g || u(e) ? a(e, t, n, _, m, A) : i(e, t, v, n, _, m, A);
    if (!(1 & n)) {
      var O = b && h.call(e, "__wrapped__"),
        M = w && h.call(t, "__wrapped__");
      if (O || M) {
        var S = O ? e.value() : e,
          T = M ? t.value() : t;
        return A || (A = new r()), m(S, T, n, _, A);
      }
    }
    return !!C && (A || (A = new r()), o(e, t, n, _, m, A));
  };
});
