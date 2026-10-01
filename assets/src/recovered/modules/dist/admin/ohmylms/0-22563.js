// Reconstructed Webpack factory 22563; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => o
  });
  var r = n(2214),
    a = ["children"];
  const o = function (e) {
    var t = e.children,
      n = function (e, t) {
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
    return React.createElement(r.Popover, n, t);
  };
});
