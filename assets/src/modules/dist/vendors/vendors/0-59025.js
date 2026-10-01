// Reconstructed Webpack factory 59025; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.URL = t.DNS = void 0, t.default = function (e, t, n) {
    function r(e, r, o, s) {
      var l;
      if ("string" == typeof e && (e = function (e) {
        e = unescape(encodeURIComponent(e));
        for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
        return t;
      }(e)), "string" == typeof r && (r = (0, i.default)(r)), 16 !== (null === (l = r) || void 0 === l ? void 0 : l.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      var c = new Uint8Array(16 + e.length);
      if (c.set(r), c.set(e, r.length), (c = n(c))[6] = 15 & c[6] | t, c[8] = 63 & c[8] | 128, o) {
        s = s || 0;
        for (var u = 0; u < 16; ++u) o[s + u] = c[u];
        return o;
      }
      return (0, a.unsafeStringify)(c);
    }
    try {
      r.name = e;
    } catch (e) {}
    return r.DNS = o, r.URL = s, r;
  };
  var r,
    a = n(49910),
    i = (r = n(96792)) && r.__esModule ? r : {
      default: r
    },
    o = t.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    s = t.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
});
