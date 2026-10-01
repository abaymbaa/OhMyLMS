// Reconstructed Webpack factory 70034; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(43420);
  const o = n(99248).Extension.create({
    name: "color",
    addOptions: () => ({
      types: ["textStyle"]
    }),
    addGlobalAttributes() {
      return [{
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: e => {
              var t;
              return null === (t = e.style.color) || void 0 === t ? void 0 : t.replace(/['"]+/g, "");
            },
            renderHTML: e => e.color ? {
              style: `color: ${e.color}`
            } : {}
          }
        }
      }];
    },
    addCommands: () => ({
      setColor: e => ({
        chain: t
      }) => t().setMark("textStyle", {
        color: e
      }).run(),
      unsetColor: () => ({
        chain: e
      }) => e().setMark("textStyle", {
        color: null
      }).removeEmptyTextStyle().run()
    })
  });
  t.Color = o, t.default = o;
});
