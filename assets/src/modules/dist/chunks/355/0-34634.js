// Reconstructed Webpack factory 34634; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = t.OrderDetailsBlock = void 0;
  var a = n(49050),
    i = n(2543),
    o = l(n(41594)),
    r = n(87381),
    c = l(n(13534)),
    u = a.components.Wrapper;
  t.OrderDetailsBlock = (0, a.createCustomBlock)({
    name: "Order Details",
    type: r.CustomBlocksType.ORDER_DETAILS,
    validParentType: [a.BasicType.PAGE, a.AdvancedType.WRAPPER, a.BasicType.WRAPPER, a.AdvancedType.COLUMN],
    create: function (e) {
      var t = {
        type: r.CustomBlocksType.ORDER_DETAILS,
        data: {
          value: {
            title: "It looks like you forgot something",
            buttonText: "Check out",
            quantity: 3
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
        i = (e.context, e.dataSource, t.data.value),
        r = (i.title, i.buttonText, i.quantity, t.attributes);
      return o.default.createElement(u, {
        "css-className": "testing" === l ? (0, a.getPreviewClassName)(n, t.type) : "",
        padding: "0px",
        border: "none",
        direction: "ltr",
        "background-color": r["background-color"]
      }, o.default.createElement(c.default, {
        attributes: r
      }));
    }
  });
  var d = n(20600);
  Object.defineProperty(t, "Panel", {
    enumerable: !0,
    get: function () {
      return d.Panel;
    }
  });
});
