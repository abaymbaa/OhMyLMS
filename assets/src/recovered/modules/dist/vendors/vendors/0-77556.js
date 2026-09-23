// Reconstructed Webpack factory 77556; arguments retain original semantics.
((e, t, n) => {
  var r = n(51873),
    a = n(34932),
    i = n(56449),
    o = n(44394),
    s = r ? r.prototype : void 0,
    l = s ? s.toString : void 0;
  e.exports = function e(t) {
    if ("string" == typeof t) return t;
    if (i(t)) return a(t, e) + "";
    if (o(t)) return l ? l.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
  };
});
