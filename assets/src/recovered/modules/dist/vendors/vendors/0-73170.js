// Reconstructed Webpack factory 73170; arguments retain original semantics.
((e, t, n) => {
  var r = n(16547),
    a = n(31769),
    i = n(30361),
    o = n(23805),
    s = n(77797);
  e.exports = function (e, t, n, l) {
    if (!o(e)) return e;
    for (var c = -1, u = (t = a(t, e)).length, d = u - 1, p = e; null != p && ++c < u;) {
      var f = s(t[c]),
        h = n;
      if ("__proto__" === f || "constructor" === f || "prototype" === f) return e;
      if (c != d) {
        var _ = p[f];
        void 0 === (h = l ? l(_, f, p) : void 0) && (h = o(_) ? _ : i(t[c + 1]) ? [] : {});
      }
      r(p, f, h), p = p[f];
    }
    return e;
  };
});
