// Reconstructed Webpack factory 11491; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.TableCell = void 0;
  var r = n(99248),
    a = n(56614),
    o = n(37392),
    i = n(63054);
  t.TableCell = r.Node.create({
    name: "tableCell",
    content: "block+",
    tableRole: "cell",
    isolating: !0,
    addOptions: function () {
      return {
        HTMLAttributes: {}
      };
    },
    parseHTML: function () {
      return [{
        tag: "td"
      }];
    },
    renderHTML: function (e) {
      var t = e.HTMLAttributes;
      return ["td", (0, r.mergeAttributes)(this.options.HTMLAttributes, t), 0];
    },
    addAttributes: function () {
      return {
        colspan: {
          default: 1,
          parseHTML: function (e) {
            var t = e.getAttribute("colspan");
            return t ? parseInt(t, 10) : 1;
          }
        },
        rowspan: {
          default: 1,
          parseHTML: function (e) {
            var t = e.getAttribute("rowspan");
            return t ? parseInt(t, 10) : 1;
          }
        },
        colwidth: {
          default: null,
          parseHTML: function (e) {
            var t = e.getAttribute("colwidth");
            return t ? [parseInt(t, 10)] : null;
          }
        },
        style: {
          default: null
        }
      };
    },
    addProseMirrorPlugins: function () {
      var e = this,
        t = this.editor.isEditable;
      return [new a.Plugin({
        props: {
          decorations: function (n) {
            if (!t) return o.DecorationSet.empty;
            var r = n.doc,
              a = n.selection,
              l = [],
              c = (0, i.getCellsInColumn)(0)(a);
            return c && c.forEach(function (t, n) {
              var r = t.pos;
              l.push(o.Decoration.widget(r + 1, function () {
                var t = "grip-row";
                (0, i.isRowSelected)(n)(a) && (t += " selected"), 0 === n && (t += " first"), n === c.length - 1 && (t += " last");
                var r = document.createElement("a");
                return r.className = t, r.addEventListener("mousedown", function (t) {
                  t.preventDefault(), t.stopImmediatePropagation(), e.editor.view.dispatch((0, i.selectRow)(n)(e.editor.state.tr));
                }), r;
              }));
            }), o.DecorationSet.create(r, l);
          }
        }
      })];
    }
  });
});
