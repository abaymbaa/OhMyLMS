// Reconstructed Webpack factory 20892; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => a
  });
  var r = n(41594);
  const a = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = function (n) {
        "Escape" === n.key && e(t);
      };
    (0, r.useEffect)(function () {
      return document.addEventListener("keydown", n), function () {
        document.removeEventListener("keydown", n);
      };
    }, [e]);
  };
});
