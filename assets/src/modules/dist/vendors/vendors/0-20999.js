// Reconstructed Webpack factory 20999; arguments retain original semantics.
((e, t, n) => {
  var r = n(69302),
    a = n(36800);
  e.exports = function (e) {
    return r(function (t, n) {
      var r = -1,
        i = n.length,
        o = i > 1 ? n[i - 1] : void 0,
        s = i > 2 ? n[2] : void 0;
      for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, s && a(n[0], n[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
        var l = n[r];
        l && e(t, l, r, o);
      }
      return t;
    });
  };
});
