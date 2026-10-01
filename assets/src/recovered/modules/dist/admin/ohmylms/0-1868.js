// Reconstructed Webpack factory 1868; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.useTextmenuCommands = void 0;
  var r = n(41594);
  t.useTextmenuCommands = function (e) {
    var t = (0, r.useCallback)(function () {
        return e.chain().focus().toggleMark("bold").run();
      }, [e]),
      n = (0, r.useCallback)(function () {
        return e.chain().focus().toggleMark("italic").run();
      }, [e]),
      a = (0, r.useCallback)(function () {
        return e.chain().focus().toggleMark("strike").run();
      }, [e]),
      o = (0, r.useCallback)(function () {
        return e.chain().focus().toggleUnderline().run();
      }, [e]),
      i = (0, r.useCallback)(function () {
        return e.chain().focus().toggleMark("code").run();
      }, [e]),
      l = (0, r.useCallback)(function () {
        return e.chain().focus().toggleCodeBlock().run();
      }, [e]),
      c = (0, r.useCallback)(function () {
        return e.chain().focus().toggleMark("subscript").run();
      }, [e]),
      u = (0, r.useCallback)(function () {
        return e.chain().focus().toggleMark("superscript").run();
      }, [e]),
      s = (0, r.useCallback)(function () {
        return e.chain().focus().setTextAlign("left").run();
      }, [e]),
      d = (0, r.useCallback)(function () {
        return e.chain().focus().setTextAlign("center").run();
      }, [e]),
      m = (0, r.useCallback)(function () {
        return e.chain().focus().setTextAlign("right").run();
      }, [e]),
      p = (0, r.useCallback)(function () {
        return e.chain().focus().setTextAlign("justify").run();
      }, [e]),
      f = (0, r.useCallback)(function (t) {
        return e.chain().setColor(t).run();
      }, [e]),
      v = (0, r.useCallback)(function () {
        return e.chain().focus().unsetColor().run();
      }, [e]),
      g = (0, r.useCallback)(function (t) {
        return e.chain().setHighlight({
          color: t
        }).run();
      }, [e]),
      h = (0, r.useCallback)(function () {
        return e.chain().focus().unsetHighlight().run();
      }, [e]),
      y = (0, r.useCallback)(function (t, n) {
        return e.chain().focus().setLink({
          href: t,
          target: n ? "_blank" : ""
        }).run();
      }, [e]);
    return {
      onBold: t,
      onItalic: n,
      onStrike: a,
      onUnderline: o,
      onCode: i,
      onCodeBlock: l,
      onSubscript: c,
      onSuperscript: u,
      onAlignLeft: s,
      onAlignCenter: d,
      onAlignRight: m,
      onAlignJustify: p,
      onChangeColor: f,
      onClearColor: v,
      onChangeHighlight: g,
      onClearHighlight: h,
      onSetFont: (0, r.useCallback)(function (t) {
        return t && 0 !== t.length ? e.chain().focus().setFontFamily(t).run() : e.chain().focus().unsetFontFamily().run();
      }, [e]),
      onSetFontSize: (0, r.useCallback)(function (t) {
        return t && 0 !== t.length ? e.chain().focus().setFontSize(t).run() : e.chain().focus().unsetFontSize().run();
      }, [e]),
      onLink: y
    };
  };
});
