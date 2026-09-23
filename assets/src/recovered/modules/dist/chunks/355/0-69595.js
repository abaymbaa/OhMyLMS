// Reconstructed Webpack factory 69595; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = function () {
    var e,
      t,
      n = (0, a.useFocusIdx)().focusIdx,
      l = i.Collapse.Item;
    return r.default.createElement(o.AttributesPanelWrapper, null, r.default.createElement(i.Collapse, {
      defaultActiveKey: ["1", "2", "3"],
      style: {
        maxWidth: 1180
      }
    }, r.default.createElement(l, {
      header: null === (t = null === (e = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === e ? void 0 : e.mint_trans) || void 0 === t ? void 0 : t.Typography,
      name: "1"
    }, r.default.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.TextField, {
      label: "Font size",
      name: "".concat(n, ".attributes.font-size"),
      inline: !0,
      alignment: "center"
    })), r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.FontFamily, null)), r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.TextDecoration, null)), r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.FontWeight, null)), r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.LineHeight, null)), r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.LetterSpacing, null)), r.default.createElement("div", {
      className: "mrm-stylish-radio mrm-inline-label mrm-font-style-setting"
    }, r.default.createElement(o.FontStyle, null)))), r.default.createElement(l, {
      header: "Dimension",
      name: "2"
    }, r.default.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, r.default.createElement("div", {
      className: "mrm-inline-label mrm-product-padding-wrapper"
    }, r.default.createElement(o.Padding, {
      title: "Padding"
    })))), r.default.createElement(l, {
      header: "Color",
      name: "3"
    }, r.default.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, r.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, r.default.createElement(o.ColorPickerField, {
      label: "Background color",
      name: "".concat(n, ".attributes.background-color"),
      inline: !0,
      alignment: "center"
    })), r.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, r.default.createElement(o.ColorPickerField, {
      label: "Color",
      name: "".concat(n, ".attributes.title-color"),
      inline: !0,
      alignment: "center"
    }))))));
  };
  var a = n(58088),
    i = n(3270),
    o = n(43203),
    r = l(n(41594));
});
