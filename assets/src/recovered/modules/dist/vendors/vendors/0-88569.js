// Reconstructed Webpack factory 88569; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    var e = {
        year: 0,
        month: 1,
        day: 2,
        hour: 3,
        minute: 4,
        second: 5
      },
      t = {};
    return function (n, r, a) {
      var i,
        o = function (e, n, r) {
          void 0 === r && (r = {});
          var a = new Date(e),
            i = function (e, n) {
              void 0 === n && (n = {});
              var r = n.timeZoneName || "short",
                a = e + "|" + r,
                i = t[a];
              return i || (i = new Intl.DateTimeFormat("en-US", {
                hour12: !1,
                timeZone: e,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: r
              }), t[a] = i), i;
            }(n, r);
          return i.formatToParts(a);
        },
        s = function (t, n) {
          for (var r = o(t, n), i = [], s = 0; s < r.length; s += 1) {
            var l = r[s],
              c = l.type,
              u = l.value,
              d = e[c];
            d >= 0 && (i[d] = parseInt(u, 10));
          }
          var p = i[3],
            f = 24 === p ? 0 : p,
            h = i[0] + "-" + i[1] + "-" + i[2] + " " + f + ":" + i[4] + ":" + i[5] + ":000",
            _ = +t;
          return (a.utc(h).valueOf() - (_ -= _ % 1e3)) / 6e4;
        },
        l = r.prototype;
      l.tz = function (e, t) {
        void 0 === e && (e = i);
        var n,
          r = this.utcOffset(),
          o = this.toDate(),
          s = o.toLocaleString("en-US", {
            timeZone: e
          }),
          l = Math.round((o - new Date(s)) / 1e3 / 60),
          c = 15 * -Math.round(o.getTimezoneOffset() / 15) - l;
        if (Number(c)) {
          if (n = a(s, {
            locale: this.$L
          }).$set("millisecond", this.$ms).utcOffset(c, !0), t) {
            var u = n.utcOffset();
            n = n.add(r - u, "minute");
          }
        } else n = this.utcOffset(0, t);
        return n.$x.$timezone = e, n;
      }, l.offsetName = function (e) {
        var t = this.$x.$timezone || a.tz.guess(),
          n = o(this.valueOf(), t, {
            timeZoneName: e
          }).find(function (e) {
            return "timezonename" === e.type.toLowerCase();
          });
        return n && n.value;
      };
      var c = l.startOf;
      l.startOf = function (e, t) {
        if (!this.$x || !this.$x.$timezone) return c.call(this, e, t);
        var n = a(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
          locale: this.$L
        });
        return c.call(n, e, t).tz(this.$x.$timezone, !0);
      }, a.tz = function (e, t, n) {
        var r = n && t,
          o = n || t || i,
          l = s(+a(), o);
        if ("string" != typeof e) return a(e).tz(o);
        var c = function (e, t, n) {
            var r = e - 60 * t * 1e3,
              a = s(r, n);
            if (t === a) return [r, t];
            var i = s(r -= 60 * (a - t) * 1e3, n);
            return a === i ? [r, a] : [e - 60 * Math.min(a, i) * 1e3, Math.max(a, i)];
          }(a.utc(e, r).valueOf(), l, o),
          u = c[0],
          d = c[1],
          p = a(u).utcOffset(d);
        return p.$x.$timezone = o, p;
      }, a.tz.guess = function () {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, a.tz.setDefault = function (e) {
        i = e;
      };
    };
  }();
});
