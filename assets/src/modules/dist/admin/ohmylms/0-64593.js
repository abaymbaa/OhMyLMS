// Reconstructed Webpack factory 64593; arguments retain original semantics.
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
  }), t.ColorPicker = void 0;
  var l = i(n(41594)),
    c = n(34798),
    u = n(26319),
    s = n(16286),
    d = n(94608),
    m = n(74844);
  t.ColorPicker = function (e) {
    var t = e.color,
      n = e.onChange,
      r = e.onClear,
      a = (0, l.useState)(t || ""),
      o = a[0],
      i = a[1],
      p = (0, l.useCallback)(function (e) {
        i(e.target.value);
      }, []),
      f = (0, l.useCallback)(function () {
        /^#([0-9A-F]{3}){1,2}$/i.test(o) ? n && n(o) : n && n("");
      }, [o, n]);
    return l.default.createElement("div", {
      className: "flex flex-col gap-2 ohmylms-hex-color-picker-wrapper"
    }, l.default.createElement(c.HexColorPicker, {
      className: "ohmylms-hex-color-picker",
      color: t || "",
      onChange: n
    }), l.default.createElement("input", {
      type: "text",
      className: "w-full p-2 text-black bg-white border rounded dark:bg-black dark:text-white border-neutral-200 dark:border-neutral-800 focus:outline-1 focus:ring-0 focus:outline-neutral-300 dark:focus:outline-neutral-700",
      placeholder: "#000000",
      value: o,
      onChange: p,
      onBlur: f
    }), l.default.createElement("div", {
      className: "flex flex-wrap items-center gap-1 max-w-[15rem]"
    }, m.themeColors.map(function (e) {
      return l.default.createElement(u.ColorButton, {
        active: e === t,
        color: e,
        key: e,
        onColorChange: n
      });
    }), l.default.createElement(s.Toolbar.Button, {
      tooltip: "Reset color to default",
      className: "ohmylms-color-picker-reset",
      onClick: r
    }, l.default.createElement(d.Icon, {
      name: "Undo"
    }))));
  };
});
