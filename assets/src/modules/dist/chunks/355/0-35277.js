// Reconstructed Webpack factory 35277; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => s
  });
  var l = n(41594),
    a = n.n(l),
    i = n(49804),
    o = n(58088),
    r = n(43203);
  function c(e) {
    return function (e) {
      if (Array.isArray(e)) return u(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return u(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, l = Array(t); n < t; n++) l[n] = e[n];
    return l;
  }
  var d = function (e) {
    var t = e.layout,
      n = e.postShowButton,
      l = (0, o.useFocusIdx)().focusIdx,
      u = i.A.Item,
      d = [{
        label: "Background",
        name: "background-color"
      }, {
        label: "Heading title",
        name: "hcolor"
      }, {
        label: "Post title",
        name: "pncolor"
      }, {
        label: "Post content",
        name: "post-content-color"
      }].concat(c("yes" === n ? [{
        label: "Button background",
        name: "bcolor"
      }, {
        label: "Button text",
        name: "btcolor"
      }] : []), c("layout_three" === t ? [{
        label: "Divider",
        name: "dividerColor"
      }] : []));
    return a().createElement(u, {
      header: "Color",
      name: "3"
    }, a().createElement("div", {
      style: {
        padding: "20px 20px 5px",
        background: "#f6f8fa",
        borderRadius: "8px"
      }
    }, d.map(function (e, t) {
      var n = e.label,
        i = e.name;
      return a().createElement("div", {
        key: t,
        className: "mrm-inline-label color-label"
      }, a().createElement(r.ColorPickerField, {
        label: n,
        name: "".concat(l, ".attributes.").concat(i),
        inline: !0,
        alignment: "center"
      }));
    })));
  };
  const s = (0, l.memo)(d);
});
