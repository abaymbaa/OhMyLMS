// Reconstructed Webpack factory 20816; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => a
  });
  var r = n(82284);
  function a(e) {
    var t = function (e) {
      if ("object" != (0, r.A)(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != (0, r.A)(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == (0, r.A)(t) ? t : t + "";
  }
});
