// Reconstructed Webpack factory 64761; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => a
  });
  var r = n(41594);
  const a = function (e) {
    var t = (0, r.useRef)(e);
    (0, r.useEffect)(function () {
      t.current = e;
    }, [e]), (0, r.useEffect)(function () {
      var e = function () {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r));
      };
      return window.addEventListener("beforeunload", e), function () {
        return window.removeEventListener("beforeunload", e);
      };
    }, []);
  };
});
