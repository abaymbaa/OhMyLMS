// Reconstructed Webpack factory 21077; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.useData = void 0;
  var r = n(41594);
  t.useData = function () {
    var e = (0, r.useState)(null),
      t = e[0],
      n = e[1],
      a = (0, r.useState)(-1),
      o = a[0],
      i = a[1],
      l = (0, r.useCallback)(function (e) {
        e.node && n(e.node), i(e.pos);
      }, [i, n]);
    return {
      currentNode: t,
      currentNodePos: o,
      setCurrentNode: n,
      setCurrentNodePos: i,
      handleNodeChange: l
    };
  };
});
