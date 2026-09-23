// Reconstructed Webpack factory 81993; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(43420);
  const o = n(99248).Extension.create({
    name: "fontFamily",
    addOptions: () => ({
      types: ["textStyle"]
    }),
    addGlobalAttributes() {
      return [{
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: e => {
              var t;
              return null === (t = e.style.fontFamily) || void 0 === t ? void 0 : t.replace(/['"]+/g, "");
            },
            renderHTML: e => e.fontFamily ? {
              style: `font-family: ${e.fontFamily}`
            } : {}
          }
        }
      }];
    },
    addCommands: () => ({
      setFontFamily: e => ({
        chain: t
      }) => t().setMark("textStyle", {
        fontFamily: e
      }).run(),
      unsetFontFamily: () => ({
        chain: e
      }) => e().setMark("textStyle", {
        fontFamily: null
      }).removeEmptyTextStyle().run()
    })
  });
  t.FontFamily = o, t.default = o;
});
