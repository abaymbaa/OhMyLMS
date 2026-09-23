// Reconstructed Webpack factory 37380; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.CustomHTMLNode = void 0;
  var r = n(83574),
    a = n(81076);
  t.CustomHTMLNode = r.Node.create({
    name: "customHTML",
    group: "block",
    isolating: !0,
    defining: !0,
    draggable: !0,
    selectable: !0,
    atom: !0,
    addAttributes: function () {
      return {
        rawHTML: {
          default: ""
        },
        renderedHTML: {
          default: ""
        },
        height: {
          default: null
        }
      };
    },
    parseHTML: function () {
      var e = function (e) {
        return e.replace(/<!--\s*wp:html\s*-->/g, "").replace(/<!--\s*\/wp:html\s*-->/g, "").trim();
      };
      return [{
        tag: "div[data-custom-html-block]",
        getAttrs: function (t) {
          if ("string" == typeof t) return !1;
          var n = t.innerHTML || "";
          return {
            rawHTML: n = e(n),
            renderedHTML: n,
            height: null
          };
        }
      }, {
        tag: "custom-html-block",
        getAttrs: function (t) {
          if ("string" == typeof t) return !1;
          var n = t.querySelector("iframe[data-custom-html-iframe]"),
            r = "",
            a = null;
          if (n) {
            r = n.getAttribute("srcdoc") || "";
            var o = n.style.height;
            o && (a = parseInt(o, 10));
          } else r = t.innerHTML || "";
          return {
            rawHTML: r = e(r),
            renderedHTML: r,
            height: a
          };
        }
      }];
    },
    renderHTML: function (e) {
      var t = e.node,
        n = document.createElement("div");
      n.setAttribute("data-custom-html-block", "true");
      var r = "\x3c!-- wp:html --\x3e" + t.attrs.renderedHTML + "\x3c!-- /wp:html --\x3e" || 0;
      return n.innerHTML = r, {
        dom: n
      };
    },
    addCommands: function () {
      var e = this;
      return {
        insertCustomHTML: function (t) {
          return void 0 === t && (t = ""), function (n) {
            return n.commands.insertContent({
              type: e.name,
              attrs: {
                rawHTML: t,
                renderedHTML: t
              }
            });
          };
        },
        updateCustomHTML: function (t) {
          return function (n) {
            return n.commands.updateAttributes(e.name, {
              rawHTML: t,
              renderedHTML: t
            });
          };
        }
      };
    },
    addNodeView: function () {
      return (0, r.ReactNodeViewRenderer)(a.CustomHTMLComponent);
    }
  }), t.default = t.CustomHTMLNode;
});
