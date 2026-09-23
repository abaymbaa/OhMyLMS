// Reconstructed Webpack factory 6268; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248);
  const s = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,
    r = o.Node.create({
      name: "image",
      addOptions: () => ({
        inline: !1,
        allowBase64: !1,
        HTMLAttributes: {}
      }),
      inline() {
        return this.options.inline;
      },
      group() {
        return this.options.inline ? "inline" : "block";
      },
      draggable: !0,
      addAttributes: () => ({
        src: {
          default: null
        },
        alt: {
          default: null
        },
        title: {
          default: null
        }
      }),
      parseHTML() {
        return [{
          tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
        }];
      },
      renderHTML({
        HTMLAttributes: e
      }) {
        return ["img", o.mergeAttributes(this.options.HTMLAttributes, e)];
      },
      addCommands() {
        return {
          setImage: e => ({
            commands: t
          }) => t.insertContent({
            type: this.name,
            attrs: e
          })
        };
      },
      addInputRules() {
        return [o.nodeInputRule({
          find: s,
          type: this.type,
          getAttributes: e => {
            const [,, t, n, o] = e;
            return {
              src: n,
              alt: t,
              title: o
            };
          }
        })];
      }
    });
  t.Image = r, t.default = r, t.inputRegex = s;
});
