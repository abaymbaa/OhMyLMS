// Reconstructed Webpack factory 43100; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(56614),
    r = n(37392);
  const i = o.Extension.create({
    name: "placeholder",
    addOptions: () => ({
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    }),
    addProseMirrorPlugins() {
      return [new s.Plugin({
        key: new s.PluginKey("placeholder"),
        props: {
          decorations: ({
            doc: e,
            selection: t
          }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable,
              {
                anchor: s
              } = t,
              i = [];
            if (!n) return null;
            const a = this.editor.isEmpty;
            return e.descendants((e, t) => {
              const n = s >= t && s <= t + e.nodeSize,
                c = !e.isLeaf && o.isNodeEmpty(e);
              if ((n || !this.options.showOnlyCurrent) && c) {
                const o = [this.options.emptyNodeClass];
                a && o.push(this.options.emptyEditorClass);
                const s = r.Decoration.node(t, t + e.nodeSize, {
                  class: o.join(" "),
                  "data-placeholder": "function" == typeof this.options.placeholder ? this.options.placeholder({
                    editor: this.editor,
                    node: e,
                    pos: t,
                    hasAnchor: n
                  }) : this.options.placeholder
                });
                i.push(s);
              }
              return this.options.includeChildren;
            }), r.DecorationSet.create(e, i);
          }
        }
      })];
    }
  });
  t.Placeholder = i, t.default = i;
});
