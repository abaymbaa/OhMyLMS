// Reconstructed Webpack factory 94144; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = /^\s*>\s$/,
    r = o.Node.create({
      name: "blockquote",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      content: "block+",
      group: "block",
      defining: !0,
      parseHTML: () => [{
        tag: "blockquote"
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["blockquote", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          setBlockquote: () => ({
            commands: e
          }) => e.wrapIn(this.name),
          toggleBlockquote: () => ({
            commands: e
          }) => e.toggleWrap(this.name),
          unsetBlockquote: () => ({
            commands: e
          }) => e.lift(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
        };
      },
      addInputRules() {
        return [o.wrappingInputRule({
          find: s,
          type: this.type
        })];
      }
    });
  t.Blockquote = r, t.default = r, t.inputRegex = s;
});
