// Reconstructed Webpack factory 45486; arguments retain original semantics.
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
  }), t.Surface = void 0;
  var u = n(20131),
    s = l(n(41594));
  t.Surface = (0, s.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.className,
      o = e.withShadow,
      i = void 0 === o || o,
      l = e.withBorder,
      d = void 0 === l || l,
      m = c(e, ["children", "className", "withShadow", "withBorder"]),
      p = (0, u.cn)(r, "bg-white rounded-lg dark:bg-black", i ? "shadow-sm" : "", d ? "border border-neutral-200 dark:border-neutral-800" : "");
    return s.default.createElement("div", a({
      className: p
    }, m, {
      ref: t
    }), n);
  }), t.Surface.displayName = "Surface";
});
