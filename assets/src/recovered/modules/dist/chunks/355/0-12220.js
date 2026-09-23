// Reconstructed Webpack factory 12220; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => v
  });
  var l = n(49050),
    a = n(58088),
    i = n(41594),
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
    f = l.components.Button,
    p = l.components.Divider,
    g = function (e) {
      var t = e.itemsList,
        n = void 0 === t ? [] : t,
        i = (e.perWidth, e.attributes),
        g = e.title,
        v = e.buttonText,
        h = e.mode,
        b = e.idx,
        _ = e.data,
        y = (e.filterType, e.postType),
        E = "recent_post" === (null == i ? void 0 : i.contentFilter) ? "mint-latest-content-block ".concat(y) : "",
        w = "recent_post" === (null == i ? void 0 : i.contentFilter) ? "mint-latest-content-item" : "",
        k = "alternate" === (null == i ? void 0 : i.imagePosition),
        C = function (e) {
          var t = e.fontSize,
            n = void 0 === t ? "16px" : t,
            l = e.lineHeight,
            a = void 0 === l ? "1.5" : l,
            i = e.fontWeight,
            c = void 0 === i ? "normal" : i,
            u = e.fontFamily,
            s = void 0 === u ? "Arial, sans-serif" : u,
            m = e.align,
            f = void 0 === m ? "left" : m,
            p = e.color,
            g = void 0 === p ? "#000" : p,
            v = e.padding,
            h = void 0 === v ? "0" : v,
            b = e.content,
            _ = void 0 === b ? "" : b,
            y = e.type,
            E = void 0 === y ? "p" : y,
            w = e.linkable,
            k = void 0 !== w && w,
            C = e.link,
            x = void 0 === C ? "#" : C,
            N = function (e, t) {
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
            T = "\n            font-size: ".concat(n, ";\n            line-height: ").concat(a, ";\n            color: ").concat(g, ";\n            font-weight: ").concat(c, ";\n            font-family: ").concat(s, ";\n            text-align: ").concat(f, ";\n            padding: 0;\n            margin: 0;\n        ").trim(),
            P = "\n            <".concat(E, ' style="').concat(T, '">\n                ').concat(k ? '<a href="'.concat(x, '" style="').concat(T, '">\n                        ').concat(["h1", "h2", "h3"].includes(E) && _.length > 55 ? _.substring(0, 55) + "..." : _, "\n                    </a>") : "".concat(["h1", "h2", "h3"].includes(E) && _.length > 55 ? _.substring(0, 55) + "..." : _), "\n            </").concat(E, ">");
          return React.createElement(d, r({
            "font-size": n,
            "line-height": a,
            "font-weight": c,
            "font-family": s,
            align: f,
            color: g,
            padding: h
          }, N), P);
        },
        x = function (e) {
          var t = e.item;
          return React.createElement(React.Fragment, null, React.createElement(C, {
            fontSize: i["p-font-size"],
            lineHeight: i["p-line-height"],
            fontWeight: i["p-font-weight"],
            fontFamily: i["p-font-family"],
            align: i.align || "center",
            color: i.pncolor,
            padding: "15px 0px 5px 0px",
            content: null == t ? void 0 : t.title,
            type: null == i ? void 0 : i.pnType,
            linkable: "yes" === (null == i ? void 0 : i.clickable),
            link: null == t ? void 0 : t.permalink
          }), (null == t ? void 0 : t.description) && React.createElement(React.Fragment, null, React.createElement(C, {
            fontSize: i["d-font-size"],
            lineHeight: i["d-line-height"],
            fontWeight: i["d-font-weight"],
            fontFamily: i["d-font-family"],
            align: i.align || "center",
            color: i.pncolor,
            padding: "5px 1px",
            content: null == t ? void 0 : t.description,
            "css-className": "title_short" === (null == i ? void 0 : i.contentType) ? "mint-latest-content-excerpt" : "title_des" === (null == i ? void 0 : i.contentType) ? "mint-latest-content-content" : ""
          })), "yes" === (null == i ? void 0 : i.showButton) && React.createElement(React.Fragment, null, "link" === (null == i ? void 0 : i.buttonStyle) ? React.createElement(React.Fragment, null, React.createElement(C, {
            "font-size": i["btn-font-size"],
            "font-weight": i["btn-font-weight"],
            "font-family": i["btn-font-family"],
            "line-height": i["btn-line-height"],
            align: i.align || "center",
            padding: i["btn-padding"],
            "background-color": i.bcolor,
            color: "#ffffff" === i.btcolor ? "#000000" : i.btcolor,
            content: v,
            linkable: "yes",
            link: null == t ? void 0 : t.permalink
          })) : React.createElement(React.Fragment, null, React.createElement(f, {
            align: "center",
            padding: i["btn-padding"],
            "background-color": i.bcolor,
            color: i.btcolor,
            target: "_blank",
            "vertical-align": "middle",
            "font-size": i["btn-font-size"],
            "font-weight": i["btn-font-weight"],
            "font-family": i["btn-font-family"],
            "line-height": i["btn-line-height"],
            border: "none",
            "text-align": "center",
            href: null == t ? void 0 : t.permalink,
            "css-className": "mint-latest-content-permalink"
          }, v))));
        };
      return React.createElement(React.Fragment, null, "" !== g && React.createElement(u, {
        padding: "0px"
      }, React.createElement(c, {
        padding: "0px",
        border: "none",
        "vertical-align": "top"
      }, React.createElement(C, {
        fontSize: i["h-font-size"],
        lineHeight: "1",
        fontWeight: i["h-font-weight"],
        fontFamily: i["h-font-family"],
        align: "center",
        color: i.hcolor,
        padding: "10px 25px",
        content: g,
        "css-className": (0, a.getContentEditableClassName)(l.BasicType.TEXT, "".concat(b, ".data.value.title")).join(" ")
      }))), React.createElement(u, {
        padding: "0px"
      }, React.createElement(m, {
        "vertical-align": "top",
        direction: "ltr",
        "css-className": "".concat("testing" === h ? (0, l.getPreviewClassName)(b, _.type) : "", " ").concat(E)
      }, n.map(function (e, t) {
        var a = k ? t % 2 == 0 ? "left" : "right" : "";
        return React.createElement(u, {
          padding: "10px 0 10px 0",
          key: t
        }, React.createElement(m, {
          "vertical-align": "middle",
          direction: "ltr",
          "css-className": "".concat("testing" === h ? (0, l.getPreviewClassName)(b, _.type) : "", " ").concat(w),
          width: "95%"
        }, "left" === (null == i ? void 0 : i.imagePosition) || "left" === a ? React.createElement(React.Fragment, null, React.createElement(m, null, React.createElement(c, {
          border: "none",
          "vertical-align": "middle",
          "padding-bottom": "10px"
        }, React.createElement(s, {
          align: "center",
          height: i["grid-image-height"],
          padding: i["grid-image-padding"],
          width: i["grid-image-width"],
          src: null == e ? void 0 : e.thumbnail,
          "css-className": "mint-latest-content-image",
          alt: null == e ? void 0 : e.title
        }))), React.createElement(m, null, React.createElement(c, {
          key: null == e ? void 0 : e.title,
          border: "none",
          "vertical-align": "middle",
          "padding-bottom": "10px"
        }, React.createElement(x, {
          item: e
        })))) : "right" === (null == i ? void 0 : i.imagePosition) || "right" === a ? React.createElement(React.Fragment, null, React.createElement(m, null, React.createElement(c, {
          key: null == e ? void 0 : e.title,
          border: "none",
          "vertical-align": "middle",
          "padding-bottom": "10px"
        }, React.createElement(x, {
          item: e
        }))), React.createElement(m, null, React.createElement(c, {
          border: "none",
          "vertical-align": "middle",
          "padding-bottom": "10px"
        }, React.createElement(s, {
          align: "right",
          height: i["grid-image-height"],
          padding: i["grid-image-padding"],
          width: i["grid-image-width"],
          "css-className": "mint-latest-content-image",
          src: null == e ? void 0 : e.thumbnail,
          alt: null == e ? void 0 : e.title
        })))) : React.createElement(React.Fragment, null)), t !== n.length - 1 && React.createElement(p, {
          border: "1px solid #C9CCCF",
          "border-color": i.dividerColor,
          "border-width": i.dividerWidth,
          "border-style": i.dividerStyle
        }));
      }))));
    };
  const v = (0, i.memo)(g);
});
