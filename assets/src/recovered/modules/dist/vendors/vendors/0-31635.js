// Reconstructed Webpack factory 31635; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    Cl: () => r,
    Tt: () => a,
    fX: () => i
  });
  var r = function () {
    return r = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return e;
    }, r.apply(this, arguments);
  };
  function a(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var a = 0;
      for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    }
    return n;
  }
  function i(e, t, n) {
    if (n || 2 === arguments.length) for (var r, a = 0, i = t.length; a < i; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
    return e.concat(r || Array.prototype.slice.call(t));
  }
  Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
});
