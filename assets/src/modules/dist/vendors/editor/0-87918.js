// Reconstructed Webpack factory 87918; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = "textStyle",
    r = /^\s*([-+*])\s$/,
    i = o.Node.create({
      name: "bulletList",
      addOptions: () => ({
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: !1,
        keepAttributes: !1
      }),
      group: "block list",
      content() {
        return `${this.options.itemTypeName}+`;
      },
      parseHTML: () => [{
        tag: "ul"
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["ul", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          toggleBulletList: () => ({
            commands: e,
            chain: t
          }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes("listItem", this.editor.getAttributes(s)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
        };
      },
      addInputRules() {
        let e = o.wrappingInputRule({
          find: r,
          type: this.type
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (e = o.wrappingInputRule({
          find: r,
          type: this.type,
          keepMarks: this.options.keepMarks,
          keepAttributes: this.options.keepAttributes,
          getAttributes: () => this.editor.getAttributes(s),
          editor: this.editor
        })), [e];
      }
    });
  t.BulletList = i, t.default = i, t.inputRegex = r;
});
