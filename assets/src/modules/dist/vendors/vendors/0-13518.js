// Reconstructed Webpack factory 13518; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r,
    a,
    i,
    o = (r = n(2858)) && r.__esModule ? r : {
      default: r
    },
    s = n(49910),
    l = 0,
    c = 0;
  t.default = function (e, t, n) {
    var r = t && n || 0,
      u = t || new Array(16),
      d = (e = e || {}).node,
      p = e.clockseq;
    if (e._v6 || (d || (d = a), null == p && (p = i)), null == d || null == p) {
      var f = e.random || (e.rng || o.default)();
      null == d && (d = [f[0], f[1], f[2], f[3], f[4], f[5]], a || e._v6 || (d[0] |= 1, a = d)), null == p && (p = 16383 & (f[6] << 8 | f[7]), void 0 !== i || e._v6 || (i = p));
    }
    var h = void 0 !== e.msecs ? e.msecs : Date.now(),
      _ = void 0 !== e.nsecs ? e.nsecs : c + 1,
      m = h - l + (_ - c) / 1e4;
    if (m < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (m < 0 || h > l) && void 0 === e.nsecs && (_ = 0), _ >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    l = h, c = _, i = p;
    var A = (1e4 * (268435455 & (h += 122192928e5)) + _) % 4294967296;
    u[r++] = A >>> 24 & 255, u[r++] = A >>> 16 & 255, u[r++] = A >>> 8 & 255, u[r++] = 255 & A;
    var g = h / 4294967296 * 1e4 & 268435455;
    u[r++] = g >>> 8 & 255, u[r++] = 255 & g, u[r++] = g >>> 24 & 15 | 16, u[r++] = g >>> 16 & 255, u[r++] = p >>> 8 | 128, u[r++] = 255 & p;
    for (var y = 0; y < 6; ++y) u[r + y] = d[y];
    return t || (0, s.unsafeStringify)(u);
  };
});
