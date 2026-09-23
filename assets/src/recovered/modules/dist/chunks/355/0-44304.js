// Reconstructed Webpack factory 44304; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ProShippingAddressBlock = void 0;
  var a = n(49050),
    i = n(2543),
    o = l(n(41594)),
    r = n(87381),
    c = a.components.Column,
    u = a.components.Section,
    d = a.components.Wrapper,
    s = a.components.Text;
  t.ProShippingAddressBlock = (0, a.createCustomBlock)({
    name: "Shipping Address",
    type: r.CustomBlocksType.PRO_SHIPPING_ADDRESS,
    validParentType: [],
    create: function (e) {
      var t = {
        type: r.CustomBlocksType.PRO_SHIPPING_ADDRESS,
        data: {
          value: {
            title: "Please activate Mail Mint Pro plugin"
          }
        },
        attributes: {
          "background-color": "#ffffff",
          "border-color": "#e5e5e5",
          "border-width": "1px",
          "table-head-color": "#000000",
          "table-text-color": "#000000",
          "font-family": "Arial",
          "font-size": "100%",
          "font-weight": "normal",
          "line-height": "1.5",
          padding: "10px 10px 10px 10px",
          "inner-padding": "5px 5px 5px 5px"
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
        i = t.attributes;
      return o.default.createElement(d, {
        "css-className": "testing" === l ? (0, a.getPreviewClassName)(n, t.type) : "",
        padding: "20px 0px 20px 0px",
        border: "none",
        direction: "ltr",
        "background-color": i["background-color"]
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
        "font-weight": i["font-weight"],
        color: i.color || "#000000"
      }, '"Order Details"'))));
    }
  });
});
