// Reconstructed Webpack factory 45823; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Node.create({
      name: "listItem",
      addOptions: () => ({
        HTMLAttributes: {},
        bulletListTypeName: "bulletList",
        orderedListTypeName: "orderedList"
      }),
      content: "paragraph block*",
      defining: !0,
      parseHTML: () => [{
        tag: "li"
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["li", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
      },
      addKeyboardShortcuts() {
        return {
          Enter: () => this.editor.commands.splitListItem(this.name),
          Tab: () => this.editor.commands.sinkListItem(this.name),
          "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
        };
      }
    }),
    r = o.Mark.create({
      name: "textStyle",
      priority: 101,
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML: () => [{
        tag: "span",
        getAttrs: e => !!e.hasAttribute("style") && {}
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["span", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          removeEmptyTextStyle: () => ({
            state: e,
            commands: t
          }) => {
            const n = o.getMarkAttributes(e, this.type);
            return !!Object.entries(n).some(([, e]) => !!e) || t.unsetMark(this.name);
          }
        };
      }
    }),
    i = /^(\d+)\.\s$/,
    a = o.Node.create({
      name: "orderedList",
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
      addAttributes: () => ({
        start: {
          default: 1,
          parseHTML: e => e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
        },
        type: {
          default: void 0,
          parseHTML: e => e.getAttribute("type")
        }
      }),
      parseHTML: () => [{
        tag: "ol"
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        const {
          start: t,
          ...n
        } = e;
        return 1 === t ? ["ol", o.mergeAttributes(this.options.HTMLAttributes, n), 0] : ["ol", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          toggleOrderedList: () => ({
            commands: e,
            chain: t
          }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(s.name, this.editor.getAttributes(r.name)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
        };
      },
      addInputRules() {
        let e = o.wrappingInputRule({
          find: i,
          type: this.type,
          getAttributes: e => ({
            start: +e[1]
          }),
          joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (e = o.wrappingInputRule({
          find: i,
          type: this.type,
          keepMarks: this.options.keepMarks,
          keepAttributes: this.options.keepAttributes,
          getAttributes: e => ({
            start: +e[1],
            ...this.editor.getAttributes(r.name)
          }),
          joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
          editor: this.editor
        })), [e];
      }
    });
  t.OrderedList = a, t.default = a, t.inputRegex = i;
});
