// Reconstructed Webpack factory 6181; arguments retain original semantics.
(function (e, t, n) {
  !function (e) {
    "use strict";

    function t(e, t, n, r) {
      var a = {
        s: ["çend sanîye", "çend sanîyeyan"],
        ss: [e + " sanîye", e + " sanîyeyan"],
        m: ["deqîqeyek", "deqîqeyekê"],
        mm: [e + " deqîqe", e + " deqîqeyan"],
        h: ["saetek", "saetekê"],
        hh: [e + " saet", e + " saetan"],
        d: ["rojek", "rojekê"],
        dd: [e + " roj", e + " rojan"],
        w: ["hefteyek", "hefteyekê"],
        ww: [e + " hefte", e + " hefteyan"],
        M: ["mehek", "mehekê"],
        MM: [e + " meh", e + " mehan"],
        y: ["salek", "salekê"],
        yy: [e + " sal", e + " salan"]
      };
      return t ? a[n][0] : a[n][1];
    }
    e.defineLocale("ku-kmr", {
      months: "Rêbendan_Sibat_Adar_Nîsan_Gulan_Hezîran_Tîrmeh_Tebax_Îlon_Cotmeh_Mijdar_Berfanbar".split("_"),
      monthsShort: "Rêb_Sib_Ada_Nîs_Gul_Hez_Tîr_Teb_Îlo_Cot_Mij_Ber".split("_"),
      monthsParseExact: !0,
      weekdays: "Yekşem_Duşem_Sêşem_Çarşem_Pêncşem_În_Şemî".split("_"),
      weekdaysShort: "Yek_Du_Sê_Çar_Pên_În_Şem".split("_"),
      weekdaysMin: "Ye_Du_Sê_Ça_Pê_În_Şe".split("_"),
      meridiem: function (e, t, n) {
        return e < 12 ? n ? "bn" : "BN" : n ? "pn" : "PN";
      },
      meridiemParse: /bn|BN|pn|PN/,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM[a] YYYY[an]",
        LLL: "Do MMMM[a] YYYY[an] HH:mm",
        LLLL: "dddd, Do MMMM[a] YYYY[an] HH:mm",
        ll: "Do MMM[.] YYYY[an]",
        lll: "Do MMM[.] YYYY[an] HH:mm",
        llll: "ddd[.], Do MMM[.] YYYY[an] HH:mm"
      },
      calendar: {
        sameDay: "[Îro di saet] LT [de]",
        nextDay: "[Sibê di saet] LT [de]",
        nextWeek: "dddd [di saet] LT [de]",
        lastDay: "[Duh di saet] LT [de]",
        lastWeek: "dddd[a borî di saet] LT [de]",
        sameElse: "L"
      },
      relativeTime: {
        future: "di %s de",
        past: "berî %s",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        w: t,
        ww: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}(?:yê|ê|\.)/,
      ordinal: function (e, t) {
        var n = t.toLowerCase();
        return n.includes("w") || n.includes("m") ? e + "." : e + function (e) {
          var t = (e = "" + e).substring(e.length - 1),
            n = e.length > 1 ? e.substring(e.length - 2) : "";
          return 12 == n || 13 == n || "2" != t && "3" != t && "50" != n && "70" != t && "80" != t ? "ê" : "yê";
        }(e);
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(n(95093));
});
