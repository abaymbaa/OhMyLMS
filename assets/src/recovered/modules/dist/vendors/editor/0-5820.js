// Reconstructed Webpack factory 5820; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Mark.create({
    name: "subscript",
    addOptions: () => ({
      HTMLAttributes: {}
    }),
    parseHTML: () => [{
      tag: "sub"
    }, {
      style: "vertical-align",
      getAttrs: e => "sub" === e && null
    }],
    renderHTML({
      HTMLAttributes: e
    }) {
      return ["sub", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
    },
    addCommands() {
      return {
        setSubscript: () => ({
          commands: e
        }) => e.setMark(this.name),
        toggleSubscript: () => ({
          commands: e
        }) => e.toggleMark(this.name),
        unsetSubscript: () => ({
          commands: e
        }) => e.unsetMark(this.name)
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-,": () => this.editor.commands.toggleSubscript()
      };
    }
  });
  t.Subscript = s, t.default = s;
});
