// Reconstructed Webpack factory 45766; arguments retain original semantics.
(function (e, t, n) {
  !function (e) {
    "use strict";

    var t = {
      ss: "sekundė_sekundžių_sekundes",
      m: "minutė_minutės_minutę",
      mm: "minutės_minučių_minutes",
      h: "valanda_valandos_valandą",
      hh: "valandos_valandų_valandas",
      d: "diena_dienos_dieną",
      dd: "dienos_dienų_dienas",
      M: "mėnuo_mėnesio_mėnesį",
      MM: "mėnesiai_mėnesių_mėnesius",
      y: "metai_metų_metus",
      yy: "metai_metų_metus"
    };
    function n(e, t, n, r) {
      return t ? a(n)[0] : r ? a(n)[1] : a(n)[2];
    }
    function r(e) {
      return e % 10 == 0 || e > 10 && e < 20;
    }
    function a(e) {
      return t[e].split("_");
    }
    function i(e, t, i, o) {
      var s = e + " ";
      return 1 === e ? s + n(0, t, i[0], o) : t ? s + (r(e) ? a(i)[1] : a(i)[0]) : o ? s + a(i)[1] : s + (r(e) ? a(i)[1] : a(i)[2]);
    }
    e.defineLocale("lt", {
      months: {
        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
        standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
      },
      monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
      weekdays: {
        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
        standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
        isFormat: /dddd HH:mm/
      },
      weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
      weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY [m.] MMMM D [d.]",
        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
        l: "YYYY-MM-DD",
        ll: "YYYY [m.] MMMM D [d.]",
        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
      },
      calendar: {
        sameDay: "[Šiandien] LT",
        nextDay: "[Rytoj] LT",
        nextWeek: "dddd LT",
        lastDay: "[Vakar] LT",
        lastWeek: "[Praėjusį] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "po %s",
        past: "prieš %s",
        s: function (e, t, n, r) {
          return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes";
        },
        ss: i,
        m: n,
        mm: i,
        h: n,
        hh: i,
        d: n,
        dd: i,
        M: n,
        MM: i,
        y: n,
        yy: i
      },
      dayOfMonthOrdinalParse: /\d{1,2}-oji/,
      ordinal: function (e) {
        return e + "-oji";
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  }(n(95093));
});
