// Reconstructed Webpack factory 46942; arguments retain original semantics.
((e, t) => {
  var n;
  !function () {
    "use strict";

    var r = {}.hasOwnProperty;
    function a() {
      for (var e = "", t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        n && (e = o(e, i(n)));
      }
      return e;
    }
    function i(e) {
      if ("string" == typeof e || "number" == typeof e) return e;
      if ("object" != typeof e) return "";
      if (Array.isArray(e)) return a.apply(null, e);
      if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
      var t = "";
      for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
      return t;
    }
    function o(e, t) {
      return t ? e ? e + " " + t : e + t : e;
    }
    e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function () {
      return a;
    }.apply(t, [])) || (e.exports = n);
  }();
});
