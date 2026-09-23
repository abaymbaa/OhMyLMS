// Reconstructed Webpack factory 9322; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => s
  });
  var r = n(41594),
    a = n(85075),
    i = n(21306),
    o = function (e, t) {
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
    };
  function s(e, t) {
    var n = t || {},
      s = n.defaultValue,
      l = n.value,
      c = (0, r.useRef)(!0),
      u = (0, i.A)(l),
      d = o((0, r.useState)((0, a.b0)(l) ? (0, a.b0)(s) ? e : s : l), 2),
      p = d[0],
      f = d[1];
    return (0, r.useEffect)(function () {
      c.current ? c.current = !1 : void 0 === l && u !== l && f(l);
    }, [l]), [(0, a.b0)(l) ? p : l, f, p];
  }
});
