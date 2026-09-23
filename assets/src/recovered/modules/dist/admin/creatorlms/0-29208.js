// Reconstructed Webpack factory 29208; arguments retain original semantics.
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
  }), t.Toggle = void 0;
  var l = n(20131),
    c = i(n(41594));
  t.Toggle = function (e) {
    var t = e.onChange,
      n = e.active,
      r = void 0 !== n && n,
      a = e.size,
      o = void 0 === a ? "large" : a,
      i = r ? "checked" : "unchecked",
      u = r ? "on" : "off",
      s = (0, l.cn)("inline-flex cursor-pointer items-center rounded-full border-transparent transition-colors omlms-toggle", r ? "bg-black omlms-toggle-checked" : "bg-neutral-200 hover:bg-neutral-300", r ? "dark:bg-white" : "dark:bg-neutral-800 dark:hover:bg-neutral-700", "small" === o && "h-3 w-6 px-0.5", "large" === o && "h-5 w-9 px-0.5"),
      d = (0, l.cn)("rounded-full pointer-events-none block transition-transform", "bg-white", "small" === o && "h-2 w-2", "large" === o && "h-4 w-4", r ? (0, l.cn)("small" === o ? "translate-x-3" : "", "large" === o ? "translate-x-4" : "") : "translate-x-0"),
      m = (0, c.useCallback)(function () {
        t(!r);
      }, [r, t]);
    return c.default.createElement("button", {
      className: s,
      type: "button",
      role: "switch",
      "aria-checked": r,
      "data-state": i,
      value: u,
      onClick: m
    }, c.default.createElement("span", {
      className: d,
      "data-state": i
    }));
  };
});
