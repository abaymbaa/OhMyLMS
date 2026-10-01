// Reconstructed Webpack factory 41816; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    var e = "month",
      t = "quarter";
    return function (n, r) {
      var a = r.prototype;
      a.quarter = function (e) {
        return this.$utils().u(e) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (e - 1));
      };
      var i = a.add;
      a.add = function (n, r) {
        return n = Number(n), this.$utils().p(r) === t ? this.add(3 * n, e) : i.bind(this)(n, r);
      };
      var o = a.startOf;
      a.startOf = function (n, r) {
        var a = this.$utils(),
          i = !!a.u(r) || r;
        if (a.p(n) === t) {
          var s = this.quarter() - 1;
          return i ? this.month(3 * s).startOf(e).startOf("day") : this.month(3 * s + 2).endOf(e).endOf("day");
        }
        return o.bind(this)(n, r);
      };
    };
  }();
});
