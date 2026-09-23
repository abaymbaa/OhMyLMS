// Reconstructed Webpack factory 6425; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => i
  });
  var r = n(2214),
    a = ["children", "title", "text", "placement"];
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
    var t = e.children,
      n = e.title,
      i = e.text,
      l = e.placement,
      c = void 0 === l ? "top" : l,
      u = function (e, t) {
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
    return React.createElement(r.Tooltip, o({
      text: i || n
    }, u, {
      placement: c
    }), React.createElement("span", {
      style: {
        lineHeight: 0
      },
      className: "tooltip-icon"
    }, t));
  };
});
