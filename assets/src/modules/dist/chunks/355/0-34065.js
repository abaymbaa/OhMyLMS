// Reconstructed Webpack factory 34065; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => s
  });
  var l = n(49804),
    a = n(41594),
    i = n.n(a),
    o = n(43203),
    r = n(87381),
    c = n(58088),
    u = n(66849),
    d = function (e) {
      var t,
        n,
        a = e.layout,
        d = e.handlePostLayoutChange,
        s = e.handleFilterChange,
        m = e.selectedFilter,
        f = e.posts,
        p = e.fetching,
        g = e.debouncedFetchPost,
        v = (e.handlePostTypeSelection, e.selectedPostType, e.postShowButton),
        h = e.setPostShowButton,
        b = e.mergeTags,
        _ = e.handlePostTitlePosition,
        y = l.A.Item,
        E = (0, c.useFocusIdx)().focusIdx,
        w = [{
          value: "title_only",
          label: null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.Title_only
        }, {
          value: "title_short",
          label: "Excerpt"
        }, {
          value: "title_des",
          label: "Full post"
        }];
      return i().createElement(y, {
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
      }, i().createElement(o.SelectField, {
        label: "Choose layout",
        options: r.postLayoutOptions,
        name: "".concat(E, ".attributes.layoutType"),
        onFieldValueChange: function (e) {
          return d(e);
        }
      })), "three_column_grid" === a && i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.TextField, {
        label: "Title",
        name: "".concat(E, ".data.value.title"),
        inline: !0,
        alignment: "center"
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.SelectField, {
        label: null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n ? void 0 : n.mint_trans.Display_post,
        options: w,
        name: "".concat(E, ".attributes.contentType")
      })), ("three_column_grid" === a || "layout_three" === a) && i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.SelectField, {
        label: "Filter",
        options: [{
          value: "specific_post",
          label: "Specific post"
        }, {
          value: "category_post",
          label: "Posts by category"
        }, {
          value: "recent_post",
          label: "Latest posts"
        }],
        name: "".concat(E, ".attributes.contentFilter"),
        onFieldValueChange: s
      })), "category_post" === m && null != b && b.categories && "single_grid" !== a ? i().createElement(i().Fragment, null, i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.SelectField, {
        label: "Post category",
        showSearch: !0,
        placeholder: "Select category",
        options: null == b ? void 0 : b.categories,
        name: "".concat(E, ".data.value.postCatId"),
        filterOption: function (e, t) {
          return t.props.children.toLowerCase().indexOf(e.toLowerCase()) >= 0;
        }
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.NumberField, {
        label: "Post quantity",
        inline: !0,
        min: 0,
        max: 18,
        name: "".concat(E, ".data.value.quantity"),
        onKeyDown: function (e) {
          e.key >= "0" && e.key <= "9" || ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight"].includes(e.key) || "a" === e.key && !0 === e.ctrlKey || "c" === e.key && !0 === e.ctrlKey || "x" === e.key && !0 === e.ctrlKey || parseInt("".concat(E, ".data.value.quantity") + e.key) > 18 || e.preventDefault();
        }
      }))) : "specific_post" === m || "single_grid" === a ? i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.SelectField, {
        label: "Select post",
        showSearch: !0,
        options: f,
        placeholder: "Search post",
        name: "".concat(E, ".data.value.postId"),
        filterOption: function (e, t) {
          return t.props.children.toLowerCase().indexOf(e.toLowerCase()) >= 0;
        },
        notFoundContent: p ? i().createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        }, i().createElement(u.A, null)) : null,
        onSearch: g
      })) : i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.NumberField, {
        label: "Post quantity",
        inline: !0,
        min: 0,
        max: 18,
        name: "".concat(E, ".data.value.quantity"),
        onKeyDown: function (e) {
          e.key >= "0" && e.key <= "9" || ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight"].includes(e.key) || "a" === e.key && !0 === e.ctrlKey || "c" === e.key && !0 === e.ctrlKey || "x" === e.key && !0 === e.ctrlKey || parseInt("".concat(E, ".data.value.quantity") + e.key) > 18 || e.preventDefault();
        }
      })), ("single_grid" === a || "layout_three" === a) && i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.SelectField, {
        label: "Image Position",
        options: r.postImagePositionOptions,
        name: "".concat(E, ".attributes.imagePosition")
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.RadioGroupField, {
        label: "Display Button",
        name: "".concat(E, ".attributes.showButton"),
        options: [{
          value: "yes",
          label: "Show"
        }, {
          value: "no",
          label: "Hide"
        }],
        inline: !0,
        onFieldValueChange: function (e) {
          return h(e);
        }
      })), "yes" === v && i().createElement(i().Fragment, null, i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.TextField, {
        label: "Button text",
        name: "".concat(E, ".data.value.buttonText"),
        inline: !0,
        alignment: "center"
      })), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.RadioGroupField, {
        label: "Button Style",
        name: "".concat(E, ".attributes.buttonStyle"),
        options: [{
          value: "link",
          label: "Link"
        }, {
          value: "button",
          label: "Button"
        }],
        inline: !0
      }))), i().createElement("div", {
        className: "mrm-stylish-radio mrm-inline-label mrm-text-align-setting"
      }, i().createElement(o.Align, null)), i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.RadioGroupField, {
        label: "Clickable Name",
        name: "".concat(E, ".attributes.clickable"),
        options: [{
          value: "yes",
          label: "Yes"
        }, {
          value: "no",
          label: "No"
        }],
        inline: !0
      })), "three_column_grid" === a && i().createElement("div", {
        className: "mrm-inline-label"
      }, i().createElement(o.SelectField, {
        label: "Post Title Position",
        options: r.postTitlePositionOption,
        name: "".concat(E, ".attributes.abovePost"),
        onFieldValueChange: function (e) {
          return _(e);
        }
      }))));
    };
  const s = (0, a.memo)(d);
});
