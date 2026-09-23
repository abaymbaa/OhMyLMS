// Reconstructed Webpack factory 70581; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ImageBlock = void 0;
  var r = n(83574),
    a = n(99248),
    o = n(42563),
    i = n(63870);
  t.ImageBlock = i.Image.extend({
    name: "imageBlock",
    group: "block",
    defining: !0,
    isolating: !0,
    addAttributes: function () {
      return {
        src: {
          default: "",
          parseHTML: function (e) {
            return e.getAttribute("src");
          },
          renderHTML: function (e) {
            return {
              src: e.src
            };
          }
        },
        width: {
          default: "100%",
          parseHTML: function (e) {
            return e.getAttribute("data-width");
          },
          renderHTML: function (e) {
            return {
              "data-width": e.width
            };
          }
        },
        align: {
          default: "center",
          parseHTML: function (e) {
            return e.getAttribute("data-align");
          },
          renderHTML: function (e) {
            return {
              "data-align": e.align
            };
          }
        },
        alt: {
          default: void 0,
          parseHTML: function (e) {
            return e.getAttribute("alt");
          },
          renderHTML: function (e) {
            return {
              alt: e.alt
            };
          }
        }
      };
    },
    parseHTML: function () {
      return [{
        tag: "img"
      }];
    },
    renderHTML: function (e) {
      var t = e.HTMLAttributes;
      return ["img", (0, a.mergeAttributes)(this.options.HTMLAttributes, t)];
    },
    addCommands: function () {
      return {
        setImageBlock: function (e) {
          return function (t) {
            return t.commands.insertContent({
              type: "imageBlock",
              attrs: {
                src: e.src
              }
            });
          };
        },
        setImageBlockAt: function (e) {
          return function (t) {
            return t.commands.insertContentAt(e.pos, {
              type: "imageBlock",
              attrs: {
                src: e.src
              }
            });
          };
        },
        setImageBlockAlign: function (e) {
          return function (t) {
            return t.commands.updateAttributes("imageBlock", {
              align: e
            });
          };
        },
        setImageBlockWidth: function (e) {
          return function (t) {
            return t.commands.updateAttributes("imageBlock", {
              width: "".concat(Math.max(0, Math.min(100, e)), "%")
            });
          };
        }
      };
    },
    addNodeView: function () {
      return (0, r.ReactNodeViewRenderer)(o.ImageBlockView);
    }
  }), t.default = t.ImageBlock;
});
