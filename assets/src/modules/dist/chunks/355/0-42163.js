// Reconstructed Webpack factory 42163; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => v
  });
  var l = n(49050),
    a = n(41594),
    i = n.n(a),
    o = n(58088),
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
    p = l.components.Button,
    g = l.components.Divider;
  const v = function (e) {
    var t = e.itemsList,
      n = void 0 === t ? [] : t,
      a = (e.perWidth, e.attributes),
      v = e.buttonText,
      h = e.mode,
      b = e.idx,
      _ = e.data,
      y = e.title,
      E = "alternate" === (null == a ? void 0 : a.imagePosition),
      w = function (e) {
        var t = e.fontSize,
          n = void 0 === t ? "16px" : t,
          l = e.lineHeight,
          a = void 0 === l ? "1.5" : l,
          o = e.fontWeight,
          u = void 0 === o ? "normal" : o,
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
          R = "\n        <".concat(w, ' style="').concat(P, '">\n            ').concat(C ? '<a href="'.concat(N, '" style="').concat(P, '">').concat(y, "</a>") : y, "\n        </").concat(w, ">");
        return i().createElement(s, c({
          "font-size": n,
          "line-height": a,
          "font-weight": u,
          "font-family": m,
          align: p,
          color: v,
          padding: b
        }, T), R);
      },
      k = function (e) {
        var t = e.item;
        return i().createElement(i().Fragment, null, i().createElement(w, {
          fontSize: a["p-font-size"],
          lineHeight: a["p-line-height"],
          fontWeight: a["p-font-weight"],
          fontFamily: a["p-font-family"],
          align: a.align || "center",
          color: a.pncolor,
          padding: "5px 0",
          content: null == t ? void 0 : t.title,
          type: null == a ? void 0 : a.pnType,
          linkable: "yes" === (null == a ? void 0 : a.clickable),
          link: null == t ? void 0 : t.permalink
        }), (null == t ? void 0 : t.description) && i().createElement(i().Fragment, null, i().createElement(w, {
          fontSize: a["d-font-size"],
          lineHeight: a["d-line-height"],
          fontWeight: a["d-font-weight"],
          fontFamily: a["d-font-family"],
          align: a.align || "center",
          color: a.pncolor,
          padding: "5px 1px",
          content: null == t ? void 0 : t.description
        })), i().createElement(w, {
          fontSize: a["pr-font-size"],
          lineHeight: a["pr-line-height"],
          fontWeight: a["pr-font-weight"],
          fontFamily: a["pr-font-family"],
          align: a.align || "center",
          color: a.prcolor,
          padding: "5px 0",
          content: null == t ? void 0 : t.price_html
        }), "link" === (null == a ? void 0 : a.buttonStyle) ? i().createElement(i().Fragment, null, i().createElement(w, {
          "font-size": a["btn-font-size"],
          "font-weight": a["btn-font-weight"],
          "font-family": a["btn-font-family"],
          "line-height": a["btn-line-height"],
          align: a.align || "center",
          padding: a["btn-padding"],
          "background-color": a.bcolor,
          color: "#ffffff" === a.btcolor ? "#000000" : a.btcolor,
          content: v,
          linkable: "yes",
          link: null == t ? void 0 : t.permalink
        })) : i().createElement(i().Fragment, null, i().createElement(p, {
          align: a.align || "center",
          padding: a["btn-padding"],
          "background-color": a.bcolor,
          color: a.btcolor,
          target: "_blank",
          "font-size": a["btn-font-size"],
          "font-weight": a["btn-font-weight"],
          "font-family": a["btn-font-family"],
          "line-height": a["btn-line-height"],
          href: null == t ? void 0 : t.permalink
        }, v)));
      };
    return i().createElement(i().Fragment, null, y && i().createElement(d, {
      padding: "0px"
    }, i().createElement(u, {
      padding: "0px",
      border: "none",
      "vertical-align": "top"
    }, i().createElement(w, {
      fontSize: a["h-font-size"],
      lineHeight: "1",
      fontWeight: a["h-font-weight"],
      fontFamily: a["h-font-family"],
      align: "center",
      color: a.hcolor,
      padding: "10px 25px",
      content: y,
      "css-className": (0, o.getContentEditableClassName)(l.BasicType.TEXT, "".concat(b, ".data.value.title")).join(" ")
    }))), i().createElement(d, {
      padding: "0px"
    }, i().createElement(f, {
      "vertical-align": "top",
      direction: "ltr",
      "css-className": "testing" === h ? (0, l.getPreviewClassName)(b, _.type) : ""
    }, n.map(function (e, t) {
      var l = E ? t % 2 == 0 ? "left" : "right" : null == a ? void 0 : a.imagePosition;
      return i().createElement(d, {
        padding: "10px 0",
        key: t
      }, i().createElement(f, {
        "vertical-align": "middle",
        direction: "ltr",
        width: "95%"
      }, "left" === l && i().createElement(f, null, i().createElement(u, {
        border: "none",
        "vertical-align": "middle",
        "padding-bottom": "10px"
      }, i().createElement(m, {
        align: "center",
        height: a["grid-image-height"],
        padding: a["grid-image-padding"],
        width: a["grid-image-width"],
        src: null == e ? void 0 : e.thumbnail[0],
        alt: null == e ? void 0 : e.title
      }))), i().createElement(f, null, i().createElement(u, {
        border: "none",
        "vertical-align": "middle",
        "padding-bottom": "10px"
      }, i().createElement(k, {
        item: e
      }))), "right" === l && i().createElement(f, null, i().createElement(u, {
        border: "none",
        "vertical-align": "middle",
        "padding-bottom": "10px"
      }, i().createElement(m, {
        align: "center",
        height: a["grid-image-height"],
        padding: a["grid-image-padding"],
        width: a["grid-image-width"],
        src: null == e ? void 0 : e.thumbnail[0],
        alt: null == e ? void 0 : e.title
      })))), t !== n.length - 1 && i().createElement(g, {
        border: "1px solid #C9CCCF",
        "border-color": a.dividerColor,
        "border-width": a.dividerWidth,
        "border-style": a.dividerStyle
      }));
    }))));
  };
});
