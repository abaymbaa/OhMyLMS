// Reconstructed Webpack factory 35857; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/,
    r = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g,
    i = o.Mark.create({
      name: "highlight",
      addOptions: () => ({
        multicolor: !1,
        HTMLAttributes: {}
      }),
      addAttributes() {
        return this.options.multicolor ? {
          color: {
            default: null,
            parseHTML: e => e.getAttribute("data-color") || e.style.backgroundColor,
            renderHTML: e => e.color ? {
              "data-color": e.color,
              style: `background-color: ${e.color}; color: inherit`
            } : {}
          }
        } : {};
      },
      parseHTML: () => [{
        tag: "mark"
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["mark", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          setHighlight: e => ({
            commands: t
          }) => t.setMark(this.name, e),
          toggleHighlight: e => ({
            commands: t
          }) => t.toggleMark(this.name, e),
          unsetHighlight: () => ({
            commands: e
          }) => e.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
        };
      },
      addInputRules() {
        return [o.markInputRule({
          find: s,
          type: this.type
        })];
      },
      addPasteRules() {
        return [o.markPasteRule({
          find: r,
          type: this.type
        })];
      }
    });
  t.Highlight = i, t.default = i, t.inputRegex = s, t.pasteRegex = r;
});
