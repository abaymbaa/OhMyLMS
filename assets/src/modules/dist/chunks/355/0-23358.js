// Reconstructed Webpack factory 23358; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => s
  });
  var l = n(41594),
    a = (n(12470), n(49804)),
    i = n(58088),
    o = n(43203),
    r = [{
      value: "h1",
      label: "Heading 1"
    }, {
      value: "h2",
      label: "Heading 2"
    }, {
      value: "h3",
      label: "Heading 3"
    }],
    c = function (e) {
      var t = e.label,
        n = e.attributes,
        l = (0, i.useFocusIdx)().focusIdx;
      return React.createElement(React.Fragment, null, React.createElement(i.TextStyle, {
        variation: "strong"
      }, t), (null == n ? void 0 : n.headingLabel) && React.createElement(React.Fragment, null, React.createElement("div", {
        className: "mrm-inline-label"
      }, React.createElement(o.SelectField, {
        label: "Name Style",
        options: r,
        name: "".concat(l, ".attributes.").concat(null == n ? void 0 : n.headingLabel)
      }))), React.createElement("div", {
        className: "mrm-inline-label"
      }, React.createElement(o.TextField, {
        label: "Font size",
        name: "".concat(l, ".attributes.").concat(n.fontSize),
        inline: !0,
        alignment: "center"
      })), React.createElement("div", {
        className: "mrm-inline-label"
      }, React.createElement(o.FontWeight, {
        name: "".concat(l, ".attributes.").concat(n.fontWeight)
      })), React.createElement("div", {
        className: "mrm-inline-label"
      }, React.createElement(o.FontFamily, {
        name: "".concat(l, ".attributes.").concat(n.fontFamily)
      })), (null == n ? void 0 : n.lineHeight) && React.createElement("div", {
        className: "mrm-inline-label"
      }, React.createElement(o.LineHeight, {
        name: "".concat(l, ".attributes.").concat(n.lineHeight)
      })));
    };
  const u = (0, l.memo)(c);
  var d = function () {
    var e,
      t = a.A.Item,
      n = (0, i.useFocusIdx)().focusIdx;
    return React.createElement(t, {
      header: null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.Typography,
      name: "4",
      className: "mrm-product-typo"
    }, React.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, [{
      label: "Heading",
      attributes: {
        fontSize: "h-font-size",
        fontWeight: "h-font-weight",
        fontFamily: "h-font-family"
      }
    }, {
      label: "Product name",
      attributes: {
        fontSize: "p-font-size",
        fontWeight: "p-font-weight",
        fontFamily: "p-font-family",
        lineHeight: "p-line-height",
        headingLabel: "pnType"
      }
    }, {
      label: "Product description",
      attributes: {
        fontSize: "d-font-size",
        fontWeight: "d-font-weight",
        fontFamily: "d-font-family",
        lineHeight: "d-line-height"
      }
    }, {
      label: "Product price",
      attributes: {
        fontSize: "pr-font-size",
        fontWeight: "pr-font-weight",
        fontFamily: "pr-font-family",
        lineHeight: "pr-line-height"
      }
    }, {
      label: "Button",
      attributes: {
        fontSize: "btn-font-size",
        fontWeight: "btn-font-weight",
        fontFamily: "btn-font-family",
        lineHeight: "btn-line-height"
      }
    }].map(function (e, t) {
      var l = e.label,
        a = e.attributes;
      return React.createElement("div", {
        key: t,
        style: {
          marginBottom: "15px"
        }
      }, React.createElement(u, {
        focusIdx: n,
        label: l,
        attributes: a
      }));
    })));
  };
  const s = (0, l.memo)(d);
});
