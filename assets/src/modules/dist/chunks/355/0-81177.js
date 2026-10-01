// Reconstructed Webpack factory 81177; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = t.CartBlock = void 0;
  var a = n(49050),
    i = n(58088),
    o = n(2543),
    r = l(n(41594)),
    c = l(n(84410)),
    u = l(n(80566)),
    d = n(87381),
    s = a.components.Column,
    m = a.components.Section,
    f = a.components.Wrapper,
    p = a.components.Text;
  a.components.Button, t.CartBlock = (0, a.createCustomBlock)({
    name: "Carts",
    type: d.CustomBlocksType.CART_BLOCK,
    validParentType: [a.BasicType.PAGE, a.AdvancedType.WRAPPER, a.BasicType.WRAPPER, a.AdvancedType.COLUMN],
    create: function (e) {
      var t = {
        type: d.CustomBlocksType.CART_BLOCK,
        data: {
          value: {
            title: "It looks like you forgot something",
            buttonText: "Check out",
            quantity: 3
          }
        },
        attributes: {
          "background-color": "#ffffff",
          "button-text-color": "#ffffff",
          "button-color": "#414141",
          "product-name-color": "#414141",
          "product-price-color": "#414141",
          "title-color": "#222222",
          "pd-width": "5px",
          "pd-height": "5px",
          hcolor: "#000000",
          pncolor: "#000000",
          prcolor: "#000000",
          bcolor: "#4A90E2",
          btcolor: "#ffffff",
          "p-font-family": "Arial",
          "d-font-family": "Arial",
          "h-font-size": "20px",
          "h-font-family": "Arial",
          "h-font-weight": "800",
          "p-font-size": "12px",
          "p-font-weight": "300",
          "p-line-height": "1",
          "d-font-size": "10px",
          "d-font-weight": "300",
          "d-line-height": "1.5",
          "pr-font-family": "Arial",
          "pr-font-size": "12px",
          "pr-font-weight": "300",
          "pr-line-height": "1",
          layoutType: "cart_table",
          "image-width": "150px",
          "image-height": "150px",
          "inner-padding": "0px 0px 0px 0px",
          "btn-font-size": "13px",
          "btn-font-weight": "300",
          "btn-font-family": "Arial",
          "btn-line-height": "1.2",
          "table-image-height": "60px",
          "table-image-width": "60px",
          "outer-padding": "0px 0px 0px 0px",
          "td-padding": "12px 12px 12px 12px",
          "td-image-padding": "0px 0px 0px 0px",
          "table-price-font-size": "13px",
          "table-price-weight": "300",
          "table-price-family": "Arial",
          "table-price-height": "1",
          "pr-quantity": "#000000",
          "table-header-color": "#000000",
          "table-footer-color": "#000000",
          "table-header-size": "13px",
          "table-header-weight": "bold",
          "table-header-family": "Arial",
          "table-header-height": "2",
          "table-footer-size": "13px",
          "table-footer-weight": "bold",
          "table-footer-family": "Arial",
          "table-footer-height": "2",
          "pr-quantity-font-size": "12px",
          "pr-quantity-font-weight": "300",
          "pr-quantity-font-family": "Arial",
          "pr-quantity-line-height": "1.2"
        },
        children: [{
          type: a.BasicType.TEXT,
          children: [],
          data: {
            value: {
              content: "custom block title"
            }
          },
          attributes: {}
        }]
      };
      return (0, o.merge)(t, e);
    },
    render: function (e) {
      var t,
        n,
        l,
        o = e.data,
        d = e.idx,
        g = e.mode,
        v = (e.context, e.dataSource),
        h = o.data.value,
        b = h.title,
        _ = h.buttonText,
        y = h.quantity,
        E = o.attributes,
        w = y <= 3 ? "" : "33.33%",
        k = [],
        C = "";
      return (null == v ? void 0 : v.cartItems) && v.cartItems.hasOwnProperty(d) && (k = null === (n = null === (t = v.cartItems[d]) || void 0 === t ? void 0 : t.items) || void 0 === n ? void 0 : n.slice(0, y), C = null === (l = v.cartItems[d]) || void 0 === l ? void 0 : l.total_price), r.default.createElement(f, {
        "css-className": "testing" === g ? (0, a.getPreviewClassName)(d, o.type) : "",
        padding: "20px 0px 20px 0px",
        border: "none",
        direction: "ltr",
        "background-color": E["background-color"]
      }, "" !== b && r.default.createElement(m, {
        padding: "0px"
      }, r.default.createElement(s, {
        padding: "0px",
        border: "none",
        "vertical-align": "top"
      }, r.default.createElement(p, {
        "font-size": E["h-font-size"],
        padding: "10px 25px 10px 25px",
        "line-height": "1",
        align: "center",
        "font-weight": E["h-font-weight"],
        "font-family": E["h-font-family"],
        color: E.hcolor,
        "css-className": (0, i.getContentEditableClassName)(a.BasicType.TEXT, "".concat(d, ".data.value.title")).join(" ")
      }, b))), "cart_table" === (null == E ? void 0 : E.layoutType) ? r.default.createElement(c.default, {
        items: k,
        attributes: E,
        totalPrice: C
      }) : r.default.createElement(u.default, {
        cartItemsList: k,
        perWidth: w,
        attributes: E,
        buttonText: _
      }));
    }
  });
  var g = n(1951);
  Object.defineProperty(t, "Panel", {
    enumerable: !0,
    get: function () {
      return g.Panel;
    }
  });
});
