// Reconstructed Webpack factory 99374; arguments retain original semantics.
((e, t, n) => {
  var r = n(54128),
    a = n(23805),
    i = n(44394),
    o = /^[-+]0x[0-9a-f]+$/i,
    s = /^0b[01]+$/i,
    l = /^0o[0-7]+$/i,
    c = parseInt;
  e.exports = function (e) {
    if ("number" == typeof e) return e;
    if (i(e)) return NaN;
    if (a(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = a(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = r(e);
    var n = s.test(e);
    return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e;
  };
});
