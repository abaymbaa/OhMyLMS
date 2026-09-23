// Reconstructed Webpack factory 11470; arguments retain original semantics.
(function (e, t, n) {
  !function (e) {
    "use strict";

    function t(e, t, n) {
      return e + " " + function (e, t) {
        return 2 === t ? function (e) {
          var t = {
            m: "v",
            b: "v",
            d: "z"
          };
          return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1);
        }(e) : e;
      }({
        mm: "munutenn",
        MM: "miz",
        dd: "devezh"
      }[n], e);
    }
    function n(e) {
      return e > 9 ? n(e % 10) : e;
    }
    var r = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
      a = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
      i = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
    e.defineLocale("br", {
      months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
      monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
      weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
      weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
      weekdaysParse: i,
      fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
      shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
      minWeekdaysParse: i,
      monthsRegex: a,
      monthsShortRegex: a,
      monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
      monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
      monthsParse: r,
      longMonthsParse: r,
      shortMonthsParse: r,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [a viz] MMMM YYYY",
        LLL: "D [a viz] MMMM YYYY HH:mm",
        LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Hiziv da] LT",
        nextDay: "[Warcʼhoazh da] LT",
        nextWeek: "dddd [da] LT",
        lastDay: "[Decʼh da] LT",
        lastWeek: "dddd [paset da] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "a-benn %s",
        past: "%s ʼzo",
        s: "un nebeud segondennoù",
        ss: "%d eilenn",
        m: "ur vunutenn",
        mm: t,
        h: "un eur",
        hh: "%d eur",
        d: "un devezh",
        dd: t,
        M: "ur miz",
        MM: t,
        y: "ur bloaz",
        yy: function (e) {
          switch (n(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return e + " bloaz";
            default:
              return e + " vloaz";
          }
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
      ordinal: function (e) {
        return e + (1 === e ? "añ" : "vet");
      },
      week: {
        dow: 1,
        doy: 4
      },
      meridiemParse: /a.m.|g.m./,
      isPM: function (e) {
        return "g.m." === e;
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "a.m." : "g.m.";
      }
    });
  }(n(95093));
});
