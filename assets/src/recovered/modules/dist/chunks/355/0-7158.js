// Reconstructed Webpack factory 7158; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = t.BillingAddressBlock = void 0;
  var a = n(49050),
    i = n(2543),
    o = l(n(41594)),
    r = n(87381),
    c = a.components.Column,
    u = a.components.Section,
    d = a.components.Wrapper;
  a.components.Button, t.BillingAddressBlock = (0, a.createCustomBlock)({
    name: "Billing Address",
    type: r.CustomBlocksType.BILLING_ADDRESS,
    validParentType: [a.BasicType.PAGE, a.AdvancedType.WRAPPER, a.BasicType.WRAPPER, a.AdvancedType.COLUMN],
    create: function (e) {
      var t = {
        type: r.CustomBlocksType.BILLING_ADDRESS,
        data: {
          value: {}
        },
        attributes: {
          "background-color": "#ffffff",
          color: "#000000",
          "font-family": "Arial",
          "font-size": "14px",
          "font-weight": "normal",
          "line-height": "1.5",
          padding: "10px 10px 10px 10px",
          align: "left"
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
        i = (e.context, e.dataSource, t.attributes);
      return o.default.createElement(d, {
        "css-className": "testing" === l ? (0, a.getPreviewClassName)(n, t.type) : "",
        padding: "0px",
        border: "none",
        direction: "ltr",
        "background-color": i["background-color"]
      }, o.default.createElement(u, {
        padding: i.padding
      }, o.default.createElement(c, {
        "vertical-align": "top",
        padding: "0px",
        "css-className": "mint-billing-address-block"
      }, o.default.createElement("mj-text", {
        color: i.color,
        "font-size": i["font-size"],
        "font-family": i["font-family"],
        "font-weight": i["font-weight"],
        "line-height": i["line-height"],
        padding: "0px",
        align: i.align
      }, o.default.createElement("span", {
        className: "mint-billing-address-first-name"
      }, o.default.createElement("p", {
        style: {
          margin: 0
        }
      }, "John Doe"), o.default.createElement("p", {
        style: {
          margin: 0
        }
      }, "Ap #587-5412 Sit Rd."), o.default.createElement("p", {
        style: {
          margin: 0
        }
      }, "Azusa, NY 10001"), o.default.createElement("p", {
        style: {
          margin: 0
        }
      }, "United States (US)"), o.default.createElement("p", {
        style: {
          margin: 0
        }
      }, "0123456789"), o.default.createElement("p", {
        style: {
          margin: 0
        }
      }, "johndoe@domain.com"))))));
    }
  });
  var s = n(93012);
  Object.defineProperty(t, "Panel", {
    enumerable: !0,
    get: function () {
      return s.Panel;
    }
  });
});
