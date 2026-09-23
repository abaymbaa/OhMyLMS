// Reconstructed Webpack factory 4353; arguments retain original semantics.
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
    });
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ImageBlockMenu = void 0;
  var l = n(83574),
    c = i(n(41594)),
    u = n(64504),
    s = n(22831),
    d = n(16286),
    m = n(94608),
    p = n(7178),
    f = n(20131);
  t.ImageBlockMenu = function (e) {
    var t = e.editor,
      n = e.appendTo,
      r = e.isShow,
      a = (0, c.useRef)(null),
      o = (0, c.useRef)(null),
      i = ((0, c.useCallback)(function () {
        var e = (0, f.getRenderContainer)(t, "node-imageBlock");
        return (null == e ? void 0 : e.getBoundingClientRect()) || new DOMRect(-1e3, -1e3, 0, 0);
      }, [t]), (0, c.useCallback)(function () {
        return t.isActive("imageBlock");
      }, [t])),
      v = (0, c.useCallback)(function () {
        t.chain().focus(void 0, {
          scrollIntoView: !1
        }).setImageBlockAlign("left").run();
      }, [t]),
      g = (0, c.useCallback)(function () {
        t.chain().focus(void 0, {
          scrollIntoView: !1
        }).setImageBlockAlign("center").run();
      }, [t]),
      h = (0, c.useCallback)(function () {
        t.chain().focus(void 0, {
          scrollIntoView: !1
        }).setImageBlockAlign("right").run();
      }, [t]),
      y = (0, c.useCallback)(function (e) {
        t.chain().focus(void 0, {
          scrollIntoView: !1
        }).setImageBlockWidth(e).run();
      }, [t]),
      b = (0, l.useEditorState)({
        editor: t,
        selector: function (e) {
          var t;
          return {
            isImageLeft: e.editor.isActive("imageBlock", {
              align: "left"
            }),
            isImageCenter: e.editor.isActive("imageBlock", {
              align: "center"
            }),
            isImageRight: e.editor.isActive("imageBlock", {
              align: "right"
            }),
            width: parseInt((null === (t = e.editor.getAttributes("imageBlock")) || void 0 === t ? void 0 : t.width) || 0)
          };
        }
      }),
      _ = b.isImageCenter,
      w = b.isImageLeft,
      E = b.isImageRight,
      S = b.width;
    return c.default.createElement(l.BubbleMenu, {
      editor: t,
      pluginKey: "imageBlockMenu-".concat((0, s.v4)()),
      shouldShow: i,
      updateDelay: 0,
      tippyOptions: {
        offset: [0, 8],
        popperOptions: {
          modifiers: [{
            name: "flip",
            enabled: !1
          }]
        },
        onCreate: function (e) {
          o.current = e;
        },
        appendTo: function () {
          return null == n ? void 0 : n.current;
        },
        plugins: [u.sticky],
        sticky: "popper"
      }
    }, r && c.default.createElement(c.default.Fragment, null, c.default.createElement(d.Toolbar.Wrapper, {
      shouldShowContent: i(),
      ref: a,
      className: "clrms-image-toolbar"
    }, c.default.createElement(d.Toolbar.Button, {
      tooltip: "Align image left",
      active: w,
      onClick: v
    }, c.default.createElement(m.Icon, {
      name: "AlignHorizontalDistributeStart"
    })), c.default.createElement(d.Toolbar.Button, {
      tooltip: "Align image center",
      active: _,
      onClick: g
    }, c.default.createElement(m.Icon, {
      name: "AlignHorizontalDistributeCenter"
    })), c.default.createElement(d.Toolbar.Button, {
      tooltip: "Align image right",
      active: E,
      onClick: h
    }, c.default.createElement(m.Icon, {
      name: "AlignHorizontalDistributeEnd"
    })), c.default.createElement(p.ImageBlockWidth, {
      onChange: y,
      value: S
    }))));
  }, t.default = t.ImageBlockMenu;
});
