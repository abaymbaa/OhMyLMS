// Reconstructed Webpack factory 47502; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(41594);
  t.default = function (e, t, n) {
    return {
      resetTextFormatting: (0, r.useCallback)(function () {
        var r = e.chain();
        r.setNodeSelection(n).unsetAllMarks(), "paragraph" !== (null == t ? void 0 : t.type.name) && r.setParagraph(), r.run();
      }, [e, n, null == t ? void 0 : t.type.name]),
      duplicateNode: (0, r.useCallback)(function () {
        e.commands.setNodeSelection(n);
        var r = e.state.selection.$anchor.node(1) || e.state.selection.node;
        e.chain().setMeta("hideDragHandle", !0).insertContentAt(n + ((null == t ? void 0 : t.nodeSize) || 0), r.toJSON()).run();
      }, [e, n, null == t ? void 0 : t.nodeSize]),
      copyNodeToClipboard: (0, r.useCallback)(function () {
        e.chain().setMeta("hideDragHandle", !0).setNodeSelection(n).run(), document.execCommand("copy");
      }, [e, n]),
      deleteNode: (0, r.useCallback)(function () {
        e.chain().setMeta("hideDragHandle", !0).setNodeSelection(n).deleteSelection().run();
      }, [e, n]),
      handleAdd: (0, r.useCallback)(function () {
        var r;
        if (-1 !== n) {
          var a = (null == t ? void 0 : t.nodeSize) || 0,
            o = n + a,
            i = "paragraph" === (null == t ? void 0 : t.type.name) && 0 === (null === (r = null == t ? void 0 : t.content) || void 0 === r ? void 0 : r.size),
            l = i ? n + 2 : o + 2;
          e.chain().command(function (e) {
            var t = e.dispatch,
              r = e.tr,
              a = e.state;
            return !t || (i ? r.insertText("/", n, n + 1) : r.insert(o, a.schema.nodes.paragraph.create(null, [a.schema.text("/")])), t(r));
          }).focus(l).run();
        }
      }, [t, n, e])
    };
  };
});
