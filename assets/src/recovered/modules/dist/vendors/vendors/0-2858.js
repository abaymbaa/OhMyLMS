// Reconstructed Webpack factory 2858; arguments retain original semantics.
((e, t) => {
  "use strict";

  var n;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function () {
    if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return n(r);
  };
  var r = new Uint8Array(16);
});
