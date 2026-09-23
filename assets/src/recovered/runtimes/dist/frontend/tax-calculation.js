!function (t) {
  "use strict";

  t(document).ready(function () {
    var e = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"];
    function a() {
      var a = t('select[name="country"], input[name="country"]').val(),
        n = t(".vat-number-field");
      e.includes(a) ? (n.show(), t("#vat_number_field").addClass("validate-required")) : (n.hide(), t("#vat_number_field").val(""), t("#vat_number_field").removeClass("validate-required"));
    }
    function n() {
      var e = t('select[name="country"], input[name="country"]').val(),
        a = t('select[name="state"], input[name="state"]').val(),
        n = t('input[name="vat_number"]').val();
      t.ajax({
        url: omlms_tax_calculation_params.ajax_url,
        type: "POST",
        data: {
          action: "creator_lms_calculate_tax",
          nonce: omlms_tax_calculation_params.nonce,
          country: e,
          state: a || "",
          vat_number: n || ""
        },
        success: function (e) {
          e && e.success && e.data.fragments && t.each(e.data.fragments, function (e, a) {
            var n = t(e);
            n.length > 0 && n.html(a);
          });
        },
        error: function (t, e, a) {}
      });
    }
    function c(e) {
      var a = document.querySelector("#state"),
        n = document.querySelector("#state_field"),
        c = e;
      c || (c = t("#country").val()), c && t.ajax({
        url: omlms_tax_calculation_params.ajax_url,
        type: "POST",
        data: {
          action: "creator_lms_get_states_by_country",
          nonce: omlms_tax_calculation_params.nonce,
          country_code: c
        },
        success: function (e) {
          var c = t(a),
            r = t(n),
            s = r.find(".required");
          if (e.success && Array.isArray(e.data) && e.data.length > 0) {
            var u = [];
            if (e.data.forEach(function (t) {
              u.push('<option value="' + t.code + '">' + t.title + "</option>");
            }), c.is("select")) c.html(u.join(""));else {
              var l = t("<select>", {
                id: "state",
                name: "state",
                class: "creator-lms-input-select creator-lms-input-text",
                html: u.join("")
              });
              c.replaceWith(l), r.addClass("creator-lms-folded"), s.css("display", "inline");
            }
          } else if (!c.is("input")) {
            var o = t("<input>", {
              type: "text",
              id: "state",
              name: "state",
              class: "creator-lms-input-text"
            });
            c.replaceWith(o), r.removeClass("creator-lms-folded validate-required"), s.css("display", "none");
          }
        },
        error: function (t, e, a) {}
      });
    }
    t(".vat-number-field").hide(), a(), t(document).on("change", 'select[name="country"], input[name="country"]', function () {
      a(), n();
    }), t(document).on("change", "#country", function () {
      c(t(this).val());
    }), t(document).on("change", 'select[name="state"], input[name="state"]', function () {
      n();
    }), t(document).on("change blur", 'input[name="vat_number"]', function () {
      n();
    }), n(), c();
  });
}(jQuery);
