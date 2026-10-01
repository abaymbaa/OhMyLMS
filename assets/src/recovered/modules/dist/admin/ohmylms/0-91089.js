// Reconstructed Webpack factory 91089; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.isTextSelected = void 0;
  var r = n(99248);
  t.isTextSelected = function (e) {
    var t = e.editor,
      n = t.state,
      a = n.doc,
      o = n.selection,
      i = n.selection,
      l = i.empty,
      c = i.from,
      u = i.to,
      s = !a.textBetween(c, u).length && (0, r.isTextSelection)(o);
    return !(l || s || !t.isEditable);
  }, t.default = t.isTextSelected;
});
