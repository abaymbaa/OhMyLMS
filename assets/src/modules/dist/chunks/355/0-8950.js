// Reconstructed Webpack factory 8950; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ProCartBlock = void 0;
  var a = n(49050),
    i = n(2543),
    o = l(n(41594)),
    r = n(87381),
    c = a.components.Column,
    u = a.components.Section,
    d = a.components.Wrapper,
    s = a.components.Text;
  t.ProCartBlock = (0, a.createCustomBlock)({
    name: "Carts",
    type: r.CustomBlocksType.PRO_CART_BLOCK,
    validParentType: [],
    create: function (e) {
      var t = {
        type: r.CustomBlocksType.PRO_CART_BLOCK,
        data: {
          value: {
            title: "Please activate Mail Mint Pro plugin"
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
          "p-font-family": "lucida Grande",
          "d-font-family": "lucida Grande",
          "h-font-size": "20px",
          "h-font-weight": "800"
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
      return (0, i.merge)(t, e);
    },
    render: function (e) {
      var t = e.data,
        n = e.idx,
        l = e.mode,
        i = t.data.value.title,
        r = t.attributes;
      return o.default.createElement(d, {
        "css-className": "testing" === l ? (0, a.getPreviewClassName)(n, t.type) : "",
        padding: "20px 0px 20px 0px",
        border: "none",
        direction: "ltr",
        "background-color": r["background-color"]
      }, o.default.createElement(u, {
        padding: "0px"
      }, o.default.createElement(c, {
        padding: "0px",
        border: "none",
        "vertical-align": "top"
      }, o.default.createElement(s, {
        "font-size": "20px",
        padding: "10px 25px 10px 25px",
        "line-height": "1",
        align: "center",
        "font-weight": r["h-font-weight"],
        color: r.hcolor
      }, i))));
    }
  });
});
