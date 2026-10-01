// Reconstructed Webpack factory 71075; arguments retain original semantics.
((e, t, n) => {
  n.d(t, {
    A: () => W
  });
  var o = n(90277);
  const s = /^\s*>\s$/,
    r = o.bP.create({
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
        return ["blockquote", (0, o.KV)(this.options.HTMLAttributes, e), 0];
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
        return [(0, o.tG)({
          find: s,
          type: this.type
        })];
      }
    }),
    i = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
    a = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
    c = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
    d = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
    l = o.CU.create({
      name: "bold",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML() {
        return [{
          tag: "strong"
        }, {
          tag: "b",
          getAttrs: e => "normal" !== e.style.fontWeight && null
        }, {
          style: "font-weight=400",
          clearMark: e => e.type.name === this.name
        }, {
          style: "font-weight",
          getAttrs: e => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
        }];
      },
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["strong", (0, o.KV)(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          setBold: () => ({
            commands: e
          }) => e.setMark(this.name),
          toggleBold: () => ({
            commands: e
          }) => e.toggleMark(this.name),
          unsetBold: () => ({
            commands: e
          }) => e.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-b": () => this.editor.commands.toggleBold(),
          "Mod-B": () => this.editor.commands.toggleBold()
        };
      },
      addInputRules() {
        return [(0, o.OX)({
          find: i,
          type: this.type
        }), (0, o.OX)({
          find: c,
          type: this.type
        })];
      },
      addPasteRules() {
        return [(0, o.Zc)({
          find: a,
          type: this.type
        }), (0, o.Zc)({
          find: d,
          type: this.type
        })];
      }
    }),
    u = "textStyle",
    h = /^\s*([-+*])\s$/,
    p = o.bP.create({
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
        return ["ul", (0, o.KV)(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          toggleBulletList: () => ({
            commands: e,
            chain: t
          }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes("listItem", this.editor.getAttributes(u)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
        };
      },
      addInputRules() {
        let e = (0, o.tG)({
          find: h,
          type: this.type
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (e = (0, o.tG)({
          find: h,
          type: this.type,
          keepMarks: this.options.keepMarks,
          keepAttributes: this.options.keepAttributes,
          getAttributes: () => this.editor.getAttributes(u),
          editor: this.editor
        })), [e];
      }
    }),
    m = /(^|[^`])`([^`]+)`(?!`)/,
    f = /(^|[^`])`([^`]+)`(?!`)/g,
    g = o.CU.create({
      name: "code",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      excludes: "_",
      code: !0,
      exitable: !0,
      parseHTML: () => [{
        tag: "code"
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["code", (0, o.KV)(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          setCode: () => ({
            commands: e
          }) => e.setMark(this.name),
          toggleCode: () => ({
            commands: e
          }) => e.toggleMark(this.name),
          unsetCode: () => ({
            commands: e
          }) => e.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-e": () => this.editor.commands.toggleCode()
        };
      },
      addInputRules() {
        return [(0, o.OX)({
          find: m,
          type: this.type
        })];
      },
      addPasteRules() {
        return [(0, o.Zc)({
          find: f,
          type: this.type
        })];
      }
    });
  var b = n(42845);
  const y = /^```([a-z]+)?[\s\n]$/,
    v = /^~~~([a-z]+)?[\s\n]$/,
    w = o.bP.create({
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
        return ["pre", (0, o.KV)(this.options.HTMLAttributes, t), ["code", {
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
                $from: s,
                empty: r
              } = n;
            if (!r || s.parent.type !== this.type) return !1;
            if (s.parentOffset !== s.parent.nodeSize - 2) return !1;
            const i = s.after();
            return void 0 !== i && (o.nodeAt(i) ? e.commands.command(({
              tr: e
            }) => (e.setSelection(b.LN.near(o.resolve(i))), !0)) : e.commands.exitCode());
          }
        };
      },
      addInputRules() {
        return [(0, o.JJ)({
          find: y,
          type: this.type,
          getAttributes: e => ({
            language: e[1]
          })
        }), (0, o.JJ)({
          find: v,
          type: this.type,
          getAttributes: e => ({
            language: e[1]
          })
        })];
      },
      addProseMirrorPlugins() {
        return [new b.k_({
          key: new b.hs("codeBlockVSCodeHandler"),
          props: {
            handlePaste: (e, t) => {
              if (!t.clipboardData) return !1;
              if (this.editor.isActive(this.type.name)) return !1;
              const n = t.clipboardData.getData("text/plain"),
                o = t.clipboardData.getData("vscode-editor-data"),
                s = o ? JSON.parse(o) : void 0,
                r = null == s ? void 0 : s.mode;
              if (!n || !r) return !1;
              const {
                  tr: i,
                  schema: a
                } = e.state,
                c = a.text(n.replace(/\r\n?/g, "\n"));
              return i.replaceSelectionWith(this.type.create({
                language: r
              }, c)), i.selection.$from.parent.type !== this.type && i.setSelection(b.U3.near(i.doc.resolve(Math.max(0, i.selection.from - 2)))), i.setMeta("paste", !0), e.dispatch(i), !0;
            }
          }
        })];
      }
    }),
    k = o.bP.create({
      name: "doc",
      topNode: !0,
      content: "block+"
    });
  var M = n(73337);
  const S = o.YY.create({
    name: "dropCursor",
    addOptions: () => ({
      color: "currentColor",
      width: 1,
      class: void 0
    }),
    addProseMirrorPlugins() {
      return [(0, M.A)(this.options)];
    }
  });
  var x = n(89552);
  const C = o.YY.create({
      name: "gapCursor",
      addProseMirrorPlugins: () => [(0, x.z)()],
      extendNodeSchema(e) {
        var t;
        const n = {
          name: e.name,
          options: e.options,
          storage: e.storage
        };
        return {
          allowGapCursor: null !== (t = (0, o.gk)((0, o.iI)(e, "allowGapCursor", n))) && void 0 !== t ? t : null
        };
      }
    }),
    T = o.bP.create({
      name: "hardBreak",
      addOptions: () => ({
        keepMarks: !0,
        HTMLAttributes: {}
      }),
      inline: !0,
      group: "inline",
      selectable: !1,
      linebreakReplacement: !0,
      parseHTML: () => [{
        tag: "br"
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["br", (0, o.KV)(this.options.HTMLAttributes, e)];
      },
      renderText: () => "\n",
      addCommands() {
        return {
          setHardBreak: () => ({
            commands: e,
            chain: t,
            state: n,
            editor: o
          }) => e.first([() => e.exitCode(), () => e.command(() => {
            const {
              selection: e,
              storedMarks: s
            } = n;
            if (e.$from.parent.type.spec.isolating) return !1;
            const {
                keepMarks: r
              } = this.options,
              {
                splittableMarks: i
              } = o.extensionManager,
              a = s || e.$to.parentOffset && e.$from.marks();
            return t().insertContent({
              type: this.name
            }).command(({
              tr: e,
              dispatch: t
            }) => {
              if (t && a && r) {
                const t = a.filter(e => i.includes(e.type.name));
                e.ensureMarks(t);
              }
              return !0;
            }).run();
          })])
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Enter": () => this.editor.commands.setHardBreak(),
          "Shift-Enter": () => this.editor.commands.setHardBreak()
        };
      }
    }),
    E = o.bP.create({
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
        return [`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`, (0, o.KV)(this.options.HTMLAttributes, t), 0];
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
        return this.options.levels.map(e => (0, o.JJ)({
          find: new RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
          type: this.type,
          getAttributes: {
            level: e
          }
        }));
      }
    });
  var O = n(89781);
  const A = o.YY.create({
      name: "history",
      addOptions: () => ({
        depth: 100,
        newGroupDelay: 500
      }),
      addCommands: () => ({
        undo: () => ({
          state: e,
          dispatch: t
        }) => (0, O.tN)(e, t),
        redo: () => ({
          state: e,
          dispatch: t
        }) => (0, O.ZS)(e, t)
      }),
      addProseMirrorPlugins() {
        return [(0, O.b6)(this.options)];
      },
      addKeyboardShortcuts() {
        return {
          "Mod-z": () => this.editor.commands.undo(),
          "Shift-Mod-z": () => this.editor.commands.redo(),
          "Mod-y": () => this.editor.commands.redo(),
          "Mod-я": () => this.editor.commands.undo(),
          "Shift-Mod-я": () => this.editor.commands.redo()
        };
      }
    }),
    P = o.bP.create({
      name: "horizontalRule",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      group: "block",
      parseHTML: () => [{
        tag: "hr"
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["hr", (0, o.KV)(this.options.HTMLAttributes, e)];
      },
      addCommands() {
        return {
          setHorizontalRule: () => ({
            chain: e,
            state: t
          }) => {
            if (!(0, o.AB)(t, t.schema.nodes[this.name])) return !1;
            const {
                selection: n
              } = t,
              {
                $from: s,
                $to: r
              } = n,
              i = e();
            return 0 === s.parentOffset ? i.insertContentAt({
              from: Math.max(s.pos - 1, 0),
              to: r.pos
            }, {
              type: this.name
            }) : (0, o.BQ)(n) ? i.insertContentAt(r.pos, {
              type: this.name
            }) : i.insertContent({
              type: this.name
            }), i.command(({
              tr: e,
              dispatch: t
            }) => {
              var n;
              if (t) {
                const {
                    $to: t
                  } = e.selection,
                  o = t.end();
                if (t.nodeAfter) t.nodeAfter.isTextblock ? e.setSelection(b.U3.create(e.doc, t.pos + 1)) : t.nodeAfter.isBlock ? e.setSelection(b.nh.create(e.doc, t.pos)) : e.setSelection(b.U3.create(e.doc, t.pos));else {
                  const s = null === (n = t.parent.type.contentMatch.defaultType) || void 0 === n ? void 0 : n.create();
                  s && (e.insert(o, s), e.setSelection(b.U3.create(e.doc, o + 1)));
                }
                e.scrollIntoView();
              }
              return !0;
            }).run();
          }
        };
      },
      addInputRules() {
        return [(0, o.jT)({
          find: /^(?:---|—-|___\s|\*\*\*\s)$/,
          type: this.type
        })];
      }
    }),
    L = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
    N = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
    R = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
    I = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
    D = o.CU.create({
      name: "italic",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML() {
        return [{
          tag: "em"
        }, {
          tag: "i",
          getAttrs: e => "normal" !== e.style.fontStyle && null
        }, {
          style: "font-style=normal",
          clearMark: e => e.type.name === this.name
        }, {
          style: "font-style=italic"
        }];
      },
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["em", (0, o.KV)(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          setItalic: () => ({
            commands: e
          }) => e.setMark(this.name),
          toggleItalic: () => ({
            commands: e
          }) => e.toggleMark(this.name),
          unsetItalic: () => ({
            commands: e
          }) => e.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-i": () => this.editor.commands.toggleItalic(),
          "Mod-I": () => this.editor.commands.toggleItalic()
        };
      },
      addInputRules() {
        return [(0, o.OX)({
          find: L,
          type: this.type
        }), (0, o.OX)({
          find: R,
          type: this.type
        })];
      },
      addPasteRules() {
        return [(0, o.Zc)({
          find: N,
          type: this.type
        }), (0, o.Zc)({
          find: I,
          type: this.type
        })];
      }
    }),
    H = o.bP.create({
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
        return ["li", (0, o.KV)(this.options.HTMLAttributes, e), 0];
      },
      addKeyboardShortcuts() {
        return {
          Enter: () => this.editor.commands.splitListItem(this.name),
          Tab: () => this.editor.commands.sinkListItem(this.name),
          "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
        };
      }
    }),
    $ = "textStyle",
    j = /^(\d+)\.\s$/,
    _ = o.bP.create({
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
          default: null,
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
        return 1 === t ? ["ol", (0, o.KV)(this.options.HTMLAttributes, n), 0] : ["ol", (0, o.KV)(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          toggleOrderedList: () => ({
            commands: e,
            chain: t
          }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes("listItem", this.editor.getAttributes($)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
        };
      },
      addInputRules() {
        let e = (0, o.tG)({
          find: j,
          type: this.type,
          getAttributes: e => ({
            start: +e[1]
          }),
          joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (e = (0, o.tG)({
          find: j,
          type: this.type,
          keepMarks: this.options.keepMarks,
          keepAttributes: this.options.keepAttributes,
          getAttributes: e => ({
            start: +e[1],
            ...this.editor.getAttributes($)
          }),
          joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
          editor: this.editor
        })), [e];
      }
    }),
    B = o.bP.create({
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
        return ["p", (0, o.KV)(this.options.HTMLAttributes, e), 0];
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
    }),
    U = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,
    z = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,
    V = o.CU.create({
      name: "strike",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML: () => [{
        tag: "s"
      }, {
        tag: "del"
      }, {
        tag: "strike"
      }, {
        style: "text-decoration",
        consuming: !1,
        getAttrs: e => !!e.includes("line-through") && {}
      }],
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["s", (0, o.KV)(this.options.HTMLAttributes, e), 0];
      },
      addCommands() {
        return {
          setStrike: () => ({
            commands: e
          }) => e.setMark(this.name),
          toggleStrike: () => ({
            commands: e
          }) => e.toggleMark(this.name),
          unsetStrike: () => ({
            commands: e
          }) => e.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-s": () => this.editor.commands.toggleStrike()
        };
      },
      addInputRules() {
        return [(0, o.OX)({
          find: U,
          type: this.type
        })];
      },
      addPasteRules() {
        return [(0, o.Zc)({
          find: z,
          type: this.type
        })];
      }
    }),
    F = o.bP.create({
      name: "text",
      group: "inline"
    }),
    W = o.YY.create({
      name: "starterKit",
      addExtensions() {
        const e = [];
        return !1 !== this.options.bold && e.push(l.configure(this.options.bold)), !1 !== this.options.blockquote && e.push(r.configure(this.options.blockquote)), !1 !== this.options.bulletList && e.push(p.configure(this.options.bulletList)), !1 !== this.options.code && e.push(g.configure(this.options.code)), !1 !== this.options.codeBlock && e.push(w.configure(this.options.codeBlock)), !1 !== this.options.document && e.push(k.configure(this.options.document)), !1 !== this.options.dropcursor && e.push(S.configure(this.options.dropcursor)), !1 !== this.options.gapcursor && e.push(C.configure(this.options.gapcursor)), !1 !== this.options.hardBreak && e.push(T.configure(this.options.hardBreak)), !1 !== this.options.heading && e.push(E.configure(this.options.heading)), !1 !== this.options.history && e.push(A.configure(this.options.history)), !1 !== this.options.horizontalRule && e.push(P.configure(this.options.horizontalRule)), !1 !== this.options.italic && e.push(D.configure(this.options.italic)), !1 !== this.options.listItem && e.push(H.configure(this.options.listItem)), !1 !== this.options.orderedList && e.push(_.configure(this.options.orderedList)), !1 !== this.options.paragraph && e.push(B.configure(this.options.paragraph)), !1 !== this.options.strike && e.push(V.configure(this.options.strike)), !1 !== this.options.text && e.push(F.configure(this.options.text)), e;
      }
    });
});
