// Reconstructed Webpack factory 30083; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r,
    a = this && this.__assign || function () {
      return a = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, a.apply(this, arguments);
    },
    o = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
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
    i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function (e, t) {
      e.default = t;
    }),
    l = this && this.__importStar || (r = function (e) {
      return r = Object.getOwnPropertyNames || function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
      }, r(e);
    }, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n = r(e), a = 0; a < n.length; a++) "default" !== n[a] && o(t, e, n[a]);
      return i(t, e), t;
    }),
    c = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Tooltip = void 0;
  var u = c(n(8587)),
    s = l(n(41594)),
    d = "undefined" != typeof window && navigator.platform.toUpperCase().indexOf("MAC") >= 0,
    m = function (e) {
      var t = e.children,
        n = "inline-flex items-center justify-center w-5 h-5 p-1 text-[0.625rem] rounded font-semibold leading-none border border-neutral-200 text-neutral-500 border-b-2";
      return "Mod" === t ? s.default.createElement("kbd", {
        className: n
      }, d ? "⌘" : "Ctrl") : "Shift" === t ? s.default.createElement("kbd", {
        className: n
      }, "⇧") : "Alt" === t ? s.default.createElement("kbd", {
        className: n
      }, d ? "⌥" : "Alt") : s.default.createElement("kbd", {
        className: n
      }, t);
    };
  t.Tooltip = function (e) {
    var t = e.children,
      n = e.enabled,
      r = void 0 === n || n,
      o = e.title,
      i = e.shortcut,
      l = e.tippyOptions,
      c = void 0 === l ? {} : l,
      d = e.className,
      p = void 0 === d ? "" : d,
      f = (0, s.useCallback)(function (e) {
        return s.default.createElement("span", {
          className: "flex items-center gap-2 px-2.5 py-1 bg-white border border-neutral-100 rounded-lg shadow-sm z-[999] ".concat(p),
          tabIndex: -1,
          "data-placement": e["data-placement"],
          "data-reference-hidden": e["data-reference-hidden"],
          "data-escaped": e["data-escaped"]
        }, o && s.default.createElement("span", {
          className: "text-xs font-medium text-neutral-500"
        }, o), i && s.default.createElement("span", {
          className: "flex items-center gap-0.5"
        }, "(", i.map(function (e, t) {
          return s.default.createElement(s.default.Fragment, {
            key: e
          }, s.default.createElement(m, null, e), t < i.length - 1 && s.default.createElement("span", null, "+"));
        }), ")"));
      }, [i, o]);
    return r ? s.default.createElement(u.default, a({
      delay: 500,
      offset: [0, 8],
      touch: !1,
      zIndex: 99999,
      appendTo: document.body
    }, c, {
      render: f
    }), s.default.createElement("span", null, t)) : s.default.createElement(s.default.Fragment, null, t);
  }, t.default = t.Tooltip;
});
