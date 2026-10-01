// Reconstructed Webpack factory 5784; arguments retain original semantics.
(function (e, t, n) {
  !function (e) {
    "use strict";

    var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
      n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
    function r(e) {
      return e > 1 && e < 5;
    }
    function a(e, t, n, a) {
      var i = e + " ";
      switch (n) {
        case "s":
          return t || a ? "pár sekúnd" : "pár sekundami";
        case "ss":
          return t || a ? i + (r(e) ? "sekundy" : "sekúnd") : i + "sekundami";
        case "m":
          return t ? "minúta" : a ? "minútu" : "minútou";
        case "mm":
          return t || a ? i + (r(e) ? "minúty" : "minút") : i + "minútami";
        case "h":
          return t ? "hodina" : a ? "hodinu" : "hodinou";
        case "hh":
          return t || a ? i + (r(e) ? "hodiny" : "hodín") : i + "hodinami";
        case "d":
          return t || a ? "deň" : "dňom";
        case "dd":
          return t || a ? i + (r(e) ? "dni" : "dní") : i + "dňami";
        case "M":
          return t || a ? "mesiac" : "mesiacom";
        case "MM":
          return t || a ? i + (r(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
        case "y":
          return t || a ? "rok" : "rokom";
        case "yy":
          return t || a ? i + (r(e) ? "roky" : "rokov") : i + "rokmi";
      }
    }
    e.defineLocale("sk", {
      months: t,
      monthsShort: n,
      weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
      weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
      weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[dnes o] LT",
        nextDay: "[zajtra o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v nedeľu o] LT";
            case 1:
            case 2:
              return "[v] dddd [o] LT";
            case 3:
              return "[v stredu o] LT";
            case 4:
              return "[vo štvrtok o] LT";
            case 5:
              return "[v piatok o] LT";
            case 6:
              return "[v sobotu o] LT";
          }
        },
        lastDay: "[včera o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulú nedeľu o] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[minulý] dddd [o] LT";
            case 3:
              return "[minulú stredu o] LT";
            case 6:
              return "[minulú sobotu o] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pred %s",
        s: a,
        ss: a,
        m: a,
        mm: a,
        h: a,
        hh: a,
        d: a,
        dd: a,
        M: a,
        MM: a,
        y: a,
        yy: a
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
