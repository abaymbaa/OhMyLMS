// Reconstructed Webpack factory 35663; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => g
  });
  var r = n(41594),
    a = n.n(r),
    i = n(58168),
    o = n(64467),
    s = n(1353);
  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(n), !0).forEach(function (t) {
        (0, o.A)(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function u(e, t) {
    var n = (0, r.useContext)(s.V).prefixCls,
      o = void 0 === n ? "arco" : n,
      l = e.spin,
      u = e.className,
      d = c(c({
        "aria-hidden": !0,
        focusable: !1,
        ref: t
      }, e), {}, {
        className: "".concat(u ? u + " " : "").concat(o, "-icon ").concat(o, "-icon-empty")
      });
    return l && (d.className = "".concat(d.className, " ").concat(o, "-icon-loading")), delete d.spin, delete d.isIcon, a().createElement("svg", (0, i.A)({
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "4",
      viewBox: "0 0 48 48"
    }, d), a().createElement("path", {
      d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
    }));
  }
  var d = a().forwardRef(u);
  d.defaultProps = {
    isIcon: !0
  }, d.displayName = "IconEmpty";
  const p = d;
  var f = n(83651),
    h = n(43538),
    _ = n(5337),
    m = function () {
      return m = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, m.apply(this, arguments);
    },
    A = (0, r.forwardRef)(function (e, t) {
      var n = (0, r.useContext)(h.Q),
        i = n.getPrefixCls,
        o = n.locale,
        s = n.componentConfig,
        l = (0, _.A)(e, {}, null == s ? void 0 : s.Empty),
        c = l.style,
        u = l.className,
        d = l.description,
        A = l.icon,
        g = l.imgSrc,
        y = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
          }
          return n;
        }(l, ["style", "className", "description", "icon", "imgSrc"]),
        v = i("empty"),
        E = (0, f.A)(v, u),
        b = o.Empty.noData,
        w = "string" == typeof d ? d : "empty";
      return a().createElement("div", m({
        ref: t,
        className: E,
        style: c
      }, y), a().createElement("div", {
        className: v + "-wrapper"
      }, a().createElement("div", {
        className: v + "-image"
      }, g ? a().createElement("img", {
        alt: w,
        src: g
      }) : A || a().createElement(p, null)), a().createElement("div", {
        className: v + "-description"
      }, d || b)));
    });
  A.displayName = "Empty";
  const g = (0, r.memo)(A);
});
