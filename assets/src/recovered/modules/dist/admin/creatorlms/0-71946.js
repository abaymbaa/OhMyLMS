// Reconstructed Webpack factory 71946; arguments retain original semantics.
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
  }), t.EditLinkPopover = void 0;
  var l = i(n(41594)),
    c = n(29744),
    u = n(94608),
    s = n(16286),
    d = i(n(20009)),
    m = n(12470);
  t.EditLinkPopover = function (e) {
    var t = e.onSetLink,
      n = (0, l.useState)(!1),
      r = n[0],
      a = n[1];
    return l.default.createElement(d.Root, {
      open: r,
      onOpenChange: a
    }, l.default.createElement(d.Trigger, {
      asChild: !0
    }, l.default.createElement(s.Toolbar.Button, {
      tooltip: (0, m.__)("Set Link", "ohmylms"),
      onClick: function () {
        return a(!0);
      }
    }, l.default.createElement(u.Icon, {
      name: "Link"
    }))), l.default.createElement(d.Content, null, l.default.createElement(c.LinkEditorPanel, {
      onSetLink: t,
      onClose: function () {
        return a(!1);
      }
    })));
  };
});
