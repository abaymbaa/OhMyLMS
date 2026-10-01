// Reconstructed Webpack factory 64064; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(99248),
    s = n(56614);
  const r = o.Extension.create({
    name: "characterCount",
    addOptions: () => ({
      limit: null,
      mode: "textSize"
    }),
    addStorage: () => ({
      characters: () => 0,
      words: () => 0
    }),
    onBeforeCreate() {
      this.storage.characters = e => {
        const t = (null == e ? void 0 : e.node) || this.editor.state.doc;
        return "textSize" === ((null == e ? void 0 : e.mode) || this.options.mode) ? t.textBetween(0, t.content.size, void 0, " ").length : t.nodeSize;
      }, this.storage.words = e => {
        const t = (null == e ? void 0 : e.node) || this.editor.state.doc;
        return t.textBetween(0, t.content.size, " ", " ").split(" ").filter(e => "" !== e).length;
      };
    },
    addProseMirrorPlugins() {
      return [new s.Plugin({
        key: new s.PluginKey("characterCount"),
        filterTransaction: (e, t) => {
          const n = this.options.limit;
          if (!e.docChanged || 0 === n || null == n) return !0;
          const o = this.storage.characters({
              node: t.doc
            }),
            s = this.storage.characters({
              node: e.doc
            });
          if (s <= n) return !0;
          if (o > n && s > n && s <= o) return !0;
          if (o > n && s > n && s > o) return !1;
          if (!e.getMeta("paste")) return !1;
          const r = e.selection.$head.pos,
            i = r - (s - n),
            a = r;
          return e.deleteRange(i, a), !(this.storage.characters({
            node: e.doc
          }) > n);
        }
      })];
    }
  });
  t.CharacterCount = r, t.default = r;
});
