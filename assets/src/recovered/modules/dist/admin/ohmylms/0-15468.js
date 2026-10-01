// Reconstructed Webpack factory 15468; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => o
  });
  var r = n(2214);
  function a() {
    return a = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, a.apply(null, arguments);
  }
  const o = (0, n(41594).forwardRef)(function (e, t) {
    return React.createElement(React.Fragment, null, React.createElement(r.TextareaControl, a({
      ref: t,
      __nextHasNoMarginBottom: !0
    }, e)));
  });
});
