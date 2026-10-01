// Reconstructed Webpack factory 16118; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    I: () => r
  });
  var r = function (e) {
    return Array.isArray(e) ? e.every(function (e) {
      return e.hasOwnProperty("order_number");
    }) ? e.sort(function (e, t) {
      return Number(e.order_number) - Number(t.order_number);
    }) : e : [];
  };
});
