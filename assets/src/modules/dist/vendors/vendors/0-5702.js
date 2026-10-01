// Reconstructed Webpack factory 5702; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    S: () => s
  });
  var r = n(41594);
  function a(e, t) {
    return "function" == typeof e ? e(t) : e && (e.current = t), e;
  }
  var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
    o = new WeakMap();
  function s(e, t) {
    var n,
      s,
      l,
      c = (n = t || null, s = function (t) {
        return e.forEach(function (e) {
          return a(e, t);
        });
      }, (l = (0, r.useState)(function () {
        return {
          value: n,
          callback: s,
          facade: {
            get current() {
              return l.value;
            },
            set current(e) {
              var t = l.value;
              t !== e && (l.value = e, l.callback(e, t));
            }
          }
        };
      })[0]).callback = s, l.facade);
    return i(function () {
      var t = o.get(c);
      if (t) {
        var n = new Set(t),
          r = new Set(e),
          i = c.current;
        n.forEach(function (e) {
          r.has(e) || a(e, null);
        }), r.forEach(function (e) {
          n.has(e) || a(e, i);
        });
      }
      o.set(c, e);
    }, [e]), c;
  }
});
