// Reconstructed Webpack factory 26200; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__assign || function () {
    return r = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return e;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.useTextmenuStates = void 0;
  var a = n(83574),
    o = n(41594),
    i = n(20131);
  t.useTextmenuStates = function (e) {
    var t = (0, a.useEditorState)({
        editor: e,
        selector: function (e) {
          var t, n, r, a;
          return {
            isBold: e.editor.isActive("bold"),
            isItalic: e.editor.isActive("italic"),
            isStrike: e.editor.isActive("strike"),
            isUnderline: e.editor.isActive("underline"),
            isCode: e.editor.isActive("code"),
            isSubscript: e.editor.isActive("subscript"),
            isSuperscript: e.editor.isActive("superscript"),
            isAlignLeft: e.editor.isActive({
              textAlign: "left"
            }),
            isAlignCenter: e.editor.isActive({
              textAlign: "center"
            }),
            isAlignRight: e.editor.isActive({
              textAlign: "right"
            }),
            isAlignJustify: e.editor.isActive({
              textAlign: "justify"
            }),
            currentColor: (null === (t = e.editor.getAttributes("textStyle")) || void 0 === t ? void 0 : t.color) || void 0,
            currentHighlight: (null === (n = e.editor.getAttributes("highlight")) || void 0 === n ? void 0 : n.color) || void 0,
            currentFont: (null === (r = e.editor.getAttributes("textStyle")) || void 0 === r ? void 0 : r.fontFamily) || void 0,
            currentSize: (null === (a = e.editor.getAttributes("textStyle")) || void 0 === a ? void 0 : a.fontSize) || void 0
          };
        }
      }),
      n = (0, o.useCallback)(function (t) {
        var n = t.view,
          r = t.from;
        if (!n || e.view.dragging) return !1;
        if (e.isActive("aiText") || e.isActive("aiImage") || e.isActive("customHTML")) return !1;
        var a = n.domAtPos(r || 0).node,
          o = n.nodeDOM(r || 0) || a;
        return !(0, i.isCustomNodeSelected)(e, o) && (0, i.isTextSelected)({
          editor: e
        });
      }, [e]);
    return r({
      shouldShow: n
    }, t);
  };
});
