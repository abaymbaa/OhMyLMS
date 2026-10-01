// Reconstructed Webpack factory 27268; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => c
  });
  var r = n(91386),
    a = n(2214),
    o = n(12470),
    i = ["label", "state", "removable", "onRemove", "icon", "showIcon", "className", "children"];
  function l() {
    return l = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, l.apply(null, arguments);
  }
  const c = (0, r.memo)(function (e) {
    var t = e.label,
      n = (e.state, e.removable),
      r = void 0 !== n && n,
      c = e.onRemove,
      u = void 0 === c ? function () {} : c,
      s = e.icon,
      d = void 0 === s ? null : s,
      m = e.showIcon,
      p = void 0 !== m && m,
      f = e.className,
      v = void 0 === f ? "" : f,
      g = e.children,
      h = function (e, t) {
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
      }(e, i);
    return React.createElement("span", l({
      className: "ohmylms-tag ".concat(v)
    }, h), p || d && React.createElement(a.Icon, {
      className: "ohmylms-tag-icon"
    }), React.createElement("span", {
      className: "ohmylms-tag-label"
    }, t || g), r && React.createElement(a.Button, {
      className: "ohmylms-tag-remove",
      onClick: u,
      label: (0, o.__)("Remove tag")
    }, "×"));
  });
});
