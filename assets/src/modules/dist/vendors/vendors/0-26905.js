// Reconstructed Webpack factory 26905; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => p
  });
  var r = n(58168),
    a = n(64467),
    i = n(41594),
    o = n.n(i),
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
        (0, a.A)(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function u(e, t) {
    var n = (0, i.useContext)(s.V).prefixCls,
      a = void 0 === n ? "arco" : n,
      l = e.spin,
      u = e.className,
      d = c(c({
        "aria-hidden": !0,
        focusable: !1,
        ref: t
      }, e), {}, {
        className: "".concat(u ? u + " " : "").concat(a, "-icon ").concat(a, "-icon-caret-right")
      });
    return l && (d.className = "".concat(d.className, " ").concat(a, "-icon-loading")), delete d.spin, delete d.isIcon, o().createElement("svg", (0, r.A)({
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "4",
      viewBox: "0 0 48 48"
    }, d), o().createElement("path", {
      fill: "currentColor",
      stroke: "none",
      d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z"
    }));
  }
  var d = o().forwardRef(u);
  d.defaultProps = {
    isIcon: !0
  }, d.displayName = "IconCaretRight";
  const p = d;
});
