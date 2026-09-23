(() => {
  var a;
  (a = jQuery)(function () {
    ({
      init: function () {
        a(document.body).on("click", ".add_to_cart_button", this.onAddToCart).on("click", ".add-to-cart-using-point-button", this.onAddToCartUsingPoint).on("click", ".remove_from_cart_button", this.onRemoveFromCart).on("course_added_to_cart", this.updateAddToCartButton);
      },
      onAddToCart: function (t) {
        t.preventDefault();
        var o = a(this),
          d = o.data();
        o.hasClass("loading") || (1 != o.attr("is_already_purchased") ? (d.action = "creator_lms_add_to_cart", d.nonce = omlms_add_to_cart_params.nonce, o.removeClass("added"), o.addClass("loading"), a(document.body).trigger("course_adding_to_cart", [o, d]), a.ajax({
          url: omlms_add_to_cart_params.ajax_url,
          type: "POST",
          data: d,
          dataType: "json",
          success: function (t) {
            t ? a(document.body).trigger("course_added_to_cart", [t, o]) : o.removeClass("loading");
          },
          error: function () {
            o.removeClass("loading");
          }
        })) : window.location.href = o.attr("href"));
      },
      onAddToCartUsingPoint: function (t) {
        t.preventDefault();
        var o = a(this),
          d = o.data();
        o.hasClass("loading") || (1 != o.attr("is_already_purchased") ? (d.action = "creator_lms_add_to_cart", d.purchase_by = "point", d.nonce = omlms_add_to_cart_params.nonce, o.removeClass("added"), o.addClass("loading"), a(document.body).trigger("course_adding_to_cart", [o, d]), a.ajax({
          url: omlms_add_to_cart_params.ajax_url,
          type: "POST",
          data: d,
          dataType: "json",
          success: function (t) {
            t ? a(document.body).trigger("course_added_to_cart", [t, o]) : o.removeClass("loading");
          },
          error: function () {
            o.removeClass("loading");
          }
        })) : window.location.href = o.attr("href"));
      },
      onRemoveFromCart: function (a) {
        a.preventDefault();
      },
      updateAddToCartButton: function (a, t, o) {
        o.removeClass("loading"), o.addClass("added"), "success" === t.status && (window.location = t.redirect_url);
      }
    }).init();
  });
})();
