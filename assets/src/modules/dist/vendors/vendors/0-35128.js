// Reconstructed Webpack factory 35128; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => i
  });
  var r = n(41594),
    a = n(9973);
  function i(e) {
    return (0, r.useCallback)(function (t) {
      return {
        onKeyDown: function (n) {
          var r,
            i,
            o,
            s,
            l,
            c,
            u = n.keyCode || n.which;
          u === a.xy.code && (null === (r = t.onPressEnter) || void 0 === r || r.call(t, n)), u === a.yd.code && (null === (i = t.onArrowDown) || void 0 === i || i.call(t, n)), u === a.nk.code && (null === (o = t.onArrowLeft) || void 0 === o || o.call(t, n)), u === a.Qp.code && (null === (s = t.onArrowRight) || void 0 === s || s.call(t, n)), u === a.Do.code && (null === (l = t.onArrowUp) || void 0 === l || l.call(t, n)), null === (c = null == e ? void 0 : e.onKeyDown) || void 0 === c || c.call(e, n);
        }
      };
    }, []);
  }
});
