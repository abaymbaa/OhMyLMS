(() => {
  var e;
  (e = jQuery)(function () {
    var r = wp.i18n.__;
    e.scroll_to_notices = function (r) {
      r.length && e("html, body").animate({
        scrollTop: r.offset().top - 100
      }, 1e3);
    };
    var t = {
      $checkout_form: e("form.checkout"),
      selectedPaymentMethod: !1,
      isCheckoutLogin: !1,
      init: function () {
        e(document.body).on("omlms_update_checkout", this.update_checkout), e(document.body).on("click", "a.showlogin", this.show_login_form).on("submit", "form.checkout_coupon", this.apply_coupon).on("click", ".creator-lms-remove-coupon", this.remove_coupon).on("submit", "#creator-lms-checkout-form", this.submit).on("submit", ".creator-lms-form-login", this.login).on("submit", ".creator-lms-form-signup", this.signup), this.$checkout_form.on("click", 'input[name="payment_method"]', this.payment_method_selected), e(".creator-lms-billing-fields .creator-lms-form-row, .creator-lms-billing-contact .creator-lms-form-row").each(function () {
          var r = e(this).find("input, select");
          r.length && (r.prop("required") || e(this).hasClass("validate-required")) && r.data("omlmsServerRequired", !0);
        }), this.applyGatewayRequiredFields(), e("input#createaccount").on("change", this.toggle_create_account).trigger("change"), window.PayPalHandler && "function" == typeof window.PayPalHandler.capture_paypal_payment && window.PayPalHandler.capture_paypal_payment();
      },
      update_checkout: function () {},
      apply_coupon: function (r) {
        r.preventDefault();
        var o = e(this);
        if (o.is(".processing")) return !1;
        if (o.find('input[name="coupon_code"]').val()) {
          var a = {
            security: omlms_checkout_params.apply_coupon_nonce,
            coupon_code: o.find('input[name="coupon_code"]').val(),
            action: "creator_lms_apply_coupon"
          };
          return e.ajax({
            type: "POST",
            url: omlms_checkout_params.ajax_url,
            data: a,
            dataType: "json",
            success: function (r) {
              if (e(".omlms-notices-wrapper").empty(), r && r.success && r.data.fragments) e.each(r.data.fragments, function (r, o) {
                t.fragments && t.fragments[r] === o || e(r).html(o);
              }), t.fragments = a.fragments;else {
                var o = r.data.notice || r.data.message;
                e(".omlms-notices-wrapper").html(o);
              }
            },
            error: function (e, r, t) {
              console.error("AJAX Error:", r, t), alert("Something went wrong. Please try again.");
            }
          }), !1;
        }
      },
      remove_coupon: function (r) {
        r.preventDefault();
        var o = e(this).data("coupon"),
          a = {
            security: omlms_checkout_params.remove_coupon_nonce,
            coupon_code: o,
            action: "creator_lms_remove_coupon"
          };
        e.ajax({
          type: "POST",
          url: omlms_checkout_params.ajax_url,
          data: a,
          dataType: "json",
          success: function (r) {
            r && r.data.fragments && (e.each(r.data.fragments, function (r, o) {
              t.fragments && t.fragments[r] === o || e(r).html(o);
            }), t.fragments = a.fragments);
          },
          error: function (e) {}
        });
      },
      payment_method_selected: function (r) {
        if (r.stopPropagation(), e(this).parents(".creator-lms-single-payment").addClass("selected").siblings().removeClass("selected"), e(".payment_methods input.input-radio").length > 1) {
          var o = e(this).parents(".creator-lms-single-payment").find("div.payment_box." + e(this).attr("ID")),
            a = e(this).is(":checked");
          a && !o.is(":visible") && (e(this).parents(".creator-lms-single-payment").find("div.payment_box").filter(":visible").slideUp(), a && (e(this).parents(".creator-lms-single-payment").siblings().find("div.payment_box").slideUp(), o.slideDown()));
        } else e(this).parents(".creator-lms-single-payment").siblings().find("div.payment_box").slideUp(), e(this).parents(".creator-lms-single-payment").find("div.payment_box").slideDown();
        e(this).data("order_button_text") ? e("#place_order").text(e(this).data("order_button_text")) : e("#place_order").text(e("#place_order").data("value"));
        var s = e('.creator-lms-checkout-form input[name="payment_method"]:checked').attr("id");
        s !== t.selectedPaymentMethod && e(document.body).trigger("payment_method_selected"), t.selectedPaymentMethod = s, t.applyGatewayRequiredFields();
      },
      applyGatewayRequiredFields: function () {
        var r = (window.omlms_checkout_params || {}).gateway_required_fields || {},
          o = (e('.creator-lms-checkout-form input[name="payment_method"]:checked').attr("id") || "").replace(/^payment_method_/, ""),
          a = r[o] || [],
          s = [];
        Object.keys(r).forEach(function (e) {
          (r[e] || []).forEach(function (e) {
            -1 === s.indexOf(e) && s.push(e);
          });
        }), s.forEach(function (e) {
          t.setFieldRequired(e, -1 !== a.indexOf(e));
        });
      },
      setFieldRequired: function (r, t) {
        var o = e("#" + r + "_field");
        if (o.length) {
          var a = o.find("input, select"),
            s = o.find("label");
          if (a.length) return t ? (a.attr("required", "required").prop("required", !0), o.addClass("validate-required"), s.find(".optional").hide(), void (0 === s.find(".required").length && s.length && s.append(' <abbr class="required" title="required">*</abbr>'))) : void (a.data("omlmsServerRequired") || (a.removeAttr("required").prop("required", !1), o.removeClass("validate-required"), s.find(".optional").show(), s.find(".required").remove()));
        }
      },
      show_login_form: function () {
        return e(this).closest(".creator-lms").find(".omlms-notices-wrapper").empty(), e(".creator-lms-form-login").slideToggle(), t.isCheckoutLogin = !t.isCheckoutLogin, !1;
      },
      submit: function (r) {
        r.preventDefault(), e(".omlms-notices-wrapper").empty(), e(this).find(".creator-lms-place-order-button .creator-lms-loader").show(), e(this).find(".creator-lms-place-order-button").prop("disabled", !0);
        var o = e(this);
        if (o.find('button[type="submit"]'), o.is(".processing")) return o.find(".creator-lms-place-order-button .creator-lms-loader").hide(), o.find(".creator-lms-place-order-button").prop("disabled", !0), !1;
        var a = this,
          s = t.selectedPaymentMethod;
        s && "payment_method_stripe" === s || s && "payment_method_razorpay" === s || e.ajax({
          type: "POST",
          url: omlms_checkout_params.ajax_url,
          data: o.serialize(),
          dataType: "json",
          success: function (r) {
            e(".omlms-notices-wrapper").empty(), o.removeClass("processing"), o.find(".creator-lms-place-order-button .creator-lms-loader").hide(), o.find(".creator-lms-place-order-button").prop("disabled", !0), r.success || "success" === r.result ? (window.location.href = r.redirect, e(a).find(".creator-lms-place-order-button .creator-lms-loader").hide(), e(a).find(".creator-lms-place-order-button").prop("disabled", !1)) : (e(a).find(".creator-lms-place-order-button .creator-lms-loader").hide(), e(a).find(".creator-lms-place-order-button").prop("disabled", !1)), r.message && (t.submit_error(o, r.message), e(a).find(".creator-lms-place-order-button .creator-lms-loader").hide(), e(a).find(".creator-lms-place-order-button").removeAttr("disabled"));
          }
        });
      },
      toggle_create_account: function () {
        e("div.create-account").hide(), e(this).is(":checked") && (e("#account_password").val("").trigger("change"), e("div.create-account").slideDown());
      },
      login: function (r) {
        r.preventDefault();
        var o = e(this),
          a = o.serialize() + "&isCheckoutLogin=" + encodeURIComponent(t.isCheckoutLogin);
        e.ajax({
          type: "POST",
          url: omlms_checkout_params.ajax_url,
          data: a,
          dataType: "json",
          success: function (e) {
            "success" === e.status ? (o.hide(), window.location.reload()) : "error" === e.status && t.submit_error(o, e.message);
          },
          error: function (e, r, t) {
            console.error(e.responseText);
          }
        });
      },
      signup: function (o) {
        o.preventDefault();
        var a = e(this),
          s = a.find("#signup-password").val();
        if ((null == s ? void 0 : s.length) < 8) {
          var c = '<div class="omlms-error-notices"><div class="omlms-NoticeGroup"><ul class="omlms-error" role="alert"><li>' + r("Password must be at least 8 characters long.", "ohmylms") + "</li></ul></div></div>";
          t.submit_error(a, c);
        } else e.ajax({
          type: "POST",
          url: omlms_checkout_params.ajax_url,
          data: a.serialize(),
          dataType: "json",
          success: function (e) {
            "success" === e.status ? (a.hide(), window.location.reload()) : "error" === e.status && t.submit_error(a, e.message);
          },
          error: function (e, r, t) {
            console.error(e.responseText);
          }
        });
      },
      submit_error: function (r, o) {
        if (e(".omlms-notices-wrapper").empty(), e(".omlms-NoticeGroup-checkout, .omlms-error, .omlms-message, .is-error, .is-success").remove(), e(".omlms-notices-wrapper").prepend('<div class="creator-lms-checkout-notice">' + o + "</div>"), e(".omlms-NoticeGroup .omlms-error li").length > 0) {
          var a = e(".omlms-NoticeGroup .omlms-error li").length;
          1 == a ? e(".creator-lms-checkout-notice").addClass("single-error") : e(".creator-lms-checkout-notice").removeClass("single-error"), 2 < a ? e(".creator-lms-checkout-notice").addClass("more-then-two-error") : e(".creator-lms-checkout-notice").removeClass("more-then-two-error");
        }
        t.scroll_to_notices();
      },
      scroll_to_notices: function () {
        var r = e(".omlms-NoticeGroup-updateOrderReview, .omlms-notices-wrapper");
        r.length || (r = e("form.checkout")), e.scroll_to_notices(r);
      }
    };
    t.init();
  }), jQuery(document).ready(function (e) {
    var r = new URLSearchParams(window.location.search),
      t = r.get("PayerID"),
      o = r.get("token"),
      a = r.get("subscription_id"),
      s = r.get("ba_token"),
      c = localStorage.getItem("omlms_paypal_order_id");
    function n(e) {
      e.fadeIn(200), setTimeout(function () {
        e.fadeOut(200);
      }, 1500);
    }
    c && t && o && request_paypal_capture(c), a && s && o && request_paypal_subscription_capture(a), e(".crlm_purchase").on("click", function (r) {
      r.preventDefault();
      var t = e(this).data("plan"),
        o = e(this).data("membership");
      e.ajax({
        type: "POST",
        url: omlms_checkout_params.ajax_url,
        data: {
          action: "creator_lms_purchase_membership",
          nonce: omlms_checkout_params.nonce,
          membership_id: o,
          plan: t
        },
        success: function (e) {
          "success" === e.status && (window.location = e.redirect_url);
        },
        error: function (e, r, t) {
          console.error(e.responseText);
        }
      });
    }), e(document).on("click focus", ".creator-lms-input-text", function () {
      e(this).parents(".creator-lms-form-row").addClass("creator-lms-folded");
    }), e(document).ready(function () {
      e(".creator-lms-input-text").each(function () {
        var r = e(this).parents(".creator-lms-form-row");
        "" !== e(this).val().trim() ? r.addClass("creator-lms-folded") : r.removeClass("creator-lms-folded");
      }), e(".creator-lms-input-text").each(function () {
        var r = e(this).parents(".creator-lms-form-row");
        "" !== e(this).val().trim() ? r.addClass("creator-lms-folded") : r.removeClass("creator-lms-folded");
      });
    }), e(document).on("blur", ".creator-lms-input-text", function () {
      "" === e(this).val() && e(this).parents(".creator-lms-form-row").removeClass("creator-lms-folded");
    }), e(document).on("click", ".order-review-toggle-head", function () {
      e(this).toggleClass("active"), e(this).siblings(".creator-lms-order-review-table-wrapper").slideToggle();
    }), e(document).on("keyup", ".creator-lms-checkout-coupon .apply-coupon", function () {
      e(this).val().trim().length > 0 ? e(this).parents(".creator-lms-checkout-coupon").addClass("active") : e(this).parents(".creator-lms-checkout-coupon").removeClass("active");
    }), e(".thankyou-copy-order-id").on("click", function () {
      var r = e(this).closest("td"),
        t = r.find(".thankyou-order-id-text").text().trim(),
        o = r.find(".thankyou-copy-alert");
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(function () {
        n(o);
      }).catch(function (e) {
        console.error("Clipboard API failed:", e);
      });else {
        var a = e("<textarea>");
        e("body").append(a), a.val(t).css({
          position: "absolute",
          left: "-9999px"
        }).select();
        try {
          document.execCommand("copy") ? n(o) : console.error("Fallback copy failed");
        } catch (e) {
          console.error("Fallback copy error:", e);
        }
        a.remove();
      }
    });
  }), window.PaymentGatewayHandlers = window.PaymentGatewayHandlers || {}, window.registerPaymentGatewayHandler = function (e, r) {
    window.PaymentGatewayHandlers[e] = r;
  };
})();
