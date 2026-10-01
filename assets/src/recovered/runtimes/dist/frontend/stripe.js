/*! For license information please see stripe.js.LICENSE.txt */
(() => {
  function e() {
    var r,
      o,
      n = "function" == typeof Symbol ? Symbol : {},
      a = n.iterator || "@@iterator",
      c = n.toStringTag || "@@toStringTag";
    function i(e, n, a, c) {
      var i = n && n.prototype instanceof l ? n : l,
        d = Object.create(i.prototype);
      return t(d, "_invoke", function (e, t, n) {
        var a,
          c,
          i,
          l = 0,
          d = n || [],
          u = !1,
          m = {
            p: 0,
            n: 0,
            v: r,
            a: p,
            f: p.bind(r, 4),
            d: function (e, t) {
              return a = e, c = 0, i = r, m.n = t, s;
            }
          };
        function p(e, t) {
          for (c = e, i = t, o = 0; !u && l && !n && o < d.length; o++) {
            var n,
              a = d[o],
              p = m.p,
              f = a[2];
            e > 3 ? (n = f === t) && (i = a[(c = a[4]) ? 5 : (c = 3, 3)], a[4] = a[5] = r) : a[0] <= p && ((n = e < 2 && p < a[1]) ? (c = 0, m.v = t, m.n = a[1]) : p < f && (n = e < 3 || a[0] > t || t > f) && (a[4] = e, a[5] = t, m.n = f, c = 0));
          }
          if (n || e > 1) return s;
          throw u = !0, t;
        }
        return function (n, d, f) {
          if (l > 1) throw TypeError("Generator is already running");
          for (u && 1 === d && p(d, f), c = d, i = f; (o = c < 2 ? r : i) || !u;) {
            a || (c ? c < 3 ? (c > 1 && (m.n = -1), p(c, i)) : m.n = i : m.v = i);
            try {
              if (l = 2, a) {
                if (c || (n = "next"), o = a[n]) {
                  if (!(o = o.call(a, i))) throw TypeError("iterator result is not an object");
                  if (!o.done) return o;
                  i = o.value, c < 2 && (c = 0);
                } else 1 === c && (o = a.return) && o.call(a), c < 2 && (i = TypeError("The iterator does not provide a '" + n + "' method"), c = 1);
                a = r;
              } else if ((o = (u = m.n < 0) ? i : e.call(t, m)) !== s) break;
            } catch (e) {
              a = r, c = 1, i = e;
            } finally {
              l = 1;
            }
          }
          return {
            value: o,
            done: u
          };
        };
      }(e, a, c), !0), d;
    }
    var s = {};
    function l() {}
    function d() {}
    function u() {}
    o = Object.getPrototypeOf;
    var m = [][a] ? o(o([][a]())) : (t(o = {}, a, function () {
        return this;
      }), o),
      p = u.prototype = l.prototype = Object.create(m);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, t(e, c, "GeneratorFunction")), e.prototype = Object.create(p), e;
    }
    return d.prototype = u, t(p, "constructor", u), t(u, "constructor", d), d.displayName = "GeneratorFunction", t(u, c, "GeneratorFunction"), t(p), t(p, c, "Generator"), t(p, a, function () {
      return this;
    }), t(p, "toString", function () {
      return "[object Generator]";
    }), (e = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function t(e, r, o, n) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    t = function (e, r, o, n) {
      function c(r, o) {
        t(e, r, function (e) {
          return this._invoke(r, o, e);
        });
      }
      r ? a ? a(e, r, {
        value: o,
        enumerable: !n,
        configurable: !n,
        writable: !n
      }) : e[r] = o : (c("next", 0), c("throw", 1), c("return", 2));
    }, t(e, r, o, n);
  }
  function r(e, t, r, o, n, a, c) {
    try {
      var i = e[a](c),
        s = i.value;
    } catch (e) {
      return void r(e);
    }
    i.done ? t(s) : Promise.resolve(s).then(o, n);
  }
  jQuery(function (t) {
    "use strict";

    try {
      var o = Stripe(ohmylms_stripe_params.key);
    } catch (e) {
      return void console.error(e);
    }
    t.scroll_to_notices = function (e) {
      e.length && t("html, body").animate({
        scrollTop: e.offset().top - 100
      }, 1e3);
    };
    var n,
      a,
      c,
      i,
      s,
      l = o.elements(),
      d = {
        $checkout_form: t("form.checkout"),
        selectedPaymentMethod: !1,
        mountElements: function () {
          t("#stripe-card-element").length && (n.mount("#stripe-card-element"), a.mount("#stripe-exp-element"), c.mount("#stripe-cvc-element"));
        },
        createElements: function () {
          var e = {
              base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                  color: "#7A8B9A"
                }
              },
              invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
              }
            },
            t = {
              focus: "focused",
              empty: "empty",
              invalid: "invalid"
            };
          n = l.create("cardNumber", {
            placeholder: "Card Number*",
            style: e,
            classes: t
          }), a = l.create("cardExpiry", {
            placeholder: "Expiry date (MM/YY)*",
            style: e,
            classes: t
          }), c = l.create("cardCvc", {
            placeholder: "CVC*",
            style: e,
            classes: t
          }), n.addEventListener("change", function (e) {
            d.onCCFormChange(), d.updateCardBrand(e.brand), e.error;
          }), a.addEventListener("change", function (e) {
            d.onCCFormChange(), e.error;
          }), c.addEventListener("change", function (e) {
            d.onCCFormChange(), e.error;
          }), d.mountElements();
        },
        onCCFormChange: function () {
          d.reset();
        },
        reset: function () {
          t(".ohmylms-stripe-error, .stripe-source").remove();
        },
        updateCardBrand: function (e) {
          var r = {
              visa: "stripe-visa-brand",
              mastercard: "stripe-mastercard-brand",
              amex: "stripe-amex-brand",
              discover: "stripe-discover-brand",
              diners: "stripe-diners-brand",
              jcb: "stripe-jcb-brand",
              unknown: "stripe-credit-card-brand"
            },
            o = t(".stripe-card-brand"),
            n = "stripe-credit-card-brand";
          e in r && (n = r[e]), t.each(r, function (e, t) {
            o.removeClass(t);
          }), o.addClass(n);
        },
        payment_method_selected: function (e) {
          if (t(".payment_methods input.input-radio").length > 1) {
            var r = t(this).parents(".ohmylms-single-payment").find("div.payment_box." + t(this).attr("ID")),
              o = t(this).is(":checked");
            o && !r.is(":visible") && (t(this).parents(".ohmylms-single-payment").find("div.payment_box").filter(":visible").slideUp(), o && (t(this).parents(".ohmylms-single-payment").siblings().find("div.payment_box").slideUp(), r.slideDown()));
          } else t(this).parents(".ohmylms-single-payment").siblings().find("div.payment_box").slideUp(), t(this).parents(".ohmylms-single-payment").find("div.payment_box").slideDown();
          t(this).data("order_button_text") ? t("#place_order").text(t(this).data("order_button_text")) : t("#place_order").text(t("#place_order").data("value"));
          var n = t('.ohmylms-checkout-form input[name="payment_method"]:checked').attr("id");
          n !== d.selectedPaymentMethod && t(document.body).trigger("payment_method_selected"), d.selectedPaymentMethod = n;
        },
        submit: (i = e().m(function r(a) {
          var c, i, s, l, u, m, p;
          return e().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return a.preventDefault(), e.n = 1, o.createPaymentMethod({
                  type: "card",
                  card: n,
                  billing_details: {
                    name: document.querySelector("#first_name") ? ((null === (c = document.querySelector("#first_name")) || void 0 === c ? void 0 : c.value) + " " + (null === (i = document.querySelector("#last_name")) || void 0 === i ? void 0 : i.value)).trim() : void 0,
                    email: null === (s = document.querySelector("#email")) || void 0 === s ? void 0 : s.value
                  }
                });
              case 1:
                if (l = e.v, u = l.paymentMethod, !(m = l.error)) {
                  e.n = 3;
                  break;
                }
                if ("payment_method_stripe" === t('.ohmylms-checkout-form input[name="payment_method"]:checked').attr("id")) {
                  e.n = 2;
                  break;
                }
                return e.a(2);
              case 2:
                return t(".ohmylms-place-order-button .ohmylms-loader").hide(), t(".ohmylms-place-order-button").prop("disabled", !1), t(".ohmylms-notices-wrapper").empty(), p = '\n\t\t\t\t\t<div class="ohmylms-notices-wrapper ohmylms-error-notices">\n\t\t\t\t\t\t<div class="ohmylms-NoticeGroup">\n\t\t\t\t\t\t\t<ul class="ohmylms-error" role="alert">\n\t\t\t\t\t\t\t\t<li data-id="email">\n\t\t\t\t\t\t\t\t\t'.concat(m.message, "\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t"), d.submit_error(p), e.a(2);
              case 3:
                d.formSubmit(u);
              case 4:
                return e.a(2);
            }
          }, r);
        }), s = function () {
          var e = this,
            t = arguments;
          return new Promise(function (o, n) {
            var a = i.apply(e, t);
            function c(e) {
              r(a, o, n, c, s, "next", e);
            }
            function s(e) {
              r(a, o, n, c, s, "throw", e);
            }
            c(void 0);
          });
        }, function (e) {
          return s.apply(this, arguments);
        }),
        scroll_to_notices: function () {
          var e = t(".ohmylms-NoticeGroup-updateOrderReview, .ohmylms-notices-wrapper");
          e.length || (e = t("form.checkout")), t.scroll_to_notices(e);
        },
        submit_error: function (e) {
          if (t(".ohmylms-notices-wrapper").empty(), t(".ohmylms-NoticeGroup-checkout, .ohmylms-error, .ohmylms-message, .is-error, .is-success").remove(), t(".ohmylms-notices-wrapper").prepend('<div class="ohmylms-checkout-notice">' + e + "</div>"), t(".ohmylms-NoticeGroup .ohmylms-error li").length > 0) {
            var r = t(".ohmylms-NoticeGroup .ohmylms-error li").length;
            1 == r ? t(".ohmylms-checkout-notice").addClass("single-error") : t(".ohmylms-checkout-notice").removeClass("single-error"), 2 < r ? t(".ohmylms-checkout-notice").addClass("more-then-two-error") : t(".ohmylms-checkout-notice").removeClass("more-then-two-error");
          }
          d.scroll_to_notices();
        },
        formSubmit: function (e) {
          var r = this;
          if (this.$checkout_form.isBancontactChosen()) return !0;
          this.$checkout_form.append(t('<input type="hidden" />').addClass("stripe-source").attr("name", "stripe_source").val(e.id)), this.$checkout_form.append(t('<input type="hidden" />').addClass("payment-method").attr("name", "payment_method").val("stripe")), this.$checkout_form.find(".ohmylms-place-order-button .ohmylms-loader").show(), this.$checkout_form.addClass("processing"), this.$checkout_form.find(".ohmylms-place-order-button").prop("disabled", !0), t.ajax({
            type: "POST",
            url: ohmylms_checkout_params.ajax_url,
            data: this.$checkout_form.serialize() + "&action=ohmylms_checkout&stripe_source=" + e.id + "&payment_method=stripe",
            dataType: "json",
            success: function (e) {
              r.$checkout_form.find(".ohmylms-place-order-button .ohmylms-loader").hide(), r.$checkout_form.removeClass("processing"), r.$checkout_form.find(".ohmylms-place-order-button").prop("disabled", !1), e.success && (window.location.href = e.redirect), e.messages && (t(".ohmylms-place-order-button .ohmylms-loader").hide(), t(".ohmylms-place-order-button").prop("disabled", !1), t(".ohmylms-notices-wrapper").empty(), d.submit_error(e.messages));
            }
          });
        },
        init: function () {
          t.ajax({
            type: "POST",
            url: ohmylms_checkout_params.ajax_url,
            data: {
              security: ohmylms_checkout_params.stripe_nonce,
              action: "create_stripe_payment_intent"
            },
            dataType: "json",
            success: function (e) {
              var t = e.clientSecret;
              (l = o.elements({
                clientSecret: t
              })).create("payment").mount("#payment-element");
            }
          });
        },
        isBancontactChosen: function () {
          return t("#payment_method_bancontact").is(":checked");
        }
      };
    d.init();
  });
})();
