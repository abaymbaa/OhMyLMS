// Reconstructed Webpack factory 53814; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => g
  });
  var l = n(49050),
    a = n(58088),
    i = n(41594),
    o = n.n(i),
    r = ["fontSize", "lineHeight", "fontWeight", "fontFamily", "align", "color", "padding", "content", "type", "linkable", "link"];
  function c() {
    return c = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var l in n) ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
      }
      return e;
    }, c.apply(null, arguments);
  }
  var u = l.components.Column,
    d = l.components.Section,
    s = l.components.Text,
    m = l.components.Image,
    f = l.components.Group,
    p = l.components.Button;
  const g = function (e) {
    var t = e.itemsList,
      n = void 0 === t ? [] : t,
      i = e.perWidth,
      g = e.attributes,
      v = e.title,
      h = e.buttonText,
      b = e.mode,
      _ = e.idx,
      y = e.data,
      E = (e.filterType, e.postType),
      w = "recent_post" === (null == g ? void 0 : g.contentFilter) ? "mint-latest-content-block ".concat(E) : "",
      k = "recent_post" === (null == g ? void 0 : g.contentFilter) ? "mint-latest-content-item" : "",
      C = function (e) {
        var t = e.fontSize,
          n = void 0 === t ? "16px" : t,
          l = e.lineHeight,
          a = void 0 === l ? "1.5" : l,
          i = e.fontWeight,
          u = void 0 === i ? "normal" : i,
          d = e.fontFamily,
          m = void 0 === d ? "Arial, sans-serif" : d,
          f = e.align,
          p = void 0 === f ? "left" : f,
          g = e.color,
          v = void 0 === g ? "#000" : g,
          h = e.padding,
          b = void 0 === h ? "0" : h,
          _ = e.content,
          y = void 0 === _ ? "" : _,
          E = e.type,
          w = void 0 === E ? "p" : E,
          k = e.linkable,
          C = void 0 !== k && k,
          x = e.link,
          N = void 0 === x ? "#" : x,
          T = function (e, t) {
            if (null == e) return {};
            var n,
              l,
              a = function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var l in e) if ({}.hasOwnProperty.call(e, l)) {
                  if (-1 !== t.indexOf(l)) continue;
                  n[l] = e[l];
                }
                return n;
              }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (l = 0; l < i.length; l++) n = i[l], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
          }(e, r),
          P = "\n            font-size: ".concat(n, ";\n            line-height: ").concat(a, ";\n            color: ").concat(v, ";\n            font-weight: ").concat(u, ";\n            font-family: ").concat(m, ";\n            text-align: ").concat(p, ";\n            padding: 0;\n            margin: 0;\n        ").trim(),
          R = "\n            <".concat(w, ' style="').concat(P, '">\n                ').concat(C ? '<a href="'.concat(N, '" style="').concat(P, '">\n                        ').concat(["h1", "h2", "h3"].includes(w) && y.length > 55 ? y.substring(0, 55) + "..." : y, "\n                    </a>") : "".concat(["h1", "h2", "h3"].includes(w) && y.length > 55 ? y.substring(0, 55) + "..." : y), "\n            </").concat(w, ">");
        return o().createElement(s, c({
          "font-size": n,
          "line-height": a,
          "font-weight": u,
          "font-family": m,
          align: p,
          color: v,
          padding: b
        }, T), R);
      },
      x = function (e) {
        var t = e.item;
        return o().createElement(o().Fragment, null, "no" === (null == g ? void 0 : g.abovePost) && o().createElement(C, {
          fontSize: g["p-font-size"],
          lineHeight: g["p-line-height"],
          fontWeight: g["p-font-weight"],
          fontFamily: g["p-font-family"],
          align: g.align || "center",
          color: g.pncolor,
          padding: "15px 0px 5px 0px",
          content: null == t ? void 0 : t.title,
          type: null == g ? void 0 : g.pnType,
          linkable: "yes" === (null == g ? void 0 : g.clickable),
          link: null == t ? void 0 : t.permalink
        }), (null == t ? void 0 : t.description) && o().createElement(o().Fragment, null, o().createElement(C, {
          fontSize: g["d-font-size"],
          lineHeight: g["d-line-height"],
          fontWeight: g["d-font-weight"],
          fontFamily: g["d-font-family"],
          align: g.align || "center",
          color: g.pncolor,
          padding: "5px 1px",
          content: null == t ? void 0 : t.description,
          "css-className": "title_short" === (null == g ? void 0 : g.contentType) ? "mint-latest-content-excerpt" : "title_des" === (null == g ? void 0 : g.contentType) ? "mint-latest-content-content" : ""
        })), "yes" === (null == g ? void 0 : g.showButton) && o().createElement(o().Fragment, null, "link" === (null == g ? void 0 : g.buttonStyle) ? o().createElement(o().Fragment, null, o().createElement(C, {
          "font-size": g["btn-font-size"],
          "font-weight": g["btn-font-weight"],
          "font-family": g["btn-font-family"],
          "line-height": g["btn-line-height"],
          align: g.align || "center",
          padding: g["btn-padding"],
          "background-color": g.bcolor,
          color: "#ffffff" === g.btcolor ? "#000000" : g.btcolor,
          content: h,
          linkable: "yes",
          link: null == t ? void 0 : t.permalink
        })) : o().createElement(o().Fragment, null, o().createElement(p, {
          align: "center",
          padding: g["btn-padding"],
          "background-color": g.bcolor,
          color: g.btcolor,
          target: "_blank",
          "vertical-align": "middle",
          "font-size": g["btn-font-size"],
          "font-weight": g["btn-font-weight"],
          "font-family": g["btn-font-family"],
          "line-height": g["btn-line-height"],
          border: "none",
          "text-align": "center",
          href: null == t ? void 0 : t.permalink,
          "css-className": "mint-latest-content-permalink"
        }, h))));
      };
    return o().createElement(o().Fragment, null, "" !== v && o().createElement(d, {
      padding: "0px"
    }, o().createElement(u, {
      padding: "0px",
      border: "none",
      "vertical-align": "top"
    }, o().createElement(C, {
      fontSize: g["h-font-size"],
      lineHeight: "1",
      fontWeight: g["h-font-weight"],
      fontFamily: g["h-font-family"],
      align: "center",
      color: g.hcolor,
      padding: "10px 25px",
      content: v,
      "css-className": (0, a.getContentEditableClassName)(l.BasicType.TEXT, "".concat(_, ".data.value.title")).join(" ")
    }))), o().createElement(d, {
      padding: "0px"
    }, o().createElement(f, {
      "vertical-align": "top",
      direction: "ltr",
      "css-className": "".concat("testing" === b ? (0, l.getPreviewClassName)(_, y.type) : "", " ").concat(w)
    }, n.map(function (e, t) {
      return o().createElement(f, {
        key: t,
        width: i
      }, o().createElement(u, {
        border: "none",
        "vertical-align": "top",
        padding: g["outer-padding"],
        "css-className": "".concat(k)
      }, "yes" === (null == g ? void 0 : g.abovePost) && o().createElement(C, {
        fontSize: g["p-font-size"],
        lineHeight: g["p-line-height"],
        fontWeight: g["p-font-weight"],
        fontFamily: g["p-font-family"],
        align: g.align || "center",
        color: g.pncolor,
        padding: "15px 0px 5px 0px",
        content: null == e ? void 0 : e.title,
        type: null == g ? void 0 : g.pnType,
        linkable: "yes" === (null == g ? void 0 : g.clickable),
        link: null == e ? void 0 : e.permalink
      }), o().createElement(m, {
        align: "center",
        src: null == e ? void 0 : e.thumbnail,
        padding: g["inner-padding"],
        height: g["image-height"],
        width: g["image-width"],
        "css-className": "mint-latest-content-image",
        alt: null == e ? void 0 : e.title
      }), o().createElement(x, {
        item: e
      })));
    }))));
  };
});
