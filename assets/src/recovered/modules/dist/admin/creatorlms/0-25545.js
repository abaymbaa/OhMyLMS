// Reconstructed Webpack factory 25545; arguments retain original semantics.
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
  }), t.LinkEditorPanel = t.useLinkEditorState = void 0;
  var l = n(28194),
    c = n(94608),
    u = n(45486),
    s = n(29994),
    d = i(n(41594)),
    m = n(12470);
  t.useLinkEditorState = function (e) {
    var t = e.initialUrl,
      n = e.initialOpenInNewTab,
      r = e.onSetLink,
      a = e.onClose,
      o = (0, d.useState)(t || ""),
      i = o[0],
      l = o[1],
      c = (0, d.useState)(n || !1),
      u = c[0],
      s = c[1],
      m = (0, d.useCallback)(function (e) {
        l(e.target.value);
      }, []),
      p = (0, d.useMemo)(function () {
        return /^(\S+):(\/\/)?\S+$/.test(i);
      }, [i]),
      f = (0, d.useCallback)(function (e) {
        e.preventDefault(), p && r(i, u);
      }, [i, p, u, r]);
    return {
      url: i,
      setUrl: l,
      openInNewTab: u,
      setOpenInNewTab: s,
      onChange: m,
      handleSubmit: f,
      isValidUrl: p,
      onClose: a
    };
  }, t.LinkEditorPanel = function (e) {
    var n = e.onSetLink,
      r = e.initialOpenInNewTab,
      a = e.initialUrl,
      o = e.onClose,
      i = (0, t.useLinkEditorState)({
        onSetLink: n,
        initialOpenInNewTab: r,
        initialUrl: a,
        onClose: o
      });
    return d.default.createElement(u.Surface, {
      className: "p-2 omlms-toolbar-dropdown omlms-link-editor"
    }, d.default.createElement("form", {
      onSubmit: i.handleSubmit,
      className: "flex items-center gap-2 omlms-link-editor-form"
    }, d.default.createElement("label", {
      className: "flex items-center gap-2 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 cursor-text"
    }, d.default.createElement(c.Icon, {
      name: "Link",
      className: "flex-none text-black dark:text-white"
    }), " ", (0, m.__)("Link", "ohmylms"), d.default.createElement("input", {
      type: "url",
      className: "flex-1 bg-transparent outline-none min-w-[12rem] text-black text-sm dark:text-white",
      placeholder: (0, m.__)("Paste or enter link", "ohmylms"),
      value: i.url,
      onChange: i.onChange
    })), d.default.createElement("div", {
      className: "px-2"
    }, d.default.createElement("label", {
      className: "flex items-center justify-start gap-2 text-sm font-semibold cursor-pointer select-none text-neutral-500 dark:text-neutral-400"
    }, (0, m.__)("Open in new tab", "ohmylms"), d.default.createElement(s.Toggle, {
      active: i.openInNewTab,
      onChange: i.setOpenInNewTab,
      size: "small"
    }))), d.default.createElement("div", {
      className: "omlms-link-editor-btns"
    }, d.default.createElement(l.Button, {
      variant: "outline",
      buttonSize: "small",
      onClick: i.onClose
    }, (0, m.__)("Cancel", "ohmylms")), d.default.createElement(l.Button, {
      variant: "primary",
      buttonSize: "small",
      type: "submit",
      disabled: !i.isValidUrl
    }, (0, m.__)("Set Link", "ohmylms")))));
  };
});
