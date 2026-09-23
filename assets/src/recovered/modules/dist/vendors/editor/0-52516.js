// Reconstructed Webpack factory 52516; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  const o = n(99248).Extension.create({
    name: "textAlign",
    addOptions: () => ({
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: "left"
    }),
    addGlobalAttributes() {
      return [{
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: e => {
              const t = e.style.textAlign || this.options.defaultAlignment;
              return this.options.alignments.includes(t) ? t : this.options.defaultAlignment;
            },
            renderHTML: e => e.textAlign === this.options.defaultAlignment ? {} : {
              style: `text-align: ${e.textAlign}`
            }
          }
        }
      }];
    },
    addCommands() {
      return {
        setTextAlign: e => ({
          commands: t
        }) => !!this.options.alignments.includes(e) && this.options.types.map(n => t.updateAttributes(n, {
          textAlign: e
        })).every(e => e),
        unsetTextAlign: () => ({
          commands: e
        }) => this.options.types.map(t => e.resetAttributes(t, "textAlign")).every(e => e)
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
        "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
        "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
        "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
      };
    }
  });
  t.TextAlign = o, t.default = o;
});
