// Reconstructed Webpack factory 56757; arguments retain original semantics.
((e, t, n) => {
  var r = n(91033),
    a = Math.max;
  e.exports = function (e, t, n) {
    return t = a(void 0 === t ? e.length - 1 : t, 0), function () {
      for (var i = arguments, o = -1, s = a(i.length - t, 0), l = Array(s); ++o < s;) l[o] = i[t + o];
      o = -1;
      for (var c = Array(t + 1); ++o < t;) c[o] = i[o];
      return c[t] = n(l), r(e, this, c);
    };
  };
});
