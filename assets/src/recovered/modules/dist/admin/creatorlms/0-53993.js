// Reconstructed Webpack factory 53993; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Quote = void 0;
  var r = n(99248);
  t.Quote = r.Node.create({
    name: "quote",
    content: "paragraph+",
    defining: !0,
    marks: "",
    parseHTML: function () {
      return [{
        tag: "blockquote"
      }];
    },
    renderHTML: function (e) {
      return ["blockquote", e.HTMLAttributes, 0];
    },
    addKeyboardShortcuts: function () {
      return {
        Backspace: function () {
          return !1;
        }
      };
    }
  }), t.default = t.Quote;
});
