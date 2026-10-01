// Reconstructed Webpack factory 87932; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => g
  });
  var l,
    a = n(41594),
    i = n.n(a),
    o = n(49804),
    r = n(58088),
    c = n(43203),
    u = n(87381),
    d = n(66849),
    s = null === (l = window.MRM_Vars) || void 0 === l || null === (l = l.editor_data_source) || void 0 === l ? void 0 : l.product_categories,
    m = [{
      value: "title_only",
      label: "Name only"
    }, {
      value: "title_short",
      label: "Name and a short description"
    }, {
      value: "title_des",
      label: "Name and description"
    }],
    f = [{
      value: "specific_product",
      label: "Specific product"
    }, {
      value: "category_product",
      label: "Products by category"
    }],
    p = function (e) {
      var t = e.layout,
        n = e.handleProductLayoutChange,
        l = e.handleFilterChange,
        a = e.selectedFilter,
        p = e.products,
        g = e.fetching,
        v = e.debouncedFetchUser,
        h = (0, r.useFocusIdx)().focusIdx,
        b = o.A.Item;
      return i().createElement(i().Fragment, null, i().createElement(b, {
        header: "Content",
        name: "1"
      }, i().createElement("div", {
        style: {
          padding: "20px 20px 5px",
          background: "#f6f8fa",
          borderRadius: "8px"
        }
      }, i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.SelectField, {
        label: "Choose layout",
        options: u.productLayoutOptions,
        name: "".concat(h, ".attributes.layoutType"),
        onFieldValueChange: function (e) {
          return n(e);
        }
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.SelectField, {
        label: "Filter",
        options: f,
        name: "".concat(h, ".attributes.contentFilter"),
        onFieldValueChange: function (e) {
          return l(e, h);
        }
      })), "specific_product" === a ? i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.SelectField, {
        label: "Select product",
        showSearch: !0,
        options: p,
        placeholder: "Search product",
        name: "".concat(h, ".data.value.productId"),
        filterOption: function (e, t) {
          return t.props.children.toLowerCase().includes(e.toLowerCase());
        },
        notFoundContent: g ? i().createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        }, i().createElement(d.A, null)) : null,
        onSearch: v
      })) : i().createElement(i().Fragment, null, i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.SelectField, {
        label: "Product category",
        showSearch: !0,
        placeholder: "Select category",
        options: s,
        name: "".concat(h, ".data.value.productCatId"),
        filterOption: function (e, t) {
          return t.props.children.toLowerCase().includes(e.toLowerCase());
        }
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.NumberField, {
        label: "Product quantity",
        inline: !0,
        min: 0,
        max: 18,
        name: "".concat(h, ".data.value.quantity"),
        onKeyDown: function (e) {
          e.key >= "0" && e.key <= "9" || ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight"].includes(e.key) || "a" === e.key && e.ctrlKey || "c" === e.key && e.ctrlKey || "x" === e.key && e.ctrlKey || parseInt("".concat(h, ".data.value.quantity").concat(e.key)) <= 18 || e.preventDefault();
        }
      }))), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.TextField, {
        label: "Heading",
        name: "".concat(h, ".data.value.title"),
        inline: !0,
        alignment: "center"
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.SelectField, {
        label: "Display product",
        options: m,
        name: "".concat(h, ".attributes.contentType")
      })), "single_grid" === t && i().createElement(i().Fragment, null, i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.SelectField, {
        label: "Image Position",
        options: u.productImagePositionOptions,
        name: "".concat(h, ".attributes.imagePosition")
      })), i().createElement("div", {
        className: "mrm-inline-label mrm-divider-width-wrapper"
      }, i().createElement(c.TextField, {
        label: "Divider width",
        name: "".concat(h, ".attributes.dividerWidth"),
        inline: !0,
        alignment: "center"
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.SelectField, {
        label: "Divider Style",
        options: u.dividerStyleOptions,
        name: "".concat(h, ".attributes.dividerStyle")
      }))), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.TextField, {
        label: "Button text",
        name: "".concat(h, ".data.value.buttonText"),
        inline: !0,
        alignment: "center"
      })), i().createElement("div", {
        className: "mrm-stylish-radio mrm-inline-label mrm-text-align-setting"
      }, i().createElement(c.Align, null)), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.RadioGroupField, {
        label: "Clickable Name",
        name: "".concat(h, ".attributes.clickable"),
        options: [{
          value: "yes",
          label: "Yes"
        }, {
          value: "no",
          label: "No"
        }],
        inline: !0
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(c.RadioGroupField, {
        label: "Button Style",
        name: "".concat(h, ".attributes.buttonStyle"),
        options: [{
          value: "link",
          label: "Link"
        }, {
          value: "button",
          label: "Button"
        }],
        inline: !0
      })))));
    };
  const g = (0, a.memo)(p);
});
