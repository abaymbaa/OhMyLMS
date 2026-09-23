// Reconstructed Webpack factory 98199; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.CustomBlockquote = void 0;
  var r = n(99248);
  t.CustomBlockquote = r.Node.create({
    name: "blockquote",
    group: "block",
    content: "block+",
    parseHTML: function () {
      return [{
        tag: "blockquote"
      }];
    },
    renderHTML: function () {
      return ["blockquote", 0];
    }
  });
});
