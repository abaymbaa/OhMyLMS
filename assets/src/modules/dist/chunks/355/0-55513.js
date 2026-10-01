// Reconstructed Webpack factory 55513; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => d
  });
  var l = n(41594),
    a = n.n(l),
    i = n(49804),
    o = n(58088),
    r = n(87381),
    c = n(43203),
    u = function (e) {
      var t = e.layout,
        n = (0, o.useFocusIdx)().focusIdx,
        l = i.A.Item;
      return a().createElement(l, {
        header: "Dimension",
        name: "2"
      }, a().createElement("div", {
        style: {
          padding: "20px 20px 5px",
          background: "#f6f8fa",
          borderRadius: "8px"
        }
      }, a().createElement("div", {
        className: "mrm-inline-label mrm-product-padding-wrapper"
      }, a().createElement(c.TextField, {
        label: "Image width",
        name: "".concat(n, "three_column_grid" === t ? ".attributes.image-width" : ".attributes.grid-image-width"),
        inline: !0,
        alignment: "center"
      })), a().createElement("div", {
        className: "mrm-inline-label mrm-product-padding-wrapper"
      }, a().createElement(c.TextField, {
        label: "Image height",
        name: "".concat(n, "three_column_grid" === t ? ".attributes.image-height" : ".attributes.grid-image-height"),
        inline: !0,
        alignment: "center"
      })), a().createElement("div", {
        className: "mrm-inline-label mrm-product-padding-wrapper"
      }, "three_column_grid" === t && a().createElement(c.Padding, {
        title: "Padding",
        attributeName: "outer-padding"
      })), a().createElement("div", {
        className: "mrm-inline-label mrm-product-padding-wrapper"
      }, "three_column_grid" === t && a().createElement(c.Padding, {
        title: "Image padding",
        attributeName: "inner-padding"
      }), "single_grid" === t && a().createElement(c.Padding, {
        title: "Image padding",
        attributeName: "grid-image-padding"
      })), "layout_three" === t && a().createElement(a().Fragment, null, a().createElement("div", {
        className: "mrm-inline-label mrm-divider-width-wrapper"
      }, a().createElement(c.TextField, {
        label: "Divider width",
        name: "".concat(n, ".attributes.dividerWidth"),
        inline: !0,
        alignment: "center"
      })), a().createElement("div", {
        className: "mrm-inline-label"
      }, a().createElement(c.SelectField, {
        label: "Divider Style",
        options: r.dividerStyleOptions,
        name: "".concat(n, ".attributes.dividerStyle")
      })))));
    };
  const d = (0, l.memo)(u);
});
