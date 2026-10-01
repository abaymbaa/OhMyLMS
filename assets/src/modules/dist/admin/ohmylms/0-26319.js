// Reconstructed Webpack factory 26319; arguments retain original semantics.
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
  }), t.ColorButton = void 0;
  var l = n(20131),
    c = i(n(41594));
  t.ColorButton = (0, c.memo)(function (e) {
    var t = e.color,
      n = e.active,
      r = e.onColorChange,
      a = (0, l.cn)("flex items-center justify-center px-1.5 py-1.5 rounded group", !n && "hover:bg-neutral-100", n && "bg-neutral-100"),
      o = (0, l.cn)("w-4 h-4 rounded bg-slate-100 shadow-sm ring-offset-2 ring-current", !n && "hover:ring-1", n && "ring-1"),
      i = (0, c.useCallback)(function () {
        r && r(t || "");
      }, [r, t]);
    return c.default.createElement("button", {
      onClick: i,
      className: a
    }, c.default.createElement("div", {
      style: {
        backgroundColor: t,
        color: t
      },
      className: o
    }));
  }), t.ColorButton.displayName = "ColorButton";
});
