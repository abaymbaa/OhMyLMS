// Reconstructed Webpack factory 35997; arguments retain original semantics.
(function (e, t, n) {
  var l,
    a = this && this.__spreadArray || function (e, t, n) {
      if (n || 2 === arguments.length) for (var l, a = 0, i = t.length; a < i; a++) !l && a in t || (l || (l = Array.prototype.slice.call(t, 0, a)), l[a] = t[a]);
      return e.concat(l || Array.prototype.slice.call(t));
    },
    i = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = t.PostBlock = void 0;
  var o = n(49050),
    r = n(58088),
    c = i(n(41594)),
    u = n(87381),
    d = i(n(54050)),
    s = i(n(53814)),
    m = i(n(12220)),
    f = (o.components.Column, o.components.Section, o.components.Wrapper);
  o.components.Text, o.components.Button, o.components.Image, o.components.Group, t.PostBlock = (0, o.createCustomBlock)({
    name: null === (l = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === l ? void 0 : l.mint_trans.Posts,
    type: u.CustomBlocksType.POST_BLOCK,
    validParentType: [o.BasicType.PAGE, o.AdvancedType.WRAPPER, o.BasicType.WRAPPER, o.AdvancedType.COLUMN],
    create: function (e) {
      var t,
        n,
        l = {
          type: u.CustomBlocksType.POST_BLOCK,
          data: {
            value: {
              title: null === (t = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === t ? void 0 : t.mint_trans.Recent_posts,
              buttonText: null === (n = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === n ? void 0 : n.mint_trans.Read_more,
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "button-text-color": "#ffffff",
            "button-color": "#414141",
            "product-name-color": "#414141",
            "product-price-color": "#414141",
            "post-content-color": "#414141",
            "title-color": "#222222",
            "pd-width": "5px",
            "pd-height": "5px",
            hcolor: "#000000",
            pncolor: "#000000",
            prcolor: "#000000",
            bcolor: "#2B2D38",
            btcolor: "#ffffff",
            "p-font-family": "Arial",
            "d-font-family": "Arial",
            "h-font-size": "20px",
            "h-font-weight": "800",
            "h-font-family": "Arial",
            "p-font-size": "16px",
            "p-font-weight": "800",
            "p-line-height": "1",
            "d-font-size": "10px",
            "d-font-weight": "300",
            "d-line-height": "1.5",
            "pr-font-family": "Arial",
            "pr-font-size": "12px",
            "pr-font-weight": "300",
            "pr-line-height": "1",
            contentType: "title_only",
            contentFilter: "specific_post",
            postType: "post",
            layoutType: "single_grid",
            "image-height": "150px",
            "grid-image-height": "176px",
            "image-width": "150px",
            "grid-image-width": "264px",
            "outer-padding": "0px 0px 0px 0px",
            "grid-image-padding": "0px 0px 0px 0px",
            "btn-font-size": "13px",
            "btn-font-weight": "300",
            "btn-font-family": "Arial",
            "btn-line-height": "1.2",
            "btn-padding": "15px 0px 15px 0px",
            imagePosition: "left",
            dividerWidth: "1px",
            dividerStyle: "solid",
            dividerColor: "#C9CCCF",
            showButton: "yes",
            pnType: "h2",
            align: "center",
            clickable: "no",
            buttonStyle: "button",
            abovePost: "no"
          },
          children: [{
            type: o.BasicType.TEXT,
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: {}
          }]
        };
      return (0, o.mergeBlock)(l, e);
    },
    render: function (e) {
      var t,
        n,
        l = e.data,
        i = e.idx,
        u = e.mode,
        p = (e.context, e.dataSource),
        g = l.data.value,
        v = g.title,
        h = g.buttonText,
        b = g.quantity,
        _ = l.attributes,
        y = b <= 3 ? "" : "33.33%",
        E = [];
      (null == p ? void 0 : p.posts) && p.posts.hasOwnProperty(i) && (E = void 0 !== b && 0 !== b ? null === (t = p.posts[i]) || void 0 === t ? void 0 : t.slice(0, b) : []), E.map(function (e) {
        return void 0 === _.contentType || "title_only" === _.contentType ? e.description = "" : "title_short" === _.contentType ? e.description = (null == e ? void 0 : e.excerpt) ? e.excerpt.substring(0, 100) + "..." : e.content.substring(0, 100) : e.description = null == e ? void 0 : e.content, e;
      });
      var w = (0, o.getParentIdx)(i),
        k = (0, r.getBlockNodeByIdx)(w),
        C = null == k ? void 0 : k.querySelectorAll("a");
      "mj-column-per-50" != (null == k ? void 0 : k.classList[0]) && "mj-column-per-33-33" != (null == k ? void 0 : k.classList[0]) && "mj-column-per-25" != (null == k ? void 0 : k.classList[0]) || C && C.forEach(function (e) {
        e.style.padding = "4px", e.style.fontSize = "10px";
      });
      var x = 1 < (null == E ? void 0 : E.length) ? a([], E, !0).splice(0, 1) : a([], E, !0);
      return c.default.createElement(f, {
        "css-className": "testing" === u ? (0, o.getPreviewClassName)(i, l.type) : "",
        padding: _.padding,
        border: "none",
        direction: "ltr",
        "background-color": _["background-color"]
      }, "single_grid" === (null == _ ? void 0 : _.layoutType) ? c.default.createElement(d.default, {
        itemsList: x,
        perWidth: y,
        attributes: _,
        buttonText: h,
        mode: u,
        idx: i,
        data: l
      }) : "three_column_grid" === (null == _ ? void 0 : _.layoutType) ? c.default.createElement(s.default, {
        itemsList: E,
        perWidth: y,
        attributes: _,
        title: v,
        buttonText: h,
        mode: u,
        idx: i,
        data: l,
        filterType: null === (n = null == l ? void 0 : l.attributes) || void 0 === n ? void 0 : n.contentFilter,
        postType: null == p ? void 0 : p.postTypeValue
      }) : c.default.createElement(m.default, {
        itemsList: E,
        perWidth: y,
        attributes: _,
        title: v,
        buttonText: h,
        mode: u,
        idx: i,
        data: l,
        filterType: null == p ? void 0 : p.postsFilters,
        postType: null == p ? void 0 : p.postTypeValue
      }));
    }
  });
  var p = n(54387);
  Object.defineProperty(t, "Panel", {
    enumerable: !0,
    get: function () {
      return p.Panel;
    }
  });
});
