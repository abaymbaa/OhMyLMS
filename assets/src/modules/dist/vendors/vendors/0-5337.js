// Reconstructed Webpack factory 5337; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => o
  });
  var r = n(41594),
    a = n(69626),
    i = function () {
      return i = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }, i.apply(this, arguments);
    };
  function o(e, t, n) {
    var o = e._ignorePropsFromGlobal,
      s = (0, r.useMemo)(function () {
        return i(i({}, t), o ? {} : n);
      }, [t, n, o]);
    return (0, r.useMemo)(function () {
      var t = (0, a.A)(e, ["_ignorePropsFromGlobal"]);
      for (var n in s) void 0 === t[n] && (t[n] = s[n]);
      return t;
    }, [e, s]);
  }
});
