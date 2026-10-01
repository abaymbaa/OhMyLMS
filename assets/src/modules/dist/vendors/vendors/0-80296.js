// Reconstructed Webpack factory 80296; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => a
  });
  var r = n(27800);
  function a(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != n) {
        var r,
          a,
          i,
          o,
          s = [],
          l = !0,
          c = !1;
        try {
          if (i = (n = n.call(e)).next, 0 === t) {
            if (Object(n) !== n) return;
            l = !1;
          } else for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
        } catch (e) {
          c = !0, a = e;
        } finally {
          try {
            if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return;
          } finally {
            if (c) throw a;
          }
        }
        return s;
      }
    }(e, t) || (0, r.A)(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
});
