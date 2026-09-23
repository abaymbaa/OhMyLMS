// Reconstructed Webpack factory 43420; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Mark.create({
    name: "textStyle",
    priority: 101,
    addOptions: () => ({
      HTMLAttributes: {},
      mergeNestedSpanStyles: !1
    }),
    parseHTML() {
      return [{
        tag: "span",
        getAttrs: e => !!e.hasAttribute("style") && (this.options.mergeNestedSpanStyles && (e => {
          if (!e.children.length) return;
          const t = e.querySelectorAll("span");
          t && t.forEach(e => {
            var t, n;
            const o = e.getAttribute("style"),
              s = null === (n = null === (t = e.parentElement) || void 0 === t ? void 0 : t.closest("span")) || void 0 === n ? void 0 : n.getAttribute("style");
            e.setAttribute("style", `${s};${o}`);
          });
        })(e), {})
      }];
    },
    renderHTML({
      HTMLAttributes: e
    }) {
      return ["span", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
    },
    addCommands() {
      return {
        removeEmptyTextStyle: () => ({
          tr: e
        }) => {
          const {
            selection: t
          } = e;
          return e.doc.nodesBetween(t.from, t.to, (t, n) => {
            if (t.isTextblock) return !0;
            t.marks.filter(e => e.type === this.type).some(e => Object.values(e.attrs).some(e => !!e)) || e.removeMark(n, n + t.nodeSize, this.type);
          }), !0;
        }
      };
    }
  });
  t.TextStyle = s, t.default = s;
});
