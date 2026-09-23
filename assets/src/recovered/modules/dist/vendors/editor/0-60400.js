// Reconstructed Webpack factory 60400; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(78938);
  const r = o.Extension.create({
    name: "dropCursor",
    addOptions: () => ({
      color: "currentColor",
      width: 1,
      class: void 0
    }),
    addProseMirrorPlugins() {
      return [s.dropCursor(this.options)];
    }
  });
  t.Dropcursor = r, t.default = r;
});
