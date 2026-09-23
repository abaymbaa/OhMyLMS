// Reconstructed Webpack factory 33829; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => c
  });
  const r = {
    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  var a,
    i = new Uint8Array(16);
  function o() {
    if (!a && !(a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return a(i);
  }
  for (var s = [], l = 0; l < 256; ++l) s.push((l + 256).toString(16).slice(1));
  const c = function (e, t, n) {
    if (r.randomUUID && !t && !e) return r.randomUUID();
    var a = (e = e || {}).random || (e.rng || o)();
    if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) {
      n = n || 0;
      for (var i = 0; i < 16; ++i) t[n + i] = a[i];
      return t;
    }
    return function (e, t = 0) {
      return (s[e[t + 0]] + s[e[t + 1]] + s[e[t + 2]] + s[e[t + 3]] + "-" + s[e[t + 4]] + s[e[t + 5]] + "-" + s[e[t + 6]] + s[e[t + 7]] + "-" + s[e[t + 8]] + s[e[t + 9]] + "-" + s[e[t + 10]] + s[e[t + 11]] + s[e[t + 12]] + s[e[t + 13]] + s[e[t + 14]] + s[e[t + 15]]).toLowerCase();
    }(a);
  };
});
