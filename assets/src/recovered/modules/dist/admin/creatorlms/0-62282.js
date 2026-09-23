// Reconstructed Webpack factory 62282; arguments retain original semantics.
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
  }), t.LinkMenu = void 0;
  var l = i(n(41594)),
    c = n(83574),
    u = n(29744);
  t.LinkMenu = function (e) {
    var t = e.editor,
      n = e.appendTo,
      r = e.isShow,
      a = (0, l.useState)(!1),
      o = a[0],
      i = a[1],
      s = (0, c.useEditorState)({
        editor: t,
        selector: function (e) {
          var t = e.editor.getAttributes("link");
          return {
            link: t.href,
            target: t.target
          };
        }
      }),
      d = s.link,
      m = s.target,
      p = (0, l.useCallback)(function () {
        var e = t.isActive("link");
        return !!r && e;
      }, [t, r]),
      f = (0, l.useCallback)(function () {
        i(!0);
      }, []),
      v = (0, l.useCallback)(function (e, n) {
        t.chain().focus().extendMarkRange("link").setLink({
          href: e,
          target: n ? "_blank" : ""
        }).run(), i(!1);
      }, [t]),
      g = (0, l.useCallback)(function () {
        return t.chain().focus().extendMarkRange("link").unsetLink().run(), i(!1), null;
      }, [t]);
    return l.default.createElement(c.BubbleMenu, {
      editor: t,
      pluginKey: "linkMenu",
      shouldShow: p,
      updateDelay: 0,
      tippyOptions: {
        popperOptions: {
          modifiers: [{
            name: "flip",
            enabled: !1
          }]
        },
        appendTo: function () {
          return null == n ? void 0 : n.current;
        },
        onHidden: function () {
          i(!1);
        }
      }
    }, r && l.default.createElement(l.default.Fragment, null, o ? l.default.createElement(u.LinkEditorPanel, {
      initialUrl: d,
      initialOpenInNewTab: "_blank" === m,
      onSetLink: v
    }) : l.default.createElement(u.LinkPreviewPanel, {
      url: d,
      onClear: g,
      onEdit: f
    })));
  }, t.default = t.LinkMenu;
});
