// Reconstructed Webpack factory 14841; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Mark.create({
    name: "superscript",
    addOptions: () => ({
      HTMLAttributes: {}
    }),
    parseHTML: () => [{
      tag: "sup"
    }, {
      style: "vertical-align",
      getAttrs: e => "super" === e && null
    }],
    renderHTML({
      HTMLAttributes: e
    }) {
      return ["sup", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
    },
    addCommands() {
      return {
        setSuperscript: () => ({
          commands: e
        }) => e.setMark(this.name),
        toggleSuperscript: () => ({
          commands: e
        }) => e.toggleMark(this.name),
        unsetSuperscript: () => ({
          commands: e
        }) => e.unsetMark(this.name)
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-.": () => this.editor.commands.toggleSuperscript()
      };
    }
  });
  t.Superscript = s, t.default = s;
});
