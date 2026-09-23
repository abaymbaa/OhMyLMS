// Reconstructed Webpack factory 58526; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = /^\s*(\[([( |x])?\])\s$/,
    r = o.Node.create({
      name: "taskItem",
      addOptions: () => ({
        nested: !1,
        HTMLAttributes: {},
        taskListTypeName: "taskList",
        a11y: void 0
      }),
      content() {
        return this.options.nested ? "paragraph block*" : "paragraph+";
      },
      defining: !0,
      addAttributes: () => ({
        checked: {
          default: !1,
          keepOnSplit: !1,
          parseHTML: e => {
            const t = e.getAttribute("data-checked");
            return "" === t || "true" === t;
          },
          renderHTML: e => ({
            "data-checked": e.checked
          })
        }
      }),
      parseHTML() {
        return [{
          tag: `li[data-type="${this.name}"]`,
          priority: 51
        }];
      },
      renderHTML({
        node: e,
        HTMLAttributes: t
      }) {
        return ["li", o.mergeAttributes(this.options.HTMLAttributes, t, {
          "data-type": this.name
        }), ["label", ["input", {
          type: "checkbox",
          checked: e.attrs.checked ? "checked" : null
        }], ["span"]], ["div", 0]];
      },
      addKeyboardShortcuts() {
        const e = {
          Enter: () => this.editor.commands.splitListItem(this.name),
          "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
        };
        return this.options.nested ? {
          ...e,
          Tab: () => this.editor.commands.sinkListItem(this.name)
        } : e;
      },
      addNodeView() {
        return ({
          node: e,
          HTMLAttributes: t,
          getPos: n,
          editor: o
        }) => {
          const s = document.createElement("li"),
            r = document.createElement("label"),
            i = document.createElement("span"),
            a = document.createElement("input"),
            c = document.createElement("div"),
            d = () => {
              var t, n;
              a.ariaLabel = (null === (n = null === (t = this.options.a11y) || void 0 === t ? void 0 : t.checkboxLabel) || void 0 === n ? void 0 : n.call(t, e, a.checked)) || `Task item checkbox for ${e.textContent || "empty task item"}`;
            };
          return d(), r.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", e => e.preventDefault()), a.addEventListener("change", t => {
            if (!o.isEditable && !this.options.onReadOnlyChecked) return void (a.checked = !a.checked);
            const {
              checked: s
            } = t.target;
            o.isEditable && "function" == typeof n && o.chain().focus(void 0, {
              scrollIntoView: !1
            }).command(({
              tr: e
            }) => {
              const t = n();
              if ("number" != typeof t) return !1;
              const o = e.doc.nodeAt(t);
              return e.setNodeMarkup(t, void 0, {
                ...(null == o ? void 0 : o.attrs),
                checked: s
              }), !0;
            }).run(), !o.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, s) || (a.checked = !a.checked));
          }), Object.entries(this.options.HTMLAttributes).forEach(([e, t]) => {
            s.setAttribute(e, t);
          }), s.dataset.checked = e.attrs.checked, a.checked = e.attrs.checked, r.append(a, i), s.append(r, c), Object.entries(t).forEach(([e, t]) => {
            s.setAttribute(e, t);
          }), {
            dom: s,
            contentDOM: c,
            update: e => e.type === this.type && (s.dataset.checked = e.attrs.checked, a.checked = e.attrs.checked, d(), !0)
          };
        };
      },
      addInputRules() {
        return [o.wrappingInputRule({
          find: s,
          type: this.type,
          getAttributes: e => ({
            checked: "x" === e[e.length - 1]
          })
        })];
      }
    });
  t.TaskItem = r, t.default = r, t.inputRegex = s;
});
