// Reconstructed Webpack factory 17729; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = o.Node.create({
    name: "tableHeader",
    addOptions: () => ({
      HTMLAttributes: {}
    }),
    content: "block+",
    addAttributes: () => ({
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: e => {
          const t = e.getAttribute("colwidth");
          return t ? t.split(",").map(e => parseInt(e, 10)) : null;
        }
      }
    }),
    tableRole: "header_cell",
    isolating: !0,
    parseHTML: () => [{
      tag: "th"
    }],
    renderHTML({
      HTMLAttributes: e
    }) {
      return ["th", o.mergeAttributes(this.options.HTMLAttributes, e), 0];
    }
  });
  t.TableHeader = s, t.default = s;
});
