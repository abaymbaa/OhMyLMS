// Reconstructed Webpack factory 54050; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => p
  });
  var l = n(49050),
    a = n(41594),
    i = n.n(a),
    o = ["fontSize", "lineHeight", "fontWeight", "fontFamily", "align", "color", "padding", "content", "type", "linkable", "link"];
  function r() {
    return r = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var l in n) ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
      }
      return e;
    }, r.apply(null, arguments);
  }
  var c = l.components.Column,
    u = l.components.Section,
    d = l.components.Text,
    s = l.components.Image,
    m = l.components.Group,
    f = l.components.Button;
  const p = function (e) {
    var t = e.itemsList,
      n = void 0 === t ? [] : t,
      a = (e.perWidth, e.attributes),
      p = e.buttonText,
      g = e.mode,
      v = e.idx,
      h = e.data,
      b = function (e) {
        var t = e.fontSize,
          n = void 0 === t ? "16px" : t,
          l = e.lineHeight,
          a = void 0 === l ? "1.5" : l,
          c = e.fontWeight,
          u = void 0 === c ? "normal" : c,
          s = e.fontFamily,
          m = void 0 === s ? "Arial, sans-serif" : s,
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
          }(e, o),
          P = "\n            font-size: ".concat(n, ";\n            line-height: ").concat(a, ";\n            color: ").concat(v, ";\n            font-weight: ").concat(u, ";\n            font-family: ").concat(m, ";\n            text-align: ").concat(p, ";\n            padding: 0;\n            margin: 0;\n        ").trim(),
          R = "\n            <".concat(w, ' style="').concat(P, '">\n                ').concat(C ? '<a href="'.concat(N, '" style="').concat(P, '">\n                        ').concat(["h1", "h2", "h3"].includes(w) && y.length > 55 ? y.substring(0, 55) + "..." : y, "\n                    </a>") : "".concat(["h1", "h2", "h3"].includes(w) && y.length > 55 ? y.substring(0, 55) + "..." : y), "\n            </").concat(w, ">");
        return i().createElement(d, r({
          "font-size": n,
          "line-height": a,
          "font-weight": u,
          "font-family": m,
          align: p,
          color: v,
          padding: b
        }, T), R);
      },
      _ = function (e) {
        var t = e.item;
        return i().createElement(i().Fragment, null, i().createElement(b, {
          fontSize: a["p-font-size"],
          lineHeight: a["p-line-height"],
          fontWeight: a["p-font-weight"],
          fontFamily: a["p-font-family"],
          align: a.align || "center",
          color: a.pncolor,
          padding: "15px 0px 5px 0px",
          content: null == t ? void 0 : t.title,
          type: null == a ? void 0 : a.pnType,
          linkable: "yes" === (null == a ? void 0 : a.clickable),
          link: null == t ? void 0 : t.permalink
        }), (null == t ? void 0 : t.description) && i().createElement(i().Fragment, null, i().createElement(b, {
          fontSize: a["d-font-size"],
          lineHeight: a["d-line-height"],
          fontWeight: a["d-font-weight"],
          fontFamily: a["d-font-family"],
          align: a.align || "center",
          color: a.pncolor,
          padding: "5px 1px",
          content: null == t ? void 0 : t.description,
          "css-className": "title_short" === (null == a ? void 0 : a.contentType) ? "mint-latest-content-excerpt" : "title_des" === (null == a ? void 0 : a.contentType) ? "mint-latest-content-content" : ""
        })), "yes" === (null == a ? void 0 : a.showButton) && i().createElement(i().Fragment, null, "link" === (null == a ? void 0 : a.buttonStyle) ? i().createElement(i().Fragment, null, i().createElement(b, {
          "font-size": a["btn-font-size"],
          "font-weight": a["btn-font-weight"],
          "font-family": a["btn-font-family"],
          "line-height": a["btn-line-height"],
          align: a.align || "center",
          padding: a["btn-padding"],
          "background-color": a.bcolor,
          color: "#ffffff" === a.btcolor ? "#000000" : a.btcolor,
          content: p,
          linkable: "yes",
          link: null == t ? void 0 : t.permalink
        })) : i().createElement(i().Fragment, null, i().createElement(f, {
          align: "center",
          padding: a["btn-padding"],
          "background-color": a.bcolor,
          color: a.btcolor,
          target: "_blank",
          "vertical-align": "middle",
          "font-size": a["btn-font-size"],
          "font-weight": a["btn-font-weight"],
          "font-family": a["btn-font-family"],
          "line-height": a["btn-line-height"],
          border: "none",
          "text-align": "center",
          href: null == t ? void 0 : t.permalink,
          "css-className": "mint-latest-content-permalink"
        }, p))));
      };
    return i().createElement(i().Fragment, null, i().createElement(u, {
      padding: "0px"
    }, i().createElement(m, {
      "vertical-align": "middle",
      direction: "ltr",
      "css-className": "testing" === g ? (0, l.getPreviewClassName)(v, h.type) : ""
    }, n.map(function (e, t) {
      return i().createElement(i().Fragment, {
        key: t
      }, "left" === (null == a ? void 0 : a.imagePosition) ? i().createElement(i().Fragment, null, i().createElement(m, {
        key: t
      }, i().createElement(c, {
        border: "none",
        "vertical-align": "middle"
      }, i().createElement(s, {
        align: "center",
        height: a["grid-image-height"],
        padding: a["grid-image-padding"],
        width: a["grid-image-width"],
        src: null == e ? void 0 : e.thumbnail,
        alt: null == e ? void 0 : e.title
      }))), i().createElement(m, {
        key: null == e ? void 0 : e.title
      }, i().createElement(c, {
        border: "none",
        "vertical-align": "middle"
      }, i().createElement(_, {
        item: e
      })))) : i().createElement(i().Fragment, null, i().createElement(m, {
        key: null == e ? void 0 : e.title
      }, i().createElement(c, {
        border: "none",
        "vertical-align": "middle"
      }, i().createElement(_, {
        item: e
      }))), i().createElement(m, {
        key: t
      }, i().createElement(c, {
        border: "none",
        "vertical-align": "middle"
      }, i().createElement(s, {
        align: "center",
        height: a["grid-image-height"],
        padding: a["grid-image-padding"],
        width: a["grid-image-width"],
        src: null == e ? void 0 : e.thumbnail,
        alt: null == e ? void 0 : e.title
      })))));
    }))));
  };
});
