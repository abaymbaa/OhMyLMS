// Reconstructed Webpack factory 22311; arguments retain original semantics.
((e, t) => {
  "use strict";

  function n(e) {
    return 14 + (e + 64 >>> 9 << 4) + 1;
  }
  function r(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
  }
  function a(e, t, n, a, i, o) {
    return r((s = r(r(t, e), r(a, o))) << (l = i) | s >>> 32 - l, n);
    var s, l;
  }
  function i(e, t, n, r, i, o, s) {
    return a(t & n | ~t & r, e, t, i, o, s);
  }
  function o(e, t, n, r, i, o, s) {
    return a(t & r | n & ~r, e, t, i, o, s);
  }
  function s(e, t, n, r, i, o, s) {
    return a(t ^ n ^ r, e, t, i, o, s);
  }
  function l(e, t, n, r, i, o, s) {
    return a(n ^ (t | ~r), e, t, i, o, s);
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0, t.default = function (e) {
    if ("string" == typeof e) {
      var t = unescape(encodeURIComponent(e));
      e = new Uint8Array(t.length);
      for (var a = 0; a < t.length; ++a) e[a] = t.charCodeAt(a);
    }
    return function (e) {
      for (var t = [], n = 32 * e.length, r = "0123456789abcdef", a = 0; a < n; a += 8) {
        var i = e[a >> 5] >>> a % 32 & 255,
          o = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(15 & i), 16);
        t.push(o);
      }
      return t;
    }(function (e, t) {
      e[t >> 5] |= 128 << t % 32, e[n(t) - 1] = t;
      for (var a = 1732584193, c = -271733879, u = -1732584194, d = 271733878, p = 0; p < e.length; p += 16) {
        var f = a,
          h = c,
          _ = u,
          m = d;
        a = i(a, c, u, d, e[p], 7, -680876936), d = i(d, a, c, u, e[p + 1], 12, -389564586), u = i(u, d, a, c, e[p + 2], 17, 606105819), c = i(c, u, d, a, e[p + 3], 22, -1044525330), a = i(a, c, u, d, e[p + 4], 7, -176418897), d = i(d, a, c, u, e[p + 5], 12, 1200080426), u = i(u, d, a, c, e[p + 6], 17, -1473231341), c = i(c, u, d, a, e[p + 7], 22, -45705983), a = i(a, c, u, d, e[p + 8], 7, 1770035416), d = i(d, a, c, u, e[p + 9], 12, -1958414417), u = i(u, d, a, c, e[p + 10], 17, -42063), c = i(c, u, d, a, e[p + 11], 22, -1990404162), a = i(a, c, u, d, e[p + 12], 7, 1804603682), d = i(d, a, c, u, e[p + 13], 12, -40341101), u = i(u, d, a, c, e[p + 14], 17, -1502002290), a = o(a, c = i(c, u, d, a, e[p + 15], 22, 1236535329), u, d, e[p + 1], 5, -165796510), d = o(d, a, c, u, e[p + 6], 9, -1069501632), u = o(u, d, a, c, e[p + 11], 14, 643717713), c = o(c, u, d, a, e[p], 20, -373897302), a = o(a, c, u, d, e[p + 5], 5, -701558691), d = o(d, a, c, u, e[p + 10], 9, 38016083), u = o(u, d, a, c, e[p + 15], 14, -660478335), c = o(c, u, d, a, e[p + 4], 20, -405537848), a = o(a, c, u, d, e[p + 9], 5, 568446438), d = o(d, a, c, u, e[p + 14], 9, -1019803690), u = o(u, d, a, c, e[p + 3], 14, -187363961), c = o(c, u, d, a, e[p + 8], 20, 1163531501), a = o(a, c, u, d, e[p + 13], 5, -1444681467), d = o(d, a, c, u, e[p + 2], 9, -51403784), u = o(u, d, a, c, e[p + 7], 14, 1735328473), a = s(a, c = o(c, u, d, a, e[p + 12], 20, -1926607734), u, d, e[p + 5], 4, -378558), d = s(d, a, c, u, e[p + 8], 11, -2022574463), u = s(u, d, a, c, e[p + 11], 16, 1839030562), c = s(c, u, d, a, e[p + 14], 23, -35309556), a = s(a, c, u, d, e[p + 1], 4, -1530992060), d = s(d, a, c, u, e[p + 4], 11, 1272893353), u = s(u, d, a, c, e[p + 7], 16, -155497632), c = s(c, u, d, a, e[p + 10], 23, -1094730640), a = s(a, c, u, d, e[p + 13], 4, 681279174), d = s(d, a, c, u, e[p], 11, -358537222), u = s(u, d, a, c, e[p + 3], 16, -722521979), c = s(c, u, d, a, e[p + 6], 23, 76029189), a = s(a, c, u, d, e[p + 9], 4, -640364487), d = s(d, a, c, u, e[p + 12], 11, -421815835), u = s(u, d, a, c, e[p + 15], 16, 530742520), a = l(a, c = s(c, u, d, a, e[p + 2], 23, -995338651), u, d, e[p], 6, -198630844), d = l(d, a, c, u, e[p + 7], 10, 1126891415), u = l(u, d, a, c, e[p + 14], 15, -1416354905), c = l(c, u, d, a, e[p + 5], 21, -57434055), a = l(a, c, u, d, e[p + 12], 6, 1700485571), d = l(d, a, c, u, e[p + 3], 10, -1894986606), u = l(u, d, a, c, e[p + 10], 15, -1051523), c = l(c, u, d, a, e[p + 1], 21, -2054922799), a = l(a, c, u, d, e[p + 8], 6, 1873313359), d = l(d, a, c, u, e[p + 15], 10, -30611744), u = l(u, d, a, c, e[p + 6], 15, -1560198380), c = l(c, u, d, a, e[p + 13], 21, 1309151649), a = l(a, c, u, d, e[p + 4], 6, -145523070), d = l(d, a, c, u, e[p + 11], 10, -1120210379), u = l(u, d, a, c, e[p + 2], 15, 718787259), c = l(c, u, d, a, e[p + 9], 21, -343485551), a = r(a, f), c = r(c, h), u = r(u, _), d = r(d, m);
      }
      return [a, c, u, d];
    }(function (e) {
      if (0 === e.length) return [];
      for (var t = 8 * e.length, r = new Uint32Array(n(t)), a = 0; a < t; a += 8) r[a >> 5] |= (255 & e[a / 8]) << a % 32;
      return r;
    }(e), 8 * e.length));
  };
});
