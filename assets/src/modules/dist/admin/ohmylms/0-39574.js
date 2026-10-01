// Reconstructed Webpack factory 39574; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r,
    a = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
      void 0 === r && (r = n);
      var a = Object.getOwnPropertyDescriptor(t, n);
      a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
        enumerable: !0,
        get: function () {
          return t[n];
        }
      }), Object.defineProperty(e, r, a);
    } : function (e, t, n, r) {
      void 0 === r && (r = n), e[r] = t[n];
    }),
    o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function (e, t) {
      e.default = t;
    }),
    i = this && this.__importStar || (r = function (e) {
      return r = Object.getOwnPropertyNames || function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
      }, r(e);
    }, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n = r(e), i = 0; i < n.length; i++) "default" !== n[i] && a(t, e, n[i]);
      return o(t, e), t;
    }),
    l = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ContentItemMenu = void 0;
  var c = l(n(41594)),
    u = n(94608),
    s = n(16286),
    d = i(n(20009)),
    m = n(45486),
    p = n(49041),
    f = l(n(47502)),
    v = n(21077),
    g = n(41594);
  t.ContentItemMenu = function (e) {
    var t = e.editor,
      n = (0, g.useState)(!1),
      r = n[0],
      a = n[1],
      o = (0, v.useData)(),
      i = (0, f.default)(t, o.currentNode, o.currentNodePos);
    return (0, g.useEffect)(function () {
      r ? t.commands.setMeta("lockDragHandle", !0) : t.commands.setMeta("lockDragHandle", !1);
    }, [t, r]), c.default.createElement("div", {
      className: "flex items-center gap-0.5"
    }, c.default.createElement(s.Toolbar.Button, {
      onClick: i.handleAdd
    }, c.default.createElement(u.Icon, {
      name: "Plus"
    })), c.default.createElement(d.Root, {
      open: r,
      onOpenChange: a
    }, c.default.createElement(d.Trigger, {
      asChild: !0
    }, c.default.createElement(s.Toolbar.Button, null, c.default.createElement(u.Icon, {
      name: "GripVertical"
    }))), c.default.createElement(d.Content, {
      side: "bottom",
      align: "start",
      sideOffset: 8
    }, c.default.createElement(m.Surface, {
      className: "p-2 flex flex-col min-w-[16rem]"
    }, c.default.createElement(d.Close, null, c.default.createElement(p.DropdownButton, {
      onClick: i.resetTextFormatting
    }, c.default.createElement(u.Icon, {
      name: "RemoveFormatting"
    }), "Clear formatting")), c.default.createElement(d.Close, null, c.default.createElement(p.DropdownButton, {
      onClick: i.copyNodeToClipboard
    }, c.default.createElement(u.Icon, {
      name: "Clipboard"
    }), "Copy to clipboard")), c.default.createElement(d.Close, null, c.default.createElement(p.DropdownButton, {
      onClick: i.duplicateNode
    }, c.default.createElement(u.Icon, {
      name: "Copy"
    }), "Duplicate")), c.default.createElement(s.Toolbar.Divider, {
      horizontal: !0
    }), c.default.createElement(d.Close, null, c.default.createElement(p.DropdownButton, {
      onClick: i.deleteNode,
      className: "text-red-500 bg-red-500 dark:text-red-500 hover:bg-red-500 dark:hover:text-red-500 dark:hover:bg-red-500 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-20"
    }, c.default.createElement(u.Icon, {
      name: "Trash2"
    }), "Delete"))))));
  };
});
