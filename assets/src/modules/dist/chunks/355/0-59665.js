// Reconstructed Webpack factory 59665; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = t.DownloadOrderItemBlock = void 0;
  var a = n(49050),
    i = n(2543),
    o = l(n(41594)),
    r = n(87381),
    c = l(n(34996)),
    u = (a.components.Column, a.components.Section, a.components.Wrapper);
  a.components.Button, t.DownloadOrderItemBlock = (0, a.createCustomBlock)({
    name: "Download Order Item",
    type: r.CustomBlocksType.DOWNLOAD_ORDER_ITEM,
    validParentType: [a.BasicType.PAGE, a.AdvancedType.WRAPPER, a.BasicType.WRAPPER, a.AdvancedType.COLUMN],
    create: function (e) {
      var t = {
        type: r.CustomBlocksType.DOWNLOAD_ORDER_ITEM,
        data: {
          value: {
            title: "Downloads",
            tableRow1: "Product",
            tableRow2: "Expires",
            tableRow3: "Download"
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
          "inner-padding": "5px 5px 5px 5px",
          align: "left",
          "title-font-family": "Arial, sans-serif",
          "title-text-color": "#000",
          "title-font-size": "16px",
          "title-line-height": "1",
          "title-font-weight": "normal"
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
        i = (e.context, e.dataSource, t.attributes),
        r = t.data.value,
        d = r.title,
        s = r.tableRow1,
        m = r.tableRow2,
        f = r.tableRow3;
      return o.default.createElement(u, {
        "css-className": "".concat("testing" === l ? (0, a.getPreviewClassName)(n, t.type) : "", " downloadable-block-wrapper"),
        padding: "0px",
        border: "none",
        direction: "ltr",
        "background-color": i["background-color"]
      }, o.default.createElement(c.default, {
        attributes: i,
        title: d,
        tableRow1: s,
        tableRow2: m,
        tableRow3: f
      }));
    }
  });
  var d = n(37063);
  Object.defineProperty(t, "Panel", {
    enumerable: !0,
    get: function () {
      return d.Panel;
    }
  });
});
