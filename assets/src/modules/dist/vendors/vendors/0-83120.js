// Reconstructed Webpack factory 83120; arguments retain original semantics.
((e, t, n) => {
  var r = n(14528),
    a = n(45891);
  e.exports = function e(t, n, i, o, s) {
    var l = -1,
      c = t.length;
    for (i || (i = a), s || (s = []); ++l < c;) {
      var u = t[l];
      n > 0 && i(u) ? n > 1 ? e(u, n - 1, i, o, s) : r(s, u) : o || (s[s.length] = u);
    }
    return s;
  };
});
