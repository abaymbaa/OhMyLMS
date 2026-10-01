// Reconstructed Webpack factory 56668; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Column = void 0;
  var r = n(99248);
  t.Column = r.Node.create({
    name: "column",
    content: "block+",
    isolating: !0,
    addAttributes: function () {
      return {
        position: {
          default: "",
          parseHTML: function (e) {
            return e.getAttribute("data-position");
          },
          renderHTML: function (e) {
            return {
              "data-position": e.position
            };
          }
        }
      };
    },
    renderHTML: function (e) {
      var t = e.HTMLAttributes;
      return ["div", (0, r.mergeAttributes)(t, {
        "data-type": "column"
      }), 0];
    },
    parseHTML: function () {
      return [{
        tag: 'div[data-type="column"]'
      }];
    }
  }), t.default = t.Column;
});
