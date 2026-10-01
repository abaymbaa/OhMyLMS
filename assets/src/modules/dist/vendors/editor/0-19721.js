// Reconstructed Webpack factory 19721; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Mark.create({
    name: "underline",
    addOptions: () => ({
      HTMLAttributes: {}
    }),
    parseHTML: () => [{
      tag: "u"
    }, {
      style: "text-decoration",
      consuming: !1,
      getAttrs: e => !!e.includes("underline") && {}
    }],
    renderHTML({
      HTMLAttributes: e
    }) {
      return ["u", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
    },
    addCommands() {
      return {
        setUnderline: () => ({
          commands: e
        }) => e.setMark(this.name),
        toggleUnderline: () => ({
          commands: e
        }) => e.toggleMark(this.name),
        unsetUnderline: () => ({
          commands: e
        }) => e.unsetMark(this.name)
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-u": () => this.editor.commands.toggleUnderline(),
        "Mod-U": () => this.editor.commands.toggleUnderline()
      };
    }
  });
  t.Underline = s, t.default = s;
});
