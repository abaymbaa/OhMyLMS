// Reconstructed Webpack factory 87408; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => u
  });
  var l = n(41594),
    a = n(49804),
    i = n(58088),
    o = n(43203);
  function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, l = Array(t); n < t; n++) l[n] = e[n];
    return l;
  }
  var c = function (e) {
    var t,
      n = e.layout,
      l = (0, i.useFocusIdx)().focusIdx,
      c = a.A.Item,
      u = [{
        label: "Background",
        name: "background-color"
      }, {
        label: "Heading title",
        name: "hcolor"
      }, {
        label: "Product name",
        name: "pncolor"
      }, {
        label: "Product price",
        name: "prcolor"
      }, {
        label: "Button background",
        name: "bcolor"
      }, {
        label: "Button text",
        name: "btcolor"
      }].concat(function (e) {
        if (Array.isArray(e)) return r(e);
      }(t = "single_grid" === n ? [{
        label: "Divider",
        name: "dividerColor"
      }] : []) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(t) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
        }
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }());
    return React.createElement(c, {
      header: "Color",
      name: "3"
    }, React.createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, u.map(function (e, t) {
      var n = e.label,
        a = e.name;
      return React.createElement("div", {
        key: t,
        className: "mrm-inline-label color-label"
      }, React.createElement(o.ColorPickerField, {
        label: n,
        name: "".concat(l, ".attributes.").concat(a),
        inline: !0,
        alignment: "center"
      }));
    })));
  };
  const u = (0, l.memo)(c);
});
