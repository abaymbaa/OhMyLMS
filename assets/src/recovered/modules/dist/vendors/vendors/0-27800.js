// Reconstructed Webpack factory 27800; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => a
  });
  var r = n(43145);
  function a(e, t) {
    if (e) {
      if ("string" == typeof e) return (0, r.A)(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.A)(e, t) : void 0;
    }
  }
});
