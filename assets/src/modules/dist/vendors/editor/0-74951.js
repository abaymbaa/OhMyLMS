// Reconstructed Webpack factory 74951; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Node.create({
    name: "heading",
    addOptions: () => ({
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    }),
    content: "inline*",
    group: "block",
    defining: !0,
    addAttributes: () => ({
      level: {
        default: 1,
        rendered: !1
      }
    }),
    parseHTML() {
      return this.options.levels.map(e => ({
        tag: `h${e}`,
        attrs: {
          level: e
        }
      }));
    },
    renderHTML({
      node: e,
      HTMLAttributes: t
    }) {
      return [`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`, o.mergeAttributes(this.options.HTMLAttributes, t), 0];
    },
    addCommands() {
      return {
        setHeading: e => ({
          commands: t
        }) => !!this.options.levels.includes(e.level) && t.setNode(this.name, e),
        toggleHeading: e => ({
          commands: t
        }) => !!this.options.levels.includes(e.level) && t.toggleNode(this.name, "paragraph", e)
      };
    },
    addKeyboardShortcuts() {
      return this.options.levels.reduce((e, t) => ({
        ...e,
        [`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({
          level: t
        })
      }), {});
    },
    addInputRules() {
      return this.options.levels.map(e => o.textblockTypeInputRule({
        find: new RegExp(`^(#{1,${e}})\\s$`),
        type: this.type,
        getAttributes: {
          level: e
        }
      }));
    }
  });
  t.Heading = s, t.default = s;
});
