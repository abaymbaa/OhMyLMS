// Reconstructed Webpack factory 57308; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => u
  });
  var l = n(41594),
    a = n.n(l),
    i = n(49804),
    o = n(58088),
    r = n(43203),
    c = function (e) {
      var t = e.productLayoutType,
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
      }, a().createElement(r.TextField, {
        label: "Image width",
        name: "".concat(n, "three_column_grid" === t ? ".attributes.image-width" : ".attributes.grid-image-width"),
        inline: !0,
        alignment: "center"
      })), a().createElement("div", {
        className: "mrm-inline-label mrm-product-padding-wrapper"
      }, a().createElement(r.TextField, {
        label: "Image height",
        name: "".concat(n, "three_column_grid" === t ? ".attributes.image-height" : ".attributes.grid-image-height"),
        inline: !0,
        alignment: "center"
      })), a().createElement("div", {
        className: "mrm-inline-label mrm-product-padding-wrapper"
      }, "three_column_grid" === t && a().createElement(r.Padding, {
        title: "Padding",
        attributeName: "outer-padding"
      })), a().createElement("div", {
        className: "mrm-inline-label mrm-product-padding-wrapper"
      }, "three_column_grid" === t && a().createElement(r.Padding, {
        title: "Image padding",
        attributeName: "inner-padding"
      }), "single_grid" === t && a().createElement(r.Padding, {
        title: "Image padding",
        attributeName: "grid-image-padding"
      }))));
    };
  const u = (0, l.memo)(c);
});
