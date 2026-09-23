// Reconstructed Webpack factory 69626; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => a
  });
  var r = function () {
    return r = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return e;
    }, r.apply(this, arguments);
  };
  function a(e, t) {
    var n = r({}, e);
    return t.forEach(function (e) {
      e in n && delete n[e];
    }), n;
  }
});
