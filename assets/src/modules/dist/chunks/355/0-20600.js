// Reconstructed Webpack factory 20600; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = function () {
    var e = (0, i.useFocusIdx)().focusIdx,
      t = a.Collapse.Item,
      n = {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      };
    return r.default.createElement(o.AttributesPanelWrapper, null, r.default.createElement(a.Collapse, {
      accordion: !0,
      defaultActiveKey: ["1"],
      style: {
        maxWidth: 1180
      }
    }, r.default.createElement(t, {
      header: "Typography",
      name: "1",
      className: "mrm-product-typo"
    }, r.default.createElement("div", {
      style: n
    }, r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.TextField, {
      label: "Font size",
      name: "".concat(e, ".attributes.font-size"),
      inline: !0,
      alignment: "center"
    })), r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.FontWeight, {
      name: "".concat(e, ".attributes.font-weight")
    })), r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.FontFamily, {
      name: "".concat(e, ".attributes.font-family")
    })), r.default.createElement("div", {
      className: "mrm-inline-label"
    }, r.default.createElement(o.LineHeight, {
      name: "".concat(e, ".attributes.line-height")
    })))), r.default.createElement(t, {
      header: "Dimension",
      name: "2"
    }, r.default.createElement("div", {
      style: n
    }, r.default.createElement(o.Padding, {
      title: "Padding",
      attributeName: "padding"
    })), r.default.createElement("hr", null), r.default.createElement("div", {
      style: n
    }, r.default.createElement(o.Padding, {
      title: "Inner Padding",
      attributeName: "inner-padding"
    }))), r.default.createElement(t, {
      header: "Color",
      name: "3"
    }, r.default.createElement("div", {
      style: n
    }, r.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, r.default.createElement(o.ColorPickerField, {
      label: "Background",
      name: "".concat(e, ".attributes.background-color"),
      inline: !0,
      alignment: "center"
    })), r.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, r.default.createElement(o.ColorPickerField, {
      label: "Border Color",
      name: "".concat(e, ".attributes.border-color"),
      inline: !0,
      alignment: "center"
    })), r.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, r.default.createElement(o.ColorPickerField, {
      label: "Table Header",
      name: "".concat(e, ".attributes.table-head-color"),
      inline: !0,
      alignment: "center"
    })), r.default.createElement("div", {
      className: "mrm-inline-label color-label"
    }, r.default.createElement(o.ColorPickerField, {
      label: "Table Text",
      name: "".concat(e, ".attributes.table-text-color"),
      inline: !0,
      alignment: "center"
    })))), r.default.createElement("div", {
      style: {
        opacity: "0",
        height: "50px"
      }
    })));
  };
  var a = n(3270),
    i = n(58088),
    o = n(43203),
    r = l(n(41594));
});
