// Reconstructed Webpack factory 99166; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => l
  });
  var r = n(41594),
    a = (n(12470), n(2214)),
    o = ["children"],
    i = function (e) {
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
        }(e, o);
      return React.createElement(React.Fragment, null, React.createElement(a.__experimentalSpacer, n, t));
    };
  const l = (0, r.memo)(i);
});
