// Reconstructed Webpack factory 83826; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    var e = "minute",
      t = /[+-]\d\d(?::?\d\d)?/g,
      n = /([+-]|\d\d)/g;
    return function (r, a, i) {
      var o = a.prototype;
      i.utc = function (e) {
        return new a({
          date: e,
          utc: !0,
          args: arguments
        });
      }, o.utc = function (t) {
        var n = i(this.toDate(), {
          locale: this.$L,
          utc: !0
        });
        return t ? n.add(this.utcOffset(), e) : n;
      }, o.local = function () {
        return i(this.toDate(), {
          locale: this.$L,
          utc: !1
        });
      };
      var s = o.parse;
      o.parse = function (e) {
        e.utc && (this.$u = !0), this.$utils().u(e.$offset) || (this.$offset = e.$offset), s.call(this, e);
      };
      var l = o.init;
      o.init = function () {
        if (this.$u) {
          var e = this.$d;
          this.$y = e.getUTCFullYear(), this.$M = e.getUTCMonth(), this.$D = e.getUTCDate(), this.$W = e.getUTCDay(), this.$H = e.getUTCHours(), this.$m = e.getUTCMinutes(), this.$s = e.getUTCSeconds(), this.$ms = e.getUTCMilliseconds();
        } else l.call(this);
      };
      var c = o.utcOffset;
      o.utcOffset = function (r, a) {
        var i = this.$utils().u;
        if (i(r)) return this.$u ? 0 : i(this.$offset) ? c.call(this) : this.$offset;
        if ("string" == typeof r && (r = function (e) {
          void 0 === e && (e = "");
          var r = e.match(t);
          if (!r) return null;
          var a = ("" + r[0]).match(n) || ["-", 0, 0],
            i = a[0],
            o = 60 * +a[1] + +a[2];
          return 0 === o ? 0 : "+" === i ? o : -o;
        }(r), null === r)) return this;
        var o = Math.abs(r) <= 16 ? 60 * r : r;
        if (0 === o) return this.utc(a);
        var s = this.clone();
        if (a) return s.$offset = o, s.$u = !1, s;
        var l = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return (s = this.local().add(o + l, e)).$offset = o, s.$x.$localOffset = l, s;
      };
      var u = o.format;
      o.format = function (e) {
        var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return u.call(this, t);
      }, o.valueOf = function () {
        var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * e;
      }, o.isUTC = function () {
        return !!this.$u;
      }, o.toISOString = function () {
        return this.toDate().toISOString();
      }, o.toString = function () {
        return this.toDate().toUTCString();
      };
      var d = o.toDate;
      o.toDate = function (e) {
        return "s" === e && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d.call(this);
      };
      var p = o.diff;
      o.diff = function (e, t, n) {
        if (e && this.$u === e.$u) return p.call(this, e, t, n);
        var r = this.local(),
          a = i(e).local();
        return p.call(r, a, t, n);
      };
    };
  }();
});
