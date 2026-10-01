// Reconstructed Webpack factory 55340; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Node.create({
    name: "tableRow",
    addOptions: () => ({
      HTMLAttributes: {}
    }),
    content: "(tableCell | tableHeader)*",
    tableRole: "row",
    parseHTML: () => [{
      tag: "tr"
    }],
    renderHTML({
      HTMLAttributes: e
    }) {
      return ["tr", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
    }
  });
  t.TableRow = s, t.default = s;
});
