// Reconstructed Webpack factory 49326; arguments retain original semantics.
((e, t, n) => {
  var r = n(31769),
    a = n(72428),
    i = n(56449),
    o = n(30361),
    s = n(30294),
    l = n(77797);
  e.exports = function (e, t, n) {
    for (var c = -1, u = (t = r(t, e)).length, d = !1; ++c < u;) {
      var p = l(t[c]);
      if (!(d = null != e && n(e, p))) break;
      e = e[p];
    }
    return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && o(p, u) && (i(e) || a(e));
  };
});
