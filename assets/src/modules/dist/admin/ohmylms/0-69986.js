// Reconstructed Webpack factory 69986; arguments retain original semantics.
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
  const o = function (e) {
    var t = a({}, (function (e) {
      if (null == e) throw new TypeError("Cannot destructure " + e);
    }(e), e));
    return React.createElement(r.Spinner, t);
  };
});
