// Reconstructed Webpack factory 94186; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.TableHeader = void 0;
  var a = r(n(17729)),
    o = n(56614),
    i = n(37392),
    l = n(63054);
  t.TableHeader = a.default.extend({
    addAttributes: function () {
      return {
        colspan: {
          default: 1
        },
        rowspan: {
          default: 1
        },
        colwidth: {
          default: null,
          parseHTML: function (e) {
            var t = e.getAttribute("colwidth");
            return t ? t.split(",").map(function (e) {
              return parseInt(e, 10);
            }) : null;
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
      return [new o.Plugin({
        props: {
          decorations: function (n) {
            if (!t) return i.DecorationSet.empty;
            var r = n.doc,
              a = n.selection,
              o = [],
              c = (0, l.getCellsInRow)(0)(a);
            return c && c.forEach(function (t, n) {
              var r = t.pos;
              o.push(i.Decoration.widget(r + 1, function () {
                var t = "grip-column";
                (0, l.isColumnSelected)(n)(a) && (t += " selected"), 0 === n && (t += " first"), n === c.length - 1 && (t += " last");
                var r = document.createElement("a");
                return r.className = t, r.addEventListener("mousedown", function (t) {
                  t.preventDefault(), t.stopImmediatePropagation(), e.editor.view.dispatch((0, l.selectColumn)(n)(e.editor.state.tr));
                }), r;
              }));
            }), i.DecorationSet.create(r, o);
          }
        }
      })];
    }
  }), t.default = t.TableHeader;
});
