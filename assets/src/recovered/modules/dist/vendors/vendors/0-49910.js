// Reconstructed Webpack factory 49910; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0, t.unsafeStringify = s;
  for (var r, a = (r = n(37037)) && r.__esModule ? r : {
      default: r
    }, i = [], o = 0; o < 256; ++o) i.push((o + 256).toString(16).slice(1));
  function s(e, t = 0) {
    return (i[e[t + 0]] + i[e[t + 1]] + i[e[t + 2]] + i[e[t + 3]] + "-" + i[e[t + 4]] + i[e[t + 5]] + "-" + i[e[t + 6]] + i[e[t + 7]] + "-" + i[e[t + 8]] + i[e[t + 9]] + "-" + i[e[t + 10]] + i[e[t + 11]] + i[e[t + 12]] + i[e[t + 13]] + i[e[t + 14]] + i[e[t + 15]]).toLowerCase();
  }
  t.default = function (e, t = 0) {
    var n = s(e, t);
    if (!(0, a.default)(n)) throw TypeError("Stringified UUID is invalid");
    return n;
  };
});
