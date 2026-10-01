// Reconstructed Webpack factory 49804; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => O
  });
  var r = n(41594),
    a = n.n(r),
    i = n(85075),
    o = n(83651),
    s = n(80851),
    l = n(43538),
    c = n(66687),
    u = n(35128),
    d = function () {
      return d = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, d.apply(this, arguments);
    },
    p = a().forwardRef(function (e, t) {
      var n,
        i,
        p,
        f,
        h,
        _,
        m = (0, r.useContext)(l.Q).getPrefixCls,
        A = (0, r.useRef)(),
        g = (0, r.useContext)(w),
        y = (0, u.A)(),
        v = e.children,
        E = e.name,
        b = e.header,
        C = e.className,
        O = e.style,
        M = e.contentStyle,
        S = e.extra,
        T = e.disabled,
        k = e.destroyOnHide,
        x = e.expandIcon,
        D = e.showExpandIcon,
        I = void 0 === D || D,
        P = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
          }
          return n;
        }(e, ["children", "name", "header", "className", "style", "contentStyle", "extra", "disabled", "destroyOnHide", "expandIcon", "showExpandIcon"]),
        L = m("collapse-item"),
        R = (null === (_ = g.activeKeys) || void 0 === _ ? void 0 : _.indexOf(E)) > -1,
        B = I ? "expandIcon" in e ? x : g.expandIcon : null,
        N = function (e, t) {
          if (!T) {
            var n = g.triggerRegion;
            (t === ("icon" === n ? 0 : "header" === n ? 1 : 2) || "header" === n && [0, 1].includes(t)) && g.onToggle(E, e);
          }
        };
      return a().createElement("div", d({
        ref: t
      }, P, {
        className: (0, o.A)(L, (n = {}, n[L + "-active"] = R, n[L + "-no-icon"] = !B, n[L + "-disabled"] = T, n), C),
        style: O
      }), a().createElement("div", d({
        role: "button",
        "aria-disabled": T,
        "aria-expanded": R,
        "data-active-region": g.triggerRegion,
        tabIndex: T ? -1 : 0,
        className: (0, o.A)(L + "-header", L + "-header-" + g.expandIconPosition, (i = {}, i[L + "-header-disabled"] = T, i)),
        onClick: function (e) {
          return N(e, 2);
        }
      }, y({
        onPressEnter: function (e) {
          !T && g.onToggle(E, e);
        }
      })), B && a().createElement(c.A, {
        prefix: L,
        disabled: T,
        className: (0, o.A)((p = {}, p[L + "-icon-hover-right"] = "right" === g.expandIconPosition, p[L + "-header-icon-right"] = "right" === g.expandIconPosition, p)),
        onClick: function (e) {
          return N(e, 0);
        }
      }, a().createElement("span", {
        className: (0, o.A)(L + "-header-icon", (f = {}, f[L + "-header-icon-down"] = R, f))
      }, B)), a().createElement("div", {
        className: L + "-header-title",
        onClick: function (e) {
          return N(e, 1);
        }
      }, b), S && a().createElement("div", {
        className: L + "-header-extra",
        onClick: function (e) {
          e.stopPropagation();
        }
      }, S)), a().createElement(s.Ay, {
        nodeRef: A,
        in: R,
        addEndListener: function (e) {
          var t;
          null === (t = A.current) || void 0 === t || t.addEventListener("transitionend", e, !1);
        },
        mountOnEnter: "destroyOnHide" in e ? k : g.destroyOnHide || g.lazyload,
        unmountOnExit: "destroyOnHide" in e ? k : g.destroyOnHide,
        onEnter: function () {
          var e = A.current;
          e && (e.style.height = "0", e.style.display = "block");
        },
        onEntering: function () {
          var e = A.current;
          e && (e.style.height = e.scrollHeight + "px");
        },
        onEntered: function () {
          var e = A.current;
          e && (e.style.height = "auto");
        },
        onExit: function () {
          var e = A.current;
          e && (e.style.display = "block", e.style.height = e.offsetHeight + "px", e.offsetHeight);
        },
        onExiting: function () {
          var e = A.current;
          e && (e.style.height = "0");
        },
        onExited: function () {
          var e = A.current;
          e && (e.style.display = "none", e.style.height = "auto");
        }
      }, a().createElement("div", {
        role: "region",
        className: (0, o.A)(L + "-content", (h = {}, h[L + "-content-expanded"] = R, h)),
        ref: A
      }, a().createElement("div", {
        style: M,
        className: L + "-content-box"
      }, v))));
    });
  p.displayName = "CollapseItem";
  const f = p;
  var h = n(69626),
    _ = n(26905),
    m = n(9322),
    A = n(11676),
    g = n(5337),
    y = function () {
      return y = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, y.apply(this, arguments);
    },
    v = function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        a,
        i = n.call(e),
        o = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done;) o.push(r.value);
      } catch (e) {
        a = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (a) throw a.error;
        }
      }
      return o;
    },
    E = function (e, t) {
      var n = [].concat(e);
      return t ? n.slice(0, 1) : n;
    },
    b = {
      bordered: !0,
      lazyload: !0,
      expandIconPosition: "left"
    },
    w = (0, r.createContext)({
      expandIconPosition: "left",
      expandIcon: a().createElement(_.A, null),
      activeKeys: [],
      onToggle: function () {}
    }),
    C = a().forwardRef(function (e, t) {
      var n,
        s = (0, r.useContext)(l.Q),
        c = s.getPrefixCls,
        u = s.componentConfig,
        d = s.rtl,
        p = (0, g.A)(e, b, null == u ? void 0 : u.Collapse),
        f = v((0, m.A)([], {
          defaultValue: "defaultActiveKey" in p ? E(p.defaultActiveKey, p.accordion) : void 0,
          value: "activeKey" in p ? E(p.activeKey, p.accordion) : void 0
        }), 2),
        C = f[0],
        O = f[1],
        M = p.children,
        S = p.className,
        T = p.style,
        k = p.bordered,
        x = p.lazyload,
        D = p.expandIcon,
        I = p.expandIconPosition,
        P = p.destroyOnHide,
        L = p.accordion,
        R = p.triggerRegion,
        B = p.onChange,
        N = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
          }
          return n;
        }(p, ["children", "className", "style", "bordered", "lazyload", "expandIcon", "expandIconPosition", "destroyOnHide", "accordion", "triggerRegion", "onChange"]),
        U = c("collapse");
      return a().createElement(w.Provider, {
        value: {
          activeKeys: C,
          triggerRegion: R,
          lazyload: x,
          destroyOnHide: P,
          expandIconPosition: I,
          onToggle: function (e, t) {
            var n = function (e, t, n) {
                if (n || 2 === arguments.length) for (var r, a = 0, i = t.length; a < i; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
                return e.concat(r || Array.prototype.slice.call(t));
              }([], v(C || []), !1),
              r = null == C ? void 0 : C.indexOf(e);
            r > -1 ? n.splice(r, 1) : L ? n = [e] : n.push(e), "activeKey" in p || O(n), (0, i.Tn)(B) && B(e, n, t);
          },
          expandIcon: "expandIcon" in p ? D : "right" === I ? a().createElement(A.A, null) : a().createElement(_.A, null)
        }
      }, a().createElement("div", y({
        ref: t
      }, (0, h.A)(N, ["activeKey", "defaultActiveKey"]), {
        className: (0, o.A)(U, U + "-" + (k ? "border" : "borderless"), (n = {}, n[U + "-rtl"] = d, n), S),
        style: T
      }), M));
    });
  C.displayName = "Collapse", C.Item = f;
  const O = C;
});
