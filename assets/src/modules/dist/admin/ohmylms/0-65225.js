// Reconstructed Webpack factory 65225; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Figcaption = void 0;
  var r = n(99248),
    a = n(63870);
  t.Figcaption = r.Node.create({
    name: "figcaption",
    addOptions: function () {
      return {
        HTMLAttributes: {}
      };
    },
    content: "inline*",
    selectable: !1,
    draggable: !1,
    marks: "link",
    parseHTML: function () {
      return [{
        tag: "figcaption"
      }];
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
        },
        Backspace: function (t) {
          var n = t.editor,
            r = n.state.selection,
            o = r.$from;
          if (!r.empty || o.parent.type !== e.type) return !1;
          if (0 !== o.parentOffset) return !1;
          var i = n.state.doc.nodeAt(o.pos - 2);
          return (null == i ? void 0 : i.type.name) === a.Image.name;
        }
      };
    },
    renderHTML: function (e) {
      var t = e.HTMLAttributes;
      return ["figcaption", (0, r.mergeAttributes)(t), 0];
    }
  }), t.default = t.Figcaption;
});
