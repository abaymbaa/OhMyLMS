// Reconstructed Webpack factory 34164; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r(e) {
    var t,
      n,
      a = "";
    if ("string" == typeof e || "number" == typeof e) a += e;else if ("object" == typeof e) if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = r(e[t])) && (a && (a += " "), a += n);
    } else for (n in e) e[n] && (a && (a += " "), a += n);
    return a;
  }
  n.d(t, {
    A: () => a
  });
  const a = function () {
    for (var e, t, n = 0, a = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = r(e)) && (a && (a += " "), a += t);
    return a;
  };
});
