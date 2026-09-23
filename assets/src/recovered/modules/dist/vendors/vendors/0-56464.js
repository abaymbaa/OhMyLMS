// Reconstructed Webpack factory 56464; arguments retain original semantics.
(function (e, t, n) {
  !function (e) {
    "use strict";

    var t = {
        standalone: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        format: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_"),
        isFormat: /DD?[o.]?(\[[^\[\]]*\]|\s)+MMMM/
      },
      n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
      r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
      a = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
    function i(e) {
      return e > 1 && e < 5 && 1 != ~~(e / 10);
    }
    function o(e, t, n, r) {
      var a = e + " ";
      switch (n) {
        case "s":
          return t || r ? "pár sekund" : "pár sekundami";
        case "ss":
          return t || r ? a + (i(e) ? "sekundy" : "sekund") : a + "sekundami";
        case "m":
          return t ? "minuta" : r ? "minutu" : "minutou";
        case "mm":
          return t || r ? a + (i(e) ? "minuty" : "minut") : a + "minutami";
        case "h":
          return t ? "hodina" : r ? "hodinu" : "hodinou";
        case "hh":
          return t || r ? a + (i(e) ? "hodiny" : "hodin") : a + "hodinami";
        case "d":
          return t || r ? "den" : "dnem";
        case "dd":
          return t || r ? a + (i(e) ? "dny" : "dní") : a + "dny";
        case "M":
          return t || r ? "měsíc" : "měsícem";
        case "MM":
          return t || r ? a + (i(e) ? "měsíce" : "měsíců") : a + "měsíci";
        case "y":
          return t || r ? "rok" : "rokem";
        case "yy":
          return t || r ? a + (i(e) ? "roky" : "let") : a + "lety";
      }
    }
    e.defineLocale("cs", {
      months: t,
      monthsShort: n,
      monthsRegex: a,
      monthsShortRegex: a,
      monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
      monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
      monthsParse: r,
      longMonthsParse: r,
      shortMonthsParse: r,
      weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
      weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
      weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
        l: "D. M. YYYY"
      },
      calendar: {
        sameDay: "[dnes v] LT",
        nextDay: "[zítra v] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v neděli v] LT";
            case 1:
            case 2:
              return "[v] dddd [v] LT";
            case 3:
              return "[ve středu v] LT";
            case 4:
              return "[ve čtvrtek v] LT";
            case 5:
              return "[v pátek v] LT";
            case 6:
              return "[v sobotu v] LT";
          }
        },
        lastDay: "[včera v] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulou neděli v] LT";
            case 1:
            case 2:
              return "[minulé] dddd [v] LT";
            case 3:
              return "[minulou středu v] LT";
            case 4:
            case 5:
              return "[minulý] dddd [v] LT";
            case 6:
              return "[minulou sobotu v] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "před %s",
        s: o,
        ss: o,
        m: o,
        mm: o,
        h: o,
        hh: o,
        d: o,
        dd: o,
        M: o,
        MM: o,
        y: o,
        yy: o
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(n(95093));
});
