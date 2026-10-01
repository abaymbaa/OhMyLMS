// Reconstructed Webpack factory 4315; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => l
  });
  var r = n(2214),
    a = n(41594),
    o = ["children"];
  function i() {
    return i = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, i.apply(null, arguments);
  }
  const l = (0, a.forwardRef)(function (e, t) {
    var n = e.children,
      a = function (e, t) {
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
      }(e, o);
    return React.createElement(r.Flex, i({}, a, {
      ref: t
    }), n);
  });
});
