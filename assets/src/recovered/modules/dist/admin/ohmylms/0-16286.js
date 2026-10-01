// Reconstructed Webpack factory 16286; arguments retain original semantics.
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
    },
    u = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Toolbar = void 0;
  var s = l(n(41594)),
    d = n(20131),
    m = n(45486),
    p = n(28194),
    f = u(n(30083)),
    v = (0, s.forwardRef)(function (e, t) {
      var n = e.shouldShowContent,
        r = void 0 === n || n,
        o = e.children,
        i = e.isVertical,
        l = void 0 !== i && i,
        u = e.className,
        p = c(e, ["shouldShowContent", "children", "isVertical", "className"]);
      if (!r) return null;
      var f = (0, d.cn)("text-black inline-flex h-full leading-none gap-0.5", l ? "flex-col p-2" : "flex-row p-1 items-center", u);
      return s.default.createElement(m.Surface, a({
        className: f
      }, p, {
        ref: t
      }), o);
    });
  v.displayName = "Toolbar";
  var g = (0, s.forwardRef)(function (e, t) {
    var n = e.horizontal,
      r = e.className,
      o = c(e, ["horizontal", "className"]),
      i = (0, d.cn)("bg-neutral-200 dark:bg-neutral-800 ohmylms-toolbox-divider", n ? "w-full min-w-[1.5rem] h-[1px] my-1 first:mt-0 last:mt-0" : "h-full min-h-[1.5rem] w-[1px] mx-1 first:ml-0 last:mr-0", r);
    return s.default.createElement("div", a({
      className: i,
      ref: t
    }, o));
  });
  g.displayName = "Toolbar.Divider";
  var h = (0, s.forwardRef)(function (e, t) {
    var n = e.children,
      r = e.buttonSize,
      o = void 0 === r ? "icon" : r,
      i = e.variant,
      l = void 0 === i ? "ghost" : i,
      u = e.className,
      m = e.tooltip,
      v = e.tooltipShortcut,
      g = e.activeClassname,
      h = void 0 === g ? "ohmylms-toolbar-btn-active" : g,
      y = c(e, ["children", "buttonSize", "variant", "className", "tooltip", "tooltipShortcut", "activeClassname"]),
      b = (0, d.cn)("gap-1 min-w-[2rem] px-2 w-auto", u),
      _ = s.default.createElement(p.Button, a({
        activeClassname: h,
        className: b,
        variant: l,
        buttonSize: o,
        ref: t
      }, y), n);
    return m ? s.default.createElement(f.default, {
      title: m,
      shortcut: v,
      className: "ohmylms-toolbar-tooltip"
    }, _) : _;
  });
  h.displayName = "ToolbarButton", t.Toolbar = {
    Wrapper: v,
    Divider: g,
    Button: h
  };
});
