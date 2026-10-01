// Reconstructed Webpack factory 80566; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => m
  });
  var l = n(49050),
    a = n(41594),
    i = n.n(a),
    o = l.components.Column,
    r = l.components.Section,
    c = l.components.Text,
    u = l.components.Image,
    d = l.components.Group,
    s = l.components.Button;
  const m = function (e) {
    var t = e.cartItemsList,
      n = void 0 === t ? [] : t,
      l = e.perWidth,
      a = e.attributes,
      m = e.buttonText;
    return i().createElement(i().Fragment, null, i().createElement(r, {
      padding: "0px"
    }, i().createElement(d, {
      "vertical-align": "top",
      direction: "ltr",
      "css-className": "mint-cart-block"
    }, n.map(function (e, t) {
      return i().createElement(i().Fragment, null, i().createElement(d, {
        key: t
      }, i().createElement(o, {
        width: l,
        padding: a["outer-padding"],
        border: "none",
        "vertical-align": "top",
        "css-className": "mint-cart-item"
      }, i().createElement(u, {
        align: "center",
        padding: a["inner-padding"],
        height: a["image-height"],
        width: a["image-width"],
        src: null == e ? void 0 : e.thumbnail[0],
        "css-className": "mint-cart-item-image",
        alt: null == e ? void 0 : e.title
      }), i().createElement(c, {
        "font-size": a["p-font-size"],
        padding: "5px 0px 5px 0px",
        "line-height": a["p-line-height"],
        "font-weight": a["p-font-weight"],
        "font-family": a["p-font-family"],
        align: "center",
        color: a.pncolor,
        "css-className": "mint-cart-item-title"
      }, null == e ? void 0 : e.title), i().createElement(c, {
        "font-size": a["pr-font-size"],
        "line-height": a["pr-line-height"],
        "font-weight": a["pr-font-weight"],
        "font-family": a["pr-font-family"],
        padding: "5px 0px 5px 0px",
        align: "center",
        color: a.prcolor,
        "css-className": "mint-cart-item-price"
      }, null == e ? void 0 : e.price_html))));
    }))), i().createElement(r, {
      padding: "0px"
    }, i().createElement(o, {
      padding: "0px",
      border: "none",
      "vertical-align": "top"
    }, i().createElement(s, {
      align: "center",
      padding: "15px 0px",
      "background-color": a.bcolor,
      color: a.btcolor,
      target: "_blank",
      "vertical-align": "middle",
      "font-size": a["btn-font-size"],
      "font-weight": a["btn-font-weight"],
      "font-family": a["btn-font-family"],
      "line-height": a["btn-line-height"],
      border: "none",
      "text-align": "center",
      href: "{{cart.recovery_url}}"
    }, m))));
  };
});
