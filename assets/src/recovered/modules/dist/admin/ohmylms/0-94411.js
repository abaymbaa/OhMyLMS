// Reconstructed Webpack factory 94411; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Selection = void 0;
  var r = n(99248),
    a = n(56614),
    o = n(37392);
  t.Selection = r.Extension.create({
    name: "selection",
    addProseMirrorPlugins: function () {
      var e = this.editor;
      return [new a.Plugin({
        key: new a.PluginKey("selection"),
        props: {
          decorations: function (t) {
            return t.selection.empty || !0 === e.isFocused ? null : o.DecorationSet.create(t.doc, [o.Decoration.inline(t.selection.from, t.selection.to, {
              class: "selection"
            })]);
          }
        }
      })];
    }
  }), t.default = t.Selection;
});
