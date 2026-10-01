// Reconstructed Webpack factory 97375; arguments retain original semantics.
(function (e) {
  e.exports = function () {
    "use strict";

    return function (e, t) {
      var n = t.prototype,
        r = n.format;
      n.format = function (e) {
        var t = this,
          n = this.$locale();
        if (!this.isValid()) return r.bind(this)(e);
        var a = this.$utils(),
          i = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (e) {
            switch (e) {
              case "Q":
                return Math.ceil((t.$M + 1) / 3);
              case "Do":
                return n.ordinal(t.$D);
              case "gggg":
                return t.weekYear();
              case "GGGG":
                return t.isoWeekYear();
              case "wo":
                return n.ordinal(t.week(), "W");
              case "w":
              case "ww":
                return a.s(t.week(), "w" === e ? 1 : 2, "0");
              case "W":
              case "WW":
                return a.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
              case "k":
              case "kk":
                return a.s(String(0 === t.$H ? 24 : t.$H), "k" === e ? 1 : 2, "0");
              case "X":
                return Math.floor(t.$d.getTime() / 1e3);
              case "x":
                return t.$d.getTime();
              case "z":
                return "[" + t.offsetName() + "]";
              case "zzz":
                return "[" + t.offsetName("long") + "]";
              default:
                return e;
            }
          });
        return r.bind(this)(i);
      };
    };
  }();
});
