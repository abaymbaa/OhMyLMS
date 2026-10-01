// Reconstructed Webpack factory 1951; arguments retain original semantics.
(function (e, t, n) {
  var l,
    a = this && this.__createBinding || (Object.create ? function (e, t, n, l) {
      void 0 === l && (l = n);
      var a = Object.getOwnPropertyDescriptor(t, n);
      a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
        enumerable: !0,
        get: function () {
          return t[n];
        }
      }), Object.defineProperty(e, l, a);
    } : function (e, t, n, l) {
      void 0 === l && (l = n), e[l] = t[n];
    }),
    i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function (e, t) {
      e.default = t;
    }),
    o = this && this.__importStar || (l = function (e) {
      return l = Object.getOwnPropertyNames || function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
      }, l(e);
    }, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n = l(e), o = 0; o < n.length; o++) "default" !== n[o] && a(t, e, n[o]);
      return i(t, e), t;
    });
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = function () {
    var e,
      t,
      n = (0, c.useFocusIdx)().focusIdx,
      l = r.Collapse.Item,
      a = (0, c.useEditorProps)().mergeTags,
      i = (0, d.useState)(null == a ? void 0 : a.cartLayoutType[n]),
      o = i[0],
      m = i[1];
    return d.default.createElement(u.AttributesPanelWrapper, null, d.default.createElement(r.Collapse, {
      accordion: !0,
      defaultActiveKey: ["1"],
      style: {
        maxWidth: 1180
      }
    }, d.default.createElement(l, {
      header: "Content",
      name: "1"
    }, d.default.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Heading",
      name: "".concat(n, ".data.value.title"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.SelectField, {
      label: "Choose layout",
      options: s.cartLayoutOptions,
      name: "".concat(n, ".attributes.layoutType"),
      onFieldValueChange: function (e) {
        return function (e) {
          m(e);
        }(e);
      }
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.NumberField, {
      label: "Product quantity",
      inline: !0,
      min: 1,
      max: 18,
      name: "".concat(n, ".data.value.quantity")
    })), "three_column_grid" === o && d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Button text",
      name: "".concat(n, ".data.value.buttonText"),
      inline: !0,
      alignment: "center"
    })))), d.default.createElement(l, {
      header: "Dimension",
      name: "2"
    }, d.default.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, d.default.createElement("div", {
      className: "mrm-inline-label mrm-product-padding-wrapper"
    }, d.default.createElement(u.TextField, {
      label: "Width",
      name: "".concat(n, "three_column_grid" === o ? ".attributes.image-width" : ".attributes.table-image-width"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label mrm-product-padding-wrapper"
    }, d.default.createElement(u.TextField, {
      label: "Height",
      name: "".concat(n, "three_column_grid" === o ? ".attributes.image-height" : ".attributes.table-image-height"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label mrm-product-padding-wrapper"
    }, "three_column_grid" === o && d.default.createElement(u.Padding, {
      title: "Padding",
      attributeName: "outer-padding"
    }), "cart_table" === o && d.default.createElement(u.Padding, {
      title: "Padding",
      attributeName: "td-padding"
    })), d.default.createElement("div", {
      className: "mrm-inline-label mrm-product-padding-wrapper"
    }, "three_column_grid" === o && d.default.createElement(u.Padding, {
      title: "Image padding",
      attributeName: "inner-padding"
    }), "cart_table" === o && d.default.createElement(u.Padding, {
      title: "Image padding",
      attributeName: "td-image-padding"
    })))), d.default.createElement(l, {
      header: "Color",
      name: "3"
    }, d.default.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Background",
      name: "".concat(n, ".attributes.background-color"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Heading",
      name: "".concat(n, ".attributes.hcolor"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Product name",
      name: "".concat(n, ".attributes.pncolor"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Product price",
      name: "".concat(n, ".attributes.prcolor"),
      inline: !0,
      alignment: "center"
    })), "cart_table" === o && d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Product quantity",
      name: "".concat(n, ".attributes.pr-quantity"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Table header ",
      name: "".concat(n, ".attributes.table-header-color"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Table footer ",
      name: "".concat(n, ".attributes.table-footer-color"),
      inline: !0,
      alignment: "center"
    })), "three_column_grid" === o && d.default.createElement(d.default.Fragment, null, d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Button background",
      name: "".concat(n, ".attributes.bcolor"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, d.default.createElement(u.ColorPickerField, {
      label: "Button text",
      name: "".concat(n, ".attributes.btcolor"),
      inline: !0,
      alignment: "center"
    }))))), d.default.createElement(l, {
      header: null === (t = null === (e = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === e ? void 0 : e.mint_trans) || void 0 === t ? void 0 : t.Typography,
      name: "4",
      className: "mrm-product-typo"
    }, d.default.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, d.default.createElement(c.TextStyle, {
      variation: "strong"
    }, "Heading"), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Font size",
      name: "".concat(n, ".attributes.h-font-size"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontWeight, {
      name: "".concat(n, ".attributes.h-font-weight")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontFamily, {
      name: "".concat(n, ".attributes.h-font-family")
    })), d.default.createElement(c.TextStyle, {
      variation: "strong"
    }, "Product name"), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Font size",
      name: "".concat(n, ".attributes.p-font-size"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontWeight, {
      name: "".concat(n, ".attributes.p-font-weight")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontFamily, {
      name: "".concat(n, ".attributes.p-font-family")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.LineHeight, {
      name: "".concat(n, ".attributes.p-line-height")
    })), "cart_table" === o && d.default.createElement(d.default.Fragment, null, d.default.createElement(c.TextStyle, {
      variation: "strong"
    }, "Product quantity"), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Font size",
      name: "".concat(n, ".attributes.pr-quantity-font-size"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontWeight, {
      name: "".concat(n, ".attributes.pr-quantity-font-weight")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontFamily, {
      name: "".concat(n, ".attributes.pr-quantity-font-family")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.LineHeight, {
      name: "".concat(n, ".attributes.pr-quantity-line-height")
    }))), d.default.createElement(c.TextStyle, {
      variation: "strong"
    }, "Product price"), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Font size",
      name: "".concat(n, "three_column_grid" === o ? ".attributes.pr-font-size" : ".attributes.table-price-font-size"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontWeight, {
      name: "".concat(n, "three_column_grid" === o ? ".attributes.pr-font-weight" : ".attributes.table-price-weight")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontFamily, {
      name: "".concat(n, "three_column_grid" === o ? ".attributes.pr-font-family" : ".attributes.table-price-family")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.LineHeight, {
      name: "".concat(n, "three_column_grid" === o ? ".attributes.pr-line-height" : ".attributes.table-price-height")
    })), "cart_table" === o && d.default.createElement(d.default.Fragment, null, d.default.createElement(c.TextStyle, {
      variation: "strong"
    }, "Table header"), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Font size",
      name: "".concat(n, ".attributes.table-header-size"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontWeight, {
      name: "".concat(n, ".attributes.table-header-weight")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontFamily, {
      name: "".concat(n, ".attributes.table-header-family")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.LineHeight, {
      name: "".concat(n, ".attributes.table-header-height")
    })), d.default.createElement(c.TextStyle, {
      variation: "strong"
    }, "Table footer"), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Font size",
      name: "".concat(n, ".attributes.table-footer-size"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontWeight, {
      name: "".concat(n, ".attributes.table-footer-weight")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontFamily, {
      name: "".concat(n, ".attributes.table-footer-family")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.LineHeight, {
      name: "".concat(n, ".attributes.table-footer-height")
    }))), "three_column_grid" === o && d.default.createElement(d.default.Fragment, null, d.default.createElement(c.TextStyle, {
      variation: "strong"
    }, "Button"), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.TextField, {
      label: "Font size",
      name: "".concat(n, ".attributes.btn-font-size"),
      inline: !0,
      alignment: "center"
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontWeight, {
      name: "".concat(n, ".attributes.btn-font-weight")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.FontFamily, {
      name: "".concat(n, ".attributes.btn-font-family")
    })), d.default.createElement("div", {
      className: "mrm-inline-label"
    }, d.default.createElement(u.LineHeight, {
      name: "".concat(n, ".attributes.btn-line-height")
    })))))));
  };
  var r = n(3270),
    c = n(58088),
    u = n(43203),
    d = o(n(41594)),
    s = n(87381);
});
