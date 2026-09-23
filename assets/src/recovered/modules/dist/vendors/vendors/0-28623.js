// Reconstructed Webpack factory 28623; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    return function (e, t) {
      t.prototype.weekYear = function () {
        var e = this.month(),
          t = this.week(),
          n = this.year();
        return 1 === t && 11 === e ? n + 1 : 0 === e && t >= 52 ? n - 1 : n;
      };
    };
  }();
});
