// Reconstructed Webpack factory 66687; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => c
  });
  var r = n(41594),
    a = n.n(r),
    i = n(83651),
    o = n(43538),
    s = function () {
      return s = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, s.apply(this, arguments);
    },
    l = function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var a = 0;
        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
      }
      return n;
    };
  function c(e) {
    var t,
      n = e.children,
      c = e.className,
      u = e.disabled,
      d = e.prefix,
      p = e.size,
      f = void 0 === p ? "default" : p,
      h = l(e, ["children", "className", "disabled", "prefix", "size"]),
      _ = (0, (0, r.useContext)(o.Q).getPrefixCls)("icon-hover");
    return a().createElement("span", s({
      className: (0, i.A)(_, (t = {}, t[d + "-icon-hover"] = d, t[_ + "-size-" + f] = f && "default" !== f, t[_ + "-disabled"] = u, t), c),
      onClick: e.onClick
    }, h), n);
  }
});
