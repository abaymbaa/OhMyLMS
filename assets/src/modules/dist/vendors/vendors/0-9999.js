// Reconstructed Webpack factory 9999; arguments retain original semantics.
((e, t, n) => {
  var r = n(37217),
    a = n(83729),
    i = n(16547),
    o = n(74733),
    s = n(43838),
    l = n(93290),
    c = n(23007),
    u = n(92271),
    d = n(48948),
    p = n(50002),
    f = n(83349),
    h = n(5861),
    _ = n(76189),
    m = n(77199),
    A = n(35529),
    g = n(56449),
    y = n(3656),
    v = n(87730),
    E = n(23805),
    b = n(38440),
    w = n(95950),
    C = n(37241),
    O = "[object Arguments]",
    M = "[object Function]",
    S = "[object Object]",
    T = {};
  T[O] = T["[object Array]"] = T["[object ArrayBuffer]"] = T["[object DataView]"] = T["[object Boolean]"] = T["[object Date]"] = T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Map]"] = T["[object Number]"] = T[S] = T["[object RegExp]"] = T["[object Set]"] = T["[object String]"] = T["[object Symbol]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T["[object Error]"] = T[M] = T["[object WeakMap]"] = !1, e.exports = function e(t, n, k, x, D, I) {
    var P,
      L = 1 & n,
      R = 2 & n,
      B = 4 & n;
    if (k && (P = D ? k(t, x, D, I) : k(t)), void 0 !== P) return P;
    if (!E(t)) return t;
    var N = g(t);
    if (N) {
      if (P = _(t), !L) return c(t, P);
    } else {
      var U = h(t),
        F = U == M || "[object GeneratorFunction]" == U;
      if (y(t)) return l(t, L);
      if (U == S || U == O || F && !D) {
        if (P = R || F ? {} : A(t), !L) return R ? d(t, s(P, t)) : u(t, o(P, t));
      } else {
        if (!T[U]) return D ? t : {};
        P = m(t, U, L);
      }
    }
    I || (I = new r());
    var j = I.get(t);
    if (j) return j;
    I.set(t, P), b(t) ? t.forEach(function (r) {
      P.add(e(r, n, k, r, t, I));
    }) : v(t) && t.forEach(function (r, a) {
      P.set(a, e(r, n, k, a, t, I));
    });
    var H = N ? void 0 : (B ? R ? f : p : R ? C : w)(t);
    return a(H || t, function (r, a) {
      H && (r = t[a = r]), i(P, a, e(r, n, k, a, t, I));
    }), P;
  };
});
