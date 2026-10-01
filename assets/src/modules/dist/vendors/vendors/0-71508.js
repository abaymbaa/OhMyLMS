// Reconstructed Webpack factory 71508; arguments retain original semantics.
(e => {
  function t(e) {
    var n,
      r,
      a = "";
    if ("string" == typeof e || "number" == typeof e) a += e;else if ("object" == typeof e) if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (r = t(e[n])) && (a && (a += " "), a += r);
    } else for (r in e) e[r] && (a && (a += " "), a += r);
    return a;
  }
  function n() {
    for (var e, n, r = 0, a = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (n = t(e)) && (a && (a += " "), a += n);
    return a;
  }
  e.exports = n, e.exports.clsx = n;
});
