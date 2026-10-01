// Reconstructed Webpack factory 9932; arguments retain original semantics.
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
    c = this && this.__rest || function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var a = 0;
        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
      }
      return n;
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Button = void 0;
  var u = n(20131),
    s = l(n(41594));
  t.Button = (0, s.forwardRef)(function (e, t) {
    var n = e.active,
      r = e.buttonSize,
      o = void 0 === r ? "medium" : r,
      i = e.children,
      l = e.disabled,
      d = e.variant,
      m = void 0 === d ? "primary" : d,
      p = e.className,
      f = e.activeClassname,
      v = c(e, ["active", "buttonSize", "children", "disabled", "variant", "className", "activeClassname"]),
      g = (0, u.cn)("flex group items-center justify-center border border-transparent gap-2 text-sm font-semibold rounded-md disabled:opacity-50 whitespace-nowrap", "primary" === m && (0, u.cn)("text-white bg-black border-black dark:text-black dark:bg-white dark:border-white", !l && !n && "hover:bg-neutral-800 active:bg-neutral-900 dark:hover:bg-neutral-200 dark:active:bg-neutral-300", n && (0, u.cn)("bg-neutral-900 dark:bg-neutral-300", f)), "secondary" === m && (0, u.cn)("text-neutral-900 dark:text-white", !l && !n && "hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-900 dark:active:bg-neutral-800", n && "bg-neutral-200 dark:bg-neutral-800"), "tertiary" === m && (0, u.cn)("bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-white dark:border-neutral-900", !l && !n && "hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-700", n && (0, u.cn)("bg-neutral-200 dark:bg-neutral-800", f)), "ghost" === m && (0, u.cn)("bg-transparent border-transparent text-neutral-500 dark:text-neutral-400", !l && !n && "hover:bg-black/5 hover:text-neutral-700 active:bg-black/10 active:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-300 dark:active:text-neutral-200", n && (0, u.cn)("bg-black/10 text-neutral-800 dark:bg-white/20 dark:text-neutral-200", f)), "medium" === o && "py-2 px-3", "small" === o && "py-1 px-2", "icon" === o && "w-8 h-8", "iconSmall" === o && "w-6 h-6", p);
    return s.default.createElement("button", a({
      ref: t,
      disabled: l,
      className: g
    }, v), i);
  }), t.Button.displayName = "Button";
});
