// Reconstructed Webpack factory 21791; arguments retain original semantics.
((e, t, n) => {
  var r = n(16547),
    a = n(43360);
  e.exports = function (e, t, n, i) {
    var o = !n;
    n || (n = {});
    for (var s = -1, l = t.length; ++s < l;) {
      var c = t[s],
        u = i ? i(n[c], e[c], c, n, e) : void 0;
      void 0 === u && (u = e[c]), o ? a(n, c, u) : r(n, c, u);
    }
    return n;
  };
});
