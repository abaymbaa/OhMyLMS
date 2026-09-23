// Reconstructed Webpack factory 5067; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Node.create({
    name: "paragraph",
    priority: 1e3,
    addOptions: () => ({
      HTMLAttributes: {}
    }),
    group: "block",
    content: "inline*",
    parseHTML: () => [{
      tag: "p"
    }],
    renderHTML({
      HTMLAttributes: e
    }) {
      return ["p", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
    },
    addCommands() {
      return {
        setParagraph: () => ({
          commands: e
        }) => e.setNode(this.name)
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Alt-0": () => this.editor.commands.setParagraph()
      };
    }
  });
  t.Paragraph = s, t.default = s;
});
