// Reconstructed Webpack factory 95006; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(56614);
  const r = /^```([a-z]+)?[\s\n]$/,
    i = /^~~~([a-z]+)?[\s\n]$/,
    a = o.Node.create({
      name: "codeBlock",
      addOptions: () => ({
        languageClassPrefix: "language-",
        exitOnTripleEnter: !0,
        exitOnArrowDown: !0,
        defaultLanguage: null,
        HTMLAttributes: {}
      }),
      content: "text*",
      marks: "",
      group: "block",
      code: !0,
      defining: !0,
      addAttributes() {
        return {
          language: {
            default: this.options.defaultLanguage,
            parseHTML: e => {
              var t;
              const {
                languageClassPrefix: n
              } = this.options;
              return [...((null === (t = e.firstElementChild) || void 0 === t ? void 0 : t.classList) || [])].filter(e => e.startsWith(n)).map(e => e.replace(n, ""))[0] || null;
            },
            rendered: !1
          }
        };
      },
      parseHTML: () => [{
        tag: "pre",
        preserveWhitespace: "full"
      }],
      renderHTML({
        node: e,
        HTMLAttributes: t
      }) {
        return ["pre", o.mergeAttributes(this.options.HTMLAttributes, t), ["code", {
          class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null
        }, 0]];
      },
      addCommands() {
        return {
          setCodeBlock: e => ({
            commands: t
          }) => t.setNode(this.name, e),
          toggleCodeBlock: e => ({
            commands: t
          }) => t.toggleNode(this.name, "paragraph", e)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
          Backspace: () => {
            const {
                empty: e,
                $anchor: t
              } = this.editor.state.selection,
              n = 1 === t.pos;
            return !(!e || t.parent.type.name !== this.name) && !(!n && t.parent.textContent.length) && this.editor.commands.clearNodes();
          },
          Enter: ({
            editor: e
          }) => {
            if (!this.options.exitOnTripleEnter) return !1;
            const {
                state: t
              } = e,
              {
                selection: n
              } = t,
              {
                $from: o,
                empty: s
              } = n;
            if (!s || o.parent.type !== this.type) return !1;
            const r = o.parentOffset === o.parent.nodeSize - 2,
              i = o.parent.textContent.endsWith("\n\n");
            return !(!r || !i) && e.chain().command(({
              tr: e
            }) => (e.delete(o.pos - 2, o.pos), !0)).exitCode().run();
          },
          ArrowDown: ({
            editor: e
          }) => {
            if (!this.options.exitOnArrowDown) return !1;
            const {
                state: t
              } = e,
              {
                selection: n,
                doc: o
              } = t,
              {
                $from: r,
                empty: i
              } = n;
            if (!i || r.parent.type !== this.type) return !1;
            if (r.parentOffset !== r.parent.nodeSize - 2) return !1;
            const a = r.after();
            return void 0 !== a && (o.nodeAt(a) ? e.commands.command(({
              tr: e
            }) => (e.setSelection(s.Selection.near(o.resolve(a))), !0)) : e.commands.exitCode());
          }
        };
      },
      addInputRules() {
        return [o.textblockTypeInputRule({
          find: r,
          type: this.type,
          getAttributes: e => ({
            language: e[1]
          })
        }), o.textblockTypeInputRule({
          find: i,
          type: this.type,
          getAttributes: e => ({
            language: e[1]
          })
        })];
      },
      addProseMirrorPlugins() {
        return [new s.Plugin({
          key: new s.PluginKey("codeBlockVSCodeHandler"),
          props: {
            handlePaste: (e, t) => {
              if (!t.clipboardData) return !1;
              if (this.editor.isActive(this.type.name)) return !1;
              const n = t.clipboardData.getData("text/plain"),
                o = t.clipboardData.getData("vscode-editor-data"),
                r = o ? JSON.parse(o) : void 0,
                i = null == r ? void 0 : r.mode;
              if (!n || !i) return !1;
              const {
                  tr: a,
                  schema: c
                } = e.state,
                d = c.text(n.replace(/\r\n?/g, "\n"));
              return a.replaceSelectionWith(this.type.create({
                language: i
              }, d)), a.selection.$from.parent.type !== this.type && a.setSelection(s.TextSelection.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))), a.setMeta("paste", !0), e.dispatch(a), !0;
            }
          }
        })];
      }
    });
  t.CodeBlock = a, t.backtickInputRegex = r, t.default = a, t.tildeInputRegex = i;
});
