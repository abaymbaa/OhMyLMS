// Reconstructed Webpack factory 25946; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => i
  });
  var r = n(2214),
    a = ["className", "loading", "isDefaultStyle", "variant"];
  function o() {
    return o = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, o.apply(null, arguments);
  }
  const i = function (e) {
    var t = e.className,
      n = void 0 === t ? "" : t,
      i = e.loading,
      l = void 0 !== i && i,
      c = e.isDefaultStyle,
      u = void 0 !== c && c,
      s = e.variant,
      d = void 0 === s ? "primary" : s,
      m = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
              if (-1 !== t.indexOf(r)) continue;
              n[r] = e[r];
            }
            return n;
          }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        }
        return a;
      }(e, a);
    return React.createElement("div", {
      className: "omlms-switcher-wrapper omlms-switch-variant-".concat(d, " ").concat(l ? "omlms-is-loading-toggle" : "", " ").concat(u ? "omlms-wp-default-switch-wrapper" : "", " ").concat(n),
      style: {
        position: "relative",
        display: "inline-block"
      }
    }, React.createElement(r.ToggleControl, o({
      className: "omlms-switcher ".concat(u ? "omlms-wp-default-switch" : "", " omlms-switch-variant-").concat(d),
      __nextHasNoMarginBottom: !0,
      disabled: l
    }, m)), l && React.createElement("div", {
      className: "omlms-switcher-spinner"
    }, React.createElement(r.Spinner, null)));
  };
});
