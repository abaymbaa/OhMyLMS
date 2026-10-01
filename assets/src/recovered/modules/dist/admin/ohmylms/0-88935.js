// Reconstructed Webpack factory 88935; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => u
  });
  var r = n(41594),
    a = n(12470),
    o = n(75809),
    i = n(37562),
    l = n(86169),
    c = function (e) {
      var t = e.type,
        n = void 0 === t ? "text" : t,
        r = e.count,
        c = void 0 === r ? 0 : r,
        u = (e.threshold, (0, i.useSelect)(function (e) {
          return e(l.default).getAISettings();
        }, []));
      if (null == u || !u.self) return null;
      var s = function () {
          if ("image" === n) return {
            threshold: 6,
            shouldShow: Number(c) < Number(6),
            message: (0, a.__)("You have ".concat(c, " image request").concat(1 !== c ? "s" : "", " left. Please refill the token."), "ohmylms")
          };
          var e = function (e) {
            if (e >= 1e3) {
              var t = e / 1e3;
              return "".concat(t % 1 == 0 ? t : t.toFixed(1), "k");
            }
            return e.toString();
          }(c);
          return {
            threshold: 5e3,
            shouldShow: c < 5e3,
            message: (0, a.__)("You have ".concat(e, " text token").concat(1 !== c ? "s" : "", " left. Please refill the token."), "ohmylms")
          };
        }(),
        d = s.shouldShow,
        m = s.message;
      return d ? React.createElement("div", {
        className: "ohmylms-ai-warning"
      }, React.createElement("span", null, React.createElement(o.A, null)), React.createElement("span", {
        className: "ohmylms-ai-warning-message"
      }, m)) : null;
    };
  const u = (0, r.memo)(c);
});
