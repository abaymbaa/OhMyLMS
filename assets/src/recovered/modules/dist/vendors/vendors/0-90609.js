// Reconstructed Webpack factory 90609; arguments retain original semantics.
(function (e, t, n) {
  !function (e) {
    "use strict";

    var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
    function n(e, t, n, r) {
      var a = e;
      switch (n) {
        case "s":
          return r || t ? "néhány másodperc" : "néhány másodperce";
        case "ss":
          return a + (r || t) ? " másodperc" : " másodperce";
        case "m":
          return "egy" + (r || t ? " perc" : " perce");
        case "mm":
          return a + (r || t ? " perc" : " perce");
        case "h":
          return "egy" + (r || t ? " óra" : " órája");
        case "hh":
          return a + (r || t ? " óra" : " órája");
        case "d":
          return "egy" + (r || t ? " nap" : " napja");
        case "dd":
          return a + (r || t ? " nap" : " napja");
        case "M":
          return "egy" + (r || t ? " hónap" : " hónapja");
        case "MM":
          return a + (r || t ? " hónap" : " hónapja");
        case "y":
          return "egy" + (r || t ? " év" : " éve");
        case "yy":
          return a + (r || t ? " év" : " éve");
      }
      return "";
    }
    function r(e) {
      return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
    }
    e.defineLocale("hu", {
      months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
      monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
      weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
      weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY. MMMM D.",
        LLL: "YYYY. MMMM D. H:mm",
        LLLL: "YYYY. MMMM D., dddd H:mm"
      },
      meridiemParse: /de|du/i,
      isPM: function (e) {
        return "u" === e.charAt(1).toLowerCase();
      },
      meridiem: function (e, t, n) {
        return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU";
      },
      calendar: {
        sameDay: "[ma] LT[-kor]",
        nextDay: "[holnap] LT[-kor]",
        nextWeek: function () {
          return r.call(this, !0);
        },
        lastDay: "[tegnap] LT[-kor]",
        lastWeek: function () {
          return r.call(this, !1);
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s múlva",
        past: "%s",
        s: n,
        ss: n,
        m: n,
        mm: n,
        h: n,
        hh: n,
        d: n,
        dd: n,
        M: n,
        MM: n,
        y: n,
        yy: n
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
