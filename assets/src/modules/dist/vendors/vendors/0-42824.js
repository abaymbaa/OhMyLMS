// Reconstructed Webpack factory 42824; arguments retain original semantics.
((e, t, n) => {
  var r = n(87805),
    a = n(93290),
    i = n(71961),
    o = n(23007),
    s = n(35529),
    l = n(72428),
    c = n(56449),
    u = n(83693),
    d = n(3656),
    p = n(1882),
    f = n(23805),
    h = n(11331),
    _ = n(37167),
    m = n(14974),
    A = n(69884);
  e.exports = function (e, t, n, g, y, v, E) {
    var b = m(e, n),
      w = m(t, n),
      C = E.get(w);
    if (C) r(e, n, C);else {
      var O = v ? v(b, w, n + "", e, t, E) : void 0,
        M = void 0 === O;
      if (M) {
        var S = c(w),
          T = !S && d(w),
          k = !S && !T && _(w);
        O = w, S || T || k ? c(b) ? O = b : u(b) ? O = o(b) : T ? (M = !1, O = a(w, !0)) : k ? (M = !1, O = i(w, !0)) : O = [] : h(w) || l(w) ? (O = b, l(b) ? O = A(b) : f(b) && !p(b) || (O = s(w))) : M = !1;
      }
      M && (E.set(w, O), y(O, w, g, v, E), E.delete(w)), r(e, n, O);
    }
  };
});
