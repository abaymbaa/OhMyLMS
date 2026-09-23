// Reconstructed Webpack factory 2420; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = t.ProductBlock = void 0;
  var a = n(49050),
    i = n(58088),
    o = l(n(41594)),
    r = n(87381),
    c = l(n(42163)),
    u = l(n(12317)),
    d = (a.components.Column, a.components.Section, a.components.Wrapper);
  a.components.Text, t.ProductBlock = (0, a.createCustomBlock)({
    name: "Products",
    type: r.CustomBlocksType.PRODUCT_BLOCK,
    validParentType: [a.BasicType.PAGE, a.AdvancedType.WRAPPER, a.BasicType.WRAPPER, a.AdvancedType.COLUMN],
    create: function (e) {
      var t = {
        type: r.CustomBlocksType.PRODUCT_BLOCK,
        data: {
          value: {
            title: "You might also like",
            buttonText: "Buy now",
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
          bcolor: "#2B2D38",
          btcolor: "#ffffff",
          "p-font-family": "Arial",
          "d-font-family": "Arial",
          "h-font-family": "Arial",
          "h-font-size": "20px",
          "h-font-weight": "800",
          "p-font-size": "16px",
          "p-font-weight": "800",
          "p-line-height": "1",
          "d-font-size": "10px",
          "d-font-weight": "300",
          "d-line-height": "1.5",
          "pr-font-family": "Arial",
          "pr-font-size": "12px",
          "pr-font-weight": "300",
          "pr-line-height": "1",
          contentType: "title_only",
          contentFilter: "specific_product",
          layoutType: "single_grid",
          "image-height": "150px",
          "grid-image-height": "176px",
          "image-width": "150px",
          "grid-image-width": "264px",
          "outer-padding": "0px 0px 0px 0px",
          "grid-image-padding": "0px 0px 0px 0px",
          "btn-font-size": "13px",
          "btn-font-weight": "300",
          "btn-font-family": "Arial",
          "btn-line-height": "1.2",
          "btn-padding": "15px 0px 15px 0px",
          imagePosition: "left",
          dividerWidth: "1px",
          dividerStyle: "solid",
          dividerColor: "#C9CCCF",
          pnType: "h2",
          align: "center",
          clickable: "no",
          buttonStyle: "button"
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
      return (0, a.mergeBlock)(t, e);
    },
    render: function (e) {
      var t,
        n = e.data,
        l = e.idx,
        r = e.mode,
        s = (e.context, e.dataSource),
        m = n.data.value,
        f = m.title,
        p = m.buttonText,
        g = m.quantity,
        v = n.attributes,
        h = g <= 3 ? "" : "33.33%",
        b = [];
      (null == s ? void 0 : s.products) && s.products.hasOwnProperty(l) && (b = void 0 !== g && 0 !== g ? null === (t = s.products[l]) || void 0 === t ? void 0 : t.slice(0, g) : []), b.map(function (e) {
        return e.description = null == v.contentType || "title_only" == v.contentType ? "" : "title_short" == v.contentType ? null == e ? void 0 : e.excerpt : e.content.substring(0, 100) + "...", e;
      });
      var _ = (0, a.getParentIdx)(l),
        y = (0, i.getBlockNodeByIdx)(_),
        E = null == y ? void 0 : y.querySelectorAll("a");
      return "mj-column-per-50" != (null == y ? void 0 : y.classList[0]) && "mj-column-per-33-33" != (null == y ? void 0 : y.classList[0]) && "mj-column-per-25" != (null == y ? void 0 : y.classList[0]) || E && E.forEach(function (e) {
        e.style.padding = "4px", e.style.fontSize = "10px";
      }), o.default.createElement(d, {
        "css-className": "testing" === r ? (0, a.getPreviewClassName)(l, n.type) : "",
        padding: v.padding,
        border: "none",
        direction: "ltr",
        "background-color": v["background-color"]
      }, "single_grid" === (null == v ? void 0 : v.layoutType) ? o.default.createElement(c.default, {
        itemsList: b,
        perWidth: h,
        attributes: v,
        buttonText: p,
        mode: r,
        idx: l,
        data: n,
        title: f
      }) : o.default.createElement(u.default, {
        itemsList: b,
        perWidth: h,
        attributes: v,
        title: f,
        buttonText: p,
        mode: r,
        idx: l,
        data: n
      }));
    }
  });
  var s = n(85722);
  Object.defineProperty(t, "Panel", {
    enumerable: !0,
    get: function () {
      return s.Panel;
    }
  });
});
