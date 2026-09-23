// Reconstructed Webpack factory 74353; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    var e = 6e4,
      t = 36e5,
      n = "millisecond",
      r = "second",
      a = "minute",
      i = "hour",
      o = "day",
      s = "week",
      l = "month",
      c = "quarter",
      u = "year",
      d = "date",
      p = "Invalid Date",
      f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      _ = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function (e) {
          var t = ["th", "st", "nd", "rd"],
            n = e % 100;
          return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
        }
      },
      m = function (e, t, n) {
        var r = String(e);
        return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e;
      },
      A = {
        s: m,
        z: function (e) {
          var t = -e.utcOffset(),
            n = Math.abs(t),
            r = Math.floor(n / 60),
            a = n % 60;
          return (t <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(a, 2, "0");
        },
        m: function e(t, n) {
          if (t.date() < n.date()) return -e(n, t);
          var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
            a = t.clone().add(r, l),
            i = n - a < 0,
            o = t.clone().add(r + (i ? -1 : 1), l);
          return +(-(r + (n - a) / (i ? a - o : o - a)) || 0);
        },
        a: function (e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        },
        p: function (e) {
          return {
            M: l,
            y: u,
            w: s,
            d: o,
            D: d,
            h: i,
            m: a,
            s: r,
            ms: n,
            Q: c
          }[e] || String(e || "").toLowerCase().replace(/s$/, "");
        },
        u: function (e) {
          return void 0 === e;
        }
      },
      g = "en",
      y = {};
    y[g] = _;
    var v = "$isDayjsObject",
      E = function (e) {
        return e instanceof O || !(!e || !e[v]);
      },
      b = function e(t, n, r) {
        var a;
        if (!t) return g;
        if ("string" == typeof t) {
          var i = t.toLowerCase();
          y[i] && (a = i), n && (y[i] = n, a = i);
          var o = t.split("-");
          if (!a && o.length > 1) return e(o[0]);
        } else {
          var s = t.name;
          y[s] = t, a = s;
        }
        return !r && a && (g = a), a || !r && g;
      },
      w = function (e, t) {
        if (E(e)) return e.clone();
        var n = "object" == typeof t ? t : {};
        return n.date = e, n.args = arguments, new O(n);
      },
      C = A;
    C.l = b, C.i = E, C.w = function (e, t) {
      return w(e, {
        locale: t.$L,
        utc: t.$u,
        x: t.$x,
        $offset: t.$offset
      });
    };
    var O = function () {
        function _(e) {
          this.$L = b(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[v] = !0;
        }
        var m = _.prototype;
        return m.parse = function (e) {
          this.$d = function (e) {
            var t = e.date,
              n = e.utc;
            if (null === t) return new Date(NaN);
            if (C.u(t)) return new Date();
            if (t instanceof Date) return new Date(t);
            if ("string" == typeof t && !/Z$/i.test(t)) {
              var r = t.match(f);
              if (r) {
                var a = r[2] - 1 || 0,
                  i = (r[7] || "0").substring(0, 3);
                return n ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
              }
            }
            return new Date(t);
          }(e), this.init();
        }, m.init = function () {
          var e = this.$d;
          this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
        }, m.$utils = function () {
          return C;
        }, m.isValid = function () {
          return !(this.$d.toString() === p);
        }, m.isSame = function (e, t) {
          var n = w(e);
          return this.startOf(t) <= n && n <= this.endOf(t);
        }, m.isAfter = function (e, t) {
          return w(e) < this.startOf(t);
        }, m.isBefore = function (e, t) {
          return this.endOf(t) < w(e);
        }, m.$g = function (e, t, n) {
          return C.u(e) ? this[t] : this.set(n, e);
        }, m.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function () {
          return this.$d.getTime();
        }, m.startOf = function (e, t) {
          var n = this,
            c = !!C.u(t) || t,
            p = C.p(e),
            f = function (e, t) {
              var r = C.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
              return c ? r : r.endOf(o);
            },
            h = function (e, t) {
              return C.w(n.toDate()[e].apply(n.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n);
            },
            _ = this.$W,
            m = this.$M,
            A = this.$D,
            g = "set" + (this.$u ? "UTC" : "");
          switch (p) {
            case u:
              return c ? f(1, 0) : f(31, 11);
            case l:
              return c ? f(1, m) : f(0, m + 1);
            case s:
              var y = this.$locale().weekStart || 0,
                v = (_ < y ? _ + 7 : _) - y;
              return f(c ? A - v : A + (6 - v), m);
            case o:
            case d:
              return h(g + "Hours", 0);
            case i:
              return h(g + "Minutes", 1);
            case a:
              return h(g + "Seconds", 2);
            case r:
              return h(g + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m.endOf = function (e) {
          return this.startOf(e, !1);
        }, m.$set = function (e, t) {
          var s,
            c = C.p(e),
            p = "set" + (this.$u ? "UTC" : ""),
            f = (s = {}, s[o] = p + "Date", s[d] = p + "Date", s[l] = p + "Month", s[u] = p + "FullYear", s[i] = p + "Hours", s[a] = p + "Minutes", s[r] = p + "Seconds", s[n] = p + "Milliseconds", s)[c],
            h = c === o ? this.$D + (t - this.$W) : t;
          if (c === l || c === u) {
            var _ = this.clone().set(d, 1);
            _.$d[f](h), _.init(), this.$d = _.set(d, Math.min(this.$D, _.daysInMonth())).$d;
          } else f && this.$d[f](h);
          return this.init(), this;
        }, m.set = function (e, t) {
          return this.clone().$set(e, t);
        }, m.get = function (e) {
          return this[C.p(e)]();
        }, m.add = function (n, c) {
          var d,
            p = this;
          n = Number(n);
          var f = C.p(c),
            h = function (e) {
              var t = w(p);
              return C.w(t.date(t.date() + Math.round(e * n)), p);
            };
          if (f === l) return this.set(l, this.$M + n);
          if (f === u) return this.set(u, this.$y + n);
          if (f === o) return h(1);
          if (f === s) return h(7);
          var _ = (d = {}, d[a] = e, d[i] = t, d[r] = 1e3, d)[f] || 1,
            m = this.$d.getTime() + n * _;
          return C.w(m, this);
        }, m.subtract = function (e, t) {
          return this.add(-1 * e, t);
        }, m.format = function (e) {
          var t = this,
            n = this.$locale();
          if (!this.isValid()) return n.invalidDate || p;
          var r = e || "YYYY-MM-DDTHH:mm:ssZ",
            a = C.z(this),
            i = this.$H,
            o = this.$m,
            s = this.$M,
            l = n.weekdays,
            c = n.months,
            u = n.meridiem,
            d = function (e, n, a, i) {
              return e && (e[n] || e(t, r)) || a[n].slice(0, i);
            },
            f = function (e) {
              return C.s(i % 12 || 12, e, "0");
            },
            _ = u || function (e, t, n) {
              var r = e < 12 ? "AM" : "PM";
              return n ? r.toLowerCase() : r;
            };
          return r.replace(h, function (e, r) {
            return r || function (e) {
              switch (e) {
                case "YY":
                  return String(t.$y).slice(-2);
                case "YYYY":
                  return C.s(t.$y, 4, "0");
                case "M":
                  return s + 1;
                case "MM":
                  return C.s(s + 1, 2, "0");
                case "MMM":
                  return d(n.monthsShort, s, c, 3);
                case "MMMM":
                  return d(c, s);
                case "D":
                  return t.$D;
                case "DD":
                  return C.s(t.$D, 2, "0");
                case "d":
                  return String(t.$W);
                case "dd":
                  return d(n.weekdaysMin, t.$W, l, 2);
                case "ddd":
                  return d(n.weekdaysShort, t.$W, l, 3);
                case "dddd":
                  return l[t.$W];
                case "H":
                  return String(i);
                case "HH":
                  return C.s(i, 2, "0");
                case "h":
                  return f(1);
                case "hh":
                  return f(2);
                case "a":
                  return _(i, o, !0);
                case "A":
                  return _(i, o, !1);
                case "m":
                  return String(o);
                case "mm":
                  return C.s(o, 2, "0");
                case "s":
                  return String(t.$s);
                case "ss":
                  return C.s(t.$s, 2, "0");
                case "SSS":
                  return C.s(t.$ms, 3, "0");
                case "Z":
                  return a;
              }
              return null;
            }(e) || a.replace(":", "");
          });
        }, m.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function (n, d, p) {
          var f,
            h = this,
            _ = C.p(d),
            m = w(n),
            A = (m.utcOffset() - this.utcOffset()) * e,
            g = this - m,
            y = function () {
              return C.m(h, m);
            };
          switch (_) {
            case u:
              f = y() / 12;
              break;
            case l:
              f = y();
              break;
            case c:
              f = y() / 3;
              break;
            case s:
              f = (g - A) / 6048e5;
              break;
            case o:
              f = (g - A) / 864e5;
              break;
            case i:
              f = g / t;
              break;
            case a:
              f = g / e;
              break;
            case r:
              f = g / 1e3;
              break;
            default:
              f = g;
          }
          return p ? f : C.a(f);
        }, m.daysInMonth = function () {
          return this.endOf(l).$D;
        }, m.$locale = function () {
          return y[this.$L];
        }, m.locale = function (e, t) {
          if (!e) return this.$L;
          var n = this.clone(),
            r = b(e, t, !0);
          return r && (n.$L = r), n;
        }, m.clone = function () {
          return C.w(this.$d, this);
        }, m.toDate = function () {
          return new Date(this.valueOf());
        }, m.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function () {
          return this.$d.toISOString();
        }, m.toString = function () {
          return this.$d.toUTCString();
        }, _;
      }(),
      M = O.prototype;
    return w.prototype = M, [["$ms", n], ["$s", r], ["$m", a], ["$H", i], ["$W", o], ["$M", l], ["$y", u], ["$D", d]].forEach(function (e) {
      M[e[1]] = function (t) {
        return this.$g(t, e[0], e[1]);
      };
    }), w.extend = function (e, t) {
      return e.$i || (e(t, O, w), e.$i = !0), w;
    }, w.locale = b, w.isDayjs = E, w.unix = function (e) {
      return w(1e3 * e);
    }, w.en = y[g], w.Ls = y, w.p = {}, w;
  }();
});
