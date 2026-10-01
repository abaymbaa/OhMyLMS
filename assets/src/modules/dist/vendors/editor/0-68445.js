// Reconstructed Webpack factory 68445; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(56614),
    r = n(37392);
  const i = o.Extension.create({
    name: "focus",
    addOptions: () => ({
      className: "has-focus",
      mode: "all"
    }),
    addProseMirrorPlugins() {
      return [new s.Plugin({
        key: new s.PluginKey("focus"),
        props: {
          decorations: ({
            doc: e,
            selection: t
          }) => {
            const {
                isEditable: n,
                isFocused: o
              } = this.editor,
              {
                anchor: s
              } = t,
              i = [];
            if (!n || !o) return r.DecorationSet.create(e, []);
            let a = 0;
            "deepest" === this.options.mode && e.descendants((e, t) => {
              if (!e.isText) return s >= t && s <= t + e.nodeSize - 1 && void (a += 1);
            });
            let c = 0;
            return e.descendants((e, t) => !e.isText && s >= t && s <= t + e.nodeSize - 1 && (c += 1, "deepest" === this.options.mode && a - c > 0 || "shallowest" === this.options.mode && c > 1 ? "deepest" === this.options.mode : void i.push(r.Decoration.node(t, t + e.nodeSize, {
              class: this.options.className
            })))), r.DecorationSet.create(e, i);
          }
        }
      })];
    }
  });
  t.FocusClasses = i, t.default = i;
});
