// Reconstructed Webpack factory 4805; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Node.create({
    name: "taskList",
    addOptions: () => ({
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    }),
    group: "block list",
    content() {
      return `${this.options.itemTypeName}+`;
    },
    parseHTML() {
      return [{
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }];
    },
    renderHTML({
      HTMLAttributes: e
    }) {
      return ["ul", o.mergeAttributes(this.options.HTMLAttributes, e, {
        "data-type": this.name
      }), 0];
    },
    addCommands() {
      return {
        toggleTaskList: () => ({
          commands: e
        }) => e.toggleList(this.name, this.options.itemTypeName)
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
      };
    }
  });
  t.TaskList = s, t.default = s;
});
