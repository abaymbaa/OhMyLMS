// Reconstructed Webpack factory 90445; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    var e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      n = /\d/,
      r = /\d\d/,
      a = /\d\d?/,
      i = /\d*[^-_:/,()\s\d]+/,
      o = {},
      s = function (e) {
        return (e = +e) + (e > 68 ? 1900 : 2e3);
      },
      l = function (e) {
        return function (t) {
          this[e] = +t;
        };
      },
      c = [/[+-]\d\d:?(\d\d)?|Z/, function (e) {
        (this.zone || (this.zone = {})).offset = function (e) {
          if (!e) return 0;
          if ("Z" === e) return 0;
          var t = e.match(/([+-]|\d\d)/g),
            n = 60 * t[1] + (+t[2] || 0);
          return 0 === n ? 0 : "+" === t[0] ? -n : n;
        }(e);
      }],
      u = function (e) {
        var t = o[e];
        return t && (t.indexOf ? t : t.s.concat(t.f));
      },
      d = function (e, t) {
        var n,
          r = o.meridiem;
        if (r) {
          for (var a = 1; a <= 24; a += 1) if (e.indexOf(r(a, 0, t)) > -1) {
            n = a > 12;
            break;
          }
        } else n = e === (t ? "pm" : "PM");
        return n;
      },
      p = {
        A: [i, function (e) {
          this.afternoon = d(e, !1);
        }],
        a: [i, function (e) {
          this.afternoon = d(e, !0);
        }],
        Q: [n, function (e) {
          this.month = 3 * (e - 1) + 1;
        }],
        S: [n, function (e) {
          this.milliseconds = 100 * +e;
        }],
        SS: [r, function (e) {
          this.milliseconds = 10 * +e;
        }],
        SSS: [/\d{3}/, function (e) {
          this.milliseconds = +e;
        }],
        s: [a, l("seconds")],
        ss: [a, l("seconds")],
        m: [a, l("minutes")],
        mm: [a, l("minutes")],
        H: [a, l("hours")],
        h: [a, l("hours")],
        HH: [a, l("hours")],
        hh: [a, l("hours")],
        D: [a, l("day")],
        DD: [r, l("day")],
        Do: [i, function (e) {
          var t = o.ordinal,
            n = e.match(/\d+/);
          if (this.day = n[0], t) for (var r = 1; r <= 31; r += 1) t(r).replace(/\[|\]/g, "") === e && (this.day = r);
        }],
        w: [a, l("week")],
        ww: [r, l("week")],
        M: [a, l("month")],
        MM: [r, l("month")],
        MMM: [i, function (e) {
          var t = u("months"),
            n = (u("monthsShort") || t.map(function (e) {
              return e.slice(0, 3);
            })).indexOf(e) + 1;
          if (n < 1) throw new Error();
          this.month = n % 12 || n;
        }],
        MMMM: [i, function (e) {
          var t = u("months").indexOf(e) + 1;
          if (t < 1) throw new Error();
          this.month = t % 12 || t;
        }],
        Y: [/[+-]?\d+/, l("year")],
        YY: [r, function (e) {
          this.year = s(e);
        }],
        YYYY: [/\d{4}/, l("year")],
        Z: c,
        ZZ: c
      };
    function f(n) {
      var r, a;
      r = n, a = o && o.formats;
      for (var i = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
          var i = r && r.toUpperCase();
          return n || a[r] || e[r] || a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, n) {
            return t || n.slice(1);
          });
        })).match(t), s = i.length, l = 0; l < s; l += 1) {
        var c = i[l],
          u = p[c],
          d = u && u[0],
          f = u && u[1];
        i[l] = f ? {
          regex: d,
          parser: f
        } : c.replace(/^\[|\]$/g, "");
      }
      return function (e) {
        for (var t = {}, n = 0, r = 0; n < s; n += 1) {
          var a = i[n];
          if ("string" == typeof a) r += a.length;else {
            var o = a.regex,
              l = a.parser,
              c = e.slice(r),
              u = o.exec(c)[0];
            l.call(t, u), e = e.replace(u, "");
          }
        }
        return function (e) {
          var t = e.afternoon;
          if (void 0 !== t) {
            var n = e.hours;
            t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
          }
        }(t), t;
      };
    }
    return function (e, t, n) {
      n.p.customParseFormat = !0, e && e.parseTwoDigitYear && (s = e.parseTwoDigitYear);
      var r = t.prototype,
        a = r.parse;
      r.parse = function (e) {
        var t = e.date,
          r = e.utc,
          i = e.args;
        this.$u = r;
        var s = i[1];
        if ("string" == typeof s) {
          var l = !0 === i[2],
            c = !0 === i[3],
            u = l || c,
            d = i[2];
          c && (d = i[2]), o = this.$locale(), !l && d && (o = n.Ls[d]), this.$d = function (e, t, n, r) {
            try {
              if (["x", "X"].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
              var a = f(t)(e),
                i = a.year,
                o = a.month,
                s = a.day,
                l = a.hours,
                c = a.minutes,
                u = a.seconds,
                d = a.milliseconds,
                p = a.zone,
                h = a.week,
                _ = new Date(),
                m = s || (i || o ? 1 : _.getDate()),
                A = i || _.getFullYear(),
                g = 0;
              i && !o || (g = o > 0 ? o - 1 : _.getMonth());
              var y,
                v = l || 0,
                E = c || 0,
                b = u || 0,
                w = d || 0;
              return p ? new Date(Date.UTC(A, g, m, v, E, b, w + 60 * p.offset * 1e3)) : n ? new Date(Date.UTC(A, g, m, v, E, b, w)) : (y = new Date(A, g, m, v, E, b, w), h && (y = r(y).week(h).toDate()), y);
            } catch (e) {
              return new Date("");
            }
          }(t, s, r, n), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), u && t != this.format(s) && (this.$d = new Date("")), o = {};
        } else if (s instanceof Array) for (var p = s.length, h = 1; h <= p; h += 1) {
          i[1] = s[h - 1];
          var _ = n.apply(this, i);
          if (_.isValid()) {
            this.$d = _.$d, this.$L = _.$L, this.init();
            break;
          }
          h === p && (this.$d = new Date(""));
        } else a.call(this, e);
      };
    };
  }();
});
