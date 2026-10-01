// Reconstructed Webpack factory 8134; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    var e = "week",
      t = "year";
    return function (n, r, a) {
      var i = r.prototype;
      i.week = function (n) {
        if (void 0 === n && (n = null), null !== n) return this.add(7 * (n - this.week()), "day");
        var r = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var i = a(this).startOf(t).add(1, t).date(r),
            o = a(this).endOf(e);
          if (i.isBefore(o)) return 1;
        }
        var s = a(this).startOf(t).date(r).startOf(e).subtract(1, "millisecond"),
          l = this.diff(s, e, !0);
        return l < 0 ? a(this).startOf("week").week() : Math.ceil(l);
      }, i.weeks = function (e) {
        return void 0 === e && (e = null), this.week(e);
      };
    };
  }();
});
