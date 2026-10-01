// Reconstructed Webpack factory 33332; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(56614);
  const r = o.Node.create({
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
      return ["hr", o.mergeAttributes(this.options.HTMLAttributes, e)];
    },
    addCommands() {
      return {
        setHorizontalRule: () => ({
          chain: e,
          state: t
        }) => {
          const {
              selection: n
            } = t,
            {
              $from: r,
              $to: i
            } = n,
            a = e();
          return 0 === r.parentOffset ? a.insertContentAt({
            from: Math.max(r.pos - 1, 0),
            to: i.pos
          }, {
            type: this.name
          }) : o.isNodeSelection(n) ? a.insertContentAt(i.pos, {
            type: this.name
          }) : a.insertContent({
            type: this.name
          }), a.command(({
            tr: e,
            dispatch: t
          }) => {
            var n;
            if (t) {
              const {
                  $to: t
                } = e.selection,
                o = t.end();
              if (t.nodeAfter) t.nodeAfter.isTextblock ? e.setSelection(s.TextSelection.create(e.doc, t.pos + 1)) : t.nodeAfter.isBlock ? e.setSelection(s.NodeSelection.create(e.doc, t.pos)) : e.setSelection(s.TextSelection.create(e.doc, t.pos));else {
                const r = null === (n = t.parent.type.contentMatch.defaultType) || void 0 === n ? void 0 : n.create();
                r && (e.insert(o, r), e.setSelection(s.TextSelection.create(e.doc, o + 1)));
              }
              e.scrollIntoView();
            }
            return !0;
          }).run();
        }
      };
    },
    addInputRules() {
      return [o.nodeInputRule({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })];
    }
  });
  t.HorizontalRule = r, t.default = r;
});
