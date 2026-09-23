// Reconstructed Webpack factory 4414; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.TrailingNode = void 0;
  var r = n(99248),
    a = n(56614);
  function o(e) {
    var t = e.types,
      n = e.node;
    return Array.isArray(t) && t.includes(n.type) || n.type === t;
  }
  t.TrailingNode = r.Extension.create({
    name: "trailingNode",
    addOptions: function () {
      return {
        node: "paragraph",
        notAfter: ["paragraph"]
      };
    },
    addProseMirrorPlugins: function () {
      var e = this,
        t = new a.PluginKey(this.name),
        n = Object.entries(this.editor.schema.nodes).map(function (e) {
          return e[1];
        }).filter(function (t) {
          return e.options.notAfter.includes(t.name);
        });
      return [new a.Plugin({
        key: t,
        appendTransaction: function (n, r, a) {
          var o = a.doc,
            i = a.tr,
            l = a.schema,
            c = t.getState(a),
            u = o.content.size,
            s = l.nodes[e.options.node];
          if (c) return i.insert(u, s.create());
        },
        state: {
          init: function (e, t) {
            return !o({
              node: t.tr.doc.lastChild,
              types: n
            });
          },
          apply: function (e, t) {
            return e.docChanged ? !o({
              node: e.doc.lastChild,
              types: n
            }) : t;
          }
        }
      })];
    }
  });
});
