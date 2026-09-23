// Reconstructed Webpack factory 9042; arguments retain original semantics.
((e, t) => {
  "use strict";

  function n(e, t, n, r) {
    switch (e) {
      case 0:
        return t & n ^ ~t & r;
      case 1:
      case 3:
        return t ^ n ^ r;
      case 2:
        return t & n ^ t & r ^ n & r;
    }
  }
  function r(e, t) {
    return e << t | e >>> 32 - t;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0, t.default = function (e) {
    var t = [1518500249, 1859775393, 2400959708, 3395469782],
      a = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if ("string" == typeof e) {
      var i = unescape(encodeURIComponent(e));
      e = [];
      for (var o = 0; o < i.length; ++o) e.push(i.charCodeAt(o));
    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
    e.push(128);
    for (var s = e.length / 4 + 2, l = Math.ceil(s / 16), c = new Array(l), u = 0; u < l; ++u) {
      for (var d = new Uint32Array(16), p = 0; p < 16; ++p) d[p] = e[64 * u + 4 * p] << 24 | e[64 * u + 4 * p + 1] << 16 | e[64 * u + 4 * p + 2] << 8 | e[64 * u + 4 * p + 3];
      c[u] = d;
    }
    c[l - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), c[l - 1][14] = Math.floor(c[l - 1][14]), c[l - 1][15] = 8 * (e.length - 1) & 4294967295;
    for (var f = 0; f < l; ++f) {
      for (var h = new Uint32Array(80), _ = 0; _ < 16; ++_) h[_] = c[f][_];
      for (var m = 16; m < 80; ++m) h[m] = r(h[m - 3] ^ h[m - 8] ^ h[m - 14] ^ h[m - 16], 1);
      for (var A = a[0], g = a[1], y = a[2], v = a[3], E = a[4], b = 0; b < 80; ++b) {
        var w = Math.floor(b / 20),
          C = r(A, 5) + n(w, g, y, v) + E + t[w] + h[b] >>> 0;
        E = v, v = y, y = r(g, 30) >>> 0, g = A, A = C;
      }
      a[0] = a[0] + A >>> 0, a[1] = a[1] + g >>> 0, a[2] = a[2] + y >>> 0, a[3] = a[3] + v >>> 0, a[4] = a[4] + E >>> 0;
    }
    return [a[0] >> 24 & 255, a[0] >> 16 & 255, a[0] >> 8 & 255, 255 & a[0], a[1] >> 24 & 255, a[1] >> 16 & 255, a[1] >> 8 & 255, 255 & a[1], a[2] >> 24 & 255, a[2] >> 16 & 255, a[2] >> 8 & 255, 255 & a[2], a[3] >> 24 & 255, a[3] >> 16 & 255, a[3] >> 8 & 255, 255 & a[3], a[4] >> 24 & 255, a[4] >> 16 & 255, a[4] >> 8 & 255, 255 & a[4]];
  };
});
