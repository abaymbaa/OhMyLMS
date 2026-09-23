// Reconstructed Webpack factory 7057; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Figure = void 0;
  var r = n(99248),
    a = n(56614);
  t.Figure = r.Node.create({
    name: "figure",
    addOptions: function () {
      return {
        HTMLAttributes: {}
      };
    },
    group: "block",
    content: "block figcaption",
    draggable: !0,
    defining: !0,
    selectable: !0,
    parseHTML: function () {
      return [{
        tag: 'figure[data-type="'.concat(this.name, '"]')
      }];
    },
    renderHTML: function (e) {
      var t = e.HTMLAttributes;
      return ["figure", (0, r.mergeAttributes)(t, {
        "data-type": this.name
      }), 0];
    },
    addProseMirrorPlugins: function () {
      var e = this;
      return [new a.Plugin({
        props: {
          handleDOMEvents: {
            dragstart: function (t, n) {
              if (!n.target) return !1;
              var r = t.posAtDOM(n.target, 0);
              return t.state.doc.resolve(r).parent.type.name === e.type.name && n.preventDefault(), !1;
            }
          }
        }
      })];
    }
  }), t.default = t.Figure;
});
