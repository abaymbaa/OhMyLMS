// Reconstructed Webpack factory 22595; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.QuoteCaption = void 0;
  var r = n(99248);
  t.QuoteCaption = r.Node.create({
    name: "quoteCaption",
    group: "block",
    content: "text*",
    defining: !0,
    isolating: !0,
    parseHTML: function () {
      return [{
        tag: "figcaption"
      }];
    },
    renderHTML: function (e) {
      return ["figcaption", e.HTMLAttributes, 0];
    },
    addKeyboardShortcuts: function () {
      var e = this;
      return {
        Enter: function (t) {
          var n = t.editor,
            r = n.state.selection,
            a = r.$from;
          if (!r.empty || a.parent.type !== e.type) return !1;
          if (a.parentOffset !== a.parent.nodeSize - 2) return !1;
          var o = n.state.selection.$from.end();
          return n.chain().focus(o).insertContentAt(o, {
            type: "paragraph"
          }).run();
        }
      };
    }
  }), t.default = t.QuoteCaption;
});
