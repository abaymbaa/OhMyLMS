// Reconstructed Webpack factory 62768; arguments retain original semantics.
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
  }), t.TextMenu = void 0;
  var c = l(n(41594)),
    u = n(94608),
    s = n(16286),
    d = n(1868),
    m = n(26200),
    p = n(83574),
    f = n(41594),
    v = i(n(20009)),
    g = n(45486),
    h = n(29744),
    y = n(85760),
    b = n(68203),
    _ = n(98472),
    w = n(93552),
    E = n(71946),
    S = (0, f.memo)(s.Toolbar.Button),
    R = (0, f.memo)(h.ColorPicker),
    x = (0, f.memo)(y.FontFamilyPicker),
    C = (0, f.memo)(b.FontSizePicker),
    P = (0, f.memo)(w.ContentTypePicker);
  t.TextMenu = function (e) {
    var t = e.editor,
      n = e.showTextAlign,
      r = e.isShow,
      a = (0, d.useTextmenuCommands)(t),
      o = (0, m.useTextmenuStates)(t),
      i = (0, _.useTextmenuContentTypes)(t);
    return c.default.createElement(p.BubbleMenu, {
      tippyOptions: {
        popperOptions: {
          placement: "top-start",
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: "viewport",
              padding: 8
            }
          }, {
            name: "flip",
            options: {
              fallbackPlacements: ["bottom-start", "top-end", "bottom-end"]
            }
          }]
        },
        maxWidth: "calc(100vw - 16px)"
      },
      editor: t,
      pluginKey: "textMenu",
      shouldShow: o.shouldShow,
      updateDelay: 100
    }, r && c.default.createElement(c.default.Fragment, null, c.default.createElement(s.Toolbar.Wrapper, {
      className: "clrms-text-toolbar"
    }, c.default.createElement(P, {
      options: i
    }), c.default.createElement(x, {
      onChange: a.onSetFont,
      value: o.currentFont || ""
    }), c.default.createElement(C, {
      onChange: a.onSetFontSize,
      value: o.currentSize || ""
    }), c.default.createElement(s.Toolbar.Divider, null), c.default.createElement(S, {
      tooltip: "Bold",
      tooltipShortcut: ["Mod", "B"],
      onClick: a.onBold,
      active: o.isBold
    }, c.default.createElement(u.Icon, {
      name: "Bold"
    })), c.default.createElement(S, {
      tooltip: "Italic",
      tooltipShortcut: ["Mod", "I"],
      onClick: a.onItalic,
      active: o.isItalic
    }, c.default.createElement(u.Icon, {
      name: "Italic"
    })), c.default.createElement(S, {
      tooltip: "Underline",
      tooltipShortcut: ["Mod", "U"],
      onClick: a.onUnderline,
      active: o.isUnderline
    }, c.default.createElement(u.Icon, {
      name: "Underline"
    })), c.default.createElement(S, {
      tooltip: "Strikehrough",
      tooltipShortcut: ["Mod", "Shift", "S"],
      onClick: a.onStrike,
      active: o.isStrike
    }, c.default.createElement(u.Icon, {
      name: "Strikethrough"
    })), c.default.createElement(S, {
      tooltip: "Code",
      tooltipShortcut: ["Mod", "E"],
      onClick: a.onCode,
      active: o.isCode
    }, c.default.createElement(u.Icon, {
      name: "Code"
    })), c.default.createElement(E.EditLinkPopover, {
      onSetLink: a.onLink
    }), c.default.createElement(v.Root, null, c.default.createElement(v.Trigger, {
      asChild: !0
    }, c.default.createElement(S, {
      active: !!o.currentHighlight,
      tooltip: "Highlight text"
    }, c.default.createElement(u.Icon, {
      name: "Highlighter"
    }))), c.default.createElement(v.Content, {
      side: "top",
      sideOffset: 8,
      asChild: !0
    }, c.default.createElement(g.Surface, {
      className: "p-1 omlms-toolbar-dropdown"
    }, c.default.createElement(R, {
      color: o.currentHighlight,
      onChange: a.onChangeHighlight,
      onClear: a.onClearHighlight
    })))), c.default.createElement(v.Root, null, c.default.createElement(v.Trigger, {
      asChild: !0
    }, c.default.createElement(S, {
      active: !!o.currentColor,
      tooltip: "Text color"
    }, c.default.createElement(u.Icon, {
      name: "Palette"
    }))), c.default.createElement(v.Content, {
      side: "top",
      sideOffset: 8,
      asChild: !0
    }, c.default.createElement(g.Surface, {
      className: "p-1 omlms-toolbar-dropdown"
    }, c.default.createElement(R, {
      color: o.currentColor,
      onChange: a.onChangeColor,
      onClear: a.onClearColor
    })))), c.default.createElement(v.Root, null, c.default.createElement(v.Trigger, {
      asChild: !0
    }, c.default.createElement(S, {
      tooltip: "More options",
      className: "omlms-more-options"
    }, c.default.createElement(u.Icon, {
      name: "EllipsisVertical",
      className: "omlms-more-options-icon"
    }))), c.default.createElement(v.Content, {
      side: "top",
      asChild: !0,
      className: "omlms-toolbar-dropdown"
    }, c.default.createElement(s.Toolbar.Wrapper, null, c.default.createElement(S, {
      tooltip: "Subscript",
      tooltipShortcut: ["Mod", "."],
      onClick: a.onSubscript,
      active: o.isSubscript
    }, c.default.createElement(u.Icon, {
      name: "Subscript"
    })), c.default.createElement(S, {
      tooltip: "Superscript",
      tooltipShortcut: ["Mod", ","],
      onClick: a.onSuperscript,
      active: o.isSuperscript
    }, c.default.createElement(u.Icon, {
      name: "Superscript"
    })), n && c.default.createElement(c.default.Fragment, null, c.default.createElement(s.Toolbar.Divider, null), c.default.createElement(S, {
      tooltip: "Align left",
      tooltipShortcut: ["Shift", "Mod", "L"],
      onClick: a.onAlignLeft,
      active: o.isAlignLeft
    }, c.default.createElement(u.Icon, {
      name: "AlignLeft"
    })), c.default.createElement(S, {
      tooltip: "Align center",
      tooltipShortcut: ["Shift", "Mod", "E"],
      onClick: a.onAlignCenter,
      active: o.isAlignCenter
    }, c.default.createElement(u.Icon, {
      name: "AlignCenter"
    })), c.default.createElement(S, {
      tooltip: "Align right",
      tooltipShortcut: ["Shift", "Mod", "R"],
      onClick: a.onAlignRight,
      active: o.isAlignRight
    }, c.default.createElement(u.Icon, {
      name: "AlignRight"
    })), c.default.createElement(S, {
      tooltip: "Justify",
      tooltipShortcut: ["Shift", "Mod", "J"],
      onClick: a.onAlignJustify,
      active: o.isAlignJustify
    }, c.default.createElement(u.Icon, {
      name: "AlignJustify"
    })))))))));
  };
});
