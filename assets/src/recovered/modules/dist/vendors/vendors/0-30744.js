// Reconstructed Webpack factory 30744; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r,
    a = (r = n(2858)) && r.__esModule ? r : {
      default: r
    },
    i = n(49910),
    o = null,
    s = null,
    l = 0;
  t.default = function (e, t, n) {
    e = e || {};
    var r = t && n || 0,
      c = t || new Uint8Array(16),
      u = e.random || (e.rng || a.default)(),
      d = void 0 !== e.msecs ? e.msecs : Date.now(),
      p = void 0 !== e.seq ? e.seq : null,
      f = s,
      h = o;
    return d > l && void 0 === e.msecs && (l = d, null !== p && (f = null, h = null)), null !== p && (p > 2147483647 && (p = 2147483647), f = p >>> 19 & 4095, h = 524287 & p), null !== f && null !== h || (f = (f = 127 & u[6]) << 8 | u[7], h = (h = (h = 63 & u[8]) << 8 | u[9]) << 5 | u[10] >>> 3), d + 1e4 > l && null === p ? ++h > 524287 && (h = 0, ++f > 4095 && (f = 0, l++)) : l = d, s = f, o = h, c[r++] = l / 1099511627776 & 255, c[r++] = l / 4294967296 & 255, c[r++] = l / 16777216 & 255, c[r++] = l / 65536 & 255, c[r++] = l / 256 & 255, c[r++] = 255 & l, c[r++] = f >>> 4 & 15 | 112, c[r++] = 255 & f, c[r++] = h >>> 13 & 63 | 128, c[r++] = h >>> 5 & 255, c[r++] = h << 3 & 255 | 7 & u[10], c[r++] = u[11], c[r++] = u[12], c[r++] = u[13], c[r++] = u[14], c[r++] = u[15], t || (0, i.unsafeStringify)(c);
  };
});
