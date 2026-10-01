// Reconstructed Webpack factory 37872; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    return function (e, t, n) {
      t.prototype.isBetween = function (e, t, r, a) {
        var i = n(e),
          o = n(t),
          s = "(" === (a = a || "()")[0],
          l = ")" === a[1];
        return (s ? this.isAfter(i, r) : !this.isBefore(i, r)) && (l ? this.isBefore(o, r) : !this.isAfter(o, r)) || (s ? this.isBefore(i, r) : !this.isAfter(i, r)) && (l ? this.isAfter(o, r) : !this.isBefore(o, r));
      };
    };
  }();
});
