// Reconstructed Webpack factory 10183; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.LinkPreviewPanel = void 0;
  var a = r(n(41594)),
    o = n(94608),
    i = n(45486),
    l = n(16286),
    c = r(n(30083));
  t.LinkPreviewPanel = function (e) {
    var t = e.onClear,
      n = e.onEdit,
      r = e.url;
    return a.default.createElement(i.Surface, {
      className: "flex items-center gap-2 p-2 ohmylms-toolbar-dropdown "
    }, a.default.createElement("a", {
      href: r,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-sm underline break-all"
    }, r), a.default.createElement(l.Toolbar.Divider, null), a.default.createElement(c.default, {
      title: "Edit link",
      className: "ohmylms-toolbar-tooltip"
    }, a.default.createElement(l.Toolbar.Button, {
      onClick: n
    }, a.default.createElement(o.Icon, {
      name: "Pen"
    }))), a.default.createElement(c.default, {
      title: "Remove link",
      className: "ohmylms-toolbar-tooltip"
    }, a.default.createElement(l.Toolbar.Button, {
      onClick: t
    }, a.default.createElement(o.Icon, {
      name: "Trash2"
    }))));
  };
});
