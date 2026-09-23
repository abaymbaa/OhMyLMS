// Reconstructed Webpack factory 45073; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r = o(n(46140)),
    a = o(n(2858)),
    i = n(49910);
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  t.default = function (e, t, n) {
    if (r.default.randomUUID && !t && !e) return r.default.randomUUID();
    var o = (e = e || {}).random || (e.rng || a.default)();
    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
      n = n || 0;
      for (var s = 0; s < 16; ++s) t[n + s] = o[s];
      return t;
    }
    return (0, i.unsafeStringify)(o);
  };
});
